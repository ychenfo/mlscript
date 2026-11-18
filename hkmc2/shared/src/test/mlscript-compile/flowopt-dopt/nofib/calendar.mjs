const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const listLen$accessorSymbol = globalThis.Symbol("listLen");
const leave$accessorSymbol = globalThis.Symbol("leave");
const take$accessorSymbol = globalThis.Symbol("take");
const append$accessorSymbol = globalThis.Symbol("append");
const foldr1$accessorSymbol = globalThis.Symbol("foldr1");
const zipWith$accessorSymbol = globalThis.Symbol("zipWith");
const replicate$accessorSymbol = globalThis.Symbol("replicate");
const spread$accessorSymbol = globalThis.Symbol("spread");
const leap$accessorSymbol = globalThis.Symbol("leap");
const jan1st$accessorSymbol = globalThis.Symbol("jan1st");
let calendar1, lambda, lambda1, lambda$, lambda$1, lambda$2, main_testCalendar_nofib_lambda$_lambda$lambda, main_testCalendar_nofib_lambda$$lambda$, main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_space_replicate$replicate, main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$zipWith, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda$lambda, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$$lambda$, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_space_replicate$replicate, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda$lambda, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$$lambda$, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop, main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate, main_testCalendar_nofib_lambda$_lambda_cal_unlines_map$map, main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda_append$append, main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda$lambda, main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$$lambda$, main_testCalendar_nofib_enumFromTo$enumFromTo, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_dflt, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Nil, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Nil, main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Nil, main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt, main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_dflt, main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil, main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3, main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Cons, main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Nil, main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Nil, main_testCalendar_nofib_map$xs_Nil, main_concat$ls_Cons, main_concat_append$xs_Cons$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Cons$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Cons$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons$worker, main_testCalendar_nofib_enumFromTo$enumFromTo$worker, main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_space_replicate$replicate$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop$worker, main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_space_replicate$replicate$worker;
main_testCalendar_nofib_lambda$_lambda$lambda = function main_testCalendar_nofib_lambda$_lambda$lambda(x) {
  let daynames, tmp, tmp1, inlinedVal, m, tmp2, tmp3, tmp4, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, tmp5, f, inlinedVal5, xs, inlinedVal6, tmp6, scrut, tmp7, Cons_tail, Cons_tail1, Cons_tail2, Cons_tail3, scrut1, tmp8, Cons_tail4, Cons_tail5, Cons_tail6, Cons_tail7, Cons_tail8, Cons_tail9, Cons_tail10, Cons_tail11, Cons_tail12, Cons_tail13, Cons_tail14, Cons_tail15, arg$Cons$0$, arg$Cons$1$, tmp9, f1, inlinedVal7, inlinedVal8, lambda$here, tmp10, lambda$here1, fv_tmp, inlinedVal9, fv_tmp1, inlinedVal10, fv_tmp2, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, tmp11, inlinedVal17, tmp12, inlinedVal18, inlinedVal19, tmp13, inlinedVal20, tmp14, inlinedVal21, inlinedVal22, tmp15, inlinedVal23, tmp16, inlinedVal24, inlinedVal25, tmp17, inlinedVal26, tmp18, inlinedVal27, inlinedVal28, inlinedVal29, tmp19, inlinedVal30, tmp20, inlinedVal31, inlinedVal32, inlinedVal33, tmp21, inlinedVal34, tmp22, inlinedVal35, inlinedVal36, inlinedVal37, tmp23, inlinedVal38, tmp24;
  fv_tmp = undefined;
  fv_tmp = calendar1[replicate$accessorSymbol](2, " ");
  inlinedVal9 = calendar1[replicate$accessorSymbol](8, fv_tmp);
  fv_tmp1 = undefined;
  fv_tmp1 = calendar1[replicate$accessorSymbol](25, " ");
  inlinedVal10 = calendar1[replicate$accessorSymbol](1, fv_tmp1);
  tmp = NofibPrelude.nofibStringToList(" Su Mo Tu We Th Fr Sa");
  daynames = NofibPrelude.Cons(tmp, NofibPrelude.Nil);
  inlinedVal = x + "";
  tmp1 = NofibPrelude.nofibStringToList(inlinedVal);
  tmp2 = calendar1[listLen$accessorSymbol](tmp1);
  m = 75 - tmp2;
  tmp5 = m / 2;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp5));
  inlinedVal2 = main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_space_replicate$replicate(inlinedVal1, " ");
  tmp3 = m - inlinedVal1;
  inlinedVal3 = calendar1[replicate$accessorSymbol](tmp3, " ");
  tmp4 = calendar1[append$accessorSymbol](tmp1, inlinedVal3);
  inlinedVal4 = inlinedVal2(tmp4);
  fv_tmp2 = undefined;
  fv_tmp2 = calendar1[replicate$accessorSymbol](75, " ");
  inlinedVal11 = main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate(1, fv_tmp2);
  tmp6 = calendar1[jan1st$accessorSymbol](x);
  scrut = calendar1[leap$accessorSymbol](x);
  if (scrut === true) {
    tmp7 = 29;
  } else {
    tmp7 = 28;
  }
  Cons_tail = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Nil();
  Cons_tail1 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Cons(31, Cons_tail);
  Cons_tail2 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Cons(30, Cons_tail1);
  Cons_tail3 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Cons(31, Cons_tail2);
  inlinedVal14 = tmp6 + 31;
  inlinedVal15 = inlinedVal14 + tmp7;
  inlinedVal18 = inlinedVal15 + 31;
  inlinedVal21 = inlinedVal18 + 30;
  inlinedVal24 = inlinedVal21 + 31;
  inlinedVal27 = inlinedVal24 + 30;
  inlinedVal31 = inlinedVal27 + 31;
  inlinedVal36 = inlinedVal31 + 31;
  inlinedVal35 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Cons(30, Cons_tail3)(undefined, lambda1, inlinedVal36);
  tmp12 = tmp6 / 7;
  inlinedVal17 = runtime.safeCall(globalThis.Math.floor(tmp12));
  tmp11 = 7 * inlinedVal17;
  inlinedVal16 = tmp6 - tmp11;
  tmp14 = inlinedVal14 / 7;
  inlinedVal20 = runtime.safeCall(globalThis.Math.floor(tmp14));
  tmp13 = 7 * inlinedVal20;
  inlinedVal19 = inlinedVal14 - tmp13;
  tmp16 = inlinedVal15 / 7;
  inlinedVal23 = runtime.safeCall(globalThis.Math.floor(tmp16));
  tmp15 = 7 * inlinedVal23;
  inlinedVal22 = inlinedVal15 - tmp15;
  tmp18 = inlinedVal18 / 7;
  inlinedVal26 = runtime.safeCall(globalThis.Math.floor(tmp18));
  tmp17 = 7 * inlinedVal26;
  inlinedVal25 = inlinedVal18 - tmp17;
  tmp20 = inlinedVal21 / 7;
  inlinedVal30 = runtime.safeCall(globalThis.Math.floor(tmp20));
  tmp19 = 7 * inlinedVal30;
  inlinedVal28 = inlinedVal21 - tmp19;
  tmp22 = inlinedVal24 / 7;
  inlinedVal34 = runtime.safeCall(globalThis.Math.floor(tmp22));
  tmp21 = 7 * inlinedVal34;
  inlinedVal32 = inlinedVal24 - tmp21;
  tmp24 = inlinedVal27 / 7;
  inlinedVal38 = runtime.safeCall(globalThis.Math.floor(tmp24));
  tmp23 = 7 * inlinedVal38;
  inlinedVal37 = inlinedVal27 - tmp23;
  inlinedVal33 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Cons(inlinedVal31, inlinedVal35)(undefined, lambda);
  inlinedVal29 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal37, inlinedVal33);
  scrut1 = calendar1[leap$accessorSymbol](x);
  if (scrut1 === true) {
    tmp8 = 29;
  } else {
    tmp8 = 28;
  }
  Cons_tail4 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_dflt();
  Cons_tail5 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail4);
  Cons_tail6 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(30, Cons_tail5);
  Cons_tail7 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail6);
  Cons_tail8 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(30, Cons_tail7);
  Cons_tail9 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail8);
  Cons_tail10 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail9);
  Cons_tail11 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(30, Cons_tail10);
  Cons_tail12 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail11);
  Cons_tail13 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(30, Cons_tail12);
  Cons_tail14 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail13);
  Cons_tail15 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(tmp8, Cons_tail14);
  xs = calendar1.monthNames;
  if (xs instanceof NofibPrelude.Cons.class) {
    let eta$0$12, inlinedVal39;
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    eta$0$12 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail15);
    if (false === true) {
      inlinedVal39 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt()(arg$Cons$0$, arg$Cons$1$, eta$0$12);
    } else {
      let Cons_head, inlinedVal40, arg$Cons$0$1, arg$Cons$1$1;
      if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
        let eta$0$121, inlinedVal41;
        arg$Cons$0$1 = arg$Cons$1$.head;
        arg$Cons$1$1 = arg$Cons$1$.tail;
        eta$0$121 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(tmp8, Cons_tail14);
        if (false === true) {
          inlinedVal41 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt()(arg$Cons$0$1, arg$Cons$1$1, eta$0$121);
        } else {
          let Cons_head1, inlinedVal42, arg$Cons$0$2, arg$Cons$1$2;
          if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
            let eta$0$122, inlinedVal43;
            arg$Cons$0$2 = arg$Cons$1$1.head;
            arg$Cons$1$2 = arg$Cons$1$1.tail;
            eta$0$122 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail13);
            if (false === true) {
              inlinedVal43 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt()(arg$Cons$0$2, arg$Cons$1$2, eta$0$122);
            } else {
              let Cons_head2, inlinedVal44, arg$Cons$0$3, arg$Cons$1$3;
              if (arg$Cons$1$2 instanceof NofibPrelude.Cons.class) {
                let eta$0$123, inlinedVal45;
                arg$Cons$0$3 = arg$Cons$1$2.head;
                arg$Cons$1$3 = arg$Cons$1$2.tail;
                eta$0$123 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(30, Cons_tail12);
                if (false === true) {
                  inlinedVal45 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt()(arg$Cons$0$3, arg$Cons$1$3, eta$0$123);
                } else {
                  let Cons_head3, inlinedVal46, arg$Cons$0$4, arg$Cons$1$4;
                  if (arg$Cons$1$3 instanceof NofibPrelude.Cons.class) {
                    let Cons_tail16, eta$0$124, inlinedVal47, Cons_head4, Cons_tail17, fv_scrut, fv_n, fv_tmp3, eta$0$9, eta$0$11, eta$0$125, inlinedVal48;
                    arg$Cons$0$4 = arg$Cons$1$3.head;
                    arg$Cons$1$4 = arg$Cons$1$3.tail;
                    Cons_tail16 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal32, inlinedVal29);
                    eta$0$124 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail11);
                    Cons_head4 = inlinedVal28;
                    Cons_tail17 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal32, inlinedVal29);
                    fv_scrut = undefined;
                    fv_n = 8;
                    fv_tmp3 = undefined;
                    eta$0$9 = arg$Cons$0$4;
                    eta$0$11 = arg$Cons$1$4;
                    eta$0$125 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail11);
                    fv_scrut = false;
                    if (false === true) {
                      inlinedVal48 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt()(arg$Cons$0$4, arg$Cons$1$4, eta$0$125);
                    } else {
                      let inlinedVal49, Cons_head5, Cons_tail18, fv_x, fv_y, fv_xs, fv_ys, inlinedVal50;
                      fv_tmp3 = 7;
                      inlinedVal49 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal32, inlinedVal29)(undefined, 7, undefined);
                      Cons_head5 = 31;
                      Cons_tail18 = Cons_tail11;
                      fv_x = arg$Cons$0$4;
                      fv_y = inlinedVal28;
                      fv_xs = arg$Cons$1$4;
                      fv_ys = inlinedVal49;
                      inlinedLbl: {
                        inlinedVal50 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons$worker(Cons_head5, Cons_tail18, fv_x, fv_y, fv_xs, fv_ys);
                        break inlinedLbl;
                      }
                      inlinedVal48 = inlinedVal50;
                    }
                    inlinedVal47 = inlinedVal48;
                    inlinedVal46 = inlinedVal48;
                  } else {
                    inlinedVal46 = main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil();
                  }
                  Cons_head3 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3(arg$Cons$0$3, inlinedVal25, 30);
                  inlinedVal45 = main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons(Cons_head3, inlinedVal46);
                }
                inlinedVal44 = inlinedVal45;
              } else {
                inlinedVal44 = main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil();
              }
              Cons_head2 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3(arg$Cons$0$2, inlinedVal22, 31);
              inlinedVal43 = main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons(Cons_head2, inlinedVal44);
            }
            inlinedVal42 = inlinedVal43;
          } else {
            inlinedVal42 = main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil();
          }
          Cons_head1 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3(arg$Cons$0$1, inlinedVal19, tmp8);
          inlinedVal41 = main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons(Cons_head1, inlinedVal42);
        }
        inlinedVal40 = inlinedVal41;
      } else {
        inlinedVal40 = main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil();
      }
      Cons_head = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3(arg$Cons$0$, inlinedVal16, 31);
      inlinedVal39 = main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons(Cons_head, inlinedVal40);
    }
    inlinedVal6 = inlinedVal39;
  } else {
    inlinedVal6 = main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil();
  }
  f = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$$lambda$(calendar1, inlinedVal9, inlinedVal10, daynames);
  inlinedVal5 = inlinedVal6(undefined, f);
  tmp9 = main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop(3, inlinedVal5);
  f1 = calendar1[spread$accessorSymbol];
  inlinedVal7 = tmp9(undefined, f1);
  lambda$here = lambda$(calendar1);
  inlinedVal8 = calendar1[foldr1$accessorSymbol](lambda$here, inlinedVal7);
  inlinedVal13 = inlinedVal11(inlinedVal8);
  inlinedVal12 = NofibPrelude.Cons(inlinedVal4, inlinedVal13);
  lambda$here1 = main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$$lambda$();
  tmp10 = main_testCalendar_nofib_lambda$_lambda_cal_unlines_map$map(lambda$here1, inlinedVal12);
  return tmp10()
};
main_testCalendar_nofib_lambda$$lambda$ = function main_testCalendar_nofib_lambda$$lambda$() {
  return (x) => {
    return main_testCalendar_nofib_lambda$_lambda$lambda(x)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_space_replicate$replicate = function main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_space_replicate$replicate(n, x) {
  return (eta$0$0) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_space_replicate$replicate$worker(n, x, eta$0$0)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_space_replicate$replicate$worker = function main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_space_replicate$replicate$worker(n, x, eta$0$0) {
  let scrut, tmp;
  scrut = n == 0;
  if (scrut === true) {
    return eta$0$0
  }
  {
    let inlinedVal;
    tmp = n - 1;
    inlinedVal = main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_space_replicate$replicate$worker(tmp, x, eta$0$0);
    return NofibPrelude.Cons(x, inlinedVal);
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop = function main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop(n, xs) {
  return (eta$0$4, eta$0$5) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop$worker(n, xs, eta$0$4, eta$0$5)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop$worker(n, xs, eta$0$4, eta$0$5) {
  let tmp, tmp1;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  }
  {
    let fv_tmp, inlinedVal;
    tmp = calendar1[take$accessorSymbol](n, xs);
    tmp1 = calendar1[leave$accessorSymbol](n, xs);
    fv_tmp = eta$0$4;
    fv_tmp = runtime.safeCall(eta$0$5(tmp));
    inlinedVal = main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop$worker(n, tmp1, undefined, eta$0$5);
    return NofibPrelude.Cons(fv_tmp, inlinedVal);
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$zipWith = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$zipWith(f, xss, yss) {
  let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
  if (xss instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xss.head;
    arg$Cons$1$ = xss.tail;
    if (yss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$1 = yss.head;
      arg$Cons$1$1 = yss.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$, arg$Cons$0$1));
      tmp1 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$zipWith(f, arg$Cons$1$, arg$Cons$1$1);
      return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons(tmp, tmp1)
    }
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_dflt();
  }
  return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_dflt();
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda$lambda = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda$lambda(calendar2, side, end, daynames, x) {
  let inlinedVal, tmp, f, inlinedVal1;
  inlinedVal = x(calendar2, daynames);
  tmp = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$zipWith(calendar2[append$accessorSymbol], side, inlinedVal);
  f = calendar2[append$accessorSymbol];
  inlinedVal1 = tmp(side, undefined, undefined, undefined, f);
  return inlinedVal1(end)
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$$lambda$ = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$$lambda$(calendar2, side, end, daynames) {
  return (x) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda$lambda(calendar2, side, end, daynames, x)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate(n, x) {
  return (eta$0$0) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate$worker(n, x, eta$0$0)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate$worker(n, x, eta$0$0) {
  let scrut, tmp;
  scrut = n == 0;
  if (scrut === true) {
    return eta$0$0
  }
  {
    let inlinedVal;
    tmp = n - 1;
    inlinedVal = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate$worker(tmp, x, eta$0$0);
    return NofibPrelude.Cons(x, inlinedVal);
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_space_replicate$replicate = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_space_replicate$replicate(n, x) {
  return (eta$0$5) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_space_replicate$replicate$worker(n, x, eta$0$5)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_space_replicate$replicate$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_space_replicate$replicate$worker(n, x, eta$0$5) {
  let scrut, tmp;
  scrut = n == 0;
  if (scrut === true) {
    return eta$0$5
  }
  {
    let inlinedVal;
    tmp = n - 1;
    inlinedVal = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_space_replicate$replicate$worker(tmp, x, eta$0$5);
    return NofibPrelude.Cons(x, inlinedVal);
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda$lambda = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda$lambda(ml, d) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = d < 1;
  if (tmp === false) {
    tmp1 = ml < d;
    if (tmp1 === true) {
      tmp2 = NofibPrelude.nofibStringToList("   ");
      return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
    }
    {
      let inlinedVal, tmp4, tmp5, inlinedVal1, inlinedVal2;
      inlinedVal = d + "";
      tmp3 = NofibPrelude.nofibStringToList(inlinedVal);
      tmp4 = calendar1[listLen$accessorSymbol](tmp3);
      tmp5 = 3 - tmp4;
      inlinedVal1 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_space_replicate$replicate(tmp5, " ");
      inlinedVal2 = inlinedVal1(tmp3);
      return NofibPrelude.Cons(inlinedVal2, NofibPrelude.Nil);
    }
  }
  tmp1 = true;
  tmp2 = NofibPrelude.nofibStringToList("   ");
  return NofibPrelude.Cons(tmp2, NofibPrelude.Nil);
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$$lambda$ = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$$lambda$(ml) {
  return (d) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda$lambda(ml, d)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo(a, b) {
  return (eta$0$4, eta$0$5) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$5)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$5) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = a + 1;
    fv_tmp = eta$0$4;
    fv_tmp = runtime.safeCall(eta$0$5(a));
    inlinedVal = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo$worker(tmp, b, undefined, eta$0$5);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return NofibPrelude.Nil;
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop(n, xs) {
  return (eta$0$4, eta$0$5) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop$worker(n, xs, eta$0$4, eta$0$5)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop$worker(n, xs, eta$0$4, eta$0$5) {
  let tmp, tmp1;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  }
  {
    let fv_tmp, inlinedVal;
    tmp = calendar1[take$accessorSymbol](n, xs);
    tmp1 = calendar1[leave$accessorSymbol](n, xs);
    fv_tmp = eta$0$4;
    fv_tmp = runtime.safeCall(eta$0$5(tmp));
    inlinedVal = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop$worker(n, tmp1, undefined, eta$0$5);
    return NofibPrelude.Cons(fv_tmp, inlinedVal);
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate = function main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate(n, x) {
  return (eta$0$5) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate$worker(n, x, eta$0$5)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate$worker = function main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate$worker(n, x, eta$0$5) {
  let scrut, tmp;
  scrut = n == 0;
  if (scrut === true) {
    return eta$0$5
  }
  {
    let inlinedVal;
    tmp = n - 1;
    inlinedVal = main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate$worker(tmp, x, eta$0$5);
    return NofibPrelude.Cons(x, inlinedVal);
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_unlines_map$map = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCalendar_nofib_lambda$_lambda_cal_unlines_map$map(f, arg$Cons$1$);
    return main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda_append$append = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda_append$append(arg$Cons$1$, ys);
    return main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda$lambda = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda$lambda(x) {
  let tmp, Cons_tail;
  Cons_tail = main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Nil();
  tmp = main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Cons("\n", Cons_tail);
  return main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda_append$append(x, tmp)
};
main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$$lambda$ = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$$lambda$() {
  return (x) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda$lambda(x)
  }
};
main_testCalendar_nofib_enumFromTo$enumFromTo = function main_testCalendar_nofib_enumFromTo$enumFromTo(a, b) {
  return (eta$0$4, eta$0$5) => {
    return main_testCalendar_nofib_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$5)
  }
};
main_testCalendar_nofib_enumFromTo$enumFromTo$worker = function main_testCalendar_nofib_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$5) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = a + 1;
    fv_tmp = eta$0$4;
    fv_tmp = runtime.safeCall(eta$0$5(a));
    inlinedVal = main_testCalendar_nofib_enumFromTo$enumFromTo$worker(tmp, b, undefined, eta$0$5);
    return main_concat$ls_Cons(fv_tmp, inlinedVal)
  }
  return main_testCalendar_nofib_map$xs_Nil()(eta$0$4, eta$0$5);
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_dflt = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_dflt() {
  return (fv_yss, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_tmp, fv_f) => {
    return (eta$0$0) => {
      return eta$0$0
    }
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons(Cons_head, Cons_tail) {
  return (fv_yss, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_tmp, fv_f) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons$worker(Cons_head, Cons_tail, fv_yss, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_tmp, fv_f)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons$worker(Cons_head, Cons_tail, fv_yss, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_tmp, fv_f) {
  if (fv_yss instanceof NofibPrelude.Cons.class) {
    let inlinedVal;
    fv_arg$Cons$0$ = fv_yss.head;
    fv_arg$Cons$1$ = fv_yss.tail;
    fv_tmp = runtime.safeCall(fv_f(Cons_head, fv_arg$Cons$0$));
    inlinedVal = Cons_tail(fv_arg$Cons$1$, undefined, undefined, undefined, fv_f);
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Cons(fv_tmp, inlinedVal)
  }
  return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Nil();
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Nil() {
  return (fv_ys) => {
    return fv_ys
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(Cons_head, Cons_tail) {
  return (fv_scrut, fv_n, fv_tmp) => {
    return (eta$0$9, eta$0$11, eta$0$12) => {
      return main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_n, fv_tmp, eta$0$9, eta$0$11, eta$0$12)
    }
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_n, fv_tmp, eta$0$9, eta$0$11, eta$0$12) {
  fv_scrut = fv_n <= 0;
  if (fv_scrut === true) {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt()(eta$0$9, eta$0$11, eta$0$12)
  }
  {
    let inlinedVal;
    fv_tmp = fv_n - 1;
    inlinedVal = Cons_tail(undefined, fv_tmp, undefined);
    return eta$0$12(eta$0$9, Cons_head, eta$0$11, inlinedVal);
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return (eta$0$4, eta$0$5, eta$0$6) => {
      return (eta$1$9, eta$1$11, eta$1$12) => {
        return main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f, eta$0$4, eta$0$5, eta$0$6, eta$1$9, eta$1$11, eta$1$12)
      }
    }
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Cons$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f, eta$0$4, eta$0$5, eta$0$6, eta$1$9, eta$1$11, eta$1$12) {
  let inlinedVal, fv_scrut, fv_tmp1;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  fv_scrut = eta$0$4;
  fv_tmp1 = eta$0$6;
  fv_scrut = eta$0$5 <= 0;
  if (fv_scrut === true) {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt()(eta$1$9, eta$1$11, eta$1$12)
  }
  {
    let inlinedVal1;
    fv_tmp1 = eta$0$5 - 1;
    inlinedVal1 = inlinedVal(undefined, fv_tmp1, undefined);
    return eta$1$12(eta$1$9, fv_tmp, eta$1$11, inlinedVal1);
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Nil() {
  return (fv_tmp, fv_f) => {
    return (eta$0$4, eta$0$5, eta$0$6) => {
      return (eta$1$9, eta$1$11, eta$1$12) => {
        return (eta$2$4, eta$2$5) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f, fv_q) => {
    return (eta$0$4, eta$0$5) => {
      return (eta$1$4, eta$1$5, eta$1$6) => {
        return (eta$2$9, eta$2$11, eta$2$12) => {
          return main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f, fv_q, eta$0$4, eta$0$5, eta$1$4, eta$1$5, eta$1$6, eta$2$9, eta$2$11, eta$2$12)
        }
      }
    }
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Cons$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f, fv_q, eta$0$4, eta$0$5, eta$1$4, eta$1$5, eta$1$6, eta$2$9, eta$2$11, eta$2$12) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(fv_q, Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f, fv_tmp);
  return main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Cons$worker(fv_q, inlinedVal, eta$0$4, eta$0$5, eta$1$4, eta$1$5, eta$1$6, eta$2$9, eta$2$11, eta$2$12)
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_scanl$ls_Nil() {
  return (fv_tmp, fv_f, fv_q) => {
    return (eta$0$4, eta$0$5) => {
      return (eta$1$4, eta$1$5, eta$1$6) => {
        return (eta$2$9, eta$2$11, eta$2$12) => {
          let Cons_tail;
          Cons_tail = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Nil();
          return main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_map$xs_Cons$worker(fv_q, Cons_tail, eta$0$4, eta$0$5, eta$1$4, eta$1$5, eta$1$6, eta$2$9, eta$2$11, eta$2$12)
        }
      }
    }
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt() {
  return (fv_x, fv_xs, fv_zs) => {
    return (eta$0$4, eta$0$5) => {
      return NofibPrelude.Nil
    }
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(Cons_head, Cons_tail) {
  return (fv_x, fv_y, fv_xs, fv_ys) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons$worker(Cons_head, Cons_tail, fv_x, fv_y, fv_xs, fv_ys)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons$worker(Cons_head, Cons_tail, fv_x, fv_y, fv_xs, fv_ys) {
  let Cons_head1, inlinedVal, arg$Cons$0$, arg$Cons$1$;
  if (fv_xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = fv_xs.head;
    arg$Cons$1$ = fv_xs.tail;
    inlinedVal = fv_ys(arg$Cons$0$, arg$Cons$1$, Cons_tail);
  } else {
    inlinedVal = main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil();
  }
  Cons_head1 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3(fv_x, fv_y, Cons_head);
  return main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons(Cons_head1, inlinedVal)
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_dflt = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_dflt() {
  return (fv_x, fv_y, fv_xs, fv_ys) => {
    return (eta$0$4, eta$0$5) => {
      return NofibPrelude.Nil
    }
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil() {
  return (fv_tmp, fv_f) => {
    return NofibPrelude.Nil
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3 = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_calendar, fv_daynames) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3$worker(tup3_0, tup3_1, tup3_2, fv_calendar, fv_daynames)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3$worker(tup3_0, tup3_1, tup3_2, fv_calendar, fv_daynames) {
  let inlinedVal, tmp, tmp1, tmp2, f, inlinedVal1, tmp3, f1, inlinedVal2, inlinedVal3, lambda$here, m, tmp4, tmp5, tmp6, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, tmp7;
  tmp4 = calendar1[listLen$accessorSymbol](tup3_0);
  m = 21 - tmp4;
  tmp7 = m / 2;
  inlinedVal4 = runtime.safeCall(globalThis.Math.floor(tmp7));
  inlinedVal5 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate(inlinedVal4, " ");
  tmp5 = m - inlinedVal4;
  inlinedVal6 = calendar1[replicate$accessorSymbol](tmp5, " ");
  tmp6 = calendar1[append$accessorSymbol](tup3_0, inlinedVal6);
  inlinedVal7 = inlinedVal5(tmp6);
  tmp = 1 - tup3_1;
  tmp1 = 42 - tup3_1;
  tmp2 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo(tmp, tmp1);
  f = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$$lambda$(tup3_2);
  inlinedVal1 = tmp2(undefined, f);
  tmp3 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop(7, inlinedVal1);
  f1 = calendar1[spread$accessorSymbol];
  inlinedVal2 = tmp3(undefined, f1);
  lambda$here = lambda$(calendar1);
  inlinedVal3 = calendar1[foldr1$accessorSymbol](lambda$here, inlinedVal2);
  inlinedVal = fv_calendar[append$accessorSymbol](fv_daynames, inlinedVal3);
  return NofibPrelude.Cons(inlinedVal7, inlinedVal)
};
main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Cons(Cons_head, Cons_tail) {
  return () => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5) => {
      let inlinedVal;
      inlinedVal = Cons_tail();
      return Cons_head(inlinedVal)(eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5)
    }
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Nil() {
  return () => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5) => {
      return eta$0$0
    }
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5) => {
      let inlinedVal;
      inlinedVal = Cons_tail(fv_ys);
      return main_concat_append$xs_Cons$worker(Cons_head, inlinedVal, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5)
    }
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Nil() {
  return (fv_ys) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5) => {
      return fv_ys(eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5)
    }
  }
};
main_testCalendar_nofib_map$xs_Nil = function main_testCalendar_nofib_map$xs_Nil() {
  return (fv_tmp, fv_f) => {
    return () => {
      return NofibPrelude.Nil
    }
  }
};
main_concat$ls_Cons = function main_concat$ls_Cons(Cons_head, Cons_tail) {
  return () => {
    let inlinedVal;
    inlinedVal = Cons_tail();
    return Cons_head(inlinedVal, undefined, undefined, undefined, undefined, undefined)
  }
};
main_concat_append$xs_Cons$worker = function main_concat_append$xs_Cons$worker(Cons_head, Cons_tail, fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) {
  let inlinedVal;
  fv_arg$Cons$0$ = Cons_head;
  fv_arg$Cons$1$ = Cons_tail;
  fv_xs = Cons_tail;
  fv_x = Cons_head;
  inlinedVal = Cons_tail(fv_ys, undefined, undefined, undefined, undefined, undefined);
  fv_tmp = inlinedVal;
  return NofibPrelude.Cons(Cons_head, inlinedVal)
};
lambda = (undefined, function (x) {
  let tmp, inlinedVal, tmp1;
  tmp1 = x / 7;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp = 7 * inlinedVal;
  return x - tmp
});
lambda1 = (undefined, function (a, b) {
  return a + b
});
lambda$2 = (undefined, function (calendar2) {
  return (a, b) => {
    return calendar2[append$accessorSymbol](a, b)
  }
});
lambda$1 = (undefined, function (calendar2) {
  return (a, b) => {
    let lambda$here;
    lambda$here = lambda$2(calendar2);
    return calendar2[zipWith$accessorSymbol](lambda$here, a, b)
  }
});
lambda$ = (undefined, function (calendar2) {
  return (a, b) => {
    return calendar2[append$accessorSymbol](a, b)
  }
});
(class calendar {
  static {
    calendar1 = this
  }
  static get [listLen$accessorSymbol]() { return calendar.#listLen; }
  static get [leave$accessorSymbol]() { return calendar.#leave; }
  static get [take$accessorSymbol]() { return calendar.#take; }
  static get [append$accessorSymbol]() { return calendar.#append; }
  static get [foldr1$accessorSymbol]() { return calendar.#foldr1; }
  static get [zipWith$accessorSymbol]() { return calendar.#zipWith; }
  static get [replicate$accessorSymbol]() { return calendar.#replicate; }
  static get [spread$accessorSymbol]() { return calendar.#spread; }
  static get [leap$accessorSymbol]() { return calendar.#leap; }
  static get [jan1st$accessorSymbol]() { return calendar.#jan1st; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23;
    tmp = NofibPrelude.nofibStringToList("January");
    tmp1 = NofibPrelude.nofibStringToList("February");
    tmp2 = NofibPrelude.nofibStringToList("March");
    tmp3 = NofibPrelude.nofibStringToList("April");
    tmp4 = NofibPrelude.nofibStringToList("May");
    tmp5 = NofibPrelude.nofibStringToList("June");
    tmp6 = NofibPrelude.nofibStringToList("July");
    tmp7 = NofibPrelude.nofibStringToList("August");
    tmp8 = NofibPrelude.nofibStringToList("September");
    tmp9 = NofibPrelude.nofibStringToList("October");
    tmp10 = NofibPrelude.nofibStringToList("November");
    tmp11 = NofibPrelude.nofibStringToList("December");
    tmp12 = NofibPrelude.Cons(tmp11, NofibPrelude.Nil);
    tmp13 = NofibPrelude.Cons(tmp10, tmp12);
    tmp14 = NofibPrelude.Cons(tmp9, tmp13);
    tmp15 = NofibPrelude.Cons(tmp8, tmp14);
    tmp16 = NofibPrelude.Cons(tmp7, tmp15);
    tmp17 = NofibPrelude.Cons(tmp6, tmp16);
    tmp18 = NofibPrelude.Cons(tmp5, tmp17);
    tmp19 = NofibPrelude.Cons(tmp4, tmp18);
    tmp20 = NofibPrelude.Cons(tmp3, tmp19);
    tmp21 = NofibPrelude.Cons(tmp2, tmp20);
    tmp22 = NofibPrelude.Cons(tmp1, tmp21);
    tmp23 = NofibPrelude.Cons(tmp, tmp22);
    calendar.monthNames = tmp23;
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
  static #leave(n, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = ls.tail;
        scrut = n <= 0;
        if (scrut === true) {
          return ls
        }
        tmp = n - 1;
        n = tmp;
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #take(n, ls) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = n <= 0;
      if (scrut === true) {
        return NofibPrelude.Nil
      }
      tmp = n - 1;
      tmp1 = calendar.#take(tmp, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp1);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = calendar.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #foldr1(f, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
        return arg$Cons$0$
      }
      tmp = calendar.#foldr1(f, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #zipWith(f, xss, yss) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (xss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xss.head;
      arg$Cons$1$ = xss.tail;
      if (yss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = yss.head;
        arg$Cons$1$1 = yss.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, arg$Cons$0$1));
        tmp1 = calendar.#zipWith(f, arg$Cons$1$, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
  }
  static #replicate(n, x) {
    let scrut, tmp, tmp1;
    scrut = n == 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    }
    tmp = n - 1;
    tmp1 = calendar.#replicate(tmp, x);
    return NofibPrelude.Cons(x, tmp1);
  }
  static #spread(ls) {
    let lambda$here;
    lambda$here = lambda$1(calendar);
    return calendar.#foldr1(lambda$here, ls)
  }
  static #leap(year) {
    let scrut, inlinedVal, tmp, inlinedVal1, tmp1;
    tmp1 = year / 100;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp1));
    tmp = 100 * inlinedVal1;
    inlinedVal = year - tmp;
    scrut = inlinedVal == 0;
    if (scrut === true) {
      let inlinedVal2, tmp2, inlinedVal3, tmp3;
      tmp3 = year / 400;
      inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp3));
      tmp2 = 400 * inlinedVal3;
      inlinedVal2 = year - tmp2;
      return inlinedVal2 == 0
    }
    {
      let inlinedVal2, tmp2, inlinedVal3, tmp3;
      tmp3 = year / 4;
      inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp3));
      tmp2 = 4 * inlinedVal3;
      inlinedVal2 = year - tmp2;
      return inlinedVal2 == 0;
    }
  }
  static #jan1st(year) {
    let last, tmp, tmp1, tmp2, inlinedVal, inlinedVal1, inlinedVal2, tmp3, tmp4, tmp5, tmp6, inlinedVal3, tmp7;
    last = year - 1;
    tmp6 = last / 4;
    inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp6));
    tmp = year + inlinedVal;
    tmp5 = last / 100;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp5));
    tmp1 = tmp - inlinedVal1;
    tmp4 = last / 400;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp4));
    tmp2 = tmp1 + inlinedVal2;
    tmp7 = tmp2 / 7;
    inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp7));
    tmp3 = 7 * inlinedVal3;
    return tmp2 - tmp3
  }
  static main() {
    let inlinedVal, tmp, f, inlinedVal1;
    tmp = main_testCalendar_nofib_enumFromTo$enumFromTo(1993, 1993);
    f = main_testCalendar_nofib_lambda$$lambda$();
    inlinedVal1 = tmp(undefined, f);
    inlinedVal = inlinedVal1();
    return NofibPrelude.nofibListToString(inlinedVal)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "calendar"];
});
export default calendar1;
