const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_r as r } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
let lscomp, banner1, lambda, lambda1;
lscomp = function lscomp(c, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        scrut = element0$ === c;
        if (scrut === true) {
          tmp = lscomp(c, arg$Cons$1$);
          return NofibPrelude.Cons(element1$, tmp)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda1 = (undefined, function (xs, ys) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.Cons(" ", NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(" ", tmp);
  tmp2 = NofibPrelude.append(tmp1, ys);
  return NofibPrelude.append(xs, tmp2)
});
lambda = (undefined, function (x) {
  let tmp;
  tmp = NofibPrelude.Cons("\n", NofibPrelude.Nil);
  return NofibPrelude.append(x, tmp)
});
(class banner {
  static {
    banner1 = this
  }
  static #blank;
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, tmp219, tmp220, tmp221, tmp222, tmp223, tmp224, tmp225, tmp226, tmp227, tmp228, tmp229, tmp230, tmp231, tmp232, tmp233, tmp234, tmp235, tmp236, tmp237, tmp238, tmp239, tmp240, tmp241, tmp242, tmp243, tmp244, tmp245, tmp246, tmp247, tmp248, tmp249, tmp250, tmp251, tmp252, tmp253, tmp254, tmp255, tmp256, tmp257, tmp258, tmp259, tmp260, tmp261, tmp262, tmp263, tmp264, tmp265, tmp266, tmp267, tmp268, tmp269, tmp270, tmp271, tmp272, tmp273, tmp274, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, inlinedVal21, inlinedVal22, inlinedVal23, inlinedVal24, inlinedVal25, inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30, inlinedVal31, inlinedVal32, inlinedVal33, inlinedVal34, inlinedVal35, inlinedVal36, inlinedVal37, inlinedVal38, inlinedVal39, inlinedVal40, inlinedVal41, inlinedVal42, inlinedVal43, inlinedVal44, inlinedVal45, inlinedVal46, inlinedVal47, inlinedVal48, inlinedVal49, inlinedVal50, inlinedVal51, inlinedVal52, inlinedVal53, inlinedVal54, inlinedVal55, inlinedVal56, inlinedVal57, inlinedVal58, inlinedVal59, inlinedVal60, inlinedVal61, inlinedVal62, inlinedVal63, inlinedVal64, inlinedVal65, inlinedVal66, inlinedVal67, inlinedVal68, inlinedVal69, inlinedVal70, inlinedVal71, inlinedVal72, inlinedVal73, inlinedVal74, inlinedVal75, inlinedVal76, inlinedVal77, inlinedVal78, inlinedVal79, inlinedVal80, inlinedVal81, inlinedVal82, inlinedVal83, inlinedVal84, inlinedVal85, inlinedVal86, inlinedVal87, inlinedVal88, inlinedVal89, inlinedVal90, inlinedVal91, inlinedVal92, inlinedVal93, inlinedVal94, inlinedVal95, inlinedVal96, inlinedVal97, inlinedVal98, inlinedVal99, inlinedVal100, inlinedVal101, inlinedVal102, inlinedVal103, inlinedVal104, inlinedVal105, inlinedVal106, inlinedVal107, inlinedVal108, inlinedVal109, inlinedVal110, inlinedVal111, inlinedVal112, inlinedVal113, inlinedVal114, inlinedVal115, inlinedVal116, inlinedVal117, inlinedVal118, inlinedVal119, inlinedVal120, inlinedVal121, inlinedVal122, inlinedVal123, inlinedVal124, inlinedVal125, inlinedVal126, inlinedVal127, inlinedVal128, inlinedVal129, inlinedVal130, inlinedVal131, inlinedVal132, inlinedVal133, inlinedVal134, inlinedVal135, inlinedVal136, inlinedVal137, inlinedVal138, inlinedVal139, inlinedVal140, inlinedVal141, inlinedVal142, inlinedVal143, inlinedVal144, inlinedVal145, inlinedVal146, inlinedVal147, inlinedVal148, inlinedVal149, inlinedVal150, inlinedVal151, inlinedVal152, inlinedVal153, inlinedVal154, inlinedVal155, inlinedVal156, inlinedVal157, inlinedVal158, inlinedVal159, inlinedVal160, inlinedVal161, inlinedVal162, inlinedVal163, inlinedVal164, inlinedVal165, inlinedVal166, inlinedVal167, inlinedVal168, inlinedVal169, inlinedVal170, inlinedVal171, inlinedVal172, inlinedVal173, inlinedVal174, inlinedVal175, inlinedVal176, inlinedVal177, inlinedVal178, inlinedVal179, inlinedVal180, inlinedVal181, inlinedVal182, inlinedVal183, inlinedVal184, inlinedVal185, inlinedVal186, inlinedVal187, inlinedVal188, inlinedVal189, inlinedVal190, inlinedVal191, inlinedVal192, inlinedVal193, inlinedVal194, inlinedVal195, inlinedVal196, inlinedVal197, inlinedVal198, inlinedVal199, inlinedVal200, inlinedVal201, inlinedVal202, inlinedVal203, inlinedVal204, inlinedVal205, inlinedVal206, inlinedVal207, inlinedVal208, inlinedVal209, inlinedVal210, inlinedVal211, inlinedVal212, inlinedVal213, inlinedVal214, inlinedVal215, inlinedVal216, inlinedVal217, inlinedVal218, inlinedVal219, inlinedVal220, inlinedVal221, inlinedVal222, inlinedVal223, inlinedVal224;
    inlinedVal = go(NofibPrelude, "     ", 0);
    inlinedVal1 = go(NofibPrelude, "     ", 0);
    inlinedVal2 = go(NofibPrelude, "     ", 0);
    inlinedVal3 = go(NofibPrelude, "     ", 0);
    inlinedVal4 = go(NofibPrelude, "     ", 0);
    tmp = NofibPrelude.Cons(inlinedVal4, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(inlinedVal3, tmp);
    tmp2 = NofibPrelude.Cons(inlinedVal2, tmp1);
    tmp3 = NofibPrelude.Cons(inlinedVal1, tmp2);
    tmp4 = NofibPrelude.Cons(inlinedVal, tmp3);
    banner.#blank = tmp4;
    inlinedVal5 = go(NofibPrelude, "  A  ", 0);
    inlinedVal6 = go(NofibPrelude, " A A ", 0);
    inlinedVal7 = go(NofibPrelude, "AAAAA", 0);
    inlinedVal8 = go(NofibPrelude, "A   A", 0);
    inlinedVal9 = go(NofibPrelude, "A   A", 0);
    tmp5 = NofibPrelude.Cons(inlinedVal9, NofibPrelude.Nil);
    tmp6 = NofibPrelude.Cons(inlinedVal8, tmp5);
    tmp7 = NofibPrelude.Cons(inlinedVal7, tmp6);
    tmp8 = NofibPrelude.Cons(inlinedVal6, tmp7);
    tmp9 = NofibPrelude.Cons(inlinedVal5, tmp8);
    inlinedVal10 = go(NofibPrelude, "BBBB ", 0);
    inlinedVal11 = go(NofibPrelude, "B   B", 0);
    inlinedVal12 = go(NofibPrelude, "BBBB ", 0);
    inlinedVal13 = go(NofibPrelude, "B   B", 0);
    inlinedVal14 = go(NofibPrelude, "BBBB ", 0);
    tmp10 = NofibPrelude.Cons(inlinedVal14, NofibPrelude.Nil);
    tmp11 = NofibPrelude.Cons(inlinedVal13, tmp10);
    tmp12 = NofibPrelude.Cons(inlinedVal12, tmp11);
    tmp13 = NofibPrelude.Cons(inlinedVal11, tmp12);
    tmp14 = NofibPrelude.Cons(inlinedVal10, tmp13);
    inlinedVal15 = go(NofibPrelude, " CCCC", 0);
    inlinedVal16 = go(NofibPrelude, "C    ", 0);
    inlinedVal17 = go(NofibPrelude, "C    ", 0);
    inlinedVal18 = go(NofibPrelude, "C    ", 0);
    inlinedVal19 = go(NofibPrelude, " CCCC", 0);
    tmp15 = NofibPrelude.Cons(inlinedVal19, NofibPrelude.Nil);
    tmp16 = NofibPrelude.Cons(inlinedVal18, tmp15);
    tmp17 = NofibPrelude.Cons(inlinedVal17, tmp16);
    tmp18 = NofibPrelude.Cons(inlinedVal16, tmp17);
    tmp19 = NofibPrelude.Cons(inlinedVal15, tmp18);
    inlinedVal20 = go(NofibPrelude, "DDDD ", 0);
    inlinedVal21 = go(NofibPrelude, "D   D", 0);
    inlinedVal22 = go(NofibPrelude, "D   D", 0);
    inlinedVal23 = go(NofibPrelude, "D   D", 0);
    inlinedVal24 = go(NofibPrelude, "DDDD ", 0);
    tmp20 = NofibPrelude.Cons(inlinedVal24, NofibPrelude.Nil);
    tmp21 = NofibPrelude.Cons(inlinedVal23, tmp20);
    tmp22 = NofibPrelude.Cons(inlinedVal22, tmp21);
    tmp23 = NofibPrelude.Cons(inlinedVal21, tmp22);
    tmp24 = NofibPrelude.Cons(inlinedVal20, tmp23);
    inlinedVal25 = go(NofibPrelude, "EEEEE", 0);
    inlinedVal26 = go(NofibPrelude, "E    ", 0);
    inlinedVal27 = go(NofibPrelude, "EEEEE", 0);
    inlinedVal28 = go(NofibPrelude, "E    ", 0);
    inlinedVal29 = go(NofibPrelude, "EEEEE", 0);
    tmp25 = NofibPrelude.Cons(inlinedVal29, NofibPrelude.Nil);
    tmp26 = NofibPrelude.Cons(inlinedVal28, tmp25);
    tmp27 = NofibPrelude.Cons(inlinedVal27, tmp26);
    tmp28 = NofibPrelude.Cons(inlinedVal26, tmp27);
    tmp29 = NofibPrelude.Cons(inlinedVal25, tmp28);
    inlinedVal30 = go(NofibPrelude, "FFFFF", 0);
    inlinedVal31 = go(NofibPrelude, "F    ", 0);
    inlinedVal32 = go(NofibPrelude, "FFFF ", 0);
    inlinedVal33 = go(NofibPrelude, "F    ", 0);
    inlinedVal34 = go(NofibPrelude, "F    ", 0);
    tmp30 = NofibPrelude.Cons(inlinedVal34, NofibPrelude.Nil);
    tmp31 = NofibPrelude.Cons(inlinedVal33, tmp30);
    tmp32 = NofibPrelude.Cons(inlinedVal32, tmp31);
    tmp33 = NofibPrelude.Cons(inlinedVal31, tmp32);
    tmp34 = NofibPrelude.Cons(inlinedVal30, tmp33);
    inlinedVal35 = go(NofibPrelude, " GGGG", 0);
    inlinedVal36 = go(NofibPrelude, "G    ", 0);
    inlinedVal37 = go(NofibPrelude, "G  GG", 0);
    inlinedVal38 = go(NofibPrelude, "G   G", 0);
    inlinedVal39 = go(NofibPrelude, " GGG ", 0);
    tmp35 = NofibPrelude.Cons(inlinedVal39, NofibPrelude.Nil);
    tmp36 = NofibPrelude.Cons(inlinedVal38, tmp35);
    tmp37 = NofibPrelude.Cons(inlinedVal37, tmp36);
    tmp38 = NofibPrelude.Cons(inlinedVal36, tmp37);
    tmp39 = NofibPrelude.Cons(inlinedVal35, tmp38);
    inlinedVal40 = go(NofibPrelude, "H   H", 0);
    inlinedVal41 = go(NofibPrelude, "H   H", 0);
    inlinedVal42 = go(NofibPrelude, "HHHHH", 0);
    inlinedVal43 = go(NofibPrelude, "H   H", 0);
    inlinedVal44 = go(NofibPrelude, "H   H", 0);
    tmp40 = NofibPrelude.Cons(inlinedVal44, NofibPrelude.Nil);
    tmp41 = NofibPrelude.Cons(inlinedVal43, tmp40);
    tmp42 = NofibPrelude.Cons(inlinedVal42, tmp41);
    tmp43 = NofibPrelude.Cons(inlinedVal41, tmp42);
    tmp44 = NofibPrelude.Cons(inlinedVal40, tmp43);
    inlinedVal45 = go(NofibPrelude, "IIIII", 0);
    inlinedVal46 = go(NofibPrelude, "  I  ", 0);
    inlinedVal47 = go(NofibPrelude, "  I  ", 0);
    inlinedVal48 = go(NofibPrelude, "  I  ", 0);
    inlinedVal49 = go(NofibPrelude, "IIIII", 0);
    tmp45 = NofibPrelude.Cons(inlinedVal49, NofibPrelude.Nil);
    tmp46 = NofibPrelude.Cons(inlinedVal48, tmp45);
    tmp47 = NofibPrelude.Cons(inlinedVal47, tmp46);
    tmp48 = NofibPrelude.Cons(inlinedVal46, tmp47);
    tmp49 = NofibPrelude.Cons(inlinedVal45, tmp48);
    inlinedVal50 = go(NofibPrelude, "JJJJJ", 0);
    inlinedVal51 = go(NofibPrelude, "   J ", 0);
    inlinedVal52 = go(NofibPrelude, "   J ", 0);
    inlinedVal53 = go(NofibPrelude, "J  J ", 0);
    inlinedVal54 = go(NofibPrelude, " JJ  ", 0);
    tmp50 = NofibPrelude.Cons(inlinedVal54, NofibPrelude.Nil);
    tmp51 = NofibPrelude.Cons(inlinedVal53, tmp50);
    tmp52 = NofibPrelude.Cons(inlinedVal52, tmp51);
    tmp53 = NofibPrelude.Cons(inlinedVal51, tmp52);
    tmp54 = NofibPrelude.Cons(inlinedVal50, tmp53);
    inlinedVal55 = go(NofibPrelude, "K   K", 0);
    inlinedVal56 = go(NofibPrelude, "K  K ", 0);
    inlinedVal57 = go(NofibPrelude, "KKK  ", 0);
    inlinedVal58 = go(NofibPrelude, "K  K ", 0);
    inlinedVal59 = go(NofibPrelude, "K   K", 0);
    tmp55 = NofibPrelude.Cons(inlinedVal59, NofibPrelude.Nil);
    tmp56 = NofibPrelude.Cons(inlinedVal58, tmp55);
    tmp57 = NofibPrelude.Cons(inlinedVal57, tmp56);
    tmp58 = NofibPrelude.Cons(inlinedVal56, tmp57);
    tmp59 = NofibPrelude.Cons(inlinedVal55, tmp58);
    inlinedVal60 = go(NofibPrelude, "L    ", 0);
    inlinedVal61 = go(NofibPrelude, "L    ", 0);
    inlinedVal62 = go(NofibPrelude, "L    ", 0);
    inlinedVal63 = go(NofibPrelude, "L    ", 0);
    inlinedVal64 = go(NofibPrelude, "LLLLL", 0);
    tmp60 = NofibPrelude.Cons(inlinedVal64, NofibPrelude.Nil);
    tmp61 = NofibPrelude.Cons(inlinedVal63, tmp60);
    tmp62 = NofibPrelude.Cons(inlinedVal62, tmp61);
    tmp63 = NofibPrelude.Cons(inlinedVal61, tmp62);
    tmp64 = NofibPrelude.Cons(inlinedVal60, tmp63);
    inlinedVal65 = go(NofibPrelude, "M   M", 0);
    inlinedVal66 = go(NofibPrelude, "MM MM", 0);
    inlinedVal67 = go(NofibPrelude, "M M M", 0);
    inlinedVal68 = go(NofibPrelude, "M   M", 0);
    inlinedVal69 = go(NofibPrelude, "M   M", 0);
    tmp65 = NofibPrelude.Cons(inlinedVal69, NofibPrelude.Nil);
    tmp66 = NofibPrelude.Cons(inlinedVal68, tmp65);
    tmp67 = NofibPrelude.Cons(inlinedVal67, tmp66);
    tmp68 = NofibPrelude.Cons(inlinedVal66, tmp67);
    tmp69 = NofibPrelude.Cons(inlinedVal65, tmp68);
    inlinedVal70 = go(NofibPrelude, "N   N", 0);
    inlinedVal71 = go(NofibPrelude, "NN  N", 0);
    inlinedVal72 = go(NofibPrelude, "N N N", 0);
    inlinedVal73 = go(NofibPrelude, "N  NN", 0);
    inlinedVal74 = go(NofibPrelude, "N   N", 0);
    tmp70 = NofibPrelude.Cons(inlinedVal74, NofibPrelude.Nil);
    tmp71 = NofibPrelude.Cons(inlinedVal73, tmp70);
    tmp72 = NofibPrelude.Cons(inlinedVal72, tmp71);
    tmp73 = NofibPrelude.Cons(inlinedVal71, tmp72);
    tmp74 = NofibPrelude.Cons(inlinedVal70, tmp73);
    inlinedVal75 = go(NofibPrelude, " OOO ", 0);
    inlinedVal76 = go(NofibPrelude, "O   O", 0);
    inlinedVal77 = go(NofibPrelude, "O   O", 0);
    inlinedVal78 = go(NofibPrelude, "O   O", 0);
    inlinedVal79 = go(NofibPrelude, " OOO ", 0);
    tmp75 = NofibPrelude.Cons(inlinedVal79, NofibPrelude.Nil);
    tmp76 = NofibPrelude.Cons(inlinedVal78, tmp75);
    tmp77 = NofibPrelude.Cons(inlinedVal77, tmp76);
    tmp78 = NofibPrelude.Cons(inlinedVal76, tmp77);
    tmp79 = NofibPrelude.Cons(inlinedVal75, tmp78);
    inlinedVal80 = go(NofibPrelude, "PPPP ", 0);
    inlinedVal81 = go(NofibPrelude, "P   P", 0);
    inlinedVal82 = go(NofibPrelude, "PPPP ", 0);
    inlinedVal83 = go(NofibPrelude, "P    ", 0);
    inlinedVal84 = go(NofibPrelude, "P    ", 0);
    tmp80 = NofibPrelude.Cons(inlinedVal84, NofibPrelude.Nil);
    tmp81 = NofibPrelude.Cons(inlinedVal83, tmp80);
    tmp82 = NofibPrelude.Cons(inlinedVal82, tmp81);
    tmp83 = NofibPrelude.Cons(inlinedVal81, tmp82);
    tmp84 = NofibPrelude.Cons(inlinedVal80, tmp83);
    inlinedVal85 = go(NofibPrelude, " QQQ ", 0);
    inlinedVal86 = go(NofibPrelude, "Q   Q", 0);
    inlinedVal87 = go(NofibPrelude, "Q Q Q", 0);
    inlinedVal88 = go(NofibPrelude, "Q  Q ", 0);
    inlinedVal89 = go(NofibPrelude, " QQ Q", 0);
    tmp85 = NofibPrelude.Cons(inlinedVal89, NofibPrelude.Nil);
    tmp86 = NofibPrelude.Cons(inlinedVal88, tmp85);
    tmp87 = NofibPrelude.Cons(inlinedVal87, tmp86);
    tmp88 = NofibPrelude.Cons(inlinedVal86, tmp87);
    tmp89 = NofibPrelude.Cons(inlinedVal85, tmp88);
    inlinedVal90 = go(NofibPrelude, "RRRR ", 0);
    inlinedVal91 = go(NofibPrelude, "R   R", 0);
    inlinedVal92 = go(NofibPrelude, "RRRR ", 0);
    inlinedVal93 = go(NofibPrelude, "R  R ", 0);
    inlinedVal94 = go(NofibPrelude, "R   R", 0);
    tmp90 = NofibPrelude.Cons(inlinedVal94, NofibPrelude.Nil);
    tmp91 = NofibPrelude.Cons(inlinedVal93, tmp90);
    tmp92 = NofibPrelude.Cons(inlinedVal92, tmp91);
    tmp93 = NofibPrelude.Cons(inlinedVal91, tmp92);
    tmp94 = NofibPrelude.Cons(inlinedVal90, tmp93);
    inlinedVal95 = go(NofibPrelude, " SSSS", 0);
    inlinedVal96 = go(NofibPrelude, "S    ", 0);
    inlinedVal97 = go(NofibPrelude, " SSS ", 0);
    inlinedVal98 = go(NofibPrelude, "    S", 0);
    inlinedVal99 = go(NofibPrelude, "SSSS ", 0);
    tmp95 = NofibPrelude.Cons(inlinedVal99, NofibPrelude.Nil);
    tmp96 = NofibPrelude.Cons(inlinedVal98, tmp95);
    tmp97 = NofibPrelude.Cons(inlinedVal97, tmp96);
    tmp98 = NofibPrelude.Cons(inlinedVal96, tmp97);
    tmp99 = NofibPrelude.Cons(inlinedVal95, tmp98);
    inlinedVal100 = go(NofibPrelude, "TTTTT", 0);
    inlinedVal101 = go(NofibPrelude, "  T  ", 0);
    inlinedVal102 = go(NofibPrelude, "  T  ", 0);
    inlinedVal103 = go(NofibPrelude, "  T  ", 0);
    inlinedVal104 = go(NofibPrelude, "  T  ", 0);
    tmp100 = NofibPrelude.Cons(inlinedVal104, NofibPrelude.Nil);
    tmp101 = NofibPrelude.Cons(inlinedVal103, tmp100);
    tmp102 = NofibPrelude.Cons(inlinedVal102, tmp101);
    tmp103 = NofibPrelude.Cons(inlinedVal101, tmp102);
    tmp104 = NofibPrelude.Cons(inlinedVal100, tmp103);
    inlinedVal105 = go(NofibPrelude, "U   U", 0);
    inlinedVal106 = go(NofibPrelude, "U   U", 0);
    inlinedVal107 = go(NofibPrelude, "U   U", 0);
    inlinedVal108 = go(NofibPrelude, "U   U", 0);
    inlinedVal109 = go(NofibPrelude, " UUU ", 0);
    tmp105 = NofibPrelude.Cons(inlinedVal109, NofibPrelude.Nil);
    tmp106 = NofibPrelude.Cons(inlinedVal108, tmp105);
    tmp107 = NofibPrelude.Cons(inlinedVal107, tmp106);
    tmp108 = NofibPrelude.Cons(inlinedVal106, tmp107);
    tmp109 = NofibPrelude.Cons(inlinedVal105, tmp108);
    inlinedVal110 = go(NofibPrelude, "V   V", 0);
    inlinedVal111 = go(NofibPrelude, "V   V", 0);
    inlinedVal112 = go(NofibPrelude, "V   V", 0);
    inlinedVal113 = go(NofibPrelude, " V V ", 0);
    inlinedVal114 = go(NofibPrelude, "  V  ", 0);
    tmp110 = NofibPrelude.Cons(inlinedVal114, NofibPrelude.Nil);
    tmp111 = NofibPrelude.Cons(inlinedVal113, tmp110);
    tmp112 = NofibPrelude.Cons(inlinedVal112, tmp111);
    tmp113 = NofibPrelude.Cons(inlinedVal111, tmp112);
    tmp114 = NofibPrelude.Cons(inlinedVal110, tmp113);
    inlinedVal115 = go(NofibPrelude, "W   W", 0);
    inlinedVal116 = go(NofibPrelude, "W   W", 0);
    inlinedVal117 = go(NofibPrelude, "W   W", 0);
    inlinedVal118 = go(NofibPrelude, "W W W", 0);
    inlinedVal119 = go(NofibPrelude, " W W ", 0);
    tmp115 = NofibPrelude.Cons(inlinedVal119, NofibPrelude.Nil);
    tmp116 = NofibPrelude.Cons(inlinedVal118, tmp115);
    tmp117 = NofibPrelude.Cons(inlinedVal117, tmp116);
    tmp118 = NofibPrelude.Cons(inlinedVal116, tmp117);
    tmp119 = NofibPrelude.Cons(inlinedVal115, tmp118);
    inlinedVal120 = go(NofibPrelude, "X   X", 0);
    inlinedVal121 = go(NofibPrelude, " X X ", 0);
    inlinedVal122 = go(NofibPrelude, "  X  ", 0);
    inlinedVal123 = go(NofibPrelude, " X X ", 0);
    inlinedVal124 = go(NofibPrelude, "X   X", 0);
    tmp120 = NofibPrelude.Cons(inlinedVal124, NofibPrelude.Nil);
    tmp121 = NofibPrelude.Cons(inlinedVal123, tmp120);
    tmp122 = NofibPrelude.Cons(inlinedVal122, tmp121);
    tmp123 = NofibPrelude.Cons(inlinedVal121, tmp122);
    tmp124 = NofibPrelude.Cons(inlinedVal120, tmp123);
    inlinedVal125 = go(NofibPrelude, "Y   Y", 0);
    inlinedVal126 = go(NofibPrelude, " Y Y ", 0);
    inlinedVal127 = go(NofibPrelude, "  Y  ", 0);
    inlinedVal128 = go(NofibPrelude, "  Y  ", 0);
    inlinedVal129 = go(NofibPrelude, "  Y  ", 0);
    tmp125 = NofibPrelude.Cons(inlinedVal129, NofibPrelude.Nil);
    tmp126 = NofibPrelude.Cons(inlinedVal128, tmp125);
    tmp127 = NofibPrelude.Cons(inlinedVal127, tmp126);
    tmp128 = NofibPrelude.Cons(inlinedVal126, tmp127);
    tmp129 = NofibPrelude.Cons(inlinedVal125, tmp128);
    inlinedVal130 = go(NofibPrelude, "ZZZZZ", 0);
    inlinedVal131 = go(NofibPrelude, "   Z ", 0);
    inlinedVal132 = go(NofibPrelude, "  Z  ", 0);
    inlinedVal133 = go(NofibPrelude, " Z   ", 0);
    inlinedVal134 = go(NofibPrelude, "ZZZZZ", 0);
    tmp130 = NofibPrelude.Cons(inlinedVal134, NofibPrelude.Nil);
    tmp131 = NofibPrelude.Cons(inlinedVal133, tmp130);
    tmp132 = NofibPrelude.Cons(inlinedVal132, tmp131);
    tmp133 = NofibPrelude.Cons(inlinedVal131, tmp132);
    tmp134 = NofibPrelude.Cons(inlinedVal130, tmp133);
    tmp135 = NofibPrelude.Cons(tmp134, NofibPrelude.Nil);
    tmp136 = NofibPrelude.Cons(tmp129, tmp135);
    tmp137 = NofibPrelude.Cons(tmp124, tmp136);
    tmp138 = NofibPrelude.Cons(tmp119, tmp137);
    tmp139 = NofibPrelude.Cons(tmp114, tmp138);
    tmp140 = NofibPrelude.Cons(tmp109, tmp139);
    tmp141 = NofibPrelude.Cons(tmp104, tmp140);
    tmp142 = NofibPrelude.Cons(tmp99, tmp141);
    tmp143 = NofibPrelude.Cons(tmp94, tmp142);
    tmp144 = NofibPrelude.Cons(tmp89, tmp143);
    tmp145 = NofibPrelude.Cons(tmp84, tmp144);
    tmp146 = NofibPrelude.Cons(tmp79, tmp145);
    tmp147 = NofibPrelude.Cons(tmp74, tmp146);
    tmp148 = NofibPrelude.Cons(tmp69, tmp147);
    tmp149 = NofibPrelude.Cons(tmp64, tmp148);
    tmp150 = NofibPrelude.Cons(tmp59, tmp149);
    tmp151 = NofibPrelude.Cons(tmp54, tmp150);
    tmp152 = NofibPrelude.Cons(tmp49, tmp151);
    tmp153 = NofibPrelude.Cons(tmp44, tmp152);
    tmp154 = NofibPrelude.Cons(tmp39, tmp153);
    tmp155 = NofibPrelude.Cons(tmp34, tmp154);
    tmp156 = NofibPrelude.Cons(tmp29, tmp155);
    tmp157 = NofibPrelude.Cons(tmp24, tmp156);
    tmp158 = NofibPrelude.Cons(tmp19, tmp157);
    tmp159 = NofibPrelude.Cons(tmp14, tmp158);
    tmp160 = NofibPrelude.Cons(tmp9, tmp159);
    banner.alphas = tmp160;
    inlinedVal135 = go(NofibPrelude, "    ", 0);
    inlinedVal136 = go(NofibPrelude, "   ", 0);
    inlinedVal137 = go(NofibPrelude, "  ", 0);
    inlinedVal138 = go(NofibPrelude, " ", 0);
    inlinedVal139 = go(NofibPrelude, "", 0);
    tmp161 = NofibPrelude.Cons(inlinedVal139, NofibPrelude.Nil);
    tmp162 = NofibPrelude.Cons(inlinedVal138, tmp161);
    tmp163 = NofibPrelude.Cons(inlinedVal137, tmp162);
    tmp164 = NofibPrelude.Cons(inlinedVal136, tmp163);
    tmp165 = NofibPrelude.Cons(inlinedVal135, tmp164);
    banner.slant = tmp165;
    inlinedVal140 = go(NofibPrelude, "     ", 0);
    inlinedVal141 = go(NofibPrelude, "     ", 0);
    inlinedVal142 = go(NofibPrelude, "     ", 0);
    inlinedVal143 = go(NofibPrelude, "  .. ", 0);
    inlinedVal144 = go(NofibPrelude, "  .. ", 0);
    tmp166 = NofibPrelude.Cons(inlinedVal144, NofibPrelude.Nil);
    tmp167 = NofibPrelude.Cons(inlinedVal143, tmp166);
    tmp168 = NofibPrelude.Cons(inlinedVal142, tmp167);
    tmp169 = NofibPrelude.Cons(inlinedVal141, tmp168);
    tmp170 = NofibPrelude.Cons(inlinedVal140, tmp169);
    tmp171 = globalThis.Object.freeze([
      ".",
      tmp170
    ]);
    inlinedVal145 = go(NofibPrelude, " ??? ", 0);
    inlinedVal146 = go(NofibPrelude, "?   ?", 0);
    inlinedVal147 = go(NofibPrelude, "   ? ", 0);
    inlinedVal148 = go(NofibPrelude, "  ?  ", 0);
    inlinedVal149 = go(NofibPrelude, "  .  ", 0);
    tmp172 = NofibPrelude.Cons(inlinedVal149, NofibPrelude.Nil);
    tmp173 = NofibPrelude.Cons(inlinedVal148, tmp172);
    tmp174 = NofibPrelude.Cons(inlinedVal147, tmp173);
    tmp175 = NofibPrelude.Cons(inlinedVal146, tmp174);
    tmp176 = NofibPrelude.Cons(inlinedVal145, tmp175);
    tmp177 = globalThis.Object.freeze([
      "?",
      tmp176
    ]);
    inlinedVal150 = go(NofibPrelude, "  !  ", 0);
    inlinedVal151 = go(NofibPrelude, "  !  ", 0);
    inlinedVal152 = go(NofibPrelude, "  !  ", 0);
    inlinedVal153 = go(NofibPrelude, "  !  ", 0);
    inlinedVal154 = go(NofibPrelude, "  .  ", 0);
    tmp178 = NofibPrelude.Cons(inlinedVal154, NofibPrelude.Nil);
    tmp179 = NofibPrelude.Cons(inlinedVal153, tmp178);
    tmp180 = NofibPrelude.Cons(inlinedVal152, tmp179);
    tmp181 = NofibPrelude.Cons(inlinedVal151, tmp180);
    tmp182 = NofibPrelude.Cons(inlinedVal150, tmp181);
    tmp183 = globalThis.Object.freeze([
      "!",
      tmp182
    ]);
    inlinedVal155 = go(NofibPrelude, "     ", 0);
    inlinedVal156 = go(NofibPrelude, "     ", 0);
    inlinedVal157 = go(NofibPrelude, "-----", 0);
    inlinedVal158 = go(NofibPrelude, "     ", 0);
    inlinedVal159 = go(NofibPrelude, "     ", 0);
    tmp184 = NofibPrelude.Cons(inlinedVal159, NofibPrelude.Nil);
    tmp185 = NofibPrelude.Cons(inlinedVal158, tmp184);
    tmp186 = NofibPrelude.Cons(inlinedVal157, tmp185);
    tmp187 = NofibPrelude.Cons(inlinedVal156, tmp186);
    tmp188 = NofibPrelude.Cons(inlinedVal155, tmp187);
    tmp189 = globalThis.Object.freeze([
      "-",
      tmp188
    ]);
    inlinedVal160 = go(NofibPrelude, "  +  ", 0);
    inlinedVal161 = go(NofibPrelude, "  +  ", 0);
    inlinedVal162 = go(NofibPrelude, "+++++", 0);
    inlinedVal163 = go(NofibPrelude, "  +  ", 0);
    inlinedVal164 = go(NofibPrelude, "  +  ", 0);
    tmp190 = NofibPrelude.Cons(inlinedVal164, NofibPrelude.Nil);
    tmp191 = NofibPrelude.Cons(inlinedVal163, tmp190);
    tmp192 = NofibPrelude.Cons(inlinedVal162, tmp191);
    tmp193 = NofibPrelude.Cons(inlinedVal161, tmp192);
    tmp194 = NofibPrelude.Cons(inlinedVal160, tmp193);
    tmp195 = globalThis.Object.freeze([
      "+",
      tmp194
    ]);
    inlinedVal165 = go(NofibPrelude, "     ", 0);
    inlinedVal166 = go(NofibPrelude, "  :: ", 0);
    inlinedVal167 = go(NofibPrelude, "     ", 0);
    inlinedVal168 = go(NofibPrelude, "  :: ", 0);
    inlinedVal169 = go(NofibPrelude, "     ", 0);
    tmp196 = NofibPrelude.Cons(inlinedVal169, NofibPrelude.Nil);
    tmp197 = NofibPrelude.Cons(inlinedVal168, tmp196);
    tmp198 = NofibPrelude.Cons(inlinedVal167, tmp197);
    tmp199 = NofibPrelude.Cons(inlinedVal166, tmp198);
    tmp200 = NofibPrelude.Cons(inlinedVal165, tmp199);
    tmp201 = globalThis.Object.freeze([
      ":",
      tmp200
    ]);
    inlinedVal170 = go(NofibPrelude, "     ", 0);
    inlinedVal171 = go(NofibPrelude, "  ;; ", 0);
    inlinedVal172 = go(NofibPrelude, "     ", 0);
    inlinedVal173 = go(NofibPrelude, "  ;; ", 0);
    inlinedVal174 = go(NofibPrelude, " ;;  ", 0);
    tmp202 = NofibPrelude.Cons(inlinedVal174, NofibPrelude.Nil);
    tmp203 = NofibPrelude.Cons(inlinedVal173, tmp202);
    tmp204 = NofibPrelude.Cons(inlinedVal172, tmp203);
    tmp205 = NofibPrelude.Cons(inlinedVal171, tmp204);
    tmp206 = NofibPrelude.Cons(inlinedVal170, tmp205);
    tmp207 = globalThis.Object.freeze([
      ";",
      tmp206
    ]);
    tmp208 = NofibPrelude.Cons(tmp207, NofibPrelude.Nil);
    tmp209 = NofibPrelude.Cons(tmp201, tmp208);
    tmp210 = NofibPrelude.Cons(tmp195, tmp209);
    tmp211 = NofibPrelude.Cons(tmp189, tmp210);
    tmp212 = NofibPrelude.Cons(tmp183, tmp211);
    tmp213 = NofibPrelude.Cons(tmp177, tmp212);
    tmp214 = NofibPrelude.Cons(tmp171, tmp213);
    banner.punct = tmp214;
    inlinedVal175 = go(NofibPrelude, " OOO ", 0);
    inlinedVal176 = go(NofibPrelude, "0  00", 0);
    inlinedVal177 = go(NofibPrelude, "0 0 0", 0);
    inlinedVal178 = go(NofibPrelude, "00  0", 0);
    inlinedVal179 = go(NofibPrelude, " 000 ", 0);
    tmp215 = NofibPrelude.Cons(inlinedVal179, NofibPrelude.Nil);
    tmp216 = NofibPrelude.Cons(inlinedVal178, tmp215);
    tmp217 = NofibPrelude.Cons(inlinedVal177, tmp216);
    tmp218 = NofibPrelude.Cons(inlinedVal176, tmp217);
    tmp219 = NofibPrelude.Cons(inlinedVal175, tmp218);
    inlinedVal180 = go(NofibPrelude, "  1  ", 0);
    inlinedVal181 = go(NofibPrelude, " 11  ", 0);
    inlinedVal182 = go(NofibPrelude, "  1  ", 0);
    inlinedVal183 = go(NofibPrelude, "  1  ", 0);
    inlinedVal184 = go(NofibPrelude, "11111", 0);
    tmp220 = NofibPrelude.Cons(inlinedVal184, NofibPrelude.Nil);
    tmp221 = NofibPrelude.Cons(inlinedVal183, tmp220);
    tmp222 = NofibPrelude.Cons(inlinedVal182, tmp221);
    tmp223 = NofibPrelude.Cons(inlinedVal181, tmp222);
    tmp224 = NofibPrelude.Cons(inlinedVal180, tmp223);
    inlinedVal185 = go(NofibPrelude, " 222 ", 0);
    inlinedVal186 = go(NofibPrelude, "2   2", 0);
    inlinedVal187 = go(NofibPrelude, "   2 ", 0);
    inlinedVal188 = go(NofibPrelude, "  2  ", 0);
    inlinedVal189 = go(NofibPrelude, "22222", 0);
    tmp225 = NofibPrelude.Cons(inlinedVal189, NofibPrelude.Nil);
    tmp226 = NofibPrelude.Cons(inlinedVal188, tmp225);
    tmp227 = NofibPrelude.Cons(inlinedVal187, tmp226);
    tmp228 = NofibPrelude.Cons(inlinedVal186, tmp227);
    tmp229 = NofibPrelude.Cons(inlinedVal185, tmp228);
    inlinedVal190 = go(NofibPrelude, "3333 ", 0);
    inlinedVal191 = go(NofibPrelude, "    3", 0);
    inlinedVal192 = go(NofibPrelude, " 333 ", 0);
    inlinedVal193 = go(NofibPrelude, "    3", 0);
    inlinedVal194 = go(NofibPrelude, "3333 ", 0);
    tmp230 = NofibPrelude.Cons(inlinedVal194, NofibPrelude.Nil);
    tmp231 = NofibPrelude.Cons(inlinedVal193, tmp230);
    tmp232 = NofibPrelude.Cons(inlinedVal192, tmp231);
    tmp233 = NofibPrelude.Cons(inlinedVal191, tmp232);
    tmp234 = NofibPrelude.Cons(inlinedVal190, tmp233);
    inlinedVal195 = go(NofibPrelude, "   4 ", 0);
    inlinedVal196 = go(NofibPrelude, "  44 ", 0);
    inlinedVal197 = go(NofibPrelude, " 4 4 ", 0);
    inlinedVal198 = go(NofibPrelude, "44444", 0);
    inlinedVal199 = go(NofibPrelude, "   4 ", 0);
    tmp235 = NofibPrelude.Cons(inlinedVal199, NofibPrelude.Nil);
    tmp236 = NofibPrelude.Cons(inlinedVal198, tmp235);
    tmp237 = NofibPrelude.Cons(inlinedVal197, tmp236);
    tmp238 = NofibPrelude.Cons(inlinedVal196, tmp237);
    tmp239 = NofibPrelude.Cons(inlinedVal195, tmp238);
    inlinedVal200 = go(NofibPrelude, "55555", 0);
    inlinedVal201 = go(NofibPrelude, "5    ", 0);
    inlinedVal202 = go(NofibPrelude, "5555 ", 0);
    inlinedVal203 = go(NofibPrelude, "    5", 0);
    inlinedVal204 = go(NofibPrelude, "5555 ", 0);
    tmp240 = NofibPrelude.Cons(inlinedVal204, NofibPrelude.Nil);
    tmp241 = NofibPrelude.Cons(inlinedVal203, tmp240);
    tmp242 = NofibPrelude.Cons(inlinedVal202, tmp241);
    tmp243 = NofibPrelude.Cons(inlinedVal201, tmp242);
    tmp244 = NofibPrelude.Cons(inlinedVal200, tmp243);
    inlinedVal205 = go(NofibPrelude, "   66", 0);
    inlinedVal206 = go(NofibPrelude, "  6  ", 0);
    inlinedVal207 = go(NofibPrelude, " 666 ", 0);
    inlinedVal208 = go(NofibPrelude, "6   6", 0);
    inlinedVal209 = go(NofibPrelude, " 666 ", 0);
    tmp245 = NofibPrelude.Cons(inlinedVal209, NofibPrelude.Nil);
    tmp246 = NofibPrelude.Cons(inlinedVal208, tmp245);
    tmp247 = NofibPrelude.Cons(inlinedVal207, tmp246);
    tmp248 = NofibPrelude.Cons(inlinedVal206, tmp247);
    tmp249 = NofibPrelude.Cons(inlinedVal205, tmp248);
    inlinedVal210 = go(NofibPrelude, "77777", 0);
    inlinedVal211 = go(NofibPrelude, "    7", 0);
    inlinedVal212 = go(NofibPrelude, "   7 ", 0);
    inlinedVal213 = go(NofibPrelude, "   7 ", 0);
    inlinedVal214 = go(NofibPrelude, "  7  ", 0);
    tmp250 = NofibPrelude.Cons(inlinedVal214, NofibPrelude.Nil);
    tmp251 = NofibPrelude.Cons(inlinedVal213, tmp250);
    tmp252 = NofibPrelude.Cons(inlinedVal212, tmp251);
    tmp253 = NofibPrelude.Cons(inlinedVal211, tmp252);
    tmp254 = NofibPrelude.Cons(inlinedVal210, tmp253);
    inlinedVal215 = go(NofibPrelude, " 888 ", 0);
    inlinedVal216 = go(NofibPrelude, "8   8", 0);
    inlinedVal217 = go(NofibPrelude, " 888 ", 0);
    inlinedVal218 = go(NofibPrelude, "8   8", 0);
    inlinedVal219 = go(NofibPrelude, " 888 ", 0);
    tmp255 = NofibPrelude.Cons(inlinedVal219, NofibPrelude.Nil);
    tmp256 = NofibPrelude.Cons(inlinedVal218, tmp255);
    tmp257 = NofibPrelude.Cons(inlinedVal217, tmp256);
    tmp258 = NofibPrelude.Cons(inlinedVal216, tmp257);
    tmp259 = NofibPrelude.Cons(inlinedVal215, tmp258);
    inlinedVal220 = go(NofibPrelude, " 999 ", 0);
    inlinedVal221 = go(NofibPrelude, "9   9", 0);
    inlinedVal222 = go(NofibPrelude, " 999 ", 0);
    inlinedVal223 = go(NofibPrelude, "  9  ", 0);
    inlinedVal224 = go(NofibPrelude, "99   ", 0);
    tmp260 = NofibPrelude.Cons(inlinedVal224, NofibPrelude.Nil);
    tmp261 = NofibPrelude.Cons(inlinedVal223, tmp260);
    tmp262 = NofibPrelude.Cons(inlinedVal222, tmp261);
    tmp263 = NofibPrelude.Cons(inlinedVal221, tmp262);
    tmp264 = NofibPrelude.Cons(inlinedVal220, tmp263);
    tmp265 = NofibPrelude.Cons(tmp264, NofibPrelude.Nil);
    tmp266 = NofibPrelude.Cons(tmp259, tmp265);
    tmp267 = NofibPrelude.Cons(tmp254, tmp266);
    tmp268 = NofibPrelude.Cons(tmp249, tmp267);
    tmp269 = NofibPrelude.Cons(tmp244, tmp268);
    tmp270 = NofibPrelude.Cons(tmp239, tmp269);
    tmp271 = NofibPrelude.Cons(tmp234, tmp270);
    tmp272 = NofibPrelude.Cons(tmp229, tmp271);
    tmp273 = NofibPrelude.Cons(tmp224, tmp272);
    tmp274 = NofibPrelude.Cons(tmp219, tmp273);
    banner.digits = tmp274;
  }
  static #unlines(ls) {
    let tmp;
    tmp = NofibPrelude.map(lambda, ls);
    return NofibPrelude.concat(tmp)
  }
  static #join(ls) {
    return NofibPrelude.foldr1(lambda1, ls)
  }
  static #isUpper(c) {
    let scrut, scrut1, x, inlinedVal;
    x = c;
    inlinedVal = runtime.safeCall(x.charCodeAt(0));
    scrut = inlinedVal >= 65;
    if (scrut === true) {
      scrut1 = inlinedVal <= 90;
      if (scrut1 === true) {
        return true
      }
      return false;
    }
    return false;
  }
  static #isLower(c) {
    let scrut, scrut1, x, inlinedVal;
    x = c;
    inlinedVal = runtime.safeCall(x.charCodeAt(0));
    scrut = inlinedVal >= 97;
    if (scrut === true) {
      scrut1 = inlinedVal <= 122;
      if (scrut1 === true) {
        return true
      }
      return false;
    }
    return false;
  }
  static #isDigit(c) {
    let scrut, scrut1, x, inlinedVal;
    x = c;
    inlinedVal = runtime.safeCall(x.charCodeAt(0));
    scrut = inlinedVal >= 48;
    if (scrut === true) {
      scrut1 = inlinedVal <= 57;
      if (scrut1 === true) {
        return true
      }
      return false;
    }
    return false;
  }
  static #isSpace(c) {
    let x, inlinedVal;
    x = c;
    inlinedVal = runtime.safeCall(x.charCodeAt(0));
    return inlinedVal == 32
  }
  static #picChar(c) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    scrut = banner.#isUpper(c);
    if (scrut === true) {
      let x, inlinedVal, inlinedVal1;
      x = c;
      inlinedVal = runtime.safeCall(x.charCodeAt(0));
      inlinedVal1 = runtime.safeCall(("A").charCodeAt(0));
      tmp = inlinedVal - inlinedVal1;
      return NofibPrelude.atIndex(tmp, banner.alphas)
    }
    scrut1 = banner.#isLower(c);
    if (scrut1 === true) {
      let x, inlinedVal, inlinedVal1;
      x = c;
      inlinedVal = runtime.safeCall(x.charCodeAt(0));
      inlinedVal1 = runtime.safeCall(("a").charCodeAt(0));
      tmp1 = inlinedVal - inlinedVal1;
      return NofibPrelude.atIndex(tmp1, banner.alphas)
    }
    scrut2 = banner.#isSpace(c);
    if (scrut2 === true) {
      return banner.#blank
    }
    scrut3 = banner.#isDigit(c);
    if (scrut3 === true) {
      let x, inlinedVal, inlinedVal1;
      x = c;
      inlinedVal = runtime.safeCall(x.charCodeAt(0));
      inlinedVal1 = runtime.safeCall(("0").charCodeAt(0));
      tmp2 = inlinedVal - inlinedVal1;
      return NofibPrelude.atIndex(tmp2, banner.digits)
    }
    scrut4 = c === "/";
    if (scrut4 === true) {
      return banner.slant
    }
    scrut5 = c === "=";
    if (scrut5 === true) {
      let l;
      l = banner.slant;
      return r(NofibPrelude, NofibPrelude.Nil, l)
    }
    tmp3 = lscomp(c, banner.punct);
    tmp4 = NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil);
    tmp5 = NofibPrelude.Cons(NofibPrelude.Nil, tmp4);
    tmp6 = NofibPrelude.append(tmp3, tmp5);
    if (tmp6 instanceof NofibPrelude.Cons.class) {
      return tmp6.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #say(s) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = NofibPrelude.map(banner.#picChar, s);
    tmp1 = NofibPrelude.transpose(tmp);
    tmp2 = NofibPrelude.map(banner.#join, tmp1);
    tmp3 = banner.#unlines(tmp2);
    return NofibPrelude.Cons("\n", tmp3)
  }
  static #testBanner_nofib(n) {
    let tmp, tmp1, inlinedVal;
    inlinedVal = go(NofibPrelude, "Is this not a great banner?", 0);
    tmp = NofibPrelude.replicate(n, inlinedVal);
    tmp1 = NofibPrelude.concat(tmp);
    return banner.#say(tmp1)
  }
  static main() {
    let tmp;
    tmp = banner.#testBanner_nofib(1);
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "banner"];
});
export { lscomp as _$_modulePrivate_$_lscomp };
export { banner1 as _$_modulePrivate_$_banner };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export default banner1;
