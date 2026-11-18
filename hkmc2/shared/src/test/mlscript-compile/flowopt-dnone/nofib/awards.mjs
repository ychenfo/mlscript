const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const ltList$accessorSymbol = globalThis.Symbol("ltList");
const ltTup2$accessorSymbol = globalThis.Symbol("ltTup2");
const map$accessorSymbol = globalThis.Symbol("map");
const filter$accessorSymbol = globalThis.Symbol("filter");
const foldl$accessorSymbol = globalThis.Symbol("foldl");
const sum$accessorSymbol = globalThis.Symbol("sum");
const delete_$accessorSymbol = globalThis.Symbol("delete_");
let awards1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms_map$map, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms$perms, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards$awards, main_testAwards_nofib_lambda$_lambda$lambda, main_testAwards_nofib_lambda$$lambda$, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_lambda$$lambda$, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_lambda$$lambda$1, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_lambda$$lambda$2, main_testAwards_nofib_enumFromTo$enumFromTo, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms_append$xs_Cons, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms_append$xs_Nil, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Nil, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons1, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Nil1, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons2, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Nil2, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Cons, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Nil, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Cons1, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Nil1, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$scrut_Cons, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$head__tup2, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$scrut_Nil, main_testAwards_nofib_map$xs_Cons, main_testAwards_nofib_map$xs_Nil, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart1, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart2, main_testAwards_nofib_map$xs_Cons$worker, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$head__tup2$worker, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons$worker, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons$worker1, main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons$worker2;
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart(id, param0, param1, param2, param3, param4, param5) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param2
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param1.head;
            arg$Cons$1$ = param1.tail;
            if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
              return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons2(arg$Cons$0$, param2)
            }
            {
              let param2_tmp;
              param2_tmp = param2;
              param1 = arg$Cons$0$;
              param2 = arg$Cons$1$;
              param3 = NofibPrelude.Nil;
              param4 = NofibPrelude.Nil;
              param5 = param2_tmp;
              id = 1;
              continue loopLabel;
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
          if (param2 instanceof NofibPrelude.Nil.class) {
            tmp = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart(2, param0, param4, param5, undefined, undefined, undefined);
            tmp1 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons2(param1, tmp);
            param1 = param3;
            param2 = tmp1;
            id = 2;
            continue loopLabel
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param2.head;
            arg$Cons$1$ = param2.tail;
            scrut = runtime.safeCall(param0(param1, arg$Cons$0$));
            if (scrut === true) {
              tmp2 = NofibPrelude.Cons(arg$Cons$0$, param4);
              param2 = arg$Cons$1$;
              param4 = tmp2;
              id = 1;
              continue loopLabel
            }
            tmp3 = NofibPrelude.Cons(arg$Cons$0$, param3);
            param2 = arg$Cons$1$;
            param3 = tmp3;
            id = 1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 2:
        {
          let arg$Cons$0$, arg$Cons$1$;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param2
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param1.head;
            arg$Cons$1$ = param1.tail;
            if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
              return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons2(arg$Cons$0$, param2)
            }
            {
              let param2_tmp;
              param2_tmp = param2;
              param1 = arg$Cons$0$;
              param2 = arg$Cons$1$;
              param3 = NofibPrelude.Nil;
              param4 = NofibPrelude.Nil;
              param5 = param2_tmp;
              id = 3;
              continue loopLabel;
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 3:
        {
          let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
          if (param2 instanceof NofibPrelude.Nil.class) {
            tmp = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart(0, param0, param4, param5, undefined, undefined, undefined);
            tmp1 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons2(param1, tmp);
            param1 = param3;
            param2 = tmp1;
            id = 0;
            continue loopLabel
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param2.head;
            arg$Cons$1$ = param2.tail;
            scrut = runtime.safeCall(param0(arg$Cons$0$, param1));
            if (scrut === true) {
              tmp2 = NofibPrelude.Cons(arg$Cons$0$, param3);
              param2 = arg$Cons$1$;
              param3 = tmp2;
              id = 3;
              continue loopLabel
            }
            tmp3 = NofibPrelude.Cons(arg$Cons$0$, param4);
            param2 = arg$Cons$1$;
            param4 = tmp3;
            id = 3;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart1 = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart(id, param0, param1, param2, param3, param4, param5) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param2
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param1.head;
            arg$Cons$1$ = param1.tail;
            if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
              return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons1(arg$Cons$0$, param2)
            }
            {
              let param2_tmp;
              param2_tmp = param2;
              param1 = arg$Cons$0$;
              param2 = arg$Cons$1$;
              param3 = NofibPrelude.Nil;
              param4 = NofibPrelude.Nil;
              param5 = param2_tmp;
              id = 1;
              continue loopLabel;
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
          if (param2 instanceof NofibPrelude.Nil.class) {
            tmp = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart1(2, param0, param4, param5, undefined, undefined, undefined);
            tmp1 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons1(param1, tmp);
            param1 = param3;
            param2 = tmp1;
            id = 2;
            continue loopLabel
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param2.head;
            arg$Cons$1$ = param2.tail;
            scrut = runtime.safeCall(param0(param1, arg$Cons$0$));
            if (scrut === true) {
              tmp2 = NofibPrelude.Cons(arg$Cons$0$, param4);
              param2 = arg$Cons$1$;
              param4 = tmp2;
              id = 1;
              continue loopLabel
            }
            tmp3 = NofibPrelude.Cons(arg$Cons$0$, param3);
            param2 = arg$Cons$1$;
            param3 = tmp3;
            id = 1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 2:
        {
          let arg$Cons$0$, arg$Cons$1$;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param2
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param1.head;
            arg$Cons$1$ = param1.tail;
            if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
              return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons1(arg$Cons$0$, param2)
            }
            {
              let param2_tmp;
              param2_tmp = param2;
              param1 = arg$Cons$0$;
              param2 = arg$Cons$1$;
              param3 = NofibPrelude.Nil;
              param4 = NofibPrelude.Nil;
              param5 = param2_tmp;
              id = 3;
              continue loopLabel;
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 3:
        {
          let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
          if (param2 instanceof NofibPrelude.Nil.class) {
            tmp = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart1(0, param0, param4, param5, undefined, undefined, undefined);
            tmp1 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons1(param1, tmp);
            param1 = param3;
            param2 = tmp1;
            id = 0;
            continue loopLabel
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param2.head;
            arg$Cons$1$ = param2.tail;
            scrut = runtime.safeCall(param0(arg$Cons$0$, param1));
            if (scrut === true) {
              tmp2 = NofibPrelude.Cons(arg$Cons$0$, param3);
              param2 = arg$Cons$1$;
              param3 = tmp2;
              id = 3;
              continue loopLabel
            }
            tmp3 = NofibPrelude.Cons(arg$Cons$0$, param4);
            param2 = arg$Cons$1$;
            param4 = tmp3;
            id = 3;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart2 = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart(id, param0, param1, param2, param3, param4, param5) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param2
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param1.head;
            arg$Cons$1$ = param1.tail;
            if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
              return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons(arg$Cons$0$, param2)
            }
            {
              let param2_tmp;
              param2_tmp = param2;
              param1 = arg$Cons$0$;
              param2 = arg$Cons$1$;
              param3 = NofibPrelude.Nil;
              param4 = NofibPrelude.Nil;
              param5 = param2_tmp;
              id = 1;
              continue loopLabel;
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
          if (param2 instanceof NofibPrelude.Nil.class) {
            tmp = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart2(2, param0, param4, param5, undefined, undefined, undefined);
            tmp1 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons(param1, tmp);
            param1 = param3;
            param2 = tmp1;
            id = 2;
            continue loopLabel
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param2.head;
            arg$Cons$1$ = param2.tail;
            scrut = runtime.safeCall(param0(param1, arg$Cons$0$));
            if (scrut === true) {
              tmp2 = NofibPrelude.Cons(arg$Cons$0$, param4);
              param2 = arg$Cons$1$;
              param4 = tmp2;
              id = 1;
              continue loopLabel
            }
            tmp3 = NofibPrelude.Cons(arg$Cons$0$, param3);
            param2 = arg$Cons$1$;
            param3 = tmp3;
            id = 1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 2:
        {
          let arg$Cons$0$, arg$Cons$1$;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return param2
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param1.head;
            arg$Cons$1$ = param1.tail;
            if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
              return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons(arg$Cons$0$, param2)
            }
            {
              let param2_tmp;
              param2_tmp = param2;
              param1 = arg$Cons$0$;
              param2 = arg$Cons$1$;
              param3 = NofibPrelude.Nil;
              param4 = NofibPrelude.Nil;
              param5 = param2_tmp;
              id = 3;
              continue loopLabel;
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 3:
        {
          let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
          if (param2 instanceof NofibPrelude.Nil.class) {
            tmp = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart2(0, param0, param4, param5, undefined, undefined, undefined);
            tmp1 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons(param1, tmp);
            param1 = param3;
            param2 = tmp1;
            id = 0;
            continue loopLabel
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param2.head;
            arg$Cons$1$ = param2.tail;
            scrut = runtime.safeCall(param0(arg$Cons$0$, param1));
            if (scrut === true) {
              tmp2 = NofibPrelude.Cons(arg$Cons$0$, param3);
              param2 = arg$Cons$1$;
              param3 = tmp2;
              id = 3;
              continue loopLabel
            }
            tmp3 = NofibPrelude.Cons(arg$Cons$0$, param4);
            param2 = arg$Cons$1$;
            param4 = tmp3;
            id = 3;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms_map$map = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms_map$map(f, arg$Cons$1$);
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms_append$xs_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms_append$xs_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms$perms = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms$perms(m, nns) {
  let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, lambda$here;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  }
  scrut = m == 1;
  if (scrut === true) {
    return awards1[map$accessorSymbol](lambda5, nns)
  }
  if (nns instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = nns.head;
    arg$Cons$1$ = nns.tail;
    tmp = m - 1;
    tmp1 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms$perms(tmp, arg$Cons$1$);
    lambda$here = lambda$2(arg$Cons$0$);
    tmp2 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms_map$map(lambda$here, tmp1);
    tmp3 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms$perms(m, arg$Cons$1$);
    return tmp2(undefined, undefined, undefined, undefined, undefined, tmp3)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards$awards = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards$awards(scores) {
  let sumscores, tmp, lambda$here, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, f, le, r, inlinedVal5, lambda$here1, inlinedVal6, f1, le1, r1, inlinedVal7, lambda$here2, inlinedVal8, f2, le2, r2, inlinedVal9, lambda$here3;
  tmp = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms$perms(3, scores);
  lambda$here = lambda$3(awards1);
  sumscores = awards1[map$accessorSymbol](lambda$here, tmp);
  lambda$here3 = lambda$4(70);
  inlinedVal8 = awards1[filter$accessorSymbol](lambda$here3, sumscores);
  le2 = lambda$(awards1);
  r2 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Nil();
  inlinedVal9 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart2(0, le2, inlinedVal8, r2, undefined, undefined, undefined);
  f2 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_lambda$$lambda$("Gold");
  inlinedVal1 = inlinedVal9(undefined, undefined, undefined, undefined, undefined, f2, undefined);
  lambda$here2 = lambda$4(60);
  inlinedVal6 = awards1[filter$accessorSymbol](lambda$here2, sumscores);
  le1 = lambda$(awards1);
  r1 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Nil1();
  inlinedVal7 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart1(0, le1, inlinedVal6, r1, undefined, undefined, undefined);
  f1 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_lambda$$lambda$1("Silver");
  inlinedVal2 = inlinedVal7(undefined, undefined, undefined, undefined, undefined, f1, undefined);
  lambda$here1 = lambda$4(50);
  inlinedVal4 = awards1[filter$accessorSymbol](lambda$here1, sumscores);
  le = lambda$(awards1);
  r = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Nil2();
  inlinedVal5 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$qpart_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqsort_main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_sort_qsort$rqpart(0, le, inlinedVal4, r, undefined, undefined, undefined);
  f = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_lambda$$lambda$2("Bronze");
  inlinedVal3 = inlinedVal5(undefined, undefined, undefined, undefined, undefined, f, undefined);
  inlinedVal = inlinedVal2(undefined, undefined, undefined, undefined, undefined, inlinedVal3);
  return inlinedVal1(undefined, undefined, undefined, undefined, undefined, inlinedVal)
};
main_testAwards_nofib_lambda$_lambda$lambda = function main_testAwards_nofib_lambda$_lambda$lambda(awards2, x) {
  let inlinedVal, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, inlinedVal1, tmp35, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, scrut, inlinedVal6, inlinedVal7, inlinedVal8, scrut1, inlinedVal9, inlinedVal10, inlinedVal11, scrut2, inlinedVal12, inlinedVal13, scrut3;
  tmp35 = x / 100;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp35));
  tmp34 = 100 * inlinedVal1;
  inlinedVal = x - tmp34;
  tmp = NofibPrelude.Cons(21, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(34, tmp);
  tmp2 = NofibPrelude.Cons(inlinedVal, tmp1);
  tmp3 = NofibPrelude.Cons(40, tmp2);
  tmp4 = NofibPrelude.Cons(27, tmp3);
  tmp5 = NofibPrelude.Cons(35, tmp4);
  tmp6 = NofibPrelude.Cons(14, NofibPrelude.Nil);
  tmp7 = NofibPrelude.Cons(8, tmp6);
  tmp8 = NofibPrelude.Cons(5, tmp7);
  tmp9 = NofibPrelude.Cons(10, tmp8);
  tmp10 = NofibPrelude.Cons(17, tmp9);
  tmp11 = NofibPrelude.Cons(inlinedVal, tmp10);
  tmp12 = NofibPrelude.Cons(45, tmp11);
  tmp13 = NofibPrelude.Cons(19, tmp12);
  tmp14 = NofibPrelude.Cons(23, tmp13);
  tmp15 = NofibPrelude.Cons(21, NofibPrelude.Nil);
  tmp16 = NofibPrelude.Cons(16, tmp15);
  tmp17 = NofibPrelude.Cons(8, tmp16);
  tmp18 = NofibPrelude.Cons(34, tmp17);
  tmp19 = NofibPrelude.Cons(19, tmp18);
  tmp20 = NofibPrelude.Cons(21, tmp19);
  tmp21 = NofibPrelude.Cons(20, tmp20);
  tmp22 = NofibPrelude.Cons(inlinedVal, tmp21);
  tmp23 = NofibPrelude.Cons(18, tmp22);
  tmp24 = NofibPrelude.Cons(1, tmp23);
  tmp25 = NofibPrelude.Cons(14, NofibPrelude.Nil);
  tmp26 = NofibPrelude.Cons(18, tmp25);
  tmp27 = NofibPrelude.Cons(9, tmp26);
  tmp28 = NofibPrelude.Cons(41, tmp27);
  tmp29 = NofibPrelude.Cons(inlinedVal, tmp28);
  tmp30 = NofibPrelude.Cons(54, tmp29);
  tmp31 = NofibPrelude.Cons(17, tmp30);
  tmp32 = NofibPrelude.Cons(23, tmp31);
  tmp33 = NofibPrelude.Cons(9, tmp32);
  scrut = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards$awards(tmp5);
  inlinedVal5 = scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, tmp5, undefined);
  inlinedVal3 = globalThis.Object.freeze([
    "Simon",
    inlinedVal5
  ]);
  scrut1 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards$awards(tmp14);
  inlinedVal8 = scrut1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, tmp14, undefined);
  inlinedVal6 = globalThis.Object.freeze([
    "Hans",
    inlinedVal8
  ]);
  scrut2 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards$awards(tmp24);
  inlinedVal11 = scrut2(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, tmp24, undefined);
  inlinedVal9 = globalThis.Object.freeze([
    "Phil",
    inlinedVal11
  ]);
  scrut3 = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards$awards(tmp33);
  inlinedVal13 = scrut3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, tmp33, undefined);
  inlinedVal12 = globalThis.Object.freeze([
    "Kevin",
    inlinedVal13
  ]);
  inlinedVal10 = NofibPrelude.Nil;
  inlinedVal7 = NofibPrelude.Cons(inlinedVal12, inlinedVal10);
  inlinedVal4 = NofibPrelude.Cons(inlinedVal9, inlinedVal7);
  inlinedVal2 = NofibPrelude.Cons(inlinedVal6, inlinedVal4);
  return NofibPrelude.Cons(inlinedVal3, inlinedVal2)
};
main_testAwards_nofib_lambda$$lambda$ = function main_testAwards_nofib_lambda$$lambda$(awards2) {
  return (x) => {
    return main_testAwards_nofib_lambda$_lambda$lambda(awards2, x)
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_lambda$$lambda$ = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_lambda$$lambda$(name) {
  return (ps) => {
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$head__tup2(name, ps)
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_lambda$$lambda$1 = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_lambda$$lambda$(name) {
  return (ps) => {
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$head__tup2(name, ps)
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_lambda$$lambda$2 = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_lambda$$lambda$(name) {
  return (ps) => {
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$head__tup2(name, ps)
  }
};
main_testAwards_nofib_enumFromTo$enumFromTo = function main_testAwards_nofib_enumFromTo$enumFromTo(a, b) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = main_testAwards_nofib_enumFromTo$enumFromTo(tmp, b);
    return main_testAwards_nofib_map$xs_Cons(a, tmp1)
  }
  return main_testAwards_nofib_map$xs_Nil();
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms_append$xs_Cons = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms_append$xs_Nil = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_perms_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons$worker2(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons$worker2 = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Cons1(fv_tmp, inlinedVal)
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Nil = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Nil1()
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons1 = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons$worker1 = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Cons(fv_tmp, inlinedVal)
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Nil1 = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Nil()
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons2 = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons$worker = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$scrut_Cons(fv_tmp, inlinedVal)
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Nil2 = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_award_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$scrut_Nil()
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Cons = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$scrut_Cons(Cons_head, inlinedVal)
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Nil = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Cons1 = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$scrut_Cons(Cons_head, inlinedVal)
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Nil1 = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$scrut_Cons = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$scrut_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_tail_, fv_head_, fv_element0$, fv_element1$, fv_element0$1, fv_element1$1, fv_perm, fv_sum_, fv_award, fv_tmp, fv_tmp1, fv_tmp2, fv_scores, fv_tmp3) => {
    return Cons_head(fv_element0$, fv_element1$, fv_element0$1, fv_element1$1, fv_perm, fv_sum_, fv_award, fv_tmp, fv_tmp1, fv_tmp2, fv_scores, fv_tmp3)
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$head__tup2 = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$head__tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_element0$1, fv_element1$1, fv_perm, fv_sum_, fv_award, fv_tmp, fv_tmp1, fv_tmp2, fv_scores, fv_tmp3) => {
    return main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$head__tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_element0$1, fv_element1$1, fv_perm, fv_sum_, fv_award, fv_tmp, fv_tmp1, fv_tmp2, fv_scores, fv_tmp3)
  }
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$head__tup2$worker = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$head__tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_element0$1, fv_element1$1, fv_perm, fv_sum_, fv_award, fv_tmp, fv_tmp1, fv_tmp2, fv_scores, fv_tmp3) {
  if (runtime.Tuple.isArrayLike(tup2_1) && tup2_1.length === 2) {
    let inlinedVal, inlinedVal1, scrut;
    fv_element0$1 = runtime.Tuple.get(tup2_1, 0);
    fv_element1$1 = runtime.Tuple.get(tup2_1, 1);
    fv_tmp = globalThis.Object.freeze([
      fv_element0$1,
      fv_element1$1
    ]);
    fv_tmp1 = globalThis.Object.freeze([
      tup2_0,
      fv_tmp
    ]);
    inlinedVal = awards1[foldl$accessorSymbol](awards1[delete_$accessorSymbol], fv_scores, fv_element1$1);
    scrut = main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards_awards$awards(inlinedVal);
    inlinedVal1 = scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, inlinedVal, undefined);
    return NofibPrelude.Cons(fv_tmp1, inlinedVal1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$scrut_Nil = function main_testAwards_nofib_lambda$_lambda_findallawards_lambda$_lambda_findawards$scrut_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_tail_, fv_head_, fv_element0$, fv_element1$, fv_element0$1, fv_element1$1, fv_perm, fv_sum_, fv_award, fv_tmp, fv_tmp1, fv_tmp2, fv_scores, fv_tmp3) => {
    return NofibPrelude.Nil
  }
};
main_testAwards_nofib_map$xs_Cons = function main_testAwards_nofib_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testAwards_nofib_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testAwards_nofib_map$xs_Cons$worker = function main_testAwards_nofib_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testAwards_nofib_map$xs_Nil = function main_testAwards_nofib_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return NofibPrelude.Nil
  }
};
lambda$4 = (undefined, function (threshold) {
  return (caseScrut) => {
    return lambda6(threshold, caseScrut)
  }
});
lambda6 = (undefined, function (threshold, caseScrut) {
  let element0$;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    runtime.Tuple.get(caseScrut, 1);
    return element0$ >= threshold
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (awards2) {
  return (p) => {
    let tmp;
    tmp = awards2[sum$accessorSymbol](p);
    return globalThis.Object.freeze([
      tmp,
      p
    ])
  }
});
lambda$2 = (undefined, function (n) {
  return (x) => {
    return NofibPrelude.Cons(n, x)
  }
});
lambda5 = (undefined, function (x) {
  return NofibPrelude.Cons(x, NofibPrelude.Nil)
});
lambda3 = (undefined, function (a, b) {
  return a < b
});
lambda4 = (undefined, function (a, b) {
  return a > b
});
lambda$1 = (undefined, function (awards2) {
  return (a, b) => {
    return awards2[ltList$accessorSymbol](a, b, lambda3, lambda4)
  }
});
lambda1 = (undefined, function (a, b) {
  return a < b
});
lambda2 = (undefined, function (a, b) {
  return a > b
});
lambda$ = (undefined, function (awards2) {
  return (a, b) => {
    let lambda$here;
    lambda$here = lambda$1(awards2);
    return awards2[ltTup2$accessorSymbol](a, b, lambda1, lambda2, lambda$here)
  }
});
lambda = (undefined, function (x, y) {
  return x == y
});
(class awards {
  static {
    awards1 = this
  }
  static get [ltList$accessorSymbol]() { return awards.#ltList; }
  static get [ltTup2$accessorSymbol]() { return awards.#ltTup2; }
  static get [map$accessorSymbol]() { return awards.#map; }
  static get [filter$accessorSymbol]() { return awards.#filter; }
  static get [foldl$accessorSymbol]() { return awards.#foldl; }
  static get [sum$accessorSymbol]() { return awards.#sum; }
  static get [delete_$accessorSymbol]() { return awards.#delete_; }
  static #ltList(xs, ys, lt, gt) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        }
        return true;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        } else if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          scrut = runtime.safeCall(lt(arg$Cons$0$, arg$Cons$0$1));
          if (scrut === true) {
            return true
          }
          scrut1 = runtime.safeCall(gt(arg$Cons$0$, arg$Cons$0$1));
          if (scrut1 === true) {
            return false
          }
          xs = arg$Cons$1$;
          ys = arg$Cons$1$1;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #ltTup2(t1, t2, lt1, gt1, lt2) {
    let scrut, scrut1, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(t1) && t1.length === 2) {
      element0$ = runtime.Tuple.get(t1, 0);
      element1$ = runtime.Tuple.get(t1, 1);
      if (runtime.Tuple.isArrayLike(t2) && t2.length === 2) {
        element0$1 = runtime.Tuple.get(t2, 0);
        element1$1 = runtime.Tuple.get(t2, 1);
        scrut = runtime.safeCall(lt1(element0$, element0$1));
        if (scrut === true) {
          return true
        }
        scrut1 = runtime.safeCall(gt1(element0$, element0$1));
        if (scrut1 === true) {
          return false
        }
        return runtime.safeCall(lt2(element1$, element1$1));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = awards.#map(f, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #filter(f, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f(arg$Cons$0$));
        if (scrut === true) {
          tmp = awards.#filter(f, arg$Cons$1$);
          return NofibPrelude.Cons(arg$Cons$0$, tmp)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #foldl(f, a, xs) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs instanceof NofibPrelude.Nil.class) {
        return a
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        tmp = runtime.safeCall(f(a, arg$Cons$0$));
        a = tmp;
        xs = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #deleteBy(eq, x, ys) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ys instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ys instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ys.head;
      arg$Cons$1$ = ys.tail;
      scrut = runtime.safeCall(eq(x, arg$Cons$0$));
      if (scrut === true) {
        return arg$Cons$1$
      }
      tmp = awards.#deleteBy(eq, x, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sum(xs) {
    let xs1, a, inlinedVal;
    xs1 = xs;
    a = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp;
        if (xs1 instanceof NofibPrelude.Nil.class) {
          inlinedVal = a;
          break inlinedLbl
        } else if (xs1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = xs1.head;
          arg$Cons$1$ = xs1.tail;
          tmp = a + arg$Cons$0$;
          xs1 = arg$Cons$1$;
          a = tmp;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal
  }
  static #delete_(xs, e) {
    return awards.#deleteBy(lambda, e, xs)
  }
  static main() {
    let tmp, f;
    tmp = main_testAwards_nofib_enumFromTo$enumFromTo(1, 100);
    f = main_testAwards_nofib_lambda$$lambda$(awards1);
    return tmp(undefined, undefined, undefined, undefined, undefined, f, undefined)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "awards"];
});
export default awards1;
