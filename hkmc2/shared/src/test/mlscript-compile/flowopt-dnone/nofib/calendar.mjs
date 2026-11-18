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
let calendar1, lambda$, lambda$1, lambda$2, main_testCalendar_nofib_lambda$_lambda$lambda, main_testCalendar_nofib_lambda$$lambda$, main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_space_replicate$replicate, main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$zipWith, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda$lambda, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$$lambda$, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_space_replicate$replicate, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda$lambda, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$$lambda$, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop, main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate, main_testCalendar_nofib_lambda$_lambda_cal_unlines_map$map, main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda_append$append, main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda$lambda, main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$$lambda$, main_testCalendar_nofib_enumFromTo$enumFromTo, main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_append$xs_Nil, main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_append$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_block_map$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_block_map$xs_Nil, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_dflt, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Nil, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_append$xs_Nil, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_append$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_append$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_append$xs_Nil, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_map$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_map$xs_Nil, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_map$xs_Nil, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_map$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Nil, main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt, main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_dflt, main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil, main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3, main_testCalendar_nofib_lambda$_lambda_cal_append$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_append$xs_Nil, main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Cons, main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Nil, main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Cons, main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Nil, main_testCalendar_nofib_map$xs_Cons, main_testCalendar_nofib_map$xs_Nil, main_concat$ls_Cons, main_concat$ls_Nil, main_concat_append$xs_Nil, main_concat_append$xs_Cons, main_testCalendar_nofib_map$xs_Cons$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_map$xs_Cons$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_map$xs_Cons$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons$worker, main_testCalendar_nofib_lambda$_lambda_cal_body_block_map$xs_Cons$worker;
main_testCalendar_nofib_lambda$_lambda$lambda = function main_testCalendar_nofib_lambda$_lambda$lambda(calendar2, x) {
  let daynames, tmp, tmp1, inlinedVal, m, tmp2, tmp3, tmp4, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, tmp5, f, inlinedVal5, xs, zs, inlinedVal6, tmp6, scrut, tmp7, scrut1, tmp8, Cons_tail, Cons_tail1, Cons_tail2, Cons_tail3, Cons_tail4, Cons_tail5, Cons_tail6, Cons_tail7, Cons_tail8, Cons_tail9, Cons_tail10, Cons_tail11, arg$Cons$0$, arg$Cons$1$, tmp9, f1, inlinedVal7, inlinedVal8, lambda$here, tmp10, lambda$here1, fv_tmp, inlinedVal9, fv_tmp1, inlinedVal10, fv_tmp2, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, tmp11, inlinedVal17, tmp12, inlinedVal18, inlinedVal19, tmp13, inlinedVal20, tmp14, inlinedVal21, inlinedVal22, inlinedVal23, tmp15, inlinedVal24, tmp16, inlinedVal25, inlinedVal26, inlinedVal27, tmp17, inlinedVal28, tmp18, inlinedVal29, inlinedVal30, inlinedVal31, tmp19, inlinedVal32, tmp20, inlinedVal33, inlinedVal34, tmp21, inlinedVal35, tmp22, inlinedVal36, inlinedVal37, inlinedVal38, tmp23, inlinedVal39, tmp24, inlinedVal40, inlinedVal41, inlinedVal42, tmp25, inlinedVal43, tmp26, inlinedVal44, inlinedVal45, inlinedVal46, tmp27, inlinedVal47, tmp28, inlinedVal48, inlinedVal49, inlinedVal50, tmp29, inlinedVal51, tmp30, inlinedVal52, inlinedVal53, inlinedVal54, tmp31, inlinedVal55, tmp32, inlinedVal56, inlinedVal57, tmp33, inlinedVal58, tmp34, inlinedVal59, inlinedVal60, tmp35, inlinedVal61, tmp36, inlinedVal62;
  fv_tmp = calendar1[replicate$accessorSymbol](2, " ");
  inlinedVal9 = calendar1[replicate$accessorSymbol](8, fv_tmp);
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
  inlinedVal4 = inlinedVal2(tmp4, undefined, undefined, undefined, undefined, undefined);
  fv_tmp2 = calendar1[replicate$accessorSymbol](75, " ");
  inlinedVal11 = main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate(1, fv_tmp2);
  tmp6 = calendar1[jan1st$accessorSymbol](x);
  scrut = calendar1[leap$accessorSymbol](x);
  if (scrut === true) {
    tmp7 = 29;
  } else {
    tmp7 = 28;
  }
  inlinedVal14 = tmp6 + 31;
  inlinedVal15 = inlinedVal14 + tmp7;
  inlinedVal18 = inlinedVal15 + 31;
  inlinedVal21 = inlinedVal18 + 30;
  inlinedVal25 = inlinedVal21 + 31;
  inlinedVal29 = inlinedVal25 + 30;
  inlinedVal33 = inlinedVal29 + 31;
  inlinedVal36 = inlinedVal33 + 31;
  inlinedVal40 = inlinedVal36 + 30;
  inlinedVal44 = inlinedVal40 + 31;
  inlinedVal48 = inlinedVal44 + 30;
  inlinedVal52 = inlinedVal48 + 31;
  tmp12 = tmp6 / 7;
  inlinedVal17 = runtime.safeCall(globalThis.Math.floor(tmp12));
  tmp11 = 7 * inlinedVal17;
  inlinedVal16 = tmp6 - tmp11;
  tmp14 = inlinedVal14 / 7;
  inlinedVal20 = runtime.safeCall(globalThis.Math.floor(tmp14));
  tmp13 = 7 * inlinedVal20;
  inlinedVal19 = inlinedVal14 - tmp13;
  tmp16 = inlinedVal15 / 7;
  inlinedVal24 = runtime.safeCall(globalThis.Math.floor(tmp16));
  tmp15 = 7 * inlinedVal24;
  inlinedVal22 = inlinedVal15 - tmp15;
  tmp18 = inlinedVal18 / 7;
  inlinedVal28 = runtime.safeCall(globalThis.Math.floor(tmp18));
  tmp17 = 7 * inlinedVal28;
  inlinedVal26 = inlinedVal18 - tmp17;
  tmp20 = inlinedVal21 / 7;
  inlinedVal32 = runtime.safeCall(globalThis.Math.floor(tmp20));
  tmp19 = 7 * inlinedVal32;
  inlinedVal30 = inlinedVal21 - tmp19;
  tmp22 = inlinedVal25 / 7;
  inlinedVal35 = runtime.safeCall(globalThis.Math.floor(tmp22));
  tmp21 = 7 * inlinedVal35;
  inlinedVal34 = inlinedVal25 - tmp21;
  tmp24 = inlinedVal29 / 7;
  inlinedVal39 = runtime.safeCall(globalThis.Math.floor(tmp24));
  tmp23 = 7 * inlinedVal39;
  inlinedVal37 = inlinedVal29 - tmp23;
  tmp26 = inlinedVal33 / 7;
  inlinedVal43 = runtime.safeCall(globalThis.Math.floor(tmp26));
  tmp25 = 7 * inlinedVal43;
  inlinedVal41 = inlinedVal33 - tmp25;
  tmp28 = inlinedVal36 / 7;
  inlinedVal47 = runtime.safeCall(globalThis.Math.floor(tmp28));
  tmp27 = 7 * inlinedVal47;
  inlinedVal45 = inlinedVal36 - tmp27;
  tmp30 = inlinedVal40 / 7;
  inlinedVal51 = runtime.safeCall(globalThis.Math.floor(tmp30));
  tmp29 = 7 * inlinedVal51;
  inlinedVal49 = inlinedVal40 - tmp29;
  tmp32 = inlinedVal44 / 7;
  inlinedVal55 = runtime.safeCall(globalThis.Math.floor(tmp32));
  tmp31 = 7 * inlinedVal55;
  inlinedVal53 = inlinedVal44 - tmp31;
  tmp34 = inlinedVal48 / 7;
  inlinedVal58 = runtime.safeCall(globalThis.Math.floor(tmp34));
  tmp33 = 7 * inlinedVal58;
  inlinedVal56 = inlinedVal48 - tmp33;
  tmp36 = inlinedVal52 / 7;
  inlinedVal61 = runtime.safeCall(globalThis.Math.floor(tmp36));
  tmp35 = 7 * inlinedVal61;
  inlinedVal60 = inlinedVal52 - tmp35;
  inlinedVal59 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Nil();
  inlinedVal57 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal60, inlinedVal59);
  inlinedVal54 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal56, inlinedVal57);
  inlinedVal50 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal53, inlinedVal54);
  inlinedVal46 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal49, inlinedVal50);
  inlinedVal42 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal45, inlinedVal46);
  inlinedVal38 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal41, inlinedVal42);
  inlinedVal31 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal37, inlinedVal38);
  inlinedVal27 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal34, inlinedVal31);
  inlinedVal23 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal30, inlinedVal27);
  if (false === true) {
    inlinedVal62 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt();
  } else {
    let inlinedVal63;
    if (false === true) {
      inlinedVal63 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt();
    } else {
      let Cons_tail12, inlinedVal64, Cons_head, Cons_tail13, fv_scrut, fv_n, fv_tmp3, inlinedVal65;
      Cons_tail12 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal26, inlinedVal23);
      Cons_head = inlinedVal22;
      Cons_tail13 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(inlinedVal26, inlinedVal23);
      fv_scrut = undefined;
      fv_n = 10;
      fv_tmp3 = undefined;
      fv_scrut = false;
      if (false === true) {
        inlinedVal65 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt();
      } else {
        let inlinedVal66, Cons_head1, Cons_tail14, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t, fv_h, fv_scrut1, fv_n1, fv_tmp4, fv_tmp5, inlinedVal67;
        fv_tmp3 = 9;
        Cons_head1 = inlinedVal26;
        Cons_tail14 = inlinedVal23;
        fv_arg$Cons$0$ = undefined;
        fv_arg$Cons$1$ = undefined;
        fv_t = undefined;
        fv_h = undefined;
        fv_scrut1 = undefined;
        fv_n1 = 9;
        fv_tmp4 = undefined;
        fv_tmp5 = undefined;
        inlinedLbl: {
          inlinedVal67 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons$worker(Cons_head1, Cons_tail14, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t, fv_h, fv_scrut1, fv_n1, fv_tmp4, fv_tmp5);
          break inlinedLbl;
        }
        inlinedVal66 = inlinedVal67;
        inlinedVal65 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_Cons(inlinedVal22, inlinedVal66);
      }
      inlinedVal64 = inlinedVal65;
      inlinedVal63 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_Cons(inlinedVal19, inlinedVal65);
    }
    inlinedVal62 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_Cons(inlinedVal16, inlinedVal63);
  }
  scrut1 = calendar1[leap$accessorSymbol](x);
  if (scrut1 === true) {
    tmp8 = 29;
  } else {
    tmp8 = 28;
  }
  Cons_tail = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_dflt();
  Cons_tail1 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail);
  Cons_tail2 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(30, Cons_tail1);
  Cons_tail3 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail2);
  Cons_tail4 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(30, Cons_tail3);
  Cons_tail5 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail4);
  Cons_tail6 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail5);
  Cons_tail7 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(30, Cons_tail6);
  Cons_tail8 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail7);
  Cons_tail9 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(30, Cons_tail8);
  Cons_tail10 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail9);
  Cons_tail11 = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(tmp8, Cons_tail10);
  xs = calendar1.monthNames;
  zs = main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(31, Cons_tail11);
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    inlinedVal6 = inlinedVal62(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, arg$Cons$0$, undefined, arg$Cons$1$, zs);
  } else {
    inlinedVal6 = main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil();
  }
  f = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$$lambda$(calendar1, inlinedVal9, inlinedVal10, daynames);
  inlinedVal5 = inlinedVal6(undefined, undefined, undefined, undefined, undefined, f, undefined);
  tmp9 = main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop(3, inlinedVal5);
  f1 = calendar1[spread$accessorSymbol];
  inlinedVal7 = tmp9(undefined, undefined, undefined, undefined, undefined, f1, undefined);
  lambda$here = lambda$(calendar1);
  inlinedVal8 = calendar1[foldr1$accessorSymbol](lambda$here, inlinedVal7);
  inlinedVal13 = inlinedVal11(undefined, undefined, undefined, undefined, undefined, inlinedVal8);
  inlinedVal12 = NofibPrelude.Cons(inlinedVal4, inlinedVal13);
  lambda$here1 = main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$$lambda$(calendar1);
  tmp10 = main_testCalendar_nofib_lambda$_lambda_cal_unlines_map$map(lambda$here1, inlinedVal12);
  return tmp10(undefined, undefined, undefined, undefined, undefined)
};
main_testCalendar_nofib_lambda$$lambda$ = function main_testCalendar_nofib_lambda$$lambda$(calendar2) {
  return (x) => {
    return main_testCalendar_nofib_lambda$_lambda$lambda(calendar2, x)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_space_replicate$replicate = function main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_space_replicate$replicate(n, x) {
  let scrut, tmp, tmp1;
  scrut = n == 0;
  if (scrut === true) {
    return main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_append$xs_Nil()
  }
  tmp = n - 1;
  tmp1 = main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_space_replicate$replicate(tmp, x);
  return main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_append$xs_Cons(x, tmp1);
};
main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop = function main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop(n, xs) {
  let tmp, tmp1, tmp2;
  if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_block_map$xs_Nil()
  }
  tmp = calendar1[take$accessorSymbol](n, xs);
  tmp1 = calendar1[leave$accessorSymbol](n, xs);
  tmp2 = main_testCalendar_nofib_lambda$_lambda_cal_body_block_groop$groop(n, tmp1);
  return main_testCalendar_nofib_lambda$_lambda_cal_body_block_map$xs_Cons(tmp, tmp2);
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
  inlinedVal = x(undefined, undefined, undefined, undefined, undefined, undefined, undefined, calendar2, undefined, daynames);
  tmp = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$zipWith(calendar2[append$accessorSymbol], side, inlinedVal);
  f = calendar2[append$accessorSymbol];
  inlinedVal1 = tmp(undefined, undefined, undefined, undefined, side, undefined, undefined, undefined, undefined, undefined, f, undefined);
  return inlinedVal1(end, undefined, undefined, undefined, undefined, undefined)
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$$lambda$ = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$$lambda$(calendar2, side, end, daynames) {
  return (x) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda$lambda(calendar2, side, end, daynames, x)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate(n, x) {
  let scrut, tmp, tmp1;
  scrut = n == 0;
  if (scrut === true) {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_append$xs_Nil()
  }
  tmp = n - 1;
  tmp1 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate(tmp, x);
  return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_append$xs_Cons(x, tmp1);
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_space_replicate$replicate = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_space_replicate$replicate(n, x) {
  let scrut, tmp, tmp1;
  scrut = n == 0;
  if (scrut === true) {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_append$xs_Nil()
  }
  tmp = n - 1;
  tmp1 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_space_replicate$replicate(tmp, x);
  return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_append$xs_Cons(x, tmp1);
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda$lambda = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda$lambda(calendar2, ml, d) {
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
      inlinedVal2 = inlinedVal1(undefined, undefined, undefined, undefined, undefined, tmp3);
      return NofibPrelude.Cons(inlinedVal2, NofibPrelude.Nil);
    }
  }
  tmp2 = NofibPrelude.nofibStringToList("   ");
  return NofibPrelude.Cons(tmp2, NofibPrelude.Nil);
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$$lambda$ = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$$lambda$(calendar2, ml) {
  return (d) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda$lambda(calendar2, ml, d)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo(a, b) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo(tmp, b);
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_map$xs_Cons(a, tmp1)
  }
  return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_map$xs_Nil();
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop(n, xs) {
  let tmp, tmp1, tmp2;
  if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_map$xs_Nil()
  }
  tmp = calendar1[take$accessorSymbol](n, xs);
  tmp1 = calendar1[leave$accessorSymbol](n, xs);
  tmp2 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop(n, tmp1);
  return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_map$xs_Cons(tmp, tmp2);
};
main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate = function main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate(n, x) {
  let scrut, tmp, tmp1;
  scrut = n == 0;
  if (scrut === true) {
    return main_testCalendar_nofib_lambda$_lambda_cal_append$xs_Nil()
  }
  tmp = n - 1;
  tmp1 = main_testCalendar_nofib_lambda$_lambda_cal_banner_emptyPic_replicate$replicate(tmp, x);
  return main_testCalendar_nofib_lambda$_lambda_cal_append$xs_Cons(x, tmp1);
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
main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda$lambda = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda$lambda(calendar2, x) {
  let tmp, Cons_tail;
  Cons_tail = main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Nil();
  tmp = main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Cons("\n", Cons_tail);
  return main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda_append$append(x, tmp)
};
main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$$lambda$ = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$$lambda$(calendar2) {
  return (x) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_unlines_lambda$_lambda$lambda(calendar2, x)
  }
};
main_testCalendar_nofib_enumFromTo$enumFromTo = function main_testCalendar_nofib_enumFromTo$enumFromTo(a, b) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = main_testCalendar_nofib_enumFromTo$enumFromTo(tmp, b);
    return main_testCalendar_nofib_map$xs_Cons(a, tmp1)
  }
  return main_testCalendar_nofib_map$xs_Nil();
};
main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_append$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_append$xs_Nil() {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return fv_ys
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_append$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_banner_cjustify_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys, undefined, undefined, undefined, undefined, undefined);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_block_map$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_block_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_block_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_block_map$xs_Cons$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_block_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testCalendar_nofib_lambda$_lambda_cal_body_block_map$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_body_block_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return NofibPrelude.Nil
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_dflt = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_yss, fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_ys, fv_y, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Nil()
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_yss, fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_ys, fv_y, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_yss, fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_ys, fv_y, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_zipWith$xss_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_yss, fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_ys, fv_y, fv_tmp, fv_f, fv_tmp1) {
  if (fv_yss instanceof NofibPrelude.Cons.class) {
    let inlinedVal;
    fv_arg$Cons$0$1 = fv_yss.head;
    fv_arg$Cons$1$1 = fv_yss.tail;
    fv_tmp = runtime.safeCall(fv_f(Cons_head, fv_arg$Cons$0$1));
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, fv_arg$Cons$1$1, undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Cons(fv_tmp, inlinedVal)
  }
  return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Nil();
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Nil() {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return fv_ys
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pad_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys, undefined, undefined, undefined, undefined, undefined);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_append$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_append$xs_Nil() {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return fv_ys
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_append$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys, undefined, undefined, undefined, undefined, undefined);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_append$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_append$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$_lambda_date_rjustify_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_map$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_map$xs_Cons$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_map$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return NofibPrelude.Nil
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_map$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return NofibPrelude.Nil
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_map$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_map$xs_Cons$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t, fv_h, fv_scrut, fv_n, fv_tmp, fv_tmp1) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t, fv_h, fv_scrut, fv_n, fv_tmp, fv_tmp1)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t, fv_h, fv_scrut, fv_n, fv_tmp, fv_tmp1) {
  fv_scrut = fv_n <= 0;
  if (fv_scrut === true) {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt()
  }
  {
    let inlinedVal;
    fv_tmp = fv_n - 1;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined, undefined);
    return main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_Cons(Cons_head, inlinedVal);
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_firstDays_take$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t, fv_h, fv_scrut, fv_n, fv_tmp, fv_tmp1) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt()
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_ys, fv_y, fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_zs, fv_z, fv_tmp, fv_x, fv_tmp1, fv_xs, fv_zs1) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil()
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$ys_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_ys, fv_y, fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_zs, fv_z, fv_tmp, fv_x, fv_tmp1, fv_xs, fv_zs1) => {
    return fv_zs1(fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_zs, fv_z, fv_tmp, fv_x, Cons_head, fv_tmp1, fv_xs, Cons_tail)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_zs, fv_z, fv_tmp, fv_x, fv_y, fv_tmp1, fv_xs, fv_ys) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_zs, fv_z, fv_tmp, fv_x, fv_y, fv_tmp1, fv_xs, fv_ys)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_zs, fv_z, fv_tmp, fv_x, fv_y, fv_tmp1, fv_xs, fv_ys) {
  let Cons_head1, inlinedVal, arg$Cons$0$, arg$Cons$1$;
  if (fv_xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = fv_xs.head;
    arg$Cons$1$ = fv_xs.tail;
    inlinedVal = fv_ys(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, arg$Cons$0$, undefined, arg$Cons$1$, Cons_tail);
  } else {
    inlinedVal = main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil();
  }
  Cons_head1 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3(fv_x, fv_y, Cons_head);
  return main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons(Cons_head1, inlinedVal)
};
main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_dflt = function main_testCalendar_nofib_lambda$_lambda_cal_body_months_zip3$zs_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_zs, fv_z, fv_tmp, fv_x, fv_y, fv_tmp1, fv_xs, fv_ys) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil()
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return NofibPrelude.Nil
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3 = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_ml, fv_fd, fv_mn, fv_tmp, fv_calendar, fv_tmp1, fv_daynames) => {
    return main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_ml, fv_fd, fv_mn, fv_tmp, fv_calendar, fv_tmp1, fv_daynames)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3$worker = function main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic$mnfdml_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_ml, fv_fd, fv_mn, fv_tmp, fv_calendar, fv_tmp1, fv_daynames) {
  let inlinedVal, tmp, tmp1, tmp2, f, inlinedVal1, tmp3, f1, inlinedVal2, inlinedVal3, lambda$here, m, tmp4, tmp5, tmp6, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, tmp7;
  tmp4 = calendar1[listLen$accessorSymbol](tup3_0);
  m = 21 - tmp4;
  tmp7 = m / 2;
  inlinedVal4 = runtime.safeCall(globalThis.Math.floor(tmp7));
  inlinedVal5 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_title_cjustify_space_replicate$replicate(inlinedVal4, " ");
  tmp5 = m - inlinedVal4;
  inlinedVal6 = calendar1[replicate$accessorSymbol](tmp5, " ");
  tmp6 = calendar1[append$accessorSymbol](tup3_0, inlinedVal6);
  inlinedVal7 = inlinedVal5(tmp6, undefined, undefined, undefined, undefined, undefined);
  tmp = 1 - tup3_1;
  tmp1 = 42 - tup3_1;
  tmp2 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_enumFromTo$enumFromTo(tmp, tmp1);
  f = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_dates_lambda$$lambda$(calendar1, tup3_2);
  inlinedVal1 = tmp2(undefined, undefined, undefined, undefined, undefined, f, undefined);
  tmp3 = main_testCalendar_nofib_lambda$_lambda_cal_body_lambda$_lambda_pic_table_entries_block_groop$groop(7, inlinedVal1);
  f1 = calendar1[spread$accessorSymbol];
  inlinedVal2 = tmp3(undefined, undefined, undefined, undefined, undefined, f1, undefined);
  lambda$here = lambda$(calendar1);
  inlinedVal3 = calendar1[foldr1$accessorSymbol](lambda$here, inlinedVal2);
  inlinedVal = fv_calendar[append$accessorSymbol](fv_daynames, inlinedVal3);
  return NofibPrelude.Cons(inlinedVal7, inlinedVal)
};
main_testCalendar_nofib_lambda$_lambda_cal_append$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_append$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_concat_append$xs_Nil()
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Cons = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_concat_append$xs_Cons(Cons_head, inlinedVal)
  }
};
main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Nil = function main_testCalendar_nofib_lambda$_lambda_cal_unlines_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCalendar_nofib_map$xs_Cons = function main_testCalendar_nofib_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCalendar_nofib_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCalendar_nofib_map$xs_Cons$worker = function main_testCalendar_nofib_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_concat$ls_Cons(fv_tmp, inlinedVal)
};
main_testCalendar_nofib_map$xs_Nil = function main_testCalendar_nofib_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_concat$ls_Nil()
  }
};
main_concat$ls_Cons = function main_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(inlinedVal, undefined, undefined, undefined, undefined, undefined)
  }
};
main_concat$ls_Nil = function main_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return NofibPrelude.Nil
  }
};
main_concat_append$xs_Nil = function main_concat_append$xs_Nil() {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return fv_ys
  }
};
main_concat_append$xs_Cons = function main_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys, undefined, undefined, undefined, undefined, undefined);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
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
    f = main_testCalendar_nofib_lambda$$lambda$(calendar1);
    inlinedVal1 = tmp(undefined, undefined, undefined, undefined, undefined, f, undefined);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined);
    return NofibPrelude.nofibListToString(inlinedVal)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "calendar"];
});
export default calendar1;
