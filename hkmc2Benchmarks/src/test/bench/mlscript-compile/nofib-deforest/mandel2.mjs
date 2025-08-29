const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let check_line, mandel21, check_line$, check_perim_inst_1_2_tsni, build_tree_inst_3_4_tsni, check_perim_inst_3_4_2_tsni, testMandel2_nofib_inst_5_6_tsni, build_tree_inst_5_6_4_tsni, check_perim_inst_5_6_4_2_tsni, point_colour_inst_0_7_tsni, point_colour_inst_0_8_tsni, point_colour_inst_1_2_8_tsni, point_colour_inst_1_2_7_tsni, point_colour_inst_3_4_2_7_tsni, point_colour_inst_3_4_2_8_tsni, point_colour_inst_5_6_4_2_8_tsni, point_colour_inst_5_6_4_2_7_tsni;
check_perim_inst_1_2_tsni = function check_perim_inst_1_2_tsni(x1y1, x2y2) {
  let col1, first1, first0, x1, y1, first11, first01, x2, y2, col2, col3, col4, corners_diff, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, arr, arr1, tmp1, tmp2, arr2, tmp3, arr3, tmp4, arr4, tmp5, arr5, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  tmp = mandel2.point_colour(x1y1);
  col1 = tmp;
  if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
    first0 = runtime.Tuple.get(x1y1, 0);
    first1 = runtime.Tuple.get(x1y1, 1);
    x1 = first0;
    y1 = first1;
    if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
      first01 = runtime.Tuple.get(x2y2, 0);
      first11 = runtime.Tuple.get(x2y2, 1);
      x2 = first01;
      y2 = first11;
      scrut7 = mandel2.equalp(x1y1, x2y2);
      if (scrut7 === true) {
        return col1
      } else {
        _deforest_Deforest_Arr_2_01 = x2;
        _deforest_Deforest_Arr_2_11 = y1;
        arr = () => {
          let first12, first02, x, y, tmp6, tmp7;
          first02 = _deforest_Deforest_Arr_2_01;
          first12 = _deforest_Deforest_Arr_2_11;
          x = first02;
          y = first12;
          tmp6 = mandel2.np(x);
          tmp7 = mandel2.nq(y);
          return mandel2.check_radius(tmp6, tmp7, 0, 0.0, 0.0)
        };
        col2 = point_colour_inst_1_2_7_tsni(arr);
        col3 = mandel2.point_colour(x2y2);
        _deforest_Deforest_Arr_2_0 = x1;
        _deforest_Deforest_Arr_2_1 = y2;
        arr1 = () => {
          let first12, first02, x, y, tmp6, tmp7;
          first02 = _deforest_Deforest_Arr_2_0;
          first12 = _deforest_Deforest_Arr_2_1;
          x = first02;
          y = first12;
          tmp6 = mandel2.np(x);
          tmp7 = mandel2.nq(y);
          return mandel2.check_radius(tmp6, tmp7, 0, 0.0, 0.0)
        };
        col4 = point_colour_inst_1_2_8_tsni(arr1);
        scrut = col1 == col2;
        if (scrut === true) {
          scrut1 = col1 == col3;
          if (scrut1 === true) {
            scrut2 = col1 == col4;
            if (scrut2 === true) {
              tmp1 = false;
            } else {
              tmp1 = true;
            }
          } else {
            tmp1 = true;
          }
        } else {
          tmp1 = true;
        }
        corners_diff = tmp1;
        if (corners_diff === true) {
          return - 1
        } else {
          tmp2 = x1 + 1;
          arr2 = globalThis.Object.freeze([
            tmp2,
            y1
          ]);
          scrut3 = check_line$(col1, x1, y1, x2, y2, arr2, mandel2.right);
          if (scrut3 === true) {
            tmp3 = y1 + 1;
            arr3 = globalThis.Object.freeze([
              x2,
              tmp3
            ]);
            scrut4 = check_line$(col1, x1, y1, x2, y2, arr3, mandel2.down);
            if (scrut4 === true) {
              tmp4 = x2 - 1;
              arr4 = globalThis.Object.freeze([
                tmp4,
                y2
              ]);
              scrut5 = check_line$(col1, x1, y1, x2, y2, arr4, mandel2.left);
              if (scrut5 === true) {
                tmp5 = y2 - 1;
                arr5 = globalThis.Object.freeze([
                  x1,
                  tmp5
                ]);
                scrut6 = check_line$(col1, x1, y1, x2, y2, arr5, mandel2.up);
                if (scrut6 === true) {
                  return col1
                } else {
                  return - 1
                }
              } else {
                return - 1
              }
            } else {
              return - 1
            }
          } else {
            return - 1
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
build_tree_inst_3_4_tsni = function build_tree_inst_3_4_tsni(x1y1, x2y2) {
  let first1, first0, x1, y1, first11, first01, x2, y2, rec_col, split, scrut, split_x, split_y, nsp1, nsp2, nsp3, nsp4, ewp1, ewp2, ewp3, ewp4, scrut1, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr, tmp8, arr1, arr2, tmp9, arr3, tmp10, tmp11, tmp12, tmp13;
  if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
    first0 = runtime.Tuple.get(x1y1, 0);
    first1 = runtime.Tuple.get(x1y1, 1);
    x1 = first0;
    y1 = first1;
    if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
      first01 = runtime.Tuple.get(x2y2, 0);
      first11 = runtime.Tuple.get(x2y2, 1);
      x2 = first01;
      y2 = first11;
      tmp = check_perim_inst_3_4_2_tsni(x1y1, x2y2);
      rec_col = tmp;
      tmp1 = - 1;
      tmp2 = rec_col == tmp1;
      scrut2 = ! tmp2;
      if (scrut2 === true) {
        return runtime.safeCall(mandel2.Leaf(rec_col))
      } else {
        tmp3 = x2 - x1;
        tmp4 = y2 - y1;
        scrut = tmp3 >= tmp4;
        if (scrut === true) {
          tmp5 = "NS";
        } else {
          tmp5 = "EW";
        }
        split = tmp5;
        tmp6 = x2 + x1;
        split_x = NofibPrelude.intDiv(tmp6, 2);
        tmp7 = y2 + y1;
        split_y = NofibPrelude.intDiv(tmp7, 2);
        nsp1 = x1y1;
        arr = globalThis.Object.freeze([
          split_x,
          y2
        ]);
        nsp2 = arr;
        tmp8 = split_x + 1;
        arr1 = globalThis.Object.freeze([
          tmp8,
          y1
        ]);
        nsp3 = arr1;
        nsp4 = x2y2;
        ewp1 = x1y1;
        arr2 = globalThis.Object.freeze([
          x2,
          split_y
        ]);
        ewp2 = arr2;
        tmp9 = split_y + 1;
        arr3 = globalThis.Object.freeze([
          x1,
          tmp9
        ]);
        ewp3 = arr3;
        ewp4 = x2y2;
        scrut1 = split == "NS";
        if (scrut1 === true) {
          tmp10 = build_tree_inst_3_4_tsni(nsp1, nsp2);
          tmp11 = build_tree_inst_3_4_tsni(nsp3, nsp4);
          return mandel2.NS(tmp10, tmp11)
        } else {
          tmp12 = build_tree_inst_3_4_tsni(ewp1, ewp2);
          tmp13 = build_tree_inst_3_4_tsni(ewp3, ewp4);
          return mandel2.EW(tmp12, tmp13)
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_perim_inst_3_4_2_tsni = function check_perim_inst_3_4_2_tsni(x1y1, x2y2) {
  let col1, first1, first0, x1, y1, first11, first01, x2, y2, col2, col3, col4, corners_diff, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, arr, arr1, tmp1, tmp2, arr2, tmp3, arr3, tmp4, arr4, tmp5, arr5, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  tmp = mandel2.point_colour(x1y1);
  col1 = tmp;
  if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
    first0 = runtime.Tuple.get(x1y1, 0);
    first1 = runtime.Tuple.get(x1y1, 1);
    x1 = first0;
    y1 = first1;
    if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
      first01 = runtime.Tuple.get(x2y2, 0);
      first11 = runtime.Tuple.get(x2y2, 1);
      x2 = first01;
      y2 = first11;
      scrut7 = mandel2.equalp(x1y1, x2y2);
      if (scrut7 === true) {
        return col1
      } else {
        _deforest_Deforest_Arr_2_0 = x2;
        _deforest_Deforest_Arr_2_1 = y1;
        arr = () => {
          let first12, first02, x, y, tmp6, tmp7;
          first02 = _deforest_Deforest_Arr_2_0;
          first12 = _deforest_Deforest_Arr_2_1;
          x = first02;
          y = first12;
          tmp6 = mandel2.np(x);
          tmp7 = mandel2.nq(y);
          return mandel2.check_radius(tmp6, tmp7, 0, 0.0, 0.0)
        };
        col2 = point_colour_inst_3_4_2_7_tsni(arr);
        col3 = mandel2.point_colour(x2y2);
        _deforest_Deforest_Arr_2_01 = x1;
        _deforest_Deforest_Arr_2_11 = y2;
        arr1 = () => {
          let first12, first02, x, y, tmp6, tmp7;
          first02 = _deforest_Deforest_Arr_2_01;
          first12 = _deforest_Deforest_Arr_2_11;
          x = first02;
          y = first12;
          tmp6 = mandel2.np(x);
          tmp7 = mandel2.nq(y);
          return mandel2.check_radius(tmp6, tmp7, 0, 0.0, 0.0)
        };
        col4 = point_colour_inst_3_4_2_8_tsni(arr1);
        scrut = col1 == col2;
        if (scrut === true) {
          scrut1 = col1 == col3;
          if (scrut1 === true) {
            scrut2 = col1 == col4;
            if (scrut2 === true) {
              tmp1 = false;
            } else {
              tmp1 = true;
            }
          } else {
            tmp1 = true;
          }
        } else {
          tmp1 = true;
        }
        corners_diff = tmp1;
        if (corners_diff === true) {
          return - 1
        } else {
          tmp2 = x1 + 1;
          arr2 = globalThis.Object.freeze([
            tmp2,
            y1
          ]);
          scrut3 = check_line$(col1, x1, y1, x2, y2, arr2, mandel2.right);
          if (scrut3 === true) {
            tmp3 = y1 + 1;
            arr3 = globalThis.Object.freeze([
              x2,
              tmp3
            ]);
            scrut4 = check_line$(col1, x1, y1, x2, y2, arr3, mandel2.down);
            if (scrut4 === true) {
              tmp4 = x2 - 1;
              arr4 = globalThis.Object.freeze([
                tmp4,
                y2
              ]);
              scrut5 = check_line$(col1, x1, y1, x2, y2, arr4, mandel2.left);
              if (scrut5 === true) {
                tmp5 = y2 - 1;
                arr5 = globalThis.Object.freeze([
                  x1,
                  tmp5
                ]);
                scrut6 = check_line$(col1, x1, y1, x2, y2, arr5, mandel2.up);
                if (scrut6 === true) {
                  return col1
                } else {
                  return - 1
                }
              } else {
                return - 1
              }
            } else {
              return - 1
            }
          } else {
            return - 1
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
testMandel2_nofib_inst_5_6_tsni = function testMandel2_nofib_inst_5_6_tsni(n) {
  let arr, tmp, arr1, tmp1;
  arr = globalThis.Object.freeze([
    0,
    0
  ]);
  tmp = NofibPrelude.intDiv(mandel2.size, 2);
  arr1 = globalThis.Object.freeze([
    mandel2.size,
    tmp
  ]);
  tmp1 = build_tree_inst_5_6_4_tsni(arr, arr1);
  return mandel2.finite(tmp1)
};
build_tree_inst_5_6_4_tsni = function build_tree_inst_5_6_4_tsni(x1y1, x2y2) {
  let first1, first0, x1, y1, first11, first01, x2, y2, rec_col, split, scrut, split_x, split_y, nsp1, nsp2, nsp3, nsp4, ewp1, ewp2, ewp3, ewp4, scrut1, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr, tmp8, arr1, arr2, tmp9, arr3, tmp10, tmp11, tmp12, tmp13;
  if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
    first0 = runtime.Tuple.get(x1y1, 0);
    first1 = runtime.Tuple.get(x1y1, 1);
    x1 = first0;
    y1 = first1;
    if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
      first01 = runtime.Tuple.get(x2y2, 0);
      first11 = runtime.Tuple.get(x2y2, 1);
      x2 = first01;
      y2 = first11;
      tmp = check_perim_inst_5_6_4_2_tsni(x1y1, x2y2);
      rec_col = tmp;
      tmp1 = - 1;
      tmp2 = rec_col == tmp1;
      scrut2 = ! tmp2;
      if (scrut2 === true) {
        return runtime.safeCall(mandel2.Leaf(rec_col))
      } else {
        tmp3 = x2 - x1;
        tmp4 = y2 - y1;
        scrut = tmp3 >= tmp4;
        if (scrut === true) {
          tmp5 = "NS";
        } else {
          tmp5 = "EW";
        }
        split = tmp5;
        tmp6 = x2 + x1;
        split_x = NofibPrelude.intDiv(tmp6, 2);
        tmp7 = y2 + y1;
        split_y = NofibPrelude.intDiv(tmp7, 2);
        nsp1 = x1y1;
        arr = globalThis.Object.freeze([
          split_x,
          y2
        ]);
        nsp2 = arr;
        tmp8 = split_x + 1;
        arr1 = globalThis.Object.freeze([
          tmp8,
          y1
        ]);
        nsp3 = arr1;
        nsp4 = x2y2;
        ewp1 = x1y1;
        arr2 = globalThis.Object.freeze([
          x2,
          split_y
        ]);
        ewp2 = arr2;
        tmp9 = split_y + 1;
        arr3 = globalThis.Object.freeze([
          x1,
          tmp9
        ]);
        ewp3 = arr3;
        ewp4 = x2y2;
        scrut1 = split == "NS";
        if (scrut1 === true) {
          tmp10 = build_tree_inst_5_6_4_tsni(nsp1, nsp2);
          tmp11 = build_tree_inst_5_6_4_tsni(nsp3, nsp4);
          return mandel2.NS(tmp10, tmp11)
        } else {
          tmp12 = build_tree_inst_5_6_4_tsni(ewp1, ewp2);
          tmp13 = build_tree_inst_5_6_4_tsni(ewp3, ewp4);
          return mandel2.EW(tmp12, tmp13)
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_perim_inst_5_6_4_2_tsni = function check_perim_inst_5_6_4_2_tsni(x1y1, x2y2) {
  let col1, first1, first0, x1, y1, first11, first01, x2, y2, col2, col3, col4, corners_diff, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, arr, arr1, tmp1, tmp2, arr2, tmp3, arr3, tmp4, arr4, tmp5, arr5, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  tmp = mandel2.point_colour(x1y1);
  col1 = tmp;
  if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
    first0 = runtime.Tuple.get(x1y1, 0);
    first1 = runtime.Tuple.get(x1y1, 1);
    x1 = first0;
    y1 = first1;
    if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
      first01 = runtime.Tuple.get(x2y2, 0);
      first11 = runtime.Tuple.get(x2y2, 1);
      x2 = first01;
      y2 = first11;
      scrut7 = mandel2.equalp(x1y1, x2y2);
      if (scrut7 === true) {
        return col1
      } else {
        _deforest_Deforest_Arr_2_01 = x2;
        _deforest_Deforest_Arr_2_11 = y1;
        arr = () => {
          let first12, first02, x, y, tmp6, tmp7;
          first02 = _deforest_Deforest_Arr_2_01;
          first12 = _deforest_Deforest_Arr_2_11;
          x = first02;
          y = first12;
          tmp6 = mandel2.np(x);
          tmp7 = mandel2.nq(y);
          return mandel2.check_radius(tmp6, tmp7, 0, 0.0, 0.0)
        };
        col2 = point_colour_inst_5_6_4_2_7_tsni(arr);
        col3 = mandel2.point_colour(x2y2);
        _deforest_Deforest_Arr_2_0 = x1;
        _deforest_Deforest_Arr_2_1 = y2;
        arr1 = () => {
          let first12, first02, x, y, tmp6, tmp7;
          first02 = _deforest_Deforest_Arr_2_0;
          first12 = _deforest_Deforest_Arr_2_1;
          x = first02;
          y = first12;
          tmp6 = mandel2.np(x);
          tmp7 = mandel2.nq(y);
          return mandel2.check_radius(tmp6, tmp7, 0, 0.0, 0.0)
        };
        col4 = point_colour_inst_5_6_4_2_8_tsni(arr1);
        scrut = col1 == col2;
        if (scrut === true) {
          scrut1 = col1 == col3;
          if (scrut1 === true) {
            scrut2 = col1 == col4;
            if (scrut2 === true) {
              tmp1 = false;
            } else {
              tmp1 = true;
            }
          } else {
            tmp1 = true;
          }
        } else {
          tmp1 = true;
        }
        corners_diff = tmp1;
        if (corners_diff === true) {
          return - 1
        } else {
          tmp2 = x1 + 1;
          arr2 = globalThis.Object.freeze([
            tmp2,
            y1
          ]);
          scrut3 = check_line$(col1, x1, y1, x2, y2, arr2, mandel2.right);
          if (scrut3 === true) {
            tmp3 = y1 + 1;
            arr3 = globalThis.Object.freeze([
              x2,
              tmp3
            ]);
            scrut4 = check_line$(col1, x1, y1, x2, y2, arr3, mandel2.down);
            if (scrut4 === true) {
              tmp4 = x2 - 1;
              arr4 = globalThis.Object.freeze([
                tmp4,
                y2
              ]);
              scrut5 = check_line$(col1, x1, y1, x2, y2, arr4, mandel2.left);
              if (scrut5 === true) {
                tmp5 = y2 - 1;
                arr5 = globalThis.Object.freeze([
                  x1,
                  tmp5
                ]);
                scrut6 = check_line$(col1, x1, y1, x2, y2, arr5, mandel2.up);
                if (scrut6 === true) {
                  return col1
                } else {
                  return - 1
                }
              } else {
                return - 1
              }
            } else {
              return - 1
            }
          } else {
            return - 1
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
point_colour_inst_0_7_tsni = function point_colour_inst_0_7_tsni(xy) {
  return runtime.safeCall(xy())
};
point_colour_inst_0_8_tsni = function point_colour_inst_0_8_tsni(xy) {
  return runtime.safeCall(xy())
};
point_colour_inst_1_2_8_tsni = function point_colour_inst_1_2_8_tsni(xy) {
  return runtime.safeCall(xy())
};
point_colour_inst_1_2_7_tsni = function point_colour_inst_1_2_7_tsni(xy) {
  return runtime.safeCall(xy())
};
point_colour_inst_3_4_2_7_tsni = function point_colour_inst_3_4_2_7_tsni(xy) {
  return runtime.safeCall(xy())
};
point_colour_inst_3_4_2_8_tsni = function point_colour_inst_3_4_2_8_tsni(xy) {
  return runtime.safeCall(xy())
};
point_colour_inst_5_6_4_2_8_tsni = function point_colour_inst_5_6_4_2_8_tsni(xy) {
  return runtime.safeCall(xy())
};
point_colour_inst_5_6_4_2_7_tsni = function point_colour_inst_5_6_4_2_7_tsni(xy) {
  return runtime.safeCall(xy())
};
check_line$ = function check_line$(col1, x1, y1, x2, y2, xcyc, xdyd) {
  let first1, first0, xc, yc, first11, first01, xd, yd, finished, scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, arr, arr1;
  if (runtime.Tuple.isArrayLike(xcyc) && xcyc.length === 2) {
    first0 = runtime.Tuple.get(xcyc, 0);
    first1 = runtime.Tuple.get(xcyc, 1);
    xc = first0;
    yc = first1;
    if (runtime.Tuple.isArrayLike(xdyd) && xdyd.length === 2) {
      first01 = runtime.Tuple.get(xdyd, 0);
      first11 = runtime.Tuple.get(xdyd, 1);
      xd = first01;
      yd = first11;
      scrut2 = mandel21.equalp(xdyd, mandel21.right);
      if (scrut2 === true) {
        tmp = xc >= x2;
      } else {
        scrut1 = mandel21.equalp(xdyd, mandel21.down);
        if (scrut1 === true) {
          tmp = yc <= y2;
        } else {
          scrut = mandel21.equalp(xdyd, mandel21.left);
          if (scrut === true) {
            tmp = xc <= x1;
          } else {
            tmp = yc >= y1;
          }
        }
      }
      finished = tmp;
      if (finished === true) {
        return true
      } else {
        tmp1 = mandel21.point_colour(xcyc);
        tmp2 = tmp1 == col1;
        scrut3 = ! tmp2;
        if (scrut3 === true) {
          return false
        } else {
          tmp3 = xc + xd;
          tmp4 = yc + yd;
          arr = globalThis.Object.freeze([
            tmp3,
            tmp4
          ]);
          arr1 = globalThis.Object.freeze([
            xd,
            yd
          ]);
          return check_line$(col1, x1, y1, x2, y2, arr, arr1)
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_line = function check_line(col1, x1, y1, x2, y2) {
  return (xcyc, xdyd) => {
    return check_line$(col1, x1, y1, x2, y2, xcyc, xdyd)
  }
};
(class mandel2 {
  static {
    mandel21 = mandel2;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, arr, arr1, tmp9, arr2, arr3;
    this.MandTree = class MandTree {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MandTree"]; 
    };
    this.NS = function NS(l, r) {
      return globalThis.Object.freeze(new NS.class(l, r));
    };
    Object.defineProperty(this.NS, "class", {
      enumerable: true,
      value: class NS extends mandel2.MandTree {
        constructor(l, r) {
          super();
          this.l = l;
          this.r = r;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "NS", ["l", "r"]]; 
      }
    });
    this.EW = function EW(l, r) {
      return globalThis.Object.freeze(new EW.class(l, r));
    };
    Object.defineProperty(this.EW, "class", {
      enumerable: true,
      value: class EW extends mandel2.MandTree {
        constructor(l, r) {
          super();
          this.l = l;
          this.r = r;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "EW", ["l", "r"]]; 
      }
    });
    this.Leaf = function Leaf(colour) {
      return globalThis.Object.freeze(new Leaf.class(colour));
    };
    Object.defineProperty(this.Leaf, "class", {
      enumerable: true,
      value: class Leaf extends mandel2.MandTree {
        constructor(colour) {
          super();
          this.colour = colour;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Leaf", ["colour"]]; 
      }
    });
    this.size = 200;
    tmp = - 2.25;
    this.pmn = tmp;
    this.pmx = 0.75;
    tmp1 = - 1.5;
    this.qmn = tmp1;
    this.qmx = 1.5;
    this.m = 20;
    this.num_cols = 26;
    tmp2 = mandel2.pmx - mandel2.pmn;
    tmp3 = mandel2.size - 1;
    tmp4 = tmp2 / tmp3;
    this.delta_p = tmp4;
    tmp5 = mandel2.qmx - mandel2.qmn;
    tmp6 = mandel2.size - 1;
    tmp7 = tmp5 / tmp6;
    this.delta_q = tmp7;
    tmp8 = - 1;
    arr = globalThis.Object.freeze([
      0,
      tmp8
    ]);
    this.up = arr;
    arr1 = globalThis.Object.freeze([
      0,
      1
    ]);
    this.down = arr1;
    tmp9 = - 1;
    arr2 = globalThis.Object.freeze([
      tmp9,
      0
    ]);
    this.left = arr2;
    arr3 = globalThis.Object.freeze([
      1,
      0
    ]);
    this.right = arr3;
  }
  static equalp(p1, p2) {
    let first1, first0, x1, x2, first11, first01, y1, y2, scrut, scrut1;
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      first0 = runtime.Tuple.get(p1, 0);
      first1 = runtime.Tuple.get(p1, 1);
      x1 = first0;
      x2 = first1;
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        first01 = runtime.Tuple.get(p2, 0);
        first11 = runtime.Tuple.get(p2, 1);
        y1 = first01;
        y2 = first11;
        scrut = x1 == y1;
        if (scrut === true) {
          scrut1 = x2 == y2;
          if (scrut1 === true) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static np(x) {
    let tmp;
    tmp = x * mandel2.delta_p;
    return mandel2.pmn + tmp
  } 
  static nq(y) {
    let tmp;
    tmp = y * mandel2.delta_q;
    return mandel2.qmn + tmp
  } 
  static radius(x, y) {
    let tmp, tmp1;
    tmp = x * x;
    tmp1 = y * y;
    return tmp + tmp1
  } 
  static new_x(x, y, p) {
    let tmp, tmp1, tmp2;
    tmp = x * x;
    tmp1 = y * y;
    tmp2 = tmp - tmp1;
    return tmp2 + p
  } 
  static new_y(x, y, q) {
    let tmp, tmp1;
    tmp = 2.0 * x;
    tmp1 = tmp * y;
    return tmp1 + q
  } 
  static finite(t) {
    let param0, param1, t1, t2, scrut, scrut1, t11, t21, scrut2, scrut3, c;
    if (t instanceof mandel2.Leaf.class) {
      param0 = t.colour;
      c = param0;
      return c == c
    } else if (t instanceof mandel2.NS.class) {
      param0 = t.l;
      param1 = t.r;
      t11 = param0;
      t21 = param1;
      scrut2 = mandel2.finite(t11);
      if (scrut2 === true) {
        scrut3 = mandel2.finite(t21);
        if (scrut3 === true) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    } else if (t instanceof mandel2.EW.class) {
      param0 = t.l;
      param1 = t.r;
      t1 = param0;
      t2 = param1;
      scrut = mandel2.finite(t1);
      if (scrut === true) {
        scrut1 = mandel2.finite(t2);
        if (scrut1 === true) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static check_radius(p, q, k, x, y) {
    let xn, yn, r, kp, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
    tmp = mandel2.new_x(x, y, p);
    xn = tmp;
    tmp1 = mandel2.new_y(x, y, q);
    yn = tmp1;
    tmp2 = mandel2.radius(xn, yn);
    r = tmp2;
    tmp3 = k + 1;
    kp = tmp3;
    scrut1 = kp == mandel2.num_cols;
    if (scrut1 === true) {
      return 0
    } else {
      scrut = r > mandel2.m;
      if (scrut === true) {
        return kp
      } else {
        return mandel2.check_radius(p, q, kp, xn, yn)
      }
    }
  } 
  static point_colour(xy) {
    let first1, first0, x, y, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(xy) && xy.length === 2) {
      first0 = runtime.Tuple.get(xy, 0);
      first1 = runtime.Tuple.get(xy, 1);
      x = first0;
      y = first1;
      tmp = mandel2.np(x);
      tmp1 = mandel2.nq(y);
      return mandel2.check_radius(tmp, tmp1, 0, 0.0, 0.0)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static check_perim(x1y1, x2y2) {
    let col1, first1, first0, x1, y1, first11, first01, x2, y2, col2, col3, col4, corners_diff, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, arr, arr1, tmp1, tmp2, arr2, tmp3, arr3, tmp4, arr4, tmp5, arr5, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    tmp = mandel2.point_colour(x1y1);
    col1 = tmp;
    if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
      first0 = runtime.Tuple.get(x1y1, 0);
      first1 = runtime.Tuple.get(x1y1, 1);
      x1 = first0;
      y1 = first1;
      if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
        first01 = runtime.Tuple.get(x2y2, 0);
        first11 = runtime.Tuple.get(x2y2, 1);
        x2 = first01;
        y2 = first11;
        scrut7 = mandel2.equalp(x1y1, x2y2);
        if (scrut7 === true) {
          return col1
        } else {
          _deforest_Deforest_Arr_2_0 = x2;
          _deforest_Deforest_Arr_2_1 = y1;
          arr = () => {
            let first12, first02, x, y, tmp6, tmp7;
            first02 = _deforest_Deforest_Arr_2_0;
            first12 = _deforest_Deforest_Arr_2_1;
            x = first02;
            y = first12;
            tmp6 = mandel2.np(x);
            tmp7 = mandel2.nq(y);
            return mandel2.check_radius(tmp6, tmp7, 0, 0.0, 0.0)
          };
          col2 = point_colour_inst_0_7_tsni(arr);
          col3 = mandel2.point_colour(x2y2);
          _deforest_Deforest_Arr_2_01 = x1;
          _deforest_Deforest_Arr_2_11 = y2;
          arr1 = () => {
            let first12, first02, x, y, tmp6, tmp7;
            first02 = _deforest_Deforest_Arr_2_01;
            first12 = _deforest_Deforest_Arr_2_11;
            x = first02;
            y = first12;
            tmp6 = mandel2.np(x);
            tmp7 = mandel2.nq(y);
            return mandel2.check_radius(tmp6, tmp7, 0, 0.0, 0.0)
          };
          col4 = point_colour_inst_0_8_tsni(arr1);
          scrut = col1 == col2;
          if (scrut === true) {
            scrut1 = col1 == col3;
            if (scrut1 === true) {
              scrut2 = col1 == col4;
              if (scrut2 === true) {
                tmp1 = false;
              } else {
                tmp1 = true;
              }
            } else {
              tmp1 = true;
            }
          } else {
            tmp1 = true;
          }
          corners_diff = tmp1;
          if (corners_diff === true) {
            return - 1
          } else {
            tmp2 = x1 + 1;
            arr2 = globalThis.Object.freeze([
              tmp2,
              y1
            ]);
            scrut3 = check_line$(col1, x1, y1, x2, y2, arr2, mandel2.right);
            if (scrut3 === true) {
              tmp3 = y1 + 1;
              arr3 = globalThis.Object.freeze([
                x2,
                tmp3
              ]);
              scrut4 = check_line$(col1, x1, y1, x2, y2, arr3, mandel2.down);
              if (scrut4 === true) {
                tmp4 = x2 - 1;
                arr4 = globalThis.Object.freeze([
                  tmp4,
                  y2
                ]);
                scrut5 = check_line$(col1, x1, y1, x2, y2, arr4, mandel2.left);
                if (scrut5 === true) {
                  tmp5 = y2 - 1;
                  arr5 = globalThis.Object.freeze([
                    x1,
                    tmp5
                  ]);
                  scrut6 = check_line$(col1, x1, y1, x2, y2, arr5, mandel2.up);
                  if (scrut6 === true) {
                    return col1
                  } else {
                    return - 1
                  }
                } else {
                  return - 1
                }
              } else {
                return - 1
              }
            } else {
              return - 1
            }
          }
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static build_tree(x1y1, x2y2) {
    let first1, first0, x1, y1, first11, first01, x2, y2, rec_col, split, scrut, split_x, split_y, nsp1, nsp2, nsp3, nsp4, ewp1, ewp2, ewp3, ewp4, scrut1, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, arr, tmp8, arr1, arr2, tmp9, arr3, tmp10, tmp11, tmp12, tmp13;
    if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
      first0 = runtime.Tuple.get(x1y1, 0);
      first1 = runtime.Tuple.get(x1y1, 1);
      x1 = first0;
      y1 = first1;
      if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
        first01 = runtime.Tuple.get(x2y2, 0);
        first11 = runtime.Tuple.get(x2y2, 1);
        x2 = first01;
        y2 = first11;
        tmp = check_perim_inst_1_2_tsni(x1y1, x2y2);
        rec_col = tmp;
        tmp1 = - 1;
        tmp2 = rec_col == tmp1;
        scrut2 = ! tmp2;
        if (scrut2 === true) {
          return runtime.safeCall(mandel2.Leaf(rec_col))
        } else {
          tmp3 = x2 - x1;
          tmp4 = y2 - y1;
          scrut = tmp3 >= tmp4;
          if (scrut === true) {
            tmp5 = "NS";
          } else {
            tmp5 = "EW";
          }
          split = tmp5;
          tmp6 = x2 + x1;
          split_x = NofibPrelude.intDiv(tmp6, 2);
          tmp7 = y2 + y1;
          split_y = NofibPrelude.intDiv(tmp7, 2);
          nsp1 = x1y1;
          arr = globalThis.Object.freeze([
            split_x,
            y2
          ]);
          nsp2 = arr;
          tmp8 = split_x + 1;
          arr1 = globalThis.Object.freeze([
            tmp8,
            y1
          ]);
          nsp3 = arr1;
          nsp4 = x2y2;
          ewp1 = x1y1;
          arr2 = globalThis.Object.freeze([
            x2,
            split_y
          ]);
          ewp2 = arr2;
          tmp9 = split_y + 1;
          arr3 = globalThis.Object.freeze([
            x1,
            tmp9
          ]);
          ewp3 = arr3;
          ewp4 = x2y2;
          scrut1 = split == "NS";
          if (scrut1 === true) {
            tmp10 = mandel2.build_tree(nsp1, nsp2);
            tmp11 = mandel2.build_tree(nsp3, nsp4);
            return mandel2.NS(tmp10, tmp11)
          } else {
            tmp12 = mandel2.build_tree(ewp1, ewp2);
            tmp13 = mandel2.build_tree(ewp3, ewp4);
            return mandel2.EW(tmp12, tmp13)
          }
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static testMandel2_nofib(n) {
    let arr, tmp, arr1, tmp1;
    arr = globalThis.Object.freeze([
      0,
      0
    ]);
    tmp = NofibPrelude.intDiv(mandel2.size, 2);
    arr1 = globalThis.Object.freeze([
      mandel2.size,
      tmp
    ]);
    tmp1 = build_tree_inst_3_4_tsni(arr, arr1);
    return mandel2.finite(tmp1)
  } 
  static main() {
    return testMandel2_nofib_inst_5_6_tsni(0)
  }
  static toString() { return runtime.render(this); }
  static [definitionMetadata] = ["module", "mandel2"]; 
});
let mandel2 = mandel21; export default mandel2;
