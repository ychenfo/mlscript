const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda as lambda } from "./NofibPrelude.mjs";
const scanlr$accessorSymbol = globalThis.Symbol("scanlr");
const send_right$accessorSymbol = globalThis.Symbol("send_right");
const send_left$accessorSymbol = globalThis.Symbol("send_left");
const critical_path_depth$accessorSymbol = globalThis.Symbol("critical_path_depth");
const store_inputs$accessorSymbol = globalThis.Symbol("store_inputs");
const make_packet$accessorSymbol = globalThis.Symbol("make_packet");
const compare_and_update$accessorSymbol = globalThis.Symbol("compare_and_update");
const update_i$accessorSymbol = globalThis.Symbol("update_i");
const update_o$accessorSymbol = globalThis.Symbol("update_o");
const do_sends$accessorSymbol = globalThis.Symbol("do_sends");
const simulate_component$accessorSymbol = globalThis.Symbol("simulate_component");
const do_cycle$accessorSymbol = globalThis.Symbol("do_cycle");
const reg$accessorSymbol = globalThis.Symbol("reg");
let down1, down2, down3, up, lscomp, lscomp1, thrid, get_output, lscomp2, restore_outport, restore, lscomp3, check_requests, check_lr_requests, pad, lscomp4, update_is, update_os, lscomp5, sim_then_send, ilabel, olabel, circsim1, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, down1$, down2$, lambda$, lambda$1, lambda$2, lambda$3, restore$, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, sim_then_send$, lambda$15, lambda$16;
lambda$16 = (undefined, function (circsim2) {
  return (x) => {
    return circsim2[reg$accessorSymbol](0, x)
  }
});
ilabel = function ilabel(n, pid_) {
  let inlinedVal, inlinedVal1;
  inlinedVal = n + "";
  inlinedVal1 = "x" + inlinedVal;
  return globalThis.Object.freeze([
    inlinedVal1,
    pid_
  ])
};
olabel = function olabel(n, pid_) {
  let inlinedVal, inlinedVal1;
  inlinedVal = n + "";
  inlinedVal1 = "y" + inlinedVal;
  return globalThis.Object.freeze([
    inlinedVal1,
    pid_
  ])
};
lambda20 = (undefined, function (x) {
  let tmp;
  tmp = 7 * x;
  return tmp + 1
});
lambda21 = (undefined, function (x) {
  let tmp;
  tmp = 7 * x;
  return tmp + 7
});
lambda22 = (undefined, function (circsim2, x) {
  return circsim2[reg$accessorSymbol](0, x)
});
lambda23 = (undefined, function (x) {
  let tmp;
  tmp = 7 * x;
  return tmp + 1
});
lambda$15 = (undefined, function (circsim2, size, outs, ins, states) {
  return (x, y) => {
    return lambda19(circsim2, size, outs, ins, states, x, y)
  }
});
lambda19 = (undefined, function (circsim2, size, outs, ins, states, x, y) {
  let tmp, tmp1;
  tmp = globalThis.Object.freeze([
    size,
    ins,
    outs,
    states
  ]);
  tmp1 = circsim2[critical_path_depth$accessorSymbol](tmp);
  return circsim2[do_cycle$accessorSymbol](tmp1, x, y)
});
sim_then_send$ = function sim_then_send$(circsim2) {
  return (state, d) => {
    let inlinedVal;
    inlinedVal = NofibPrelude.map(lambda$13(circsim2, d), state);
    return circsim2[do_sends$accessorSymbol](d, inlinedVal)
  }
};
lambda$14 = (undefined, function (circsim2, inputs, ins) {
  return (s) => {
    let tmp;
    tmp = NofibPrelude.zip(ins, inputs);
    return circsim2[store_inputs$accessorSymbol](tmp, s)
  }
});
sim_then_send = function sim_then_send(circsim2, state, d) {
  let inlinedVal;
  inlinedVal = NofibPrelude.map(lambda$13(circsim2, d), state);
  return circsim2[do_sends$accessorSymbol](d, inlinedVal)
};
lambda18 = (undefined, function (circsim2, inputs, ins, s) {
  let tmp;
  tmp = NofibPrelude.zip(ins, inputs);
  return circsim2[store_inputs$accessorSymbol](tmp, s)
});
lambda$13 = (undefined, function (circsim2, depth) {
  return (s) => {
    return circsim2[simulate_component$accessorSymbol](depth, s)
  }
});
lambda17 = (undefined, function (circsim2, depth, s) {
  return circsim2[simulate_component$accessorSymbol](depth, s)
});
lscomp5 = function lscomp(ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, element2$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 3) {
        runtime.Tuple.get(arg$Cons$0$, 0);
        runtime.Tuple.get(arg$Cons$0$, 1);
        element2$ = runtime.Tuple.get(arg$Cons$0$, 2);
        tmp = lscomp5(arg$Cons$1$);
        return NofibPrelude.Cons(element2$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$12 = (undefined, function (circsim2, d) {
  return (s) => {
    return lambda15(circsim2, d, s)
  }
});
lambda$11 = (undefined, function (circsim2, d) {
  return (x) => {
    return lambda16(circsim2, d, x)
  }
});
lambda15 = (undefined, function (circsim2, d, s) {
  let states1, tmp, tmp1;
  states1 = NofibPrelude.map(lambda$5(circsim2, d), s);
  tmp = NofibPrelude.map(lambda$4(circsim2), states1);
  tmp1 = NofibPrelude.orList(tmp);
  return ! tmp1
});
lambda16 = (undefined, function (circsim2, d, x) {
  let states1, send_results, pss_, tmp, tmp1, inlinedVal;
  states1 = NofibPrelude.map(lambda$10(circsim2, d), x);
  tmp = NofibPrelude.map(circsim2[make_packet$accessorSymbol], states1);
  inlinedVal = NofibPrelude.map(lambda$6(circsim2, tmp), tmp);
  tmp1 = NofibPrelude.transpose(inlinedVal);
  send_results = NofibPrelude.map(lambda$9(circsim2), tmp1);
  pss_ = NofibPrelude.transpose(send_results);
  return NofibPrelude.zipWith(lambda$8(circsim2, d), pss_, x)
});
lambda$10 = (undefined, function (circsim2, d) {
  return (s) => {
    return lambda12(circsim2, d, s)
  }
});
lambda$9 = (undefined, function (circsim2) {
  return (x) => {
    return lambda13(circsim2, x)
  }
});
lambda$8 = (undefined, function (circsim2, d) {
  return (x, y) => {
    let tmp;
    tmp = update_is(circsim2, x, y);
    return update_os(circsim2, d, x, tmp)
  }
});
lambda12 = (undefined, function (circsim2, d, s) {
  let scrut, p, inlinedVal;
  p = s;
  inlinedVal = p.pathDepth;
  scrut = inlinedVal == d;
  if (scrut === true) {
    return s
  }
  {
    let tmp, p1, inlinedVal1, p2, inlinedVal2, p3, inlinedVal3, p4, inlinedVal4, p5, inlinedVal5;
    p1 = s;
    inlinedVal1 = p1.outports;
    tmp = lscomp3(false, inlinedVal1);
    p2 = s;
    inlinedVal2 = p2.pid;
    p3 = s;
    inlinedVal3 = p3.compType;
    p4 = s;
    inlinedVal4 = p4.pathDepth;
    p5 = s;
    inlinedVal5 = p5.inports;
    return circsim2.PS(inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, tmp);
  }
});
lambda13 = (undefined, function (circsim2, x) {
  let inlinedVal;
  inlinedVal = circsim2[scanlr$accessorSymbol](circsim2[send_right$accessorSymbol], circsim2[send_left$accessorSymbol], circsim2.emptyPacket, circsim2.emptyPacket, x);
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    runtime.Tuple.get(inlinedVal, 0);
    return runtime.Tuple.get(inlinedVal, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda14 = (undefined, function (circsim2, d, x, y) {
  let tmp;
  tmp = update_is(circsim2, x, y);
  return update_os(circsim2, d, x, tmp)
});
update_is = function update_is(circsim2, lrps, state) {
  let tmp, p, inlinedVal, p1, inlinedVal1, p2, inlinedVal2, p3, inlinedVal3, p4, inlinedVal4;
  p = state;
  inlinedVal = p.inports;
  tmp = NofibPrelude.foldr(circsim2[update_i$accessorSymbol], inlinedVal, lrps);
  p1 = state;
  inlinedVal1 = p1.pid;
  p2 = state;
  inlinedVal2 = p2.compType;
  p3 = state;
  inlinedVal3 = p3.pathDepth;
  p4 = state;
  inlinedVal4 = p4.outports;
  return circsim2.PS(inlinedVal1, inlinedVal2, inlinedVal3, tmp, inlinedVal4)
};
update_os = function update_os(circsim2, d, lrps, state) {
  let scrut, tmp, p, inlinedVal;
  p = state;
  inlinedVal = p.pathDepth;
  scrut = inlinedVal == d;
  if (scrut === true) {
    let p1, inlinedVal1, p2, inlinedVal2, p3, inlinedVal3, p4, inlinedVal4, p5, inlinedVal5;
    p1 = state;
    inlinedVal1 = p1.outports;
    tmp = NofibPrelude.zipWith(circsim2[update_o$accessorSymbol], lrps, inlinedVal1);
    p2 = state;
    inlinedVal2 = p2.pid;
    p3 = state;
    inlinedVal3 = p3.compType;
    p4 = state;
    inlinedVal4 = p4.pathDepth;
    p5 = state;
    inlinedVal5 = p5.inports;
    return circsim2.PS(inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, tmp)
  }
  return state;
};
lambda$7 = (undefined, function (circsim2, i, p, m_) {
  return (x) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      i,
      p,
      m_
    ]);
    return circsim2[compare_and_update$accessorSymbol](tmp, x)
  }
});
lambda11 = (undefined, function (circsim2, i, p, m_, x) {
  let tmp;
  tmp = globalThis.Object.freeze([
    i,
    p,
    m_
  ]);
  return circsim2[compare_and_update$accessorSymbol](tmp, x)
});
lscomp4 = function lscomp(circsim2, state, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, element5$, element4$, element3$, element2$, element1$, element0$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 6) {
        let p, inlinedVal;
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        element2$ = runtime.Tuple.get(arg$Cons$0$, 2);
        element3$ = runtime.Tuple.get(arg$Cons$0$, 3);
        element4$ = runtime.Tuple.get(arg$Cons$0$, 4);
        element5$ = runtime.Tuple.get(arg$Cons$0$, 5);
        p = state;
        inlinedVal = p.pid;
        tmp = globalThis.Object.freeze([
          inlinedVal,
          element0$,
          element1$,
          element2$,
          element3$,
          element4$,
          element5$,
          1
        ]);
        tmp1 = lscomp4(circsim2, state, arg$Cons$1$);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda9 = (undefined, function (x) {
  return l(NofibPrelude, x, 0)
});
lambda$6 = (undefined, function (circsim2, pss) {
  return (x) => {
    return lambda10(circsim2, pss, x)
  }
});
pad = function pad(circsim2, pss, xs) {
  let tmp, tmp1, tmp2, inlinedVal, arg$Cons$0$, arg$Cons$1$;
  tmp = NofibPrelude.map(lambda9, pss);
  if (tmp instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = tmp.head;
    arg$Cons$1$ = tmp.tail;
    inlinedVal = NofibPrelude.foldl(lambda, arg$Cons$0$, arg$Cons$1$);
    tmp1 = NofibPrelude.replicate_lz(inlinedVal, circsim2.emptyPacket);
    tmp2 = NofibPrelude.append_nl_lz(xs, tmp1);
    return NofibPrelude.take_lz(inlinedVal, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda10 = (undefined, function (circsim2, pss, x) {
  let tmp, tmp1, tmp2, inlinedVal, arg$Cons$0$, arg$Cons$1$;
  tmp = NofibPrelude.map(lambda9, pss);
  if (tmp instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = tmp.head;
    arg$Cons$1$ = tmp.tail;
    inlinedVal = NofibPrelude.foldl(lambda, arg$Cons$0$, arg$Cons$1$);
    tmp1 = NofibPrelude.replicate_lz(inlinedVal, circsim2.emptyPacket);
    tmp2 = NofibPrelude.append_nl_lz(x, tmp1);
    return NofibPrelude.take_lz(inlinedVal, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$5 = (undefined, function (circsim2, d) {
  return (s) => {
    return lambda7(circsim2, d, s)
  }
});
lambda$4 = (undefined, function (circsim2) {
  return (s) => {
    return lambda8(circsim2, s)
  }
});
check_requests = function check_requests(xs) {
  let tmp;
  tmp = NofibPrelude.map(check_lr_requests, xs);
  return NofibPrelude.orList(tmp)
};
check_lr_requests = function check_lr_requests(pql) {
  let element4$, element2$;
  if (runtime.Tuple.isArrayLike(pql) && pql.length === 6) {
    runtime.Tuple.get(pql, 0);
    runtime.Tuple.get(pql, 1);
    element2$ = runtime.Tuple.get(pql, 2);
    runtime.Tuple.get(pql, 3);
    element4$ = runtime.Tuple.get(pql, 4);
    runtime.Tuple.get(pql, 5);
    if (element2$ === false) {
      return element4$
    }
    return true;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda7 = (undefined, function (circsim2, d, s) {
  let scrut, p, inlinedVal;
  p = s;
  inlinedVal = p.pathDepth;
  scrut = inlinedVal == d;
  if (scrut === true) {
    return s
  }
  {
    let tmp, p1, inlinedVal1, p2, inlinedVal2, p3, inlinedVal3, p4, inlinedVal4, p5, inlinedVal5;
    p1 = s;
    inlinedVal1 = p1.outports;
    tmp = lscomp3(false, inlinedVal1);
    p2 = s;
    inlinedVal2 = p2.pid;
    p3 = s;
    inlinedVal3 = p3.compType;
    p4 = s;
    inlinedVal4 = p4.pathDepth;
    p5 = s;
    inlinedVal5 = p5.inports;
    return circsim2.PS(inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, tmp);
  }
});
lambda8 = (undefined, function (circsim2, s) {
  let p, inlinedVal, tmp;
  p = s;
  inlinedVal = p.outports;
  tmp = NofibPrelude.map(check_lr_requests, inlinedVal);
  return NofibPrelude.orList(tmp)
});
lscomp3 = function lscomp(b, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, element5$, element3$, element1$, element0$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 6) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        runtime.Tuple.get(arg$Cons$0$, 2);
        element3$ = runtime.Tuple.get(arg$Cons$0$, 3);
        runtime.Tuple.get(arg$Cons$0$, 4);
        element5$ = runtime.Tuple.get(arg$Cons$0$, 5);
        tmp = globalThis.Object.freeze([
          element0$,
          element1$,
          b,
          element3$,
          b,
          element5$
        ]);
        tmp1 = lscomp3(b, arg$Cons$1$);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
restore$ = function restore$(circsim2) {
  return (os, ns) => {
    return restore(circsim2, os, ns)
  }
};
restore = function restore(circsim2, os, ns) {
  let tmp, p, inlinedVal, p1, inlinedVal1, p2, inlinedVal2, p3, inlinedVal3, p4, inlinedVal4, p5, inlinedVal5;
  p = os;
  inlinedVal = p.outports;
  p1 = ns;
  inlinedVal1 = p1.outports;
  tmp = NofibPrelude.zipWith(restore_outport, inlinedVal, inlinedVal1);
  p2 = ns;
  inlinedVal2 = p2.pid;
  p3 = ns;
  inlinedVal3 = p3.compType;
  p4 = ns;
  inlinedVal4 = p4.pathDepth;
  p5 = ns;
  inlinedVal5 = p5.inports;
  return circsim2.PS(inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, tmp)
};
restore_outport = function restore_outport(pql, mdq) {
  let element5$, element4$, element3$, element2$, element0$, element1$;
  if (runtime.Tuple.isArrayLike(pql) && pql.length === 6) {
    element0$ = runtime.Tuple.get(pql, 0);
    runtime.Tuple.get(pql, 1);
    element2$ = runtime.Tuple.get(pql, 2);
    element3$ = runtime.Tuple.get(pql, 3);
    element4$ = runtime.Tuple.get(pql, 4);
    element5$ = runtime.Tuple.get(pql, 5);
    if (runtime.Tuple.isArrayLike(mdq) && mdq.length === 6) {
      runtime.Tuple.get(mdq, 0);
      element1$ = runtime.Tuple.get(mdq, 1);
      runtime.Tuple.get(mdq, 2);
      runtime.Tuple.get(mdq, 3);
      runtime.Tuple.get(mdq, 4);
      runtime.Tuple.get(mdq, 5);
      return globalThis.Object.freeze([
        element0$,
        element1$,
        element2$,
        element3$,
        element4$,
        element5$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lscomp2 = function (circsim2, state, pid_, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, element1$1, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 2) {
          runtime.Tuple.get(element0$, 0);
          element1$1 = runtime.Tuple.get(element0$, 1);
          scrut = pid_ == element1$1;
          if (scrut === true) {
            let tmp1, p, inlinedVal, inlinedVal1, p1, inlinedVal2, p2, inlinedVal3, p3, inlinedVal4, p4, inlinedVal5;
            p = state;
            inlinedVal = p.outports;
            tmp1 = lscomp(element1$, inlinedVal);
            p1 = state;
            inlinedVal2 = p1.pid;
            p2 = state;
            inlinedVal3 = p2.compType;
            p3 = state;
            inlinedVal4 = p3.pathDepth;
            p4 = state;
            inlinedVal5 = p4.inports;
            inlinedVal1 = circsim2.PS(inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, tmp1);
            tmp = lscomp2(circsim2, state, pid_, arg$Cons$1$);
            return NofibPrelude.Cons(inlinedVal1, tmp)
          }
          ls = arg$Cons$1$;
          continue loopLabel;
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
lscomp1 = function lscomp(circsim2, p, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      let p1, inlinedVal;
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      p1 = arg$Cons$0$;
      inlinedVal = p1.pid;
      scrut = p == inlinedVal;
      if (scrut === true) {
        let p2, inlinedVal1, inlinedVal2;
        p2 = arg$Cons$0$;
        inlinedVal1 = p2.inports;
        if (inlinedVal1 instanceof NofibPrelude.Cons.class) {
          inlinedVal2 = inlinedVal1.head;
          tmp = lscomp1(circsim2, p, arg$Cons$1$);
          return NofibPrelude.Cons(inlinedVal2, tmp)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$3 = (undefined, function (circsim2, states) {
  return (p) => {
    return get_output(circsim2, states, p)
  }
});
thrid = function thrid(tp3) {
  if (runtime.Tuple.isArrayLike(tp3) && tp3.length === 3) {
    runtime.Tuple.get(tp3, 0);
    runtime.Tuple.get(tp3, 1);
    return runtime.Tuple.get(tp3, 2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
get_output = function get_output(circsim2, states, label_p) {
  let element1$, tmp;
  if (runtime.Tuple.isArrayLike(label_p) && label_p.length === 2) {
    let inlinedVal;
    runtime.Tuple.get(label_p, 0);
    element1$ = runtime.Tuple.get(label_p, 1);
    tmp = lscomp1(circsim2, element1$, states);
    if (tmp instanceof NofibPrelude.Cons.class) {
      inlinedVal = tmp.head;
      if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 3) {
        runtime.Tuple.get(inlinedVal, 0);
        runtime.Tuple.get(inlinedVal, 1);
        return runtime.Tuple.get(inlinedVal, 2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda6 = (undefined, function (circsim2, states, p) {
  return get_output(circsim2, states, p)
});
lscomp = function lscomp(value, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, element5$, element4$, element3$, element2$, element0$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 6) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        runtime.Tuple.get(arg$Cons$0$, 1);
        element2$ = runtime.Tuple.get(arg$Cons$0$, 2);
        element3$ = runtime.Tuple.get(arg$Cons$0$, 3);
        element4$ = runtime.Tuple.get(arg$Cons$0$, 4);
        element5$ = runtime.Tuple.get(arg$Cons$0$, 5);
        tmp = globalThis.Object.freeze([
          element0$,
          value,
          element2$,
          element3$,
          element4$,
          element5$
        ]);
        tmp1 = lscomp(value, arg$Cons$1$);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$2 = (undefined, function (x) {
  return (a) => {
    return a >= x
  }
});
lambda4 = (undefined, function (x, a) {
  return a >= x
});
lambda5 = (undefined, function (a) {
  return a * 2
});
lambda$1 = (undefined, function (f, g) {
  return (a, b) => {
    return up(f, g, a, b)
  }
});
lambda$ = (undefined, function (f, g) {
  return (a, b, c) => {
    return down3(f, g, a, b, c)
  }
});
up = function up(f, g, lxly, rxry) {
  let element1$, element0$, element1$1, element0$1, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(lxly) && lxly.length === 2) {
    element0$ = runtime.Tuple.get(lxly, 0);
    element1$ = runtime.Tuple.get(lxly, 1);
    if (runtime.Tuple.isArrayLike(rxry) && rxry.length === 2) {
      element0$1 = runtime.Tuple.get(rxry, 0);
      element1$1 = runtime.Tuple.get(rxry, 1);
      tmp = runtime.safeCall(f(element0$, element0$1));
      tmp1 = runtime.safeCall(g(element1$, element1$1));
      return globalThis.Object.freeze([
        tmp,
        tmp1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
down3 = function down3(f, g, lxly, rxry, ab) {
  let element0$, element1$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
  if (runtime.Tuple.isArrayLike(lxly) && lxly.length === 2) {
    element0$ = runtime.Tuple.get(lxly, 0);
    runtime.Tuple.get(lxly, 1);
    if (runtime.Tuple.isArrayLike(rxry) && rxry.length === 2) {
      runtime.Tuple.get(rxry, 0);
      element1$ = runtime.Tuple.get(rxry, 1);
      if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
        element0$1 = runtime.Tuple.get(ab, 0);
        element1$1 = runtime.Tuple.get(ab, 1);
        tmp = runtime.safeCall(g(element1$, element1$1));
        tmp1 = globalThis.Object.freeze([
          element0$1,
          tmp
        ]);
        tmp2 = runtime.safeCall(f(element0$1, element0$));
        tmp3 = globalThis.Object.freeze([
          tmp2,
          element1$1
        ]);
        return globalThis.Object.freeze([
          tmp1,
          tmp3
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda1 = (undefined, function (x) {
  return globalThis.Object.freeze([
    x,
    x
  ])
});
lambda2 = (undefined, function (f, g, a, b) {
  return up(f, g, a, b)
});
lambda3 = (undefined, function (f, g, a, b, c) {
  return down3(f, g, a, b, c)
});
down2$ = function down2$(f) {
  return (l1, r, x) => {
    let tmp;
    tmp = runtime.safeCall(f(r, x));
    return globalThis.Object.freeze([
      tmp,
      x
    ])
  }
};
down2 = function down2(f, l1, r, x) {
  let tmp;
  tmp = runtime.safeCall(f(r, x));
  return globalThis.Object.freeze([
    tmp,
    x
  ])
};
down1$ = function down1$(f) {
  return (l1, r, x) => {
    let tmp;
    tmp = runtime.safeCall(f(x, l1));
    return globalThis.Object.freeze([
      x,
      tmp
    ])
  }
};
down1 = function down1(f, l1, r, x) {
  let tmp;
  tmp = runtime.safeCall(f(x, l1));
  return globalThis.Object.freeze([
    x,
    tmp
  ])
};
(class circsim {
  static {
    circsim1 = this
  }
  static get [scanlr$accessorSymbol]() { return circsim.#scanlr; }
  static get [send_right$accessorSymbol]() { return circsim.#send_right; }
  static get [send_left$accessorSymbol]() { return circsim.#send_left; }
  static get [critical_path_depth$accessorSymbol]() { return circsim.#critical_path_depth; }
  static get [store_inputs$accessorSymbol]() { return circsim.#store_inputs; }
  static get [make_packet$accessorSymbol]() { return circsim.#make_packet; }
  static get [compare_and_update$accessorSymbol]() { return circsim.#compare_and_update; }
  static get [update_i$accessorSymbol]() { return circsim.#update_i; }
  static get [update_o$accessorSymbol]() { return circsim.#update_o; }
  static get [do_sends$accessorSymbol]() { return circsim.#do_sends; }
  static get [simulate_component$accessorSymbol]() { return circsim.#simulate_component; }
  static get [do_cycle$accessorSymbol]() { return circsim.#do_cycle; }
  static get [reg$accessorSymbol]() { return circsim.#reg; }
  static {
    let tmp, tmp1;
    (class BinTree {
      static {
        circsim.BinTree = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "BinTree"];
    });
    circsim.Cell = function Cell(value) {
      return globalThis.Object.freeze(new Cell.class(value));
    };
    (class Cell extends circsim.BinTree {
      static {
        circsim.Cell.class = this
      }
      constructor(value) {
        super();
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Cell", ["value"]];
    });
    circsim.Node = function Node(value, left, right) {
      return globalThis.Object.freeze(new Node.class(value, left, right));
    };
    (class Node extends circsim.BinTree {
      static {
        circsim.Node.class = this
      }
      constructor(value, left, right) {
        super();
        this.value = value;
        this.left = left;
        this.right = right;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["value", "left", "right"]];
    });
    (class Componenet {
      static {
        circsim.Componenet = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Componenet"];
    });
    (class None_ extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.None_ = this;
        Object.defineProperty(this, "class", {
          value: None_
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None_"];
    });
    (class Inp extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.Inp = this;
        Object.defineProperty(this, "class", {
          value: Inp
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Inp"];
    });
    (class Outp extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.Outp = this;
        Object.defineProperty(this, "class", {
          value: Outp
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Outp"];
    });
    (class Dff extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.Dff = this;
        Object.defineProperty(this, "class", {
          value: Dff
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Dff"];
    });
    (class Inv extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.Inv = this;
        Object.defineProperty(this, "class", {
          value: Inv
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Inv"];
    });
    (class And2 extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.And2 = this;
        Object.defineProperty(this, "class", {
          value: And2
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "And2"];
    });
    (class Or2 extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.Or2 = this;
        Object.defineProperty(this, "class", {
          value: Or2
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Or2"];
    });
    (class Xor extends circsim.Componenet {
      static {
        new this
      }
      constructor() {
        super();
        circsim.Xor = this;
        Object.defineProperty(this, "class", {
          value: Xor
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Xor"];
    });
    (class Unit {
      static {
        new this
      }
      constructor() {
        circsim.Unit = this;
        Object.defineProperty(this, "class", {
          value: Unit
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Unit"];
    });
    circsim.PS = function PS(pid, compType, pathDepth, inports, outports) {
      return globalThis.Object.freeze(new PS.class(pid, compType, pathDepth, inports, outports));
    };
    (class PS {
      static {
        circsim.PS.class = this
      }
      constructor(pid, compType, pathDepth, inports, outports) {
        this.pid = pid;
        this.compType = compType;
        this.pathDepth = pathDepth;
        this.inports = inports;
        this.outports = outports;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "PS", ["pid", "compType", "pathDepth", "inports", "outports"]];
    });
    (class Boolean {
      static {
        circsim.Boolean = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Boolean"];
    });
    (class F extends circsim.Boolean {
      static {
        new this
      }
      constructor() {
        super();
        circsim.F = this;
        Object.defineProperty(this, "class", {
          value: F
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "F"];
    });
    (class T extends circsim.Boolean {
      static {
        new this
      }
      constructor() {
        super();
        circsim.T = this;
        Object.defineProperty(this, "class", {
          value: T
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "T"];
    });
    tmp = circsim.PS(-1, circsim.None_, -1, NofibPrelude.Nil, NofibPrelude.Nil);
    circsim.emptyState = tmp;
    tmp1 = globalThis.Object.freeze([
      -1,
      -1,
      circsim.F,
      false,
      0,
      false,
      0,
      1
    ]);
    circsim.emptyPacket = tmp1;
  }
  static #pid(p) {
    return p.pid
  }
  static #compType(p) {
    return p.compType
  }
  static #pathDepth(p) {
    return p.pathDepth
  }
  static #inports(p) {
    return p.inports
  }
  static #outports(p) {
    return p.outports
  }
  static #updateOutports(p, noutports) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = circsim.#pid(p);
    tmp1 = circsim.#compType(p);
    tmp2 = circsim.#pathDepth(p);
    tmp3 = circsim.#inports(p);
    return circsim.PS(tmp, tmp1, tmp2, tmp3, noutports)
  }
  static #updateInports(p, ninports) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = circsim.#pid(p);
    tmp1 = circsim.#compType(p);
    tmp2 = circsim.#pathDepth(p);
    tmp3 = circsim.#outports(p);
    return circsim.PS(tmp, tmp1, tmp2, ninports, tmp3)
  }
  static #put(xs) {
    let element1$, element0$, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, tmp2, tmp3, tmp4;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return circsim.Cell(arg$Cons$0$)
      }
    }
    inlinedVal = l(NofibPrelude, xs, 0);
    tmp4 = inlinedVal / 2;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp4));
    tmp2 = NofibPrelude.take(inlinedVal1, xs);
    tmp3 = NofibPrelude.leave(inlinedVal1, xs);
    inlinedVal2 = globalThis.Object.freeze([
      tmp2,
      tmp3
    ]);
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      element0$ = runtime.Tuple.get(inlinedVal2, 0);
      element1$ = runtime.Tuple.get(inlinedVal2, 1);
      tmp = circsim.#put(element0$);
      tmp1 = circsim.#put(element1$);
      return circsim.Node(circsim.Unit, tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #get(t) {
    let arg$Node$1$, arg$Node$2$, arg$Cell$0$, tmp, tmp1;
    if (t instanceof circsim.Cell.class) {
      arg$Cell$0$ = t.value;
      return NofibPrelude.Cons(arg$Cell$0$, NofibPrelude.Nil)
    } else if (t instanceof circsim.Node.class) {
      arg$Node$1$ = t.left;
      arg$Node$2$ = t.right;
      tmp = circsim.#get(arg$Node$1$);
      tmp1 = circsim.#get(arg$Node$2$);
      return NofibPrelude.append(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #upsweep(f, t) {
    let scrut, scrut1, arg$Node$1$, arg$Node$2$, element1$, element0$, element1$1, element0$1, arg$Cell$0$, tmp, tmp1, tmp2, tmp3;
    if (t instanceof circsim.Cell.class) {
      arg$Cell$0$ = t.value;
      tmp = circsim.Cell(arg$Cell$0$);
      return globalThis.Object.freeze([
        arg$Cell$0$,
        tmp
      ])
    } else if (t instanceof circsim.Node.class) {
      arg$Node$1$ = t.left;
      arg$Node$2$ = t.right;
      scrut1 = circsim.#upsweep(f, arg$Node$1$);
      if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
        element0$ = runtime.Tuple.get(scrut1, 0);
        element1$ = runtime.Tuple.get(scrut1, 1);
        scrut = circsim.#upsweep(f, arg$Node$2$);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$1 = runtime.Tuple.get(scrut, 0);
          element1$1 = runtime.Tuple.get(scrut, 1);
          tmp1 = runtime.safeCall(f(element0$, element0$1));
          tmp2 = globalThis.Object.freeze([
            element0$,
            element0$1
          ]);
          tmp3 = circsim.Node(tmp2, element1$, element1$1);
          return globalThis.Object.freeze([
            tmp1,
            tmp3
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #downsweep(g, d, t) {
    let scrut, arg$Node$0$, arg$Node$1$, arg$Node$2$, element1$, element0$, element1$1, element0$1, tmp, tmp1;
    if (t instanceof circsim.Cell.class) {
      return circsim.Cell(d)
    } else if (t instanceof circsim.Node.class) {
      arg$Node$0$ = t.value;
      arg$Node$1$ = t.left;
      arg$Node$2$ = t.right;
      if (runtime.Tuple.isArrayLike(arg$Node$0$) && arg$Node$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Node$0$, 0);
        element1$ = runtime.Tuple.get(arg$Node$0$, 1);
        scrut = runtime.safeCall(g(element0$, element1$, d));
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          element0$1 = runtime.Tuple.get(scrut, 0);
          element1$1 = runtime.Tuple.get(scrut, 1);
          tmp = circsim.#downsweep(g, element0$1, arg$Node$1$);
          tmp1 = circsim.#downsweep(g, element1$1, arg$Node$2$);
          return circsim.Node(circsim.Unit, tmp, tmp1)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sweep_ud(up1, down, u, t) {
    let scrut, element1$, element0$, tmp;
    scrut = circsim.#upsweep(up1, t);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tmp = circsim.#downsweep(down, u, element1$);
      return globalThis.Object.freeze([
        element0$,
        tmp
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #scanL(f, u, xs) {
    let scrut, element1$, element0$, tmp, tmp1, down1$here;
    tmp = circsim.#put(xs);
    down1$here = down1$(f);
    scrut = circsim.#sweep_ud(f, down1$here, u, tmp);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tmp1 = circsim.#get(element1$);
      return globalThis.Object.freeze([
        element0$,
        tmp1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #scanR(f, u, xs) {
    let scrut, element1$, element0$, tmp, tmp1, down2$here;
    tmp = circsim.#put(xs);
    down2$here = down2$(f);
    scrut = circsim.#sweep_ud(f, down2$here, u, tmp);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      tmp1 = circsim.#get(element1$);
      return globalThis.Object.freeze([
        element0$,
        tmp1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #scanlr(f, g, lu, ru, xs) {
    let xs_, scrut, ans, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, lambda$here, lambda$here1;
    xs_ = NofibPrelude.map(lambda1, xs);
    tmp = globalThis.Object.freeze([
      lu,
      ru
    ]);
    tmp1 = circsim.#put(xs_);
    lambda$here = lambda$1(f, g);
    lambda$here1 = lambda$(f, g);
    scrut = circsim.#sweep_ud(lambda$here, lambda$here1, tmp, tmp1);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 2) {
        element0$1 = runtime.Tuple.get(element0$, 0);
        element1$1 = runtime.Tuple.get(element0$, 1);
        tmp2 = runtime.safeCall(g(element1$1, ru));
        tmp3 = runtime.safeCall(f(lu, element0$1));
        ans = globalThis.Object.freeze([
          tmp2,
          tmp3
        ]);
        tmp4 = circsim.#get(element1$);
        return globalThis.Object.freeze([
          ans,
          tmp4
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #nearest_power_of_two(x) {
    let p, f, i, inlinedVal;
    p = lambda$2(x);
    f = lambda5;
    i = 1;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp;
        scrut = runtime.safeCall(p(i));
        if (scrut === true) {
          inlinedVal = i;
          break inlinedLbl
        }
        tmp = runtime.safeCall(f(i));
        i = tmp;
        continue loopLabel;
      }
    }
    return inlinedVal
  }
  static #pad_circuit(size_ins_outs_states) {
    let p2, states_, element3$, element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(size_ins_outs_states) && size_ins_outs_states.length === 4) {
      element0$ = runtime.Tuple.get(size_ins_outs_states, 0);
      element1$ = runtime.Tuple.get(size_ins_outs_states, 1);
      element2$ = runtime.Tuple.get(size_ins_outs_states, 2);
      element3$ = runtime.Tuple.get(size_ins_outs_states, 3);
      p2 = circsim.#nearest_power_of_two(element0$);
      tmp = NofibPrelude.replicate_lz(p2, circsim.emptyState);
      states_ = NofibPrelude.append_nl_lz(element3$, tmp);
      tmp1 = NofibPrelude.take_lz(p2, states_);
      return globalThis.Object.freeze([
        p2,
        element1$,
        element2$,
        tmp1
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #inv(x) {
    let scrut;
    scrut = x === circsim.T;
    if (scrut === true) {
      return circsim.F
    }
    return circsim.T;
  }
  static #and2(x, y) {
    let tmp, tmp1;
    tmp = x === circsim.T;
    if (tmp === true) {
      tmp1 = y === circsim.T;
      if (tmp1 === true) {
        return circsim.T
      }
      return circsim.F;
    }
    return circsim.F;
  }
  static #or2(x, y) {
    let tmp, tmp1;
    tmp = x === circsim.T;
    if (tmp === false) {
      tmp1 = y === circsim.T;
      if (tmp1 === true) {
        return circsim.T
      }
      return circsim.F;
    }
    return circsim.T;
  }
  static #xor(x, y) {
    let scrut;
    scrut = x === y;
    if (scrut === true) {
      return circsim.T
    }
    return circsim.F;
  }
  static #send_right(a, b) {
    let scrut, element7$, element6$, element5$, element4$, element3$, element2$, element1$, element0$, element7$1, element6$1, element5$1, element4$1, element3$1, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a) && a.length === 8) {
      element0$ = runtime.Tuple.get(a, 0);
      element1$ = runtime.Tuple.get(a, 1);
      element2$ = runtime.Tuple.get(a, 2);
      element3$ = runtime.Tuple.get(a, 3);
      element4$ = runtime.Tuple.get(a, 4);
      element5$ = runtime.Tuple.get(a, 5);
      element6$ = runtime.Tuple.get(a, 6);
      element7$ = runtime.Tuple.get(a, 7);
      if (runtime.Tuple.isArrayLike(b) && b.length === 8) {
        element0$1 = runtime.Tuple.get(b, 0);
        element1$1 = runtime.Tuple.get(b, 1);
        element2$1 = runtime.Tuple.get(b, 2);
        element3$1 = runtime.Tuple.get(b, 3);
        element4$1 = runtime.Tuple.get(b, 4);
        element5$1 = runtime.Tuple.get(b, 5);
        element6$1 = runtime.Tuple.get(b, 6);
        element7$1 = runtime.Tuple.get(b, 7);
        if (element5$ === true) {
          scrut = element6$ > element7$1;
          if (scrut === true) {
            tmp1 = element6$ - element7$1;
            tmp2 = element7$ + element7$1;
            return globalThis.Object.freeze([
              element0$,
              element1$,
              element2$,
              element3$,
              element4$,
              element5$,
              tmp1,
              tmp2
            ])
          }
        }
        tmp = element7$ + element7$1;
        return globalThis.Object.freeze([
          element0$1,
          element1$1,
          element2$1,
          element3$1,
          element4$1,
          element5$1,
          element6$1,
          tmp
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #send_left(a, b) {
    let element7$, element6$, element5$, element4$, element3$, element2$, element1$, element0$, element7$1, element6$1, element5$1, element4$1, element3$1, element2$1, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(a) && a.length === 8) {
      element0$ = runtime.Tuple.get(a, 0);
      element1$ = runtime.Tuple.get(a, 1);
      element2$ = runtime.Tuple.get(a, 2);
      element3$ = runtime.Tuple.get(a, 3);
      element4$ = runtime.Tuple.get(a, 4);
      element5$ = runtime.Tuple.get(a, 5);
      element6$ = runtime.Tuple.get(a, 6);
      element7$ = runtime.Tuple.get(a, 7);
      if (runtime.Tuple.isArrayLike(b) && b.length === 8) {
        element0$1 = runtime.Tuple.get(b, 0);
        element1$1 = runtime.Tuple.get(b, 1);
        element2$1 = runtime.Tuple.get(b, 2);
        element3$1 = runtime.Tuple.get(b, 3);
        element4$1 = runtime.Tuple.get(b, 4);
        element5$1 = runtime.Tuple.get(b, 5);
        element6$1 = runtime.Tuple.get(b, 6);
        element7$1 = runtime.Tuple.get(b, 7);
        if (element3$1 === true) {
          tmp = element4$1 > element7$;
          if (tmp === true) {
            tmp1 = element4$1 - element7$;
            tmp2 = element7$ + element7$1;
            return globalThis.Object.freeze([
              element0$1,
              element1$1,
              element2$1,
              element3$1,
              tmp1,
              element5$1,
              element6$1,
              tmp2
            ])
          }
          tmp3 = element7$ + element7$1;
          return globalThis.Object.freeze([
            element0$,
            element1$,
            element2$,
            element3$,
            element4$,
            element5$,
            element6$,
            tmp3
          ]);
        }
        tmp3 = element7$ + element7$1;
        return globalThis.Object.freeze([
          element0$,
          element1$,
          element2$,
          element3$,
          element4$,
          element5$,
          element6$,
          tmp3
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #send(xs) {
    return circsim.#scanlr(circsim.#send_right, circsim.#send_left, circsim.emptyPacket, circsim.emptyPacket, xs)
  }
  static #update_outports(state, value) {
    let tmp, tmp1;
    tmp = circsim.#outports(state);
    tmp1 = lscomp(value, tmp);
    return circsim.#updateOutports(state, tmp1)
  }
  static #critical_path_depth(siot) {
    let element3$, tmp;
    if (runtime.Tuple.isArrayLike(siot) && siot.length === 4) {
      let arg$Cons$0$, arg$Cons$1$;
      runtime.Tuple.get(siot, 0);
      runtime.Tuple.get(siot, 1);
      runtime.Tuple.get(siot, 2);
      element3$ = runtime.Tuple.get(siot, 3);
      tmp = NofibPrelude.map(circsim.#pathDepth, element3$);
      if (tmp instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = tmp.head;
        arg$Cons$1$ = tmp.tail;
        return NofibPrelude.foldl(lambda, arg$Cons$0$, arg$Cons$1$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #collect_outputs(tp4) {
    let element3$, element2$;
    if (runtime.Tuple.isArrayLike(tp4) && tp4.length === 4) {
      runtime.Tuple.get(tp4, 0);
      runtime.Tuple.get(tp4, 1);
      element2$ = runtime.Tuple.get(tp4, 2);
      element3$ = runtime.Tuple.get(tp4, 3);
      return NofibPrelude.map(lambda$3(circsim, element3$), element2$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #store_inputs(label_inputs, state) {
    let arg$PS$0$, arg$PS$1$, tmp;
    if (state instanceof circsim.PS.class) {
      arg$PS$0$ = state.pid;
      arg$PS$1$ = state.compType;
      if (arg$PS$1$ instanceof circsim.Inp.class) {
        tmp = lscomp2(circsim, state, arg$PS$0$, label_inputs);
        if (tmp instanceof NofibPrelude.Cons.class) {
          return tmp.head
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      return state;
    }
    return state;
  }
  static #apply_component(comp, signals) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3;
    if (comp instanceof circsim.Inp.class) {
      return NofibPrelude.None
    } else if (comp instanceof circsim.Outp.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = signals.head;
        arg$Cons$1$ = signals.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Some(arg$Cons$0$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (comp instanceof circsim.Dff.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = signals.head;
        arg$Cons$1$ = signals.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Some(arg$Cons$0$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (comp instanceof circsim.Inv.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = signals.head;
        arg$Cons$1$ = signals.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          tmp = circsim.#inv(arg$Cons$0$);
          return NofibPrelude.Some(tmp)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (comp instanceof circsim.And2.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = signals.head;
        arg$Cons$1$ = signals.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$1$.head;
          arg$Cons$1$1 = arg$Cons$1$.tail;
          if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
            tmp1 = circsim.#and2(arg$Cons$0$, arg$Cons$0$1);
            return NofibPrelude.Some(tmp1)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (comp instanceof circsim.Or2.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = signals.head;
        arg$Cons$1$ = signals.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$1$.head;
          arg$Cons$1$1 = arg$Cons$1$.tail;
          if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
            tmp2 = circsim.#or2(arg$Cons$0$, arg$Cons$0$1);
            return NofibPrelude.Some(tmp2)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (comp instanceof circsim.Xor.class) {
      if (signals instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = signals.head;
        arg$Cons$1$ = signals.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$1$.head;
          arg$Cons$1$1 = arg$Cons$1$.tail;
          if (arg$Cons$1$1 instanceof NofibPrelude.Nil.class) {
            tmp3 = circsim.#xor(arg$Cons$0$, arg$Cons$0$1);
            return NofibPrelude.Some(tmp3)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    } else if (comp instanceof circsim.None_.class) {
      return NofibPrelude.None
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #init_dffs(state) {
    let scrut, tmp;
    tmp = circsim.#compType(state);
    scrut = tmp === circsim.Dff;
    if (scrut === true) {
      return circsim.#update_outports(state, circsim.F)
    }
    return state;
  }
  static #restore_requests(old_states, new_states) {
    let restore$here;
    restore$here = restore$(circsim);
    return NofibPrelude.zipWith(restore$here, old_states, new_states)
  }
  static #update_requests(b, state) {
    let tmp, tmp1;
    tmp = circsim.#outports(state);
    tmp1 = lscomp3(b, tmp);
    return circsim.#updateOutports(state, tmp1)
  }
  static #check_depth(d, state) {
    let scrut, tmp;
    tmp = circsim.#pathDepth(state);
    scrut = tmp == d;
    if (scrut === true) {
      return state
    }
    return circsim.#update_requests(false, state);
  }
  static #acknowledge(d, states) {
    let states1, tmp, tmp1;
    states1 = NofibPrelude.map(lambda$5(circsim, d), states);
    tmp = NofibPrelude.map(lambda$4(circsim), states1);
    tmp1 = NofibPrelude.orList(tmp);
    return ! tmp1
  }
  static #pad_packets(pss) {
    return NofibPrelude.map(lambda$6(circsim, pss), pss)
  }
  static #make_packet(state) {
    let tmp;
    tmp = circsim.#outports(state);
    return lscomp4(circsim, state, tmp)
  }
  static #compare_and_update(ipm_, pid_port_m) {
    let scrut, element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(ipm_) && ipm_.length === 3) {
      element0$ = runtime.Tuple.get(ipm_, 0);
      element1$ = runtime.Tuple.get(ipm_, 1);
      element2$ = runtime.Tuple.get(ipm_, 2);
      if (runtime.Tuple.isArrayLike(pid_port_m) && pid_port_m.length === 3) {
        element0$1 = runtime.Tuple.get(pid_port_m, 0);
        element1$1 = runtime.Tuple.get(pid_port_m, 1);
        element2$1 = runtime.Tuple.get(pid_port_m, 2);
        tmp = globalThis.Object.freeze([
          element0$,
          element1$
        ]);
        tmp1 = globalThis.Object.freeze([
          element0$1,
          element1$1
        ]);
        scrut = NofibPrelude.eqTup2(tmp, tmp1);
        if (scrut === true) {
          return globalThis.Object.freeze([
            element0$1,
            element1$1,
            element2$
          ])
        }
        return globalThis.Object.freeze([
          element0$1,
          element1$1,
          element2$1
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #up_i(ipm_, ins) {
    let element2$, element1$, element0$;
    if (runtime.Tuple.isArrayLike(ipm_) && ipm_.length === 8) {
      element0$ = runtime.Tuple.get(ipm_, 0);
      element1$ = runtime.Tuple.get(ipm_, 1);
      element2$ = runtime.Tuple.get(ipm_, 2);
      runtime.Tuple.get(ipm_, 3);
      runtime.Tuple.get(ipm_, 4);
      runtime.Tuple.get(ipm_, 5);
      runtime.Tuple.get(ipm_, 6);
      runtime.Tuple.get(ipm_, 7);
      return NofibPrelude.map(lambda$7(circsim, element0$, element1$, element2$), ins)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #update_i(l_r, ins) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(l_r) && l_r.length === 2) {
      element0$ = runtime.Tuple.get(l_r, 0);
      element1$ = runtime.Tuple.get(l_r, 1);
      tmp = circsim.#up_i(element1$, ins);
      return circsim.#up_i(element0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #check_left(a, b) {
    let element6$, element5$, element5$1, element4$, element3$, element2$, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(a) && a.length === 8) {
      runtime.Tuple.get(a, 0);
      runtime.Tuple.get(a, 1);
      runtime.Tuple.get(a, 2);
      runtime.Tuple.get(a, 3);
      runtime.Tuple.get(a, 4);
      element5$ = runtime.Tuple.get(a, 5);
      element6$ = runtime.Tuple.get(a, 6);
      runtime.Tuple.get(a, 7);
      if (runtime.Tuple.isArrayLike(b) && b.length === 6) {
        element0$ = runtime.Tuple.get(b, 0);
        element1$ = runtime.Tuple.get(b, 1);
        element2$ = runtime.Tuple.get(b, 2);
        element3$ = runtime.Tuple.get(b, 3);
        element4$ = runtime.Tuple.get(b, 4);
        element5$1 = runtime.Tuple.get(b, 5);
        if (element5$ === true) {
          tmp = element6$ > 0;
          if (tmp === true) {
            return globalThis.Object.freeze([
              element0$,
              element1$,
              element2$,
              element3$,
              element4$,
              element5$1
            ])
          }
          return globalThis.Object.freeze([
            element0$,
            element1$,
            element2$,
            element3$,
            false,
            element5$1
          ]);
        }
        return globalThis.Object.freeze([
          element0$,
          element1$,
          element2$,
          element3$,
          false,
          element5$1
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #check_right(a, b) {
    let element4$, element3$, element5$, element4$1, element3$1, element2$, element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(a) && a.length === 8) {
      runtime.Tuple.get(a, 0);
      runtime.Tuple.get(a, 1);
      runtime.Tuple.get(a, 2);
      element3$ = runtime.Tuple.get(a, 3);
      element4$ = runtime.Tuple.get(a, 4);
      runtime.Tuple.get(a, 5);
      runtime.Tuple.get(a, 6);
      runtime.Tuple.get(a, 7);
      if (runtime.Tuple.isArrayLike(b) && b.length === 6) {
        element0$ = runtime.Tuple.get(b, 0);
        element1$ = runtime.Tuple.get(b, 1);
        element2$ = runtime.Tuple.get(b, 2);
        element3$1 = runtime.Tuple.get(b, 3);
        element4$1 = runtime.Tuple.get(b, 4);
        element5$ = runtime.Tuple.get(b, 5);
        if (element3$ === true) {
          tmp = element4$ > 0;
          if (tmp === true) {
            return globalThis.Object.freeze([
              element0$,
              element1$,
              element2$,
              element3$1,
              element4$1,
              element5$
            ])
          }
          return globalThis.Object.freeze([
            element0$,
            element1$,
            false,
            element3$1,
            element4$1,
            element5$
          ]);
        }
        return globalThis.Object.freeze([
          element0$,
          element1$,
          false,
          element3$1,
          element4$1,
          element5$
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #update_o(lp_rp, out_) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(lp_rp) && lp_rp.length === 2) {
      element0$ = runtime.Tuple.get(lp_rp, 0);
      element1$ = runtime.Tuple.get(lp_rp, 1);
      tmp = circsim.#check_right(element1$, out_);
      return circsim.#check_left(element0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #update_io(d, lrps, state) {
    let tmp;
    tmp = update_is(circsim, lrps, state);
    return update_os(circsim, d, lrps, tmp)
  }
  static #do_send(d, states) {
    let states1, send_results, pss_, tmp, tmp1, tmp2;
    states1 = NofibPrelude.map(lambda$10(circsim, d), states);
    tmp = NofibPrelude.map(circsim.#make_packet, states1);
    tmp1 = circsim.#pad_packets(tmp);
    tmp2 = NofibPrelude.transpose(tmp1);
    send_results = NofibPrelude.map(lambda$9(circsim), tmp2);
    pss_ = NofibPrelude.transpose(send_results);
    return NofibPrelude.zipWith(lambda$8(circsim, d), pss_, states)
  }
  static #do_sends(d, states) {
    let p, f, i, inlinedVal;
    p = lambda$12(circsim, d);
    f = lambda$11(circsim, d);
    i = states;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp;
        scrut = runtime.safeCall(p(i));
        if (scrut === true) {
          inlinedVal = i;
          break inlinedLbl
        }
        tmp = runtime.safeCall(f(i));
        i = tmp;
        continue loopLabel;
      }
    }
    return inlinedVal
  }
  static #simulate_component(d, state) {
    let out_signals, new_value, scrut, scrut1, tmp, tmp1, arg$Some$0$, tmp2, tmp3;
    tmp = circsim.#inports(state);
    out_signals = lscomp5(tmp);
    tmp1 = circsim.#compType(state);
    new_value = circsim.#apply_component(tmp1, out_signals);
    tmp2 = circsim.#pathDepth(state);
    scrut = d == tmp2;
    if (scrut === true) {
      tmp3 = new_value === NofibPrelude.None;
      scrut1 = ! tmp3;
      if (scrut1 === true) {
        if (new_value instanceof NofibPrelude.Some.class) {
          arg$Some$0$ = new_value.x;
          return circsim.#update_outports(state, arg$Some$0$)
        }
        return state;
      }
      return state;
    }
    return state;
  }
  static #simulate_components(depth, states) {
    return NofibPrelude.map(lambda$13(circsim, depth), states)
  }
  static #do_cycle(cpd, tp4, inputs) {
    let states1, states2, states3, states4, element3$, element2$, element1$, element0$, tmp, sim_then_send$here;
    if (runtime.Tuple.isArrayLike(tp4) && tp4.length === 4) {
      element0$ = runtime.Tuple.get(tp4, 0);
      element1$ = runtime.Tuple.get(tp4, 1);
      element2$ = runtime.Tuple.get(tp4, 2);
      element3$ = runtime.Tuple.get(tp4, 3);
      states1 = NofibPrelude.map(lambda$14(circsim, inputs, element1$), element3$);
      states2 = circsim.#do_sends(0, states1);
      tmp = NofibPrelude.enumFromTo(1, cpd);
      sim_then_send$here = sim_then_send$(circsim);
      states3 = NofibPrelude.foldl(sim_then_send$here, states2, tmp);
      states4 = circsim.#restore_requests(element3$, states3);
      return globalThis.Object.freeze([
        element0$,
        element1$,
        element2$,
        states4
      ])
    }
    throw runtime.safeCall(globalThis.Error(tp4));
  }
  static #simulate(inputs_list, b) {
    let element3$, element2$, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(b) && b.length === 4) {
      element0$ = runtime.Tuple.get(b, 0);
      element1$ = runtime.Tuple.get(b, 1);
      element2$ = runtime.Tuple.get(b, 2);
      element3$ = runtime.Tuple.get(b, 3);
      tmp = NofibPrelude.map(circsim.#init_dffs, element3$);
      tmp1 = globalThis.Object.freeze([
        element0$,
        element1$,
        element2$,
        tmp
      ]);
      tmp2 = NofibPrelude.scanl(lambda$15(circsim, element0$, element2$, element1$, element3$), tmp1, inputs_list);
      if (tmp2 instanceof NofibPrelude.Cons.class) {
        return tmp2.tail
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #reg(sto, n) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54;
    tmp = globalThis.Object.freeze([
      0,
      circsim.F,
      false,
      0,
      true,
      4
    ]);
    tmp1 = NofibPrelude.Cons(tmp, NofibPrelude.Nil);
    tmp2 = circsim.PS(n, circsim.Inp, 0, NofibPrelude.Nil, tmp1);
    tmp3 = n + 1;
    tmp4 = n + 5;
    tmp5 = globalThis.Object.freeze([
      tmp4,
      0,
      circsim.F
    ]);
    tmp6 = NofibPrelude.Cons(tmp5, NofibPrelude.Nil);
    tmp7 = globalThis.Object.freeze([
      0,
      circsim.F,
      false,
      0,
      true,
      5
    ]);
    tmp8 = NofibPrelude.Cons(tmp7, NofibPrelude.Nil);
    tmp9 = circsim.PS(tmp3, circsim.Dff, 1, tmp6, tmp8);
    tmp10 = n + 2;
    tmp11 = globalThis.Object.freeze([
      sto,
      0,
      circsim.F
    ]);
    tmp12 = NofibPrelude.Cons(tmp11, NofibPrelude.Nil);
    tmp13 = globalThis.Object.freeze([
      0,
      circsim.F,
      false,
      0,
      true,
      1
    ]);
    tmp14 = NofibPrelude.Cons(tmp13, NofibPrelude.Nil);
    tmp15 = circsim.PS(tmp10, circsim.Inv, 1, tmp12, tmp14);
    tmp16 = n + 3;
    tmp17 = n + 1;
    tmp18 = globalThis.Object.freeze([
      tmp17,
      0,
      circsim.F
    ]);
    tmp19 = n + 2;
    tmp20 = globalThis.Object.freeze([
      tmp19,
      0,
      circsim.F
    ]);
    tmp21 = NofibPrelude.Cons(tmp20, NofibPrelude.Nil);
    tmp22 = NofibPrelude.Cons(tmp18, tmp21);
    tmp23 = globalThis.Object.freeze([
      0,
      circsim.F,
      false,
      0,
      true,
      2
    ]);
    tmp24 = NofibPrelude.Cons(tmp23, NofibPrelude.Nil);
    tmp25 = circsim.PS(tmp16, circsim.And2, 2, tmp22, tmp24);
    tmp26 = n + 4;
    tmp27 = globalThis.Object.freeze([
      sto,
      0,
      circsim.F
    ]);
    tmp28 = globalThis.Object.freeze([
      n,
      0,
      circsim.F
    ]);
    tmp29 = NofibPrelude.Cons(tmp28, NofibPrelude.Nil);
    tmp30 = NofibPrelude.Cons(tmp27, tmp29);
    tmp31 = globalThis.Object.freeze([
      0,
      circsim.F,
      false,
      0,
      true,
      1
    ]);
    tmp32 = NofibPrelude.Cons(tmp31, NofibPrelude.Nil);
    tmp33 = circsim.PS(tmp26, circsim.And2, 1, tmp30, tmp32);
    tmp34 = n + 5;
    tmp35 = n + 3;
    tmp36 = globalThis.Object.freeze([
      tmp35,
      0,
      circsim.F
    ]);
    tmp37 = n + 4;
    tmp38 = globalThis.Object.freeze([
      tmp37,
      0,
      circsim.F
    ]);
    tmp39 = NofibPrelude.Cons(tmp38, NofibPrelude.Nil);
    tmp40 = NofibPrelude.Cons(tmp36, tmp39);
    tmp41 = globalThis.Object.freeze([
      0,
      circsim.F,
      true,
      4,
      false,
      0
    ]);
    tmp42 = NofibPrelude.Cons(tmp41, NofibPrelude.Nil);
    tmp43 = circsim.PS(tmp34, circsim.Or2, 3, tmp40, tmp42);
    tmp44 = n + 6;
    tmp45 = n + 1;
    tmp46 = globalThis.Object.freeze([
      tmp45,
      0,
      circsim.F
    ]);
    tmp47 = NofibPrelude.Cons(tmp46, NofibPrelude.Nil);
    tmp48 = circsim.PS(tmp44, circsim.Outp, 4, tmp47, NofibPrelude.Nil);
    tmp49 = NofibPrelude.Cons(tmp48, NofibPrelude.Nil);
    tmp50 = NofibPrelude.Cons(tmp43, tmp49);
    tmp51 = NofibPrelude.Cons(tmp33, tmp50);
    tmp52 = NofibPrelude.Cons(tmp25, tmp51);
    tmp53 = NofibPrelude.Cons(tmp15, tmp52);
    tmp54 = NofibPrelude.Cons(tmp9, tmp53);
    return NofibPrelude.Cons(tmp2, tmp54)
  }
  static #regs(bits) {
    let is_, os, sto, states, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21;
    tmp = globalThis.Object.freeze([
      "sto",
      0
    ]);
    tmp1 = NofibPrelude.enumFrom(0);
    tmp2 = bits - 1;
    tmp3 = NofibPrelude.enumFromTo(0, tmp2);
    tmp4 = NofibPrelude.map(lambda20, tmp3);
    tmp5 = NofibPrelude.zipWith_lz_nl(ilabel, tmp1, tmp4);
    is_ = NofibPrelude.Cons(tmp, tmp5);
    tmp6 = NofibPrelude.enumFrom(0);
    tmp7 = bits - 1;
    tmp8 = NofibPrelude.enumFromTo(0, tmp7);
    tmp9 = NofibPrelude.map(lambda21, tmp8);
    os = NofibPrelude.zipWith_lz_nl(olabel, tmp6, tmp9);
    tmp10 = bits - 1;
    tmp11 = 8 * tmp10;
    tmp12 = tmp11 + 5;
    tmp13 = globalThis.Object.freeze([
      0,
      circsim.F,
      false,
      0,
      true,
      tmp12
    ]);
    tmp14 = NofibPrelude.Cons(tmp13, NofibPrelude.Nil);
    sto = circsim.PS(0, circsim.Inp, 0, NofibPrelude.Nil, tmp14);
    tmp15 = bits - 1;
    tmp16 = NofibPrelude.enumFromTo(0, tmp15);
    tmp17 = NofibPrelude.map(lambda23, tmp16);
    tmp18 = NofibPrelude.map(lambda$16(circsim), tmp17);
    tmp19 = NofibPrelude.concat(tmp18);
    states = NofibPrelude.Cons(sto, tmp19);
    tmp20 = 7 * bits;
    tmp21 = 1 + tmp20;
    return globalThis.Object.freeze([
      tmp21,
      is_,
      os,
      states
    ])
  }
  static #circuit_simulate(inputs_list, circuit) {
    let tmp;
    tmp = circsim.#simulate(inputs_list, circuit);
    return NofibPrelude.map(circsim.#collect_outputs, tmp)
  }
  static #run(num_bits, num_cycles) {
    let example, inputs, cycles, tmp, tmp1;
    tmp = circsim.#regs(num_bits);
    example = circsim.#pad_circuit(tmp);
    tmp1 = num_bits + 1;
    inputs = NofibPrelude.replicate(tmp1, circsim.T);
    cycles = NofibPrelude.replicate(num_cycles, inputs);
    return circsim.#circuit_simulate(cycles, example)
  }
  static #testCircsim_nofib(n) {
    return circsim.#run(8, n)
  }
  static main() {
    let tmp;
    tmp = circsim.#testCircsim_nofib(40);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "circsim"];
});
export { down1 as _$_modulePrivate_$_down1 };
export { down2 as _$_modulePrivate_$_down2 };
export { down3 as _$_modulePrivate_$_down3 };
export { up as _$_modulePrivate_$_up };
export { lscomp as _$_modulePrivate_$_lscomp };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { thrid as _$_modulePrivate_$_thrid };
export { get_output as _$_modulePrivate_$_get_output };
export { lscomp2 as _$_modulePrivate_$_lscomp2 };
export { restore_outport as _$_modulePrivate_$_restore_outport };
export { restore as _$_modulePrivate_$_restore };
export { lscomp3 as _$_modulePrivate_$_lscomp3 };
export { check_requests as _$_modulePrivate_$_check_requests };
export { check_lr_requests as _$_modulePrivate_$_check_lr_requests };
export { pad as _$_modulePrivate_$_pad };
export { lscomp4 as _$_modulePrivate_$_lscomp4 };
export { update_is as _$_modulePrivate_$_update_is };
export { update_os as _$_modulePrivate_$_update_os };
export { lscomp5 as _$_modulePrivate_$_lscomp5 };
export { sim_then_send as _$_modulePrivate_$_sim_then_send };
export { ilabel as _$_modulePrivate_$_ilabel };
export { olabel as _$_modulePrivate_$_olabel };
export { circsim1 as _$_modulePrivate_$_circsim };
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
export { lambda22 as _$_modulePrivate_$_lambda21 };
export { lambda23 as _$_modulePrivate_$_lambda22 };
export { down1$ as _$_modulePrivate_$_down1$ };
export { down2$ as _$_modulePrivate_$_down2$ };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { restore$ as _$_modulePrivate_$_restore$ };
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
export { sim_then_send$ as _$_modulePrivate_$_sim_then_send$ };
export { lambda$15 as _$_modulePrivate_$_lambda$15 };
export { lambda$16 as _$_modulePrivate_$_lambda$16 };
export default circsim1;
