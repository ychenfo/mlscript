const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const append$accessorSymbol = globalThis.Symbol("append");
const lookup$accessorSymbol = globalThis.Symbol("lookup");
const apply$accessorSymbol = globalThis.Symbol("apply");
const ppn$accessorSymbol = globalThis.Symbol("ppn");
const eqEnv_eqTerm$accessorSymbol = globalThis.Symbol("eqEnv_eqTerm");
const traverseTerm_traverseCon_eval$accessorSymbol = globalThis.Symbol("traverseTerm_traverseCon_eval");
let lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14;
lambda$14 = (undefined, function (lambda17) {
  return (caseScrut) => {
    return lambda15(lambda17, caseScrut)
  }
});
lambda15 = (undefined, function (lambda17, caseScrut) {
  let element1$, element0$, tmp, tmp1, tmp2, tmp3;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    let inlinedVal;
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = NofibPrelude.nofibStringToList("=");
    inlinedVal = lambda17[ppn$accessorSymbol](0, element1$);
    tmp1 = NofibPrelude.nofibStringToList(", ");
    tmp2 = lambda17[append$accessorSymbol](inlinedVal, tmp1);
    tmp3 = lambda17[append$accessorSymbol](tmp, tmp2);
    return lambda17[append$accessorSymbol](element0$, tmp3)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda13 = (undefined, function (dummy) {
  throw runtime.safeCall(globalThis.Error("undefined var"))
});
lambda14 = (undefined, function (x) {
  return x
});
lambda$13 = (undefined, function (lambda17) {
  return (t) => {
    return lambda17[traverseTerm_traverseCon_eval$accessorSymbol](0, t)
  }
});
lambda$11 = (undefined, function (lambda17, x) {
  return (e) => {
    return lambda7(lambda17, x, e)
  }
});
lambda$12 = (undefined, function (lambda17, u_) {
  return (v_) => {
    return lambda8(lambda17, u_, v_)
  }
});
lambda8 = (undefined, function (lambda17, u_, v_) {
  let tmp, tmp1, lambda$here;
  tmp = u_ + v_;
  tmp1 = lambda17.Con(tmp);
  lambda$here = lambda$1(tmp1);
  return lambda17.MyState(lambda$here)
});
lambda$10 = (undefined, function (lambda17, v) {
  return (u_) => {
    return lambda9(lambda17, v, u_)
  }
});
lambda$9 = (undefined, function (lambda17, x, b) {
  return (env) => {
    return lambda10(lambda17, x, b, env)
  }
});
lambda$8 = (undefined, function (lambda17, v) {
  return (u_) => {
    return lambda17[apply$accessorSymbol](u_, v)
  }
});
lambda$7 = (undefined, function (lambda17, a, b) {
  return (vall) => {
    return lambda11(lambda17, a, b, vall)
  }
});
lambda$6 = (undefined, function (lambda17) {
  return (_dummy) => {
    return lambda12(lambda17, _dummy)
  }
});
lambda7 = (undefined, function (lambda17, x, e) {
  let f, lambda$here, m, f1, inlinedVal, lambda$here1;
  m = lambda17.myGet;
  f1 = lambda$2(lambda17, x);
  lambda$here1 = lambda$(lambda17, m, f1);
  inlinedVal = lambda17.MyState(lambda$here1);
  f = lambda$13(lambda17);
  lambda$here = lambda$(lambda17, inlinedVal, f);
  return lambda17.MyState(lambda$here)
});
lambda9 = (undefined, function (lambda17, v, u_) {
  let inlinedVal, f, lambda$here;
  inlinedVal = lambda17[traverseTerm_traverseCon_eval$accessorSymbol](1, v);
  f = lambda$12(lambda17, u_);
  lambda$here = lambda$(lambda17, inlinedVal, f);
  return lambda17.MyState(lambda$here)
});
lambda10 = (undefined, function (lambda17, x, b, env) {
  let tmp, tmp1, lambda$here;
  tmp = lambda17.Lam(x, b);
  tmp1 = lambda17.Thunk(tmp, env);
  lambda$here = lambda$1(tmp1);
  return lambda17.MyState(lambda$here)
});
lambda11 = (undefined, function (lambda17, a, b, vall) {
  let tmp, inlinedVal;
  tmp = lambda17.Con(0);
  inlinedVal = lambda17[eqEnv_eqTerm$accessorSymbol](1, vall, tmp);
  if (inlinedVal === true) {
    return lambda17[traverseTerm_traverseCon_eval$accessorSymbol](0, a)
  }
  return lambda17[traverseTerm_traverseCon_eval$accessorSymbol](0, b);
});
lambda12 = (undefined, function (lambda17, _dummy) {
  let tmp, lambda$here;
  tmp = lambda17.Con(0);
  lambda$here = lambda$1(tmp);
  return lambda17.MyState(lambda$here)
});
lambda$5 = (undefined, function (lambda17, a, e, x, b) {
  return (orig) => {
    return lambda6(lambda17, a, e, x, b, orig)
  }
});
lambda6 = (undefined, function (lambda17, a, e, x, b, orig) {
  let tmp, inlinedVal, m, f, inlinedVal1, inlinedVal2, lambda$here, lambda$here1, inlinedVal3;
  tmp = lambda17.Thunk(a, orig);
  inlinedVal = lambda17[traverseTerm_traverseCon_eval$accessorSymbol](0, b);
  m = lambda17.myGet;
  f = lambda$3(lambda17, x, tmp, inlinedVal);
  lambda$here1 = lambda$(lambda17, m, f);
  inlinedVal1 = lambda17.MyState(lambda$here1);
  if (inlinedVal1 instanceof lambda17.MyState.class) {
    inlinedVal3 = runtime.safeCall(inlinedVal1.r(e));
    if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 2) {
      runtime.Tuple.get(inlinedVal3, 0);
      inlinedVal2 = runtime.Tuple.get(inlinedVal3, 1);
      lambda$here = lambda$1(inlinedVal2);
      return lambda17.MyState(lambda$here)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$4 = (undefined, function (lambda17) {
  return (_t) => {
    return lambda5(lambda17, _t)
  }
});
lambda5 = (undefined, function (lambda17, _t) {
  let arg$Con$0$;
  if (_t instanceof lambda17.Con.class) {
    let lambda$here;
    arg$Con$0$ = _t.i;
    lambda$here = lambda$1(arg$Con$0$);
    return lambda17.MyState(lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (lambda17, v, t, m) {
  return (env) => {
    return lambda4(lambda17, v, t, m, env)
  }
});
lambda4 = (undefined, function (lambda17, v, t, m, env) {
  let tmp, tmp1, inlinedVal, lambda$here, inlinedVal1;
  tmp = globalThis.Object.freeze([
    v,
    t
  ]);
  tmp1 = NofibPrelude.Cons(tmp, env);
  if (m instanceof lambda17.MyState.class) {
    inlinedVal1 = runtime.safeCall(m.r(tmp1));
    if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
      runtime.Tuple.get(inlinedVal1, 0);
      inlinedVal = runtime.Tuple.get(inlinedVal1, 1);
      lambda$here = lambda$1(inlinedVal);
      return lambda17.MyState(lambda$here)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$2 = (undefined, function (lambda17, v) {
  return (env) => {
    return lambda3(lambda17, v, env)
  }
});
lambda3 = (undefined, function (lambda17, v, env) {
  let lambda$here, tmp, arg$Some$0$;
  tmp = lambda17[lookup$accessorSymbol](v, env);
  if (tmp instanceof NofibPrelude.Some.class) {
    arg$Some$0$ = tmp.x;
    lambda$here = lambda$1(arg$Some$0$);
    return lambda17.MyState(lambda$here)
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
lambda$ = (undefined, function (lambda17, m, f) {
  return (s) => {
    return lambda2(lambda17, m, f, s)
  }
});
lambda2 = (undefined, function (lambda17, m, f, s) {
  let element1$, element0$, tmp, inlinedVal;
  if (m instanceof lambda17.MyState.class) {
    inlinedVal = runtime.safeCall(m.r(s));
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      element0$ = runtime.Tuple.get(inlinedVal, 0);
      element1$ = runtime.Tuple.get(inlinedVal, 1);
      tmp = runtime.safeCall(f(element1$));
      if (tmp instanceof lambda17.MyState.class) {
        return runtime.safeCall(tmp.r(element0$))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda16 = (undefined, function (s) {
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
  static get [append$accessorSymbol]() { return lambda.#append; }
  static get [lookup$accessorSymbol]() { return lambda.#lookup; }
  static get [apply$accessorSymbol]() { return lambda.#apply; }
  static get [ppn$accessorSymbol]() { return lambda.#ppn; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33;
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
    tmp = lambda.MyState(lambda16);
    lambda.myGet = tmp;
    (class Incr {
      static {
        new this
      }
      constructor() {
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
    (class Var {
      static {
        lambda.Var.class = this
      }
      constructor(s) {
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Var", ["s"]];
    });
    lambda.Con = function Con(i) {
      return globalThis.Object.freeze(new Con.class(i));
    };
    (class Con {
      static {
        lambda.Con.class = this
      }
      constructor(i) {
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Con", ["i"]];
    });
    lambda.Add = function Add(a, b) {
      return globalThis.Object.freeze(new Add.class(a, b));
    };
    (class Add {
      static {
        lambda.Add.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Add", ["a", "b"]];
    });
    lambda.Lam = function Lam(s, t) {
      return globalThis.Object.freeze(new Lam.class(s, t));
    };
    (class Lam {
      static {
        lambda.Lam.class = this
      }
      constructor(s, t) {
        this.s = s;
        this.t = t;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lam", ["s", "t"]];
    });
    lambda.App = function App(a, b) {
      return globalThis.Object.freeze(new App.class(a, b));
    };
    (class App {
      static {
        lambda.App.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "App", ["a", "b"]];
    });
    lambda.IfZero = function IfZero(a, b, c) {
      return globalThis.Object.freeze(new IfZero.class(a, b, c));
    };
    (class IfZero {
      static {
        lambda.IfZero.class = this
      }
      constructor(a, b, c) {
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
    (class Thunk {
      static {
        lambda.Thunk.class = this
      }
      constructor(t, e) {
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
    tmp2 = NofibPrelude.nofibStringToList("x");
    tmp3 = NofibPrelude.nofibStringToList("F");
    tmp4 = lambda.Var(tmp3);
    tmp5 = NofibPrelude.nofibStringToList("x");
    tmp6 = lambda.Var(tmp5);
    tmp7 = NofibPrelude.nofibStringToList("x");
    tmp8 = lambda.Var(tmp7);
    tmp9 = lambda.App(tmp6, tmp8);
    tmp10 = lambda.App(tmp4, tmp9);
    tmp11 = lambda.Lam(tmp2, tmp10);
    lambda.lfxx = tmp11;
    tmp12 = NofibPrelude.nofibStringToList("F");
    tmp13 = lambda.App(lambda.lfxx, lambda.lfxx);
    tmp14 = lambda.Lam(tmp12, tmp13);
    lambda.fix = tmp14;
    tmp15 = NofibPrelude.nofibStringToList("n");
    tmp16 = lambda.Var(tmp15);
    tmp17 = lambda.Con(-1);
    tmp18 = lambda.Add(tmp16, tmp17);
    lambda.nMinus1 = tmp18;
    tmp19 = NofibPrelude.nofibStringToList("sum");
    tmp20 = NofibPrelude.nofibStringToList("n");
    tmp21 = NofibPrelude.nofibStringToList("n");
    tmp22 = lambda.Var(tmp21);
    tmp23 = lambda.Con(0);
    tmp24 = NofibPrelude.nofibStringToList("n");
    tmp25 = lambda.Var(tmp24);
    tmp26 = NofibPrelude.nofibStringToList("sum");
    tmp27 = lambda.Var(tmp26);
    tmp28 = lambda.App(tmp27, lambda.nMinus1);
    tmp29 = lambda.Add(tmp25, tmp28);
    tmp30 = lambda.IfZero(tmp22, tmp23, tmp29);
    tmp31 = lambda.Lam(tmp20, tmp30);
    tmp32 = lambda.Lam(tmp19, tmp31);
    lambda.partialSum0 = tmp32;
    tmp33 = lambda.App(lambda.fix, lambda.partialSum0);
    lambda.sum0 = tmp33;
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
              tmp1 = lambda.#myMaybe(lambda13, lambda14, tmp);
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
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 2:
          {
            let e_;
            e_ = lambda.#simpleEval_simpleApply_simpleEvalCon(0, param0, param1, undefined);
            if (e_ instanceof lambda.Con.class) {
              return e_.i
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
            let tmp, lambda$here;
            tmp = lambda.#traverseTerm_traverseCon_eval(0, param0);
            lambda$here = lambda$4(lambda);
            return lambda.#myBind(tmp, lambda$here);
          }
        case 2:
          {
            let arg$Con$0$, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$App$0$, arg$App$1$, arg$Lam$0$, arg$Lam$1$, arg$Thunk$0$, arg$Thunk$1$, arg$Add$0$, arg$Add$1$, arg$Var$0$, tmp, tmp1, tmp2, tmp3, tmp4, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, lambda$here5;
            if (param0 instanceof lambda.Var.class) {
              arg$Var$0$ = param0.s;
              lambda$here = lambda$11(lambda, arg$Var$0$);
              return lambda.#myBind(lambda.myGet, lambda$here)
            } else if (param0 instanceof lambda.Add.class) {
              arg$Add$0$ = param0.a;
              arg$Add$1$ = param0.b;
              tmp = lambda.#traverseTerm_traverseCon_eval(1, arg$Add$0$);
              lambda$here1 = lambda$10(lambda, arg$Add$1$);
              return lambda.#myBind(tmp, lambda$here1)
            } else if (param0 instanceof lambda.Thunk.class) {
              arg$Thunk$0$ = param0.t;
              arg$Thunk$1$ = param0.e;
              tmp1 = lambda.#traverseTerm_traverseCon_eval(0, arg$Thunk$0$);
              return lambda.#withEnv(arg$Thunk$1$, tmp1)
            } else if (param0 instanceof lambda.Lam.class) {
              arg$Lam$0$ = param0.s;
              arg$Lam$1$ = param0.t;
              lambda$here2 = lambda$9(lambda, arg$Lam$0$, arg$Lam$1$);
              return lambda.#myBind(lambda.myGet, lambda$here2)
            } else if (param0 instanceof lambda.App.class) {
              arg$App$0$ = param0.a;
              arg$App$1$ = param0.b;
              tmp2 = lambda.#traverseTerm_traverseCon_eval(0, arg$App$0$);
              lambda$here3 = lambda$8(lambda, arg$App$1$);
              return lambda.#myBind(tmp2, lambda$here3)
            } else if (param0 instanceof lambda.IfZero.class) {
              arg$IfZero$0$ = param0.a;
              arg$IfZero$1$ = param0.b;
              arg$IfZero$2$ = param0.c;
              tmp3 = lambda.#traverseTerm_traverseCon_eval(0, arg$IfZero$0$);
              lambda$here4 = lambda$7(lambda, arg$IfZero$1$, arg$IfZero$2$);
              return lambda.#myBind(tmp3, lambda$here4)
            } else if (param0 instanceof lambda.Con.class) {
              arg$Con$0$ = param0.i;
              tmp4 = lambda.Con(arg$Con$0$);
              return lambda.#myReturn(tmp4)
            } else if (param0 instanceof lambda.Incr.class) {
              lambda$here5 = lambda$6(lambda);
              return lambda.#myBind(lambda.incr, lambda$here5)
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
                    scrut = lambda.#listEq(element0$, element0$1);
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
                return lambda.#listEq(arg$Var$0$, arg$Var$0$1)
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
                tmp1 = lambda.#listEq(arg$Lam$0$, arg$Lam$0$1);
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
  static #head(l) {
    if (l instanceof NofibPrelude.Cons.class) {
      return l.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listEq(xs, ys) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return true
        }
        return false;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          scrut = arg$Cons$0$ == arg$Cons$0$1;
          if (scrut === true) {
            xs = arg$Cons$1$;
            ys = arg$Cons$1$1;
            continue loopLabel
          }
          return false;
        }
        return false;
      }
      return false;
    }
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = lambda.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #null_(ls) {
    if (ls instanceof NofibPrelude.Nil.class) {
      return true
    }
    return false;
  }
  static #flatMap(f, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = lambda.#flatMap(f, arg$Cons$1$);
      return lambda.#append(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
          scrut = lambda.#listEq(k, element0$);
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
    let lambda$here;
    lambda$here = lambda$(lambda, m, f);
    return lambda.MyState(lambda$here)
  }
  static #myReturn(a) {
    let lambda$here;
    lambda$here = lambda$1(a);
    return lambda.MyState(lambda$here)
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
  static #withEnv(tmp, m) {
    let tmp1;
    tmp1 = lambda.#myEvalState(m, tmp);
    return lambda.#myReturn(tmp1)
  }
  static #traverseTerm(t) {
    return lambda.#traverseTerm_traverseCon_eval(0, t)
  }
  static #apply(t, a) {
    let arg$Thunk$0$, arg$Thunk$1$, arg$Lam$0$, arg$Lam$1$, lambda$here;
    if (t instanceof lambda.Thunk.class) {
      arg$Thunk$0$ = t.t;
      arg$Thunk$1$ = t.e;
      if (arg$Thunk$0$ instanceof lambda.Lam.class) {
        arg$Lam$0$ = arg$Thunk$0$.s;
        arg$Lam$1$ = arg$Thunk$0$.t;
        lambda$here = lambda$5(lambda, a, arg$Thunk$1$, arg$Lam$0$, arg$Lam$1$);
        return lambda.#myBind(lambda.myGet, lambda$here)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #simpleEval(env, ter) {
    return lambda.#simpleEval_simpleApply_simpleEvalCon(0, env, ter, undefined)
  }
  static #bracket(ot, ths, t) {
    let scrut, tmp, tmp1;
    scrut = ths <= ot;
    if (scrut === true) {
      tmp = NofibPrelude.nofibStringToList(")");
      tmp1 = lambda.#append(t, tmp);
      return NofibPrelude.Cons("(", tmp1)
    }
    return t;
  }
  static #ppn(n, ter) {
    let arg$Thunk$0$, arg$Thunk$1$, arg$IfZero$0$, arg$IfZero$1$, arg$IfZero$2$, arg$App$0$, arg$App$1$, arg$Add$0$, arg$Add$1$, arg$Lam$0$, arg$Lam$1$, arg$Con$0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30;
    if (ter instanceof lambda.Var.class) {
      return ter.s
    } else if (ter instanceof lambda.Con.class) {
      let inlinedVal;
      arg$Con$0$ = ter.i;
      inlinedVal = arg$Con$0$ + "";
      return NofibPrelude.nofibStringToList(inlinedVal)
    } else if (ter instanceof lambda.Incr.class) {
      return NofibPrelude.nofibStringToList("INCR")
    } else if (ter instanceof lambda.Lam.class) {
      arg$Lam$0$ = ter.s;
      arg$Lam$1$ = ter.t;
      tmp = NofibPrelude.nofibStringToList(". ");
      tmp1 = lambda.#ppn(-1, arg$Lam$1$);
      tmp2 = lambda.#append(tmp, tmp1);
      tmp3 = lambda.#append(arg$Lam$0$, tmp2);
      tmp4 = NofibPrelude.Cons("@", tmp3);
      return lambda.#bracket(n, 0, tmp4)
    } else if (ter instanceof lambda.Add.class) {
      arg$Add$0$ = ter.a;
      arg$Add$1$ = ter.b;
      tmp5 = lambda.#ppn(1, arg$Add$0$);
      tmp6 = NofibPrelude.nofibStringToList(" + ");
      tmp7 = lambda.#ppn(1, arg$Add$1$);
      tmp8 = lambda.#append(tmp6, tmp7);
      tmp9 = lambda.#append(tmp5, tmp8);
      return lambda.#bracket(n, 1, tmp9)
    } else if (ter instanceof lambda.App.class) {
      arg$App$0$ = ter.a;
      arg$App$1$ = ter.b;
      tmp10 = lambda.#ppn(2, arg$App$0$);
      tmp11 = NofibPrelude.nofibStringToList(" ");
      tmp12 = lambda.#ppn(2, arg$App$1$);
      tmp13 = lambda.#append(tmp11, tmp12);
      tmp14 = lambda.#append(tmp10, tmp13);
      return lambda.#bracket(n, 2, tmp14)
    } else if (ter instanceof lambda.IfZero.class) {
      arg$IfZero$0$ = ter.a;
      arg$IfZero$1$ = ter.b;
      arg$IfZero$2$ = ter.c;
      tmp15 = NofibPrelude.nofibStringToList("IF ");
      tmp16 = lambda.#ppn(0, arg$IfZero$0$);
      tmp17 = NofibPrelude.nofibStringToList(" THEN ");
      tmp18 = lambda.#ppn(0, arg$IfZero$1$);
      tmp19 = NofibPrelude.nofibStringToList(" ELSE ");
      tmp20 = lambda.#ppn(0, arg$IfZero$2$);
      tmp21 = lambda.#append(tmp19, tmp20);
      tmp22 = lambda.#append(tmp18, tmp21);
      tmp23 = lambda.#append(tmp17, tmp22);
      tmp24 = lambda.#append(tmp16, tmp23);
      tmp25 = lambda.#append(tmp15, tmp24);
      return lambda.#bracket(n, 0, tmp25)
    } else if (ter instanceof lambda.Thunk.class) {
      arg$Thunk$0$ = ter.t;
      arg$Thunk$1$ = ter.e;
      tmp26 = lambda.#ppn(3, arg$Thunk$0$);
      tmp27 = NofibPrelude.nofibStringToList("::");
      tmp28 = lambda.#ppenv(arg$Thunk$1$);
      tmp29 = lambda.#append(tmp27, tmp28);
      tmp30 = lambda.#append(tmp26, tmp29);
      return lambda.#bracket(n, 0, tmp30)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #pp(t) {
    return lambda.#ppn(0, t)
  }
  static #ppenv(env) {
    let tmp, tmp1, tmp2, tmp3, lambda$here;
    tmp = NofibPrelude.nofibStringToList("[");
    lambda$here = lambda$14(lambda);
    tmp1 = lambda.#flatMap(lambda$here, env);
    tmp2 = NofibPrelude.nofibStringToList("]");
    tmp3 = lambda.#append(tmp1, tmp2);
    return lambda.#append(tmp, tmp3)
  }
  static #showTerm(t) {
    let arg$Con$0$, tmp, tmp1;
    if (t instanceof lambda.Con.class) {
      let inlinedVal;
      arg$Con$0$ = t.i;
      tmp = NofibPrelude.nofibStringToList("Con ");
      inlinedVal = arg$Con$0$ + "";
      tmp1 = NofibPrelude.nofibStringToList(inlinedVal);
      return lambda.#append(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #ev(t) {
    let envt2, tmp, element1$, element0$, tmp1, tmp2, tmp3, tmp4;
    tmp = lambda.#traverseTerm(t);
    envt2 = lambda.#myRunState(tmp, NofibPrelude.Nil);
    if (runtime.Tuple.isArrayLike(envt2) && envt2.length === 2) {
      element0$ = runtime.Tuple.get(envt2, 0);
      element1$ = runtime.Tuple.get(envt2, 1);
      tmp1 = lambda.#pp(element1$);
      tmp2 = NofibPrelude.nofibStringToList("  ");
      tmp3 = lambda.#ppenv(element0$);
      tmp4 = lambda.#append(tmp2, tmp3);
      return lambda.#append(tmp1, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mainSimple(args) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = lambda.#null_(args);
    scrut = ! tmp;
    if (scrut === true) {
      tmp1 = lambda.#head(args);
      tmp2 = lambda.Con(tmp1);
      tmp3 = lambda.App(lambda.sum0, tmp2);
      tmp4 = lambda.#simpleEval(NofibPrelude.Nil, tmp3);
      return lambda.#showTerm(tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mainMonad(args) {
    let scrut, tmp, tmp1, tmp2, tmp3;
    tmp = lambda.#null_(args);
    scrut = ! tmp;
    if (scrut === true) {
      tmp1 = lambda.#head(args);
      tmp2 = lambda.Con(tmp1);
      tmp3 = lambda.App(lambda.sum0, tmp2);
      return lambda.#ev(tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
export default lambda1;
