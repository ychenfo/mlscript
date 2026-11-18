const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
const listLen$accessorSymbol = globalThis.Symbol("listLen");
const append$accessorSymbol = globalThis.Symbol("append");
const end$accessorSymbol = globalThis.Symbol("end");
const promptReadAt$accessorSymbol = globalThis.Symbol("promptReadAt");
let ansi1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda$, lambda$1, lambda$2, lambda$3, lambda$4;
lambda3 = (undefined, function (x) {
  return x
});
lambda$4 = (undefined, function (ansi2) {
  return (y) => {
    return lambda(ansi2, y)
  }
});
lambda = (undefined, function (ansi2, y) {
  let tmp, inlinedVal, prog;
  tmp = NofibPrelude.nofibStringToList("I'm waiting...");
  prog = ansi2[end$accessorSymbol];
  if (y instanceof NofibPrelude.Nil.class) {
    inlinedVal = runtime.safeCall(prog());
    return ansi2[append$accessorSymbol](tmp, inlinedVal)
  } else if (y instanceof NofibPrelude.Cons.class) {
    let inlinedVal1;
    inlinedVal1 = runtime.safeCall(prog());
    return ansi2[append$accessorSymbol](tmp, inlinedVal1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (ansi2) {
  return (name) => {
    return lambda1(ansi2, name)
  }
});
lambda1 = (undefined, function (ansi2, name) {
  let reply, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, a, a1, element1$, element0$, element1$1, element0$1;
  tmp = NofibPrelude.nofibStringToList("Hello ");
  tmp1 = NofibPrelude.nofibStringToList("!");
  tmp2 = ansi2[append$accessorSymbol](name, tmp1);
  reply = ansi2[append$accessorSymbol](tmp, tmp2);
  tmp3 = ansi2[listLen$accessorSymbol](reply);
  tmp4 = tmp3 / 2;
  tmp5 = 40 - tmp4;
  tmp6 = globalThis.Object.freeze([
    tmp5,
    18
  ]);
  tmp7 = globalThis.Object.freeze([
    1,
    23
  ]);
  a = lambda$4(ansi2);
  if (runtime.Tuple.isArrayLike(tmp7) && tmp7.length === 2) {
    element0$1 = runtime.Tuple.get(tmp7, 0);
    element1$1 = runtime.Tuple.get(tmp7, 1);
    a1 = lambda$1(ansi2, a, element0$1, element1$1);
    if (runtime.Tuple.isArrayLike(tmp6) && tmp6.length === 2) {
      element0$ = runtime.Tuple.get(tmp6, 0);
      element1$ = runtime.Tuple.get(tmp6, 1);
      return lambda$(ansi2, reply, a1, element0$, element1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$2 = (undefined, function (ansi2) {
  return (x) => {
    return lambda2(ansi2, x)
  }
});
lambda2 = (undefined, function (ansi2, x) {
  let tmp, tmp1, tmp2, lambda$here, arg$Cons$1$;
  tmp = globalThis.Object.freeze([
    17,
    15
  ]);
  tmp1 = NofibPrelude.nofibStringToList("Please enter your name: ");
  lambda$here = lambda$3(ansi2);
  tmp2 = ansi2[promptReadAt$accessorSymbol](tmp, 18, tmp1, lambda$here);
  if (x instanceof NofibPrelude.Nil.class) {
    return runtime.safeCall(tmp2(NofibPrelude.Nil))
  } else if (x instanceof NofibPrelude.Cons.class) {
    arg$Cons$1$ = x.tail;
    return runtime.safeCall(tmp2(arg$Cons$1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$1 = (undefined, function (ansi2, a, x, y) {
  return (p) => {
    return lambda5(ansi2, a, x, y, p)
  }
});
lambda5 = (undefined, function (ansi2, a, x, y, p) {
  let tmp, inlinedVal, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, inlinedVal1, inlinedVal2;
  inlinedVal1 = y + "";
  tmp1 = NofibPrelude.nofibStringToList(inlinedVal1);
  inlinedVal2 = x + "";
  tmp2 = NofibPrelude.nofibStringToList(inlinedVal2);
  tmp3 = NofibPrelude.nofibStringToList("H");
  tmp4 = ansi2[append$accessorSymbol](tmp2, tmp3);
  tmp5 = NofibPrelude.Cons(";", tmp4);
  tmp6 = ansi2[append$accessorSymbol](tmp1, tmp5);
  tmp7 = NofibPrelude.Cons("[", tmp6);
  inlinedVal = NofibPrelude.Cons("E", tmp7);
  tmp = runtime.safeCall(a(p));
  return ansi2[append$accessorSymbol](inlinedVal, tmp)
});
lambda$ = (undefined, function (ansi2, s, a, x, y) {
  return (p) => {
    return lambda4(ansi2, s, a, x, y, p)
  }
});
lambda4 = (undefined, function (ansi2, s, a, x, y, p) {
  let tmp, tmp1, inlinedVal, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, inlinedVal1, inlinedVal2;
  inlinedVal1 = y + "";
  tmp2 = NofibPrelude.nofibStringToList(inlinedVal1);
  inlinedVal2 = x + "";
  tmp3 = NofibPrelude.nofibStringToList(inlinedVal2);
  tmp4 = NofibPrelude.nofibStringToList("H");
  tmp5 = ansi2[append$accessorSymbol](tmp3, tmp4);
  tmp6 = NofibPrelude.Cons(";", tmp5);
  tmp7 = ansi2[append$accessorSymbol](tmp2, tmp6);
  tmp8 = NofibPrelude.Cons("[", tmp7);
  inlinedVal = NofibPrelude.Cons("E", tmp8);
  tmp = ansi2[append$accessorSymbol](inlinedVal, s);
  tmp1 = runtime.safeCall(a(p));
  return ansi2[append$accessorSymbol](tmp, tmp1)
});
(class ansi {
  static {
    ansi1 = this
  }
  static get [listLen$accessorSymbol]() { return ansi.#listLen; }
  static get [append$accessorSymbol]() { return ansi.#append; }
  static get [end$accessorSymbol]() { return ansi.#end; }
  static get [promptReadAt$accessorSymbol]() { return ansi.#promptReadAt; }
  static {
    let tmp;
    tmp = NofibPrelude.nofibStringToList("L");
    ansi.cls = tmp;
  }
  static #loop$tailrec(n, s, l, consume, eta$0$0) {
    let inlinedVal, tmp, arg$Cons$0$, arg$Cons$1$;
    tmp = ansi.#reverse(s);
    inlinedVal = runtime.safeCall(consume(tmp));
    if (eta$0$0 instanceof NofibPrelude.Nil.class) {
      return runtime.safeCall(inlinedVal(NofibPrelude.Nil))
    } else if (eta$0$0 instanceof NofibPrelude.Cons.class) {
      let scrut, scrut1, scrut2, scrut3, tmp1, tmp2;
      arg$Cons$0$ = eta$0$0.head;
      arg$Cons$1$ = eta$0$0.tail;
      scrut = arg$Cons$0$ == "B";
      if (scrut === true) {
        return ansi.#deletee(n, s, l, consume, arg$Cons$1$)
      }
      scrut1 = arg$Cons$0$ == "D";
      if (scrut1 === true) {
        return ansi.#deletee(n, s, l, consume, arg$Cons$1$)
      }
      scrut2 = arg$Cons$0$ == "`";
      if (scrut2 === true) {
        let inlinedVal1, tmp3;
        tmp3 = ansi.#reverse(s);
        inlinedVal1 = runtime.safeCall(consume(tmp3));
        return runtime.safeCall(inlinedVal1(arg$Cons$1$))
      }
      scrut3 = n < l;
      if (scrut3 === true) {
        let tmp3;
        tmp1 = n + 1;
        tmp2 = NofibPrelude.Cons(arg$Cons$0$, s);
        tmp3 = ansi.#loop$tailrec(tmp1, tmp2, l, consume, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Cons$0$, tmp3)
      }
      {
        let tmp3;
        tmp3 = ansi.#loop$tailrec(n, s, l, consume, arg$Cons$1$);
        return NofibPrelude.Cons("B", tmp3);
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #compose(f, g) {
    return (eta$0$0) => {
      let tmp;
      tmp = runtime.safeCall(g(eta$0$0));
      return runtime.safeCall(f(tmp))
    }
  }
  static #tail(l) {
    if (l instanceof NofibPrelude.Cons.class) {
      return l.tail
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #reverse(l) {
    let l$_, l1, inlinedVal;
    l$_ = NofibPrelude.Nil;
    l1 = l;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp;
        if (l1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = l1.head;
          arg$Cons$1$ = l1.tail;
          tmp = NofibPrelude.Cons(arg$Cons$0$, l$_);
          l$_ = tmp;
          l1 = arg$Cons$1$;
          continue loopLabel
        }
        inlinedVal = l$_;
        break inlinedLbl;
      }
    }
    return inlinedVal
  }
  static #listLen(ls) {
    let ls1, a, inlinedVal;
    ls1 = ls;
    a = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$1$, tmp;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          inlinedVal = a;
          break inlinedLbl
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$1$ = ls1.tail;
          tmp = a + 1;
          ls1 = arg$Cons$1$;
          a = tmp;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = ansi.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #concat(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = ansi.#concat(arg$Cons$1$);
      return ansi.#append(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #foldr(f, z, xs) {
    return (eta$0$0) => {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs instanceof NofibPrelude.Nil.class) {
        return z(eta$0$0)
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        tmp = ansi.#foldr(f, z, arg$Cons$1$);
        return runtime.safeCall(f(arg$Cons$0$, tmp)(eta$0$0))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #replicate(n, x) {
    let scrut, tmp, tmp1;
    scrut = n == 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    tmp = n - 1;
    tmp1 = ansi.#replicate(tmp, x);
    return NofibPrelude.Cons(x, tmp1);
  }
  static #goto1(x, y) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal, inlinedVal1;
    inlinedVal = y + "";
    tmp = NofibPrelude.nofibStringToList(inlinedVal);
    inlinedVal1 = x + "";
    tmp1 = NofibPrelude.nofibStringToList(inlinedVal1);
    tmp2 = NofibPrelude.nofibStringToList("H");
    tmp3 = ansi.#append(tmp1, tmp2);
    tmp4 = NofibPrelude.Cons(";", tmp3);
    tmp5 = ansi.#append(tmp, tmp4);
    tmp6 = NofibPrelude.Cons("[", tmp5);
    return NofibPrelude.Cons("E", tmp6)
  }
  static #at(x_y, s) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      tmp = ansi.#goto1(element0$, element1$);
      return ansi.#append(tmp, s)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #highlight(s) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.nofibStringToList("ESC[7m");
    tmp1 = NofibPrelude.nofibStringToList("ESC[0m");
    tmp2 = ansi.#append(s, tmp1);
    return ansi.#append(tmp, tmp2)
  }
  static #end() {
    return NofibPrelude.nofibStringToList("")
  }
  static #writeChar(c, prog, cs) {
    let tmp;
    tmp = runtime.safeCall(prog(cs));
    return NofibPrelude.Cons(c, tmp)
  }
  static #writeString(s, prog, cs) {
    let tmp;
    tmp = runtime.safeCall(prog(cs));
    return ansi.#append(s, tmp)
  }
  static #writes(ss, a, b) {
    let tmp;
    tmp = ansi.#concat(ss);
    return ansi.#writeString(tmp, a, b)
  }
  static #ringBell(prog, cs) {
    return ansi.#writeChar("B", prog, cs)
  }
  static #writeAt(x_y, s, a) {
    return (eta$0$0) => {
      let element1$, element0$;
      if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
        element0$ = runtime.Tuple.get(x_y, 0);
        element1$ = runtime.Tuple.get(x_y, 1);
        return lambda4(ansi, s, a, element0$, element1$, eta$0$0)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #moveTo(x_y, a) {
    return (eta$0$0) => {
      let element1$, element0$;
      if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
        element0$ = runtime.Tuple.get(x_y, 0);
        element1$ = runtime.Tuple.get(x_y, 1);
        return lambda5(ansi, a, element0$, element1$, eta$0$0)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #deletee(n, s, l, consume, d) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    scrut = n > 0;
    if (scrut === true) {
      tmp = NofibPrelude.nofibStringToList("BS_BS");
      tmp1 = n - 1;
      tmp2 = ansi.#tail(s);
      tmp3 = ansi.#loop(tmp1, tmp2, l, consume);
      return ansi.#writeString(tmp, tmp3, d)
    }
    tmp4 = NofibPrelude.nofibStringToList("");
    tmp5 = ansi.#loop(0, tmp4, l, consume);
    return ansi.#ringBell(tmp5, d);
  }
  static #loop(n, s, l, consume) {
    return (eta$0$0) => {
      return ansi.#loop$tailrec(n, s, l, consume, eta$0$0)
    }
  }
  static #readAt(x_y, l, consume) {
    return (eta$0$0) => {
      let tmp, tmp1, tmp2;
      tmp = ansi.#replicate(l, "_");
      tmp1 = ansi.#loop(0, "", l, consume);
      tmp2 = ansi.#moveTo(x_y, tmp1);
      return ansi.#writeAt(x_y, tmp, tmp2)(eta$0$0)
    }
  }
  static #promptReadAt(x_y, l, prompt, consume) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      tmp = globalThis.Object.freeze([
        element0$,
        element1$
      ]);
      tmp1 = ansi.#listLen(prompt);
      tmp2 = element0$ + tmp1;
      tmp3 = globalThis.Object.freeze([
        tmp2,
        element1$
      ]);
      tmp4 = ansi.#readAt(tmp3, l, consume);
      return ansi.#writeAt(tmp, prompt, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #program(input) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, lambda$here;
    tmp = globalThis.Object.freeze([
      17,
      5
    ]);
    tmp1 = NofibPrelude.nofibStringToList("Demonstration program");
    tmp2 = ansi.#highlight(tmp1);
    tmp3 = ansi.#at(tmp, tmp2);
    tmp4 = globalThis.Object.freeze([
      48,
      5
    ]);
    tmp5 = NofibPrelude.nofibStringToList("Version 1.0");
    tmp6 = ansi.#at(tmp4, tmp5);
    tmp7 = globalThis.Object.freeze([
      17,
      7
    ]);
    tmp8 = NofibPrelude.nofibStringToList("This program illustrates a simple approach");
    tmp9 = ansi.#at(tmp7, tmp8);
    tmp10 = globalThis.Object.freeze([
      17,
      8
    ]);
    tmp11 = NofibPrelude.nofibStringToList("to screen-based interactive programs using");
    tmp12 = ansi.#at(tmp10, tmp11);
    tmp13 = globalThis.Object.freeze([
      17,
      9
    ]);
    tmp14 = NofibPrelude.nofibStringToList("the Hugs functional programming system.");
    tmp15 = ansi.#at(tmp13, tmp14);
    tmp16 = globalThis.Object.freeze([
      17,
      11
    ]);
    tmp17 = NofibPrelude.nofibStringToList("Please press any key to continue ...");
    tmp18 = ansi.#at(tmp16, tmp17);
    tmp19 = NofibPrelude.Cons(tmp18, NofibPrelude.Nil);
    tmp20 = NofibPrelude.Cons(tmp15, tmp19);
    tmp21 = NofibPrelude.Cons(tmp12, tmp20);
    tmp22 = NofibPrelude.Cons(tmp9, tmp21);
    tmp23 = NofibPrelude.Cons(tmp6, tmp22);
    tmp24 = NofibPrelude.Cons(tmp3, tmp23);
    tmp25 = NofibPrelude.Cons(ansi.cls, tmp24);
    lambda$here = lambda$2(ansi);
    return ansi.#writes(tmp25, lambda$here, input)
  }
  static #testAnsi_nofib(n) {
    let tmp, baseCall, tmp1;
    tmp = ansi.#replicate(n, ansi.#program);
    baseCall = ansi.#foldr(ansi.#compose, lambda3, tmp);
    tmp1 = NofibPrelude.nofibStringToList("testtesttest");
    return runtime.safeCall(baseCall(tmp1))
  }
  static main() {
    let tmp;
    tmp = ansi.#testAnsi_nofib(1);
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "ansi"];
});
export default ansi1;
