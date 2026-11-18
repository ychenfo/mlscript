const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const enumFromThenTo$accessorSymbol = globalThis.Symbol("enumFromThenTo");
let integer1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lscomp1_lscomp2, lscomp1_lscomp21;
lscomp1_lscomp2 = function lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param5 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param5 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param5.head;
            arg$Cons$1$ = param5.tail;
            tmp = param2 + param3;
            tmp1 = param0[enumFromThenTo$accessorSymbol](param2, tmp, param4);
            param5 = arg$Cons$0$;
            param6 = arg$Cons$1$;
            param7 = tmp1;
            id = 1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param7.head;
            arg$Cons$1$ = param7.tail;
            tmp = runtime.safeCall(param1(param5, arg$Cons$0$));
            tmp1 = lscomp1_lscomp2(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return NofibPrelude.Cons(tmp, tmp1)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
lscomp1_lscomp21 = function lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param5 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param5 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param5.head;
            arg$Cons$1$ = param5.tail;
            tmp = param2 + param3;
            tmp1 = param0[enumFromThenTo$accessorSymbol](param2, tmp, param4);
            param5 = arg$Cons$0$;
            param6 = arg$Cons$1$;
            param7 = tmp1;
            id = 1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param7.head;
            arg$Cons$1$ = param7.tail;
            tmp = runtime.safeCall(param1(param5, arg$Cons$0$));
            tmp1 = lscomp1_lscomp21(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return NofibPrelude.Cons(tmp, tmp1)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
lambda = (undefined, function (a, b) {
  return a + b
});
lambda1 = (undefined, function (a, b) {
  return a + b
});
lambda2 = (undefined, function (a, b) {
  return a - b
});
lambda3 = (undefined, function (a, b) {
  return a - b
});
lambda4 = (undefined, function (a, b) {
  return a * b
});
lambda5 = (undefined, function (a, b) {
  return a * b
});
lambda6 = (undefined, function (a, b) {
  let tmp;
  tmp = a / b;
  return runtime.safeCall(globalThis.Math.floor(tmp))
});
lambda7 = (undefined, function (a, b) {
  let tmp;
  tmp = a / b;
  return runtime.safeCall(globalThis.Math.floor(tmp))
});
lambda8 = (undefined, function (a, b) {
  let tmp, inlinedVal, tmp1;
  tmp1 = a / b;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp = b * inlinedVal;
  return a - tmp
});
lambda9 = (undefined, function (a, b) {
  let tmp, inlinedVal, tmp1;
  tmp1 = a / b;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp = b * inlinedVal;
  return a - tmp
});
lambda10 = (undefined, function (a, b) {
  return a == b
});
lambda11 = (undefined, function (a, b) {
  return a == b
});
lambda12 = (undefined, function (a, b) {
  return a < b
});
lambda13 = (undefined, function (a, b) {
  return a < b
});
lambda14 = (undefined, function (a, b) {
  return a <= b
});
lambda15 = (undefined, function (a, b) {
  return a <= b
});
lambda16 = (undefined, function (a, b) {
  return a > b
});
lambda17 = (undefined, function (a, b) {
  return a > b
});
lambda18 = (undefined, function (a, b) {
  return a >= b
});
lambda19 = (undefined, function (a, b) {
  return a >= b
});
(class integer {
  static {
    integer1 = this
  }
  static get [enumFromThenTo$accessorSymbol]() { return integer.#enumFromThenTo; }
  static #enumFromThenTo(a, t, b) {
    let scrut, tmp, tmp1, tmp2;
    scrut = a <= b;
    if (scrut === true) {
      tmp = 2 * t;
      tmp1 = tmp - a;
      tmp2 = integer.#enumFromThenTo(t, tmp1, b);
      return NofibPrelude.Cons(a, tmp2)
    }
    return NofibPrelude.Nil;
  }
  static #integerbench(op, astart, astep, alim, bstart, bstep, blim) {
    let tmp, tmp1;
    tmp = astart + astep;
    tmp1 = integer.#enumFromThenTo(astart, tmp, alim);
    return lscomp1_lscomp2(0, integer, op, bstart, bstep, blim, tmp1, undefined, undefined)
  }
  static #intbench(op, astart, astep, alim, bstart, bstep, blim) {
    let tmp, tmp1;
    tmp = astart + astep;
    tmp1 = integer.#enumFromThenTo(astart, tmp, alim);
    return lscomp1_lscomp21(0, integer, op, bstart, bstep, blim, tmp1, undefined, undefined)
  }
  static #runbench(jop, iop, opstr, astart, astep, alim, bstart, bstep, blim) {
    integer.#intbench(iop, astart, astep, alim, astart, astep, alim);
    return integer.#integerbench(jop, astart, astep, alim, astart, astep, alim)
  }
  static #runalltests(astart, astep, alim, bstart, bstep, blim) {
    integer.#runbench(lambda, lambda1, "(+)", astart, astep, alim, astart, astep, alim);
    integer.#runbench(lambda2, lambda3, "(-)", astart, astep, alim, astart, astep, alim);
    integer.#runbench(lambda4, lambda5, "(*)", astart, astep, alim, astart, astep, alim);
    integer.#runbench(lambda6, lambda7, "div", astart, astep, alim, astart, astep, alim);
    integer.#runbench(lambda8, lambda9, "mod", astart, astep, alim, astart, astep, alim);
    integer.#runbench(lambda10, lambda11, "(==)", astart, astep, alim, astart, astep, alim);
    integer.#runbench(lambda12, lambda13, "(<)", astart, astep, alim, astart, astep, alim);
    integer.#runbench(lambda14, lambda15, "(<=)", astart, astep, alim, astart, astep, alim);
    integer.#runbench(lambda16, lambda17, "(>)", astart, astep, alim, astart, astep, alim);
    return integer.#runbench(lambda18, lambda19, "(>=)", astart, astep, alim, astart, astep, alim)
  }
  static #testInteger_nofib(n) {
    return integer.#runalltests(-2100000000, n, 2100000000, -2100000000, n, -2100000000)
  }
  static main() {
    let tmp;
    tmp = integer.#testInteger_nofib(700000001);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "integer"];
});
export default integer1;
