const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const getPast$accessorSymbol = globalThis.Symbol("getPast");
const getFuture$accessorSymbol = globalThis.Symbol("getFuture");
const bind$accessorSymbol = globalThis.Symbol("bind");
let getBw1, tardis1, lambda, lambda1, lambda2, getBw1$, lambda$, lambda$1, main_go_fix_get$_get$get, main_go_fix_get$$get$, main_go$go, main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda, main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$, main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$, main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1, main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1, main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2, main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2, main_go_lambda$_lambda_throws1$_throws1$throws1, main_go_lambda$_lambda_throws1$$throws1$, main_go_lambda$_lambda_score1$_score1$score1, main_go_lambda$_lambda_score1$$score1$, main_initialBw$initialBw, main_initialBw$initialBw$worker, main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda$worker, main_go$go$worker;
main_go_fix_get$_get$get = function main_go_fix_get$_get$get(tardis2, r) {
  let scrut;
  scrut = r.value;
  if (scrut instanceof tardis2.Some.class) {
    return runtime.safeCall(scrut.value(undefined))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_go_fix_get$$get$ = function main_go_fix_get$$get$(tardis2, r) {
  return () => {
    return main_go_fix_get$_get$get(tardis2, r)
  }
};
main_go$go = function main_go$go(tardis2, finalFrameScore, frames) {
  return (eta$0$0, eta$0$1) => {
    return main_go$go$worker(tardis2, finalFrameScore, frames, eta$0$0, eta$0$1)
  }
};
main_go$go$worker = function main_go$go$worker(tardis2, finalFrameScore, frames, eta$0$0, eta$0$1) {
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
        lambda$here = lambda$1(finalFrameScore, arg$Cons$0$1);
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
    p = main_go_fix_get$$get$(tardis1, r1);
    r2 = new tardis1.Ref.class(tardis1.None);
    bw = main_go_lambda$_lambda_throws1$$throws1$(p);
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
        let tardis3, score1, eta$0$01, inlinedVal4, arg$Cons$0$1, tmp4;
        element0$3 = runtime.Tuple.get(scrut, 0);
        element1$5 = runtime.Tuple.get(scrut, 1);
        tardis3 = tardis2;
        score1 = main_go_lambda$_lambda_score1$$score1$(p);
        eta$0$01 = getBw1$(tardis1, r);
        if (element0$3 instanceof tardis3.Cons.class) {
          let r4, element2$5, element1$7, element2$6, element1$8, element0$5, tmp5, bw1, inlinedVal5;
          arg$Cons$0$1 = element0$3.head;
          tmp4 = tardis2.Cons(score1, element0$3);
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
            lambda$here = main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, arg$Cons$0$, arg$Cons$0$1);
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
                      inlinedVal7 = main_go$go$worker(tardis2, finalFrameScore, arg$Cons$1$, eta$0$0, element2$);
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
main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda = function main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$ = function main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, secondThrow, firstThrow)
  }
};
main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda$worker = function main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$;
  if (f instanceof tardis2.Strike.class) {
    let a;
    a = main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2(score, nextThrows);
    return globalThis.Object.freeze([
      a,
      eta$0$0,
      eta$0$1
    ])
  } else if (f instanceof tardis2.Spare.class) {
    let a;
    arg$Spare$0$ = f.firstThrow;
    a = main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1(score, nextThrows, arg$Spare$0$);
    return globalThis.Object.freeze([
      a,
      eta$0$0,
      eta$0$1
    ])
  } else if (f instanceof tardis2.Frame.class) {
    let a;
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    a = main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, arg$Frame$1$, arg$Frame$0$);
    return globalThis.Object.freeze([
      a,
      eta$0$0,
      eta$0$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$ = function main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1)
    }
  }
};
main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
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
main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1 = function main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$1 = function main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
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
main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2 = function main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$2 = function main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return main_go_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$_lambda_lambda$_lambda$lambda2(score, nextThrows)
  }
};
main_go_lambda$_lambda_throws1$_throws1$throws1 = function main_go_lambda$_lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_go_lambda$_lambda_throws1$$throws1$ = function main_go_lambda$_lambda_throws1$$throws1$(p) {
  return () => {
    return main_go_lambda$_lambda_throws1$_throws1$throws1(p)
  }
};
main_go_lambda$_lambda_score1$_score1$score1 = function main_go_lambda$_lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_go_lambda$_lambda_score1$$score1$ = function main_go_lambda$_lambda_score1$$score1$(p) {
  return () => {
    return main_go_lambda$_lambda_score1$_score1$score1(p)
  }
};
main_initialBw$initialBw = function main_initialBw$initialBw(lastFrame) {
  return () => {
    return main_initialBw$initialBw$worker(lastFrame)
  }
};
main_initialBw$initialBw$worker = function main_initialBw$initialBw$worker(lastFrame) {
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
lambda$1 = (undefined, function (finalFrameScore, score) {
  return () => {
    let tmp;
    tmp = runtime.safeCall(score());
    return finalFrameScore + tmp
  }
});
lambda$ = (undefined, function (score, secondThrow, firstThrow) {
  return () => {
    return lambda(score, secondThrow, firstThrow)
  }
});
lambda = (undefined, function (score, secondThrow, firstThrow) {
  let tmp, tmp1;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + firstThrow;
  return tmp1 + secondThrow
});
lambda1 = (undefined, function () {
  return 0
});
lambda2 = (undefined, function (th) {
  return runtime.safeCall(th())
});
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
  static main() {
    let sampleGame, initialFw, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, arg$Game$0$, arg$Game$1$, element0$, tmp13, tmp14;
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
    if (sampleGame instanceof tardis.Game.class) {
      let inlinedVal, arg$LStrike$0$, arg$LStrike$1$, tmp15;
      arg$Game$0$ = sampleGame.frames;
      arg$Game$1$ = sampleGame.lastFrame;
      if (arg$Game$1$ instanceof tardis1.LStrike.class) {
        arg$LStrike$0$ = arg$Game$1$.bonus1;
        arg$LStrike$1$ = arg$Game$1$.bonus2;
        tmp15 = 10 + arg$LStrike$0$;
        inlinedVal = tmp15 + arg$LStrike$1$;
        initialFw = tardis.Cons(lambda1, tardis.Nil);
        tmp13 = main_go$go(tardis, inlinedVal, arg$Game$0$);
        tmp14 = main_initialBw$initialBw(arg$Game$1$);
        scrut = tardis.#run(tmp13, tmp14, initialFw);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
          element0$ = runtime.Tuple.get(scrut, 0);
          return tardis.#map(lambda2)(element0$)
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
export default tardis1;
