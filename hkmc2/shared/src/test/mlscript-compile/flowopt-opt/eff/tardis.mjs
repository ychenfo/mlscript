const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const pure$accessorSymbol = globalThis.Symbol("pure");
const getPast$accessorSymbol = globalThis.Symbol("getPast");
const getFuture$accessorSymbol = globalThis.Symbol("getFuture");
const bind$accessorSymbol = globalThis.Symbol("bind");
let getBw1, get, go, tardis1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, score1, throws1, getBw1$, get$, lambda$, lambda$1, lambda$2, lambda$3, throws1$, score1$, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, main_score_go_lambda$_lambda_score1$_score1$score1, main_score_go_lambda$_lambda_score1$$score1$, main_score_go_lambda$_lambda_throws1$_throws1$throws1, main_score_go_lambda$_lambda_throws1$$throws1$, main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda, main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$, main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$, main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1, main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1, main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2, main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2, main_score_go_fix_get$_get$get, main_score_go_fix_get$$get$, score_go_fix_get$_get$get, score_go_fix_get$$get$, score_go_fix$fix, score_go$lambda$, score_go$go, score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda, score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$, score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda, score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$, score_go_lambda$$lambda$, score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1, score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1, score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2, score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2, score_go_lambda$_lambda_throws1$_throws1$throws1, score_go_lambda$_lambda_throws1$$throws1$, score_go_lambda$_lambda_score1$_score1$score1, score_go_lambda$_lambda_score1$$score1$, score_go_lambda$$lambda$1, go_lambda$_lambda_score1$_score1$score1, go_lambda$_lambda_score1$$score1$, go_lambda$$lambda$, go$lambda$, go_lambda$_lambda_throws1$_throws1$throws1, go_lambda$_lambda_throws1$$throws1$, go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda, go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$, go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda, go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$, go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1, go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1, go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2, go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2, go_fix_get$_get$get, go_fix_get$$get$, go_fix$fix, lambda_go_fix_get$_get$get, lambda_go_fix_get$$get$, lambda_go_fix$fix, lambda_go$lambda$, lambda_go$go, lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda, lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$, lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda, lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$, lambda_go_lambda$$lambda$, lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1, lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1, lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2, lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2, lambda_go_lambda$_lambda_throws1$_throws1$throws1, lambda_go_lambda$_lambda_throws1$$throws1$, lambda_go_lambda$_lambda_score1$_score1$score1, lambda_go_lambda$_lambda_score1$$score1$, lambda_score1$_score1$score1, lambda_score1$$score1$, lambda_throws1$_throws1$throws1, lambda_throws1$$throws1$, lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda, lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$, lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda, lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$, lambda_lambda$_lambda$_lambda_lambda$$lambda$, lambda_lambda$_lambda$_lambda$lambda, lambda_lambda$_lambda$$lambda$, lambda_lambda$$lambda$, lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1, lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1, lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2, lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2, lambda_lambda$_lambda$_lambda_sendFuture$sendFuture, lambda_lambda$_lambda$_lambda_bind$bind, lambda_sendPast$sendPast, lambda$_lambda$_lambda_score1$_score1$score1, lambda$_lambda$_lambda_score1$$score1$, lambda$_lambda$$lambda$, lambda$$go, lambda$_lambda$_lambda_throws1$_throws1$throws1, lambda$_lambda$_lambda_throws1$$throws1$, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2, lambda$_fix_get$_get$get, lambda$_fix_get$$get$, lambda$_fix$fix, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$, lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$, lambda$_lambda_lambda$_lambda$_lambda$lambda, lambda$_lambda_lambda$_lambda$$lambda$, lambda$_lambda_lambda$$lambda$, lambda$_lambda$lambda, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2, lambda$_lambda_lambda$_lambda$_lambda_sendFuture$sendFuture, lambda$_lambda_lambda$_lambda$_lambda_bind$bind, lambda$_lambda_sendPast$sendPast, lambda$_lambda_throws1$_throws1$throws1, lambda$_lambda_throws1$$throws1$, lambda$_lambda_score1$_score1$score1, lambda$_lambda_score1$$score1$, lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda, lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$, lambda_lambda$_lambda_lambda$_lambda$_lambda$lambda, lambda_lambda$_lambda_lambda$_lambda$$lambda$, lambda_lambda$_lambda_lambda$$lambda$, lambda_lambda$_lambda$lambda, lambda_lambda$$lambda$1, lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1, lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1, lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2, lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2, lambda_lambda$_lambda_sendFuture$sendFuture, lambda_lambda$_lambda_bind$bind, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$, lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda, lambda$_lambda$_lambda_lambda$_lambda$$lambda$, lambda$_lambda$_lambda_lambda$$lambda$, lambda$_lambda$_lambda$lambda, lambda$_lambda$$lambda$1, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2, lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2, lambda$_lambda$_lambda_sendFuture$sendFuture, lambda$_lambda$_lambda_bind$bind, lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda, lambda_lambda$_lambda$_lambda_lambda$$lambda$1, lambda_lambda$_lambda$_lambda$lambda1, lambda_lambda$_lambda$$lambda$1, lambda_lambda$$lambda$2, lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1, lambda_lambda$_lambda$_lambda_lambda$$lambda$2, lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2, lambda_lambda$_lambda$_lambda_lambda$$lambda$3, lambda_sendFuture$sendFuture, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1, lambda$_lambda_lambda$_lambda$_lambda$lambda1, lambda$_lambda_lambda$_lambda$$lambda$1, lambda$_lambda_lambda$$lambda$1, lambda$_lambda$lambda1, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2, lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2, lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$3, lambda$_lambda_sendFuture$sendFuture, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda_lambda$_lambda_lambda$_lambda$lambda, lambda_lambda$_lambda_lambda$$lambda$1, lambda_lambda$_lambda$lambda1, lambda_lambda$$lambda$3, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda_lambda$_lambda_lambda$$lambda$2, lambda_lambda$_lambda_lambda$_lambda$lambda2, lambda_lambda$_lambda_lambda$$lambda$3, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda$_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda$_lambda_lambda$$lambda$1, lambda$_lambda$_lambda$lambda1, lambda$_lambda$$lambda$2, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda$_lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda$_lambda_lambda$$lambda$2, lambda$_lambda$_lambda_lambda$_lambda$lambda2, lambda$_lambda$_lambda_lambda$$lambda$3, lambda_lambda$_lambda_lambda$_lambda$lambda3, lambda_lambda$_lambda_lambda$$lambda$4, lambda_lambda$_lambda$lambda2, lambda_lambda$$lambda$4, lambda_lambda$_lambda_lambda$_lambda$lambda4, lambda_lambda$_lambda_lambda$$lambda$5, lambda_lambda$_lambda$lambda3, lambda_lambda$$lambda$5, lambda_lambda$_lambda$lambda4, lambda_lambda$$lambda$6, lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda_lambda$$lambda$2, lambda$_lambda$lambda2, lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda_lambda$$lambda$3, lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda$_lambda_lambda$_lambda$lambda2, lambda$_lambda_lambda$$lambda$4, lambda_lambda$_lambda$lambda5, lambda_lambda$$lambda$7, lambda_lambda$_lambda$lambda6, lambda_lambda$$lambda$8, lambda$_lambda$lambda3, lambda$_lambda_lambda$_lambda$lambda3, lambda$_lambda_lambda$$lambda$5, lambda$_lambda$lambda4, lambda$_lambda$lambda5, lambda$_lambda_lambda$_lambda$lambda4, lambda$_lambda_lambda$$lambda$6, lambda$_lambda$lambda6, lambda$_lambda$lambda7, throws1$_throws1$throws1, score1$_score1$score1, score_go_bind$bind, score_go_bind$bind1, go_bind$bind, lambda_go_bind$bind, lambda_bind$bind, lambda$_lambda_bind$bind, lambda_bind$bind1, lambda$_bind$bind, lambda_bind$bind2, lambda$_lambda_bind$bind1, main_score_initialBw$initialBw, lambda$_bind$bind1, lambda$_bind$bind$worker, main_score_initialBw$initialBw$worker, lambda$_lambda_bind$bind$worker, lambda_bind$bind$worker, lambda$_bind$bind$worker1, lambda_bind$bind$worker1, lambda$_lambda_bind$bind$worker1, lambda$_lambda_lambda$_bind$bind$worker, lambda_bind$bind$worker2, lambda_lambda$_bind$bind$worker, lambda_go_bind$bind$worker, go_bind$bind$worker, score_go_bind$bind$worker, score_go_bind$bind$worker1, lambda$_lambda$_lambda_bind$bind$worker, lambda_lambda$_lambda_bind$bind$worker, lambda$_lambda_lambda$_lambda$_lambda_bind$bind$worker, lambda$_fix$fix$worker, lambda$_lambda$_lambda$lambda$worker, lambda_lambda$_lambda$_lambda_bind$bind$worker, lambda_go_lambda$_lambda$lambda$worker, lambda_go_fix$fix$worker, go_fix$fix$worker, go_lambda$_lambda$lambda$worker, score_go_lambda$_lambda$lambda$worker, score_go_lambda$_lambda$lambda$worker1, score_go_fix$fix$worker, main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda$worker, main_score_go$go$worker;
main_score_go$go$worker = function main_score_go$go$worker(tardis2, finalFrameScore, frames, eta$0$0, eta$0$1) {
  let arg$Cons$0$, arg$Cons$1$;
  if (frames instanceof tardis2.Nil.class) {
    let m, r, scrut, element1$, element0$, element1$1, element0$1, tmp, getBw1$here;
    m = tardis2[getPast$accessorSymbol];
    r = new tardis1.Ref.class(tardis1.None);
    getBw1$here = getBw1$(tardis1, r);
    scrut = runtime.safeCall(m(getBw1$here, eta$0$1));
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
      let tardis3, inlinedVal, arg$Cons$0$1, tmp1, lambda$here;
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tardis3 = tardis2;
      if (element0$ instanceof tardis3.Cons.class) {
        arg$Cons$0$1 = element0$.head;
        lambda$here = lambda$13(finalFrameScore, arg$Cons$0$1);
        tmp1 = tardis2.Cons(lambda$here, element0$);
        inlinedVal = globalThis.Object.freeze([
          tmp1,
          eta$0$0,
          undefined
        ]);
        if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 3) {
          element0$1 = runtime.Tuple.get(inlinedVal, 0);
          element1$1 = runtime.Tuple.get(inlinedVal, 1);
          tmp = tardis1.Some(element1$1);
          r.value = tmp;
          return globalThis.Object.freeze([
            element0$1,
            element1$,
            undefined
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } else if (frames instanceof tardis2.Cons.class) {
    let r, element2$, element1$, element1$1, element0$, tmp, inlinedVal, r1, element2$1, element1$2, element0$1, tmp1, p, inlinedVal1, r2, element2$2, element1$3, element2$3, element1$4, element0$2, tmp2, bw, inlinedVal2;
    arg$Cons$0$ = frames.head;
    arg$Cons$1$ = frames.tail;
    r = new tardis1.Ref.class(tardis1.None);
    r1 = new tardis1.Ref.class(tardis1.None);
    p = main_score_go_fix_get$$get$(tardis1, r1);
    r2 = new tardis1.Ref.class(tardis1.None);
    bw = main_score_go_lambda$_lambda_throws1$$throws1$(p);
    inlinedVal2 = globalThis.Object.freeze([
      runtime.Unit,
      bw,
      eta$0$1
    ]);
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 3) {
      let m, inlinedVal3, r3, scrut, element1$5, element0$3, element2$4, element1$6, element0$4, tmp3, getBw1$here;
      element1$3 = runtime.Tuple.get(inlinedVal2, 1);
      element2$2 = runtime.Tuple.get(inlinedVal2, 2);
      m = tardis2[getPast$accessorSymbol];
      r3 = new tardis1.Ref.class(tardis1.None);
      getBw1$here = getBw1$(tardis1, r3);
      scrut = runtime.safeCall(m(getBw1$here, element2$2));
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
        let tardis3, score11, eta$0$01, inlinedVal4, arg$Cons$0$1, tmp4;
        element0$3 = runtime.Tuple.get(scrut, 0);
        element1$5 = runtime.Tuple.get(scrut, 1);
        tardis3 = tardis2;
        score11 = main_score_go_lambda$_lambda_score1$$score1$(p);
        eta$0$01 = getBw1$(tardis1, r);
        if (element0$3 instanceof tardis3.Cons.class) {
          let r4, element2$5, element1$7, element2$6, element1$8, element0$5, tmp5, bw1, inlinedVal5;
          arg$Cons$0$1 = element0$3.head;
          tmp4 = tardis2.Cons(score11, element0$3);
          r4 = new tardis1.Ref.class(tardis1.None);
          bw1 = getBw1$(tardis1, r4);
          inlinedVal5 = globalThis.Object.freeze([
            runtime.Unit,
            bw1,
            tmp4
          ]);
          if (runtime.Tuple.isArrayLike(inlinedVal5) && inlinedVal5.length === 3) {
            let inlinedVal6, lambda$here;
            element1$7 = runtime.Tuple.get(inlinedVal5, 1);
            element2$5 = runtime.Tuple.get(inlinedVal5, 2);
            lambda$here = main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, arg$Cons$0$, arg$Cons$0$1);
            inlinedVal6 = tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)(eta$0$01, element2$5);
            if (runtime.Tuple.isArrayLike(inlinedVal6) && inlinedVal6.length === 3) {
              element0$5 = runtime.Tuple.get(inlinedVal6, 0);
              element1$8 = runtime.Tuple.get(inlinedVal6, 1);
              element2$6 = runtime.Tuple.get(inlinedVal6, 2);
              tmp5 = tardis1.Some(element1$8);
              r4.value = tmp5;
              inlinedVal4 = globalThis.Object.freeze([
                element0$5,
                element1$7,
                element2$6
              ]);
              if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 3) {
                element0$4 = runtime.Tuple.get(inlinedVal4, 0);
                element1$6 = runtime.Tuple.get(inlinedVal4, 1);
                element2$4 = runtime.Tuple.get(inlinedVal4, 2);
                tmp3 = tardis1.Some(element1$6);
                r3.value = tmp3;
                inlinedVal3 = globalThis.Object.freeze([
                  element0$4,
                  element1$5,
                  element2$4
                ]);
                if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 3) {
                  element0$2 = runtime.Tuple.get(inlinedVal3, 0);
                  element1$4 = runtime.Tuple.get(inlinedVal3, 1);
                  element2$3 = runtime.Tuple.get(inlinedVal3, 2);
                  tmp2 = tardis1.Some(element1$4);
                  r2.value = tmp2;
                  inlinedVal1 = globalThis.Object.freeze([
                    element0$2,
                    element1$3,
                    element2$3
                  ]);
                  if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
                    element0$1 = runtime.Tuple.get(inlinedVal1, 0);
                    element1$2 = runtime.Tuple.get(inlinedVal1, 1);
                    element2$1 = runtime.Tuple.get(inlinedVal1, 2);
                    tmp1 = tardis1.Some(element0$1);
                    r1.value = tmp1;
                    inlinedVal = globalThis.Object.freeze([
                      element0$1,
                      element1$2,
                      element2$1
                    ]);
                    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 3) {
                      let inlinedVal7;
                      element1$ = runtime.Tuple.get(inlinedVal, 1);
                      element2$ = runtime.Tuple.get(inlinedVal, 2);
                      inlinedVal7 = main_score_go$go$worker(tardis2, finalFrameScore, arg$Cons$1$, eta$0$0, element2$);
                      if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 3) {
                        element0$ = runtime.Tuple.get(inlinedVal7, 0);
                        element1$1 = runtime.Tuple.get(inlinedVal7, 1);
                        tmp = tardis1.Some(element1$1);
                        r.value = tmp;
                        return globalThis.Object.freeze([
                          element0$,
                          element1$,
                          undefined
                        ])
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
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go_lambda$_lambda_score1$_score1$score1 = function main_score_go_lambda$_lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go_lambda$_lambda_score1$$score1$ = function main_score_go_lambda$_lambda_score1$$score1$(p) {
  return () => {
    return main_score_go_lambda$_lambda_score1$_score1$score1(p)
  }
};
main_score_go_lambda$_lambda_throws1$_throws1$throws1 = function main_score_go_lambda$_lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go_lambda$_lambda_throws1$$throws1$ = function main_score_go_lambda$_lambda_throws1$$throws1$(p) {
  return () => {
    return main_score_go_lambda$_lambda_throws1$_throws1$throws1(p)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda = function main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ = function main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda$worker = function main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$;
  if (f instanceof tardis2.Strike.class) {
    let a;
    a = main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows);
    return globalThis.Object.freeze([
      a,
      eta$0$0,
      eta$0$1
    ])
  } else if (f instanceof tardis2.Spare.class) {
    let a;
    arg$Spare$0$ = f.firstThrow;
    a = main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1(score, nextThrows, arg$Spare$0$);
    return globalThis.Object.freeze([
      a,
      eta$0$0,
      eta$0$1
    ])
  } else if (f instanceof tardis2.Frame.class) {
    let a;
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    a = main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2(score, arg$Frame$1$, arg$Frame$0$);
    return globalThis.Object.freeze([
      a,
      eta$0$0,
      eta$0$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ = function main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1)
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 = function main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 = function main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 = function main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 = function main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2(score, secondThrow, firstThrow)
  }
};
main_score_go_fix_get$_get$get = function main_score_go_fix_get$_get$get(tardis2, r) {
  let scrut;
  scrut = r.value;
  if (scrut instanceof tardis2.Some.class) {
    return runtime.safeCall(scrut.value(undefined))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go_fix_get$$get$ = function main_score_go_fix_get$$get$(tardis2, r) {
  return () => {
    return main_score_go_fix_get$_get$get(tardis2, r)
  }
};
score_go_fix_get$_get$get = function score_go_fix_get$_get$get(tardis2, r) {
  let scrut;
  scrut = r.value;
  if (scrut instanceof tardis2.Some.class) {
    return runtime.safeCall(scrut.value(undefined))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_fix_get$$get$ = function score_go_fix_get$$get$(tardis2, r) {
  return () => {
    return score_go_fix_get$_get$get(tardis2, r)
  }
};
score_go_fix$fix = function score_go_fix$fix(f) {
  return (bw, fw) => {
    return score_go_fix$fix$worker(f, bw, fw)
  }
};
score_go_fix$fix$worker = function score_go_fix$fix$worker(f, bw, fw) {
  let r, scrut, element2$, element1$, element0$, callPrefix, tmp, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = score_go_fix_get$$get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    tmp = tardis1.Some(element0$);
    r.value = tmp;
    return globalThis.Object.freeze([
      element0$,
      element1$,
      element2$
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go$go = function score_go$go(tardis2, finalFrameScore, frames) {
  let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here, lambda$here1, lambda$here2;
  if (frames instanceof tardis2.Nil.class) {
    lambda$here = score_go_lambda$$lambda$1(tardis2, finalFrameScore);
    return score_go_bind$bind(tardis2[getPast$accessorSymbol])(lambda$here)
  } else if (frames instanceof tardis2.Cons.class) {
    arg$Cons$0$ = frames.head;
    arg$Cons$1$ = frames.tail;
    lambda$here1 = score_go_lambda$$lambda$(tardis2, arg$Cons$0$);
    tmp = score_go_fix$fix(lambda$here1);
    lambda$here2 = score_go$lambda$(tardis2, finalFrameScore, arg$Cons$1$);
    return score_go_bind$bind1(tmp)(lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go$lambda$ = function score_go$lambda$(tardis2, finalFrameScore, fs) {
  return () => {
    return score_go$go(tardis2, finalFrameScore, fs)
  }
};
score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda = function score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ = function score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow)
  }
};
score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda = function score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ = function score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows)
  }
};
score_go_lambda$_lambda$lambda$worker1 = function score_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, element2$, element1$, element2$1, element1$1, element0$, tmp, bw, inlinedVal;
  r = new tardis1.Ref.class(tardis1.None);
  bw = score_go_lambda$_lambda_throws1$$throws1$(p);
  inlinedVal = globalThis.Object.freeze([
    runtime.Unit,
    bw,
    eta$0$1
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 3) {
    let m, inlinedVal1, r1, scrut, element1$2, element0$1, element2$2, element1$3, element0$2, tmp1, getBw1$here;
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    element2$ = runtime.Tuple.get(inlinedVal, 2);
    m = tardis2[getPast$accessorSymbol];
    r1 = new tardis1.Ref.class(tardis1.None);
    getBw1$here = getBw1$(tardis1, r1);
    scrut = runtime.safeCall(m(getBw1$here, element2$));
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
      let tardis3, score11, inlinedVal2, arg$Cons$0$, tmp2;
      element0$1 = runtime.Tuple.get(scrut, 0);
      element1$2 = runtime.Tuple.get(scrut, 1);
      tardis3 = tardis2;
      score11 = score_go_lambda$_lambda_score1$$score1$(p);
      if (element0$1 instanceof tardis3.Cons.class) {
        let r2, element2$3, element1$4, element2$4, element1$5, element0$3, tmp3, bw1, inlinedVal3;
        arg$Cons$0$ = element0$1.head;
        tmp2 = tardis2.Cons(score11, element0$1);
        r2 = new tardis1.Ref.class(tardis1.None);
        bw1 = getBw1$(tardis1, r2);
        inlinedVal3 = globalThis.Object.freeze([
          runtime.Unit,
          bw1,
          tmp2
        ]);
        if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 3) {
          let inlinedVal4, lambda$here;
          element1$4 = runtime.Tuple.get(inlinedVal3, 1);
          element2$3 = runtime.Tuple.get(inlinedVal3, 2);
          lambda$here = score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, arg$Cons$0$);
          inlinedVal4 = tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)(eta$0$0, element2$3);
          if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 3) {
            element0$3 = runtime.Tuple.get(inlinedVal4, 0);
            element1$5 = runtime.Tuple.get(inlinedVal4, 1);
            element2$4 = runtime.Tuple.get(inlinedVal4, 2);
            tmp3 = tardis1.Some(element1$5);
            r2.value = tmp3;
            inlinedVal2 = globalThis.Object.freeze([
              element0$3,
              element1$4,
              element2$4
            ]);
            if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 3) {
              element0$2 = runtime.Tuple.get(inlinedVal2, 0);
              element1$3 = runtime.Tuple.get(inlinedVal2, 1);
              element2$2 = runtime.Tuple.get(inlinedVal2, 2);
              tmp1 = tardis1.Some(element1$3);
              r1.value = tmp1;
              inlinedVal1 = globalThis.Object.freeze([
                element0$2,
                element1$2,
                element2$2
              ]);
              if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
                element0$ = runtime.Tuple.get(inlinedVal1, 0);
                element1$1 = runtime.Tuple.get(inlinedVal1, 1);
                element2$1 = runtime.Tuple.get(inlinedVal1, 2);
                tmp = tardis1.Some(element1$1);
                r.value = tmp;
                return globalThis.Object.freeze([
                  element0$,
                  element1$,
                  element2$1
                ])
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
};
score_go_lambda$$lambda$ = function score_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return score_go_lambda$_lambda$lambda$worker1(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 = function score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 = function score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 = function score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 = function score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2(score, nextThrows)
  }
};
score_go_lambda$_lambda_throws1$_throws1$throws1 = function score_go_lambda$_lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$_lambda_throws1$$throws1$ = function score_go_lambda$_lambda_throws1$$throws1$(p) {
  return () => {
    return score_go_lambda$_lambda_throws1$_throws1$throws1(p)
  }
};
score_go_lambda$_lambda_score1$_score1$score1 = function score_go_lambda$_lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$_lambda_score1$$score1$ = function score_go_lambda$_lambda_score1$$score1$(p) {
  return () => {
    return score_go_lambda$_lambda_score1$_score1$score1(p)
  }
};
score_go_lambda$_lambda$lambda$worker = function score_go_lambda$_lambda$lambda$worker(tardis2, finalFrameScore, scores, eta$0$0) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$13(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return globalThis.Object.freeze([
      tmp,
      eta$0$0,
      undefined
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$$lambda$1 = function score_go_lambda$$lambda$(tardis2, finalFrameScore) {
  return (scores) => {
    return (eta$0$0) => {
      return score_go_lambda$_lambda$lambda$worker(tardis2, finalFrameScore, scores, eta$0$0)
    }
  }
};
go_lambda$_lambda_score1$_score1$score1 = function go_lambda$_lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_lambda$_lambda_score1$$score1$ = function go_lambda$_lambda_score1$$score1$(p) {
  return () => {
    return go_lambda$_lambda_score1$_score1$score1(p)
  }
};
go_lambda$_lambda$lambda$worker = function go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, element2$, element1$, element2$1, element1$1, element0$, tmp, bw, inlinedVal;
  r = new tardis1.Ref.class(tardis1.None);
  bw = go_lambda$_lambda_throws1$$throws1$(p);
  inlinedVal = globalThis.Object.freeze([
    runtime.Unit,
    bw,
    eta$0$1
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 3) {
    let m, inlinedVal1, r1, scrut, element1$2, element0$1, element2$2, element1$3, element0$2, tmp1, getBw1$here;
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    element2$ = runtime.Tuple.get(inlinedVal, 2);
    m = tardis2[getPast$accessorSymbol];
    r1 = new tardis1.Ref.class(tardis1.None);
    getBw1$here = getBw1$(tardis1, r1);
    scrut = runtime.safeCall(m(getBw1$here, element2$));
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
      let tardis3, score11, arg$Cons$0$, tmp2;
      element0$1 = runtime.Tuple.get(scrut, 0);
      element1$2 = runtime.Tuple.get(scrut, 1);
      tardis3 = tardis2;
      score11 = go_lambda$_lambda_score1$$score1$(p);
      if (element0$1 instanceof tardis3.Cons.class) {
        let inlinedVal2, r2, element2$3, element1$4, element2$4, element1$5, element0$3, tmp3, bw1, inlinedVal3;
        arg$Cons$0$ = element0$1.head;
        tmp2 = tardis2.Cons(score11, element0$1);
        r2 = new tardis1.Ref.class(tardis1.None);
        bw1 = getBw1$(tardis1, r2);
        inlinedVal3 = globalThis.Object.freeze([
          runtime.Unit,
          bw1,
          tmp2
        ]);
        if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 3) {
          let inlinedVal4, lambda$here;
          element1$4 = runtime.Tuple.get(inlinedVal3, 1);
          element2$3 = runtime.Tuple.get(inlinedVal3, 2);
          lambda$here = go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, arg$Cons$0$);
          inlinedVal4 = tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)(eta$0$0, element2$3);
          if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 3) {
            element0$3 = runtime.Tuple.get(inlinedVal4, 0);
            element1$5 = runtime.Tuple.get(inlinedVal4, 1);
            element2$4 = runtime.Tuple.get(inlinedVal4, 2);
            tmp3 = tardis1.Some(element1$5);
            r2.value = tmp3;
            inlinedVal2 = globalThis.Object.freeze([
              element0$3,
              element1$4,
              element2$4
            ]);
            if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 3) {
              element0$2 = runtime.Tuple.get(inlinedVal2, 0);
              element1$3 = runtime.Tuple.get(inlinedVal2, 1);
              element2$2 = runtime.Tuple.get(inlinedVal2, 2);
              tmp1 = tardis1.Some(element1$3);
              r1.value = tmp1;
              inlinedVal1 = globalThis.Object.freeze([
                element0$2,
                element1$2,
                element2$2
              ]);
              if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
                element0$ = runtime.Tuple.get(inlinedVal1, 0);
                element1$1 = runtime.Tuple.get(inlinedVal1, 1);
                element2$1 = runtime.Tuple.get(inlinedVal1, 2);
                tmp = tardis1.Some(element1$1);
                r.value = tmp;
                return globalThis.Object.freeze([
                  element0$,
                  element1$,
                  element2$1
                ])
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
};
go_lambda$$lambda$ = function go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
go$lambda$ = function go$lambda$(tardis2, finalFrameScore, fs) {
  return () => {
    return go(tardis2, finalFrameScore, fs)
  }
};
go_lambda$_lambda_throws1$_throws1$throws1 = function go_lambda$_lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_lambda$_lambda_throws1$$throws1$ = function go_lambda$_lambda_throws1$$throws1$(p) {
  return () => {
    return go_lambda$_lambda_throws1$_throws1$throws1(p)
  }
};
go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda = function go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ = function go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda = function go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ = function go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows)
  }
};
go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 = function go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 = function go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 = function go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 = function go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2(score, secondThrow, firstThrow)
  }
};
go_fix_get$_get$get = function go_fix_get$_get$get(tardis2, r) {
  let scrut;
  scrut = r.value;
  if (scrut instanceof tardis2.Some.class) {
    return runtime.safeCall(scrut.value(undefined))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_fix_get$$get$ = function go_fix_get$$get$(tardis2, r) {
  return () => {
    return go_fix_get$_get$get(tardis2, r)
  }
};
go_fix$fix = function go_fix$fix(f) {
  return (bw, fw) => {
    return go_fix$fix$worker(f, bw, fw)
  }
};
go_fix$fix$worker = function go_fix$fix$worker(f, bw, fw) {
  let r, scrut, element2$, element1$, element0$, callPrefix, tmp, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = go_fix_get$$get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    tmp = tardis1.Some(element0$);
    r.value = tmp;
    return globalThis.Object.freeze([
      element0$,
      element1$,
      element2$
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_go_fix_get$_get$get = function lambda_go_fix_get$_get$get(tardis2, r) {
  let scrut;
  scrut = r.value;
  if (scrut instanceof tardis2.Some.class) {
    return runtime.safeCall(scrut.value(undefined))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_go_fix_get$$get$ = function lambda_go_fix_get$$get$(tardis2, r) {
  return () => {
    return lambda_go_fix_get$_get$get(tardis2, r)
  }
};
lambda_go_fix$fix = function lambda_go_fix$fix(f) {
  return (bw, fw) => {
    return lambda_go_fix$fix$worker(f, bw, fw)
  }
};
lambda_go_fix$fix$worker = function lambda_go_fix$fix$worker(f, bw, fw) {
  let r, scrut, element2$, element1$, element0$, callPrefix, tmp, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = lambda_go_fix_get$$get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    tmp = tardis1.Some(element0$);
    r.value = tmp;
    return globalThis.Object.freeze([
      element0$,
      element1$,
      element2$
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_go$go = function lambda_go$go(tardis2, finalFrameScore, frames) {
  let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here, lambda$here1, lambda$here2;
  if (frames instanceof tardis2.Nil.class) {
    lambda$here = lambda$2(tardis2, finalFrameScore);
    return tardis2[bind$accessorSymbol](tardis2[getPast$accessorSymbol])(lambda$here)
  } else if (frames instanceof tardis2.Cons.class) {
    arg$Cons$0$ = frames.head;
    arg$Cons$1$ = frames.tail;
    lambda$here1 = lambda_go_lambda$$lambda$(tardis2, arg$Cons$0$);
    tmp = lambda_go_fix$fix(lambda$here1);
    lambda$here2 = lambda_go$lambda$(tardis2, finalFrameScore, arg$Cons$1$);
    return lambda_go_bind$bind(tmp)(lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_go$lambda$ = function lambda_go$lambda$(tardis2, finalFrameScore, fs) {
  return () => {
    return lambda_go$go(tardis2, finalFrameScore, fs)
  }
};
lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda = function lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ = function lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow)
  }
};
lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda = function lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ = function lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows)
  }
};
lambda_go_lambda$_lambda$lambda$worker = function lambda_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, element2$, element1$, element2$1, element1$1, element0$, tmp, bw, inlinedVal;
  r = new tardis1.Ref.class(tardis1.None);
  bw = lambda_go_lambda$_lambda_throws1$$throws1$(p);
  inlinedVal = globalThis.Object.freeze([
    runtime.Unit,
    bw,
    eta$0$1
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 3) {
    let m, inlinedVal1, r1, scrut, element1$2, element0$1, element2$2, element1$3, element0$2, tmp1, getBw1$here;
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    element2$ = runtime.Tuple.get(inlinedVal, 2);
    m = tardis2[getPast$accessorSymbol];
    r1 = new tardis1.Ref.class(tardis1.None);
    getBw1$here = getBw1$(tardis1, r1);
    scrut = runtime.safeCall(m(getBw1$here, element2$));
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
      let tardis3, score11, arg$Cons$0$, tmp2;
      element0$1 = runtime.Tuple.get(scrut, 0);
      element1$2 = runtime.Tuple.get(scrut, 1);
      tardis3 = tardis2;
      score11 = lambda_go_lambda$_lambda_score1$$score1$(p);
      if (element0$1 instanceof tardis3.Cons.class) {
        let inlinedVal2, r2, element2$3, element1$4, element2$4, element1$5, element0$3, tmp3, bw1, inlinedVal3;
        arg$Cons$0$ = element0$1.head;
        tmp2 = tardis2.Cons(score11, element0$1);
        r2 = new tardis1.Ref.class(tardis1.None);
        bw1 = getBw1$(tardis1, r2);
        inlinedVal3 = globalThis.Object.freeze([
          runtime.Unit,
          bw1,
          tmp2
        ]);
        if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 3) {
          let inlinedVal4, lambda$here;
          element1$4 = runtime.Tuple.get(inlinedVal3, 1);
          element2$3 = runtime.Tuple.get(inlinedVal3, 2);
          lambda$here = lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, arg$Cons$0$);
          inlinedVal4 = tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)(eta$0$0, element2$3);
          if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 3) {
            element0$3 = runtime.Tuple.get(inlinedVal4, 0);
            element1$5 = runtime.Tuple.get(inlinedVal4, 1);
            element2$4 = runtime.Tuple.get(inlinedVal4, 2);
            tmp3 = tardis1.Some(element1$5);
            r2.value = tmp3;
            inlinedVal2 = globalThis.Object.freeze([
              element0$3,
              element1$4,
              element2$4
            ]);
            if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 3) {
              element0$2 = runtime.Tuple.get(inlinedVal2, 0);
              element1$3 = runtime.Tuple.get(inlinedVal2, 1);
              element2$2 = runtime.Tuple.get(inlinedVal2, 2);
              tmp1 = tardis1.Some(element1$3);
              r1.value = tmp1;
              inlinedVal1 = globalThis.Object.freeze([
                element0$2,
                element1$2,
                element2$2
              ]);
              if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
                element0$ = runtime.Tuple.get(inlinedVal1, 0);
                element1$1 = runtime.Tuple.get(inlinedVal1, 1);
                element2$1 = runtime.Tuple.get(inlinedVal1, 2);
                tmp = tardis1.Some(element1$1);
                r.value = tmp;
                return globalThis.Object.freeze([
                  element0$,
                  element1$,
                  element2$1
                ])
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
};
lambda_go_lambda$$lambda$ = function lambda_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return lambda_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 = function lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 = function lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 = function lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 = function lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2(score, nextThrows)
  }
};
lambda_go_lambda$_lambda_throws1$_throws1$throws1 = function lambda_go_lambda$_lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_go_lambda$_lambda_throws1$$throws1$ = function lambda_go_lambda$_lambda_throws1$$throws1$(p) {
  return () => {
    return lambda_go_lambda$_lambda_throws1$_throws1$throws1(p)
  }
};
lambda_go_lambda$_lambda_score1$_score1$score1 = function lambda_go_lambda$_lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_go_lambda$_lambda_score1$$score1$ = function lambda_go_lambda$_lambda_score1$$score1$(p) {
  return () => {
    return lambda_go_lambda$_lambda_score1$_score1$score1(p)
  }
};
lambda_score1$_score1$score1 = function lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_score1$$score1$ = function lambda_score1$$score1$(p) {
  return () => {
    return lambda_score1$_score1$score1(p)
  }
};
lambda_throws1$_throws1$throws1 = function lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_throws1$$throws1$ = function lambda_throws1$$throws1$(p) {
  return () => {
    return lambda_throws1$_throws1$throws1(p)
  }
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ = function lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda = function lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ = function lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows)
  }
};
lambda_lambda$_lambda$_lambda_lambda$$lambda$ = function lambda_lambda$_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let lambda$here;
      lambda$here = lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score);
      return tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)(eta$0$0, eta$0$1)
    }
  }
};
lambda_lambda$_lambda$_lambda$lambda = function lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score11, scores) {
  let arg$Cons$0$, tmp, tmp1, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    tmp1 = lambda_lambda$_lambda$_lambda_sendFuture$sendFuture(tmp);
    lambda$here = lambda_lambda$_lambda$_lambda_lambda$$lambda$(tardis2, f, arg$Cons$0$);
    return lambda_lambda$_lambda$_lambda_bind$bind(tmp1)(lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda$$lambda$ = function lambda_lambda$_lambda$$lambda$(tardis2, f, score11) {
  return (scores) => {
    return lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score11, scores)
  }
};
lambda_lambda$$lambda$ = function lambda_lambda$$lambda$(tardis2, f, score11) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let m, f1;
      m = tardis2[getPast$accessorSymbol];
      f1 = lambda_lambda$_lambda$$lambda$(tardis2, f, score11);
      return lambda_lambda$_bind$bind$worker(m, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 = function lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 = function lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 = function lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 = function lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2(score, secondThrow, firstThrow)
  }
};
lambda_lambda$_lambda$_lambda_sendFuture$sendFuture = function lambda_lambda$_lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return globalThis.Object.freeze([
      runtime.Unit,
      bw,
      fw
    ])
  }
};
lambda_lambda$_lambda$_lambda_bind$bind = function lambda_lambda$_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw) => {
      return lambda_lambda$_lambda$_lambda_bind$bind$worker(m, f, bw)
    }
  }
};
lambda_lambda$_lambda$_lambda_bind$bind$worker = function lambda_lambda$_lambda$_lambda_bind$bind$worker(m, f, bw) {
  let r, scrut, scrut1, element2$, element1$, element2$1, element1$1, element0$, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    callPrefix = runtime.safeCall(f());
    scrut1 = runtime.safeCall(callPrefix(bw, element2$));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$1 = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$,
        element1$,
        element2$1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_sendPast$sendPast = function lambda_sendPast$sendPast(bw) {
  return (fw) => {
    return globalThis.Object.freeze([
      runtime.Unit,
      bw,
      fw
    ])
  }
};
lambda$_lambda$_lambda_score1$_score1$score1 = function lambda$_lambda$_lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_score1$$score1$ = function lambda$_lambda$_lambda_score1$$score1$(p) {
  return () => {
    return lambda$_lambda$_lambda_score1$_score1$score1(p)
  }
};
lambda$_lambda$_lambda$lambda$worker = function lambda$_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, element2$, element1$, element2$1, element1$1, element0$, tmp, bw, inlinedVal;
  r = new tardis1.Ref.class(tardis1.None);
  bw = lambda$_lambda$_lambda_throws1$$throws1$(p);
  inlinedVal = globalThis.Object.freeze([
    runtime.Unit,
    bw,
    eta$0$1
  ]);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 3) {
    let m, inlinedVal1, r1, scrut, element1$2, element0$1, element2$2, element1$3, element0$2, tmp1, getBw1$here;
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    element2$ = runtime.Tuple.get(inlinedVal, 2);
    m = tardis2[getPast$accessorSymbol];
    r1 = new tardis1.Ref.class(tardis1.None);
    getBw1$here = getBw1$(tardis1, r1);
    scrut = runtime.safeCall(m(getBw1$here, element2$));
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
      let tardis3, score11, arg$Cons$0$, tmp2;
      element0$1 = runtime.Tuple.get(scrut, 0);
      element1$2 = runtime.Tuple.get(scrut, 1);
      tardis3 = tardis2;
      score11 = lambda$_lambda$_lambda_score1$$score1$(p);
      if (element0$1 instanceof tardis3.Cons.class) {
        let inlinedVal2, r2, element2$3, element1$4, element2$4, element1$5, element0$3, tmp3, bw1, inlinedVal3;
        arg$Cons$0$ = element0$1.head;
        tmp2 = tardis2.Cons(score11, element0$1);
        r2 = new tardis1.Ref.class(tardis1.None);
        bw1 = getBw1$(tardis1, r2);
        inlinedVal3 = globalThis.Object.freeze([
          runtime.Unit,
          bw1,
          tmp2
        ]);
        if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 3) {
          let inlinedVal4, lambda$here;
          element1$4 = runtime.Tuple.get(inlinedVal3, 1);
          element2$3 = runtime.Tuple.get(inlinedVal3, 2);
          lambda$here = lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, arg$Cons$0$);
          inlinedVal4 = tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)(eta$0$0, element2$3);
          if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 3) {
            element0$3 = runtime.Tuple.get(inlinedVal4, 0);
            element1$5 = runtime.Tuple.get(inlinedVal4, 1);
            element2$4 = runtime.Tuple.get(inlinedVal4, 2);
            tmp3 = tardis1.Some(element1$5);
            r2.value = tmp3;
            inlinedVal2 = globalThis.Object.freeze([
              element0$3,
              element1$4,
              element2$4
            ]);
            if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 3) {
              element0$2 = runtime.Tuple.get(inlinedVal2, 0);
              element1$3 = runtime.Tuple.get(inlinedVal2, 1);
              element2$2 = runtime.Tuple.get(inlinedVal2, 2);
              tmp1 = tardis1.Some(element1$3);
              r1.value = tmp1;
              inlinedVal1 = globalThis.Object.freeze([
                element0$2,
                element1$2,
                element2$2
              ]);
              if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
                element0$ = runtime.Tuple.get(inlinedVal1, 0);
                element1$1 = runtime.Tuple.get(inlinedVal1, 1);
                element2$1 = runtime.Tuple.get(inlinedVal1, 2);
                tmp = tardis1.Some(element1$1);
                r.value = tmp;
                return globalThis.Object.freeze([
                  element0$,
                  element1$,
                  element2$1
                ])
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
};
lambda$_lambda$$lambda$ = function lambda$_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return lambda$_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
lambda$$go = function lambda$$go(tardis2, finalFrameScore, frames) {
  let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here, lambda$here1, lambda$here2;
  if (frames instanceof tardis2.Nil.class) {
    lambda$here = lambda$2(tardis2, finalFrameScore);
    return tardis2[bind$accessorSymbol](tardis2[getPast$accessorSymbol])(lambda$here)
  } else if (frames instanceof tardis2.Cons.class) {
    arg$Cons$0$ = frames.head;
    arg$Cons$1$ = frames.tail;
    lambda$here1 = lambda$_lambda$$lambda$(tardis2, arg$Cons$0$);
    tmp = lambda$_fix$fix(lambda$here1);
    lambda$here2 = lambda$(tardis2, finalFrameScore, arg$Cons$1$);
    return lambda$_bind$bind1(tmp)(lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_throws1$_throws1$throws1 = function lambda$_lambda$_lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_throws1$$throws1$ = function lambda$_lambda$_lambda_throws1$$throws1$(p) {
  return () => {
    return lambda$_lambda$_lambda_throws1$_throws1$throws1(p)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2(score, secondThrow, firstThrow)
  }
};
lambda$_fix_get$_get$get = function lambda$_fix_get$_get$get(tardis2, r) {
  let scrut;
  scrut = r.value;
  if (scrut instanceof tardis2.Some.class) {
    return runtime.safeCall(scrut.value(undefined))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_fix_get$$get$ = function lambda$_fix_get$$get$(tardis2, r) {
  return () => {
    return lambda$_fix_get$_get$get(tardis2, r)
  }
};
lambda$_fix$fix = function lambda$_fix$fix(f) {
  return (bw, fw) => {
    return lambda$_fix$fix$worker(f, bw, fw)
  }
};
lambda$_fix$fix$worker = function lambda$_fix$fix$worker(f, bw, fw) {
  let r, scrut, element2$, element1$, element0$, callPrefix, tmp, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = lambda$_fix_get$$get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    tmp = tardis1.Some(element0$);
    r.value = tmp;
    return globalThis.Object.freeze([
      element0$,
      element1$,
      element2$
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow)
  }
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows)
  }
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let lambda$here;
      lambda$here = lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score);
      return tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)(eta$0$0, eta$0$1)
    }
  }
};
lambda$_lambda_lambda$_lambda$_lambda$lambda = function lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score11, scores) {
  let arg$Cons$0$, tmp, tmp1, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    tmp1 = lambda$_lambda_lambda$_lambda$_lambda_sendFuture$sendFuture(tmp);
    lambda$here = lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(tardis2, f, arg$Cons$0$);
    return lambda$_lambda_lambda$_lambda$_lambda_bind$bind(tmp1)(lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda$$lambda$ = function lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score11) {
  return (scores) => {
    return lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score11, scores)
  }
};
lambda$_lambda_lambda$$lambda$ = function lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let m, f1;
      m = tardis2[getPast$accessorSymbol];
      f1 = lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score11);
      return lambda$_lambda_lambda$_bind$bind$worker(m, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda$_lambda$lambda = function lambda$_lambda$lambda(tardis2, f, p) {
  let score11, throws11, tmp, lambda$here;
  score11 = lambda$_lambda_score1$$score1$(p);
  throws11 = lambda$_lambda_throws1$$throws1$(p);
  tmp = lambda$_lambda_sendPast$sendPast(throws11);
  lambda$here = lambda$_lambda_lambda$$lambda$(tardis2, f, score11);
  return lambda$_lambda_bind$bind(tmp)(lambda$here)
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2(score, nextThrows)
  }
};
lambda$_lambda_lambda$_lambda$_lambda_sendFuture$sendFuture = function lambda$_lambda_lambda$_lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return globalThis.Object.freeze([
      runtime.Unit,
      bw,
      fw
    ])
  }
};
lambda$_lambda_lambda$_lambda$_lambda_bind$bind = function lambda$_lambda_lambda$_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw) => {
      return lambda$_lambda_lambda$_lambda$_lambda_bind$bind$worker(m, f, bw)
    }
  }
};
lambda$_lambda_lambda$_lambda$_lambda_bind$bind$worker = function lambda$_lambda_lambda$_lambda$_lambda_bind$bind$worker(m, f, bw) {
  let r, scrut, scrut1, element2$, element1$, element2$1, element1$1, element0$, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    callPrefix = runtime.safeCall(f());
    scrut1 = runtime.safeCall(callPrefix(bw, element2$));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$1 = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$,
        element1$,
        element2$1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_sendPast$sendPast = function lambda$_lambda_sendPast$sendPast(bw) {
  return (fw) => {
    return globalThis.Object.freeze([
      runtime.Unit,
      bw,
      fw
    ])
  }
};
lambda$_lambda_throws1$_throws1$throws1 = function lambda$_lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_throws1$$throws1$ = function lambda$_lambda_throws1$$throws1$(p) {
  return () => {
    return lambda$_lambda_throws1$_throws1$throws1(p)
  }
};
lambda$_lambda_score1$_score1$score1 = function lambda$_lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_score1$$score1$ = function lambda$_lambda_score1$$score1$(p) {
  return () => {
    return lambda$_lambda_score1$_score1$score1(p)
  }
};
lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ = function lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow)
  }
};
lambda_lambda$_lambda_lambda$_lambda$_lambda$lambda = function lambda_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$_lambda$$lambda$ = function lambda_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return lambda_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows)
  }
};
lambda_lambda$_lambda_lambda$$lambda$ = function lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let lambda$here;
      lambda$here = lambda_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score);
      return tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)(eta$0$0, eta$0$1)
    }
  }
};
lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda$lambda(tardis2, f, score11, scores) {
  let arg$Cons$0$, tmp, tmp1, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    tmp1 = lambda_lambda$_lambda_sendFuture$sendFuture(tmp);
    lambda$here = lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, arg$Cons$0$);
    return lambda_lambda$_lambda_bind$bind(tmp1)(lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$$lambda$1 = function lambda_lambda$$lambda$(tardis2, f, score11) {
  return (scores) => {
    return lambda_lambda$_lambda$lambda(tardis2, f, score11, scores)
  }
};
lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 = function lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 = function lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 = function lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 = function lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2(score, nextThrows)
  }
};
lambda_lambda$_lambda_sendFuture$sendFuture = function lambda_lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return globalThis.Object.freeze([
      runtime.Unit,
      bw,
      fw
    ])
  }
};
lambda_lambda$_lambda_bind$bind = function lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw) => {
      return lambda_lambda$_lambda_bind$bind$worker(m, f, bw)
    }
  }
};
lambda_lambda$_lambda_bind$bind$worker = function lambda_lambda$_lambda_bind$bind$worker(m, f, bw) {
  let r, scrut, scrut1, element2$, element1$, element2$1, element1$1, element0$, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    callPrefix = runtime.safeCall(f());
    scrut1 = runtime.safeCall(callPrefix(bw, element2$));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$1 = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$,
        element1$,
        element2$1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda = function lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$_lambda$$lambda$ = function lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows)
  }
};
lambda$_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let lambda$here;
      lambda$here = lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score);
      return tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)(eta$0$0, eta$0$1)
    }
  }
};
lambda$_lambda$_lambda$lambda = function lambda$_lambda$_lambda$lambda(tardis2, f, score11, scores) {
  let arg$Cons$0$, tmp, tmp1, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    tmp1 = lambda$_lambda$_lambda_sendFuture$sendFuture(tmp);
    lambda$here = lambda$_lambda$_lambda_lambda$$lambda$(tardis2, f, arg$Cons$0$);
    return lambda$_lambda$_lambda_bind$bind(tmp1)(lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$$lambda$1 = function lambda$_lambda$$lambda$(tardis2, f, score11) {
  return (scores) => {
    return lambda$_lambda$_lambda$lambda(tardis2, f, score11, scores)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 = function lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2(score, nextThrows)
  }
};
lambda$_lambda$_lambda_sendFuture$sendFuture = function lambda$_lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return globalThis.Object.freeze([
      runtime.Unit,
      bw,
      fw
    ])
  }
};
lambda$_lambda$_lambda_bind$bind = function lambda$_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw) => {
      return lambda$_lambda$_lambda_bind$bind$worker(m, f, bw)
    }
  }
};
lambda$_lambda$_lambda_bind$bind$worker = function lambda$_lambda$_lambda_bind$bind$worker(m, f, bw) {
  let r, scrut, scrut1, element2$, element1$, element2$1, element1$1, element0$, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    callPrefix = runtime.safeCall(f());
    scrut1 = runtime.safeCall(callPrefix(bw, element2$));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$1 = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$,
        element1$,
        element2$1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
lambda_lambda$_lambda$_lambda_lambda$$lambda$1 = function lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow)
  }
};
lambda_lambda$_lambda$_lambda$lambda1 = function lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = lambda_lambda$_lambda$_lambda_lambda$$lambda$3(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = lambda_lambda$_lambda$_lambda_lambda$$lambda$2(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = lambda_lambda$_lambda$_lambda_lambda$$lambda$1(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda$$lambda$1 = function lambda_lambda$_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return lambda_lambda$_lambda$_lambda$lambda1(tardis2, f, score, nextThrows)
  }
};
lambda_lambda$$lambda$2 = function lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let lambda$here;
      lambda$here = lambda_lambda$_lambda$$lambda$1(tardis2, f, score);
      return tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)(eta$0$0, eta$0$1)
    }
  }
};
lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 = function lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
lambda_lambda$_lambda$_lambda_lambda$$lambda$2 = function lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 = function lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda$_lambda_lambda$$lambda$3 = function lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2(score, nextThrows)
  }
};
lambda_sendFuture$sendFuture = function lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return globalThis.Object.freeze([
      runtime.Unit,
      bw,
      fw
    ])
  }
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda$_lambda_lambda$_lambda$_lambda$lambda1 = function lambda$_lambda_lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$3(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda$$lambda$1 = function lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return lambda$_lambda_lambda$_lambda$_lambda$lambda1(tardis2, f, score, nextThrows)
  }
};
lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let lambda$here;
      lambda$here = lambda$_lambda_lambda$_lambda$$lambda$1(tardis2, f, score);
      return tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)(eta$0$0, eta$0$1)
    }
  }
};
lambda$_lambda$lambda1 = function lambda$_lambda$lambda(tardis2, f, score11, scores) {
  let arg$Cons$0$, tmp, tmp1, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    tmp1 = lambda$_lambda_sendFuture$sendFuture(tmp);
    lambda$here = lambda$_lambda_lambda$$lambda$1(tardis2, f, arg$Cons$0$);
    return lambda$_lambda_bind$bind1(tmp1)(lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 = function lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 = function lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$3 = function lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2(score, secondThrow, firstThrow)
  }
};
lambda$_lambda_sendFuture$sendFuture = function lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return globalThis.Object.freeze([
      runtime.Unit,
      bw,
      fw
    ])
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$$lambda$1 = function lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda_lambda$_lambda$lambda1 = function lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = lambda_lambda$_lambda_lambda$$lambda$2(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = lambda_lambda$_lambda_lambda$$lambda$3(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$$lambda$3 = function lambda_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return lambda_lambda$_lambda$lambda1(tardis2, f, score, nextThrows)
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
lambda_lambda$_lambda_lambda$$lambda$2 = function lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
lambda_lambda$_lambda_lambda$_lambda$lambda2 = function lambda_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
lambda_lambda$_lambda_lambda$$lambda$3 = function lambda_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return lambda_lambda$_lambda_lambda$_lambda$lambda2(score, secondThrow, firstThrow)
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda$_lambda$_lambda$lambda1 = function lambda$_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = lambda$_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = lambda$_lambda$_lambda_lambda$$lambda$2(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = lambda$_lambda$_lambda_lambda$$lambda$3(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$$lambda$2 = function lambda$_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return lambda$_lambda$_lambda$lambda1(tardis2, f, score, nextThrows)
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
lambda$_lambda$_lambda_lambda$$lambda$2 = function lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return lambda$_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$lambda2 = function lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
lambda$_lambda$_lambda_lambda$$lambda$3 = function lambda$_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return lambda$_lambda$_lambda_lambda$_lambda$lambda2(score, secondThrow, firstThrow)
  }
};
lambda_lambda$_lambda_lambda$_lambda$lambda3 = function lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$$lambda$4 = function lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_lambda$_lambda_lambda$_lambda$lambda3(score, nextThrows)
  }
};
lambda_lambda$_lambda$lambda2 = function lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda_lambda$_lambda_lambda$$lambda$4(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$$lambda$4 = function lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return lambda_lambda$_lambda$lambda2(score, nextThrows)
  }
};
lambda_lambda$_lambda_lambda$_lambda$lambda4 = function lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$$lambda$5 = function lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_lambda$_lambda_lambda$_lambda$lambda4(score, nextThrows)
  }
};
lambda_lambda$_lambda$lambda3 = function lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda_lambda$_lambda_lambda$$lambda$5(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
lambda_lambda$$lambda$5 = function lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return lambda_lambda$_lambda$lambda3(score, nextThrows, firstThrow)
  }
};
lambda_lambda$_lambda$lambda4 = function lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
lambda_lambda$$lambda$6 = function lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return lambda_lambda$_lambda$lambda4(score, secondThrow, firstThrow)
  }
};
lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
lambda$_lambda_lambda$$lambda$2 = function lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow)
  }
};
lambda$_lambda$lambda2 = function lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = lambda$_lambda_lambda$$lambda$4(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = lambda$_lambda_lambda$$lambda$3(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = lambda$_lambda_lambda$$lambda$2(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
lambda$_lambda_lambda$$lambda$3 = function lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
lambda$_lambda_lambda$_lambda$lambda2 = function lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$$lambda$4 = function lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return lambda$_lambda_lambda$_lambda$lambda2(score, nextThrows)
  }
};
lambda_lambda$_lambda$lambda5 = function lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$$lambda$7 = function lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_lambda$_lambda$lambda5(score, nextThrows)
  }
};
lambda_lambda$_lambda$lambda6 = function lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$$lambda$8 = function lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda_lambda$_lambda$lambda6(score, nextThrows)
  }
};
lambda$_lambda$lambda3 = function lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
lambda$_lambda_lambda$_lambda$lambda3 = function lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$$lambda$5 = function lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda_lambda$_lambda$lambda3(score, nextThrows)
  }
};
lambda$_lambda$lambda4 = function lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda$_lambda_lambda$$lambda$5(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
lambda$_lambda$lambda5 = function lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda$lambda4 = function lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$$lambda$6 = function lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return lambda$_lambda_lambda$_lambda$lambda4(score, nextThrows)
  }
};
lambda$_lambda$lambda6 = function lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda$_lambda_lambda$$lambda$6(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$lambda7 = function lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
throws1$_throws1$throws1 = function throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score1$_score1$score1 = function score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_bind$bind = function score_go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return score_go_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
score_go_bind$bind$worker1 = function score_go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, scrut1, element1$, element0$, element1$1, element0$1, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    callPrefix = runtime.safeCall(f(element0$));
    scrut1 = runtime.safeCall(callPrefix(bw));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$1 = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$1,
        element1$,
        undefined
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_bind$bind1 = function score_go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return score_go_bind$bind$worker(m, f, bw, fw)
    }
  }
};
score_go_bind$bind$worker = function score_go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, scrut1, element2$, element1$, element1$1, element0$, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    callPrefix = runtime.safeCall(f());
    scrut1 = runtime.safeCall(callPrefix(bw, element2$));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$,
        element1$,
        undefined
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_bind$bind = function go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return go_bind$bind$worker(m, f, bw, fw)
    }
  }
};
go_bind$bind$worker = function go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, scrut1, element2$, element1$, element2$1, element1$1, element0$, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    callPrefix = runtime.safeCall(f());
    scrut1 = runtime.safeCall(callPrefix(bw, element2$));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$1 = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$,
        element1$,
        element2$1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_go_bind$bind = function lambda_go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_go_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda_go_bind$bind$worker = function lambda_go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, scrut1, element2$, element1$, element2$1, element1$1, element0$, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    callPrefix = runtime.safeCall(f());
    scrut1 = runtime.safeCall(callPrefix(bw, element2$));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$1 = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$,
        element1$,
        element2$1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_bind$bind$worker = function lambda_lambda$_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, scrut1, element1$, element0$, element2$, element1$1, element0$1, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    callPrefix = runtime.safeCall(f(element0$));
    scrut1 = runtime.safeCall(callPrefix(bw));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$1 = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$ = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$1,
        element1$,
        element2$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_bind$bind = function lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_bind$bind$worker2(m, f, bw, fw)
    }
  }
};
lambda_bind$bind$worker2 = function lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, scrut1, element2$, element1$, element2$1, element1$1, element0$, callPrefix, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  scrut = runtime.safeCall(m(fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    callPrefix = runtime.safeCall(f());
    scrut1 = runtime.safeCall(callPrefix(bw, element2$));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$1 = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$,
        element1$,
        element2$1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_bind$bind$worker = function lambda$_lambda_lambda$_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, scrut1, element1$, element0$, element2$, element1$1, element0$1, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    callPrefix = runtime.safeCall(f(element0$));
    scrut1 = runtime.safeCall(callPrefix(bw));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$1 = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$ = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$1,
        element1$,
        element2$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_bind$bind = function lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
lambda$_lambda_bind$bind$worker1 = function lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, scrut1, element2$, element1$, element2$1, element1$1, element0$, callPrefix, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  scrut = runtime.safeCall(m(fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    callPrefix = runtime.safeCall(f());
    scrut1 = runtime.safeCall(callPrefix(bw, element2$));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$1 = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$,
        element1$,
        element2$1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_bind$bind1 = function lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
lambda_bind$bind$worker1 = function lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, scrut1, element1$, element0$, element2$, element1$1, element0$1, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    callPrefix = runtime.safeCall(f(element0$));
    scrut1 = runtime.safeCall(callPrefix(bw));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$1 = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$ = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$1,
        element1$,
        element2$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_bind$bind = function lambda$_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
lambda$_bind$bind$worker1 = function lambda$_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, scrut1, element1$, element0$, element2$, element1$1, element0$1, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    callPrefix = runtime.safeCall(f(element0$));
    scrut1 = runtime.safeCall(callPrefix(bw));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$1 = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$ = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$1,
        element1$,
        element2$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_bind$bind2 = function lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda_bind$bind$worker = function lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, scrut1, element2$, element1$, element2$1, element1$1, element0$, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    callPrefix = runtime.safeCall(f());
    scrut1 = runtime.safeCall(callPrefix(bw, element2$));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$1 = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$,
        element1$,
        element2$1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_bind$bind1 = function lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda$_lambda_bind$bind$worker = function lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, scrut1, element2$, element1$, element2$1, element1$1, element0$, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    callPrefix = runtime.safeCall(f());
    scrut1 = runtime.safeCall(callPrefix(bw, element2$));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$1 = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$,
        element1$,
        element2$1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_initialBw$initialBw = function main_score_initialBw$initialBw(lastFrame) {
  return () => {
    return main_score_initialBw$initialBw$worker(lastFrame)
  }
};
main_score_initialBw$initialBw$worker = function main_score_initialBw$initialBw$worker(lastFrame) {
  let arg$LStrike$0$;
  if (lastFrame instanceof tardis1.LStrike.class) {
    arg$LStrike$0$ = lastFrame.bonus1;
    return globalThis.Object.freeze([
      10,
      arg$LStrike$0$
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_bind$bind1 = function lambda$_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda$_bind$bind$worker = function lambda$_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, scrut1, element2$, element1$, element2$1, element1$1, element0$, callPrefix, tmp, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
    element1$ = runtime.Tuple.get(scrut, 1);
    element2$ = runtime.Tuple.get(scrut, 2);
    callPrefix = runtime.safeCall(f(undefined));
    scrut1 = runtime.safeCall(callPrefix(bw, element2$));
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$1 = runtime.Tuple.get(scrut1, 1);
      element2$1 = runtime.Tuple.get(scrut1, 2);
      tmp = tardis1.Some(element1$1);
      r.value = tmp;
      return globalThis.Object.freeze([
        element0$,
        element1$,
        element2$1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$13 = (undefined, function (finalFrameScore, score) {
  return () => {
    let tmp;
    tmp = runtime.safeCall(score());
    return finalFrameScore + tmp
  }
});
lambda = (undefined, function (finalFrameScore, score) {
  let tmp;
  tmp = runtime.safeCall(score());
  return finalFrameScore + tmp
});
lambda$2 = (undefined, function (tardis2, finalFrameScore) {
  return (scores) => {
    return lambda1(tardis2, finalFrameScore, scores)
  }
});
score1$ = function score1$(tardis2, p) {
  return () => {
    return score1$_score1$score1(p)
  }
};
throws1$ = function throws1$(tardis2, p) {
  return () => {
    return throws1$_throws1$throws1(p)
  }
};
lambda$12 = (undefined, function (tardis2, score, nextThrows) {
  return () => {
    return lambda$_lambda$lambda7(score, nextThrows)
  }
});
lambda2 = (undefined, function (tardis2, score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$9 = (undefined, function (tardis2, score, nextThrows) {
  return (_) => {
    return lambda$_lambda$lambda6(score, nextThrows)
  }
});
lambda$11 = (undefined, function (tardis2, score, nextThrows) {
  return () => {
    return lambda$_lambda$lambda5(score, nextThrows)
  }
});
lambda4 = (undefined, function (tardis2, score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$8 = (undefined, function (tardis2, score, nextThrows, firstThrow) {
  return (_) => {
    return lambda$_lambda$lambda4(score, nextThrows, firstThrow)
  }
});
lambda$10 = (undefined, function (score, secondThrow, firstThrow) {
  return () => {
    return lambda6(score, secondThrow, firstThrow)
  }
});
lambda6 = (undefined, function (score, secondThrow, firstThrow) {
  let tmp, tmp1;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + firstThrow;
  return tmp1 + secondThrow
});
lambda$7 = (undefined, function (score, secondThrow, firstThrow) {
  return (_) => {
    return lambda$_lambda$lambda3(score, secondThrow, firstThrow)
  }
});
lambda3 = (undefined, function (tardis2, score, nextThrows, _) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda_lambda$$lambda$8(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda5 = (undefined, function (tardis2, score, nextThrows, firstThrow, _) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda_lambda$$lambda$7(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
});
lambda7 = (undefined, function (score, secondThrow, firstThrow, _) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
});
lambda$6 = (undefined, function (tardis2, f, score) {
  return (nextThrows) => {
    return lambda$_lambda$lambda2(tardis2, f, score, nextThrows)
  }
});
lambda8 = (undefined, function (tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = lambda_lambda$$lambda$4(score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = lambda_lambda$$lambda$5(score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = lambda_lambda$$lambda$6(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$5 = (undefined, function (tardis2, f, score) {
  return (_) => {
    let lambda$here;
    lambda$here = lambda$_lambda$$lambda$2(tardis2, f, score);
    return tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)
  }
});
lambda9 = (undefined, function (tardis2, f, score, _) {
  let lambda$here;
  lambda$here = lambda_lambda$$lambda$3(tardis2, f, score);
  return tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)
});
lambda$4 = (undefined, function (tardis2, f, score11) {
  return (scores) => {
    return lambda$_lambda$lambda1(tardis2, f, score11, scores)
  }
});
lambda10 = (undefined, function (tardis2, f, score11, scores) {
  let arg$Cons$0$, tmp, tmp1, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    tmp1 = lambda_sendFuture$sendFuture(tmp);
    lambda$here = lambda_lambda$$lambda$2(tardis2, f, arg$Cons$0$);
    return lambda_bind$bind2(tmp1)(lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (tardis2, f, score11) {
  return (_) => {
    let lambda$here;
    lambda$here = lambda$_lambda$$lambda$1(tardis2, f, score11);
    return lambda$_bind$bind(tardis2[getPast$accessorSymbol])(lambda$here)
  }
});
score1 = function score1(tardis2, p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
throws1 = function throws1(tardis2, p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda11 = (undefined, function (tardis2, f, score11, _) {
  let lambda$here;
  lambda$here = lambda_lambda$$lambda$1(tardis2, f, score11);
  return lambda_bind$bind1(tardis2[getPast$accessorSymbol])(lambda$here)
});
lambda$1 = (undefined, function (tardis2, f) {
  return (p) => {
    return lambda$_lambda$lambda(tardis2, f, p)
  }
});
lambda$ = (undefined, function (tardis2, finalFrameScore, fs) {
  return (_) => {
    return lambda$$go(tardis2, finalFrameScore, fs)
  }
});
lambda1 = (undefined, function (tardis2, finalFrameScore, scores) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$13(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return tardis2[pure$accessorSymbol](tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda12 = (undefined, function (tardis2, f, p) {
  let score11, throws11, tmp, lambda$here;
  score11 = lambda_score1$$score1$(p);
  throws11 = lambda_throws1$$throws1$(p);
  tmp = lambda_sendPast$sendPast(throws11);
  lambda$here = lambda_lambda$$lambda$(tardis2, f, score11);
  return lambda_bind$bind(tmp)(lambda$here)
});
lambda13 = (undefined, function (tardis2, finalFrameScore, fs, _) {
  return lambda_go$go(tardis2, finalFrameScore, fs)
});
go = function go(tardis2, finalFrameScore, frames) {
  let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here, lambda$here1, lambda$here2;
  if (frames instanceof tardis2.Nil.class) {
    lambda$here = lambda$2(tardis2, finalFrameScore);
    return tardis2[bind$accessorSymbol](tardis2[getPast$accessorSymbol])(lambda$here)
  } else if (frames instanceof tardis2.Cons.class) {
    arg$Cons$0$ = frames.head;
    arg$Cons$1$ = frames.tail;
    lambda$here1 = go_lambda$$lambda$(tardis2, arg$Cons$0$);
    tmp = go_fix$fix(lambda$here1);
    lambda$here2 = go$lambda$(tardis2, finalFrameScore, arg$Cons$1$);
    return go_bind$bind(tmp)(lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda14 = (undefined, function () {
  return 0
});
lambda15 = (undefined, function (th) {
  return runtime.safeCall(th())
});
get$ = function get$(tardis2, r) {
  return (a) => {
    return get(tardis2, r, a)
  }
};
get = function get(tardis2, r, a) {
  let scrut;
  scrut = r.value;
  if (scrut instanceof tardis2.Some.class) {
    return runtime.safeCall(scrut.value(a))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
getBw1$ = function getBw1$(tardis2, r) {
  return () => {
    return getBw1(tardis2, r)
  }
};
getBw1 = function getBw1(tardis2, r) {
  let scrut;
  scrut = r.value;
  if (scrut instanceof tardis2.Some.class) {
    return runtime.safeCall(scrut.value())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
(class tardis {
  static {
    tardis1 = this
  }
  static get [pure$accessorSymbol]() { return tardis.#pure; }
  static get [getPast$accessorSymbol]() { return tardis.#getPast; }
  static get [getFuture$accessorSymbol]() { return tardis.#getFuture; }
  static get [bind$accessorSymbol]() { return tardis.#bind; }
  static {
    tardis.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        tardis.Cons.class = this
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
        tardis.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    tardis.Some = function Some(value) {
      return globalThis.Object.freeze(new Some.class(value));
    };
    (class Some {
      static {
        tardis.Some.class = this
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
        tardis.None = this;
        Object.defineProperty(this, "class", {
          value: None
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"];
    });
    tardis.Ref = function Ref(value) {
      return globalThis.Object.freeze(new Ref.class(value));
    };
    (class Ref {
      static {
        tardis.Ref.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["value"]];
    });
    (class Strike {
      static {
        new this
      }
      constructor() {
        tardis.Strike = this;
        Object.defineProperty(this, "class", {
          value: Strike
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Strike"];
    });
    tardis.Spare = function Spare(firstThrow) {
      return globalThis.Object.freeze(new Spare.class(firstThrow));
    };
    (class Spare {
      static {
        tardis.Spare.class = this
      }
      constructor(firstThrow) {
        this.firstThrow = firstThrow;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Spare", ["firstThrow"]];
    });
    tardis.Frame = function Frame(firstThrow, secondThrow) {
      return globalThis.Object.freeze(new Frame.class(firstThrow, secondThrow));
    };
    (class Frame {
      static {
        tardis.Frame.class = this
      }
      constructor(firstThrow, secondThrow) {
        this.firstThrow = firstThrow;
        this.secondThrow = secondThrow;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Frame", ["firstThrow", "secondThrow"]];
    });
    tardis.LStrike = function LStrike(bonus1, bonus2) {
      return globalThis.Object.freeze(new LStrike.class(bonus1, bonus2));
    };
    (class LStrike {
      static {
        tardis.LStrike.class = this
      }
      constructor(bonus1, bonus2) {
        this.bonus1 = bonus1;
        this.bonus2 = bonus2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LStrike", ["bonus1", "bonus2"]];
    });
    tardis.LSpare = function LSpare(bonus1, throw1) {
      return globalThis.Object.freeze(new LSpare.class(bonus1, throw1));
    };
    (class LSpare {
      static {
        tardis.LSpare.class = this
      }
      constructor(bonus1, throw1) {
        this.bonus1 = bonus1;
        this.throw1 = throw1;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LSpare", ["bonus1", "throw1"]];
    });
    tardis.LFrame = function LFrame(throw1, throw2) {
      return globalThis.Object.freeze(new LFrame.class(throw1, throw2));
    };
    (class LFrame {
      static {
        tardis.LFrame.class = this
      }
      constructor(throw1, throw2) {
        this.throw1 = throw1;
        this.throw2 = throw2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LFrame", ["throw1", "throw2"]];
    });
    tardis.Game = function Game(frames, lastFrame) {
      return globalThis.Object.freeze(new Game.class(frames, lastFrame));
    };
    (class Game {
      static {
        tardis.Game.class = this
      }
      constructor(frames, lastFrame) {
        this.frames = frames;
        this.lastFrame = lastFrame;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Game", ["frames", "lastFrame"]];
    });
  }
  static #map$tailrec(f, l) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (l instanceof tardis.Nil.class) {
      return tardis.Nil
    } else if (l instanceof tardis.Cons.class) {
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = tardis.#map$tailrec(f, arg$Cons$1$);
      return tardis.Cons(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #map(f) {
    return (l) => {
      return tardis.#map$tailrec(f, l)
    }
  }
  static #run(m, bw, fw) {
    return runtime.safeCall(m(bw, fw))
  }
  static #pure(a) {
    return (bw, fw) => {
      return globalThis.Object.freeze([
        a,
        bw,
        fw
      ])
    }
  }
  static #getPast(bw, fw) {
    return globalThis.Object.freeze([
      fw,
      bw,
      fw
    ])
  }
  static #getFuture(bw, fw) {
    return globalThis.Object.freeze([
      bw,
      bw,
      fw
    ])
  }
  static #sendPast(bw) {
    return (bw0, fw) => {
      return globalThis.Object.freeze([
        runtime.Unit,
        bw,
        fw
      ])
    }
  }
  static #sendFuture(fw) {
    return (bw, fw0) => {
      return globalThis.Object.freeze([
        runtime.Unit,
        bw,
        fw
      ])
    }
  }
  static #bind(m) {
    return (f) => {
      return (bw, fw) => {
        let r, scrut, scrut1, element2$, element1$, element0$, element2$1, element1$1, element0$1, callPrefix, tmp, getBw1$here;
        r = new tardis.Ref.class(tardis.None);
        getBw1$here = getBw1$(tardis, r);
        scrut = runtime.safeCall(m(getBw1$here, fw));
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
          element0$ = runtime.Tuple.get(scrut, 0);
          element1$ = runtime.Tuple.get(scrut, 1);
          element2$ = runtime.Tuple.get(scrut, 2);
          callPrefix = runtime.safeCall(f(element0$));
          scrut1 = runtime.safeCall(callPrefix(bw, element2$));
          if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
            element0$1 = runtime.Tuple.get(scrut1, 0);
            element1$1 = runtime.Tuple.get(scrut1, 1);
            element2$1 = runtime.Tuple.get(scrut1, 2);
            tmp = tardis.Some(element1$1);
            r.value = tmp;
            return globalThis.Object.freeze([
              element0$1,
              element1$,
              element2$1
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
  }
  static #fix(f) {
    return (bw, fw) => {
      let r, scrut, element2$, element1$, element0$, callPrefix, tmp, get$here;
      r = new tardis.Ref.class(tardis.None);
      get$here = get$(tardis, r);
      callPrefix = runtime.safeCall(f(get$here));
      scrut = runtime.safeCall(callPrefix(bw, fw));
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        element2$ = runtime.Tuple.get(scrut, 2);
        tmp = tardis.Some(element0$);
        r.value = tmp;
        return globalThis.Object.freeze([
          element0$,
          element1$,
          element2$
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #fst(p) {
    let element0$;
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      element0$ = runtime.Tuple.get(p, 0);
      runtime.Tuple.get(p, 1);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #snd(p) {
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      return runtime.Tuple.get(p, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lframeScore(lastFrame) {
    let arg$LFrame$0$, arg$LFrame$1$, arg$LSpare$0$, arg$LStrike$0$, arg$LStrike$1$, tmp;
    if (lastFrame instanceof tardis.LStrike.class) {
      arg$LStrike$0$ = lastFrame.bonus1;
      arg$LStrike$1$ = lastFrame.bonus2;
      tmp = 10 + arg$LStrike$0$;
      return tmp + arg$LStrike$1$
    } else if (lastFrame instanceof tardis.LSpare.class) {
      arg$LSpare$0$ = lastFrame.bonus1;
      return 10 + arg$LSpare$0$
    } else if (lastFrame instanceof tardis.LFrame.class) {
      arg$LFrame$0$ = lastFrame.throw1;
      arg$LFrame$1$ = lastFrame.throw2;
      return arg$LFrame$0$ + arg$LFrame$1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #initialBw(lastFrame) {
    return () => {
      let arg$LFrame$0$, arg$LFrame$1$, arg$LSpare$1$, arg$LStrike$0$, tmp;
      if (lastFrame instanceof tardis.LStrike.class) {
        arg$LStrike$0$ = lastFrame.bonus1;
        return globalThis.Object.freeze([
          10,
          arg$LStrike$0$
        ])
      } else if (lastFrame instanceof tardis.LSpare.class) {
        arg$LSpare$1$ = lastFrame.throw1;
        tmp = 10 - arg$LSpare$1$;
        return globalThis.Object.freeze([
          arg$LSpare$1$,
          tmp
        ])
      } else if (lastFrame instanceof tardis.LFrame.class) {
        arg$LFrame$0$ = lastFrame.throw1;
        arg$LFrame$1$ = lastFrame.throw2;
        return globalThis.Object.freeze([
          arg$LFrame$0$,
          arg$LFrame$1$
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #score(game) {
    let finalFrameScore, initialFw, scrut, arg$Game$0$, arg$Game$1$, element0$, tmp, tmp1;
    if (game instanceof tardis.Game.class) {
      arg$Game$0$ = game.frames;
      arg$Game$1$ = game.lastFrame;
      finalFrameScore = tardis.#lframeScore(arg$Game$1$);
      initialFw = tardis.Cons(lambda14, tardis.Nil);
      tmp = score_go$go(tardis, finalFrameScore, arg$Game$0$);
      tmp1 = tardis.#initialBw(arg$Game$1$);
      scrut = tardis.#run(tmp, tmp1, initialFw);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
        element0$ = runtime.Tuple.get(scrut, 0);
        return tardis.#map(lambda15)(element0$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let sampleGame, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, initialFw, arg$Game$0$, arg$Game$1$, element0$;
    tmp = tardis.Spare(9);
    tmp1 = tardis.Frame(8, 1);
    tmp2 = tardis.Spare(7);
    tmp3 = tardis.Cons(tardis.Strike, tardis.Nil);
    tmp4 = tardis.Cons(tardis.Strike, tmp3);
    tmp5 = tardis.Cons(tmp2, tmp4);
    tmp6 = tardis.Cons(tmp1, tmp5);
    tmp7 = tardis.Cons(tardis.Strike, tmp6);
    tmp8 = tardis.Cons(tardis.Strike, tmp7);
    tmp9 = tardis.Cons(tardis.Strike, tmp8);
    tmp10 = tardis.Cons(tmp, tmp9);
    tmp11 = tardis.Cons(tardis.Strike, tmp10);
    tmp12 = tardis.LStrike(10, 10);
    sampleGame = tardis.Game(tmp11, tmp12);
    if (sampleGame instanceof tardis1.Game.class) {
      let inlinedVal, arg$LStrike$0$, arg$LStrike$1$, tmp13;
      arg$Game$0$ = sampleGame.frames;
      arg$Game$1$ = sampleGame.lastFrame;
      if (arg$Game$1$ instanceof tardis1.LStrike.class) {
        let eta$0$0, inlinedVal1;
        arg$LStrike$0$ = arg$Game$1$.bonus1;
        arg$LStrike$1$ = arg$Game$1$.bonus2;
        tmp13 = 10 + arg$LStrike$0$;
        inlinedVal = tmp13 + arg$LStrike$1$;
        initialFw = tardis1.Cons(lambda14, tardis1.Nil);
        eta$0$0 = main_score_initialBw$initialBw(arg$Game$1$);
        inlinedVal1 = main_score_go$go$worker(tardis1, inlinedVal, arg$Game$0$, eta$0$0, initialFw);
        if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
          element0$ = runtime.Tuple.get(inlinedVal1, 0);
          return tardis1.#map$tailrec(lambda15, element0$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "tardis"];
});
export { getBw1 as _$_modulePrivate_$_getBw1 };
export { get as _$_modulePrivate_$_get };
export { go as _$_modulePrivate_$_go };
export { tardis1 as _$_modulePrivate_$_tardis };
export { lambda as _$_modulePrivate_$_lambda };
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
export { lambda14 as _$_modulePrivate_$_lambda14 };
export { lambda15 as _$_modulePrivate_$_lambda15 };
export { score1 as _$_modulePrivate_$_score1 };
export { throws1 as _$_modulePrivate_$_throws1 };
export { getBw1$ as _$_modulePrivate_$_getBw1$ };
export { get$ as _$_modulePrivate_$_get$ };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { throws1$ as _$_modulePrivate_$_throws1$ };
export { score1$ as _$_modulePrivate_$_score1$ };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { lambda$8 as _$_modulePrivate_$_lambda$8 };
export { lambda$9 as _$_modulePrivate_$_lambda$9 };
export { lambda$10 as _$_modulePrivate_$_lambda$10 };
export { lambda$11 as _$_modulePrivate_$_lambda$11 };
export { lambda$12 as _$_modulePrivate_$_lambda$12 };
export { lambda$13 as _$_modulePrivate_$_lambda$13 };
export { main_score_go_lambda$_lambda_score1$_score1$score1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_score1$_score1$score1 };
export { main_score_go_lambda$_lambda_score1$$score1$ as _$_modulePrivate_$_main_score_go_lambda$_lambda_score1$$score1$ };
export { main_score_go_lambda$_lambda_throws1$_throws1$throws1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_throws1$_throws1$throws1 };
export { main_score_go_lambda$_lambda_throws1$$throws1$ as _$_modulePrivate_$_main_score_go_lambda$_lambda_throws1$$throws1$ };
export { main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda };
export { main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ };
export { main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ };
export { main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 };
export { main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 };
export { main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 };
export { main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 };
export { main_score_go_fix_get$_get$get as _$_modulePrivate_$_main_score_go_fix_get$_get$get };
export { main_score_go_fix_get$$get$ as _$_modulePrivate_$_main_score_go_fix_get$$get$ };
export { score_go_fix_get$_get$get as _$_modulePrivate_$_score_go_fix_get$_get$get };
export { score_go_fix_get$$get$ as _$_modulePrivate_$_score_go_fix_get$$get$ };
export { score_go_fix$fix as _$_modulePrivate_$_score_go_fix$fix };
export { score_go$lambda$ as _$_modulePrivate_$_score_go$lambda$ };
export { score_go$go as _$_modulePrivate_$_score_go$go };
export { score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda };
export { score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ };
export { score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda };
export { score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ };
export { score_go_lambda$$lambda$ as _$_modulePrivate_$_score_go_lambda$$lambda$ };
export { score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 };
export { score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 };
export { score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 };
export { score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 };
export { score_go_lambda$_lambda_throws1$_throws1$throws1 as _$_modulePrivate_$_score_go_lambda$_lambda_throws1$_throws1$throws1 };
export { score_go_lambda$_lambda_throws1$$throws1$ as _$_modulePrivate_$_score_go_lambda$_lambda_throws1$$throws1$ };
export { score_go_lambda$_lambda_score1$_score1$score1 as _$_modulePrivate_$_score_go_lambda$_lambda_score1$_score1$score1 };
export { score_go_lambda$_lambda_score1$$score1$ as _$_modulePrivate_$_score_go_lambda$_lambda_score1$$score1$ };
export { score_go_lambda$$lambda$1 as _$_modulePrivate_$_score_go_lambda$$lambda$1 };
export { go_lambda$_lambda_score1$_score1$score1 as _$_modulePrivate_$_go_lambda$_lambda_score1$_score1$score1 };
export { go_lambda$_lambda_score1$$score1$ as _$_modulePrivate_$_go_lambda$_lambda_score1$$score1$ };
export { go_lambda$$lambda$ as _$_modulePrivate_$_go_lambda$$lambda$ };
export { go$lambda$ as _$_modulePrivate_$_go$lambda$ };
export { go_lambda$_lambda_throws1$_throws1$throws1 as _$_modulePrivate_$_go_lambda$_lambda_throws1$_throws1$throws1 };
export { go_lambda$_lambda_throws1$$throws1$ as _$_modulePrivate_$_go_lambda$_lambda_throws1$$throws1$ };
export { go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda };
export { go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ };
export { go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda };
export { go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ };
export { go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 };
export { go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 };
export { go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 };
export { go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 };
export { go_fix_get$_get$get as _$_modulePrivate_$_go_fix_get$_get$get };
export { go_fix_get$$get$ as _$_modulePrivate_$_go_fix_get$$get$ };
export { go_fix$fix as _$_modulePrivate_$_go_fix$fix };
export { lambda_go_fix_get$_get$get as _$_modulePrivate_$_lambda_go_fix_get$_get$get };
export { lambda_go_fix_get$$get$ as _$_modulePrivate_$_lambda_go_fix_get$$get$ };
export { lambda_go_fix$fix as _$_modulePrivate_$_lambda_go_fix$fix };
export { lambda_go$lambda$ as _$_modulePrivate_$_lambda_go$lambda$ };
export { lambda_go$go as _$_modulePrivate_$_lambda_go$go };
export { lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ };
export { lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda };
export { lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ as _$_modulePrivate_$_lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ };
export { lambda_go_lambda$$lambda$ as _$_modulePrivate_$_lambda_go_lambda$$lambda$ };
export { lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 };
export { lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 };
export { lambda_go_lambda$_lambda_throws1$_throws1$throws1 as _$_modulePrivate_$_lambda_go_lambda$_lambda_throws1$_throws1$throws1 };
export { lambda_go_lambda$_lambda_throws1$$throws1$ as _$_modulePrivate_$_lambda_go_lambda$_lambda_throws1$$throws1$ };
export { lambda_go_lambda$_lambda_score1$_score1$score1 as _$_modulePrivate_$_lambda_go_lambda$_lambda_score1$_score1$score1 };
export { lambda_go_lambda$_lambda_score1$$score1$ as _$_modulePrivate_$_lambda_go_lambda$_lambda_score1$$score1$ };
export { lambda_score1$_score1$score1 as _$_modulePrivate_$_lambda_score1$_score1$score1 };
export { lambda_score1$$score1$ as _$_modulePrivate_$_lambda_score1$$score1$ };
export { lambda_throws1$_throws1$throws1 as _$_modulePrivate_$_lambda_throws1$_throws1$throws1 };
export { lambda_throws1$$throws1$ as _$_modulePrivate_$_lambda_throws1$$throws1$ };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ };
export { lambda_lambda$_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda$lambda };
export { lambda_lambda$_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda$$lambda$ };
export { lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 };
export { lambda_lambda$_lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_sendFuture$sendFuture };
export { lambda_lambda$_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_bind$bind };
export { lambda_sendPast$sendPast as _$_modulePrivate_$_lambda_sendPast$sendPast };
export { lambda$_lambda$_lambda_score1$_score1$score1 as _$_modulePrivate_$_lambda$_lambda$_lambda_score1$_score1$score1 };
export { lambda$_lambda$_lambda_score1$$score1$ as _$_modulePrivate_$_lambda$_lambda$_lambda_score1$$score1$ };
export { lambda$_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$$lambda$ };
export { lambda$$go as _$_modulePrivate_$_lambda$$go };
export { lambda$_lambda$_lambda_throws1$_throws1$throws1 as _$_modulePrivate_$_lambda$_lambda$_lambda_throws1$_throws1$throws1 };
export { lambda$_lambda$_lambda_throws1$$throws1$ as _$_modulePrivate_$_lambda$_lambda$_lambda_throws1$$throws1$ };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 };
export { lambda$_fix_get$_get$get as _$_modulePrivate_$_lambda$_fix_get$_get$get };
export { lambda$_fix_get$$get$ as _$_modulePrivate_$_lambda$_fix_get$$get$ };
export { lambda$_fix$fix as _$_modulePrivate_$_lambda$_fix$fix };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda_lambda$_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$$lambda$ };
export { lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 };
export { lambda$_lambda_lambda$_lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_sendFuture$sendFuture };
export { lambda$_lambda_lambda$_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_bind$bind };
export { lambda$_lambda_sendPast$sendPast as _$_modulePrivate_$_lambda$_lambda_sendPast$sendPast };
export { lambda$_lambda_throws1$_throws1$throws1 as _$_modulePrivate_$_lambda$_lambda_throws1$_throws1$throws1 };
export { lambda$_lambda_throws1$$throws1$ as _$_modulePrivate_$_lambda$_lambda_throws1$$throws1$ };
export { lambda$_lambda_score1$_score1$score1 as _$_modulePrivate_$_lambda$_lambda_score1$_score1$score1 };
export { lambda$_lambda_score1$$score1$ as _$_modulePrivate_$_lambda$_lambda_score1$$score1$ };
export { lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda_lambda$_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$_lambda$lambda };
export { lambda_lambda$_lambda_lambda$_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$$lambda$ };
export { lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$$lambda$1 };
export { lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 };
export { lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 };
export { lambda_lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda_lambda$_lambda_sendFuture$sendFuture };
export { lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda_lambda$_lambda_bind$bind };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda };
export { lambda$_lambda$_lambda_lambda$_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ };
export { lambda$_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda$lambda };
export { lambda$_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda$$lambda$1 };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 };
export { lambda$_lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda$_lambda$_lambda_sendFuture$sendFuture };
export { lambda$_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda$_lambda$_lambda_bind$bind };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 };
export { lambda_lambda$_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda$lambda1 };
export { lambda_lambda$_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$_lambda$$lambda$1 };
export { lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda_lambda$$lambda$2 };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda_lambda$_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda_lambda$_lambda$_lambda_lambda$$lambda$3 as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_lambda$$lambda$3 };
export { lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda_sendFuture$sendFuture };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda_lambda$_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda$lambda1 };
export { lambda$_lambda_lambda$_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$$lambda$1 };
export { lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda$lambda1 };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$3 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$3 };
export { lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda$_lambda_sendFuture$sendFuture };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda$lambda1 };
export { lambda_lambda$$lambda$3 as _$_modulePrivate_$_lambda_lambda$$lambda$3 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$$lambda$2 };
export { lambda_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda_lambda$_lambda_lambda$$lambda$3 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$$lambda$3 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda$_lambda$lambda1 };
export { lambda$_lambda$$lambda$2 as _$_modulePrivate_$_lambda$_lambda$$lambda$2 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$$lambda$2 };
export { lambda$_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda$_lambda$_lambda_lambda$$lambda$3 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$$lambda$3 };
export { lambda_lambda$_lambda_lambda$_lambda$lambda3 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$lambda3 };
export { lambda_lambda$_lambda_lambda$$lambda$4 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$$lambda$4 };
export { lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda_lambda$_lambda$lambda2 };
export { lambda_lambda$$lambda$4 as _$_modulePrivate_$_lambda_lambda$$lambda$4 };
export { lambda_lambda$_lambda_lambda$_lambda$lambda4 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$lambda4 };
export { lambda_lambda$_lambda_lambda$$lambda$5 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$$lambda$5 };
export { lambda_lambda$_lambda$lambda3 as _$_modulePrivate_$_lambda_lambda$_lambda$lambda3 };
export { lambda_lambda$$lambda$5 as _$_modulePrivate_$_lambda_lambda$$lambda$5 };
export { lambda_lambda$_lambda$lambda4 as _$_modulePrivate_$_lambda_lambda$_lambda$lambda4 };
export { lambda_lambda$$lambda$6 as _$_modulePrivate_$_lambda_lambda$$lambda$6 };
export { lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda$_lambda_lambda$$lambda$2 };
export { lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda$_lambda$lambda2 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda_lambda$$lambda$3 as _$_modulePrivate_$_lambda$_lambda_lambda$$lambda$3 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda$_lambda_lambda$$lambda$4 as _$_modulePrivate_$_lambda$_lambda_lambda$$lambda$4 };
export { lambda_lambda$_lambda$lambda5 as _$_modulePrivate_$_lambda_lambda$_lambda$lambda5 };
export { lambda_lambda$$lambda$7 as _$_modulePrivate_$_lambda_lambda$$lambda$7 };
export { lambda_lambda$_lambda$lambda6 as _$_modulePrivate_$_lambda_lambda$_lambda$lambda6 };
export { lambda_lambda$$lambda$8 as _$_modulePrivate_$_lambda_lambda$$lambda$8 };
export { lambda$_lambda$lambda3 as _$_modulePrivate_$_lambda$_lambda$lambda3 };
export { lambda$_lambda_lambda$_lambda$lambda3 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$lambda3 };
export { lambda$_lambda_lambda$$lambda$5 as _$_modulePrivate_$_lambda$_lambda_lambda$$lambda$5 };
export { lambda$_lambda$lambda4 as _$_modulePrivate_$_lambda$_lambda$lambda4 };
export { lambda$_lambda$lambda5 as _$_modulePrivate_$_lambda$_lambda$lambda5 };
export { lambda$_lambda_lambda$_lambda$lambda4 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$lambda4 };
export { lambda$_lambda_lambda$$lambda$6 as _$_modulePrivate_$_lambda$_lambda_lambda$$lambda$6 };
export { lambda$_lambda$lambda6 as _$_modulePrivate_$_lambda$_lambda$lambda6 };
export { lambda$_lambda$lambda7 as _$_modulePrivate_$_lambda$_lambda$lambda7 };
export { throws1$_throws1$throws1 as _$_modulePrivate_$_throws1$_throws1$throws1 };
export { score1$_score1$score1 as _$_modulePrivate_$_score1$_score1$score1 };
export { score_go_bind$bind as _$_modulePrivate_$_score_go_bind$bind };
export { score_go_bind$bind1 as _$_modulePrivate_$_score_go_bind$bind1 };
export { go_bind$bind as _$_modulePrivate_$_go_bind$bind };
export { lambda_go_bind$bind as _$_modulePrivate_$_lambda_go_bind$bind };
export { lambda_bind$bind as _$_modulePrivate_$_lambda_bind$bind };
export { lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda$_lambda_bind$bind };
export { lambda_bind$bind1 as _$_modulePrivate_$_lambda_bind$bind1 };
export { lambda$_bind$bind as _$_modulePrivate_$_lambda$_bind$bind };
export { lambda_bind$bind2 as _$_modulePrivate_$_lambda_bind$bind2 };
export { lambda$_lambda_bind$bind1 as _$_modulePrivate_$_lambda$_lambda_bind$bind1 };
export { main_score_initialBw$initialBw as _$_modulePrivate_$_main_score_initialBw$initialBw };
export { lambda$_bind$bind1 as _$_modulePrivate_$_lambda$_bind$bind1 };
export { lambda$_bind$bind$worker as _$_modulePrivate_$_lambda$_bind$bind$worker };
export { main_score_initialBw$initialBw$worker as _$_modulePrivate_$_main_score_initialBw$initialBw$worker };
export { lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda$_lambda_bind$bind$worker };
export { lambda_bind$bind$worker as _$_modulePrivate_$_lambda_bind$bind$worker };
export { lambda$_bind$bind$worker1 as _$_modulePrivate_$_lambda$_bind$bind$worker1 };
export { lambda_bind$bind$worker1 as _$_modulePrivate_$_lambda_bind$bind$worker1 };
export { lambda$_lambda_bind$bind$worker1 as _$_modulePrivate_$_lambda$_lambda_bind$bind$worker1 };
export { lambda$_lambda_lambda$_bind$bind$worker as _$_modulePrivate_$_lambda$_lambda_lambda$_bind$bind$worker };
export { lambda_bind$bind$worker2 as _$_modulePrivate_$_lambda_bind$bind$worker2 };
export { lambda_lambda$_bind$bind$worker as _$_modulePrivate_$_lambda_lambda$_bind$bind$worker };
export { lambda_go_bind$bind$worker as _$_modulePrivate_$_lambda_go_bind$bind$worker };
export { go_bind$bind$worker as _$_modulePrivate_$_go_bind$bind$worker };
export { score_go_bind$bind$worker as _$_modulePrivate_$_score_go_bind$bind$worker };
export { score_go_bind$bind$worker1 as _$_modulePrivate_$_score_go_bind$bind$worker1 };
export { lambda$_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda$_lambda$_lambda_bind$bind$worker };
export { lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda_lambda$_lambda_bind$bind$worker };
export { lambda$_lambda_lambda$_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$_lambda_bind$bind$worker };
export { lambda$_fix$fix$worker as _$_modulePrivate_$_lambda$_fix$fix$worker };
export { lambda$_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda$_lambda$_lambda$lambda$worker };
export { lambda_lambda$_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda_lambda$_lambda$_lambda_bind$bind$worker };
export { lambda_go_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda_go_lambda$_lambda$lambda$worker };
export { lambda_go_fix$fix$worker as _$_modulePrivate_$_lambda_go_fix$fix$worker };
export { go_fix$fix$worker as _$_modulePrivate_$_go_fix$fix$worker };
export { go_lambda$_lambda$lambda$worker as _$_modulePrivate_$_go_lambda$_lambda$lambda$worker };
export { score_go_lambda$_lambda$lambda$worker as _$_modulePrivate_$_score_go_lambda$_lambda$lambda$worker };
export { score_go_lambda$_lambda$lambda$worker1 as _$_modulePrivate_$_score_go_lambda$_lambda$lambda$worker1 };
export { score_go_fix$fix$worker as _$_modulePrivate_$_score_go_fix$fix$worker };
export { main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda$worker };
export { main_score_go$go$worker as _$_modulePrivate_$_main_score_go$go$worker };
export default tardis1;
