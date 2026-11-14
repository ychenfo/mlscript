const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const listPairFoldl$accessorSymbol = globalThis.Symbol("listPairFoldl");
const labelSame$accessorSymbol = globalThis.Symbol("labelSame");
const compareLambda$accessorSymbol = globalThis.Symbol("compareLambda");
const sameCall$accessorSymbol = globalThis.Symbol("sameCall");
const bindCompare$accessorSymbol = globalThis.Symbol("bindCompare");
const setNext$accessorSymbol = globalThis.Symbol("setNext");
const setLeft$accessorSymbol = globalThis.Symbol("setLeft");
const setLinkAll$accessorSymbol = globalThis.Symbol("setLinkAll");
const storeMapInsertWith$accessorSymbol = globalThis.Symbol("storeMapInsertWith");
const storeMapNext$accessorSymbol = globalThis.Symbol("storeMapNext");
const storeMapLeft$accessorSymbol = globalThis.Symbol("storeMapLeft");
const storeMapLinkAll$accessorSymbol = globalThis.Symbol("storeMapLinkAll");
const alloc$accessorSymbol = globalThis.Symbol("alloc");
const listMap$tailrec$accessorSymbol = globalThis.Symbol("listMap$tailrec");
const listExists$tailrec$accessorSymbol = globalThis.Symbol("listExists$tailrec");
const listPairAllEq$tailrec$accessorSymbol = globalThis.Symbol("listPairAllEq$tailrec");
let incr, foldf, ins, foldf1, incr1, kcfa1, lambda, lambda1, lambda$, lambda$1, main_explore_absNext$absNext, main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1_stringCompare$stringCompare, main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$find1, main_explore_absNext_atomEval_eval$_eval$eval, main_explore_absNext_atomEval_eval$$eval$, main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1_stringCompare$stringCompare1, main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$find11, main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda_varMapInsert_ins$ins, main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda$lambda, main_explore_absNext_apply$_apply_benvExtend1_lambda$$lambda$, main_explore_absNext_apply$_apply$apply, main_explore_absNext_apply$$apply$, main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion$setUnion, main_explore_absNext_apply$_apply_storeUpdate1_lambda$$lambda$, main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft, main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft1, main_explore_member_lambda$_lambda$lambda, main_explore_member_lambda$$lambda$, main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext_storeMapLeft$storeMapLeft, main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext_storeMapLeft$storeMapLeft1, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare$setCompare, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft1, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext_setLeft$setLeft, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext_setLeft$setLeft1, main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft, main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft1, main_summarize_lambda$_lambda$lambda, main_summarize_lambda$$lambda$, main_summarize_lambda$_lambda_storeJoin_storeMapUnionWith_union$_union_storeMapIns$storeMapIns, main_summarize_lambda$_lambda_storeJoin_setUnion$setUnion, main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft, main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft1, main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp_compareExp_compareLambda_intCompare$intCompare, main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp_compareExp$compareExp, main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate$monoStoreUpdate, main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$$lambda$, main_monovariantStore_lambda$_lambda$lambda, main_monovariantStore_lambda$$lambda$, main_monovariantStore_lambda$_lambda_monoValues_lambda$_lambda$lambda, main_monovariantStore_lambda$_lambda_monoValues_lambda$$lambda$, main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt, main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_Some, main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_EQUAL, main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_GREATER, main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_LESS, main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt, main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_Some, main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt1, main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_Some1, main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_EQUAL1, main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_GREATER1, main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_LESS1, main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt1, main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_Some1, main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2, main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt, main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons, main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1, main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1, main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion$scrut_tup2, main_explore_append$l1_Cons, main_explore_append$l1_Nil, main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp$p1_tup2, main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt, main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons, main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt1, main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons1, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp$p1_tup2, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt1, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons1, main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2, main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt, main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons, main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1, main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1, main_explore$todo_Cons, main_explore$todo_Nil, main_summarize_lambda$_lambda_storeJoin_storeMapUnionWith_storeMapWrap$scrut_tup2, main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2, main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt, main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons, main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1, main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1, main_summarize_lambda$_lambda_storeJoin_setUnion$scrut_tup2, main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_EQUAL, main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_GREATER, main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_LESS, main_monovariantStore_lambda$_lambda_monoStoreUpdate1_listFoldl$l_Cons, main_monovariantStore_lambda$_lambda_monoStoreUpdate1_listFoldl$l_Nil, main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_LESS$worker, main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker, main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker1, main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker, main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker, main_explore$todo_Cons$worker, main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker, main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker1, main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker, main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons$worker, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons$worker1, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt$worker, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker1, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker, main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp$p1_tup2$worker, main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons$worker, main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons$worker1, main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt$worker, main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp$p1_tup2$worker, main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker, main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker1, main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker, main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker, main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt$worker, main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt$worker, main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt$worker1, main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt$worker1;
main_explore_absNext$absNext = function main_explore_absNext$absNext(state) {
  let arg$State$0$, arg$State$1$, arg$State$2$, arg$CALL$1$, arg$CALL$2$;
  if (state instanceof kcfa1.State.class) {
    arg$State$0$ = state.call;
    arg$State$1$ = state.benv;
    arg$State$2$ = state.store;
    if (arg$State$0$ instanceof kcfa1.CALL.class) {
      let inlinedVal, f, inlinedVal1, f1, init, arg$SET$1$, arg$CALL$0$;
      arg$CALL$1$ = arg$State$0$.f;
      arg$CALL$2$ = arg$State$0$.args;
      if (arg$State$0$ instanceof kcfa1.CALL.class) {
        let kcfa2, inlinedVal2, arg$LAMBDA$0$, arg$VAR$1$, tmp;
        arg$CALL$0$ = arg$State$0$.label;
        inlinedVal = kcfa1.Cons(arg$CALL$0$, kcfa1.Nil);
        kcfa2 = kcfa1;
        if (arg$CALL$1$ instanceof kcfa2.VAR.class) {
          let inlinedVal3, arg$SmMAP$1$, inlinedVal4, arg$VmMAP$1$;
          arg$VAR$1$ = arg$CALL$1$.x;
          if (arg$State$1$ instanceof kcfa1.VmMAP.class) {
            arg$VmMAP$1$ = arg$State$1$.tree;
            inlinedVal4 = main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$find1(kcfa1, arg$VAR$1$, arg$VmMAP$1$);
            inlinedVal3 = inlinedVal4(undefined, undefined);
            if (arg$State$2$ instanceof kcfa1.SmMAP.class) {
              let kcfa3, k, t, inlinedVal5;
              arg$SmMAP$1$ = arg$State$2$.tree;
              kcfa3 = kcfa1;
              k = inlinedVal3;
              t = arg$SmMAP$1$;
              inlinedLbl: {
                loopLabel: while (true) {
                  let scrut, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$;
                  if (t instanceof kcfa3.SmE.class) {
                    inlinedVal5 = main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt();
                    break inlinedLbl
                  } else if (t instanceof kcfa3.SmT.class) {
                    arg$SmT$1$ = t.left;
                    arg$SmT$2$ = t.key;
                    arg$SmT$3$ = t.value;
                    arg$SmT$4$ = t.right;
                    scrut = kcfa3[bindCompare$accessorSymbol](k, arg$SmT$2$);
                    if (scrut instanceof kcfa3.LESS.class) {
                      t = arg$SmT$1$;
                      continue loopLabel
                    } else if (scrut instanceof kcfa3.EQUAL.class) {
                      inlinedVal5 = main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_Some(arg$SmT$3$);
                      break inlinedLbl
                    } else if (scrut instanceof kcfa3.GREATER.class) {
                      t = arg$SmT$4$;
                      continue loopLabel
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
              }
              inlinedVal2 = inlinedVal5(undefined, undefined);
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else if (arg$CALL$1$ instanceof kcfa2.LAMBDA.class) {
          let tmp1;
          arg$LAMBDA$0$ = arg$CALL$1$.lam;
          tmp = kcfa1.Clos(arg$LAMBDA$0$, arg$State$1$);
          tmp1 = kcfa1.SetT(kcfa1.SetB, kcfa1.SetE, tmp, kcfa1.SetE);
          inlinedVal2 = kcfa1.SET(1, tmp1);
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        f = main_explore_absNext_atomEval_eval$$eval$(kcfa1, arg$State$1$, arg$State$2$);
        inlinedVal1 = kcfa1[listMap$tailrec$accessorSymbol](f, arg$CALL$2$);
        f1 = main_explore_absNext_apply$$apply$(kcfa1, arg$State$2$, inlinedVal, inlinedVal1);
        init = main_explore_append$l1_Nil();
        if (inlinedVal2 instanceof kcfa1.SET.class) {
          arg$SET$1$ = inlinedVal2.tree;
          return foldf(kcfa1, f1, arg$SET$1$, init)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    return main_explore_append$l1_Nil();
  }
  return main_explore_append$l1_Nil();
};
main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1_stringCompare$stringCompare = function main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1_stringCompare$stringCompare(s1, s2) {
  let scrut, scrut1;
  scrut = s1 < s2;
  if (scrut === true) {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_LESS()
  }
  scrut1 = s2 < s1;
  if (scrut1 === true) {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_GREATER()
  }
  return main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_EQUAL();
};
main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$find1 = function main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$find1(kcfa2, k, t) {
  let scrut, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$;
  if (t instanceof kcfa2.VmE.class) {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt()
  } else if (t instanceof kcfa2.VmT.class) {
    arg$VmT$1$ = t.left;
    arg$VmT$2$ = t.key;
    arg$VmT$3$ = t.value;
    arg$VmT$4$ = t.right;
    scrut = main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1_stringCompare$stringCompare(k, arg$VmT$2$);
    return scrut(kcfa2, arg$VmT$3$, k, arg$VmT$4$, arg$VmT$1$)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_explore_absNext_atomEval_eval$_eval$eval = function main_explore_absNext_atomEval_eval$_eval$eval(kcfa2, benv, store, e) {
  let arg$LAMBDA$0$, arg$VAR$1$, tmp;
  if (e instanceof kcfa2.VAR.class) {
    let inlinedVal, arg$SmMAP$1$, inlinedVal1, arg$VmMAP$1$;
    arg$VAR$1$ = e.x;
    if (benv instanceof kcfa1.VmMAP.class) {
      arg$VmMAP$1$ = benv.tree;
      inlinedVal1 = main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$find11(kcfa1, arg$VAR$1$, arg$VmMAP$1$);
      inlinedVal = inlinedVal1(undefined, undefined);
      if (store instanceof kcfa1.SmMAP.class) {
        let kcfa3, k, t, inlinedVal2;
        arg$SmMAP$1$ = store.tree;
        kcfa3 = kcfa1;
        k = inlinedVal;
        t = arg$SmMAP$1$;
        inlinedLbl: {
          loopLabel: while (true) {
            let scrut, arg$SmT$1$, arg$SmT$2$, arg$SmT$3$, arg$SmT$4$;
            if (t instanceof kcfa3.SmE.class) {
              inlinedVal2 = main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt1();
              break inlinedLbl
            } else if (t instanceof kcfa3.SmT.class) {
              arg$SmT$1$ = t.left;
              arg$SmT$2$ = t.key;
              arg$SmT$3$ = t.value;
              arg$SmT$4$ = t.right;
              scrut = kcfa3[bindCompare$accessorSymbol](k, arg$SmT$2$);
              if (scrut instanceof kcfa3.LESS.class) {
                t = arg$SmT$1$;
                continue loopLabel
              } else if (scrut instanceof kcfa3.EQUAL.class) {
                inlinedVal2 = main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_Some1(arg$SmT$3$);
                break inlinedLbl
              } else if (scrut instanceof kcfa3.GREATER.class) {
                t = arg$SmT$4$;
                continue loopLabel
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        return inlinedVal2(undefined, undefined)
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
};
main_explore_absNext_atomEval_eval$$eval$ = function main_explore_absNext_atomEval_eval$$eval$(kcfa2, benv, store) {
  return (e) => {
    return main_explore_absNext_atomEval_eval$_eval$eval(kcfa2, benv, store, e)
  }
};
main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1_stringCompare$stringCompare1 = function main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1_stringCompare$stringCompare(s1, s2) {
  let scrut, scrut1;
  scrut = s1 < s2;
  if (scrut === true) {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_LESS1()
  }
  scrut1 = s2 < s1;
  if (scrut1 === true) {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_GREATER1()
  }
  return main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_EQUAL1();
};
main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$find11 = function main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$find1(kcfa2, k, t) {
  let scrut, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$;
  if (t instanceof kcfa2.VmE.class) {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt1()
  } else if (t instanceof kcfa2.VmT.class) {
    arg$VmT$1$ = t.left;
    arg$VmT$2$ = t.key;
    arg$VmT$3$ = t.value;
    arg$VmT$4$ = t.right;
    scrut = main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1_stringCompare$stringCompare1(k, arg$VmT$2$);
    return scrut(kcfa2, arg$VmT$3$, k, arg$VmT$4$, arg$VmT$1$)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda_varMapInsert_ins$ins = function main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda_varMapInsert_ins$ins(kcfa2, xk, x, nItems, nItems1, s) {
  let arg$VmT$0$, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$, tmp;
  if (s instanceof kcfa2.VmE.class) {
    tmp = nItems + 1;
    nItems1.value = tmp;
    return kcfa2.VmT(kcfa2.VmR, kcfa2.VmE, xk, x, kcfa2.VmE)
  } else if (s instanceof kcfa2.VmT.class) {
    let scrut, scrut1;
    arg$VmT$0$ = s.color;
    arg$VmT$1$ = s.left;
    arg$VmT$2$ = s.key;
    arg$VmT$3$ = s.value;
    arg$VmT$4$ = s.right;
    scrut = xk < arg$VmT$2$;
    if (scrut === true) {
      let fv_kcfa, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$;
      fv_kcfa = kcfa2;
      if (arg$VmT$1$ instanceof fv_kcfa.VmT.class) {
        fv_arg$VmT$0$ = arg$VmT$1$.color;
        fv_arg$VmT$1$ = arg$VmT$1$.left;
        fv_arg$VmT$2$ = arg$VmT$1$.key;
        fv_arg$VmT$3$ = arg$VmT$1$.value;
        fv_arg$VmT$4$ = arg$VmT$1$.right;
        if (fv_arg$VmT$0$ instanceof fv_kcfa.VmR.class) {
          let scrut2, scrut3;
          scrut2 = xk < fv_arg$VmT$2$;
          if (scrut2 === true) {
            let fv_c1, fv_kcfa1, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_tmp, fv_tmp1, fv_tmp2, inlinedVal;
            fv_kcfa1 = kcfa2;
            inlinedLbl: {
              fv_c1 = main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda_varMapInsert_ins$ins(kcfa2, xk, x, nItems, nItems1, fv_arg$VmT$1$);
              if (fv_c1 instanceof fv_kcfa1.VmT.class) {
                fv_arg$VmT$0$1 = fv_c1.color;
                fv_arg$VmT$1$1 = fv_c1.left;
                fv_arg$VmT$2$1 = fv_c1.key;
                fv_arg$VmT$3$1 = fv_c1.value;
                fv_arg$VmT$4$1 = fv_c1.right;
                if (fv_arg$VmT$0$1 instanceof fv_kcfa1.VmR.class) {
                  fv_tmp = kcfa2.VmT(kcfa2.VmB, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1);
                  fv_tmp1 = kcfa2.VmT(kcfa2.VmB, fv_arg$VmT$4$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
                  inlinedVal = kcfa2.VmT(kcfa2.VmR, fv_tmp, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_tmp1);
                  break inlinedLbl
                }
              }
              fv_tmp2 = kcfa2.VmT(kcfa2.VmR, fv_c1, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$);
              inlinedVal = kcfa2.VmT(kcfa2.VmB, fv_tmp2, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
            }
            return inlinedVal
          }
          scrut3 = fv_arg$VmT$2$ < xk;
          if (scrut3 === true) {
            let fv_kcfa1, fv_d1, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_tmp, fv_tmp1, fv_tmp2, inlinedVal;
            fv_kcfa1 = kcfa2;
            inlinedLbl: {
              fv_d1 = main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda_varMapInsert_ins$ins(kcfa2, xk, x, nItems, nItems1, fv_arg$VmT$4$);
              if (fv_d1 instanceof fv_kcfa1.VmT.class) {
                fv_arg$VmT$0$1 = fv_d1.color;
                fv_arg$VmT$1$1 = fv_d1.left;
                fv_arg$VmT$2$1 = fv_d1.key;
                fv_arg$VmT$3$1 = fv_d1.value;
                fv_arg$VmT$4$1 = fv_d1.right;
                if (fv_arg$VmT$0$1 instanceof fv_kcfa1.VmR.class) {
                  fv_tmp = kcfa2.VmT(kcfa2.VmB, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$1$1);
                  fv_tmp1 = kcfa2.VmT(kcfa2.VmB, fv_arg$VmT$4$1, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
                  inlinedVal = kcfa2.VmT(kcfa2.VmR, fv_tmp, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_tmp1);
                  break inlinedLbl
                }
              }
              fv_tmp2 = kcfa2.VmT(kcfa2.VmR, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_d1);
              inlinedVal = kcfa2.VmT(kcfa2.VmB, fv_tmp2, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
            }
            return inlinedVal
          }
          {
            let fv_tmp;
            fv_tmp = kcfa2.VmT(kcfa2.VmR, fv_arg$VmT$1$, xk, x, fv_arg$VmT$4$);
            return kcfa2.VmT(arg$VmT$0$, fv_tmp, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
          }
        }
        {
          let fv_tmp;
          fv_tmp = main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda_varMapInsert_ins$ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$1$);
          return kcfa2.VmT(kcfa2.VmB, fv_tmp, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
        }
      }
      {
        let fv_tmp;
        fv_tmp = main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda_varMapInsert_ins$ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$1$);
        return kcfa2.VmT(kcfa2.VmB, fv_tmp, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
      }
    }
    scrut1 = arg$VmT$2$ < xk;
    if (scrut1 === true) {
      let fv_kcfa, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$;
      fv_kcfa = kcfa2;
      if (arg$VmT$4$ instanceof fv_kcfa.VmT.class) {
        fv_arg$VmT$0$ = arg$VmT$4$.color;
        fv_arg$VmT$1$ = arg$VmT$4$.left;
        fv_arg$VmT$2$ = arg$VmT$4$.key;
        fv_arg$VmT$3$ = arg$VmT$4$.value;
        fv_arg$VmT$4$ = arg$VmT$4$.right;
        if (fv_arg$VmT$0$ instanceof fv_kcfa.VmR.class) {
          let scrut2, scrut3;
          scrut2 = xk < fv_arg$VmT$2$;
          if (scrut2 === true) {
            let fv_c1, fv_kcfa1, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_tmp, fv_tmp1, fv_tmp2, inlinedVal;
            fv_kcfa1 = kcfa2;
            inlinedLbl: {
              fv_c1 = main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda_varMapInsert_ins$ins(kcfa2, xk, x, nItems, nItems1, fv_arg$VmT$1$);
              if (fv_c1 instanceof fv_kcfa1.VmT.class) {
                fv_arg$VmT$0$1 = fv_c1.color;
                fv_arg$VmT$1$1 = fv_c1.left;
                fv_arg$VmT$2$1 = fv_c1.key;
                fv_arg$VmT$3$1 = fv_c1.value;
                fv_arg$VmT$4$1 = fv_c1.right;
                if (fv_arg$VmT$0$1 instanceof fv_kcfa1.VmR.class) {
                  fv_tmp = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, fv_arg$VmT$1$1);
                  fv_tmp1 = kcfa2.VmT(kcfa2.VmB, fv_arg$VmT$4$1, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$);
                  inlinedVal = kcfa2.VmT(kcfa2.VmR, fv_tmp, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_tmp1);
                  break inlinedLbl
                }
              }
              fv_tmp2 = kcfa2.VmT(kcfa2.VmR, fv_c1, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$);
              inlinedVal = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, fv_tmp2);
            }
            return inlinedVal
          }
          scrut3 = fv_arg$VmT$2$ < xk;
          if (scrut3 === true) {
            let fv_kcfa1, fv_d1, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_tmp, fv_tmp1, fv_tmp2, inlinedVal;
            fv_kcfa1 = kcfa2;
            inlinedLbl: {
              fv_d1 = main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda_varMapInsert_ins$ins(kcfa2, xk, x, nItems, nItems1, fv_arg$VmT$4$);
              if (fv_d1 instanceof fv_kcfa1.VmT.class) {
                fv_arg$VmT$0$1 = fv_d1.color;
                fv_arg$VmT$1$1 = fv_d1.left;
                fv_arg$VmT$2$1 = fv_d1.key;
                fv_arg$VmT$3$1 = fv_d1.value;
                fv_arg$VmT$4$1 = fv_d1.right;
                if (fv_arg$VmT$0$1 instanceof fv_kcfa1.VmR.class) {
                  fv_tmp = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, fv_arg$VmT$1$);
                  fv_tmp1 = kcfa2.VmT(kcfa2.VmB, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1);
                  inlinedVal = kcfa2.VmT(kcfa2.VmR, fv_tmp, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_tmp1);
                  break inlinedLbl
                }
              }
              fv_tmp2 = kcfa2.VmT(kcfa2.VmR, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_d1);
              inlinedVal = kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, fv_tmp2);
            }
            return inlinedVal
          }
          {
            let fv_tmp;
            fv_tmp = kcfa2.VmT(kcfa2.VmR, fv_arg$VmT$1$, xk, x, fv_arg$VmT$4$);
            return kcfa2.VmT(arg$VmT$0$, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, fv_tmp);
          }
        }
        {
          let fv_tmp;
          fv_tmp = main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda_varMapInsert_ins$ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$4$);
          return kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, fv_tmp);
        }
      }
      {
        let fv_tmp;
        fv_tmp = main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda_varMapInsert_ins$ins(kcfa2, xk, x, nItems, nItems1, arg$VmT$4$);
        return kcfa2.VmT(kcfa2.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, fv_tmp);
      }
    }
    return kcfa2.VmT(arg$VmT$0$, arg$VmT$1$, xk, x, arg$VmT$4$);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda$lambda = function main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda$lambda(kcfa2, x, adr, benv) {
  let nItems1, scrut, arg$VmMAP$0$, arg$VmMAP$1$, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$, tmp;
  if (benv instanceof kcfa1.VmMAP.class) {
    arg$VmMAP$0$ = benv.nItems;
    arg$VmMAP$1$ = benv.tree;
    nItems1 = new kcfa1.Ref.class(arg$VmMAP$0$);
    scrut = main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda_varMapInsert_ins$ins(kcfa1, x, adr, arg$VmMAP$0$, nItems1, arg$VmMAP$1$);
    if (scrut instanceof kcfa1.VmT.class) {
      arg$VmT$1$ = scrut.left;
      arg$VmT$2$ = scrut.key;
      arg$VmT$3$ = scrut.value;
      arg$VmT$4$ = scrut.right;
      tmp = kcfa1.VmT(kcfa1.VmB, arg$VmT$1$, arg$VmT$2$, arg$VmT$3$, arg$VmT$4$);
      return kcfa1.VmMAP(nItems1.value, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_explore_absNext_apply$_apply_benvExtend1_lambda$$lambda$ = function main_explore_absNext_apply$_apply_benvExtend1_lambda$$lambda$(kcfa2) {
  return (x, adr, benv) => {
    return main_explore_absNext_apply$_apply_benvExtend1_lambda$_lambda$lambda(kcfa2, x, adr, benv)
  }
};
main_explore_absNext_apply$_apply$apply = function main_explore_absNext_apply$_apply$apply(kcfa2, store, time1, params, clos, states) {
  let arg$Clos$0$, arg$Clos$1$, element2$, element1$, tmp;
  if (clos instanceof kcfa2.Clos.class) {
    arg$Clos$0$ = clos.lam;
    arg$Clos$1$ = clos.benv;
    if (runtime.Tuple.isArrayLike(arg$Clos$0$) && arg$Clos$0$.length === 3) {
      let f, inlinedVal, inlinedVal1, inlinedVal2, lambda$here, lambda$here1;
      runtime.Tuple.get(arg$Clos$0$, 0);
      element1$ = runtime.Tuple.get(arg$Clos$0$, 1);
      element2$ = runtime.Tuple.get(arg$Clos$0$, 2);
      f = kcfa2[alloc$accessorSymbol](time1);
      inlinedVal = kcfa2[listMap$tailrec$accessorSymbol](f, element1$);
      lambda$here1 = main_explore_absNext_apply$_apply_benvExtend1_lambda$$lambda$(kcfa1);
      inlinedVal1 = kcfa1[listPairFoldl$accessorSymbol](lambda$here1)(arg$Clos$1$)(element1$, inlinedVal);
      lambda$here = main_explore_absNext_apply$_apply_storeUpdate1_lambda$$lambda$(kcfa1);
      inlinedVal2 = kcfa1[listPairFoldl$accessorSymbol](lambda$here)(store)(inlinedVal, params);
      tmp = kcfa2.State(element2$, inlinedVal1, inlinedVal2, time1);
      return main_explore_append$l1_Cons(tmp, states)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_explore_absNext_apply$$apply$ = function main_explore_absNext_apply$$apply$(kcfa2, store, time1, params) {
  return (clos, states) => {
    return main_explore_absNext_apply$_apply$apply(kcfa2, store, time1, params, clos, states)
  }
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion$setUnion = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1;
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
          let p1, p2, element1$, element0$, arg$SetT$2$, element1$1, element0$1, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$ = runtime.Tuple.get(p1, 0);
            element1$ = runtime.Tuple.get(p1, 1);
            if (element0$ instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$1 = runtime.Tuple.get(p2, 0);
                runtime.Tuple.get(p2, 1);
                if (element0$1 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion$scrut_tup2(n, result);
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
                      let element1$2, element0$2, arg$SetT$2$2, tmp3, tmp4;
                      if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                        element0$2 = runtime.Tuple.get(p, 0);
                        element1$2 = runtime.Tuple.get(p, 1);
                        if (element0$2 instanceof kcfa3.SetE.class) {
                          inlinedVal3 = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion$scrut_tup2(n1, result1);
                          break inlinedLbl1
                        } else if (element0$2 instanceof kcfa3.SetT.class) {
                          let inlinedVal4;
                          arg$SetT$2$2 = element0$2.item;
                          tmp3 = kcfa3[setNext$accessorSymbol](element1$2);
                          tmp4 = n1 + 1;
                          inlinedVal4 = incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                    let element1$2, element0$2, arg$SetT$2$2, tmp3, tmp4;
                    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                      element0$2 = runtime.Tuple.get(p, 0);
                      element1$2 = runtime.Tuple.get(p, 1);
                      if (element0$2 instanceof kcfa3.SetE.class) {
                        inlinedVal3 = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion$scrut_tup2(n1, result1);
                        break inlinedLbl1
                      } else if (element0$2 instanceof kcfa3.SetT.class) {
                        let inlinedVal4;
                        arg$SetT$2$2 = element0$2.item;
                        tmp3 = kcfa3[setNext$accessorSymbol](element1$2);
                        tmp4 = n1 + 1;
                        inlinedVal4 = incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                let kcfa3, p, n1, result1, inlinedVal3;
                kcfa3 = kcfa2;
                p = p1;
                n1 = n;
                result1 = result;
                inlinedLbl1: {
                  loopLabel1: while (true) {
                    let element1$2, element0$2, arg$SetT$2$2, tmp3, tmp4;
                    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                      element0$2 = runtime.Tuple.get(p, 0);
                      element1$2 = runtime.Tuple.get(p, 1);
                      if (element0$2 instanceof kcfa3.SetE.class) {
                        inlinedVal3 = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion$scrut_tup2(n1, result1);
                        break inlinedLbl1
                      } else if (element0$2 instanceof kcfa3.SetT.class) {
                        let inlinedVal4;
                        arg$SetT$2$2 = element0$2.item;
                        tmp3 = kcfa3[setNext$accessorSymbol](element1$2);
                        tmp4 = n1 + 1;
                        inlinedVal4 = incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                        let cmpRng, kcfa3, cmpRng1, inlinedVal4, arg$VmMAP$1$, arg$VmMAP$1$1, tmp3;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        cmpRng1 = cmpRng;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let t, rest, inlinedVal5, t3, rest1, inlinedVal6, inlinedVal7, inlinedVal8;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            t3 = arg$VmMAP$1$;
                            rest1 = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt();
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let arg$VmT$1$, tmp4;
                                if (t3 instanceof kcfa1.VmE.class) {
                                  inlinedVal6 = rest1;
                                  break inlinedLbl1
                                } else if (t3 instanceof kcfa1.VmT.class) {
                                  arg$VmT$1$ = t3.left;
                                  tmp4 = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(t3, rest1);
                                  t3 = arg$VmT$1$;
                                  rest1 = tmp4;
                                  continue loopLabel1
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            tmp3 = inlinedVal6;
                            t = arg$VmMAP$1$1;
                            rest = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1();
                            inlinedLbl2: {
                              loopLabel2: while (true) {
                                let arg$VmT$1$, tmp4;
                                if (t instanceof kcfa1.VmE.class) {
                                  inlinedVal5 = rest;
                                  break inlinedLbl2
                                } else if (t instanceof kcfa1.VmT.class) {
                                  arg$VmT$1$ = t.left;
                                  tmp4 = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1(t, rest);
                                  t = arg$VmT$1$;
                                  rest = tmp4;
                                  continue loopLabel2
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal7 = tmp3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                            inlinedVal8 = inlinedVal5(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                            inlinedVal4 = inlinedVal7(undefined, undefined, kcfa3, inlinedVal8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, cmpRng1);
                            inlinedVal3 = inlinedVal4;
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
                        t1 = element1$;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$;
                        t2 = element1$1;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$1;
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
            if (element0$ instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$1 = runtime.Tuple.get(p2, 0);
            runtime.Tuple.get(p2, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              let kcfa3, p, n1, result1, inlinedVal3;
              kcfa3 = kcfa2;
              p = p1;
              n1 = n;
              result1 = result;
              inlinedLbl1: {
                loopLabel1: while (true) {
                  let element1$2, element0$2, arg$SetT$2$2, tmp3, tmp4;
                  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                    element0$2 = runtime.Tuple.get(p, 0);
                    element1$2 = runtime.Tuple.get(p, 1);
                    if (element0$2 instanceof kcfa3.SetE.class) {
                      inlinedVal3 = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion$scrut_tup2(n1, result1);
                      break inlinedLbl1
                    } else if (element0$2 instanceof kcfa3.SetT.class) {
                      let inlinedVal4;
                      arg$SetT$2$2 = element0$2.item;
                      tmp3 = kcfa3[setNext$accessorSymbol](element1$2);
                      tmp4 = n1 + 1;
                      inlinedVal4 = incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
      return inlinedVal2(undefined, undefined, undefined, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$$lambda$ = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$$lambda$(kcfa2) {
  return (adr, dv, st) => {
    return kcfa1[storeMapInsertWith$accessorSymbol](main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion$setUnion)(st, adr, dv)
  }
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft(t, rest) {
  loopLabel: while (true) {
    let arg$VmT$1$, tmp;
    if (t instanceof kcfa1.VmE.class) {
      return rest
    } else if (t instanceof kcfa1.VmT.class) {
      arg$VmT$1$ = t.left;
      tmp = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(t, rest);
      t = arg$VmT$1$;
      rest = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft1 = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft(t, rest) {
  loopLabel: while (true) {
    let arg$VmT$1$, tmp;
    if (t instanceof kcfa1.VmE.class) {
      return rest
    } else if (t instanceof kcfa1.VmT.class) {
      arg$VmT$1$ = t.left;
      tmp = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1(t, rest);
      t = arg$VmT$1$;
      rest = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_explore_member_lambda$_lambda$lambda = function main_explore_member_lambda$_lambda$lambda(kcfa2, st, st1) {
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
          let cmpRng, kcfa3, cmpRng1, inlinedVal1, arg$VmMAP$1$, arg$VmMAP$1$1, tmp1;
          cmpRng = kcfa1[bindCompare$accessorSymbol];
          kcfa3 = kcfa1;
          cmpRng1 = cmpRng;
          if (arg$State$1$ instanceof kcfa3.VmMAP.class) {
            arg$VmMAP$1$ = arg$State$1$.tree;
            if (arg$State$1$1 instanceof kcfa3.VmMAP.class) {
              let t, rest, inlinedVal2, t1, rest1, inlinedVal3, inlinedVal4, inlinedVal5;
              arg$VmMAP$1$1 = arg$State$1$1.tree;
              t1 = arg$VmMAP$1$;
              rest1 = main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt();
              inlinedLbl: {
                loopLabel: while (true) {
                  let arg$VmT$1$, tmp2;
                  if (t1 instanceof kcfa1.VmE.class) {
                    inlinedVal3 = rest1;
                    break inlinedLbl
                  } else if (t1 instanceof kcfa1.VmT.class) {
                    arg$VmT$1$ = t1.left;
                    tmp2 = main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(t1, rest1);
                    t1 = arg$VmT$1$;
                    rest1 = tmp2;
                    continue loopLabel
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
              }
              tmp1 = inlinedVal3;
              t = arg$VmMAP$1$1;
              rest = main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1();
              inlinedLbl1: {
                loopLabel1: while (true) {
                  let arg$VmT$1$, tmp2;
                  if (t instanceof kcfa1.VmE.class) {
                    inlinedVal2 = rest;
                    break inlinedLbl1
                  } else if (t instanceof kcfa1.VmT.class) {
                    arg$VmT$1$ = t.left;
                    tmp2 = main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1(t, rest);
                    t = arg$VmT$1$;
                    rest = tmp2;
                    continue loopLabel1
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
              }
              inlinedVal4 = tmp1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
              inlinedVal5 = inlinedVal2(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
              inlinedVal1 = inlinedVal4(undefined, undefined, kcfa3, inlinedVal5, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, cmpRng1);
              if (inlinedVal1 instanceof kcfa1.EQUAL.class) {
                let kcfa4, cmpRng2, inlinedVal6, arg$SmMAP$1$, arg$SmMAP$1$1, tmp2;
                kcfa4 = kcfa1;
                cmpRng2 = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare$setCompare;
                if (arg$State$2$ instanceof kcfa4.SmMAP.class) {
                  arg$SmMAP$1$ = arg$State$2$.tree;
                  if (arg$State$2$1 instanceof kcfa4.SmMAP.class) {
                    let t2, rest2, inlinedVal7, t3, rest3, inlinedVal8, inlinedVal9, inlinedVal10;
                    arg$SmMAP$1$1 = arg$State$2$1.tree;
                    t3 = arg$SmMAP$1$;
                    rest3 = main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt();
                    inlinedLbl2: {
                      loopLabel2: while (true) {
                        let arg$SmT$1$, tmp3;
                        if (t3 instanceof kcfa1.SmE.class) {
                          inlinedVal8 = rest3;
                          break inlinedLbl2
                        } else if (t3 instanceof kcfa1.SmT.class) {
                          arg$SmT$1$ = t3.left;
                          tmp3 = main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons(t3, rest3);
                          t3 = arg$SmT$1$;
                          rest3 = tmp3;
                          continue loopLabel2
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                    }
                    tmp2 = inlinedVal8;
                    t2 = arg$SmMAP$1$1;
                    rest2 = main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt1();
                    inlinedLbl3: {
                      loopLabel3: while (true) {
                        let arg$SmT$1$, tmp3;
                        if (t2 instanceof kcfa1.SmE.class) {
                          inlinedVal7 = rest2;
                          break inlinedLbl3
                        } else if (t2 instanceof kcfa1.SmT.class) {
                          arg$SmT$1$ = t2.left;
                          tmp3 = main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons1(t2, rest2);
                          t2 = arg$SmT$1$;
                          rest2 = tmp3;
                          continue loopLabel3
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                    }
                    inlinedVal9 = tmp2(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                    inlinedVal10 = inlinedVal7(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                    inlinedVal6 = inlinedVal9(undefined, undefined, kcfa4, inlinedVal10, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, cmpRng2);
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
main_explore_member_lambda$$lambda$ = function main_explore_member_lambda$$lambda$(kcfa2, st) {
  return (st1) => {
    return main_explore_member_lambda$_lambda$lambda(kcfa2, st, st1)
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext_storeMapLeft$storeMapLeft = function main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext_storeMapLeft$storeMapLeft(t, rest) {
  loopLabel: while (true) {
    let arg$SmT$1$, tmp;
    if (t instanceof kcfa1.SmE.class) {
      return rest
    } else if (t instanceof kcfa1.SmT.class) {
      arg$SmT$1$ = t.left;
      tmp = main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons(t, rest);
      t = arg$SmT$1$;
      rest = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext_storeMapLeft$storeMapLeft1 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext_storeMapLeft$storeMapLeft(t, rest) {
  loopLabel: while (true) {
    let arg$SmT$1$, tmp;
    if (t instanceof kcfa1.SmE.class) {
      return rest
    } else if (t instanceof kcfa1.SmT.class) {
      arg$SmT$1$ = t.left;
      tmp = main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons1(t, rest);
      t = arg$SmT$1$;
      rest = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare$setCompare = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare$setCompare(set1, set2) {
  let arg$SET$1$, arg$SET$1$1, tmp;
  if (set1 instanceof kcfa1.SET.class) {
    arg$SET$1$ = set1.tree;
    if (set2 instanceof kcfa1.SET.class) {
      let t, rest, inlinedVal, t1, rest1, inlinedVal1, inlinedVal2, inlinedVal3;
      arg$SET$1$1 = set2.tree;
      t1 = arg$SET$1$;
      rest1 = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt();
      inlinedLbl: {
        loopLabel: while (true) {
          let arg$SetT$1$, tmp1;
          if (t1 instanceof kcfa1.SetE.class) {
            inlinedVal1 = rest1;
            break inlinedLbl
          } else if (t1 instanceof kcfa1.SetT.class) {
            arg$SetT$1$ = t1.left;
            tmp1 = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons(t1, rest1);
            t1 = arg$SetT$1$;
            rest1 = tmp1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      tmp = inlinedVal1;
      t = arg$SET$1$1;
      rest = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt1();
      inlinedLbl1: {
        loopLabel1: while (true) {
          let arg$SetT$1$, tmp1;
          if (t instanceof kcfa1.SetE.class) {
            inlinedVal = rest;
            break inlinedLbl1
          } else if (t instanceof kcfa1.SetT.class) {
            arg$SetT$1$ = t.left;
            tmp1 = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons1(t, rest);
            t = arg$SetT$1$;
            rest = tmp1;
            continue loopLabel1
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      inlinedVal2 = tmp(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
      inlinedVal3 = inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
      return inlinedVal2(undefined, undefined, kcfa1, inlinedVal3, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft(t, rest) {
  loopLabel: while (true) {
    let arg$VmT$1$, tmp;
    if (t instanceof kcfa1.VmE.class) {
      return rest
    } else if (t instanceof kcfa1.VmT.class) {
      arg$VmT$1$ = t.left;
      tmp = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(t, rest);
      t = arg$VmT$1$;
      rest = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft1 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft(t, rest) {
  loopLabel: while (true) {
    let arg$VmT$1$, tmp;
    if (t instanceof kcfa1.VmE.class) {
      return rest
    } else if (t instanceof kcfa1.VmT.class) {
      arg$VmT$1$ = t.left;
      tmp = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1(t, rest);
      t = arg$VmT$1$;
      rest = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext_setLeft$setLeft = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext_setLeft$setLeft(t, rest) {
  loopLabel: while (true) {
    let arg$SetT$1$, tmp;
    if (t instanceof kcfa1.SetE.class) {
      return rest
    } else if (t instanceof kcfa1.SetT.class) {
      arg$SetT$1$ = t.left;
      tmp = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons(t, rest);
      t = arg$SetT$1$;
      rest = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext_setLeft$setLeft1 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext_setLeft$setLeft(t, rest) {
  loopLabel: while (true) {
    let arg$SetT$1$, tmp;
    if (t instanceof kcfa1.SetE.class) {
      return rest
    } else if (t instanceof kcfa1.SetT.class) {
      arg$SetT$1$ = t.left;
      tmp = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons1(t, rest);
      t = arg$SetT$1$;
      rest = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft = function main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft(t, rest) {
  loopLabel: while (true) {
    let arg$VmT$1$, tmp;
    if (t instanceof kcfa1.VmE.class) {
      return rest
    } else if (t instanceof kcfa1.VmT.class) {
      arg$VmT$1$ = t.left;
      tmp = main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(t, rest);
      t = arg$VmT$1$;
      rest = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft1 = function main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft(t, rest) {
  loopLabel: while (true) {
    let arg$VmT$1$, tmp;
    if (t instanceof kcfa1.VmE.class) {
      return rest
    } else if (t instanceof kcfa1.VmT.class) {
      arg$VmT$1$ = t.left;
      tmp = main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1(t, rest);
      t = arg$VmT$1$;
      rest = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_summarize_lambda$_lambda$lambda = function main_summarize_lambda$_lambda$lambda(kcfa2, state, sum) {
  let arg$State$2$;
  if (state instanceof kcfa2.State.class) {
    let arg$SmMAP$1$, arg$SmMAP$1$1;
    arg$State$2$ = state.store;
    if (arg$State$2$ instanceof kcfa1.SmMAP.class) {
      arg$SmMAP$1$ = arg$State$2$.tree;
      if (sum instanceof kcfa1.SmMAP.class) {
        let inlinedVal, inlinedVal1, result, kcfa3, mergeFn, t1, t2, n, result1, inlinedVal2;
        arg$SmMAP$1$1 = sum.tree;
        inlinedVal = kcfa1[storeMapLeft$accessorSymbol](arg$SmMAP$1$, kcfa1.Nil);
        inlinedVal1 = kcfa1[storeMapLeft$accessorSymbol](arg$SmMAP$1$1, kcfa1.Nil);
        result = kcfa1.SmZERO;
        kcfa3 = kcfa1;
        mergeFn = main_summarize_lambda$_lambda_storeJoin_setUnion$setUnion;
        t1 = inlinedVal;
        t2 = inlinedVal1;
        n = 0;
        result1 = result;
        inlinedLbl: {
          loopLabel: while (true) {
            let p1, p2, scrut, element1$, element0$, arg$SmT$2$, arg$SmT$3$, element1$1, element0$1, arg$SmT$2$1, arg$SmT$3$1, tmp, tmp1, tmp2, tmp3;
            p1 = kcfa3[storeMapNext$accessorSymbol](t1);
            p2 = kcfa3[storeMapNext$accessorSymbol](t2);
            if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
              element0$ = runtime.Tuple.get(p1, 0);
              element1$ = runtime.Tuple.get(p1, 1);
              if (element0$ instanceof kcfa3.SmE.class) {
                if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                  element0$1 = runtime.Tuple.get(p2, 0);
                  runtime.Tuple.get(p2, 1);
                  if (element0$1 instanceof kcfa3.SmE.class) {
                    inlinedVal2 = main_summarize_lambda$_lambda_storeJoin_storeMapUnionWith_storeMapWrap$scrut_tup2(n, result1);
                    break inlinedLbl
                  }
                  inlinedVal2 = main_summarize_lambda$_lambda_storeJoin_storeMapUnionWith_union$_union_storeMapIns$storeMapIns(p2, n, result1);
                  break inlinedLbl;
                }
                inlinedVal2 = main_summarize_lambda$_lambda_storeJoin_storeMapUnionWith_union$_union_storeMapIns$storeMapIns(p2, n, result1);
                break inlinedLbl;
              }
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$1 = runtime.Tuple.get(p2, 0);
                element1$1 = runtime.Tuple.get(p2, 1);
                if (element0$1 instanceof kcfa3.SmE.class) {
                  let p, n1, result2, inlinedVal3;
                  p = p1;
                  n1 = n;
                  result2 = result1;
                  inlinedLbl1: {
                    loopLabel1: while (true) {
                      let element1$2, element0$2, arg$SmT$2$2, arg$SmT$3$2, tmp4, tmp5;
                      if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                        element0$2 = runtime.Tuple.get(p, 0);
                        element1$2 = runtime.Tuple.get(p, 1);
                        if (element0$2 instanceof kcfa1.SmE.class) {
                          inlinedVal3 = main_summarize_lambda$_lambda_storeJoin_storeMapUnionWith_storeMapWrap$scrut_tup2(n1, result2);
                          break inlinedLbl1
                        } else if (element0$2 instanceof kcfa1.SmT.class) {
                          let inlinedVal4;
                          arg$SmT$2$2 = element0$2.key;
                          arg$SmT$3$2 = element0$2.value;
                          tmp4 = kcfa1[storeMapNext$accessorSymbol](element1$2);
                          tmp5 = n1 + 1;
                          inlinedVal4 = incr1(kcfa1, arg$SmT$2$2, arg$SmT$3$2, kcfa1.SmE, result2);
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
                      inlinedVal3 = incr1(kcfa3, arg$SmT$2$, arg$SmT$3$, kcfa3.SmE, result1);
                      t1 = element1$;
                      n = tmp;
                      result1 = inlinedVal3;
                      continue loopLabel
                    } else if (scrut instanceof kcfa3.EQUAL.class) {
                      let inlinedVal3;
                      tmp1 = n + 1;
                      tmp2 = runtime.safeCall(mergeFn(arg$SmT$3$, arg$SmT$3$1));
                      inlinedVal3 = incr1(kcfa3, arg$SmT$2$, tmp2, kcfa3.SmE, result1);
                      t1 = element1$;
                      t2 = element1$1;
                      n = tmp1;
                      result1 = inlinedVal3;
                      continue loopLabel
                    } else if (scrut instanceof kcfa3.GREATER.class) {
                      let inlinedVal3;
                      tmp3 = n + 1;
                      inlinedVal3 = incr1(kcfa3, arg$SmT$2$1, arg$SmT$3$1, kcfa3.SmE, result1);
                      t2 = element1$1;
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
              runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa3.SmE.class) {
                let p, n1, result2, inlinedVal3;
                p = p1;
                n1 = n;
                result2 = result1;
                inlinedLbl1: {
                  loopLabel1: while (true) {
                    let element1$2, element0$2, arg$SmT$2$2, arg$SmT$3$2, tmp4, tmp5;
                    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                      element0$2 = runtime.Tuple.get(p, 0);
                      element1$2 = runtime.Tuple.get(p, 1);
                      if (element0$2 instanceof kcfa1.SmE.class) {
                        inlinedVal3 = main_summarize_lambda$_lambda_storeJoin_storeMapUnionWith_storeMapWrap$scrut_tup2(n1, result2);
                        break inlinedLbl1
                      } else if (element0$2 instanceof kcfa1.SmT.class) {
                        let inlinedVal4;
                        arg$SmT$2$2 = element0$2.key;
                        arg$SmT$3$2 = element0$2.value;
                        tmp4 = kcfa1[storeMapNext$accessorSymbol](element1$2);
                        tmp5 = n1 + 1;
                        inlinedVal4 = incr1(kcfa1, arg$SmT$2$2, arg$SmT$3$2, kcfa1.SmE, result2);
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
        return inlinedVal2(undefined, undefined, undefined, undefined, undefined)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_summarize_lambda$$lambda$ = function main_summarize_lambda$$lambda$(kcfa2) {
  return (state, sum) => {
    return main_summarize_lambda$_lambda$lambda(kcfa2, state, sum)
  }
};
main_summarize_lambda$_lambda_storeJoin_storeMapUnionWith_union$_union_storeMapIns$storeMapIns = function main_summarize_lambda$_lambda_storeJoin_storeMapUnionWith_union$_union_storeMapIns$storeMapIns(p, n, result) {
  loopLabel: while (true) {
    let element1$, element0$, arg$SmT$2$, arg$SmT$3$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      element0$ = runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      if (element0$ instanceof kcfa1.SmE.class) {
        return main_summarize_lambda$_lambda_storeJoin_storeMapUnionWith_storeMapWrap$scrut_tup2(n, result)
      } else if (element0$ instanceof kcfa1.SmT.class) {
        let inlinedVal;
        arg$SmT$2$ = element0$.key;
        arg$SmT$3$ = element0$.value;
        tmp = kcfa1[storeMapNext$accessorSymbol](element1$);
        tmp1 = n + 1;
        inlinedVal = incr1(kcfa1, arg$SmT$2$, arg$SmT$3$, kcfa1.SmE, result);
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
main_summarize_lambda$_lambda_storeJoin_setUnion$setUnion = function main_summarize_lambda$_lambda_storeJoin_setUnion$setUnion(set1, set2) {
  let arg$SET$1$, arg$SET$1$1;
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
          let p1, p2, element1$, element0$, arg$SetT$2$, element1$1, element0$1, arg$SetT$2$1, tmp, tmp1, tmp2;
          p1 = kcfa2[setNext$accessorSymbol](t1);
          p2 = kcfa2[setNext$accessorSymbol](t2);
          if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
            element0$ = runtime.Tuple.get(p1, 0);
            element1$ = runtime.Tuple.get(p1, 1);
            if (element0$ instanceof kcfa2.SetE.class) {
              if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
                element0$1 = runtime.Tuple.get(p2, 0);
                runtime.Tuple.get(p2, 1);
                if (element0$1 instanceof kcfa2.SetE.class) {
                  inlinedVal2 = main_summarize_lambda$_lambda_storeJoin_setUnion$scrut_tup2(n, result);
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
                      let element1$2, element0$2, arg$SetT$2$2, tmp3, tmp4;
                      if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                        element0$2 = runtime.Tuple.get(p, 0);
                        element1$2 = runtime.Tuple.get(p, 1);
                        if (element0$2 instanceof kcfa3.SetE.class) {
                          inlinedVal3 = main_summarize_lambda$_lambda_storeJoin_setUnion$scrut_tup2(n1, result1);
                          break inlinedLbl1
                        } else if (element0$2 instanceof kcfa3.SetT.class) {
                          let inlinedVal4;
                          arg$SetT$2$2 = element0$2.item;
                          tmp3 = kcfa3[setNext$accessorSymbol](element1$2);
                          tmp4 = n1 + 1;
                          inlinedVal4 = incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                    let element1$2, element0$2, arg$SetT$2$2, tmp3, tmp4;
                    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                      element0$2 = runtime.Tuple.get(p, 0);
                      element1$2 = runtime.Tuple.get(p, 1);
                      if (element0$2 instanceof kcfa3.SetE.class) {
                        inlinedVal3 = main_summarize_lambda$_lambda_storeJoin_setUnion$scrut_tup2(n1, result1);
                        break inlinedLbl1
                      } else if (element0$2 instanceof kcfa3.SetT.class) {
                        let inlinedVal4;
                        arg$SetT$2$2 = element0$2.item;
                        tmp3 = kcfa3[setNext$accessorSymbol](element1$2);
                        tmp4 = n1 + 1;
                        inlinedVal4 = incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
              element1$1 = runtime.Tuple.get(p2, 1);
              if (element0$1 instanceof kcfa2.SetE.class) {
                let kcfa3, p, n1, result1, inlinedVal3;
                kcfa3 = kcfa2;
                p = p1;
                n1 = n;
                result1 = result;
                inlinedLbl1: {
                  loopLabel1: while (true) {
                    let element1$2, element0$2, arg$SetT$2$2, tmp3, tmp4;
                    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                      element0$2 = runtime.Tuple.get(p, 0);
                      element1$2 = runtime.Tuple.get(p, 1);
                      if (element0$2 instanceof kcfa3.SetE.class) {
                        inlinedVal3 = main_summarize_lambda$_lambda_storeJoin_setUnion$scrut_tup2(n1, result1);
                        break inlinedLbl1
                      } else if (element0$2 instanceof kcfa3.SetT.class) {
                        let inlinedVal4;
                        arg$SetT$2$2 = element0$2.item;
                        tmp3 = kcfa3[setNext$accessorSymbol](element1$2);
                        tmp4 = n1 + 1;
                        inlinedVal4 = incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
                        let cmpRng, kcfa3, cmpRng1, inlinedVal4, arg$VmMAP$1$, arg$VmMAP$1$1, tmp3;
                        cmpRng = kcfa1[bindCompare$accessorSymbol];
                        kcfa3 = kcfa1;
                        cmpRng1 = cmpRng;
                        if (arg$Clos$1$ instanceof kcfa3.VmMAP.class) {
                          arg$VmMAP$1$ = arg$Clos$1$.tree;
                          if (arg$Clos$1$1 instanceof kcfa3.VmMAP.class) {
                            let t, rest, inlinedVal5, t3, rest1, inlinedVal6, inlinedVal7, inlinedVal8;
                            arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                            t3 = arg$VmMAP$1$;
                            rest1 = main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt();
                            inlinedLbl1: {
                              loopLabel1: while (true) {
                                let arg$VmT$1$, tmp4;
                                if (t3 instanceof kcfa1.VmE.class) {
                                  inlinedVal6 = rest1;
                                  break inlinedLbl1
                                } else if (t3 instanceof kcfa1.VmT.class) {
                                  arg$VmT$1$ = t3.left;
                                  tmp4 = main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(t3, rest1);
                                  t3 = arg$VmT$1$;
                                  rest1 = tmp4;
                                  continue loopLabel1
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            tmp3 = inlinedVal6;
                            t = arg$VmMAP$1$1;
                            rest = main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1();
                            inlinedLbl2: {
                              loopLabel2: while (true) {
                                let arg$VmT$1$, tmp4;
                                if (t instanceof kcfa1.VmE.class) {
                                  inlinedVal5 = rest;
                                  break inlinedLbl2
                                } else if (t instanceof kcfa1.VmT.class) {
                                  arg$VmT$1$ = t.left;
                                  tmp4 = main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1(t, rest);
                                  t = arg$VmT$1$;
                                  rest = tmp4;
                                  continue loopLabel2
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            inlinedVal7 = tmp3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                            inlinedVal8 = inlinedVal5(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                            inlinedVal4 = inlinedVal7(undefined, undefined, kcfa3, inlinedVal8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, cmpRng1);
                            inlinedVal3 = inlinedVal4;
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
                        t1 = element1$;
                        n = tmp;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.EQUAL.class) {
                        let inlinedVal4;
                        tmp1 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$, kcfa2.SetE, result);
                        t1 = element1$;
                        t2 = element1$1;
                        n = tmp1;
                        result = inlinedVal4;
                        continue loopLabel
                      } else if (inlinedVal3 instanceof kcfa2.GREATER.class) {
                        let inlinedVal4;
                        tmp2 = n + 1;
                        inlinedVal4 = incr(kcfa2, arg$SetT$2$1, kcfa2.SetE, result);
                        t2 = element1$1;
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
            if (element0$ instanceof kcfa2.SetT.class) {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
            element0$1 = runtime.Tuple.get(p2, 0);
            runtime.Tuple.get(p2, 1);
            if (element0$1 instanceof kcfa2.SetE.class) {
              let kcfa3, p, n1, result1, inlinedVal3;
              kcfa3 = kcfa2;
              p = p1;
              n1 = n;
              result1 = result;
              inlinedLbl1: {
                loopLabel1: while (true) {
                  let element1$2, element0$2, arg$SetT$2$2, tmp3, tmp4;
                  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
                    element0$2 = runtime.Tuple.get(p, 0);
                    element1$2 = runtime.Tuple.get(p, 1);
                    if (element0$2 instanceof kcfa3.SetE.class) {
                      inlinedVal3 = main_summarize_lambda$_lambda_storeJoin_setUnion$scrut_tup2(n1, result1);
                      break inlinedLbl1
                    } else if (element0$2 instanceof kcfa3.SetT.class) {
                      let inlinedVal4;
                      arg$SetT$2$2 = element0$2.item;
                      tmp3 = kcfa3[setNext$accessorSymbol](element1$2);
                      tmp4 = n1 + 1;
                      inlinedVal4 = incr(kcfa3, arg$SetT$2$2, kcfa3.SetE, result1);
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
      return inlinedVal2(undefined, undefined, undefined, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft = function main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft(t, rest) {
  loopLabel: while (true) {
    let arg$VmT$1$, tmp;
    if (t instanceof kcfa1.VmE.class) {
      return rest
    } else if (t instanceof kcfa1.VmT.class) {
      arg$VmT$1$ = t.left;
      tmp = main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(t, rest);
      t = arg$VmT$1$;
      rest = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft1 = function main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft(t, rest) {
  loopLabel: while (true) {
    let arg$VmT$1$, tmp;
    if (t instanceof kcfa1.VmE.class) {
      return rest
    } else if (t instanceof kcfa1.VmT.class) {
      arg$VmT$1$ = t.left;
      tmp = main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1(t, rest);
      t = arg$VmT$1$;
      rest = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp_compareExp_compareLambda_intCompare$intCompare = function main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp_compareExp_compareLambda_intCompare$intCompare(s1, s2) {
  let scrut, scrut1;
  scrut = s1 < s2;
  if (scrut === true) {
    return main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_LESS()
  }
  scrut1 = s2 < s1;
  if (scrut1 === true) {
    return main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_GREATER()
  }
  return main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_EQUAL();
};
main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp_compareExp$compareExp = function main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp_compareExp$compareExp(e1, e2) {
  let arg$LAMBDA$0$, arg$LAMBDA$0$1, arg$VAR$1$, arg$VAR$1$1;
  if (e1 instanceof kcfa1.VAR.class) {
    arg$VAR$1$ = e1.x;
    if (e2 instanceof kcfa1.VAR.class) {
      let scrut, scrut1;
      arg$VAR$1$1 = e2.x;
      scrut = arg$VAR$1$ < arg$VAR$1$1;
      if (scrut === true) {
        return main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_LESS()
      }
      scrut1 = arg$VAR$1$1 < arg$VAR$1$;
      if (scrut1 === true) {
        return main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_GREATER()
      }
      return main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_EQUAL();
    }
    return main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_LESS();
  }
  if (e2 instanceof kcfa1.VAR.class) {
    return main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_GREATER()
  }
  if (e1 instanceof kcfa1.LAMBDA.class) {
    arg$LAMBDA$0$ = e1.lam;
    if (e2 instanceof kcfa1.LAMBDA.class) {
      let element0$, element0$1;
      arg$LAMBDA$0$1 = e2.lam;
      if (runtime.Tuple.isArrayLike(arg$LAMBDA$0$) && arg$LAMBDA$0$.length === 3) {
        element0$ = runtime.Tuple.get(arg$LAMBDA$0$, 0);
        runtime.Tuple.get(arg$LAMBDA$0$, 1);
        runtime.Tuple.get(arg$LAMBDA$0$, 2);
        if (runtime.Tuple.isArrayLike(arg$LAMBDA$0$1) && arg$LAMBDA$0$1.length === 3) {
          element0$1 = runtime.Tuple.get(arg$LAMBDA$0$1, 0);
          runtime.Tuple.get(arg$LAMBDA$0$1, 1);
          runtime.Tuple.get(arg$LAMBDA$0$1, 2);
          return main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp_compareExp_compareLambda_intCompare$intCompare(element0$, element0$1)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate$monoStoreUpdate = function main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate$monoStoreUpdate(mst, x, exp) {
  let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
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
        let fv_tmp, fv_tmp1;
        fv_tmp = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        fv_tmp1 = main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate$monoStoreUpdate(arg$Cons$1$, x, exp);
        return kcfa1.Cons(fv_tmp, fv_tmp1)
      }
      scrut1 = element0$ < x;
      if (scrut1 === true) {
        let fv_tmp, fv_tmp1, fv_tmp2, fv_tmp3;
        fv_tmp = kcfa1.Cons(exp, kcfa1.Nil);
        fv_tmp1 = globalThis.Object.freeze([
          x,
          fv_tmp
        ]);
        fv_tmp2 = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        fv_tmp3 = kcfa1.Cons(fv_tmp2, arg$Cons$1$);
        return kcfa1.Cons(fv_tmp1, fv_tmp3)
      }
      {
        let fv_tmp, inlinedVal, scrut2, arg$Cons$0$1, arg$Cons$1$1;
        if (element1$ instanceof kcfa1.Nil.class) {
          inlinedVal = kcfa1.Cons(exp, kcfa1.Nil);
        } else if (element1$ instanceof kcfa1.Cons.class) {
          arg$Cons$0$1 = element1$.head;
          arg$Cons$1$1 = element1$.tail;
          scrut2 = main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp_compareExp$compareExp(exp, arg$Cons$0$1);
          inlinedVal = scrut2(arg$Cons$0$1, arg$Cons$1$1, undefined, exp, undefined);
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        fv_tmp = globalThis.Object.freeze([
          element0$,
          inlinedVal
        ]);
        return kcfa1.Cons(fv_tmp, arg$Cons$1$);
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$$lambda$ = function main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$$lambda$(kcfa2, x) {
  return (exp, mst) => {
    return main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate$monoStoreUpdate(mst, x, exp)
  }
};
main_monovariantStore_lambda$_lambda$lambda = function main_monovariantStore_lambda$_lambda$lambda(kcfa2, b, d, mst) {
  let arg$Bnd$0$;
  if (b instanceof kcfa2.Bnd.class) {
    let f, f1, init, inlinedVal, arg$SET$1$;
    arg$Bnd$0$ = b.x;
    f1 = main_monovariantStore_lambda$_lambda_monoValues_lambda$$lambda$(kcfa1);
    init = main_monovariantStore_lambda$_lambda_monoStoreUpdate1_listFoldl$l_Nil();
    if (d instanceof kcfa1.SET.class) {
      arg$SET$1$ = d.tree;
      inlinedVal = foldf(kcfa1, f1, arg$SET$1$, init);
      f = main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$$lambda$(kcfa1, arg$Bnd$0$);
      return inlinedVal(undefined, undefined, undefined, undefined, undefined, f, mst)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_monovariantStore_lambda$$lambda$ = function main_monovariantStore_lambda$$lambda$(kcfa2) {
  return (b, d, mst) => {
    return main_monovariantStore_lambda$_lambda$lambda(kcfa2, b, d, mst)
  }
};
main_monovariantStore_lambda$_lambda_monoValues_lambda$_lambda$lambda = function main_monovariantStore_lambda$_lambda_monoValues_lambda$_lambda$lambda(kcfa2, v, exps) {
  let inlinedVal, arg$Clos$0$;
  if (v instanceof kcfa2.Clos.class) {
    arg$Clos$0$ = v.lam;
    inlinedVal = kcfa2.LAMBDA(arg$Clos$0$);
    return main_monovariantStore_lambda$_lambda_monoStoreUpdate1_listFoldl$l_Cons(inlinedVal, exps)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_monovariantStore_lambda$_lambda_monoValues_lambda$$lambda$ = function main_monovariantStore_lambda$_lambda_monoValues_lambda$$lambda$(kcfa2) {
  return (v, exps) => {
    return main_monovariantStore_lambda$_lambda_monoValues_lambda$_lambda$lambda(kcfa2, v, exps)
  }
};
main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt = function main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt() {
  return (fv_arg$Some$0$, fv_dv) => {
    return main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt$worker1(fv_arg$Some$0$, fv_dv)
  }
};
main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt$worker1 = function main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt$worker(fv_arg$Some$0$, fv_dv) {
  throw globalThis.Object.freeze(new globalThis.Error("match error"))
};
main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_Some = function main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_Some(Some_value) {
  return (fv_arg$Some$0$, fv_dv) => {
    return Some_value
  }
};
main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_EQUAL = function main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_EQUAL() {
  return (fv_kcfa, fv_y, fv_k, fv_b, fv_a) => {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_Some(fv_y)
  }
};
main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_GREATER = function main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_GREATER() {
  return (fv_kcfa, fv_y, fv_k, fv_b, fv_a) => {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$find1(fv_kcfa, fv_k, fv_b)
  }
};
main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_LESS = function main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_LESS() {
  return (fv_kcfa, fv_y, fv_k, fv_b, fv_a) => {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$find1(fv_kcfa, fv_k, fv_a)
  }
};
main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt = function main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt() {
  return (fv_arg$Some$0$, fv_adr) => {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt$worker1(fv_arg$Some$0$, fv_adr)
  }
};
main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt$worker1 = function main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt$worker(fv_arg$Some$0$, fv_adr) {
  throw globalThis.Object.freeze(new globalThis.Error("match error"))
};
main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_Some = function main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_Some(Some_value) {
  return (fv_arg$Some$0$, fv_adr) => {
    return Some_value
  }
};
main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt1 = function main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt() {
  return (fv_arg$Some$0$, fv_dv) => {
    return main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt$worker(fv_arg$Some$0$, fv_dv)
  }
};
main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt$worker = function main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_dflt$worker(fv_arg$Some$0$, fv_dv) {
  throw globalThis.Object.freeze(new globalThis.Error("match error"))
};
main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_Some1 = function main_explore_absNext_atomEval_eval$_eval_storeLookup$scrut_Some(Some_value) {
  return (fv_arg$Some$0$, fv_dv) => {
    return Some_value
  }
};
main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_EQUAL1 = function main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_EQUAL() {
  return (fv_kcfa, fv_y, fv_k, fv_b, fv_a) => {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_Some1(fv_y)
  }
};
main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_GREATER1 = function main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_GREATER() {
  return (fv_kcfa, fv_y, fv_k, fv_b, fv_a) => {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$find11(fv_kcfa, fv_k, fv_b)
  }
};
main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_LESS1 = function main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$scrut_LESS() {
  return (fv_kcfa, fv_y, fv_k, fv_b, fv_a) => {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup_varMapFind_find1$find11(fv_kcfa, fv_k, fv_a)
  }
};
main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt1 = function main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt() {
  return (fv_arg$Some$0$, fv_adr) => {
    return main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt$worker(fv_arg$Some$0$, fv_adr)
  }
};
main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt$worker = function main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_dflt$worker(fv_arg$Some$0$, fv_adr) {
  throw globalThis.Object.freeze(new globalThis.Error("match error"))
};
main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_Some1 = function main_explore_absNext_atomEval_eval$_eval_benvLookup$scrut_Some(Some_value) {
  return (fv_arg$Some$0$, fv_adr) => {
    return Some_value
  }
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2 = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_r1, fv_x, fv_xk, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng) => {
    return main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_r1, fv_x, fv_xk, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng)
  }
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_r1, fv_x, fv_xk, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng) {
  if (tup2_0 instanceof fv_kcfa.VmE.class) {
    if (runtime.Tuple.isArrayLike(fv_p2) && fv_p2.length === 2) {
      fv_element0$1 = runtime.Tuple.get(fv_p2, 0);
      runtime.Tuple.get(fv_p2, 1);
      if (fv_element0$1 instanceof fv_kcfa.VmE.class) {
        return fv_kcfa.EQUAL
      }
      return fv_kcfa.LESS;
    }
    return fv_kcfa.LESS;
  }
  if (runtime.Tuple.isArrayLike(fv_p2) && fv_p2.length === 2) {
    fv_element0$1 = runtime.Tuple.get(fv_p2, 0);
    fv_element1$1 = runtime.Tuple.get(fv_p2, 1);
    if (fv_element0$1 instanceof fv_kcfa.VmE.class) {
      return fv_kcfa.GREATER
    }
    if (tup2_0 instanceof fv_kcfa.VmT.class) {
      fv_arg$VmT$2$ = tup2_0.key;
      fv_arg$VmT$3$ = tup2_0.value;
      if (fv_element0$1 instanceof fv_kcfa.VmT.class) {
        let scrut, scrut1;
        fv_arg$VmT$2$1 = fv_element0$1.key;
        fv_arg$VmT$3$1 = fv_element0$1.value;
        scrut = fv_arg$VmT$2$ < fv_arg$VmT$2$1;
        if (scrut === true) {
          return fv_kcfa.LESS
        }
        scrut1 = fv_arg$VmT$2$1 < fv_arg$VmT$2$;
        if (scrut1 === true) {
          return fv_kcfa.GREATER
        }
        fv_order1 = runtime.safeCall(fv_cmpRng(fv_arg$VmT$3$, fv_arg$VmT$3$1));
        if (fv_order1 instanceof fv_kcfa.EQUAL.class) {
          let inlinedVal, inlinedVal1;
          inlinedVal = tup2_1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
          inlinedVal1 = fv_element1$1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
          return inlinedVal(undefined, undefined, fv_kcfa, inlinedVal1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_cmpRng)
        }
        return fv_order1;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  if (tup2_0 instanceof fv_kcfa.VmT.class) {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    return main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp)
  }
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) {
  let tup2_0, tup2_1;
  tup2_0 = kcfa1.VmE;
  tup2_1 = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt();
  return main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1)
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    return main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp)
  }
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker1 = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) {
  if (Cons_head instanceof kcfa1.VmT.class) {
    fv_arg$VmT$4$ = Cons_head.right;
    fv_tmp = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft(fv_arg$VmT$4$, Cons_tail);
    return main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(Cons_head, fv_tmp)
  }
  {
    let tup2_0, tup2_1;
    tup2_0 = kcfa1.VmE;
    tup2_1 = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt();
    return main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1);
  }
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1 = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    let deforest$lam;
    deforest$lam = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1();
    return globalThis.Object.freeze([
      kcfa1.VmE,
      deforest$lam
    ])
  }
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1 = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    return main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp)
  }
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) {
  if (Cons_head instanceof kcfa1.VmT.class) {
    fv_arg$VmT$4$ = Cons_head.right;
    fv_tmp = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft1(fv_arg$VmT$4$, Cons_tail);
    return globalThis.Object.freeze([
      Cons_head,
      fv_tmp
    ])
  }
  {
    let deforest$lam;
    deforest$lam = main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1();
    return globalThis.Object.freeze([
      kcfa1.VmE,
      deforest$lam
    ]);
  }
};
main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion$scrut_tup2 = function main_explore_absNext_apply$_apply_storeUpdate1_lambda$_lambda_storeUpdate_setUnion$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_result, fv_n, fv_tmp) => {
    fv_tmp = kcfa1[setLinkAll$accessorSymbol](tup2_1);
    return kcfa1.SET(tup2_0, fv_tmp)
  }
};
main_explore_append$l1_Cons = function main_explore_append$l1_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_l2) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_l2);
    return main_explore$todo_Cons(Cons_head, inlinedVal)
  }
};
main_explore_append$l1_Nil = function main_explore_append$l1_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_l2) => {
    return fv_l2
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp$p1_tup2 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$SmT$0$, fv_arg$SmT$1$, fv_arg$SmT$2$, fv_arg$SmT$3$, fv_arg$SmT$4$, fv_r1, fv_x, fv_xk, fv_arg$SmT$0$1, fv_arg$SmT$1$1, fv_arg$SmT$2$1, fv_arg$SmT$3$1, fv_arg$SmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng) => {
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$SmT$0$, fv_arg$SmT$1$, fv_arg$SmT$2$, fv_arg$SmT$3$, fv_arg$SmT$4$, fv_r1, fv_x, fv_xk, fv_arg$SmT$0$1, fv_arg$SmT$1$1, fv_arg$SmT$2$1, fv_arg$SmT$3$1, fv_arg$SmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng)
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp$p1_tup2$worker = function main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$SmT$0$, fv_arg$SmT$1$, fv_arg$SmT$2$, fv_arg$SmT$3$, fv_arg$SmT$4$, fv_r1, fv_x, fv_xk, fv_arg$SmT$0$1, fv_arg$SmT$1$1, fv_arg$SmT$2$1, fv_arg$SmT$3$1, fv_arg$SmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng) {
  if (tup2_0 instanceof fv_kcfa.SmE.class) {
    if (runtime.Tuple.isArrayLike(fv_p2) && fv_p2.length === 2) {
      fv_element0$1 = runtime.Tuple.get(fv_p2, 0);
      runtime.Tuple.get(fv_p2, 1);
      if (fv_element0$1 instanceof fv_kcfa.SmE.class) {
        return fv_kcfa.EQUAL
      }
      return fv_kcfa.LESS;
    }
    return fv_kcfa.LESS;
  }
  if (runtime.Tuple.isArrayLike(fv_p2) && fv_p2.length === 2) {
    fv_element0$1 = runtime.Tuple.get(fv_p2, 0);
    fv_element1$1 = runtime.Tuple.get(fv_p2, 1);
    if (fv_element0$1 instanceof fv_kcfa.SmE.class) {
      return fv_kcfa.GREATER
    }
    if (tup2_0 instanceof fv_kcfa.SmT.class) {
      fv_arg$SmT$2$ = tup2_0.key;
      fv_arg$SmT$3$ = tup2_0.value;
      if (fv_element0$1 instanceof fv_kcfa.SmT.class) {
        fv_arg$SmT$2$1 = fv_element0$1.key;
        fv_arg$SmT$3$1 = fv_element0$1.value;
        fv_order = fv_kcfa[bindCompare$accessorSymbol](fv_arg$SmT$2$, fv_arg$SmT$2$1);
        if (fv_order instanceof fv_kcfa.EQUAL.class) {
          fv_order1 = runtime.safeCall(fv_cmpRng(fv_arg$SmT$3$, fv_arg$SmT$3$1));
          if (fv_order1 instanceof fv_kcfa.EQUAL.class) {
            let inlinedVal, inlinedVal1;
            inlinedVal = tup2_1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
            inlinedVal1 = fv_element1$1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
            return inlinedVal(undefined, undefined, fv_kcfa, inlinedVal1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_cmpRng)
          }
          return fv_order1;
        }
        return fv_order;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  if (tup2_0 instanceof fv_kcfa.SmT.class) {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt = function main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SmT$0$, fv_arg$SmT$1$, fv_arg$SmT$2$, fv_arg$SmT$3$, fv_arg$SmT$4$, fv_b, fv_tmp) => {
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SmT$0$, fv_arg$SmT$1$, fv_arg$SmT$2$, fv_arg$SmT$3$, fv_arg$SmT$4$, fv_b, fv_tmp)
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt$worker = function main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SmT$0$, fv_arg$SmT$1$, fv_arg$SmT$2$, fv_arg$SmT$3$, fv_arg$SmT$4$, fv_b, fv_tmp) {
  let tup2_0, tup2_1;
  tup2_0 = kcfa1.SmE;
  tup2_1 = main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt();
  return main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1)
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons = function main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SmT$0$, fv_arg$SmT$1$, fv_arg$SmT$2$, fv_arg$SmT$3$, fv_arg$SmT$4$, fv_b, fv_tmp) => {
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SmT$0$, fv_arg$SmT$1$, fv_arg$SmT$2$, fv_arg$SmT$3$, fv_arg$SmT$4$, fv_b, fv_tmp)
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons$worker1 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SmT$0$, fv_arg$SmT$1$, fv_arg$SmT$2$, fv_arg$SmT$3$, fv_arg$SmT$4$, fv_b, fv_tmp) {
  if (Cons_head instanceof kcfa1.SmT.class) {
    fv_arg$SmT$4$ = Cons_head.right;
    fv_tmp = main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext_storeMapLeft$storeMapLeft(fv_arg$SmT$4$, Cons_tail);
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp$p1_tup2(Cons_head, fv_tmp)
  }
  {
    let tup2_0, tup2_1;
    tup2_0 = kcfa1.SmE;
    tup2_1 = main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt();
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1);
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt1 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SmT$0$, fv_arg$SmT$1$, fv_arg$SmT$2$, fv_arg$SmT$3$, fv_arg$SmT$4$, fv_b, fv_tmp) => {
    let deforest$lam;
    deforest$lam = main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt1();
    return globalThis.Object.freeze([
      kcfa1.SmE,
      deforest$lam
    ])
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons1 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SmT$0$, fv_arg$SmT$1$, fv_arg$SmT$2$, fv_arg$SmT$3$, fv_arg$SmT$4$, fv_b, fv_tmp) => {
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SmT$0$, fv_arg$SmT$1$, fv_arg$SmT$2$, fv_arg$SmT$3$, fv_arg$SmT$4$, fv_b, fv_tmp)
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons$worker = function main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SmT$0$, fv_arg$SmT$1$, fv_arg$SmT$2$, fv_arg$SmT$3$, fv_arg$SmT$4$, fv_b, fv_tmp) {
  if (Cons_head instanceof kcfa1.SmT.class) {
    fv_arg$SmT$4$ = Cons_head.right;
    fv_tmp = main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext_storeMapLeft$storeMapLeft1(fv_arg$SmT$4$, Cons_tail);
    return globalThis.Object.freeze([
      Cons_head,
      fv_tmp
    ])
  }
  {
    let deforest$lam;
    deforest$lam = main_explore_member_lambda$_lambda_stateSame_storeCompare_storeMapCollate_lambda$_lambda_cmp_storeMapNext$stack_dflt1();
    return globalThis.Object.freeze([
      kcfa1.SmE,
      deforest$lam
    ]);
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp$p1_tup2 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp$p1_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$SetT$0$, fv_arg$SetT$1$, fv_arg$SetT$2$, fv_arg$SetT$3$, fv_r1, fv_x, fv_arg$SetT$0$1, fv_arg$SetT$1$1, fv_arg$SetT$2$1, fv_arg$SetT$3$1, fv_r2, fv_y, fv_order) => {
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$SetT$0$, fv_arg$SetT$1$, fv_arg$SetT$2$, fv_arg$SetT$3$, fv_r1, fv_x, fv_arg$SetT$0$1, fv_arg$SetT$1$1, fv_arg$SetT$2$1, fv_arg$SetT$3$1, fv_r2, fv_y, fv_order)
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp$p1_tup2$worker = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$SetT$0$, fv_arg$SetT$1$, fv_arg$SetT$2$, fv_arg$SetT$3$, fv_r1, fv_x, fv_arg$SetT$0$1, fv_arg$SetT$1$1, fv_arg$SetT$2$1, fv_arg$SetT$3$1, fv_r2, fv_y, fv_order) {
  if (tup2_0 instanceof fv_kcfa.SetE.class) {
    if (runtime.Tuple.isArrayLike(fv_p2) && fv_p2.length === 2) {
      fv_element0$1 = runtime.Tuple.get(fv_p2, 0);
      runtime.Tuple.get(fv_p2, 1);
      if (fv_element0$1 instanceof fv_kcfa.SetE.class) {
        return fv_kcfa.EQUAL
      }
      return fv_kcfa.LESS;
    }
    return fv_kcfa.LESS;
  }
  if (runtime.Tuple.isArrayLike(fv_p2) && fv_p2.length === 2) {
    fv_element0$1 = runtime.Tuple.get(fv_p2, 0);
    fv_element1$1 = runtime.Tuple.get(fv_p2, 1);
    if (fv_element0$1 instanceof fv_kcfa.SetE.class) {
      return fv_kcfa.GREATER
    }
    if (tup2_0 instanceof fv_kcfa.SetT.class) {
      fv_arg$SetT$2$ = tup2_0.item;
      if (fv_element0$1 instanceof fv_kcfa.SetT.class) {
        let inlinedVal, order, arg$Clos$0$, arg$Clos$1$, arg$Clos$0$1, arg$Clos$1$1;
        fv_arg$SetT$2$1 = fv_element0$1.item;
        if (fv_arg$SetT$2$ instanceof kcfa1.Clos.class) {
          arg$Clos$0$ = fv_arg$SetT$2$.lam;
          arg$Clos$1$ = fv_arg$SetT$2$.benv;
          if (fv_arg$SetT$2$1 instanceof kcfa1.Clos.class) {
            arg$Clos$0$1 = fv_arg$SetT$2$1.lam;
            arg$Clos$1$1 = fv_arg$SetT$2$1.benv;
            order = kcfa1[compareLambda$accessorSymbol](arg$Clos$0$, arg$Clos$0$1);
            if (order instanceof kcfa1.EQUAL.class) {
              let cmpRng, kcfa2, cmpRng1, inlinedVal1, arg$VmMAP$1$, arg$VmMAP$1$1, tmp;
              cmpRng = kcfa1[bindCompare$accessorSymbol];
              kcfa2 = kcfa1;
              cmpRng1 = cmpRng;
              if (arg$Clos$1$ instanceof kcfa2.VmMAP.class) {
                arg$VmMAP$1$ = arg$Clos$1$.tree;
                if (arg$Clos$1$1 instanceof kcfa2.VmMAP.class) {
                  let t, rest, inlinedVal2, t1, rest1, inlinedVal3, inlinedVal4, inlinedVal5;
                  arg$VmMAP$1$1 = arg$Clos$1$1.tree;
                  t1 = arg$VmMAP$1$;
                  rest1 = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt();
                  inlinedLbl: {
                    loopLabel: while (true) {
                      let arg$VmT$1$, tmp1;
                      if (t1 instanceof kcfa1.VmE.class) {
                        inlinedVal3 = rest1;
                        break inlinedLbl
                      } else if (t1 instanceof kcfa1.VmT.class) {
                        arg$VmT$1$ = t1.left;
                        tmp1 = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(t1, rest1);
                        t1 = arg$VmT$1$;
                        rest1 = tmp1;
                        continue loopLabel
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                  }
                  tmp = inlinedVal3;
                  t = arg$VmMAP$1$1;
                  rest = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1();
                  inlinedLbl1: {
                    loopLabel1: while (true) {
                      let arg$VmT$1$, tmp1;
                      if (t instanceof kcfa1.VmE.class) {
                        inlinedVal2 = rest;
                        break inlinedLbl1
                      } else if (t instanceof kcfa1.VmT.class) {
                        arg$VmT$1$ = t.left;
                        tmp1 = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1(t, rest);
                        t = arg$VmT$1$;
                        rest = tmp1;
                        continue loopLabel1
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                  }
                  inlinedVal4 = tmp(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                  inlinedVal5 = inlinedVal2(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                  inlinedVal1 = inlinedVal4(undefined, undefined, kcfa2, inlinedVal5, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, cmpRng1);
                  inlinedVal = inlinedVal1;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else {
              inlinedVal = order;
            }
            if (inlinedVal instanceof fv_kcfa.EQUAL.class) {
              let inlinedVal1, inlinedVal2;
              inlinedVal1 = tup2_1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
              inlinedVal2 = fv_element1$1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
              return inlinedVal1(undefined, undefined, fv_kcfa, inlinedVal2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
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
  if (tup2_0 instanceof fv_kcfa.SetT.class) {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_r1, fv_x, fv_xk, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng) => {
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_r1, fv_x, fv_xk, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng)
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_r1, fv_x, fv_xk, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng) {
  if (tup2_0 instanceof fv_kcfa.VmE.class) {
    if (runtime.Tuple.isArrayLike(fv_p2) && fv_p2.length === 2) {
      fv_element0$1 = runtime.Tuple.get(fv_p2, 0);
      runtime.Tuple.get(fv_p2, 1);
      if (fv_element0$1 instanceof fv_kcfa.VmE.class) {
        return fv_kcfa.EQUAL
      }
      return fv_kcfa.LESS;
    }
    return fv_kcfa.LESS;
  }
  if (runtime.Tuple.isArrayLike(fv_p2) && fv_p2.length === 2) {
    fv_element0$1 = runtime.Tuple.get(fv_p2, 0);
    fv_element1$1 = runtime.Tuple.get(fv_p2, 1);
    if (fv_element0$1 instanceof fv_kcfa.VmE.class) {
      return fv_kcfa.GREATER
    }
    if (tup2_0 instanceof fv_kcfa.VmT.class) {
      fv_arg$VmT$2$ = tup2_0.key;
      fv_arg$VmT$3$ = tup2_0.value;
      if (fv_element0$1 instanceof fv_kcfa.VmT.class) {
        let scrut, scrut1;
        fv_arg$VmT$2$1 = fv_element0$1.key;
        fv_arg$VmT$3$1 = fv_element0$1.value;
        scrut = fv_arg$VmT$2$ < fv_arg$VmT$2$1;
        if (scrut === true) {
          return fv_kcfa.LESS
        }
        scrut1 = fv_arg$VmT$2$1 < fv_arg$VmT$2$;
        if (scrut1 === true) {
          return fv_kcfa.GREATER
        }
        fv_order1 = runtime.safeCall(fv_cmpRng(fv_arg$VmT$3$, fv_arg$VmT$3$1));
        if (fv_order1 instanceof fv_kcfa.EQUAL.class) {
          let inlinedVal, inlinedVal1;
          inlinedVal = tup2_1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
          inlinedVal1 = fv_element1$1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
          return inlinedVal(undefined, undefined, fv_kcfa, inlinedVal1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_cmpRng)
        }
        return fv_order1;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  if (tup2_0 instanceof fv_kcfa.VmT.class) {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp)
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) {
  let tup2_0, tup2_1;
  tup2_0 = kcfa1.VmE;
  tup2_1 = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt();
  return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1)
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp)
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker1 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) {
  if (Cons_head instanceof kcfa1.VmT.class) {
    fv_arg$VmT$4$ = Cons_head.right;
    fv_tmp = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft(fv_arg$VmT$4$, Cons_tail);
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(Cons_head, fv_tmp)
  }
  {
    let tup2_0, tup2_1;
    tup2_0 = kcfa1.VmE;
    tup2_1 = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt();
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1);
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    let deforest$lam;
    deforest$lam = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1();
    return globalThis.Object.freeze([
      kcfa1.VmE,
      deforest$lam
    ])
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp)
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) {
  if (Cons_head instanceof kcfa1.VmT.class) {
    fv_arg$VmT$4$ = Cons_head.right;
    fv_tmp = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft1(fv_arg$VmT$4$, Cons_tail);
    return globalThis.Object.freeze([
      Cons_head,
      fv_tmp
    ])
  }
  {
    let deforest$lam;
    deforest$lam = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1();
    return globalThis.Object.freeze([
      kcfa1.VmE,
      deforest$lam
    ]);
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SetT$0$, fv_arg$SetT$1$, fv_arg$SetT$2$, fv_arg$SetT$3$, fv_b, fv_tmp) => {
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SetT$0$, fv_arg$SetT$1$, fv_arg$SetT$2$, fv_arg$SetT$3$, fv_b, fv_tmp)
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt$worker = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SetT$0$, fv_arg$SetT$1$, fv_arg$SetT$2$, fv_arg$SetT$3$, fv_b, fv_tmp) {
  let tup2_0, tup2_1;
  tup2_0 = kcfa1.SetE;
  tup2_1 = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt();
  return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp$p1_tup2(tup2_0, tup2_1)
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SetT$0$, fv_arg$SetT$1$, fv_arg$SetT$2$, fv_arg$SetT$3$, fv_b, fv_tmp) => {
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SetT$0$, fv_arg$SetT$1$, fv_arg$SetT$2$, fv_arg$SetT$3$, fv_b, fv_tmp)
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons$worker1 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SetT$0$, fv_arg$SetT$1$, fv_arg$SetT$2$, fv_arg$SetT$3$, fv_b, fv_tmp) {
  if (Cons_head instanceof kcfa1.SetT.class) {
    fv_arg$SetT$3$ = Cons_head.right;
    fv_tmp = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext_setLeft$setLeft(fv_arg$SetT$3$, Cons_tail);
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp$p1_tup2(Cons_head, fv_tmp)
  }
  {
    let tup2_0, tup2_1;
    tup2_0 = kcfa1.SetE;
    tup2_1 = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt();
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp$p1_tup2(tup2_0, tup2_1);
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt1 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SetT$0$, fv_arg$SetT$1$, fv_arg$SetT$2$, fv_arg$SetT$3$, fv_b, fv_tmp) => {
    let deforest$lam;
    deforest$lam = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt1();
    return globalThis.Object.freeze([
      kcfa1.SetE,
      deforest$lam
    ])
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons1 = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SetT$0$, fv_arg$SetT$1$, fv_arg$SetT$2$, fv_arg$SetT$3$, fv_b, fv_tmp) => {
    return main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SetT$0$, fv_arg$SetT$1$, fv_arg$SetT$2$, fv_arg$SetT$3$, fv_b, fv_tmp)
  }
};
main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons$worker = function main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$SetT$0$, fv_arg$SetT$1$, fv_arg$SetT$2$, fv_arg$SetT$3$, fv_b, fv_tmp) {
  if (Cons_head instanceof kcfa1.SetT.class) {
    fv_arg$SetT$3$ = Cons_head.right;
    fv_tmp = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext_setLeft$setLeft1(fv_arg$SetT$3$, Cons_tail);
    return globalThis.Object.freeze([
      Cons_head,
      fv_tmp
    ])
  }
  {
    let deforest$lam;
    deforest$lam = main_explore_member_lambda$_lambda_stateSame_storeCompare_setCompare_cmp_setNext$stack_dflt1();
    return globalThis.Object.freeze([
      kcfa1.SetE,
      deforest$lam
    ]);
  }
};
main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2 = function main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_r1, fv_x, fv_xk, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng) => {
    return main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_r1, fv_x, fv_xk, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng)
  }
};
main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker = function main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_r1, fv_x, fv_xk, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng) {
  if (tup2_0 instanceof fv_kcfa.VmE.class) {
    if (runtime.Tuple.isArrayLike(fv_p2) && fv_p2.length === 2) {
      fv_element0$1 = runtime.Tuple.get(fv_p2, 0);
      runtime.Tuple.get(fv_p2, 1);
      if (fv_element0$1 instanceof fv_kcfa.VmE.class) {
        return fv_kcfa.EQUAL
      }
      return fv_kcfa.LESS;
    }
    return fv_kcfa.LESS;
  }
  if (runtime.Tuple.isArrayLike(fv_p2) && fv_p2.length === 2) {
    fv_element0$1 = runtime.Tuple.get(fv_p2, 0);
    fv_element1$1 = runtime.Tuple.get(fv_p2, 1);
    if (fv_element0$1 instanceof fv_kcfa.VmE.class) {
      return fv_kcfa.GREATER
    }
    if (tup2_0 instanceof fv_kcfa.VmT.class) {
      fv_arg$VmT$2$ = tup2_0.key;
      fv_arg$VmT$3$ = tup2_0.value;
      if (fv_element0$1 instanceof fv_kcfa.VmT.class) {
        let scrut, scrut1;
        fv_arg$VmT$2$1 = fv_element0$1.key;
        fv_arg$VmT$3$1 = fv_element0$1.value;
        scrut = fv_arg$VmT$2$ < fv_arg$VmT$2$1;
        if (scrut === true) {
          return fv_kcfa.LESS
        }
        scrut1 = fv_arg$VmT$2$1 < fv_arg$VmT$2$;
        if (scrut1 === true) {
          return fv_kcfa.GREATER
        }
        fv_order1 = runtime.safeCall(fv_cmpRng(fv_arg$VmT$3$, fv_arg$VmT$3$1));
        if (fv_order1 instanceof fv_kcfa.EQUAL.class) {
          let inlinedVal, inlinedVal1;
          inlinedVal = tup2_1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
          inlinedVal1 = fv_element1$1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
          return inlinedVal(undefined, undefined, fv_kcfa, inlinedVal1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_cmpRng)
        }
        return fv_order1;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  if (tup2_0 instanceof fv_kcfa.VmT.class) {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt = function main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    return main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp)
  }
};
main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker = function main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) {
  let tup2_0, tup2_1;
  tup2_0 = kcfa1.VmE;
  tup2_1 = main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt();
  return main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1)
};
main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons = function main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    return main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp)
  }
};
main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker1 = function main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) {
  if (Cons_head instanceof kcfa1.VmT.class) {
    fv_arg$VmT$4$ = Cons_head.right;
    fv_tmp = main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft(fv_arg$VmT$4$, Cons_tail);
    return main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(Cons_head, fv_tmp)
  }
  {
    let tup2_0, tup2_1;
    tup2_0 = kcfa1.VmE;
    tup2_1 = main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt();
    return main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1);
  }
};
main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1 = function main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    let deforest$lam;
    deforest$lam = main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1();
    return globalThis.Object.freeze([
      kcfa1.VmE,
      deforest$lam
    ])
  }
};
main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1 = function main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    return main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp)
  }
};
main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker = function main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) {
  if (Cons_head instanceof kcfa1.VmT.class) {
    fv_arg$VmT$4$ = Cons_head.right;
    fv_tmp = main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft1(fv_arg$VmT$4$, Cons_tail);
    return globalThis.Object.freeze([
      Cons_head,
      fv_tmp
    ])
  }
  {
    let deforest$lam;
    deforest$lam = main_explore_member_lambda$_lambda_stateSame_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1();
    return globalThis.Object.freeze([
      kcfa1.VmE,
      deforest$lam
    ]);
  }
};
main_explore$todo_Cons = function main_explore$todo_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_sts, fv_st, fv_scrut, fv_seen, fv_tmp, fv_tmp1, fv_tmp2) => {
    return main_explore$todo_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_sts, fv_st, fv_scrut, fv_seen, fv_tmp, fv_tmp1, fv_tmp2)
  }
};
main_explore$todo_Cons$worker = function main_explore$todo_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_sts, fv_st, fv_scrut, fv_seen, fv_tmp, fv_tmp1, fv_tmp2) {
  let f, inlinedVal;
  f = main_explore_member_lambda$$lambda$(kcfa1, Cons_head);
  inlinedVal = kcfa1[listExists$tailrec$accessorSymbol](f, fv_seen);
  if (inlinedVal === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_seen, undefined, undefined, undefined)
  }
  {
    let inlinedVal1;
    fv_tmp = kcfa1.Cons(Cons_head, fv_seen);
    fv_tmp1 = main_explore_absNext$absNext(Cons_head);
    inlinedVal1 = fv_tmp1(undefined, undefined, undefined, undefined, undefined, Cons_tail);
    return inlinedVal1(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined, undefined, undefined);
  }
};
main_explore$todo_Nil = function main_explore$todo_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_sts, fv_st, fv_scrut, fv_seen, fv_tmp, fv_tmp1, fv_tmp2) => {
    return fv_seen
  }
};
main_summarize_lambda$_lambda_storeJoin_storeMapUnionWith_storeMapWrap$scrut_tup2 = function main_summarize_lambda$_lambda_storeJoin_storeMapUnionWith_storeMapWrap$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_result, fv_n, fv_tmp) => {
    fv_tmp = kcfa1[storeMapLinkAll$accessorSymbol](tup2_1);
    return kcfa1.SmMAP(tup2_0, fv_tmp)
  }
};
main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2 = function main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_r1, fv_x, fv_xk, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng) => {
    return main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_r1, fv_x, fv_xk, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng)
  }
};
main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker = function main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_kcfa, fv_p2, fv_element0$1, fv_element1$1, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_r1, fv_x, fv_xk, fv_arg$VmT$0$1, fv_arg$VmT$1$1, fv_arg$VmT$2$1, fv_arg$VmT$3$1, fv_arg$VmT$4$1, fv_r2, fv_y, fv_yk, fv_order, fv_order1, fv_cmpRng) {
  if (tup2_0 instanceof fv_kcfa.VmE.class) {
    if (runtime.Tuple.isArrayLike(fv_p2) && fv_p2.length === 2) {
      fv_element0$1 = runtime.Tuple.get(fv_p2, 0);
      runtime.Tuple.get(fv_p2, 1);
      if (fv_element0$1 instanceof fv_kcfa.VmE.class) {
        return fv_kcfa.EQUAL
      }
      return fv_kcfa.LESS;
    }
    return fv_kcfa.LESS;
  }
  if (runtime.Tuple.isArrayLike(fv_p2) && fv_p2.length === 2) {
    fv_element0$1 = runtime.Tuple.get(fv_p2, 0);
    fv_element1$1 = runtime.Tuple.get(fv_p2, 1);
    if (fv_element0$1 instanceof fv_kcfa.VmE.class) {
      return fv_kcfa.GREATER
    }
    if (tup2_0 instanceof fv_kcfa.VmT.class) {
      fv_arg$VmT$2$ = tup2_0.key;
      fv_arg$VmT$3$ = tup2_0.value;
      if (fv_element0$1 instanceof fv_kcfa.VmT.class) {
        let scrut, scrut1;
        fv_arg$VmT$2$1 = fv_element0$1.key;
        fv_arg$VmT$3$1 = fv_element0$1.value;
        scrut = fv_arg$VmT$2$ < fv_arg$VmT$2$1;
        if (scrut === true) {
          return fv_kcfa.LESS
        }
        scrut1 = fv_arg$VmT$2$1 < fv_arg$VmT$2$;
        if (scrut1 === true) {
          return fv_kcfa.GREATER
        }
        fv_order1 = runtime.safeCall(fv_cmpRng(fv_arg$VmT$3$, fv_arg$VmT$3$1));
        if (fv_order1 instanceof fv_kcfa.EQUAL.class) {
          let inlinedVal, inlinedVal1;
          inlinedVal = tup2_1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
          inlinedVal1 = fv_element1$1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
          return inlinedVal(undefined, undefined, fv_kcfa, inlinedVal1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_cmpRng)
        }
        return fv_order1;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  if (tup2_0 instanceof fv_kcfa.VmT.class) {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt = function main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    return main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp)
  }
};
main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker = function main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) {
  let tup2_0, tup2_1;
  tup2_0 = kcfa1.VmE;
  tup2_1 = main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt();
  return main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1)
};
main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons = function main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    return main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp)
  }
};
main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker1 = function main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) {
  if (Cons_head instanceof kcfa1.VmT.class) {
    fv_arg$VmT$4$ = Cons_head.right;
    fv_tmp = main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft(fv_arg$VmT$4$, Cons_tail);
    return main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(Cons_head, fv_tmp)
  }
  {
    let tup2_0, tup2_1;
    tup2_0 = kcfa1.VmE;
    tup2_1 = main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt();
    return main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp$p1_tup2(tup2_0, tup2_1);
  }
};
main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1 = function main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    let deforest$lam;
    deforest$lam = main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1();
    return globalThis.Object.freeze([
      kcfa1.VmE,
      deforest$lam
    ])
  }
};
main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons1 = function main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) => {
    return main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp)
  }
};
main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker = function main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_rest, fv_t, fv_arg$VmT$0$, fv_arg$VmT$1$, fv_arg$VmT$2$, fv_arg$VmT$3$, fv_arg$VmT$4$, fv_b, fv_tmp) {
  if (Cons_head instanceof kcfa1.VmT.class) {
    fv_arg$VmT$4$ = Cons_head.right;
    fv_tmp = main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext_varMapLeft$varMapLeft1(fv_arg$VmT$4$, Cons_tail);
    return globalThis.Object.freeze([
      Cons_head,
      fv_tmp
    ])
  }
  {
    let deforest$lam;
    deforest$lam = main_summarize_lambda$_lambda_storeJoin_setUnion_union1_closureCompare_benvCompare_varMapCollate_lambda$_lambda_cmp_varMapNext$stack_dflt1();
    return globalThis.Object.freeze([
      kcfa1.VmE,
      deforest$lam
    ]);
  }
};
main_summarize_lambda$_lambda_storeJoin_setUnion$scrut_tup2 = function main_summarize_lambda$_lambda_storeJoin_setUnion$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_result, fv_n, fv_tmp) => {
    fv_tmp = kcfa1[setLinkAll$accessorSymbol](tup2_1);
    return kcfa1.SET(tup2_0, fv_tmp)
  }
};
main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_EQUAL = function main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_EQUAL() {
  return (fv_e, fv_exps1, fv_tmp, fv_exp, fv_tmp1) => {
    return kcfa1.Cons(fv_e, fv_exps1)
  }
};
main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_GREATER = function main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_GREATER() {
  return (fv_e, fv_exps1, fv_tmp, fv_exp, fv_tmp1) => {
    fv_tmp = kcfa1.Cons(fv_e, fv_exps1);
    return kcfa1.Cons(fv_exp, fv_tmp)
  }
};
main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_LESS = function main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_LESS() {
  return (fv_e, fv_exps1, fv_tmp, fv_exp, fv_tmp1) => {
    return main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_LESS$worker(fv_e, fv_exps1, fv_tmp, fv_exp, fv_tmp1)
  }
};
main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_LESS$worker = function main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp$scrut_LESS$worker(fv_e, fv_exps1, fv_tmp, fv_exp, fv_tmp1) {
  let inlinedVal, scrut, arg$Cons$0$, arg$Cons$1$;
  if (fv_exps1 instanceof kcfa1.Nil.class) {
    inlinedVal = kcfa1.Cons(fv_exp, kcfa1.Nil);
    return kcfa1.Cons(fv_e, inlinedVal)
  } else if (fv_exps1 instanceof kcfa1.Cons.class) {
    arg$Cons$0$ = fv_exps1.head;
    arg$Cons$1$ = fv_exps1.tail;
    scrut = main_monovariantStore_lambda$_lambda_monoStoreUpdate1_lambda$_lambda_monoStoreUpdate_insertExp_compareExp$compareExp(fv_exp, arg$Cons$0$);
    inlinedVal = scrut(arg$Cons$0$, arg$Cons$1$, undefined, fv_exp, undefined);
    return kcfa1.Cons(fv_e, inlinedVal)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_monovariantStore_lambda$_lambda_monoStoreUpdate1_listFoldl$l_Cons = function main_monovariantStore_lambda$_lambda_monoStoreUpdate1_listFoldl$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_init) => {
    fv_tmp = runtime.safeCall(fv_f(Cons_head, fv_init));
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, fv_tmp)
  }
};
main_monovariantStore_lambda$_lambda_monoStoreUpdate1_listFoldl$l_Nil = function main_monovariantStore_lambda$_lambda_monoStoreUpdate1_listFoldl$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_init) => {
    return fv_init
  }
};
lambda$1 = (undefined, function (kcfa2) {
  return (e) => {
    return lambda(kcfa2, e)
  }
});
lambda$ = (undefined, function (kcfa2, lambdaLabel) {
  return (p) => {
    return lambda1(kcfa2, lambdaLabel, p)
  }
});
lambda = (undefined, function (kcfa2, e) {
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
ins = function ins(kcfa2, comb, xk, x, nItems, nItems1, s) {
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
            c1 = ins(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$1$1);
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
            d1 = ins(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$4$1);
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
      tmp1 = ins(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$1$);
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
            c11 = ins(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$1$4);
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
            d11 = ins(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$4$4);
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
      tmp11 = ins(kcfa2, comb, xk, x, nItems, nItems1, arg$SmT$4$);
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
(class kcfa {
  static {
    kcfa1 = this
  }
  static get [listPairAllEq$tailrec$accessorSymbol]() { return kcfa.#listPairAllEq$tailrec; }
  static get [listExists$tailrec$accessorSymbol]() { return kcfa.#listExists$tailrec; }
  static get [listMap$tailrec$accessorSymbol]() { return kcfa.#listMap$tailrec; }
  static get [listPairFoldl$accessorSymbol]() { return kcfa.#listPairFoldl; }
  static get [labelSame$accessorSymbol]() { return kcfa.#labelSame; }
  static get [compareLambda$accessorSymbol]() { return kcfa.#compareLambda; }
  static get [sameCall$accessorSymbol]() { return kcfa.#sameCall; }
  static get [bindCompare$accessorSymbol]() { return kcfa.#bindCompare; }
  static get [setNext$accessorSymbol]() { return kcfa.#setNext; }
  static get [setLeft$accessorSymbol]() { return kcfa.#setLeft; }
  static get [setLinkAll$accessorSymbol]() { return kcfa.#setLinkAll; }
  static get [storeMapInsertWith$accessorSymbol]() { return kcfa.#storeMapInsertWith; }
  static get [storeMapNext$accessorSymbol]() { return kcfa.#storeMapNext; }
  static get [storeMapLeft$accessorSymbol]() { return kcfa.#storeMapLeft; }
  static get [storeMapLinkAll$accessorSymbol]() { return kcfa.#storeMapLinkAll; }
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
  static #varMapEmpty() {
    return kcfa.VmMAP(0, kcfa.VmE)
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
  static #setLinkAll(t) {
    let kcfa2, t1, d, inlinedVal;
    kcfa2 = kcfa;
    t1 = kcfa.SetE;
    d = t;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$SetTWO$0$, arg$SetTWO$1$, arg$SetTWO$2$, arg$SetTWO$3$, arg$SetTWO$4$, arg$SetONE$0$, arg$SetONE$1$, arg$SetONE$2$, tmp, tmp1, tmp2;
        if (d instanceof kcfa2.SetZERO.class) {
          inlinedVal = t1;
          break inlinedLbl
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
    }
    return inlinedVal
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
        scrut = ins(kcfa, comb, xk, x, arg$SmMAP$0$, nItems1, arg$SmMAP$1$);
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
  static #storeMapLinkAll(t) {
    let kcfa2, t1, d, inlinedVal;
    kcfa2 = kcfa;
    t1 = kcfa.SmE;
    d = t;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$SmTWO$0$, arg$SmTWO$1$, arg$SmTWO$2$, arg$SmTWO$3$, arg$SmTWO$4$, arg$SmTWO$5$, arg$SmTWO$6$, arg$SmONE$0$, arg$SmONE$1$, arg$SmONE$2$, arg$SmONE$3$, tmp, tmp1, tmp2;
        if (d instanceof kcfa2.SmZERO.class) {
          inlinedVal = t1;
          break inlinedLbl
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
    }
    return inlinedVal
  }
  static #initState(call) {
    let tmp, tmp1;
    tmp = kcfa.#varMapEmpty();
    tmp1 = kcfa.#storeMapEmpty();
    return kcfa.State(call, tmp, tmp1, kcfa.Nil)
  }
  static #alloc(t) {
    return (x) => {
      return kcfa.Bnd(x, t)
    }
  }
  static #stdExample() {
    let labelCount, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, tmp11, tmp12, inlinedVal15, tmp13, n, n1, n2, tmp14, n3, n4, tmp15, n5, n6, tmp16, n7, n8, n9, tmp17, n10, n11, n12, tmp18, n13, n14, n15, n16;
    labelCount = new kcfa.Ref.class(1);
    tmp = kcfa.Cons("k", kcfa.Nil);
    tmp1 = kcfa.Cons("x", tmp);
    n16 = labelCount.value + 1;
    labelCount.value = n16;
    inlinedVal = kcfa.VAR(n16, "k");
    n15 = labelCount.value + 1;
    labelCount.value = n15;
    inlinedVal1 = kcfa.VAR(n15, "x");
    tmp2 = kcfa.Cons(inlinedVal1, kcfa.Nil);
    n14 = labelCount.value + 1;
    labelCount.value = n14;
    inlinedVal2 = kcfa.CALL(n14, inlinedVal, tmp2);
    n13 = labelCount.value + 1;
    labelCount.value = n13;
    tmp18 = globalThis.Object.freeze([
      n13,
      tmp1,
      inlinedVal2
    ]);
    inlinedVal3 = kcfa.LAMBDA(tmp18);
    n12 = labelCount.value + 1;
    labelCount.value = n12;
    inlinedVal4 = kcfa.VAR(n12, "id");
    tmp3 = kcfa.Cons("z", kcfa.Nil);
    n11 = labelCount.value + 1;
    labelCount.value = n11;
    inlinedVal5 = kcfa.RET(n11, "z");
    n10 = labelCount.value + 1;
    labelCount.value = n10;
    tmp17 = globalThis.Object.freeze([
      n10,
      tmp3,
      inlinedVal5
    ]);
    inlinedVal6 = kcfa.LAMBDA(tmp17);
    tmp4 = kcfa.Cons("a", kcfa.Nil);
    n9 = labelCount.value + 1;
    labelCount.value = n9;
    inlinedVal7 = kcfa.VAR(n9, "id");
    tmp5 = kcfa.Cons("y", kcfa.Nil);
    n8 = labelCount.value + 1;
    labelCount.value = n8;
    inlinedVal8 = kcfa.RET(n8, "y");
    n7 = labelCount.value + 1;
    labelCount.value = n7;
    tmp16 = globalThis.Object.freeze([
      n7,
      tmp5,
      inlinedVal8
    ]);
    inlinedVal9 = kcfa.LAMBDA(tmp16);
    tmp6 = kcfa.Cons("b", kcfa.Nil);
    n6 = labelCount.value + 1;
    labelCount.value = n6;
    inlinedVal10 = kcfa.RET(n6, "b");
    n5 = labelCount.value + 1;
    labelCount.value = n5;
    tmp15 = globalThis.Object.freeze([
      n5,
      tmp6,
      inlinedVal10
    ]);
    inlinedVal11 = kcfa.LAMBDA(tmp15);
    tmp7 = kcfa.Cons(inlinedVal11, kcfa.Nil);
    tmp8 = kcfa.Cons(inlinedVal9, tmp7);
    n4 = labelCount.value + 1;
    labelCount.value = n4;
    inlinedVal12 = kcfa.CALL(n4, inlinedVal7, tmp8);
    n3 = labelCount.value + 1;
    labelCount.value = n3;
    tmp14 = globalThis.Object.freeze([
      n3,
      tmp4,
      inlinedVal12
    ]);
    inlinedVal13 = kcfa.LAMBDA(tmp14);
    tmp9 = kcfa.Cons(inlinedVal13, kcfa.Nil);
    tmp10 = kcfa.Cons(inlinedVal6, tmp9);
    n2 = labelCount.value + 1;
    labelCount.value = n2;
    inlinedVal14 = kcfa.CALL(n2, inlinedVal4, tmp10);
    tmp11 = kcfa.Cons("id", kcfa.Nil);
    n = labelCount.value + 1;
    labelCount.value = n;
    tmp13 = globalThis.Object.freeze([
      n,
      tmp11,
      inlinedVal14
    ]);
    inlinedVal15 = kcfa.LAMBDA(tmp13);
    tmp12 = kcfa.Cons(inlinedVal3, kcfa.Nil);
    n1 = labelCount.value + 1;
    labelCount.value = n1;
    return kcfa.CALL(n1, inlinedVal15, tmp12)
  }
  static main() {
    let lambdaLabel, tmp, tmp1, lambda$here, seen, inlinedVal, f, inlinedVal1, init, kcfa2, f1, inlinedVal2, arg$SmMAP$1$, Cons_tail, fv_tmp, fv_tmp1, inlinedVal3, f2, inlinedVal4;
    lambdaLabel = lambda$1(kcfa);
    tmp = kcfa.#stdExample();
    tmp1 = kcfa.#initState(tmp);
    seen = kcfa.Nil;
    Cons_tail = main_explore$todo_Nil();
    f2 = main_explore_member_lambda$$lambda$(kcfa1, tmp1);
    inlinedVal4 = kcfa1.#listExists$tailrec(f2, seen);
    if (inlinedVal4 === true) {
      inlinedVal3 = seen;
    } else {
      let inlinedVal5;
      fv_tmp = kcfa1.Cons(tmp1, seen);
      fv_tmp1 = main_explore_absNext$absNext(tmp1);
      inlinedVal5 = fv_tmp1(undefined, undefined, undefined, undefined, undefined, Cons_tail);
      inlinedVal3 = inlinedVal5(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined, undefined, undefined);
    }
    inlinedVal = kcfa1.SmMAP(0, kcfa1.SmE);
    f = main_summarize_lambda$$lambda$(kcfa1);
    inlinedVal1 = kcfa1.#listFoldl$tailrec(f, inlinedVal, inlinedVal3);
    init = kcfa1.Nil;
    kcfa2 = kcfa1;
    f1 = main_monovariantStore_lambda$$lambda$(kcfa1);
    if (inlinedVal1 instanceof kcfa2.SmMAP.class) {
      arg$SmMAP$1$ = inlinedVal1.tree;
      inlinedVal2 = foldf1(kcfa1, f1, arg$SmMAP$1$, init);
      lambda$here = lambda$(kcfa, lambdaLabel);
      return kcfa.#listMap(lambda$here)(inlinedVal2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "kcfa"];
});
export default kcfa1;
