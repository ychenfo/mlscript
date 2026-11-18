const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const leaveWhile$accessorSymbol = globalThis.Symbol("leaveWhile");
const isSpace$accessorSymbol = globalThis.Symbol("isSpace");
const insertT$accessorSymbol = globalThis.Symbol("insertT");
let treejoin1, lambda, lambda1, main_testTreejoin_nofib_join$join, main_testTreejoin_nofib_readTree_readInt_readInt_$readInt_, main_testTreejoin_nofib_readTree_readInt_readInt_$readInt_1, main_testTreejoin_nofib_join$scrut_None, main_testTreejoin_nofib_join$scrut_Some, main_testTreejoin_nofib_readTree$scrut_tup2, main_testTreejoin_nofib_readTree$scrut_tup21, main_testTreejoin_nofib_readTree$scrut_tup22, main_testTreejoin_nofib_readTree$scrut_tup23, main_testTreejoin_nofib_readTree$scrut_tup24, main_testTreejoin_nofib_readTree$scrut_tup25, main_testTreejoin_nofib_readTree$scrut_tup2$worker, main_testTreejoin_nofib_readTree$scrut_tup2$worker1, main_testTreejoin_nofib_readTree$scrut_tup2$worker2, main_testTreejoin_nofib_readTree$scrut_tup2$worker3, main_testTreejoin_nofib_readTree$scrut_tup2$worker4, main_testTreejoin_nofib_readTree$scrut_tup2$worker5, main_testTreejoin_nofib_join$scrut_Some$worker;
main_testTreejoin_nofib_join$join = function main_testTreejoin_nofib_join$join(t1, t2, j) {
  loopLabel: while (true) {
    let arg$Node$1$, arg$Node$2$, arg$Leaf$1$, element2$, element1$, element0$, tmp;
    if (t1 instanceof treejoin1.Empty.class) {
      return j
    }
    if (t2 instanceof treejoin1.Empty.class) {
      return j
    }
    if (t1 instanceof treejoin1.Leaf.class) {
      arg$Leaf$1$ = t1.e;
      if (runtime.Tuple.isArrayLike(arg$Leaf$1$) && arg$Leaf$1$.length === 3) {
        let k, t, inlinedVal;
        element0$ = runtime.Tuple.get(arg$Leaf$1$, 0);
        element1$ = runtime.Tuple.get(arg$Leaf$1$, 1);
        element2$ = runtime.Tuple.get(arg$Leaf$1$, 2);
        k = element2$;
        t = t2;
        inlinedLbl: {
          loopLabel1: while (true) {
            let scrut, scrut1, arg$Leaf$0$, arg$Leaf$1$1, arg$Node$0$, arg$Node$1$1, arg$Node$2$1;
            if (t instanceof treejoin1.Node.class) {
              arg$Node$0$ = t.k;
              arg$Node$1$1 = t.l;
              arg$Node$2$1 = t.r;
              scrut = k <= arg$Node$0$;
              if (scrut === true) {
                t = arg$Node$1$1;
                continue loopLabel1
              }
              t = arg$Node$2$1;
              continue loopLabel1;
            } else if (t instanceof treejoin1.Leaf.class) {
              arg$Leaf$0$ = t.k;
              arg$Leaf$1$1 = t.e;
              scrut1 = k === arg$Leaf$0$;
              if (scrut1 === true) {
                inlinedVal = main_testTreejoin_nofib_join$scrut_Some(arg$Leaf$1$1);
                break inlinedLbl
              }
              inlinedVal = main_testTreejoin_nofib_join$scrut_None();
              break inlinedLbl;
            } else if (t instanceof treejoin1.Empty.class) {
              inlinedVal = main_testTreejoin_nofib_join$scrut_None();
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        return inlinedVal(j, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, element0$, element1$, element2$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (t1 instanceof treejoin1.Node.class) {
      arg$Node$1$ = t1.l;
      arg$Node$2$ = t1.r;
      tmp = main_testTreejoin_nofib_join$join(arg$Node$2$, t2, j);
      t1 = arg$Node$1$;
      j = tmp;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testTreejoin_nofib_readTree_readInt_readInt_$readInt_ = function main_testTreejoin_nofib_readTree_readInt_readInt_$readInt_(treejoin2, n, cs) {
  loopLabel: while (true) {
    let s_, s_1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (cs instanceof NofibPrelude.Cons.class) {
      let inlinedVal, n1, tmp5;
      arg$Cons$0$ = cs.head;
      arg$Cons$1$ = cs.tail;
      n1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
      tmp5 = n1 >= 48;
      if (tmp5 === true) {
        inlinedVal = n1 <= 57;
        if (inlinedVal === true) {
          tmp = n * 10;
          tmp1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
          tmp2 = tmp + tmp1;
          tmp3 = tmp2 - 48;
          n = tmp3;
          cs = arg$Cons$1$;
          continue loopLabel
        }
        tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
        s_ = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], tmp4);
        return main_testTreejoin_nofib_readTree$scrut_tup2(n, s_);
      }
      tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
      s_ = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], tmp4);
      return main_testTreejoin_nofib_readTree$scrut_tup2(n, s_);
    }
    s_1 = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], cs);
    return main_testTreejoin_nofib_readTree$scrut_tup2(n, s_1);
  }
};
main_testTreejoin_nofib_readTree_readInt_readInt_$readInt_1 = function main_testTreejoin_nofib_readTree_readInt_readInt_$readInt_(treejoin2, n, cs) {
  loopLabel: while (true) {
    let s_, s_1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (cs instanceof NofibPrelude.Cons.class) {
      let inlinedVal, n1, tmp5;
      arg$Cons$0$ = cs.head;
      arg$Cons$1$ = cs.tail;
      n1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
      tmp5 = n1 >= 48;
      if (tmp5 === true) {
        inlinedVal = n1 <= 57;
        if (inlinedVal === true) {
          tmp = n * 10;
          tmp1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
          tmp2 = tmp + tmp1;
          tmp3 = tmp2 - 48;
          n = tmp3;
          cs = arg$Cons$1$;
          continue loopLabel
        }
        tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
        s_ = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], tmp4);
        return main_testTreejoin_nofib_readTree$scrut_tup23(n, s_);
      }
      tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
      s_ = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], tmp4);
      return main_testTreejoin_nofib_readTree$scrut_tup23(n, s_);
    }
    s_1 = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], cs);
    return main_testTreejoin_nofib_readTree$scrut_tup23(n, s_1);
  }
};
main_testTreejoin_nofib_join$scrut_None = function main_testTreejoin_nofib_join$scrut_None() {
  return (fv_j, fv_arg$Some$0$, fv_element0$, fv_element1$, fv_element2$, fv_f, fv_e, fv_d, fv_tmp, fv_a, fv_b, fv_c) => {
    return fv_j
  }
};
main_testTreejoin_nofib_join$scrut_Some = function main_testTreejoin_nofib_join$scrut_Some(Some_x) {
  return (fv_j, fv_arg$Some$0$, fv_element0$, fv_element1$, fv_element2$, fv_f, fv_e, fv_d, fv_tmp, fv_a, fv_b, fv_c) => {
    return main_testTreejoin_nofib_join$scrut_Some$worker(Some_x, fv_j, fv_arg$Some$0$, fv_element0$, fv_element1$, fv_element2$, fv_f, fv_e, fv_d, fv_tmp, fv_a, fv_b, fv_c)
  }
};
main_testTreejoin_nofib_join$scrut_Some$worker = function main_testTreejoin_nofib_join$scrut_Some$worker(Some_x, fv_j, fv_arg$Some$0$, fv_element0$, fv_element1$, fv_element2$, fv_f, fv_e, fv_d, fv_tmp, fv_a, fv_b, fv_c) {
  if (runtime.Tuple.isArrayLike(Some_x) && Some_x.length === 3) {
    fv_element0$ = runtime.Tuple.get(Some_x, 0);
    fv_element1$ = runtime.Tuple.get(Some_x, 1);
    runtime.Tuple.get(Some_x, 2);
    fv_tmp = globalThis.Object.freeze([
      fv_a,
      fv_b,
      fv_c,
      fv_element0$,
      fv_element1$
    ]);
    return treejoin1[insertT$accessorSymbol](fv_c, fv_tmp, fv_j)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testTreejoin_nofib_readTree$scrut_tup2 = function main_testTreejoin_nofib_readTree$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_s_, fv_f, fv_scrut, fv_element0$1, fv_element1$1, fv_s__, fv_g, fv_scrut1, fv_element0$2, fv_element1$2, fv_s___, fv_h, fv_e, fv_k, fv_fk, fv_tmp, fv_t) => {
    return main_testTreejoin_nofib_readTree$scrut_tup2$worker5(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_s_, fv_f, fv_scrut, fv_element0$1, fv_element1$1, fv_s__, fv_g, fv_scrut1, fv_element0$2, fv_element1$2, fv_s___, fv_h, fv_e, fv_k, fv_fk, fv_tmp, fv_t)
  }
};
main_testTreejoin_nofib_readTree$scrut_tup2$worker5 = function main_testTreejoin_nofib_readTree$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_s_, fv_f, fv_scrut, fv_element0$1, fv_element1$1, fv_s__, fv_g, fv_scrut1, fv_element0$2, fv_element1$2, fv_s___, fv_h, fv_e, fv_k, fv_fk, fv_tmp, fv_t) {
  let treejoin2, n, cs, inlinedVal;
  treejoin2 = treejoin1;
  n = 0;
  cs = tup2_1;
  inlinedLbl: {
    loopLabel: while (true) {
      let s_, s_1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
      if (cs instanceof NofibPrelude.Cons.class) {
        let inlinedVal1, n1, tmp5;
        arg$Cons$0$ = cs.head;
        arg$Cons$1$ = cs.tail;
        n1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
        tmp5 = n1 >= 48;
        if (tmp5 === true) {
          inlinedVal1 = n1 <= 57;
          if (inlinedVal1 === true) {
            tmp = n * 10;
            tmp1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
            tmp2 = tmp + tmp1;
            tmp3 = tmp2 - 48;
            n = tmp3;
            cs = arg$Cons$1$;
            continue loopLabel
          }
          tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
          s_ = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], tmp4);
          inlinedVal = main_testTreejoin_nofib_readTree$scrut_tup21(n, s_);
          break inlinedLbl;
        }
        tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
        s_ = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], tmp4);
        inlinedVal = main_testTreejoin_nofib_readTree$scrut_tup21(n, s_);
        break inlinedLbl;
      }
      s_1 = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], cs);
      inlinedVal = main_testTreejoin_nofib_readTree$scrut_tup21(n, s_1);
      break inlinedLbl;
    }
  }
  return inlinedVal(fv_element0$1, fv_element1$1, fv_s__, fv_g, fv_scrut1, fv_element0$2, fv_element1$2, fv_s___, fv_h, fv_e, tup2_0, fv_k, fv_fk, fv_tmp, fv_t)
};
main_testTreejoin_nofib_readTree$scrut_tup21 = function main_testTreejoin_nofib_readTree$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_s__, fv_g, fv_scrut, fv_element0$1, fv_element1$1, fv_s___, fv_h, fv_e, fv_f, fv_k, fv_fk, fv_tmp, fv_t) => {
    return main_testTreejoin_nofib_readTree$scrut_tup2$worker4(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_s__, fv_g, fv_scrut, fv_element0$1, fv_element1$1, fv_s___, fv_h, fv_e, fv_f, fv_k, fv_fk, fv_tmp, fv_t)
  }
};
main_testTreejoin_nofib_readTree$scrut_tup2$worker4 = function main_testTreejoin_nofib_readTree$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_s__, fv_g, fv_scrut, fv_element0$1, fv_element1$1, fv_s___, fv_h, fv_e, fv_f, fv_k, fv_fk, fv_tmp, fv_t) {
  let treejoin2, n, cs, inlinedVal;
  treejoin2 = treejoin1;
  n = 0;
  cs = tup2_1;
  inlinedLbl: {
    loopLabel: while (true) {
      let s_, s_1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
      if (cs instanceof NofibPrelude.Cons.class) {
        let inlinedVal1, n1, tmp5;
        arg$Cons$0$ = cs.head;
        arg$Cons$1$ = cs.tail;
        n1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
        tmp5 = n1 >= 48;
        if (tmp5 === true) {
          inlinedVal1 = n1 <= 57;
          if (inlinedVal1 === true) {
            tmp = n * 10;
            tmp1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
            tmp2 = tmp + tmp1;
            tmp3 = tmp2 - 48;
            n = tmp3;
            cs = arg$Cons$1$;
            continue loopLabel
          }
          tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
          s_ = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], tmp4);
          inlinedVal = main_testTreejoin_nofib_readTree$scrut_tup22(n, s_);
          break inlinedLbl;
        }
        tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
        s_ = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], tmp4);
        inlinedVal = main_testTreejoin_nofib_readTree$scrut_tup22(n, s_);
        break inlinedLbl;
      }
      s_1 = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], cs);
      inlinedVal = main_testTreejoin_nofib_readTree$scrut_tup22(n, s_1);
      break inlinedLbl;
    }
  }
  return inlinedVal(fv_element0$1, fv_element1$1, fv_s___, fv_h, fv_e, fv_f, tup2_0, fv_k, fv_fk, fv_tmp, fv_t)
};
main_testTreejoin_nofib_readTree$scrut_tup22 = function main_testTreejoin_nofib_readTree$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_s___, fv_h, fv_e, fv_f, fv_g, fv_k, fv_fk, fv_tmp, fv_t) => {
    return main_testTreejoin_nofib_readTree$scrut_tup2$worker3(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_s___, fv_h, fv_e, fv_f, fv_g, fv_k, fv_fk, fv_tmp, fv_t)
  }
};
main_testTreejoin_nofib_readTree$scrut_tup2$worker3 = function main_testTreejoin_nofib_readTree$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_s___, fv_h, fv_e, fv_f, fv_g, fv_k, fv_fk, fv_tmp, fv_t) {
  fv_e = globalThis.Object.freeze([
    fv_f,
    fv_g,
    tup2_0
  ]);
  fv_k = runtime.safeCall(fv_fk(fv_e));
  fv_tmp = treejoin1[insertT$accessorSymbol](fv_k, fv_e, fv_t);
  if (tup2_1 instanceof NofibPrelude.Nil.class) {
    return fv_tmp
  }
  {
    let inlinedVal;
    inlinedVal = main_testTreejoin_nofib_readTree_readInt_readInt_$readInt_(treejoin1, 0, tup2_1);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_fk, undefined, fv_tmp);
  }
};
main_testTreejoin_nofib_readTree$scrut_tup23 = function main_testTreejoin_nofib_readTree$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_s_, fv_f, fv_scrut, fv_element0$1, fv_element1$1, fv_s__, fv_g, fv_scrut1, fv_element0$2, fv_element1$2, fv_s___, fv_h, fv_e, fv_k, fv_fk, fv_tmp, fv_t) => {
    return main_testTreejoin_nofib_readTree$scrut_tup2$worker2(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_s_, fv_f, fv_scrut, fv_element0$1, fv_element1$1, fv_s__, fv_g, fv_scrut1, fv_element0$2, fv_element1$2, fv_s___, fv_h, fv_e, fv_k, fv_fk, fv_tmp, fv_t)
  }
};
main_testTreejoin_nofib_readTree$scrut_tup2$worker2 = function main_testTreejoin_nofib_readTree$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_s_, fv_f, fv_scrut, fv_element0$1, fv_element1$1, fv_s__, fv_g, fv_scrut1, fv_element0$2, fv_element1$2, fv_s___, fv_h, fv_e, fv_k, fv_fk, fv_tmp, fv_t) {
  let treejoin2, n, cs, inlinedVal;
  treejoin2 = treejoin1;
  n = 0;
  cs = tup2_1;
  inlinedLbl: {
    loopLabel: while (true) {
      let s_, s_1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
      if (cs instanceof NofibPrelude.Cons.class) {
        let inlinedVal1, n1, tmp5;
        arg$Cons$0$ = cs.head;
        arg$Cons$1$ = cs.tail;
        n1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
        tmp5 = n1 >= 48;
        if (tmp5 === true) {
          inlinedVal1 = n1 <= 57;
          if (inlinedVal1 === true) {
            tmp = n * 10;
            tmp1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
            tmp2 = tmp + tmp1;
            tmp3 = tmp2 - 48;
            n = tmp3;
            cs = arg$Cons$1$;
            continue loopLabel
          }
          tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
          s_ = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], tmp4);
          inlinedVal = main_testTreejoin_nofib_readTree$scrut_tup24(n, s_);
          break inlinedLbl;
        }
        tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
        s_ = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], tmp4);
        inlinedVal = main_testTreejoin_nofib_readTree$scrut_tup24(n, s_);
        break inlinedLbl;
      }
      s_1 = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], cs);
      inlinedVal = main_testTreejoin_nofib_readTree$scrut_tup24(n, s_1);
      break inlinedLbl;
    }
  }
  return inlinedVal(fv_element0$1, fv_element1$1, fv_s__, fv_g, fv_scrut1, fv_element0$2, fv_element1$2, fv_s___, fv_h, fv_e, tup2_0, fv_k, fv_fk, fv_tmp, fv_t)
};
main_testTreejoin_nofib_readTree$scrut_tup24 = function main_testTreejoin_nofib_readTree$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_s__, fv_g, fv_scrut, fv_element0$1, fv_element1$1, fv_s___, fv_h, fv_e, fv_f, fv_k, fv_fk, fv_tmp, fv_t) => {
    return main_testTreejoin_nofib_readTree$scrut_tup2$worker1(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_s__, fv_g, fv_scrut, fv_element0$1, fv_element1$1, fv_s___, fv_h, fv_e, fv_f, fv_k, fv_fk, fv_tmp, fv_t)
  }
};
main_testTreejoin_nofib_readTree$scrut_tup2$worker1 = function main_testTreejoin_nofib_readTree$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_s__, fv_g, fv_scrut, fv_element0$1, fv_element1$1, fv_s___, fv_h, fv_e, fv_f, fv_k, fv_fk, fv_tmp, fv_t) {
  let treejoin2, n, cs, inlinedVal;
  treejoin2 = treejoin1;
  n = 0;
  cs = tup2_1;
  inlinedLbl: {
    loopLabel: while (true) {
      let s_, s_1, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
      if (cs instanceof NofibPrelude.Cons.class) {
        let inlinedVal1, n1, tmp5;
        arg$Cons$0$ = cs.head;
        arg$Cons$1$ = cs.tail;
        n1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
        tmp5 = n1 >= 48;
        if (tmp5 === true) {
          inlinedVal1 = n1 <= 57;
          if (inlinedVal1 === true) {
            tmp = n * 10;
            tmp1 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
            tmp2 = tmp + tmp1;
            tmp3 = tmp2 - 48;
            n = tmp3;
            cs = arg$Cons$1$;
            continue loopLabel
          }
          tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
          s_ = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], tmp4);
          inlinedVal = main_testTreejoin_nofib_readTree$scrut_tup25(n, s_);
          break inlinedLbl;
        }
        tmp4 = NofibPrelude.Cons(arg$Cons$0$, cs);
        s_ = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], tmp4);
        inlinedVal = main_testTreejoin_nofib_readTree$scrut_tup25(n, s_);
        break inlinedLbl;
      }
      s_1 = treejoin2[leaveWhile$accessorSymbol](treejoin2[isSpace$accessorSymbol], cs);
      inlinedVal = main_testTreejoin_nofib_readTree$scrut_tup25(n, s_1);
      break inlinedLbl;
    }
  }
  return inlinedVal(fv_element0$1, fv_element1$1, fv_s___, fv_h, fv_e, fv_f, tup2_0, fv_k, fv_fk, fv_tmp, fv_t)
};
main_testTreejoin_nofib_readTree$scrut_tup25 = function main_testTreejoin_nofib_readTree$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_s___, fv_h, fv_e, fv_f, fv_g, fv_k, fv_fk, fv_tmp, fv_t) => {
    return main_testTreejoin_nofib_readTree$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_s___, fv_h, fv_e, fv_f, fv_g, fv_k, fv_fk, fv_tmp, fv_t)
  }
};
main_testTreejoin_nofib_readTree$scrut_tup2$worker = function main_testTreejoin_nofib_readTree$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_s___, fv_h, fv_e, fv_f, fv_g, fv_k, fv_fk, fv_tmp, fv_t) {
  fv_e = globalThis.Object.freeze([
    fv_f,
    fv_g,
    tup2_0
  ]);
  fv_k = runtime.safeCall(fv_fk(fv_e));
  fv_tmp = treejoin1[insertT$accessorSymbol](fv_k, fv_e, fv_t);
  if (tup2_1 instanceof NofibPrelude.Nil.class) {
    return fv_tmp
  }
  {
    let inlinedVal;
    inlinedVal = main_testTreejoin_nofib_readTree_readInt_readInt_$readInt_1(treejoin1, 0, tup2_1);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_fk, undefined, fv_tmp);
  }
};
lambda = (undefined, function (caseScrut) {
  let element0$;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 3) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    runtime.Tuple.get(caseScrut, 1);
    runtime.Tuple.get(caseScrut, 2);
    return element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda1 = (undefined, function (caseScrut) {
  let element0$;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 3) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    runtime.Tuple.get(caseScrut, 1);
    runtime.Tuple.get(caseScrut, 2);
    return element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
(class treejoin {
  static {
    treejoin1 = this
  }
  static get [leaveWhile$accessorSymbol]() { return treejoin.#leaveWhile; }
  static get [isSpace$accessorSymbol]() { return treejoin.#isSpace; }
  static get [insertT$accessorSymbol]() { return treejoin.#insertT; }
  static {
    treejoin.Node = function Node(k, l, r) {
      return globalThis.Object.freeze(new Node.class(k, l, r));
    };
    (class Node {
      static {
        treejoin.Node.class = this
      }
      constructor(k, l, r) {
        this.k = k;
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["k", "l", "r"]];
    });
    treejoin.Leaf = function Leaf(k, e) {
      return globalThis.Object.freeze(new Leaf.class(k, e));
    };
    (class Leaf {
      static {
        treejoin.Leaf.class = this
      }
      constructor(k, e) {
        this.k = k;
        this.e = e;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Leaf", ["k", "e"]];
    });
    (class Empty {
      static {
        new this
      }
      constructor() {
        treejoin.Empty = this;
        Object.defineProperty(this, "class", {
          value: Empty
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Empty"];
    });
  }
  static #leaveWhile(f, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f(arg$Cons$0$));
        if (scrut === true) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #isSpace(c) {
    let tmp;
    tmp = c === " ";
    if (tmp === false) {
      return c === "\n"
    }
    return true;
  }
  static #insertT(k, e, t) {
    let scrut, l_, scrut1, scrut2, arg$Leaf$0$, arg$Leaf$1$, arg$Node$0$, arg$Node$1$, arg$Node$2$, tmp, tmp1, tmp2, tmp3;
    if (t instanceof treejoin.Node.class) {
      arg$Node$0$ = t.k;
      arg$Node$1$ = t.l;
      arg$Node$2$ = t.r;
      scrut = k <= arg$Node$0$;
      if (scrut === true) {
        tmp = treejoin.#insertT(k, e, arg$Node$1$);
        return treejoin.Node(arg$Node$0$, tmp, arg$Node$2$)
      }
      tmp1 = treejoin.#insertT(k, e, arg$Node$2$);
      return treejoin.Node(arg$Node$0$, arg$Node$1$, tmp1);
    } else if (t instanceof treejoin.Leaf.class) {
      arg$Leaf$0$ = t.k;
      arg$Leaf$1$ = t.e;
      l_ = treejoin.Leaf(k, e);
      scrut1 = k < arg$Leaf$0$;
      if (scrut1 === true) {
        tmp2 = treejoin.Leaf(arg$Leaf$0$, arg$Leaf$1$);
        return treejoin.Node(k, l_, tmp2)
      }
      scrut2 = k > arg$Leaf$0$;
      if (scrut2 === true) {
        tmp3 = treejoin.Leaf(arg$Leaf$0$, arg$Leaf$1$);
        return treejoin.Node(arg$Leaf$0$, tmp3, l_)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (t instanceof treejoin.Empty.class) {
      return treejoin.Leaf(k, e)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main(input1, input2) {
    let inlinedVal, c1, c2, t, inlinedVal1, t1, inlinedVal2;
    c1 = NofibPrelude.nofibStringToList(input1);
    c2 = NofibPrelude.nofibStringToList(input2);
    t = treejoin1.Empty;
    if (c1 instanceof NofibPrelude.Nil.class) {
      inlinedVal1 = t;
    } else {
      let inlinedVal3;
      inlinedVal3 = main_testTreejoin_nofib_readTree_readInt_readInt_$readInt_1(treejoin1, 0, c1);
      inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, lambda, undefined, t);
    }
    t1 = treejoin1.Empty;
    if (c2 instanceof NofibPrelude.Nil.class) {
      inlinedVal2 = t1;
    } else {
      let inlinedVal3;
      inlinedVal3 = main_testTreejoin_nofib_readTree_readInt_readInt_$readInt_(treejoin1, 0, c2);
      inlinedVal2 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, lambda1, undefined, t1);
    }
    inlinedVal = main_testTreejoin_nofib_join$join(inlinedVal1, inlinedVal2, treejoin1.Empty);
    return runtime.safeCall(inlinedVal.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "treejoin"];
});
export default treejoin1;
