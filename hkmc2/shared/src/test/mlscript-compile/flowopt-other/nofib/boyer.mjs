const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
const apply_subst$accessorSymbol = globalThis.Symbol("apply_subst");
let quotient, if_, sub1, plus, f, implies, times, exp_, gcd_, difference, nlistp, one, remainder, four, and_, reverse_, greaterp, or_, odd_, two, lessp, cons, add1, divides, nilp, listp, consp, lesseqp, equal, append_, greatereqp, member, zerop, not_, iff, length_, even_, boyer1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda24, lambda25, lambda26, lambda27, lambda28, lambda29, lambda30, lambda31, lambda32, lambda33, lambda34, lambda35, lambda36, lambda37, lambda38, lambda39, lambda40, lambda41, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18, lambda$19, lambda$20, lambda$21, lambda$22, lambda$23, lambda$24, lambda$25, lambda$26, lambda$27, lambda$28, lambda$29, lambda$30, lambda$31, lambda$32, lambda$33, lambda$34;
lambda$34 = (undefined, function (boyer2, zero) {
  return () => {
    return lambda1(boyer2, zero)
  }
});
lambda1 = (undefined, function (boyer2, zero) {
  let tmp, tmp1, inlinedVal, tmp2, inlinedVal1;
  tmp = one(boyer2, zero);
  tmp2 = NofibPrelude.Cons(zero, NofibPrelude.Nil);
  inlinedVal1 = NofibPrelude.Lazy(lambda4);
  inlinedVal = boyer2.Fun(boyer2.ADD1, tmp2, inlinedVal1);
  tmp1 = globalThis.Object.freeze([
    tmp,
    inlinedVal
  ]);
  return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
});
lambda$33 = (undefined, function (boyer2, zero) {
  return () => {
    return lambda2(boyer2, zero)
  }
});
lambda2 = (undefined, function (boyer2, zero) {
  let tmp, tmp1, tmp2, inlinedVal, tmp3, inlinedVal1;
  tmp = two(boyer2, zero);
  tmp1 = one(boyer2, zero);
  tmp3 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
  inlinedVal1 = NofibPrelude.Lazy(lambda4);
  inlinedVal = boyer2.Fun(boyer2.ADD1, tmp3, inlinedVal1);
  tmp2 = globalThis.Object.freeze([
    tmp,
    inlinedVal
  ]);
  return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
});
lambda$32 = (undefined, function (boyer2, zero) {
  return () => {
    return lambda3(boyer2, zero)
  }
});
lambda3 = (undefined, function (boyer2, zero) {
  let tmp, tmp1, tmp2, inlinedVal, inlinedVal1, tmp3, inlinedVal2, tmp4, inlinedVal3;
  tmp = four(boyer2, zero);
  tmp1 = two(boyer2, zero);
  tmp4 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
  inlinedVal3 = NofibPrelude.Lazy(lambda4);
  inlinedVal = boyer2.Fun(boyer2.ADD1, tmp4, inlinedVal3);
  tmp3 = NofibPrelude.Cons(inlinedVal, NofibPrelude.Nil);
  inlinedVal2 = NofibPrelude.Lazy(lambda4);
  inlinedVal1 = boyer2.Fun(boyer2.ADD1, tmp3, inlinedVal2);
  tmp2 = globalThis.Object.freeze([
    tmp,
    inlinedVal1
  ]);
  return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
});
lambda4 = (undefined, function () {
  return NofibPrelude.Nil
});
lambda$31 = (undefined, function (boyer2, u, w, x, y, z) {
  return () => {
    return lambda5(boyer2, u, w, x, y, z)
  }
});
lambda5 = (undefined, function (boyer2, u, w, x, y, z) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = if_(boyer2, u, w, x, y, z, x, y, z);
  tmp1 = if_(boyer2, u, w, x, y, z, tmp, u, w);
  tmp2 = if_(boyer2, u, w, x, y, z, y, u, w);
  tmp3 = if_(boyer2, u, w, x, y, z, z, u, w);
  tmp4 = if_(boyer2, u, w, x, y, z, x, tmp2, tmp3);
  tmp5 = globalThis.Object.freeze([
    tmp1,
    tmp4
  ]);
  return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
});
lambda$30 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue) {
  return () => {
    return lambda6(boyer2, u, w, x, y, z, boyerFalse, boyerTrue)
  }
});
lambda6 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue) {
  let tmp, tmp1, tmp2;
  tmp = not_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, x);
  tmp1 = if_(boyer2, u, w, x, y, z, x, boyerFalse, boyerTrue);
  tmp2 = globalThis.Object.freeze([
    tmp,
    tmp1
  ]);
  return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
});
lambda$29 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue) {
  return () => {
    return lambda7(boyer2, u, w, x, y, z, boyerFalse, boyerTrue)
  }
});
lambda7 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = and_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, x, y);
  tmp1 = if_(boyer2, u, w, x, y, z, y, boyerTrue, boyerFalse);
  tmp2 = if_(boyer2, u, w, x, y, z, x, tmp1, boyerFalse);
  tmp3 = globalThis.Object.freeze([
    tmp,
    tmp2
  ]);
  return NofibPrelude.Cons(tmp3, NofibPrelude.Nil)
});
lambda$28 = (undefined, function (boyer2, x, y, z) {
  return () => {
    return lambda8(boyer2, x, y, z)
  }
});
lambda8 = (undefined, function (boyer2, x, y, z) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = append_(boyer2, x, y, z, x, y);
  tmp1 = append_(boyer2, x, y, z, tmp, z);
  tmp2 = append_(boyer2, x, y, z, y, z);
  tmp3 = append_(boyer2, x, y, z, x, tmp2);
  tmp4 = globalThis.Object.freeze([
    tmp1,
    tmp3
  ]);
  return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
});
lambda9 = (undefined, function () {
  return NofibPrelude.Nil
});
lambda$27 = (undefined, function (boyer2, x, y, boyerTrue) {
  return () => {
    return lambda10(boyer2, x, y, boyerTrue)
  }
});
lambda10 = (undefined, function (boyer2, x, y, boyerTrue) {
  let tmp, tmp1, inlinedVal, tmp2, tmp3, inlinedVal1;
  tmp2 = NofibPrelude.Cons(y, NofibPrelude.Nil);
  tmp3 = NofibPrelude.Cons(x, tmp2);
  inlinedVal1 = NofibPrelude.Lazy(lambda9);
  inlinedVal = boyer2.Fun(boyer2.CONS, tmp3, inlinedVal1);
  tmp = consp(boyer2, x, y, boyerTrue, inlinedVal);
  tmp1 = globalThis.Object.freeze([
    tmp,
    boyerTrue
  ]);
  return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
});
lambda$26 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda11(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda11 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, tmp30, inlinedVal4, tmp31, inlinedVal5, tmp32, inlinedVal6, tmp33, inlinedVal7;
  tmp = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, x);
  tmp1 = globalThis.Object.freeze([
    tmp,
    zero
  ]);
  tmp2 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp3 = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp2, x);
  tmp4 = globalThis.Object.freeze([
    tmp3,
    y
  ]);
  tmp5 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, x);
  tmp6 = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp5, x);
  tmp7 = globalThis.Object.freeze([
    tmp6,
    y
  ]);
  tmp8 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp9 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, z);
  tmp10 = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp8, tmp9);
  tmp11 = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp12 = globalThis.Object.freeze([
    tmp10,
    tmp11
  ]);
  tmp13 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, z);
  tmp14 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, tmp13);
  tmp15 = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp14, x);
  tmp16 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp17 = globalThis.Object.freeze([
    tmp15,
    tmp16
  ]);
  tmp18 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp33 = NofibPrelude.Cons(tmp18, NofibPrelude.Nil);
  inlinedVal7 = NofibPrelude.Lazy(lambda4);
  inlinedVal = boyer2.Fun(boyer2.ADD1, tmp33, inlinedVal7);
  tmp19 = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, inlinedVal, z);
  tmp32 = NofibPrelude.Cons(y, NofibPrelude.Nil);
  inlinedVal6 = NofibPrelude.Lazy(lambda4);
  inlinedVal1 = boyer2.Fun(boyer2.ADD1, tmp32, inlinedVal6);
  tmp20 = globalThis.Object.freeze([
    tmp19,
    inlinedVal1
  ]);
  tmp31 = NofibPrelude.Cons(x, NofibPrelude.Nil);
  inlinedVal5 = NofibPrelude.Lazy(lambda4);
  inlinedVal2 = boyer2.Fun(boyer2.ADD1, tmp31, inlinedVal5);
  tmp30 = NofibPrelude.Cons(inlinedVal2, NofibPrelude.Nil);
  inlinedVal4 = NofibPrelude.Lazy(lambda4);
  inlinedVal3 = boyer2.Fun(boyer2.ADD1, tmp30, inlinedVal4);
  tmp21 = two(boyer2, zero);
  tmp22 = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, inlinedVal3, tmp21);
  tmp23 = globalThis.Object.freeze([
    tmp22,
    x
  ]);
  tmp24 = NofibPrelude.Cons(tmp23, NofibPrelude.Nil);
  tmp25 = NofibPrelude.Cons(tmp20, tmp24);
  tmp26 = NofibPrelude.Cons(tmp17, tmp25);
  tmp27 = NofibPrelude.Cons(tmp12, tmp26);
  tmp28 = NofibPrelude.Cons(tmp7, tmp27);
  tmp29 = NofibPrelude.Cons(tmp4, tmp28);
  return NofibPrelude.Cons(tmp1, tmp29)
});
lambda$25 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda12(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda12 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = divides(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp1 = remainder(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, x);
  tmp2 = zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp1);
  tmp3 = globalThis.Object.freeze([
    tmp,
    tmp2
  ]);
  return NofibPrelude.Cons(tmp3, NofibPrelude.Nil)
});
lambda$24 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda13(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda13 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85;
  tmp = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp1 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp, zero);
  tmp2 = zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x);
  tmp3 = zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y);
  tmp4 = and_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp2, tmp3);
  tmp5 = globalThis.Object.freeze([
    tmp1,
    tmp4
  ]);
  tmp6 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp7 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, z);
  tmp8 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp6, tmp7);
  tmp9 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp10 = globalThis.Object.freeze([
    tmp8,
    tmp9
  ]);
  tmp11 = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp12 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, zero, tmp11);
  tmp13 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, x);
  tmp14 = not_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp13);
  tmp15 = globalThis.Object.freeze([
    tmp12,
    tmp14
  ]);
  tmp16 = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp17 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp16);
  tmp18 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, zero);
  tmp19 = zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y);
  tmp20 = or_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp18, tmp19);
  tmp21 = globalThis.Object.freeze([
    tmp17,
    tmp20
  ]);
  tmp22 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp23 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp22, zero);
  tmp24 = zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x);
  tmp25 = zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y);
  tmp26 = or_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp24, tmp25);
  tmp27 = globalThis.Object.freeze([
    tmp23,
    tmp26
  ]);
  tmp28 = append_(boyer2, x, y, z, x, y);
  tmp29 = append_(boyer2, x, y, z, x, z);
  tmp30 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp28, tmp29);
  tmp31 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp32 = globalThis.Object.freeze([
    tmp30,
    tmp31
  ]);
  tmp33 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp34 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, tmp33);
  tmp35 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, zero);
  tmp36 = one(boyer2, zero);
  tmp37 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp36);
  tmp38 = or_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp35, tmp37);
  tmp39 = globalThis.Object.freeze([
    tmp34,
    tmp38
  ]);
  tmp40 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp41 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp40);
  tmp42 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, zero);
  tmp43 = one(boyer2, zero);
  tmp44 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, tmp43);
  tmp45 = or_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp42, tmp44);
  tmp46 = globalThis.Object.freeze([
    tmp41,
    tmp45
  ]);
  tmp47 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp48 = one(boyer2, zero);
  tmp49 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp47, tmp48);
  tmp50 = one(boyer2, zero);
  tmp51 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp50);
  tmp52 = one(boyer2, zero);
  tmp53 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, tmp52);
  tmp54 = and_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp51, tmp53);
  tmp55 = globalThis.Object.freeze([
    tmp49,
    tmp54
  ]);
  tmp56 = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp57 = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, z, y);
  tmp58 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp56, tmp57);
  tmp59 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp60 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp61 = not_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp60);
  tmp62 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, z, y);
  tmp63 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, x);
  tmp64 = not_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp63);
  tmp65 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, z);
  tmp66 = if_(boyer2, u, w, x, y, z, tmp62, tmp64, tmp65);
  tmp67 = if_(boyer2, u, w, x, y, z, tmp59, tmp61, tmp66);
  tmp68 = globalThis.Object.freeze([
    tmp58,
    tmp67
  ]);
  tmp69 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp70 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp69, z);
  tmp71 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp72 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, boyerTrue, z);
  tmp73 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, boyerFalse, z);
  tmp74 = if_(boyer2, u, w, x, y, z, tmp71, tmp72, tmp73);
  tmp75 = globalThis.Object.freeze([
    tmp70,
    tmp74
  ]);
  tmp76 = NofibPrelude.Cons(tmp75, NofibPrelude.Nil);
  tmp77 = NofibPrelude.Cons(tmp68, tmp76);
  tmp78 = NofibPrelude.Cons(tmp55, tmp77);
  tmp79 = NofibPrelude.Cons(tmp46, tmp78);
  tmp80 = NofibPrelude.Cons(tmp39, tmp79);
  tmp81 = NofibPrelude.Cons(tmp32, tmp80);
  tmp82 = NofibPrelude.Cons(tmp27, tmp81);
  tmp83 = NofibPrelude.Cons(tmp21, tmp82);
  tmp84 = NofibPrelude.Cons(tmp15, tmp83);
  tmp85 = NofibPrelude.Cons(tmp10, tmp84);
  return NofibPrelude.Cons(tmp5, tmp85)
});
lambda$23 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda14(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda14 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = even_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x);
  tmp1 = zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x);
  tmp2 = sub1(boyer2, x, x);
  tmp3 = odd_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp2);
  tmp4 = if_(boyer2, u, w, x, y, z, tmp1, boyerTrue, tmp3);
  tmp5 = globalThis.Object.freeze([
    tmp,
    tmp4
  ]);
  return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
});
lambda$22 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda15(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda15 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
  tmp = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp1 = exp_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp);
  tmp2 = exp_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp3 = exp_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, z);
  tmp4 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp2, tmp3);
  tmp5 = globalThis.Object.freeze([
    tmp1,
    tmp4
  ]);
  tmp6 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp7 = exp_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp6);
  tmp8 = exp_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp9 = exp_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp8, z);
  tmp10 = globalThis.Object.freeze([
    tmp7,
    tmp9
  ]);
  tmp11 = NofibPrelude.Cons(tmp10, NofibPrelude.Nil);
  return NofibPrelude.Cons(tmp5, tmp11)
});
lambda16 = (undefined, function () {
  return NofibPrelude.Nil
});
lambda$21 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda17(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda17 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  tmp = gcd_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp1 = gcd_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, x);
  tmp2 = globalThis.Object.freeze([
    tmp,
    tmp1
  ]);
  tmp3 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, z);
  tmp4 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp5 = gcd_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp3, tmp4);
  tmp6 = gcd_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp7 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, z, tmp6);
  tmp8 = globalThis.Object.freeze([
    tmp5,
    tmp7
  ]);
  tmp9 = NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
  return NofibPrelude.Cons(tmp2, tmp9)
});
lambda$20 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda18(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda18 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = greatereqp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp1 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp2 = not_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp1);
  tmp3 = globalThis.Object.freeze([
    tmp,
    tmp2
  ]);
  return NofibPrelude.Cons(tmp3, NofibPrelude.Nil)
});
lambda$19 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda19(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda19 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2;
  tmp = greaterp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp1 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, x);
  tmp2 = globalThis.Object.freeze([
    tmp,
    tmp1
  ]);
  return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
});
lambda$18 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue) {
  return () => {
    return lambda20(boyer2, u, w, x, y, z, boyerFalse, boyerTrue)
  }
});
lambda20 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = implies(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, x, y);
  tmp1 = if_(boyer2, u, w, x, y, z, y, boyerTrue, boyerFalse);
  tmp2 = if_(boyer2, u, w, x, y, z, x, tmp1, boyerTrue);
  tmp3 = globalThis.Object.freeze([
    tmp,
    tmp2
  ]);
  return NofibPrelude.Cons(tmp3, NofibPrelude.Nil)
});
lambda$17 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue) {
  return () => {
    return lambda21(boyer2, u, w, x, y, z, boyerFalse, boyerTrue)
  }
});
lambda21 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = iff(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, x, y);
  tmp1 = implies(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, x, y);
  tmp2 = implies(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, y, x);
  tmp3 = and_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp1, tmp2);
  tmp4 = globalThis.Object.freeze([
    tmp,
    tmp3
  ]);
  return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
});
lambda$16 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda22(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda22 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, tmp10, tmp11, inlinedVal4, tmp12, tmp13, inlinedVal5, tmp14, tmp15, inlinedVal6, tmp16, tmp17, inlinedVal7;
  tmp = reverse_(boyer2, x, y, z, x);
  tmp1 = length_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp);
  tmp2 = length_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x);
  tmp3 = globalThis.Object.freeze([
    tmp1,
    tmp2
  ]);
  tmp16 = NofibPrelude.Cons(w, NofibPrelude.Nil);
  tmp17 = NofibPrelude.Cons(u, tmp16);
  inlinedVal7 = NofibPrelude.Lazy(lambda9);
  inlinedVal = boyer2.Fun(boyer2.CONS, tmp17, inlinedVal7);
  tmp14 = NofibPrelude.Cons(inlinedVal, NofibPrelude.Nil);
  tmp15 = NofibPrelude.Cons(z, tmp14);
  inlinedVal6 = NofibPrelude.Lazy(lambda9);
  inlinedVal1 = boyer2.Fun(boyer2.CONS, tmp15, inlinedVal6);
  tmp12 = NofibPrelude.Cons(inlinedVal1, NofibPrelude.Nil);
  tmp13 = NofibPrelude.Cons(y, tmp12);
  inlinedVal5 = NofibPrelude.Lazy(lambda9);
  inlinedVal2 = boyer2.Fun(boyer2.CONS, tmp13, inlinedVal5);
  tmp10 = NofibPrelude.Cons(inlinedVal2, NofibPrelude.Nil);
  tmp11 = NofibPrelude.Cons(x, tmp10);
  inlinedVal4 = NofibPrelude.Lazy(lambda9);
  inlinedVal3 = boyer2.Fun(boyer2.CONS, tmp11, inlinedVal4);
  tmp4 = length_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, inlinedVal3);
  tmp5 = four(boyer2, zero);
  tmp6 = length_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, w);
  tmp7 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp5, tmp6);
  tmp8 = globalThis.Object.freeze([
    tmp4,
    tmp7
  ]);
  tmp9 = NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
  return NofibPrelude.Cons(tmp3, tmp9)
});
lambda$15 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda23(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda23 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = lesseqp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp1 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, x);
  tmp2 = not_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp1);
  tmp3 = globalThis.Object.freeze([
    tmp,
    tmp2
  ]);
  return NofibPrelude.Cons(tmp3, NofibPrelude.Nil)
});
lambda$14 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda24(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda24 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34;
  tmp = remainder(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp1 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp, y);
  tmp2 = zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y);
  tmp3 = not_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp2);
  tmp4 = globalThis.Object.freeze([
    tmp1,
    tmp3
  ]);
  tmp5 = quotient(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp6 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp5, x);
  tmp7 = zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x);
  tmp8 = not_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp7);
  tmp9 = one(boyer2, zero);
  tmp10 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp9, y);
  tmp11 = and_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp8, tmp10);
  tmp12 = globalThis.Object.freeze([
    tmp6,
    tmp11
  ]);
  tmp13 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp14 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, z);
  tmp15 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp13, tmp14);
  tmp16 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp17 = globalThis.Object.freeze([
    tmp15,
    tmp16
  ]);
  tmp18 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, z);
  tmp19 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp20 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp18, tmp19);
  tmp21 = zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, z);
  tmp22 = not_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp21);
  tmp23 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp24 = and_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp22, tmp23);
  tmp25 = globalThis.Object.freeze([
    tmp20,
    tmp24
  ]);
  tmp26 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp27 = lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, tmp26);
  tmp28 = zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x);
  tmp29 = not_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp28);
  tmp30 = globalThis.Object.freeze([
    tmp27,
    tmp29
  ]);
  tmp31 = NofibPrelude.Cons(tmp30, NofibPrelude.Nil);
  tmp32 = NofibPrelude.Cons(tmp25, tmp31);
  tmp33 = NofibPrelude.Cons(tmp17, tmp32);
  tmp34 = NofibPrelude.Cons(tmp12, tmp33);
  return NofibPrelude.Cons(tmp4, tmp34)
});
lambda$13 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero) {
  return () => {
    return lambda25(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero)
  }
});
lambda25 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero) {
  let tmp, tmp1, tmp2;
  tmp = nilp(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero, x);
  tmp1 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, nil);
  tmp2 = globalThis.Object.freeze([
    tmp,
    tmp1
  ]);
  return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
});
lambda$12 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero) {
  return () => {
    return lambda26(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero)
  }
});
lambda26 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = listp(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero, x);
  tmp1 = nilp(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero, x);
  tmp2 = consp(boyer2, x, y, boyerTrue, x);
  tmp3 = or_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp1, tmp2);
  tmp4 = globalThis.Object.freeze([
    tmp,
    tmp3
  ]);
  return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
});
lambda$11 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue) {
  return () => {
    return lambda27(boyer2, u, w, x, y, z, boyerFalse, boyerTrue)
  }
});
lambda27 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
  tmp = append_(boyer2, x, y, z, y, z);
  tmp1 = member(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, x, tmp);
  tmp2 = member(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, x, y);
  tmp3 = member(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, x, z);
  tmp4 = or_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp2, tmp3);
  tmp5 = globalThis.Object.freeze([
    tmp1,
    tmp4
  ]);
  tmp6 = reverse_(boyer2, x, y, z, y);
  tmp7 = member(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, x, tmp6);
  tmp8 = member(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, x, y);
  tmp9 = globalThis.Object.freeze([
    tmp7,
    tmp8
  ]);
  tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
  return NofibPrelude.Cons(tmp5, tmp10)
});
lambda$10 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero) {
  return () => {
    return lambda28(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero)
  }
});
lambda28 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = nlistp(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero, x);
  tmp1 = listp(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero, x);
  tmp2 = not_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, tmp1);
  tmp3 = globalThis.Object.freeze([
    tmp,
    tmp2
  ]);
  return NofibPrelude.Cons(tmp3, NofibPrelude.Nil)
});
lambda$9 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda29(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda29 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = odd_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x);
  tmp1 = sub1(boyer2, x, x);
  tmp2 = even_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp1);
  tmp3 = globalThis.Object.freeze([
    tmp,
    tmp2
  ]);
  return NofibPrelude.Cons(tmp3, NofibPrelude.Nil)
});
lambda$8 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue) {
  return () => {
    return lambda30(boyer2, u, w, x, y, z, boyerFalse, boyerTrue)
  }
});
lambda30 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = or_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, x, y);
  tmp1 = if_(boyer2, u, w, x, y, z, y, boyerTrue, boyerFalse);
  tmp2 = if_(boyer2, u, w, x, y, z, x, boyerTrue, tmp1);
  tmp3 = globalThis.Object.freeze([
    tmp,
    tmp2
  ]);
  return NofibPrelude.Cons(tmp3, NofibPrelude.Nil)
});
lambda$7 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda31(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda31 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, inlinedVal, inlinedVal1, tmp15, inlinedVal2, tmp16, inlinedVal3;
  tmp = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp1 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp, z);
  tmp2 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp3 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp2);
  tmp4 = globalThis.Object.freeze([
    tmp1,
    tmp3
  ]);
  tmp5 = remainder(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp6 = quotient(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp7 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, tmp6);
  tmp8 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp5, tmp7);
  tmp9 = globalThis.Object.freeze([
    tmp8,
    x
  ]);
  tmp16 = NofibPrelude.Cons(y, NofibPrelude.Nil);
  inlinedVal3 = NofibPrelude.Lazy(lambda4);
  inlinedVal = boyer2.Fun(boyer2.ADD1, tmp16, inlinedVal3);
  tmp10 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, inlinedVal);
  tmp11 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp15 = NofibPrelude.Cons(tmp11, NofibPrelude.Nil);
  inlinedVal2 = NofibPrelude.Lazy(lambda4);
  inlinedVal1 = boyer2.Fun(boyer2.ADD1, tmp15, inlinedVal2);
  tmp12 = globalThis.Object.freeze([
    tmp10,
    inlinedVal1
  ]);
  tmp13 = NofibPrelude.Cons(tmp12, NofibPrelude.Nil);
  tmp14 = NofibPrelude.Cons(tmp9, tmp13);
  return NofibPrelude.Cons(tmp4, tmp14)
});
lambda$6 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda32(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda32 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
  tmp = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp1 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp);
  tmp2 = two(boyer2, zero);
  tmp3 = quotient(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp1, tmp2);
  tmp4 = two(boyer2, zero);
  tmp5 = quotient(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, tmp4);
  tmp6 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp5);
  tmp7 = globalThis.Object.freeze([
    tmp3,
    tmp6
  ]);
  tmp8 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, x);
  tmp9 = quotient(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp8, y);
  tmp10 = zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y);
  tmp11 = if_(boyer2, u, w, x, y, z, tmp10, zero, x);
  tmp12 = globalThis.Object.freeze([
    tmp9,
    tmp11
  ]);
  tmp13 = NofibPrelude.Cons(tmp12, NofibPrelude.Nil);
  return NofibPrelude.Cons(tmp7, tmp13)
});
lambda$5 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda33(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda33 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
  tmp = one(boyer2, zero);
  tmp1 = remainder(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp);
  tmp2 = globalThis.Object.freeze([
    tmp1,
    zero
  ]);
  tmp3 = remainder(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, x);
  tmp4 = globalThis.Object.freeze([
    tmp3,
    zero
  ]);
  tmp5 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp6 = remainder(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp5, x);
  tmp7 = globalThis.Object.freeze([
    tmp6,
    zero
  ]);
  tmp8 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp9 = remainder(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp8, y);
  tmp10 = globalThis.Object.freeze([
    tmp9,
    zero
  ]);
  tmp11 = NofibPrelude.Cons(tmp10, NofibPrelude.Nil);
  tmp12 = NofibPrelude.Cons(tmp7, tmp11);
  tmp13 = NofibPrelude.Cons(tmp4, tmp12);
  return NofibPrelude.Cons(tmp2, tmp13)
});
lambda$4 = (undefined, function (boyer2, x, y, z) {
  return () => {
    return lambda34(boyer2, x, y, z)
  }
});
lambda34 = (undefined, function (boyer2, x, y, z) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = append_(boyer2, x, y, z, x, y);
  tmp1 = reverse_(boyer2, x, y, z, tmp);
  tmp2 = reverse_(boyer2, x, y, z, y);
  tmp3 = reverse_(boyer2, x, y, z, x);
  tmp4 = append_(boyer2, x, y, z, tmp2, tmp3);
  tmp5 = globalThis.Object.freeze([
    tmp1,
    tmp4
  ]);
  return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
});
lambda$3 = (undefined, function (boyer2, x) {
  return () => {
    return lambda35(boyer2, x)
  }
});
lambda35 = (undefined, function (boyer2, x) {
  let tmp, tmp1, inlinedVal, tmp2, inlinedVal1;
  tmp2 = NofibPrelude.Cons(x, NofibPrelude.Nil);
  inlinedVal1 = NofibPrelude.Lazy(lambda4);
  inlinedVal = boyer2.Fun(boyer2.ADD1, tmp2, inlinedVal1);
  tmp = sub1(boyer2, x, inlinedVal);
  tmp1 = globalThis.Object.freeze([
    tmp,
    x
  ]);
  return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
});
lambda$2 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda36(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda36 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, inlinedVal, tmp24, inlinedVal1;
  tmp = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp1 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp);
  tmp2 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp3 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, z);
  tmp4 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp2, tmp3);
  tmp5 = globalThis.Object.freeze([
    tmp1,
    tmp4
  ]);
  tmp6 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp7 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp6, z);
  tmp8 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp9 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp8);
  tmp10 = globalThis.Object.freeze([
    tmp7,
    tmp9
  ]);
  tmp11 = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, z);
  tmp12 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp11);
  tmp13 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, y, x);
  tmp14 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, z, x);
  tmp15 = difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp13, tmp14);
  tmp16 = globalThis.Object.freeze([
    tmp12,
    tmp15
  ]);
  tmp24 = NofibPrelude.Cons(y, NofibPrelude.Nil);
  inlinedVal1 = NofibPrelude.Lazy(lambda4);
  inlinedVal = boyer2.Fun(boyer2.ADD1, tmp24, inlinedVal1);
  tmp17 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, inlinedVal);
  tmp18 = times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
  tmp19 = plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, tmp18);
  tmp20 = globalThis.Object.freeze([
    tmp17,
    tmp19
  ]);
  tmp21 = NofibPrelude.Cons(tmp20, NofibPrelude.Nil);
  tmp22 = NofibPrelude.Cons(tmp16, tmp21);
  tmp23 = NofibPrelude.Cons(tmp10, tmp22);
  return NofibPrelude.Cons(tmp5, tmp23)
});
lambda$1 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  return () => {
    return lambda37(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero)
  }
});
lambda37 = (undefined, function (boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero) {
  let tmp, tmp1, tmp2;
  tmp = zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x);
  tmp1 = equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, zero);
  tmp2 = globalThis.Object.freeze([
    tmp,
    tmp1
  ]);
  return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
});
one = function one(boyer2, zero) {
  let inlinedVal;
  inlinedVal = NofibPrelude.Lazy(lambda$34(boyer2, zero));
  return boyer2.Fun(boyer2.ONE, NofibPrelude.Nil, inlinedVal)
};
two = function two(boyer2, zero) {
  let inlinedVal;
  inlinedVal = NofibPrelude.Lazy(lambda$33(boyer2, zero));
  return boyer2.Fun(boyer2.TWO, NofibPrelude.Nil, inlinedVal)
};
four = function four(boyer2, zero) {
  let inlinedVal;
  inlinedVal = NofibPrelude.Lazy(lambda$32(boyer2, zero));
  return boyer2.Fun(boyer2.FOUR, NofibPrelude.Nil, inlinedVal)
};
add1 = function add1(boyer2, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.Lazy(lambda4);
  return boyer2.Fun(boyer2.ADD1, tmp, inlinedVal)
};
if_ = function if_(boyer2, u, w, x, y, z, a, b, c) {
  let tmp, tmp1, tmp2, inlinedVal;
  tmp = NofibPrelude.Cons(c, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(b, tmp);
  tmp2 = NofibPrelude.Cons(a, tmp1);
  inlinedVal = NofibPrelude.Lazy(lambda$31(boyer2, u, w, x, y, z));
  return boyer2.Fun(boyer2.IF, tmp2, inlinedVal)
};
not_ = function not_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.Lazy(lambda$30(boyer2, u, w, x, y, z, boyerFalse, boyerTrue));
  return boyer2.Fun(boyer2.NOT, tmp, inlinedVal)
};
and_ = function and_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$29(boyer2, u, w, x, y, z, boyerFalse, boyerTrue));
  return boyer2.Fun(boyer2.AND, tmp1, inlinedVal)
};
append_ = function append_(boyer2, x, y, z, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$28(boyer2, x, y, z));
  return boyer2.Fun(boyer2.APPEND, tmp1, inlinedVal)
};
cons = function cons(boyer2, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda9);
  return boyer2.Fun(boyer2.CONS, tmp1, inlinedVal)
};
consp = function consp(boyer2, x, y, boyerTrue, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.Lazy(lambda$27(boyer2, x, y, boyerTrue));
  return boyer2.Fun(boyer2.CONSP, tmp, inlinedVal)
};
difference = function difference(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$26(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.DIFFERENCE, tmp1, inlinedVal)
};
divides = function divides(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$25(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.DIVIDES, tmp1, inlinedVal)
};
equal = function equal(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$24(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.EQUAL, tmp1, inlinedVal)
};
even_ = function even_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.Lazy(lambda$23(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.EVEN, tmp, inlinedVal)
};
exp_ = function exp_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$22(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.EXP, tmp1, inlinedVal)
};
f = function f(boyer2, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.Lazy(lambda16);
  return boyer2.Fun(boyer2.F, tmp, inlinedVal)
};
gcd_ = function gcd_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$21(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.GCD, tmp1, inlinedVal)
};
greatereqp = function greatereqp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$20(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.GREATEREQP, tmp1, inlinedVal)
};
greaterp = function greaterp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$19(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.GREATERP, tmp1, inlinedVal)
};
implies = function implies(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$18(boyer2, u, w, x, y, z, boyerFalse, boyerTrue));
  return boyer2.Fun(boyer2.IMPLIES, tmp1, inlinedVal)
};
iff = function iff(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$17(boyer2, u, w, x, y, z, boyerFalse, boyerTrue));
  return boyer2.Fun(boyer2.IFF, tmp1, inlinedVal)
};
length_ = function length_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.Lazy(lambda$16(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.LENGTH, tmp, inlinedVal)
};
lesseqp = function lesseqp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$15(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.LESSEQP, tmp1, inlinedVal)
};
lessp = function lessp(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$14(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.LESSP, tmp1, inlinedVal)
};
nilp = function nilp(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.Lazy(lambda$13(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero));
  return boyer2.Fun(boyer2.NILP, tmp, inlinedVal)
};
listp = function listp(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.Lazy(lambda$12(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero));
  return boyer2.Fun(boyer2.LISTP, tmp, inlinedVal)
};
member = function member(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$11(boyer2, u, w, x, y, z, boyerFalse, boyerTrue));
  return boyer2.Fun(boyer2.MEMBER, tmp1, inlinedVal)
};
nlistp = function nlistp(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.Lazy(lambda$10(boyer2, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero));
  return boyer2.Fun(boyer2.NLISTP, tmp, inlinedVal)
};
odd_ = function odd_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.Lazy(lambda$9(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.ODD, tmp, inlinedVal)
};
or_ = function or_(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$8(boyer2, u, w, x, y, z, boyerFalse, boyerTrue));
  return boyer2.Fun(boyer2.OR, tmp1, inlinedVal)
};
plus = function plus(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$7(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.PLUS, tmp1, inlinedVal)
};
quotient = function quotient(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$6(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.QUOTIENT, tmp1, inlinedVal)
};
remainder = function remainder(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$5(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.REMAINDER, tmp1, inlinedVal)
};
reverse_ = function reverse_(boyer2, x, y, z, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.Lazy(lambda$4(boyer2, x, y, z));
  return boyer2.Fun(boyer2.REVERSE, tmp, inlinedVal)
};
sub1 = function sub1(boyer2, x, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.Lazy(lambda$3(boyer2, x));
  return boyer2.Fun(boyer2.SUB1, tmp, inlinedVal)
};
times = function times(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b) {
  let tmp, tmp1, inlinedVal;
  tmp = NofibPrelude.Cons(b, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(a, tmp);
  inlinedVal = NofibPrelude.Lazy(lambda$2(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.TIMES, tmp1, inlinedVal)
};
zerop = function zerop(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero, a) {
  let tmp, inlinedVal;
  tmp = NofibPrelude.Cons(a, NofibPrelude.Nil);
  inlinedVal = NofibPrelude.Lazy(lambda$1(boyer2, u, w, x, y, z, boyerFalse, boyerTrue, zero));
  return boyer2.Fun(boyer2.ZEROP, tmp, inlinedVal)
};
lambda38 = (undefined, function () {
  return NofibPrelude.Nil
});
lambda39 = (undefined, function () {
  return NofibPrelude.Nil
});
lambda40 = (undefined, function () {
  return NofibPrelude.Nil
});
lambda41 = (undefined, function () {
  return NofibPrelude.Nil
});
lambda$ = (undefined, function (boyer2, subst) {
  return (x) => {
    return boyer2[apply_subst$accessorSymbol](subst, x)
  }
});
lambda = (undefined, function (boyer2, subst, x) {
  return boyer2[apply_subst$accessorSymbol](subst, x)
});
(class boyer {
  static {
    boyer1 = this
  }
  static get [apply_subst$accessorSymbol]() { return boyer.#apply_subst; }
  static {
    (class Id {
      static {
        boyer.Id = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Id"];
    });
    (class A extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.A = this;
        Object.defineProperty(this, "class", {
          value: A
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "A"];
    });
    (class B extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.B = this;
        Object.defineProperty(this, "class", {
          value: B
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "B"];
    });
    (class C extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.C = this;
        Object.defineProperty(this, "class", {
          value: C
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "C"];
    });
    (class D extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.D = this;
        Object.defineProperty(this, "class", {
          value: D
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "D"];
    });
    (class X extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.X = this;
        Object.defineProperty(this, "class", {
          value: X
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "X"];
    });
    (class Y extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.Y = this;
        Object.defineProperty(this, "class", {
          value: Y
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Y"];
    });
    (class Z extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.Z = this;
        Object.defineProperty(this, "class", {
          value: Z
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Z"];
    });
    (class U extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.U = this;
        Object.defineProperty(this, "class", {
          value: U
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "U"];
    });
    (class W extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.W = this;
        Object.defineProperty(this, "class", {
          value: W
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "W"];
    });
    (class ADD1 extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.ADD1 = this;
        Object.defineProperty(this, "class", {
          value: ADD1
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ADD1"];
    });
    (class AND extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.AND = this;
        Object.defineProperty(this, "class", {
          value: AND
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "AND"];
    });
    (class APPEND extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.APPEND = this;
        Object.defineProperty(this, "class", {
          value: APPEND
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "APPEND"];
    });
    (class CONS extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.CONS = this;
        Object.defineProperty(this, "class", {
          value: CONS
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "CONS"];
    });
    (class CONSP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.CONSP = this;
        Object.defineProperty(this, "class", {
          value: CONSP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "CONSP"];
    });
    (class DIFFERENCE extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.DIFFERENCE = this;
        Object.defineProperty(this, "class", {
          value: DIFFERENCE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "DIFFERENCE"];
    });
    (class DIVIDES extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.DIVIDES = this;
        Object.defineProperty(this, "class", {
          value: DIVIDES
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "DIVIDES"];
    });
    (class EQUAL extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.EQUAL = this;
        Object.defineProperty(this, "class", {
          value: EQUAL
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EQUAL"];
    });
    (class EVEN extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.EVEN = this;
        Object.defineProperty(this, "class", {
          value: EVEN
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EVEN"];
    });
    (class EXP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.EXP = this;
        Object.defineProperty(this, "class", {
          value: EXP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EXP"];
    });
    (class F extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.F = this;
        Object.defineProperty(this, "class", {
          value: F
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "F"];
    });
    (class FALSE extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.FALSE = this;
        Object.defineProperty(this, "class", {
          value: FALSE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "FALSE"];
    });
    (class FOUR extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.FOUR = this;
        Object.defineProperty(this, "class", {
          value: FOUR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "FOUR"];
    });
    (class GCD extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.GCD = this;
        Object.defineProperty(this, "class", {
          value: GCD
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GCD"];
    });
    (class GREATEREQP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.GREATEREQP = this;
        Object.defineProperty(this, "class", {
          value: GREATEREQP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GREATEREQP"];
    });
    (class GREATERP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.GREATERP = this;
        Object.defineProperty(this, "class", {
          value: GREATERP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GREATERP"];
    });
    (class IF extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.IF = this;
        Object.defineProperty(this, "class", {
          value: IF
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "IF"];
    });
    (class IFF extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.IFF = this;
        Object.defineProperty(this, "class", {
          value: IFF
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "IFF"];
    });
    (class IMPLIES extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.IMPLIES = this;
        Object.defineProperty(this, "class", {
          value: IMPLIES
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "IMPLIES"];
    });
    (class LENGTH extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.LENGTH = this;
        Object.defineProperty(this, "class", {
          value: LENGTH
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LENGTH"];
    });
    (class LESSEQP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.LESSEQP = this;
        Object.defineProperty(this, "class", {
          value: LESSEQP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LESSEQP"];
    });
    (class LESSP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.LESSP = this;
        Object.defineProperty(this, "class", {
          value: LESSP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LESSP"];
    });
    (class LISTP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.LISTP = this;
        Object.defineProperty(this, "class", {
          value: LISTP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LISTP"];
    });
    (class MEMBER extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.MEMBER = this;
        Object.defineProperty(this, "class", {
          value: MEMBER
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "MEMBER"];
    });
    (class NIL extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.NIL = this;
        Object.defineProperty(this, "class", {
          value: NIL
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NIL"];
    });
    (class NILP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.NILP = this;
        Object.defineProperty(this, "class", {
          value: NILP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NILP"];
    });
    (class NLISTP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.NLISTP = this;
        Object.defineProperty(this, "class", {
          value: NLISTP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NLISTP"];
    });
    (class NOT extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.NOT = this;
        Object.defineProperty(this, "class", {
          value: NOT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NOT"];
    });
    (class ODD extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.ODD = this;
        Object.defineProperty(this, "class", {
          value: ODD
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ODD"];
    });
    (class ONE extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.ONE = this;
        Object.defineProperty(this, "class", {
          value: ONE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ONE"];
    });
    (class OR extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.OR = this;
        Object.defineProperty(this, "class", {
          value: OR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "OR"];
    });
    (class PLUS extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.PLUS = this;
        Object.defineProperty(this, "class", {
          value: PLUS
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PLUS"];
    });
    (class QUOTIENT extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.QUOTIENT = this;
        Object.defineProperty(this, "class", {
          value: QUOTIENT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "QUOTIENT"];
    });
    (class REMAINDER extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.REMAINDER = this;
        Object.defineProperty(this, "class", {
          value: REMAINDER
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "REMAINDER"];
    });
    (class REVERSE extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.REVERSE = this;
        Object.defineProperty(this, "class", {
          value: REVERSE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "REVERSE"];
    });
    (class SUB1 extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.SUB1 = this;
        Object.defineProperty(this, "class", {
          value: SUB1
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "SUB1"];
    });
    (class TIMES extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.TIMES = this;
        Object.defineProperty(this, "class", {
          value: TIMES
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "TIMES"];
    });
    (class TRUE extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.TRUE = this;
        Object.defineProperty(this, "class", {
          value: TRUE
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "TRUE"];
    });
    (class TWO extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.TWO = this;
        Object.defineProperty(this, "class", {
          value: TWO
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "TWO"];
    });
    (class ZERO extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.ZERO = this;
        Object.defineProperty(this, "class", {
          value: ZERO
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ZERO"];
    });
    (class ZEROP extends boyer.Id {
      static {
        new this
      }
      constructor() {
        super();
        boyer.ZEROP = this;
        Object.defineProperty(this, "class", {
          value: ZEROP
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ZEROP"];
    });
    (class Term {
      static {
        boyer.Term = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Term"];
    });
    boyer.Var = function Var(i) {
      return globalThis.Object.freeze(new Var.class(i));
    };
    (class Var extends boyer.Term {
      static {
        boyer.Var.class = this
      }
      constructor(i) {
        super();
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Var", ["i"]];
    });
    boyer.Fun = function Fun(i, t, l) {
      return globalThis.Object.freeze(new Fun.class(i, t, l));
    };
    (class Fun extends boyer.Term {
      static {
        boyer.Fun.class = this
      }
      constructor(i, t, l) {
        super();
        this.i = i;
        this.t = t;
        this.l = l;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Fun", ["i", "t", "l"]];
    });
    (class ERROR extends boyer.Term {
      static {
        new this
      }
      constructor() {
        super();
        boyer.ERROR = this;
        Object.defineProperty(this, "class", {
          value: ERROR
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ERROR"];
    });
  }
  static #rewrite_with_lemmas_helper_rewrite_with_lemmas_rewrite(id, param0, param1) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, element1$1, element0$1, tmp;
            if (param1 instanceof NofibPrelude.Nil.class) {
              return param0
            } else if (param1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param1.head;
              arg$Cons$1$ = param1.tail;
              if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
                element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
                element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
                scrut = boyer.#one_way_unify(param0, element0$);
                if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
                  element0$1 = runtime.Tuple.get(scrut, 0);
                  element1$1 = runtime.Tuple.get(scrut, 1);
                  if (element0$1 === true) {
                    tmp = boyer.#apply_subst(element1$1, element1$);
                    param0 = tmp;
                    id = 2;
                    continue loopLabel
                  }
                  param1 = arg$Cons$1$;
                  id = 0;
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
            let inlinedVal;
            if (param1 instanceof NofibPrelude.Lazy.class) {
              inlinedVal = param1.get();
              param1 = inlinedVal;
              id = 0;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 2:
          {
            let arg$Fun$0$, arg$Fun$1$, arg$Fun$2$, arg$Var$0$, tmp, tmp1;
            if (param0 instanceof boyer.Var.class) {
              arg$Var$0$ = param0.i;
              return boyer.Var(arg$Var$0$)
            } else if (param0 instanceof boyer.Fun.class) {
              arg$Fun$0$ = param0.i;
              arg$Fun$1$ = param0.t;
              arg$Fun$2$ = param0.l;
              tmp = NofibPrelude.map(boyer.#rewrite, arg$Fun$1$);
              tmp1 = boyer.Fun(arg$Fun$0$, tmp, arg$Fun$2$);
              param0 = tmp1;
              param1 = arg$Fun$2$;
              id = 1;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
      }
    }
  }
  static #one_way_unify1_one_way_unify1_lst(id, param0, param1, param2) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let scrut, scrut1, arg$Fun$0$, arg$Fun$1$, arg$Fun$0$1, arg$Fun$1$1, arg$Var$0$, element1$, element0$, tmp, tmp1, tmp2;
            if (param1 instanceof boyer.Var.class) {
              arg$Var$0$ = param1.i;
              scrut = boyer.#find(arg$Var$0$, param2);
              if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
                element0$ = runtime.Tuple.get(scrut, 0);
                element1$ = runtime.Tuple.get(scrut, 1);
                if (element0$ === true) {
                  tmp = boyer.#termEq(param0, element1$);
                  return globalThis.Object.freeze([
                    tmp,
                    param2
                  ])
                }
                tmp1 = globalThis.Object.freeze([
                  arg$Var$0$,
                  param0
                ]);
                tmp2 = NofibPrelude.Cons(tmp1, param2);
                return globalThis.Object.freeze([
                  true,
                  tmp2
                ]);
              }
              if (param0 instanceof boyer.Fun.class) {
                return globalThis.Object.freeze([
                  false,
                  NofibPrelude.Nil
                ])
              }
              return globalThis.Object.freeze([
                false,
                NofibPrelude.Nil
              ]);
            }
            if (param0 instanceof boyer.Fun.class) {
              arg$Fun$0$ = param0.i;
              arg$Fun$1$ = param0.t;
              if (param1 instanceof boyer.Fun.class) {
                arg$Fun$0$1 = param1.i;
                arg$Fun$1$1 = param1.t;
                scrut1 = arg$Fun$0$ === arg$Fun$0$1;
                if (scrut1 === true) {
                  param0 = arg$Fun$1$;
                  param1 = arg$Fun$1$1;
                  id = 1;
                  continue loopLabel
                }
                return globalThis.Object.freeze([
                  false,
                  NofibPrelude.Nil
                ]);
              }
              return globalThis.Object.freeze([
                false,
                NofibPrelude.Nil
              ]);
            }
            return globalThis.Object.freeze([
              false,
              NofibPrelude.Nil
            ]);
          }
        case 1:
          {
            let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, element1$, element0$, element1$1, element0$1;
            if (param0 instanceof NofibPrelude.Nil.class) {
              if (param1 instanceof NofibPrelude.Nil.class) {
                return globalThis.Object.freeze([
                  true,
                  param2
                ])
              }
              return globalThis.Object.freeze([
                false,
                NofibPrelude.Nil
              ]);
            } else if (param0 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param0.head;
              arg$Cons$1$ = param0.tail;
              if (param1 instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$1 = param1.head;
                arg$Cons$1$1 = param1.tail;
                scrut1 = boyer.#one_way_unify1_one_way_unify1_lst(0, arg$Cons$0$, arg$Cons$0$1, param2);
                if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
                  element0$ = runtime.Tuple.get(scrut1, 0);
                  element1$ = runtime.Tuple.get(scrut1, 1);
                  scrut = boyer.#one_way_unify1_one_way_unify1_lst(1, arg$Cons$1$, arg$Cons$1$1, element1$);
                  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
                    element0$1 = runtime.Tuple.get(scrut, 0);
                    element1$1 = runtime.Tuple.get(scrut, 1);
                    if (element0$ === true) {
                      if (element0$1 === true) {
                        return globalThis.Object.freeze([
                          true,
                          element1$1
                        ])
                      }
                      return globalThis.Object.freeze([
                        false,
                        element1$1
                      ]);
                    }
                    return globalThis.Object.freeze([
                      false,
                      element1$1
                    ]);
                  }
                  return globalThis.Object.freeze([
                    false,
                    NofibPrelude.Nil
                  ]);
                }
                return globalThis.Object.freeze([
                  false,
                  NofibPrelude.Nil
                ]);
              }
              return globalThis.Object.freeze([
                false,
                NofibPrelude.Nil
              ]);
            }
            return globalThis.Object.freeze([
              false,
              NofibPrelude.Nil
            ]);
          }
      }
    }
  }
  static #termLsEq_termEq(id, param0, param1) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
            if (param0 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param0.head;
              arg$Cons$1$ = param0.tail;
              if (param1 instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$1 = param1.head;
                arg$Cons$1$1 = param1.tail;
                scrut = boyer.#termLsEq_termEq(1, arg$Cons$0$, arg$Cons$0$1);
                if (scrut === true) {
                  param0 = arg$Cons$1$;
                  param1 = arg$Cons$1$1;
                  id = 0;
                  continue loopLabel
                }
                return false;
              }
              return true;
            }
            return true;
          }
        case 1:
          {
            let scrut, scrut1, arg$Fun$0$, arg$Fun$1$, arg$Fun$0$1, arg$Fun$1$1, arg$Var$0$, arg$Var$0$1;
            if (param0 instanceof boyer.Var.class) {
              arg$Var$0$ = param0.i;
              if (param1 instanceof boyer.Var.class) {
                arg$Var$0$1 = param1.i;
                return arg$Var$0$ === arg$Var$0$1
              }
              return false;
            } else if (param0 instanceof boyer.Fun.class) {
              arg$Fun$0$ = param0.i;
              arg$Fun$1$ = param0.t;
              if (param1 instanceof boyer.Fun.class) {
                arg$Fun$0$1 = param1.i;
                arg$Fun$1$1 = param1.t;
                scrut = arg$Fun$0$ === arg$Fun$0$1;
                if (scrut === true) {
                  scrut1 = boyer.#termLsEq_termEq(0, arg$Fun$1$, arg$Fun$1$1);
                  if (scrut1 === true) {
                    return true
                  }
                  return false;
                }
                return false;
              }
              return false;
            }
            return false;
          }
      }
    }
  }
  static #termLsEq(h1t1, h2t2) {
    return boyer.#termLsEq_termEq(0, h1t1, h2t2)
  }
  static #termEq(t1, t2) {
    return boyer.#termLsEq_termEq(1, t1, t2)
  }
  static #termInList(term, ht) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ht instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ht.head;
        arg$Cons$1$ = ht.tail;
        scrut = boyer.#termEq(term, arg$Cons$0$);
        if (scrut === true) {
          return true
        }
        ht = arg$Cons$1$;
        continue loopLabel;
      } else if (ht instanceof NofibPrelude.Nil.class) {
        return false
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #find(vid, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return globalThis.Object.freeze([
          false,
          boyer.ERROR
        ])
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          scrut = vid === element0$;
          if (scrut === true) {
            return globalThis.Object.freeze([
              true,
              element1$
            ])
          }
          ls = arg$Cons$1$;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #one_way_unify1(term1, term2, subst) {
    return boyer.#one_way_unify1_one_way_unify1_lst(0, term1, term2, subst)
  }
  static #one_way_unify1_lst(tts1, tts2, subst) {
    return boyer.#one_way_unify1_one_way_unify1_lst(1, tts1, tts2, subst)
  }
  static #one_way_unify(term1, term2) {
    return boyer.#one_way_unify1(term1, term2, NofibPrelude.Nil)
  }
  static #apply_subst(subst, t) {
    let scrut, arg$Fun$0$, arg$Fun$1$, arg$Fun$2$, arg$Var$0$, element1$, element0$, tmp;
    if (t instanceof boyer.Var.class) {
      arg$Var$0$ = t.i;
      scrut = boyer.#find(arg$Var$0$, subst);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        if (element0$ === true) {
          return element1$
        }
        return boyer.Var(arg$Var$0$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (t instanceof boyer.Fun.class) {
      arg$Fun$0$ = t.i;
      arg$Fun$1$ = t.t;
      arg$Fun$2$ = t.l;
      tmp = NofibPrelude.map(lambda$(boyer, subst), arg$Fun$1$);
      return boyer.Fun(arg$Fun$0$, tmp, arg$Fun$2$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rewrite_with_lemmas_helper(term, lss) {
    return boyer.#rewrite_with_lemmas_helper_rewrite_with_lemmas_rewrite(0, term, lss)
  }
  static #rewrite_with_lemmas(term, lss) {
    return boyer.#rewrite_with_lemmas_helper_rewrite_with_lemmas_rewrite(1, term, lss)
  }
  static #rewrite(t) {
    return boyer.#rewrite_with_lemmas_helper_rewrite_with_lemmas_rewrite(2, t, undefined)
  }
  static #truep(x, l) {
    let arg$Fun$0$;
    if (x instanceof boyer.Fun.class) {
      arg$Fun$0$ = x.i;
      if (arg$Fun$0$ instanceof boyer.TRUE.class) {
        return true
      }
      return boyer.#termInList(x, l);
    }
    return boyer.#termInList(x, l);
  }
  static #falsep(x, l) {
    let arg$Fun$0$;
    if (x instanceof boyer.Fun.class) {
      arg$Fun$0$ = x.i;
      if (arg$Fun$0$ instanceof boyer.FALSE.class) {
        return true
      }
      return boyer.#termInList(x, l);
    }
    return boyer.#termInList(x, l);
  }
  static #tautologyp(x, true_lst, false_lst) {
    loopLabel: while (true) {
      let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, arg$Fun$0$, arg$Fun$1$, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, tmp, tmp1;
      scrut = boyer.#truep(x, true_lst);
      if (scrut === true) {
        return true
      }
      scrut1 = boyer.#falsep(x, false_lst);
      if (scrut1 === true) {
        return false
      }
      if (x instanceof boyer.Fun.class) {
        arg$Fun$0$ = x.i;
        arg$Fun$1$ = x.t;
        if (arg$Fun$0$ instanceof boyer.IF.class) {
          if (arg$Fun$1$ instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = arg$Fun$1$.head;
            arg$Cons$1$ = arg$Fun$1$.tail;
            if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$1 = arg$Cons$1$.head;
              arg$Cons$1$1 = arg$Cons$1$.tail;
              if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$2 = arg$Cons$1$1.head;
                arg$Cons$1$2 = arg$Cons$1$1.tail;
                if (arg$Cons$1$2 instanceof NofibPrelude.Nil.class) {
                  scrut2 = boyer.#truep(arg$Cons$0$, true_lst);
                  if (scrut2 === true) {
                    x = arg$Cons$0$1;
                    continue loopLabel
                  }
                  scrut3 = boyer.#falsep(arg$Cons$0$, false_lst);
                  if (scrut3 === true) {
                    x = arg$Cons$0$2;
                    continue loopLabel
                  }
                  tmp = NofibPrelude.Cons(arg$Cons$0$, true_lst);
                  scrut4 = boyer.#tautologyp(arg$Cons$0$1, tmp, false_lst);
                  if (scrut4 === true) {
                    tmp1 = NofibPrelude.Cons(arg$Cons$0$, false_lst);
                    scrut5 = boyer.#tautologyp(arg$Cons$0$2, true_lst, tmp1);
                    if (scrut5 === true) {
                      return true
                    }
                    return false;
                  }
                  return false;
                }
                return false;
              }
              return false;
            }
            return false;
          }
          return false;
        }
        return false;
      }
      return false;
    }
  }
  static #tautp(x) {
    let tmp;
    tmp = boyer.#rewrite(x);
    return boyer.#tautologyp(tmp, NofibPrelude.Nil, NofibPrelude.Nil)
  }
  static #test0(xxxx) {
    let a, b, c, d, u, w, x, y, z, boyerFalse, nil, boyerTrue, zero, subst0, theorem, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, tmp34, inlinedVal7, tmp35, inlinedVal8, tmp36, inlinedVal9;
    a = boyer.Var(boyer.A);
    b = boyer.Var(boyer.B);
    c = boyer.Var(boyer.C);
    d = boyer.Var(boyer.D);
    u = boyer.Var(boyer.U);
    w = boyer.Var(boyer.W);
    x = boyer.Var(boyer.X);
    y = boyer.Var(boyer.Y);
    z = boyer.Var(boyer.Z);
    inlinedVal = NofibPrelude.Lazy(lambda38);
    boyerFalse = boyer.Fun(boyer.FALSE, NofibPrelude.Nil, inlinedVal);
    inlinedVal1 = NofibPrelude.Lazy(lambda39);
    nil = boyer.Fun(boyer.NIL, NofibPrelude.Nil, inlinedVal1);
    inlinedVal2 = NofibPrelude.Lazy(lambda40);
    boyerTrue = boyer.Fun(boyer.TRUE, NofibPrelude.Nil, inlinedVal2);
    inlinedVal3 = NofibPrelude.Lazy(lambda41);
    zero = boyer.Fun(boyer.ZERO, NofibPrelude.Nil, inlinedVal3);
    tmp = plus(boyer, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b);
    tmp1 = plus(boyer, u, w, x, y, z, boyerFalse, boyerTrue, zero, c, zero);
    tmp2 = plus(boyer, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp, tmp1);
    tmp36 = NofibPrelude.Cons(tmp2, NofibPrelude.Nil);
    inlinedVal9 = NofibPrelude.Lazy(lambda16);
    inlinedVal4 = boyer.Fun(boyer.F, tmp36, inlinedVal9);
    tmp3 = globalThis.Object.freeze([
      boyer.X,
      inlinedVal4
    ]);
    tmp4 = times(boyer, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b);
    tmp5 = plus(boyer, u, w, x, y, z, boyerFalse, boyerTrue, zero, c, d);
    tmp6 = times(boyer, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp4, tmp5);
    tmp35 = NofibPrelude.Cons(tmp6, NofibPrelude.Nil);
    inlinedVal8 = NofibPrelude.Lazy(lambda16);
    inlinedVal5 = boyer.Fun(boyer.F, tmp35, inlinedVal8);
    tmp7 = globalThis.Object.freeze([
      boyer.Y,
      inlinedVal5
    ]);
    tmp8 = append_(boyer, x, y, z, a, b);
    tmp9 = append_(boyer, x, y, z, tmp8, nil);
    tmp10 = reverse_(boyer, x, y, z, tmp9);
    tmp34 = NofibPrelude.Cons(tmp10, NofibPrelude.Nil);
    inlinedVal7 = NofibPrelude.Lazy(lambda16);
    inlinedVal6 = boyer.Fun(boyer.F, tmp34, inlinedVal7);
    tmp11 = globalThis.Object.freeze([
      boyer.Z,
      inlinedVal6
    ]);
    tmp12 = plus(boyer, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b);
    tmp13 = difference(boyer, u, w, x, y, z, boyerFalse, boyerTrue, zero, x, y);
    tmp14 = equal(boyer, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp12, tmp13);
    tmp15 = globalThis.Object.freeze([
      boyer.U,
      tmp14
    ]);
    tmp16 = remainder(boyer, u, w, x, y, z, boyerFalse, boyerTrue, zero, a, b);
    tmp17 = length_(boyer, u, w, x, y, z, boyerFalse, boyerTrue, zero, b);
    tmp18 = member(boyer, u, w, x, y, z, boyerFalse, boyerTrue, a, tmp17);
    tmp19 = lessp(boyer, u, w, x, y, z, boyerFalse, boyerTrue, zero, tmp16, tmp18);
    tmp20 = globalThis.Object.freeze([
      boyer.W,
      tmp19
    ]);
    tmp21 = NofibPrelude.Cons(tmp20, NofibPrelude.Nil);
    tmp22 = NofibPrelude.Cons(tmp15, tmp21);
    tmp23 = NofibPrelude.Cons(tmp11, tmp22);
    tmp24 = NofibPrelude.Cons(tmp7, tmp23);
    subst0 = NofibPrelude.Cons(tmp3, tmp24);
    tmp25 = implies(boyer, u, w, x, y, z, boyerFalse, boyerTrue, xxxx, y);
    tmp26 = implies(boyer, u, w, x, y, z, boyerFalse, boyerTrue, y, z);
    tmp27 = implies(boyer, u, w, x, y, z, boyerFalse, boyerTrue, z, u);
    tmp28 = implies(boyer, u, w, x, y, z, boyerFalse, boyerTrue, u, w);
    tmp29 = and_(boyer, u, w, x, y, z, boyerFalse, boyerTrue, tmp27, tmp28);
    tmp30 = and_(boyer, u, w, x, y, z, boyerFalse, boyerTrue, tmp26, tmp29);
    tmp31 = and_(boyer, u, w, x, y, z, boyerFalse, boyerTrue, tmp25, tmp30);
    tmp32 = implies(boyer, u, w, x, y, z, boyerFalse, boyerTrue, x, w);
    theorem = implies(boyer, u, w, x, y, z, boyerFalse, boyerTrue, tmp31, tmp32);
    tmp33 = boyer.#apply_subst(subst0, theorem);
    return boyer.#tautp(tmp33)
  }
  static #testBoyer_nofib(n) {
    let tmp, tmp1;
    tmp = boyer.Var(boyer.X);
    tmp1 = NofibPrelude.replicate(n, tmp);
    return NofibPrelude.all(boyer.#test0, tmp1)
  }
  static main() {
    return boyer.#testBoyer_nofib(5)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "boyer"];
});
export { quotient as _$_modulePrivate_$_quotient };
export { if_ as _$_modulePrivate_$_if_ };
export { sub1 as _$_modulePrivate_$_sub1 };
export { plus as _$_modulePrivate_$_plus };
export { f as _$_modulePrivate_$_f };
export { implies as _$_modulePrivate_$_implies };
export { times as _$_modulePrivate_$_times };
export { exp_ as _$_modulePrivate_$_exp_ };
export { gcd_ as _$_modulePrivate_$_gcd_ };
export { difference as _$_modulePrivate_$_difference };
export { nlistp as _$_modulePrivate_$_nlistp };
export { one as _$_modulePrivate_$_one };
export { remainder as _$_modulePrivate_$_remainder };
export { four as _$_modulePrivate_$_four };
export { and_ as _$_modulePrivate_$_and_ };
export { reverse_ as _$_modulePrivate_$_reverse_ };
export { greaterp as _$_modulePrivate_$_greaterp };
export { or_ as _$_modulePrivate_$_or_ };
export { odd_ as _$_modulePrivate_$_odd_ };
export { two as _$_modulePrivate_$_two };
export { lessp as _$_modulePrivate_$_lessp };
export { cons as _$_modulePrivate_$_cons };
export { add1 as _$_modulePrivate_$_add1 };
export { divides as _$_modulePrivate_$_divides };
export { nilp as _$_modulePrivate_$_nilp };
export { listp as _$_modulePrivate_$_listp };
export { consp as _$_modulePrivate_$_consp };
export { lesseqp as _$_modulePrivate_$_lesseqp };
export { equal as _$_modulePrivate_$_equal };
export { append_ as _$_modulePrivate_$_append_ };
export { greatereqp as _$_modulePrivate_$_greatereqp };
export { member as _$_modulePrivate_$_member };
export { zerop as _$_modulePrivate_$_zerop };
export { not_ as _$_modulePrivate_$_not_ };
export { iff as _$_modulePrivate_$_iff };
export { length_ as _$_modulePrivate_$_length_ };
export { even_ as _$_modulePrivate_$_even_ };
export { boyer1 as _$_modulePrivate_$_boyer };
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
export default boyer1;
