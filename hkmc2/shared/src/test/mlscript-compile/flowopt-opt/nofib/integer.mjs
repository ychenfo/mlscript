const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const enumFromThenTo$accessorSymbol = globalThis.Symbol("enumFromThenTo");
let integer1, lambda, lscomp1_lscomp2, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp21, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp2, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp22, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp21, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp23, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp22, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp24, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp23, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp25, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp24, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp26, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp25, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp27, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp26, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp28, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp27, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp29, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp28, main_testInteger_nofib_runalltests_lambda$lambda, main_testInteger_nofib_runalltests_lambda$lambda1, main_testInteger_nofib_runalltests_lambda$lambda2, main_testInteger_nofib_runalltests_lambda$lambda3, main_testInteger_nofib_runalltests_lambda$lambda4, main_testInteger_nofib_runalltests_lambda$lambda5, main_testInteger_nofib_runalltests_lambda$lambda6, main_testInteger_nofib_runalltests_lambda$lambda7, main_testInteger_nofib_runalltests_lambda$lambda8, main_testInteger_nofib_runalltests_lambda$lambda9, main_testInteger_nofib_runalltests_lambda$lambda10, main_testInteger_nofib_runalltests_lambda$lambda11, main_testInteger_nofib_runalltests_lambda$lambda12, main_testInteger_nofib_runalltests_lambda$lambda13, main_testInteger_nofib_runalltests_lambda$lambda14, main_testInteger_nofib_runalltests_lambda$lambda15, main_testInteger_nofib_runalltests_lambda$lambda16, main_testInteger_nofib_runalltests_lambda$lambda17, main_testInteger_nofib_runalltests_lambda$lambda18;
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp21 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp21(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp2 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp2(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp22 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp22(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp21 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp21(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp23 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp23(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp22 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp22(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp24 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp24(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp23 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp23(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp25 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp25(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp24 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp24(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp26 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp26(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp25 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp25(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp27 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp27(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp26 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp26(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp28 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp28(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp27 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp27(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp29 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp29(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp28 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7) {
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
          let arg$Cons$1$;
          if (param7 instanceof NofibPrelude.Nil.class) {
            param5 = param6;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$1$ = param7.tail;
            main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp28(1, param0, param1, param2, param3, param4, param5, param6, arg$Cons$1$);
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testInteger_nofib_runalltests_lambda$lambda = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda1 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda2 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda3 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda4 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda5 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda6 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  globalThis.Math.floor;
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda7 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  globalThis.Math.floor;
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda8 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  let tmp;
  tmp = a / b;
  runtime.safeCall(globalThis.Math.floor(tmp));
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda9 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  let tmp;
  tmp = a / b;
  runtime.safeCall(globalThis.Math.floor(tmp));
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda10 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda11 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda12 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda13 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda14 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda15 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda16 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda17 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
main_testInteger_nofib_runalltests_lambda$lambda18 = function main_testInteger_nofib_runalltests_lambda$lambda(a, b) {
  return runtime.Unit
};
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
lambda = (undefined, function (a, b) {
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
  static main() {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, inlinedVal, tmp18, tmp19;
    tmp = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp29(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda1, -2100000000, 700000001, 2100000000, tmp, undefined, undefined);
    tmp1 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp28(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda, -2100000000, 700000001, 2100000000, tmp1, undefined, undefined);
    tmp2 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp28(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda3, -2100000000, 700000001, 2100000000, tmp2, undefined, undefined);
    tmp3 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp27(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda2, -2100000000, 700000001, 2100000000, tmp3, undefined, undefined);
    tmp4 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp27(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda5, -2100000000, 700000001, 2100000000, tmp4, undefined, undefined);
    tmp5 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp26(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda4, -2100000000, 700000001, 2100000000, tmp5, undefined, undefined);
    tmp6 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp26(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda7, -2100000000, 700000001, 2100000000, tmp6, undefined, undefined);
    tmp7 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp25(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda6, -2100000000, 700000001, 2100000000, tmp7, undefined, undefined);
    tmp8 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp25(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda9, -2100000000, 700000001, 2100000000, tmp8, undefined, undefined);
    tmp9 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp24(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda8, -2100000000, 700000001, 2100000000, tmp9, undefined, undefined);
    tmp10 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp24(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda11, -2100000000, 700000001, 2100000000, tmp10, undefined, undefined);
    tmp11 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp23(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda10, -2100000000, 700000001, 2100000000, tmp11, undefined, undefined);
    tmp12 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp23(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda13, -2100000000, 700000001, 2100000000, tmp12, undefined, undefined);
    tmp13 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp22(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda12, -2100000000, 700000001, 2100000000, tmp13, undefined, undefined);
    tmp14 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp22(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda15, -2100000000, 700000001, 2100000000, tmp14, undefined, undefined);
    tmp15 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp21(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda14, -2100000000, 700000001, 2100000000, tmp15, undefined, undefined);
    tmp16 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp21(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda17, -2100000000, 700000001, 2100000000, tmp16, undefined, undefined);
    tmp17 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_lscomp2$lscomp1_lscomp2(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda16, -2100000000, 700000001, 2100000000, tmp17, undefined, undefined);
    tmp18 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_lscomp2$lscomp1_lscomp2(0, integer1, main_testInteger_nofib_runalltests_lambda$lambda18, -2100000000, 700000001, 2100000000, tmp18, undefined, undefined);
    tmp19 = integer1.#enumFromThenTo(-2100000000, -1399999999, 2100000000);
    inlinedVal = lscomp1_lscomp2(0, integer1, lambda, -2100000000, 700000001, 2100000000, tmp19, undefined, undefined);
    return runtime.safeCall(inlinedVal.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "integer"];
});
export default integer1;
