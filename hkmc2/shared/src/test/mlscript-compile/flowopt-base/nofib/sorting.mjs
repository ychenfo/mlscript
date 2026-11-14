const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_r as r } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_go1 as go } from "./NofibPrelude.mjs";
const compareList$accessorSymbol = globalThis.Symbol("compareList");
const prependToAll$accessorSymbol = globalThis.Symbol("prependToAll");
const quickSort$accessorSymbol = globalThis.Symbol("quickSort");
const select$accessorSymbol = globalThis.Symbol("select");
const quickSort2$accessorSymbol = globalThis.Symbol("quickSort2");
const quickerSort$accessorSymbol = globalThis.Symbol("quickerSort");
const insertSort$accessorSymbol = globalThis.Symbol("insertSort");
const treeSort$accessorSymbol = globalThis.Symbol("treeSort");
const treeSort2$accessorSymbol = globalThis.Symbol("treeSort2");
const heapSort$accessorSymbol = globalThis.Symbol("heapSort");
const mergeSort$accessorSymbol = globalThis.Symbol("mergeSort");
let lscomp2, lscomp1, split, trins, to_tree, mkTree, readTree, to_tree1, mkTree1, readTree1, to_heap, clear, heap, mix, runsplit, merge, merge_lists, sort, sorting1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda$, lambda$1, lambda$2, to_tree$, to_tree$1, lambda$3;
lambda$3 = (undefined, function (f, g) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(g(x));
    return runtime.safeCall(f(tmp))
  }
});
lambda7 = (undefined, function (f, g, x) {
  let tmp;
  tmp = runtime.safeCall(g(x));
  return runtime.safeCall(f(tmp))
});
lambda5 = (undefined, function (f, g) {
  return lambda$3(f, g)
});
lambda6 = (undefined, function (x) {
  return x
});
sort = function sort(sorting2, param) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, baseCall, sep, inlinedVal, arg$Cons$0$, arg$Cons$1$, tmp8;
  tmp = NofibPrelude.Cons(sorting2[treeSort2$accessorSymbol], NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(sorting2[treeSort$accessorSymbol], tmp);
  tmp2 = NofibPrelude.Cons(sorting2[quickerSort$accessorSymbol], tmp1);
  tmp3 = NofibPrelude.Cons(sorting2[quickSort2$accessorSymbol], tmp2);
  tmp4 = NofibPrelude.Cons(sorting2[quickSort$accessorSymbol], tmp3);
  tmp5 = NofibPrelude.Cons(sorting2[mergeSort$accessorSymbol], tmp4);
  tmp6 = NofibPrelude.Cons(sorting2[insertSort$accessorSymbol], tmp5);
  tmp7 = NofibPrelude.Cons(sorting2[heapSort$accessorSymbol], tmp6);
  sep = NofibPrelude.reverse;
  if (tmp7 instanceof NofibPrelude.Nil.class) {
    inlinedVal = NofibPrelude.Nil;
  } else if (tmp7 instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = tmp7.head;
    arg$Cons$1$ = tmp7.tail;
    tmp8 = sorting2[prependToAll$accessorSymbol](sep, arg$Cons$1$);
    inlinedVal = NofibPrelude.Cons(arg$Cons$0$, tmp8);
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  baseCall = NofibPrelude.foldr(lambda5, lambda6, inlinedVal);
  return runtime.safeCall(baseCall(param))
};
runsplit = function runsplit(sorting2, run, xs) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
    if (run instanceof NofibPrelude.Nil.class) {
      if (xs instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = xs.head;
        arg$Cons$1$1 = xs.tail;
        tmp = NofibPrelude.Cons(arg$Cons$0$1, NofibPrelude.Nil);
        run = tmp;
        xs = arg$Cons$1$1;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(run, NofibPrelude.Nil)
    }
    if (run instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = run.head;
      arg$Cons$1$ = run.tail;
      if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = xs.head;
        arg$Cons$1$1 = xs.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          let receiver, scrut;
          receiver = sorting2;
          scrut = sorting2[compareList$accessorSymbol](arg$Cons$0$1, arg$Cons$0$);
          if (scrut instanceof receiver.GT.class) {
            tmp1 = NofibPrelude.Cons(arg$Cons$0$1, NofibPrelude.Nil);
            tmp2 = NofibPrelude.Cons(arg$Cons$0$, tmp1);
            run = tmp2;
            xs = arg$Cons$1$1;
            continue loopLabel
          }
          {
            let inlinedVal, receiver1, inlinedVal1, scrut1;
            receiver1 = sorting2;
            scrut1 = sorting2[compareList$accessorSymbol](arg$Cons$0$1, arg$Cons$0$);
            if (scrut1 instanceof receiver1.GT.class) {
              inlinedVal1 = true;
            } else {
              inlinedVal1 = false;
            }
            inlinedVal = ! inlinedVal1;
            if (inlinedVal === true) {
              tmp3 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
              tmp4 = NofibPrelude.Cons(arg$Cons$0$1, tmp3);
              run = tmp4;
              xs = arg$Cons$1$1;
              continue loopLabel
            }
            tmp5 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
            tmp6 = NofibPrelude.Cons(arg$Cons$0$1, NofibPrelude.Nil);
            tmp7 = runsplit(sorting2, tmp6, arg$Cons$1$1);
            return NofibPrelude.Cons(tmp5, tmp7);
          }
        }
        {
          let inlinedVal, receiver, inlinedVal1, scrut;
          receiver = sorting2;
          scrut = sorting2[compareList$accessorSymbol](arg$Cons$0$1, arg$Cons$0$);
          if (scrut instanceof receiver.GT.class) {
            inlinedVal1 = true;
          } else {
            inlinedVal1 = false;
          }
          inlinedVal = ! inlinedVal1;
          if (inlinedVal === true) {
            tmp8 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
            tmp9 = NofibPrelude.Cons(arg$Cons$0$1, tmp8);
            run = tmp9;
            xs = arg$Cons$1$1;
            continue loopLabel
          }
          tmp10 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
          tmp11 = NofibPrelude.Cons(arg$Cons$0$1, NofibPrelude.Nil);
          tmp12 = runsplit(sorting2, tmp11, arg$Cons$1$1);
          return NofibPrelude.Cons(tmp10, tmp12);
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
merge_lists = function merge_lists(sorting2, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = merge_lists(sorting2, arg$Cons$1$);
    return merge(sorting2, arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
merge = function merge(sorting2, xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  }
  if (ys instanceof NofibPrelude.Nil.class) {
    return xs
  }
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    if (ys instanceof NofibPrelude.Cons.class) {
      let receiver, scrut;
      arg$Cons$0$1 = ys.head;
      arg$Cons$1$1 = ys.tail;
      receiver = sorting2;
      scrut = sorting2[compareList$accessorSymbol](arg$Cons$0$, arg$Cons$0$1);
      if (scrut instanceof receiver.EQ.class) {
        tmp = merge(sorting2, arg$Cons$1$, arg$Cons$1$1);
        tmp1 = NofibPrelude.Cons(arg$Cons$0$1, tmp);
        return NofibPrelude.Cons(arg$Cons$0$, tmp1)
      }
      {
        let receiver1, scrut1;
        receiver1 = sorting2;
        scrut1 = sorting2[compareList$accessorSymbol](arg$Cons$0$, arg$Cons$0$1);
        if (scrut1 instanceof receiver1.LT.class) {
          tmp2 = NofibPrelude.Cons(arg$Cons$0$1, arg$Cons$1$1);
          tmp3 = merge(sorting2, arg$Cons$1$, tmp2);
          return NofibPrelude.Cons(arg$Cons$0$, tmp3)
        }
        tmp4 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
        tmp5 = merge(sorting2, tmp4, arg$Cons$1$1);
        return NofibPrelude.Cons(arg$Cons$0$1, tmp5);
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
heap = function heap(sorting2, k, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Nil.class) {
    return sorting2.Tip
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = k + 1;
    tmp1 = heap(sorting2, tmp, arg$Cons$1$);
    return to_heap(sorting2, k, arg$Cons$0$, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
to_heap = function to_heap(sorting2, k, x, t) {
  let arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, tmp, tmp1, tmp2, tmp3;
  if (t instanceof sorting2.Tip.class) {
    return sorting2.Branch(x, sorting2.Tip, sorting2.Tip)
  } else if (t instanceof sorting2.Branch.class) {
    let inlinedVal, inlinedVal1, receiver, inlinedVal2, receiver1, inlinedVal3, scrut, scrut1;
    arg$Branch$0$ = t.a;
    arg$Branch$1$ = t.l;
    arg$Branch$2$ = t.r;
    receiver = sorting2;
    scrut1 = sorting2[compareList$accessorSymbol](x, arg$Branch$0$);
    if (scrut1 instanceof receiver.GT.class) {
      inlinedVal2 = true;
    } else {
      inlinedVal2 = false;
    }
    inlinedVal = ! inlinedVal2;
    if (inlinedVal === true) {
      let inlinedVal4, inlinedVal5, tmp4, inlinedVal6, tmp5;
      tmp5 = k / 2;
      inlinedVal6 = runtime.safeCall(globalThis.Math.floor(tmp5));
      tmp4 = 2 * inlinedVal6;
      inlinedVal5 = k - tmp4;
      inlinedVal4 = inlinedVal5 === 0;
      if (inlinedVal4 === true) {
        let inlinedVal7, tmp6;
        tmp6 = k / 2;
        inlinedVal7 = runtime.safeCall(globalThis.Math.floor(tmp6));
        tmp3 = to_heap(sorting2, inlinedVal7, arg$Branch$0$, arg$Branch$1$);
        return sorting2.Branch(x, tmp3, arg$Branch$2$)
      }
    }
    receiver1 = sorting2;
    scrut = sorting2[compareList$accessorSymbol](x, arg$Branch$0$);
    if (scrut instanceof receiver1.GT.class) {
      inlinedVal3 = true;
    } else {
      inlinedVal3 = false;
    }
    inlinedVal1 = ! inlinedVal3;
    if (inlinedVal1 === true) {
      let inlinedVal4, tmp4;
      tmp4 = k / 2;
      inlinedVal4 = runtime.safeCall(globalThis.Math.floor(tmp4));
      tmp = to_heap(sorting2, inlinedVal4, arg$Branch$0$, arg$Branch$2$);
      return sorting2.Branch(x, arg$Branch$1$, tmp)
    }
    {
      let inlinedVal4, inlinedVal5, tmp4, inlinedVal6, tmp5;
      tmp5 = k / 2;
      inlinedVal6 = runtime.safeCall(globalThis.Math.floor(tmp5));
      tmp4 = 2 * inlinedVal6;
      inlinedVal5 = k - tmp4;
      inlinedVal4 = inlinedVal5 === 0;
      if (inlinedVal4 === true) {
        let inlinedVal7, tmp6;
        tmp6 = k / 2;
        inlinedVal7 = runtime.safeCall(globalThis.Math.floor(tmp6));
        tmp1 = to_heap(sorting2, inlinedVal7, x, arg$Branch$1$);
        return sorting2.Branch(arg$Branch$0$, tmp1, arg$Branch$2$)
      }
      {
        let inlinedVal7, tmp6;
        tmp6 = k / 2;
        inlinedVal7 = runtime.safeCall(globalThis.Math.floor(tmp6));
        tmp2 = to_heap(sorting2, inlinedVal7, x, arg$Branch$2$);
        return sorting2.Branch(arg$Branch$0$, arg$Branch$1$, tmp2);
      }
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
clear = function clear(sorting2, t) {
  let arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, tmp, tmp1;
  if (t instanceof sorting2.Tip.class) {
    return NofibPrelude.Nil
  } else if (t instanceof sorting2.Branch.class) {
    arg$Branch$0$ = t.a;
    arg$Branch$1$ = t.l;
    arg$Branch$2$ = t.r;
    tmp = mix(sorting2, arg$Branch$1$, arg$Branch$2$);
    tmp1 = clear(sorting2, tmp);
    return NofibPrelude.Cons(arg$Branch$0$, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
mix = function mix(sorting2, l, r1) {
  let arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, arg$Branch$0$1, arg$Branch$1$1, arg$Branch$2$1, tmp, tmp1, tmp2, tmp3;
  if (l instanceof sorting2.Tip.class) {
    return r1
  }
  if (r1 instanceof sorting2.Tip.class) {
    return l
  }
  if (l instanceof sorting2.Branch.class) {
    arg$Branch$0$ = l.a;
    arg$Branch$1$ = l.l;
    arg$Branch$2$ = l.r;
    if (r1 instanceof sorting2.Branch.class) {
      let inlinedVal, receiver, inlinedVal1, scrut;
      arg$Branch$0$1 = r1.a;
      arg$Branch$1$1 = r1.l;
      arg$Branch$2$1 = r1.r;
      receiver = sorting2;
      scrut = sorting2[compareList$accessorSymbol](arg$Branch$0$, arg$Branch$0$1);
      if (scrut instanceof receiver.GT.class) {
        inlinedVal1 = true;
      } else {
        inlinedVal1 = false;
      }
      inlinedVal = ! inlinedVal1;
      if (inlinedVal === true) {
        tmp = mix(sorting2, arg$Branch$1$, arg$Branch$2$);
        tmp1 = sorting2.Branch(arg$Branch$0$1, arg$Branch$1$1, arg$Branch$2$1);
        return sorting2.Branch(arg$Branch$0$, tmp, tmp1)
      }
      tmp2 = sorting2.Branch(arg$Branch$0$, arg$Branch$1$, arg$Branch$2$);
      tmp3 = mix(sorting2, arg$Branch$1$1, arg$Branch$2$1);
      return sorting2.Branch(arg$Branch$0$1, tmp2, tmp3);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
to_tree$1 = function to_tree$(sorting2) {
  return (x, t) => {
    return to_tree1(sorting2, x, t)
  }
};
to_tree1 = function to_tree(sorting2, x, t) {
  let arg$Branch2$0$, arg$Branch2$1$, arg$Branch2$2$, arg$Twig2$0$, tmp, tmp1, tmp2, tmp3;
  if (t instanceof sorting2.Tip2.class) {
    return sorting2.Twig2(x)
  } else if (t instanceof sorting2.Twig2.class) {
    let inlinedVal, receiver, inlinedVal1, scrut;
    arg$Twig2$0$ = t.a;
    receiver = sorting2;
    scrut = sorting2[compareList$accessorSymbol](x, arg$Twig2$0$);
    if (scrut instanceof receiver.GT.class) {
      inlinedVal1 = true;
    } else {
      inlinedVal1 = false;
    }
    inlinedVal = ! inlinedVal1;
    if (inlinedVal === true) {
      tmp = sorting2.Twig2(x);
      return sorting2.Branch2(arg$Twig2$0$, tmp, sorting2.Tip2)
    }
    tmp1 = sorting2.Twig2(x);
    return sorting2.Branch2(arg$Twig2$0$, sorting2.Tip2, tmp1);
  } else if (t instanceof sorting2.Branch2.class) {
    let inlinedVal, receiver, inlinedVal1, scrut;
    arg$Branch2$0$ = t.a;
    arg$Branch2$1$ = t.l;
    arg$Branch2$2$ = t.r;
    receiver = sorting2;
    scrut = sorting2[compareList$accessorSymbol](x, arg$Branch2$0$);
    if (scrut instanceof receiver.GT.class) {
      inlinedVal1 = true;
    } else {
      inlinedVal1 = false;
    }
    inlinedVal = ! inlinedVal1;
    if (inlinedVal === true) {
      tmp2 = to_tree1(sorting2, x, arg$Branch2$1$);
      return sorting2.Branch2(arg$Branch2$0$, tmp2, arg$Branch2$2$)
    }
    tmp3 = to_tree1(sorting2, x, arg$Branch2$2$);
    return sorting2.Branch2(arg$Branch2$0$, arg$Branch2$1$, tmp3);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
mkTree1 = function mkTree(sorting2, innerparam) {
  let to_tree$here;
  to_tree$here = to_tree$1(sorting2);
  return NofibPrelude.foldr(to_tree$here, sorting2.Tip2, innerparam)
};
readTree1 = function readTree(sorting2, t) {
  let arg$Branch2$0$, arg$Branch2$1$, arg$Branch2$2$, arg$Twig2$0$, tmp, tmp1, tmp2;
  if (t instanceof sorting2.Tip2.class) {
    return NofibPrelude.Nil
  } else if (t instanceof sorting2.Twig2.class) {
    arg$Twig2$0$ = t.a;
    return NofibPrelude.Cons(arg$Twig2$0$, NofibPrelude.Nil)
  } else if (t instanceof sorting2.Branch2.class) {
    arg$Branch2$0$ = t.a;
    arg$Branch2$1$ = t.l;
    arg$Branch2$2$ = t.r;
    tmp = readTree1(sorting2, arg$Branch2$1$);
    tmp1 = readTree1(sorting2, arg$Branch2$2$);
    tmp2 = NofibPrelude.Cons(arg$Branch2$0$, tmp1);
    return NofibPrelude.append(tmp, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
to_tree$ = function to_tree$(sorting2) {
  return (x, t) => {
    return to_tree(sorting2, x, t)
  }
};
to_tree = function to_tree(sorting2, x, t) {
  let arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, tmp, tmp1;
  if (t instanceof sorting2.Tip.class) {
    return sorting2.Branch(x, sorting2.Tip, sorting2.Tip)
  } else if (t instanceof sorting2.Branch.class) {
    let inlinedVal, receiver, inlinedVal1, scrut;
    arg$Branch$0$ = t.a;
    arg$Branch$1$ = t.l;
    arg$Branch$2$ = t.r;
    receiver = sorting2;
    scrut = sorting2[compareList$accessorSymbol](x, arg$Branch$0$);
    if (scrut instanceof receiver.GT.class) {
      inlinedVal1 = true;
    } else {
      inlinedVal1 = false;
    }
    inlinedVal = ! inlinedVal1;
    if (inlinedVal === true) {
      tmp = to_tree(sorting2, x, arg$Branch$1$);
      return sorting2.Branch(arg$Branch$0$, tmp, arg$Branch$2$)
    }
    tmp1 = to_tree(sorting2, x, arg$Branch$2$);
    return sorting2.Branch(arg$Branch$0$, arg$Branch$1$, tmp1);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
mkTree = function mkTree(sorting2, innerparam) {
  let to_tree$here;
  to_tree$here = to_tree$(sorting2);
  return NofibPrelude.foldr(to_tree$here, sorting2.Tip, innerparam)
};
readTree = function readTree(sorting2, t) {
  let arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, tmp, tmp1, tmp2;
  if (t instanceof sorting2.Tip.class) {
    return NofibPrelude.Nil
  } else if (t instanceof sorting2.Branch.class) {
    arg$Branch$0$ = t.a;
    arg$Branch$1$ = t.l;
    arg$Branch$2$ = t.r;
    tmp = readTree(sorting2, arg$Branch$1$);
    tmp1 = readTree(sorting2, arg$Branch$2$);
    tmp2 = NofibPrelude.Cons(arg$Branch$0$, tmp1);
    return NofibPrelude.append(tmp, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
trins = function trins(sorting2, rev, xs, ys) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (xs instanceof NofibPrelude.Nil.class) {
      if (ys instanceof NofibPrelude.Cons.class) {
        let inlinedVal;
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        inlinedVal = r(NofibPrelude, NofibPrelude.Nil, rev);
        tmp = NofibPrelude.Cons(arg$Cons$0$1, NofibPrelude.Nil);
        tmp1 = NofibPrelude.append(inlinedVal, tmp);
        rev = NofibPrelude.Nil;
        xs = tmp1;
        ys = arg$Cons$1$1;
        continue loopLabel
      } else if (ys instanceof NofibPrelude.Nil.class) {
        let inlinedVal;
        inlinedVal = r(NofibPrelude, NofibPrelude.Nil, rev);
        return NofibPrelude.append(inlinedVal, xs)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (ys instanceof NofibPrelude.Nil.class) {
      let inlinedVal;
      inlinedVal = r(NofibPrelude, NofibPrelude.Nil, rev);
      return NofibPrelude.append(inlinedVal, xs)
    }
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (ys instanceof NofibPrelude.Cons.class) {
        let receiver, scrut;
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        receiver = sorting2;
        scrut = sorting2[compareList$accessorSymbol](arg$Cons$0$, arg$Cons$0$1);
        if (scrut instanceof receiver.LT.class) {
          tmp2 = NofibPrelude.Cons(arg$Cons$0$, rev);
          tmp3 = NofibPrelude.Cons(arg$Cons$0$1, arg$Cons$1$1);
          rev = tmp2;
          xs = arg$Cons$1$;
          ys = tmp3;
          continue loopLabel
        }
        {
          let inlinedVal;
          inlinedVal = r(NofibPrelude, NofibPrelude.Nil, rev);
          tmp4 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
          tmp5 = NofibPrelude.Cons(arg$Cons$0$1, tmp4);
          tmp6 = NofibPrelude.append(inlinedVal, tmp5);
          rev = NofibPrelude.Nil;
          xs = tmp6;
          ys = arg$Cons$1$1;
          continue loopLabel;
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
split = function split(sorting2, x, lo, hi, ys) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (ys instanceof NofibPrelude.Nil.class) {
      tmp = sorting2[quickerSort$accessorSymbol](lo);
      tmp1 = sorting2[quickerSort$accessorSymbol](hi);
      tmp2 = NofibPrelude.Cons(x, tmp1);
      return NofibPrelude.append(tmp, tmp2)
    } else if (ys instanceof NofibPrelude.Cons.class) {
      let inlinedVal, receiver, inlinedVal1, scrut;
      arg$Cons$0$ = ys.head;
      arg$Cons$1$ = ys.tail;
      receiver = sorting2;
      scrut = sorting2[compareList$accessorSymbol](arg$Cons$0$, x);
      if (scrut instanceof receiver.GT.class) {
        inlinedVal1 = true;
      } else {
        inlinedVal1 = false;
      }
      inlinedVal = ! inlinedVal1;
      if (inlinedVal === true) {
        tmp3 = NofibPrelude.Cons(arg$Cons$0$, lo);
        lo = tmp3;
        ys = arg$Cons$1$;
        continue loopLabel
      }
      tmp4 = NofibPrelude.Cons(arg$Cons$0$, hi);
      hi = tmp4;
      ys = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$2 = (undefined, function (sorting2, x) {
  return (y) => {
    return lambda4(sorting2, x, y)
  }
});
lambda4 = (undefined, function (sorting2, x, y) {
  let scrut;
  scrut = sorting2[compareList$accessorSymbol](x, y);
  if (scrut instanceof sorting2.LT.class) {
    return false
  }
  return true;
});
lambda$1 = (undefined, function (sorting2, p) {
  return (x, y) => {
    return sorting2[select$accessorSymbol](p, x, y)
  }
});
lambda3 = (undefined, function (sorting2, p, x, y) {
  return sorting2[select$accessorSymbol](p, x, y)
});
lscomp1 = function lscomp1(sorting2, x, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      let inlinedVal, receiver, inlinedVal1, scrut;
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      receiver = sorting2;
      scrut = sorting2[compareList$accessorSymbol](arg$Cons$0$, x);
      if (scrut instanceof receiver.GT.class) {
        inlinedVal1 = true;
      } else {
        inlinedVal1 = false;
      }
      inlinedVal = ! inlinedVal1;
      if (inlinedVal === true) {
        tmp = lscomp1(sorting2, x, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Cons$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp2 = function lscomp2(sorting2, x, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      let receiver, scrut;
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      receiver = sorting2;
      scrut = sorting2[compareList$accessorSymbol](arg$Cons$0$, x);
      if (scrut instanceof receiver.GT.class) {
        tmp = lscomp2(sorting2, x, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Cons$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$ = (undefined, function (sorting2) {
  return (acc, c) => {
    return lambda2(sorting2, acc, c)
  }
});
lambda2 = (undefined, function (sorting2, acc, c) {
  let tmp, inlinedVal, inlinedVal1, inlinedVal2;
  inlinedVal = runtime.safeCall(c.codePointAt(0));
  inlinedVal1 = runtime.safeCall(globalThis.BigInt(inlinedVal));
  inlinedVal2 = runtime.safeCall(globalThis.BigInt(31));
  tmp = acc * inlinedVal2;
  return inlinedVal1 + tmp
});
lambda1 = (undefined, function (l) {
  let tmp;
  tmp = NofibPrelude.Cons("\n", NofibPrelude.Nil);
  return NofibPrelude.append(l, tmp)
});
lambda = (undefined, function (x) {
  return x === "\n"
});
(class sorting {
  static {
    sorting1 = this
  }
  static get [compareList$accessorSymbol]() { return sorting.#compareList; }
  static get [prependToAll$accessorSymbol]() { return sorting.#prependToAll; }
  static get [quickSort$accessorSymbol]() { return sorting.#quickSort; }
  static get [select$accessorSymbol]() { return sorting.#select; }
  static get [quickSort2$accessorSymbol]() { return sorting.#quickSort2; }
  static get [quickerSort$accessorSymbol]() { return sorting.#quickerSort; }
  static get [insertSort$accessorSymbol]() { return sorting.#insertSort; }
  static get [treeSort$accessorSymbol]() { return sorting.#treeSort; }
  static get [treeSort2$accessorSymbol]() { return sorting.#treeSort2; }
  static get [heapSort$accessorSymbol]() { return sorting.#heapSort; }
  static get [mergeSort$accessorSymbol]() { return sorting.#mergeSort; }
  static {
    (class EQ {
      static {
        new this
      }
      constructor() {
        sorting.EQ = this;
        Object.defineProperty(this, "class", {
          value: EQ
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EQ"];
    });
    (class GT {
      static {
        new this
      }
      constructor() {
        sorting.GT = this;
        Object.defineProperty(this, "class", {
          value: GT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GT"];
    });
    (class LT {
      static {
        new this
      }
      constructor() {
        sorting.LT = this;
        Object.defineProperty(this, "class", {
          value: LT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LT"];
    });
    (class Tree {
      static {
        sorting.Tree = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Tree"];
    });
    (class Tip extends sorting.Tree {
      static {
        new this
      }
      constructor() {
        super();
        sorting.Tip = this;
        Object.defineProperty(this, "class", {
          value: Tip
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Tip"];
    });
    sorting.Branch = function Branch(a, l, r1) {
      return globalThis.Object.freeze(new Branch.class(a, l, r1));
    };
    (class Branch extends sorting.Tree {
      static {
        sorting.Branch.class = this
      }
      constructor(a, l, r1) {
        super();
        this.a = a;
        this.l = l;
        this.r = r1;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Branch", ["a", "l", "r"]];
    });
    (class Tree2 {
      static {
        sorting.Tree2 = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Tree2"];
    });
    (class Tip2 extends sorting.Tree2 {
      static {
        new this
      }
      constructor() {
        super();
        sorting.Tip2 = this;
        Object.defineProperty(this, "class", {
          value: Tip2
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Tip2"];
    });
    sorting.Twig2 = function Twig2(a) {
      return globalThis.Object.freeze(new Twig2.class(a));
    };
    (class Twig2 extends sorting.Tree2 {
      static {
        sorting.Twig2.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Twig2", ["a"]];
    });
    sorting.Branch2 = function Branch2(a, l, r1) {
      return globalThis.Object.freeze(new Branch2.class(a, l, r1));
    };
    (class Branch2 extends sorting.Tree2 {
      static {
        sorting.Branch2.class = this
      }
      constructor(a, l, r1) {
        super();
        this.a = a;
        this.l = l;
        this.r = r1;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Branch2", ["a", "l", "r"]];
    });
  }
  static #int_of_char(c) {
    return runtime.safeCall(c.codePointAt(0))
  }
  static #compareList(xs, ys) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return sorting.EQ
        } else if (ys instanceof NofibPrelude.Cons.class) {
          return sorting.LT
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Nil.class) {
          return sorting.GT
        } else if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          tmp = sorting.#int_of_char(arg$Cons$0$);
          tmp1 = sorting.#int_of_char(arg$Cons$0$1);
          scrut = tmp === tmp1;
          if (scrut === true) {
            xs = arg$Cons$1$;
            ys = arg$Cons$1$1;
            continue loopLabel
          }
          tmp2 = sorting.#int_of_char(arg$Cons$0$);
          tmp3 = sorting.#int_of_char(arg$Cons$0$1);
          scrut1 = tmp2 < tmp3;
          if (scrut1 === true) {
            return sorting.LT
          }
          return sorting.GT;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #gtList(a, b) {
    let scrut;
    scrut = sorting.#compareList(a, b);
    if (scrut instanceof sorting.GT.class) {
      return true
    }
    return false;
  }
  static #leList(a, b) {
    let tmp;
    tmp = sorting.#gtList(a, b);
    return ! tmp
  }
  static #ltList(a, b) {
    let scrut;
    scrut = sorting.#compareList(a, b);
    if (scrut instanceof sorting.LT.class) {
      return true
    }
    return false;
  }
  static #geList(a, b) {
    let tmp;
    tmp = sorting.#ltList(a, b);
    return ! tmp
  }
  static #eqList(a, b) {
    let scrut;
    scrut = sorting.#compareList(a, b);
    if (scrut instanceof sorting.EQ.class) {
      return true
    }
    return false;
  }
  static #prependToAll(sep, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = sorting.#prependToAll(sep, arg$Cons$1$);
      tmp1 = NofibPrelude.Cons(arg$Cons$0$, tmp);
      return NofibPrelude.Cons(sep, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #intersperse(sep, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = sorting.#prependToAll(sep, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lines(s) {
    let scrut, element1$, element0$, arg$Cons$1$, tmp;
    if (s instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    scrut = NofibPrelude.break_(lambda, s);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      if (element1$ instanceof NofibPrelude.Nil.class) {
        tmp = NofibPrelude.Nil;
        return NofibPrelude.Cons(element0$, tmp)
      } else if (element1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = element1$.tail;
        tmp = sorting.#lines(arg$Cons$1$);
        return NofibPrelude.Cons(element0$, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #unlines(ls) {
    let tmp;
    tmp = NofibPrelude.map(lambda1, ls);
    return NofibPrelude.concat(tmp)
  }
  static #odd(x) {
    let inlinedVal, tmp, inlinedVal1, tmp1;
    tmp1 = x / 2;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp1));
    tmp = 2 * inlinedVal1;
    inlinedVal = x - tmp;
    return inlinedVal === 0
  }
  static #z_of_int(x) {
    return runtime.safeCall(globalThis.BigInt(x))
  }
  static #hash(str) {
    let tmp;
    tmp = sorting.#z_of_int(0);
    return NofibPrelude.foldl(lambda$(sorting), tmp, str)
  }
  static #quickSort(xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = lscomp1(sorting, arg$Cons$0$, arg$Cons$1$);
      tmp1 = sorting.#quickSort(tmp);
      tmp2 = lscomp2(sorting, arg$Cons$0$, arg$Cons$1$);
      tmp3 = sorting.#quickSort(tmp2);
      tmp4 = NofibPrelude.Cons(arg$Cons$0$, tmp3);
      return NofibPrelude.append(tmp1, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #select(p, x, ts_fs) {
    let scrut, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(ts_fs) && ts_fs.length === 2) {
      element0$ = runtime.Tuple.get(ts_fs, 0);
      element1$ = runtime.Tuple.get(ts_fs, 1);
      scrut = runtime.safeCall(p(x));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(x, element0$);
        return globalThis.Object.freeze([
          tmp,
          element1$
        ])
      }
      tmp1 = NofibPrelude.Cons(x, element1$);
      return globalThis.Object.freeze([
        element0$,
        tmp1
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #partition(p, xs) {
    let tmp;
    tmp = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    return NofibPrelude.foldr(lambda$1(sorting, p), tmp, xs)
  }
  static #quickSort2(xs) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, lambda$here;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      lambda$here = lambda$2(sorting, arg$Cons$0$);
      scrut = sorting.#partition(lambda$here, arg$Cons$1$);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        tmp = sorting.#quickSort2(element0$);
        tmp1 = sorting.#quickSort2(element1$);
        tmp2 = NofibPrelude.Cons(arg$Cons$0$, tmp1);
        return NofibPrelude.append(tmp, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #quickerSort(xss) {
    let arg$Cons$0$, arg$Cons$1$;
    if (xss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xss.head;
      arg$Cons$1$ = xss.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(arg$Cons$0$, NofibPrelude.Nil)
      }
      return split(sorting, arg$Cons$0$, NofibPrelude.Nil, NofibPrelude.Nil, arg$Cons$1$);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #insertSort(xss) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xss.head;
      arg$Cons$1$ = xss.tail;
      tmp = NofibPrelude.Cons(arg$Cons$0$, NofibPrelude.Nil);
      return trins(sorting, NofibPrelude.Nil, tmp, arg$Cons$1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #treeSort(param) {
    let inlinedVal, to_tree$here;
    to_tree$here = to_tree$(sorting);
    inlinedVal = NofibPrelude.foldr(to_tree$here, sorting.Tip, param);
    return readTree(sorting, inlinedVal)
  }
  static #treeSort2(param) {
    let inlinedVal, to_tree$here;
    to_tree$here = to_tree$1(sorting);
    inlinedVal = NofibPrelude.foldr(to_tree$here, sorting.Tip2, param);
    return readTree1(sorting, inlinedVal)
  }
  static #heapSort(xs) {
    let tmp;
    tmp = heap(sorting, 0, xs);
    return clear(sorting, tmp)
  }
  static #mergeSort(param) {
    let tmp;
    tmp = runsplit(sorting, NofibPrelude.Nil, param);
    return merge_lists(sorting, tmp)
  }
  static #mangle(inpt) {
    let tmp, tmp1;
    tmp = sorting.#lines(inpt);
    tmp1 = sort(sorting, tmp);
    return sorting.#unlines(tmp1)
  }
  static #testSorting_nofib(d) {
    let tmp, tmp1, tmp2, s, inlinedVal;
    tmp = runtime.safeCall(globalThis.fs.readFileSync("./hkmc2/shared/src/test/mlscript/nofib/input/Main.hs"));
    tmp1 = runtime.safeCall(tmp.toString());
    s = tmp1;
    inlinedVal = go(NofibPrelude, s, 0);
    tmp2 = sorting.#mangle(inlinedVal);
    return sorting.#hash(tmp2)
  }
  static main() {
    return sorting.#testSorting_nofib(0)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "sorting"];
});
export { lscomp2 as _$_modulePrivate_$_lscomp2 };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { split as _$_modulePrivate_$_split };
export { trins as _$_modulePrivate_$_trins };
export { to_tree as _$_modulePrivate_$_to_tree };
export { mkTree as _$_modulePrivate_$_mkTree };
export { readTree as _$_modulePrivate_$_readTree };
export { to_tree1 as _$_modulePrivate_$_to_tree1 };
export { mkTree1 as _$_modulePrivate_$_mkTree1 };
export { readTree1 as _$_modulePrivate_$_readTree1 };
export { to_heap as _$_modulePrivate_$_to_heap };
export { clear as _$_modulePrivate_$_clear };
export { heap as _$_modulePrivate_$_heap };
export { mix as _$_modulePrivate_$_mix };
export { runsplit as _$_modulePrivate_$_runsplit };
export { merge as _$_modulePrivate_$_merge };
export { merge_lists as _$_modulePrivate_$_merge_lists };
export { sort as _$_modulePrivate_$_sort };
export { sorting1 as _$_modulePrivate_$_sorting };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda6 as _$_modulePrivate_$_lambda6 };
export { lambda7 as _$_modulePrivate_$_lambda7 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { to_tree$ as _$_modulePrivate_$_to_tree$ };
export { to_tree$1 as _$_modulePrivate_$_to_tree$1 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export default sorting1;
