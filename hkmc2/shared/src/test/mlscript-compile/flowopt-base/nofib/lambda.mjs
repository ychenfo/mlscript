const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
const lookup$accessorSymbol = globalThis.Symbol("lookup");
const apply$accessorSymbol = globalThis.Symbol("apply");
const ppn$accessorSymbol = globalThis.Symbol("ppn");
const eqEnv_eqTerm$accessorSymbol = globalThis.Symbol("eqEnv_eqTerm");
const traverseTerm_traverseCon_eval$accessorSymbol = globalThis.Symbol("traverseTerm_traverseCon_eval");
let lookup2, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14;
lambda$14 = (undefined, function (lambda22) {
  return (caseScrut) => {
    return lambda20(lambda22, caseScrut)
  }
});
lambda20 = (undefined, function (lambda22, caseScrut) {
  let element1$, element0$, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    let inlinedVal, inlinedVal1, inlinedVal2;
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    inlinedVal = go(NofibPrelude, "=", 0);
    inlinedVal1 = lambda22[ppn$accessorSymbol](0, element1$);
    inlinedVal2 = go(NofibPrelude, ", ", 0);
    tmp = NofibPrelude.append(inlinedVal1, inlinedVal2);
    tmp1 = NofibPrelude.append(inlinedVal, tmp);
    return NofibPrelude.append(element0$, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda18 = (undefined, function (dummy) {
  throw runtime.safeCall(globalThis.Error("undefined var"))
});
lambda19 = (undefined, function (x) {
  return x
});
lambda$13 = (undefined, function (lambda22) {
  return (t) => {
    return lambda22[traverseTerm_traverseCon_eval$accessorSymbol](0, t)
  }
});
lambda10 = (undefined, function (lambda22, t) {
  return lambda22[traverseTerm_traverseCon_eval$accessorSymbol](0, t)
});
lambda$11 = (undefined, function (lambda22, x) {
  return (e) => {
    return lambda11(lambda22, x, e)
  }
});
lambda$12 = (undefined, function (lambda22, u_) {
  return (v_) => {
    return lambda12(lambda22, u_, v_)
  }
});
lambda12 = (undefined, function (lambda22, u_, v_) {
  let tmp, tmp1;
  tmp = u_ + v_;
  tmp1 = lambda22.Con(tmp);
  return lambda22.MyState(lambda$1(tmp1))
});
lambda$10 = (undefined, function (lambda22, v) {
  return (u_) => {
    return lambda13(lambda22, v, u_)
  }
});
lambda$9 = (undefined, function (lambda22, x, b) {
  return (env) => {
    return lambda14(lambda22, x, b, env)
  }
});
lambda$8 = (undefined, function (lambda22, v) {
  return (u_) => {
    return lambda22[apply$accessorSymbol](u_, v)
  }
});
lambda$7 = (undefined, function (lambda22, a, b) {
  return (vall) => {
    return lambda16(lambda22, a, b, vall)
  }
});
lambda$6 = (undefined, function (lambda22) {
  return (_dummy) => {
    let tmp;
    tmp = lambda22.Con(0);
    return lambda22.MyState(lambda$1(tmp))
  }
});
lambda11 = (undefined, function (lambda22, x, e) {
  let f, m, f1, inlinedVal;
  m = lambda22.myGet;
  f1 = lambda$2(lambda22, x);
  inlinedVal = lambda22.MyState(lambda$(lambda22, m, f1));
  f = lambda$13(lambda22);
  return lambda22.MyState(lambda$(lambda22, inlinedVal, f))
});
lambda13 = (undefined, function (lambda22, v, u_) {
  let inlinedVal, f;
  inlinedVal = lambda22[traverseTerm_traverseCon_eval$accessorSymbol](1, v);
  f = lambda$12(lambda22, u_);
  return lambda22.MyState(lambda$(lambda22, inlinedVal, f))
});
lambda14 = (undefined, function (lambda22, x, b, env) {
  let tmp, tmp1;
  tmp = lambda22.Lam(x, b);
  tmp1 = lambda22.Thunk(tmp, env);
  return lambda22.MyState(lambda$1(tmp1))
});
lambda15 = (undefined, function (lambda22, v, u_) {
  return lambda22[apply$accessorSymbol](u_, v)
});
lambda16 = (undefined, function (lambda22, a, b, vall) {
  let tmp, inlinedVal;
  tmp = lambda22.Con(0);
  inlinedVal = lambda22[eqEnv_eqTerm$accessorSymbol](1, vall, tmp);
  if (inlinedVal === true) {
    return lambda22[traverseTerm_traverseCon_eval$accessorSymbol](0, a)
  }
  return lambda22[traverseTerm_traverseCon_eval$accessorSymbol](0, b);
});
lambda17 = (undefined, function (lambda22, _dummy) {
  let tmp;
  tmp = lambda22.Con(0);
  return lambda22.MyState(lambda$1(tmp))
});
lambda$5 = (undefined, function (lambda22, a, e, x, b) {
  return (orig) => {
    return lambda9(lambda22, a, e, x, b, orig)
  }
});
lambda9 = (undefined, function (lambda22, a, e, x, b, orig) {
  let tmp, inlinedVal, m, f, inlinedVal1, inlinedVal2, inlinedVal3;
  tmp = lambda22.Thunk(a, orig);
  inlinedVal = lambda22[traverseTerm_traverseCon_eval$accessorSymbol](0, b);
  m = lambda22.myGet;
  f = lambda$3(lambda22, x, tmp, inlinedVal);
  inlinedVal1 = lambda22.MyState(lambda$(lambda22, m, f));
  if (inlinedVal1 instanceof lambda22.MyState.class) {
    inlinedVal3 = runtime.safeCall(inlinedVal1.r(e));
    if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 2) {
      runtime.Tuple.get(inlinedVal3, 0);
      inlinedVal2 = runtime.Tuple.get(inlinedVal3, 1);
      return lambda22.MyState(lambda$1(inlinedVal2))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$4 = (undefined, function (lambda22) {
  return (_t) => {
    return lambda8(lambda22, _t)
  }
});
lambda8 = (undefined, function (lambda22, _t) {
  let arg$Con$0$;
  if (_t instanceof lambda22.Con.class) {
    arg$Con$0$ = _t.i;
    return lambda22.MyState(lambda$1(arg$Con$0$))
  }
  throw runtime.safeCall(globalThis.Error("Not a Con"));
});
lambda$3 = (undefined, function (lambda22, v, t, m) {
  return (env) => {
    return lambda7(lambda22, v, t, m, env)
  }
});
lambda7 = (undefined, function (lambda22, v, t, m, env) {
  let tmp, tmp1, inlinedVal, inlinedVal1;
  tmp = globalThis.Object.freeze([
    v,
    t
  ]);
  tmp1 = NofibPrelude.Cons(tmp, env);
  if (m instanceof lambda22.MyState.class) {
    inlinedVal1 = runtime.safeCall(m.r(tmp1));
    if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
      runtime.Tuple.get(inlinedVal1, 0);
      inlinedVal = runtime.Tuple.get(inlinedVal1, 1);
      return lambda22.MyState(lambda$1(inlinedVal))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda4 = (undefined, function (dummy) {
  throw runtime.safeCall(globalThis.Error("undefined"))
});
lambda5 = (undefined, function (x) {
  return x
});
lambda$2 = (undefined, function (lambda22, v) {
  return (env) => {
    return lambda6(lambda22, v, env)
  }
});
lookup2 = function lookup2(lambda22, v, env) {
  let tmp, f, arg$Some$0$;
  tmp = lambda22[lookup$accessorSymbol](v, env);
  f = lambda5;
  if (tmp instanceof NofibPrelude.Some.class) {
    arg$Some$0$ = tmp.x;
    return runtime.safeCall(f(arg$Some$0$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda6 = (undefined, function (lambda22, v, env) {
  let inlinedVal, tmp, f, arg$Some$0$;
  tmp = lambda22[lookup$accessorSymbol](v, env);
  f = lambda5;
  if (tmp instanceof NofibPrelude.Some.class) {
    arg$Some$0$ = tmp.x;
    inlinedVal = runtime.safeCall(f(arg$Some$0$));
    return lambda22.MyState(lambda$1(inlinedVal))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$1 = (undefined, function (a) {
  return (s) => {
    return globalThis.Object.freeze([
      s,
      a
    ])
  }
});
lambda3 = (undefined, function (a, s) {
  return globalThis.Object.freeze([
    s,
    a
  ])
});
lambda$ = (undefined, function (lambda22, m, f) {
  return (s) => {
    return lambda2(lambda22, m, f, s)
  }
});
lambda2 = (undefined, function (lambda22, m, f, s) {
  let element1$, element0$, tmp, inlinedVal;
  if (m instanceof lambda22.MyState.class) {
    inlinedVal = runtime.safeCall(m.r(s));
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      element0$ = runtime.Tuple.get(inlinedVal, 0);
      element1$ = runtime.Tuple.get(inlinedVal, 1);
      tmp = runtime.safeCall(f(element1$));
      if (tmp instanceof lambda22.MyState.class) {
        return runtime.safeCall(tmp.r(element0$))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda21 = (undefined, function (s) {
  return globalThis.Object.freeze([
    s,
    s
  ])
});
(class lambda {
  static {
    lambda1 = this
  }
  static get [traverseTerm_traverseCon_eval$accessorSymbol]() { return lambda.#traverseTerm_traverseCon_eval; }
  static get [eqEnv_eqTerm$accessorSymbol]() { return lambda.#eqEnv_eqTerm; }
  static get [lookup$accessorSymbol]() { return lambda.#lookup; }
  static get [apply$accessorSymbol]() { return lambda.#apply; }
  static get [ppn$accessorSymbol]() { return lambda.#ppn; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10;
    lambda.MyState = function MyState(r) {
      return globalThis.Object.freeze(new MyState.class(r));
    };
    (class MyState {
      static {
        lambda.MyState.class = this
      }
      constructor(r) {
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MyState", ["r"]];
    });
    tmp = lambda.MyState(lambda21);
    lambda.myGet = tmp;
    (class Term {
      static {
        lambda.Term = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Term"];
    });
    (class Incr extends lambda.Term {
      static {
        new this
      }
      constructor() {
        super();
        lambda.Incr = this;
        Object.defineProperty(this, "class", {
          value: Incr
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Incr"];
    });
    lambda.Var = function Var(s) {
      return globalThis.Object.freeze(new Var.class(s));
    };
    (class Var extends lambda.Term {
      static {
        lambda.Var.class = this
      }
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Var", ["s"]];
    });
    lambda.Con = function Con(i) {
      return globalThis.Object.freeze(new Con.class(i));
    };
    (class Con extends lambda.Term {
      static {
        lambda.Con.class = this
      }
      constructor(i) {
        super();
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Con", ["i"]];
    });
    lambda.Add = function Add(a, b) {
      return globalThis.Object.freeze(new Add.class(a, b));
    };
    (class Add extends lambda.Term {
      static {
        lambda.Add.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Add", ["a", "b"]];
    });
    lambda.Lam = function Lam(s, t) {
      return globalThis.Object.freeze(new Lam.class(s, t));
    };
    (class Lam extends lambda.Term {
      static {
        lambda.Lam.class = this
      }
      constructor(s, t) {
        super();
        this.s = s;
        this.t = t;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lam", ["s", "t"]];
    });
    lambda.App = function App(a, b) {
      return globalThis.Object.freeze(new App.class(a, b));
    };
    (class App extends lambda.Term {
      static {
        lambda.App.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "App", ["a", "b"]];
    });
    lambda.IfZero = function IfZero(a, b, c) {
      return globalThis.Object.freeze(new IfZero.class(a, b, c));
    };
    (class IfZero extends lambda.Term {
      static {
        lambda.IfZero.class = this
      }
      constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "IfZero", ["a", "b", "c"]];
    });
    lambda.Thunk = function Thunk(t, e) {
      return globalThis.Object.freeze(new Thunk.class(t, e));
    };
    (class Thunk extends lambda.Term {
      static {
        lambda.Thunk.class = this
      }
      constructor(t, e) {
        super();
        this.t = t;
        this.e = e;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Thunk", ["t", "e"]];
    });
    (class Unit {
      static {
        new this
      }
      constructor() {
        lambda.Unit = this;
        Object.defineProperty(this, "class", {
          value: Unit
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Unit"];
    });
    tmp1 = lambda.#myReturn(lambda.Unit);
    lambda.incr = tmp1;
    inlinedVal = go(NofibPrelude, "x", 0);
    inlinedVal1 = go(NofibPrelude, "F", 0);
    tmp2 = lambda.Var(inlinedVal1);
    inlinedVal2 = go(NofibPrelude, "x", 0);
    tmp3 = lambda.Var(inlinedVal2);
    inlinedVal3 = go(NofibPrelude, "x", 0);
    tmp4 = lambda.Var(inlinedVal3);
    tmp5 = lambda.App(tmp3, tmp4);
    tmp6 = lambda.App(tmp2, tmp5);
    tmp7 = lambda.Lam(inlinedVal, tmp6);
    lambda.lfxx = tmp7;
    inlinedVal4 = go(NofibPrelude, "F", 0);
    tmp8 = lambda.App(lambda.lfxx, lambda.lfxx);
    tmp9 = lambda.Lam(inlinedVal4, tmp8);
    lambda.fix = tmp9;
    inlinedVal5 = go(NofibPrelude, "n", 0);
    tmp10 = lambda.Var(inlinedVal5);
    tmp11 = lambda.Con(-1);
    tmp12 = lambda.Add(tmp10, tmp11);
    lambda.nMinus1 = tmp12;
    inlinedVal6 = go(NofibPrelude, "sum", 0);
    inlinedVal7 = go(NofibPrelude, "n", 0);
    inlinedVal8 = go(NofibPrelude, "n", 0);
    tmp13 = lambda.Var(inlinedVal8);
    tmp14 = lambda.Con(0);
    inlinedVal9 = go(NofibPrelude, "n", 0);
    tmp15 = lambda.Var(inlinedVal9);
    inlinedVal10 = go(NofibPrelude, "sum", 0);
    tmp16 = lambda.Var(inlinedVal10);
    tmp17 = lambda.App(tmp16, lambda.nMinus1);
    tmp18 = lambda.Add(tmp15, tmp17);
    tmp19 = lambda.IfZero(tmp13, tmp14, tmp18);
    tmp20 = lambda.Lam(inlinedVal7, tmp19);
    tmp21 = lambda.Lam(inlinedVal6, tmp20);
    lambda.partialSum0 = tmp21;
    tmp22 = lambda.App(lambda.fix, lambda.partialSum0);
    lambda.sum0 = tmp22;
  }
  static #simpleEval_simpleApply_simpleEvalCon(id, param0, param1, param2) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let u_, v_, u_1, val_, scrut, arg$Thunk$0$, arg$Thunk$1$, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$App$0$, arg$App$1$, arg$Lam$0$, arg$Lam$1$, arg$Add$0$, arg$Add$1$, arg$Con$0$, arg$Var$0$, tmp, tmp1, tmp2, tmp3, tmp4;
            if (param1 instanceof lambda.Var.class) {
              arg$Var$0$ = param1.s;
              tmp = lambda.#lookup(arg$Var$0$, param0);
              tmp1 = lambda.#myMaybe(lambda18, lambda19, tmp);
              param1 = tmp1;
              id = 0;
              continue loopLabel
            } else if (param1 instanceof lambda.Con.class) {
              arg$Con$0$ = param1.i;
              return lambda.Con(arg$Con$0$)
            } else if (param1 instanceof lambda.Incr.class) {
              return lambda.Con(0)
            } else if (param1 instanceof lambda.Add.class) {
              arg$Add$0$ = param1.a;
              arg$Add$1$ = param1.b;
              u_ = lambda.#simpleEval_simpleApply_simpleEvalCon(2, param0, arg$Add$0$, undefined);
              v_ = lambda.#simpleEval_simpleApply_simpleEvalCon(2, param0, arg$Add$1$, undefined);
              tmp2 = u_ + v_;
              return lambda.Con(tmp2)
            } else if (param1 instanceof lambda.Lam.class) {
              arg$Lam$0$ = param1.s;
              arg$Lam$1$ = param1.t;
              tmp3 = lambda.Lam(arg$Lam$0$, arg$Lam$1$);
              return lambda.Thunk(tmp3, param0)
            } else if (param1 instanceof lambda.App.class) {
              arg$App$0$ = param1.a;
              arg$App$1$ = param1.b;
              u_1 = lambda.#simpleEval_simpleApply_simpleEvalCon(0, param0, arg$App$0$, undefined);
              param1 = u_1;
              param2 = arg$App$1$;
              id = 1;
              continue loopLabel
            } else if (param1 instanceof lambda.IfZero.class) {
              arg$IfZero$0$ = param1.a;
              arg$IfZero$1$ = param1.b;
              arg$IfZero$2$ = param1.c;
              val_ = lambda.#simpleEval_simpleApply_simpleEvalCon(0, param0, arg$IfZero$0$, undefined);
              tmp4 = lambda.Con(0);
              scrut = lambda.#eqTerm(val_, tmp4);
              if (scrut === true) {
                param1 = arg$IfZero$1$;
                id = 0;
                continue loopLabel
              }
              param1 = arg$IfZero$2$;
              id = 0;
              continue loopLabel;
            } else if (param1 instanceof lambda.Thunk.class) {
              arg$Thunk$0$ = param1.t;
              arg$Thunk$1$ = param1.e;
              param0 = arg$Thunk$1$;
              param1 = arg$Thunk$0$;
              id = 0;
              continue loopLabel
            }
            throw runtime.safeCall(globalThis.Error(param1));
          }
        case 1:
          {
            let arg$Thunk$0$, arg$Thunk$1$, arg$Lam$0$, arg$Lam$1$, tmp, tmp1, tmp2;
            if (param1 instanceof lambda.Thunk.class) {
              arg$Thunk$0$ = param1.t;
              arg$Thunk$1$ = param1.e;
              if (arg$Thunk$0$ instanceof lambda.Lam.class) {
                arg$Lam$0$ = arg$Thunk$0$.s;
                arg$Lam$1$ = arg$Thunk$0$.t;
                tmp = lambda.Thunk(param2, param0);
                tmp1 = globalThis.Object.freeze([
                  arg$Lam$0$,
                  tmp
                ]);
                tmp2 = NofibPrelude.Cons(tmp1, arg$Thunk$1$);
                param0 = tmp2;
                param1 = arg$Lam$1$;
                id = 0;
                continue loopLabel
              }
            }
            throw runtime.safeCall(globalThis.Error("bad application"));
          }
        case 2:
          {
            let e_;
            e_ = lambda.#simpleEval_simpleApply_simpleEvalCon(0, param0, param1, undefined);
            if (e_ instanceof lambda.Con.class) {
              return e_.i
            }
            throw runtime.safeCall(globalThis.Error("Not a Con"));
          }
      }
    }
  }
  static #traverseTerm_traverseCon_eval(id, param0) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          id = 2;
          continue loopLabel;
        case 1:
          {
            let tmp;
            tmp = lambda.#traverseTerm_traverseCon_eval(0, param0);
            return lambda.#myBind(tmp, lambda$4(lambda));
          }
        case 2:
          {
            let arg$Con$0$, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$App$0$, arg$App$1$, arg$Lam$0$, arg$Lam$1$, arg$Thunk$0$, arg$Thunk$1$, arg$Add$0$, arg$Add$1$, arg$Var$0$, tmp, tmp1, tmp2, tmp3, tmp4;
            if (param0 instanceof lambda.Var.class) {
              arg$Var$0$ = param0.s;
              return lambda.#myBind(lambda.myGet, lambda$11(lambda, arg$Var$0$))
            } else if (param0 instanceof lambda.Add.class) {
              arg$Add$0$ = param0.a;
              arg$Add$1$ = param0.b;
              tmp = lambda.#traverseTerm_traverseCon_eval(1, arg$Add$0$);
              return lambda.#myBind(tmp, lambda$10(lambda, arg$Add$1$))
            } else if (param0 instanceof lambda.Thunk.class) {
              arg$Thunk$0$ = param0.t;
              arg$Thunk$1$ = param0.e;
              tmp1 = lambda.#traverseTerm_traverseCon_eval(0, arg$Thunk$0$);
              return lambda.#withEnv(arg$Thunk$1$, tmp1)
            } else if (param0 instanceof lambda.Lam.class) {
              arg$Lam$0$ = param0.s;
              arg$Lam$1$ = param0.t;
              return lambda.#myBind(lambda.myGet, lambda$9(lambda, arg$Lam$0$, arg$Lam$1$))
            } else if (param0 instanceof lambda.App.class) {
              arg$App$0$ = param0.a;
              arg$App$1$ = param0.b;
              tmp2 = lambda.#traverseTerm_traverseCon_eval(0, arg$App$0$);
              return lambda.#myBind(tmp2, lambda$8(lambda, arg$App$1$))
            } else if (param0 instanceof lambda.IfZero.class) {
              arg$IfZero$0$ = param0.a;
              arg$IfZero$1$ = param0.b;
              arg$IfZero$2$ = param0.c;
              tmp3 = lambda.#traverseTerm_traverseCon_eval(0, arg$IfZero$0$);
              return lambda.#myBind(tmp3, lambda$7(lambda, arg$IfZero$1$, arg$IfZero$2$))
            } else if (param0 instanceof lambda.Con.class) {
              arg$Con$0$ = param0.i;
              tmp4 = lambda.Con(arg$Con$0$);
              return lambda.#myReturn(tmp4)
            } else if (param0 instanceof lambda.Incr.class) {
              return lambda.#myBind(lambda.incr, lambda$6(lambda))
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
      }
    }
  }
  static #eqEnv_eqTerm(id, param0, param1) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, arg$Cons$0$1, arg$Cons$1$1, element1$1, element0$1;
            if (param0 instanceof NofibPrelude.Nil.class) {
              if (param1 instanceof NofibPrelude.Nil.class) {
                return true
              }
              return false;
            } else if (param0 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param0.head;
              arg$Cons$1$ = param0.tail;
              if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
                element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
                element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
                if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$1 = arg$Cons$1$.head;
                  arg$Cons$1$1 = arg$Cons$1$.tail;
                  if (runtime.Tuple.isArrayLike(arg$Cons$0$1) && arg$Cons$0$1.length === 2) {
                    element0$1 = runtime.Tuple.get(arg$Cons$0$1, 0);
                    element1$1 = runtime.Tuple.get(arg$Cons$0$1, 1);
                    scrut = NofibPrelude.listEq(element0$, element0$1);
                    if (scrut === true) {
                      scrut1 = lambda.#eqEnv_eqTerm(1, element1$, element1$1);
                      if (scrut1 === true) {
                        param0 = arg$Cons$1$;
                        param1 = arg$Cons$1$1;
                        id = 0;
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
            return false;
          }
        case 1:
          {
            let arg$Thunk$0$, arg$Thunk$1$, arg$Thunk$0$1, arg$Thunk$1$1, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$IfZero$0$1, arg$IfZero$1$1, arg$IfZero$2$1, arg$App$0$, arg$App$1$, arg$App$0$1, arg$App$1$1, arg$Lam$0$, arg$Lam$1$, arg$Lam$0$1, arg$Lam$1$1, arg$Add$0$, arg$Add$1$, arg$Add$0$1, arg$Add$1$1, arg$Con$0$, arg$Con$0$1, arg$Var$0$, arg$Var$0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
            if (param0 instanceof lambda.Var.class) {
              arg$Var$0$ = param0.s;
              if (param1 instanceof lambda.Var.class) {
                arg$Var$0$1 = param1.s;
                return NofibPrelude.listEq(arg$Var$0$, arg$Var$0$1)
              }
              return false;
            } else if (param0 instanceof lambda.Con.class) {
              arg$Con$0$ = param0.i;
              if (param1 instanceof lambda.Con.class) {
                arg$Con$0$1 = param1.i;
                return arg$Con$0$ === arg$Con$0$1
              }
              return false;
            } else if (param0 instanceof lambda.Incr.class) {
              if (param1 instanceof lambda.Incr.class) {
                return true
              }
              return false;
            } else if (param0 instanceof lambda.Add.class) {
              arg$Add$0$ = param0.a;
              arg$Add$1$ = param0.b;
              if (arg$Add$1$ instanceof lambda.Add.class) {
                arg$Add$0$1 = arg$Add$1$.a;
                arg$Add$1$1 = arg$Add$1$.b;
                tmp = lambda.#eqEnv_eqTerm(1, arg$Add$0$, arg$Add$0$1);
                if (tmp === true) {
                  param0 = arg$Add$1$;
                  param1 = arg$Add$1$1;
                  id = 1;
                  continue loopLabel
                }
                return false;
              }
              return false;
            } else if (param0 instanceof lambda.Lam.class) {
              arg$Lam$0$ = param0.s;
              arg$Lam$1$ = param0.t;
              if (arg$Lam$1$ instanceof lambda.Lam.class) {
                arg$Lam$0$1 = arg$Lam$1$.s;
                arg$Lam$1$1 = arg$Lam$1$.t;
                tmp1 = NofibPrelude.listEq(arg$Lam$0$, arg$Lam$0$1);
                if (tmp1 === true) {
                  param0 = arg$Lam$1$;
                  param1 = arg$Lam$1$1;
                  id = 1;
                  continue loopLabel
                }
                return false;
              }
              return false;
            } else if (param0 instanceof lambda.App.class) {
              arg$App$0$ = param0.a;
              arg$App$1$ = param0.b;
              if (arg$App$1$ instanceof lambda.App.class) {
                arg$App$0$1 = arg$App$1$.a;
                arg$App$1$1 = arg$App$1$.b;
                tmp2 = lambda.#eqEnv_eqTerm(1, arg$App$0$, arg$App$0$1);
                if (tmp2 === true) {
                  param0 = arg$App$1$;
                  param1 = arg$App$1$1;
                  id = 1;
                  continue loopLabel
                }
                return false;
              }
              return false;
            } else if (param0 instanceof lambda.IfZero.class) {
              arg$IfZero$0$ = param0.a;
              arg$IfZero$1$ = param0.b;
              arg$IfZero$2$ = param0.c;
              if (arg$IfZero$1$ instanceof lambda.IfZero.class) {
                arg$IfZero$0$1 = arg$IfZero$1$.a;
                arg$IfZero$1$1 = arg$IfZero$1$.b;
                arg$IfZero$2$1 = arg$IfZero$1$.c;
                tmp3 = lambda.#eqEnv_eqTerm(1, arg$IfZero$0$, arg$IfZero$0$1);
                if (tmp3 === true) {
                  tmp4 = lambda.#eqEnv_eqTerm(1, arg$IfZero$1$, arg$IfZero$1$1);
                  if (tmp4 === true) {
                    param0 = arg$IfZero$2$;
                    param1 = arg$IfZero$2$1;
                    id = 1;
                    continue loopLabel
                  }
                  return false;
                }
                return false;
              }
              return false;
            } else if (param0 instanceof lambda.Thunk.class) {
              arg$Thunk$0$ = param0.t;
              arg$Thunk$1$ = param0.e;
              if (arg$Thunk$1$ instanceof lambda.Thunk.class) {
                arg$Thunk$0$1 = arg$Thunk$1$.t;
                arg$Thunk$1$1 = arg$Thunk$1$.e;
                tmp5 = lambda.#eqEnv_eqTerm(1, arg$Thunk$0$, arg$Thunk$0$1);
                if (tmp5 === true) {
                  param0 = arg$Thunk$1$;
                  param1 = arg$Thunk$1$1;
                  id = 0;
                  continue loopLabel
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
  static #lookup(k, t) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (t instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.None
      } else if (t instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = t.head;
        arg$Cons$1$ = t.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          scrut = NofibPrelude.listEq(k, element0$);
          if (scrut === true) {
            return NofibPrelude.Some(element1$)
          }
          t = arg$Cons$1$;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #myRunState(m, s) {
    if (m instanceof lambda.MyState.class) {
      return runtime.safeCall(m.r(s))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #myBind(m, f) {
    return lambda.MyState(lambda$(lambda, m, f))
  }
  static #myReturn(a) {
    return lambda.MyState(lambda$1(a))
  }
  static #myEvalState(m, s) {
    let scrut;
    scrut = lambda.#myRunState(m, s);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      runtime.Tuple.get(scrut, 0);
      return runtime.Tuple.get(scrut, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #eqEnv(a, b) {
    return lambda.#eqEnv_eqTerm(0, a, b)
  }
  static #eqTerm(a, b) {
    return lambda.#eqEnv_eqTerm(1, a, b)
  }
  static #myMaybe(d, f, x) {
    let arg$Some$0$;
    if (x instanceof NofibPrelude.Some.class) {
      arg$Some$0$ = x.x;
      return runtime.safeCall(f(arg$Some$0$))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lookupVar(v) {
    return lambda.#myBind(lambda.myGet, lambda$2(lambda, v))
  }
  static #withEnv(tmp, m) {
    let tmp1;
    tmp1 = lambda.#myEvalState(m, tmp);
    return lambda.#myReturn(tmp1)
  }
  static #pushVar(v, t, m) {
    return lambda.#myBind(lambda.myGet, lambda$3(lambda, v, t, m))
  }
  static #traverseTerm(t) {
    return lambda.#traverseTerm_traverseCon_eval(0, t)
  }
  static #traverseCon(t) {
    return lambda.#traverseTerm_traverseCon_eval(1, t)
  }
  static #apply(t, a) {
    let arg$Thunk$0$, arg$Thunk$1$, arg$Lam$0$, arg$Lam$1$;
    if (t instanceof lambda.Thunk.class) {
      arg$Thunk$0$ = t.t;
      arg$Thunk$1$ = t.e;
      if (arg$Thunk$0$ instanceof lambda.Lam.class) {
        arg$Lam$0$ = arg$Thunk$0$.s;
        arg$Lam$1$ = arg$Thunk$0$.t;
        return lambda.#myBind(lambda.myGet, lambda$5(lambda, a, arg$Thunk$1$, arg$Lam$0$, arg$Lam$1$))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #eval1(ter) {
    return lambda.#traverseTerm_traverseCon_eval(2, ter)
  }
  static #simpleEval(env, ter) {
    return lambda.#simpleEval_simpleApply_simpleEvalCon(0, env, ter, undefined)
  }
  static #simpleApply(env, t, a) {
    return lambda.#simpleEval_simpleApply_simpleEvalCon(1, env, t, a)
  }
  static #simpleEvalCon(env, e) {
    return lambda.#simpleEval_simpleApply_simpleEvalCon(2, env, e, undefined)
  }
  static #bracket(ot, ths, t) {
    let scrut, tmp;
    scrut = ths <= ot;
    if (scrut === true) {
      let inlinedVal;
      inlinedVal = go(NofibPrelude, ")", 0);
      tmp = NofibPrelude.append(t, inlinedVal);
      return NofibPrelude.Cons("(", tmp)
    }
    return t;
  }
  static #ppn(n, ter) {
    let arg$Thunk$0$, arg$Thunk$1$, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$App$0$, arg$App$1$, arg$Add$0$, arg$Add$1$, arg$Lam$0$, arg$Lam$1$, arg$Con$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23;
    if (ter instanceof lambda.Var.class) {
      return ter.s
    } else if (ter instanceof lambda.Con.class) {
      let inlinedVal, s;
      arg$Con$0$ = ter.i;
      inlinedVal = arg$Con$0$ + "";
      s = inlinedVal;
      return go(NofibPrelude, s, 0)
    } else if (ter instanceof lambda.Incr.class) {
      return go(NofibPrelude, "INCR", 0)
    } else if (ter instanceof lambda.Lam.class) {
      let inlinedVal;
      arg$Lam$0$ = ter.s;
      arg$Lam$1$ = ter.t;
      inlinedVal = go(NofibPrelude, ". ", 0);
      tmp = lambda.#ppn(-1, arg$Lam$1$);
      tmp1 = NofibPrelude.append(inlinedVal, tmp);
      tmp2 = NofibPrelude.append(arg$Lam$0$, tmp1);
      tmp3 = NofibPrelude.Cons("@", tmp2);
      return lambda.#bracket(n, 0, tmp3)
    } else if (ter instanceof lambda.Add.class) {
      let inlinedVal;
      arg$Add$0$ = ter.a;
      arg$Add$1$ = ter.b;
      tmp4 = lambda.#ppn(1, arg$Add$0$);
      inlinedVal = go(NofibPrelude, " + ", 0);
      tmp5 = lambda.#ppn(1, arg$Add$1$);
      tmp6 = NofibPrelude.append(inlinedVal, tmp5);
      tmp7 = NofibPrelude.append(tmp4, tmp6);
      return lambda.#bracket(n, 1, tmp7)
    } else if (ter instanceof lambda.App.class) {
      let inlinedVal;
      arg$App$0$ = ter.a;
      arg$App$1$ = ter.b;
      tmp8 = lambda.#ppn(2, arg$App$0$);
      inlinedVal = go(NofibPrelude, " ", 0);
      tmp9 = lambda.#ppn(2, arg$App$1$);
      tmp10 = NofibPrelude.append(inlinedVal, tmp9);
      tmp11 = NofibPrelude.append(tmp8, tmp10);
      return lambda.#bracket(n, 2, tmp11)
    } else if (ter instanceof lambda.IfZero.class) {
      let inlinedVal, inlinedVal1, inlinedVal2;
      arg$IfZero$0$ = ter.a;
      arg$IfZero$1$ = ter.b;
      arg$IfZero$2$ = ter.c;
      inlinedVal = go(NofibPrelude, "IF ", 0);
      tmp12 = lambda.#ppn(0, arg$IfZero$0$);
      inlinedVal1 = go(NofibPrelude, " THEN ", 0);
      tmp13 = lambda.#ppn(0, arg$IfZero$1$);
      inlinedVal2 = go(NofibPrelude, " ELSE ", 0);
      tmp14 = lambda.#ppn(0, arg$IfZero$2$);
      tmp15 = NofibPrelude.append(inlinedVal2, tmp14);
      tmp16 = NofibPrelude.append(tmp13, tmp15);
      tmp17 = NofibPrelude.append(inlinedVal1, tmp16);
      tmp18 = NofibPrelude.append(tmp12, tmp17);
      tmp19 = NofibPrelude.append(inlinedVal, tmp18);
      return lambda.#bracket(n, 0, tmp19)
    } else if (ter instanceof lambda.Thunk.class) {
      let inlinedVal;
      arg$Thunk$0$ = ter.t;
      arg$Thunk$1$ = ter.e;
      tmp20 = lambda.#ppn(3, arg$Thunk$0$);
      inlinedVal = go(NofibPrelude, "::", 0);
      tmp21 = lambda.#ppenv(arg$Thunk$1$);
      tmp22 = NofibPrelude.append(inlinedVal, tmp21);
      tmp23 = NofibPrelude.append(tmp20, tmp22);
      return lambda.#bracket(n, 0, tmp23)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #pp(t) {
    return lambda.#ppn(0, t)
  }
  static #ppenv(env) {
    let tmp, tmp1, inlinedVal, inlinedVal1;
    inlinedVal = go(NofibPrelude, "[", 0);
    tmp = NofibPrelude.flatMap(lambda$14(lambda), env);
    inlinedVal1 = go(NofibPrelude, "]", 0);
    tmp1 = NofibPrelude.append(tmp, inlinedVal1);
    return NofibPrelude.append(inlinedVal, tmp1)
  }
  static #showTerm(t) {
    let arg$Con$0$;
    if (t instanceof lambda.Con.class) {
      let inlinedVal, inlinedVal1, s, inlinedVal2;
      arg$Con$0$ = t.i;
      inlinedVal = go(NofibPrelude, "Con ", 0);
      inlinedVal1 = arg$Con$0$ + "";
      s = inlinedVal1;
      inlinedVal2 = go(NofibPrelude, s, 0);
      return NofibPrelude.append(inlinedVal, inlinedVal2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #ev(t) {
    let envt2, tmp, element1$, element0$, tmp1, tmp2, tmp3;
    tmp = lambda.#traverseTerm(t);
    envt2 = lambda.#myRunState(tmp, NofibPrelude.Nil);
    if (runtime.Tuple.isArrayLike(envt2) && envt2.length === 2) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(envt2, 0);
      element1$ = runtime.Tuple.get(envt2, 1);
      tmp1 = lambda.#pp(element1$);
      inlinedVal = go(NofibPrelude, "  ", 0);
      tmp2 = lambda.#ppenv(element0$);
      tmp3 = NofibPrelude.append(inlinedVal, tmp2);
      return NofibPrelude.append(tmp1, tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mainSimple(args) {
    let tmp, tmp1, tmp2;
    if (args instanceof NofibPrelude.Nil.class) {
      throw runtime.safeCall(globalThis.Error("Args: number-to-sum-up-to"))
    }
    {
      let inlinedVal;
      if (args instanceof NofibPrelude.Cons.class) {
        inlinedVal = args.head;
        tmp = lambda.Con(inlinedVal);
        tmp1 = lambda.App(lambda.sum0, tmp);
        tmp2 = lambda.#simpleEval(NofibPrelude.Nil, tmp1);
        return lambda.#showTerm(tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #mainMonad(args) {
    let tmp, tmp1;
    if (args instanceof NofibPrelude.Nil.class) {
      throw runtime.safeCall(globalThis.Error("Args: number-to-sum-up-to"))
    }
    {
      let inlinedVal;
      if (args instanceof NofibPrelude.Cons.class) {
        inlinedVal = args.head;
        tmp = lambda.Con(inlinedVal);
        tmp1 = lambda.App(lambda.sum0, tmp);
        return lambda.#ev(tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #testLambda_nofib(n) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = NofibPrelude.Cons(n, NofibPrelude.Nil);
    tmp1 = lambda.#mainSimple(tmp);
    tmp2 = NofibPrelude.Cons(n, NofibPrelude.Nil);
    tmp3 = lambda.#mainMonad(tmp2);
    return globalThis.Object.freeze([
      tmp1,
      tmp3
    ])
  }
  static main() {
    let tmp;
    tmp = lambda.#testLambda_nofib(80);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "lambda"];
});
export { lookup2 as _$_modulePrivate_$_lookup2 };
export { lambda1 as _$_modulePrivate_$_lambda };
export { lambda2 as _$_modulePrivate_$_lambda1 };
export { lambda3 as _$_modulePrivate_$_lambda2 };
export { lambda4 as _$_modulePrivate_$_lambda3 };
export { lambda5 as _$_modulePrivate_$_lambda4 };
export { lambda6 as _$_modulePrivate_$_lambda5 };
export { lambda7 as _$_modulePrivate_$_lambda6 };
export { lambda8 as _$_modulePrivate_$_lambda7 };
export { lambda9 as _$_modulePrivate_$_lambda8 };
export { lambda10 as _$_modulePrivate_$_lambda9 };
export { lambda11 as _$_modulePrivate_$_lambda10 };
export { lambda12 as _$_modulePrivate_$_lambda11 };
export { lambda13 as _$_modulePrivate_$_lambda12 };
export { lambda14 as _$_modulePrivate_$_lambda13 };
export { lambda15 as _$_modulePrivate_$_lambda14 };
export { lambda16 as _$_modulePrivate_$_lambda15 };
export { lambda17 as _$_modulePrivate_$_lambda16 };
export { lambda18 as _$_modulePrivate_$_lambda17 };
export { lambda19 as _$_modulePrivate_$_lambda18 };
export { lambda20 as _$_modulePrivate_$_lambda19 };
export { lambda21 as _$_modulePrivate_$_lambda20 };
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
export default lambda1;
