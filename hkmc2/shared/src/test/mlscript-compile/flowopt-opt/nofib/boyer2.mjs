const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
let boyer21, lambda, lambda1, lambda2, lambda3;
lambda2 = (undefined, function (x, y) {
  return x < y
});
lambda3 = (undefined, function (x, y) {
  return x > y
});
lambda = (undefined, function (x, y) {
  return x < y
});
lambda1 = (undefined, function (x, y) {
  return x > y
});
(class boyer2 {
  static {
    boyer21 = this
  }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, inlinedVal19, inlinedVal20, inlinedVal21, inlinedVal22, inlinedVal23, inlinedVal24, inlinedVal25, inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30, inlinedVal31, inlinedVal32, inlinedVal33, inlinedVal34, inlinedVal35, inlinedVal36, inlinedVal37, inlinedVal38, inlinedVal39, inlinedVal40, inlinedVal41, inlinedVal42, inlinedVal43, inlinedVal44, inlinedVal45, inlinedVal46, inlinedVal47, inlinedVal48, inlinedVal49, inlinedVal50, inlinedVal51, inlinedVal52, inlinedVal53, inlinedVal54, inlinedVal55, inlinedVal56, inlinedVal57, inlinedVal58, inlinedVal59, inlinedVal60, inlinedVal61, inlinedVal62, inlinedVal63, inlinedVal64, inlinedVal65, inlinedVal66, inlinedVal67, inlinedVal68, inlinedVal69, inlinedVal70, inlinedVal71, inlinedVal72, inlinedVal73, inlinedVal74, inlinedVal75, inlinedVal76, inlinedVal77, inlinedVal78, inlinedVal79, inlinedVal80, inlinedVal81, inlinedVal82, inlinedVal83, inlinedVal84, inlinedVal85, inlinedVal86, inlinedVal87, inlinedVal88, inlinedVal89, inlinedVal90, inlinedVal91, inlinedVal92, inlinedVal93, inlinedVal94, inlinedVal95, inlinedVal96, inlinedVal97, inlinedVal98, inlinedVal99, inlinedVal100, inlinedVal101, inlinedVal102, inlinedVal103, inlinedVal104, inlinedVal105, inlinedVal106;
    (class Lisplist {
      static {
        boyer2.Lisplist = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lisplist"];
    });
    (class Nill extends boyer2.Lisplist {
      static {
        new this
      }
      constructor() {
        super();
        boyer2.Nill = this;
        Object.defineProperty(this, "class", {
          value: Nill
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nill"];
    });
    boyer2.Atom = function Atom(a) {
      return globalThis.Object.freeze(new Atom.class(a));
    };
    (class Atom extends boyer2.Lisplist {
      static {
        boyer2.Atom.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Atom", ["a"]];
    });
    boyer2.Conss = function Conss(a) {
      return globalThis.Object.freeze(new Conss.class(a));
    };
    (class Conss extends boyer2.Lisplist {
      static {
        boyer2.Conss.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Conss", ["a"]];
    });
    (class LUT {
      static {
        boyer2.LUT = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LUT"];
    });
    (class Empty extends boyer2.LUT {
      static {
        new this
      }
      constructor() {
        super();
        boyer2.Empty = this;
        Object.defineProperty(this, "class", {
          value: Empty
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Empty"];
    });
    boyer2.Node = function Node(x) {
      return globalThis.Object.freeze(new Node.class(x));
    };
    (class Node extends boyer2.LUT {
      static {
        boyer2.Node.class = this
      }
      constructor(x) {
        super();
        this.x = x;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["x"]];
    });
    inlinedVal = go(NofibPrelude, "( implies ( and ( implies x y )( and ( implies y z )( and ( implies z u )( implies u w ) ) ) )( implies x w ) )", 0);
    tmp = boyer2.#strToToken(inlinedVal);
    tmp1 = boyer2.#mkLispList(tmp);
    boyer2.statement = tmp1;
    inlinedVal1 = go(NofibPrelude, "(equal (compile form)(reverse (codegen (optimize form) (Nill) ) ) )", 0);
    inlinedVal2 = go(NofibPrelude, "(equal (eqp x y)(equal (fix x)(fix y) ) )", 0);
    inlinedVal3 = go(NofibPrelude, "(equal (greaterp x y)(lessp y x) )", 0);
    inlinedVal4 = go(NofibPrelude, "(equal (lesseqp x y)(not (lessp y x) ) )", 0);
    inlinedVal5 = go(NofibPrelude, "(equal (greatereqp x y)(not (lessp y x) ) )", 0);
    inlinedVal6 = go(NofibPrelude, "(equal (boolean x)(or (equal x (t) )(equal x (f) ) )", 0);
    inlinedVal7 = go(NofibPrelude, "(equal (iff x y)(and (implies x y)(implies y x) ) )", 0);
    inlinedVal8 = go(NofibPrelude, "(equal (even1 x)(if (zerop x)(t)(odd (1- x) ) ) )", 0);
    inlinedVal9 = go(NofibPrelude, "(equal (countps- l pred)(countps-loop l pred (zero) ) )", 0);
    inlinedVal10 = go(NofibPrelude, "(equal (fact- i)(fact-loop i 1) )", 0);
    inlinedVal11 = go(NofibPrelude, "(equal (reverse- x)(reverse-loop x (Nill) ) )", 0);
    inlinedVal12 = go(NofibPrelude, "(equal (divides x y)(zerop (remainder y x) ) )", 0);
    inlinedVal13 = go(NofibPrelude, "(equal (assume-true var alist)(Conss (Conss var (t) )alist) )", 0);
    inlinedVal14 = go(NofibPrelude, "(equal (assume-false var alist)(Conss (Conss var (f) )alist) )", 0);
    inlinedVal15 = go(NofibPrelude, "(equal (tautology-checker x)(tautologyp (normalize x)(Nill) ) )", 0);
    inlinedVal16 = go(NofibPrelude, "(equal (falsify x)(falsify1 (normalize x)(Nill) ) )", 0);
    inlinedVal17 = go(NofibPrelude, "(equal (prime x)(and (not (zerop x))(not (equal x (add1 (zero) ) ) )(prime1 x (1- x) ) ) )", 0);
    inlinedVal18 = go(NofibPrelude, "(equal (and p q)(if p (if q (t) (f) ) (f) ) )", 0);
    inlinedVal19 = go(NofibPrelude, "(equal (or p q)(if p (t) (if q (t) (f) ) ) )", 0);
    inlinedVal20 = go(NofibPrelude, "(equal (not p)(if p (f) (t) ) )", 0);
    inlinedVal21 = go(NofibPrelude, "(equal (implies p q)(if p (if q (t) (f) ) (t) ) )", 0);
    inlinedVal22 = go(NofibPrelude, "(equal (fix x)(if (numberp x) x (zero) ) )", 0);
    inlinedVal23 = go(NofibPrelude, "(equal (if (if a b c) d e)(if a (if b d e) (if c d e) ) )", 0);
    inlinedVal24 = go(NofibPrelude, "(equal (zerop x)(or (equal x (zero) )(not (numberp x) ) ) )", 0);
    inlinedVal25 = go(NofibPrelude, "(equal (plus (plus x y) z )(plus x (plus y z) ) )", 0);
    inlinedVal26 = go(NofibPrelude, "(equal (equal (plus a b) (zero ) )(and (zerop a) (zerop b) ) )", 0);
    inlinedVal27 = go(NofibPrelude, "(equal (difference x x)(zero) )", 0);
    inlinedVal28 = go(NofibPrelude, "(equal (equal (plus a b) (plus a c) )(equal (fix b) (fix c) ) )", 0);
    inlinedVal29 = go(NofibPrelude, "(equal (equal (zero) (difference x y) )(not (lessp y x) ) )", 0);
    inlinedVal30 = go(NofibPrelude, "(equal (equal x (difference x y) )(and (numberp x)(or (equal x (zero) )(zerop y) ) ) )", 0);
    inlinedVal31 = go(NofibPrelude, "(equal (meaning (plus-tree (append x y) ) a)(plus (meaning (plus-tree x) a)(meaning (plus-tree y) a) ) )", 0);
    inlinedVal32 = go(NofibPrelude, "(equal (meaning (plus-tree (plus-fringe x) ) a)(fix (meaning x a) ) )", 0);
    inlinedVal33 = go(NofibPrelude, "(equal (append (append x y) z)(append x (append y z) ) )", 0);
    inlinedVal34 = go(NofibPrelude, "(equal (reverse (append a b) )(append (reverse b) (reverse a) ) )", 0);
    inlinedVal35 = go(NofibPrelude, "(equal (times x (plus y z) )(plus (times x y)(times x z) ) )", 0);
    inlinedVal36 = go(NofibPrelude, "(equal (times (times x y) z)(times x (times y z) ) )", 0);
    inlinedVal37 = go(NofibPrelude, "(equal (equal (times x y) (zero) )(or (zerop x)(zerop y) ) )", 0);
    inlinedVal38 = go(NofibPrelude, "(equal (exec (append x y)pds envrn)(exec y (exec x pds envrn)envrn) )", 0);
    inlinedVal39 = go(NofibPrelude, "(equal (mc-flatten x y)(append (flatten x)y) )", 0);
    inlinedVal40 = go(NofibPrelude, "(equal (member x (append a b) )(or (member x a)(member x b) ) )", 0);
    inlinedVal41 = go(NofibPrelude, "(equal (member x (reverse y) )(member x y) )", 0);
    inlinedVal42 = go(NofibPrelude, "(equal (length (reverse x) )(length x) )", 0);
    inlinedVal43 = go(NofibPrelude, "(equal (member a (intersect b c) )(and (member a b)(member a c) ) )", 0);
    inlinedVal44 = go(NofibPrelude, "(equal (nth (zero)i)(zero) )", 0);
    inlinedVal45 = go(NofibPrelude, "(equal (exp i (plus j k) )(times (exp i j)(exp i k) ) )", 0);
    inlinedVal46 = go(NofibPrelude, "(equal (exp i (times j k) )(exp (exp i j)k) )", 0);
    inlinedVal47 = go(NofibPrelude, "(equal (reverse-loop x y)(append (reverse x)y) )", 0);
    inlinedVal48 = go(NofibPrelude, "(equal (reverse-loop x (Nill) )(reverse x) )", 0);
    inlinedVal49 = go(NofibPrelude, "(equal (count-list z (sort-lp x y) )(plus (count-list z x)(count-list z y) ) )", 0);
    inlinedVal50 = go(NofibPrelude, "(equal (equal (append a b)(append a c) )(equal b c) )", 0);
    inlinedVal51 = go(NofibPrelude, "(equal (plus (remainder x y)(times y (quotient x y) ) )(fix x) )", 0);
    inlinedVal52 = go(NofibPrelude, "(equal (power-eval (big-plus1 l i base)base)(plus (power-eval l base)i) )", 0);
    inlinedVal53 = go(NofibPrelude, "(equal (power-eval (big-plus x y i base)base)(plus i (plus (power-eval x base)(power-eval y base) ) ) )", 0);
    inlinedVal54 = go(NofibPrelude, "(equal (remainder y 1)(zero) )", 0);
    inlinedVal55 = go(NofibPrelude, "(equal (lessp (remainder x y)y)(not (zerop y) ) )", 0);
    inlinedVal56 = go(NofibPrelude, "(equal (remainder x x)(zero) )", 0);
    inlinedVal57 = go(NofibPrelude, "(equal (lessp (quotient i j)i)(and (not (zerop i) )(or (zerop j)(not (equal j 1) ) ) ) )", 0);
    inlinedVal58 = go(NofibPrelude, "(equal (lessp (remainder x y)x)(and (not (zerop y) )(not (zerop x) )(not (lessp x y) ) ) )", 0);
    inlinedVal59 = go(NofibPrelude, "(equal (power-eval (power-rep i base)base)(fix i) )", 0);
    inlinedVal60 = go(NofibPrelude, "(equal (power-eval (big-plus (power-rep i base)(power-rep j base)(zero)base)base)(plus i j) )", 0);
    inlinedVal61 = go(NofibPrelude, "(equal (gcd x y)(gcd y x) )", 0);
    inlinedVal62 = go(NofibPrelude, "(equal (nth (append a b)i)(append (nth a i)(nth b (difference i (length a) ) ) ) )", 0);
    inlinedVal63 = go(NofibPrelude, "(equal (difference (plus x y)x)(fix y) )", 0);
    inlinedVal64 = go(NofibPrelude, "(equal (difference (plus y x)x)(fix y) )", 0);
    inlinedVal65 = go(NofibPrelude, "(equal (difference (plus x y)(plus x z) )(difference y z) )", 0);
    inlinedVal66 = go(NofibPrelude, "(equal (times x (difference c w) )(difference (times c x)(times w x) ) )", 0);
    inlinedVal67 = go(NofibPrelude, "(equal (remainder (times x z)z)(zero) )", 0);
    inlinedVal68 = go(NofibPrelude, "(equal (difference (plus b (plus a c) )a)(plus b c) )", 0);
    inlinedVal69 = go(NofibPrelude, "(equal (difference (add1 (plus y z)z)(add1 y) )", 0);
    inlinedVal70 = go(NofibPrelude, "(equal (lessp (plus x y)(plus x z ) )(lessp y z) )", 0);
    inlinedVal71 = go(NofibPrelude, "(equal (lessp (times x z)(times y z) )(and (not (zerop z) )(lessp x y) ) )", 0);
    inlinedVal72 = go(NofibPrelude, "(equal (lessp y (plus x y) )(not (zerop x) ) )", 0);
    inlinedVal73 = go(NofibPrelude, "(equal (gcd (times x z)(times y z) )(times z (gcd x y) ) )", 0);
    inlinedVal74 = go(NofibPrelude, "(equal (value (normalize x)a)(value x a) )", 0);
    inlinedVal75 = go(NofibPrelude, "(equal (equal (flatten x)(Conss y (Nill) ) )(and (nlistp x)(equal x y) ) )", 0);
    inlinedVal76 = go(NofibPrelude, "(equal (listp (gopher x) )(listp x) )", 0);
    inlinedVal77 = go(NofibPrelude, "(equal (samefringe x y)(equal (flatten x)(flatten y) ) )", 0);
    inlinedVal78 = go(NofibPrelude, "(equal (equal (greatest-factor x y)(zero) )(and (or (zerop y)(equal y 1) )(equal x (zero) ) ) )", 0);
    inlinedVal79 = go(NofibPrelude, "(equal (equal (greatest-factor x y)1)(equal x 1) )", 0);
    inlinedVal80 = go(NofibPrelude, "(equal (numberp (greatest-factor x y) )(not (and (or (zerop y)(equal y 1) )(not (numberp x) ) ) ) )", 0);
    inlinedVal81 = go(NofibPrelude, "(equal (times-list (append x y) )(times (times-list x)(times-list y) ) )", 0);
    inlinedVal82 = go(NofibPrelude, "(equal (prime-list (append x y) )(and (prime-list x)(prime-list y) ) )", 0);
    inlinedVal83 = go(NofibPrelude, "(equal (equal z (times w z) )(and (numberp z)(or (equal z (zero) )(equal w 1) ) ) )", 0);
    inlinedVal84 = go(NofibPrelude, "(equal (greatereqpr x y)(not (lessp x y) ) )", 0);
    inlinedVal85 = go(NofibPrelude, "(equal (equal x (times x y) )(or (equal x (zero) )(and (numberp x)(equal y 1) ) ) )", 0);
    inlinedVal86 = go(NofibPrelude, "(equal (remainder (times y x)y)(zero) )", 0);
    inlinedVal87 = go(NofibPrelude, "(equal (equal (times a b)1)(and (not (equal a (zero) ) )(not (equal b (zero) ) )(numberp a)(numberp b)(equal (1- a)(zero) )(equal (1- b)(zero) ) ) )", 0);
    inlinedVal88 = go(NofibPrelude, "(equal (lessp (length (delete x l) )(length l) )(member x l) )", 0);
    inlinedVal89 = go(NofibPrelude, "(equal (sort2 (delete x l) )(delete x (sort2 l) ) )", 0);
    inlinedVal90 = go(NofibPrelude, "(equal (dsort x)(sort2 x) )", 0);
    inlinedVal91 = go(NofibPrelude, "(equal (length(Conss x1(Conss x2(Conss x3(Conss x4(Conss x5(Conss x6 x7) ) ) ) ) ) )(plus 6 (length x7) ) )", 0);
    inlinedVal92 = go(NofibPrelude, "(equal (difference (add1 (add1 x) )2)(fix x) )", 0);
    inlinedVal93 = go(NofibPrelude, "(equal (quotient (plus x (plus x y) )2)(plus x (quotient y 2) ) )", 0);
    inlinedVal94 = go(NofibPrelude, "(equal (sigma (zero)i)(quotient (times i (add1 i) )2) )", 0);
    inlinedVal95 = go(NofibPrelude, "(equal (plus x (add1 y) )(if (numberp y)(add1 (plus x y) )(add1 x) ) )", 0);
    inlinedVal96 = go(NofibPrelude, "(equal (equal (difference x y)(difference z y) )(if (lessp x y)(not (lessp y z) )(if (lessp z y)(not (lessp y x) )(equal (fix x)(fix z) ) ) ) )", 0);
    inlinedVal97 = go(NofibPrelude, "(equal (meaning (plus-tree (delete x y) )a)(if (member x y)(difference (meaning (plus-tree y)a)(meaning x a) )(meaning (plus-tree y)a) ) )", 0);
    inlinedVal98 = go(NofibPrelude, "(equal (times x (add1 y) )(if (numberp y)(plus x (times x y) )(fix x) ) )", 0);
    inlinedVal99 = go(NofibPrelude, "(equal (nth (Nill)i)(if (zerop i)(Nill)(zero) ) )", 0);
    inlinedVal100 = go(NofibPrelude, "(equal (last (append a b) )(if (listp b)(last b)(if (listp a)(Conss (car (last a) )b)b) ) )", 0);
    inlinedVal101 = go(NofibPrelude, "(equal (equal (lessp x y)z)(if (lessp x y)(equal t z)(equal f z) ) )", 0);
    inlinedVal102 = go(NofibPrelude, "(equal (assignment x (append a b) )(if (assignedp x a)(assignment x a)(assignment x b) ) )", 0);
    inlinedVal103 = go(NofibPrelude, "(equal (car (gopher x) )(if (listp x)(car (flatten x) )(zero) ) )", 0);
    inlinedVal104 = go(NofibPrelude, "(equal (flatten (cdr (gopher x) ) )(if (listp x)(cdr (flatten x) )(Conss (zero)(Nill) ) ) )", 0);
    inlinedVal105 = go(NofibPrelude, "(equal (quotient (times y x)y)(if (zerop y)(zero)(fix x) ) )", 0);
    inlinedVal106 = go(NofibPrelude, "(equal (get j (set i val mem) )(if (eqp j i)val(get j mem) ) )", 0);
    tmp2 = NofibPrelude.Cons(inlinedVal106, NofibPrelude.Nil);
    tmp3 = NofibPrelude.Cons(inlinedVal105, tmp2);
    tmp4 = NofibPrelude.Cons(inlinedVal104, tmp3);
    tmp5 = NofibPrelude.Cons(inlinedVal103, tmp4);
    tmp6 = NofibPrelude.Cons(inlinedVal102, tmp5);
    tmp7 = NofibPrelude.Cons(inlinedVal101, tmp6);
    tmp8 = NofibPrelude.Cons(inlinedVal100, tmp7);
    tmp9 = NofibPrelude.Cons(inlinedVal99, tmp8);
    tmp10 = NofibPrelude.Cons(inlinedVal98, tmp9);
    tmp11 = NofibPrelude.Cons(inlinedVal97, tmp10);
    tmp12 = NofibPrelude.Cons(inlinedVal96, tmp11);
    tmp13 = NofibPrelude.Cons(inlinedVal95, tmp12);
    tmp14 = NofibPrelude.Cons(inlinedVal94, tmp13);
    tmp15 = NofibPrelude.Cons(inlinedVal93, tmp14);
    tmp16 = NofibPrelude.Cons(inlinedVal92, tmp15);
    tmp17 = NofibPrelude.Cons(inlinedVal91, tmp16);
    tmp18 = NofibPrelude.Cons(inlinedVal90, tmp17);
    tmp19 = NofibPrelude.Cons(inlinedVal89, tmp18);
    tmp20 = NofibPrelude.Cons(inlinedVal88, tmp19);
    tmp21 = NofibPrelude.Cons(inlinedVal87, tmp20);
    tmp22 = NofibPrelude.Cons(inlinedVal86, tmp21);
    tmp23 = NofibPrelude.Cons(inlinedVal85, tmp22);
    tmp24 = NofibPrelude.Cons(inlinedVal84, tmp23);
    tmp25 = NofibPrelude.Cons(inlinedVal83, tmp24);
    tmp26 = NofibPrelude.Cons(inlinedVal82, tmp25);
    tmp27 = NofibPrelude.Cons(inlinedVal81, tmp26);
    tmp28 = NofibPrelude.Cons(inlinedVal80, tmp27);
    tmp29 = NofibPrelude.Cons(inlinedVal79, tmp28);
    tmp30 = NofibPrelude.Cons(inlinedVal78, tmp29);
    tmp31 = NofibPrelude.Cons(inlinedVal77, tmp30);
    tmp32 = NofibPrelude.Cons(inlinedVal76, tmp31);
    tmp33 = NofibPrelude.Cons(inlinedVal75, tmp32);
    tmp34 = NofibPrelude.Cons(inlinedVal74, tmp33);
    tmp35 = NofibPrelude.Cons(inlinedVal73, tmp34);
    tmp36 = NofibPrelude.Cons(inlinedVal72, tmp35);
    tmp37 = NofibPrelude.Cons(inlinedVal71, tmp36);
    tmp38 = NofibPrelude.Cons(inlinedVal70, tmp37);
    tmp39 = NofibPrelude.Cons(inlinedVal69, tmp38);
    tmp40 = NofibPrelude.Cons(inlinedVal68, tmp39);
    tmp41 = NofibPrelude.Cons(inlinedVal67, tmp40);
    tmp42 = NofibPrelude.Cons(inlinedVal66, tmp41);
    tmp43 = NofibPrelude.Cons(inlinedVal65, tmp42);
    tmp44 = NofibPrelude.Cons(inlinedVal64, tmp43);
    tmp45 = NofibPrelude.Cons(inlinedVal63, tmp44);
    tmp46 = NofibPrelude.Cons(inlinedVal62, tmp45);
    tmp47 = NofibPrelude.Cons(inlinedVal61, tmp46);
    tmp48 = NofibPrelude.Cons(inlinedVal60, tmp47);
    tmp49 = NofibPrelude.Cons(inlinedVal59, tmp48);
    tmp50 = NofibPrelude.Cons(inlinedVal58, tmp49);
    tmp51 = NofibPrelude.Cons(inlinedVal57, tmp50);
    tmp52 = NofibPrelude.Cons(inlinedVal56, tmp51);
    tmp53 = NofibPrelude.Cons(inlinedVal55, tmp52);
    tmp54 = NofibPrelude.Cons(inlinedVal54, tmp53);
    tmp55 = NofibPrelude.Cons(inlinedVal53, tmp54);
    tmp56 = NofibPrelude.Cons(inlinedVal52, tmp55);
    tmp57 = NofibPrelude.Cons(inlinedVal51, tmp56);
    tmp58 = NofibPrelude.Cons(inlinedVal50, tmp57);
    tmp59 = NofibPrelude.Cons(inlinedVal49, tmp58);
    tmp60 = NofibPrelude.Cons(inlinedVal48, tmp59);
    tmp61 = NofibPrelude.Cons(inlinedVal47, tmp60);
    tmp62 = NofibPrelude.Cons(inlinedVal46, tmp61);
    tmp63 = NofibPrelude.Cons(inlinedVal45, tmp62);
    tmp64 = NofibPrelude.Cons(inlinedVal44, tmp63);
    tmp65 = NofibPrelude.Cons(inlinedVal43, tmp64);
    tmp66 = NofibPrelude.Cons(inlinedVal42, tmp65);
    tmp67 = NofibPrelude.Cons(inlinedVal41, tmp66);
    tmp68 = NofibPrelude.Cons(inlinedVal40, tmp67);
    tmp69 = NofibPrelude.Cons(inlinedVal39, tmp68);
    tmp70 = NofibPrelude.Cons(inlinedVal38, tmp69);
    tmp71 = NofibPrelude.Cons(inlinedVal37, tmp70);
    tmp72 = NofibPrelude.Cons(inlinedVal36, tmp71);
    tmp73 = NofibPrelude.Cons(inlinedVal35, tmp72);
    tmp74 = NofibPrelude.Cons(inlinedVal34, tmp73);
    tmp75 = NofibPrelude.Cons(inlinedVal33, tmp74);
    tmp76 = NofibPrelude.Cons(inlinedVal32, tmp75);
    tmp77 = NofibPrelude.Cons(inlinedVal31, tmp76);
    tmp78 = NofibPrelude.Cons(inlinedVal30, tmp77);
    tmp79 = NofibPrelude.Cons(inlinedVal29, tmp78);
    tmp80 = NofibPrelude.Cons(inlinedVal28, tmp79);
    tmp81 = NofibPrelude.Cons(inlinedVal27, tmp80);
    tmp82 = NofibPrelude.Cons(inlinedVal26, tmp81);
    tmp83 = NofibPrelude.Cons(inlinedVal25, tmp82);
    tmp84 = NofibPrelude.Cons(inlinedVal24, tmp83);
    tmp85 = NofibPrelude.Cons(inlinedVal23, tmp84);
    tmp86 = NofibPrelude.Cons(inlinedVal22, tmp85);
    tmp87 = NofibPrelude.Cons(inlinedVal21, tmp86);
    tmp88 = NofibPrelude.Cons(inlinedVal20, tmp87);
    tmp89 = NofibPrelude.Cons(inlinedVal19, tmp88);
    tmp90 = NofibPrelude.Cons(inlinedVal18, tmp89);
    tmp91 = NofibPrelude.Cons(inlinedVal17, tmp90);
    tmp92 = NofibPrelude.Cons(inlinedVal16, tmp91);
    tmp93 = NofibPrelude.Cons(inlinedVal15, tmp92);
    tmp94 = NofibPrelude.Cons(inlinedVal14, tmp93);
    tmp95 = NofibPrelude.Cons(inlinedVal13, tmp94);
    tmp96 = NofibPrelude.Cons(inlinedVal12, tmp95);
    tmp97 = NofibPrelude.Cons(inlinedVal11, tmp96);
    tmp98 = NofibPrelude.Cons(inlinedVal10, tmp97);
    tmp99 = NofibPrelude.Cons(inlinedVal9, tmp98);
    tmp100 = NofibPrelude.Cons(inlinedVal8, tmp99);
    tmp101 = NofibPrelude.Cons(inlinedVal7, tmp100);
    tmp102 = NofibPrelude.Cons(inlinedVal6, tmp101);
    tmp103 = NofibPrelude.Cons(inlinedVal5, tmp102);
    tmp104 = NofibPrelude.Cons(inlinedVal4, tmp103);
    tmp105 = NofibPrelude.Cons(inlinedVal3, tmp104);
    tmp106 = NofibPrelude.Cons(inlinedVal2, tmp105);
    tmp107 = NofibPrelude.Cons(inlinedVal1, tmp106);
    boyer2.rules = tmp107;
    tmp108 = boyer2.#makelemmas(boyer2.rules);
    tmp109 = boyer2.#addlemmalst(tmp108, boyer2.Empty);
    boyer2.lemmas = tmp109;
  }
  static #rewritewithlemmas_rewriteargs_rewrite(id, param0, param1, param2) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2;
            if (param1 instanceof NofibPrelude.Nil.class) {
              return param0
            } else if (param1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param1.head;
              arg$Cons$1$ = param1.tail;
              tmp = boyer2.#cadr(arg$Cons$0$);
              scrut = boyer2.#onewayunify(param0, tmp);
              if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
                element0$ = runtime.Tuple.get(scrut, 0);
                element1$ = runtime.Tuple.get(scrut, 1);
                if (element0$ === true) {
                  tmp1 = boyer2.#caddr(arg$Cons$0$);
                  tmp2 = boyer2.#applysubst(element1$, tmp1);
                  param0 = tmp2;
                  param1 = param2;
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
        case 1:
          {
            let arg$Conss$0$, element1$, element0$, tmp, tmp1, tmp2;
            if (param0 instanceof boyer2.Nill.class) {
              return boyer2.Nill
            } else if (param0 instanceof boyer2.Atom.class) {
              throw globalThis.Object.freeze(new globalThis.Error("error", undefined))
            } else if (param0 instanceof boyer2.Conss.class) {
              arg$Conss$0$ = param0.a;
              if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
                element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
                element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
                tmp = boyer2.#rewritewithlemmas_rewriteargs_rewrite(2, element0$, param1, undefined);
                tmp1 = boyer2.#rewritewithlemmas_rewriteargs_rewrite(1, element1$, param1, undefined);
                tmp2 = globalThis.Object.freeze([
                  tmp,
                  tmp1
                ]);
                return boyer2.Conss(tmp2)
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 2:
          {
            let arg$Conss$0$, element1$, element0$, arg$Atom$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
            if (param0 instanceof boyer2.Nill.class) {
              return boyer2.Nill
            } else if (param0 instanceof boyer2.Atom.class) {
              arg$Atom$0$ = param0.a;
              return boyer2.Atom(arg$Atom$0$)
            } else if (param0 instanceof boyer2.Conss.class) {
              arg$Conss$0$ = param0.a;
              if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
                let param1_tmp;
                element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
                element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
                tmp = boyer2.#rewritewithlemmas_rewriteargs_rewrite(1, element1$, param1, undefined);
                tmp1 = globalThis.Object.freeze([
                  element0$,
                  tmp
                ]);
                tmp2 = boyer2.Conss(tmp1);
                tmp3 = boyer2.#tv(element0$);
                tmp4 = globalThis.Object.freeze([
                  tmp3,
                  param1
                ]);
                tmp5 = boyer2.#getLUT(tmp4);
                param1_tmp = param1;
                param0 = tmp2;
                param1 = tmp5;
                param2 = param1_tmp;
                id = 0;
                continue loopLabel
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
      }
    }
  }
  static #onewayunify1lst_onewayunify1(id, param0, param1, param2) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let scrut, element1$, element0$, tmp, tmp1, tmp2, tmp3;
            if (param0 instanceof boyer2.Nill.class) {
              return globalThis.Object.freeze([
                true,
                param2
              ])
            }
            tmp = boyer2.#car(param0);
            tmp1 = boyer2.#car(param1);
            scrut = boyer2.#onewayunify1lst_onewayunify1(1, tmp, tmp1, param2);
            if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
              element0$ = runtime.Tuple.get(scrut, 0);
              element1$ = runtime.Tuple.get(scrut, 1);
              if (element0$ === true) {
                tmp2 = boyer2.#cdr(param0);
                tmp3 = boyer2.#cdr(param1);
                param0 = tmp2;
                param1 = tmp3;
                param2 = element1$;
                id = 0;
                continue loopLabel
              }
              return globalThis.Object.freeze([
                false,
                element1$
              ]);
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 1:
          {
            let scrut, scrut1, scrut2, scrut3, arg$Conss$0$, element1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
            scrut = boyer2.#atom(param1);
            if (scrut === true) {
              tmp = globalThis.Object.freeze([
                param1,
                param2
              ]);
              scrut1 = boyer2.#assoc(tmp);
              if (scrut1 instanceof boyer2.Conss.class) {
                arg$Conss$0$ = scrut1.a;
                if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
                  runtime.Tuple.get(arg$Conss$0$, 0);
                  element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
                  tmp5 = boyer2.#lispListEq(param0, element1$);
                  return globalThis.Object.freeze([
                    tmp5,
                    param2
                  ])
                }
              }
              tmp1 = globalThis.Object.freeze([
                param1,
                param0
              ]);
              tmp2 = boyer2.Conss(tmp1);
              tmp3 = globalThis.Object.freeze([
                tmp2,
                param2
              ]);
              tmp4 = boyer2.Conss(tmp3);
              return globalThis.Object.freeze([
                true,
                tmp4
              ])
            }
            scrut2 = boyer2.#atom(param0);
            if (scrut2 === true) {
              return globalThis.Object.freeze([
                false,
                param2
              ])
            }
            tmp6 = boyer2.#car(param0);
            tmp7 = boyer2.#car(param1);
            scrut3 = boyer2.#lispListEq(tmp6, tmp7);
            if (scrut3 === true) {
              tmp8 = boyer2.#cdr(param0);
              tmp9 = boyer2.#cdr(param1);
              param0 = tmp8;
              param1 = tmp9;
              id = 0;
              continue loopLabel
            }
            return globalThis.Object.freeze([
              false,
              param2
            ]);
          }
      }
    }
  }
  static #applysubstlst_applysubst(id, param0, param1) {
    switch (id) {
      case 0:
        {
          let arg$Conss$0$, element1$, element0$, tmp, tmp1, tmp2;
          if (param1 instanceof boyer2.Nill.class) {
            return boyer2.Nill
          } else if (param1 instanceof boyer2.Atom.class) {
            throw globalThis.Object.freeze(new globalThis.Error("error", undefined))
          } else if (param1 instanceof boyer2.Conss.class) {
            arg$Conss$0$ = param1.a;
            if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
              element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
              element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
              tmp = boyer2.#applysubstlst_applysubst(1, param0, element0$);
              tmp1 = boyer2.#applysubstlst_applysubst(0, param0, element1$);
              tmp2 = globalThis.Object.freeze([
                tmp,
                tmp1
              ]);
              return boyer2.Conss(tmp2)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let scrut, arg$Conss$0$, element1$, element0$, arg$Atom$0$, arg$Conss$0$1, tmp, tmp1, tmp2, tmp3;
          if (param1 instanceof boyer2.Nill.class) {
            return boyer2.Nill
          } else if (param1 instanceof boyer2.Atom.class) {
            arg$Atom$0$ = param1.a;
            tmp = boyer2.Atom(arg$Atom$0$);
            tmp1 = globalThis.Object.freeze([
              tmp,
              param0
            ]);
            scrut = boyer2.#assoc(tmp1);
            if (scrut instanceof boyer2.Conss.class) {
              arg$Conss$0$1 = scrut.a;
              if (runtime.Tuple.isArrayLike(arg$Conss$0$1) && arg$Conss$0$1.length === 2) {
                runtime.Tuple.get(arg$Conss$0$1, 0);
                return runtime.Tuple.get(arg$Conss$0$1, 1)
              }
              return boyer2.Atom(arg$Atom$0$);
            }
            return boyer2.Atom(arg$Atom$0$);
          } else if (param1 instanceof boyer2.Conss.class) {
            arg$Conss$0$ = param1.a;
            if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
              element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
              element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
              tmp2 = boyer2.#applysubstlst_applysubst(0, param0, element1$);
              tmp3 = globalThis.Object.freeze([
                element0$,
                tmp2
              ]);
              return boyer2.Conss(tmp3)
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
  static #lispListEq(x, y) {
    loopLabel: while (true) {
      let scrut, arg$Conss$0$, element1$, element0$, arg$Conss$0$1, element1$1, element0$1, arg$Atom$0$, arg$Atom$0$1;
      if (x instanceof boyer2.Nill.class) {
        if (y instanceof boyer2.Nill.class) {
          return true
        }
        return false;
      } else if (x instanceof boyer2.Atom.class) {
        arg$Atom$0$ = x.a;
        if (y instanceof boyer2.Atom.class) {
          arg$Atom$0$1 = y.a;
          return NofibPrelude.listEq(arg$Atom$0$, arg$Atom$0$1)
        }
        return false;
      } else if (x instanceof boyer2.Conss.class) {
        arg$Conss$0$ = x.a;
        if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
          element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
          if (y instanceof boyer2.Conss.class) {
            arg$Conss$0$1 = y.a;
            if (runtime.Tuple.isArrayLike(arg$Conss$0$1) && arg$Conss$0$1.length === 2) {
              element0$1 = runtime.Tuple.get(arg$Conss$0$1, 0);
              element1$1 = runtime.Tuple.get(arg$Conss$0$1, 1);
              scrut = boyer2.#lispListEq(element0$, element0$1);
              if (scrut === true) {
                x = element1$;
                y = element1$1;
                continue loopLabel
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
  static #lispmember(e_x) {
    loopLabel: while (true) {
      let scrut, element1$, element0$, arg$Conss$0$, element1$1, element0$1, tmp;
      if (runtime.Tuple.isArrayLike(e_x) && e_x.length === 2) {
        element0$ = runtime.Tuple.get(e_x, 0);
        element1$ = runtime.Tuple.get(e_x, 1);
        if (element1$ instanceof boyer2.Conss.class) {
          arg$Conss$0$ = element1$.a;
          if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
            element0$1 = runtime.Tuple.get(arg$Conss$0$, 0);
            element1$1 = runtime.Tuple.get(arg$Conss$0$, 1);
            scrut = boyer2.#lispListEq(element0$, element0$1);
            if (scrut === true) {
              return true
            }
            tmp = globalThis.Object.freeze([
              element0$,
              element1$1
            ]);
            e_x = tmp;
            continue loopLabel;
          }
          return false;
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #truep(term_l) {
    let element1$, element0$, arg$Conss$0$, element1$1, element0$1, arg$Atom$0$, arg$Cons$0$, arg$Cons$1$, tmp;
    if (runtime.Tuple.isArrayLike(term_l) && term_l.length === 2) {
      element0$ = runtime.Tuple.get(term_l, 0);
      element1$ = runtime.Tuple.get(term_l, 1);
      if (element0$ instanceof boyer2.Nill.class) {
        return false
      }
      if (element0$ instanceof boyer2.Conss.class) {
        arg$Conss$0$ = element0$.a;
        if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
          element0$1 = runtime.Tuple.get(arg$Conss$0$, 0);
          element1$1 = runtime.Tuple.get(arg$Conss$0$, 1);
          if (element0$1 instanceof boyer2.Atom.class) {
            arg$Atom$0$ = element0$1.a;
            if (arg$Atom$0$ instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = arg$Atom$0$.head;
              arg$Cons$1$ = arg$Atom$0$.tail;
              if (arg$Cons$0$ === "t") {
                if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
                  if (element1$1 instanceof boyer2.Nill.class) {
                    return true
                  }
                }
              }
            }
          }
        }
      }
      tmp = globalThis.Object.freeze([
        element0$,
        element1$
      ]);
      return boyer2.#lispmember(tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #falsep(term_l) {
    let element1$, element0$, arg$Conss$0$, element1$1, element0$1, arg$Atom$0$, arg$Cons$0$, arg$Cons$1$, tmp;
    if (runtime.Tuple.isArrayLike(term_l) && term_l.length === 2) {
      element0$ = runtime.Tuple.get(term_l, 0);
      element1$ = runtime.Tuple.get(term_l, 1);
      if (element0$ instanceof boyer2.Nill.class) {
        return false
      }
      if (element0$ instanceof boyer2.Conss.class) {
        arg$Conss$0$ = element0$.a;
        if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
          element0$1 = runtime.Tuple.get(arg$Conss$0$, 0);
          element1$1 = runtime.Tuple.get(arg$Conss$0$, 1);
          if (element0$1 instanceof boyer2.Atom.class) {
            arg$Atom$0$ = element0$1.a;
            if (arg$Atom$0$ instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = arg$Atom$0$.head;
              arg$Cons$1$ = arg$Atom$0$.tail;
              if (arg$Cons$0$ === "f") {
                if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
                  if (element1$1 instanceof boyer2.Nill.class) {
                    return true
                  }
                }
              }
            }
          }
        }
      }
      tmp = globalThis.Object.freeze([
        element0$,
        element1$
      ]);
      return boyer2.#lispmember(tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #tv(x) {
    if (x instanceof boyer2.Atom.class) {
      return x.a
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #atom(x) {
    if (x instanceof boyer2.Atom.class) {
      return true
    }
    return false;
  }
  static #car(x) {
    let arg$Conss$0$, element0$;
    if (x instanceof boyer2.Conss.class) {
      arg$Conss$0$ = x.a;
      if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
        runtime.Tuple.get(arg$Conss$0$, 1);
        return element0$
      }
      return boyer2.Nill;
    }
    return boyer2.Nill;
  }
  static #cdr(x) {
    let arg$Conss$0$;
    if (x instanceof boyer2.Conss.class) {
      arg$Conss$0$ = x.a;
      if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
        runtime.Tuple.get(arg$Conss$0$, 0);
        return runtime.Tuple.get(arg$Conss$0$, 1)
      }
      return boyer2.Nill;
    }
    return boyer2.Nill;
  }
  static #cadr(x) {
    let tmp;
    tmp = boyer2.#cdr(x);
    return boyer2.#car(tmp)
  }
  static #caddr(x) {
    let tmp, tmp1;
    tmp = boyer2.#cdr(x);
    tmp1 = boyer2.#cdr(tmp);
    return boyer2.#car(tmp1)
  }
  static #cadddr(x) {
    let tmp, tmp1, tmp2;
    tmp = boyer2.#cdr(x);
    tmp1 = boyer2.#cdr(tmp);
    tmp2 = boyer2.#cdr(tmp1);
    return boyer2.#car(tmp2)
  }
  static #tautologyp(f_truelst_falselst) {
    loopLabel: while (true) {
      let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, element2$, element1$, element0$, arg$Conss$0$, element1$1, element0$1, arg$Atom$0$, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Atom$0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25;
      if (runtime.Tuple.isArrayLike(f_truelst_falselst) && f_truelst_falselst.length === 3) {
        element0$ = runtime.Tuple.get(f_truelst_falselst, 0);
        element1$ = runtime.Tuple.get(f_truelst_falselst, 1);
        element2$ = runtime.Tuple.get(f_truelst_falselst, 2);
        if (element0$ instanceof boyer2.Nill.class) {
          return false
        } else if (element0$ instanceof boyer2.Atom.class) {
          arg$Atom$0$1 = element0$.a;
          tmp = boyer2.Atom(arg$Atom$0$1);
          tmp1 = globalThis.Object.freeze([
            tmp,
            element1$
          ]);
          return boyer2.#truep(tmp1)
        } else if (element0$ instanceof boyer2.Conss.class) {
          arg$Conss$0$ = element0$.a;
          if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
            element0$1 = runtime.Tuple.get(arg$Conss$0$, 0);
            element1$1 = runtime.Tuple.get(arg$Conss$0$, 1);
            tmp2 = globalThis.Object.freeze([
              element0$1,
              element1$1
            ]);
            tmp3 = boyer2.Conss(tmp2);
            tmp4 = globalThis.Object.freeze([
              tmp3,
              element1$
            ]);
            scrut = boyer2.#truep(tmp4);
            if (scrut === true) {
              return true
            }
            tmp5 = globalThis.Object.freeze([
              element0$1,
              element1$1
            ]);
            tmp6 = boyer2.Conss(tmp5);
            tmp7 = globalThis.Object.freeze([
              tmp6,
              element2$
            ]);
            scrut1 = boyer2.#falsep(tmp7);
            if (scrut1 === true) {
              return false
            }
            if (element0$1 instanceof boyer2.Atom.class) {
              arg$Atom$0$ = element0$1.a;
              if (arg$Atom$0$ instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$ = arg$Atom$0$.head;
                arg$Cons$1$ = arg$Atom$0$.tail;
                if (arg$Cons$0$ === "i") {
                  if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
                    arg$Cons$0$1 = arg$Cons$1$.head;
                    arg$Cons$1$1 = arg$Cons$1$.tail;
                    if (arg$Cons$0$1 === "f") {
                      if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
                        tmp8 = boyer2.#car(element1$1);
                        tmp9 = globalThis.Object.freeze([
                          tmp8,
                          element1$
                        ]);
                        scrut2 = boyer2.#truep(tmp9);
                        if (scrut2 === true) {
                          tmp10 = boyer2.#cadr(element1$1);
                          tmp11 = globalThis.Object.freeze([
                            tmp10,
                            element1$,
                            element2$
                          ]);
                          f_truelst_falselst = tmp11;
                          continue loopLabel
                        }
                        tmp12 = boyer2.#car(element1$1);
                        tmp13 = globalThis.Object.freeze([
                          tmp12,
                          element2$
                        ]);
                        scrut3 = boyer2.#falsep(tmp13);
                        if (scrut3 === true) {
                          tmp14 = boyer2.#caddr(element1$1);
                          tmp15 = globalThis.Object.freeze([
                            tmp14,
                            element1$,
                            element2$
                          ]);
                          f_truelst_falselst = tmp15;
                          continue loopLabel
                        }
                        tmp16 = boyer2.#cadr(element1$1);
                        tmp17 = boyer2.#car(element1$1);
                        tmp18 = globalThis.Object.freeze([
                          tmp17,
                          element1$
                        ]);
                        tmp19 = boyer2.Conss(tmp18);
                        tmp20 = globalThis.Object.freeze([
                          tmp16,
                          tmp19,
                          element2$
                        ]);
                        scrut4 = boyer2.#tautologyp(tmp20);
                        if (scrut4 === true) {
                          tmp21 = boyer2.#caddr(element1$1);
                          tmp22 = boyer2.#car(element1$1);
                          tmp23 = globalThis.Object.freeze([
                            tmp22,
                            element2$
                          ]);
                          tmp24 = boyer2.Conss(tmp23);
                          tmp25 = globalThis.Object.freeze([
                            tmp21,
                            element1$,
                            tmp24
                          ]);
                          scrut5 = boyer2.#tautologyp(tmp25);
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
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #sublist(t) {
    let scrut, scrut1, scrut2, arg$Cons$0$, arg$Cons$1$, element1$, element0$, arg$Cons$0$1, arg$Cons$1$1, element1$1, element0$1, element1$2, element0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
    if (t instanceof NofibPrelude.Nil.class) {
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        boyer2.Nill
      ])
    } else if (t instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = t.head;
      arg$Cons$1$ = t.tail;
      if (arg$Cons$0$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$0$.head;
        arg$Cons$1$1 = arg$Cons$0$.tail;
        switch (arg$Cons$0$1) {
          case "(":
            if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
              scrut1 = boyer2.#sublist(arg$Cons$1$);
              if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
                element0$1 = runtime.Tuple.get(scrut1, 0);
                element1$1 = runtime.Tuple.get(scrut1, 1);
                scrut = boyer2.#sublist(element0$1);
                if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
                  element0$2 = runtime.Tuple.get(scrut, 0);
                  element1$2 = runtime.Tuple.get(scrut, 1);
                  tmp3 = globalThis.Object.freeze([
                    element1$1,
                    element1$2
                  ]);
                  tmp4 = boyer2.Conss(tmp3);
                  return globalThis.Object.freeze([
                    element0$2,
                    tmp4
                  ])
                }
              }
            }
            scrut2 = boyer2.#sublist(arg$Cons$1$);
            if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
              element0$ = runtime.Tuple.get(scrut2, 0);
              element1$ = runtime.Tuple.get(scrut2, 1);
              tmp = boyer2.Atom(arg$Cons$0$);
              tmp1 = globalThis.Object.freeze([
                tmp,
                element1$
              ]);
              tmp2 = boyer2.Conss(tmp1);
              return globalThis.Object.freeze([
                element0$,
                tmp2
              ])
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          case ")":
            if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
              return globalThis.Object.freeze([
                arg$Cons$1$,
                boyer2.Nill
              ])
            }
            break;
        }
        scrut2 = boyer2.#sublist(arg$Cons$1$);
        if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
          element0$ = runtime.Tuple.get(scrut2, 0);
          element1$ = runtime.Tuple.get(scrut2, 1);
          tmp5 = boyer2.Atom(arg$Cons$0$);
          tmp6 = globalThis.Object.freeze([
            tmp5,
            element1$
          ]);
          tmp7 = boyer2.Conss(tmp6);
          return globalThis.Object.freeze([
            element0$,
            tmp7
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      scrut2 = boyer2.#sublist(arg$Cons$1$);
      if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
        element0$ = runtime.Tuple.get(scrut2, 0);
        element1$ = runtime.Tuple.get(scrut2, 1);
        tmp8 = boyer2.Atom(arg$Cons$0$);
        tmp9 = globalThis.Object.freeze([
          tmp8,
          element1$
        ]);
        tmp10 = boyer2.Conss(tmp9);
        return globalThis.Object.freeze([
          element0$,
          tmp10
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mkLispList(ls) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, element1$, element0$;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$0$.head;
        arg$Cons$1$1 = arg$Cons$0$.tail;
        if (arg$Cons$0$1 === "(") {
          if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
            scrut = boyer2.#sublist(arg$Cons$1$);
            if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
              element0$ = runtime.Tuple.get(scrut, 0);
              element1$ = runtime.Tuple.get(scrut, 1);
              if (element0$ instanceof NofibPrelude.Nil.class) {
                return element1$
              }
              return boyer2.Nill;
            }
            return boyer2.Nill;
          }
          return boyer2.Nill;
        }
        return boyer2.Nill;
      }
      return boyer2.Nill;
    }
    return boyer2.Nill;
  }
  static #restOfToken(s) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (s instanceof NofibPrelude.Nil.class) {
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ])
    } else if (s instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = s.head;
      arg$Cons$1$ = s.tail;
      tmp = arg$Cons$0$ === "(";
      if (tmp === false) {
        tmp1 = arg$Cons$0$ === ")";
        if (tmp1 === false) {
          tmp2 = arg$Cons$0$ === " ";
          if (tmp2 === true) {
            tmp3 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
            return globalThis.Object.freeze([
              NofibPrelude.Nil,
              tmp3
            ])
          }
          scrut = boyer2.#restOfToken(arg$Cons$1$);
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
            element0$ = runtime.Tuple.get(scrut, 0);
            element1$ = runtime.Tuple.get(scrut, 1);
            tmp4 = NofibPrelude.Cons(arg$Cons$0$, element0$);
            return globalThis.Object.freeze([
              tmp4,
              element1$
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        tmp3 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          tmp3
        ]);
      }
      tmp3 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        tmp3
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #getToken(s) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3;
      if (s instanceof NofibPrelude.Nil.class) {
        return globalThis.Object.freeze([
          NofibPrelude.Nil,
          NofibPrelude.Nil
        ])
      } else if (s instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = s.head;
        arg$Cons$1$ = s.tail;
        scrut = arg$Cons$0$ === " ";
        if (scrut === true) {
          s = arg$Cons$1$;
          continue loopLabel
        }
        tmp = arg$Cons$0$ === "(";
        if (tmp === false) {
          tmp1 = arg$Cons$0$ === ")";
          if (tmp1 === true) {
            tmp2 = NofibPrelude.Cons(arg$Cons$0$, NofibPrelude.Nil);
            return globalThis.Object.freeze([
              tmp2,
              arg$Cons$1$
            ])
          }
          scrut1 = boyer2.#restOfToken(arg$Cons$1$);
          if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
            element0$ = runtime.Tuple.get(scrut1, 0);
            element1$ = runtime.Tuple.get(scrut1, 1);
            tmp3 = NofibPrelude.Cons(arg$Cons$0$, element0$);
            return globalThis.Object.freeze([
              tmp3,
              element1$
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        tmp2 = NofibPrelude.Cons(arg$Cons$0$, NofibPrelude.Nil);
        return globalThis.Object.freeze([
          tmp2,
          arg$Cons$1$
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #strToToken(s) {
    let scrut, element1$, element0$, tmp;
    if (s instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    scrut = boyer2.#getToken(s);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tmp = boyer2.#strToToken(element1$);
      return NofibPrelude.Cons(element0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #assoc(term_x_y) {
    loopLabel: while (true) {
      let scrut, element1$, element0$, arg$Conss$0$, element1$1, element0$1, arg$Conss$0$1, element0$2, arg$Atom$0$, tmp, tmp1;
      if (runtime.Tuple.isArrayLike(term_x_y) && term_x_y.length === 2) {
        element0$ = runtime.Tuple.get(term_x_y, 0);
        element1$ = runtime.Tuple.get(term_x_y, 1);
        if (element1$ instanceof boyer2.Conss.class) {
          arg$Conss$0$ = element1$.a;
          if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
            element0$1 = runtime.Tuple.get(arg$Conss$0$, 0);
            element1$1 = runtime.Tuple.get(arg$Conss$0$, 1);
            if (element0$1 instanceof boyer2.Conss.class) {
              arg$Conss$0$1 = element0$1.a;
              if (runtime.Tuple.isArrayLike(arg$Conss$0$1) && arg$Conss$0$1.length === 2) {
                element0$2 = runtime.Tuple.get(arg$Conss$0$1, 0);
                runtime.Tuple.get(arg$Conss$0$1, 1);
                if (element0$2 instanceof boyer2.Atom.class) {
                  arg$Atom$0$ = element0$2.a;
                  tmp = boyer2.Atom(arg$Atom$0$);
                  scrut = boyer2.#lispListEq(element0$, tmp);
                  if (scrut === true) {
                    return element0$1
                  }
                  tmp1 = globalThis.Object.freeze([
                    element0$,
                    element1$1
                  ]);
                  term_x_y = tmp1;
                  continue loopLabel;
                }
                return boyer2.Nill;
              }
              return boyer2.Nill;
            }
            return boyer2.Nill;
          }
          return boyer2.Nill;
        }
        return boyer2.Nill;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #addtoLUT(k_l_lut) {
    let scrut, scrut1, element2$, element1$, element0$, arg$Node$0$, element2$1, element1$1, element0$1, element1$2, element0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
    if (runtime.Tuple.isArrayLike(k_l_lut) && k_l_lut.length === 3) {
      element0$ = runtime.Tuple.get(k_l_lut, 0);
      element1$ = runtime.Tuple.get(k_l_lut, 1);
      element2$ = runtime.Tuple.get(k_l_lut, 2);
      if (element2$ instanceof boyer2.Empty.class) {
        tmp = NofibPrelude.Cons(element1$, NofibPrelude.Nil);
        tmp1 = globalThis.Object.freeze([
          element0$,
          tmp
        ]);
        tmp2 = globalThis.Object.freeze([
          boyer2.Empty,
          tmp1,
          boyer2.Empty
        ]);
        return boyer2.Node(tmp2)
      } else if (element2$ instanceof boyer2.Node.class) {
        arg$Node$0$ = element2$.x;
        if (runtime.Tuple.isArrayLike(arg$Node$0$) && arg$Node$0$.length === 3) {
          element0$1 = runtime.Tuple.get(arg$Node$0$, 0);
          element1$1 = runtime.Tuple.get(arg$Node$0$, 1);
          element2$1 = runtime.Tuple.get(arg$Node$0$, 2);
          if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 2) {
            element0$2 = runtime.Tuple.get(element1$1, 0);
            element1$2 = runtime.Tuple.get(element1$1, 1);
            scrut = NofibPrelude.listEq(element0$, element0$2);
            if (scrut === true) {
              tmp3 = NofibPrelude.Cons(element1$, element1$2);
              tmp4 = globalThis.Object.freeze([
                element0$2,
                tmp3
              ]);
              tmp5 = globalThis.Object.freeze([
                element0$1,
                tmp4,
                element2$1
              ]);
              return boyer2.Node(tmp5)
            }
            scrut1 = NofibPrelude.ltList(element0$, element0$2, lambda, lambda1);
            if (scrut1 === true) {
              tmp6 = globalThis.Object.freeze([
                element0$,
                element1$,
                element0$1
              ]);
              tmp7 = boyer2.#addtoLUT(tmp6);
              tmp8 = globalThis.Object.freeze([
                element0$2,
                element1$2
              ]);
              tmp9 = globalThis.Object.freeze([
                tmp7,
                tmp8,
                element2$1
              ]);
              return boyer2.Node(tmp9)
            }
            tmp10 = globalThis.Object.freeze([
              element0$2,
              element1$2
            ]);
            tmp11 = globalThis.Object.freeze([
              element0$,
              element1$,
              element2$1
            ]);
            tmp12 = boyer2.#addtoLUT(tmp11);
            tmp13 = globalThis.Object.freeze([
              element0$1,
              tmp10,
              tmp12
            ]);
            return boyer2.Node(tmp13);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #getLUT(t_lut) {
    loopLabel: while (true) {
      let scrut, scrut1, element1$, element0$, arg$Node$0$, element2$, element1$1, element0$1, element1$2, element0$2, tmp, tmp1;
      if (runtime.Tuple.isArrayLike(t_lut) && t_lut.length === 2) {
        element0$ = runtime.Tuple.get(t_lut, 0);
        element1$ = runtime.Tuple.get(t_lut, 1);
        if (element1$ instanceof boyer2.Empty.class) {
          return NofibPrelude.Nil
        } else if (element1$ instanceof boyer2.Node.class) {
          arg$Node$0$ = element1$.x;
          if (runtime.Tuple.isArrayLike(arg$Node$0$) && arg$Node$0$.length === 3) {
            element0$1 = runtime.Tuple.get(arg$Node$0$, 0);
            element1$1 = runtime.Tuple.get(arg$Node$0$, 1);
            element2$ = runtime.Tuple.get(arg$Node$0$, 2);
            if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 2) {
              element0$2 = runtime.Tuple.get(element1$1, 0);
              element1$2 = runtime.Tuple.get(element1$1, 1);
              scrut = NofibPrelude.listEq(element0$, element0$2);
              if (scrut === true) {
                return element1$2
              }
              scrut1 = NofibPrelude.ltList(element0$, element0$2, lambda2, lambda3);
              if (scrut1 === true) {
                tmp = globalThis.Object.freeze([
                  element0$,
                  element0$1
                ]);
                t_lut = tmp;
                continue loopLabel
              }
              tmp1 = globalThis.Object.freeze([
                element0$,
                element2$
              ]);
              t_lut = tmp1;
              continue loopLabel;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #makelemmas(rules) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2;
    if (rules instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (rules instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = rules.head;
      arg$Cons$1$ = rules.tail;
      tmp = boyer2.#strToToken(arg$Cons$0$);
      tmp1 = boyer2.#mkLispList(tmp);
      tmp2 = boyer2.#makelemmas(arg$Cons$1$);
      return NofibPrelude.Cons(tmp1, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #addlemma(lspls, term) {
    let z, scrut, scrut1, arg$Conss$0$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (lspls instanceof boyer2.Nill.class) {
      return term
    } else if (lspls instanceof boyer2.Atom.class) {
      throw globalThis.Object.freeze(new globalThis.Error("error", undefined))
    } else if (lspls instanceof boyer2.Conss.class) {
      arg$Conss$0$ = lspls.a;
      if (runtime.Tuple.isArrayLike(arg$Conss$0$) && arg$Conss$0$.length === 2) {
        let inlinedVal;
        element0$ = runtime.Tuple.get(arg$Conss$0$, 0);
        element1$ = runtime.Tuple.get(arg$Conss$0$, 1);
        z = boyer2.#car(element1$);
        tmp = boyer2.#tv(element0$);
        inlinedVal = go(NofibPrelude, "equal", 0);
        scrut = NofibPrelude.listEq(tmp, inlinedVal);
        if (scrut === true) {
          tmp1 = boyer2.#atom(z);
          scrut1 = ! tmp1;
          if (scrut1 === true) {
            tmp2 = boyer2.#car(z);
            tmp3 = boyer2.#tv(tmp2);
            tmp4 = globalThis.Object.freeze([
              element0$,
              element1$
            ]);
            tmp5 = boyer2.Conss(tmp4);
            tmp6 = globalThis.Object.freeze([
              tmp3,
              tmp5,
              term
            ]);
            return boyer2.#addtoLUT(tmp6)
          }
          throw globalThis.Object.freeze(new globalThis.Error("error", undefined));
        }
        throw globalThis.Object.freeze(new globalThis.Error("error", undefined));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #addlemmalst(lspls, term) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (lspls instanceof NofibPrelude.Nil.class) {
        return term
      } else if (lspls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = lspls.head;
        arg$Cons$1$ = lspls.tail;
        tmp = boyer2.#addlemma(arg$Cons$0$, term);
        lspls = arg$Cons$1$;
        term = tmp;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #applysubstlst(alist, y) {
    return boyer2.#applysubstlst_applysubst(0, alist, y)
  }
  static #applysubst(alist, x) {
    return boyer2.#applysubstlst_applysubst(1, alist, x)
  }
  static #onewayunify1lst(l1, l2, u) {
    return boyer2.#onewayunify1lst_onewayunify1(0, l1, l2, u)
  }
  static #onewayunify1(t1, t2, u) {
    return boyer2.#onewayunify1lst_onewayunify1(1, t1, t2, u)
  }
  static #onewayunify(t1, t2) {
    return boyer2.#onewayunify1(t1, t2, boyer2.Nill)
  }
  static #rewritewithlemmas(t, l, term) {
    return boyer2.#rewritewithlemmas_rewriteargs_rewrite(0, t, l, term)
  }
  static #rewriteargs(x, term) {
    return boyer2.#rewritewithlemmas_rewriteargs_rewrite(1, x, term, undefined)
  }
  static #rewrite(x, term) {
    return boyer2.#rewritewithlemmas_rewriteargs_rewrite(2, x, term, undefined)
  }
  static #subterm(i) {
    let tmp, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, s, inlinedVal6;
    inlinedVal = i + "";
    inlinedVal1 = "c" + inlinedVal;
    inlinedVal2 = inlinedVal1 + " d ) ) )( z f ( reverse ( append ( append a b ) ( [] ) ) ) )(u equal ( plus a b ) ( difference x y ) )(w lessp ( remainder a b )( member a ( length b ) ) ) )";
    inlinedVal3 = " ( zero ) ) ) )( y f ( times ( times a b )( plus " + inlinedVal2;
    inlinedVal4 = inlinedVal1 + inlinedVal3;
    inlinedVal5 = "( ( x f ( plus ( plus a b )( plus " + inlinedVal4;
    s = inlinedVal5;
    inlinedVal6 = go(NofibPrelude, s, 0);
    tmp = boyer2.#strToToken(inlinedVal6);
    return boyer2.#mkLispList(tmp)
  }
  static #report(b) {
    if (b === true) {
      return "The term is a tautology"
    }
    return "The term is not a tautology";
  }
  static #tautp(term) {
    let tmp, tmp1;
    tmp = boyer2.#rewrite(term, boyer2.lemmas);
    tmp1 = globalThis.Object.freeze([
      tmp,
      boyer2.Nill,
      boyer2.Nill
    ]);
    return boyer2.#tautologyp(tmp1)
  }
  static #teststatement(i) {
    let tmp;
    tmp = boyer2.#subterm(i);
    return boyer2.#applysubst(tmp, boyer2.statement)
  }
  static #testresult(i) {
    let tmp;
    tmp = boyer2.#teststatement(i);
    return boyer2.#tautp(tmp)
  }
  static #testBoyer2_nofib(n) {
    let tmp;
    tmp = boyer2.#testresult(n);
    return boyer2.#report(tmp)
  }
  static main() {
    return boyer2.#testBoyer2_nofib(3)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "boyer2"];
});
export { boyer21 as _$_modulePrivate_$_boyer2 };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export default boyer21;
