const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const listNth$accessorSymbol = globalThis.Symbol("listNth");
const isSome$accessorSymbol = globalThis.Symbol("isSome");
const snd$accessorSymbol = globalThis.Symbol("snd");
const playerEq$accessorSymbol = globalThis.Symbol("playerEq");
const moveTo$accessorSymbol = globalThis.Symbol("moveTo");
const top$accessorSymbol = globalThis.Symbol("top");
const boardToIndex$accessorSymbol = globalThis.Symbol("boardToIndex");
const listAll$tailrec$accessorSymbol = globalThis.Symbol("listAll$tailrec");
const listFoldl$tailrec$accessorSymbol = globalThis.Symbol("listFoldl$tailrec");
const map$tailrec$accessorSymbol = globalThis.Symbol("map$tailrec");
let go, minimax1, lambda, lambda1, lambda2, lambda$, lambda$1, lambda$2, doKid$, lambda$3, main_minimax$minimax, main_minimaxTT$minimaxTT, doKid$$doKid, main_minimax_successors_allMoves_f_rev_go$l_Nil, main_minimax_successors_allMoves_f_rev_go$l_Cons, main_minimax_successors_map$l_Nil, main_minimax_successors_map$l_Cons, main_minimax_map$l_Cons, main_minimax_map$l_Nil, main_minimaxTT_successors_allMoves_f_rev_go$l_Nil, main_minimaxTT_successors_allMoves_f_rev_go$l_Cons, main_minimaxTT_successors_map$l_Nil, main_minimaxTT_successors_map$l_Cons, main_minimaxTT_map$l_Cons, main_minimaxTT_map$l_Nil, main_minimaxTT_map$l_Cons$worker, main_minimaxTT_successors_map$l_Cons$worker, main_minimax_map$l_Cons$worker, main_minimax_successors_map$l_Cons$worker, main_minimaxTT$minimaxTT$worker, main_minimax$minimax$worker;
main_minimax$minimax = function main_minimax$minimax(p) {
  return (b) => {
    return main_minimax$minimax$worker(p, b)
  }
};
main_minimax$minimax$worker = function main_minimax$minimax$worker(p, b) {
  let tmp, tmp1, tmp2, tmp3, inlinedVal, p1, inlinedVal1, inlinedVal2, arg$Some$0$, inlinedVal3;
  p1 = minimax1.X;
  inlinedVal3 = minimax1[listNth$accessorSymbol](b, 0);
  if (inlinedVal3 instanceof minimax1.Some.class) {
    arg$Some$0$ = inlinedVal3.value;
    inlinedVal2 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$);
    if (inlinedVal2 === true) {
      let inlinedVal4, inlinedVal5, arg$Some$0$1, inlinedVal6;
      inlinedVal6 = minimax1[listNth$accessorSymbol](b, 1);
      if (inlinedVal6 instanceof minimax1.Some.class) {
        arg$Some$0$1 = inlinedVal6.value;
        inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
        if (inlinedVal5 === true) {
          let inlinedVal7, inlinedVal8, arg$Some$0$2, inlinedVal9;
          inlinedVal9 = minimax1[listNth$accessorSymbol](b, 2);
          if (inlinedVal9 instanceof minimax1.Some.class) {
            arg$Some$0$2 = inlinedVal9.value;
            inlinedVal8 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$2);
            if (inlinedVal8 === true) {
              inlinedVal7 = true;
            } else {
              inlinedVal7 = false;
            }
          } else if (inlinedVal9 instanceof minimax1.None.class) {
            inlinedVal7 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          inlinedVal4 = inlinedVal7;
        } else {
          inlinedVal4 = false;
        }
      } else if (inlinedVal6 instanceof minimax1.None.class) {
        inlinedVal4 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      inlinedVal1 = inlinedVal4;
    } else {
      inlinedVal1 = false;
    }
  } else if (inlinedVal3 instanceof minimax1.None.class) {
    inlinedVal1 = false;
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  if (inlinedVal1 === false) {
    let inlinedVal4, inlinedVal5, arg$Some$0$1, inlinedVal6;
    inlinedVal6 = minimax1[listNth$accessorSymbol](b, 3);
    if (inlinedVal6 instanceof minimax1.Some.class) {
      arg$Some$0$1 = inlinedVal6.value;
      inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
      if (inlinedVal5 === true) {
        let inlinedVal7, inlinedVal8, arg$Some$0$2, inlinedVal9;
        inlinedVal9 = minimax1[listNth$accessorSymbol](b, 4);
        if (inlinedVal9 instanceof minimax1.Some.class) {
          arg$Some$0$2 = inlinedVal9.value;
          inlinedVal8 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$2);
          if (inlinedVal8 === true) {
            let inlinedVal10, inlinedVal11, arg$Some$0$3, inlinedVal12;
            inlinedVal12 = minimax1[listNth$accessorSymbol](b, 5);
            if (inlinedVal12 instanceof minimax1.Some.class) {
              arg$Some$0$3 = inlinedVal12.value;
              inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
              if (inlinedVal11 === true) {
                inlinedVal10 = true;
              } else {
                inlinedVal10 = false;
              }
            } else if (inlinedVal12 instanceof minimax1.None.class) {
              inlinedVal10 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            inlinedVal7 = inlinedVal10;
          } else {
            inlinedVal7 = false;
          }
        } else if (inlinedVal9 instanceof minimax1.None.class) {
          inlinedVal7 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        inlinedVal4 = inlinedVal7;
      } else {
        inlinedVal4 = false;
      }
    } else if (inlinedVal6 instanceof minimax1.None.class) {
      inlinedVal4 = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal4 === false) {
      let inlinedVal7, inlinedVal8, arg$Some$0$2, inlinedVal9;
      inlinedVal9 = minimax1[listNth$accessorSymbol](b, 6);
      if (inlinedVal9 instanceof minimax1.Some.class) {
        arg$Some$0$2 = inlinedVal9.value;
        inlinedVal8 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$2);
        if (inlinedVal8 === true) {
          let inlinedVal10, inlinedVal11, arg$Some$0$3, inlinedVal12;
          inlinedVal12 = minimax1[listNth$accessorSymbol](b, 7);
          if (inlinedVal12 instanceof minimax1.Some.class) {
            arg$Some$0$3 = inlinedVal12.value;
            inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
            if (inlinedVal11 === true) {
              let inlinedVal13, inlinedVal14, arg$Some$0$4, inlinedVal15;
              inlinedVal15 = minimax1[listNth$accessorSymbol](b, 8);
              if (inlinedVal15 instanceof minimax1.Some.class) {
                arg$Some$0$4 = inlinedVal15.value;
                inlinedVal14 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$4);
                if (inlinedVal14 === true) {
                  inlinedVal13 = true;
                } else {
                  inlinedVal13 = false;
                }
              } else if (inlinedVal15 instanceof minimax1.None.class) {
                inlinedVal13 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              inlinedVal10 = inlinedVal13;
            } else {
              inlinedVal10 = false;
            }
          } else if (inlinedVal12 instanceof minimax1.None.class) {
            inlinedVal10 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          inlinedVal7 = inlinedVal10;
        } else {
          inlinedVal7 = false;
        }
      } else if (inlinedVal9 instanceof minimax1.None.class) {
        inlinedVal7 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal7 === false) {
        let inlinedVal10, inlinedVal11, arg$Some$0$3, inlinedVal12;
        inlinedVal12 = minimax1[listNth$accessorSymbol](b, 0);
        if (inlinedVal12 instanceof minimax1.Some.class) {
          arg$Some$0$3 = inlinedVal12.value;
          inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
          if (inlinedVal11 === true) {
            let inlinedVal13, inlinedVal14, arg$Some$0$4, inlinedVal15;
            inlinedVal15 = minimax1[listNth$accessorSymbol](b, 3);
            if (inlinedVal15 instanceof minimax1.Some.class) {
              arg$Some$0$4 = inlinedVal15.value;
              inlinedVal14 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$4);
              if (inlinedVal14 === true) {
                let inlinedVal16, inlinedVal17, arg$Some$0$5, inlinedVal18;
                inlinedVal18 = minimax1[listNth$accessorSymbol](b, 6);
                if (inlinedVal18 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = inlinedVal18.value;
                  inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                  if (inlinedVal17 === true) {
                    inlinedVal16 = true;
                  } else {
                    inlinedVal16 = false;
                  }
                } else if (inlinedVal18 instanceof minimax1.None.class) {
                  inlinedVal16 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                inlinedVal13 = inlinedVal16;
              } else {
                inlinedVal13 = false;
              }
            } else if (inlinedVal15 instanceof minimax1.None.class) {
              inlinedVal13 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            inlinedVal10 = inlinedVal13;
          } else {
            inlinedVal10 = false;
          }
        } else if (inlinedVal12 instanceof minimax1.None.class) {
          inlinedVal10 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        if (inlinedVal10 === false) {
          let inlinedVal13, inlinedVal14, arg$Some$0$4, inlinedVal15;
          inlinedVal15 = minimax1[listNth$accessorSymbol](b, 1);
          if (inlinedVal15 instanceof minimax1.Some.class) {
            arg$Some$0$4 = inlinedVal15.value;
            inlinedVal14 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$4);
            if (inlinedVal14 === true) {
              let inlinedVal16, inlinedVal17, arg$Some$0$5, inlinedVal18;
              inlinedVal18 = minimax1[listNth$accessorSymbol](b, 4);
              if (inlinedVal18 instanceof minimax1.Some.class) {
                arg$Some$0$5 = inlinedVal18.value;
                inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                if (inlinedVal17 === true) {
                  let inlinedVal19, inlinedVal20, arg$Some$0$6, inlinedVal21;
                  inlinedVal21 = minimax1[listNth$accessorSymbol](b, 7);
                  if (inlinedVal21 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = inlinedVal21.value;
                    inlinedVal20 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$6);
                    if (inlinedVal20 === true) {
                      inlinedVal19 = true;
                    } else {
                      inlinedVal19 = false;
                    }
                  } else if (inlinedVal21 instanceof minimax1.None.class) {
                    inlinedVal19 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  inlinedVal16 = inlinedVal19;
                } else {
                  inlinedVal16 = false;
                }
              } else if (inlinedVal18 instanceof minimax1.None.class) {
                inlinedVal16 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              inlinedVal13 = inlinedVal16;
            } else {
              inlinedVal13 = false;
            }
          } else if (inlinedVal15 instanceof minimax1.None.class) {
            inlinedVal13 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          if (inlinedVal13 === false) {
            let inlinedVal16, inlinedVal17, arg$Some$0$5, inlinedVal18;
            inlinedVal18 = minimax1[listNth$accessorSymbol](b, 2);
            if (inlinedVal18 instanceof minimax1.Some.class) {
              arg$Some$0$5 = inlinedVal18.value;
              inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
              if (inlinedVal17 === true) {
                let inlinedVal19, inlinedVal20, arg$Some$0$6, inlinedVal21;
                inlinedVal21 = minimax1[listNth$accessorSymbol](b, 5);
                if (inlinedVal21 instanceof minimax1.Some.class) {
                  arg$Some$0$6 = inlinedVal21.value;
                  inlinedVal20 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$6);
                  if (inlinedVal20 === true) {
                    let inlinedVal22, inlinedVal23, arg$Some$0$7, inlinedVal24;
                    inlinedVal24 = minimax1[listNth$accessorSymbol](b, 8);
                    if (inlinedVal24 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = inlinedVal24.value;
                      inlinedVal23 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$7);
                      if (inlinedVal23 === true) {
                        inlinedVal22 = true;
                      } else {
                        inlinedVal22 = false;
                      }
                    } else if (inlinedVal24 instanceof minimax1.None.class) {
                      inlinedVal22 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    inlinedVal19 = inlinedVal22;
                  } else {
                    inlinedVal19 = false;
                  }
                } else if (inlinedVal21 instanceof minimax1.None.class) {
                  inlinedVal19 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                inlinedVal16 = inlinedVal19;
              } else {
                inlinedVal16 = false;
              }
            } else if (inlinedVal18 instanceof minimax1.None.class) {
              inlinedVal16 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal16 === false) {
              let inlinedVal19, inlinedVal20, arg$Some$0$6, inlinedVal21;
              inlinedVal21 = minimax1[listNth$accessorSymbol](b, 0);
              if (inlinedVal21 instanceof minimax1.Some.class) {
                arg$Some$0$6 = inlinedVal21.value;
                inlinedVal20 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$6);
                if (inlinedVal20 === true) {
                  let inlinedVal22, inlinedVal23, arg$Some$0$7, inlinedVal24;
                  inlinedVal24 = minimax1[listNth$accessorSymbol](b, 4);
                  if (inlinedVal24 instanceof minimax1.Some.class) {
                    arg$Some$0$7 = inlinedVal24.value;
                    inlinedVal23 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$7);
                    if (inlinedVal23 === true) {
                      let inlinedVal25, inlinedVal26, arg$Some$0$8, inlinedVal27;
                      inlinedVal27 = minimax1[listNth$accessorSymbol](b, 8);
                      if (inlinedVal27 instanceof minimax1.Some.class) {
                        arg$Some$0$8 = inlinedVal27.value;
                        inlinedVal26 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$8);
                        if (inlinedVal26 === true) {
                          inlinedVal25 = true;
                        } else {
                          inlinedVal25 = false;
                        }
                      } else if (inlinedVal27 instanceof minimax1.None.class) {
                        inlinedVal25 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal22 = inlinedVal25;
                    } else {
                      inlinedVal22 = false;
                    }
                  } else if (inlinedVal24 instanceof minimax1.None.class) {
                    inlinedVal22 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  inlinedVal19 = inlinedVal22;
                } else {
                  inlinedVal19 = false;
                }
              } else if (inlinedVal21 instanceof minimax1.None.class) {
                inlinedVal19 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              if (inlinedVal19 === false) {
                let inlinedVal22, inlinedVal23, arg$Some$0$7, inlinedVal24;
                inlinedVal24 = minimax1[listNth$accessorSymbol](b, 2);
                if (inlinedVal24 instanceof minimax1.Some.class) {
                  arg$Some$0$7 = inlinedVal24.value;
                  inlinedVal23 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$7);
                  if (inlinedVal23 === true) {
                    let inlinedVal25, inlinedVal26, arg$Some$0$8, inlinedVal27;
                    inlinedVal27 = minimax1[listNth$accessorSymbol](b, 4);
                    if (inlinedVal27 instanceof minimax1.Some.class) {
                      arg$Some$0$8 = inlinedVal27.value;
                      inlinedVal26 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$8);
                      if (inlinedVal26 === true) {
                        let inlinedVal28, inlinedVal29, arg$Some$0$9, inlinedVal30;
                        inlinedVal30 = minimax1[listNth$accessorSymbol](b, 6);
                        if (inlinedVal30 instanceof minimax1.Some.class) {
                          arg$Some$0$9 = inlinedVal30.value;
                          inlinedVal29 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$9);
                          if (inlinedVal29 === true) {
                            inlinedVal28 = true;
                          } else {
                            inlinedVal28 = false;
                          }
                        } else if (inlinedVal30 instanceof minimax1.None.class) {
                          inlinedVal28 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        inlinedVal25 = inlinedVal28;
                      } else {
                        inlinedVal25 = false;
                      }
                    } else if (inlinedVal27 instanceof minimax1.None.class) {
                      inlinedVal25 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    inlinedVal22 = inlinedVal25;
                  } else {
                    inlinedVal22 = false;
                  }
                } else if (inlinedVal24 instanceof minimax1.None.class) {
                  inlinedVal22 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal22 === false) {
                  let p2, inlinedVal25, inlinedVal26, arg$Some$0$8, inlinedVal27;
                  p2 = minimax1.O;
                  inlinedVal27 = minimax1[listNth$accessorSymbol](b, 0);
                  if (inlinedVal27 instanceof minimax1.Some.class) {
                    arg$Some$0$8 = inlinedVal27.value;
                    inlinedVal26 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$8);
                    if (inlinedVal26 === true) {
                      let inlinedVal28, inlinedVal29, arg$Some$0$9, inlinedVal30;
                      inlinedVal30 = minimax1[listNth$accessorSymbol](b, 1);
                      if (inlinedVal30 instanceof minimax1.Some.class) {
                        arg$Some$0$9 = inlinedVal30.value;
                        inlinedVal29 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                        if (inlinedVal29 === true) {
                          let inlinedVal31, inlinedVal32, arg$Some$0$10, inlinedVal33;
                          inlinedVal33 = minimax1[listNth$accessorSymbol](b, 2);
                          if (inlinedVal33 instanceof minimax1.Some.class) {
                            arg$Some$0$10 = inlinedVal33.value;
                            inlinedVal32 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$10);
                            if (inlinedVal32 === true) {
                              inlinedVal31 = true;
                            } else {
                              inlinedVal31 = false;
                            }
                          } else if (inlinedVal33 instanceof minimax1.None.class) {
                            inlinedVal31 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          inlinedVal28 = inlinedVal31;
                        } else {
                          inlinedVal28 = false;
                        }
                      } else if (inlinedVal30 instanceof minimax1.None.class) {
                        inlinedVal28 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal25 = inlinedVal28;
                    } else {
                      inlinedVal25 = false;
                    }
                  } else if (inlinedVal27 instanceof minimax1.None.class) {
                    inlinedVal25 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal25 === false) {
                    let inlinedVal28, inlinedVal29, arg$Some$0$9, inlinedVal30;
                    inlinedVal30 = minimax1[listNth$accessorSymbol](b, 3);
                    if (inlinedVal30 instanceof minimax1.Some.class) {
                      arg$Some$0$9 = inlinedVal30.value;
                      inlinedVal29 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                      if (inlinedVal29 === true) {
                        let inlinedVal31, inlinedVal32, arg$Some$0$10, inlinedVal33;
                        inlinedVal33 = minimax1[listNth$accessorSymbol](b, 4);
                        if (inlinedVal33 instanceof minimax1.Some.class) {
                          arg$Some$0$10 = inlinedVal33.value;
                          inlinedVal32 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$10);
                          if (inlinedVal32 === true) {
                            let inlinedVal34, inlinedVal35, arg$Some$0$11, inlinedVal36;
                            inlinedVal36 = minimax1[listNth$accessorSymbol](b, 5);
                            if (inlinedVal36 instanceof minimax1.Some.class) {
                              arg$Some$0$11 = inlinedVal36.value;
                              inlinedVal35 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                              if (inlinedVal35 === true) {
                                inlinedVal34 = true;
                              } else {
                                inlinedVal34 = false;
                              }
                            } else if (inlinedVal36 instanceof minimax1.None.class) {
                              inlinedVal34 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            inlinedVal31 = inlinedVal34;
                          } else {
                            inlinedVal31 = false;
                          }
                        } else if (inlinedVal33 instanceof minimax1.None.class) {
                          inlinedVal31 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        inlinedVal28 = inlinedVal31;
                      } else {
                        inlinedVal28 = false;
                      }
                    } else if (inlinedVal30 instanceof minimax1.None.class) {
                      inlinedVal28 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    if (inlinedVal28 === false) {
                      let inlinedVal31, inlinedVal32, arg$Some$0$10, inlinedVal33;
                      inlinedVal33 = minimax1[listNth$accessorSymbol](b, 6);
                      if (inlinedVal33 instanceof minimax1.Some.class) {
                        arg$Some$0$10 = inlinedVal33.value;
                        inlinedVal32 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$10);
                        if (inlinedVal32 === true) {
                          let inlinedVal34, inlinedVal35, arg$Some$0$11, inlinedVal36;
                          inlinedVal36 = minimax1[listNth$accessorSymbol](b, 7);
                          if (inlinedVal36 instanceof minimax1.Some.class) {
                            arg$Some$0$11 = inlinedVal36.value;
                            inlinedVal35 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                            if (inlinedVal35 === true) {
                              let inlinedVal37, inlinedVal38, arg$Some$0$12, inlinedVal39;
                              inlinedVal39 = minimax1[listNth$accessorSymbol](b, 8);
                              if (inlinedVal39 instanceof minimax1.Some.class) {
                                arg$Some$0$12 = inlinedVal39.value;
                                inlinedVal38 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$12);
                                if (inlinedVal38 === true) {
                                  inlinedVal37 = true;
                                } else {
                                  inlinedVal37 = false;
                                }
                              } else if (inlinedVal39 instanceof minimax1.None.class) {
                                inlinedVal37 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              inlinedVal34 = inlinedVal37;
                            } else {
                              inlinedVal34 = false;
                            }
                          } else if (inlinedVal36 instanceof minimax1.None.class) {
                            inlinedVal34 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          inlinedVal31 = inlinedVal34;
                        } else {
                          inlinedVal31 = false;
                        }
                      } else if (inlinedVal33 instanceof minimax1.None.class) {
                        inlinedVal31 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      if (inlinedVal31 === false) {
                        let inlinedVal34, inlinedVal35, arg$Some$0$11, inlinedVal36;
                        inlinedVal36 = minimax1[listNth$accessorSymbol](b, 0);
                        if (inlinedVal36 instanceof minimax1.Some.class) {
                          arg$Some$0$11 = inlinedVal36.value;
                          inlinedVal35 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                          if (inlinedVal35 === true) {
                            let inlinedVal37, inlinedVal38, arg$Some$0$12, inlinedVal39;
                            inlinedVal39 = minimax1[listNth$accessorSymbol](b, 3);
                            if (inlinedVal39 instanceof minimax1.Some.class) {
                              arg$Some$0$12 = inlinedVal39.value;
                              inlinedVal38 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$12);
                              if (inlinedVal38 === true) {
                                let inlinedVal40, inlinedVal41, arg$Some$0$13, inlinedVal42;
                                inlinedVal42 = minimax1[listNth$accessorSymbol](b, 6);
                                if (inlinedVal42 instanceof minimax1.Some.class) {
                                  arg$Some$0$13 = inlinedVal42.value;
                                  inlinedVal41 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$13);
                                  if (inlinedVal41 === true) {
                                    inlinedVal40 = true;
                                  } else {
                                    inlinedVal40 = false;
                                  }
                                } else if (inlinedVal42 instanceof minimax1.None.class) {
                                  inlinedVal40 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                inlinedVal37 = inlinedVal40;
                              } else {
                                inlinedVal37 = false;
                              }
                            } else if (inlinedVal39 instanceof minimax1.None.class) {
                              inlinedVal37 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            inlinedVal34 = inlinedVal37;
                          } else {
                            inlinedVal34 = false;
                          }
                        } else if (inlinedVal36 instanceof minimax1.None.class) {
                          inlinedVal34 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        if (inlinedVal34 === false) {
                          let inlinedVal37, inlinedVal38, arg$Some$0$12, inlinedVal39;
                          inlinedVal39 = minimax1[listNth$accessorSymbol](b, 1);
                          if (inlinedVal39 instanceof minimax1.Some.class) {
                            arg$Some$0$12 = inlinedVal39.value;
                            inlinedVal38 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$12);
                            if (inlinedVal38 === true) {
                              let inlinedVal40, inlinedVal41, arg$Some$0$13, inlinedVal42;
                              inlinedVal42 = minimax1[listNth$accessorSymbol](b, 4);
                              if (inlinedVal42 instanceof minimax1.Some.class) {
                                arg$Some$0$13 = inlinedVal42.value;
                                inlinedVal41 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$13);
                                if (inlinedVal41 === true) {
                                  let inlinedVal43, inlinedVal44, arg$Some$0$14, inlinedVal45;
                                  inlinedVal45 = minimax1[listNth$accessorSymbol](b, 7);
                                  if (inlinedVal45 instanceof minimax1.Some.class) {
                                    arg$Some$0$14 = inlinedVal45.value;
                                    inlinedVal44 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$14);
                                    if (inlinedVal44 === true) {
                                      inlinedVal43 = true;
                                    } else {
                                      inlinedVal43 = false;
                                    }
                                  } else if (inlinedVal45 instanceof minimax1.None.class) {
                                    inlinedVal43 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  inlinedVal40 = inlinedVal43;
                                } else {
                                  inlinedVal40 = false;
                                }
                              } else if (inlinedVal42 instanceof minimax1.None.class) {
                                inlinedVal40 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              inlinedVal37 = inlinedVal40;
                            } else {
                              inlinedVal37 = false;
                            }
                          } else if (inlinedVal39 instanceof minimax1.None.class) {
                            inlinedVal37 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          if (inlinedVal37 === false) {
                            let inlinedVal40, inlinedVal41, arg$Some$0$13, inlinedVal42;
                            inlinedVal42 = minimax1[listNth$accessorSymbol](b, 2);
                            if (inlinedVal42 instanceof minimax1.Some.class) {
                              arg$Some$0$13 = inlinedVal42.value;
                              inlinedVal41 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$13);
                              if (inlinedVal41 === true) {
                                let inlinedVal43, inlinedVal44, arg$Some$0$14, inlinedVal45;
                                inlinedVal45 = minimax1[listNth$accessorSymbol](b, 5);
                                if (inlinedVal45 instanceof minimax1.Some.class) {
                                  arg$Some$0$14 = inlinedVal45.value;
                                  inlinedVal44 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$14);
                                  if (inlinedVal44 === true) {
                                    let inlinedVal46, inlinedVal47, arg$Some$0$15, inlinedVal48;
                                    inlinedVal48 = minimax1[listNth$accessorSymbol](b, 8);
                                    if (inlinedVal48 instanceof minimax1.Some.class) {
                                      arg$Some$0$15 = inlinedVal48.value;
                                      inlinedVal47 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$15);
                                      if (inlinedVal47 === true) {
                                        inlinedVal46 = true;
                                      } else {
                                        inlinedVal46 = false;
                                      }
                                    } else if (inlinedVal48 instanceof minimax1.None.class) {
                                      inlinedVal46 = false;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                    inlinedVal43 = inlinedVal46;
                                  } else {
                                    inlinedVal43 = false;
                                  }
                                } else if (inlinedVal45 instanceof minimax1.None.class) {
                                  inlinedVal43 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                inlinedVal40 = inlinedVal43;
                              } else {
                                inlinedVal40 = false;
                              }
                            } else if (inlinedVal42 instanceof minimax1.None.class) {
                              inlinedVal40 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            if (inlinedVal40 === false) {
                              let inlinedVal43, inlinedVal44, arg$Some$0$14, inlinedVal45;
                              inlinedVal45 = minimax1[listNth$accessorSymbol](b, 0);
                              if (inlinedVal45 instanceof minimax1.Some.class) {
                                arg$Some$0$14 = inlinedVal45.value;
                                inlinedVal44 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$14);
                                if (inlinedVal44 === true) {
                                  let inlinedVal46, inlinedVal47, arg$Some$0$15, inlinedVal48;
                                  inlinedVal48 = minimax1[listNth$accessorSymbol](b, 4);
                                  if (inlinedVal48 instanceof minimax1.Some.class) {
                                    arg$Some$0$15 = inlinedVal48.value;
                                    inlinedVal47 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$15);
                                    if (inlinedVal47 === true) {
                                      let inlinedVal49, inlinedVal50, arg$Some$0$16, inlinedVal51;
                                      inlinedVal51 = minimax1[listNth$accessorSymbol](b, 8);
                                      if (inlinedVal51 instanceof minimax1.Some.class) {
                                        arg$Some$0$16 = inlinedVal51.value;
                                        inlinedVal50 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$16);
                                        if (inlinedVal50 === true) {
                                          inlinedVal49 = true;
                                        } else {
                                          inlinedVal49 = false;
                                        }
                                      } else if (inlinedVal51 instanceof minimax1.None.class) {
                                        inlinedVal49 = false;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                      inlinedVal46 = inlinedVal49;
                                    } else {
                                      inlinedVal46 = false;
                                    }
                                  } else if (inlinedVal48 instanceof minimax1.None.class) {
                                    inlinedVal46 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  inlinedVal43 = inlinedVal46;
                                } else {
                                  inlinedVal43 = false;
                                }
                              } else if (inlinedVal45 instanceof minimax1.None.class) {
                                inlinedVal43 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              if (inlinedVal43 === false) {
                                let inlinedVal46, inlinedVal47, arg$Some$0$15, inlinedVal48;
                                inlinedVal48 = minimax1[listNth$accessorSymbol](b, 2);
                                if (inlinedVal48 instanceof minimax1.Some.class) {
                                  arg$Some$0$15 = inlinedVal48.value;
                                  inlinedVal47 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$15);
                                  if (inlinedVal47 === true) {
                                    let inlinedVal49, arg$Some$0$16, inlinedVal50;
                                    inlinedVal50 = minimax1[listNth$accessorSymbol](b, 4);
                                    if (inlinedVal50 instanceof minimax1.Some.class) {
                                      arg$Some$0$16 = inlinedVal50.value;
                                      inlinedVal49 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$16);
                                      if (inlinedVal49 === true) {
                                        let inlinedVal51, arg$Some$0$17, inlinedVal52;
                                        inlinedVal52 = minimax1[listNth$accessorSymbol](b, 6);
                                        if (inlinedVal52 instanceof minimax1.Some.class) {
                                          arg$Some$0$17 = inlinedVal52.value;
                                          inlinedVal51 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$17);
                                          if (inlinedVal51 === true) {
                                            inlinedVal46 = true;
                                          } else {
                                            inlinedVal46 = false;
                                          }
                                        } else if (inlinedVal52 instanceof minimax1.None.class) {
                                          inlinedVal46 = false;
                                        } else {
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                        }
                                      } else {
                                        inlinedVal46 = false;
                                      }
                                    } else if (inlinedVal50 instanceof minimax1.None.class) {
                                      inlinedVal46 = false;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                  } else {
                                    inlinedVal46 = false;
                                  }
                                } else if (inlinedVal48 instanceof minimax1.None.class) {
                                  inlinedVal46 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                if (inlinedVal46 === false) {
                                  let inlinedVal49, p3, inlinedVal50;
                                  p3 = minimax1[isSome$accessorSymbol];
                                  inlinedVal50 = minimax1[listAll$tailrec$accessorSymbol](p3, b);
                                  if (inlinedVal50 === true) {
                                    let p4, inlinedVal51, inlinedVal52, arg$Some$0$16, inlinedVal53;
                                    p4 = minimax1.X;
                                    inlinedVal53 = minimax1[listNth$accessorSymbol](b, 0);
                                    if (inlinedVal53 instanceof minimax1.Some.class) {
                                      arg$Some$0$16 = inlinedVal53.value;
                                      inlinedVal52 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$16);
                                      if (inlinedVal52 === true) {
                                        let inlinedVal54, inlinedVal55, arg$Some$0$17, inlinedVal56;
                                        inlinedVal56 = minimax1[listNth$accessorSymbol](b, 1);
                                        if (inlinedVal56 instanceof minimax1.Some.class) {
                                          arg$Some$0$17 = inlinedVal56.value;
                                          inlinedVal55 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                          if (inlinedVal55 === true) {
                                            let inlinedVal57, inlinedVal58, arg$Some$0$18, inlinedVal59;
                                            inlinedVal59 = minimax1[listNth$accessorSymbol](b, 2);
                                            if (inlinedVal59 instanceof minimax1.Some.class) {
                                              arg$Some$0$18 = inlinedVal59.value;
                                              inlinedVal58 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$18);
                                              if (inlinedVal58 === true) {
                                                inlinedVal57 = true;
                                              } else {
                                                inlinedVal57 = false;
                                              }
                                            } else if (inlinedVal59 instanceof minimax1.None.class) {
                                              inlinedVal57 = false;
                                            } else {
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                            }
                                            inlinedVal54 = inlinedVal57;
                                          } else {
                                            inlinedVal54 = false;
                                          }
                                        } else if (inlinedVal56 instanceof minimax1.None.class) {
                                          inlinedVal54 = false;
                                        } else {
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                        }
                                        inlinedVal51 = inlinedVal54;
                                      } else {
                                        inlinedVal51 = false;
                                      }
                                    } else if (inlinedVal53 instanceof minimax1.None.class) {
                                      inlinedVal51 = false;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                    if (inlinedVal51 === false) {
                                      let inlinedVal54, inlinedVal55, arg$Some$0$17, inlinedVal56;
                                      inlinedVal56 = minimax1[listNth$accessorSymbol](b, 3);
                                      if (inlinedVal56 instanceof minimax1.Some.class) {
                                        arg$Some$0$17 = inlinedVal56.value;
                                        inlinedVal55 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                        if (inlinedVal55 === true) {
                                          let inlinedVal57, inlinedVal58, arg$Some$0$18, inlinedVal59;
                                          inlinedVal59 = minimax1[listNth$accessorSymbol](b, 4);
                                          if (inlinedVal59 instanceof minimax1.Some.class) {
                                            arg$Some$0$18 = inlinedVal59.value;
                                            inlinedVal58 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$18);
                                            if (inlinedVal58 === true) {
                                              let inlinedVal60, inlinedVal61, arg$Some$0$19, inlinedVal62;
                                              inlinedVal62 = minimax1[listNth$accessorSymbol](b, 5);
                                              if (inlinedVal62 instanceof minimax1.Some.class) {
                                                arg$Some$0$19 = inlinedVal62.value;
                                                inlinedVal61 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$19);
                                                if (inlinedVal61 === true) {
                                                  inlinedVal60 = true;
                                                } else {
                                                  inlinedVal60 = false;
                                                }
                                              } else if (inlinedVal62 instanceof minimax1.None.class) {
                                                inlinedVal60 = false;
                                              } else {
                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                              }
                                              inlinedVal57 = inlinedVal60;
                                            } else {
                                              inlinedVal57 = false;
                                            }
                                          } else if (inlinedVal59 instanceof minimax1.None.class) {
                                            inlinedVal57 = false;
                                          } else {
                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                          }
                                          inlinedVal54 = inlinedVal57;
                                        } else {
                                          inlinedVal54 = false;
                                        }
                                      } else if (inlinedVal56 instanceof minimax1.None.class) {
                                        inlinedVal54 = false;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                      if (inlinedVal54 === false) {
                                        let inlinedVal57, inlinedVal58, arg$Some$0$18, inlinedVal59;
                                        inlinedVal59 = minimax1[listNth$accessorSymbol](b, 6);
                                        if (inlinedVal59 instanceof minimax1.Some.class) {
                                          arg$Some$0$18 = inlinedVal59.value;
                                          inlinedVal58 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$18);
                                          if (inlinedVal58 === true) {
                                            let inlinedVal60, inlinedVal61, arg$Some$0$19, inlinedVal62;
                                            inlinedVal62 = minimax1[listNth$accessorSymbol](b, 7);
                                            if (inlinedVal62 instanceof minimax1.Some.class) {
                                              arg$Some$0$19 = inlinedVal62.value;
                                              inlinedVal61 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$19);
                                              if (inlinedVal61 === true) {
                                                let inlinedVal63, inlinedVal64, arg$Some$0$20, inlinedVal65;
                                                inlinedVal65 = minimax1[listNth$accessorSymbol](b, 8);
                                                if (inlinedVal65 instanceof minimax1.Some.class) {
                                                  arg$Some$0$20 = inlinedVal65.value;
                                                  inlinedVal64 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$20);
                                                  if (inlinedVal64 === true) {
                                                    inlinedVal63 = true;
                                                  } else {
                                                    inlinedVal63 = false;
                                                  }
                                                } else if (inlinedVal65 instanceof minimax1.None.class) {
                                                  inlinedVal63 = false;
                                                } else {
                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                }
                                                inlinedVal60 = inlinedVal63;
                                              } else {
                                                inlinedVal60 = false;
                                              }
                                            } else if (inlinedVal62 instanceof minimax1.None.class) {
                                              inlinedVal60 = false;
                                            } else {
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                            }
                                            inlinedVal57 = inlinedVal60;
                                          } else {
                                            inlinedVal57 = false;
                                          }
                                        } else if (inlinedVal59 instanceof minimax1.None.class) {
                                          inlinedVal57 = false;
                                        } else {
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                        }
                                        if (inlinedVal57 === false) {
                                          let inlinedVal60, inlinedVal61, arg$Some$0$19, inlinedVal62;
                                          inlinedVal62 = minimax1[listNth$accessorSymbol](b, 0);
                                          if (inlinedVal62 instanceof minimax1.Some.class) {
                                            arg$Some$0$19 = inlinedVal62.value;
                                            inlinedVal61 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$19);
                                            if (inlinedVal61 === true) {
                                              let inlinedVal63, inlinedVal64, arg$Some$0$20, inlinedVal65;
                                              inlinedVal65 = minimax1[listNth$accessorSymbol](b, 3);
                                              if (inlinedVal65 instanceof minimax1.Some.class) {
                                                arg$Some$0$20 = inlinedVal65.value;
                                                inlinedVal64 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$20);
                                                if (inlinedVal64 === true) {
                                                  let inlinedVal66, inlinedVal67, arg$Some$0$21, inlinedVal68;
                                                  inlinedVal68 = minimax1[listNth$accessorSymbol](b, 6);
                                                  if (inlinedVal68 instanceof minimax1.Some.class) {
                                                    arg$Some$0$21 = inlinedVal68.value;
                                                    inlinedVal67 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$21);
                                                    if (inlinedVal67 === true) {
                                                      inlinedVal66 = true;
                                                    } else {
                                                      inlinedVal66 = false;
                                                    }
                                                  } else if (inlinedVal68 instanceof minimax1.None.class) {
                                                    inlinedVal66 = false;
                                                  } else {
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                  }
                                                  inlinedVal63 = inlinedVal66;
                                                } else {
                                                  inlinedVal63 = false;
                                                }
                                              } else if (inlinedVal65 instanceof minimax1.None.class) {
                                                inlinedVal63 = false;
                                              } else {
                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                              }
                                              inlinedVal60 = inlinedVal63;
                                            } else {
                                              inlinedVal60 = false;
                                            }
                                          } else if (inlinedVal62 instanceof minimax1.None.class) {
                                            inlinedVal60 = false;
                                          } else {
                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                          }
                                          if (inlinedVal60 === false) {
                                            let inlinedVal63, inlinedVal64, arg$Some$0$20, inlinedVal65;
                                            inlinedVal65 = minimax1[listNth$accessorSymbol](b, 1);
                                            if (inlinedVal65 instanceof minimax1.Some.class) {
                                              arg$Some$0$20 = inlinedVal65.value;
                                              inlinedVal64 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$20);
                                              if (inlinedVal64 === true) {
                                                let inlinedVal66, inlinedVal67, arg$Some$0$21, inlinedVal68;
                                                inlinedVal68 = minimax1[listNth$accessorSymbol](b, 4);
                                                if (inlinedVal68 instanceof minimax1.Some.class) {
                                                  arg$Some$0$21 = inlinedVal68.value;
                                                  inlinedVal67 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$21);
                                                  if (inlinedVal67 === true) {
                                                    let inlinedVal69, inlinedVal70, arg$Some$0$22, inlinedVal71;
                                                    inlinedVal71 = minimax1[listNth$accessorSymbol](b, 7);
                                                    if (inlinedVal71 instanceof minimax1.Some.class) {
                                                      arg$Some$0$22 = inlinedVal71.value;
                                                      inlinedVal70 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$22);
                                                      if (inlinedVal70 === true) {
                                                        inlinedVal69 = true;
                                                      } else {
                                                        inlinedVal69 = false;
                                                      }
                                                    } else if (inlinedVal71 instanceof minimax1.None.class) {
                                                      inlinedVal69 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    inlinedVal66 = inlinedVal69;
                                                  } else {
                                                    inlinedVal66 = false;
                                                  }
                                                } else if (inlinedVal68 instanceof minimax1.None.class) {
                                                  inlinedVal66 = false;
                                                } else {
                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                }
                                                inlinedVal63 = inlinedVal66;
                                              } else {
                                                inlinedVal63 = false;
                                              }
                                            } else if (inlinedVal65 instanceof minimax1.None.class) {
                                              inlinedVal63 = false;
                                            } else {
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                            }
                                            if (inlinedVal63 === false) {
                                              let inlinedVal66, inlinedVal67, arg$Some$0$21, inlinedVal68;
                                              inlinedVal68 = minimax1[listNth$accessorSymbol](b, 2);
                                              if (inlinedVal68 instanceof minimax1.Some.class) {
                                                arg$Some$0$21 = inlinedVal68.value;
                                                inlinedVal67 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$21);
                                                if (inlinedVal67 === true) {
                                                  let inlinedVal69, inlinedVal70, arg$Some$0$22, inlinedVal71;
                                                  inlinedVal71 = minimax1[listNth$accessorSymbol](b, 5);
                                                  if (inlinedVal71 instanceof minimax1.Some.class) {
                                                    arg$Some$0$22 = inlinedVal71.value;
                                                    inlinedVal70 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$22);
                                                    if (inlinedVal70 === true) {
                                                      let inlinedVal72, inlinedVal73, arg$Some$0$23, inlinedVal74;
                                                      inlinedVal74 = minimax1[listNth$accessorSymbol](b, 8);
                                                      if (inlinedVal74 instanceof minimax1.Some.class) {
                                                        arg$Some$0$23 = inlinedVal74.value;
                                                        inlinedVal73 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$23);
                                                        if (inlinedVal73 === true) {
                                                          inlinedVal72 = true;
                                                        } else {
                                                          inlinedVal72 = false;
                                                        }
                                                      } else if (inlinedVal74 instanceof minimax1.None.class) {
                                                        inlinedVal72 = false;
                                                      } else {
                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                      }
                                                      inlinedVal69 = inlinedVal72;
                                                    } else {
                                                      inlinedVal69 = false;
                                                    }
                                                  } else if (inlinedVal71 instanceof minimax1.None.class) {
                                                    inlinedVal69 = false;
                                                  } else {
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                  }
                                                  inlinedVal66 = inlinedVal69;
                                                } else {
                                                  inlinedVal66 = false;
                                                }
                                              } else if (inlinedVal68 instanceof minimax1.None.class) {
                                                inlinedVal66 = false;
                                              } else {
                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                              }
                                              if (inlinedVal66 === false) {
                                                let inlinedVal69, inlinedVal70, arg$Some$0$22, inlinedVal71;
                                                inlinedVal71 = minimax1[listNth$accessorSymbol](b, 0);
                                                if (inlinedVal71 instanceof minimax1.Some.class) {
                                                  arg$Some$0$22 = inlinedVal71.value;
                                                  inlinedVal70 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$22);
                                                  if (inlinedVal70 === true) {
                                                    let inlinedVal72, inlinedVal73, arg$Some$0$23, inlinedVal74;
                                                    inlinedVal74 = minimax1[listNth$accessorSymbol](b, 4);
                                                    if (inlinedVal74 instanceof minimax1.Some.class) {
                                                      arg$Some$0$23 = inlinedVal74.value;
                                                      inlinedVal73 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$23);
                                                      if (inlinedVal73 === true) {
                                                        let inlinedVal75, inlinedVal76, arg$Some$0$24, inlinedVal77;
                                                        inlinedVal77 = minimax1[listNth$accessorSymbol](b, 8);
                                                        if (inlinedVal77 instanceof minimax1.Some.class) {
                                                          arg$Some$0$24 = inlinedVal77.value;
                                                          inlinedVal76 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$24);
                                                          if (inlinedVal76 === true) {
                                                            inlinedVal75 = true;
                                                          } else {
                                                            inlinedVal75 = false;
                                                          }
                                                        } else if (inlinedVal77 instanceof minimax1.None.class) {
                                                          inlinedVal75 = false;
                                                        } else {
                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                        }
                                                        inlinedVal72 = inlinedVal75;
                                                      } else {
                                                        inlinedVal72 = false;
                                                      }
                                                    } else if (inlinedVal74 instanceof minimax1.None.class) {
                                                      inlinedVal72 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    inlinedVal69 = inlinedVal72;
                                                  } else {
                                                    inlinedVal69 = false;
                                                  }
                                                } else if (inlinedVal71 instanceof minimax1.None.class) {
                                                  inlinedVal69 = false;
                                                } else {
                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                }
                                                if (inlinedVal69 === false) {
                                                  let inlinedVal72, inlinedVal73, arg$Some$0$23, inlinedVal74;
                                                  inlinedVal74 = minimax1[listNth$accessorSymbol](b, 2);
                                                  if (inlinedVal74 instanceof minimax1.Some.class) {
                                                    arg$Some$0$23 = inlinedVal74.value;
                                                    inlinedVal73 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$23);
                                                    if (inlinedVal73 === true) {
                                                      let inlinedVal75, inlinedVal76, arg$Some$0$24, inlinedVal77;
                                                      inlinedVal77 = minimax1[listNth$accessorSymbol](b, 4);
                                                      if (inlinedVal77 instanceof minimax1.Some.class) {
                                                        arg$Some$0$24 = inlinedVal77.value;
                                                        inlinedVal76 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$24);
                                                        if (inlinedVal76 === true) {
                                                          let inlinedVal78, inlinedVal79, arg$Some$0$25, inlinedVal80;
                                                          inlinedVal80 = minimax1[listNth$accessorSymbol](b, 6);
                                                          if (inlinedVal80 instanceof minimax1.Some.class) {
                                                            arg$Some$0$25 = inlinedVal80.value;
                                                            inlinedVal79 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$25);
                                                            if (inlinedVal79 === true) {
                                                              inlinedVal78 = true;
                                                            } else {
                                                              inlinedVal78 = false;
                                                            }
                                                          } else if (inlinedVal80 instanceof minimax1.None.class) {
                                                            inlinedVal78 = false;
                                                          } else {
                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                          }
                                                          inlinedVal75 = inlinedVal78;
                                                        } else {
                                                          inlinedVal75 = false;
                                                        }
                                                      } else if (inlinedVal77 instanceof minimax1.None.class) {
                                                        inlinedVal75 = false;
                                                      } else {
                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                      }
                                                      inlinedVal72 = inlinedVal75;
                                                    } else {
                                                      inlinedVal72 = false;
                                                    }
                                                  } else if (inlinedVal74 instanceof minimax1.None.class) {
                                                    inlinedVal72 = false;
                                                  } else {
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                  }
                                                  if (inlinedVal72 === false) {
                                                    let p5, inlinedVal75, inlinedVal76, inlinedVal77, arg$Some$0$24, inlinedVal78;
                                                    p5 = minimax1.O;
                                                    inlinedVal78 = minimax1[listNth$accessorSymbol](b, 0);
                                                    if (inlinedVal78 instanceof minimax1.Some.class) {
                                                      arg$Some$0$24 = inlinedVal78.value;
                                                      inlinedVal77 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$24);
                                                      if (inlinedVal77 === true) {
                                                        let inlinedVal79, inlinedVal80, arg$Some$0$25, inlinedVal81;
                                                        inlinedVal81 = minimax1[listNth$accessorSymbol](b, 1);
                                                        if (inlinedVal81 instanceof minimax1.Some.class) {
                                                          arg$Some$0$25 = inlinedVal81.value;
                                                          inlinedVal80 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$25);
                                                          if (inlinedVal80 === true) {
                                                            let inlinedVal82, inlinedVal83, arg$Some$0$26, inlinedVal84;
                                                            inlinedVal84 = minimax1[listNth$accessorSymbol](b, 2);
                                                            if (inlinedVal84 instanceof minimax1.Some.class) {
                                                              arg$Some$0$26 = inlinedVal84.value;
                                                              inlinedVal83 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$26);
                                                              if (inlinedVal83 === true) {
                                                                inlinedVal82 = true;
                                                              } else {
                                                                inlinedVal82 = false;
                                                              }
                                                            } else if (inlinedVal84 instanceof minimax1.None.class) {
                                                              inlinedVal82 = false;
                                                            } else {
                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                            }
                                                            inlinedVal79 = inlinedVal82;
                                                          } else {
                                                            inlinedVal79 = false;
                                                          }
                                                        } else if (inlinedVal81 instanceof minimax1.None.class) {
                                                          inlinedVal79 = false;
                                                        } else {
                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                        }
                                                        inlinedVal76 = inlinedVal79;
                                                      } else {
                                                        inlinedVal76 = false;
                                                      }
                                                    } else if (inlinedVal78 instanceof minimax1.None.class) {
                                                      inlinedVal76 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    if (inlinedVal76 === false) {
                                                      let inlinedVal79, inlinedVal80, arg$Some$0$25, inlinedVal81;
                                                      inlinedVal81 = minimax1[listNth$accessorSymbol](b, 3);
                                                      if (inlinedVal81 instanceof minimax1.Some.class) {
                                                        arg$Some$0$25 = inlinedVal81.value;
                                                        inlinedVal80 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$25);
                                                        if (inlinedVal80 === true) {
                                                          let inlinedVal82, inlinedVal83, arg$Some$0$26, inlinedVal84;
                                                          inlinedVal84 = minimax1[listNth$accessorSymbol](b, 4);
                                                          if (inlinedVal84 instanceof minimax1.Some.class) {
                                                            arg$Some$0$26 = inlinedVal84.value;
                                                            inlinedVal83 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$26);
                                                            if (inlinedVal83 === true) {
                                                              let inlinedVal85, inlinedVal86, arg$Some$0$27, inlinedVal87;
                                                              inlinedVal87 = minimax1[listNth$accessorSymbol](b, 5);
                                                              if (inlinedVal87 instanceof minimax1.Some.class) {
                                                                arg$Some$0$27 = inlinedVal87.value;
                                                                inlinedVal86 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$27);
                                                                if (inlinedVal86 === true) {
                                                                  inlinedVal85 = true;
                                                                } else {
                                                                  inlinedVal85 = false;
                                                                }
                                                              } else if (inlinedVal87 instanceof minimax1.None.class) {
                                                                inlinedVal85 = false;
                                                              } else {
                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                              }
                                                              inlinedVal82 = inlinedVal85;
                                                            } else {
                                                              inlinedVal82 = false;
                                                            }
                                                          } else if (inlinedVal84 instanceof minimax1.None.class) {
                                                            inlinedVal82 = false;
                                                          } else {
                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                          }
                                                          inlinedVal79 = inlinedVal82;
                                                        } else {
                                                          inlinedVal79 = false;
                                                        }
                                                      } else if (inlinedVal81 instanceof minimax1.None.class) {
                                                        inlinedVal79 = false;
                                                      } else {
                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                      }
                                                      if (inlinedVal79 === false) {
                                                        let inlinedVal82, inlinedVal83, arg$Some$0$26, inlinedVal84;
                                                        inlinedVal84 = minimax1[listNth$accessorSymbol](b, 6);
                                                        if (inlinedVal84 instanceof minimax1.Some.class) {
                                                          arg$Some$0$26 = inlinedVal84.value;
                                                          inlinedVal83 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$26);
                                                          if (inlinedVal83 === true) {
                                                            let inlinedVal85, inlinedVal86, arg$Some$0$27, inlinedVal87;
                                                            inlinedVal87 = minimax1[listNth$accessorSymbol](b, 7);
                                                            if (inlinedVal87 instanceof minimax1.Some.class) {
                                                              arg$Some$0$27 = inlinedVal87.value;
                                                              inlinedVal86 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$27);
                                                              if (inlinedVal86 === true) {
                                                                let inlinedVal88, inlinedVal89, arg$Some$0$28, inlinedVal90;
                                                                inlinedVal90 = minimax1[listNth$accessorSymbol](b, 8);
                                                                if (inlinedVal90 instanceof minimax1.Some.class) {
                                                                  arg$Some$0$28 = inlinedVal90.value;
                                                                  inlinedVal89 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$28);
                                                                  if (inlinedVal89 === true) {
                                                                    inlinedVal88 = true;
                                                                  } else {
                                                                    inlinedVal88 = false;
                                                                  }
                                                                } else if (inlinedVal90 instanceof minimax1.None.class) {
                                                                  inlinedVal88 = false;
                                                                } else {
                                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                }
                                                                inlinedVal85 = inlinedVal88;
                                                              } else {
                                                                inlinedVal85 = false;
                                                              }
                                                            } else if (inlinedVal87 instanceof minimax1.None.class) {
                                                              inlinedVal85 = false;
                                                            } else {
                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                            }
                                                            inlinedVal82 = inlinedVal85;
                                                          } else {
                                                            inlinedVal82 = false;
                                                          }
                                                        } else if (inlinedVal84 instanceof minimax1.None.class) {
                                                          inlinedVal82 = false;
                                                        } else {
                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                        }
                                                        if (inlinedVal82 === false) {
                                                          let inlinedVal85, inlinedVal86, arg$Some$0$27, inlinedVal87;
                                                          inlinedVal87 = minimax1[listNth$accessorSymbol](b, 0);
                                                          if (inlinedVal87 instanceof minimax1.Some.class) {
                                                            arg$Some$0$27 = inlinedVal87.value;
                                                            inlinedVal86 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$27);
                                                            if (inlinedVal86 === true) {
                                                              let inlinedVal88, inlinedVal89, arg$Some$0$28, inlinedVal90;
                                                              inlinedVal90 = minimax1[listNth$accessorSymbol](b, 3);
                                                              if (inlinedVal90 instanceof minimax1.Some.class) {
                                                                arg$Some$0$28 = inlinedVal90.value;
                                                                inlinedVal89 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$28);
                                                                if (inlinedVal89 === true) {
                                                                  let inlinedVal91, inlinedVal92, arg$Some$0$29, inlinedVal93;
                                                                  inlinedVal93 = minimax1[listNth$accessorSymbol](b, 6);
                                                                  if (inlinedVal93 instanceof minimax1.Some.class) {
                                                                    arg$Some$0$29 = inlinedVal93.value;
                                                                    inlinedVal92 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$29);
                                                                    if (inlinedVal92 === true) {
                                                                      inlinedVal91 = true;
                                                                    } else {
                                                                      inlinedVal91 = false;
                                                                    }
                                                                  } else if (inlinedVal93 instanceof minimax1.None.class) {
                                                                    inlinedVal91 = false;
                                                                  } else {
                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                  }
                                                                  inlinedVal88 = inlinedVal91;
                                                                } else {
                                                                  inlinedVal88 = false;
                                                                }
                                                              } else if (inlinedVal90 instanceof minimax1.None.class) {
                                                                inlinedVal88 = false;
                                                              } else {
                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                              }
                                                              inlinedVal85 = inlinedVal88;
                                                            } else {
                                                              inlinedVal85 = false;
                                                            }
                                                          } else if (inlinedVal87 instanceof minimax1.None.class) {
                                                            inlinedVal85 = false;
                                                          } else {
                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                          }
                                                          if (inlinedVal85 === false) {
                                                            let inlinedVal88, inlinedVal89, arg$Some$0$28, inlinedVal90;
                                                            inlinedVal90 = minimax1[listNth$accessorSymbol](b, 1);
                                                            if (inlinedVal90 instanceof minimax1.Some.class) {
                                                              arg$Some$0$28 = inlinedVal90.value;
                                                              inlinedVal89 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$28);
                                                              if (inlinedVal89 === true) {
                                                                let inlinedVal91, inlinedVal92, arg$Some$0$29, inlinedVal93;
                                                                inlinedVal93 = minimax1[listNth$accessorSymbol](b, 4);
                                                                if (inlinedVal93 instanceof minimax1.Some.class) {
                                                                  arg$Some$0$29 = inlinedVal93.value;
                                                                  inlinedVal92 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$29);
                                                                  if (inlinedVal92 === true) {
                                                                    let inlinedVal94, inlinedVal95, arg$Some$0$30, inlinedVal96;
                                                                    inlinedVal96 = minimax1[listNth$accessorSymbol](b, 7);
                                                                    if (inlinedVal96 instanceof minimax1.Some.class) {
                                                                      arg$Some$0$30 = inlinedVal96.value;
                                                                      inlinedVal95 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$30);
                                                                      if (inlinedVal95 === true) {
                                                                        inlinedVal94 = true;
                                                                      } else {
                                                                        inlinedVal94 = false;
                                                                      }
                                                                    } else if (inlinedVal96 instanceof minimax1.None.class) {
                                                                      inlinedVal94 = false;
                                                                    } else {
                                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                    }
                                                                    inlinedVal91 = inlinedVal94;
                                                                  } else {
                                                                    inlinedVal91 = false;
                                                                  }
                                                                } else if (inlinedVal93 instanceof minimax1.None.class) {
                                                                  inlinedVal91 = false;
                                                                } else {
                                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                }
                                                                inlinedVal88 = inlinedVal91;
                                                              } else {
                                                                inlinedVal88 = false;
                                                              }
                                                            } else if (inlinedVal90 instanceof minimax1.None.class) {
                                                              inlinedVal88 = false;
                                                            } else {
                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                            }
                                                            if (inlinedVal88 === false) {
                                                              let inlinedVal91, inlinedVal92, arg$Some$0$29, inlinedVal93;
                                                              inlinedVal93 = minimax1[listNth$accessorSymbol](b, 2);
                                                              if (inlinedVal93 instanceof minimax1.Some.class) {
                                                                arg$Some$0$29 = inlinedVal93.value;
                                                                inlinedVal92 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$29);
                                                                if (inlinedVal92 === true) {
                                                                  let inlinedVal94, inlinedVal95, arg$Some$0$30, inlinedVal96;
                                                                  inlinedVal96 = minimax1[listNth$accessorSymbol](b, 5);
                                                                  if (inlinedVal96 instanceof minimax1.Some.class) {
                                                                    arg$Some$0$30 = inlinedVal96.value;
                                                                    inlinedVal95 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$30);
                                                                    if (inlinedVal95 === true) {
                                                                      let inlinedVal97, inlinedVal98, arg$Some$0$31, inlinedVal99;
                                                                      inlinedVal99 = minimax1[listNth$accessorSymbol](b, 8);
                                                                      if (inlinedVal99 instanceof minimax1.Some.class) {
                                                                        arg$Some$0$31 = inlinedVal99.value;
                                                                        inlinedVal98 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$31);
                                                                        if (inlinedVal98 === true) {
                                                                          inlinedVal97 = true;
                                                                        } else {
                                                                          inlinedVal97 = false;
                                                                        }
                                                                      } else if (inlinedVal99 instanceof minimax1.None.class) {
                                                                        inlinedVal97 = false;
                                                                      } else {
                                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                      }
                                                                      inlinedVal94 = inlinedVal97;
                                                                    } else {
                                                                      inlinedVal94 = false;
                                                                    }
                                                                  } else if (inlinedVal96 instanceof minimax1.None.class) {
                                                                    inlinedVal94 = false;
                                                                  } else {
                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                  }
                                                                  inlinedVal91 = inlinedVal94;
                                                                } else {
                                                                  inlinedVal91 = false;
                                                                }
                                                              } else if (inlinedVal93 instanceof minimax1.None.class) {
                                                                inlinedVal91 = false;
                                                              } else {
                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                              }
                                                              if (inlinedVal91 === false) {
                                                                let inlinedVal94, inlinedVal95, arg$Some$0$30, inlinedVal96;
                                                                inlinedVal96 = minimax1[listNth$accessorSymbol](b, 0);
                                                                if (inlinedVal96 instanceof minimax1.Some.class) {
                                                                  arg$Some$0$30 = inlinedVal96.value;
                                                                  inlinedVal95 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$30);
                                                                  if (inlinedVal95 === true) {
                                                                    let inlinedVal97, inlinedVal98, arg$Some$0$31, inlinedVal99;
                                                                    inlinedVal99 = minimax1[listNth$accessorSymbol](b, 4);
                                                                    if (inlinedVal99 instanceof minimax1.Some.class) {
                                                                      arg$Some$0$31 = inlinedVal99.value;
                                                                      inlinedVal98 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$31);
                                                                      if (inlinedVal98 === true) {
                                                                        let inlinedVal100, inlinedVal101, arg$Some$0$32, inlinedVal102;
                                                                        inlinedVal102 = minimax1[listNth$accessorSymbol](b, 8);
                                                                        if (inlinedVal102 instanceof minimax1.Some.class) {
                                                                          arg$Some$0$32 = inlinedVal102.value;
                                                                          inlinedVal101 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$32);
                                                                          if (inlinedVal101 === true) {
                                                                            inlinedVal100 = true;
                                                                          } else {
                                                                            inlinedVal100 = false;
                                                                          }
                                                                        } else if (inlinedVal102 instanceof minimax1.None.class) {
                                                                          inlinedVal100 = false;
                                                                        } else {
                                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                        }
                                                                        inlinedVal97 = inlinedVal100;
                                                                      } else {
                                                                        inlinedVal97 = false;
                                                                      }
                                                                    } else if (inlinedVal99 instanceof minimax1.None.class) {
                                                                      inlinedVal97 = false;
                                                                    } else {
                                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                    }
                                                                    inlinedVal94 = inlinedVal97;
                                                                  } else {
                                                                    inlinedVal94 = false;
                                                                  }
                                                                } else if (inlinedVal96 instanceof minimax1.None.class) {
                                                                  inlinedVal94 = false;
                                                                } else {
                                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                }
                                                                if (inlinedVal94 === false) {
                                                                  let inlinedVal97, arg$Some$0$31, inlinedVal98;
                                                                  inlinedVal98 = minimax1[listNth$accessorSymbol](b, 2);
                                                                  if (inlinedVal98 instanceof minimax1.Some.class) {
                                                                    arg$Some$0$31 = inlinedVal98.value;
                                                                    inlinedVal97 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$31);
                                                                    if (inlinedVal97 === true) {
                                                                      let inlinedVal99, arg$Some$0$32, inlinedVal100;
                                                                      inlinedVal100 = minimax1[listNth$accessorSymbol](b, 4);
                                                                      if (inlinedVal100 instanceof minimax1.Some.class) {
                                                                        arg$Some$0$32 = inlinedVal100.value;
                                                                        inlinedVal99 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$32);
                                                                        if (inlinedVal99 === true) {
                                                                          let inlinedVal101, arg$Some$0$33, inlinedVal102;
                                                                          inlinedVal102 = minimax1[listNth$accessorSymbol](b, 6);
                                                                          if (inlinedVal102 instanceof minimax1.Some.class) {
                                                                            arg$Some$0$33 = inlinedVal102.value;
                                                                            inlinedVal101 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$33);
                                                                            if (inlinedVal101 === true) {
                                                                              inlinedVal75 = false;
                                                                            } else {
                                                                              inlinedVal75 = true;
                                                                            }
                                                                          } else if (inlinedVal102 instanceof minimax1.None.class) {
                                                                            inlinedVal75 = true;
                                                                          } else {
                                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                          }
                                                                        } else {
                                                                          inlinedVal75 = true;
                                                                        }
                                                                      } else if (inlinedVal100 instanceof minimax1.None.class) {
                                                                        inlinedVal75 = true;
                                                                      } else {
                                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                      }
                                                                    } else {
                                                                      inlinedVal75 = true;
                                                                    }
                                                                  } else if (inlinedVal98 instanceof minimax1.None.class) {
                                                                    inlinedVal75 = true;
                                                                  } else {
                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                  }
                                                                } else {
                                                                  inlinedVal75 = false;
                                                                }
                                                              } else {
                                                                inlinedVal75 = false;
                                                              }
                                                            } else {
                                                              inlinedVal75 = false;
                                                            }
                                                          } else {
                                                            inlinedVal75 = false;
                                                          }
                                                        } else {
                                                          inlinedVal75 = false;
                                                        }
                                                      } else {
                                                        inlinedVal75 = false;
                                                      }
                                                    } else {
                                                      inlinedVal75 = false;
                                                    }
                                                    inlinedVal49 = inlinedVal75;
                                                  } else {
                                                    inlinedVal49 = false;
                                                  }
                                                } else {
                                                  inlinedVal49 = false;
                                                }
                                              } else {
                                                inlinedVal49 = false;
                                              }
                                            } else {
                                              inlinedVal49 = false;
                                            }
                                          } else {
                                            inlinedVal49 = false;
                                          }
                                        } else {
                                          inlinedVal49 = false;
                                        }
                                      } else {
                                        inlinedVal49 = false;
                                      }
                                    } else {
                                      inlinedVal49 = false;
                                    }
                                  } else {
                                    inlinedVal49 = false;
                                  }
                                  inlinedVal = inlinedVal49;
                                } else {
                                  inlinedVal = true;
                                }
                              } else {
                                inlinedVal = true;
                              }
                            } else {
                              inlinedVal = true;
                            }
                          } else {
                            inlinedVal = true;
                          }
                        } else {
                          inlinedVal = true;
                        }
                      } else {
                        inlinedVal = true;
                      }
                    } else {
                      inlinedVal = true;
                    }
                  } else {
                    inlinedVal = true;
                  }
                } else {
                  inlinedVal = true;
                }
              } else {
                inlinedVal = true;
              }
            } else {
              inlinedVal = true;
            }
          } else {
            inlinedVal = true;
          }
        } else {
          inlinedVal = true;
        }
      } else {
        inlinedVal = true;
      }
    } else {
      inlinedVal = true;
    }
  } else {
    inlinedVal = true;
  }
  if (inlinedVal === true) {
    let inlinedVal4, p2, inlinedVal5, inlinedVal6, arg$Some$0$1, inlinedVal7;
    p2 = minimax1.X;
    inlinedVal7 = minimax1[listNth$accessorSymbol](b, 0);
    if (inlinedVal7 instanceof minimax1.Some.class) {
      arg$Some$0$1 = inlinedVal7.value;
      inlinedVal6 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$1);
      if (inlinedVal6 === true) {
        let inlinedVal8, inlinedVal9, arg$Some$0$2, inlinedVal10;
        inlinedVal10 = minimax1[listNth$accessorSymbol](b, 1);
        if (inlinedVal10 instanceof minimax1.Some.class) {
          arg$Some$0$2 = inlinedVal10.value;
          inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
          if (inlinedVal9 === true) {
            let inlinedVal11, inlinedVal12, arg$Some$0$3, inlinedVal13;
            inlinedVal13 = minimax1[listNth$accessorSymbol](b, 2);
            if (inlinedVal13 instanceof minimax1.Some.class) {
              arg$Some$0$3 = inlinedVal13.value;
              inlinedVal12 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$3);
              if (inlinedVal12 === true) {
                inlinedVal11 = true;
              } else {
                inlinedVal11 = false;
              }
            } else if (inlinedVal13 instanceof minimax1.None.class) {
              inlinedVal11 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            inlinedVal8 = inlinedVal11;
          } else {
            inlinedVal8 = false;
          }
        } else if (inlinedVal10 instanceof minimax1.None.class) {
          inlinedVal8 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        inlinedVal5 = inlinedVal8;
      } else {
        inlinedVal5 = false;
      }
    } else if (inlinedVal7 instanceof minimax1.None.class) {
      inlinedVal5 = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal5 === false) {
      let inlinedVal8, inlinedVal9, arg$Some$0$2, inlinedVal10;
      inlinedVal10 = minimax1[listNth$accessorSymbol](b, 3);
      if (inlinedVal10 instanceof minimax1.Some.class) {
        arg$Some$0$2 = inlinedVal10.value;
        inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
        if (inlinedVal9 === true) {
          let inlinedVal11, inlinedVal12, arg$Some$0$3, inlinedVal13;
          inlinedVal13 = minimax1[listNth$accessorSymbol](b, 4);
          if (inlinedVal13 instanceof minimax1.Some.class) {
            arg$Some$0$3 = inlinedVal13.value;
            inlinedVal12 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$3);
            if (inlinedVal12 === true) {
              let inlinedVal14, inlinedVal15, arg$Some$0$4, inlinedVal16;
              inlinedVal16 = minimax1[listNth$accessorSymbol](b, 5);
              if (inlinedVal16 instanceof minimax1.Some.class) {
                arg$Some$0$4 = inlinedVal16.value;
                inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
                if (inlinedVal15 === true) {
                  inlinedVal14 = true;
                } else {
                  inlinedVal14 = false;
                }
              } else if (inlinedVal16 instanceof minimax1.None.class) {
                inlinedVal14 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              inlinedVal11 = inlinedVal14;
            } else {
              inlinedVal11 = false;
            }
          } else if (inlinedVal13 instanceof minimax1.None.class) {
            inlinedVal11 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          inlinedVal8 = inlinedVal11;
        } else {
          inlinedVal8 = false;
        }
      } else if (inlinedVal10 instanceof minimax1.None.class) {
        inlinedVal8 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal8 === false) {
        let inlinedVal11, inlinedVal12, arg$Some$0$3, inlinedVal13;
        inlinedVal13 = minimax1[listNth$accessorSymbol](b, 6);
        if (inlinedVal13 instanceof minimax1.Some.class) {
          arg$Some$0$3 = inlinedVal13.value;
          inlinedVal12 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$3);
          if (inlinedVal12 === true) {
            let inlinedVal14, inlinedVal15, arg$Some$0$4, inlinedVal16;
            inlinedVal16 = minimax1[listNth$accessorSymbol](b, 7);
            if (inlinedVal16 instanceof minimax1.Some.class) {
              arg$Some$0$4 = inlinedVal16.value;
              inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
              if (inlinedVal15 === true) {
                let inlinedVal17, inlinedVal18, arg$Some$0$5, inlinedVal19;
                inlinedVal19 = minimax1[listNth$accessorSymbol](b, 8);
                if (inlinedVal19 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = inlinedVal19.value;
                  inlinedVal18 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$5);
                  if (inlinedVal18 === true) {
                    inlinedVal17 = true;
                  } else {
                    inlinedVal17 = false;
                  }
                } else if (inlinedVal19 instanceof minimax1.None.class) {
                  inlinedVal17 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                inlinedVal14 = inlinedVal17;
              } else {
                inlinedVal14 = false;
              }
            } else if (inlinedVal16 instanceof minimax1.None.class) {
              inlinedVal14 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            inlinedVal11 = inlinedVal14;
          } else {
            inlinedVal11 = false;
          }
        } else if (inlinedVal13 instanceof minimax1.None.class) {
          inlinedVal11 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        if (inlinedVal11 === false) {
          let inlinedVal14, inlinedVal15, arg$Some$0$4, inlinedVal16;
          inlinedVal16 = minimax1[listNth$accessorSymbol](b, 0);
          if (inlinedVal16 instanceof minimax1.Some.class) {
            arg$Some$0$4 = inlinedVal16.value;
            inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
            if (inlinedVal15 === true) {
              let inlinedVal17, inlinedVal18, arg$Some$0$5, inlinedVal19;
              inlinedVal19 = minimax1[listNth$accessorSymbol](b, 3);
              if (inlinedVal19 instanceof minimax1.Some.class) {
                arg$Some$0$5 = inlinedVal19.value;
                inlinedVal18 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$5);
                if (inlinedVal18 === true) {
                  let inlinedVal20, inlinedVal21, arg$Some$0$6, inlinedVal22;
                  inlinedVal22 = minimax1[listNth$accessorSymbol](b, 6);
                  if (inlinedVal22 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = inlinedVal22.value;
                    inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                    if (inlinedVal21 === true) {
                      inlinedVal20 = true;
                    } else {
                      inlinedVal20 = false;
                    }
                  } else if (inlinedVal22 instanceof minimax1.None.class) {
                    inlinedVal20 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  inlinedVal17 = inlinedVal20;
                } else {
                  inlinedVal17 = false;
                }
              } else if (inlinedVal19 instanceof minimax1.None.class) {
                inlinedVal17 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              inlinedVal14 = inlinedVal17;
            } else {
              inlinedVal14 = false;
            }
          } else if (inlinedVal16 instanceof minimax1.None.class) {
            inlinedVal14 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          if (inlinedVal14 === false) {
            let inlinedVal17, inlinedVal18, arg$Some$0$5, inlinedVal19;
            inlinedVal19 = minimax1[listNth$accessorSymbol](b, 1);
            if (inlinedVal19 instanceof minimax1.Some.class) {
              arg$Some$0$5 = inlinedVal19.value;
              inlinedVal18 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$5);
              if (inlinedVal18 === true) {
                let inlinedVal20, inlinedVal21, arg$Some$0$6, inlinedVal22;
                inlinedVal22 = minimax1[listNth$accessorSymbol](b, 4);
                if (inlinedVal22 instanceof minimax1.Some.class) {
                  arg$Some$0$6 = inlinedVal22.value;
                  inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                  if (inlinedVal21 === true) {
                    let inlinedVal23, inlinedVal24, arg$Some$0$7, inlinedVal25;
                    inlinedVal25 = minimax1[listNth$accessorSymbol](b, 7);
                    if (inlinedVal25 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = inlinedVal25.value;
                      inlinedVal24 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                      if (inlinedVal24 === true) {
                        inlinedVal23 = true;
                      } else {
                        inlinedVal23 = false;
                      }
                    } else if (inlinedVal25 instanceof minimax1.None.class) {
                      inlinedVal23 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    inlinedVal20 = inlinedVal23;
                  } else {
                    inlinedVal20 = false;
                  }
                } else if (inlinedVal22 instanceof minimax1.None.class) {
                  inlinedVal20 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                inlinedVal17 = inlinedVal20;
              } else {
                inlinedVal17 = false;
              }
            } else if (inlinedVal19 instanceof minimax1.None.class) {
              inlinedVal17 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal17 === false) {
              let inlinedVal20, inlinedVal21, arg$Some$0$6, inlinedVal22;
              inlinedVal22 = minimax1[listNth$accessorSymbol](b, 2);
              if (inlinedVal22 instanceof minimax1.Some.class) {
                arg$Some$0$6 = inlinedVal22.value;
                inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                if (inlinedVal21 === true) {
                  let inlinedVal23, inlinedVal24, arg$Some$0$7, inlinedVal25;
                  inlinedVal25 = minimax1[listNth$accessorSymbol](b, 5);
                  if (inlinedVal25 instanceof minimax1.Some.class) {
                    arg$Some$0$7 = inlinedVal25.value;
                    inlinedVal24 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                    if (inlinedVal24 === true) {
                      let inlinedVal26, inlinedVal27, arg$Some$0$8, inlinedVal28;
                      inlinedVal28 = minimax1[listNth$accessorSymbol](b, 8);
                      if (inlinedVal28 instanceof minimax1.Some.class) {
                        arg$Some$0$8 = inlinedVal28.value;
                        inlinedVal27 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$8);
                        if (inlinedVal27 === true) {
                          inlinedVal26 = true;
                        } else {
                          inlinedVal26 = false;
                        }
                      } else if (inlinedVal28 instanceof minimax1.None.class) {
                        inlinedVal26 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal23 = inlinedVal26;
                    } else {
                      inlinedVal23 = false;
                    }
                  } else if (inlinedVal25 instanceof minimax1.None.class) {
                    inlinedVal23 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  inlinedVal20 = inlinedVal23;
                } else {
                  inlinedVal20 = false;
                }
              } else if (inlinedVal22 instanceof minimax1.None.class) {
                inlinedVal20 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              if (inlinedVal20 === false) {
                let inlinedVal23, inlinedVal24, arg$Some$0$7, inlinedVal25;
                inlinedVal25 = minimax1[listNth$accessorSymbol](b, 0);
                if (inlinedVal25 instanceof minimax1.Some.class) {
                  arg$Some$0$7 = inlinedVal25.value;
                  inlinedVal24 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                  if (inlinedVal24 === true) {
                    let inlinedVal26, inlinedVal27, arg$Some$0$8, inlinedVal28;
                    inlinedVal28 = minimax1[listNth$accessorSymbol](b, 4);
                    if (inlinedVal28 instanceof minimax1.Some.class) {
                      arg$Some$0$8 = inlinedVal28.value;
                      inlinedVal27 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$8);
                      if (inlinedVal27 === true) {
                        let inlinedVal29, inlinedVal30, arg$Some$0$9, inlinedVal31;
                        inlinedVal31 = minimax1[listNth$accessorSymbol](b, 8);
                        if (inlinedVal31 instanceof minimax1.Some.class) {
                          arg$Some$0$9 = inlinedVal31.value;
                          inlinedVal30 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                          if (inlinedVal30 === true) {
                            inlinedVal29 = true;
                          } else {
                            inlinedVal29 = false;
                          }
                        } else if (inlinedVal31 instanceof minimax1.None.class) {
                          inlinedVal29 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        inlinedVal26 = inlinedVal29;
                      } else {
                        inlinedVal26 = false;
                      }
                    } else if (inlinedVal28 instanceof minimax1.None.class) {
                      inlinedVal26 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    inlinedVal23 = inlinedVal26;
                  } else {
                    inlinedVal23 = false;
                  }
                } else if (inlinedVal25 instanceof minimax1.None.class) {
                  inlinedVal23 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal23 === false) {
                  let inlinedVal26, inlinedVal27, arg$Some$0$8, inlinedVal28;
                  inlinedVal28 = minimax1[listNth$accessorSymbol](b, 2);
                  if (inlinedVal28 instanceof minimax1.Some.class) {
                    arg$Some$0$8 = inlinedVal28.value;
                    inlinedVal27 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$8);
                    if (inlinedVal27 === true) {
                      let inlinedVal29, inlinedVal30, arg$Some$0$9, inlinedVal31;
                      inlinedVal31 = minimax1[listNth$accessorSymbol](b, 4);
                      if (inlinedVal31 instanceof minimax1.Some.class) {
                        arg$Some$0$9 = inlinedVal31.value;
                        inlinedVal30 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                        if (inlinedVal30 === true) {
                          let inlinedVal32, inlinedVal33, arg$Some$0$10, inlinedVal34;
                          inlinedVal34 = minimax1[listNth$accessorSymbol](b, 6);
                          if (inlinedVal34 instanceof minimax1.Some.class) {
                            arg$Some$0$10 = inlinedVal34.value;
                            inlinedVal33 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$10);
                            if (inlinedVal33 === true) {
                              inlinedVal32 = true;
                            } else {
                              inlinedVal32 = false;
                            }
                          } else if (inlinedVal34 instanceof minimax1.None.class) {
                            inlinedVal32 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          inlinedVal29 = inlinedVal32;
                        } else {
                          inlinedVal29 = false;
                        }
                      } else if (inlinedVal31 instanceof minimax1.None.class) {
                        inlinedVal29 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal26 = inlinedVal29;
                    } else {
                      inlinedVal26 = false;
                    }
                  } else if (inlinedVal28 instanceof minimax1.None.class) {
                    inlinedVal26 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal26 === false) {
                    let p3, inlinedVal29, inlinedVal30, arg$Some$0$9, inlinedVal31;
                    p3 = minimax1.O;
                    inlinedVal31 = minimax1[listNth$accessorSymbol](b, 0);
                    if (inlinedVal31 instanceof minimax1.Some.class) {
                      arg$Some$0$9 = inlinedVal31.value;
                      inlinedVal30 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$9);
                      if (inlinedVal30 === true) {
                        let inlinedVal32, inlinedVal33, arg$Some$0$10, inlinedVal34;
                        inlinedVal34 = minimax1[listNth$accessorSymbol](b, 1);
                        if (inlinedVal34 instanceof minimax1.Some.class) {
                          arg$Some$0$10 = inlinedVal34.value;
                          inlinedVal33 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                          if (inlinedVal33 === true) {
                            let inlinedVal35, inlinedVal36, arg$Some$0$11, inlinedVal37;
                            inlinedVal37 = minimax1[listNth$accessorSymbol](b, 2);
                            if (inlinedVal37 instanceof minimax1.Some.class) {
                              arg$Some$0$11 = inlinedVal37.value;
                              inlinedVal36 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$11);
                              if (inlinedVal36 === true) {
                                inlinedVal35 = true;
                              } else {
                                inlinedVal35 = false;
                              }
                            } else if (inlinedVal37 instanceof minimax1.None.class) {
                              inlinedVal35 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            inlinedVal32 = inlinedVal35;
                          } else {
                            inlinedVal32 = false;
                          }
                        } else if (inlinedVal34 instanceof minimax1.None.class) {
                          inlinedVal32 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        inlinedVal29 = inlinedVal32;
                      } else {
                        inlinedVal29 = false;
                      }
                    } else if (inlinedVal31 instanceof minimax1.None.class) {
                      inlinedVal29 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    if (inlinedVal29 === false) {
                      let inlinedVal32, inlinedVal33, arg$Some$0$10, inlinedVal34;
                      inlinedVal34 = minimax1[listNth$accessorSymbol](b, 3);
                      if (inlinedVal34 instanceof minimax1.Some.class) {
                        arg$Some$0$10 = inlinedVal34.value;
                        inlinedVal33 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                        if (inlinedVal33 === true) {
                          let inlinedVal35, inlinedVal36, arg$Some$0$11, inlinedVal37;
                          inlinedVal37 = minimax1[listNth$accessorSymbol](b, 4);
                          if (inlinedVal37 instanceof minimax1.Some.class) {
                            arg$Some$0$11 = inlinedVal37.value;
                            inlinedVal36 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$11);
                            if (inlinedVal36 === true) {
                              let inlinedVal38, inlinedVal39, arg$Some$0$12, inlinedVal40;
                              inlinedVal40 = minimax1[listNth$accessorSymbol](b, 5);
                              if (inlinedVal40 instanceof minimax1.Some.class) {
                                arg$Some$0$12 = inlinedVal40.value;
                                inlinedVal39 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                                if (inlinedVal39 === true) {
                                  inlinedVal38 = true;
                                } else {
                                  inlinedVal38 = false;
                                }
                              } else if (inlinedVal40 instanceof minimax1.None.class) {
                                inlinedVal38 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              inlinedVal35 = inlinedVal38;
                            } else {
                              inlinedVal35 = false;
                            }
                          } else if (inlinedVal37 instanceof minimax1.None.class) {
                            inlinedVal35 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          inlinedVal32 = inlinedVal35;
                        } else {
                          inlinedVal32 = false;
                        }
                      } else if (inlinedVal34 instanceof minimax1.None.class) {
                        inlinedVal32 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      if (inlinedVal32 === false) {
                        let inlinedVal35, inlinedVal36, arg$Some$0$11, inlinedVal37;
                        inlinedVal37 = minimax1[listNth$accessorSymbol](b, 6);
                        if (inlinedVal37 instanceof minimax1.Some.class) {
                          arg$Some$0$11 = inlinedVal37.value;
                          inlinedVal36 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$11);
                          if (inlinedVal36 === true) {
                            let inlinedVal38, inlinedVal39, arg$Some$0$12, inlinedVal40;
                            inlinedVal40 = minimax1[listNth$accessorSymbol](b, 7);
                            if (inlinedVal40 instanceof minimax1.Some.class) {
                              arg$Some$0$12 = inlinedVal40.value;
                              inlinedVal39 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                              if (inlinedVal39 === true) {
                                let inlinedVal41, inlinedVal42, arg$Some$0$13, inlinedVal43;
                                inlinedVal43 = minimax1[listNth$accessorSymbol](b, 8);
                                if (inlinedVal43 instanceof minimax1.Some.class) {
                                  arg$Some$0$13 = inlinedVal43.value;
                                  inlinedVal42 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$13);
                                  if (inlinedVal42 === true) {
                                    inlinedVal41 = true;
                                  } else {
                                    inlinedVal41 = false;
                                  }
                                } else if (inlinedVal43 instanceof minimax1.None.class) {
                                  inlinedVal41 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                inlinedVal38 = inlinedVal41;
                              } else {
                                inlinedVal38 = false;
                              }
                            } else if (inlinedVal40 instanceof minimax1.None.class) {
                              inlinedVal38 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            inlinedVal35 = inlinedVal38;
                          } else {
                            inlinedVal35 = false;
                          }
                        } else if (inlinedVal37 instanceof minimax1.None.class) {
                          inlinedVal35 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        if (inlinedVal35 === false) {
                          let inlinedVal38, inlinedVal39, arg$Some$0$12, inlinedVal40;
                          inlinedVal40 = minimax1[listNth$accessorSymbol](b, 0);
                          if (inlinedVal40 instanceof minimax1.Some.class) {
                            arg$Some$0$12 = inlinedVal40.value;
                            inlinedVal39 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                            if (inlinedVal39 === true) {
                              let inlinedVal41, inlinedVal42, arg$Some$0$13, inlinedVal43;
                              inlinedVal43 = minimax1[listNth$accessorSymbol](b, 3);
                              if (inlinedVal43 instanceof minimax1.Some.class) {
                                arg$Some$0$13 = inlinedVal43.value;
                                inlinedVal42 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$13);
                                if (inlinedVal42 === true) {
                                  let inlinedVal44, inlinedVal45, arg$Some$0$14, inlinedVal46;
                                  inlinedVal46 = minimax1[listNth$accessorSymbol](b, 6);
                                  if (inlinedVal46 instanceof minimax1.Some.class) {
                                    arg$Some$0$14 = inlinedVal46.value;
                                    inlinedVal45 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$14);
                                    if (inlinedVal45 === true) {
                                      inlinedVal44 = true;
                                    } else {
                                      inlinedVal44 = false;
                                    }
                                  } else if (inlinedVal46 instanceof minimax1.None.class) {
                                    inlinedVal44 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  inlinedVal41 = inlinedVal44;
                                } else {
                                  inlinedVal41 = false;
                                }
                              } else if (inlinedVal43 instanceof minimax1.None.class) {
                                inlinedVal41 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              inlinedVal38 = inlinedVal41;
                            } else {
                              inlinedVal38 = false;
                            }
                          } else if (inlinedVal40 instanceof minimax1.None.class) {
                            inlinedVal38 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          if (inlinedVal38 === false) {
                            let inlinedVal41, inlinedVal42, arg$Some$0$13, inlinedVal43;
                            inlinedVal43 = minimax1[listNth$accessorSymbol](b, 1);
                            if (inlinedVal43 instanceof minimax1.Some.class) {
                              arg$Some$0$13 = inlinedVal43.value;
                              inlinedVal42 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$13);
                              if (inlinedVal42 === true) {
                                let inlinedVal44, inlinedVal45, arg$Some$0$14, inlinedVal46;
                                inlinedVal46 = minimax1[listNth$accessorSymbol](b, 4);
                                if (inlinedVal46 instanceof minimax1.Some.class) {
                                  arg$Some$0$14 = inlinedVal46.value;
                                  inlinedVal45 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$14);
                                  if (inlinedVal45 === true) {
                                    let inlinedVal47, inlinedVal48, arg$Some$0$15, inlinedVal49;
                                    inlinedVal49 = minimax1[listNth$accessorSymbol](b, 7);
                                    if (inlinedVal49 instanceof minimax1.Some.class) {
                                      arg$Some$0$15 = inlinedVal49.value;
                                      inlinedVal48 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$15);
                                      if (inlinedVal48 === true) {
                                        inlinedVal47 = true;
                                      } else {
                                        inlinedVal47 = false;
                                      }
                                    } else if (inlinedVal49 instanceof minimax1.None.class) {
                                      inlinedVal47 = false;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                    inlinedVal44 = inlinedVal47;
                                  } else {
                                    inlinedVal44 = false;
                                  }
                                } else if (inlinedVal46 instanceof minimax1.None.class) {
                                  inlinedVal44 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                inlinedVal41 = inlinedVal44;
                              } else {
                                inlinedVal41 = false;
                              }
                            } else if (inlinedVal43 instanceof minimax1.None.class) {
                              inlinedVal41 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            if (inlinedVal41 === false) {
                              let inlinedVal44, inlinedVal45, arg$Some$0$14, inlinedVal46;
                              inlinedVal46 = minimax1[listNth$accessorSymbol](b, 2);
                              if (inlinedVal46 instanceof minimax1.Some.class) {
                                arg$Some$0$14 = inlinedVal46.value;
                                inlinedVal45 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$14);
                                if (inlinedVal45 === true) {
                                  let inlinedVal47, inlinedVal48, arg$Some$0$15, inlinedVal49;
                                  inlinedVal49 = minimax1[listNth$accessorSymbol](b, 5);
                                  if (inlinedVal49 instanceof minimax1.Some.class) {
                                    arg$Some$0$15 = inlinedVal49.value;
                                    inlinedVal48 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$15);
                                    if (inlinedVal48 === true) {
                                      let inlinedVal50, inlinedVal51, arg$Some$0$16, inlinedVal52;
                                      inlinedVal52 = minimax1[listNth$accessorSymbol](b, 8);
                                      if (inlinedVal52 instanceof minimax1.Some.class) {
                                        arg$Some$0$16 = inlinedVal52.value;
                                        inlinedVal51 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$16);
                                        if (inlinedVal51 === true) {
                                          inlinedVal50 = true;
                                        } else {
                                          inlinedVal50 = false;
                                        }
                                      } else if (inlinedVal52 instanceof minimax1.None.class) {
                                        inlinedVal50 = false;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                      inlinedVal47 = inlinedVal50;
                                    } else {
                                      inlinedVal47 = false;
                                    }
                                  } else if (inlinedVal49 instanceof minimax1.None.class) {
                                    inlinedVal47 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  inlinedVal44 = inlinedVal47;
                                } else {
                                  inlinedVal44 = false;
                                }
                              } else if (inlinedVal46 instanceof minimax1.None.class) {
                                inlinedVal44 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              if (inlinedVal44 === false) {
                                let inlinedVal47, inlinedVal48, arg$Some$0$15, inlinedVal49;
                                inlinedVal49 = minimax1[listNth$accessorSymbol](b, 0);
                                if (inlinedVal49 instanceof minimax1.Some.class) {
                                  arg$Some$0$15 = inlinedVal49.value;
                                  inlinedVal48 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$15);
                                  if (inlinedVal48 === true) {
                                    let inlinedVal50, inlinedVal51, arg$Some$0$16, inlinedVal52;
                                    inlinedVal52 = minimax1[listNth$accessorSymbol](b, 4);
                                    if (inlinedVal52 instanceof minimax1.Some.class) {
                                      arg$Some$0$16 = inlinedVal52.value;
                                      inlinedVal51 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$16);
                                      if (inlinedVal51 === true) {
                                        let inlinedVal53, inlinedVal54, arg$Some$0$17, inlinedVal55;
                                        inlinedVal55 = minimax1[listNth$accessorSymbol](b, 8);
                                        if (inlinedVal55 instanceof minimax1.Some.class) {
                                          arg$Some$0$17 = inlinedVal55.value;
                                          inlinedVal54 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$17);
                                          if (inlinedVal54 === true) {
                                            inlinedVal53 = true;
                                          } else {
                                            inlinedVal53 = false;
                                          }
                                        } else if (inlinedVal55 instanceof minimax1.None.class) {
                                          inlinedVal53 = false;
                                        } else {
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                        }
                                        inlinedVal50 = inlinedVal53;
                                      } else {
                                        inlinedVal50 = false;
                                      }
                                    } else if (inlinedVal52 instanceof minimax1.None.class) {
                                      inlinedVal50 = false;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                    inlinedVal47 = inlinedVal50;
                                  } else {
                                    inlinedVal47 = false;
                                  }
                                } else if (inlinedVal49 instanceof minimax1.None.class) {
                                  inlinedVal47 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                if (inlinedVal47 === false) {
                                  let inlinedVal50, arg$Some$0$16, inlinedVal51;
                                  inlinedVal51 = minimax1[listNth$accessorSymbol](b, 2);
                                  if (inlinedVal51 instanceof minimax1.Some.class) {
                                    arg$Some$0$16 = inlinedVal51.value;
                                    inlinedVal50 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$16);
                                    if (inlinedVal50 === true) {
                                      let inlinedVal52, arg$Some$0$17, inlinedVal53;
                                      inlinedVal53 = minimax1[listNth$accessorSymbol](b, 4);
                                      if (inlinedVal53 instanceof minimax1.Some.class) {
                                        arg$Some$0$17 = inlinedVal53.value;
                                        inlinedVal52 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$17);
                                        if (inlinedVal52 === true) {
                                          let inlinedVal54, arg$Some$0$18, inlinedVal55;
                                          inlinedVal55 = minimax1[listNth$accessorSymbol](b, 6);
                                          if (inlinedVal55 instanceof minimax1.Some.class) {
                                            arg$Some$0$18 = inlinedVal55.value;
                                            inlinedVal54 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$18);
                                            if (inlinedVal54 === true) {
                                              inlinedVal4 = -1;
                                            } else {
                                              inlinedVal4 = 0;
                                            }
                                          } else if (inlinedVal55 instanceof minimax1.None.class) {
                                            inlinedVal4 = 0;
                                          } else {
                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                          }
                                        } else {
                                          inlinedVal4 = 0;
                                        }
                                      } else if (inlinedVal53 instanceof minimax1.None.class) {
                                        inlinedVal4 = 0;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                    } else {
                                      inlinedVal4 = 0;
                                    }
                                  } else if (inlinedVal51 instanceof minimax1.None.class) {
                                    inlinedVal4 = 0;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                } else {
                                  inlinedVal4 = -1;
                                }
                              } else {
                                inlinedVal4 = -1;
                              }
                            } else {
                              inlinedVal4 = -1;
                            }
                          } else {
                            inlinedVal4 = -1;
                          }
                        } else {
                          inlinedVal4 = -1;
                        }
                      } else {
                        inlinedVal4 = -1;
                      }
                    } else {
                      inlinedVal4 = -1;
                    }
                  } else {
                    inlinedVal4 = 1;
                  }
                } else {
                  inlinedVal4 = 1;
                }
              } else {
                inlinedVal4 = 1;
              }
            } else {
              inlinedVal4 = 1;
            }
          } else {
            inlinedVal4 = 1;
          }
        } else {
          inlinedVal4 = 1;
        }
      } else {
        inlinedVal4 = 1;
      }
    } else {
      inlinedVal4 = 1;
    }
    tmp = globalThis.Object.freeze([
      b,
      inlinedVal4
    ]);
    return minimax1.Rose(tmp, minimax1.Nil)
  }
  {
    let inlinedVal4, inlinedVal5, f, g, f1, inlinedVal6, tmp4, inlinedVal7, minimax2, n, m, acc, inlinedVal8;
    if (p instanceof minimax1.X.class) {
      inlinedVal4 = minimax1.O;
    } else if (p instanceof minimax1.O.class) {
      inlinedVal4 = minimax1.X;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    tmp1 = main_minimax$minimax(inlinedVal4);
    tmp4 = minimax1[moveTo$accessorSymbol](b, p);
    minimax2 = minimax1;
    n = 0;
    m = b;
    acc = main_minimax_successors_allMoves_f_rev_go$l_Nil();
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp5, tmp6, tmp7;
        if (m instanceof minimax2.Nil.class) {
          let acc1, inlinedVal9;
          acc1 = main_minimax_successors_map$l_Nil();
          inlinedVal9 = acc(acc1, undefined, undefined, undefined, undefined, undefined, minimax1);
          inlinedVal8 = inlinedVal9;
          break inlinedLbl
        } else if (m instanceof minimax2.Cons.class) {
          arg$Cons$0$ = m.head;
          arg$Cons$1$ = m.tail;
          if (arg$Cons$0$ instanceof minimax2.Some.class) {
            tmp5 = n + 1;
            n = tmp5;
            m = arg$Cons$1$;
            continue loopLabel
          } else if (arg$Cons$0$ instanceof minimax2.None.class) {
            tmp6 = n + 1;
            tmp7 = main_minimax_successors_allMoves_f_rev_go$l_Cons(n, acc);
            n = tmp6;
            m = arg$Cons$1$;
            acc = tmp7;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    inlinedVal7 = inlinedVal8(undefined, undefined, undefined, undefined, undefined, tmp4, undefined);
    inlinedVal5 = inlinedVal7(undefined, undefined, undefined, undefined, undefined, tmp1, undefined);
    f = minimax1[snd$accessorSymbol];
    g = minimax1[top$accessorSymbol];
    f1 = lambda$(f, g);
    inlinedVal6 = minimax1[map$tailrec$accessorSymbol](f1, inlinedVal5);
    if (p instanceof minimax1.X.class) {
      let arg$Cons$0$, arg$Cons$1$;
      if (inlinedVal6 instanceof minimax1.Cons.class) {
        let inlinedVal9;
        arg$Cons$0$ = inlinedVal6.head;
        arg$Cons$1$ = inlinedVal6.tail;
        inlinedVal9 = minimax1[listFoldl$tailrec$accessorSymbol](lambda, arg$Cons$0$, arg$Cons$1$);
        tmp2 = globalThis.Object.freeze([
          b,
          inlinedVal9
        ]);
        return minimax1.Rose(tmp2, inlinedVal5)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    {
      let arg$Cons$0$, arg$Cons$1$;
      if (inlinedVal6 instanceof minimax1.Cons.class) {
        let inlinedVal9;
        arg$Cons$0$ = inlinedVal6.head;
        arg$Cons$1$ = inlinedVal6.tail;
        inlinedVal9 = minimax1[listFoldl$tailrec$accessorSymbol](lambda1, arg$Cons$0$, arg$Cons$1$);
        tmp3 = globalThis.Object.freeze([
          b,
          inlinedVal9
        ]);
        return minimax1.Rose(tmp3, inlinedVal5)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
};
main_minimaxTT$minimaxTT = function main_minimaxTT$minimaxTT(minimax2, transTable, p) {
  return (b) => {
    return main_minimaxTT$minimaxTT$worker(minimax2, transTable, p, b)
  }
};
main_minimaxTT$minimaxTT$worker = function main_minimaxTT$minimaxTT$worker(minimax2, transTable, p, b) {
  let tmp, inlinedVal, p1, inlinedVal1, inlinedVal2, arg$Some$0$, inlinedVal3;
  p1 = minimax1.X;
  inlinedVal3 = minimax1[listNth$accessorSymbol](b, 0);
  if (inlinedVal3 instanceof minimax1.Some.class) {
    arg$Some$0$ = inlinedVal3.value;
    inlinedVal2 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$);
    if (inlinedVal2 === true) {
      let inlinedVal4, inlinedVal5, arg$Some$0$1, inlinedVal6;
      inlinedVal6 = minimax1[listNth$accessorSymbol](b, 1);
      if (inlinedVal6 instanceof minimax1.Some.class) {
        arg$Some$0$1 = inlinedVal6.value;
        inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
        if (inlinedVal5 === true) {
          let inlinedVal7, inlinedVal8, arg$Some$0$2, inlinedVal9;
          inlinedVal9 = minimax1[listNth$accessorSymbol](b, 2);
          if (inlinedVal9 instanceof minimax1.Some.class) {
            arg$Some$0$2 = inlinedVal9.value;
            inlinedVal8 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$2);
            if (inlinedVal8 === true) {
              inlinedVal7 = true;
            } else {
              inlinedVal7 = false;
            }
          } else if (inlinedVal9 instanceof minimax1.None.class) {
            inlinedVal7 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          inlinedVal4 = inlinedVal7;
        } else {
          inlinedVal4 = false;
        }
      } else if (inlinedVal6 instanceof minimax1.None.class) {
        inlinedVal4 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      inlinedVal1 = inlinedVal4;
    } else {
      inlinedVal1 = false;
    }
  } else if (inlinedVal3 instanceof minimax1.None.class) {
    inlinedVal1 = false;
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  if (inlinedVal1 === false) {
    let inlinedVal4, inlinedVal5, arg$Some$0$1, inlinedVal6;
    inlinedVal6 = minimax1[listNth$accessorSymbol](b, 3);
    if (inlinedVal6 instanceof minimax1.Some.class) {
      arg$Some$0$1 = inlinedVal6.value;
      inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
      if (inlinedVal5 === true) {
        let inlinedVal7, inlinedVal8, arg$Some$0$2, inlinedVal9;
        inlinedVal9 = minimax1[listNth$accessorSymbol](b, 4);
        if (inlinedVal9 instanceof minimax1.Some.class) {
          arg$Some$0$2 = inlinedVal9.value;
          inlinedVal8 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$2);
          if (inlinedVal8 === true) {
            let inlinedVal10, inlinedVal11, arg$Some$0$3, inlinedVal12;
            inlinedVal12 = minimax1[listNth$accessorSymbol](b, 5);
            if (inlinedVal12 instanceof minimax1.Some.class) {
              arg$Some$0$3 = inlinedVal12.value;
              inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
              if (inlinedVal11 === true) {
                inlinedVal10 = true;
              } else {
                inlinedVal10 = false;
              }
            } else if (inlinedVal12 instanceof minimax1.None.class) {
              inlinedVal10 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            inlinedVal7 = inlinedVal10;
          } else {
            inlinedVal7 = false;
          }
        } else if (inlinedVal9 instanceof minimax1.None.class) {
          inlinedVal7 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        inlinedVal4 = inlinedVal7;
      } else {
        inlinedVal4 = false;
      }
    } else if (inlinedVal6 instanceof minimax1.None.class) {
      inlinedVal4 = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal4 === false) {
      let inlinedVal7, inlinedVal8, arg$Some$0$2, inlinedVal9;
      inlinedVal9 = minimax1[listNth$accessorSymbol](b, 6);
      if (inlinedVal9 instanceof minimax1.Some.class) {
        arg$Some$0$2 = inlinedVal9.value;
        inlinedVal8 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$2);
        if (inlinedVal8 === true) {
          let inlinedVal10, inlinedVal11, arg$Some$0$3, inlinedVal12;
          inlinedVal12 = minimax1[listNth$accessorSymbol](b, 7);
          if (inlinedVal12 instanceof minimax1.Some.class) {
            arg$Some$0$3 = inlinedVal12.value;
            inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
            if (inlinedVal11 === true) {
              let inlinedVal13, inlinedVal14, arg$Some$0$4, inlinedVal15;
              inlinedVal15 = minimax1[listNth$accessorSymbol](b, 8);
              if (inlinedVal15 instanceof minimax1.Some.class) {
                arg$Some$0$4 = inlinedVal15.value;
                inlinedVal14 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$4);
                if (inlinedVal14 === true) {
                  inlinedVal13 = true;
                } else {
                  inlinedVal13 = false;
                }
              } else if (inlinedVal15 instanceof minimax1.None.class) {
                inlinedVal13 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              inlinedVal10 = inlinedVal13;
            } else {
              inlinedVal10 = false;
            }
          } else if (inlinedVal12 instanceof minimax1.None.class) {
            inlinedVal10 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          inlinedVal7 = inlinedVal10;
        } else {
          inlinedVal7 = false;
        }
      } else if (inlinedVal9 instanceof minimax1.None.class) {
        inlinedVal7 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal7 === false) {
        let inlinedVal10, inlinedVal11, arg$Some$0$3, inlinedVal12;
        inlinedVal12 = minimax1[listNth$accessorSymbol](b, 0);
        if (inlinedVal12 instanceof minimax1.Some.class) {
          arg$Some$0$3 = inlinedVal12.value;
          inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
          if (inlinedVal11 === true) {
            let inlinedVal13, inlinedVal14, arg$Some$0$4, inlinedVal15;
            inlinedVal15 = minimax1[listNth$accessorSymbol](b, 3);
            if (inlinedVal15 instanceof minimax1.Some.class) {
              arg$Some$0$4 = inlinedVal15.value;
              inlinedVal14 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$4);
              if (inlinedVal14 === true) {
                let inlinedVal16, inlinedVal17, arg$Some$0$5, inlinedVal18;
                inlinedVal18 = minimax1[listNth$accessorSymbol](b, 6);
                if (inlinedVal18 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = inlinedVal18.value;
                  inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                  if (inlinedVal17 === true) {
                    inlinedVal16 = true;
                  } else {
                    inlinedVal16 = false;
                  }
                } else if (inlinedVal18 instanceof minimax1.None.class) {
                  inlinedVal16 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                inlinedVal13 = inlinedVal16;
              } else {
                inlinedVal13 = false;
              }
            } else if (inlinedVal15 instanceof minimax1.None.class) {
              inlinedVal13 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            inlinedVal10 = inlinedVal13;
          } else {
            inlinedVal10 = false;
          }
        } else if (inlinedVal12 instanceof minimax1.None.class) {
          inlinedVal10 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        if (inlinedVal10 === false) {
          let inlinedVal13, inlinedVal14, arg$Some$0$4, inlinedVal15;
          inlinedVal15 = minimax1[listNth$accessorSymbol](b, 1);
          if (inlinedVal15 instanceof minimax1.Some.class) {
            arg$Some$0$4 = inlinedVal15.value;
            inlinedVal14 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$4);
            if (inlinedVal14 === true) {
              let inlinedVal16, inlinedVal17, arg$Some$0$5, inlinedVal18;
              inlinedVal18 = minimax1[listNth$accessorSymbol](b, 4);
              if (inlinedVal18 instanceof minimax1.Some.class) {
                arg$Some$0$5 = inlinedVal18.value;
                inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                if (inlinedVal17 === true) {
                  let inlinedVal19, inlinedVal20, arg$Some$0$6, inlinedVal21;
                  inlinedVal21 = minimax1[listNth$accessorSymbol](b, 7);
                  if (inlinedVal21 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = inlinedVal21.value;
                    inlinedVal20 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$6);
                    if (inlinedVal20 === true) {
                      inlinedVal19 = true;
                    } else {
                      inlinedVal19 = false;
                    }
                  } else if (inlinedVal21 instanceof minimax1.None.class) {
                    inlinedVal19 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  inlinedVal16 = inlinedVal19;
                } else {
                  inlinedVal16 = false;
                }
              } else if (inlinedVal18 instanceof minimax1.None.class) {
                inlinedVal16 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              inlinedVal13 = inlinedVal16;
            } else {
              inlinedVal13 = false;
            }
          } else if (inlinedVal15 instanceof minimax1.None.class) {
            inlinedVal13 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          if (inlinedVal13 === false) {
            let inlinedVal16, inlinedVal17, arg$Some$0$5, inlinedVal18;
            inlinedVal18 = minimax1[listNth$accessorSymbol](b, 2);
            if (inlinedVal18 instanceof minimax1.Some.class) {
              arg$Some$0$5 = inlinedVal18.value;
              inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
              if (inlinedVal17 === true) {
                let inlinedVal19, inlinedVal20, arg$Some$0$6, inlinedVal21;
                inlinedVal21 = minimax1[listNth$accessorSymbol](b, 5);
                if (inlinedVal21 instanceof minimax1.Some.class) {
                  arg$Some$0$6 = inlinedVal21.value;
                  inlinedVal20 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$6);
                  if (inlinedVal20 === true) {
                    let inlinedVal22, inlinedVal23, arg$Some$0$7, inlinedVal24;
                    inlinedVal24 = minimax1[listNth$accessorSymbol](b, 8);
                    if (inlinedVal24 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = inlinedVal24.value;
                      inlinedVal23 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$7);
                      if (inlinedVal23 === true) {
                        inlinedVal22 = true;
                      } else {
                        inlinedVal22 = false;
                      }
                    } else if (inlinedVal24 instanceof minimax1.None.class) {
                      inlinedVal22 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    inlinedVal19 = inlinedVal22;
                  } else {
                    inlinedVal19 = false;
                  }
                } else if (inlinedVal21 instanceof minimax1.None.class) {
                  inlinedVal19 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                inlinedVal16 = inlinedVal19;
              } else {
                inlinedVal16 = false;
              }
            } else if (inlinedVal18 instanceof minimax1.None.class) {
              inlinedVal16 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal16 === false) {
              let inlinedVal19, inlinedVal20, arg$Some$0$6, inlinedVal21;
              inlinedVal21 = minimax1[listNth$accessorSymbol](b, 0);
              if (inlinedVal21 instanceof minimax1.Some.class) {
                arg$Some$0$6 = inlinedVal21.value;
                inlinedVal20 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$6);
                if (inlinedVal20 === true) {
                  let inlinedVal22, inlinedVal23, arg$Some$0$7, inlinedVal24;
                  inlinedVal24 = minimax1[listNth$accessorSymbol](b, 4);
                  if (inlinedVal24 instanceof minimax1.Some.class) {
                    arg$Some$0$7 = inlinedVal24.value;
                    inlinedVal23 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$7);
                    if (inlinedVal23 === true) {
                      let inlinedVal25, inlinedVal26, arg$Some$0$8, inlinedVal27;
                      inlinedVal27 = minimax1[listNth$accessorSymbol](b, 8);
                      if (inlinedVal27 instanceof minimax1.Some.class) {
                        arg$Some$0$8 = inlinedVal27.value;
                        inlinedVal26 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$8);
                        if (inlinedVal26 === true) {
                          inlinedVal25 = true;
                        } else {
                          inlinedVal25 = false;
                        }
                      } else if (inlinedVal27 instanceof minimax1.None.class) {
                        inlinedVal25 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal22 = inlinedVal25;
                    } else {
                      inlinedVal22 = false;
                    }
                  } else if (inlinedVal24 instanceof minimax1.None.class) {
                    inlinedVal22 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  inlinedVal19 = inlinedVal22;
                } else {
                  inlinedVal19 = false;
                }
              } else if (inlinedVal21 instanceof minimax1.None.class) {
                inlinedVal19 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              if (inlinedVal19 === false) {
                let inlinedVal22, inlinedVal23, arg$Some$0$7, inlinedVal24;
                inlinedVal24 = minimax1[listNth$accessorSymbol](b, 2);
                if (inlinedVal24 instanceof minimax1.Some.class) {
                  arg$Some$0$7 = inlinedVal24.value;
                  inlinedVal23 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$7);
                  if (inlinedVal23 === true) {
                    let inlinedVal25, inlinedVal26, arg$Some$0$8, inlinedVal27;
                    inlinedVal27 = minimax1[listNth$accessorSymbol](b, 4);
                    if (inlinedVal27 instanceof minimax1.Some.class) {
                      arg$Some$0$8 = inlinedVal27.value;
                      inlinedVal26 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$8);
                      if (inlinedVal26 === true) {
                        let inlinedVal28, inlinedVal29, arg$Some$0$9, inlinedVal30;
                        inlinedVal30 = minimax1[listNth$accessorSymbol](b, 6);
                        if (inlinedVal30 instanceof minimax1.Some.class) {
                          arg$Some$0$9 = inlinedVal30.value;
                          inlinedVal29 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$9);
                          if (inlinedVal29 === true) {
                            inlinedVal28 = true;
                          } else {
                            inlinedVal28 = false;
                          }
                        } else if (inlinedVal30 instanceof minimax1.None.class) {
                          inlinedVal28 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        inlinedVal25 = inlinedVal28;
                      } else {
                        inlinedVal25 = false;
                      }
                    } else if (inlinedVal27 instanceof minimax1.None.class) {
                      inlinedVal25 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    inlinedVal22 = inlinedVal25;
                  } else {
                    inlinedVal22 = false;
                  }
                } else if (inlinedVal24 instanceof minimax1.None.class) {
                  inlinedVal22 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal22 === false) {
                  let p2, inlinedVal25, inlinedVal26, arg$Some$0$8, inlinedVal27;
                  p2 = minimax1.O;
                  inlinedVal27 = minimax1[listNth$accessorSymbol](b, 0);
                  if (inlinedVal27 instanceof minimax1.Some.class) {
                    arg$Some$0$8 = inlinedVal27.value;
                    inlinedVal26 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$8);
                    if (inlinedVal26 === true) {
                      let inlinedVal28, inlinedVal29, arg$Some$0$9, inlinedVal30;
                      inlinedVal30 = minimax1[listNth$accessorSymbol](b, 1);
                      if (inlinedVal30 instanceof minimax1.Some.class) {
                        arg$Some$0$9 = inlinedVal30.value;
                        inlinedVal29 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                        if (inlinedVal29 === true) {
                          let inlinedVal31, inlinedVal32, arg$Some$0$10, inlinedVal33;
                          inlinedVal33 = minimax1[listNth$accessorSymbol](b, 2);
                          if (inlinedVal33 instanceof minimax1.Some.class) {
                            arg$Some$0$10 = inlinedVal33.value;
                            inlinedVal32 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$10);
                            if (inlinedVal32 === true) {
                              inlinedVal31 = true;
                            } else {
                              inlinedVal31 = false;
                            }
                          } else if (inlinedVal33 instanceof minimax1.None.class) {
                            inlinedVal31 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          inlinedVal28 = inlinedVal31;
                        } else {
                          inlinedVal28 = false;
                        }
                      } else if (inlinedVal30 instanceof minimax1.None.class) {
                        inlinedVal28 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal25 = inlinedVal28;
                    } else {
                      inlinedVal25 = false;
                    }
                  } else if (inlinedVal27 instanceof minimax1.None.class) {
                    inlinedVal25 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal25 === false) {
                    let inlinedVal28, inlinedVal29, arg$Some$0$9, inlinedVal30;
                    inlinedVal30 = minimax1[listNth$accessorSymbol](b, 3);
                    if (inlinedVal30 instanceof minimax1.Some.class) {
                      arg$Some$0$9 = inlinedVal30.value;
                      inlinedVal29 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                      if (inlinedVal29 === true) {
                        let inlinedVal31, inlinedVal32, arg$Some$0$10, inlinedVal33;
                        inlinedVal33 = minimax1[listNth$accessorSymbol](b, 4);
                        if (inlinedVal33 instanceof minimax1.Some.class) {
                          arg$Some$0$10 = inlinedVal33.value;
                          inlinedVal32 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$10);
                          if (inlinedVal32 === true) {
                            let inlinedVal34, inlinedVal35, arg$Some$0$11, inlinedVal36;
                            inlinedVal36 = minimax1[listNth$accessorSymbol](b, 5);
                            if (inlinedVal36 instanceof minimax1.Some.class) {
                              arg$Some$0$11 = inlinedVal36.value;
                              inlinedVal35 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                              if (inlinedVal35 === true) {
                                inlinedVal34 = true;
                              } else {
                                inlinedVal34 = false;
                              }
                            } else if (inlinedVal36 instanceof minimax1.None.class) {
                              inlinedVal34 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            inlinedVal31 = inlinedVal34;
                          } else {
                            inlinedVal31 = false;
                          }
                        } else if (inlinedVal33 instanceof minimax1.None.class) {
                          inlinedVal31 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        inlinedVal28 = inlinedVal31;
                      } else {
                        inlinedVal28 = false;
                      }
                    } else if (inlinedVal30 instanceof minimax1.None.class) {
                      inlinedVal28 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    if (inlinedVal28 === false) {
                      let inlinedVal31, inlinedVal32, arg$Some$0$10, inlinedVal33;
                      inlinedVal33 = minimax1[listNth$accessorSymbol](b, 6);
                      if (inlinedVal33 instanceof minimax1.Some.class) {
                        arg$Some$0$10 = inlinedVal33.value;
                        inlinedVal32 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$10);
                        if (inlinedVal32 === true) {
                          let inlinedVal34, inlinedVal35, arg$Some$0$11, inlinedVal36;
                          inlinedVal36 = minimax1[listNth$accessorSymbol](b, 7);
                          if (inlinedVal36 instanceof minimax1.Some.class) {
                            arg$Some$0$11 = inlinedVal36.value;
                            inlinedVal35 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                            if (inlinedVal35 === true) {
                              let inlinedVal37, inlinedVal38, arg$Some$0$12, inlinedVal39;
                              inlinedVal39 = minimax1[listNth$accessorSymbol](b, 8);
                              if (inlinedVal39 instanceof minimax1.Some.class) {
                                arg$Some$0$12 = inlinedVal39.value;
                                inlinedVal38 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$12);
                                if (inlinedVal38 === true) {
                                  inlinedVal37 = true;
                                } else {
                                  inlinedVal37 = false;
                                }
                              } else if (inlinedVal39 instanceof minimax1.None.class) {
                                inlinedVal37 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              inlinedVal34 = inlinedVal37;
                            } else {
                              inlinedVal34 = false;
                            }
                          } else if (inlinedVal36 instanceof minimax1.None.class) {
                            inlinedVal34 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          inlinedVal31 = inlinedVal34;
                        } else {
                          inlinedVal31 = false;
                        }
                      } else if (inlinedVal33 instanceof minimax1.None.class) {
                        inlinedVal31 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      if (inlinedVal31 === false) {
                        let inlinedVal34, inlinedVal35, arg$Some$0$11, inlinedVal36;
                        inlinedVal36 = minimax1[listNth$accessorSymbol](b, 0);
                        if (inlinedVal36 instanceof minimax1.Some.class) {
                          arg$Some$0$11 = inlinedVal36.value;
                          inlinedVal35 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                          if (inlinedVal35 === true) {
                            let inlinedVal37, inlinedVal38, arg$Some$0$12, inlinedVal39;
                            inlinedVal39 = minimax1[listNth$accessorSymbol](b, 3);
                            if (inlinedVal39 instanceof minimax1.Some.class) {
                              arg$Some$0$12 = inlinedVal39.value;
                              inlinedVal38 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$12);
                              if (inlinedVal38 === true) {
                                let inlinedVal40, inlinedVal41, arg$Some$0$13, inlinedVal42;
                                inlinedVal42 = minimax1[listNth$accessorSymbol](b, 6);
                                if (inlinedVal42 instanceof minimax1.Some.class) {
                                  arg$Some$0$13 = inlinedVal42.value;
                                  inlinedVal41 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$13);
                                  if (inlinedVal41 === true) {
                                    inlinedVal40 = true;
                                  } else {
                                    inlinedVal40 = false;
                                  }
                                } else if (inlinedVal42 instanceof minimax1.None.class) {
                                  inlinedVal40 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                inlinedVal37 = inlinedVal40;
                              } else {
                                inlinedVal37 = false;
                              }
                            } else if (inlinedVal39 instanceof minimax1.None.class) {
                              inlinedVal37 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            inlinedVal34 = inlinedVal37;
                          } else {
                            inlinedVal34 = false;
                          }
                        } else if (inlinedVal36 instanceof minimax1.None.class) {
                          inlinedVal34 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        if (inlinedVal34 === false) {
                          let inlinedVal37, inlinedVal38, arg$Some$0$12, inlinedVal39;
                          inlinedVal39 = minimax1[listNth$accessorSymbol](b, 1);
                          if (inlinedVal39 instanceof minimax1.Some.class) {
                            arg$Some$0$12 = inlinedVal39.value;
                            inlinedVal38 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$12);
                            if (inlinedVal38 === true) {
                              let inlinedVal40, inlinedVal41, arg$Some$0$13, inlinedVal42;
                              inlinedVal42 = minimax1[listNth$accessorSymbol](b, 4);
                              if (inlinedVal42 instanceof minimax1.Some.class) {
                                arg$Some$0$13 = inlinedVal42.value;
                                inlinedVal41 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$13);
                                if (inlinedVal41 === true) {
                                  let inlinedVal43, inlinedVal44, arg$Some$0$14, inlinedVal45;
                                  inlinedVal45 = minimax1[listNth$accessorSymbol](b, 7);
                                  if (inlinedVal45 instanceof minimax1.Some.class) {
                                    arg$Some$0$14 = inlinedVal45.value;
                                    inlinedVal44 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$14);
                                    if (inlinedVal44 === true) {
                                      inlinedVal43 = true;
                                    } else {
                                      inlinedVal43 = false;
                                    }
                                  } else if (inlinedVal45 instanceof minimax1.None.class) {
                                    inlinedVal43 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  inlinedVal40 = inlinedVal43;
                                } else {
                                  inlinedVal40 = false;
                                }
                              } else if (inlinedVal42 instanceof minimax1.None.class) {
                                inlinedVal40 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              inlinedVal37 = inlinedVal40;
                            } else {
                              inlinedVal37 = false;
                            }
                          } else if (inlinedVal39 instanceof minimax1.None.class) {
                            inlinedVal37 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          if (inlinedVal37 === false) {
                            let inlinedVal40, inlinedVal41, arg$Some$0$13, inlinedVal42;
                            inlinedVal42 = minimax1[listNth$accessorSymbol](b, 2);
                            if (inlinedVal42 instanceof minimax1.Some.class) {
                              arg$Some$0$13 = inlinedVal42.value;
                              inlinedVal41 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$13);
                              if (inlinedVal41 === true) {
                                let inlinedVal43, inlinedVal44, arg$Some$0$14, inlinedVal45;
                                inlinedVal45 = minimax1[listNth$accessorSymbol](b, 5);
                                if (inlinedVal45 instanceof minimax1.Some.class) {
                                  arg$Some$0$14 = inlinedVal45.value;
                                  inlinedVal44 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$14);
                                  if (inlinedVal44 === true) {
                                    let inlinedVal46, inlinedVal47, arg$Some$0$15, inlinedVal48;
                                    inlinedVal48 = minimax1[listNth$accessorSymbol](b, 8);
                                    if (inlinedVal48 instanceof minimax1.Some.class) {
                                      arg$Some$0$15 = inlinedVal48.value;
                                      inlinedVal47 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$15);
                                      if (inlinedVal47 === true) {
                                        inlinedVal46 = true;
                                      } else {
                                        inlinedVal46 = false;
                                      }
                                    } else if (inlinedVal48 instanceof minimax1.None.class) {
                                      inlinedVal46 = false;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                    inlinedVal43 = inlinedVal46;
                                  } else {
                                    inlinedVal43 = false;
                                  }
                                } else if (inlinedVal45 instanceof minimax1.None.class) {
                                  inlinedVal43 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                inlinedVal40 = inlinedVal43;
                              } else {
                                inlinedVal40 = false;
                              }
                            } else if (inlinedVal42 instanceof minimax1.None.class) {
                              inlinedVal40 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            if (inlinedVal40 === false) {
                              let inlinedVal43, inlinedVal44, arg$Some$0$14, inlinedVal45;
                              inlinedVal45 = minimax1[listNth$accessorSymbol](b, 0);
                              if (inlinedVal45 instanceof minimax1.Some.class) {
                                arg$Some$0$14 = inlinedVal45.value;
                                inlinedVal44 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$14);
                                if (inlinedVal44 === true) {
                                  let inlinedVal46, inlinedVal47, arg$Some$0$15, inlinedVal48;
                                  inlinedVal48 = minimax1[listNth$accessorSymbol](b, 4);
                                  if (inlinedVal48 instanceof minimax1.Some.class) {
                                    arg$Some$0$15 = inlinedVal48.value;
                                    inlinedVal47 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$15);
                                    if (inlinedVal47 === true) {
                                      let inlinedVal49, inlinedVal50, arg$Some$0$16, inlinedVal51;
                                      inlinedVal51 = minimax1[listNth$accessorSymbol](b, 8);
                                      if (inlinedVal51 instanceof minimax1.Some.class) {
                                        arg$Some$0$16 = inlinedVal51.value;
                                        inlinedVal50 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$16);
                                        if (inlinedVal50 === true) {
                                          inlinedVal49 = true;
                                        } else {
                                          inlinedVal49 = false;
                                        }
                                      } else if (inlinedVal51 instanceof minimax1.None.class) {
                                        inlinedVal49 = false;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                      inlinedVal46 = inlinedVal49;
                                    } else {
                                      inlinedVal46 = false;
                                    }
                                  } else if (inlinedVal48 instanceof minimax1.None.class) {
                                    inlinedVal46 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  inlinedVal43 = inlinedVal46;
                                } else {
                                  inlinedVal43 = false;
                                }
                              } else if (inlinedVal45 instanceof minimax1.None.class) {
                                inlinedVal43 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              if (inlinedVal43 === false) {
                                let inlinedVal46, inlinedVal47, arg$Some$0$15, inlinedVal48;
                                inlinedVal48 = minimax1[listNth$accessorSymbol](b, 2);
                                if (inlinedVal48 instanceof minimax1.Some.class) {
                                  arg$Some$0$15 = inlinedVal48.value;
                                  inlinedVal47 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$15);
                                  if (inlinedVal47 === true) {
                                    let inlinedVal49, arg$Some$0$16, inlinedVal50;
                                    inlinedVal50 = minimax1[listNth$accessorSymbol](b, 4);
                                    if (inlinedVal50 instanceof minimax1.Some.class) {
                                      arg$Some$0$16 = inlinedVal50.value;
                                      inlinedVal49 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$16);
                                      if (inlinedVal49 === true) {
                                        let inlinedVal51, arg$Some$0$17, inlinedVal52;
                                        inlinedVal52 = minimax1[listNth$accessorSymbol](b, 6);
                                        if (inlinedVal52 instanceof minimax1.Some.class) {
                                          arg$Some$0$17 = inlinedVal52.value;
                                          inlinedVal51 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$17);
                                          if (inlinedVal51 === true) {
                                            inlinedVal46 = true;
                                          } else {
                                            inlinedVal46 = false;
                                          }
                                        } else if (inlinedVal52 instanceof minimax1.None.class) {
                                          inlinedVal46 = false;
                                        } else {
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                        }
                                      } else {
                                        inlinedVal46 = false;
                                      }
                                    } else if (inlinedVal50 instanceof minimax1.None.class) {
                                      inlinedVal46 = false;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                  } else {
                                    inlinedVal46 = false;
                                  }
                                } else if (inlinedVal48 instanceof minimax1.None.class) {
                                  inlinedVal46 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                if (inlinedVal46 === false) {
                                  let inlinedVal49, p3, inlinedVal50;
                                  p3 = minimax1[isSome$accessorSymbol];
                                  inlinedVal50 = minimax1[listAll$tailrec$accessorSymbol](p3, b);
                                  if (inlinedVal50 === true) {
                                    let p4, inlinedVal51, inlinedVal52, arg$Some$0$16, inlinedVal53;
                                    p4 = minimax1.X;
                                    inlinedVal53 = minimax1[listNth$accessorSymbol](b, 0);
                                    if (inlinedVal53 instanceof minimax1.Some.class) {
                                      arg$Some$0$16 = inlinedVal53.value;
                                      inlinedVal52 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$16);
                                      if (inlinedVal52 === true) {
                                        let inlinedVal54, inlinedVal55, arg$Some$0$17, inlinedVal56;
                                        inlinedVal56 = minimax1[listNth$accessorSymbol](b, 1);
                                        if (inlinedVal56 instanceof minimax1.Some.class) {
                                          arg$Some$0$17 = inlinedVal56.value;
                                          inlinedVal55 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                          if (inlinedVal55 === true) {
                                            let inlinedVal57, inlinedVal58, arg$Some$0$18, inlinedVal59;
                                            inlinedVal59 = minimax1[listNth$accessorSymbol](b, 2);
                                            if (inlinedVal59 instanceof minimax1.Some.class) {
                                              arg$Some$0$18 = inlinedVal59.value;
                                              inlinedVal58 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$18);
                                              if (inlinedVal58 === true) {
                                                inlinedVal57 = true;
                                              } else {
                                                inlinedVal57 = false;
                                              }
                                            } else if (inlinedVal59 instanceof minimax1.None.class) {
                                              inlinedVal57 = false;
                                            } else {
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                            }
                                            inlinedVal54 = inlinedVal57;
                                          } else {
                                            inlinedVal54 = false;
                                          }
                                        } else if (inlinedVal56 instanceof minimax1.None.class) {
                                          inlinedVal54 = false;
                                        } else {
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                        }
                                        inlinedVal51 = inlinedVal54;
                                      } else {
                                        inlinedVal51 = false;
                                      }
                                    } else if (inlinedVal53 instanceof minimax1.None.class) {
                                      inlinedVal51 = false;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                    if (inlinedVal51 === false) {
                                      let inlinedVal54, inlinedVal55, arg$Some$0$17, inlinedVal56;
                                      inlinedVal56 = minimax1[listNth$accessorSymbol](b, 3);
                                      if (inlinedVal56 instanceof minimax1.Some.class) {
                                        arg$Some$0$17 = inlinedVal56.value;
                                        inlinedVal55 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                        if (inlinedVal55 === true) {
                                          let inlinedVal57, inlinedVal58, arg$Some$0$18, inlinedVal59;
                                          inlinedVal59 = minimax1[listNth$accessorSymbol](b, 4);
                                          if (inlinedVal59 instanceof minimax1.Some.class) {
                                            arg$Some$0$18 = inlinedVal59.value;
                                            inlinedVal58 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$18);
                                            if (inlinedVal58 === true) {
                                              let inlinedVal60, inlinedVal61, arg$Some$0$19, inlinedVal62;
                                              inlinedVal62 = minimax1[listNth$accessorSymbol](b, 5);
                                              if (inlinedVal62 instanceof minimax1.Some.class) {
                                                arg$Some$0$19 = inlinedVal62.value;
                                                inlinedVal61 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$19);
                                                if (inlinedVal61 === true) {
                                                  inlinedVal60 = true;
                                                } else {
                                                  inlinedVal60 = false;
                                                }
                                              } else if (inlinedVal62 instanceof minimax1.None.class) {
                                                inlinedVal60 = false;
                                              } else {
                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                              }
                                              inlinedVal57 = inlinedVal60;
                                            } else {
                                              inlinedVal57 = false;
                                            }
                                          } else if (inlinedVal59 instanceof minimax1.None.class) {
                                            inlinedVal57 = false;
                                          } else {
                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                          }
                                          inlinedVal54 = inlinedVal57;
                                        } else {
                                          inlinedVal54 = false;
                                        }
                                      } else if (inlinedVal56 instanceof minimax1.None.class) {
                                        inlinedVal54 = false;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                      if (inlinedVal54 === false) {
                                        let inlinedVal57, inlinedVal58, arg$Some$0$18, inlinedVal59;
                                        inlinedVal59 = minimax1[listNth$accessorSymbol](b, 6);
                                        if (inlinedVal59 instanceof minimax1.Some.class) {
                                          arg$Some$0$18 = inlinedVal59.value;
                                          inlinedVal58 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$18);
                                          if (inlinedVal58 === true) {
                                            let inlinedVal60, inlinedVal61, arg$Some$0$19, inlinedVal62;
                                            inlinedVal62 = minimax1[listNth$accessorSymbol](b, 7);
                                            if (inlinedVal62 instanceof minimax1.Some.class) {
                                              arg$Some$0$19 = inlinedVal62.value;
                                              inlinedVal61 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$19);
                                              if (inlinedVal61 === true) {
                                                let inlinedVal63, inlinedVal64, arg$Some$0$20, inlinedVal65;
                                                inlinedVal65 = minimax1[listNth$accessorSymbol](b, 8);
                                                if (inlinedVal65 instanceof minimax1.Some.class) {
                                                  arg$Some$0$20 = inlinedVal65.value;
                                                  inlinedVal64 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$20);
                                                  if (inlinedVal64 === true) {
                                                    inlinedVal63 = true;
                                                  } else {
                                                    inlinedVal63 = false;
                                                  }
                                                } else if (inlinedVal65 instanceof minimax1.None.class) {
                                                  inlinedVal63 = false;
                                                } else {
                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                }
                                                inlinedVal60 = inlinedVal63;
                                              } else {
                                                inlinedVal60 = false;
                                              }
                                            } else if (inlinedVal62 instanceof minimax1.None.class) {
                                              inlinedVal60 = false;
                                            } else {
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                            }
                                            inlinedVal57 = inlinedVal60;
                                          } else {
                                            inlinedVal57 = false;
                                          }
                                        } else if (inlinedVal59 instanceof minimax1.None.class) {
                                          inlinedVal57 = false;
                                        } else {
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                        }
                                        if (inlinedVal57 === false) {
                                          let inlinedVal60, inlinedVal61, arg$Some$0$19, inlinedVal62;
                                          inlinedVal62 = minimax1[listNth$accessorSymbol](b, 0);
                                          if (inlinedVal62 instanceof minimax1.Some.class) {
                                            arg$Some$0$19 = inlinedVal62.value;
                                            inlinedVal61 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$19);
                                            if (inlinedVal61 === true) {
                                              let inlinedVal63, inlinedVal64, arg$Some$0$20, inlinedVal65;
                                              inlinedVal65 = minimax1[listNth$accessorSymbol](b, 3);
                                              if (inlinedVal65 instanceof minimax1.Some.class) {
                                                arg$Some$0$20 = inlinedVal65.value;
                                                inlinedVal64 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$20);
                                                if (inlinedVal64 === true) {
                                                  let inlinedVal66, inlinedVal67, arg$Some$0$21, inlinedVal68;
                                                  inlinedVal68 = minimax1[listNth$accessorSymbol](b, 6);
                                                  if (inlinedVal68 instanceof minimax1.Some.class) {
                                                    arg$Some$0$21 = inlinedVal68.value;
                                                    inlinedVal67 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$21);
                                                    if (inlinedVal67 === true) {
                                                      inlinedVal66 = true;
                                                    } else {
                                                      inlinedVal66 = false;
                                                    }
                                                  } else if (inlinedVal68 instanceof minimax1.None.class) {
                                                    inlinedVal66 = false;
                                                  } else {
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                  }
                                                  inlinedVal63 = inlinedVal66;
                                                } else {
                                                  inlinedVal63 = false;
                                                }
                                              } else if (inlinedVal65 instanceof minimax1.None.class) {
                                                inlinedVal63 = false;
                                              } else {
                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                              }
                                              inlinedVal60 = inlinedVal63;
                                            } else {
                                              inlinedVal60 = false;
                                            }
                                          } else if (inlinedVal62 instanceof minimax1.None.class) {
                                            inlinedVal60 = false;
                                          } else {
                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                          }
                                          if (inlinedVal60 === false) {
                                            let inlinedVal63, inlinedVal64, arg$Some$0$20, inlinedVal65;
                                            inlinedVal65 = minimax1[listNth$accessorSymbol](b, 1);
                                            if (inlinedVal65 instanceof minimax1.Some.class) {
                                              arg$Some$0$20 = inlinedVal65.value;
                                              inlinedVal64 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$20);
                                              if (inlinedVal64 === true) {
                                                let inlinedVal66, inlinedVal67, arg$Some$0$21, inlinedVal68;
                                                inlinedVal68 = minimax1[listNth$accessorSymbol](b, 4);
                                                if (inlinedVal68 instanceof minimax1.Some.class) {
                                                  arg$Some$0$21 = inlinedVal68.value;
                                                  inlinedVal67 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$21);
                                                  if (inlinedVal67 === true) {
                                                    let inlinedVal69, inlinedVal70, arg$Some$0$22, inlinedVal71;
                                                    inlinedVal71 = minimax1[listNth$accessorSymbol](b, 7);
                                                    if (inlinedVal71 instanceof minimax1.Some.class) {
                                                      arg$Some$0$22 = inlinedVal71.value;
                                                      inlinedVal70 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$22);
                                                      if (inlinedVal70 === true) {
                                                        inlinedVal69 = true;
                                                      } else {
                                                        inlinedVal69 = false;
                                                      }
                                                    } else if (inlinedVal71 instanceof minimax1.None.class) {
                                                      inlinedVal69 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    inlinedVal66 = inlinedVal69;
                                                  } else {
                                                    inlinedVal66 = false;
                                                  }
                                                } else if (inlinedVal68 instanceof minimax1.None.class) {
                                                  inlinedVal66 = false;
                                                } else {
                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                }
                                                inlinedVal63 = inlinedVal66;
                                              } else {
                                                inlinedVal63 = false;
                                              }
                                            } else if (inlinedVal65 instanceof minimax1.None.class) {
                                              inlinedVal63 = false;
                                            } else {
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                            }
                                            if (inlinedVal63 === false) {
                                              let inlinedVal66, inlinedVal67, arg$Some$0$21, inlinedVal68;
                                              inlinedVal68 = minimax1[listNth$accessorSymbol](b, 2);
                                              if (inlinedVal68 instanceof minimax1.Some.class) {
                                                arg$Some$0$21 = inlinedVal68.value;
                                                inlinedVal67 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$21);
                                                if (inlinedVal67 === true) {
                                                  let inlinedVal69, inlinedVal70, arg$Some$0$22, inlinedVal71;
                                                  inlinedVal71 = minimax1[listNth$accessorSymbol](b, 5);
                                                  if (inlinedVal71 instanceof minimax1.Some.class) {
                                                    arg$Some$0$22 = inlinedVal71.value;
                                                    inlinedVal70 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$22);
                                                    if (inlinedVal70 === true) {
                                                      let inlinedVal72, inlinedVal73, arg$Some$0$23, inlinedVal74;
                                                      inlinedVal74 = minimax1[listNth$accessorSymbol](b, 8);
                                                      if (inlinedVal74 instanceof minimax1.Some.class) {
                                                        arg$Some$0$23 = inlinedVal74.value;
                                                        inlinedVal73 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$23);
                                                        if (inlinedVal73 === true) {
                                                          inlinedVal72 = true;
                                                        } else {
                                                          inlinedVal72 = false;
                                                        }
                                                      } else if (inlinedVal74 instanceof minimax1.None.class) {
                                                        inlinedVal72 = false;
                                                      } else {
                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                      }
                                                      inlinedVal69 = inlinedVal72;
                                                    } else {
                                                      inlinedVal69 = false;
                                                    }
                                                  } else if (inlinedVal71 instanceof minimax1.None.class) {
                                                    inlinedVal69 = false;
                                                  } else {
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                  }
                                                  inlinedVal66 = inlinedVal69;
                                                } else {
                                                  inlinedVal66 = false;
                                                }
                                              } else if (inlinedVal68 instanceof minimax1.None.class) {
                                                inlinedVal66 = false;
                                              } else {
                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                              }
                                              if (inlinedVal66 === false) {
                                                let inlinedVal69, inlinedVal70, arg$Some$0$22, inlinedVal71;
                                                inlinedVal71 = minimax1[listNth$accessorSymbol](b, 0);
                                                if (inlinedVal71 instanceof minimax1.Some.class) {
                                                  arg$Some$0$22 = inlinedVal71.value;
                                                  inlinedVal70 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$22);
                                                  if (inlinedVal70 === true) {
                                                    let inlinedVal72, inlinedVal73, arg$Some$0$23, inlinedVal74;
                                                    inlinedVal74 = minimax1[listNth$accessorSymbol](b, 4);
                                                    if (inlinedVal74 instanceof minimax1.Some.class) {
                                                      arg$Some$0$23 = inlinedVal74.value;
                                                      inlinedVal73 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$23);
                                                      if (inlinedVal73 === true) {
                                                        let inlinedVal75, inlinedVal76, arg$Some$0$24, inlinedVal77;
                                                        inlinedVal77 = minimax1[listNth$accessorSymbol](b, 8);
                                                        if (inlinedVal77 instanceof minimax1.Some.class) {
                                                          arg$Some$0$24 = inlinedVal77.value;
                                                          inlinedVal76 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$24);
                                                          if (inlinedVal76 === true) {
                                                            inlinedVal75 = true;
                                                          } else {
                                                            inlinedVal75 = false;
                                                          }
                                                        } else if (inlinedVal77 instanceof minimax1.None.class) {
                                                          inlinedVal75 = false;
                                                        } else {
                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                        }
                                                        inlinedVal72 = inlinedVal75;
                                                      } else {
                                                        inlinedVal72 = false;
                                                      }
                                                    } else if (inlinedVal74 instanceof minimax1.None.class) {
                                                      inlinedVal72 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    inlinedVal69 = inlinedVal72;
                                                  } else {
                                                    inlinedVal69 = false;
                                                  }
                                                } else if (inlinedVal71 instanceof minimax1.None.class) {
                                                  inlinedVal69 = false;
                                                } else {
                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                }
                                                if (inlinedVal69 === false) {
                                                  let inlinedVal72, inlinedVal73, arg$Some$0$23, inlinedVal74;
                                                  inlinedVal74 = minimax1[listNth$accessorSymbol](b, 2);
                                                  if (inlinedVal74 instanceof minimax1.Some.class) {
                                                    arg$Some$0$23 = inlinedVal74.value;
                                                    inlinedVal73 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$23);
                                                    if (inlinedVal73 === true) {
                                                      let inlinedVal75, inlinedVal76, arg$Some$0$24, inlinedVal77;
                                                      inlinedVal77 = minimax1[listNth$accessorSymbol](b, 4);
                                                      if (inlinedVal77 instanceof minimax1.Some.class) {
                                                        arg$Some$0$24 = inlinedVal77.value;
                                                        inlinedVal76 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$24);
                                                        if (inlinedVal76 === true) {
                                                          let inlinedVal78, inlinedVal79, arg$Some$0$25, inlinedVal80;
                                                          inlinedVal80 = minimax1[listNth$accessorSymbol](b, 6);
                                                          if (inlinedVal80 instanceof minimax1.Some.class) {
                                                            arg$Some$0$25 = inlinedVal80.value;
                                                            inlinedVal79 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$25);
                                                            if (inlinedVal79 === true) {
                                                              inlinedVal78 = true;
                                                            } else {
                                                              inlinedVal78 = false;
                                                            }
                                                          } else if (inlinedVal80 instanceof minimax1.None.class) {
                                                            inlinedVal78 = false;
                                                          } else {
                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                          }
                                                          inlinedVal75 = inlinedVal78;
                                                        } else {
                                                          inlinedVal75 = false;
                                                        }
                                                      } else if (inlinedVal77 instanceof minimax1.None.class) {
                                                        inlinedVal75 = false;
                                                      } else {
                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                      }
                                                      inlinedVal72 = inlinedVal75;
                                                    } else {
                                                      inlinedVal72 = false;
                                                    }
                                                  } else if (inlinedVal74 instanceof minimax1.None.class) {
                                                    inlinedVal72 = false;
                                                  } else {
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                  }
                                                  if (inlinedVal72 === false) {
                                                    let p5, inlinedVal75, inlinedVal76, inlinedVal77, arg$Some$0$24, inlinedVal78;
                                                    p5 = minimax1.O;
                                                    inlinedVal78 = minimax1[listNth$accessorSymbol](b, 0);
                                                    if (inlinedVal78 instanceof minimax1.Some.class) {
                                                      arg$Some$0$24 = inlinedVal78.value;
                                                      inlinedVal77 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$24);
                                                      if (inlinedVal77 === true) {
                                                        let inlinedVal79, inlinedVal80, arg$Some$0$25, inlinedVal81;
                                                        inlinedVal81 = minimax1[listNth$accessorSymbol](b, 1);
                                                        if (inlinedVal81 instanceof minimax1.Some.class) {
                                                          arg$Some$0$25 = inlinedVal81.value;
                                                          inlinedVal80 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$25);
                                                          if (inlinedVal80 === true) {
                                                            let inlinedVal82, inlinedVal83, arg$Some$0$26, inlinedVal84;
                                                            inlinedVal84 = minimax1[listNth$accessorSymbol](b, 2);
                                                            if (inlinedVal84 instanceof minimax1.Some.class) {
                                                              arg$Some$0$26 = inlinedVal84.value;
                                                              inlinedVal83 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$26);
                                                              if (inlinedVal83 === true) {
                                                                inlinedVal82 = true;
                                                              } else {
                                                                inlinedVal82 = false;
                                                              }
                                                            } else if (inlinedVal84 instanceof minimax1.None.class) {
                                                              inlinedVal82 = false;
                                                            } else {
                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                            }
                                                            inlinedVal79 = inlinedVal82;
                                                          } else {
                                                            inlinedVal79 = false;
                                                          }
                                                        } else if (inlinedVal81 instanceof minimax1.None.class) {
                                                          inlinedVal79 = false;
                                                        } else {
                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                        }
                                                        inlinedVal76 = inlinedVal79;
                                                      } else {
                                                        inlinedVal76 = false;
                                                      }
                                                    } else if (inlinedVal78 instanceof minimax1.None.class) {
                                                      inlinedVal76 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    if (inlinedVal76 === false) {
                                                      let inlinedVal79, inlinedVal80, arg$Some$0$25, inlinedVal81;
                                                      inlinedVal81 = minimax1[listNth$accessorSymbol](b, 3);
                                                      if (inlinedVal81 instanceof minimax1.Some.class) {
                                                        arg$Some$0$25 = inlinedVal81.value;
                                                        inlinedVal80 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$25);
                                                        if (inlinedVal80 === true) {
                                                          let inlinedVal82, inlinedVal83, arg$Some$0$26, inlinedVal84;
                                                          inlinedVal84 = minimax1[listNth$accessorSymbol](b, 4);
                                                          if (inlinedVal84 instanceof minimax1.Some.class) {
                                                            arg$Some$0$26 = inlinedVal84.value;
                                                            inlinedVal83 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$26);
                                                            if (inlinedVal83 === true) {
                                                              let inlinedVal85, inlinedVal86, arg$Some$0$27, inlinedVal87;
                                                              inlinedVal87 = minimax1[listNth$accessorSymbol](b, 5);
                                                              if (inlinedVal87 instanceof minimax1.Some.class) {
                                                                arg$Some$0$27 = inlinedVal87.value;
                                                                inlinedVal86 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$27);
                                                                if (inlinedVal86 === true) {
                                                                  inlinedVal85 = true;
                                                                } else {
                                                                  inlinedVal85 = false;
                                                                }
                                                              } else if (inlinedVal87 instanceof minimax1.None.class) {
                                                                inlinedVal85 = false;
                                                              } else {
                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                              }
                                                              inlinedVal82 = inlinedVal85;
                                                            } else {
                                                              inlinedVal82 = false;
                                                            }
                                                          } else if (inlinedVal84 instanceof minimax1.None.class) {
                                                            inlinedVal82 = false;
                                                          } else {
                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                          }
                                                          inlinedVal79 = inlinedVal82;
                                                        } else {
                                                          inlinedVal79 = false;
                                                        }
                                                      } else if (inlinedVal81 instanceof minimax1.None.class) {
                                                        inlinedVal79 = false;
                                                      } else {
                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                      }
                                                      if (inlinedVal79 === false) {
                                                        let inlinedVal82, inlinedVal83, arg$Some$0$26, inlinedVal84;
                                                        inlinedVal84 = minimax1[listNth$accessorSymbol](b, 6);
                                                        if (inlinedVal84 instanceof minimax1.Some.class) {
                                                          arg$Some$0$26 = inlinedVal84.value;
                                                          inlinedVal83 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$26);
                                                          if (inlinedVal83 === true) {
                                                            let inlinedVal85, inlinedVal86, arg$Some$0$27, inlinedVal87;
                                                            inlinedVal87 = minimax1[listNth$accessorSymbol](b, 7);
                                                            if (inlinedVal87 instanceof minimax1.Some.class) {
                                                              arg$Some$0$27 = inlinedVal87.value;
                                                              inlinedVal86 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$27);
                                                              if (inlinedVal86 === true) {
                                                                let inlinedVal88, inlinedVal89, arg$Some$0$28, inlinedVal90;
                                                                inlinedVal90 = minimax1[listNth$accessorSymbol](b, 8);
                                                                if (inlinedVal90 instanceof minimax1.Some.class) {
                                                                  arg$Some$0$28 = inlinedVal90.value;
                                                                  inlinedVal89 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$28);
                                                                  if (inlinedVal89 === true) {
                                                                    inlinedVal88 = true;
                                                                  } else {
                                                                    inlinedVal88 = false;
                                                                  }
                                                                } else if (inlinedVal90 instanceof minimax1.None.class) {
                                                                  inlinedVal88 = false;
                                                                } else {
                                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                }
                                                                inlinedVal85 = inlinedVal88;
                                                              } else {
                                                                inlinedVal85 = false;
                                                              }
                                                            } else if (inlinedVal87 instanceof minimax1.None.class) {
                                                              inlinedVal85 = false;
                                                            } else {
                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                            }
                                                            inlinedVal82 = inlinedVal85;
                                                          } else {
                                                            inlinedVal82 = false;
                                                          }
                                                        } else if (inlinedVal84 instanceof minimax1.None.class) {
                                                          inlinedVal82 = false;
                                                        } else {
                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                        }
                                                        if (inlinedVal82 === false) {
                                                          let inlinedVal85, inlinedVal86, arg$Some$0$27, inlinedVal87;
                                                          inlinedVal87 = minimax1[listNth$accessorSymbol](b, 0);
                                                          if (inlinedVal87 instanceof minimax1.Some.class) {
                                                            arg$Some$0$27 = inlinedVal87.value;
                                                            inlinedVal86 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$27);
                                                            if (inlinedVal86 === true) {
                                                              let inlinedVal88, inlinedVal89, arg$Some$0$28, inlinedVal90;
                                                              inlinedVal90 = minimax1[listNth$accessorSymbol](b, 3);
                                                              if (inlinedVal90 instanceof minimax1.Some.class) {
                                                                arg$Some$0$28 = inlinedVal90.value;
                                                                inlinedVal89 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$28);
                                                                if (inlinedVal89 === true) {
                                                                  let inlinedVal91, inlinedVal92, arg$Some$0$29, inlinedVal93;
                                                                  inlinedVal93 = minimax1[listNth$accessorSymbol](b, 6);
                                                                  if (inlinedVal93 instanceof minimax1.Some.class) {
                                                                    arg$Some$0$29 = inlinedVal93.value;
                                                                    inlinedVal92 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$29);
                                                                    if (inlinedVal92 === true) {
                                                                      inlinedVal91 = true;
                                                                    } else {
                                                                      inlinedVal91 = false;
                                                                    }
                                                                  } else if (inlinedVal93 instanceof minimax1.None.class) {
                                                                    inlinedVal91 = false;
                                                                  } else {
                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                  }
                                                                  inlinedVal88 = inlinedVal91;
                                                                } else {
                                                                  inlinedVal88 = false;
                                                                }
                                                              } else if (inlinedVal90 instanceof minimax1.None.class) {
                                                                inlinedVal88 = false;
                                                              } else {
                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                              }
                                                              inlinedVal85 = inlinedVal88;
                                                            } else {
                                                              inlinedVal85 = false;
                                                            }
                                                          } else if (inlinedVal87 instanceof minimax1.None.class) {
                                                            inlinedVal85 = false;
                                                          } else {
                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                          }
                                                          if (inlinedVal85 === false) {
                                                            let inlinedVal88, inlinedVal89, arg$Some$0$28, inlinedVal90;
                                                            inlinedVal90 = minimax1[listNth$accessorSymbol](b, 1);
                                                            if (inlinedVal90 instanceof minimax1.Some.class) {
                                                              arg$Some$0$28 = inlinedVal90.value;
                                                              inlinedVal89 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$28);
                                                              if (inlinedVal89 === true) {
                                                                let inlinedVal91, inlinedVal92, arg$Some$0$29, inlinedVal93;
                                                                inlinedVal93 = minimax1[listNth$accessorSymbol](b, 4);
                                                                if (inlinedVal93 instanceof minimax1.Some.class) {
                                                                  arg$Some$0$29 = inlinedVal93.value;
                                                                  inlinedVal92 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$29);
                                                                  if (inlinedVal92 === true) {
                                                                    let inlinedVal94, inlinedVal95, arg$Some$0$30, inlinedVal96;
                                                                    inlinedVal96 = minimax1[listNth$accessorSymbol](b, 7);
                                                                    if (inlinedVal96 instanceof minimax1.Some.class) {
                                                                      arg$Some$0$30 = inlinedVal96.value;
                                                                      inlinedVal95 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$30);
                                                                      if (inlinedVal95 === true) {
                                                                        inlinedVal94 = true;
                                                                      } else {
                                                                        inlinedVal94 = false;
                                                                      }
                                                                    } else if (inlinedVal96 instanceof minimax1.None.class) {
                                                                      inlinedVal94 = false;
                                                                    } else {
                                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                    }
                                                                    inlinedVal91 = inlinedVal94;
                                                                  } else {
                                                                    inlinedVal91 = false;
                                                                  }
                                                                } else if (inlinedVal93 instanceof minimax1.None.class) {
                                                                  inlinedVal91 = false;
                                                                } else {
                                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                }
                                                                inlinedVal88 = inlinedVal91;
                                                              } else {
                                                                inlinedVal88 = false;
                                                              }
                                                            } else if (inlinedVal90 instanceof minimax1.None.class) {
                                                              inlinedVal88 = false;
                                                            } else {
                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                            }
                                                            if (inlinedVal88 === false) {
                                                              let inlinedVal91, inlinedVal92, arg$Some$0$29, inlinedVal93;
                                                              inlinedVal93 = minimax1[listNth$accessorSymbol](b, 2);
                                                              if (inlinedVal93 instanceof minimax1.Some.class) {
                                                                arg$Some$0$29 = inlinedVal93.value;
                                                                inlinedVal92 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$29);
                                                                if (inlinedVal92 === true) {
                                                                  let inlinedVal94, inlinedVal95, arg$Some$0$30, inlinedVal96;
                                                                  inlinedVal96 = minimax1[listNth$accessorSymbol](b, 5);
                                                                  if (inlinedVal96 instanceof minimax1.Some.class) {
                                                                    arg$Some$0$30 = inlinedVal96.value;
                                                                    inlinedVal95 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$30);
                                                                    if (inlinedVal95 === true) {
                                                                      let inlinedVal97, inlinedVal98, arg$Some$0$31, inlinedVal99;
                                                                      inlinedVal99 = minimax1[listNth$accessorSymbol](b, 8);
                                                                      if (inlinedVal99 instanceof minimax1.Some.class) {
                                                                        arg$Some$0$31 = inlinedVal99.value;
                                                                        inlinedVal98 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$31);
                                                                        if (inlinedVal98 === true) {
                                                                          inlinedVal97 = true;
                                                                        } else {
                                                                          inlinedVal97 = false;
                                                                        }
                                                                      } else if (inlinedVal99 instanceof minimax1.None.class) {
                                                                        inlinedVal97 = false;
                                                                      } else {
                                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                      }
                                                                      inlinedVal94 = inlinedVal97;
                                                                    } else {
                                                                      inlinedVal94 = false;
                                                                    }
                                                                  } else if (inlinedVal96 instanceof minimax1.None.class) {
                                                                    inlinedVal94 = false;
                                                                  } else {
                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                  }
                                                                  inlinedVal91 = inlinedVal94;
                                                                } else {
                                                                  inlinedVal91 = false;
                                                                }
                                                              } else if (inlinedVal93 instanceof minimax1.None.class) {
                                                                inlinedVal91 = false;
                                                              } else {
                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                              }
                                                              if (inlinedVal91 === false) {
                                                                let inlinedVal94, inlinedVal95, arg$Some$0$30, inlinedVal96;
                                                                inlinedVal96 = minimax1[listNth$accessorSymbol](b, 0);
                                                                if (inlinedVal96 instanceof minimax1.Some.class) {
                                                                  arg$Some$0$30 = inlinedVal96.value;
                                                                  inlinedVal95 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$30);
                                                                  if (inlinedVal95 === true) {
                                                                    let inlinedVal97, inlinedVal98, arg$Some$0$31, inlinedVal99;
                                                                    inlinedVal99 = minimax1[listNth$accessorSymbol](b, 4);
                                                                    if (inlinedVal99 instanceof minimax1.Some.class) {
                                                                      arg$Some$0$31 = inlinedVal99.value;
                                                                      inlinedVal98 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$31);
                                                                      if (inlinedVal98 === true) {
                                                                        let inlinedVal100, inlinedVal101, arg$Some$0$32, inlinedVal102;
                                                                        inlinedVal102 = minimax1[listNth$accessorSymbol](b, 8);
                                                                        if (inlinedVal102 instanceof minimax1.Some.class) {
                                                                          arg$Some$0$32 = inlinedVal102.value;
                                                                          inlinedVal101 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$32);
                                                                          if (inlinedVal101 === true) {
                                                                            inlinedVal100 = true;
                                                                          } else {
                                                                            inlinedVal100 = false;
                                                                          }
                                                                        } else if (inlinedVal102 instanceof minimax1.None.class) {
                                                                          inlinedVal100 = false;
                                                                        } else {
                                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                        }
                                                                        inlinedVal97 = inlinedVal100;
                                                                      } else {
                                                                        inlinedVal97 = false;
                                                                      }
                                                                    } else if (inlinedVal99 instanceof minimax1.None.class) {
                                                                      inlinedVal97 = false;
                                                                    } else {
                                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                    }
                                                                    inlinedVal94 = inlinedVal97;
                                                                  } else {
                                                                    inlinedVal94 = false;
                                                                  }
                                                                } else if (inlinedVal96 instanceof minimax1.None.class) {
                                                                  inlinedVal94 = false;
                                                                } else {
                                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                }
                                                                if (inlinedVal94 === false) {
                                                                  let inlinedVal97, arg$Some$0$31, inlinedVal98;
                                                                  inlinedVal98 = minimax1[listNth$accessorSymbol](b, 2);
                                                                  if (inlinedVal98 instanceof minimax1.Some.class) {
                                                                    arg$Some$0$31 = inlinedVal98.value;
                                                                    inlinedVal97 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$31);
                                                                    if (inlinedVal97 === true) {
                                                                      let inlinedVal99, arg$Some$0$32, inlinedVal100;
                                                                      inlinedVal100 = minimax1[listNth$accessorSymbol](b, 4);
                                                                      if (inlinedVal100 instanceof minimax1.Some.class) {
                                                                        arg$Some$0$32 = inlinedVal100.value;
                                                                        inlinedVal99 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$32);
                                                                        if (inlinedVal99 === true) {
                                                                          let inlinedVal101, arg$Some$0$33, inlinedVal102;
                                                                          inlinedVal102 = minimax1[listNth$accessorSymbol](b, 6);
                                                                          if (inlinedVal102 instanceof minimax1.Some.class) {
                                                                            arg$Some$0$33 = inlinedVal102.value;
                                                                            inlinedVal101 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$33);
                                                                            if (inlinedVal101 === true) {
                                                                              inlinedVal75 = false;
                                                                            } else {
                                                                              inlinedVal75 = true;
                                                                            }
                                                                          } else if (inlinedVal102 instanceof minimax1.None.class) {
                                                                            inlinedVal75 = true;
                                                                          } else {
                                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                          }
                                                                        } else {
                                                                          inlinedVal75 = true;
                                                                        }
                                                                      } else if (inlinedVal100 instanceof minimax1.None.class) {
                                                                        inlinedVal75 = true;
                                                                      } else {
                                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                      }
                                                                    } else {
                                                                      inlinedVal75 = true;
                                                                    }
                                                                  } else if (inlinedVal98 instanceof minimax1.None.class) {
                                                                    inlinedVal75 = true;
                                                                  } else {
                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                  }
                                                                } else {
                                                                  inlinedVal75 = false;
                                                                }
                                                              } else {
                                                                inlinedVal75 = false;
                                                              }
                                                            } else {
                                                              inlinedVal75 = false;
                                                            }
                                                          } else {
                                                            inlinedVal75 = false;
                                                          }
                                                        } else {
                                                          inlinedVal75 = false;
                                                        }
                                                      } else {
                                                        inlinedVal75 = false;
                                                      }
                                                    } else {
                                                      inlinedVal75 = false;
                                                    }
                                                    inlinedVal49 = inlinedVal75;
                                                  } else {
                                                    inlinedVal49 = false;
                                                  }
                                                } else {
                                                  inlinedVal49 = false;
                                                }
                                              } else {
                                                inlinedVal49 = false;
                                              }
                                            } else {
                                              inlinedVal49 = false;
                                            }
                                          } else {
                                            inlinedVal49 = false;
                                          }
                                        } else {
                                          inlinedVal49 = false;
                                        }
                                      } else {
                                        inlinedVal49 = false;
                                      }
                                    } else {
                                      inlinedVal49 = false;
                                    }
                                  } else {
                                    inlinedVal49 = false;
                                  }
                                  inlinedVal = inlinedVal49;
                                } else {
                                  inlinedVal = true;
                                }
                              } else {
                                inlinedVal = true;
                              }
                            } else {
                              inlinedVal = true;
                            }
                          } else {
                            inlinedVal = true;
                          }
                        } else {
                          inlinedVal = true;
                        }
                      } else {
                        inlinedVal = true;
                      }
                    } else {
                      inlinedVal = true;
                    }
                  } else {
                    inlinedVal = true;
                  }
                } else {
                  inlinedVal = true;
                }
              } else {
                inlinedVal = true;
              }
            } else {
              inlinedVal = true;
            }
          } else {
            inlinedVal = true;
          }
        } else {
          inlinedVal = true;
        }
      } else {
        inlinedVal = true;
      }
    } else {
      inlinedVal = true;
    }
  } else {
    inlinedVal = true;
  }
  if (inlinedVal === true) {
    let inlinedVal4, p2, inlinedVal5, inlinedVal6, arg$Some$0$1, inlinedVal7;
    p2 = minimax1.X;
    inlinedVal7 = minimax1[listNth$accessorSymbol](b, 0);
    if (inlinedVal7 instanceof minimax1.Some.class) {
      arg$Some$0$1 = inlinedVal7.value;
      inlinedVal6 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$1);
      if (inlinedVal6 === true) {
        let inlinedVal8, inlinedVal9, arg$Some$0$2, inlinedVal10;
        inlinedVal10 = minimax1[listNth$accessorSymbol](b, 1);
        if (inlinedVal10 instanceof minimax1.Some.class) {
          arg$Some$0$2 = inlinedVal10.value;
          inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
          if (inlinedVal9 === true) {
            let inlinedVal11, inlinedVal12, arg$Some$0$3, inlinedVal13;
            inlinedVal13 = minimax1[listNth$accessorSymbol](b, 2);
            if (inlinedVal13 instanceof minimax1.Some.class) {
              arg$Some$0$3 = inlinedVal13.value;
              inlinedVal12 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$3);
              if (inlinedVal12 === true) {
                inlinedVal11 = true;
              } else {
                inlinedVal11 = false;
              }
            } else if (inlinedVal13 instanceof minimax1.None.class) {
              inlinedVal11 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            inlinedVal8 = inlinedVal11;
          } else {
            inlinedVal8 = false;
          }
        } else if (inlinedVal10 instanceof minimax1.None.class) {
          inlinedVal8 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        inlinedVal5 = inlinedVal8;
      } else {
        inlinedVal5 = false;
      }
    } else if (inlinedVal7 instanceof minimax1.None.class) {
      inlinedVal5 = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal5 === false) {
      let inlinedVal8, inlinedVal9, arg$Some$0$2, inlinedVal10;
      inlinedVal10 = minimax1[listNth$accessorSymbol](b, 3);
      if (inlinedVal10 instanceof minimax1.Some.class) {
        arg$Some$0$2 = inlinedVal10.value;
        inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
        if (inlinedVal9 === true) {
          let inlinedVal11, inlinedVal12, arg$Some$0$3, inlinedVal13;
          inlinedVal13 = minimax1[listNth$accessorSymbol](b, 4);
          if (inlinedVal13 instanceof minimax1.Some.class) {
            arg$Some$0$3 = inlinedVal13.value;
            inlinedVal12 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$3);
            if (inlinedVal12 === true) {
              let inlinedVal14, inlinedVal15, arg$Some$0$4, inlinedVal16;
              inlinedVal16 = minimax1[listNth$accessorSymbol](b, 5);
              if (inlinedVal16 instanceof minimax1.Some.class) {
                arg$Some$0$4 = inlinedVal16.value;
                inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
                if (inlinedVal15 === true) {
                  inlinedVal14 = true;
                } else {
                  inlinedVal14 = false;
                }
              } else if (inlinedVal16 instanceof minimax1.None.class) {
                inlinedVal14 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              inlinedVal11 = inlinedVal14;
            } else {
              inlinedVal11 = false;
            }
          } else if (inlinedVal13 instanceof minimax1.None.class) {
            inlinedVal11 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          inlinedVal8 = inlinedVal11;
        } else {
          inlinedVal8 = false;
        }
      } else if (inlinedVal10 instanceof minimax1.None.class) {
        inlinedVal8 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal8 === false) {
        let inlinedVal11, inlinedVal12, arg$Some$0$3, inlinedVal13;
        inlinedVal13 = minimax1[listNth$accessorSymbol](b, 6);
        if (inlinedVal13 instanceof minimax1.Some.class) {
          arg$Some$0$3 = inlinedVal13.value;
          inlinedVal12 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$3);
          if (inlinedVal12 === true) {
            let inlinedVal14, inlinedVal15, arg$Some$0$4, inlinedVal16;
            inlinedVal16 = minimax1[listNth$accessorSymbol](b, 7);
            if (inlinedVal16 instanceof minimax1.Some.class) {
              arg$Some$0$4 = inlinedVal16.value;
              inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
              if (inlinedVal15 === true) {
                let inlinedVal17, inlinedVal18, arg$Some$0$5, inlinedVal19;
                inlinedVal19 = minimax1[listNth$accessorSymbol](b, 8);
                if (inlinedVal19 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = inlinedVal19.value;
                  inlinedVal18 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$5);
                  if (inlinedVal18 === true) {
                    inlinedVal17 = true;
                  } else {
                    inlinedVal17 = false;
                  }
                } else if (inlinedVal19 instanceof minimax1.None.class) {
                  inlinedVal17 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                inlinedVal14 = inlinedVal17;
              } else {
                inlinedVal14 = false;
              }
            } else if (inlinedVal16 instanceof minimax1.None.class) {
              inlinedVal14 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            inlinedVal11 = inlinedVal14;
          } else {
            inlinedVal11 = false;
          }
        } else if (inlinedVal13 instanceof minimax1.None.class) {
          inlinedVal11 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        if (inlinedVal11 === false) {
          let inlinedVal14, inlinedVal15, arg$Some$0$4, inlinedVal16;
          inlinedVal16 = minimax1[listNth$accessorSymbol](b, 0);
          if (inlinedVal16 instanceof minimax1.Some.class) {
            arg$Some$0$4 = inlinedVal16.value;
            inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
            if (inlinedVal15 === true) {
              let inlinedVal17, inlinedVal18, arg$Some$0$5, inlinedVal19;
              inlinedVal19 = minimax1[listNth$accessorSymbol](b, 3);
              if (inlinedVal19 instanceof minimax1.Some.class) {
                arg$Some$0$5 = inlinedVal19.value;
                inlinedVal18 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$5);
                if (inlinedVal18 === true) {
                  let inlinedVal20, inlinedVal21, arg$Some$0$6, inlinedVal22;
                  inlinedVal22 = minimax1[listNth$accessorSymbol](b, 6);
                  if (inlinedVal22 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = inlinedVal22.value;
                    inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                    if (inlinedVal21 === true) {
                      inlinedVal20 = true;
                    } else {
                      inlinedVal20 = false;
                    }
                  } else if (inlinedVal22 instanceof minimax1.None.class) {
                    inlinedVal20 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  inlinedVal17 = inlinedVal20;
                } else {
                  inlinedVal17 = false;
                }
              } else if (inlinedVal19 instanceof minimax1.None.class) {
                inlinedVal17 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              inlinedVal14 = inlinedVal17;
            } else {
              inlinedVal14 = false;
            }
          } else if (inlinedVal16 instanceof minimax1.None.class) {
            inlinedVal14 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          if (inlinedVal14 === false) {
            let inlinedVal17, inlinedVal18, arg$Some$0$5, inlinedVal19;
            inlinedVal19 = minimax1[listNth$accessorSymbol](b, 1);
            if (inlinedVal19 instanceof minimax1.Some.class) {
              arg$Some$0$5 = inlinedVal19.value;
              inlinedVal18 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$5);
              if (inlinedVal18 === true) {
                let inlinedVal20, inlinedVal21, arg$Some$0$6, inlinedVal22;
                inlinedVal22 = minimax1[listNth$accessorSymbol](b, 4);
                if (inlinedVal22 instanceof minimax1.Some.class) {
                  arg$Some$0$6 = inlinedVal22.value;
                  inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                  if (inlinedVal21 === true) {
                    let inlinedVal23, inlinedVal24, arg$Some$0$7, inlinedVal25;
                    inlinedVal25 = minimax1[listNth$accessorSymbol](b, 7);
                    if (inlinedVal25 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = inlinedVal25.value;
                      inlinedVal24 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                      if (inlinedVal24 === true) {
                        inlinedVal23 = true;
                      } else {
                        inlinedVal23 = false;
                      }
                    } else if (inlinedVal25 instanceof minimax1.None.class) {
                      inlinedVal23 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    inlinedVal20 = inlinedVal23;
                  } else {
                    inlinedVal20 = false;
                  }
                } else if (inlinedVal22 instanceof minimax1.None.class) {
                  inlinedVal20 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                inlinedVal17 = inlinedVal20;
              } else {
                inlinedVal17 = false;
              }
            } else if (inlinedVal19 instanceof minimax1.None.class) {
              inlinedVal17 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal17 === false) {
              let inlinedVal20, inlinedVal21, arg$Some$0$6, inlinedVal22;
              inlinedVal22 = minimax1[listNth$accessorSymbol](b, 2);
              if (inlinedVal22 instanceof minimax1.Some.class) {
                arg$Some$0$6 = inlinedVal22.value;
                inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                if (inlinedVal21 === true) {
                  let inlinedVal23, inlinedVal24, arg$Some$0$7, inlinedVal25;
                  inlinedVal25 = minimax1[listNth$accessorSymbol](b, 5);
                  if (inlinedVal25 instanceof minimax1.Some.class) {
                    arg$Some$0$7 = inlinedVal25.value;
                    inlinedVal24 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                    if (inlinedVal24 === true) {
                      let inlinedVal26, inlinedVal27, arg$Some$0$8, inlinedVal28;
                      inlinedVal28 = minimax1[listNth$accessorSymbol](b, 8);
                      if (inlinedVal28 instanceof minimax1.Some.class) {
                        arg$Some$0$8 = inlinedVal28.value;
                        inlinedVal27 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$8);
                        if (inlinedVal27 === true) {
                          inlinedVal26 = true;
                        } else {
                          inlinedVal26 = false;
                        }
                      } else if (inlinedVal28 instanceof minimax1.None.class) {
                        inlinedVal26 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal23 = inlinedVal26;
                    } else {
                      inlinedVal23 = false;
                    }
                  } else if (inlinedVal25 instanceof minimax1.None.class) {
                    inlinedVal23 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  inlinedVal20 = inlinedVal23;
                } else {
                  inlinedVal20 = false;
                }
              } else if (inlinedVal22 instanceof minimax1.None.class) {
                inlinedVal20 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              if (inlinedVal20 === false) {
                let inlinedVal23, inlinedVal24, arg$Some$0$7, inlinedVal25;
                inlinedVal25 = minimax1[listNth$accessorSymbol](b, 0);
                if (inlinedVal25 instanceof minimax1.Some.class) {
                  arg$Some$0$7 = inlinedVal25.value;
                  inlinedVal24 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                  if (inlinedVal24 === true) {
                    let inlinedVal26, inlinedVal27, arg$Some$0$8, inlinedVal28;
                    inlinedVal28 = minimax1[listNth$accessorSymbol](b, 4);
                    if (inlinedVal28 instanceof minimax1.Some.class) {
                      arg$Some$0$8 = inlinedVal28.value;
                      inlinedVal27 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$8);
                      if (inlinedVal27 === true) {
                        let inlinedVal29, inlinedVal30, arg$Some$0$9, inlinedVal31;
                        inlinedVal31 = minimax1[listNth$accessorSymbol](b, 8);
                        if (inlinedVal31 instanceof minimax1.Some.class) {
                          arg$Some$0$9 = inlinedVal31.value;
                          inlinedVal30 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                          if (inlinedVal30 === true) {
                            inlinedVal29 = true;
                          } else {
                            inlinedVal29 = false;
                          }
                        } else if (inlinedVal31 instanceof minimax1.None.class) {
                          inlinedVal29 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        inlinedVal26 = inlinedVal29;
                      } else {
                        inlinedVal26 = false;
                      }
                    } else if (inlinedVal28 instanceof minimax1.None.class) {
                      inlinedVal26 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    inlinedVal23 = inlinedVal26;
                  } else {
                    inlinedVal23 = false;
                  }
                } else if (inlinedVal25 instanceof minimax1.None.class) {
                  inlinedVal23 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal23 === false) {
                  let inlinedVal26, inlinedVal27, arg$Some$0$8, inlinedVal28;
                  inlinedVal28 = minimax1[listNth$accessorSymbol](b, 2);
                  if (inlinedVal28 instanceof minimax1.Some.class) {
                    arg$Some$0$8 = inlinedVal28.value;
                    inlinedVal27 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$8);
                    if (inlinedVal27 === true) {
                      let inlinedVal29, inlinedVal30, arg$Some$0$9, inlinedVal31;
                      inlinedVal31 = minimax1[listNth$accessorSymbol](b, 4);
                      if (inlinedVal31 instanceof minimax1.Some.class) {
                        arg$Some$0$9 = inlinedVal31.value;
                        inlinedVal30 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                        if (inlinedVal30 === true) {
                          let inlinedVal32, inlinedVal33, arg$Some$0$10, inlinedVal34;
                          inlinedVal34 = minimax1[listNth$accessorSymbol](b, 6);
                          if (inlinedVal34 instanceof minimax1.Some.class) {
                            arg$Some$0$10 = inlinedVal34.value;
                            inlinedVal33 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$10);
                            if (inlinedVal33 === true) {
                              inlinedVal32 = true;
                            } else {
                              inlinedVal32 = false;
                            }
                          } else if (inlinedVal34 instanceof minimax1.None.class) {
                            inlinedVal32 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          inlinedVal29 = inlinedVal32;
                        } else {
                          inlinedVal29 = false;
                        }
                      } else if (inlinedVal31 instanceof minimax1.None.class) {
                        inlinedVal29 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal26 = inlinedVal29;
                    } else {
                      inlinedVal26 = false;
                    }
                  } else if (inlinedVal28 instanceof minimax1.None.class) {
                    inlinedVal26 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal26 === false) {
                    let p3, inlinedVal29, inlinedVal30, arg$Some$0$9, inlinedVal31;
                    p3 = minimax1.O;
                    inlinedVal31 = minimax1[listNth$accessorSymbol](b, 0);
                    if (inlinedVal31 instanceof minimax1.Some.class) {
                      arg$Some$0$9 = inlinedVal31.value;
                      inlinedVal30 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$9);
                      if (inlinedVal30 === true) {
                        let inlinedVal32, inlinedVal33, arg$Some$0$10, inlinedVal34;
                        inlinedVal34 = minimax1[listNth$accessorSymbol](b, 1);
                        if (inlinedVal34 instanceof minimax1.Some.class) {
                          arg$Some$0$10 = inlinedVal34.value;
                          inlinedVal33 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                          if (inlinedVal33 === true) {
                            let inlinedVal35, inlinedVal36, arg$Some$0$11, inlinedVal37;
                            inlinedVal37 = minimax1[listNth$accessorSymbol](b, 2);
                            if (inlinedVal37 instanceof minimax1.Some.class) {
                              arg$Some$0$11 = inlinedVal37.value;
                              inlinedVal36 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$11);
                              if (inlinedVal36 === true) {
                                inlinedVal35 = true;
                              } else {
                                inlinedVal35 = false;
                              }
                            } else if (inlinedVal37 instanceof minimax1.None.class) {
                              inlinedVal35 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            inlinedVal32 = inlinedVal35;
                          } else {
                            inlinedVal32 = false;
                          }
                        } else if (inlinedVal34 instanceof minimax1.None.class) {
                          inlinedVal32 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        inlinedVal29 = inlinedVal32;
                      } else {
                        inlinedVal29 = false;
                      }
                    } else if (inlinedVal31 instanceof minimax1.None.class) {
                      inlinedVal29 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    if (inlinedVal29 === false) {
                      let inlinedVal32, inlinedVal33, arg$Some$0$10, inlinedVal34;
                      inlinedVal34 = minimax1[listNth$accessorSymbol](b, 3);
                      if (inlinedVal34 instanceof minimax1.Some.class) {
                        arg$Some$0$10 = inlinedVal34.value;
                        inlinedVal33 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                        if (inlinedVal33 === true) {
                          let inlinedVal35, inlinedVal36, arg$Some$0$11, inlinedVal37;
                          inlinedVal37 = minimax1[listNth$accessorSymbol](b, 4);
                          if (inlinedVal37 instanceof minimax1.Some.class) {
                            arg$Some$0$11 = inlinedVal37.value;
                            inlinedVal36 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$11);
                            if (inlinedVal36 === true) {
                              let inlinedVal38, inlinedVal39, arg$Some$0$12, inlinedVal40;
                              inlinedVal40 = minimax1[listNth$accessorSymbol](b, 5);
                              if (inlinedVal40 instanceof minimax1.Some.class) {
                                arg$Some$0$12 = inlinedVal40.value;
                                inlinedVal39 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                                if (inlinedVal39 === true) {
                                  inlinedVal38 = true;
                                } else {
                                  inlinedVal38 = false;
                                }
                              } else if (inlinedVal40 instanceof minimax1.None.class) {
                                inlinedVal38 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              inlinedVal35 = inlinedVal38;
                            } else {
                              inlinedVal35 = false;
                            }
                          } else if (inlinedVal37 instanceof minimax1.None.class) {
                            inlinedVal35 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          inlinedVal32 = inlinedVal35;
                        } else {
                          inlinedVal32 = false;
                        }
                      } else if (inlinedVal34 instanceof minimax1.None.class) {
                        inlinedVal32 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      if (inlinedVal32 === false) {
                        let inlinedVal35, inlinedVal36, arg$Some$0$11, inlinedVal37;
                        inlinedVal37 = minimax1[listNth$accessorSymbol](b, 6);
                        if (inlinedVal37 instanceof minimax1.Some.class) {
                          arg$Some$0$11 = inlinedVal37.value;
                          inlinedVal36 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$11);
                          if (inlinedVal36 === true) {
                            let inlinedVal38, inlinedVal39, arg$Some$0$12, inlinedVal40;
                            inlinedVal40 = minimax1[listNth$accessorSymbol](b, 7);
                            if (inlinedVal40 instanceof minimax1.Some.class) {
                              arg$Some$0$12 = inlinedVal40.value;
                              inlinedVal39 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                              if (inlinedVal39 === true) {
                                let inlinedVal41, inlinedVal42, arg$Some$0$13, inlinedVal43;
                                inlinedVal43 = minimax1[listNth$accessorSymbol](b, 8);
                                if (inlinedVal43 instanceof minimax1.Some.class) {
                                  arg$Some$0$13 = inlinedVal43.value;
                                  inlinedVal42 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$13);
                                  if (inlinedVal42 === true) {
                                    inlinedVal41 = true;
                                  } else {
                                    inlinedVal41 = false;
                                  }
                                } else if (inlinedVal43 instanceof minimax1.None.class) {
                                  inlinedVal41 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                inlinedVal38 = inlinedVal41;
                              } else {
                                inlinedVal38 = false;
                              }
                            } else if (inlinedVal40 instanceof minimax1.None.class) {
                              inlinedVal38 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            inlinedVal35 = inlinedVal38;
                          } else {
                            inlinedVal35 = false;
                          }
                        } else if (inlinedVal37 instanceof minimax1.None.class) {
                          inlinedVal35 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        if (inlinedVal35 === false) {
                          let inlinedVal38, inlinedVal39, arg$Some$0$12, inlinedVal40;
                          inlinedVal40 = minimax1[listNth$accessorSymbol](b, 0);
                          if (inlinedVal40 instanceof minimax1.Some.class) {
                            arg$Some$0$12 = inlinedVal40.value;
                            inlinedVal39 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                            if (inlinedVal39 === true) {
                              let inlinedVal41, inlinedVal42, arg$Some$0$13, inlinedVal43;
                              inlinedVal43 = minimax1[listNth$accessorSymbol](b, 3);
                              if (inlinedVal43 instanceof minimax1.Some.class) {
                                arg$Some$0$13 = inlinedVal43.value;
                                inlinedVal42 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$13);
                                if (inlinedVal42 === true) {
                                  let inlinedVal44, inlinedVal45, arg$Some$0$14, inlinedVal46;
                                  inlinedVal46 = minimax1[listNth$accessorSymbol](b, 6);
                                  if (inlinedVal46 instanceof minimax1.Some.class) {
                                    arg$Some$0$14 = inlinedVal46.value;
                                    inlinedVal45 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$14);
                                    if (inlinedVal45 === true) {
                                      inlinedVal44 = true;
                                    } else {
                                      inlinedVal44 = false;
                                    }
                                  } else if (inlinedVal46 instanceof minimax1.None.class) {
                                    inlinedVal44 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  inlinedVal41 = inlinedVal44;
                                } else {
                                  inlinedVal41 = false;
                                }
                              } else if (inlinedVal43 instanceof minimax1.None.class) {
                                inlinedVal41 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              inlinedVal38 = inlinedVal41;
                            } else {
                              inlinedVal38 = false;
                            }
                          } else if (inlinedVal40 instanceof minimax1.None.class) {
                            inlinedVal38 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          if (inlinedVal38 === false) {
                            let inlinedVal41, inlinedVal42, arg$Some$0$13, inlinedVal43;
                            inlinedVal43 = minimax1[listNth$accessorSymbol](b, 1);
                            if (inlinedVal43 instanceof minimax1.Some.class) {
                              arg$Some$0$13 = inlinedVal43.value;
                              inlinedVal42 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$13);
                              if (inlinedVal42 === true) {
                                let inlinedVal44, inlinedVal45, arg$Some$0$14, inlinedVal46;
                                inlinedVal46 = minimax1[listNth$accessorSymbol](b, 4);
                                if (inlinedVal46 instanceof minimax1.Some.class) {
                                  arg$Some$0$14 = inlinedVal46.value;
                                  inlinedVal45 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$14);
                                  if (inlinedVal45 === true) {
                                    let inlinedVal47, inlinedVal48, arg$Some$0$15, inlinedVal49;
                                    inlinedVal49 = minimax1[listNth$accessorSymbol](b, 7);
                                    if (inlinedVal49 instanceof minimax1.Some.class) {
                                      arg$Some$0$15 = inlinedVal49.value;
                                      inlinedVal48 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$15);
                                      if (inlinedVal48 === true) {
                                        inlinedVal47 = true;
                                      } else {
                                        inlinedVal47 = false;
                                      }
                                    } else if (inlinedVal49 instanceof minimax1.None.class) {
                                      inlinedVal47 = false;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                    inlinedVal44 = inlinedVal47;
                                  } else {
                                    inlinedVal44 = false;
                                  }
                                } else if (inlinedVal46 instanceof minimax1.None.class) {
                                  inlinedVal44 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                inlinedVal41 = inlinedVal44;
                              } else {
                                inlinedVal41 = false;
                              }
                            } else if (inlinedVal43 instanceof minimax1.None.class) {
                              inlinedVal41 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            if (inlinedVal41 === false) {
                              let inlinedVal44, inlinedVal45, arg$Some$0$14, inlinedVal46;
                              inlinedVal46 = minimax1[listNth$accessorSymbol](b, 2);
                              if (inlinedVal46 instanceof minimax1.Some.class) {
                                arg$Some$0$14 = inlinedVal46.value;
                                inlinedVal45 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$14);
                                if (inlinedVal45 === true) {
                                  let inlinedVal47, inlinedVal48, arg$Some$0$15, inlinedVal49;
                                  inlinedVal49 = minimax1[listNth$accessorSymbol](b, 5);
                                  if (inlinedVal49 instanceof minimax1.Some.class) {
                                    arg$Some$0$15 = inlinedVal49.value;
                                    inlinedVal48 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$15);
                                    if (inlinedVal48 === true) {
                                      let inlinedVal50, inlinedVal51, arg$Some$0$16, inlinedVal52;
                                      inlinedVal52 = minimax1[listNth$accessorSymbol](b, 8);
                                      if (inlinedVal52 instanceof minimax1.Some.class) {
                                        arg$Some$0$16 = inlinedVal52.value;
                                        inlinedVal51 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$16);
                                        if (inlinedVal51 === true) {
                                          inlinedVal50 = true;
                                        } else {
                                          inlinedVal50 = false;
                                        }
                                      } else if (inlinedVal52 instanceof minimax1.None.class) {
                                        inlinedVal50 = false;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                      inlinedVal47 = inlinedVal50;
                                    } else {
                                      inlinedVal47 = false;
                                    }
                                  } else if (inlinedVal49 instanceof minimax1.None.class) {
                                    inlinedVal47 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  inlinedVal44 = inlinedVal47;
                                } else {
                                  inlinedVal44 = false;
                                }
                              } else if (inlinedVal46 instanceof minimax1.None.class) {
                                inlinedVal44 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              if (inlinedVal44 === false) {
                                let inlinedVal47, inlinedVal48, arg$Some$0$15, inlinedVal49;
                                inlinedVal49 = minimax1[listNth$accessorSymbol](b, 0);
                                if (inlinedVal49 instanceof minimax1.Some.class) {
                                  arg$Some$0$15 = inlinedVal49.value;
                                  inlinedVal48 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$15);
                                  if (inlinedVal48 === true) {
                                    let inlinedVal50, inlinedVal51, arg$Some$0$16, inlinedVal52;
                                    inlinedVal52 = minimax1[listNth$accessorSymbol](b, 4);
                                    if (inlinedVal52 instanceof minimax1.Some.class) {
                                      arg$Some$0$16 = inlinedVal52.value;
                                      inlinedVal51 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$16);
                                      if (inlinedVal51 === true) {
                                        let inlinedVal53, inlinedVal54, arg$Some$0$17, inlinedVal55;
                                        inlinedVal55 = minimax1[listNth$accessorSymbol](b, 8);
                                        if (inlinedVal55 instanceof minimax1.Some.class) {
                                          arg$Some$0$17 = inlinedVal55.value;
                                          inlinedVal54 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$17);
                                          if (inlinedVal54 === true) {
                                            inlinedVal53 = true;
                                          } else {
                                            inlinedVal53 = false;
                                          }
                                        } else if (inlinedVal55 instanceof minimax1.None.class) {
                                          inlinedVal53 = false;
                                        } else {
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                        }
                                        inlinedVal50 = inlinedVal53;
                                      } else {
                                        inlinedVal50 = false;
                                      }
                                    } else if (inlinedVal52 instanceof minimax1.None.class) {
                                      inlinedVal50 = false;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                    inlinedVal47 = inlinedVal50;
                                  } else {
                                    inlinedVal47 = false;
                                  }
                                } else if (inlinedVal49 instanceof minimax1.None.class) {
                                  inlinedVal47 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                if (inlinedVal47 === false) {
                                  let inlinedVal50, arg$Some$0$16, inlinedVal51;
                                  inlinedVal51 = minimax1[listNth$accessorSymbol](b, 2);
                                  if (inlinedVal51 instanceof minimax1.Some.class) {
                                    arg$Some$0$16 = inlinedVal51.value;
                                    inlinedVal50 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$16);
                                    if (inlinedVal50 === true) {
                                      let inlinedVal52, arg$Some$0$17, inlinedVal53;
                                      inlinedVal53 = minimax1[listNth$accessorSymbol](b, 4);
                                      if (inlinedVal53 instanceof minimax1.Some.class) {
                                        arg$Some$0$17 = inlinedVal53.value;
                                        inlinedVal52 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$17);
                                        if (inlinedVal52 === true) {
                                          let inlinedVal54, arg$Some$0$18, inlinedVal55;
                                          inlinedVal55 = minimax1[listNth$accessorSymbol](b, 6);
                                          if (inlinedVal55 instanceof minimax1.Some.class) {
                                            arg$Some$0$18 = inlinedVal55.value;
                                            inlinedVal54 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$18);
                                            if (inlinedVal54 === true) {
                                              inlinedVal4 = -1;
                                            } else {
                                              inlinedVal4 = 0;
                                            }
                                          } else if (inlinedVal55 instanceof minimax1.None.class) {
                                            inlinedVal4 = 0;
                                          } else {
                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                          }
                                        } else {
                                          inlinedVal4 = 0;
                                        }
                                      } else if (inlinedVal53 instanceof minimax1.None.class) {
                                        inlinedVal4 = 0;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                    } else {
                                      inlinedVal4 = 0;
                                    }
                                  } else if (inlinedVal51 instanceof minimax1.None.class) {
                                    inlinedVal4 = 0;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                } else {
                                  inlinedVal4 = -1;
                                }
                              } else {
                                inlinedVal4 = -1;
                              }
                            } else {
                              inlinedVal4 = -1;
                            }
                          } else {
                            inlinedVal4 = -1;
                          }
                        } else {
                          inlinedVal4 = -1;
                        }
                      } else {
                        inlinedVal4 = -1;
                      }
                    } else {
                      inlinedVal4 = -1;
                    }
                  } else {
                    inlinedVal4 = 1;
                  }
                } else {
                  inlinedVal4 = 1;
                }
              } else {
                inlinedVal4 = 1;
              }
            } else {
              inlinedVal4 = 1;
            }
          } else {
            inlinedVal4 = 1;
          }
        } else {
          inlinedVal4 = 1;
        }
      } else {
        inlinedVal4 = 1;
      }
    } else {
      inlinedVal4 = 1;
    }
    tmp = globalThis.Object.freeze([
      b,
      inlinedVal4
    ]);
    return minimax2.Rose(tmp, minimax2.Nil)
  }
  {
    let scrut, tmp1, inlinedVal4;
    tmp1 = minimax2[boardToIndex$accessorSymbol](p, b);
    inlinedVal4 = transTable.at(tmp1);
    scrut = inlinedVal4 == -2;
    if (scrut === true) {
      let fv_minimax, fv_p, fv_tmp, fv_transTable, fv_b, fv_tmp1, fv_tmp2, inlinedVal5, inlinedVal6, f, g, f1, inlinedVal7, tmp2, tmp3, inlinedVal8, minimax3, n, m, acc, inlinedVal9;
      fv_minimax = minimax2;
      fv_p = p;
      fv_transTable = transTable;
      fv_b = b;
      if (p instanceof fv_minimax.X.class) {
        inlinedVal5 = minimax2.O;
      } else if (p instanceof fv_minimax.O.class) {
        inlinedVal5 = minimax2.X;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      fv_tmp = main_minimaxTT$minimaxTT(minimax2, transTable, inlinedVal5);
      tmp3 = minimax1[moveTo$accessorSymbol](b, p);
      minimax3 = minimax1;
      n = 0;
      m = b;
      acc = main_minimaxTT_successors_allMoves_f_rev_go$l_Nil();
      inlinedLbl: {
        loopLabel: while (true) {
          let arg$Cons$0$, arg$Cons$1$, tmp4, tmp5, tmp6;
          if (m instanceof minimax3.Nil.class) {
            let acc1, inlinedVal10;
            acc1 = main_minimaxTT_successors_map$l_Nil();
            inlinedVal10 = acc(acc1, undefined, undefined, undefined, undefined, undefined, minimax1);
            inlinedVal9 = inlinedVal10;
            break inlinedLbl
          } else if (m instanceof minimax3.Cons.class) {
            arg$Cons$0$ = m.head;
            arg$Cons$1$ = m.tail;
            if (arg$Cons$0$ instanceof minimax3.Some.class) {
              tmp4 = n + 1;
              n = tmp4;
              m = arg$Cons$1$;
              continue loopLabel
            } else if (arg$Cons$0$ instanceof minimax3.None.class) {
              tmp5 = n + 1;
              tmp6 = main_minimaxTT_successors_allMoves_f_rev_go$l_Cons(n, acc);
              n = tmp5;
              m = arg$Cons$1$;
              acc = tmp6;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      inlinedVal8 = inlinedVal9(undefined, undefined, undefined, undefined, undefined, tmp3, undefined);
      inlinedVal6 = inlinedVal8(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined);
      f = fv_minimax[snd$accessorSymbol];
      g = fv_minimax[top$accessorSymbol];
      f1 = lambda$(f, g);
      inlinedVal7 = fv_minimax[map$tailrec$accessorSymbol](f1, inlinedVal6);
      if (fv_p instanceof fv_minimax.X.class) {
        let arg$Cons$0$, arg$Cons$1$;
        if (inlinedVal7 instanceof fv_minimax.Cons.class) {
          let inlinedVal10;
          arg$Cons$0$ = inlinedVal7.head;
          arg$Cons$1$ = inlinedVal7.tail;
          inlinedVal10 = fv_minimax[listFoldl$tailrec$accessorSymbol](lambda, arg$Cons$0$, arg$Cons$1$);
          fv_tmp1 = inlinedVal10;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        let arg$Cons$0$, arg$Cons$1$;
        if (inlinedVal7 instanceof fv_minimax.Cons.class) {
          let inlinedVal10;
          arg$Cons$0$ = inlinedVal7.head;
          arg$Cons$1$ = inlinedVal7.tail;
          inlinedVal10 = fv_minimax[listFoldl$tailrec$accessorSymbol](lambda1, arg$Cons$0$, arg$Cons$1$);
          fv_tmp1 = inlinedVal10;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
      tmp2 = fv_minimax[boardToIndex$accessorSymbol](fv_p, fv_b);
      fv_transTable[tmp2] = fv_tmp1;
      fv_tmp2 = globalThis.Object.freeze([
        fv_b,
        fv_tmp1
      ]);
      return fv_minimax.Rose(fv_tmp2, inlinedVal6)
    }
    {
      let fv_tmp;
      fv_tmp = globalThis.Object.freeze([
        b,
        inlinedVal4
      ]);
      return minimax2.Rose(fv_tmp, minimax2.Nil);
    }
  }
};
doKid$$doKid = function doKid$$doKid(minimax2, t, acc) {
  let element1$, element0$;
  if (runtime.Tuple.isArrayLike(acc) && acc.length === 2) {
    let minimax3, arg$Rose$1$, element1$1, element0$1, tmp, tmp1, tmp2;
    element0$ = runtime.Tuple.get(acc, 0);
    element1$ = runtime.Tuple.get(acc, 1);
    minimax3 = minimax2;
    if (t instanceof minimax3.Rose.class) {
      let f, inlinedVal;
      arg$Rose$1$ = t.kids;
      tmp = globalThis.Object.freeze([
        0,
        0
      ]);
      f = doKid$(minimax2);
      inlinedVal = minimax2[listFoldl$tailrec$accessorSymbol](f, tmp, arg$Rose$1$);
      if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
        let fv_tmp, scrut;
        element0$1 = runtime.Tuple.get(inlinedVal, 0);
        element1$1 = runtime.Tuple.get(inlinedVal, 1);
        tmp1 = element0$1 + 1;
        tmp2 = element1$1 + 1;
        fv_tmp = element0$ + tmp1;
        scrut = element1$ > tmp2;
        if (scrut === true) {
          return globalThis.Object.freeze([
            fv_tmp,
            element1$
          ])
        }
        return globalThis.Object.freeze([
          fv_tmp,
          tmp2
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_minimax_successors_allMoves_f_rev_go$l_Nil = function main_minimax_successors_allMoves_f_rev_go$l_Nil() {
  return (fv_acc, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_minimax) => {
    return fv_acc
  }
};
main_minimax_successors_allMoves_f_rev_go$l_Cons = function main_minimax_successors_allMoves_f_rev_go$l_Cons(Cons_head, Cons_tail) {
  return (fv_acc, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_minimax) => {
    let acc;
    acc = main_minimax_successors_map$l_Cons(Cons_head, fv_acc);
    return Cons_tail(acc, undefined, undefined, undefined, undefined, undefined, fv_minimax)
  }
};
main_minimax_successors_map$l_Nil = function main_minimax_successors_map$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_minimax_map$l_Nil()
  }
};
main_minimax_successors_map$l_Cons = function main_minimax_successors_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_minimax_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_minimax_successors_map$l_Cons$worker = function main_minimax_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_minimax_map$l_Cons(fv_tmp, inlinedVal)
};
main_minimax_map$l_Cons = function main_minimax_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_minimax_map$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_minimax_map$l_Cons$worker = function main_minimax_map$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return minimax1.Cons(fv_tmp, inlinedVal)
};
main_minimax_map$l_Nil = function main_minimax_map$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return minimax1.Nil
  }
};
main_minimaxTT_successors_allMoves_f_rev_go$l_Nil = function main_minimaxTT_successors_allMoves_f_rev_go$l_Nil() {
  return (fv_acc, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_minimax) => {
    return fv_acc
  }
};
main_minimaxTT_successors_allMoves_f_rev_go$l_Cons = function main_minimaxTT_successors_allMoves_f_rev_go$l_Cons(Cons_head, Cons_tail) {
  return (fv_acc, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_minimax) => {
    let acc;
    acc = main_minimaxTT_successors_map$l_Cons(Cons_head, fv_acc);
    return Cons_tail(acc, undefined, undefined, undefined, undefined, undefined, fv_minimax)
  }
};
main_minimaxTT_successors_map$l_Nil = function main_minimaxTT_successors_map$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_minimaxTT_map$l_Nil()
  }
};
main_minimaxTT_successors_map$l_Cons = function main_minimaxTT_successors_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_minimaxTT_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_minimaxTT_successors_map$l_Cons$worker = function main_minimaxTT_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_minimaxTT_map$l_Cons(fv_tmp, inlinedVal)
};
main_minimaxTT_map$l_Cons = function main_minimaxTT_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_minimaxTT_map$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_minimaxTT_map$l_Cons$worker = function main_minimaxTT_map$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return minimax1.Cons(fv_tmp, inlinedVal)
};
main_minimaxTT_map$l_Nil = function main_minimaxTT_map$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return minimax1.Nil
  }
};
lambda$3 = (undefined, function (unused) {
  return (i) => {
    return unused
  }
});
doKid$ = function doKid$(minimax2) {
  return (t, acc) => {
    return doKid$$doKid(minimax2, t, acc)
  }
};
lambda$2 = (undefined, function (minimax2) {
  return (i, acc) => {
    return lambda2(minimax2, i, acc)
  }
});
lambda2 = (undefined, function (minimax2, i, acc) {
  let element1$, element0$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(acc) && acc.length === 2) {
    let minimax3, inlinedVal, arg$Some$0$;
    element0$ = runtime.Tuple.get(acc, 0);
    element1$ = runtime.Tuple.get(acc, 1);
    minimax3 = minimax2;
    if (i instanceof minimax3.Some.class) {
      arg$Some$0$ = i.value;
      if (arg$Some$0$ instanceof minimax3.X.class) {
        inlinedVal = 1;
      } else if (arg$Some$0$ instanceof minimax3.O.class) {
        inlinedVal = 2;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else if (i instanceof minimax3.None.class) {
      inlinedVal = 0;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    tmp = inlinedVal * element1$;
    tmp1 = element0$ + tmp;
    tmp2 = element1$ * 3;
    return globalThis.Object.freeze([
      tmp1,
      tmp2
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda1 = (undefined, function (a, b) {
  let scrut;
  scrut = a < b;
  if (scrut === true) {
    return a
  }
  return b;
});
lambda = (undefined, function (a, b) {
  let scrut;
  scrut = a > b;
  if (scrut === true) {
    return a
  }
  return b;
});
lambda$1 = (undefined, function (minimax2) {
  return (i) => {
    return minimax2.None
  }
});
lambda$ = (undefined, function (f, g) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(g(x));
    return runtime.safeCall(f(tmp))
  }
});
go = function go(minimax2, n, f, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return minimax2.Nil
  }
  tmp = runtime.safeCall(f(i));
  tmp1 = i + 1;
  tmp2 = go(minimax2, n, f, tmp1);
  return minimax2.Cons(tmp, tmp2);
};
(class minimax {
  static {
    minimax1 = this
  }
  static get [map$tailrec$accessorSymbol]() { return minimax.#map$tailrec; }
  static get [listFoldl$tailrec$accessorSymbol]() { return minimax.#listFoldl$tailrec; }
  static get [listAll$tailrec$accessorSymbol]() { return minimax.#listAll$tailrec; }
  static get [listNth$accessorSymbol]() { return minimax.#listNth; }
  static get [isSome$accessorSymbol]() { return minimax.#isSome; }
  static get [snd$accessorSymbol]() { return minimax.#snd; }
  static get [playerEq$accessorSymbol]() { return minimax.#playerEq; }
  static get [moveTo$accessorSymbol]() { return minimax.#moveTo; }
  static get [top$accessorSymbol]() { return minimax.#top; }
  static get [boardToIndex$accessorSymbol]() { return minimax.#boardToIndex; }
  static {
    minimax.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        minimax.Cons.class = this
      }
      constructor(head, tail) {
        this.head = head;
        this.tail = tail;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Cons", ["head", "tail"]];
    });
    (class Nil {
      static {
        new this
      }
      constructor() {
        minimax.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    minimax.Some = function Some(value) {
      return globalThis.Object.freeze(new Some.class(value));
    };
    (class Some {
      static {
        minimax.Some.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Some", ["value"]];
    });
    (class None {
      static {
        new this
      }
      constructor() {
        minimax.None = this;
        Object.defineProperty(this, "class", {
          value: None
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"];
    });
    (class X {
      static {
        new this
      }
      constructor() {
        minimax.X = this;
        Object.defineProperty(this, "class", {
          value: X
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "X"];
    });
    (class O {
      static {
        new this
      }
      constructor() {
        minimax.O = this;
        Object.defineProperty(this, "class", {
          value: O
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "O"];
    });
    minimax.Rose = function Rose(x, kids) {
      return globalThis.Object.freeze(new Rose.class(x, kids));
    };
    (class Rose {
      static {
        minimax.Rose.class = this
      }
      constructor(x, kids) {
        this.x = x;
        this.kids = kids;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Rose", ["x", "kids"]];
    });
  }
  static #map$tailrec(f, l) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (l instanceof minimax.Nil.class) {
      return minimax.Nil
    } else if (l instanceof minimax.Cons.class) {
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = minimax.#map$tailrec(f, arg$Cons$1$);
      return minimax.Cons(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listFoldr$tailrec(f, init, l) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (l instanceof minimax.Nil.class) {
      return init
    } else if (l instanceof minimax.Cons.class) {
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      tmp = minimax.#listFoldr$tailrec(f, init, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listFoldl$tailrec(f, init, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof minimax.Nil.class) {
        return init
      } else if (l instanceof minimax.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, init));
        init = tmp;
        l = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listAll$tailrec(p, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof minimax.Nil.class) {
        return true
      } else if (l instanceof minimax.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(p(arg$Cons$0$));
        if (tmp === true) {
          l = arg$Cons$1$;
          continue loopLabel
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #hd(l) {
    if (l instanceof minimax.Cons.class) {
      return l.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #tl(l) {
    if (l instanceof minimax.Cons.class) {
      return l.tail
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listNth(l, n) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof minimax.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        scrut = n == 0;
        if (scrut === true) {
          return arg$Cons$0$
        }
        tmp = n - 1;
        l = arg$Cons$1$;
        n = tmp;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listTabulate(n, f) {
    return go(minimax, n, f, 0)
  }
  static #listFoldr(f) {
    return (init) => {
      return (l) => {
        return minimax.#listFoldr$tailrec(f, init, l)
      }
    }
  }
  static #isSome(o) {
    if (o instanceof minimax.Some.class) {
      return true
    } else if (o instanceof minimax.None.class) {
      return false
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #fillTabulate(arr, i, n, f) {
    loopLabel: while (true) {
      let scrut, tmp, tmp1;
      scrut = i == n;
      if (scrut === true) {
        return arr
      }
      tmp = runtime.safeCall(f(i));
      arr[i] = tmp;
      tmp1 = i + 1;
      i = tmp1;
      continue loopLabel;
    }
  }
  static #arrayTabulate(n, f) {
    let tmp;
    tmp = [];
    return minimax.#fillTabulate(tmp, 0, n, f)
  }
  static #snd(p) {
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      return runtime.Tuple.get(p, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #empty() {
    let lambda$here;
    lambda$here = lambda$1(minimax);
    return minimax.#listTabulate(9, lambda$here)
  }
  static #isOccupied(b, i) {
    let tmp;
    tmp = minimax.#listNth(b, i);
    return minimax.#isSome(tmp)
  }
  static #playerEq(p1, p2) {
    if (p1 instanceof minimax.X.class) {
      if (p2 instanceof minimax.X.class) {
        return true
      }
      return false;
    } else if (p1 instanceof minimax.O.class) {
      if (p2 instanceof minimax.O.class) {
        return true
      }
      return false;
    }
    return false;
  }
  static #putAt(x, xs, i) {
    let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4;
    scrut = i == 0;
    if (scrut === true) {
      tmp = minimax.#tl(xs);
      return minimax.Cons(x, tmp)
    }
    scrut1 = i > 0;
    if (scrut1 === true) {
      tmp1 = minimax.#hd(xs);
      tmp2 = minimax.#tl(xs);
      tmp3 = i - 1;
      tmp4 = minimax.#putAt(x, tmp2, tmp3);
      return minimax.Cons(tmp1, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #moveTo(b, p) {
    return (i) => {
      let scrut, tmp;
      scrut = minimax.#isOccupied(b, i);
      if (scrut === false) {
        tmp = minimax.Some(p);
        return minimax.#putAt(tmp, b, i)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #top(t) {
    if (t instanceof minimax.Rose.class) {
      return t.x
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #boardToIndex(p, b) {
    let start, scrut, tmp, element0$, lambda$here;
    if (p instanceof minimax.X.class) {
      tmp = 1;
    } else {
      tmp = 0;
    }
    start = globalThis.Object.freeze([
      tmp,
      3
    ]);
    lambda$here = lambda$2(minimax);
    scrut = minimax.#listFoldr(lambda$here)(start)(b);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      runtime.Tuple.get(scrut, 1);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #treeStats(tr) {
    let minimax2, arg$Rose$1$, element1$, element0$, tmp, tmp1, tmp2;
    minimax2 = minimax;
    if (tr instanceof minimax2.Rose.class) {
      let f, inlinedVal;
      arg$Rose$1$ = tr.kids;
      tmp = globalThis.Object.freeze([
        0,
        0
      ]);
      f = doKid$(minimax);
      inlinedVal = minimax.#listFoldl$tailrec(f, tmp, arg$Rose$1$);
      if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
        element0$ = runtime.Tuple.get(inlinedVal, 0);
        element1$ = runtime.Tuple.get(inlinedVal, 1);
        tmp1 = element0$ + 1;
        tmp2 = element1$ + 1;
        return globalThis.Object.freeze([
          tmp1,
          tmp2
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let transTable, tmp, tmp1, tmp2, tmp3, lambda$here, p, inlinedVal, p1, inlinedVal1;
    tmp = minimax.#empty();
    p = minimax.X;
    inlinedVal = main_minimax$minimax$worker(p, tmp);
    lambda$here = lambda$3(-2);
    transTable = minimax.#arrayTabulate(59049, lambda$here);
    tmp1 = minimax.#treeStats(inlinedVal);
    tmp2 = minimax.#empty();
    p1 = minimax.X;
    inlinedVal1 = main_minimaxTT$minimaxTT$worker(minimax, transTable, p1, tmp2);
    tmp3 = minimax.#treeStats(inlinedVal1);
    return globalThis.Object.freeze([
      tmp1,
      tmp3
    ])
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "minimax"];
});
export default minimax1;
