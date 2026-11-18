const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const listLen$accessorSymbol = globalThis.Symbol("listLen");
const inList$accessorSymbol = globalThis.Symbol("inList");
const append$accessorSymbol = globalThis.Symbol("append");
const replicate$accessorSymbol = globalThis.Symbol("replicate");
const insert$accessorSymbol = globalThis.Symbol("insert");
const clauseHelper$accessorSymbol = globalThis.Symbol("clauseHelper");
const disin$accessorSymbol = globalThis.Symbol("disin");
const elim$accessorSymbol = globalThis.Symbol("elim");
const negin$accessorSymbol = globalThis.Symbol("negin");
const spri$accessorSymbol = globalThis.Symbol("spri");
const parse$accessorSymbol = globalThis.Symbol("parse");
let clausify1, lambda$, main_testClausify_nofib_clauses_unicl_uniclHelper_tautclause_lscomp$lscomp, main_testClausify_nofib_clauses_unicl_uniclHelper$uniclHelper, main_testClausify_nofib_clauses$clauses, main_testClausify_nofib_clauses_split_splitHelper$splitHelper, main_testClausify_nofib_clauses_disp_interleave$interleave, main_testClausify_nofib_clauses_disp$disp, main_testClausify_nofib_clauses_disp_interleave$interleave1, main_testClausify_nofib_clauses_map$map, main_testClausify_nofib_clauses_concat_append$append, main_testClausify_nofib_replicate$replicate, main_testClausify_nofib_clauses_unicl_foldr$xs_Nil, main_testClausify_nofib_clauses_disp_append$xs_Cons, main_testClausify_nofib_clauses_disp_append$xs_Nil, main_testClausify_nofib_clauses_disp_append$xs_Cons1, main_testClausify_nofib_clauses_disp_append$xs_Nil1, main_testClausify_nofib_clauses_concat$ls_Nil, main_testClausify_nofib_clauses_concat$ls_Cons, main_testClausify_nofib_concat$ls_Cons, main_testClausify_nofib_concat_append$xs_Cons, main_testClausify_nofib_map$xs_Nil, main_testClausify_nofib_replicate$replicate$worker, main_testClausify_nofib_clauses_split_splitHelper$splitHelper$worker, main_testClausify_nofib_clauses_unicl_uniclHelper_tautclause_lscomp$lscomp$worker;
main_testClausify_nofib_clauses_unicl_uniclHelper_tautclause_lscomp$lscomp = function main_testClausify_nofib_clauses_unicl_uniclHelper_tautclause_lscomp$lscomp(clausify2, a, ls) {
  return (eta$0$0, eta$0$5, eta$0$6, eta$0$9) => {
    return main_testClausify_nofib_clauses_unicl_uniclHelper_tautclause_lscomp$lscomp$worker(clausify2, a, ls, eta$0$0, eta$0$5, eta$0$6, eta$0$9)
  }
};
main_testClausify_nofib_clauses_unicl_uniclHelper_tautclause_lscomp$lscomp$worker = function main_testClausify_nofib_clauses_unicl_uniclHelper_tautclause_lscomp$lscomp$worker(clausify2, a, ls, eta$0$0, eta$0$5, eta$0$6, eta$0$9) {
  loopLabel: while (true) {
    loopLabel1: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        if (eta$0$0 instanceof NofibPrelude.Nil.class) {
          return false
        }
        return true;
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = clausify2[inList$accessorSymbol](arg$Cons$0$, a);
        if (scrut === true) {
          let fv_arg$Cons$0$, fv_arg$Cons$1$, fv_scrut;
          if (eta$0$0 instanceof NofibPrelude.Cons.class) {
            fv_arg$Cons$0$ = eta$0$0.head;
            fv_arg$Cons$1$ = eta$0$0.tail;
            fv_scrut = arg$Cons$0$ == fv_arg$Cons$0$;
            if (fv_scrut === true) {
              ls = arg$Cons$1$;
              eta$0$0 = fv_arg$Cons$1$;
              continue loopLabel
            }
            return true;
          }
          return true;
        }
        ls = arg$Cons$1$;
        continue loopLabel1;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
};
main_testClausify_nofib_clauses_unicl_uniclHelper$uniclHelper = function main_testClausify_nofib_clauses_unicl_uniclHelper$uniclHelper(p, x) {
  let inlinedVal, element1$, element0$, tmp, tmp1;
  tmp1 = globalThis.Object.freeze([
    NofibPrelude.Nil,
    NofibPrelude.Nil
  ]);
  inlinedVal = clausify1[clauseHelper$accessorSymbol](p, tmp1);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    let ys, inlinedVal1;
    element0$ = runtime.Tuple.get(inlinedVal, 0);
    element1$ = runtime.Tuple.get(inlinedVal, 1);
    tmp = main_testClausify_nofib_clauses_unicl_uniclHelper_tautclause_lscomp$lscomp(clausify1, element1$, element0$);
    ys = NofibPrelude.Nil;
    inlinedVal1 = tmp(ys, undefined, undefined, undefined);
    if (inlinedVal1 === true) {
      return x
    }
    return clausify1[insert$accessorSymbol](inlinedVal, x);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testClausify_nofib_clauses$clauses = function main_testClausify_nofib_clauses$clauses(t) {
  let tmp, tmp1, tmp2, tmp3, tmp4, inlinedVal, z, inlinedVal1, deforest$lam;
  tmp = clausify1[parse$accessorSymbol](t);
  tmp1 = clausify1[elim$accessorSymbol](tmp);
  tmp2 = clausify1[negin$accessorSymbol](tmp1);
  tmp3 = clausify1[disin$accessorSymbol](tmp2);
  deforest$lam = main_testClausify_nofib_clauses_unicl_foldr$xs_Nil();
  inlinedVal = main_testClausify_nofib_clauses_split_splitHelper$splitHelper(tmp3, deforest$lam);
  z = NofibPrelude.Nil;
  inlinedVal1 = inlinedVal(main_testClausify_nofib_clauses_unicl_uniclHelper$uniclHelper, z);
  tmp4 = main_testClausify_nofib_clauses_map$map(main_testClausify_nofib_clauses_disp$disp, inlinedVal1);
  return tmp4()
};
main_testClausify_nofib_clauses_split_splitHelper$splitHelper = function main_testClausify_nofib_clauses_split_splitHelper$splitHelper(p, a) {
  return (eta$0$5, eta$0$6) => {
    return main_testClausify_nofib_clauses_split_splitHelper$splitHelper$worker(p, a, eta$0$5, eta$0$6)
  }
};
main_testClausify_nofib_clauses_split_splitHelper$splitHelper$worker = function main_testClausify_nofib_clauses_split_splitHelper$splitHelper$worker(p, a, eta$0$5, eta$0$6) {
  loopLabel: while (true) {
    let arg$Con$0$, arg$Con$1$;
    if (p instanceof clausify1.Con.class) {
      arg$Con$0$ = p.a;
      arg$Con$1$ = p.b;
      p = arg$Con$0$;
      a = main_testClausify_nofib_clauses_split_splitHelper$splitHelper(arg$Con$1$, a);
      continue loopLabel
    }
    {
      let inlinedVal;
      inlinedVal = a(eta$0$5, eta$0$6);
      return runtime.safeCall(eta$0$5(p, inlinedVal));
    }
  }
};
main_testClausify_nofib_clauses_disp_interleave$interleave = function main_testClausify_nofib_clauses_disp_interleave$interleave(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testClausify_nofib_clauses_disp_interleave$interleave(ys, arg$Cons$1$);
    return main_testClausify_nofib_clauses_disp_append$xs_Cons(arg$Cons$0$, tmp)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testClausify_nofib_clauses_disp_append$xs_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testClausify_nofib_clauses_disp$disp = function main_testClausify_nofib_clauses_disp$disp(l_r) {
  let element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (runtime.Tuple.isArrayLike(l_r) && l_r.length === 2) {
    let inlinedVal, inlinedVal1, inlinedVal2;
    element0$ = runtime.Tuple.get(l_r, 0);
    element1$ = runtime.Tuple.get(l_r, 1);
    tmp = clausify1[listLen$accessorSymbol](element0$);
    inlinedVal = clausify1[replicate$accessorSymbol](tmp, " ");
    tmp1 = main_testClausify_nofib_clauses_disp_interleave$interleave1(element0$, inlinedVal);
    tmp2 = NofibPrelude.nofibStringToList("<=");
    tmp3 = clausify1[listLen$accessorSymbol](element1$);
    inlinedVal1 = clausify1[replicate$accessorSymbol](tmp3, " ");
    tmp4 = main_testClausify_nofib_clauses_disp_interleave$interleave(inlinedVal1, element1$);
    tmp5 = NofibPrelude.nofibStringToList("\n");
    inlinedVal2 = tmp4(tmp5);
    tmp6 = clausify1[append$accessorSymbol](tmp2, inlinedVal2);
    return tmp1(tmp6)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testClausify_nofib_clauses_disp_interleave$interleave1 = function main_testClausify_nofib_clauses_disp_interleave$interleave(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testClausify_nofib_clauses_disp_interleave$interleave1(ys, arg$Cons$1$);
    return main_testClausify_nofib_clauses_disp_append$xs_Cons1(arg$Cons$0$, tmp)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testClausify_nofib_clauses_disp_append$xs_Nil1()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testClausify_nofib_clauses_map$map = function main_testClausify_nofib_clauses_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testClausify_nofib_clauses_map$map(f, arg$Cons$1$);
    return main_testClausify_nofib_clauses_concat$ls_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testClausify_nofib_clauses_concat$ls_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testClausify_nofib_clauses_concat_append$append = function main_testClausify_nofib_clauses_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testClausify_nofib_clauses_concat_append$append(arg$Cons$1$, ys);
    return main_testClausify_nofib_concat_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testClausify_nofib_replicate$replicate = function main_testClausify_nofib_replicate$replicate(n, x) {
  return (eta$0$4, eta$0$5) => {
    return main_testClausify_nofib_replicate$replicate$worker(n, x, eta$0$4, eta$0$5)
  }
};
main_testClausify_nofib_replicate$replicate$worker = function main_testClausify_nofib_replicate$replicate$worker(n, x, eta$0$4, eta$0$5) {
  let scrut, tmp;
  scrut = n == 0;
  if (scrut === true) {
    return main_testClausify_nofib_map$xs_Nil()(eta$0$4, eta$0$5)
  }
  {
    let fv_tmp, inlinedVal;
    tmp = n - 1;
    fv_tmp = runtime.safeCall(eta$0$5(x));
    inlinedVal = main_testClausify_nofib_replicate$replicate$worker(tmp, x, undefined, eta$0$5);
    return main_testClausify_nofib_concat$ls_Cons(fv_tmp, inlinedVal);
  }
};
main_testClausify_nofib_clauses_unicl_foldr$xs_Nil = function main_testClausify_nofib_clauses_unicl_foldr$xs_Nil() {
  return (fv_f, fv_z) => {
    return fv_z
  }
};
main_testClausify_nofib_clauses_disp_append$xs_Cons = function main_testClausify_nofib_clauses_disp_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testClausify_nofib_clauses_disp_append$xs_Nil = function main_testClausify_nofib_clauses_disp_append$xs_Nil() {
  return (fv_ys) => {
    return fv_ys
  }
};
main_testClausify_nofib_clauses_disp_append$xs_Cons1 = function main_testClausify_nofib_clauses_disp_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testClausify_nofib_clauses_disp_append$xs_Nil1 = function main_testClausify_nofib_clauses_disp_append$xs_Nil() {
  return (fv_ys) => {
    return fv_ys
  }
};
main_testClausify_nofib_clauses_concat$ls_Nil = function main_testClausify_nofib_clauses_concat$ls_Nil() {
  return () => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5) => {
      return eta$0$5
    }
  }
};
main_testClausify_nofib_clauses_concat$ls_Cons = function main_testClausify_nofib_clauses_concat$ls_Cons(Cons_head, Cons_tail) {
  return () => {
    let inlinedVal;
    inlinedVal = Cons_tail();
    return main_testClausify_nofib_clauses_concat_append$append(Cons_head, inlinedVal)
  }
};
main_testClausify_nofib_concat$ls_Cons = function main_testClausify_nofib_concat$ls_Cons(Cons_head, Cons_tail) {
  return () => {
    let inlinedVal;
    inlinedVal = Cons_tail();
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testClausify_nofib_concat_append$xs_Cons = function main_testClausify_nofib_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testClausify_nofib_map$xs_Nil = function main_testClausify_nofib_map$xs_Nil() {
  return (fv_tmp, fv_f) => {
    return () => {
      return NofibPrelude.Nil
    }
  }
};
lambda$ = (undefined, function (clausify2) {
  return (s) => {
    let tmp;
    tmp = clausify2[spri$accessorSymbol](s);
    return tmp != 0
  }
});
(class clausify {
  static {
    clausify1 = this
  }
  static get [listLen$accessorSymbol]() { return clausify.#listLen; }
  static get [inList$accessorSymbol]() { return clausify.#inList; }
  static get [append$accessorSymbol]() { return clausify.#append; }
  static get [replicate$accessorSymbol]() { return clausify.#replicate; }
  static get [insert$accessorSymbol]() { return clausify.#insert; }
  static get [clauseHelper$accessorSymbol]() { return clausify.#clauseHelper; }
  static get [disin$accessorSymbol]() { return clausify.#disin; }
  static get [elim$accessorSymbol]() { return clausify.#elim; }
  static get [negin$accessorSymbol]() { return clausify.#negin; }
  static get [spri$accessorSymbol]() { return clausify.#spri; }
  static get [parse$accessorSymbol]() { return clausify.#parse; }
  static {
    clausify.Sym = function Sym(a) {
      return globalThis.Object.freeze(new Sym.class(a));
    };
    (class Sym {
      static {
        clausify.Sym.class = this
      }
      constructor(a) {
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Sym", ["a"]];
    });
    clausify.Not = function Not(a) {
      return globalThis.Object.freeze(new Not.class(a));
    };
    (class Not {
      static {
        clausify.Not.class = this
      }
      constructor(a) {
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Not", ["a"]];
    });
    clausify.Dis = function Dis(a, b) {
      return globalThis.Object.freeze(new Dis.class(a, b));
    };
    (class Dis {
      static {
        clausify.Dis.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Dis", ["a", "b"]];
    });
    clausify.Con = function Con(a, b) {
      return globalThis.Object.freeze(new Con.class(a, b));
    };
    (class Con {
      static {
        clausify.Con.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Con", ["a", "b"]];
    });
    clausify.Imp = function Imp(a, b) {
      return globalThis.Object.freeze(new Imp.class(a, b));
    };
    (class Imp {
      static {
        clausify.Imp.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Imp", ["a", "b"]];
    });
    clausify.Eqv = function Eqv(a, b) {
      return globalThis.Object.freeze(new Eqv.class(a, b));
    };
    (class Eqv {
      static {
        clausify.Eqv.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Eqv", ["a", "b"]];
    });
    clausify.Ast = function Ast(f) {
      return globalThis.Object.freeze(new Ast.class(f));
    };
    (class Ast {
      static {
        clausify.Ast.class = this
      }
      constructor(f) {
        this.f = f;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ast", ["f"]];
    });
    clausify.Lex = function Lex(s) {
      return globalThis.Object.freeze(new Lex.class(s));
    };
    (class Lex {
      static {
        clausify.Lex.class = this
      }
      constructor(s) {
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lex", ["s"]];
    });
  }
  static #while_(p, f, x) {
    loopLabel: while (true) {
      let scrut, tmp;
      scrut = runtime.safeCall(p(x));
      if (scrut === true) {
        tmp = runtime.safeCall(f(x));
        x = tmp;
        continue loopLabel
      }
      return x;
    }
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
  static #inList(x, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = x === arg$Cons$0$;
        if (scrut === true) {
          return true
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      } else if (ls instanceof NofibPrelude.Nil.class) {
        return false
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = clausify.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
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
    tmp1 = clausify.#replicate(tmp, x);
    return NofibPrelude.Cons(x, tmp1);
  }
  static #charLt(a, b) {
    return a < b
  }
  static #charLeq(a, b) {
    return a <= b
  }
  static #charGt(a, b) {
    return a > b
  }
  static #insert(x, ys) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(x, NofibPrelude.Nil)
    } else if (ys instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ys.head;
      arg$Cons$1$ = ys.tail;
      scrut = clausify.#charLt(x, arg$Cons$0$);
      if (scrut === true) {
        tmp = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
        return NofibPrelude.Cons(x, tmp)
      }
      scrut1 = clausify.#charGt(x, arg$Cons$0$);
      if (scrut1 === true) {
        tmp1 = clausify.#insert(x, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Cons$0$, tmp1)
      }
      return NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #clauseHelper(p, x) {
    loopLabel: while (true) {
      let arg$Not$0$, arg$Sym$0$, element1$, element0$, arg$Sym$0$1, arg$Dis$0$, arg$Dis$1$, tmp, tmp1, tmp2;
      if (p instanceof clausify.Dis.class) {
        arg$Dis$0$ = p.a;
        arg$Dis$1$ = p.b;
        tmp = clausify.#clauseHelper(arg$Dis$1$, x);
        p = arg$Dis$0$;
        x = tmp;
        continue loopLabel
      } else if (p instanceof clausify.Sym.class) {
        arg$Sym$0$1 = p.a;
        if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
          element0$ = runtime.Tuple.get(x, 0);
          element1$ = runtime.Tuple.get(x, 1);
          tmp1 = clausify.#insert(arg$Sym$0$1, element0$);
          return globalThis.Object.freeze([
            tmp1,
            element1$
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (p instanceof clausify.Not.class) {
        arg$Not$0$ = p.a;
        if (arg$Not$0$ instanceof clausify.Sym.class) {
          arg$Sym$0$ = arg$Not$0$.a;
          if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
            element0$ = runtime.Tuple.get(x, 0);
            element1$ = runtime.Tuple.get(x, 1);
            tmp2 = clausify.#insert(arg$Sym$0$, element1$);
            return globalThis.Object.freeze([
              element0$,
              tmp2
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #conjunct(p) {
    if (p instanceof clausify.Con.class) {
      return true
    }
    return false;
  }
  static #disin(p) {
    loopLabel: while (true) {
      let dp, dq, arg$Con$0$, arg$Con$1$, arg$Dis$0$, arg$Dis$1$, arg$Con$0$1, arg$Con$1$1, arg$Con$0$2, arg$Con$1$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
      if (p instanceof clausify.Dis.class) {
        arg$Dis$0$ = p.a;
        arg$Dis$1$ = p.b;
        if (arg$Dis$1$ instanceof clausify.Con.class) {
          arg$Con$0$2 = arg$Dis$1$.a;
          arg$Con$1$2 = arg$Dis$1$.b;
          tmp = clausify.Dis(arg$Dis$0$, arg$Con$0$2);
          tmp1 = clausify.#disin(tmp);
          tmp2 = clausify.Dis(arg$Dis$0$, arg$Con$1$2);
          tmp3 = clausify.#disin(tmp2);
          return clausify.Con(tmp1, tmp3)
        }
        if (arg$Dis$0$ instanceof clausify.Con.class) {
          arg$Con$0$1 = arg$Dis$0$.a;
          arg$Con$1$1 = arg$Dis$0$.b;
          tmp4 = clausify.Dis(arg$Con$0$1, arg$Dis$1$);
          tmp5 = clausify.#disin(tmp4);
          tmp6 = clausify.Dis(arg$Con$1$1, arg$Dis$1$);
          tmp7 = clausify.#disin(tmp6);
          return clausify.Con(tmp5, tmp7)
        }
        dp = clausify.#disin(arg$Dis$0$);
        dq = clausify.#disin(arg$Dis$1$);
        tmp8 = clausify.#conjunct(dp);
        if (tmp8 === false) {
          tmp9 = clausify.#conjunct(dq);
          if (tmp9 === true) {
            tmp10 = clausify.Dis(dp, dq);
            p = tmp10;
            continue loopLabel
          }
          return clausify.Dis(dp, dq);
        }
        tmp10 = clausify.Dis(dp, dq);
        p = tmp10;
        continue loopLabel;
      } else if (p instanceof clausify.Con.class) {
        arg$Con$0$ = p.a;
        arg$Con$1$ = p.b;
        tmp11 = clausify.#disin(arg$Con$0$);
        tmp12 = clausify.#disin(arg$Con$1$);
        return clausify.Con(tmp11, tmp12)
      }
      return p;
    }
  }
  static #elim(p) {
    let arg$Eqv$0$, arg$Eqv$1$, arg$Imp$0$, arg$Imp$1$, arg$Con$0$, arg$Con$1$, arg$Dis$0$, arg$Dis$1$, arg$Not$0$, arg$Sym$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    if (p instanceof clausify.Sym.class) {
      arg$Sym$0$ = p.a;
      return clausify.Sym(arg$Sym$0$)
    } else if (p instanceof clausify.Not.class) {
      arg$Not$0$ = p.a;
      tmp = clausify.#elim(arg$Not$0$);
      return clausify.Not(tmp)
    } else if (p instanceof clausify.Dis.class) {
      arg$Dis$0$ = p.a;
      arg$Dis$1$ = p.b;
      tmp1 = clausify.#elim(arg$Dis$0$);
      tmp2 = clausify.#elim(arg$Dis$1$);
      return clausify.Dis(tmp1, tmp2)
    } else if (p instanceof clausify.Con.class) {
      arg$Con$0$ = p.a;
      arg$Con$1$ = p.b;
      tmp3 = clausify.#elim(arg$Con$0$);
      tmp4 = clausify.#elim(arg$Con$1$);
      return clausify.Con(tmp3, tmp4)
    } else if (p instanceof clausify.Imp.class) {
      arg$Imp$0$ = p.a;
      arg$Imp$1$ = p.b;
      tmp5 = clausify.#elim(arg$Imp$0$);
      tmp6 = clausify.Not(tmp5);
      tmp7 = clausify.#elim(arg$Imp$1$);
      return clausify.Dis(tmp6, tmp7)
    } else if (p instanceof clausify.Eqv.class) {
      arg$Eqv$0$ = p.a;
      arg$Eqv$1$ = p.b;
      tmp8 = clausify.Imp(arg$Eqv$0$, arg$Eqv$1$);
      tmp9 = clausify.#elim(tmp8);
      tmp10 = clausify.Imp(arg$Eqv$1$, arg$Eqv$0$);
      tmp11 = clausify.#elim(tmp10);
      return clausify.Con(tmp9, tmp11)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #negin(p) {
    loopLabel: while (true) {
      let arg$Con$0$, arg$Con$1$, arg$Dis$0$, arg$Dis$1$, arg$Not$0$, arg$Dis$0$1, arg$Dis$1$1, arg$Con$0$1, arg$Con$1$1, arg$Not$0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      if (p instanceof clausify.Not.class) {
        arg$Not$0$ = p.a;
        if (arg$Not$0$ instanceof clausify.Not.class) {
          arg$Not$0$1 = arg$Not$0$.a;
          p = arg$Not$0$1;
          continue loopLabel
        } else if (arg$Not$0$ instanceof clausify.Con.class) {
          arg$Con$0$1 = arg$Not$0$.a;
          arg$Con$1$1 = arg$Not$0$.b;
          tmp = clausify.Not(arg$Con$0$1);
          tmp1 = clausify.#negin(tmp);
          tmp2 = clausify.Not(arg$Con$1$1);
          tmp3 = clausify.#negin(tmp2);
          return clausify.Dis(tmp1, tmp3)
        } else if (arg$Not$0$ instanceof clausify.Dis.class) {
          arg$Dis$0$1 = arg$Not$0$.a;
          arg$Dis$1$1 = arg$Not$0$.b;
          tmp4 = clausify.Not(arg$Dis$0$1);
          tmp5 = clausify.#negin(tmp4);
          tmp6 = clausify.Not(arg$Dis$1$1);
          tmp7 = clausify.#negin(tmp6);
          return clausify.Con(tmp5, tmp7)
        }
        return p;
      } else if (p instanceof clausify.Dis.class) {
        arg$Dis$0$ = p.a;
        arg$Dis$1$ = p.b;
        tmp8 = clausify.#negin(arg$Dis$0$);
        tmp9 = clausify.#negin(arg$Dis$1$);
        return clausify.Dis(tmp8, tmp9)
      } else if (p instanceof clausify.Con.class) {
        arg$Con$0$ = p.a;
        arg$Con$1$ = p.b;
        tmp10 = clausify.#negin(arg$Con$0$);
        tmp11 = clausify.#negin(arg$Con$1$);
        return clausify.Con(tmp10, tmp11)
      }
      return p;
    }
  }
  static #opri(c) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5;
    scrut = c === "(";
    if (scrut === true) {
      return 0
    }
    scrut1 = c === "=";
    if (scrut1 === true) {
      return 1
    }
    scrut2 = c === ">";
    if (scrut2 === true) {
      return 2
    }
    scrut3 = c === "|";
    if (scrut3 === true) {
      return 3
    }
    scrut4 = c === "&";
    if (scrut4 === true) {
      return 4
    }
    scrut5 = c === "~";
    if (scrut5 === true) {
      return 5
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #red(s) {
    let arg$Cons$0$, arg$Cons$1$, arg$Ast$0$, arg$Cons$0$1, arg$Cons$1$1, arg$Lex$0$, arg$Cons$0$2, arg$Cons$1$2, arg$Ast$0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (s instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = s.head;
      arg$Cons$1$ = s.tail;
      if (arg$Cons$0$ instanceof clausify.Ast.class) {
        arg$Ast$0$ = arg$Cons$0$.f;
        if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$1$.head;
          arg$Cons$1$1 = arg$Cons$1$.tail;
          if (arg$Cons$0$1 instanceof clausify.Lex.class) {
            arg$Lex$0$ = arg$Cons$0$1.s;
            switch (arg$Lex$0$) {
              case "=":
                if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$2 = arg$Cons$1$1.head;
                  arg$Cons$1$2 = arg$Cons$1$1.tail;
                  if (arg$Cons$0$2 instanceof clausify.Ast.class) {
                    arg$Ast$0$1 = arg$Cons$0$2.f;
                    tmp = clausify.Eqv(arg$Ast$0$1, arg$Ast$0$);
                    tmp1 = clausify.Ast(tmp);
                    return NofibPrelude.Cons(tmp1, arg$Cons$1$2)
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              case ">":
                if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$2 = arg$Cons$1$1.head;
                  arg$Cons$1$2 = arg$Cons$1$1.tail;
                  if (arg$Cons$0$2 instanceof clausify.Ast.class) {
                    arg$Ast$0$1 = arg$Cons$0$2.f;
                    tmp2 = clausify.Imp(arg$Ast$0$1, arg$Ast$0$);
                    tmp3 = clausify.Ast(tmp2);
                    return NofibPrelude.Cons(tmp3, arg$Cons$1$2)
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              case "|":
                if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$2 = arg$Cons$1$1.head;
                  arg$Cons$1$2 = arg$Cons$1$1.tail;
                  if (arg$Cons$0$2 instanceof clausify.Ast.class) {
                    arg$Ast$0$1 = arg$Cons$0$2.f;
                    tmp4 = clausify.Dis(arg$Ast$0$1, arg$Ast$0$);
                    tmp5 = clausify.Ast(tmp4);
                    return NofibPrelude.Cons(tmp5, arg$Cons$1$2)
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              case "&":
                if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$2 = arg$Cons$1$1.head;
                  arg$Cons$1$2 = arg$Cons$1$1.tail;
                  if (arg$Cons$0$2 instanceof clausify.Ast.class) {
                    arg$Ast$0$1 = arg$Cons$0$2.f;
                    tmp6 = clausify.Con(arg$Ast$0$1, arg$Ast$0$);
                    tmp7 = clausify.Ast(tmp6);
                    return NofibPrelude.Cons(tmp7, arg$Cons$1$2)
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              case "~":
                tmp8 = clausify.Not(arg$Ast$0$);
                tmp9 = clausify.Ast(tmp8);
                return NofibPrelude.Cons(tmp9, arg$Cons$1$1);
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #spri(s) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Lex$0$;
    if (s instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = s.head;
      arg$Cons$1$ = s.tail;
      if (arg$Cons$0$ instanceof clausify.Ast.class) {
        if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$1$.head;
          if (arg$Cons$0$1 instanceof clausify.Lex.class) {
            arg$Lex$0$ = arg$Cons$0$1.s;
            return clausify.#opri(arg$Lex$0$)
          }
          return 0;
        }
        return 0;
      }
      return 0;
    }
    return 0;
  }
  static #redstar(s) {
    let lambda$here;
    lambda$here = lambda$(clausify);
    return clausify.#while_(lambda$here, clausify.#red, s)
  }
  static #parseHelper(t, s) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, arg$Lex$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      if (t instanceof NofibPrelude.Nil.class) {
        return clausify.#redstar(s)
      } else if (t instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = t.head;
        arg$Cons$1$ = t.tail;
        switch (arg$Cons$0$) {
          case " ":
            t = arg$Cons$1$;
            continue loopLabel;
          case "(":
            tmp = clausify.Lex("(");
            tmp1 = NofibPrelude.Cons(tmp, s);
            t = arg$Cons$1$;
            s = tmp1;
            continue loopLabel;
          case ")":
            scrut = clausify.#redstar(s);
            if (scrut instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$1 = scrut.head;
              arg$Cons$1$1 = scrut.tail;
              if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$2 = arg$Cons$1$1.head;
                arg$Cons$1$2 = arg$Cons$1$1.tail;
                if (arg$Cons$0$2 instanceof clausify.Lex.class) {
                  arg$Lex$0$ = arg$Cons$0$2.s;
                  if (arg$Lex$0$ === "(") {
                    tmp13 = NofibPrelude.Cons(arg$Cons$0$1, arg$Cons$1$2);
                    t = arg$Cons$1$;
                    s = tmp13;
                    continue loopLabel
                  }
                }
              }
            }
            break;
        }
        tmp2 = clausify.#charLeq("a", arg$Cons$0$);
        if (tmp2 === true) {
          tmp3 = clausify.#charLeq(arg$Cons$0$, "z");
        } else {
          tmp3 = false;
        }
        if (tmp3 === true) {
          tmp4 = clausify.Sym(arg$Cons$0$);
          tmp5 = clausify.Ast(tmp4);
          tmp6 = NofibPrelude.Cons(tmp5, s);
          t = arg$Cons$1$;
          s = tmp6;
          continue loopLabel
        }
        tmp7 = clausify.#spri(s);
        tmp8 = clausify.#opri(arg$Cons$0$);
        scrut1 = tmp7 > tmp8;
        if (scrut1 === true) {
          tmp9 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
          tmp10 = clausify.#red(s);
          t = tmp9;
          s = tmp10;
          continue loopLabel
        }
        tmp11 = clausify.Lex(arg$Cons$0$);
        tmp12 = NofibPrelude.Cons(tmp11, s);
        t = arg$Cons$1$;
        s = tmp12;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #parse(t) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Ast$0$;
    scrut = clausify.#parseHelper(t, NofibPrelude.Nil);
    if (scrut instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = scrut.head;
      arg$Cons$1$ = scrut.tail;
      if (arg$Cons$0$ instanceof clausify.Ast.class) {
        arg$Ast$0$ = arg$Cons$0$.f;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          return arg$Ast$0$
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let xs, tmp, inlinedVal, inlinedVal1;
    tmp = NofibPrelude.nofibStringToList("a = a = a");
    xs = main_testClausify_nofib_replicate$replicate(10, tmp);
    inlinedVal = xs(undefined, main_testClausify_nofib_clauses$clauses);
    inlinedVal1 = inlinedVal();
    return NofibPrelude.nofibListToString(inlinedVal1)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "clausify"];
});
export default clausify1;
