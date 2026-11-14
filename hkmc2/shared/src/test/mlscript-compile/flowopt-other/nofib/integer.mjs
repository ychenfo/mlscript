const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
let lscomp2, lscomp1, lscomp21, lscomp11, z_lt, z_add, z_leq, z_mod, z_gt, z_geq, z_mul, z_equal, z_sub, z_div, integer1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lscomp1_lscomp2, lscomp1_lscomp21;
lscomp1_lscomp2 = function lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param4 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param4 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param4.head;
            arg$Cons$1$ = param4.tail;
            tmp = param1 + param2;
            tmp1 = NofibPrelude.enumFromThenTo(param1, tmp, param3);
            param4 = arg$Cons$0$;
            param5 = arg$Cons$1$;
            param6 = tmp1;
            id = 1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param6 instanceof NofibPrelude.Nil.class) {
            param4 = param5;
            id = 0;
            continue loopLabel
          } else if (param6 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param6.head;
            arg$Cons$1$ = param6.tail;
            tmp = runtime.safeCall(param0(param4, arg$Cons$0$));
            tmp1 = lscomp1_lscomp2(1, param0, param1, param2, param3, param4, param5, arg$Cons$1$);
            return NofibPrelude.Cons(tmp, tmp1)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
lscomp1_lscomp21 = function lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param4 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param4 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param4.head;
            arg$Cons$1$ = param4.tail;
            tmp = param1 + param2;
            tmp1 = NofibPrelude.enumFromThenTo(param1, tmp, param3);
            param4 = arg$Cons$0$;
            param5 = arg$Cons$1$;
            param6 = tmp1;
            id = 1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param6 instanceof NofibPrelude.Nil.class) {
            param4 = param5;
            id = 0;
            continue loopLabel
          } else if (param6 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param6.head;
            arg$Cons$1$ = param6.tail;
            tmp = runtime.safeCall(param0(param4, arg$Cons$0$));
            tmp1 = lscomp1_lscomp21(1, param0, param1, param2, param3, param4, param5, arg$Cons$1$);
            return NofibPrelude.Cons(tmp, tmp1)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
z_add = function z_add(a, b) {
  return a + b
};
z_sub = function z_sub(a, b) {
  return a - b
};
z_mul = function z_mul(a, b) {
  return a * b
};
z_div = function z_div(a, b) {
  let tmp;
  tmp = a / b;
  return runtime.safeCall(globalThis.Math.floor(tmp))
};
z_mod = function z_mod(a, b) {
  let tmp, inlinedVal, tmp1;
  tmp1 = a / b;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp = b * inlinedVal;
  return a - tmp
};
z_equal = function z_equal(a, b) {
  return a == b
};
z_lt = function z_lt(a, b) {
  return a < b
};
z_leq = function z_leq(a, b) {
  return a <= b
};
z_gt = function z_gt(a, b) {
  return a > b
};
z_geq = function z_geq(a, b) {
  return a >= b
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
lscomp21 = function lscomp2(op, bstart, bstep, blim, a, t1, ls) {
  return lscomp1_lscomp21(1, op, bstart, bstep, blim, a, t1, ls)
};
lscomp11 = function lscomp1(op, bstart, bstep, blim, ls) {
  return lscomp1_lscomp21(0, op, bstart, bstep, blim, ls, undefined, undefined)
};
lscomp2 = function lscomp2(op, bstart, bstep, blim, a, t1, ls) {
  return lscomp1_lscomp2(1, op, bstart, bstep, blim, a, t1, ls)
};
lscomp1 = function lscomp1(op, bstart, bstep, blim, ls) {
  return lscomp1_lscomp2(0, op, bstart, bstep, blim, ls, undefined, undefined)
};
(class integer {
  static {
    integer1 = this
  }
  static #integerbench(op, astart, astep, alim, bstart, bstep, blim) {
    let tmp, tmp1;
    tmp = astart + astep;
    tmp1 = NofibPrelude.enumFromThenTo(astart, tmp, alim);
    return lscomp1_lscomp2(0, op, bstart, bstep, blim, tmp1, undefined, undefined)
  }
  static #intbench(op, astart, astep, alim, bstart, bstep, blim) {
    let tmp, tmp1;
    tmp = astart + astep;
    tmp1 = NofibPrelude.enumFromThenTo(astart, tmp, alim);
    return lscomp1_lscomp21(0, op, bstart, bstep, blim, tmp1, undefined, undefined)
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
export { lscomp2 as _$_modulePrivate_$_lscomp2 };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { lscomp21 as _$_modulePrivate_$_lscomp21 };
export { lscomp11 as _$_modulePrivate_$_lscomp11 };
export { z_lt as _$_modulePrivate_$_z_lt };
export { z_add as _$_modulePrivate_$_z_add };
export { z_leq as _$_modulePrivate_$_z_leq };
export { z_mod as _$_modulePrivate_$_z_mod };
export { z_gt as _$_modulePrivate_$_z_gt };
export { z_geq as _$_modulePrivate_$_z_geq };
export { z_mul as _$_modulePrivate_$_z_mul };
export { z_equal as _$_modulePrivate_$_z_equal };
export { z_sub as _$_modulePrivate_$_z_sub };
export { z_div as _$_modulePrivate_$_z_div };
export { integer1 as _$_modulePrivate_$_integer };
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
export { lambda16 as _$_modulePrivate_$_lambda16 };
export { lambda17 as _$_modulePrivate_$_lambda17 };
export { lambda18 as _$_modulePrivate_$_lambda18 };
export { lambda19 as _$_modulePrivate_$_lambda19 };
export { lscomp1_lscomp2 as _$_modulePrivate_$_lscomp1_lscomp2 };
export { lscomp1_lscomp21 as _$_modulePrivate_$_lscomp1_lscomp21 };
export default integer1;
