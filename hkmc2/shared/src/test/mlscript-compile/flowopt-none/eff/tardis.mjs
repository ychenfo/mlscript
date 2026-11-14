const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const pure$accessorSymbol = globalThis.Symbol("pure");
const getPast$accessorSymbol = globalThis.Symbol("getPast");
const getFuture$accessorSymbol = globalThis.Symbol("getFuture");
const sendPast$accessorSymbol = globalThis.Symbol("sendPast");
const sendFuture$accessorSymbol = globalThis.Symbol("sendFuture");
const bind$accessorSymbol = globalThis.Symbol("bind");
const fix$accessorSymbol = globalThis.Symbol("fix");
let getBw1, get, go, tardis1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, score1, throws1, getBw1$, get$, lambda$, lambda$1, lambda$2, lambda$3, throws1$, score1$, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13;
lambda$13 = (undefined, function (finalFrameScore, score) {
  return () => {
    let tmp;
    tmp = runtime.safeCall(score());
    return finalFrameScore + tmp
  }
});
lambda$2 = (undefined, function (tardis2, finalFrameScore) {
  return (scores) => {
    return lambda(tardis2, finalFrameScore, scores)
  }
});
score1$ = function score1$(tardis2, p) {
  return () => {
    return score1(tardis2, p)
  }
};
throws1$ = function throws1$(tardis2, p) {
  return () => {
    return throws1(tardis2, p)
  }
};
lambda$12 = (undefined, function (tardis2, score, nextThrows) {
  return () => {
    return lambda1(tardis2, score, nextThrows)
  }
});
lambda1 = (undefined, function (tardis2, score, nextThrows) {
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
    return lambda2(tardis2, score, nextThrows, _)
  }
});
lambda$11 = (undefined, function (tardis2, score, nextThrows) {
  return () => {
    return lambda3(tardis2, score, nextThrows)
  }
});
lambda3 = (undefined, function (tardis2, score, nextThrows) {
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
    return lambda4(tardis2, score, nextThrows, firstThrow, _)
  }
});
lambda$10 = (undefined, function (score, secondThrow, firstThrow) {
  return () => {
    return lambda5(score, secondThrow, firstThrow)
  }
});
lambda5 = (undefined, function (score, secondThrow, firstThrow) {
  let tmp, tmp1;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + firstThrow;
  return tmp1 + secondThrow
});
lambda$7 = (undefined, function (score, secondThrow, firstThrow) {
  return (_) => {
    return lambda6(score, secondThrow, firstThrow, _)
  }
});
lambda2 = (undefined, function (tardis2, score, nextThrows, _) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda$12(tardis2, score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda4 = (undefined, function (tardis2, score, nextThrows, firstThrow, _) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda$11(tardis2, score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
});
lambda6 = (undefined, function (score, secondThrow, firstThrow, _) {
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
    return lambda7(tardis2, f, score, nextThrows)
  }
});
lambda7 = (undefined, function (tardis2, f, score, nextThrows) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$, lambda$here, lambda$here1, lambda$here2;
  if (f instanceof tardis2.Strike.class) {
    lambda$here = lambda$9(tardis2, score, nextThrows);
    return tardis2[pure$accessorSymbol](lambda$here)
  } else if (f instanceof tardis2.Spare.class) {
    arg$Spare$0$ = f.firstThrow;
    lambda$here1 = lambda$8(tardis2, score, nextThrows, arg$Spare$0$);
    return tardis2[pure$accessorSymbol](lambda$here1)
  } else if (f instanceof tardis2.Frame.class) {
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    lambda$here2 = lambda$7(score, arg$Frame$1$, arg$Frame$0$);
    return tardis2[pure$accessorSymbol](lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$5 = (undefined, function (tardis2, f, score) {
  return (_) => {
    let lambda$here;
    lambda$here = lambda$6(tardis2, f, score);
    return tardis2[bind$accessorSymbol](tardis2[getFuture$accessorSymbol])(lambda$here)
  }
});
lambda$4 = (undefined, function (tardis2, f, score11) {
  return (scores) => {
    return lambda8(tardis2, f, score11, scores)
  }
});
lambda8 = (undefined, function (tardis2, f, score11, scores) {
  let arg$Cons$0$, tmp, tmp1, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    tmp1 = tardis2[sendFuture$accessorSymbol](tmp);
    lambda$here = lambda$5(tardis2, f, arg$Cons$0$);
    return tardis2[bind$accessorSymbol](tmp1)(lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (tardis2, f, score11) {
  return (_) => {
    let lambda$here;
    lambda$here = lambda$4(tardis2, f, score11);
    return tardis2[bind$accessorSymbol](tardis2[getPast$accessorSymbol])(lambda$here)
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
lambda$1 = (undefined, function (tardis2, f) {
  return (p) => {
    return lambda9(tardis2, f, p)
  }
});
lambda$ = (undefined, function (tardis2, finalFrameScore, fs) {
  return (_) => {
    return go(tardis2, finalFrameScore, fs)
  }
});
lambda = (undefined, function (tardis2, finalFrameScore, scores) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$13(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return tardis2[pure$accessorSymbol](tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda9 = (undefined, function (tardis2, f, p) {
  let score11, throws11, tmp, lambda$here;
  score11 = score1$(tardis2, p);
  throws11 = throws1$(tardis2, p);
  tmp = tardis2[sendPast$accessorSymbol](throws11);
  lambda$here = lambda$3(tardis2, f, score11);
  return tardis2[bind$accessorSymbol](tmp)(lambda$here)
});
go = function go(tardis2, finalFrameScore, frames) {
  let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here, lambda$here1, lambda$here2;
  if (frames instanceof tardis2.Nil.class) {
    lambda$here = lambda$2(tardis2, finalFrameScore);
    return tardis2[bind$accessorSymbol](tardis2[getPast$accessorSymbol])(lambda$here)
  } else if (frames instanceof tardis2.Cons.class) {
    arg$Cons$0$ = frames.head;
    arg$Cons$1$ = frames.tail;
    lambda$here1 = lambda$1(tardis2, arg$Cons$0$);
    tmp = tardis2[fix$accessorSymbol](lambda$here1);
    lambda$here2 = lambda$(tardis2, finalFrameScore, arg$Cons$1$);
    return tardis2[bind$accessorSymbol](tmp)(lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda10 = (undefined, function () {
  return 0
});
lambda11 = (undefined, function (th) {
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
  static get [sendPast$accessorSymbol]() { return tardis.#sendPast; }
  static get [sendFuture$accessorSymbol]() { return tardis.#sendFuture; }
  static get [bind$accessorSymbol]() { return tardis.#bind; }
  static get [fix$accessorSymbol]() { return tardis.#fix; }
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
      initialFw = tardis.Cons(lambda10, tardis.Nil);
      tmp = go(tardis, finalFrameScore, arg$Game$0$);
      tmp1 = tardis.#initialBw(arg$Game$1$);
      scrut = tardis.#run(tmp, tmp1, initialFw);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
        element0$ = runtime.Tuple.get(scrut, 0);
        runtime.Tuple.get(scrut, 1);
        runtime.Tuple.get(scrut, 2);
        return tardis.#map(lambda11)(element0$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let sampleGame, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
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
    return tardis.#score(sampleGame)
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
export default tardis1;
