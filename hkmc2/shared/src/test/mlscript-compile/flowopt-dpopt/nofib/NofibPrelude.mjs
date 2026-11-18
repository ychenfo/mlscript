const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
import Rendering from "./../../Rendering.mjs";
let go, NofibPrelude1;
go = function go(NofibPrelude2, s, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i < s.length;
  if (scrut === true) {
    tmp = runtime.safeCall(s.charAt(i));
    tmp1 = i + 1;
    tmp2 = go(NofibPrelude2, s, tmp1);
    return NofibPrelude2.Cons(tmp, tmp2)
  }
  return NofibPrelude2.Nil;
};
(class NofibPrelude {
  static {
    NofibPrelude1 = this
  }
  static {
    NofibPrelude.Some = function Some(x) {
      return globalThis.Object.freeze(new Some.class(x));
    };
    (class Some {
      static {
        NofibPrelude.Some.class = this
      }
      constructor(x) {
        this.x = x;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Some", ["x"]];
    });
    (class None {
      static {
        new this
      }
      constructor() {
        NofibPrelude.None = this;
        Object.defineProperty(this, "class", {
          value: None
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"];
    });
    NofibPrelude.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        NofibPrelude.Cons.class = this
      }
      constructor(head, tail) {
        this.head = head;
        this.tail = tail;
      }
      toString() {
        let tmp, tmp1, tmp2;
        tmp = NofibPrelude.Cons(this.head, this.tail);
        tmp1 = NofibPrelude._internal_cons_to_str(tmp);
        tmp2 = "[" + tmp1;
        return tmp2 + "]"
      }
      [prettyPrint]() { return this.toString(); }
      static [definitionMetadata] = ["class", "Cons", ["head", "tail"]];
    });
    (class Nil {
      static {
        new this
      }
      constructor() {
        NofibPrelude.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() {
        return "[]"
      }
      [prettyPrint]() { return this.toString(); }
      static [definitionMetadata] = ["object", "Nil"];
    });
  }
  static _internal_cons_to_str(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return runtime.safeCall(Rendering.render(arg$Cons$0$))
      }
      {
        let inlinedVal;
        inlinedVal = Rendering.render;
        tmp = runtime.safeCall(inlinedVal(arg$Cons$0$));
        tmp1 = tmp + ",";
        tmp2 = NofibPrelude._internal_cons_to_str(arg$Cons$1$);
        return tmp1 + tmp2;
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static power(a, n) {
    return runtime.safeCall(globalThis.Math.pow(a, n))
  }
  static intDiv(a, b) {
    let tmp;
    tmp = a / b;
    return runtime.safeCall(globalThis.Math.floor(tmp))
  }
  static intQuot(a, b) {
    let tmp;
    tmp = a / b;
    return runtime.safeCall(globalThis.Math.trunc(tmp))
  }
  static intMod(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intDiv(a, b);
    tmp1 = b * tmp;
    return a - tmp1
  }
  static intRem(a, b) {
    let tmp, tmp1;
    tmp = NofibPrelude.intQuot(a, b);
    tmp1 = b * tmp;
    return a - tmp1
  }
  static max(a, b) {
    return runtime.safeCall(globalThis.Math.max(a, b))
  }
  static min(a, b) {
    return runtime.safeCall(globalThis.Math.min(a, b))
  }
  static abs(x) {
    return runtime.safeCall(globalThis.Math.abs(x))
  }
  static stringOfFloat(x) {
    return x + ""
  }
  static stringOfInt(x) {
    return x + ""
  }
  static stringConcat(x, y) {
    return x + y
  }
  static stringListConcat(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = NofibPrelude.stringListConcat(arg$Cons$1$);
      return NofibPrelude.stringConcat(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static sqrt(x) {
    return runtime.safeCall(globalThis.Math.sqrt(x))
  }
  static tan(x) {
    return runtime.safeCall(globalThis.Math.tan(x))
  }
  static sin(x) {
    return runtime.safeCall(globalThis.Math.sin(x))
  }
  static cos(x) {
    return runtime.safeCall(globalThis.Math.cos(x))
  }
  static round(x) {
    return runtime.safeCall(globalThis.Math.round(x))
  }
  static int_of_char(x) {
    return runtime.safeCall(x.charCodeAt(0))
  }
  static nofibStringToList(s) {
    return go(NofibPrelude, s, 0)
  }
  static nofibListToString(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return ""
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = NofibPrelude.nofibListToString(arg$Cons$1$);
      return arg$Cons$0$ + tmp
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "NofibPrelude"];
});
export default NofibPrelude1;
