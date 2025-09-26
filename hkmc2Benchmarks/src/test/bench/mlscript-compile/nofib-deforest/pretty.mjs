const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let pp_word, pretty_stuff, pretty1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda$, lambda$1, lambda$2, pretty_stuff$, lambda$3, lambda_inst_0_1_tsni, ppStr_inst_0_1_2_tsni, lambda$_inst_3_4_tsni, lambda_inst_3_4_1_tsni, ppStr_inst_3_4_1_2_tsni, lambda_inst_5_6_tsni, lambda$_inst_5_6_4_tsni, lambda_inst_5_6_4_1_tsni, ppStr_inst_5_6_4_1_2_tsni, pretty_stuff$_inst_7_8_tsni, lambda_inst_7_8_6_tsni, lambda$_inst_7_8_6_4_tsni, lambda_inst_7_8_6_4_1_tsni, ppStr_inst_7_8_6_4_1_2_tsni, flatten_inst_9_10_tsni, flattenS_inst_9_10_tsni, cShow_inst_11_12_tsni, flatten_inst_11_12_10_tsni, flattenS_inst_11_12_10_tsni, cShow_inst_13_14_tsni, flatten_inst_13_14_10_tsni, flattenS_inst_13_14_10_tsni, pretty_stuff_inst_15_16_tsni, pretty_stuff$_inst_15_16_8_tsni, lambda_inst_15_16_8_6_tsni, lambda$_inst_15_16_8_6_4_tsni, lambda_inst_15_16_8_6_4_1_tsni, ppStr_inst_15_16_8_6_4_1_2_tsni, ppShow_inst_15_17_tsni, cShow_inst_15_17_12_tsni, flatten_inst_15_17_12_10_tsni, flattenS_inst_15_17_12_10_tsni, mkIndent_inst_15_17_12_10_18_tsni, append_inst_15_17_12_10_19_tsni, mkIndent_inst_15_17_12_10_20_tsni, append_inst_15_17_12_10_21_tsni, testPretty_nofib_inst_22_23_tsni, ppShow_inst_22_23_17_tsni, cShow_inst_22_23_17_12_tsni, flatten_inst_22_23_17_12_10_tsni, flattenS_inst_22_23_17_12_10_tsni, mkIndent_inst_22_23_17_12_10_18_tsni, mkIndent_inst_22_23_17_12_10_20_tsni, append_inst_22_23_17_12_10_19_tsni, append_inst_22_23_17_12_10_21_tsni, pretty_stuff_inst_22_23_16_tsni, pretty_stuff$_inst_22_23_16_8_tsni, lambda_inst_22_23_16_8_6_tsni, lambda$_inst_22_23_16_8_6_4_tsni, lambda_inst_22_23_16_8_6_4_1_tsni, ppStr_inst_22_23_16_8_6_4_1_2_tsni, ppHang_inst_0_24_tsni, ppHang_inst_3_4_24_tsni, ppHang_inst_5_6_4_24_tsni, ppHang_inst_7_8_6_4_24_tsni, ppHang_inst_15_16_8_6_4_24_tsni, append_inst_15_25_tsni, append_inst_22_23_25_tsni, ppHang_inst_22_23_16_8_6_4_24_tsni, match_xs_arm_Cons_inst_15_25_tsni, match_xs_arm_Cons_inst_22_23_25_tsni;
match_xs_arm_Cons_inst_15_25_tsni = (undefined, function (ys, _deforest_Cons_head_inst_15_25_tsni, _deforest_Cons_tail_inst_15_25_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_15_25_tsni;
  param1 = _deforest_Cons_tail_inst_15_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_15_25_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Cons_inst_22_23_25_tsni = (undefined, function (ys, _deforest_Cons_head_inst_22_23_25_tsni, _deforest_Cons_tail_inst_22_23_25_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_22_23_25_tsni;
  param1 = _deforest_Cons_tail_inst_22_23_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_22_23_25_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
lambda_inst_0_1_tsni = (undefined, function (a, b) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("This is the label");
  return ppStr_inst_0_1_2_tsni(tmp, a, b)
});
ppStr_inst_0_1_2_tsni = function ppStr_inst_0_1_2_tsni(s, width, is_vert) {
  let ls, tmp, tmp1, _deforest_MkPrettyRep_cseq, _deforest_MkPrettyRep_n, _deforest_MkPrettyRep_b1, _deforest_MkPrettyRep_b2;
  ls = NofibPrelude.listLen(s);
  tmp = pretty.cStr(s);
  tmp1 = width >= ls;
  _deforest_MkPrettyRep_cseq = tmp;
  _deforest_MkPrettyRep_n = ls;
  _deforest_MkPrettyRep_b1 = false;
  _deforest_MkPrettyRep_b2 = tmp1;
  return (n, p2, width1, is_vert1) => {
    let param0, param1, param2, param3, seq1, ll1, emp1, sl1, scrut, param01, param11, param21, param31, seq2, ll2, emp2, sl2, scrut1, param02, param12, param22, param32, seq2_, ll2_, emp2_, sl2_, scrut2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
    param0 = _deforest_MkPrettyRep_cseq;
    param1 = _deforest_MkPrettyRep_n;
    param2 = _deforest_MkPrettyRep_b1;
    param3 = _deforest_MkPrettyRep_b2;
    seq1 = param0;
    ll1 = param1;
    emp1 = param2;
    sl1 = param3;
    tmp2 = ll1 + 1;
    tmp3 = width1 - tmp2;
    scrut = runtime.safeCall(p2(tmp3, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      param01 = scrut.cseq;
      param11 = scrut.n;
      param21 = scrut.b1;
      param31 = scrut.b2;
      seq2 = param01;
      ll2 = param11;
      emp2 = param21;
      sl2 = param31;
      tmp4 = width1 - n;
      scrut1 = runtime.safeCall(p2(tmp4, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        param02 = scrut1.cseq;
        param12 = scrut1.n;
        param22 = scrut1.b1;
        param32 = scrut1.b2;
        seq2_ = param02;
        ll2_ = param12;
        emp2_ = param22;
        sl2_ = param32;
        if (emp1 === true) {
          return runtime.safeCall(p2(width1, is_vert1))
        } else {
          tmp5 = ll1 <= n;
          scrut2 = pretty.orL(tmp5, sl2);
          if (scrut2 === true) {
            tmp6 = pretty.cCh(" ");
            tmp7 = ll1 + 1;
            tmp8 = pretty.cIndent(tmp7, seq2);
            tmp9 = pretty.cAppend(tmp6, tmp8);
            tmp10 = pretty.cAppend(seq1, tmp9);
            tmp11 = ll1 + 1;
            tmp12 = tmp11 + ll2;
            tmp13 = pretty.andL(sl1, sl2);
            return pretty.MkPrettyRep(tmp10, tmp12, false, tmp13)
          } else {
            tmp14 = pretty.cIndent(n, seq2_);
            tmp15 = pretty.cAppend(pretty.cNL, tmp14);
            tmp16 = pretty.cAppend(seq1, tmp15);
            return pretty.MkPrettyRep(tmp16, ll2_, false, false)
          }
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
lambda$_inst_3_4_tsni = function lambda$_inst_3_4_tsni(pp_words, a, b) {
  let tmp;
  tmp = pretty1.ppCat(pp_words);
  return ppHang_inst_3_4_24_tsni(lambda_inst_3_4_1_tsni, 8, tmp, a, b)
};
lambda_inst_3_4_1_tsni = (undefined, function (a, b) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("This is the label");
  return ppStr_inst_3_4_1_2_tsni(tmp, a, b)
});
ppStr_inst_3_4_1_2_tsni = function ppStr_inst_3_4_1_2_tsni(s, width, is_vert) {
  let ls, tmp, tmp1, _deforest_MkPrettyRep_cseq, _deforest_MkPrettyRep_n, _deforest_MkPrettyRep_b1, _deforest_MkPrettyRep_b2;
  ls = NofibPrelude.listLen(s);
  tmp = pretty.cStr(s);
  tmp1 = width >= ls;
  _deforest_MkPrettyRep_cseq = tmp;
  _deforest_MkPrettyRep_n = ls;
  _deforest_MkPrettyRep_b1 = false;
  _deforest_MkPrettyRep_b2 = tmp1;
  return (n, p2, width1, is_vert1) => {
    let param0, param1, param2, param3, seq1, ll1, emp1, sl1, scrut, param01, param11, param21, param31, seq2, ll2, emp2, sl2, scrut1, param02, param12, param22, param32, seq2_, ll2_, emp2_, sl2_, scrut2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
    param0 = _deforest_MkPrettyRep_cseq;
    param1 = _deforest_MkPrettyRep_n;
    param2 = _deforest_MkPrettyRep_b1;
    param3 = _deforest_MkPrettyRep_b2;
    seq1 = param0;
    ll1 = param1;
    emp1 = param2;
    sl1 = param3;
    tmp2 = ll1 + 1;
    tmp3 = width1 - tmp2;
    scrut = runtime.safeCall(p2(tmp3, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      param01 = scrut.cseq;
      param11 = scrut.n;
      param21 = scrut.b1;
      param31 = scrut.b2;
      seq2 = param01;
      ll2 = param11;
      emp2 = param21;
      sl2 = param31;
      tmp4 = width1 - n;
      scrut1 = runtime.safeCall(p2(tmp4, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        param02 = scrut1.cseq;
        param12 = scrut1.n;
        param22 = scrut1.b1;
        param32 = scrut1.b2;
        seq2_ = param02;
        ll2_ = param12;
        emp2_ = param22;
        sl2_ = param32;
        if (emp1 === true) {
          return runtime.safeCall(p2(width1, is_vert1))
        } else {
          tmp5 = ll1 <= n;
          scrut2 = pretty.orL(tmp5, sl2);
          if (scrut2 === true) {
            tmp6 = pretty.cCh(" ");
            tmp7 = ll1 + 1;
            tmp8 = pretty.cIndent(tmp7, seq2);
            tmp9 = pretty.cAppend(tmp6, tmp8);
            tmp10 = pretty.cAppend(seq1, tmp9);
            tmp11 = ll1 + 1;
            tmp12 = tmp11 + ll2;
            tmp13 = pretty.andL(sl1, sl2);
            return pretty.MkPrettyRep(tmp10, tmp12, false, tmp13)
          } else {
            tmp14 = pretty.cIndent(n, seq2_);
            tmp15 = pretty.cAppend(pretty.cNL, tmp14);
            tmp16 = pretty.cAppend(seq1, tmp15);
            return pretty.MkPrettyRep(tmp16, ll2_, false, false)
          }
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
lambda_inst_5_6_tsni = (undefined, function (pp_words) {
  return (a, b) => {
    return lambda$_inst_5_6_4_tsni(pp_words, a, b)
  }
});
lambda$_inst_5_6_4_tsni = function lambda$_inst_5_6_4_tsni(pp_words, a, b) {
  let tmp;
  tmp = pretty1.ppCat(pp_words);
  return ppHang_inst_5_6_4_24_tsni(lambda_inst_5_6_4_1_tsni, 8, tmp, a, b)
};
lambda_inst_5_6_4_1_tsni = (undefined, function (a, b) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("This is the label");
  return ppStr_inst_5_6_4_1_2_tsni(tmp, a, b)
});
ppStr_inst_5_6_4_1_2_tsni = function ppStr_inst_5_6_4_1_2_tsni(s, width, is_vert) {
  let ls, tmp, tmp1, _deforest_MkPrettyRep_cseq, _deforest_MkPrettyRep_n, _deforest_MkPrettyRep_b1, _deforest_MkPrettyRep_b2;
  ls = NofibPrelude.listLen(s);
  tmp = pretty.cStr(s);
  tmp1 = width >= ls;
  _deforest_MkPrettyRep_cseq = tmp;
  _deforest_MkPrettyRep_n = ls;
  _deforest_MkPrettyRep_b1 = false;
  _deforest_MkPrettyRep_b2 = tmp1;
  return (n, p2, width1, is_vert1) => {
    let param0, param1, param2, param3, seq1, ll1, emp1, sl1, scrut, param01, param11, param21, param31, seq2, ll2, emp2, sl2, scrut1, param02, param12, param22, param32, seq2_, ll2_, emp2_, sl2_, scrut2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
    param0 = _deforest_MkPrettyRep_cseq;
    param1 = _deforest_MkPrettyRep_n;
    param2 = _deforest_MkPrettyRep_b1;
    param3 = _deforest_MkPrettyRep_b2;
    seq1 = param0;
    ll1 = param1;
    emp1 = param2;
    sl1 = param3;
    tmp2 = ll1 + 1;
    tmp3 = width1 - tmp2;
    scrut = runtime.safeCall(p2(tmp3, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      param01 = scrut.cseq;
      param11 = scrut.n;
      param21 = scrut.b1;
      param31 = scrut.b2;
      seq2 = param01;
      ll2 = param11;
      emp2 = param21;
      sl2 = param31;
      tmp4 = width1 - n;
      scrut1 = runtime.safeCall(p2(tmp4, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        param02 = scrut1.cseq;
        param12 = scrut1.n;
        param22 = scrut1.b1;
        param32 = scrut1.b2;
        seq2_ = param02;
        ll2_ = param12;
        emp2_ = param22;
        sl2_ = param32;
        if (emp1 === true) {
          return runtime.safeCall(p2(width1, is_vert1))
        } else {
          tmp5 = ll1 <= n;
          scrut2 = pretty.orL(tmp5, sl2);
          if (scrut2 === true) {
            tmp6 = pretty.cCh(" ");
            tmp7 = ll1 + 1;
            tmp8 = pretty.cIndent(tmp7, seq2);
            tmp9 = pretty.cAppend(tmp6, tmp8);
            tmp10 = pretty.cAppend(seq1, tmp9);
            tmp11 = ll1 + 1;
            tmp12 = tmp11 + ll2;
            tmp13 = pretty.andL(sl1, sl2);
            return pretty.MkPrettyRep(tmp10, tmp12, false, tmp13)
          } else {
            tmp14 = pretty.cIndent(n, seq2_);
            tmp15 = pretty.cAppend(pretty.cNL, tmp14);
            tmp16 = pretty.cAppend(seq1, tmp15);
            return pretty.MkPrettyRep(tmp16, ll2_, false, false)
          }
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
pretty_stuff$_inst_7_8_tsni = function pretty_stuff$_inst_7_8_tsni(pp_words, a, b) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = NofibPrelude.Cons(lambda5, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(lambda4, tmp);
  tmp2 = NofibPrelude.Cons(lambda3, tmp1);
  tmp3 = pretty1.ppBesides(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_7_8_6_tsni(pp_words));
  tmp4 = NofibPrelude.Cons(lambda$this, NofibPrelude.Nil);
  tmp5 = NofibPrelude.Cons(lambda6, tmp4);
  tmp6 = NofibPrelude.Cons(tmp3, tmp5);
  return pretty1.ppAboves(tmp6, a, b)
};
lambda_inst_7_8_6_tsni = (undefined, function (pp_words) {
  return (a, b) => {
    return lambda$_inst_7_8_6_4_tsni(pp_words, a, b)
  }
});
lambda$_inst_7_8_6_4_tsni = function lambda$_inst_7_8_6_4_tsni(pp_words, a, b) {
  let tmp;
  tmp = pretty1.ppCat(pp_words);
  return ppHang_inst_7_8_6_4_24_tsni(lambda_inst_7_8_6_4_1_tsni, 8, tmp, a, b)
};
lambda_inst_7_8_6_4_1_tsni = (undefined, function (a, b) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("This is the label");
  return ppStr_inst_7_8_6_4_1_2_tsni(tmp, a, b)
});
ppStr_inst_7_8_6_4_1_2_tsni = function ppStr_inst_7_8_6_4_1_2_tsni(s, width, is_vert) {
  let ls, tmp, tmp1, _deforest_MkPrettyRep_cseq, _deforest_MkPrettyRep_n, _deforest_MkPrettyRep_b1, _deforest_MkPrettyRep_b2;
  ls = NofibPrelude.listLen(s);
  tmp = pretty.cStr(s);
  tmp1 = width >= ls;
  _deforest_MkPrettyRep_cseq = tmp;
  _deforest_MkPrettyRep_n = ls;
  _deforest_MkPrettyRep_b1 = false;
  _deforest_MkPrettyRep_b2 = tmp1;
  return (n, p2, width1, is_vert1) => {
    let param0, param1, param2, param3, seq1, ll1, emp1, sl1, scrut, param01, param11, param21, param31, seq2, ll2, emp2, sl2, scrut1, param02, param12, param22, param32, seq2_, ll2_, emp2_, sl2_, scrut2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
    param0 = _deforest_MkPrettyRep_cseq;
    param1 = _deforest_MkPrettyRep_n;
    param2 = _deforest_MkPrettyRep_b1;
    param3 = _deforest_MkPrettyRep_b2;
    seq1 = param0;
    ll1 = param1;
    emp1 = param2;
    sl1 = param3;
    tmp2 = ll1 + 1;
    tmp3 = width1 - tmp2;
    scrut = runtime.safeCall(p2(tmp3, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      param01 = scrut.cseq;
      param11 = scrut.n;
      param21 = scrut.b1;
      param31 = scrut.b2;
      seq2 = param01;
      ll2 = param11;
      emp2 = param21;
      sl2 = param31;
      tmp4 = width1 - n;
      scrut1 = runtime.safeCall(p2(tmp4, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        param02 = scrut1.cseq;
        param12 = scrut1.n;
        param22 = scrut1.b1;
        param32 = scrut1.b2;
        seq2_ = param02;
        ll2_ = param12;
        emp2_ = param22;
        sl2_ = param32;
        if (emp1 === true) {
          return runtime.safeCall(p2(width1, is_vert1))
        } else {
          tmp5 = ll1 <= n;
          scrut2 = pretty.orL(tmp5, sl2);
          if (scrut2 === true) {
            tmp6 = pretty.cCh(" ");
            tmp7 = ll1 + 1;
            tmp8 = pretty.cIndent(tmp7, seq2);
            tmp9 = pretty.cAppend(tmp6, tmp8);
            tmp10 = pretty.cAppend(seq1, tmp9);
            tmp11 = ll1 + 1;
            tmp12 = tmp11 + ll2;
            tmp13 = pretty.andL(sl1, sl2);
            return pretty.MkPrettyRep(tmp10, tmp12, false, tmp13)
          } else {
            tmp14 = pretty.cIndent(n, seq2_);
            tmp15 = pretty.cAppend(pretty.cNL, tmp14);
            tmp16 = pretty.cAppend(seq1, tmp15);
            return pretty.MkPrettyRep(tmp16, ll2_, false, false)
          }
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
flatten_inst_9_10_tsni = function flatten_inst_9_10_tsni(n, nlp, cseq, seqs) {
  let param0, c, s, param1, n_, seq, seq1, seq2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (cseq instanceof pretty.CNil.class) {
    return flattenS_inst_9_10_tsni(nlp, seqs)
  } else if (cseq instanceof pretty.CAppend.class) {
    param0 = cseq.a;
    param1 = cseq.b;
    seq1 = param0;
    seq2 = param1;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = seq2;
    tmp = (nlp1, param11) => {
      let first1, first0, col, seq3, seqs1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      col = first0;
      seq3 = first1;
      seqs1 = param11;
      return flatten_inst_9_10_tsni(col, nlp1, seq3, seqs1)
    };
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = seqs;
    tmp1 = (nlp1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(nlp1, param11))
    };
    return flatten_inst_9_10_tsni(n, nlp, seq1, tmp1)
  } else if (cseq instanceof pretty.CIndent.class) {
    param0 = cseq.a;
    param1 = cseq.b;
    n_ = param0;
    seq = param1;
    tmp2 = n_ + n;
    return flatten_inst_9_10_tsni(tmp2, nlp, seq, seqs)
  } else if (cseq instanceof pretty.CNewline.class) {
    tmp3 = flattenS_inst_9_10_tsni(true, seqs);
    return NofibPrelude.Cons("\n", tmp3)
  } else if (cseq instanceof pretty.CStr.class) {
    param0 = cseq.a;
    s = param0;
    if (nlp === true) {
      tmp4 = flattenS_inst_9_10_tsni(false, seqs);
      tmp5 = NofibPrelude.append(s, tmp4);
      return pretty.mkIndent(n, tmp5)
    } else {
      tmp6 = flattenS_inst_9_10_tsni(false, seqs);
      return NofibPrelude.append(s, tmp6)
    }
  } else if (cseq instanceof pretty.CCh.class) {
    param0 = cseq.a;
    c = param0;
    if (nlp === true) {
      tmp7 = flattenS_inst_9_10_tsni(false, seqs);
      tmp8 = NofibPrelude.Cons(c, tmp7);
      return pretty.mkIndent(n, tmp8)
    } else {
      tmp9 = flattenS_inst_9_10_tsni(false, seqs);
      return NofibPrelude.Cons(c, tmp9)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
flattenS_inst_9_10_tsni = function flattenS_inst_9_10_tsni(nlp, seqs) {
  return runtime.safeCall(seqs(nlp))
};
cShow_inst_11_12_tsni = function cShow_inst_11_12_tsni(seq) {
  let lambda12;
  lambda12 = (nlp) => {
    return NofibPrelude.Nil
  };
  return flatten_inst_11_12_10_tsni(0, true, seq, lambda12)
};
flatten_inst_11_12_10_tsni = function flatten_inst_11_12_10_tsni(n, nlp, cseq, seqs) {
  let param0, c, s, param1, n_, seq, seq1, seq2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (cseq instanceof pretty.CNil.class) {
    return flattenS_inst_11_12_10_tsni(nlp, seqs)
  } else if (cseq instanceof pretty.CAppend.class) {
    param0 = cseq.a;
    param1 = cseq.b;
    seq1 = param0;
    seq2 = param1;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = seq2;
    tmp = (nlp1, param11) => {
      let first1, first0, col, seq3, seqs1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      col = first0;
      seq3 = first1;
      seqs1 = param11;
      return flatten_inst_11_12_10_tsni(col, nlp1, seq3, seqs1)
    };
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = seqs;
    tmp1 = (nlp1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(nlp1, param11))
    };
    return flatten_inst_11_12_10_tsni(n, nlp, seq1, tmp1)
  } else if (cseq instanceof pretty.CIndent.class) {
    param0 = cseq.a;
    param1 = cseq.b;
    n_ = param0;
    seq = param1;
    tmp2 = n_ + n;
    return flatten_inst_11_12_10_tsni(tmp2, nlp, seq, seqs)
  } else if (cseq instanceof pretty.CNewline.class) {
    tmp3 = flattenS_inst_11_12_10_tsni(true, seqs);
    return NofibPrelude.Cons("\n", tmp3)
  } else if (cseq instanceof pretty.CStr.class) {
    param0 = cseq.a;
    s = param0;
    if (nlp === true) {
      tmp4 = flattenS_inst_11_12_10_tsni(false, seqs);
      tmp5 = NofibPrelude.append(s, tmp4);
      return pretty.mkIndent(n, tmp5)
    } else {
      tmp6 = flattenS_inst_11_12_10_tsni(false, seqs);
      return NofibPrelude.append(s, tmp6)
    }
  } else if (cseq instanceof pretty.CCh.class) {
    param0 = cseq.a;
    c = param0;
    if (nlp === true) {
      tmp7 = flattenS_inst_11_12_10_tsni(false, seqs);
      tmp8 = NofibPrelude.Cons(c, tmp7);
      return pretty.mkIndent(n, tmp8)
    } else {
      tmp9 = flattenS_inst_11_12_10_tsni(false, seqs);
      return NofibPrelude.Cons(c, tmp9)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
flattenS_inst_11_12_10_tsni = function flattenS_inst_11_12_10_tsni(nlp, seqs) {
  return runtime.safeCall(seqs(nlp))
};
cShow_inst_13_14_tsni = function cShow_inst_13_14_tsni(seq) {
  let lambda12;
  lambda12 = (nlp) => {
    return NofibPrelude.Nil
  };
  return flatten_inst_13_14_10_tsni(0, true, seq, lambda12)
};
flatten_inst_13_14_10_tsni = function flatten_inst_13_14_10_tsni(n, nlp, cseq, seqs) {
  let param0, c, s, param1, n_, seq, seq1, seq2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (cseq instanceof pretty.CNil.class) {
    return flattenS_inst_13_14_10_tsni(nlp, seqs)
  } else if (cseq instanceof pretty.CAppend.class) {
    param0 = cseq.a;
    param1 = cseq.b;
    seq1 = param0;
    seq2 = param1;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = seq2;
    tmp = (nlp1, param11) => {
      let first1, first0, col, seq3, seqs1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      col = first0;
      seq3 = first1;
      seqs1 = param11;
      return flatten_inst_13_14_10_tsni(col, nlp1, seq3, seqs1)
    };
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = seqs;
    tmp1 = (nlp1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(nlp1, param11))
    };
    return flatten_inst_13_14_10_tsni(n, nlp, seq1, tmp1)
  } else if (cseq instanceof pretty.CIndent.class) {
    param0 = cseq.a;
    param1 = cseq.b;
    n_ = param0;
    seq = param1;
    tmp2 = n_ + n;
    return flatten_inst_13_14_10_tsni(tmp2, nlp, seq, seqs)
  } else if (cseq instanceof pretty.CNewline.class) {
    tmp3 = flattenS_inst_13_14_10_tsni(true, seqs);
    return NofibPrelude.Cons("\n", tmp3)
  } else if (cseq instanceof pretty.CStr.class) {
    param0 = cseq.a;
    s = param0;
    if (nlp === true) {
      tmp4 = flattenS_inst_13_14_10_tsni(false, seqs);
      tmp5 = NofibPrelude.append(s, tmp4);
      return pretty.mkIndent(n, tmp5)
    } else {
      tmp6 = flattenS_inst_13_14_10_tsni(false, seqs);
      return NofibPrelude.append(s, tmp6)
    }
  } else if (cseq instanceof pretty.CCh.class) {
    param0 = cseq.a;
    c = param0;
    if (nlp === true) {
      tmp7 = flattenS_inst_13_14_10_tsni(false, seqs);
      tmp8 = NofibPrelude.Cons(c, tmp7);
      return pretty.mkIndent(n, tmp8)
    } else {
      tmp9 = flattenS_inst_13_14_10_tsni(false, seqs);
      return NofibPrelude.Cons(c, tmp9)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
flattenS_inst_13_14_10_tsni = function flattenS_inst_13_14_10_tsni(nlp, seqs) {
  return runtime.safeCall(seqs(nlp))
};
pretty_stuff_inst_15_16_tsni = function pretty_stuff_inst_15_16_tsni(pp_words) {
  return (a, b) => {
    return pretty_stuff$_inst_15_16_8_tsni(pp_words, a, b)
  }
};
pretty_stuff$_inst_15_16_8_tsni = function pretty_stuff$_inst_15_16_8_tsni(pp_words, a, b) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = NofibPrelude.Cons(lambda5, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(lambda4, tmp);
  tmp2 = NofibPrelude.Cons(lambda3, tmp1);
  tmp3 = pretty1.ppBesides(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_15_16_8_6_tsni(pp_words));
  tmp4 = NofibPrelude.Cons(lambda$this, NofibPrelude.Nil);
  tmp5 = NofibPrelude.Cons(lambda6, tmp4);
  tmp6 = NofibPrelude.Cons(tmp3, tmp5);
  return pretty1.ppAboves(tmp6, a, b)
};
lambda_inst_15_16_8_6_tsni = (undefined, function (pp_words) {
  return (a, b) => {
    return lambda$_inst_15_16_8_6_4_tsni(pp_words, a, b)
  }
});
lambda$_inst_15_16_8_6_4_tsni = function lambda$_inst_15_16_8_6_4_tsni(pp_words, a, b) {
  let tmp;
  tmp = pretty1.ppCat(pp_words);
  return ppHang_inst_15_16_8_6_4_24_tsni(lambda_inst_15_16_8_6_4_1_tsni, 8, tmp, a, b)
};
lambda_inst_15_16_8_6_4_1_tsni = (undefined, function (a, b) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("This is the label");
  return ppStr_inst_15_16_8_6_4_1_2_tsni(tmp, a, b)
});
ppStr_inst_15_16_8_6_4_1_2_tsni = function ppStr_inst_15_16_8_6_4_1_2_tsni(s, width, is_vert) {
  let ls, tmp, tmp1, _deforest_MkPrettyRep_cseq, _deforest_MkPrettyRep_n, _deforest_MkPrettyRep_b1, _deforest_MkPrettyRep_b2;
  ls = NofibPrelude.listLen(s);
  tmp = pretty.cStr(s);
  tmp1 = width >= ls;
  _deforest_MkPrettyRep_cseq = tmp;
  _deforest_MkPrettyRep_n = ls;
  _deforest_MkPrettyRep_b1 = false;
  _deforest_MkPrettyRep_b2 = tmp1;
  return (n, p2, width1, is_vert1) => {
    let param0, param1, param2, param3, seq1, ll1, emp1, sl1, scrut, param01, param11, param21, param31, seq2, ll2, emp2, sl2, scrut1, param02, param12, param22, param32, seq2_, ll2_, emp2_, sl2_, scrut2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
    param0 = _deforest_MkPrettyRep_cseq;
    param1 = _deforest_MkPrettyRep_n;
    param2 = _deforest_MkPrettyRep_b1;
    param3 = _deforest_MkPrettyRep_b2;
    seq1 = param0;
    ll1 = param1;
    emp1 = param2;
    sl1 = param3;
    tmp2 = ll1 + 1;
    tmp3 = width1 - tmp2;
    scrut = runtime.safeCall(p2(tmp3, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      param01 = scrut.cseq;
      param11 = scrut.n;
      param21 = scrut.b1;
      param31 = scrut.b2;
      seq2 = param01;
      ll2 = param11;
      emp2 = param21;
      sl2 = param31;
      tmp4 = width1 - n;
      scrut1 = runtime.safeCall(p2(tmp4, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        param02 = scrut1.cseq;
        param12 = scrut1.n;
        param22 = scrut1.b1;
        param32 = scrut1.b2;
        seq2_ = param02;
        ll2_ = param12;
        emp2_ = param22;
        sl2_ = param32;
        if (emp1 === true) {
          return runtime.safeCall(p2(width1, is_vert1))
        } else {
          tmp5 = ll1 <= n;
          scrut2 = pretty.orL(tmp5, sl2);
          if (scrut2 === true) {
            tmp6 = pretty.cCh(" ");
            tmp7 = ll1 + 1;
            tmp8 = pretty.cIndent(tmp7, seq2);
            tmp9 = pretty.cAppend(tmp6, tmp8);
            tmp10 = pretty.cAppend(seq1, tmp9);
            tmp11 = ll1 + 1;
            tmp12 = tmp11 + ll2;
            tmp13 = pretty.andL(sl1, sl2);
            return pretty.MkPrettyRep(tmp10, tmp12, false, tmp13)
          } else {
            tmp14 = pretty.cIndent(n, seq2_);
            tmp15 = pretty.cAppend(pretty.cNL, tmp14);
            tmp16 = pretty.cAppend(seq1, tmp15);
            return pretty.MkPrettyRep(tmp16, ll2_, false, false)
          }
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
ppShow_inst_15_17_tsni = function ppShow_inst_15_17_tsni(width, p) {
  let scrut, param0, param1, param2, param3, seq, ll, emp, sl;
  scrut = runtime.safeCall(p(width, false));
  if (scrut instanceof pretty.MkPrettyRep.class) {
    param0 = scrut.cseq;
    param1 = scrut.n;
    param2 = scrut.b1;
    param3 = scrut.b2;
    seq = param0;
    ll = param1;
    emp = param2;
    sl = param3;
    return cShow_inst_15_17_12_tsni(seq)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
cShow_inst_15_17_12_tsni = function cShow_inst_15_17_12_tsni(seq) {
  let lambda12;
  lambda12 = (nlp) => {
    return (ys) => {
      return ys
    }
  };
  return flatten_inst_15_17_12_10_tsni(0, true, seq, lambda12)
};
flatten_inst_15_17_12_10_tsni = function flatten_inst_15_17_12_10_tsni(n, nlp, cseq, seqs) {
  let param0, c, s, param1, n_, seq, seq1, seq2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3;
  if (cseq instanceof pretty.CNil.class) {
    return flattenS_inst_15_17_12_10_tsni(nlp, seqs)
  } else if (cseq instanceof pretty.CAppend.class) {
    param0 = cseq.a;
    param1 = cseq.b;
    seq1 = param0;
    seq2 = param1;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = seq2;
    tmp = (nlp1, param11) => {
      let first1, first0, col, seq3, seqs1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      col = first0;
      seq3 = first1;
      seqs1 = param11;
      return flatten_inst_15_17_12_10_tsni(col, nlp1, seq3, seqs1)
    };
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = seqs;
    tmp1 = (nlp1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(nlp1, param11))
    };
    return flatten_inst_15_17_12_10_tsni(n, nlp, seq1, tmp1)
  } else if (cseq instanceof pretty.CIndent.class) {
    param0 = cseq.a;
    param1 = cseq.b;
    n_ = param0;
    seq = param1;
    tmp2 = n_ + n;
    return flatten_inst_15_17_12_10_tsni(tmp2, nlp, seq, seqs)
  } else if (cseq instanceof pretty.CNewline.class) {
    tmp3 = flattenS_inst_15_17_12_10_tsni(true, seqs);
    _deforest_Cons_head1 = "\n";
    _deforest_Cons_tail1 = tmp3;
    return (ys) => {
      return match_xs_arm_Cons_inst_15_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  } else if (cseq instanceof pretty.CStr.class) {
    param0 = cseq.a;
    s = param0;
    if (nlp === true) {
      tmp4 = flattenS_inst_15_17_12_10_tsni(false, seqs);
      tmp5 = append_inst_15_17_12_10_21_tsni(s, tmp4);
      return mkIndent_inst_15_17_12_10_20_tsni(n, tmp5)
    } else {
      tmp6 = flattenS_inst_15_17_12_10_tsni(false, seqs);
      return append_inst_15_17_12_10_19_tsni(s, tmp6)
    }
  } else if (cseq instanceof pretty.CCh.class) {
    param0 = cseq.a;
    c = param0;
    if (nlp === true) {
      tmp7 = flattenS_inst_15_17_12_10_tsni(false, seqs);
      _deforest_Cons_head3 = c;
      _deforest_Cons_tail3 = tmp7;
      tmp8 = (ys) => {
        return match_xs_arm_Cons_inst_15_25_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
      };
      return mkIndent_inst_15_17_12_10_18_tsni(n, tmp8)
    } else {
      tmp9 = flattenS_inst_15_17_12_10_tsni(false, seqs);
      _deforest_Cons_head2 = c;
      _deforest_Cons_tail2 = tmp9;
      return (ys) => {
        return match_xs_arm_Cons_inst_15_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
flattenS_inst_15_17_12_10_tsni = function flattenS_inst_15_17_12_10_tsni(nlp, seqs) {
  return runtime.safeCall(seqs(nlp))
};
mkIndent_inst_15_17_12_10_18_tsni = function mkIndent_inst_15_17_12_10_18_tsni(n, s) {
  let scrut, scrut1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut1 = n === 0;
  if (scrut1 === true) {
    return s
  } else {
    scrut = n >= 8;
    if (scrut === true) {
      tmp = n - 8;
      tmp1 = mkIndent_inst_15_17_12_10_18_tsni(tmp, s);
      _deforest_Cons_head1 = "\t";
      _deforest_Cons_tail1 = tmp1;
      return (ys) => {
        return match_xs_arm_Cons_inst_15_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = mkIndent_inst_15_17_12_10_18_tsni(tmp2, s);
      _deforest_Cons_head = " ";
      _deforest_Cons_tail = tmp3;
      return (ys) => {
        return match_xs_arm_Cons_inst_15_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  }
};
append_inst_15_17_12_10_19_tsni = function append_inst_15_17_12_10_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_15_17_12_10_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_15_25_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mkIndent_inst_15_17_12_10_20_tsni = function mkIndent_inst_15_17_12_10_20_tsni(n, s) {
  let scrut, scrut1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut1 = n === 0;
  if (scrut1 === true) {
    return s
  } else {
    scrut = n >= 8;
    if (scrut === true) {
      tmp = n - 8;
      tmp1 = mkIndent_inst_15_17_12_10_20_tsni(tmp, s);
      _deforest_Cons_head1 = "\t";
      _deforest_Cons_tail1 = tmp1;
      return (ys) => {
        return match_xs_arm_Cons_inst_15_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = mkIndent_inst_15_17_12_10_20_tsni(tmp2, s);
      _deforest_Cons_head = " ";
      _deforest_Cons_tail = tmp3;
      return (ys) => {
        return match_xs_arm_Cons_inst_15_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  }
};
append_inst_15_17_12_10_21_tsni = function append_inst_15_17_12_10_21_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_15_17_12_10_21_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_15_25_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
testPretty_nofib_inst_22_23_tsni = function testPretty_nofib_inst_22_23_tsni() {
  let pp_words, tmp, tmp1, pretty_stuff$this;
  pp_words = NofibPrelude.replicate(50, pp_word);
  pretty_stuff$this = runtime.safeCall(pretty_stuff_inst_22_23_16_tsni(pp_words));
  tmp = ppShow_inst_22_23_17_tsni(80, pretty_stuff$this);
  tmp1 = NofibPrelude.nofibStringToList("\n");
  return append_inst_22_23_25_tsni(tmp, tmp1)
};
ppShow_inst_22_23_17_tsni = function ppShow_inst_22_23_17_tsni(width, p) {
  let scrut, param0, param1, param2, param3, seq, ll, emp, sl;
  scrut = runtime.safeCall(p(width, false));
  if (scrut instanceof pretty.MkPrettyRep.class) {
    param0 = scrut.cseq;
    param1 = scrut.n;
    param2 = scrut.b1;
    param3 = scrut.b2;
    seq = param0;
    ll = param1;
    emp = param2;
    sl = param3;
    return cShow_inst_22_23_17_12_tsni(seq)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
cShow_inst_22_23_17_12_tsni = function cShow_inst_22_23_17_12_tsni(seq) {
  let lambda12;
  lambda12 = (nlp) => {
    return (ys) => {
      return ys
    }
  };
  return flatten_inst_22_23_17_12_10_tsni(0, true, seq, lambda12)
};
flatten_inst_22_23_17_12_10_tsni = function flatten_inst_22_23_17_12_10_tsni(n, nlp, cseq, seqs) {
  let param0, c, s, param1, n_, seq, seq1, seq2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3;
  if (cseq instanceof pretty.CNil.class) {
    return flattenS_inst_22_23_17_12_10_tsni(nlp, seqs)
  } else if (cseq instanceof pretty.CAppend.class) {
    param0 = cseq.a;
    param1 = cseq.b;
    seq1 = param0;
    seq2 = param1;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = seq2;
    tmp = (nlp1, param11) => {
      let first1, first0, col, seq3, seqs1;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      col = first0;
      seq3 = first1;
      seqs1 = param11;
      return flatten_inst_22_23_17_12_10_tsni(col, nlp1, seq3, seqs1)
    };
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = seqs;
    tmp1 = (nlp1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(nlp1, param11))
    };
    return flatten_inst_22_23_17_12_10_tsni(n, nlp, seq1, tmp1)
  } else if (cseq instanceof pretty.CIndent.class) {
    param0 = cseq.a;
    param1 = cseq.b;
    n_ = param0;
    seq = param1;
    tmp2 = n_ + n;
    return flatten_inst_22_23_17_12_10_tsni(tmp2, nlp, seq, seqs)
  } else if (cseq instanceof pretty.CNewline.class) {
    tmp3 = flattenS_inst_22_23_17_12_10_tsni(true, seqs);
    _deforest_Cons_head1 = "\n";
    _deforest_Cons_tail1 = tmp3;
    return (ys) => {
      return match_xs_arm_Cons_inst_22_23_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  } else if (cseq instanceof pretty.CStr.class) {
    param0 = cseq.a;
    s = param0;
    if (nlp === true) {
      tmp4 = flattenS_inst_22_23_17_12_10_tsni(false, seqs);
      tmp5 = append_inst_22_23_17_12_10_21_tsni(s, tmp4);
      return mkIndent_inst_22_23_17_12_10_20_tsni(n, tmp5)
    } else {
      tmp6 = flattenS_inst_22_23_17_12_10_tsni(false, seqs);
      return append_inst_22_23_17_12_10_19_tsni(s, tmp6)
    }
  } else if (cseq instanceof pretty.CCh.class) {
    param0 = cseq.a;
    c = param0;
    if (nlp === true) {
      tmp7 = flattenS_inst_22_23_17_12_10_tsni(false, seqs);
      _deforest_Cons_head2 = c;
      _deforest_Cons_tail2 = tmp7;
      tmp8 = (ys) => {
        return match_xs_arm_Cons_inst_22_23_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
      };
      return mkIndent_inst_22_23_17_12_10_18_tsni(n, tmp8)
    } else {
      tmp9 = flattenS_inst_22_23_17_12_10_tsni(false, seqs);
      _deforest_Cons_head3 = c;
      _deforest_Cons_tail3 = tmp9;
      return (ys) => {
        return match_xs_arm_Cons_inst_22_23_25_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
flattenS_inst_22_23_17_12_10_tsni = function flattenS_inst_22_23_17_12_10_tsni(nlp, seqs) {
  return runtime.safeCall(seqs(nlp))
};
mkIndent_inst_22_23_17_12_10_18_tsni = function mkIndent_inst_22_23_17_12_10_18_tsni(n, s) {
  let scrut, scrut1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut1 = n === 0;
  if (scrut1 === true) {
    return s
  } else {
    scrut = n >= 8;
    if (scrut === true) {
      tmp = n - 8;
      tmp1 = mkIndent_inst_22_23_17_12_10_18_tsni(tmp, s);
      _deforest_Cons_head1 = "\t";
      _deforest_Cons_tail1 = tmp1;
      return (ys) => {
        return match_xs_arm_Cons_inst_22_23_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = mkIndent_inst_22_23_17_12_10_18_tsni(tmp2, s);
      _deforest_Cons_head = " ";
      _deforest_Cons_tail = tmp3;
      return (ys) => {
        return match_xs_arm_Cons_inst_22_23_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  }
};
mkIndent_inst_22_23_17_12_10_20_tsni = function mkIndent_inst_22_23_17_12_10_20_tsni(n, s) {
  let scrut, scrut1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut1 = n === 0;
  if (scrut1 === true) {
    return s
  } else {
    scrut = n >= 8;
    if (scrut === true) {
      tmp = n - 8;
      tmp1 = mkIndent_inst_22_23_17_12_10_20_tsni(tmp, s);
      _deforest_Cons_head1 = "\t";
      _deforest_Cons_tail1 = tmp1;
      return (ys) => {
        return match_xs_arm_Cons_inst_22_23_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = mkIndent_inst_22_23_17_12_10_20_tsni(tmp2, s);
      _deforest_Cons_head = " ";
      _deforest_Cons_tail = tmp3;
      return (ys) => {
        return match_xs_arm_Cons_inst_22_23_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  }
};
append_inst_22_23_17_12_10_19_tsni = function append_inst_22_23_17_12_10_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_23_17_12_10_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_22_23_25_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_22_23_17_12_10_21_tsni = function append_inst_22_23_17_12_10_21_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_22_23_17_12_10_21_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_22_23_25_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
pretty_stuff_inst_22_23_16_tsni = function pretty_stuff_inst_22_23_16_tsni(pp_words) {
  return (a, b) => {
    return pretty_stuff$_inst_22_23_16_8_tsni(pp_words, a, b)
  }
};
pretty_stuff$_inst_22_23_16_8_tsni = function pretty_stuff$_inst_22_23_16_8_tsni(pp_words, a, b) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = NofibPrelude.Cons(lambda5, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(lambda4, tmp);
  tmp2 = NofibPrelude.Cons(lambda3, tmp1);
  tmp3 = pretty1.ppBesides(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_22_23_16_8_6_tsni(pp_words));
  tmp4 = NofibPrelude.Cons(lambda$this, NofibPrelude.Nil);
  tmp5 = NofibPrelude.Cons(lambda6, tmp4);
  tmp6 = NofibPrelude.Cons(tmp3, tmp5);
  return pretty1.ppAboves(tmp6, a, b)
};
lambda_inst_22_23_16_8_6_tsni = (undefined, function (pp_words) {
  return (a, b) => {
    return lambda$_inst_22_23_16_8_6_4_tsni(pp_words, a, b)
  }
});
lambda$_inst_22_23_16_8_6_4_tsni = function lambda$_inst_22_23_16_8_6_4_tsni(pp_words, a, b) {
  let tmp;
  tmp = pretty1.ppCat(pp_words);
  return ppHang_inst_22_23_16_8_6_4_24_tsni(lambda_inst_22_23_16_8_6_4_1_tsni, 8, tmp, a, b)
};
lambda_inst_22_23_16_8_6_4_1_tsni = (undefined, function (a, b) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("This is the label");
  return ppStr_inst_22_23_16_8_6_4_1_2_tsni(tmp, a, b)
});
ppStr_inst_22_23_16_8_6_4_1_2_tsni = function ppStr_inst_22_23_16_8_6_4_1_2_tsni(s, width, is_vert) {
  let ls, tmp, tmp1, _deforest_MkPrettyRep_cseq, _deforest_MkPrettyRep_n, _deforest_MkPrettyRep_b1, _deforest_MkPrettyRep_b2;
  ls = NofibPrelude.listLen(s);
  tmp = pretty.cStr(s);
  tmp1 = width >= ls;
  _deforest_MkPrettyRep_cseq = tmp;
  _deforest_MkPrettyRep_n = ls;
  _deforest_MkPrettyRep_b1 = false;
  _deforest_MkPrettyRep_b2 = tmp1;
  return (n, p2, width1, is_vert1) => {
    let param0, param1, param2, param3, seq1, ll1, emp1, sl1, scrut, param01, param11, param21, param31, seq2, ll2, emp2, sl2, scrut1, param02, param12, param22, param32, seq2_, ll2_, emp2_, sl2_, scrut2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
    param0 = _deforest_MkPrettyRep_cseq;
    param1 = _deforest_MkPrettyRep_n;
    param2 = _deforest_MkPrettyRep_b1;
    param3 = _deforest_MkPrettyRep_b2;
    seq1 = param0;
    ll1 = param1;
    emp1 = param2;
    sl1 = param3;
    tmp2 = ll1 + 1;
    tmp3 = width1 - tmp2;
    scrut = runtime.safeCall(p2(tmp3, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      param01 = scrut.cseq;
      param11 = scrut.n;
      param21 = scrut.b1;
      param31 = scrut.b2;
      seq2 = param01;
      ll2 = param11;
      emp2 = param21;
      sl2 = param31;
      tmp4 = width1 - n;
      scrut1 = runtime.safeCall(p2(tmp4, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        param02 = scrut1.cseq;
        param12 = scrut1.n;
        param22 = scrut1.b1;
        param32 = scrut1.b2;
        seq2_ = param02;
        ll2_ = param12;
        emp2_ = param22;
        sl2_ = param32;
        if (emp1 === true) {
          return runtime.safeCall(p2(width1, is_vert1))
        } else {
          tmp5 = ll1 <= n;
          scrut2 = pretty.orL(tmp5, sl2);
          if (scrut2 === true) {
            tmp6 = pretty.cCh(" ");
            tmp7 = ll1 + 1;
            tmp8 = pretty.cIndent(tmp7, seq2);
            tmp9 = pretty.cAppend(tmp6, tmp8);
            tmp10 = pretty.cAppend(seq1, tmp9);
            tmp11 = ll1 + 1;
            tmp12 = tmp11 + ll2;
            tmp13 = pretty.andL(sl1, sl2);
            return pretty.MkPrettyRep(tmp10, tmp12, false, tmp13)
          } else {
            tmp14 = pretty.cIndent(n, seq2_);
            tmp15 = pretty.cAppend(pretty.cNL, tmp14);
            tmp16 = pretty.cAppend(seq1, tmp15);
            return pretty.MkPrettyRep(tmp16, ll2_, false, false)
          }
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
ppHang_inst_0_24_tsni = function ppHang_inst_0_24_tsni(p1, n, p2, width, is_vert) {
  let scrut;
  scrut = runtime.safeCall(p1(width, false));
  return runtime.safeCall(scrut(n, p2, width, is_vert))
};
ppHang_inst_3_4_24_tsni = function ppHang_inst_3_4_24_tsni(p1, n, p2, width, is_vert) {
  let scrut;
  scrut = runtime.safeCall(p1(width, false));
  return runtime.safeCall(scrut(n, p2, width, is_vert))
};
ppHang_inst_5_6_4_24_tsni = function ppHang_inst_5_6_4_24_tsni(p1, n, p2, width, is_vert) {
  let scrut;
  scrut = runtime.safeCall(p1(width, false));
  return runtime.safeCall(scrut(n, p2, width, is_vert))
};
ppHang_inst_7_8_6_4_24_tsni = function ppHang_inst_7_8_6_4_24_tsni(p1, n, p2, width, is_vert) {
  let scrut;
  scrut = runtime.safeCall(p1(width, false));
  return runtime.safeCall(scrut(n, p2, width, is_vert))
};
ppHang_inst_15_16_8_6_4_24_tsni = function ppHang_inst_15_16_8_6_4_24_tsni(p1, n, p2, width, is_vert) {
  let scrut;
  scrut = runtime.safeCall(p1(width, false));
  return runtime.safeCall(scrut(n, p2, width, is_vert))
};
append_inst_15_25_tsni = function append_inst_15_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_22_23_25_tsni = function append_inst_22_23_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
ppHang_inst_22_23_16_8_6_4_24_tsni = function ppHang_inst_22_23_16_8_6_4_24_tsni(p1, n, p2, width, is_vert) {
  let scrut;
  scrut = runtime.safeCall(p1(width, false));
  return runtime.safeCall(scrut(n, p2, width, is_vert))
};
pp_word = function pp_word(a, b) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("xxxxx");
  return pretty1.ppStr(tmp, a, b)
};
lambda3 = (undefined, function (a, b) {
  let tmp;
  tmp = - 42;
  return pretty1.ppInt(tmp, a, b)
});
lambda4 = (undefined, function (a, b) {
  return pretty1.ppChar("@", a, b)
});
lambda5 = (undefined, function (a, b) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("This is a string");
  return pretty1.ppStr(tmp, a, b)
});
lambda6 = (undefined, function (a, b) {
  return pretty1.pp_SP(a, b)
});
lambda7 = (undefined, function (a, b) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList("This is the label");
  return pretty1.ppStr(tmp, a, b)
});
lambda$3 = function lambda$(pp_words, a, b) {
  let tmp;
  tmp = pretty1.ppCat(pp_words);
  return ppHang_inst_0_24_tsni(lambda_inst_0_1_tsni, 8, tmp, a, b)
};
lambda8 = (undefined, function (pp_words) {
  return (a, b) => {
    return lambda$_inst_3_4_tsni(pp_words, a, b)
  }
});
pretty_stuff$ = function pretty_stuff$(pp_words, a, b) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
  tmp = NofibPrelude.Cons(lambda5, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(lambda4, tmp);
  tmp2 = NofibPrelude.Cons(lambda3, tmp1);
  tmp3 = pretty1.ppBesides(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_5_6_tsni(pp_words));
  tmp4 = NofibPrelude.Cons(lambda$this, NofibPrelude.Nil);
  tmp5 = NofibPrelude.Cons(lambda6, tmp4);
  tmp6 = NofibPrelude.Cons(tmp3, tmp5);
  return pretty1.ppAboves(tmp6, a, b)
};
pretty_stuff = function pretty_stuff(pp_words) {
  return (a, b) => {
    return pretty_stuff$_inst_7_8_tsni(pp_words, a, b)
  }
};
lambda$2 = function lambda$(a, b, c, d) {
  return pretty1.ppAbove(a, b, c, d)
};
lambda11 = (undefined, function (a, b) {
  return (c, d) => {
    return lambda$2(a, b, c, d)
  }
});
lambda2 = (undefined, function (a, b) {
  return runtime.safeCall(lambda11(a, b))
});
lambda$1 = function lambda$(a, b, c, d) {
  return pretty1.ppBesideSP(a, b, c, d)
};
lambda10 = (undefined, function (a, b) {
  return (c, d) => {
    return lambda$1(a, b, c, d)
  }
});
lambda1 = (undefined, function (a, b) {
  return runtime.safeCall(lambda10(a, b))
});
lambda$ = function lambda$(a, b, c, d) {
  return pretty1.ppBeside(a, b, c, d)
};
lambda9 = (undefined, function (a, b) {
  return (c, d) => {
    return lambda$(a, b, c, d)
  }
});
lambda = (undefined, function (a, b) {
  return runtime.safeCall(lambda9(a, b))
});
globalThis.Object.freeze(class pretty {
  static {
    pretty1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static {
    globalThis.Object.freeze(class CSeq {
      static {
        pretty.CSeq = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CSeq"]; 
    });
    this.CAppend = function CAppend(a, b) {
      return globalThis.Object.freeze(new CAppend.class(a, b));
    };
    globalThis.Object.freeze(class CAppend extends pretty.CSeq {
      static {
        pretty.CAppend.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CAppend", ["a", "b"]]; 
    });
    this.CIndent = function CIndent(a, b) {
      return globalThis.Object.freeze(new CIndent.class(a, b));
    };
    globalThis.Object.freeze(class CIndent extends pretty.CSeq {
      static {
        pretty.CIndent.class = this
      }
      constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CIndent", ["a", "b"]]; 
    });
    this.CStr = function CStr(a) {
      return globalThis.Object.freeze(new CStr.class(a));
    };
    globalThis.Object.freeze(class CStr extends pretty.CSeq {
      static {
        pretty.CStr.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CStr", ["a"]]; 
    });
    this.CCh = function CCh(a) {
      return globalThis.Object.freeze(new CCh.class(a));
    };
    globalThis.Object.freeze(class CCh extends pretty.CSeq {
      static {
        pretty.CCh.class = this
      }
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CCh", ["a"]]; 
    });
    globalThis.Object.freeze(class CNil extends pretty.CSeq {
      static {
        pretty.CNil = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: CNil
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "CNil"]; 
    });
    globalThis.Object.freeze(class CNewline extends pretty.CSeq {
      static {
        pretty.CNewline = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: CNewline
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "CNewline"]; 
    });
    globalThis.Object.freeze(class PprStyle {
      static {
        pretty.PprStyle = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "PprStyle"]; 
    });
    globalThis.Object.freeze(class PprForUser extends pretty.PprStyle {
      static {
        pretty.PprForUser = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: PprForUser
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprForUser"]; 
    });
    globalThis.Object.freeze(class PprDebug extends pretty.PprStyle {
      static {
        pretty.PprDebug = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: PprDebug
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprDebug"]; 
    });
    globalThis.Object.freeze(class PprShowAll extends pretty.PprStyle {
      static {
        pretty.PprShowAll = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: PprShowAll
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprShowAll"]; 
    });
    globalThis.Object.freeze(class PprInterface extends pretty.PprStyle {
      static {
        pretty.PprInterface = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: PprInterface
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PprInterface"]; 
    });
    this.cNil = pretty.CNil;
    this.cNL = pretty.CNewline;
    this.MkPrettyRep = function MkPrettyRep(cseq, n, b1, b2) {
      return globalThis.Object.freeze(new MkPrettyRep.class(cseq, n, b1, b2));
    };
    globalThis.Object.freeze(class MkPrettyRep {
      static {
        pretty.MkPrettyRep.class = this
      }
      constructor(cseq, n, b1, b2) {
        this.cseq = cseq;
        this.n = n;
        this.b1 = b1;
        this.b2 = b2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MkPrettyRep", ["cseq", "n", "b1", "b2"]]; 
    });
  }
  static cAppend(cs1, cs2) {
    return pretty.CAppend(cs1, cs2)
  } 
  static cIndent(n, cs) {
    return pretty.CIndent(n, cs)
  } 
  static cStr(s) {
    return pretty.CStr(s)
  } 
  static cCh(c) {
    return pretty.CCh(c)
  } 
  static mkIndent(n, s) {
    let scrut, scrut1, tmp, tmp1, tmp2, tmp3;
    scrut1 = n === 0;
    if (scrut1 === true) {
      return s
    } else {
      scrut = n >= 8;
      if (scrut === true) {
        tmp = n - 8;
        tmp1 = pretty.mkIndent(tmp, s);
        return NofibPrelude.Cons("\t", tmp1)
      } else {
        tmp2 = n - 1;
        tmp3 = pretty.mkIndent(tmp2, s);
        return NofibPrelude.Cons(" ", tmp3)
      }
    }
  } 
  static flattenS(nlp, seqs) {
    let param0, param1, first1, first0, col, seq, seqs1;
    if (seqs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (seqs instanceof NofibPrelude.Cons.class) {
      param0 = seqs.head;
      param1 = seqs.tail;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        col = first0;
        seq = first1;
        seqs1 = param1;
        return pretty.flatten(col, nlp, seq, seqs1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static flatten(n, nlp, cseq, seqs) {
    let param0, c, s, param1, n_, seq, seq1, seq2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (cseq instanceof pretty.CNil.class) {
      return pretty.flattenS(nlp, seqs)
    } else if (cseq instanceof pretty.CAppend.class) {
      param0 = cseq.a;
      param1 = cseq.b;
      seq1 = param0;
      seq2 = param1;
      tmp = globalThis.Object.freeze([
        n,
        seq2
      ]);
      tmp1 = NofibPrelude.Cons(tmp, seqs);
      return pretty.flatten(n, nlp, seq1, tmp1)
    } else if (cseq instanceof pretty.CIndent.class) {
      param0 = cseq.a;
      param1 = cseq.b;
      n_ = param0;
      seq = param1;
      tmp2 = n_ + n;
      return pretty.flatten(tmp2, nlp, seq, seqs)
    } else if (cseq instanceof pretty.CNewline.class) {
      tmp3 = pretty.flattenS(true, seqs);
      return NofibPrelude.Cons("\n", tmp3)
    } else if (cseq instanceof pretty.CStr.class) {
      param0 = cseq.a;
      s = param0;
      if (nlp === true) {
        tmp4 = pretty.flattenS(false, seqs);
        tmp5 = NofibPrelude.append(s, tmp4);
        return pretty.mkIndent(n, tmp5)
      } else {
        tmp6 = pretty.flattenS(false, seqs);
        return NofibPrelude.append(s, tmp6)
      }
    } else if (cseq instanceof pretty.CCh.class) {
      param0 = cseq.a;
      c = param0;
      if (nlp === true) {
        tmp7 = pretty.flattenS(false, seqs);
        tmp8 = NofibPrelude.Cons(c, tmp7);
        return pretty.mkIndent(n, tmp8)
      } else {
        tmp9 = pretty.flattenS(false, seqs);
        return NofibPrelude.Cons(c, tmp9)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static cShow(seq) {
    let lambda12;
    lambda12 = (nlp) => {
      return NofibPrelude.Nil
    };
    return flatten_inst_9_10_tsni(0, true, seq, lambda12)
  } 
  static ppShow(width, p) {
    let scrut, param0, param1, param2, param3, seq, ll, emp, sl;
    scrut = runtime.safeCall(p(width, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      param0 = scrut.cseq;
      param1 = scrut.n;
      param2 = scrut.b1;
      param3 = scrut.b2;
      seq = param0;
      ll = param1;
      emp = param2;
      sl = param3;
      return cShow_inst_11_12_tsni(seq)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static ppUnformatted(p) {
    let scrut, param0, param1, param2, param3, seq, ll, emp, sl;
    scrut = runtime.safeCall(p(80, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      param0 = scrut.cseq;
      param1 = scrut.n;
      param2 = scrut.b1;
      param3 = scrut.b2;
      seq = param0;
      ll = param1;
      emp = param2;
      sl = param3;
      return cShow_inst_13_14_tsni(seq)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static ppNil(width, is_vert) {
    let tmp;
    tmp = width >= 0;
    return pretty.MkPrettyRep(pretty.cNil, 0, true, tmp)
  } 
  static ppStr(s, width, is_vert) {
    let ls, tmp, tmp1;
    ls = NofibPrelude.listLen(s);
    tmp = pretty.cStr(s);
    tmp1 = width >= ls;
    return pretty.MkPrettyRep(tmp, ls, false, tmp1)
  } 
  static ppChar(c, width, is_vert) {
    let tmp, tmp1;
    tmp = pretty.cCh(c);
    tmp1 = width >= 1;
    return pretty.MkPrettyRep(tmp, 1, false, tmp1)
  } 
  static ppInt(n, width, is_vert) {
    let tmp, tmp1;
    tmp = NofibPrelude.stringOfInt(n);
    tmp1 = NofibPrelude.nofibStringToList(tmp);
    return pretty.ppStr(tmp1, width, is_vert)
  } 
  static pp_SP(a, b) {
    let tmp;
    tmp = NofibPrelude.nofibStringToList(", ");
    return pretty.ppStr(tmp, a, b)
  } 
  static ppSP(a, b) {
    return pretty.ppChar(" ", a, b)
  } 
  static ppLbrack(a, b) {
    return pretty.ppChar("[", a, b)
  } 
  static ppRbrack(a, b) {
    return pretty.ppChar("]", a, b)
  } 
  static ppLparen(a, b) {
    return pretty.ppChar("(", a, b)
  } 
  static ppRparen(a, b) {
    return pretty.ppChar(")", a, b)
  } 
  static ppSemi(a, b) {
    return pretty.ppChar(";", a, b)
  } 
  static ppComma(a, b) {
    return pretty.ppChar(",", a, b)
  } 
  static andL(a, b) {
    if (a === true) {
      return b
    } else {
      return false
    }
  } 
  static orL(a, b) {
    if (a === true) {
      return true
    } else {
      return b
    }
  } 
  static ppBeside(p1, p2, width, is_vert) {
    let scrut, param0, param1, param2, param3, seq1, ll1, emp1, sl1, scrut1, param01, param11, param21, param31, seq2, ll2, emp2, sl2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    scrut = runtime.safeCall(p1(width, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      param0 = scrut.cseq;
      param1 = scrut.n;
      param2 = scrut.b1;
      param3 = scrut.b2;
      seq1 = param0;
      ll1 = param1;
      emp1 = param2;
      sl1 = param3;
      tmp = width - ll1;
      scrut1 = runtime.safeCall(p2(tmp, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        param01 = scrut1.cseq;
        param11 = scrut1.n;
        param21 = scrut1.b1;
        param31 = scrut1.b2;
        seq2 = param01;
        ll2 = param11;
        emp2 = param21;
        sl2 = param31;
        tmp1 = pretty.cIndent(ll1, seq2);
        tmp2 = pretty.cAppend(seq1, tmp1);
        tmp3 = ll1 + ll2;
        tmp4 = pretty.andL(emp1, emp2);
        tmp5 = width >= 0;
        tmp6 = pretty.andL(sl1, sl2);
        tmp7 = pretty.andL(tmp5, tmp6);
        return pretty.MkPrettyRep(tmp2, tmp3, tmp4, tmp7)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static ppBesides(ps) {
    if (ps instanceof NofibPrelude.Nil.class) {
      return pretty.ppNil
    } else {
      return NofibPrelude.foldr1(lambda, ps)
    }
  } 
  static ppBesideSP(p1, p2, width, is_vert) {
    let scrut, param0, param1, param2, param3, seq1, ll1, emp1, sl1, li, scrut1, param01, param11, param21, param31, seq2, ll2, emp2, sl2, wi, sp, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    scrut = runtime.safeCall(p1(width, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      param0 = scrut.cseq;
      param1 = scrut.n;
      param2 = scrut.b1;
      param3 = scrut.b2;
      seq1 = param0;
      ll1 = param1;
      emp1 = param2;
      sl1 = param3;
      if (emp1 === true) {
        tmp = 0;
      } else {
        tmp = ll1 + 1;
      }
      li = tmp;
      tmp1 = width - li;
      scrut1 = runtime.safeCall(p2(tmp1, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        param01 = scrut1.cseq;
        param11 = scrut1.n;
        param21 = scrut1.b1;
        param31 = scrut1.b2;
        seq2 = param01;
        ll2 = param11;
        emp2 = param21;
        sl2 = param31;
        if (emp1 === true) {
          tmp2 = 0;
        } else {
          tmp2 = 1;
        }
        wi = tmp2;
        scrut2 = pretty.orL(emp1, emp2);
        if (scrut2 === true) {
          tmp3 = pretty.cNil;
        } else {
          tmp3 = pretty.cCh(" ");
        }
        sp = tmp3;
        tmp4 = pretty.cIndent(li, seq2);
        tmp5 = pretty.cAppend(sp, tmp4);
        tmp6 = pretty.cAppend(seq1, tmp5);
        tmp7 = li + ll2;
        tmp8 = pretty.andL(emp1, emp2);
        tmp9 = width >= wi;
        tmp10 = pretty.andL(sl1, sl2);
        tmp11 = pretty.andL(tmp9, tmp10);
        return pretty.MkPrettyRep(tmp6, tmp7, tmp8, tmp11)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static ppCat(ps) {
    if (ps instanceof NofibPrelude.Nil.class) {
      return pretty.ppNil
    } else {
      return NofibPrelude.foldr1(lambda1, ps)
    }
  } 
  static ppAbove(p1, p2, width, is_vert) {
    let scrut, param0, param1, param2, param3, seq1, ll1, emp1, sl1, scrut1, param01, param11, param21, param31, seq2, ll2, emp2, sl2, nl, scrut2, tmp, tmp1, tmp2, tmp3;
    scrut = runtime.safeCall(p1(width, true));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      param0 = scrut.cseq;
      param1 = scrut.n;
      param2 = scrut.b1;
      param3 = scrut.b2;
      seq1 = param0;
      ll1 = param1;
      emp1 = param2;
      sl1 = param3;
      scrut1 = runtime.safeCall(p2(width, true));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        param01 = scrut1.cseq;
        param11 = scrut1.n;
        param21 = scrut1.b1;
        param31 = scrut1.b2;
        seq2 = param01;
        ll2 = param11;
        emp2 = param21;
        sl2 = param31;
        scrut2 = pretty.orL(emp1, emp2);
        if (scrut2 === true) {
          tmp = pretty.cNil;
        } else {
          tmp = pretty.cNL;
        }
        nl = tmp;
        tmp1 = pretty.cAppend(nl, seq2);
        tmp2 = pretty.cAppend(seq1, tmp1);
        tmp3 = pretty.andL(emp1, emp2);
        return pretty.MkPrettyRep(tmp2, ll2, tmp3, false)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static ppAboves(ps, a, b) {
    let tmp;
    if (ps instanceof NofibPrelude.Nil.class) {
      return pretty.ppNil(a, b)
    } else {
      tmp = NofibPrelude.foldr1(lambda2, ps);
      return runtime.safeCall(tmp(a, b))
    }
  } 
  static ppNest(n, p, width, is_vert) {
    let scrut, param0, param1, param2, param3, seq, ll, emp, sl, tmp, tmp1, tmp2;
    if (is_vert === true) {
      tmp = width - n;
      scrut = runtime.safeCall(p(tmp, true));
      if (scrut instanceof pretty.MkPrettyRep.class) {
        param0 = scrut.cseq;
        param1 = scrut.n;
        param2 = scrut.b1;
        param3 = scrut.b2;
        seq = param0;
        ll = param1;
        emp = param2;
        sl = param3;
        tmp1 = pretty.cIndent(n, seq);
        tmp2 = ll + n;
        return pretty.MkPrettyRep(tmp1, tmp2, emp, sl)
      } else {
        return runtime.safeCall(p(width, false))
      }
    } else {
      return runtime.safeCall(p(width, false))
    }
  } 
  static ppHang(p1, n, p2, width, is_vert) {
    let scrut, param0, param1, param2, param3, seq1, ll1, emp1, sl1, scrut1, param01, param11, param21, param31, seq2, ll2, emp2, sl2, scrut2, param02, param12, param22, param32, seq2_, ll2_, emp2_, sl2_, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
    scrut = runtime.safeCall(p1(width, false));
    if (scrut instanceof pretty.MkPrettyRep.class) {
      param0 = scrut.cseq;
      param1 = scrut.n;
      param2 = scrut.b1;
      param3 = scrut.b2;
      seq1 = param0;
      ll1 = param1;
      emp1 = param2;
      sl1 = param3;
      tmp = ll1 + 1;
      tmp1 = width - tmp;
      scrut1 = runtime.safeCall(p2(tmp1, false));
      if (scrut1 instanceof pretty.MkPrettyRep.class) {
        param01 = scrut1.cseq;
        param11 = scrut1.n;
        param21 = scrut1.b1;
        param31 = scrut1.b2;
        seq2 = param01;
        ll2 = param11;
        emp2 = param21;
        sl2 = param31;
        tmp2 = width - n;
        scrut2 = runtime.safeCall(p2(tmp2, false));
        if (scrut2 instanceof pretty.MkPrettyRep.class) {
          param02 = scrut2.cseq;
          param12 = scrut2.n;
          param22 = scrut2.b1;
          param32 = scrut2.b2;
          seq2_ = param02;
          ll2_ = param12;
          emp2_ = param22;
          sl2_ = param32;
          if (emp1 === true) {
            return runtime.safeCall(p2(width, is_vert))
          } else {
            tmp3 = ll1 <= n;
            scrut3 = pretty.orL(tmp3, sl2);
            if (scrut3 === true) {
              tmp4 = pretty.cCh(" ");
              tmp5 = ll1 + 1;
              tmp6 = pretty.cIndent(tmp5, seq2);
              tmp7 = pretty.cAppend(tmp4, tmp6);
              tmp8 = pretty.cAppend(seq1, tmp7);
              tmp9 = ll1 + 1;
              tmp10 = tmp9 + ll2;
              tmp11 = pretty.andL(sl1, sl2);
              return pretty.MkPrettyRep(tmp8, tmp10, false, tmp11)
            } else {
              tmp12 = pretty.cIndent(n, seq2_);
              tmp13 = pretty.cAppend(pretty.cNL, tmp12);
              tmp14 = pretty.cAppend(seq1, tmp13);
              return pretty.MkPrettyRep(tmp14, ll2_, false, false)
            }
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static testPretty_nofib() {
    let pp_words, tmp, tmp1, pretty_stuff$this;
    pp_words = NofibPrelude.replicate(50, pp_word);
    pretty_stuff$this = runtime.safeCall(pretty_stuff_inst_15_16_tsni(pp_words));
    tmp = ppShow_inst_15_17_tsni(80, pretty_stuff$this);
    tmp1 = NofibPrelude.nofibStringToList("\n");
    return append_inst_15_25_tsni(tmp, tmp1)
  } 
  static main() {
    let tmp;
    tmp = testPretty_nofib_inst_22_23_tsni();
    return NofibPrelude.nofibListToString(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "pretty"]; 
});
let pretty = pretty1; export default pretty;
