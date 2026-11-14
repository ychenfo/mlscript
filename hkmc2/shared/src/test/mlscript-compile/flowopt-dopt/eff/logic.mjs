const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const trail$accessorSymbol = globalThis.Symbol("trail");
const found$accessorSymbol = globalThis.Symbol("found");
const unify$accessorSymbol = globalThis.Symbol("unify");
const cons_s$accessorSymbol = globalThis.Symbol("cons_s");
const s_s$accessorSymbol = globalThis.Symbol("s_s");
const con_o_s$accessorSymbol = globalThis.Symbol("con_o_s");
const con_nil_s$accessorSymbol = globalThis.Symbol("con_nil_s");
const con_x_s$accessorSymbol = globalThis.Symbol("con_x_s");
const exists_$accessorSymbol = globalThis.Symbol("exists_");
const solitaire$accessorSymbol = globalThis.Symbol("solitaire");
const unify1_unifys$accessorSymbol = globalThis.Symbol("unify1_unifys");
let logic1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda24, lambda25, lambda26, lambda27, lambda28, lambda29, lambda30, lambda31, lambda32, lambda33, lambda34, lambda35, lambda36, lambda37, lambda38, lambda39, lambda40, lambda41, lambda42, lambda43, lambda44, lambda45, lambda46, lambda47, lambda48, lambda49, lambda50, lambda51, lambda52, lambda53, lambda54, lambda55, lambda56, lambda57, lambda58, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18, lambda$19, lambda$20, lambda$21, lambda$22, lambda$23, lambda$24, lambda$25, lambda$26, lambda$27, lambda$28, lambda$29, lambda$30, lambda$31, lambda$32, lambda$33, lambda$34, lambda$35, lambda$36, lambda$37, lambda$38, lambda$39, lambda$40, lambda$41, lambda$42, lambda$43, lambda$44, lambda$45, lambda$46, lambda$47, lambda$48, lambda$49, lambda$50, lambda$51, lambda$52, lambda$53, lambda$54, lambda$55, lambda$56, lambda$57, lambda$58, lambda$59, lambda$60, lambda$61, lambda$62, lambda$63, lambda$64, lambda$65, lambda$66, lambda$67, lambda$68, lambda$69, lambda$70, lambda$71, lambda$72, lambda$73, lambda$74, lambda$75, lambda$76, lambda$77, lambda$78, lambda$79, lambda$80, lambda$81, lambda$82, lambda$83, lambda$84, lambda$85, lambda$86, lambda$87, lambda$88, lambda$89, lambda$90, lambda$91, lambda$92, lambda$93, lambda$94, lambda$95, lambda$96, lambda$97, lambda$98, lambda$99, lambda$100, lambda$101, lambda$102, lambda$103, lambda$104, lambda$105, lambda$106, lambda$107, lambda$108, lambda$109, lambda$110, lambda$111, lambda$112, lambda$113, lambda$114, lambda$115, lambda$116, lambda$117, lambda$118, lambda$119, lambda$120, lambda$121, lambda$122, lambda$123, lambda$124, lambda$125, oc_ocs;
oc_ocs = function oc_ocs(id, param0, param1, param2) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut, arg$REF$0$, arg$STR$1$, arg$Some$0$;
          if (param2 instanceof param0.STR.class) {
            arg$STR$1$ = param2.ts;
            param2 = arg$STR$1$;
            id = 1;
            continue loopLabel
          } else if (param2 instanceof param0.REF.class) {
            arg$REF$0$ = param2.r;
            scrut = arg$REF$0$.value;
            if (scrut instanceof param0.Some.class) {
              arg$Some$0$ = scrut.value;
              param2 = arg$Some$0$;
              id = 0;
              continue loopLabel
            }
            return param1 !== arg$REF$0$;
          } else if (param2 instanceof param0.CON.class) {
            return true
          } else if (param2 instanceof param0.INT.class) {
            return true
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp;
          if (param2 instanceof param0.Nil.class) {
            return true
          } else if (param2 instanceof param0.Cons.class) {
            arg$Cons$0$ = param2.head;
            arg$Cons$1$ = param2.tail;
            tmp = oc_ocs(0, param0, param1, arg$Cons$0$);
            if (tmp === true) {
              param2 = arg$Cons$1$;
              id = 1;
              continue loopLabel
            }
            return false;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
lambda$125 = (undefined, function (logic2) {
  return () => {
    logic2[found$accessorSymbol].value = true;
    return runtime.Unit
  }
});
lambda$124 = (undefined, function (logic2) {
  return (z) => {
    return lambda58(logic2, z)
  }
});
lambda58 = (undefined, function (logic2, z) {
  let unify, exists_, trail, sc, lambda$here;
  unify = logic2[unify$accessorSymbol];
  exists_ = logic2[exists_$accessorSymbol];
  trail = logic2[trail$accessorSymbol];
  sc = lambda$125(logic2);
  lambda$here = lambda$122(logic2, unify, exists_, trail, z, sc);
  return runtime.safeCall(exists_(lambda$here))
});
lambda$123 = (undefined, function (logic2, unify, exists_, trail, sc, x) {
  return () => {
    return lambda56(logic2, unify, exists_, trail, sc, x)
  }
});
lambda56 = (undefined, function (logic2, unify, exists_, trail, sc, x) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp16 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  tmp18 = logic2.Cons(tmp17, logic2.Nil);
  tmp19 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp18);
  tmp20 = logic2.STR(logic2[cons_s$accessorSymbol], tmp19);
  tmp21 = logic2.Cons(tmp20, logic2.Nil);
  tmp22 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp21);
  tmp23 = logic2.STR(logic2[cons_s$accessorSymbol], tmp22);
  tmp24 = logic2.Cons(tmp23, logic2.Nil);
  tmp25 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp24);
  tmp26 = logic2.STR(logic2[cons_s$accessorSymbol], tmp25);
  tmp27 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp28 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp27);
  tmp29 = logic2.STR(logic2[cons_s$accessorSymbol], tmp28);
  tmp30 = logic2.Cons(tmp29, logic2.Nil);
  tmp31 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp30);
  tmp32 = logic2.STR(logic2[cons_s$accessorSymbol], tmp31);
  tmp33 = logic2.Cons(tmp32, logic2.Nil);
  tmp34 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp33);
  tmp35 = logic2.STR(logic2[cons_s$accessorSymbol], tmp34);
  tmp36 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp37 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp36);
  tmp38 = logic2.STR(logic2[cons_s$accessorSymbol], tmp37);
  tmp39 = logic2.Cons(tmp38, logic2.Nil);
  tmp40 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp39);
  tmp41 = logic2.STR(logic2[cons_s$accessorSymbol], tmp40);
  tmp42 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp43 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp42);
  tmp44 = logic2.STR(logic2[cons_s$accessorSymbol], tmp43);
  tmp45 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp46 = logic2.Cons(tmp44, tmp45);
  tmp47 = logic2.STR(logic2[cons_s$accessorSymbol], tmp46);
  tmp48 = logic2.Cons(tmp47, logic2.Nil);
  tmp49 = logic2.Cons(tmp41, tmp48);
  tmp50 = logic2.STR(logic2[cons_s$accessorSymbol], tmp49);
  tmp51 = logic2.Cons(tmp50, logic2.Nil);
  tmp52 = logic2.Cons(tmp35, tmp51);
  tmp53 = logic2.STR(logic2[cons_s$accessorSymbol], tmp52);
  tmp54 = logic2.Cons(tmp53, logic2.Nil);
  tmp55 = logic2.Cons(tmp26, tmp54);
  tmp56 = logic2.STR(logic2[cons_s$accessorSymbol], tmp55);
  tmp57 = logic2.Cons(tmp56, logic2.Nil);
  tmp58 = logic2.Cons(tmp14, tmp57);
  tmp59 = logic2.STR(logic2[cons_s$accessorSymbol], tmp58);
  tmp60 = logic2.INT(0);
  tmp61 = logic2.Cons(tmp60, logic2.Nil);
  tmp62 = logic2.STR(logic2[s_s$accessorSymbol], tmp61);
  tmp63 = logic2.Cons(tmp62, logic2.Nil);
  tmp64 = logic2.STR(logic2[s_s$accessorSymbol], tmp63);
  tmp65 = logic2.Cons(tmp64, logic2.Nil);
  tmp66 = logic2.STR(logic2[s_s$accessorSymbol], tmp65);
  tmp67 = logic2.Cons(tmp66, logic2.Nil);
  tmp68 = logic2.STR(logic2[s_s$accessorSymbol], tmp67);
  tmp69 = logic2.Cons(tmp68, logic2.Nil);
  tmp70 = logic2.STR(logic2[s_s$accessorSymbol], tmp69);
  tmp71 = logic2.Cons(tmp70, logic2.Nil);
  tmp72 = logic2.STR(logic2[s_s$accessorSymbol], tmp71);
  tmp73 = logic2.Cons(tmp72, logic2.Nil);
  tmp74 = logic2.STR(logic2[s_s$accessorSymbol], tmp73);
  tmp75 = logic2.Cons(tmp74, logic2.Nil);
  tmp76 = logic2.STR(logic2[s_s$accessorSymbol], tmp75);
  tmp77 = logic2.Cons(tmp76, logic2.Nil);
  tmp78 = logic2.STR(logic2[s_s$accessorSymbol], tmp77);
  tmp79 = logic2.Cons(tmp78, logic2.Nil);
  tmp80 = logic2.STR(logic2[s_s$accessorSymbol], tmp79);
  tmp81 = logic2.Cons(tmp80, logic2.Nil);
  tmp82 = logic2.STR(logic2[s_s$accessorSymbol], tmp81);
  tmp83 = logic2.Cons(tmp82, logic2.Nil);
  tmp84 = logic2.STR(logic2[s_s$accessorSymbol], tmp83);
  tmp85 = logic2.Cons(tmp84, logic2.Nil);
  tmp86 = logic2.STR(logic2[s_s$accessorSymbol], tmp85);
  return logic2[solitaire$accessorSymbol](unify, exists_, trail)(tmp59, x, tmp86)(sc)
});
lambda$122 = (undefined, function (logic2, unify, exists_, trail, t_1, sc) {
  return (x) => {
    return lambda57(logic2, unify, exists_, trail, t_1, sc, x)
  }
});
lambda57 = (undefined, function (logic2, unify, exists_, trail, t_1, sc, x) {
  let callPrefix, lambda$here;
  callPrefix = runtime.safeCall(unify(t_1, x));
  lambda$here = lambda$123(logic2, unify, exists_, trail, sc, x);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$121 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$120 = (undefined, function (logic2, unify, t_3, sc) {
  return () => {
    return lambda49(logic2, unify, t_3, sc)
  }
});
lambda49 = (undefined, function (logic2, unify, t_3, sc) {
  let tmp, callPrefix, lambda$here;
  tmp = logic2.INT(0);
  callPrefix = runtime.safeCall(unify(t_3, tmp));
  lambda$here = lambda$121(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$119 = (undefined, function (logic2, unify, t_2, t_3, sc, x) {
  return () => {
    return lambda50(logic2, unify, t_2, t_3, sc, x)
  }
});
lambda50 = (undefined, function (logic2, unify, t_2, t_3, sc, x) {
  let tmp, tmp1, tmp2, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(x, tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  callPrefix = runtime.safeCall(unify(t_2, tmp2));
  lambda$here = lambda$120(logic2, unify, t_3, sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$118 = (undefined, function (logic2, unify, t_1, t_2, t_3, sc) {
  return (x) => {
    return lambda51(logic2, unify, t_1, t_2, t_3, sc, x)
  }
});
lambda51 = (undefined, function (logic2, unify, t_1, t_2, t_3, sc, x) {
  let callPrefix, lambda$here;
  callPrefix = runtime.safeCall(unify(t_1, x));
  lambda$here = lambda$119(logic2, unify, t_2, t_3, sc, x);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$110 = (undefined, function (logic2, unify, exists_, t_1, t_2, t_3, sc) {
  return () => {
    let lambda$here;
    lambda$here = lambda$118(logic2, unify, t_1, t_2, t_3, sc);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$117 = (undefined, function (logic2, unify, exists_, trail, sc, n, y, z) {
  return () => {
    return logic2[solitaire$accessorSymbol](unify, exists_, trail)(y, z, n)(sc)
  }
});
lambda$116 = (undefined, function (logic2, unify, exists_, trail, sc, n, x, y, z) {
  return () => {
    return lambda52(logic2, unify, exists_, trail, sc, n, x, y, z)
  }
});
lambda52 = (undefined, function (logic2, unify, exists_, trail, sc, n, x, y, z) {
  let sc1, lambda$here, lambda$here1;
  sc1 = lambda$117(logic2, unify, exists_, trail, sc, n, y, z);
  lambda$here = lambda$88(logic2, unify, exists_, trail, x, y, sc1);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$87(logic2, unify, exists_, trail, x, y, sc1);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$115 = (undefined, function (logic2, unify, exists_, trail, t_3, sc, n, x, y, z) {
  return () => {
    return lambda53(logic2, unify, exists_, trail, t_3, sc, n, x, y, z)
  }
});
lambda53 = (undefined, function (logic2, unify, exists_, trail, t_3, sc, n, x, y, z) {
  let tmp, tmp1, callPrefix, lambda$here;
  tmp = logic2.Cons(n, logic2.Nil);
  tmp1 = logic2.STR(logic2[s_s$accessorSymbol], tmp);
  callPrefix = runtime.safeCall(unify(t_3, tmp1));
  lambda$here = lambda$116(logic2, unify, exists_, trail, sc, n, x, y, z);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$114 = (undefined, function (logic2, unify, exists_, trail, t_2, t_3, sc, n, x, y, z) {
  return () => {
    return lambda54(logic2, unify, exists_, trail, t_2, t_3, sc, n, x, y, z)
  }
});
lambda54 = (undefined, function (logic2, unify, exists_, trail, t_2, t_3, sc, n, x, y, z) {
  let tmp, tmp1, tmp2, callPrefix, lambda$here;
  tmp = logic2.Cons(z, logic2.Nil);
  tmp1 = logic2.Cons(x, tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  callPrefix = runtime.safeCall(unify(t_2, tmp2));
  lambda$here = lambda$115(logic2, unify, exists_, trail, t_3, sc, n, x, y, z);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$113 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, t_3, sc, n, x, y) {
  return (z) => {
    return lambda55(logic2, unify, exists_, trail, t_1, t_2, t_3, sc, n, x, y, z)
  }
});
lambda55 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, t_3, sc, n, x, y, z) {
  let callPrefix, lambda$here;
  callPrefix = runtime.safeCall(unify(t_1, x));
  lambda$here = lambda$114(logic2, unify, exists_, trail, t_2, t_3, sc, n, x, y, z);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$112 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, t_3, sc, n, x) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$113(logic2, unify, exists_, trail, t_1, t_2, t_3, sc, n, x, y);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$111 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, t_3, sc, n) {
  return (x) => {
    let lambda$here;
    lambda$here = lambda$112(logic2, unify, exists_, trail, t_1, t_2, t_3, sc, n, x);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$109 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, t_3, sc) {
  return (n) => {
    let lambda$here;
    lambda$here = lambda$111(logic2, unify, exists_, trail, t_1, t_2, t_3, sc, n);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$108 = (undefined, function (logic2, unify, exists_, trail, sc, x, y) {
  return () => {
    return lambda37(logic2, unify, exists_, trail, sc, x, y)
  }
});
lambda37 = (undefined, function (logic2, unify, exists_, trail, sc, x, y) {
  let lambda$here, lambda$here1;
  lambda$here = lambda$2(logic2, unify, exists_, trail, x, y, sc);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$1(logic2, unify, exists_, x, y, sc);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$107 = (undefined, function (logic2, unify, exists_, trail, t_2, sc, x, y) {
  return () => {
    return lambda38(logic2, unify, exists_, trail, t_2, sc, x, y)
  }
});
lambda38 = (undefined, function (logic2, unify, exists_, trail, t_2, sc, x, y) {
  let callPrefix, lambda$here;
  callPrefix = runtime.safeCall(unify(t_2, y));
  lambda$here = lambda$108(logic2, unify, exists_, trail, sc, x, y);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$106 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc, x) {
  return (y) => {
    return lambda39(logic2, unify, exists_, trail, t_1, t_2, sc, x, y)
  }
});
lambda39 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc, x, y) {
  let callPrefix, lambda$here;
  callPrefix = runtime.safeCall(unify(t_1, x));
  lambda$here = lambda$107(logic2, unify, exists_, trail, t_2, sc, x, y);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$105 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return (x) => {
    let lambda$here;
    lambda$here = lambda$106(logic2, unify, exists_, trail, t_1, t_2, sc, x);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$97 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return () => {
    let lambda$here;
    lambda$here = lambda$105(logic2, unify, exists_, trail, t_1, t_2, sc);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$104 = (undefined, function (logic2, unify, exists_, sc, y, y1) {
  return () => {
    let lambda$here;
    lambda$here = lambda$70(logic2, unify, exists_, y, y1, sc);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$103 = (undefined, function (logic2, unify, exists_, trail, sc, x1, y, y1) {
  return () => {
    return lambda40(logic2, unify, exists_, trail, sc, x1, y, y1)
  }
});
lambda40 = (undefined, function (logic2, unify, exists_, trail, sc, x1, y, y1) {
  let sc1, lambda$here, lambda$here1;
  sc1 = lambda$104(logic2, unify, exists_, sc, y, y1);
  lambda$here = lambda$2(logic2, unify, exists_, trail, x1, y1, sc1);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$1(logic2, unify, exists_, x1, y1, sc1);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$102 = (undefined, function (logic2, unify, exists_, trail, sc, x, x1, y, y1) {
  return () => {
    return lambda41(logic2, unify, exists_, trail, sc, x, x1, y, y1)
  }
});
lambda41 = (undefined, function (logic2, unify, exists_, trail, sc, x, x1, y, y1) {
  let sc1, lambda$here;
  sc1 = lambda$103(logic2, unify, exists_, trail, sc, x1, y, y1);
  lambda$here = lambda$70(logic2, unify, exists_, x, x1, sc1);
  return runtime.safeCall(exists_(lambda$here))
});
lambda$101 = (undefined, function (logic2, unify, exists_, trail, t_2, sc, x, x1, y, y1) {
  return () => {
    return lambda42(logic2, unify, exists_, trail, t_2, sc, x, x1, y, y1)
  }
});
lambda42 = (undefined, function (logic2, unify, exists_, trail, t_2, sc, x, x1, y, y1) {
  let callPrefix, lambda$here;
  callPrefix = runtime.safeCall(unify(t_2, y));
  lambda$here = lambda$102(logic2, unify, exists_, trail, sc, x, x1, y, y1);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$100 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc, x, x1, y) {
  return (y1) => {
    return lambda43(logic2, unify, exists_, trail, t_1, t_2, sc, x, x1, y, y1)
  }
});
lambda43 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc, x, x1, y, y1) {
  let callPrefix, lambda$here;
  callPrefix = runtime.safeCall(unify(t_1, x));
  lambda$here = lambda$101(logic2, unify, exists_, trail, t_2, sc, x, x1, y, y1);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$99 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc, x, x1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$100(logic2, unify, exists_, trail, t_1, t_2, sc, x, x1, y);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$98 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc, x) {
  return (x1) => {
    let lambda$here;
    lambda$here = lambda$99(logic2, unify, exists_, trail, t_1, t_2, sc, x, x1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$96 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return (x) => {
    let lambda$here;
    lambda$here = lambda$98(logic2, unify, exists_, trail, t_1, t_2, sc, x);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$88 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return () => {
    return lambda44(logic2, unify, exists_, trail, t_1, t_2, sc)
  }
});
lambda$95 = (undefined, function (logic2, unify, exists_, sc, y, y1) {
  return () => {
    let lambda$here;
    lambda$here = lambda$70(logic2, unify, exists_, y1, y, sc);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$94 = (undefined, function (logic2, unify, exists_, trail, sc, x1, y, y1) {
  return () => {
    return lambda45(logic2, unify, exists_, trail, sc, x1, y, y1)
  }
});
lambda45 = (undefined, function (logic2, unify, exists_, trail, sc, x1, y, y1) {
  let sc1, lambda$here, lambda$here1;
  sc1 = lambda$95(logic2, unify, exists_, sc, y, y1);
  lambda$here = lambda$2(logic2, unify, exists_, trail, x1, y1, sc1);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$1(logic2, unify, exists_, x1, y1, sc1);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$93 = (undefined, function (logic2, unify, exists_, trail, sc, x, x1, y, y1) {
  return () => {
    return lambda46(logic2, unify, exists_, trail, sc, x, x1, y, y1)
  }
});
lambda46 = (undefined, function (logic2, unify, exists_, trail, sc, x, x1, y, y1) {
  let sc1, lambda$here;
  sc1 = lambda$94(logic2, unify, exists_, trail, sc, x1, y, y1);
  lambda$here = lambda$70(logic2, unify, exists_, x1, x, sc1);
  return runtime.safeCall(exists_(lambda$here))
});
lambda$92 = (undefined, function (logic2, unify, exists_, trail, t_2, sc, x, x1, y, y1) {
  return () => {
    return lambda47(logic2, unify, exists_, trail, t_2, sc, x, x1, y, y1)
  }
});
lambda47 = (undefined, function (logic2, unify, exists_, trail, t_2, sc, x, x1, y, y1) {
  let callPrefix, lambda$here;
  callPrefix = runtime.safeCall(unify(t_2, y));
  lambda$here = lambda$93(logic2, unify, exists_, trail, sc, x, x1, y, y1);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$91 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc, x, x1, y) {
  return (y1) => {
    return lambda48(logic2, unify, exists_, trail, t_1, t_2, sc, x, x1, y, y1)
  }
});
lambda48 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc, x, x1, y, y1) {
  let callPrefix, lambda$here;
  callPrefix = runtime.safeCall(unify(t_1, x));
  lambda$here = lambda$92(logic2, unify, exists_, trail, t_2, sc, x, x1, y, y1);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$90 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc, x, x1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$91(logic2, unify, exists_, trail, t_1, t_2, sc, x, x1, y);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$89 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc, x) {
  return (x1) => {
    let lambda$here;
    lambda$here = lambda$90(logic2, unify, exists_, trail, t_1, t_2, sc, x, x1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$87 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return (x) => {
    let lambda$here;
    lambda$here = lambda$89(logic2, unify, exists_, trail, t_1, t_2, sc, x);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda44 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  let lambda$here, lambda$here1;
  lambda$here = lambda$97(logic2, unify, exists_, trail, t_1, t_2, sc);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$96(logic2, unify, exists_, trail, t_1, t_2, sc);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$86 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$85 = (undefined, function (logic2, unify, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32, p33, p41, p42, p51) {
  return () => {
    return lambda35(logic2, unify, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32, p33, p41, p42, p51)
  }
});
lambda35 = (undefined, function (logic2, unify, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32, p33, p41, p42, p51) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(p11, tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(p21, tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(p31, tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(p41, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(p51, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp16 = logic2.Cons(p12, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  tmp18 = logic2.Cons(tmp17, logic2.Nil);
  tmp19 = logic2.Cons(p22, tmp18);
  tmp20 = logic2.STR(logic2[cons_s$accessorSymbol], tmp19);
  tmp21 = logic2.Cons(tmp20, logic2.Nil);
  tmp22 = logic2.Cons(p32, tmp21);
  tmp23 = logic2.STR(logic2[cons_s$accessorSymbol], tmp22);
  tmp24 = logic2.Cons(tmp23, logic2.Nil);
  tmp25 = logic2.Cons(p42, tmp24);
  tmp26 = logic2.STR(logic2[cons_s$accessorSymbol], tmp25);
  tmp27 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp28 = logic2.Cons(p13, tmp27);
  tmp29 = logic2.STR(logic2[cons_s$accessorSymbol], tmp28);
  tmp30 = logic2.Cons(tmp29, logic2.Nil);
  tmp31 = logic2.Cons(p23, tmp30);
  tmp32 = logic2.STR(logic2[cons_s$accessorSymbol], tmp31);
  tmp33 = logic2.Cons(tmp32, logic2.Nil);
  tmp34 = logic2.Cons(p33, tmp33);
  tmp35 = logic2.STR(logic2[cons_s$accessorSymbol], tmp34);
  tmp36 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp37 = logic2.Cons(p14, tmp36);
  tmp38 = logic2.STR(logic2[cons_s$accessorSymbol], tmp37);
  tmp39 = logic2.Cons(tmp38, logic2.Nil);
  tmp40 = logic2.Cons(p24, tmp39);
  tmp41 = logic2.STR(logic2[cons_s$accessorSymbol], tmp40);
  tmp42 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp43 = logic2.Cons(p15, tmp42);
  tmp44 = logic2.STR(logic2[cons_s$accessorSymbol], tmp43);
  tmp45 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp46 = logic2.Cons(tmp44, tmp45);
  tmp47 = logic2.STR(logic2[cons_s$accessorSymbol], tmp46);
  tmp48 = logic2.Cons(tmp47, logic2.Nil);
  tmp49 = logic2.Cons(tmp41, tmp48);
  tmp50 = logic2.STR(logic2[cons_s$accessorSymbol], tmp49);
  tmp51 = logic2.Cons(tmp50, logic2.Nil);
  tmp52 = logic2.Cons(tmp35, tmp51);
  tmp53 = logic2.STR(logic2[cons_s$accessorSymbol], tmp52);
  tmp54 = logic2.Cons(tmp53, logic2.Nil);
  tmp55 = logic2.Cons(tmp26, tmp54);
  tmp56 = logic2.STR(logic2[cons_s$accessorSymbol], tmp55);
  tmp57 = logic2.Cons(tmp56, logic2.Nil);
  tmp58 = logic2.Cons(tmp14, tmp57);
  tmp59 = logic2.STR(logic2[cons_s$accessorSymbol], tmp58);
  callPrefix = runtime.safeCall(unify(t_2, tmp59));
  lambda$here = lambda$86(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$84 = (undefined, function (logic2, unify, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32, p33, p41, p42) {
  return (p51) => {
    return lambda36(logic2, unify, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32, p33, p41, p42, p51)
  }
});
lambda36 = (undefined, function (logic2, unify, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32, p33, p41, p42, p51) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(p15, tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(p14, tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(p13, tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(p12, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(p11, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp16 = logic2.Cons(p24, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  tmp18 = logic2.Cons(tmp17, logic2.Nil);
  tmp19 = logic2.Cons(p23, tmp18);
  tmp20 = logic2.STR(logic2[cons_s$accessorSymbol], tmp19);
  tmp21 = logic2.Cons(tmp20, logic2.Nil);
  tmp22 = logic2.Cons(p22, tmp21);
  tmp23 = logic2.STR(logic2[cons_s$accessorSymbol], tmp22);
  tmp24 = logic2.Cons(tmp23, logic2.Nil);
  tmp25 = logic2.Cons(p21, tmp24);
  tmp26 = logic2.STR(logic2[cons_s$accessorSymbol], tmp25);
  tmp27 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp28 = logic2.Cons(p33, tmp27);
  tmp29 = logic2.STR(logic2[cons_s$accessorSymbol], tmp28);
  tmp30 = logic2.Cons(tmp29, logic2.Nil);
  tmp31 = logic2.Cons(p32, tmp30);
  tmp32 = logic2.STR(logic2[cons_s$accessorSymbol], tmp31);
  tmp33 = logic2.Cons(tmp32, logic2.Nil);
  tmp34 = logic2.Cons(p31, tmp33);
  tmp35 = logic2.STR(logic2[cons_s$accessorSymbol], tmp34);
  tmp36 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp37 = logic2.Cons(p42, tmp36);
  tmp38 = logic2.STR(logic2[cons_s$accessorSymbol], tmp37);
  tmp39 = logic2.Cons(tmp38, logic2.Nil);
  tmp40 = logic2.Cons(p41, tmp39);
  tmp41 = logic2.STR(logic2[cons_s$accessorSymbol], tmp40);
  tmp42 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp43 = logic2.Cons(p51, tmp42);
  tmp44 = logic2.STR(logic2[cons_s$accessorSymbol], tmp43);
  tmp45 = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp46 = logic2.Cons(tmp44, tmp45);
  tmp47 = logic2.STR(logic2[cons_s$accessorSymbol], tmp46);
  tmp48 = logic2.Cons(tmp47, logic2.Nil);
  tmp49 = logic2.Cons(tmp41, tmp48);
  tmp50 = logic2.STR(logic2[cons_s$accessorSymbol], tmp49);
  tmp51 = logic2.Cons(tmp50, logic2.Nil);
  tmp52 = logic2.Cons(tmp35, tmp51);
  tmp53 = logic2.STR(logic2[cons_s$accessorSymbol], tmp52);
  tmp54 = logic2.Cons(tmp53, logic2.Nil);
  tmp55 = logic2.Cons(tmp26, tmp54);
  tmp56 = logic2.STR(logic2[cons_s$accessorSymbol], tmp55);
  tmp57 = logic2.Cons(tmp56, logic2.Nil);
  tmp58 = logic2.Cons(tmp14, tmp57);
  tmp59 = logic2.STR(logic2[cons_s$accessorSymbol], tmp58);
  callPrefix = runtime.safeCall(unify(t_1, tmp59));
  lambda$here = lambda$85(logic2, unify, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32, p33, p41, p42, p51);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$83 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32, p33, p41) {
  return (p42) => {
    let lambda$here;
    lambda$here = lambda$84(logic2, unify, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32, p33, p41, p42);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$82 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32, p33) {
  return (p41) => {
    let lambda$here;
    lambda$here = lambda$83(logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32, p33, p41);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$81 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32) {
  return (p33) => {
    let lambda$here;
    lambda$here = lambda$82(logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32, p33);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$80 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31) {
  return (p32) => {
    let lambda$here;
    lambda$here = lambda$81(logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31, p32);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$79 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24) {
  return (p31) => {
    let lambda$here;
    lambda$here = lambda$80(logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24, p31);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$78 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23) {
  return (p24) => {
    let lambda$here;
    lambda$here = lambda$79(logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23, p24);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$77 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22) {
  return (p23) => {
    let lambda$here;
    lambda$here = lambda$78(logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22, p23);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$76 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21) {
  return (p22) => {
    let lambda$here;
    lambda$here = lambda$77(logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21, p22);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$75 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15) {
  return (p21) => {
    let lambda$here;
    lambda$here = lambda$76(logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15, p21);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$74 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14) {
  return (p15) => {
    let lambda$here;
    lambda$here = lambda$75(logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14, p15);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$73 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13) {
  return (p14) => {
    let lambda$here;
    lambda$here = lambda$74(logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13, p14);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$72 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p11, p12) {
  return (p13) => {
    let lambda$here;
    lambda$here = lambda$73(logic2, unify, exists_, t_1, t_2, sc, p11, p12, p13);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$71 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p11) {
  return (p12) => {
    let lambda$here;
    lambda$here = lambda$72(logic2, unify, exists_, t_1, t_2, sc, p11, p12);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$70 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return (p11) => {
    let lambda$here;
    lambda$here = lambda$71(logic2, unify, exists_, t_1, t_2, sc, p11);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$69 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$68 = (undefined, function (logic2, unify, t_2, sc, t, tt) {
  return () => {
    return lambda1(logic2, unify, t_2, sc, t, tt)
  }
});
lambda1 = (undefined, function (logic2, unify, t_2, sc, t, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, callPrefix, lambda$here;
  tmp = logic2.Cons(t, logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tt, logic2.Nil);
  tmp10 = logic2.Cons(tmp8, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  callPrefix = runtime.safeCall(unify(t_2, tmp11));
  lambda$here = lambda$69(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$67 = (undefined, function (logic2, unify, t_1, t_2, sc, t) {
  return (tt) => {
    return lambda2(logic2, unify, t_1, t_2, sc, t, tt)
  }
});
lambda2 = (undefined, function (logic2, unify, t_1, t_2, sc, t, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, callPrefix, lambda$here;
  tmp = logic2.Cons(t, logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tt, logic2.Nil);
  tmp10 = logic2.Cons(tmp8, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  callPrefix = runtime.safeCall(unify(t_1, tmp11));
  lambda$here = lambda$68(logic2, unify, t_2, sc, t, tt);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$66 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return (t) => {
    let lambda$here;
    lambda$here = lambda$67(logic2, unify, t_1, t_2, sc, t);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$61 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return () => {
    let lambda$here;
    lambda$here = lambda$66(logic2, unify, exists_, t_1, t_2, sc);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$65 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$64 = (undefined, function (logic2, unify, t_2, sc, p1, p5, tt) {
  return () => {
    return lambda3(logic2, unify, t_2, sc, p1, p5, tt)
  }
});
lambda3 = (undefined, function (logic2, unify, t_2, sc, p1, p5, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(p5, tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(p1, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tt, logic2.Nil);
  tmp16 = logic2.Cons(tmp14, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_2, tmp17));
  lambda$here = lambda$65(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$63 = (undefined, function (logic2, unify, t_1, t_2, sc, p1, p5) {
  return (tt) => {
    return lambda4(logic2, unify, t_1, t_2, sc, p1, p5, tt)
  }
});
lambda4 = (undefined, function (logic2, unify, t_1, t_2, sc, p1, p5, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(p5, tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(p1, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tt, logic2.Nil);
  tmp16 = logic2.Cons(tmp14, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_1, tmp17));
  lambda$here = lambda$64(logic2, unify, t_2, sc, p1, p5, tt);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$62 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p1) {
  return (p5) => {
    let lambda$here;
    lambda$here = lambda$63(logic2, unify, t_1, t_2, sc, p1, p5);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$60 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return (p1) => {
    let lambda$here;
    lambda$here = lambda$62(logic2, unify, exists_, t_1, t_2, sc, p1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$55 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return () => {
    return lambda5(logic2, unify, exists_, trail, t_1, t_2, sc)
  }
});
lambda$59 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$58 = (undefined, function (logic2, unify, t_2, sc, p1, p2, tt) {
  return () => {
    return lambda6(logic2, unify, t_2, sc, p1, p2, tt)
  }
});
lambda6 = (undefined, function (logic2, unify, t_2, sc, p1, p2, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(p2, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(p1, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tt, logic2.Nil);
  tmp16 = logic2.Cons(tmp14, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_2, tmp17));
  lambda$here = lambda$59(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$57 = (undefined, function (logic2, unify, t_1, t_2, sc, p1, p2) {
  return (tt) => {
    return lambda7(logic2, unify, t_1, t_2, sc, p1, p2, tt)
  }
});
lambda7 = (undefined, function (logic2, unify, t_1, t_2, sc, p1, p2, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(p2, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(p1, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tt, logic2.Nil);
  tmp16 = logic2.Cons(tmp14, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_1, tmp17));
  lambda$here = lambda$58(logic2, unify, t_2, sc, p1, p2, tt);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$56 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p1) {
  return (p2) => {
    let lambda$here;
    lambda$here = lambda$57(logic2, unify, t_1, t_2, sc, p1, p2);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$54 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return (p1) => {
    let lambda$here;
    lambda$here = lambda$56(logic2, unify, exists_, t_1, t_2, sc, p1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda5 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  let lambda$here, lambda$here1;
  lambda$here = lambda$61(logic2, unify, exists_, t_1, t_2, sc);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$60(logic2, unify, exists_, t_1, t_2, sc);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$49 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return () => {
    return lambda8(logic2, unify, exists_, trail, t_1, t_2, sc)
  }
});
lambda$53 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$52 = (undefined, function (logic2, unify, t_2, sc, l1, p4, tt) {
  return () => {
    return lambda9(logic2, unify, t_2, sc, l1, p4, tt)
  }
});
lambda9 = (undefined, function (logic2, unify, t_2, sc, l1, p4, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(p4, tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tt, logic2.Nil);
  tmp13 = logic2.Cons(tmp11, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tmp14, logic2.Nil);
  tmp16 = logic2.Cons(l1, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_2, tmp17));
  lambda$here = lambda$53(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$51 = (undefined, function (logic2, unify, t_1, t_2, sc, l1, p4) {
  return (tt) => {
    return lambda10(logic2, unify, t_1, t_2, sc, l1, p4, tt)
  }
});
lambda10 = (undefined, function (logic2, unify, t_1, t_2, sc, l1, p4, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(p4, tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tt, logic2.Nil);
  tmp13 = logic2.Cons(tmp11, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tmp14, logic2.Nil);
  tmp16 = logic2.Cons(l1, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_1, tmp17));
  lambda$here = lambda$52(logic2, unify, t_2, sc, l1, p4, tt);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$50 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, l1) {
  return (p4) => {
    let lambda$here;
    lambda$here = lambda$51(logic2, unify, t_1, t_2, sc, l1, p4);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$48 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return (l1) => {
    let lambda$here;
    lambda$here = lambda$50(logic2, unify, exists_, t_1, t_2, sc, l1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda8 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  let lambda$here, lambda$here1;
  lambda$here = lambda$55(logic2, unify, exists_, trail, t_1, t_2, sc);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$54(logic2, unify, exists_, t_1, t_2, sc);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$43 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return () => {
    return lambda11(logic2, unify, exists_, trail, t_1, t_2, sc)
  }
});
lambda$47 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$46 = (undefined, function (logic2, unify, t_2, sc, l1, p1, tt) {
  return () => {
    return lambda12(logic2, unify, t_2, sc, l1, p1, tt)
  }
});
lambda12 = (undefined, function (logic2, unify, t_2, sc, l1, p1, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(p1, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tt, logic2.Nil);
  tmp13 = logic2.Cons(tmp11, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tmp14, logic2.Nil);
  tmp16 = logic2.Cons(l1, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_2, tmp17));
  lambda$here = lambda$47(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$45 = (undefined, function (logic2, unify, t_1, t_2, sc, l1, p1) {
  return (tt) => {
    return lambda13(logic2, unify, t_1, t_2, sc, l1, p1, tt)
  }
});
lambda13 = (undefined, function (logic2, unify, t_1, t_2, sc, l1, p1, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(p1, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tt, logic2.Nil);
  tmp13 = logic2.Cons(tmp11, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tmp14, logic2.Nil);
  tmp16 = logic2.Cons(l1, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_1, tmp17));
  lambda$here = lambda$46(logic2, unify, t_2, sc, l1, p1, tt);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$44 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, l1) {
  return (p1) => {
    let lambda$here;
    lambda$here = lambda$45(logic2, unify, t_1, t_2, sc, l1, p1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$42 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return (l1) => {
    let lambda$here;
    lambda$here = lambda$44(logic2, unify, exists_, t_1, t_2, sc, l1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda11 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  let lambda$here, lambda$here1;
  lambda$here = lambda$49(logic2, unify, exists_, trail, t_1, t_2, sc);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$48(logic2, unify, exists_, t_1, t_2, sc);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$37 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return () => {
    return lambda14(logic2, unify, exists_, trail, t_1, t_2, sc)
  }
});
lambda$41 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$40 = (undefined, function (logic2, unify, t_2, sc, l1, l2, tt) {
  return () => {
    return lambda15(logic2, unify, t_2, sc, l1, l2, tt)
  }
});
lambda15 = (undefined, function (logic2, unify, t_2, sc, l1, l2, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tt, logic2.Nil);
  tmp10 = logic2.Cons(tmp8, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(l2, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tmp14, logic2.Nil);
  tmp16 = logic2.Cons(l1, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_2, tmp17));
  lambda$here = lambda$41(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$39 = (undefined, function (logic2, unify, t_1, t_2, sc, l1, l2) {
  return (tt) => {
    return lambda16(logic2, unify, t_1, t_2, sc, l1, l2, tt)
  }
});
lambda16 = (undefined, function (logic2, unify, t_1, t_2, sc, l1, l2, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tt, logic2.Nil);
  tmp10 = logic2.Cons(tmp8, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(l2, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tmp14, logic2.Nil);
  tmp16 = logic2.Cons(l1, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_1, tmp17));
  lambda$here = lambda$40(logic2, unify, t_2, sc, l1, l2, tt);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$38 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, l1) {
  return (l2) => {
    let lambda$here;
    lambda$here = lambda$39(logic2, unify, t_1, t_2, sc, l1, l2);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$36 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return (l1) => {
    let lambda$here;
    lambda$here = lambda$38(logic2, unify, exists_, t_1, t_2, sc, l1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda14 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  let lambda$here, lambda$here1;
  lambda$here = lambda$43(logic2, unify, exists_, trail, t_1, t_2, sc);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$42(logic2, unify, exists_, t_1, t_2, sc);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$32 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return () => {
    return lambda17(logic2, unify, exists_, trail, t_1, t_2, sc)
  }
});
lambda$35 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$34 = (undefined, function (logic2, unify, t_2, sc, t, tt) {
  return () => {
    return lambda18(logic2, unify, t_2, sc, t, tt)
  }
});
lambda18 = (undefined, function (logic2, unify, t_2, sc, t, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, callPrefix, lambda$here;
  tmp = logic2.Cons(t, logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tt, logic2.Nil);
  tmp10 = logic2.Cons(tmp8, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  callPrefix = runtime.safeCall(unify(t_2, tmp11));
  lambda$here = lambda$35(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$33 = (undefined, function (logic2, unify, t_1, t_2, sc, t) {
  return (tt) => {
    return lambda19(logic2, unify, t_1, t_2, sc, t, tt)
  }
});
lambda19 = (undefined, function (logic2, unify, t_1, t_2, sc, t, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, callPrefix, lambda$here;
  tmp = logic2.Cons(t, logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tt, logic2.Nil);
  tmp10 = logic2.Cons(tmp8, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  callPrefix = runtime.safeCall(unify(t_1, tmp11));
  lambda$here = lambda$34(logic2, unify, t_2, sc, t, tt);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$31 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return (t) => {
    let lambda$here;
    lambda$here = lambda$33(logic2, unify, t_1, t_2, sc, t);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda17 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  let lambda$here, lambda$here1;
  lambda$here = lambda$37(logic2, unify, exists_, trail, t_1, t_2, sc);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$36(logic2, unify, exists_, t_1, t_2, sc);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$26 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return () => {
    return lambda20(logic2, unify, exists_, trail, t_1, t_2, sc)
  }
});
lambda$30 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$29 = (undefined, function (logic2, unify, t_2, sc, p1, p5, tt) {
  return () => {
    return lambda21(logic2, unify, t_2, sc, p1, p5, tt)
  }
});
lambda21 = (undefined, function (logic2, unify, t_2, sc, p1, p5, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(p5, tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(p1, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tt, logic2.Nil);
  tmp16 = logic2.Cons(tmp14, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_2, tmp17));
  lambda$here = lambda$30(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$28 = (undefined, function (logic2, unify, t_1, t_2, sc, p1, p5) {
  return (tt) => {
    return lambda22(logic2, unify, t_1, t_2, sc, p1, p5, tt)
  }
});
lambda22 = (undefined, function (logic2, unify, t_1, t_2, sc, p1, p5, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(p5, tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(p1, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tt, logic2.Nil);
  tmp16 = logic2.Cons(tmp14, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_1, tmp17));
  lambda$here = lambda$29(logic2, unify, t_2, sc, p1, p5, tt);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$27 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p1) {
  return (p5) => {
    let lambda$here;
    lambda$here = lambda$28(logic2, unify, t_1, t_2, sc, p1, p5);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$25 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return (p1) => {
    let lambda$here;
    lambda$here = lambda$27(logic2, unify, exists_, t_1, t_2, sc, p1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda20 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  let lambda$here, lambda$here1;
  lambda$here = lambda$32(logic2, unify, exists_, trail, t_1, t_2, sc);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$31(logic2, unify, exists_, t_1, t_2, sc);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$20 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return () => {
    return lambda23(logic2, unify, exists_, trail, t_1, t_2, sc)
  }
});
lambda$24 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$23 = (undefined, function (logic2, unify, t_2, sc, p1, p2, tt) {
  return () => {
    return lambda24(logic2, unify, t_2, sc, p1, p2, tt)
  }
});
lambda24 = (undefined, function (logic2, unify, t_2, sc, p1, p2, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(p2, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(p1, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tt, logic2.Nil);
  tmp16 = logic2.Cons(tmp14, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_2, tmp17));
  lambda$here = lambda$24(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$22 = (undefined, function (logic2, unify, t_1, t_2, sc, p1, p2) {
  return (tt) => {
    return lambda25(logic2, unify, t_1, t_2, sc, p1, p2, tt)
  }
});
lambda25 = (undefined, function (logic2, unify, t_1, t_2, sc, p1, p2, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(p2, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(p1, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tt, logic2.Nil);
  tmp16 = logic2.Cons(tmp14, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_1, tmp17));
  lambda$here = lambda$23(logic2, unify, t_2, sc, p1, p2, tt);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$21 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, p1) {
  return (p2) => {
    let lambda$here;
    lambda$here = lambda$22(logic2, unify, t_1, t_2, sc, p1, p2);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$19 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return (p1) => {
    let lambda$here;
    lambda$here = lambda$21(logic2, unify, exists_, t_1, t_2, sc, p1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda23 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  let lambda$here, lambda$here1;
  lambda$here = lambda$26(logic2, unify, exists_, trail, t_1, t_2, sc);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$25(logic2, unify, exists_, t_1, t_2, sc);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$14 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return () => {
    return lambda26(logic2, unify, exists_, trail, t_1, t_2, sc)
  }
});
lambda$18 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$17 = (undefined, function (logic2, unify, t_2, sc, l1, p4, tt) {
  return () => {
    return lambda27(logic2, unify, t_2, sc, l1, p4, tt)
  }
});
lambda27 = (undefined, function (logic2, unify, t_2, sc, l1, p4, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(p4, tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tt, logic2.Nil);
  tmp13 = logic2.Cons(tmp11, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tmp14, logic2.Nil);
  tmp16 = logic2.Cons(l1, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_2, tmp17));
  lambda$here = lambda$18(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$16 = (undefined, function (logic2, unify, t_1, t_2, sc, l1, p4) {
  return (tt) => {
    return lambda28(logic2, unify, t_1, t_2, sc, l1, p4, tt)
  }
});
lambda28 = (undefined, function (logic2, unify, t_1, t_2, sc, l1, p4, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(p4, tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tt, logic2.Nil);
  tmp13 = logic2.Cons(tmp11, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tmp14, logic2.Nil);
  tmp16 = logic2.Cons(l1, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_1, tmp17));
  lambda$here = lambda$17(logic2, unify, t_2, sc, l1, p4, tt);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$15 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, l1) {
  return (p4) => {
    let lambda$here;
    lambda$here = lambda$16(logic2, unify, t_1, t_2, sc, l1, p4);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$13 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return (l1) => {
    let lambda$here;
    lambda$here = lambda$15(logic2, unify, exists_, t_1, t_2, sc, l1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda26 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  let lambda$here, lambda$here1;
  lambda$here = lambda$20(logic2, unify, exists_, trail, t_1, t_2, sc);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$19(logic2, unify, exists_, t_1, t_2, sc);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$8 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return () => {
    return lambda29(logic2, unify, exists_, trail, t_1, t_2, sc)
  }
});
lambda$12 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$11 = (undefined, function (logic2, unify, t_2, sc, l1, p1, tt) {
  return () => {
    return lambda30(logic2, unify, t_2, sc, l1, p1, tt)
  }
});
lambda30 = (undefined, function (logic2, unify, t_2, sc, l1, p1, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(p1, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tt, logic2.Nil);
  tmp13 = logic2.Cons(tmp11, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tmp14, logic2.Nil);
  tmp16 = logic2.Cons(l1, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_2, tmp17));
  lambda$here = lambda$12(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$10 = (undefined, function (logic2, unify, t_1, t_2, sc, l1, p1) {
  return (tt) => {
    return lambda31(logic2, unify, t_1, t_2, sc, l1, p1, tt)
  }
});
lambda31 = (undefined, function (logic2, unify, t_1, t_2, sc, l1, p1, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tmp8, logic2.Nil);
  tmp10 = logic2.Cons(p1, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tt, logic2.Nil);
  tmp13 = logic2.Cons(tmp11, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tmp14, logic2.Nil);
  tmp16 = logic2.Cons(l1, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_1, tmp17));
  lambda$here = lambda$11(logic2, unify, t_2, sc, l1, p1, tt);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$9 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, l1) {
  return (p1) => {
    let lambda$here;
    lambda$here = lambda$10(logic2, unify, t_1, t_2, sc, l1, p1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$7 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return (l1) => {
    let lambda$here;
    lambda$here = lambda$9(logic2, unify, exists_, t_1, t_2, sc, l1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda29 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  let lambda$here, lambda$here1;
  lambda$here = lambda$14(logic2, unify, exists_, trail, t_1, t_2, sc);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$13(logic2, unify, exists_, t_1, t_2, sc);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$2 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  return () => {
    return lambda32(logic2, unify, exists_, trail, t_1, t_2, sc)
  }
});
lambda$6 = (undefined, function (sc) {
  return () => {
    return runtime.safeCall(sc())
  }
});
lambda$5 = (undefined, function (logic2, unify, t_2, sc, l1, l2, tt) {
  return () => {
    return lambda33(logic2, unify, t_2, sc, l1, l2, tt)
  }
});
lambda33 = (undefined, function (logic2, unify, t_2, sc, l1, l2, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tt, logic2.Nil);
  tmp10 = logic2.Cons(tmp8, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(l2, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tmp14, logic2.Nil);
  tmp16 = logic2.Cons(l1, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_2, tmp17));
  lambda$here = lambda$6(sc);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$4 = (undefined, function (logic2, unify, t_1, t_2, sc, l1, l2) {
  return (tt) => {
    return lambda34(logic2, unify, t_1, t_2, sc, l1, l2, tt)
  }
});
lambda34 = (undefined, function (logic2, unify, t_1, t_2, sc, l1, l2, tt) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, callPrefix, lambda$here;
  tmp = logic2.Cons(logic2[con_nil_s$accessorSymbol], logic2.Nil);
  tmp1 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp);
  tmp2 = logic2.STR(logic2[cons_s$accessorSymbol], tmp1);
  tmp3 = logic2.Cons(tmp2, logic2.Nil);
  tmp4 = logic2.Cons(logic2[con_x_s$accessorSymbol], tmp3);
  tmp5 = logic2.STR(logic2[cons_s$accessorSymbol], tmp4);
  tmp6 = logic2.Cons(tmp5, logic2.Nil);
  tmp7 = logic2.Cons(logic2[con_o_s$accessorSymbol], tmp6);
  tmp8 = logic2.STR(logic2[cons_s$accessorSymbol], tmp7);
  tmp9 = logic2.Cons(tt, logic2.Nil);
  tmp10 = logic2.Cons(tmp8, tmp9);
  tmp11 = logic2.STR(logic2[cons_s$accessorSymbol], tmp10);
  tmp12 = logic2.Cons(tmp11, logic2.Nil);
  tmp13 = logic2.Cons(l2, tmp12);
  tmp14 = logic2.STR(logic2[cons_s$accessorSymbol], tmp13);
  tmp15 = logic2.Cons(tmp14, logic2.Nil);
  tmp16 = logic2.Cons(l1, tmp15);
  tmp17 = logic2.STR(logic2[cons_s$accessorSymbol], tmp16);
  callPrefix = runtime.safeCall(unify(t_1, tmp17));
  lambda$here = lambda$5(logic2, unify, t_2, sc, l1, l2, tt);
  return runtime.safeCall(callPrefix(lambda$here))
});
lambda$3 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc, l1) {
  return (l2) => {
    let lambda$here;
    lambda$here = lambda$4(logic2, unify, t_1, t_2, sc, l1, l2);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda$1 = (undefined, function (logic2, unify, exists_, t_1, t_2, sc) {
  return (l1) => {
    let lambda$here;
    lambda$here = lambda$3(logic2, unify, exists_, t_1, t_2, sc, l1);
    return runtime.safeCall(exists_(lambda$here))
  }
});
lambda32 = (undefined, function (logic2, unify, exists_, trail, t_1, t_2, sc) {
  let lambda$here, lambda$here1;
  lambda$here = lambda$8(logic2, unify, exists_, trail, t_1, t_2, sc);
  runtime.safeCall(trail(lambda$here));
  lambda$here1 = lambda$7(logic2, unify, exists_, t_1, t_2, sc);
  return runtime.safeCall(exists_(lambda$here1))
});
lambda$ = (undefined, function (logic2, sc, ts, ss) {
  return () => {
    return lambda(logic2, sc, ts, ss)
  }
});
lambda = (undefined, function (logic2, sc, ts, ss) {
  return logic2[unify1_unifys$accessorSymbol](1, ts, ss, sc)
});
(class logic {
  static {
    logic1 = this
  }
  static #global_trail;
  static #trail_counter;
  static #found;
  static #cons_s;
  static #x_s;
  static #nil_s;
  static #o_s;
  static #s_s;
  static #con_o_s;
  static #con_nil_s;
  static #con_x_s;
  static get [found$accessorSymbol]() { return logic.#found; }
  static set [found$accessorSymbol](value) { logic.#found = value; }
  static get [cons_s$accessorSymbol]() { return logic.#cons_s; }
  static set [cons_s$accessorSymbol](value) { logic.#cons_s = value; }
  static get [s_s$accessorSymbol]() { return logic.#s_s; }
  static set [s_s$accessorSymbol](value) { logic.#s_s = value; }
  static get [con_o_s$accessorSymbol]() { return logic.#con_o_s; }
  static set [con_o_s$accessorSymbol](value) { logic.#con_o_s = value; }
  static get [con_nil_s$accessorSymbol]() { return logic.#con_nil_s; }
  static set [con_nil_s$accessorSymbol](value) { logic.#con_nil_s = value; }
  static get [con_x_s$accessorSymbol]() { return logic.#con_x_s; }
  static set [con_x_s$accessorSymbol](value) { logic.#con_x_s = value; }
  static get [unify1_unifys$accessorSymbol]() { return logic.#unify1_unifys; }
  static get [trail$accessorSymbol]() { return logic.#trail; }
  static get [unify$accessorSymbol]() { return logic.#unify; }
  static get [exists_$accessorSymbol]() { return logic.#exists_; }
  static get [solitaire$accessorSymbol]() { return logic.#solitaire; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    logic.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        logic.Cons.class = this
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
        logic.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    logic.Some = function Some(value) {
      return globalThis.Object.freeze(new Some.class(value));
    };
    (class Some {
      static {
        logic.Some.class = this
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
        logic.None = this;
        Object.defineProperty(this, "class", {
          value: None
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"];
    });
    logic.Ref = function Ref(value) {
      return globalThis.Object.freeze(new Ref.class(value));
    };
    (class Ref {
      static {
        logic.Ref.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["value"]];
    });
    logic.STR = function STR(f, ts) {
      return globalThis.Object.freeze(new STR.class(f, ts));
    };
    (class STR {
      static {
        logic.STR.class = this
      }
      constructor(f, ts) {
        this.f = f;
        this.ts = ts;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "STR", ["f", "ts"]];
    });
    logic.INT = function INT(n) {
      return globalThis.Object.freeze(new INT.class(n));
    };
    (class INT {
      static {
        logic.INT.class = this
      }
      constructor(n) {
        this.n = n;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "INT", ["n"]];
    });
    logic.CON = function CON(s) {
      return globalThis.Object.freeze(new CON.class(s));
    };
    (class CON {
      static {
        logic.CON.class = this
      }
      constructor(s) {
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CON", ["s"]];
    });
    logic.REF = function REF(r) {
      return globalThis.Object.freeze(new REF.class(r));
    };
    (class REF {
      static {
        logic.REF.class = this
      }
      constructor(r) {
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "REF", ["r"]];
    });
    tmp = new logic.Ref.class(logic.Nil);
    logic.#global_trail = tmp;
    tmp1 = new logic.Ref.class(0);
    logic.#trail_counter = tmp1;
    tmp2 = new logic.Ref.class(false);
    logic.#found = tmp2;
    logic.#cons_s = "cons";
    logic.#x_s = "x";
    logic.#nil_s = "nil";
    logic.#o_s = "o";
    logic.#s_s = "s";
    tmp3 = logic.CON(logic.#o_s);
    logic.#con_o_s = tmp3;
    tmp4 = logic.CON(logic.#nil_s);
    logic.#con_nil_s = tmp4;
    tmp5 = logic.CON(logic.#x_s);
    logic.#con_x_s = tmp5;
  }
  static #unify1_unifys(id, param0, param1, param2) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let scrut, scrut1, scrut2, arg$INT$0$, arg$INT$0$1, arg$CON$0$, arg$CON$0$1, arg$STR$0$, arg$STR$1$, arg$STR$0$1, arg$STR$1$1, arg$REF$0$, arg$REF$0$1;
            if (param0 instanceof logic.REF.class) {
              arg$REF$0$1 = param0.r;
              return logic.#unify_REF(arg$REF$0$1, param1)(param2)
            }
            if (param1 instanceof logic.REF.class) {
              arg$REF$0$ = param1.r;
              return logic.#unify_REF(arg$REF$0$, param0)(param2)
            }
            if (param0 instanceof logic.STR.class) {
              arg$STR$0$ = param0.f;
              arg$STR$1$ = param0.ts;
              if (param1 instanceof logic.STR.class) {
                arg$STR$0$1 = param1.f;
                arg$STR$1$1 = param1.ts;
                scrut = arg$STR$0$ == arg$STR$0$1;
                if (scrut === true) {
                  param0 = arg$STR$1$;
                  param1 = arg$STR$1$1;
                  id = 1;
                  continue loopLabel
                }
                return runtime.Unit;
              }
              return runtime.Unit;
            } else if (param0 instanceof logic.CON.class) {
              arg$CON$0$ = param0.s;
              if (param1 instanceof logic.CON.class) {
                arg$CON$0$1 = param1.s;
                scrut1 = arg$CON$0$ == arg$CON$0$1;
                if (scrut1 === true) {
                  return runtime.safeCall(param2())
                }
                return runtime.Unit;
              }
              return runtime.Unit;
            } else if (param0 instanceof logic.INT.class) {
              arg$INT$0$ = param0.n;
              if (param1 instanceof logic.INT.class) {
                arg$INT$0$1 = param1.n;
                scrut2 = arg$INT$0$ == arg$INT$0$1;
                if (scrut2 === true) {
                  return runtime.safeCall(param2())
                }
                return runtime.Unit;
              }
              return runtime.Unit;
            }
            return runtime.Unit;
          }
        case 1:
          {
            let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
            if (param0 instanceof logic.Nil.class) {
              if (param1 instanceof logic.Nil.class) {
                return runtime.safeCall(param2())
              }
              return runtime.Unit;
            } else if (param0 instanceof logic.Cons.class) {
              arg$Cons$0$ = param0.head;
              arg$Cons$1$ = param0.tail;
              if (param1 instanceof logic.Cons.class) {
                arg$Cons$0$1 = param1.head;
                arg$Cons$1$1 = param1.tail;
                tmp = logic.#deref(arg$Cons$0$);
                tmp1 = logic.#deref(arg$Cons$0$1);
                param0 = tmp;
                param1 = tmp1;
                param2 = lambda$(logic, param2, arg$Cons$1$, arg$Cons$1$1);
                id = 0;
                continue loopLabel
              }
              return runtime.Unit;
            }
            return runtime.Unit;
          }
      }
    }
  }
  static #unwind_trail(n, tr) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      scrut = n == 0;
      if (scrut === true) {
        return tr
      }
      if (tr instanceof logic.Cons.class) {
        arg$Cons$0$ = tr.head;
        arg$Cons$1$ = tr.tail;
        arg$Cons$0$.value = logic.None;
        tmp = n - 1;
        n = tmp;
        tr = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #reset_trail() {
    logic.#global_trail.value = logic.Nil;
    return runtime.Unit
  }
  static #trail(func) {
    let tc0, tmp, tmp1;
    tc0 = logic.#trail_counter.value;
    runtime.safeCall(func());
    tmp = logic.#trail_counter.value - tc0;
    tmp1 = logic.#unwind_trail(tmp, logic.#global_trail.value);
    logic.#global_trail.value = tmp1;
    logic.#trail_counter.value = tc0;
    return runtime.Unit
  }
  static #bind(r, t) {
    let tmp, tmp1, tmp2;
    tmp = logic.Some(t);
    r.value = tmp;
    tmp1 = logic.Cons(r, logic.#global_trail.value);
    logic.#global_trail.value = tmp1;
    tmp2 = logic.#trail_counter.value + 1;
    logic.#trail_counter.value = tmp2;
    return runtime.Unit
  }
  static #same_ref(r, t) {
    let arg$REF$0$;
    if (t instanceof logic.REF.class) {
      arg$REF$0$ = t.r;
      return r === arg$REF$0$
    }
    return false;
  }
  static #occurs_check(r) {
    return (t) => {
      return oc_ocs(0, logic, r, t)
    }
  }
  static #deref(t) {
    loopLabel: while (true) {
      let scrut, arg$REF$0$, arg$Some$0$;
      if (t instanceof logic.REF.class) {
        arg$REF$0$ = t.r;
        scrut = arg$REF$0$.value;
        if (scrut instanceof logic.Some.class) {
          arg$Some$0$ = scrut.value;
          t = arg$Some$0$;
          continue loopLabel
        }
        return t;
      }
      return t;
    }
  }
  static #unify1(p1, p2) {
    return (sc) => {
      return logic.#unify1_unifys(0, p1, p2, sc)
    }
  }
  static #unifys(l1, l2) {
    return (sc) => {
      return logic.#unify1_unifys(1, l1, l2, sc)
    }
  }
  static #unify_REF(r, t) {
    return (sc) => {
      let scrut, scrut1;
      scrut = logic.#same_ref(r, t);
      if (scrut === true) {
        return runtime.safeCall(sc())
      }
      scrut1 = logic.#occurs_check(r)(t);
      if (scrut1 === true) {
        logic.#bind(r, t);
        return runtime.safeCall(sc())
      }
      return runtime.Unit;
    }
  }
  static #unify(s, t) {
    return (sc) => {
      let scrut, tmp, tmp1;
      scrut = logic.#found.value;
      if (scrut === true) {
        return runtime.Unit
      }
      tmp = logic.#deref(s);
      tmp1 = logic.#deref(t);
      return logic.#unify1(tmp, tmp1)(sc);
    }
  }
  static #exists_(sc) {
    let tmp, tmp1;
    tmp = new logic.Ref.class(logic.None);
    tmp1 = logic.REF(tmp);
    return runtime.safeCall(sc(tmp1))
  }
  static #move_horiz(unify, exists_, trail) {
    return (t_1, t_2) => {
      return (sc) => {
        runtime.safeCall(trail(undefined));
        return runtime.safeCall(exists_(undefined))
      }
    }
  }
  static #rotate(unify, exists_, trail) {
    return (t_1, t_2) => {
      return (sc) => {
        return runtime.safeCall(exists_(undefined))
      }
    }
  }
  static #move(unify, exists_, trail) {
    return (t_1, t_2) => {
      return (sc) => {
        runtime.safeCall(trail(undefined));
        return runtime.safeCall(exists_(undefined))
      }
    }
  }
  static #solitaire(unify, exists_, trail) {
    return (t_1, t_2, t_3) => {
      return (sc) => {
        let lambda$here, lambda$here1;
        lambda$here = lambda$110(logic, unify, exists_, t_1, t_2, t_3, sc);
        runtime.safeCall(trail(lambda$here));
        lambda$here1 = lambda$109(logic, unify, exists_, trail, t_1, t_2, t_3, sc);
        return runtime.safeCall(exists_(lambda$here1))
      }
    }
  }
  static #solution2(unify, exists_, trail) {
    return (t_1) => {
      return (sc) => {
        return runtime.safeCall(exists_(undefined))
      }
    }
  }
  static main() {
    let lambda$here;
    logic.#found.value = false;
    logic.#reset_trail();
    logic.#trail_counter.value = 0;
    lambda$here = lambda$124(logic);
    logic.#exists_(lambda$here);
    return logic.#found.value
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "logic"];
});
export { logic1 as _$_modulePrivate_$_logic };
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
export { lambda20 as _$_modulePrivate_$_lambda20 };
export { lambda21 as _$_modulePrivate_$_lambda21 };
export { lambda22 as _$_modulePrivate_$_lambda22 };
export { lambda23 as _$_modulePrivate_$_lambda23 };
export { lambda24 as _$_modulePrivate_$_lambda24 };
export { lambda25 as _$_modulePrivate_$_lambda25 };
export { lambda26 as _$_modulePrivate_$_lambda26 };
export { lambda27 as _$_modulePrivate_$_lambda27 };
export { lambda28 as _$_modulePrivate_$_lambda28 };
export { lambda29 as _$_modulePrivate_$_lambda29 };
export { lambda30 as _$_modulePrivate_$_lambda30 };
export { lambda31 as _$_modulePrivate_$_lambda31 };
export { lambda32 as _$_modulePrivate_$_lambda32 };
export { lambda33 as _$_modulePrivate_$_lambda33 };
export { lambda34 as _$_modulePrivate_$_lambda34 };
export { lambda35 as _$_modulePrivate_$_lambda35 };
export { lambda36 as _$_modulePrivate_$_lambda36 };
export { lambda37 as _$_modulePrivate_$_lambda37 };
export { lambda38 as _$_modulePrivate_$_lambda38 };
export { lambda39 as _$_modulePrivate_$_lambda39 };
export { lambda40 as _$_modulePrivate_$_lambda40 };
export { lambda41 as _$_modulePrivate_$_lambda41 };
export { lambda42 as _$_modulePrivate_$_lambda42 };
export { lambda43 as _$_modulePrivate_$_lambda43 };
export { lambda44 as _$_modulePrivate_$_lambda44 };
export { lambda45 as _$_modulePrivate_$_lambda45 };
export { lambda46 as _$_modulePrivate_$_lambda46 };
export { lambda47 as _$_modulePrivate_$_lambda47 };
export { lambda48 as _$_modulePrivate_$_lambda48 };
export { lambda49 as _$_modulePrivate_$_lambda49 };
export { lambda50 as _$_modulePrivate_$_lambda50 };
export { lambda51 as _$_modulePrivate_$_lambda51 };
export { lambda52 as _$_modulePrivate_$_lambda52 };
export { lambda53 as _$_modulePrivate_$_lambda53 };
export { lambda54 as _$_modulePrivate_$_lambda54 };
export { lambda55 as _$_modulePrivate_$_lambda55 };
export { lambda56 as _$_modulePrivate_$_lambda56 };
export { lambda57 as _$_modulePrivate_$_lambda57 };
export { lambda58 as _$_modulePrivate_$_lambda58 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
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
export { lambda$14 as _$_modulePrivate_$_lambda$14 };
export { lambda$15 as _$_modulePrivate_$_lambda$15 };
export { lambda$16 as _$_modulePrivate_$_lambda$16 };
export { lambda$17 as _$_modulePrivate_$_lambda$17 };
export { lambda$18 as _$_modulePrivate_$_lambda$18 };
export { lambda$19 as _$_modulePrivate_$_lambda$19 };
export { lambda$20 as _$_modulePrivate_$_lambda$20 };
export { lambda$21 as _$_modulePrivate_$_lambda$21 };
export { lambda$22 as _$_modulePrivate_$_lambda$22 };
export { lambda$23 as _$_modulePrivate_$_lambda$23 };
export { lambda$24 as _$_modulePrivate_$_lambda$24 };
export { lambda$25 as _$_modulePrivate_$_lambda$25 };
export { lambda$26 as _$_modulePrivate_$_lambda$26 };
export { lambda$27 as _$_modulePrivate_$_lambda$27 };
export { lambda$28 as _$_modulePrivate_$_lambda$28 };
export { lambda$29 as _$_modulePrivate_$_lambda$29 };
export { lambda$30 as _$_modulePrivate_$_lambda$30 };
export { lambda$31 as _$_modulePrivate_$_lambda$31 };
export { lambda$32 as _$_modulePrivate_$_lambda$32 };
export { lambda$33 as _$_modulePrivate_$_lambda$33 };
export { lambda$34 as _$_modulePrivate_$_lambda$34 };
export { lambda$35 as _$_modulePrivate_$_lambda$35 };
export { lambda$36 as _$_modulePrivate_$_lambda$36 };
export { lambda$37 as _$_modulePrivate_$_lambda$37 };
export { lambda$38 as _$_modulePrivate_$_lambda$38 };
export { lambda$39 as _$_modulePrivate_$_lambda$39 };
export { lambda$40 as _$_modulePrivate_$_lambda$40 };
export { lambda$41 as _$_modulePrivate_$_lambda$41 };
export { lambda$42 as _$_modulePrivate_$_lambda$42 };
export { lambda$43 as _$_modulePrivate_$_lambda$43 };
export { lambda$44 as _$_modulePrivate_$_lambda$44 };
export { lambda$45 as _$_modulePrivate_$_lambda$45 };
export { lambda$46 as _$_modulePrivate_$_lambda$46 };
export { lambda$47 as _$_modulePrivate_$_lambda$47 };
export { lambda$48 as _$_modulePrivate_$_lambda$48 };
export { lambda$49 as _$_modulePrivate_$_lambda$49 };
export { lambda$50 as _$_modulePrivate_$_lambda$50 };
export { lambda$51 as _$_modulePrivate_$_lambda$51 };
export { lambda$52 as _$_modulePrivate_$_lambda$52 };
export { lambda$53 as _$_modulePrivate_$_lambda$53 };
export { lambda$54 as _$_modulePrivate_$_lambda$54 };
export { lambda$55 as _$_modulePrivate_$_lambda$55 };
export { lambda$56 as _$_modulePrivate_$_lambda$56 };
export { lambda$57 as _$_modulePrivate_$_lambda$57 };
export { lambda$58 as _$_modulePrivate_$_lambda$58 };
export { lambda$59 as _$_modulePrivate_$_lambda$59 };
export { lambda$60 as _$_modulePrivate_$_lambda$60 };
export { lambda$61 as _$_modulePrivate_$_lambda$61 };
export { lambda$62 as _$_modulePrivate_$_lambda$62 };
export { lambda$63 as _$_modulePrivate_$_lambda$63 };
export { lambda$64 as _$_modulePrivate_$_lambda$64 };
export { lambda$65 as _$_modulePrivate_$_lambda$65 };
export { lambda$66 as _$_modulePrivate_$_lambda$66 };
export { lambda$67 as _$_modulePrivate_$_lambda$67 };
export { lambda$68 as _$_modulePrivate_$_lambda$68 };
export { lambda$69 as _$_modulePrivate_$_lambda$69 };
export { lambda$70 as _$_modulePrivate_$_lambda$70 };
export { lambda$71 as _$_modulePrivate_$_lambda$71 };
export { lambda$72 as _$_modulePrivate_$_lambda$72 };
export { lambda$73 as _$_modulePrivate_$_lambda$73 };
export { lambda$74 as _$_modulePrivate_$_lambda$74 };
export { lambda$75 as _$_modulePrivate_$_lambda$75 };
export { lambda$76 as _$_modulePrivate_$_lambda$76 };
export { lambda$77 as _$_modulePrivate_$_lambda$77 };
export { lambda$78 as _$_modulePrivate_$_lambda$78 };
export { lambda$79 as _$_modulePrivate_$_lambda$79 };
export { lambda$80 as _$_modulePrivate_$_lambda$80 };
export { lambda$81 as _$_modulePrivate_$_lambda$81 };
export { lambda$82 as _$_modulePrivate_$_lambda$82 };
export { lambda$83 as _$_modulePrivate_$_lambda$83 };
export { lambda$84 as _$_modulePrivate_$_lambda$84 };
export { lambda$85 as _$_modulePrivate_$_lambda$85 };
export { lambda$86 as _$_modulePrivate_$_lambda$86 };
export { lambda$87 as _$_modulePrivate_$_lambda$87 };
export { lambda$88 as _$_modulePrivate_$_lambda$88 };
export { lambda$89 as _$_modulePrivate_$_lambda$89 };
export { lambda$90 as _$_modulePrivate_$_lambda$90 };
export { lambda$91 as _$_modulePrivate_$_lambda$91 };
export { lambda$92 as _$_modulePrivate_$_lambda$92 };
export { lambda$93 as _$_modulePrivate_$_lambda$93 };
export { lambda$94 as _$_modulePrivate_$_lambda$94 };
export { lambda$95 as _$_modulePrivate_$_lambda$95 };
export { lambda$96 as _$_modulePrivate_$_lambda$96 };
export { lambda$97 as _$_modulePrivate_$_lambda$97 };
export { lambda$98 as _$_modulePrivate_$_lambda$98 };
export { lambda$99 as _$_modulePrivate_$_lambda$99 };
export { lambda$100 as _$_modulePrivate_$_lambda$100 };
export { lambda$101 as _$_modulePrivate_$_lambda$101 };
export { lambda$102 as _$_modulePrivate_$_lambda$102 };
export { lambda$103 as _$_modulePrivate_$_lambda$103 };
export { lambda$104 as _$_modulePrivate_$_lambda$104 };
export { lambda$105 as _$_modulePrivate_$_lambda$105 };
export { lambda$106 as _$_modulePrivate_$_lambda$106 };
export { lambda$107 as _$_modulePrivate_$_lambda$107 };
export { lambda$108 as _$_modulePrivate_$_lambda$108 };
export { lambda$109 as _$_modulePrivate_$_lambda$109 };
export { lambda$110 as _$_modulePrivate_$_lambda$110 };
export { lambda$111 as _$_modulePrivate_$_lambda$111 };
export { lambda$112 as _$_modulePrivate_$_lambda$112 };
export { lambda$113 as _$_modulePrivate_$_lambda$113 };
export { lambda$114 as _$_modulePrivate_$_lambda$114 };
export { lambda$115 as _$_modulePrivate_$_lambda$115 };
export { lambda$116 as _$_modulePrivate_$_lambda$116 };
export { lambda$117 as _$_modulePrivate_$_lambda$117 };
export { lambda$118 as _$_modulePrivate_$_lambda$118 };
export { lambda$119 as _$_modulePrivate_$_lambda$119 };
export { lambda$120 as _$_modulePrivate_$_lambda$120 };
export { lambda$121 as _$_modulePrivate_$_lambda$121 };
export { lambda$122 as _$_modulePrivate_$_lambda$122 };
export { lambda$123 as _$_modulePrivate_$_lambda$123 };
export { lambda$124 as _$_modulePrivate_$_lambda$124 };
export { lambda$125 as _$_modulePrivate_$_lambda$125 };
export { oc_ocs as _$_modulePrivate_$_oc_ocs };
export default logic1;
