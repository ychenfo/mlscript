const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
let treejoin1, lambda, lambda1;
lambda = (undefined, function (caseScrut) {
  let element0$;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 3) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    runtime.Tuple.get(caseScrut, 1);
    runtime.Tuple.get(caseScrut, 2);
    return element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda1 = (undefined, function (caseScrut) {
  let element0$;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 3) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    runtime.Tuple.get(caseScrut, 1);
    runtime.Tuple.get(caseScrut, 2);
    return element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
(class treejoin {
  static {
    treejoin1 = this
  }
  static {
    treejoin.Node = function Node(k, l, r) {
      return globalThis.Object.freeze(new Node.class(k, l, r));
    };
    (class Node {
      static {
        treejoin.Node.class = this
      }
      constructor(k, l, r) {
        this.k = k;
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["k", "l", "r"]];
    });
    treejoin.Leaf = function Leaf(k, e) {
      return globalThis.Object.freeze(new Leaf.class(k, e));
    };
    (class Leaf {
      static {
        treejoin.Leaf.class = this
      }
      constructor(k, e) {
        this.k = k;
        this.e = e;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Leaf", ["k", "e"]];
    });
    (class Empty {
      static {
        new this
      }
      constructor() {
        treejoin.Empty = this;
        Object.defineProperty(this, "class", {
          value: Empty
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Empty"];
    });
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
  static #isSpace(c) {
    let tmp;
    tmp = c === " ";
    if (tmp === false) {
      return c === "\n"
    }
    return true;
  }
  static #insertT(k, e, t) {
    let scrut, l_, scrut1, scrut2, arg$Leaf$0$, arg$Leaf$1$, arg$Node$0$, arg$Node$1$, arg$Node$2$, tmp, tmp1, tmp2, tmp3;
    if (t instanceof treejoin.Node.class) {
      arg$Node$0$ = t.k;
      arg$Node$1$ = t.l;
      arg$Node$2$ = t.r;
      scrut = k <= arg$Node$0$;
      if (scrut === true) {
        tmp = treejoin.#insertT(k, e, arg$Node$1$);
        return treejoin.Node(arg$Node$0$, tmp, arg$Node$2$)
      }
      tmp1 = treejoin.#insertT(k, e, arg$Node$2$);
      return treejoin.Node(arg$Node$0$, arg$Node$1$, tmp1);
    } else if (t instanceof treejoin.Leaf.class) {
      arg$Leaf$0$ = t.k;
      arg$Leaf$1$ = t.e;
      l_ = treejoin.Leaf(k, e);
      scrut1 = k < arg$Leaf$0$;
      if (scrut1 === true) {
        tmp2 = treejoin.Leaf(arg$Leaf$0$, arg$Leaf$1$);
        return treejoin.Node(k, l_, tmp2)
      }
      scrut2 = k > arg$Leaf$0$;
      if (scrut2 === true) {
        tmp3 = treejoin.Leaf(arg$Leaf$0$, arg$Leaf$1$);
        return treejoin.Node(arg$Leaf$0$, tmp3, l_)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (t instanceof treejoin.Empty.class) {
      return treejoin.Leaf(k, e)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lookupT(k, t) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$Leaf$0$, arg$Leaf$1$, arg$Node$0$, arg$Node$1$, arg$Node$2$;
      if (t instanceof treejoin.Node.class) {
        arg$Node$0$ = t.k;
        arg$Node$1$ = t.l;
        arg$Node$2$ = t.r;
        scrut = k <= arg$Node$0$;
        if (scrut === true) {
          t = arg$Node$1$;
          continue loopLabel
        }
        t = arg$Node$2$;
        continue loopLabel;
      } else if (t instanceof treejoin.Leaf.class) {
        arg$Leaf$0$ = t.k;
        arg$Leaf$1$ = t.e;
        scrut1 = k === arg$Leaf$0$;
        if (scrut1 === true) {
          return NofibPrelude.Some(arg$Leaf$1$)
        }
        return NofibPrelude.None;
      } else if (t instanceof treejoin.Empty.class) {
        return NofibPrelude.None
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #readInt(s) {
    let treejoin2, n, cs, inlinedVal;
    treejoin2 = treejoin;
    n = 0;
    cs = s;
    inlinedLbl: {
      loopLabel: while (true) {
        let s_, s_1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
        if (cs instanceof NofibPrelude.Cons.class) {
          let inlinedVal1, n1, tmp5;
          arg$Cons$0$ = cs.head;
          arg$Cons$1$ = cs.tail;
          n1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
          tmp5 = n1 >= 48;
          if (tmp5 === true) {
            inlinedVal1 = n1 <= 57;
            if (inlinedVal1 === true) {
              tmp = n * 10;
              tmp1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
              tmp2 = tmp + tmp1;
              tmp3 = tmp2 - 48;
              n = tmp3;
              cs = arg$Cons$1$;
              continue loopLabel
            }
            tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
            s_ = treejoin2.#leaveWhile(treejoin2.#isSpace, tmp4);
            inlinedVal = globalThis.Object.freeze([
              n,
              s_
            ]);
            break inlinedLbl;
          }
          tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
          s_ = treejoin2.#leaveWhile(treejoin2.#isSpace, tmp4);
          inlinedVal = globalThis.Object.freeze([
            n,
            s_
          ]);
          break inlinedLbl;
        }
        s_1 = treejoin2.#leaveWhile(treejoin2.#isSpace, cs);
        inlinedVal = globalThis.Object.freeze([
          n,
          s_1
        ]);
        break inlinedLbl;
      }
    }
    return inlinedVal
  }
  static #join(t1, t2, j) {
    loopLabel: while (true) {
      let scrut, arg$Node$1$, arg$Node$2$, arg$Leaf$1$, element2$, element1$, element0$, arg$Some$0$, element1$1, element0$1, tmp, tmp1;
      if (t1 instanceof treejoin.Empty.class) {
        return j
      }
      if (t2 instanceof treejoin.Empty.class) {
        return j
      }
      if (t1 instanceof treejoin.Leaf.class) {
        arg$Leaf$1$ = t1.e;
        if (runtime.Tuple.isArrayLike(arg$Leaf$1$) && arg$Leaf$1$.length === 3) {
          element0$ = runtime.Tuple.get(arg$Leaf$1$, 0);
          element1$ = runtime.Tuple.get(arg$Leaf$1$, 1);
          element2$ = runtime.Tuple.get(arg$Leaf$1$, 2);
          scrut = treejoin.#lookupT(element2$, t2);
          if (scrut instanceof NofibPrelude.None.class) {
            return j
          } else if (scrut instanceof NofibPrelude.Some.class) {
            arg$Some$0$ = scrut.x;
            if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 3) {
              element0$1 = runtime.Tuple.get(arg$Some$0$, 0);
              element1$1 = runtime.Tuple.get(arg$Some$0$, 1);
              runtime.Tuple.get(arg$Some$0$, 2);
              tmp = globalThis.Object.freeze([
                element0$,
                element1$,
                element2$,
                element0$1,
                element1$1
              ]);
              return treejoin.#insertT(element2$, tmp, j)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (t1 instanceof treejoin.Node.class) {
        arg$Node$1$ = t1.l;
        arg$Node$2$ = t1.r;
        tmp1 = treejoin.#join(arg$Node$2$, t2, j);
        t1 = arg$Node$1$;
        j = tmp1;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #readTree(fk, s, t) {
    loopLabel: while (true) {
      let scrut, scrut1, scrut2, e, k, element1$, element0$, element1$1, element0$1, element1$2, element0$2, tmp;
      if (s instanceof NofibPrelude.Nil.class) {
        return t
      }
      scrut = treejoin.#readInt(s);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        scrut1 = treejoin.#readInt(element1$);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
          element0$1 = runtime.Tuple.get(scrut1, 0);
          element1$1 = runtime.Tuple.get(scrut1, 1);
          scrut2 = treejoin.#readInt(element1$1);
          if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
            element0$2 = runtime.Tuple.get(scrut2, 0);
            element1$2 = runtime.Tuple.get(scrut2, 1);
            e = globalThis.Object.freeze([
              element0$,
              element0$1,
              element0$2
            ]);
            k = runtime.safeCall(fk(e));
            tmp = treejoin.#insertT(k, e, t);
            s = element1$2;
            t = tmp;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #testTreejoin_nofib(input1, input2) {
    let c1, c2, a, b;
    c1 = NofibPrelude.nofibStringToList(input1);
    c2 = NofibPrelude.nofibStringToList(input2);
    a = treejoin.#readTree(lambda, c1, treejoin.Empty);
    b = treejoin.#readTree(lambda1, c2, treejoin.Empty);
    return treejoin.#join(a, b, treejoin.Empty)
  }
  static main(input1, input2) {
    let tmp;
    tmp = treejoin.#testTreejoin_nofib(input1, input2);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "treejoin"];
});
export default treejoin1;
