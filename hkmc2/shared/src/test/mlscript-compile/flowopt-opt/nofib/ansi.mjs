const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_r as r } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
const goto$accessorSymbol = globalThis.Symbol("goto");
const end$accessorSymbol = globalThis.Symbol("end");
const deletee$accessorSymbol = globalThis.Symbol("deletee");
const loop$accessorSymbol = globalThis.Symbol("loop");
const promptReadAt$accessorSymbol = globalThis.Symbol("promptReadAt");
let ansi1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8;
lambda6 = (undefined, function (x) {
  return x
});
lambda$8 = (undefined, function (ansi2) {
  return (x) => {
    return lambda2(ansi2, x)
  }
});
lambda2 = (undefined, function (ansi2, x) {
  let prog, consume, arg$Cons$0$, arg$Cons$1$;
  prog = ansi2[end$accessorSymbol];
  consume = lambda$(prog);
  if (x instanceof NofibPrelude.Nil.class) {
    return runtime.safeCall(prog(NofibPrelude.Nil))
  } else if (x instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = x.head;
    arg$Cons$1$ = x.tail;
    return runtime.safeCall(consume(arg$Cons$0$, arg$Cons$1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$7 = (undefined, function (ansi2) {
  return (y) => {
    return lambda3(ansi2, y)
  }
});
lambda3 = (undefined, function (ansi2, y) {
  let inlinedVal, prog, tmp;
  inlinedVal = go(NofibPrelude, "I'm waiting...", 0);
  prog = lambda$8(ansi2);
  tmp = runtime.safeCall(prog(y));
  return NofibPrelude.append(inlinedVal, tmp)
});
lambda$6 = (undefined, function (ansi2) {
  return (name) => {
    return lambda4(ansi2, name)
  }
});
lambda4 = (undefined, function (ansi2, name) {
  let reply, tmp, tmp1, tmp2, tmp3, tmp4, inlinedVal, inlinedVal1, inlinedVal2, a, a1, element1$, element0$, element1$1, element0$1;
  inlinedVal = go(NofibPrelude, "Hello ", 0);
  inlinedVal1 = go(NofibPrelude, "!", 0);
  tmp = NofibPrelude.append(name, inlinedVal1);
  reply = NofibPrelude.append(inlinedVal, tmp);
  inlinedVal2 = l(NofibPrelude, reply, 0);
  tmp1 = inlinedVal2 / 2;
  tmp2 = 40 - tmp1;
  tmp3 = globalThis.Object.freeze([
    tmp2,
    18
  ]);
  tmp4 = globalThis.Object.freeze([
    1,
    23
  ]);
  a = lambda$7(ansi2);
  if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
    element0$1 = runtime.Tuple.get(tmp4, 0);
    element1$1 = runtime.Tuple.get(tmp4, 1);
    a1 = lambda$2(ansi2, a, element0$1, element1$1);
    if (runtime.Tuple.isArrayLike(tmp3) && tmp3.length === 2) {
      element0$ = runtime.Tuple.get(tmp3, 0);
      element1$ = runtime.Tuple.get(tmp3, 1);
      return lambda$1(ansi2, reply, a1, element0$, element1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$5 = (undefined, function (ansi2) {
  return (x) => {
    return lambda5(ansi2, x)
  }
});
lambda5 = (undefined, function (ansi2, x) {
  let tmp, tmp1, lambda$here, inlinedVal, prog, consume, arg$Cons$0$, arg$Cons$1$;
  tmp = globalThis.Object.freeze([
    17,
    15
  ]);
  inlinedVal = go(NofibPrelude, "Please enter your name: ", 0);
  lambda$here = lambda$6(ansi2);
  tmp1 = ansi2[promptReadAt$accessorSymbol](tmp, 18, inlinedVal, lambda$here);
  prog = tmp1;
  consume = lambda$(prog);
  if (x instanceof NofibPrelude.Nil.class) {
    return runtime.safeCall(prog(NofibPrelude.Nil))
  } else if (x instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = x.head;
    arg$Cons$1$ = x.tail;
    return runtime.safeCall(consume(arg$Cons$0$, arg$Cons$1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$4 = (undefined, function (ansi2, n, s, l1, consume) {
  return (c, d) => {
    return lambda1(ansi2, n, s, l1, consume, c, d)
  }
});
lambda1 = (undefined, function (ansi2, n, s, l1, consume, c, d) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3;
  scrut = c == "B";
  if (scrut === true) {
    return ansi2[deletee$accessorSymbol](n, s, l1, consume, d)
  }
  scrut1 = c == "D";
  if (scrut1 === true) {
    return ansi2[deletee$accessorSymbol](n, s, l1, consume, d)
  }
  scrut2 = c == "`";
  if (scrut2 === true) {
    let consume1, inlinedVal, inlinedVal1;
    consume1 = consume;
    inlinedVal1 = r(NofibPrelude, NofibPrelude.Nil, s);
    inlinedVal = runtime.safeCall(consume1(inlinedVal1));
    return runtime.safeCall(inlinedVal(d))
  }
  scrut3 = n < l1;
  if (scrut3 === true) {
    let prog, tmp4;
    tmp = n + 1;
    tmp1 = NofibPrelude.Cons(c, s);
    tmp2 = ansi2[loop$accessorSymbol](tmp, tmp1, l1, consume);
    prog = tmp2;
    tmp4 = runtime.safeCall(prog(d));
    return NofibPrelude.Cons(c, tmp4)
  }
  {
    let prog, tmp4;
    tmp3 = ansi2[loop$accessorSymbol](n, s, l1, consume);
    prog = tmp3;
    tmp4 = runtime.safeCall(prog(d));
    return NofibPrelude.Cons("B", tmp4);
  }
});
lambda$3 = (undefined, function (ansi2, n, s, l1, consume) {
  return (x) => {
    return lambda9(ansi2, n, s, l1, consume, x)
  }
});
lambda9 = (undefined, function (ansi2, n, s, l1, consume, x) {
  let consume1, inlinedVal, inlinedVal1, eof, consume2, arg$Cons$0$, arg$Cons$1$;
  consume1 = consume;
  inlinedVal1 = r(NofibPrelude, NofibPrelude.Nil, s);
  inlinedVal = runtime.safeCall(consume1(inlinedVal1));
  eof = inlinedVal;
  consume2 = lambda$4(ansi2, n, s, l1, consume);
  if (x instanceof NofibPrelude.Nil.class) {
    return runtime.safeCall(eof(NofibPrelude.Nil))
  } else if (x instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = x.head;
    arg$Cons$1$ = x.tail;
    return runtime.safeCall(consume2(arg$Cons$0$, arg$Cons$1$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$2 = (undefined, function (ansi2, a, x, y) {
  return (p) => {
    return lambda8(ansi2, a, x, y, p)
  }
});
lambda8 = (undefined, function (ansi2, a, x, y, p) {
  let tmp, prog, tmp1;
  tmp = ansi2[goto$accessorSymbol](x, y);
  prog = a;
  tmp1 = runtime.safeCall(prog(p));
  return NofibPrelude.append(tmp, tmp1)
});
lambda$1 = (undefined, function (ansi2, s, a, x, y) {
  return (p) => {
    return lambda7(ansi2, s, a, x, y, p)
  }
});
lambda7 = (undefined, function (ansi2, s, a, x, y, p) {
  let tmp, tmp1, prog, tmp2;
  tmp = ansi2[goto$accessorSymbol](x, y);
  tmp1 = NofibPrelude.append(tmp, s);
  prog = a;
  tmp2 = runtime.safeCall(prog(p));
  return NofibPrelude.append(tmp1, tmp2)
});
lambda$ = (undefined, function (prog) {
  return (c, x) => {
    return runtime.safeCall(prog(x))
  }
});
lambda = (undefined, function (prog, c, x) {
  return runtime.safeCall(prog(x))
});
(class ansi {
  static {
    ansi1 = this
  }
  static get [goto$accessorSymbol]() { return ansi.#goto1; }
  static get [end$accessorSymbol]() { return ansi.#end; }
  static get [deletee$accessorSymbol]() { return ansi.#deletee; }
  static get [loop$accessorSymbol]() { return ansi.#loop; }
  static get [promptReadAt$accessorSymbol]() { return ansi.#promptReadAt; }
  static {
    let inlinedVal;
    inlinedVal = go(NofibPrelude, "L", 0);
    ansi.cls = inlinedVal;
  }
  static #goto1(x, y) {
    let tmp, tmp1, tmp2, tmp3, inlinedVal, s, inlinedVal1, inlinedVal2, s1, inlinedVal3, inlinedVal4;
    inlinedVal = y + "";
    s = inlinedVal;
    inlinedVal1 = go(NofibPrelude, s, 0);
    inlinedVal2 = x + "";
    s1 = inlinedVal2;
    inlinedVal3 = go(NofibPrelude, s1, 0);
    inlinedVal4 = go(NofibPrelude, "H", 0);
    tmp = NofibPrelude.append(inlinedVal3, inlinedVal4);
    tmp1 = NofibPrelude.Cons(";", tmp);
    tmp2 = NofibPrelude.append(inlinedVal1, tmp1);
    tmp3 = NofibPrelude.Cons("[", tmp2);
    return NofibPrelude.Cons("E", tmp3)
  }
  static #at(x_y, s) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      tmp = ansi.#goto1(element0$, element1$);
      return NofibPrelude.append(tmp, s)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #highlight(s) {
    let tmp, inlinedVal, inlinedVal1;
    inlinedVal = go(NofibPrelude, "ESC[7m", 0);
    inlinedVal1 = go(NofibPrelude, "ESC[0m", 0);
    tmp = NofibPrelude.append(s, inlinedVal1);
    return NofibPrelude.append(inlinedVal, tmp)
  }
  static #end(xs) {
    return go(NofibPrelude, "", 0)
  }
  static #readChar(eof, consume, cs) {
    let arg$Cons$0$, arg$Cons$1$;
    if (cs instanceof NofibPrelude.Nil.class) {
      return runtime.safeCall(eof(NofibPrelude.Nil))
    } else if (cs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = cs.head;
      arg$Cons$1$ = cs.tail;
      return runtime.safeCall(consume(arg$Cons$0$, arg$Cons$1$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #peekChar(eof, consume, cs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (cs instanceof NofibPrelude.Nil.class) {
      return runtime.safeCall(eof(NofibPrelude.Nil))
    } else if (cs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = cs.head;
      arg$Cons$1$ = cs.tail;
      tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
      return runtime.safeCall(consume(arg$Cons$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #pressAnyKey(prog, x) {
    return ansi.#readChar(prog, lambda$(prog), x)
  }
  static #unreadChar(c, prog, cs) {
    let tmp;
    tmp = NofibPrelude.Cons(c, cs);
    return runtime.safeCall(prog(tmp))
  }
  static #writeChar(c, prog, cs) {
    let tmp;
    tmp = runtime.safeCall(prog(cs));
    return NofibPrelude.Cons(c, tmp)
  }
  static #writeString(s, prog, cs) {
    let tmp;
    tmp = runtime.safeCall(prog(cs));
    return NofibPrelude.append(s, tmp)
  }
  static #writes(ss, a, b) {
    let tmp;
    tmp = NofibPrelude.concat(ss);
    return ansi.#writeString(tmp, a, b)
  }
  static #ringBell(prog, cs) {
    return ansi.#writeChar("B", prog, cs)
  }
  static #clearScreen(a, b) {
    return ansi.#writeString(ansi.cls, a, b)
  }
  static #writeAt(x_y, s, a) {
    let element1$, element0$;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      return lambda$1(ansi, s, a, element0$, element1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #moveTo(x_y, a) {
    let element1$, element0$;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      return lambda$2(ansi, a, element0$, element1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #returnn(s, consume) {
    let inlinedVal;
    inlinedVal = r(NofibPrelude, NofibPrelude.Nil, s);
    return runtime.safeCall(consume(inlinedVal))
  }
  static #deletee(n, s, l1, consume, d) {
    let scrut, tmp, tmp1, tmp2;
    scrut = n > 0;
    if (scrut === true) {
      let inlinedVal, inlinedVal1;
      inlinedVal = go(NofibPrelude, "BS_BS", 0);
      tmp = n - 1;
      if (s instanceof NofibPrelude.Cons.class) {
        inlinedVal1 = s.tail;
        tmp1 = ansi.#loop(tmp, inlinedVal1, l1, consume);
        return ansi.#writeString(inlinedVal, tmp1, d)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    {
      let inlinedVal;
      inlinedVal = go(NofibPrelude, "", 0);
      tmp2 = ansi.#loop(0, inlinedVal, l1, consume);
      return ansi.#ringBell(tmp2, d);
    }
  }
  static #loop(n, s, l1, consume) {
    return lambda$3(ansi, n, s, l1, consume)
  }
  static #readAt(x_y, l1, consume) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.replicate(l1, "_");
    tmp1 = ansi.#loop(0, "", l1, consume);
    tmp2 = ansi.#moveTo(x_y, tmp1);
    return ansi.#writeAt(x_y, tmp, tmp2)
  }
  static #promptReadAt(x_y, l1, prompt, consume) {
    let element1$, element0$, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(x_y, 0);
      element1$ = runtime.Tuple.get(x_y, 1);
      tmp = globalThis.Object.freeze([
        element0$,
        element1$
      ]);
      inlinedVal = l(NofibPrelude, prompt, 0);
      tmp1 = element0$ + inlinedVal;
      tmp2 = globalThis.Object.freeze([
        tmp1,
        element1$
      ]);
      tmp3 = ansi.#readAt(tmp2, l1, consume);
      return ansi.#writeAt(tmp, prompt, tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #program(input) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, lambda$here, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5;
    tmp = globalThis.Object.freeze([
      17,
      5
    ]);
    inlinedVal = go(NofibPrelude, "Demonstration program", 0);
    tmp1 = ansi.#highlight(inlinedVal);
    tmp2 = ansi.#at(tmp, tmp1);
    tmp3 = globalThis.Object.freeze([
      48,
      5
    ]);
    inlinedVal1 = go(NofibPrelude, "Version 1.0", 0);
    tmp4 = ansi.#at(tmp3, inlinedVal1);
    tmp5 = globalThis.Object.freeze([
      17,
      7
    ]);
    inlinedVal2 = go(NofibPrelude, "This program illustrates a simple approach", 0);
    tmp6 = ansi.#at(tmp5, inlinedVal2);
    tmp7 = globalThis.Object.freeze([
      17,
      8
    ]);
    inlinedVal3 = go(NofibPrelude, "to screen-based interactive programs using", 0);
    tmp8 = ansi.#at(tmp7, inlinedVal3);
    tmp9 = globalThis.Object.freeze([
      17,
      9
    ]);
    inlinedVal4 = go(NofibPrelude, "the Hugs functional programming system.", 0);
    tmp10 = ansi.#at(tmp9, inlinedVal4);
    tmp11 = globalThis.Object.freeze([
      17,
      11
    ]);
    inlinedVal5 = go(NofibPrelude, "Please press any key to continue ...", 0);
    tmp12 = ansi.#at(tmp11, inlinedVal5);
    tmp13 = NofibPrelude.Cons(tmp12, NofibPrelude.Nil);
    tmp14 = NofibPrelude.Cons(tmp10, tmp13);
    tmp15 = NofibPrelude.Cons(tmp8, tmp14);
    tmp16 = NofibPrelude.Cons(tmp6, tmp15);
    tmp17 = NofibPrelude.Cons(tmp4, tmp16);
    tmp18 = NofibPrelude.Cons(tmp2, tmp17);
    tmp19 = NofibPrelude.Cons(ansi.cls, tmp18);
    lambda$here = lambda$5(ansi);
    return ansi.#writes(tmp19, lambda$here, input)
  }
  static #testAnsi_nofib(n) {
    let tmp, baseCall, inlinedVal;
    tmp = NofibPrelude.replicate(n, ansi.#program);
    baseCall = NofibPrelude.foldr(NofibPrelude.compose, lambda6, tmp);
    inlinedVal = go(NofibPrelude, "testtesttest", 0);
    return runtime.safeCall(baseCall(inlinedVal))
  }
  static main() {
    let tmp;
    tmp = ansi.#testAnsi_nofib(1);
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "ansi"];
});
export { ansi1 as _$_modulePrivate_$_ansi };
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
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { lambda$8 as _$_modulePrivate_$_lambda$8 };
export default ansi1;
