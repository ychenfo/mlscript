const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
const isSpace$accessorSymbol = globalThis.Symbol("isSpace");
let readInt_, treejoin1, lambda, lambda1;
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
readInt_ = function readInt_(treejoin2, n, cs) {
  loopLabel: while (true) {
    let s_, s_1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (cs instanceof NofibPrelude.Cons.class) {
      let c, inlinedVal, n1, tmp5;
      arg$Cons$0$ = cs.head;
      arg$Cons$1$ = cs.tail;
      c = arg$Cons$0$;
      n1 = runtime.safeCall(c.codePointAt(0));
      tmp5 = n1 >= 48;
      if (tmp5 === true) {
        inlinedVal = n1 <= 57;
        if (inlinedVal === true) {
          tmp = n * 10;
          tmp1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
          tmp2 = tmp + tmp1;
          tmp3 = tmp2 - 48;
          n = tmp3;
          cs = arg$Cons$1$;
          continue loopLabel
        }
        tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
        s_ = NofibPrelude.leaveWhile(treejoin2[isSpace$accessorSymbol], tmp4);
        return globalThis.Object.freeze([
          n,
          s_
        ]);
      }
      tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
      s_ = NofibPrelude.leaveWhile(treejoin2[isSpace$accessorSymbol], tmp4);
      return globalThis.Object.freeze([
        n,
        s_
      ]);
    }
    s_1 = NofibPrelude.leaveWhile(treejoin2[isSpace$accessorSymbol], cs);
    return globalThis.Object.freeze([
      n,
      s_1
    ]);
  }
};
(class treejoin {
  static {
    treejoin1 = this
  }
  static get [isSpace$accessorSymbol]() { return treejoin.#isSpace; }
  static {
    (class Tree {
      static {
        treejoin.Tree = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Tree"];
    });
    treejoin.Node = function Node(k, l, r) {
      return globalThis.Object.freeze(new Node.class(k, l, r));
    };
    (class Node extends treejoin.Tree {
      static {
        treejoin.Node.class = this
      }
      constructor(k, l, r) {
        super();
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
    (class Leaf extends treejoin.Tree {
      static {
        treejoin.Leaf.class = this
      }
      constructor(k, e) {
        super();
        this.k = k;
        this.e = e;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Leaf", ["k", "e"]];
    });
    (class Empty extends treejoin.Tree {
      static {
        new this
      }
      constructor() {
        super();
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
  static #isSpace(c) {
    let tmp;
    tmp = c === " ";
    if (tmp === false) {
      return c === "\n"
    }
    return true;
  }
  static #isDigit(c) {
    let n, tmp;
    n = runtime.safeCall(c.codePointAt(0));
    tmp = n >= 48;
    if (tmp === true) {
      return n <= 57
    }
    return false;
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
      throw runtime.safeCall(globalThis.Error("already exist"));
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
    return readInt_(treejoin, 0, s)
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
  static #testTreejoin_nofib(n) {
    let a, b, tmp, tmp1, tmp2, tmp3, s, inlinedVal, s1, inlinedVal1;
    tmp = runtime.safeCall(globalThis.fs.readFileSync("./hkmc2/shared/src/test/mlscript/nofib/input/1500.1"));
    tmp1 = runtime.safeCall(tmp.toString());
    s = tmp1;
    inlinedVal = go(NofibPrelude, s, 0);
    tmp2 = runtime.safeCall(globalThis.fs.readFileSync("./hkmc2/shared/src/test/mlscript/nofib/input/1500.2"));
    tmp3 = runtime.safeCall(tmp2.toString());
    s1 = tmp3;
    inlinedVal1 = go(NofibPrelude, s1, 0);
    a = treejoin.#readTree(lambda, inlinedVal, treejoin.Empty);
    b = treejoin.#readTree(lambda1, inlinedVal1, treejoin.Empty);
    return treejoin.#join(a, b, treejoin.Empty)
  }
  static main() {
    let tmp;
    tmp = treejoin.#testTreejoin_nofib(0);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "treejoin"];
});
export { readInt_ as _$_modulePrivate_$_readInt_ };
export { treejoin1 as _$_modulePrivate_$_treejoin };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export default treejoin1;
