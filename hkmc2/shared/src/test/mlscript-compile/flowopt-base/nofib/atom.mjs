const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda$11 as lambda$ } from "./NofibPrelude.mjs";
const dotMult$accessorSymbol = globalThis.Symbol("dotMult");
const scalarMut$accessorSymbol = globalThis.Symbol("scalarMut");
const testforce$accessorSymbol = globalThis.Symbol("testforce");
const propagate$accessorSymbol = globalThis.Symbol("propagate");
const runExperiment$accessorSymbol = globalThis.Symbol("runExperiment");
let lscomp, lscomp1, atom1, lambda, lambda1, lambda2, lambda$1, lambda$2, lambda$3;
lscomp1 = function (atom2, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    let receiver, inlinedVal, inlinedVal1, arg$State$0$, tmp1;
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    receiver = atom2;
    if (arg$Cons$0$ instanceof receiver.State.class) {
      arg$State$0$ = arg$Cons$0$.position;
      tmp1 = lscomp(arg$State$0$);
      inlinedVal = NofibPrelude.stringListConcat(tmp1);
      inlinedVal1 = inlinedVal + "\n";
      tmp = lscomp1(atom2, arg$Cons$1$);
      return NofibPrelude.Cons(inlinedVal1, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$3 = (undefined, function (atom2, dt) {
  return (x, y) => {
    return atom2[propagate$accessorSymbol](dt, x, y)
  }
});
lambda1 = (undefined, function (atom2, dt, x, y) {
  return atom2[propagate$accessorSymbol](dt, x, y)
});
lambda$2 = (undefined, function (atom2, law, dt, param, init) {
  return () => {
    return lambda2(atom2, law, dt, param, init)
  }
});
lambda2 = (undefined, function (atom2, law, dt, param, init) {
  let stream, tmp, f, inlinedVal;
  stream = atom2[runExperiment$accessorSymbol](law, dt, param, init);
  tmp = runtime.safeCall(law(param, stream));
  f = lambda$3(atom2, dt);
  inlinedVal = NofibPrelude.Lazy(lambda$(NofibPrelude, f, tmp, stream));
  return NofibPrelude.LzCons(init, inlinedVal)
});
lscomp = function lscomp(ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    let inlinedVal, inlinedVal1;
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    inlinedVal = arg$Cons$0$ + "";
    inlinedVal1 = inlinedVal + "\t";
    tmp = lscomp(arg$Cons$1$);
    return NofibPrelude.Cons(inlinedVal1, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$1 = (undefined, function (atom2, k, ss) {
  return () => {
    return lambda(atom2, k, ss)
  }
});
lambda = (undefined, function (atom2, k, ss) {
  let arg$LzCons$0$, arg$LzCons$1$, arg$State$0$, tmp, tmp1, tmp2, tmp3, inlinedVal;
  if (ss instanceof NofibPrelude.Lazy.class) {
    inlinedVal = ss.get();
    if (inlinedVal instanceof NofibPrelude.LzCons.class) {
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      if (arg$LzCons$0$ instanceof atom2.State.class) {
        arg$State$0$ = arg$LzCons$0$.position;
        tmp = - 1.0;
        tmp1 = atom2[scalarMut$accessorSymbol](tmp, k);
        tmp2 = atom2[dotMult$accessorSymbol](tmp1, arg$State$0$);
        tmp3 = atom2[testforce$accessorSymbol](k, arg$LzCons$1$);
        return NofibPrelude.LzCons(tmp2, tmp3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
(class atom {
  static {
    atom1 = this
  }
  static get [dotMult$accessorSymbol]() { return atom.#dotMult; }
  static get [scalarMut$accessorSymbol]() { return atom.#scalarMut; }
  static get [testforce$accessorSymbol]() { return atom.#testforce; }
  static get [propagate$accessorSymbol]() { return atom.#propagate; }
  static get [runExperiment$accessorSymbol]() { return atom.#runExperiment; }
  static {
    atom.State = function State(position, velocity) {
      return globalThis.Object.freeze(new State.class(position, velocity));
    };
    (class State {
      static {
        atom.State.class = this
      }
      constructor(position, velocity) {
        this.position = position;
        this.velocity = velocity;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "State", ["position", "velocity"]];
    });
  }
  static #dotPlus(fs, gs) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (fs instanceof NofibPrelude.Nil.class) {
      return gs
    }
    if (gs instanceof NofibPrelude.Nil.class) {
      return fs
    }
    if (fs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fs.head;
      arg$Cons$1$ = fs.tail;
      if (gs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = gs.head;
        arg$Cons$1$1 = gs.tail;
        tmp = arg$Cons$0$ + arg$Cons$0$1;
        tmp1 = atom.#dotPlus(arg$Cons$1$, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #dotMult(fs, gs) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (fs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fs.head;
      arg$Cons$1$ = fs.tail;
      if (gs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = gs.head;
        arg$Cons$1$1 = gs.tail;
        tmp = arg$Cons$0$ * arg$Cons$0$1;
        tmp1 = atom.#dotMult(arg$Cons$1$, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  }
  static #scalarMut(c, fs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (fs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (fs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fs.head;
      arg$Cons$1$ = fs.tail;
      tmp = c * arg$Cons$0$;
      tmp1 = atom.#scalarMut(c, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #testforce(k, ss) {
    return NofibPrelude.Lazy(lambda$1(atom, k, ss))
  }
  static #show(s) {
    let arg$State$0$, tmp;
    if (s instanceof atom.State.class) {
      arg$State$0$ = s.position;
      tmp = lscomp(arg$State$0$);
      return NofibPrelude.stringListConcat(tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #propagate(dt, aforce, state) {
    let arg$State$0$, arg$State$1$, tmp, tmp1, tmp2, tmp3;
    if (state instanceof atom.State.class) {
      arg$State$0$ = state.position;
      arg$State$1$ = state.velocity;
      tmp = atom.#scalarMut(dt, arg$State$1$);
      tmp1 = atom.#dotPlus(arg$State$0$, tmp);
      tmp2 = atom.#scalarMut(dt, aforce);
      tmp3 = atom.#dotPlus(arg$State$1$, tmp2);
      return atom.State(tmp1, tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #runExperiment(law, dt, param, init) {
    return NofibPrelude.Lazy(lambda$2(atom, law, dt, param, init))
  }
  static #testAtom_nofib(n) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = NofibPrelude.Cons(1.0, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(1.0, NofibPrelude.Nil);
    tmp2 = NofibPrelude.Cons(0.0, NofibPrelude.Nil);
    tmp3 = atom.State(tmp1, tmp2);
    tmp4 = atom.#runExperiment(atom.#testforce, 0.02, tmp, tmp3);
    tmp5 = NofibPrelude.take_lz(n, tmp4);
    tmp6 = lscomp1(atom, tmp5);
    return NofibPrelude.stringListConcat(tmp6)
  }
  static main() {
    return atom.#testAtom_nofib(20)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "atom"];
});
export { lscomp as _$_modulePrivate_$_lscomp };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { atom1 as _$_modulePrivate_$_atom };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda$1 as _$_modulePrivate_$_lambda$ };
export { lambda$2 as _$_modulePrivate_$_lambda$1 };
export { lambda$3 as _$_modulePrivate_$_lambda$2 };
export default atom1;
