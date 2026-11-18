const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const map$accessorSymbol = globalThis.Symbol("map");
const enumFromTo$accessorSymbol = globalThis.Symbol("enumFromTo");
const append$accessorSymbol = globalThis.Symbol("append");
const foldr$accessorSymbol = globalThis.Symbol("foldr");
const replicate$accessorSymbol = globalThis.Symbol("replicate");
const mapLookup$accessorSymbol = globalThis.Symbol("mapLookup");
const indent$accessorSymbol = globalThis.Symbol("indent");
const tryy$accessorSymbol = globalThis.Symbol("tryy");
const reduceHoriz$accessorSymbol = globalThis.Symbol("reduceHoriz");
const fits$accessorSymbol = globalThis.Symbol("fits");
let go, row, put, annTxt, lay, lastpiece1, lambda, lambda1, lambda2, lambda$, lambda$1, row$, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, put$, annTxt$, lscomp1_lscomp2, lay_lay2_lay1, get_get1;
lscomp1_lscomp2 = function lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, element1$, element0$, arg$P$0$, arg$P$1$, arg$P$2$;
          if (param2 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param2.head;
            arg$Cons$1$ = param2.tail;
            if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
              element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
              element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
              if (element0$ instanceof param0.P.class) {
                arg$P$0$ = element0$.i;
                arg$P$1$ = element0$.a;
                arg$P$2$ = element0$.b;
                if (param1 instanceof param0.Male.class) {
                  param2 = arg$Cons$1$;
                  param3 = element1$;
                  param4 = arg$P$0$;
                  param5 = arg$P$1$;
                  id = 1;
                  continue loopLabel
                }
                param2 = arg$Cons$1$;
                param3 = element1$;
                param4 = arg$P$0$;
                param5 = arg$P$2$;
                id = 1;
                continue loopLabel;
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param5 instanceof NofibPrelude.Nil.class) {
            id = 0;
            continue loopLabel
          } else if (param5 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param5.head;
            arg$Cons$1$ = param5.tail;
            tmp = globalThis.Object.freeze([
              param4,
              arg$Cons$0$,
              param3
            ]);
            tmp1 = lscomp1_lscomp2(1, param0, param1, param2, param3, param4, arg$Cons$1$);
            return NofibPrelude.Cons(tmp, tmp1)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
lay_lay2_lay1 = function lay_lay2_lay1(id, param0, param1, param2, param3, param4, param5, param6, param7, param8) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut, scrut1, arg$TextBeside$0$, arg$TextBeside$1$, arg$NilAbove$0$, arg$Nest$0$, arg$Nest$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
          if (param7 instanceof param0.Nest.class) {
            arg$Nest$0$ = param7.i;
            arg$Nest$1$ = param7.d;
            tmp = param6 + arg$Nest$0$;
            param6 = tmp;
            param7 = arg$Nest$1$;
            id = 0;
            continue loopLabel
          } else if (param7 instanceof param0.Empty.class) {
            return param3
          } else if (param7 instanceof param0.NilAbove.class) {
            arg$NilAbove$0$ = param7.d;
            tmp1 = lay_lay2_lay1(0, param0, param1, param2, param3, param4, param5, param6, arg$NilAbove$0$, undefined);
            return runtime.safeCall(param2(param0.nlText, tmp1))
          } else if (param7 instanceof param0.TextBeside.class) {
            arg$TextBeside$0$ = param7.a;
            arg$TextBeside$1$ = param7.d;
            if (param1 instanceof param0.ZigZagMode.class) {
              scrut = param6 >= param4;
              if (scrut === true) {
                tmp2 = param0[replicate$accessorSymbol](param5, "/");
                tmp3 = param0.Str(tmp2);
                tmp4 = param0.NoAnnot(tmp3, param5);
                tmp5 = param6 - param5;
                tmp6 = lay_lay2_lay1(2, param0, param1, param2, param3, param4, param5, tmp5, arg$TextBeside$0$, arg$TextBeside$1$);
                tmp7 = runtime.safeCall(param2(param0.nlText, tmp6));
                tmp8 = runtime.safeCall(param2(tmp4, tmp7));
                return runtime.safeCall(param2(param0.nlText, tmp8))
              }
              scrut1 = param6 < 0;
              if (scrut1 === true) {
                tmp9 = param0[replicate$accessorSymbol](param5, "|");
                tmp10 = param0.Str(tmp9);
                tmp11 = param0.NoAnnot(tmp10, param5);
                tmp12 = param6 + param5;
                tmp13 = lay_lay2_lay1(2, param0, param1, param2, param3, param4, param5, tmp12, arg$TextBeside$0$, arg$TextBeside$1$);
                tmp14 = runtime.safeCall(param2(param0.nlText, tmp13));
                tmp15 = runtime.safeCall(param2(tmp11, tmp14));
                return runtime.safeCall(param2(param0.nlText, tmp15))
              }
              param7 = arg$TextBeside$0$;
              param8 = arg$TextBeside$1$;
              id = 2;
              continue loopLabel;
            }
            param7 = arg$TextBeside$0$;
            param8 = arg$TextBeside$1$;
            id = 2;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Nest$1$, arg$TextBeside$0$, arg$TextBeside$1$, arg$NilAbove$0$, tmp, tmp1, tmp2;
          if (param7 instanceof param0.NilAbove.class) {
            arg$NilAbove$0$ = param7.d;
            tmp = lay_lay2_lay1(0, param0, param1, param2, param3, param4, param5, param6, arg$NilAbove$0$, undefined);
            return runtime.safeCall(param2(param0.nlText, tmp))
          } else if (param7 instanceof param0.TextBeside.class) {
            let receiver, inlinedVal, arg$NoAnnot$1$;
            arg$TextBeside$0$ = param7.a;
            arg$TextBeside$1$ = param7.d;
            receiver = param0;
            if (arg$TextBeside$0$ instanceof receiver.NoAnnot.class) {
              arg$NoAnnot$1$ = arg$TextBeside$0$.i;
              inlinedVal = arg$NoAnnot$1$;
            } else {
              inlinedVal = 0;
            }
            tmp1 = param6 + inlinedVal;
            tmp2 = lay_lay2_lay1(1, param0, param1, param2, param3, param4, param5, tmp1, arg$TextBeside$1$, undefined);
            return runtime.safeCall(param2(arg$TextBeside$0$, tmp2))
          } else if (param7 instanceof param0.Nest.class) {
            arg$Nest$1$ = param7.d;
            param7 = arg$Nest$1$;
            id = 1;
            continue loopLabel
          } else if (param7 instanceof param0.Empty.class) {
            return param3
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 2:
        {
          let r, tmp, tmp1, tmp2, tmp3, tmp4, receiver, inlinedVal, arg$NoAnnot$1$;
          receiver = param0;
          if (param7 instanceof receiver.NoAnnot.class) {
            arg$NoAnnot$1$ = param7.i;
            inlinedVal = arg$NoAnnot$1$;
          } else {
            inlinedVal = 0;
          }
          r = param6 + inlinedVal;
          tmp = param0[indent$accessorSymbol](param6);
          tmp1 = param0.Str(tmp);
          tmp2 = param0.NoAnnot(tmp1, param6);
          tmp3 = lay_lay2_lay1(1, param0, param1, param2, param3, param4, param5, r, param8, undefined);
          tmp4 = runtime.safeCall(param2(param7, tmp3));
          return runtime.safeCall(param2(tmp2, tmp4));
        }
    }
  }
};
get_get1 = function get_get1(id, param0, param1, param2, param3, param4) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Union$0$, arg$Union$1$, arg$Nest$0$, arg$Nest$1$, arg$TextBeside$0$, arg$TextBeside$1$, arg$NilAbove$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
          if (param3 instanceof param0.Empty.class) {
            return param0.Empty
          } else if (param3 instanceof param0.NoDoc.class) {
            return param0.NoDoc
          } else if (param3 instanceof param0.NilAbove.class) {
            arg$NilAbove$0$ = param3.d;
            tmp = get_get1(0, param0, param1, param2, arg$NilAbove$0$, undefined);
            return param0.NilAbove(tmp)
          } else if (param3 instanceof param0.TextBeside.class) {
            let receiver, inlinedVal, arg$NoAnnot$1$;
            arg$TextBeside$0$ = param3.a;
            arg$TextBeside$1$ = param3.d;
            receiver = param0;
            if (arg$TextBeside$0$ instanceof receiver.NoAnnot.class) {
              arg$NoAnnot$1$ = arg$TextBeside$0$.i;
              inlinedVal = arg$NoAnnot$1$;
            } else {
              inlinedVal = 0;
            }
            tmp1 = get_get1(1, param0, param1, param2, inlinedVal, arg$TextBeside$1$);
            return param0.TextBeside(arg$TextBeside$0$, tmp1)
          } else if (param3 instanceof param0.Nest.class) {
            arg$Nest$0$ = param3.i;
            arg$Nest$1$ = param3.d;
            tmp2 = param2 - arg$Nest$0$;
            tmp3 = get_get1(0, param0, param1, tmp2, arg$Nest$1$, undefined);
            return param0.Nest(arg$Nest$0$, tmp3)
          } else if (param3 instanceof param0.Union.class) {
            let scrut, tmp6, inlinedVal;
            arg$Union$0$ = param3.d1;
            arg$Union$1$ = param3.d2;
            tmp4 = get_get1(0, param0, param1, param2, arg$Union$0$, undefined);
            tmp5 = get_get1(0, param0, param1, param2, arg$Union$1$, undefined);
            inlinedVal = runtime.safeCall(globalThis.Math.min(param2, param1));
            tmp6 = inlinedVal - 0;
            scrut = param0[fits$accessorSymbol](tmp6, tmp4);
            if (scrut === true) {
              return tmp4
            }
            return tmp5;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Union$0$, arg$Union$1$, arg$Nest$1$, arg$TextBeside$0$, arg$TextBeside$1$, arg$NilAbove$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
          if (param4 instanceof param0.Empty.class) {
            return param0.Empty
          } else if (param4 instanceof param0.NoDoc.class) {
            return param0.NoDoc
          } else if (param4 instanceof param0.NilAbove.class) {
            arg$NilAbove$0$ = param4.d;
            tmp = param2 - param3;
            tmp1 = get_get1(0, param0, param1, tmp, arg$NilAbove$0$, undefined);
            return param0.NilAbove(tmp1)
          } else if (param4 instanceof param0.TextBeside.class) {
            let receiver, inlinedVal, arg$NoAnnot$1$;
            arg$TextBeside$0$ = param4.a;
            arg$TextBeside$1$ = param4.d;
            receiver = param0;
            if (arg$TextBeside$0$ instanceof receiver.NoAnnot.class) {
              arg$NoAnnot$1$ = arg$TextBeside$0$.i;
              inlinedVal = arg$NoAnnot$1$;
            } else {
              inlinedVal = 0;
            }
            tmp2 = param3 + inlinedVal;
            tmp3 = get_get1(1, param0, param1, param2, tmp2, arg$TextBeside$1$);
            return param0.TextBeside(arg$TextBeside$0$, tmp3)
          } else if (param4 instanceof param0.Nest.class) {
            arg$Nest$1$ = param4.d;
            param4 = arg$Nest$1$;
            id = 1;
            continue loopLabel
          } else if (param4 instanceof param0.Union.class) {
            let scrut, tmp6, inlinedVal;
            arg$Union$0$ = param4.d1;
            arg$Union$1$ = param4.d2;
            tmp4 = get_get1(1, param0, param1, param2, param3, arg$Union$0$);
            tmp5 = get_get1(1, param0, param1, param2, param3, arg$Union$1$);
            inlinedVal = runtime.safeCall(globalThis.Math.min(param2, param1));
            tmp6 = inlinedVal - param3;
            scrut = param0[fits$accessorSymbol](tmp6, tmp4);
            if (scrut === true) {
              return tmp4
            }
            return tmp5;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
lay = function lay(lastpiece2, nlSpaceText, choose, txt, end, x) {
  loopLabel: while (true) {
    let arg$TextBeside$0$, arg$TextBeside$1$, arg$NilAbove$0$, arg$Nest$1$, arg$Union$0$, arg$Union$1$, tmp, tmp1, tmp2;
    if (x instanceof lastpiece2.Union.class) {
      arg$Union$0$ = x.d1;
      arg$Union$1$ = x.d2;
      tmp = runtime.safeCall(choose(arg$Union$0$, arg$Union$1$));
      x = tmp;
      continue loopLabel
    } else if (x instanceof lastpiece2.Nest.class) {
      arg$Nest$1$ = x.d;
      x = arg$Nest$1$;
      continue loopLabel
    } else if (x instanceof lastpiece2.Empty.class) {
      return end
    } else if (x instanceof lastpiece2.NilAbove.class) {
      arg$NilAbove$0$ = x.d;
      tmp1 = lay(lastpiece2, nlSpaceText, choose, txt, end, arg$NilAbove$0$);
      return runtime.safeCall(txt(nlSpaceText, tmp1))
    } else if (x instanceof lastpiece2.TextBeside.class) {
      arg$TextBeside$0$ = x.a;
      arg$TextBeside$1$ = x.d;
      tmp2 = lay(lastpiece2, nlSpaceText, choose, txt, end, arg$TextBeside$1$);
      return runtime.safeCall(txt(arg$TextBeside$0$, tmp2))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda2 = (undefined, function (a, b) {
  return b
});
annTxt$ = function annTxt$(lastpiece2, txt) {
  return (p, x) => {
    return annTxt(lastpiece2, txt, p, x)
  }
};
annTxt = function annTxt(lastpiece2, txt, p, x) {
  let arg$NoAnnot$0$;
  if (p instanceof lastpiece2.NoAnnot.class) {
    arg$NoAnnot$0$ = p.t;
    return runtime.safeCall(txt(arg$NoAnnot$0$, x))
  }
  return x;
};
put$ = function put$(lastpiece2) {
  return (k, next) => {
    return put(lastpiece2, k, next)
  }
};
put = function put(lastpiece2, k, next) {
  let arg$PStr$0$, arg$Str$0$, arg$Chr$0$;
  if (k instanceof lastpiece2.Chr.class) {
    arg$Chr$0$ = k.c;
    return NofibPrelude.Cons(arg$Chr$0$, next)
  } else if (k instanceof lastpiece2.Str.class) {
    arg$Str$0$ = k.s;
    return lastpiece2[append$accessorSymbol](arg$Str$0$, next)
  } else if (k instanceof lastpiece2.PStr.class) {
    arg$PStr$0$ = k.s;
    return lastpiece2[append$accessorSymbol](arg$PStr$0$, next)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$6 = (undefined, function (lastpiece2) {
  return (p, q) => {
    return lastpiece2.Beside(p, false, q)
  }
});
lambda$5 = (undefined, function (lastpiece2) {
  return (a, b, c) => {
    return lastpiece2.Beside(a, b, c)
  }
});
lambda$4 = (undefined, function (lastpiece2) {
  return (p, q) => {
    return lastpiece2.Above(p, false, q)
  }
});
lambda$3 = (undefined, function (lastpiece2) {
  return (a, b, c) => {
    return lastpiece2.Above(a, b, c)
  }
});
lambda$2 = (undefined, function (lastpiece2, bd, n) {
  return (col) => {
    return lambda1(lastpiece2, bd, n, col)
  }
});
lambda1 = (undefined, function (lastpiece2, bd, n, col) {
  let arg$Some$0$, tmp, inlinedVal;
  tmp = globalThis.Object.freeze([
    n,
    col
  ]);
  inlinedVal = lastpiece2[mapLookup$accessorSymbol](tmp, bd);
  if (inlinedVal instanceof NofibPrelude.Some.class) {
    let tmp1, tmp2;
    arg$Some$0$ = inlinedVal.x;
    tmp1 = lastpiece2.Chr(arg$Some$0$);
    tmp2 = lastpiece2.NoAnnot(tmp1, 1);
    return lastpiece2.TextBeside(tmp2, lastpiece2.Empty)
  } else if (inlinedVal instanceof NofibPrelude.None.class) {
    let tmp1, tmp2;
    tmp1 = lastpiece2.Chr(".");
    tmp2 = lastpiece2.NoAnnot(tmp1, 1);
    return lastpiece2.TextBeside(tmp2, lastpiece2.Empty)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
row$ = function row$(lastpiece2, bd) {
  return (n) => {
    return row(lastpiece2, bd, n)
  }
};
row = function row(lastpiece2, bd, n) {
  let tmp, tmp1, lambda$here, tmp2, tmp3, lambda$here1;
  tmp = lastpiece2[enumFromTo$accessorSymbol](1, lastpiece2.maxCol);
  lambda$here = lambda$2(lastpiece2, bd, n);
  tmp1 = lastpiece2[map$accessorSymbol](lambda$here, tmp);
  lambda$here1 = lambda$6(lastpiece2);
  tmp2 = lastpiece2[foldr$accessorSymbol](lambda$here1, lastpiece2.Empty, tmp1);
  tmp3 = lastpiece2[reduceHoriz$accessorSymbol](tmp2);
  if (runtime.Tuple.isArrayLike(tmp3) && tmp3.length === 2) {
    runtime.Tuple.get(tmp3, 0);
    return runtime.Tuple.get(tmp3, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$1 = (undefined, function (lastpiece2, row_col, sey, bd) {
  return (x) => {
    return lastpiece2[tryy$accessorSymbol](row_col, sey, bd, x)
  }
});
lambda$ = (undefined, function (f, x) {
  return (p) => {
    let tmp;
    tmp = runtime.safeCall(f(p));
    return NofibPrelude.Cons(x, tmp)
  }
});
go = function go(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, lambda$here;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$1$));
    tmp1 = globalThis.Object.freeze([
      arg$Cons$0$,
      tmp
    ]);
    lambda$here = lambda$(f, arg$Cons$0$);
    tmp2 = go(lambda$here, arg$Cons$1$);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda = (undefined, function (x) {
  return x
});
(class lastpiece {
  static {
    lastpiece1 = this
  }
  static get [map$accessorSymbol]() { return lastpiece.#map; }
  static get [enumFromTo$accessorSymbol]() { return lastpiece.#enumFromTo; }
  static get [append$accessorSymbol]() { return lastpiece.#append; }
  static get [foldr$accessorSymbol]() { return lastpiece.#foldr; }
  static get [replicate$accessorSymbol]() { return lastpiece.#replicate; }
  static get [mapLookup$accessorSymbol]() { return lastpiece.#mapLookup; }
  static get [indent$accessorSymbol]() { return lastpiece.#indent; }
  static get [tryy$accessorSymbol]() { return lastpiece.#tryy; }
  static get [reduceHoriz$accessorSymbol]() { return lastpiece.#reduceHoriz; }
  static get [fits$accessorSymbol]() { return lastpiece.#fits; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, tmp219, tmp220, tmp221, tmp222, tmp223, tmp224, tmp225, tmp226, tmp227, tmp228, tmp229, tmp230, tmp231, tmp232, tmp233, tmp234, tmp235, tmp236, tmp237, tmp238, tmp239, tmp240, tmp241, tmp242, tmp243, tmp244, tmp245, tmp246, tmp247, tmp248, tmp249, tmp250, tmp251, tmp252, tmp253, tmp254, tmp255, tmp256, tmp257, tmp258, tmp259, tmp260, tmp261, tmp262, tmp263, tmp264, tmp265, tmp266, tmp267, tmp268, tmp269, tmp270, tmp271, tmp272, tmp273, tmp274, tmp275, tmp276, tmp277, tmp278, tmp279, tmp280, tmp281, tmp282, tmp283, tmp284, tmp285, tmp286, tmp287, tmp288, tmp289, tmp290, tmp291, tmp292, tmp293, tmp294, tmp295, tmp296, tmp297, tmp298, tmp299, tmp300, tmp301, tmp302, tmp303, tmp304, tmp305, tmp306, tmp307, tmp308, tmp309, tmp310, tmp311, tmp312, tmp313, tmp314, tmp315, tmp316, tmp317, tmp318, tmp319, tmp320, tmp321, tmp322, tmp323, tmp324, tmp325, tmp326, tmp327, tmp328, tmp329, tmp330, tmp331, tmp332, tmp333, tmp334, tmp335, tmp336, tmp337, tmp338, tmp339, tmp340, tmp341, tmp342, tmp343, tmp344, tmp345, tmp346, tmp347, tmp348, tmp349, tmp350, tmp351, tmp352, tmp353, tmp354, tmp355, tmp356, tmp357, tmp358, tmp359, tmp360, tmp361, tmp362, tmp363, tmp364, tmp365, tmp366, tmp367, tmp368, tmp369, tmp370, tmp371, tmp372, tmp373, tmp374, tmp375, tmp376, tmp377, tmp378, tmp379, tmp380, tmp381, tmp382, tmp383, tmp384, tmp385, tmp386, tmp387, tmp388, tmp389, tmp390, tmp391, tmp392, tmp393, tmp394, tmp395, tmp396, tmp397, tmp398, tmp399, tmp400, tmp401, tmp402, tmp403, tmp404, tmp405, tmp406, tmp407, tmp408, tmp409, tmp410, tmp411, tmp412, tmp413;
    (class GT {
      static {
        new this
      }
      constructor() {
        lastpiece.GT = this;
        Object.defineProperty(this, "class", {
          value: GT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GT"];
    });
    (class LT {
      static {
        new this
      }
      constructor() {
        lastpiece.LT = this;
        Object.defineProperty(this, "class", {
          value: LT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LT"];
    });
    (class EQ {
      static {
        new this
      }
      constructor() {
        lastpiece.EQ = this;
        Object.defineProperty(this, "class", {
          value: EQ
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EQ"];
    });
    (class Tip {
      static {
        new this
      }
      constructor() {
        lastpiece.Tip = this;
        Object.defineProperty(this, "class", {
          value: Tip
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Tip"];
    });
    lastpiece.Bin = function Bin(i, k, v, l, r) {
      return globalThis.Object.freeze(new Bin.class(i, k, v, l, r));
    };
    (class Bin {
      static {
        lastpiece.Bin.class = this
      }
      constructor(i, k, v, l, r) {
        this.i = i;
        this.k = k;
        this.v = v;
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Bin", ["i", "k", "v", "l", "r"]];
    });
    lastpiece.P = function P(i, a, b) {
      return globalThis.Object.freeze(new P.class(i, a, b));
    };
    (class P {
      static {
        lastpiece.P.class = this
      }
      constructor(i, a, b) {
        this.i = i;
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "P", ["i", "a", "b"]];
    });
    (class Male {
      static {
        new this
      }
      constructor() {
        lastpiece.Male = this;
        Object.defineProperty(this, "class", {
          value: Male
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Male"];
    });
    (class Female {
      static {
        new this
      }
      constructor() {
        lastpiece.Female = this;
        Object.defineProperty(this, "class", {
          value: Female
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Female"];
    });
    lastpiece.Soln = function Soln(b) {
      return globalThis.Object.freeze(new Soln.class(b));
    };
    (class Soln {
      static {
        lastpiece.Soln.class = this
      }
      constructor(b) {
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Soln", ["b"]];
    });
    lastpiece.Choose = function Choose(s) {
      return globalThis.Object.freeze(new Choose.class(s));
    };
    (class Choose {
      static {
        lastpiece.Choose.class = this
      }
      constructor(s) {
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Choose", ["s"]];
    });
    lastpiece.Fail = function Fail(b, s) {
      return globalThis.Object.freeze(new Fail.class(b, s));
    };
    (class Fail {
      static {
        lastpiece.Fail.class = this
      }
      constructor(b, s) {
        this.b = b;
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Fail", ["b", "s"]];
    });
    lastpiece.maxRow = 8;
    lastpiece.maxCol = 8;
    lastpiece.emptyBoard = lastpiece.Tip;
    tmp = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp1 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp2 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp3 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp4 = NofibPrelude.Cons(tmp3, NofibPrelude.Nil);
    tmp5 = NofibPrelude.Cons(tmp2, tmp4);
    tmp6 = NofibPrelude.Cons(tmp1, tmp5);
    tmp7 = NofibPrelude.Cons(tmp, tmp6);
    tmp8 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp9 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp10 = globalThis.Object.freeze([
      1,
      -2
    ]);
    tmp11 = globalThis.Object.freeze([
      2,
      -2
    ]);
    tmp12 = NofibPrelude.Cons(tmp11, NofibPrelude.Nil);
    tmp13 = NofibPrelude.Cons(tmp10, tmp12);
    tmp14 = NofibPrelude.Cons(tmp9, tmp13);
    tmp15 = NofibPrelude.Cons(tmp8, tmp14);
    tmp16 = NofibPrelude.Cons(tmp15, NofibPrelude.Nil);
    tmp17 = NofibPrelude.Cons(tmp7, tmp16);
    tmp18 = lastpiece.P("n", tmp17, NofibPrelude.Nil);
    lastpiece.nPiece = tmp18;
    tmp19 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp20 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp21 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp22 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp23 = NofibPrelude.Cons(tmp22, NofibPrelude.Nil);
    tmp24 = NofibPrelude.Cons(tmp21, tmp23);
    tmp25 = NofibPrelude.Cons(tmp20, tmp24);
    tmp26 = NofibPrelude.Cons(tmp19, tmp25);
    tmp27 = NofibPrelude.Cons(tmp26, NofibPrelude.Nil);
    tmp28 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp29 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp30 = globalThis.Object.freeze([
      0,
      3
    ]);
    tmp31 = globalThis.Object.freeze([
      1,
      3
    ]);
    tmp32 = NofibPrelude.Cons(tmp31, NofibPrelude.Nil);
    tmp33 = NofibPrelude.Cons(tmp30, tmp32);
    tmp34 = NofibPrelude.Cons(tmp29, tmp33);
    tmp35 = NofibPrelude.Cons(tmp28, tmp34);
    tmp36 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp37 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp38 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp39 = globalThis.Object.freeze([
      3,
      -1
    ]);
    tmp40 = NofibPrelude.Cons(tmp39, NofibPrelude.Nil);
    tmp41 = NofibPrelude.Cons(tmp38, tmp40);
    tmp42 = NofibPrelude.Cons(tmp37, tmp41);
    tmp43 = NofibPrelude.Cons(tmp36, tmp42);
    tmp44 = NofibPrelude.Cons(tmp43, NofibPrelude.Nil);
    tmp45 = NofibPrelude.Cons(tmp35, tmp44);
    tmp46 = lastpiece.P("m", tmp27, tmp45);
    lastpiece.mPiece = tmp46;
    tmp47 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp48 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp49 = globalThis.Object.freeze([
      0,
      3
    ]);
    tmp50 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp51 = NofibPrelude.Cons(tmp50, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(tmp49, tmp51);
    tmp53 = NofibPrelude.Cons(tmp48, tmp52);
    tmp54 = NofibPrelude.Cons(tmp47, tmp53);
    tmp55 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp56 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp57 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp58 = globalThis.Object.freeze([
      2,
      -1
    ]);
    tmp59 = NofibPrelude.Cons(tmp58, NofibPrelude.Nil);
    tmp60 = NofibPrelude.Cons(tmp57, tmp59);
    tmp61 = NofibPrelude.Cons(tmp56, tmp60);
    tmp62 = NofibPrelude.Cons(tmp55, tmp61);
    tmp63 = NofibPrelude.Cons(tmp62, NofibPrelude.Nil);
    tmp64 = NofibPrelude.Cons(tmp54, tmp63);
    tmp65 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp66 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp67 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp68 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp69 = NofibPrelude.Cons(tmp68, NofibPrelude.Nil);
    tmp70 = NofibPrelude.Cons(tmp67, tmp69);
    tmp71 = NofibPrelude.Cons(tmp66, tmp70);
    tmp72 = NofibPrelude.Cons(tmp65, tmp71);
    tmp73 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp74 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp75 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp76 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp77 = NofibPrelude.Cons(tmp76, NofibPrelude.Nil);
    tmp78 = NofibPrelude.Cons(tmp75, tmp77);
    tmp79 = NofibPrelude.Cons(tmp74, tmp78);
    tmp80 = NofibPrelude.Cons(tmp73, tmp79);
    tmp81 = NofibPrelude.Cons(tmp80, NofibPrelude.Nil);
    tmp82 = NofibPrelude.Cons(tmp72, tmp81);
    tmp83 = lastpiece.P("l", tmp64, tmp82);
    lastpiece.lPiece = tmp83;
    tmp84 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp85 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp86 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp87 = globalThis.Object.freeze([
      2,
      -1
    ]);
    tmp88 = NofibPrelude.Cons(tmp87, NofibPrelude.Nil);
    tmp89 = NofibPrelude.Cons(tmp86, tmp88);
    tmp90 = NofibPrelude.Cons(tmp85, tmp89);
    tmp91 = NofibPrelude.Cons(tmp84, tmp90);
    tmp92 = NofibPrelude.Cons(tmp91, NofibPrelude.Nil);
    tmp93 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp94 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp95 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp96 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp97 = NofibPrelude.Cons(tmp96, NofibPrelude.Nil);
    tmp98 = NofibPrelude.Cons(tmp95, tmp97);
    tmp99 = NofibPrelude.Cons(tmp94, tmp98);
    tmp100 = NofibPrelude.Cons(tmp93, tmp99);
    tmp101 = NofibPrelude.Cons(tmp100, NofibPrelude.Nil);
    tmp102 = lastpiece.P("k", tmp92, tmp101);
    lastpiece.kPiece = tmp102;
    tmp103 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp104 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp105 = globalThis.Object.freeze([
      0,
      3
    ]);
    tmp106 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp107 = NofibPrelude.Cons(tmp106, NofibPrelude.Nil);
    tmp108 = NofibPrelude.Cons(tmp105, tmp107);
    tmp109 = NofibPrelude.Cons(tmp104, tmp108);
    tmp110 = NofibPrelude.Cons(tmp103, tmp109);
    tmp111 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp112 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp113 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp114 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp115 = NofibPrelude.Cons(tmp114, NofibPrelude.Nil);
    tmp116 = NofibPrelude.Cons(tmp113, tmp115);
    tmp117 = NofibPrelude.Cons(tmp112, tmp116);
    tmp118 = NofibPrelude.Cons(tmp111, tmp117);
    tmp119 = globalThis.Object.freeze([
      1,
      -2
    ]);
    tmp120 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp121 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp122 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp123 = NofibPrelude.Cons(tmp122, NofibPrelude.Nil);
    tmp124 = NofibPrelude.Cons(tmp121, tmp123);
    tmp125 = NofibPrelude.Cons(tmp120, tmp124);
    tmp126 = NofibPrelude.Cons(tmp119, tmp125);
    tmp127 = NofibPrelude.Cons(tmp126, NofibPrelude.Nil);
    tmp128 = NofibPrelude.Cons(tmp118, tmp127);
    tmp129 = NofibPrelude.Cons(tmp110, tmp128);
    tmp130 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp131 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp132 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp133 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp134 = NofibPrelude.Cons(tmp133, NofibPrelude.Nil);
    tmp135 = NofibPrelude.Cons(tmp132, tmp134);
    tmp136 = NofibPrelude.Cons(tmp131, tmp135);
    tmp137 = NofibPrelude.Cons(tmp130, tmp136);
    tmp138 = NofibPrelude.Cons(tmp137, NofibPrelude.Nil);
    tmp139 = lastpiece.P("j", tmp129, tmp138);
    lastpiece.jPiece = tmp139;
    tmp140 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp141 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp142 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp143 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp144 = NofibPrelude.Cons(tmp143, NofibPrelude.Nil);
    tmp145 = NofibPrelude.Cons(tmp142, tmp144);
    tmp146 = NofibPrelude.Cons(tmp141, tmp145);
    tmp147 = NofibPrelude.Cons(tmp140, tmp146);
    tmp148 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp149 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp150 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp151 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp152 = NofibPrelude.Cons(tmp151, NofibPrelude.Nil);
    tmp153 = NofibPrelude.Cons(tmp150, tmp152);
    tmp154 = NofibPrelude.Cons(tmp149, tmp153);
    tmp155 = NofibPrelude.Cons(tmp148, tmp154);
    tmp156 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp157 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp158 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp159 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp160 = NofibPrelude.Cons(tmp159, NofibPrelude.Nil);
    tmp161 = NofibPrelude.Cons(tmp158, tmp160);
    tmp162 = NofibPrelude.Cons(tmp157, tmp161);
    tmp163 = NofibPrelude.Cons(tmp156, tmp162);
    tmp164 = NofibPrelude.Cons(tmp163, NofibPrelude.Nil);
    tmp165 = NofibPrelude.Cons(tmp155, tmp164);
    tmp166 = NofibPrelude.Cons(tmp147, tmp165);
    tmp167 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp168 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp169 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp170 = globalThis.Object.freeze([
      1,
      -2
    ]);
    tmp171 = NofibPrelude.Cons(tmp170, NofibPrelude.Nil);
    tmp172 = NofibPrelude.Cons(tmp169, tmp171);
    tmp173 = NofibPrelude.Cons(tmp168, tmp172);
    tmp174 = NofibPrelude.Cons(tmp167, tmp173);
    tmp175 = NofibPrelude.Cons(tmp174, NofibPrelude.Nil);
    tmp176 = lastpiece.P("i", tmp166, tmp175);
    lastpiece.iPiece = tmp176;
    tmp177 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp178 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp179 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp180 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp181 = NofibPrelude.Cons(tmp180, NofibPrelude.Nil);
    tmp182 = NofibPrelude.Cons(tmp179, tmp181);
    tmp183 = NofibPrelude.Cons(tmp178, tmp182);
    tmp184 = NofibPrelude.Cons(tmp177, tmp183);
    tmp185 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp186 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp187 = globalThis.Object.freeze([
      2,
      -1
    ]);
    tmp188 = globalThis.Object.freeze([
      2,
      -2
    ]);
    tmp189 = NofibPrelude.Cons(tmp188, NofibPrelude.Nil);
    tmp190 = NofibPrelude.Cons(tmp187, tmp189);
    tmp191 = NofibPrelude.Cons(tmp186, tmp190);
    tmp192 = NofibPrelude.Cons(tmp185, tmp191);
    tmp193 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp194 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp195 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp196 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp197 = NofibPrelude.Cons(tmp196, NofibPrelude.Nil);
    tmp198 = NofibPrelude.Cons(tmp195, tmp197);
    tmp199 = NofibPrelude.Cons(tmp194, tmp198);
    tmp200 = NofibPrelude.Cons(tmp193, tmp199);
    tmp201 = NofibPrelude.Cons(tmp200, NofibPrelude.Nil);
    tmp202 = NofibPrelude.Cons(tmp192, tmp201);
    tmp203 = NofibPrelude.Cons(tmp184, tmp202);
    tmp204 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp205 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp206 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp207 = globalThis.Object.freeze([
      2,
      -1
    ]);
    tmp208 = NofibPrelude.Cons(tmp207, NofibPrelude.Nil);
    tmp209 = NofibPrelude.Cons(tmp206, tmp208);
    tmp210 = NofibPrelude.Cons(tmp205, tmp209);
    tmp211 = NofibPrelude.Cons(tmp204, tmp210);
    tmp212 = NofibPrelude.Cons(tmp211, NofibPrelude.Nil);
    tmp213 = lastpiece.P("h", tmp203, tmp212);
    lastpiece.hPiece = tmp213;
    tmp214 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp215 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp216 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp217 = globalThis.Object.freeze([
      1,
      3
    ]);
    tmp218 = NofibPrelude.Cons(tmp217, NofibPrelude.Nil);
    tmp219 = NofibPrelude.Cons(tmp216, tmp218);
    tmp220 = NofibPrelude.Cons(tmp215, tmp219);
    tmp221 = NofibPrelude.Cons(tmp214, tmp220);
    tmp222 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp223 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp224 = globalThis.Object.freeze([
      2,
      -1
    ]);
    tmp225 = globalThis.Object.freeze([
      3,
      -1
    ]);
    tmp226 = NofibPrelude.Cons(tmp225, NofibPrelude.Nil);
    tmp227 = NofibPrelude.Cons(tmp224, tmp226);
    tmp228 = NofibPrelude.Cons(tmp223, tmp227);
    tmp229 = NofibPrelude.Cons(tmp222, tmp228);
    tmp230 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp231 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp232 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp233 = globalThis.Object.freeze([
      1,
      3
    ]);
    tmp234 = NofibPrelude.Cons(tmp233, NofibPrelude.Nil);
    tmp235 = NofibPrelude.Cons(tmp232, tmp234);
    tmp236 = NofibPrelude.Cons(tmp231, tmp235);
    tmp237 = NofibPrelude.Cons(tmp230, tmp236);
    tmp238 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp239 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp240 = globalThis.Object.freeze([
      2,
      -1
    ]);
    tmp241 = globalThis.Object.freeze([
      3,
      -1
    ]);
    tmp242 = NofibPrelude.Cons(tmp241, NofibPrelude.Nil);
    tmp243 = NofibPrelude.Cons(tmp240, tmp242);
    tmp244 = NofibPrelude.Cons(tmp239, tmp243);
    tmp245 = NofibPrelude.Cons(tmp238, tmp244);
    tmp246 = NofibPrelude.Cons(tmp245, NofibPrelude.Nil);
    tmp247 = NofibPrelude.Cons(tmp237, tmp246);
    tmp248 = NofibPrelude.Cons(tmp229, tmp247);
    tmp249 = NofibPrelude.Cons(tmp221, tmp248);
    tmp250 = lastpiece.P("g", NofibPrelude.Nil, tmp249);
    lastpiece.gPiece = tmp250;
    tmp251 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp252 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp253 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp254 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp255 = NofibPrelude.Cons(tmp254, NofibPrelude.Nil);
    tmp256 = NofibPrelude.Cons(tmp253, tmp255);
    tmp257 = NofibPrelude.Cons(tmp252, tmp256);
    tmp258 = NofibPrelude.Cons(tmp251, tmp257);
    tmp259 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp260 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp261 = globalThis.Object.freeze([
      1,
      -2
    ]);
    tmp262 = globalThis.Object.freeze([
      1,
      -3
    ]);
    tmp263 = NofibPrelude.Cons(tmp262, NofibPrelude.Nil);
    tmp264 = NofibPrelude.Cons(tmp261, tmp263);
    tmp265 = NofibPrelude.Cons(tmp260, tmp264);
    tmp266 = NofibPrelude.Cons(tmp259, tmp265);
    tmp267 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp268 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp269 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp270 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp271 = NofibPrelude.Cons(tmp270, NofibPrelude.Nil);
    tmp272 = NofibPrelude.Cons(tmp269, tmp271);
    tmp273 = NofibPrelude.Cons(tmp268, tmp272);
    tmp274 = NofibPrelude.Cons(tmp267, tmp273);
    tmp275 = NofibPrelude.Cons(tmp274, NofibPrelude.Nil);
    tmp276 = NofibPrelude.Cons(tmp266, tmp275);
    tmp277 = NofibPrelude.Cons(tmp258, tmp276);
    tmp278 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp279 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp280 = globalThis.Object.freeze([
      0,
      3
    ]);
    tmp281 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp282 = NofibPrelude.Cons(tmp281, NofibPrelude.Nil);
    tmp283 = NofibPrelude.Cons(tmp280, tmp282);
    tmp284 = NofibPrelude.Cons(tmp279, tmp283);
    tmp285 = NofibPrelude.Cons(tmp278, tmp284);
    tmp286 = NofibPrelude.Cons(tmp285, NofibPrelude.Nil);
    tmp287 = lastpiece.P("f", tmp277, tmp286);
    lastpiece.fPiece = tmp287;
    tmp288 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp289 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp290 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp291 = NofibPrelude.Cons(tmp290, NofibPrelude.Nil);
    tmp292 = NofibPrelude.Cons(tmp289, tmp291);
    tmp293 = NofibPrelude.Cons(tmp288, tmp292);
    tmp294 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp295 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp296 = globalThis.Object.freeze([
      2,
      -1
    ]);
    tmp297 = NofibPrelude.Cons(tmp296, NofibPrelude.Nil);
    tmp298 = NofibPrelude.Cons(tmp295, tmp297);
    tmp299 = NofibPrelude.Cons(tmp294, tmp298);
    tmp300 = NofibPrelude.Cons(tmp299, NofibPrelude.Nil);
    tmp301 = NofibPrelude.Cons(tmp293, tmp300);
    tmp302 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp303 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp304 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp305 = NofibPrelude.Cons(tmp304, NofibPrelude.Nil);
    tmp306 = NofibPrelude.Cons(tmp303, tmp305);
    tmp307 = NofibPrelude.Cons(tmp302, tmp306);
    tmp308 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp309 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp310 = globalThis.Object.freeze([
      2,
      -1
    ]);
    tmp311 = NofibPrelude.Cons(tmp310, NofibPrelude.Nil);
    tmp312 = NofibPrelude.Cons(tmp309, tmp311);
    tmp313 = NofibPrelude.Cons(tmp308, tmp312);
    tmp314 = NofibPrelude.Cons(tmp313, NofibPrelude.Nil);
    tmp315 = NofibPrelude.Cons(tmp307, tmp314);
    tmp316 = lastpiece.P("e", tmp301, tmp315);
    lastpiece.ePiece = tmp316;
    tmp317 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp318 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp319 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp320 = NofibPrelude.Cons(tmp319, NofibPrelude.Nil);
    tmp321 = NofibPrelude.Cons(tmp318, tmp320);
    tmp322 = NofibPrelude.Cons(tmp317, tmp321);
    tmp323 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp324 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp325 = globalThis.Object.freeze([
      1,
      -2
    ]);
    tmp326 = NofibPrelude.Cons(tmp325, NofibPrelude.Nil);
    tmp327 = NofibPrelude.Cons(tmp324, tmp326);
    tmp328 = NofibPrelude.Cons(tmp323, tmp327);
    tmp329 = NofibPrelude.Cons(tmp328, NofibPrelude.Nil);
    tmp330 = NofibPrelude.Cons(tmp322, tmp329);
    tmp331 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp332 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp333 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp334 = NofibPrelude.Cons(tmp333, NofibPrelude.Nil);
    tmp335 = NofibPrelude.Cons(tmp332, tmp334);
    tmp336 = NofibPrelude.Cons(tmp331, tmp335);
    tmp337 = NofibPrelude.Cons(tmp336, NofibPrelude.Nil);
    tmp338 = lastpiece.P("d", tmp330, tmp337);
    lastpiece.dPiece = tmp338;
    tmp339 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp340 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp341 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp342 = NofibPrelude.Cons(tmp341, NofibPrelude.Nil);
    tmp343 = NofibPrelude.Cons(tmp340, tmp342);
    tmp344 = NofibPrelude.Cons(tmp339, tmp343);
    tmp345 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp346 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp347 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp348 = NofibPrelude.Cons(tmp347, NofibPrelude.Nil);
    tmp349 = NofibPrelude.Cons(tmp346, tmp348);
    tmp350 = NofibPrelude.Cons(tmp345, tmp349);
    tmp351 = globalThis.Object.freeze([
      1,
      -1
    ]);
    tmp352 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp353 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp354 = NofibPrelude.Cons(tmp353, NofibPrelude.Nil);
    tmp355 = NofibPrelude.Cons(tmp352, tmp354);
    tmp356 = NofibPrelude.Cons(tmp351, tmp355);
    tmp357 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp358 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp359 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp360 = NofibPrelude.Cons(tmp359, NofibPrelude.Nil);
    tmp361 = NofibPrelude.Cons(tmp358, tmp360);
    tmp362 = NofibPrelude.Cons(tmp357, tmp361);
    tmp363 = NofibPrelude.Cons(tmp362, NofibPrelude.Nil);
    tmp364 = NofibPrelude.Cons(tmp356, tmp363);
    tmp365 = NofibPrelude.Cons(tmp350, tmp364);
    tmp366 = NofibPrelude.Cons(tmp344, tmp365);
    tmp367 = lastpiece.P("c", NofibPrelude.Nil, tmp366);
    lastpiece.cPiece = tmp367;
    tmp368 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp369 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp370 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp371 = NofibPrelude.Cons(tmp370, NofibPrelude.Nil);
    tmp372 = NofibPrelude.Cons(tmp369, tmp371);
    tmp373 = NofibPrelude.Cons(tmp368, tmp372);
    tmp374 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp375 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp376 = globalThis.Object.freeze([
      2,
      -1
    ]);
    tmp377 = NofibPrelude.Cons(tmp376, NofibPrelude.Nil);
    tmp378 = NofibPrelude.Cons(tmp375, tmp377);
    tmp379 = NofibPrelude.Cons(tmp374, tmp378);
    tmp380 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp381 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp382 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp383 = NofibPrelude.Cons(tmp382, NofibPrelude.Nil);
    tmp384 = NofibPrelude.Cons(tmp381, tmp383);
    tmp385 = NofibPrelude.Cons(tmp380, tmp384);
    tmp386 = NofibPrelude.Cons(tmp385, NofibPrelude.Nil);
    tmp387 = NofibPrelude.Cons(tmp379, tmp386);
    tmp388 = NofibPrelude.Cons(tmp373, tmp387);
    tmp389 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp390 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp391 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp392 = NofibPrelude.Cons(tmp391, NofibPrelude.Nil);
    tmp393 = NofibPrelude.Cons(tmp390, tmp392);
    tmp394 = NofibPrelude.Cons(tmp389, tmp393);
    tmp395 = NofibPrelude.Cons(tmp394, NofibPrelude.Nil);
    tmp396 = lastpiece.P("b", tmp388, tmp395);
    lastpiece.bPiece = tmp396;
    tmp397 = NofibPrelude.Cons(lastpiece.nPiece, NofibPrelude.Nil);
    tmp398 = NofibPrelude.Cons(lastpiece.mPiece, tmp397);
    tmp399 = NofibPrelude.Cons(lastpiece.lPiece, tmp398);
    tmp400 = NofibPrelude.Cons(lastpiece.kPiece, tmp399);
    tmp401 = NofibPrelude.Cons(lastpiece.jPiece, tmp400);
    tmp402 = NofibPrelude.Cons(lastpiece.iPiece, tmp401);
    tmp403 = NofibPrelude.Cons(lastpiece.hPiece, tmp402);
    tmp404 = NofibPrelude.Cons(lastpiece.gPiece, tmp403);
    tmp405 = NofibPrelude.Cons(lastpiece.fPiece, tmp404);
    tmp406 = NofibPrelude.Cons(lastpiece.ePiece, tmp405);
    tmp407 = NofibPrelude.Cons(lastpiece.dPiece, tmp406);
    tmp408 = NofibPrelude.Cons(lastpiece.cPiece, tmp407);
    tmp409 = NofibPrelude.Cons(lastpiece.bPiece, tmp408);
    lastpiece.initialPieces = tmp409;
    (class PageMode {
      static {
        new this
      }
      constructor() {
        lastpiece.PageMode = this;
        Object.defineProperty(this, "class", {
          value: PageMode
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PageMode"];
    });
    (class ZigZagMode {
      static {
        new this
      }
      constructor() {
        lastpiece.ZigZagMode = this;
        Object.defineProperty(this, "class", {
          value: ZigZagMode
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ZigZagMode"];
    });
    (class LeftMode {
      static {
        new this
      }
      constructor() {
        lastpiece.LeftMode = this;
        Object.defineProperty(this, "class", {
          value: LeftMode
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LeftMode"];
    });
    (class OneLineMode {
      static {
        new this
      }
      constructor() {
        lastpiece.OneLineMode = this;
        Object.defineProperty(this, "class", {
          value: OneLineMode
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "OneLineMode"];
    });
    lastpiece.Chr = function Chr(c) {
      return globalThis.Object.freeze(new Chr.class(c));
    };
    (class Chr {
      static {
        lastpiece.Chr.class = this
      }
      constructor(c) {
        this.c = c;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Chr", ["c"]];
    });
    lastpiece.Str = function Str(s) {
      return globalThis.Object.freeze(new Str.class(s));
    };
    (class Str {
      static {
        lastpiece.Str.class = this
      }
      constructor(s) {
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Str", ["s"]];
    });
    lastpiece.PStr = function PStr(s) {
      return globalThis.Object.freeze(new PStr.class(s));
    };
    (class PStr {
      static {
        lastpiece.PStr.class = this
      }
      constructor(s) {
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "PStr", ["s"]];
    });
    (class AnnotStart {
      static {
        new this
      }
      constructor() {
        lastpiece.AnnotStart = this;
        Object.defineProperty(this, "class", {
          value: AnnotStart
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "AnnotStart"];
    });
    (class AnnotEnd {
      static {
        new this
      }
      constructor() {
        lastpiece.AnnotEnd = this;
        Object.defineProperty(this, "class", {
          value: AnnotEnd
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "AnnotEnd"];
    });
    lastpiece.NoAnnot = function NoAnnot(t, i) {
      return globalThis.Object.freeze(new NoAnnot.class(t, i));
    };
    (class NoAnnot {
      static {
        lastpiece.NoAnnot.class = this
      }
      constructor(t, i) {
        this.t = t;
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NoAnnot", ["t", "i"]];
    });
    (class IsEmpty {
      static {
        new this
      }
      constructor() {
        lastpiece.IsEmpty = this;
        Object.defineProperty(this, "class", {
          value: IsEmpty
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "IsEmpty"];
    });
    (class NotEmpty {
      static {
        new this
      }
      constructor() {
        lastpiece.NotEmpty = this;
        Object.defineProperty(this, "class", {
          value: NotEmpty
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NotEmpty"];
    });
    (class Empty {
      static {
        new this
      }
      constructor() {
        lastpiece.Empty = this;
        Object.defineProperty(this, "class", {
          value: Empty
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Empty"];
    });
    (class NoDoc {
      static {
        new this
      }
      constructor() {
        lastpiece.NoDoc = this;
        Object.defineProperty(this, "class", {
          value: NoDoc
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NoDoc"];
    });
    lastpiece.NilAbove = function NilAbove(d) {
      return globalThis.Object.freeze(new NilAbove.class(d));
    };
    (class NilAbove {
      static {
        lastpiece.NilAbove.class = this
      }
      constructor(d) {
        this.d = d;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NilAbove", ["d"]];
    });
    lastpiece.TextBeside = function TextBeside(a, d) {
      return globalThis.Object.freeze(new TextBeside.class(a, d));
    };
    (class TextBeside {
      static {
        lastpiece.TextBeside.class = this
      }
      constructor(a, d) {
        this.a = a;
        this.d = d;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "TextBeside", ["a", "d"]];
    });
    lastpiece.Nest = function Nest(i, d) {
      return globalThis.Object.freeze(new Nest.class(i, d));
    };
    (class Nest {
      static {
        lastpiece.Nest.class = this
      }
      constructor(i, d) {
        this.i = i;
        this.d = d;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Nest", ["i", "d"]];
    });
    lastpiece.Union = function Union(d1, d2) {
      return globalThis.Object.freeze(new Union.class(d1, d2));
    };
    (class Union {
      static {
        lastpiece.Union.class = this
      }
      constructor(d1, d2) {
        this.d1 = d1;
        this.d2 = d2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Union", ["d1", "d2"]];
    });
    lastpiece.Beside = function Beside(d1, b, d2) {
      return globalThis.Object.freeze(new Beside.class(d1, b, d2));
    };
    (class Beside {
      static {
        lastpiece.Beside.class = this
      }
      constructor(d1, b, d2) {
        this.d1 = d1;
        this.b = b;
        this.d2 = d2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Beside", ["d1", "b", "d2"]];
    });
    lastpiece.Above = function Above(d1, b, d2) {
      return globalThis.Object.freeze(new Above.class(d1, b, d2));
    };
    (class Above {
      static {
        lastpiece.Above.class = this
      }
      constructor(d1, b, d2) {
        this.d1 = d1;
        this.b = b;
        this.d2 = d2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Above", ["d1", "b", "d2"]];
    });
    tmp410 = lastpiece.Chr(" ");
    tmp411 = lastpiece.NoAnnot(tmp410, 1);
    lastpiece.spaceText = tmp411;
    tmp412 = lastpiece.Chr("\n");
    tmp413 = lastpiece.NoAnnot(tmp412, 1);
    lastpiece.nlText = tmp413;
  }
  static #reduceDoc_beside_above(id, param0, param1, param2) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let arg$Above$0$, arg$Above$1$, arg$Above$2$, arg$Beside$0$, arg$Beside$1$, arg$Beside$2$, tmp, tmp1;
            if (param0 instanceof lastpiece.Beside.class) {
              arg$Beside$0$ = param0.d1;
              arg$Beside$1$ = param0.b;
              arg$Beside$2$ = param0.d2;
              tmp = lastpiece.#reduceDoc_beside_above(0, arg$Beside$2$, undefined, undefined);
              param0 = arg$Beside$0$;
              param1 = arg$Beside$1$;
              param2 = tmp;
              id = 1;
              continue loopLabel
            } else if (param0 instanceof lastpiece.Above.class) {
              arg$Above$0$ = param0.d1;
              arg$Above$1$ = param0.b;
              arg$Above$2$ = param0.d2;
              tmp1 = lastpiece.#reduceDoc_beside_above(0, arg$Above$2$, undefined, undefined);
              param0 = arg$Above$0$;
              param1 = arg$Above$1$;
              param2 = tmp1;
              id = 2;
              continue loopLabel
            }
            return param0;
          }
        case 1:
          {
            let scrut, arg$TextBeside$0$, arg$TextBeside$1$, arg$NilAbove$0$, arg$Beside$0$, arg$Beside$1$, arg$Beside$2$, arg$Nest$0$, arg$Nest$1$, arg$Union$0$, arg$Union$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
            if (param0 instanceof lastpiece.NoDoc.class) {
              return lastpiece.NoDoc
            } else if (param0 instanceof lastpiece.Union.class) {
              arg$Union$0$ = param0.d1;
              arg$Union$1$ = param0.d2;
              tmp = lastpiece.#reduceDoc_beside_above(1, arg$Union$0$, param1, param2);
              tmp1 = lastpiece.#reduceDoc_beside_above(1, arg$Union$1$, param1, param2);
              return lastpiece.Union(tmp, tmp1)
            } else if (param0 instanceof lastpiece.Empty.class) {
              return param2
            } else if (param0 instanceof lastpiece.Nest.class) {
              arg$Nest$0$ = param0.i;
              arg$Nest$1$ = param0.d;
              tmp2 = lastpiece.#reduceDoc_beside_above(1, arg$Nest$1$, param1, param2);
              return lastpiece.Nest(arg$Nest$0$, tmp2)
            } else if (param0 instanceof lastpiece.Beside.class) {
              arg$Beside$0$ = param0.d1;
              arg$Beside$1$ = param0.b;
              arg$Beside$2$ = param0.d2;
              scrut = arg$Beside$1$ === param1;
              if (scrut === true) {
                tmp3 = lastpiece.#reduceDoc_beside_above(1, arg$Beside$2$, param1, param2);
                param0 = arg$Beside$0$;
                param1 = arg$Beside$1$;
                param2 = tmp3;
                id = 1;
                continue loopLabel
              }
              tmp4 = lastpiece.Beside(arg$Beside$0$, arg$Beside$1$, arg$Beside$2$);
              tmp5 = lastpiece.#reduceDoc_beside_above(0, tmp4, undefined, undefined);
              param0 = tmp5;
              id = 1;
              continue loopLabel;
            } else if (param0 instanceof lastpiece.Above.class) {
              tmp6 = lastpiece.#reduceDoc_beside_above(0, param0, undefined, undefined);
              param0 = tmp6;
              id = 1;
              continue loopLabel
            } else if (param0 instanceof lastpiece.NilAbove.class) {
              arg$NilAbove$0$ = param0.d;
              tmp7 = lastpiece.#reduceDoc_beside_above(1, arg$NilAbove$0$, param1, param2);
              return lastpiece.NilAbove(tmp7)
            } else if (param0 instanceof lastpiece.TextBeside.class) {
              arg$TextBeside$0$ = param0.a;
              arg$TextBeside$1$ = param0.d;
              if (arg$TextBeside$1$ instanceof lastpiece.Empty.class) {
                tmp8 = lastpiece.#nilBeside(param1, param2);
                return lastpiece.TextBeside(arg$TextBeside$0$, tmp8)
              }
              tmp8 = lastpiece.#reduceDoc_beside_above(1, arg$TextBeside$1$, param1, param2);
              return lastpiece.TextBeside(arg$TextBeside$0$, tmp8);
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 2:
          {
            let arg$Above$0$, arg$Above$1$, arg$Above$2$, tmp, tmp1, tmp2, tmp3;
            if (param0 instanceof lastpiece.Above.class) {
              arg$Above$0$ = param0.d1;
              arg$Above$1$ = param0.b;
              arg$Above$2$ = param0.d2;
              tmp = lastpiece.#reduceDoc_beside_above(2, arg$Above$2$, param1, param2);
              param0 = arg$Above$0$;
              param1 = arg$Above$1$;
              param2 = tmp;
              id = 2;
              continue loopLabel
            } else if (param0 instanceof lastpiece.Beside.class) {
              tmp1 = lastpiece.#reduceDoc_beside_above(0, param0, undefined, undefined);
              tmp2 = lastpiece.#reduceDoc_beside_above(0, param2, undefined, undefined);
              return lastpiece.#aboveNest(tmp1, param1, 0, tmp2)
            }
            tmp3 = lastpiece.#reduceDoc_beside_above(0, param2, undefined, undefined);
            return lastpiece.#aboveNest(param0, param1, 0, tmp3);
          }
      }
    }
  }
  static #fromSome(s) {
    if (s instanceof NofibPrelude.Some.class) {
      return s.x
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #snd(x) {
    if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
      runtime.Tuple.get(x, 0);
      return runtime.Tuple.get(x, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = lastpiece.#map(f, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
  static #enumFromTo(a, b) {
    let scrut, tmp, tmp1;
    scrut = a <= b;
    if (scrut === true) {
      tmp = a + 1;
      tmp1 = lastpiece.#enumFromTo(tmp, b);
      return NofibPrelude.Cons(a, tmp1)
    }
    return NofibPrelude.Nil;
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = lastpiece.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #foldr(f, z, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return z
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = lastpiece.#foldr(f, z, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #replicate(n, x) {
    let scrut, tmp, tmp1;
    scrut = n == 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    tmp = n - 1;
    tmp1 = lastpiece.#replicate(tmp, x);
    return NofibPrelude.Cons(x, tmp1);
  }
  static #mapMaybe(f, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Some$0$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f(arg$Cons$0$));
        if (scrut instanceof NofibPrelude.None.class) {
          ls = arg$Cons$1$;
          continue loopLabel
        } else if (scrut instanceof NofibPrelude.Some.class) {
          arg$Some$0$ = scrut.x;
          tmp = lastpiece.#mapMaybe(f, arg$Cons$1$);
          return NofibPrelude.Cons(arg$Some$0$, tmp)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #compareIntInt(ab, cd) {
    let scrut, scrut1, scrut2, scrut3, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
      element0$ = runtime.Tuple.get(ab, 0);
      element1$ = runtime.Tuple.get(ab, 1);
      if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
        element0$1 = runtime.Tuple.get(cd, 0);
        element1$1 = runtime.Tuple.get(cd, 1);
        scrut = element0$ > element0$1;
        if (scrut === true) {
          return lastpiece.GT
        }
        scrut1 = element0$ < element0$1;
        if (scrut1 === true) {
          return lastpiece.LT
        }
        scrut2 = element1$ > element1$1;
        if (scrut2 === true) {
          return lastpiece.GT
        }
        scrut3 = element1$ < element1$1;
        if (scrut3 === true) {
          return lastpiece.LT
        }
        return lastpiece.EQ;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mapLookup(k, m) {
    loopLabel: while (true) {
      let scrut, arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$4$;
      if (m instanceof lastpiece.Tip.class) {
        return NofibPrelude.None
      } else if (m instanceof lastpiece.Bin.class) {
        arg$Bin$1$ = m.k;
        arg$Bin$2$ = m.v;
        arg$Bin$3$ = m.l;
        arg$Bin$4$ = m.r;
        scrut = lastpiece.#compareIntInt(k, arg$Bin$1$);
        if (scrut instanceof lastpiece.LT.class) {
          m = arg$Bin$3$;
          continue loopLabel
        } else if (scrut instanceof lastpiece.GT.class) {
          m = arg$Bin$4$;
          continue loopLabel
        } else if (scrut instanceof lastpiece.EQ.class) {
          return NofibPrelude.Some(arg$Bin$2$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #size(p) {
    if (p instanceof lastpiece.Tip.class) {
      return 0
    } else if (p instanceof lastpiece.Bin.class) {
      return p.i
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #bin(k, x, l, r) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = lastpiece.#size(l);
    tmp1 = lastpiece.#size(r);
    tmp2 = tmp + tmp1;
    tmp3 = tmp2 + 1;
    return lastpiece.Bin(tmp3, k, x, l, r)
  }
  static #singleL(k1, x1, t1, r) {
    let arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$4$, tmp;
    if (r instanceof lastpiece.Bin.class) {
      arg$Bin$1$ = r.k;
      arg$Bin$2$ = r.v;
      arg$Bin$3$ = r.l;
      arg$Bin$4$ = r.r;
      tmp = lastpiece.#bin(k1, x1, t1, arg$Bin$3$);
      return lastpiece.#bin(arg$Bin$1$, arg$Bin$2$, tmp, arg$Bin$4$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #singleR(k1, x1, l, t3) {
    let arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$4$, tmp;
    if (l instanceof lastpiece.Bin.class) {
      arg$Bin$1$ = l.k;
      arg$Bin$2$ = l.v;
      arg$Bin$3$ = l.l;
      arg$Bin$4$ = l.r;
      tmp = lastpiece.#bin(k1, x1, arg$Bin$4$, t3);
      return lastpiece.#bin(arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #doubleL(k1, x1, t1, r) {
    let arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$4$, arg$Bin$1$1, arg$Bin$2$1, arg$Bin$3$1, arg$Bin$4$1, tmp, tmp1;
    if (r instanceof lastpiece.Bin.class) {
      arg$Bin$1$ = r.k;
      arg$Bin$2$ = r.v;
      arg$Bin$3$ = r.l;
      arg$Bin$4$ = r.r;
      if (arg$Bin$3$ instanceof lastpiece.Bin.class) {
        arg$Bin$1$1 = arg$Bin$3$.k;
        arg$Bin$2$1 = arg$Bin$3$.v;
        arg$Bin$3$1 = arg$Bin$3$.l;
        arg$Bin$4$1 = arg$Bin$3$.r;
        tmp = lastpiece.#bin(k1, x1, t1, arg$Bin$3$1);
        tmp1 = lastpiece.#bin(arg$Bin$1$, arg$Bin$2$, arg$Bin$4$1, arg$Bin$4$);
        return lastpiece.#bin(arg$Bin$1$1, arg$Bin$2$1, tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #doubleR(k1, x1, l, t4) {
    let arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$4$, arg$Bin$1$1, arg$Bin$2$1, arg$Bin$3$1, arg$Bin$4$1, tmp, tmp1;
    if (l instanceof lastpiece.Bin.class) {
      arg$Bin$1$ = l.k;
      arg$Bin$2$ = l.v;
      arg$Bin$3$ = l.l;
      arg$Bin$4$ = l.r;
      if (arg$Bin$4$ instanceof lastpiece.Bin.class) {
        arg$Bin$1$1 = arg$Bin$4$.k;
        arg$Bin$2$1 = arg$Bin$4$.v;
        arg$Bin$3$1 = arg$Bin$4$.l;
        arg$Bin$4$1 = arg$Bin$4$.r;
        tmp = lastpiece.#bin(arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$3$1);
        tmp1 = lastpiece.#bin(k1, x1, arg$Bin$4$1, t4);
        return lastpiece.#bin(arg$Bin$1$1, arg$Bin$2$1, tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rotateL(k, x, l, r) {
    let scrut, arg$Bin$3$, arg$Bin$4$, tmp, tmp1, tmp2;
    if (r instanceof lastpiece.Bin.class) {
      arg$Bin$3$ = r.l;
      arg$Bin$4$ = r.r;
      tmp = lastpiece.#size(arg$Bin$3$);
      tmp1 = lastpiece.#size(arg$Bin$4$);
      tmp2 = 2 * tmp1;
      scrut = tmp < tmp2;
      if (scrut === true) {
        return lastpiece.#singleL(k, x, l, r)
      }
      return lastpiece.#doubleL(k, x, l, r);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rotateR(k, x, l, r) {
    let scrut, arg$Bin$3$, arg$Bin$4$, tmp, tmp1, tmp2;
    if (l instanceof lastpiece.Bin.class) {
      arg$Bin$3$ = l.l;
      arg$Bin$4$ = l.r;
      tmp = lastpiece.#size(arg$Bin$4$);
      tmp1 = lastpiece.#size(arg$Bin$3$);
      tmp2 = 2 * tmp1;
      scrut = tmp < tmp2;
      if (scrut === true) {
        return lastpiece.#singleR(k, x, l, r)
      }
      return lastpiece.#doubleR(k, x, l, r);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #balance(k, x, l, r) {
    let sizeL, sizeR, sizeX, scrut, scrut1, scrut2, tmp, tmp1, tmp2, tmp3;
    sizeL = lastpiece.#size(l);
    sizeR = lastpiece.#size(r);
    tmp = sizeL + sizeR;
    sizeX = tmp + 1;
    tmp1 = sizeL + sizeR;
    scrut = tmp1 <= 1;
    if (scrut === true) {
      return lastpiece.Bin(sizeX, k, x, l, r)
    }
    tmp2 = 4 * sizeL;
    scrut1 = sizeR >= tmp2;
    if (scrut1 === true) {
      return lastpiece.#rotateL(k, x, l, r)
    }
    tmp3 = 4 * sizeR;
    scrut2 = sizeL >= tmp3;
    if (scrut2 === true) {
      return lastpiece.#rotateR(k, x, l, r)
    }
    return lastpiece.Bin(sizeX, k, x, l, r);
  }
  static #insert(kx, x, m) {
    let scrut, arg$Bin$0$, arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, arg$Bin$4$, tmp, tmp1;
    if (m instanceof lastpiece.Tip.class) {
      return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
    } else if (m instanceof lastpiece.Bin.class) {
      arg$Bin$0$ = m.i;
      arg$Bin$1$ = m.k;
      arg$Bin$2$ = m.v;
      arg$Bin$3$ = m.l;
      arg$Bin$4$ = m.r;
      scrut = lastpiece.#compareIntInt(kx, arg$Bin$1$);
      if (scrut instanceof lastpiece.LT.class) {
        tmp = lastpiece.#insert(kx, x, arg$Bin$3$);
        return lastpiece.#balance(arg$Bin$1$, arg$Bin$2$, tmp, arg$Bin$4$)
      } else if (scrut instanceof lastpiece.GT.class) {
        tmp1 = lastpiece.#insert(kx, x, arg$Bin$4$);
        return lastpiece.#balance(arg$Bin$1$, arg$Bin$2$, arg$Bin$3$, tmp1)
      } else if (scrut instanceof lastpiece.EQ.class) {
        return lastpiece.Bin(arg$Bin$0$, kx, x, arg$Bin$3$, arg$Bin$4$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #indent(n) {
    let scrut, tmp, tmp1;
    scrut = n <= 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    tmp = n - 1;
    tmp1 = lastpiece.#indent(tmp);
    return NofibPrelude.Cons(" ", tmp1);
  }
  static #flip(s) {
    if (s instanceof lastpiece.Male.class) {
      return lastpiece.Female
    } else if (s instanceof lastpiece.Female.class) {
      return lastpiece.Male
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #addIntInt(row_col, orow_ocol) {
    let element1$, element0$, element1$1, element0$1, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
      element0$ = runtime.Tuple.get(row_col, 0);
      element1$ = runtime.Tuple.get(row_col, 1);
      if (runtime.Tuple.isArrayLike(orow_ocol) && orow_ocol.length === 2) {
        element0$1 = runtime.Tuple.get(orow_ocol, 0);
        element1$1 = runtime.Tuple.get(orow_ocol, 1);
        tmp = element0$ + element0$1;
        tmp1 = element1$ + element1$1;
        return globalThis.Object.freeze([
          tmp,
          tmp1
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #next(row_col) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
      element0$ = runtime.Tuple.get(row_col, 0);
      element1$ = runtime.Tuple.get(row_col, 1);
      tmp = element1$ + 1;
      return globalThis.Object.freeze([
        element0$,
        tmp
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #check(bd, sq) {
    return lastpiece.#mapLookup(sq, bd)
  }
  static #extend(bd, sq, id) {
    return lastpiece.#insert(sq, id, bd)
  }
  static #extend_maybe(bd, sq, id) {
    let scrut, element1$, element0$, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(sq) && sq.length === 2) {
      element0$ = runtime.Tuple.get(sq, 0);
      element1$ = runtime.Tuple.get(sq, 1);
      tmp = element0$ > lastpiece.maxRow;
      if (tmp === false) {
        tmp1 = element1$ < 1;
        if (tmp1 === false) {
          tmp2 = element1$ > lastpiece.maxCol;
          if (tmp2 === true) {
            return NofibPrelude.None
          }
          scrut = lastpiece.#check(bd, sq);
          if (scrut instanceof NofibPrelude.Some.class) {
            return NofibPrelude.None
          } else if (scrut instanceof NofibPrelude.None.class) {
            tmp3 = lastpiece.#extend(bd, sq, id);
            return NofibPrelude.Some(tmp3)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        return NofibPrelude.None;
      }
      return NofibPrelude.None;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #pickOne(xs) {
    return go(lambda, xs)
  }
  static #fit(bd, sq, id, os) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Some$0$, tmp, tmp1;
      if (os instanceof NofibPrelude.Nil.class) {
        tmp = lastpiece.#extend(bd, sq, id);
        return NofibPrelude.Some(tmp)
      } else if (os instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = os.head;
        arg$Cons$1$ = os.tail;
        tmp1 = lastpiece.#addIntInt(sq, arg$Cons$0$);
        scrut = lastpiece.#extend_maybe(bd, tmp1, id);
        if (scrut instanceof NofibPrelude.Some.class) {
          arg$Some$0$ = scrut.x;
          bd = arg$Some$0$;
          os = arg$Cons$1$;
          continue loopLabel
        } else if (scrut instanceof NofibPrelude.None.class) {
          return NofibPrelude.None
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #tryy(sq, se, bd, id_is_ps) {
    let scrut, element2$, element1$, element0$, arg$Some$0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(id_is_ps) && id_is_ps.length === 3) {
      element0$ = runtime.Tuple.get(id_is_ps, 0);
      element1$ = runtime.Tuple.get(id_is_ps, 1);
      element2$ = runtime.Tuple.get(id_is_ps, 2);
      scrut = lastpiece.#fit(bd, sq, element0$, element1$);
      if (scrut instanceof NofibPrelude.Some.class) {
        arg$Some$0$ = scrut.x;
        tmp = lastpiece.#next(sq);
        tmp1 = lastpiece.#flip(se);
        tmp2 = lastpiece.#search(tmp, tmp1, arg$Some$0$, element2$);
        return NofibPrelude.Some(tmp2)
      } else if (scrut instanceof NofibPrelude.None.class) {
        return NofibPrelude.None
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #search(row_col, sey, bd, ps) {
    loopLabel: while (true) {
      let scrut, scrut1, scrut2, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$here;
      if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
        element0$ = runtime.Tuple.get(row_col, 0);
        element1$ = runtime.Tuple.get(row_col, 1);
        if (ps instanceof NofibPrelude.Nil.class) {
          return lastpiece.Soln(bd)
        }
        tmp = lastpiece.maxCol + 1;
        scrut = element1$ === tmp;
        if (scrut === true) {
          tmp1 = element0$ + 1;
          tmp2 = globalThis.Object.freeze([
            tmp1,
            1
          ]);
          tmp3 = lastpiece.#flip(sey);
          row_col = tmp2;
          sey = tmp3;
          continue loopLabel
        }
        scrut1 = lastpiece.#check(bd, row_col);
        if (scrut1 instanceof NofibPrelude.Some.class) {
          tmp4 = lastpiece.#next(row_col);
          tmp5 = lastpiece.#flip(sey);
          row_col = tmp4;
          sey = tmp5;
          continue loopLabel
        }
        {
          let inlinedVal;
          tmp6 = lastpiece.#pickOne(ps);
          inlinedVal = lscomp1_lscomp2(0, lastpiece, sey, tmp6, undefined, undefined, undefined);
          lambda$here = lambda$1(lastpiece, row_col, sey, bd);
          scrut2 = lastpiece.#mapMaybe(lambda$here, inlinedVal);
          if (scrut2 instanceof NofibPrelude.Nil.class) {
            return lastpiece.Fail(bd, row_col)
          }
          return lastpiece.Choose(scrut2);
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #annotSize(p) {
    if (p instanceof lastpiece.NoAnnot.class) {
      return p.i
    }
    return 0;
  }
  static #display(s) {
    let arg$Fail$1$, arg$Choose$0$, arg$Soln$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (s instanceof lastpiece.Soln.class) {
      arg$Soln$0$ = s.b;
      tmp = NofibPrelude.nofibStringToList("Success!");
      tmp1 = lastpiece.#text(tmp);
      tmp2 = lastpiece.#displayBoard(arg$Soln$0$);
      tmp3 = lastpiece.#nest(2, tmp2);
      tmp4 = NofibPrelude.Cons(tmp3, NofibPrelude.Nil);
      tmp5 = NofibPrelude.Cons(tmp1, tmp4);
      return lastpiece.#vcat(tmp5)
    } else if (s instanceof lastpiece.Choose.class) {
      arg$Choose$0$ = s.s;
      tmp6 = lastpiece.#map(lastpiece.#display, arg$Choose$0$);
      return lastpiece.#vcat(tmp6)
    } else if (s instanceof lastpiece.Fail.class) {
      arg$Fail$1$ = s.s;
      if (runtime.Tuple.isArrayLike(arg$Fail$1$) && arg$Fail$1$.length === 2) {
        runtime.Tuple.get(arg$Fail$1$, 0);
        runtime.Tuple.get(arg$Fail$1$, 1);
        return lastpiece.Empty
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #displayBoard(bd) {
    let tmp, tmp1, tmp2, tmp3, row$here;
    tmp = lastpiece.#enumFromTo(1, lastpiece.maxCol);
    row$here = row$(lastpiece, bd);
    tmp1 = lastpiece.#map(row$here, tmp);
    tmp2 = lastpiece.#vcat(tmp1);
    tmp3 = lastpiece.#text(NofibPrelude.Nil);
    return lastpiece.#above_(tmp2, false, tmp3)
  }
  static #eliminateEmpty(cons, p, g, q) {
    let element1$, element0$, tmp;
    if (p instanceof lastpiece.Empty.class) {
      return q
    }
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      element0$ = runtime.Tuple.get(q, 0);
      element1$ = runtime.Tuple.get(q, 1);
      if (element0$ instanceof lastpiece.NotEmpty.class) {
        tmp = runtime.safeCall(cons(p, g, element1$));
        return globalThis.Object.freeze([
          lastpiece.NotEmpty,
          tmp
        ])
      } else if (element0$ instanceof lastpiece.IsEmpty.class) {
        return globalThis.Object.freeze([
          lastpiece.NotEmpty,
          p
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #reduceVert(doc) {
    let arg$Above$0$, arg$Above$1$, arg$Above$2$, tmp, tmp1, tmp2, lambda$here;
    if (doc instanceof lastpiece.Above.class) {
      arg$Above$0$ = doc.d1;
      arg$Above$1$ = doc.b;
      arg$Above$2$ = doc.d2;
      tmp = lastpiece.#reduceVert(arg$Above$0$);
      tmp1 = lastpiece.#snd(tmp);
      tmp2 = lastpiece.#reduceVert(arg$Above$2$);
      lambda$here = lambda$3(lastpiece);
      return lastpiece.#eliminateEmpty(lambda$here, tmp1, arg$Above$1$, tmp2)
    }
    return globalThis.Object.freeze([
      lastpiece.NotEmpty,
      doc
    ]);
  }
  static #vcat(ls) {
    let tmp, tmp1, lambda$here;
    lambda$here = lambda$4(lastpiece);
    tmp = lastpiece.#foldr(lambda$here, lastpiece.Empty, ls);
    tmp1 = lastpiece.#reduceVert(tmp);
    return lastpiece.#snd(tmp1)
  }
  static #text(s) {
    let sl, tmp, tmp1;
    sl = lastpiece.#listLen(s);
    tmp = lastpiece.Str(s);
    tmp1 = lastpiece.NoAnnot(tmp, sl);
    return lastpiece.TextBeside(tmp1, lastpiece.Empty)
  }
  static #reduceHoriz(doc) {
    let arg$Beside$0$, arg$Beside$1$, arg$Beside$2$, tmp, tmp1, tmp2, lambda$here;
    if (doc instanceof lastpiece.Beside.class) {
      arg$Beside$0$ = doc.d1;
      arg$Beside$1$ = doc.b;
      arg$Beside$2$ = doc.d2;
      tmp = lastpiece.#reduceHoriz(arg$Beside$0$);
      tmp1 = lastpiece.#snd(tmp);
      tmp2 = lastpiece.#reduceHoriz(arg$Beside$2$);
      lambda$here = lambda$5(lastpiece);
      return lastpiece.#eliminateEmpty(lambda$here, tmp1, arg$Beside$1$, tmp2)
    }
    return globalThis.Object.freeze([
      lastpiece.NotEmpty,
      doc
    ]);
  }
  static #above_(p, g, q) {
    if (q instanceof lastpiece.Empty.class) {
      return p
    }
    if (g instanceof lastpiece.Empty.class) {
      return q
    }
    return lastpiece.Above(p, g, q);
  }
  static #nest(k, p) {
    let tmp;
    tmp = lastpiece.#reduceDoc(p);
    return lastpiece.#mkNest(k, tmp)
  }
  static #mkNest(k, p) {
    loopLabel: while (true) {
      let scrut, arg$Nest$0$, arg$Nest$1$, tmp;
      if (p instanceof lastpiece.Nest.class) {
        arg$Nest$0$ = p.i;
        arg$Nest$1$ = p.d;
        tmp = k + arg$Nest$0$;
        k = tmp;
        p = arg$Nest$1$;
        continue loopLabel
      } else if (p instanceof lastpiece.NoDoc.class) {
        return lastpiece.NoDoc
      } else if (p instanceof lastpiece.Empty.class) {
        return lastpiece.Empty
      }
      scrut = k === 0;
      if (scrut === true) {
        return p
      }
      return lastpiece.Nest(k, p);
    }
  }
  static #reduceDoc(p) {
    return lastpiece.#reduceDoc_beside_above(0, p, undefined, undefined)
  }
  static #nilBeside(g, p) {
    loopLabel: while (true) {
      let arg$Nest$1$;
      if (p instanceof lastpiece.Empty.class) {
        return lastpiece.Empty
      } else if (p instanceof lastpiece.Nest.class) {
        arg$Nest$1$ = p.d;
        p = arg$Nest$1$;
        continue loopLabel
      }
      if (g === true) {
        return lastpiece.TextBeside(lastpiece.spaceText, p)
      }
      return p;
    }
  }
  static #aboveNest(p, g, k, q) {
    let k1, arg$TextBeside$0$, arg$TextBeside$1$, arg$NilAbove$0$, arg$Nest$0$, arg$Nest$1$, arg$Union$0$, arg$Union$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (p instanceof lastpiece.NoDoc.class) {
      return lastpiece.NoDoc
    } else if (p instanceof lastpiece.Union.class) {
      arg$Union$0$ = p.d1;
      arg$Union$1$ = p.d2;
      tmp = lastpiece.#aboveNest(arg$Union$0$, g, k, q);
      tmp1 = lastpiece.#aboveNest(arg$Union$1$, g, k, q);
      return lastpiece.Union(tmp, tmp1)
    } else if (p instanceof lastpiece.Empty.class) {
      return lastpiece.#mkNest(k, q)
    } else if (p instanceof lastpiece.Nest.class) {
      arg$Nest$0$ = p.i;
      arg$Nest$1$ = p.d;
      tmp2 = k - arg$Nest$0$;
      tmp3 = lastpiece.#aboveNest(arg$Nest$1$, g, tmp2, q);
      return lastpiece.Nest(arg$Nest$0$, tmp3)
    } else if (p instanceof lastpiece.NilAbove.class) {
      arg$NilAbove$0$ = p.d;
      tmp4 = lastpiece.#aboveNest(arg$NilAbove$0$, g, k, q);
      return lastpiece.NilAbove(tmp4)
    } else if (p instanceof lastpiece.TextBeside.class) {
      arg$TextBeside$0$ = p.a;
      arg$TextBeside$1$ = p.d;
      tmp5 = lastpiece.#annotSize(arg$TextBeside$0$);
      k1 = k - tmp5;
      if (arg$TextBeside$1$ instanceof lastpiece.Empty.class) {
        tmp6 = lastpiece.#nilAboveNest(g, k1, q);
        return lastpiece.TextBeside(arg$TextBeside$0$, tmp6)
      }
      tmp6 = lastpiece.#aboveNest(arg$TextBeside$1$, g, k1, q);
      return lastpiece.TextBeside(arg$TextBeside$0$, tmp6);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #nilAboveNest(g, k, q) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$Nest$0$, arg$Nest$1$, tmp, tmp1, tmp2, tmp3, tmp4;
      if (q instanceof lastpiece.Empty.class) {
        return lastpiece.Empty
      } else if (q instanceof lastpiece.Nest.class) {
        arg$Nest$0$ = q.i;
        arg$Nest$1$ = q.d;
        tmp = k + arg$Nest$0$;
        k = tmp;
        q = arg$Nest$1$;
        continue loopLabel
      }
      scrut = ! g;
      if (scrut === true) {
        scrut1 = k > 0;
        if (scrut1 === true) {
          tmp2 = lastpiece.#indent(k);
          tmp3 = lastpiece.Str(tmp2);
          tmp4 = lastpiece.NoAnnot(tmp3, k);
          return lastpiece.TextBeside(tmp4, q)
        }
      }
      tmp1 = lastpiece.#mkNest(k, q);
      return lastpiece.NilAbove(tmp1);
    }
  }
  static #printDoc(d) {
    let done, put$here;
    done = NofibPrelude.Cons("\n", NofibPrelude.Nil);
    put$here = put$(lastpiece);
    return lastpiece.#fullRender(lastpiece.ZigZagMode, 200, 1.5, put$here, done, d)
  }
  static #fullRender(m, l, r, txt, a, b) {
    let annTxt$here;
    annTxt$here = annTxt$(lastpiece, txt);
    return lastpiece.#fullRenderAnn(m, l, r, annTxt$here, a, b)
  }
  static #ceiling(x) {
    return runtime.safeCall(globalThis.Math.ceil(x))
  }
  static #fullRenderAnn(m, lineLen, ribbons, txt, rest, doc) {
    let ribbonLen, doc1, tmp, tmp1, tmp2, tmp3, tmp4;
    if (m instanceof lastpiece.OneLineMode.class) {
      tmp = lastpiece.#reduceDoc(doc);
      return lastpiece.#easyDisplay(lastpiece.spaceText, lambda2, txt, rest, tmp)
    } else if (m instanceof lastpiece.LeftMode.class) {
      tmp1 = lastpiece.#reduceDoc(doc);
      return lastpiece.#easyDisplay(lastpiece.nlText, lastpiece.#first, txt, rest, tmp1)
    }
    tmp2 = lineLen / ribbons;
    ribbonLen = lastpiece.#ceiling(tmp2);
    if (m instanceof lastpiece.ZigZagMode.class) {
      tmp3 = 2147483647;
    } else {
      tmp3 = lineLen;
    }
    tmp4 = lastpiece.#reduceDoc(doc);
    doc1 = lastpiece.#best(tmp3, ribbonLen, tmp4);
    return lastpiece.#displayDoc(m, lineLen, ribbonLen, txt, rest, doc1);
  }
  static #easyDisplay(nlSpaceText, choose, txt, end, x) {
    return lay(lastpiece, nlSpaceText, choose, txt, end, x)
  }
  static #displayDoc(m, pageWidth, ribbonWidth, txt, end, doc) {
    let gapWidth, inlinedVal, tmp;
    gapWidth = pageWidth - ribbonWidth;
    tmp = gapWidth / 2;
    inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
    return lay_lay2_lay1(0, lastpiece, m, txt, end, gapWidth, inlinedVal, 0, doc, undefined)
  }
  static #best(w0, r, doc) {
    return get_get1(0, lastpiece, r, w0, doc, undefined)
  }
  static #nonEmptySet(doc) {
    loopLabel: while (true) {
      let arg$Nest$1$, arg$TextBeside$1$;
      if (doc instanceof lastpiece.NoDoc.class) {
        return false
      } else if (doc instanceof lastpiece.Union.class) {
        return true
      } else if (doc instanceof lastpiece.Empty.class) {
        return true
      } else if (doc instanceof lastpiece.NilAbove.class) {
        return true
      } else if (doc instanceof lastpiece.TextBeside.class) {
        arg$TextBeside$1$ = doc.d;
        doc = arg$TextBeside$1$;
        continue loopLabel
      } else if (doc instanceof lastpiece.Nest.class) {
        arg$Nest$1$ = doc.d;
        doc = arg$Nest$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #fits(n, param) {
    loopLabel: while (true) {
      let scrut, arg$TextBeside$0$, arg$TextBeside$1$, tmp, tmp1;
      scrut = n < 0;
      if (scrut === true) {
        return false
      }
      if (param instanceof lastpiece.NoDoc.class) {
        return false
      } else if (param instanceof lastpiece.Empty.class) {
        return true
      } else if (param instanceof lastpiece.NilAbove.class) {
        return true
      } else if (param instanceof lastpiece.TextBeside.class) {
        arg$TextBeside$0$ = param.a;
        arg$TextBeside$1$ = param.d;
        tmp = lastpiece.#annotSize(arg$TextBeside$0$);
        tmp1 = n - tmp;
        n = tmp1;
        param = arg$TextBeside$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #first(p, q) {
    let scrut;
    scrut = lastpiece.#nonEmptySet(p);
    if (scrut === true) {
      return p
    }
    return q;
  }
  static #testLastPiece_nofib() {
    let initialBoard, solutions, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    tmp = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp1 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp2 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp3 = NofibPrelude.Cons(tmp2, NofibPrelude.Nil);
    tmp4 = NofibPrelude.Cons(tmp1, tmp3);
    tmp5 = lastpiece.#fit(lastpiece.emptyBoard, tmp, "a", tmp4);
    initialBoard = lastpiece.#fromSome(tmp5);
    tmp6 = globalThis.Object.freeze([
      1,
      2
    ]);
    solutions = lastpiece.#search(tmp6, lastpiece.Female, initialBoard, lastpiece.initialPieces);
    tmp7 = lastpiece.#display(solutions);
    return lastpiece.#printDoc(tmp7)
  }
  static main() {
    let tmp;
    tmp = lastpiece.#testLastPiece_nofib();
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "lastpiece"];
});
export default lastpiece1;
