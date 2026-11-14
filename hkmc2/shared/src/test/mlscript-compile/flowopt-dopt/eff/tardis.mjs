const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
let getBw1, get, go, tardis1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, score1, throws1, getBw1$, get$, lambda$, throws1$, score1$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, main_score_go_getPast$getPast, main_score_go$lambda$, main_score_go_bind$bind, main_score_go_lambda$_lambda_pure$pure, main_score_go_lambda$_lambda$lambda, main_score_go_lambda$$lambda$, main_score_go_lambda$$lambda$1, main_score_go_fix$fix, main_score_go_bind$bind1, score_go_fix$fix, score_go$lambda$, score_go$lambda, score_go$go, score_go_bind$bind, score_go_lambda$$lambda$, score_go_getPast$getPast, score_go_bind$bind1, score_go_lambda$_lambda_pure$pure, score_go_lambda$_lambda$lambda, score_go_lambda$$lambda$1, go_getPast$getPast, go$lambda$, go_bind$bind, go_lambda$_lambda_pure$pure, go_lambda$_lambda$lambda, go_lambda$$lambda$, go_lambda$$lambda$1, go_fix$fix, go_bind$bind1, lambda_getPast$getPast, lambda$lambda$, lambda_bind$bind, lambda_lambda$_lambda_pure$pure, lambda_lambda$_lambda$lambda, lambda_lambda$$lambda$, lambda_lambda$$lambda$1, lambda_fix$fix, lambda_bind$bind1, lambda$_getPast$getPast, lambda$$lambda, lambda$_bind$bind, lambda$_lambda$_lambda_pure$pure, lambda$_lambda$_lambda$lambda, lambda$_lambda$$lambda$, lambda$_lambda$$lambda$1, lambda$_fix$fix, lambda$_bind$bind1, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, main_score_go_lambda$_lambda_bind$scrut_tup3, main_score_go_fix$scrut_tup3, main_score_go_bind$scrut_tup3, main_score_go$frames_Cons, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame, main_score_go$frames_Nil, score_go_bind$scrut_tup3, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, score_go_lambda$_lambda_bind$scrut_tup3, score_go_fix$scrut_tup3, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, go_lambda$_lambda_bind$scrut_tup3, go_fix$scrut_tup3, go_bind$scrut_tup3, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, lambda_lambda$_lambda_bind$scrut_tup3, lambda_fix$scrut_tup3, lambda_bind$scrut_tup3, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, lambda$_lambda$_lambda_bind$scrut_tup3, lambda$_fix$scrut_tup3, lambda$_bind$scrut_tup3, lambda$_bind$scrut_tup3$worker, lambda$_fix$scrut_tup3$worker, lambda$_lambda$_lambda_bind$scrut_tup3$worker, lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda$_bind$scrut_tup3$worker1, lambda$_bind$scrut_tup3$worker2, lambda_bind$scrut_tup3$worker, lambda_fix$scrut_tup3$worker, lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda_bind$scrut_tup3$worker1, lambda_bind$scrut_tup3$worker2, go_bind$scrut_tup3$worker, go_fix$scrut_tup3$worker, go_lambda$_lambda_bind$scrut_tup3$worker, go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, go_bind$scrut_tup3$worker1, go_bind$scrut_tup3$worker2, score_go_bind$scrut_tup3$worker, score_go_bind$scrut_tup3$worker1, score_go_fix$scrut_tup3$worker, score_go_lambda$_lambda_bind$scrut_tup3$worker, score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, score_go_bind$scrut_tup3$worker2, main_score_go$frames_Cons$worker, main_score_go_bind$scrut_tup3$worker, main_score_go_fix$scrut_tup3$worker, main_score_go_lambda$_lambda_bind$scrut_tup3$worker, main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, main_score_go_bind$scrut_tup3$worker1, main_score_go_bind$scrut_tup3$worker2, lambda$_bind$bind$worker, lambda$_fix$fix$worker, lambda$_lambda$_lambda$lambda$worker, lambda$_bind$bind$worker1, lambda_bind$bind$worker, lambda_fix$fix$worker, lambda_lambda$_lambda$lambda$worker, lambda_bind$bind$worker1, go_bind$bind$worker, go_fix$fix$worker, go_lambda$_lambda$lambda$worker, go_bind$bind$worker1, score_go_bind$bind$worker, score_go_lambda$_lambda$lambda$worker, score_go_bind$bind$worker1, score_go_fix$fix$worker, main_score_go_bind$bind$worker, main_score_go_fix$fix$worker, main_score_go_lambda$_lambda$lambda$worker, main_score_go_bind$bind$worker1;
main_score_go_getPast$getPast = function main_score_go_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return main_score_go_bind$scrut_tup3$worker2(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
main_score_go$lambda$ = function main_score_go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return fs(undefined, tardis2, undefined, undefined, finalFrameScore, undefined)
  }
};
main_score_go_bind$bind = function main_score_go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return main_score_go_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
main_score_go_bind$bind$worker1 = function main_score_go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
main_score_go_lambda$_lambda_pure$pure = function main_score_go_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return main_score_go_bind$scrut_tup3$worker1(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
main_score_go_lambda$_lambda$lambda = function main_score_go_lambda$_lambda$lambda(tardis2, finalFrameScore, scores) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$7(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return main_score_go_lambda$_lambda_pure$pure(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go_lambda$$lambda$ = function main_score_go_lambda$$lambda$(tardis2, finalFrameScore) {
  return (scores) => {
    return main_score_go_lambda$_lambda$lambda(tardis2, finalFrameScore, scores)
  }
};
main_score_go_lambda$_lambda$lambda$worker = function main_score_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score11, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = throws1$(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score11 = score1$(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score11, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = f(undefined, arg$Cons$0$, nextThrows, undefined, undefined)(eta$0$0, tmp)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go_lambda$$lambda$1 = function main_score_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return main_score_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
main_score_go_fix$fix = function main_score_go_fix$fix(f) {
  return (bw, fw) => {
    return main_score_go_fix$fix$worker(f, bw, fw)
  }
};
main_score_go_fix$fix$worker = function main_score_go_fix$fix$worker(f, bw, fw) {
  let r, scrut, callPrefix, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
main_score_go_bind$bind1 = function main_score_go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return main_score_go_bind$bind$worker(m, f, bw, fw)
    }
  }
};
main_score_go_bind$bind$worker = function main_score_go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
score_go_fix$fix = function score_go_fix$fix(f) {
  return (bw, fw) => {
    return score_go_fix$fix$worker(f, bw, fw)
  }
};
score_go_fix$fix$worker = function score_go_fix$fix$worker(f, bw, fw) {
  let r, scrut, callPrefix, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
score_go$go = function score_go$go(tardis2, finalFrameScore, frames) {
  let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here, lambda$here1, lambda$here2;
  if (frames instanceof tardis2.Nil.class) {
    lambda$here = score_go_lambda$$lambda$1(tardis2, finalFrameScore);
    return score_go_bind$bind1(score_go_getPast$getPast)(lambda$here)
  } else if (frames instanceof tardis2.Cons.class) {
    arg$Cons$0$ = frames.head;
    arg$Cons$1$ = frames.tail;
    lambda$here1 = score_go_lambda$$lambda$(tardis2, arg$Cons$0$);
    tmp = score_go_fix$fix(lambda$here1);
    lambda$here2 = score_go$lambda$(tardis2, finalFrameScore, arg$Cons$1$);
    return score_go_bind$bind(tmp)(lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go$lambda = function score_go$lambda(tardis2, finalFrameScore, fs) {
  return score_go$go(tardis2, finalFrameScore, fs)
};
score_go$lambda$ = function score_go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return score_go$lambda(tardis2, finalFrameScore, fs)
  }
};
score_go_bind$bind = function score_go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return score_go_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
score_go_bind$bind$worker1 = function score_go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
score_go_lambda$_lambda$lambda$worker = function score_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score11, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = throws1$(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score11 = score1$(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, tardis4, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3, tardis5, f2, score2, nextThrows1, eta$0$02, eta$0$12, eta$1$01, eta$1$11, eta$1$21, eta$1$31, eta$1$41, eta$1$51, eta$1$61, eta$1$71, eta$1$81, inlinedVal4;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score11, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    tardis4 = tardis2;
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    tardis5 = tardis2;
    f2 = f;
    score2 = arg$Cons$0$;
    nextThrows1 = nextThrows;
    eta$0$02 = eta$0$0;
    eta$0$12 = tmp;
    eta$1$01 = undefined;
    eta$1$11 = undefined;
    eta$1$21 = undefined;
    eta$1$31 = undefined;
    eta$1$41 = undefined;
    eta$1$51 = undefined;
    eta$1$61 = undefined;
    eta$1$71 = r3;
    eta$1$81 = eta$1$8;
    inlinedLbl: {
      let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$;
      if (f2 instanceof tardis5.Strike.class) {
        let tup3_01, fv_tmp;
        tup3_01 = lambda$3(score2, nextThrows1);
        fv_tmp = eta$1$61;
        fv_tmp = tardis1.Some(eta$0$02);
        eta$1$71.value = fv_tmp;
        inlinedVal4 = score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, eta$1$81, eta$0$12);
        break inlinedLbl
      } else if (f2 instanceof tardis5.Spare.class) {
        let tup3_01, fv_tmp;
        arg$Spare$0$ = f2.firstThrow;
        tup3_01 = lambda$2(score2, nextThrows1, arg$Spare$0$);
        fv_tmp = eta$1$61;
        fv_tmp = tardis1.Some(eta$0$02);
        eta$1$71.value = fv_tmp;
        inlinedVal4 = score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, eta$1$81, eta$0$12);
        break inlinedLbl
      } else if (f2 instanceof tardis5.Frame.class) {
        let tup3_01, fv_tmp;
        arg$Frame$0$ = f2.firstThrow;
        arg$Frame$1$ = f2.secondThrow;
        tup3_01 = lambda$1(score2, arg$Frame$1$, arg$Frame$0$);
        fv_tmp = eta$1$61;
        fv_tmp = tardis1.Some(eta$0$02);
        eta$1$71.value = fv_tmp;
        inlinedVal4 = score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, eta$1$81, eta$0$12);
        break inlinedLbl
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    inlinedVal3 = inlinedVal4;
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$$lambda$ = function score_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return score_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
score_go_getPast$getPast = function score_go_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return score_go_bind$scrut_tup3$worker1(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
score_go_bind$bind1 = function score_go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return score_go_bind$bind$worker(m, f, bw, fw)
    }
  }
};
score_go_bind$bind$worker = function score_go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
score_go_lambda$_lambda_pure$pure = function score_go_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return score_go_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
score_go_lambda$_lambda$lambda = function score_go_lambda$_lambda$lambda(tardis2, finalFrameScore, scores) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$7(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return score_go_lambda$_lambda_pure$pure(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$$lambda$1 = function score_go_lambda$$lambda$(tardis2, finalFrameScore) {
  return (scores) => {
    return score_go_lambda$_lambda$lambda(tardis2, finalFrameScore, scores)
  }
};
go_getPast$getPast = function go_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return go_bind$scrut_tup3$worker2(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
go$lambda$ = function go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return go(tardis2, finalFrameScore, fs)
  }
};
go_bind$bind = function go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return go_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
go_bind$bind$worker1 = function go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
go_lambda$_lambda_pure$pure = function go_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return go_bind$scrut_tup3$worker1(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
go_lambda$_lambda$lambda = function go_lambda$_lambda$lambda(tardis2, finalFrameScore, scores) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$7(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return go_lambda$_lambda_pure$pure(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_lambda$$lambda$ = function go_lambda$$lambda$(tardis2, finalFrameScore) {
  return (scores) => {
    return go_lambda$_lambda$lambda(tardis2, finalFrameScore, scores)
  }
};
go_lambda$_lambda$lambda$worker = function go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score11, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = throws1$(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score11 = score1$(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, tardis4, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3, tardis5, f2, score2, nextThrows1, eta$0$02, eta$0$12, eta$1$01, eta$1$11, eta$1$21, eta$1$31, eta$1$41, eta$1$51, eta$1$61, eta$1$71, eta$1$81, inlinedVal4;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score11, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    tardis4 = tardis2;
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    tardis5 = tardis2;
    f2 = f;
    score2 = arg$Cons$0$;
    nextThrows1 = nextThrows;
    eta$0$02 = eta$0$0;
    eta$0$12 = tmp;
    eta$1$01 = undefined;
    eta$1$11 = undefined;
    eta$1$21 = undefined;
    eta$1$31 = undefined;
    eta$1$41 = undefined;
    eta$1$51 = undefined;
    eta$1$61 = undefined;
    eta$1$71 = r3;
    eta$1$81 = eta$1$8;
    inlinedLbl: {
      let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$;
      if (f2 instanceof tardis5.Strike.class) {
        let tup3_01, fv_tmp;
        tup3_01 = lambda$3(score2, nextThrows1);
        fv_tmp = eta$1$61;
        fv_tmp = tardis1.Some(eta$0$02);
        eta$1$71.value = fv_tmp;
        inlinedVal4 = go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, eta$1$81, eta$0$12);
        break inlinedLbl
      } else if (f2 instanceof tardis5.Spare.class) {
        let tup3_01, fv_tmp;
        arg$Spare$0$ = f2.firstThrow;
        tup3_01 = lambda$2(score2, nextThrows1, arg$Spare$0$);
        fv_tmp = eta$1$61;
        fv_tmp = tardis1.Some(eta$0$02);
        eta$1$71.value = fv_tmp;
        inlinedVal4 = go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, eta$1$81, eta$0$12);
        break inlinedLbl
      } else if (f2 instanceof tardis5.Frame.class) {
        let tup3_01, fv_tmp;
        arg$Frame$0$ = f2.firstThrow;
        arg$Frame$1$ = f2.secondThrow;
        tup3_01 = lambda$1(score2, arg$Frame$1$, arg$Frame$0$);
        fv_tmp = eta$1$61;
        fv_tmp = tardis1.Some(eta$0$02);
        eta$1$71.value = fv_tmp;
        inlinedVal4 = go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, eta$1$81, eta$0$12);
        break inlinedLbl
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    inlinedVal3 = inlinedVal4;
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_lambda$$lambda$1 = function go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
go_fix$fix = function go_fix$fix(f) {
  return (bw, fw) => {
    return go_fix$fix$worker(f, bw, fw)
  }
};
go_fix$fix$worker = function go_fix$fix$worker(f, bw, fw) {
  let r, scrut, callPrefix, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
go_bind$bind1 = function go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return go_bind$bind$worker(m, f, bw, fw)
    }
  }
};
go_bind$bind$worker = function go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_getPast$getPast = function lambda_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda_bind$scrut_tup3$worker2(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda$lambda$ = function lambda$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return lambda6(tardis2, finalFrameScore, fs)
  }
};
lambda_bind$bind = function lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
lambda_bind$bind$worker1 = function lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_lambda$_lambda_pure$pure = function lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_bind$scrut_tup3$worker1(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda$lambda(tardis2, finalFrameScore, scores) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$7(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return lambda_lambda$_lambda_pure$pure(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$$lambda$ = function lambda_lambda$$lambda$(tardis2, finalFrameScore) {
  return (scores) => {
    return lambda_lambda$_lambda$lambda(tardis2, finalFrameScore, scores)
  }
};
lambda_lambda$_lambda$lambda$worker = function lambda_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score11, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = throws1$(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score11 = score1$(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, tardis4, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3, tardis5, f2, score2, nextThrows1, eta$0$02, eta$0$12, eta$1$01, eta$1$11, eta$1$21, eta$1$31, eta$1$41, eta$1$51, eta$1$61, eta$1$71, eta$1$81, inlinedVal4;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score11, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    tardis4 = tardis2;
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    tardis5 = tardis2;
    f2 = f;
    score2 = arg$Cons$0$;
    nextThrows1 = nextThrows;
    eta$0$02 = eta$0$0;
    eta$0$12 = tmp;
    eta$1$01 = undefined;
    eta$1$11 = undefined;
    eta$1$21 = undefined;
    eta$1$31 = undefined;
    eta$1$41 = undefined;
    eta$1$51 = undefined;
    eta$1$61 = undefined;
    eta$1$71 = r3;
    eta$1$81 = eta$1$8;
    inlinedLbl: {
      let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$;
      if (f2 instanceof tardis5.Strike.class) {
        let tup3_01, fv_tmp;
        tup3_01 = lambda$3(score2, nextThrows1);
        fv_tmp = eta$1$61;
        fv_tmp = tardis1.Some(eta$0$02);
        eta$1$71.value = fv_tmp;
        inlinedVal4 = lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, eta$1$81, eta$0$12);
        break inlinedLbl
      } else if (f2 instanceof tardis5.Spare.class) {
        let tup3_01, fv_tmp;
        arg$Spare$0$ = f2.firstThrow;
        tup3_01 = lambda$2(score2, nextThrows1, arg$Spare$0$);
        fv_tmp = eta$1$61;
        fv_tmp = tardis1.Some(eta$0$02);
        eta$1$71.value = fv_tmp;
        inlinedVal4 = lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, eta$1$81, eta$0$12);
        break inlinedLbl
      } else if (f2 instanceof tardis5.Frame.class) {
        let tup3_01, fv_tmp;
        arg$Frame$0$ = f2.firstThrow;
        arg$Frame$1$ = f2.secondThrow;
        tup3_01 = lambda$1(score2, arg$Frame$1$, arg$Frame$0$);
        fv_tmp = eta$1$61;
        fv_tmp = tardis1.Some(eta$0$02);
        eta$1$71.value = fv_tmp;
        inlinedVal4 = lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, eta$1$81, eta$0$12);
        break inlinedLbl
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    inlinedVal3 = inlinedVal4;
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$$lambda$1 = function lambda_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return lambda_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
lambda_fix$fix = function lambda_fix$fix(f) {
  return (bw, fw) => {
    return lambda_fix$fix$worker(f, bw, fw)
  }
};
lambda_fix$fix$worker = function lambda_fix$fix$worker(f, bw, fw) {
  let r, scrut, callPrefix, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_bind$bind1 = function lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda_bind$bind$worker = function lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_getPast$getPast = function lambda$_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda$_bind$scrut_tup3$worker2(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda$$lambda = function lambda$$lambda(tardis2, finalFrameScore, fs) {
  let tardis3, arg$Cons$0$, arg$Cons$1$, tmp, lambda$here, lambda$here1, lambda$here2;
  tardis3 = tardis2;
  if (fs instanceof tardis3.Nil.class) {
    lambda$here = lambda$_lambda$$lambda$(tardis2, finalFrameScore);
    return lambda$_bind$bind(lambda$_getPast$getPast)(lambda$here)
  } else if (fs instanceof tardis3.Cons.class) {
    arg$Cons$0$ = fs.head;
    arg$Cons$1$ = fs.tail;
    lambda$here1 = lambda$_lambda$$lambda$1(tardis2, arg$Cons$0$);
    tmp = lambda$_fix$fix(lambda$here1);
    lambda$here2 = lambda$(tardis2, finalFrameScore, arg$Cons$1$);
    return lambda$_bind$bind1(tmp)(lambda$here2)
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
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda$_lambda_pure$pure = function lambda$_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_bind$scrut_tup3$worker1(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda$_lambda$lambda = function lambda$_lambda$_lambda$lambda(tardis2, finalFrameScore, scores) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$7(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return lambda$_lambda$_lambda_pure$pure(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$$lambda$ = function lambda$_lambda$$lambda$(tardis2, finalFrameScore) {
  return (scores) => {
    return lambda$_lambda$_lambda$lambda(tardis2, finalFrameScore, scores)
  }
};
lambda$_lambda$_lambda$lambda$worker = function lambda$_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score11, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = throws1$(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score11 = score1$(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, tardis4, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3, tardis5, f2, score2, nextThrows1, eta$0$02, eta$0$12, eta$1$01, eta$1$11, eta$1$21, eta$1$31, eta$1$41, eta$1$51, eta$1$61, eta$1$71, eta$1$81, inlinedVal4;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score11, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    tardis4 = tardis2;
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    tardis5 = tardis2;
    f2 = f;
    score2 = arg$Cons$0$;
    nextThrows1 = nextThrows;
    eta$0$02 = eta$0$0;
    eta$0$12 = tmp;
    eta$1$01 = undefined;
    eta$1$11 = undefined;
    eta$1$21 = undefined;
    eta$1$31 = undefined;
    eta$1$41 = undefined;
    eta$1$51 = undefined;
    eta$1$61 = undefined;
    eta$1$71 = r3;
    eta$1$81 = eta$1$8;
    inlinedLbl: {
      let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$;
      if (f2 instanceof tardis5.Strike.class) {
        let tup3_01, fv_tmp;
        tup3_01 = lambda$3(score2, nextThrows1);
        fv_tmp = eta$1$61;
        fv_tmp = tardis1.Some(eta$0$02);
        eta$1$71.value = fv_tmp;
        inlinedVal4 = lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, eta$1$81, eta$0$12);
        break inlinedLbl
      } else if (f2 instanceof tardis5.Spare.class) {
        let tup3_01, fv_tmp;
        arg$Spare$0$ = f2.firstThrow;
        tup3_01 = lambda$2(score2, nextThrows1, arg$Spare$0$);
        fv_tmp = eta$1$61;
        fv_tmp = tardis1.Some(eta$0$02);
        eta$1$71.value = fv_tmp;
        inlinedVal4 = lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, eta$1$81, eta$0$12);
        break inlinedLbl
      } else if (f2 instanceof tardis5.Frame.class) {
        let tup3_01, fv_tmp;
        arg$Frame$0$ = f2.firstThrow;
        arg$Frame$1$ = f2.secondThrow;
        tup3_01 = lambda$1(score2, arg$Frame$1$, arg$Frame$0$);
        fv_tmp = eta$1$61;
        fv_tmp = tardis1.Some(eta$0$02);
        eta$1$71.value = fv_tmp;
        inlinedVal4 = lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, eta$1$81, eta$0$12);
        break inlinedLbl
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    inlinedVal3 = inlinedVal4;
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$$lambda$1 = function lambda$_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return lambda$_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
lambda$_fix$fix = function lambda$_fix$fix(f) {
  return (bw, fw) => {
    return lambda$_fix$fix$worker(f, bw, fw)
  }
};
lambda$_fix$fix$worker = function lambda$_fix$fix$worker(f, bw, fw) {
  let r, scrut, callPrefix, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_bind$bind1 = function lambda$_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda$_bind$bind$worker = function lambda$_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
main_score_go_bind$scrut_tup3$worker2 = function main_score_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
main_score_go_bind$scrut_tup3$worker1 = function main_score_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return globalThis.Object.freeze([
    tup3_0,
    fv_bw2,
    tup3_2
  ])
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_score_go_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
main_score_go_lambda$_lambda_bind$scrut_tup3 = function main_score_go_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return main_score_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
main_score_go_lambda$_lambda_bind$scrut_tup3$worker = function main_score_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_score_go_fix$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
main_score_go_fix$scrut_tup3 = function main_score_go_fix$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) => {
    return main_score_go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r)
  }
};
main_score_go_fix$scrut_tup3$worker = function main_score_go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x = tup3_0;
  fv_tmp = tardis1.Some(tup3_0);
  fv_r.value = fv_tmp;
  return main_score_go_bind$scrut_tup3(tup3_0, tup3_1, tup3_2)
};
main_score_go_bind$scrut_tup3 = function main_score_go_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return main_score_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
main_score_go_bind$scrut_tup3$worker = function main_score_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw2 = tup3_1;
  fv_x = tup3_0;
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  if (runtime.Tuple.isArrayLike(fv_scrut) && fv_scrut.length === 3) {
    fv_element0$1 = runtime.Tuple.get(fv_scrut, 0);
    fv_element1$1 = runtime.Tuple.get(fv_scrut, 1);
    fv_element2$1 = runtime.Tuple.get(fv_scrut, 2);
    fv_fw2 = fv_element2$1;
    fv_bw1 = fv_element1$1;
    fv_x1 = fv_element0$1;
    fv_tmp = tardis1.Some(fv_element1$1);
    fv_r.value = fv_tmp;
    return globalThis.Object.freeze([
      fv_element0$1,
      tup3_1,
      fv_element2$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go$frames_Cons = function main_score_go$frames_Cons(Cons_head, Cons_tail) {
  return (fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore, fv_lambda$here2) => {
    return main_score_go$frames_Cons$worker(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore, fv_lambda$here2)
  }
};
main_score_go$frames_Cons$worker = function main_score_go$frames_Cons$worker(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore, fv_lambda$here2) {
  fv_lambda$here = main_score_go_lambda$$lambda$1(fv_tardis, Cons_head);
  fv_tmp = main_score_go_fix$fix(fv_lambda$here);
  fv_lambda$here1 = main_score_go$lambda$(fv_tardis, fv_finalFrameScore, Cons_tail);
  return main_score_go_bind$bind1(fv_tmp)(fv_lambda$here1)
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike() {
  return (fv_lambda$here, fv_score, fv_nextThrows, fv_lambda$here1, fv_lambda$here2) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here = lambda$3(fv_score, fv_nextThrows);
        tup3_0 = lambda$3(fv_score, fv_nextThrows);
        return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare(Spare_firstThrow) {
  return (fv_lambda$here, fv_score, fv_nextThrows, fv_lambda$here1, fv_lambda$here2) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here1 = lambda$2(fv_score, fv_nextThrows, Spare_firstThrow);
        tup3_0 = lambda$2(fv_score, fv_nextThrows, Spare_firstThrow);
        return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame(Frame_firstThrow, Frame_secondThrow) {
  return (fv_lambda$here, fv_score, fv_nextThrows, fv_lambda$here1, fv_lambda$here2) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here2 = lambda$1(fv_score, Frame_secondThrow, Frame_firstThrow);
        tup3_0 = lambda$1(fv_score, Frame_secondThrow, Frame_firstThrow);
        return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_score_go$frames_Nil = function main_score_go$frames_Nil() {
  return (fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore, fv_lambda$here2) => {
    fv_lambda$here2 = main_score_go_lambda$$lambda$(fv_tardis, fv_finalFrameScore);
    return main_score_go_bind$bind(main_score_go_getPast$getPast)(fv_lambda$here2)
  }
};
score_go_bind$scrut_tup3 = function score_go_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return score_go_bind$scrut_tup3$worker2(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
score_go_bind$scrut_tup3$worker2 = function score_go_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_element0$ = undefined;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw2 = tup3_1;
  fv_x = undefined;
  fv_callPrefix = runtime.safeCall(fv_f(undefined));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  if (runtime.Tuple.isArrayLike(fv_scrut) && fv_scrut.length === 3) {
    fv_element0$1 = runtime.Tuple.get(fv_scrut, 0);
    fv_element1$1 = runtime.Tuple.get(fv_scrut, 1);
    fv_element2$1 = runtime.Tuple.get(fv_scrut, 2);
    fv_fw2 = fv_element2$1;
    fv_bw1 = fv_element1$1;
    fv_x1 = fv_element0$1;
    fv_tmp = tardis1.Some(fv_element1$1);
    fv_r.value = fv_tmp;
    return globalThis.Object.freeze([
      fv_element0$1,
      tup3_1,
      fv_element2$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return score_go_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
score_go_lambda$_lambda_bind$scrut_tup3 = function score_go_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return score_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
score_go_lambda$_lambda_bind$scrut_tup3$worker = function score_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return score_go_fix$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
score_go_fix$scrut_tup3 = function score_go_fix$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) => {
    return score_go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r)
  }
};
score_go_fix$scrut_tup3$worker = function score_go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x = tup3_0;
  fv_tmp = tardis1.Some(tup3_0);
  fv_r.value = fv_tmp;
  return score_go_bind$scrut_tup3(tup3_1, tup3_2)
};
score_go_bind$scrut_tup3$worker1 = function score_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
score_go_bind$scrut_tup3$worker = function score_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return globalThis.Object.freeze([
    tup3_0,
    fv_bw2,
    tup3_2
  ])
};
go_bind$scrut_tup3$worker2 = function go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
go_bind$scrut_tup3$worker1 = function go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return globalThis.Object.freeze([
    tup3_0,
    fv_bw2,
    tup3_2
  ])
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return go_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
go_lambda$_lambda_bind$scrut_tup3 = function go_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
go_lambda$_lambda_bind$scrut_tup3$worker = function go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return go_fix$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
go_fix$scrut_tup3 = function go_fix$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) => {
    return go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r)
  }
};
go_fix$scrut_tup3$worker = function go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x = tup3_0;
  fv_tmp = tardis1.Some(tup3_0);
  fv_r.value = fv_tmp;
  return go_bind$scrut_tup3(tup3_1, tup3_2)
};
go_bind$scrut_tup3 = function go_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return go_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
go_bind$scrut_tup3$worker = function go_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_element0$ = undefined;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw2 = tup3_1;
  fv_x = undefined;
  fv_callPrefix = runtime.safeCall(fv_f(undefined));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  if (runtime.Tuple.isArrayLike(fv_scrut) && fv_scrut.length === 3) {
    fv_element0$1 = runtime.Tuple.get(fv_scrut, 0);
    fv_element1$1 = runtime.Tuple.get(fv_scrut, 1);
    fv_element2$1 = runtime.Tuple.get(fv_scrut, 2);
    fv_fw2 = fv_element2$1;
    fv_bw1 = fv_element1$1;
    fv_x1 = fv_element0$1;
    fv_tmp = tardis1.Some(fv_element1$1);
    fv_r.value = fv_tmp;
    return globalThis.Object.freeze([
      fv_element0$1,
      tup3_1,
      fv_element2$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_bind$scrut_tup3$worker2 = function lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_bind$scrut_tup3$worker1 = function lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return globalThis.Object.freeze([
    tup3_0,
    fv_bw2,
    tup3_2
  ])
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
lambda_lambda$_lambda_bind$scrut_tup3 = function lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda_fix$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
lambda_fix$scrut_tup3 = function lambda_fix$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) => {
    return lambda_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r)
  }
};
lambda_fix$scrut_tup3$worker = function lambda_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x = tup3_0;
  fv_tmp = tardis1.Some(tup3_0);
  fv_r.value = fv_tmp;
  return lambda_bind$scrut_tup3(tup3_1, tup3_2)
};
lambda_bind$scrut_tup3 = function lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_bind$scrut_tup3$worker = function lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_element0$ = undefined;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw2 = tup3_1;
  fv_x = undefined;
  fv_callPrefix = runtime.safeCall(fv_f(undefined));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  if (runtime.Tuple.isArrayLike(fv_scrut) && fv_scrut.length === 3) {
    fv_element0$1 = runtime.Tuple.get(fv_scrut, 0);
    fv_element1$1 = runtime.Tuple.get(fv_scrut, 1);
    fv_element2$1 = runtime.Tuple.get(fv_scrut, 2);
    fv_fw2 = fv_element2$1;
    fv_bw1 = fv_element1$1;
    fv_x1 = fv_element0$1;
    fv_tmp = tardis1.Some(fv_element1$1);
    fv_r.value = fv_tmp;
    return globalThis.Object.freeze([
      fv_element0$1,
      tup3_1,
      fv_element2$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_bind$scrut_tup3$worker2 = function lambda$_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_bind$scrut_tup3$worker1 = function lambda$_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return globalThis.Object.freeze([
    tup3_0,
    fv_bw2,
    tup3_2
  ])
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda$_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
lambda$_lambda$_lambda_bind$scrut_tup3 = function lambda$_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda$_lambda_bind$scrut_tup3$worker = function lambda$_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda$_fix$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
lambda$_fix$scrut_tup3 = function lambda$_fix$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) => {
    return lambda$_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r)
  }
};
lambda$_fix$scrut_tup3$worker = function lambda$_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x = tup3_0;
  fv_tmp = tardis1.Some(tup3_0);
  fv_r.value = fv_tmp;
  return lambda$_bind$scrut_tup3(tup3_1, tup3_2)
};
lambda$_bind$scrut_tup3 = function lambda$_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_bind$scrut_tup3$worker = function lambda$_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_element0$ = undefined;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw2 = tup3_1;
  fv_x = undefined;
  fv_callPrefix = runtime.safeCall(fv_f(undefined));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  if (runtime.Tuple.isArrayLike(fv_scrut) && fv_scrut.length === 3) {
    fv_element0$1 = runtime.Tuple.get(fv_scrut, 0);
    fv_element1$1 = runtime.Tuple.get(fv_scrut, 1);
    fv_element2$1 = runtime.Tuple.get(fv_scrut, 2);
    fv_fw2 = fv_element2$1;
    fv_bw1 = fv_element1$1;
    fv_x1 = fv_element0$1;
    fv_tmp = tardis1.Some(fv_element1$1);
    fv_r.value = fv_tmp;
    return globalThis.Object.freeze([
      fv_element0$1,
      tup3_1,
      fv_element2$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$7 = (undefined, function (finalFrameScore, score) {
  return () => {
    let tmp;
    tmp = runtime.safeCall(score());
    return finalFrameScore + tmp
  }
});
score1$ = function score1$(p) {
  return () => {
    return score1(p)
  }
};
throws1$ = function throws1$(p) {
  return () => {
    return throws1(p)
  }
};
lambda$6 = (undefined, function (score, nextThrows) {
  return () => {
    return lambda(score, nextThrows)
  }
});
lambda = (undefined, function (score, nextThrows) {
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
lambda$3 = (undefined, function (score, nextThrows) {
  return (_) => {
    return lambda1(score, nextThrows)
  }
});
lambda$5 = (undefined, function (score, nextThrows) {
  return () => {
    return lambda2(score, nextThrows)
  }
});
lambda2 = (undefined, function (score, nextThrows) {
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
lambda$2 = (undefined, function (score, nextThrows, firstThrow) {
  return (_) => {
    return lambda3(score, nextThrows, firstThrow)
  }
});
lambda$4 = (undefined, function (score, secondThrow, firstThrow) {
  return () => {
    return lambda4(score, secondThrow, firstThrow)
  }
});
lambda4 = (undefined, function (score, secondThrow, firstThrow) {
  let tmp, tmp1;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + firstThrow;
  return tmp1 + secondThrow
});
lambda$1 = (undefined, function (score, secondThrow, firstThrow) {
  return (_) => {
    return lambda5(score, secondThrow, firstThrow)
  }
});
lambda1 = (undefined, function (score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda$6(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda3 = (undefined, function (score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda$5(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
});
lambda5 = (undefined, function (score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$4(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
});
score1 = function score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
throws1 = function throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$ = (undefined, function (tardis2, finalFrameScore, fs) {
  return (_) => {
    return lambda$$lambda(tardis2, finalFrameScore, fs)
  }
});
lambda6 = (undefined, function (tardis2, finalFrameScore, fs) {
  let tardis3, arg$Cons$0$, arg$Cons$1$, tmp, lambda$here, lambda$here1, lambda$here2;
  tardis3 = tardis2;
  if (fs instanceof tardis3.Nil.class) {
    lambda$here = lambda_lambda$$lambda$(tardis2, finalFrameScore);
    return lambda_bind$bind(lambda_getPast$getPast)(lambda$here)
  } else if (fs instanceof tardis3.Cons.class) {
    arg$Cons$0$ = fs.head;
    arg$Cons$1$ = fs.tail;
    lambda$here1 = lambda_lambda$$lambda$1(tardis2, arg$Cons$0$);
    tmp = lambda_fix$fix(lambda$here1);
    lambda$here2 = lambda$lambda$(tardis2, finalFrameScore, arg$Cons$1$);
    return lambda_bind$bind1(tmp)(lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
go = function go(tardis2, finalFrameScore, frames) {
  let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here, lambda$here1, lambda$here2;
  if (frames instanceof tardis2.Nil.class) {
    lambda$here = go_lambda$$lambda$(tardis2, finalFrameScore);
    return go_bind$bind(go_getPast$getPast)(lambda$here)
  } else if (frames instanceof tardis2.Cons.class) {
    arg$Cons$0$ = frames.head;
    arg$Cons$1$ = frames.tail;
    lambda$here1 = go_lambda$$lambda$1(tardis2, arg$Cons$0$);
    tmp = go_fix$fix(lambda$here1);
    lambda$here2 = go$lambda$(tardis2, finalFrameScore, arg$Cons$1$);
    return go_bind$bind1(tmp)(lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda7 = (undefined, function () {
  return 0
});
lambda8 = (undefined, function (th) {
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
      return runtime.Unit
    }
  }
  static #getPast(bw, fw) {
    return runtime.Unit
  }
  static #getFuture(bw, fw) {
    return runtime.Unit
  }
  static #sendPast(bw) {
    return (bw0, fw) => {
      return runtime.Unit
    }
  }
  static #sendFuture(fw) {
    return (bw, fw0) => {
      return runtime.Unit
    }
  }
  static #bind(m) {
    return (f) => {
      return (bw, fw) => {
        let r, scrut, scrut1, element2$, element0$, element1$, callPrefix, tmp;
        r = new tardis.Ref.class(tardis.None);
        scrut = runtime.safeCall(m(undefined, fw));
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
          element0$ = runtime.Tuple.get(scrut, 0);
          runtime.Tuple.get(scrut, 1);
          element2$ = runtime.Tuple.get(scrut, 2);
          callPrefix = runtime.safeCall(f(element0$));
          scrut1 = runtime.safeCall(callPrefix(bw, element2$));
          if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
            runtime.Tuple.get(scrut1, 0);
            element1$ = runtime.Tuple.get(scrut1, 1);
            runtime.Tuple.get(scrut1, 2);
            tmp = tardis.Some(element1$);
            r.value = tmp;
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
  }
  static #fix(f) {
    return (bw, fw) => {
      let r, scrut, element0$, callPrefix, tmp;
      r = new tardis.Ref.class(tardis.None);
      callPrefix = runtime.safeCall(f(undefined));
      scrut = runtime.safeCall(callPrefix(bw, fw));
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
        element0$ = runtime.Tuple.get(scrut, 0);
        runtime.Tuple.get(scrut, 1);
        runtime.Tuple.get(scrut, 2);
        tmp = tardis.Some(element0$);
        r.value = tmp;
        return runtime.Unit
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
    let arg$LStrike$0$, arg$LStrike$1$, tmp;
    if (lastFrame instanceof tardis.LStrike.class) {
      arg$LStrike$0$ = lastFrame.bonus1;
      arg$LStrike$1$ = lastFrame.bonus2;
      tmp = 10 + arg$LStrike$0$;
      return tmp + arg$LStrike$1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #initialBw(lastFrame) {
    return () => {
      let arg$LStrike$0$;
      if (lastFrame instanceof tardis.LStrike.class) {
        arg$LStrike$0$ = lastFrame.bonus1;
        return globalThis.Object.freeze([
          10,
          arg$LStrike$0$
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
      initialFw = tardis.Cons(lambda7, tardis.Nil);
      tmp = score_go$go(tardis, finalFrameScore, arg$Game$0$);
      tmp1 = tardis.#initialBw(arg$Game$1$);
      scrut = tardis.#run(tmp, tmp1, initialFw);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
        element0$ = runtime.Tuple.get(scrut, 0);
        runtime.Tuple.get(scrut, 1);
        runtime.Tuple.get(scrut, 2);
        return tardis.#map(lambda8)(element0$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let tmp, Cons_head, Cons_tail, Cons_head1, Cons_tail1, Cons_head2, Cons_tail2, Cons_head3, Cons_tail3, Cons_head4, Cons_tail4, Cons_head5, Cons_tail5, Cons_head6, Cons_tail6, Cons_head7, Cons_tail7, fv_initialFw, fv_element0$, Cons_tail8, f, bw, inlinedVal, r, inlinedVal1, r1, p, r2, inlinedVal2, arg$LStrike$0$, arg$LStrike$1$, tmp1;
    Cons_head = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike();
    Cons_tail = main_score_go$frames_Nil();
    Cons_head1 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike();
    Cons_tail1 = main_score_go$frames_Cons(Cons_head, Cons_tail);
    Cons_head2 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare(7);
    Cons_tail2 = main_score_go$frames_Cons(Cons_head1, Cons_tail1);
    Cons_head3 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame(8, 1);
    Cons_tail3 = main_score_go$frames_Cons(Cons_head2, Cons_tail2);
    Cons_head4 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike();
    Cons_tail4 = main_score_go$frames_Cons(Cons_head3, Cons_tail3);
    Cons_head5 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike();
    Cons_tail5 = main_score_go$frames_Cons(Cons_head4, Cons_tail4);
    Cons_head6 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike();
    Cons_tail6 = main_score_go$frames_Cons(Cons_head5, Cons_tail5);
    Cons_head7 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare(9);
    Cons_tail7 = main_score_go$frames_Cons(Cons_head6, Cons_tail6);
    tmp = tardis.LStrike(10, 10);
    fv_initialFw = undefined;
    fv_element0$ = undefined;
    if (tmp instanceof tardis1.LStrike.class) {
      let tup3_1, inlinedVal3, r3, tup3_11, inlinedVal4, tardis2, score11, arg$Cons$0$, tmp2;
      arg$LStrike$0$ = tmp.bonus1;
      arg$LStrike$1$ = tmp.bonus2;
      tmp1 = 10 + arg$LStrike$0$;
      inlinedVal2 = tmp1 + arg$LStrike$1$;
      fv_initialFw = tardis1.Cons(lambda7, tardis1.Nil);
      Cons_tail8 = main_score_go$frames_Cons(Cons_head7, Cons_tail7);
      f = main_score_go$lambda$(tardis1, inlinedVal2, Cons_tail8);
      bw = tardis1.#initialBw(tmp);
      r = new tardis1.Ref.class(tardis1.None);
      r1 = new tardis1.Ref.class(tardis1.None);
      p = get$(tardis1, r1);
      r2 = new tardis1.Ref.class(tardis1.None);
      tup3_1 = throws1$(p);
      r3 = new tardis1.Ref.class(tardis1.None);
      tup3_11 = getBw1$(tardis1, r3);
      tardis2 = tardis1;
      score11 = score1$(p);
      if (fv_initialFw instanceof tardis2.Cons.class) {
        let r4, tup3_12, inlinedVal5, r5, fv_nextThrows, eta$0$0, eta$1$8, inlinedVal6, tup3_0, tup3_01, tup3_13, tup3_2, fv_tmp, fv_r, fv_bw2, inlinedVal7, tup3_02, tup3_14, tup3_21, fv_element0$1, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp1, fv_r1, fv_bw21, inlinedVal8;
        arg$Cons$0$ = fv_initialFw.head;
        tmp2 = tardis1.Cons(score11, fv_initialFw);
        r4 = new tardis1.Ref.class(tardis1.None);
        tup3_12 = getBw1$(tardis1, r4);
        r5 = new tardis1.Ref.class(tardis1.None);
        fv_nextThrows = getBw1$(tardis1, r5);
        eta$0$0 = getBw1$(tardis1, r);
        eta$1$8 = getBw1$(tardis1, r5);
        tup3_0 = lambda$3(arg$Cons$0$, fv_nextThrows);
        tup3_01 = lambda$3(arg$Cons$0$, fv_nextThrows);
        tup3_13 = getBw1$(tardis1, r);
        tup3_2 = tmp2;
        fv_tmp = undefined;
        fv_r = r5;
        fv_bw2 = getBw1$(tardis1, r5);
        fv_tmp = tardis1.Some(tup3_13);
        r5.value = fv_tmp;
        inlinedVal7 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, fv_bw2, tmp2);
        inlinedVal6 = inlinedVal7;
        tup3_02 = tup3_01;
        tup3_14 = fv_bw2;
        tup3_21 = tmp2;
        fv_element0$1 = undefined;
        fv_element1$ = undefined;
        fv_element2$ = undefined;
        fv_fw2 = undefined;
        fv_bw1 = undefined;
        fv_x1 = undefined;
        fv_tmp1 = undefined;
        fv_r1 = r4;
        fv_bw21 = tup3_12;
        inlinedLbl: {
          inlinedVal8 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_02, tup3_14, tup3_21, fv_element0$1, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp1, fv_r1, fv_bw21);
          break inlinedLbl;
        }
        inlinedVal5 = inlinedVal8;
        inlinedVal4 = inlinedVal5(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, tup3_11);
        inlinedVal3 = inlinedVal4(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_1);
        inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1);
        inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r);
        if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 3) {
          fv_element0$ = runtime.Tuple.get(inlinedVal, 0);
          runtime.Tuple.get(inlinedVal, 1);
          runtime.Tuple.get(inlinedVal, 2);
          return tardis1.#map$tailrec(lambda8, fv_element0$)
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
export { score1 as _$_modulePrivate_$_score1 };
export { throws1 as _$_modulePrivate_$_throws1 };
export { getBw1$ as _$_modulePrivate_$_getBw1$ };
export { get$ as _$_modulePrivate_$_get$ };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { throws1$ as _$_modulePrivate_$_throws1$ };
export { score1$ as _$_modulePrivate_$_score1$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { main_score_go_getPast$getPast as _$_modulePrivate_$_main_score_go_getPast$getPast };
export { main_score_go$lambda$ as _$_modulePrivate_$_main_score_go$lambda$ };
export { main_score_go_bind$bind as _$_modulePrivate_$_main_score_go_bind$bind };
export { main_score_go_lambda$_lambda_pure$pure as _$_modulePrivate_$_main_score_go_lambda$_lambda_pure$pure };
export { main_score_go_lambda$_lambda$lambda as _$_modulePrivate_$_main_score_go_lambda$_lambda$lambda };
export { main_score_go_lambda$$lambda$ as _$_modulePrivate_$_main_score_go_lambda$$lambda$ };
export { main_score_go_lambda$$lambda$1 as _$_modulePrivate_$_main_score_go_lambda$$lambda$1 };
export { main_score_go_fix$fix as _$_modulePrivate_$_main_score_go_fix$fix };
export { main_score_go_bind$bind1 as _$_modulePrivate_$_main_score_go_bind$bind1 };
export { score_go_fix$fix as _$_modulePrivate_$_score_go_fix$fix };
export { score_go$lambda$ as _$_modulePrivate_$_score_go$lambda$ };
export { score_go$lambda as _$_modulePrivate_$_score_go$lambda };
export { score_go$go as _$_modulePrivate_$_score_go$go };
export { score_go_bind$bind as _$_modulePrivate_$_score_go_bind$bind };
export { score_go_lambda$$lambda$ as _$_modulePrivate_$_score_go_lambda$$lambda$ };
export { score_go_getPast$getPast as _$_modulePrivate_$_score_go_getPast$getPast };
export { score_go_bind$bind1 as _$_modulePrivate_$_score_go_bind$bind1 };
export { score_go_lambda$_lambda_pure$pure as _$_modulePrivate_$_score_go_lambda$_lambda_pure$pure };
export { score_go_lambda$_lambda$lambda as _$_modulePrivate_$_score_go_lambda$_lambda$lambda };
export { score_go_lambda$$lambda$1 as _$_modulePrivate_$_score_go_lambda$$lambda$1 };
export { go_getPast$getPast as _$_modulePrivate_$_go_getPast$getPast };
export { go$lambda$ as _$_modulePrivate_$_go$lambda$ };
export { go_bind$bind as _$_modulePrivate_$_go_bind$bind };
export { go_lambda$_lambda_pure$pure as _$_modulePrivate_$_go_lambda$_lambda_pure$pure };
export { go_lambda$_lambda$lambda as _$_modulePrivate_$_go_lambda$_lambda$lambda };
export { go_lambda$$lambda$ as _$_modulePrivate_$_go_lambda$$lambda$ };
export { go_lambda$$lambda$1 as _$_modulePrivate_$_go_lambda$$lambda$1 };
export { go_fix$fix as _$_modulePrivate_$_go_fix$fix };
export { go_bind$bind1 as _$_modulePrivate_$_go_bind$bind1 };
export { lambda_getPast$getPast as _$_modulePrivate_$_lambda_getPast$getPast };
export { lambda$lambda$ as _$_modulePrivate_$_lambda$lambda$ };
export { lambda_bind$bind as _$_modulePrivate_$_lambda_bind$bind };
export { lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_lambda_lambda$_lambda_pure$pure };
export { lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$$lambda$ };
export { lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$$lambda$1 };
export { lambda_fix$fix as _$_modulePrivate_$_lambda_fix$fix };
export { lambda_bind$bind1 as _$_modulePrivate_$_lambda_bind$bind1 };
export { lambda$_getPast$getPast as _$_modulePrivate_$_lambda$_getPast$getPast };
export { lambda$$lambda as _$_modulePrivate_$_lambda$$lambda };
export { lambda$_bind$bind as _$_modulePrivate_$_lambda$_bind$bind };
export { lambda$_lambda$_lambda_pure$pure as _$_modulePrivate_$_lambda$_lambda$_lambda_pure$pure };
export { lambda$_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda$lambda };
export { lambda$_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$$lambda$ };
export { lambda$_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda$$lambda$1 };
export { lambda$_fix$fix as _$_modulePrivate_$_lambda$_fix$fix };
export { lambda$_bind$bind1 as _$_modulePrivate_$_lambda$_bind$bind1 };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { main_score_go_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_main_score_go_lambda$_lambda_bind$scrut_tup3 };
export { main_score_go_fix$scrut_tup3 as _$_modulePrivate_$_main_score_go_fix$scrut_tup3 };
export { main_score_go_bind$scrut_tup3 as _$_modulePrivate_$_main_score_go_bind$scrut_tup3 };
export { main_score_go$frames_Cons as _$_modulePrivate_$_main_score_go$frames_Cons };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame };
export { main_score_go$frames_Nil as _$_modulePrivate_$_main_score_go$frames_Nil };
export { score_go_bind$scrut_tup3 as _$_modulePrivate_$_score_go_bind$scrut_tup3 };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { score_go_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_score_go_lambda$_lambda_bind$scrut_tup3 };
export { score_go_fix$scrut_tup3 as _$_modulePrivate_$_score_go_fix$scrut_tup3 };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { go_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_go_lambda$_lambda_bind$scrut_tup3 };
export { go_fix$scrut_tup3 as _$_modulePrivate_$_go_fix$scrut_tup3 };
export { go_bind$scrut_tup3 as _$_modulePrivate_$_go_bind$scrut_tup3 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda_fix$scrut_tup3 as _$_modulePrivate_$_lambda_fix$scrut_tup3 };
export { lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda_bind$scrut_tup3 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda$_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda$_lambda$_lambda_bind$scrut_tup3 };
export { lambda$_fix$scrut_tup3 as _$_modulePrivate_$_lambda$_fix$scrut_tup3 };
export { lambda$_bind$scrut_tup3 as _$_modulePrivate_$_lambda$_bind$scrut_tup3 };
export { lambda$_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda$_bind$scrut_tup3$worker };
export { lambda$_fix$scrut_tup3$worker as _$_modulePrivate_$_lambda$_fix$scrut_tup3$worker };
export { lambda$_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda$_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda$_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda$_bind$scrut_tup3$worker1 };
export { lambda$_bind$scrut_tup3$worker2 as _$_modulePrivate_$_lambda$_bind$scrut_tup3$worker2 };
export { lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker };
export { lambda_fix$scrut_tup3$worker as _$_modulePrivate_$_lambda_fix$scrut_tup3$worker };
export { lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker1 };
export { lambda_bind$scrut_tup3$worker2 as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker2 };
export { go_bind$scrut_tup3$worker as _$_modulePrivate_$_go_bind$scrut_tup3$worker };
export { go_fix$scrut_tup3$worker as _$_modulePrivate_$_go_fix$scrut_tup3$worker };
export { go_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_go_lambda$_lambda_bind$scrut_tup3$worker };
export { go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { go_bind$scrut_tup3$worker1 as _$_modulePrivate_$_go_bind$scrut_tup3$worker1 };
export { go_bind$scrut_tup3$worker2 as _$_modulePrivate_$_go_bind$scrut_tup3$worker2 };
export { score_go_bind$scrut_tup3$worker as _$_modulePrivate_$_score_go_bind$scrut_tup3$worker };
export { score_go_bind$scrut_tup3$worker1 as _$_modulePrivate_$_score_go_bind$scrut_tup3$worker1 };
export { score_go_fix$scrut_tup3$worker as _$_modulePrivate_$_score_go_fix$scrut_tup3$worker };
export { score_go_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_score_go_lambda$_lambda_bind$scrut_tup3$worker };
export { score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { score_go_bind$scrut_tup3$worker2 as _$_modulePrivate_$_score_go_bind$scrut_tup3$worker2 };
export { main_score_go$frames_Cons$worker as _$_modulePrivate_$_main_score_go$frames_Cons$worker };
export { main_score_go_bind$scrut_tup3$worker as _$_modulePrivate_$_main_score_go_bind$scrut_tup3$worker };
export { main_score_go_fix$scrut_tup3$worker as _$_modulePrivate_$_main_score_go_fix$scrut_tup3$worker };
export { main_score_go_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda_bind$scrut_tup3$worker };
export { main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { main_score_go_bind$scrut_tup3$worker1 as _$_modulePrivate_$_main_score_go_bind$scrut_tup3$worker1 };
export { main_score_go_bind$scrut_tup3$worker2 as _$_modulePrivate_$_main_score_go_bind$scrut_tup3$worker2 };
export { lambda$_bind$bind$worker as _$_modulePrivate_$_lambda$_bind$bind$worker };
export { lambda$_fix$fix$worker as _$_modulePrivate_$_lambda$_fix$fix$worker };
export { lambda$_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda$_lambda$_lambda$lambda$worker };
export { lambda$_bind$bind$worker1 as _$_modulePrivate_$_lambda$_bind$bind$worker1 };
export { lambda_bind$bind$worker as _$_modulePrivate_$_lambda_bind$bind$worker };
export { lambda_fix$fix$worker as _$_modulePrivate_$_lambda_fix$fix$worker };
export { lambda_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda_lambda$_lambda$lambda$worker };
export { lambda_bind$bind$worker1 as _$_modulePrivate_$_lambda_bind$bind$worker1 };
export { go_bind$bind$worker as _$_modulePrivate_$_go_bind$bind$worker };
export { go_fix$fix$worker as _$_modulePrivate_$_go_fix$fix$worker };
export { go_lambda$_lambda$lambda$worker as _$_modulePrivate_$_go_lambda$_lambda$lambda$worker };
export { go_bind$bind$worker1 as _$_modulePrivate_$_go_bind$bind$worker1 };
export { score_go_bind$bind$worker as _$_modulePrivate_$_score_go_bind$bind$worker };
export { score_go_lambda$_lambda$lambda$worker as _$_modulePrivate_$_score_go_lambda$_lambda$lambda$worker };
export { score_go_bind$bind$worker1 as _$_modulePrivate_$_score_go_bind$bind$worker1 };
export { score_go_fix$fix$worker as _$_modulePrivate_$_score_go_fix$fix$worker };
export { main_score_go_bind$bind$worker as _$_modulePrivate_$_main_score_go_bind$bind$worker };
export { main_score_go_fix$fix$worker as _$_modulePrivate_$_main_score_go_fix$fix$worker };
export { main_score_go_lambda$_lambda$lambda$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda$lambda$worker };
export { main_score_go_bind$bind$worker1 as _$_modulePrivate_$_main_score_go_bind$bind$worker1 };
export default tardis1;
