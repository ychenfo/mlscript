const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const append$accessorSymbol = globalThis.Symbol("append");
const filter$accessorSymbol = globalThis.Symbol("filter");
const foldl$accessorSymbol = globalThis.Symbol("foldl");
const foldr$accessorSymbol = globalThis.Symbol("foldr");
const deleteBy$accessorSymbol = globalThis.Symbol("deleteBy");
const sum$accessorSymbol = globalThis.Symbol("sum");
let cryptarithm21, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, main_testCryptarithm2_nofib_puzzle_transpose$transpose, main_testCryptarithm2_nofib_puzzle_transpose_lscomp$lscomp, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve$lambda$, main_testCryptarithm2_nofib_puzzle_solve$lambda, main_testCryptarithm2_nofib_puzzle_solve$solve, main_testCryptarithm2_nofib_puzzle_solve$lambda$1, main_testCryptarithm2_nofib_puzzle_solve$lambda1, main_testCryptarithm2_nofib_puzzle_solve$lambda$2, main_testCryptarithm2_nofib_puzzle_solve$lambda2, main_testCryptarithm2_nofib_puzzle_solve_guard_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_guard_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_guard_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$append, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_map$map, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_map$map, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_map$map, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda2, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$2, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$2, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$map, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda3, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$3, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$3, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_return__lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_return__lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select$select, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_map$map1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$2, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_map$map1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$3, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_map$map1, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$_lambda$lambda1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$map, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_solve_return__lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_return__lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_execStateT_map$map, main_testCryptarithm2_nofib_puzzle_execStateT_lambda$lambda, main_testCryptarithm2_nofib_puzzle_solve_return__lambda$$lambda$1, main_testCryptarithm2_nofib_puzzle_look$_look$look, main_testCryptarithm2_nofib_puzzle_look$$look$, main_testCryptarithm2_nofib_puzzle_map$map, main_testCryptarithm2_nofib_puzzle_concat_append$append, main_testCryptarithm2_nofib_puzzle_concat$concat, main_testCryptarithm2_nofib_puzzle_nubBy$nubBy, main_testCryptarithm2_nofib_puzzle_unlines_lambda$_lambda_append$append, main_testCryptarithm2_nofib_puzzle_unlines_lambda$_lambda$lambda, main_testCryptarithm2_nofib_puzzle_unlines_lambda$$lambda$, main_testCryptarithm2_nofib_puzzle_map$map1, main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_Cons, main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_Cons1, main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_dflt, main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_dflt1, main_testCryptarithm2_nofib_puzzle_transpose$scrut_tup2, main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$l_Nil, main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$l_Cons, main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$arg$Cons$0$_tup2, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil1, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons1, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Cons, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Nil, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_Some, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Nil, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Cons, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Nil, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Cons, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Cons, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Nil, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Nil, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup2, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Cons, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Nil, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Cons, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Nil, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Cons, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Nil, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT1, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil1, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons1, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup21, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil2, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons2, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Cons1, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Nil1, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil3, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons3, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT2, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons2, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil2, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT2, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Cons2, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup22, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Nil2, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_Some1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Nil1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Cons1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup21, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Nil1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Cons1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Cons1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Nil1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup21, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Nil1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup21, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Cons1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Nil1, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Cons1, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Nil1, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Cons1, main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Nil1, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2, main_testCryptarithm2_nofib_puzzle_execStateT_concat$ls_Cons, main_testCryptarithm2_nofib_puzzle_execStateT_concat_append$xs_Cons, main_testCryptarithm2_nofib_puzzle_execStateT_concat_append$xs_Nil, main_testCryptarithm2_nofib_puzzle_execStateT_concat$ls_Nil, main_testCryptarithm2_nofib_puzzle_execStateT_lambda$caseScrut_tup2, main_testCryptarithm2_nofib_puzzle$scrut_dflt, main_testCryptarithm2_nofib_puzzle$scrut_Cons, main_testCryptarithm2_nofib_puzzle_look$_look_fromSome$s_Some, main_testCryptarithm2_nofib_puzzle_look$_look_fromSome$s_dflt, main_testCryptarithm2_nofib_puzzle_sum_go$xs_Nil, main_testCryptarithm2_nofib_puzzle_sum_go$xs_Cons, main_testCryptarithm2_nofib_puzzle_append$xs_Cons, main_testCryptarithm2_nofib_puzzle_append$xs_Nil, main_testCryptarithm2_nofib_puzzle_listLen_l$ls_Cons, main_testCryptarithm2_nofib_puzzle_listLen_l$ls_Nil, main_testCryptarithm2_nofib_puzzle_unlines_concat$ls_Cons, main_testCryptarithm2_nofib_puzzle_unlines_concat$ls_Nil, main_testCryptarithm2_nofib_puzzle_unlines_concat_append$xs_Cons, main_testCryptarithm2_nofib_puzzle_unlines_concat_append$xs_Nil, main_testCryptarithm2_nofib_puzzle_unlines_map$xs_Nil, main_testCryptarithm2_nofib_puzzle_unlines_map$xs_Cons, main_testCryptarithm2_nofib_puzzle_unlines_map$xs_Cons$worker, main_testCryptarithm2_nofib_puzzle_look$_look_fromSome$s_dflt$worker, main_testCryptarithm2_nofib_puzzle$scrut_Cons$worker, main_testCryptarithm2_nofib_puzzle$scrut_dflt$worker, main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup2$worker, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons$worker, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None$worker, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons$worker, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons$worker1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup2$worker1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons$worker1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker1, main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None$worker1, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2$worker, main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons$worker2, main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$arg$Cons$0$_tup2$worker, main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$l_Nil$worker, main_testCryptarithm2_nofib_puzzle_transpose$scrut_tup2$worker;
main_testCryptarithm2_nofib_puzzle_transpose$transpose = function main_testCryptarithm2_nofib_puzzle_transpose$transpose(xss) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp;
    if (xss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xss.head;
      arg$Cons$1$ = xss.tail;
      if (arg$Cons$0$ instanceof NofibPrelude.Nil.class) {
        xss = arg$Cons$1$;
        continue loopLabel
      } else if (arg$Cons$0$ instanceof NofibPrelude.Cons.class) {
        let a, b, inlinedVal;
        arg$Cons$0$1 = arg$Cons$0$.head;
        arg$Cons$1$1 = arg$Cons$0$.tail;
        tmp = main_testCryptarithm2_nofib_puzzle_transpose_lscomp$lscomp(arg$Cons$1$);
        a = main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_dflt();
        b = main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_dflt1();
        inlinedVal = tmp(undefined, cryptarithm21, a, undefined, b, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
        return inlinedVal(undefined, undefined, undefined, undefined, arg$Cons$0$1, arg$Cons$1$1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testCryptarithm2_nofib_puzzle_transpose_lscomp$lscomp = function main_testCryptarithm2_nofib_puzzle_transpose_lscomp$lscomp(ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$l_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof NofibPrelude.Cons.class) {
        let Cons_head;
        arg$Cons$0$1 = arg$Cons$0$.head;
        arg$Cons$1$1 = arg$Cons$0$.tail;
        tmp = main_testCryptarithm2_nofib_puzzle_transpose_lscomp$lscomp(arg$Cons$1$);
        Cons_head = main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$arg$Cons$0$_tup2(arg$Cons$0$1, arg$Cons$1$1);
        return main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$l_Cons(Cons_head, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let inlinedVal, f1, inlinedVal1;
  inlinedVal = m(undefined, undefined, s);
  f1 = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f);
  inlinedVal1 = inlinedVal(undefined, undefined, undefined, undefined, undefined, f1, undefined);
  return inlinedVal1(undefined, undefined, undefined, undefined, undefined)
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve$solve = function main_testCryptarithm2_nofib_puzzle_solve$solve(tops, bots, carry) {
  let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, tmp;
  if (bots instanceof NofibPrelude.Cons.class) {
    let f, lambda$here;
    arg$Cons$0$ = bots.head;
    arg$Cons$1$ = bots.tail;
    if (tops instanceof NofibPrelude.Nil.class) {
      let StateT_run;
      StateT_run = main_testCryptarithm2_nofib_puzzle_solve_return__lambda$$lambda$(carry);
      tmp = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT2(StateT_run);
    } else if (tops instanceof NofibPrelude.Cons.class) {
      let inlinedVal, f1, StateT_run, lambda$here1, a, inlinedVal1, lambda$here2;
      arg$Cons$0$1 = tops.head;
      a = NofibPrelude.Nil;
      lambda$here2 = lambda$1(a);
      inlinedVal1 = cryptarithm21.StateT(lambda$here2);
      lambda$here1 = main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$$lambda$(cryptarithm21, main_testCryptarithm2_nofib_puzzle_solve_select$select);
      inlinedVal = cryptarithm21[foldr$accessorSymbol](lambda$here1, inlinedVal1, arg$Cons$0$1);
      f1 = main_testCryptarithm2_nofib_puzzle_solve_lambda$$lambda$(cryptarithm21, carry);
      StateT_run = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$3(cryptarithm21, inlinedVal, f1);
      tmp = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT2(StateT_run);
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    f = main_testCryptarithm2_nofib_puzzle_solve$lambda$1(cryptarithm21, tops, arg$Cons$0$, arg$Cons$1$);
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$2(cryptarithm21, tmp, f);
    return cryptarithm21.StateT(lambda$here)
  } else if (bots instanceof NofibPrelude.Nil.class) {
    if (tops instanceof NofibPrelude.Nil.class) {
      scrut = carry === 0;
      if (scrut === true) {
        let a, lambda$here;
        a = cryptarithm21.Unit;
        lambda$here = main_testCryptarithm2_nofib_puzzle_solve_return__lambda$$lambda$1(a);
        return cryptarithm21.StateT(lambda$here)
      }
      return cryptarithm21.StateT(lambda1);
    }
    return cryptarithm21.StateT(lambda1);
  }
  return cryptarithm21.StateT(lambda1);
};
main_testCryptarithm2_nofib_puzzle_solve$lambda = function main_testCryptarithm2_nofib_puzzle_solve$lambda(cryptarithm22, tops, botss, topN, _s) {
  let inlinedVal, inlinedVal1, tmp, arg$Cons$1$;
  if (tops instanceof NofibPrelude.Nil.class) {
    inlinedVal = NofibPrelude.Nil;
  } else if (tops instanceof NofibPrelude.Cons.class) {
    arg$Cons$1$ = tops.tail;
    inlinedVal = arg$Cons$1$;
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  tmp = topN / 10;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp));
  return main_testCryptarithm2_nofib_puzzle_solve$solve(inlinedVal, botss, inlinedVal1)
};
main_testCryptarithm2_nofib_puzzle_solve$lambda2 = function main_testCryptarithm2_nofib_puzzle_solve$lambda(cryptarithm22, tops, botss, topN, botN) {
  let tmp, inlinedVal, inlinedVal1, f, StateT_run, tmp1, inlinedVal2, tmp2;
  tmp2 = topN / 10;
  inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp2));
  tmp1 = 10 * inlinedVal2;
  inlinedVal = topN - tmp1;
  tmp = inlinedVal === botN;
  if (tmp === true) {
    let StateT_run1;
    StateT_run1 = main_testCryptarithm2_nofib_puzzle_solve_guard_lambda$$lambda$(cryptarithm21);
    inlinedVal1 = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT(StateT_run1);
  } else {
    inlinedVal1 = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT(main_testCryptarithm2_nofib_puzzle_solve_guard_lambda$lambda);
  }
  f = main_testCryptarithm2_nofib_puzzle_solve$lambda$(cryptarithm22, tops, botss, topN);
  StateT_run = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$(cryptarithm21, inlinedVal1, f);
  return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run)
};
main_testCryptarithm2_nofib_puzzle_solve$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve$lambda(cryptarithm22, tops, bot, botss, topN) {
  let m, f, StateT_run, m1, f1, StateT_run1;
  m1 = cryptarithm21.get;
  f1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$$lambda$(cryptarithm21, bot);
  StateT_run1 = main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$$lambda$(cryptarithm21, m1, f1);
  m = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT1(StateT_run1);
  f = main_testCryptarithm2_nofib_puzzle_solve$lambda$2(cryptarithm22, tops, botss, topN);
  StateT_run = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$1(cryptarithm21, m, f);
  return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1(StateT_run)
};
main_testCryptarithm2_nofib_puzzle_solve$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve$lambda$(cryptarithm22, tops, bot, botss) {
  return (topN) => {
    return main_testCryptarithm2_nofib_puzzle_solve$lambda1(cryptarithm22, tops, bot, botss, topN)
  }
};
main_testCryptarithm2_nofib_puzzle_solve$lambda$2 = function main_testCryptarithm2_nofib_puzzle_solve$lambda$(cryptarithm22, tops, botss, topN) {
  return (botN) => {
    return main_testCryptarithm2_nofib_puzzle_solve$lambda2(cryptarithm22, tops, botss, topN, botN)
  }
};
main_testCryptarithm2_nofib_puzzle_solve$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve$lambda$(cryptarithm22, tops, botss, topN) {
  return (_s) => {
    return main_testCryptarithm2_nofib_puzzle_solve$lambda(cryptarithm22, tops, botss, topN, _s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_guard_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_guard_lambda$_lambda$lambda(cryptarithm22, s) {
  let tup2_0, Cons_head, Cons_tail;
  tup2_0 = cryptarithm22.Unit;
  Cons_head = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2(tup2_0, s);
  Cons_tail = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil();
  return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons(Cons_head, Cons_tail)
};
main_testCryptarithm2_nofib_puzzle_solve_guard_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_guard_lambda$$lambda$(cryptarithm22) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_guard_lambda$_lambda$lambda(cryptarithm22, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return caseScrut(undefined, undefined, undefined, undefined, undefined, f, cryptarithm22)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_guard_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_guard_lambda$lambda(s) {
  return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil()
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let inlinedVal, f1, inlinedVal1;
  inlinedVal = m(undefined, undefined, s);
  f1 = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$1(cryptarithm22, f);
  inlinedVal1 = inlinedVal(undefined, undefined, undefined, undefined, undefined, f1, undefined);
  return inlinedVal1(undefined, undefined, undefined, undefined, undefined)
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda1(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return caseScrut(undefined, undefined, undefined, undefined, undefined, f, cryptarithm22)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$append = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$append(arg$Cons$1$, ys);
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$lambda(cryptarithm22, c, st) {
  let k, t, inlinedVal, arg$Digits$1$;
  if (st instanceof cryptarithm22.Digits.class) {
    arg$Digits$1$ = st.c;
    k = c;
    t = arg$Digits$1$;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
        if (t instanceof NofibPrelude.Nil.class) {
          inlinedVal = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None();
          break inlinedLbl
        } else if (t instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = t.head;
          arg$Cons$1$ = t.tail;
          if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
            element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
            scrut = k === element0$;
            if (scrut === true) {
              inlinedVal = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_Some(element1$);
              break inlinedLbl
            }
            t = arg$Cons$1$;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal(undefined, undefined, cryptarithm22, c)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$$lambda$(cryptarithm22, c) {
  return (st) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$lambda(cryptarithm22, c, st)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_map$map = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_map$map(f, arg$Cons$1$);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run(s));
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f);
    tmp = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_map$map(lambda$here, inlinedVal);
    return tmp(undefined, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let inlinedVal, f1, inlinedVal1;
  inlinedVal = m(undefined, undefined, s);
  f1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f);
  inlinedVal1 = inlinedVal(undefined, undefined, undefined, undefined, undefined, f1, undefined);
  return inlinedVal1(undefined, undefined, undefined, undefined, undefined)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda$lambda(cryptarithm22, c, st) {
  let tmp, lambda$here, m, f, StateT_run, StateT_run1, arg$Digits$0$;
  if (st instanceof cryptarithm22.Digits.class) {
    arg$Digits$0$ = st.i;
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$1(cryptarithm22, arg$Digits$0$);
    tmp = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_map$map(lambda$here, arg$Digits$0$);
    StateT_run1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$$lambda$(cryptarithm21, tmp);
    m = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT(StateT_run1);
    f = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$(cryptarithm22, c, st);
    StateT_run = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$$lambda$(cryptarithm21, m, f);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$$lambda$(cryptarithm22, c) {
  return (st) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda$lambda(cryptarithm22, c, st)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let inlinedVal, f1, inlinedVal1;
  inlinedVal = m(undefined, undefined, s);
  f1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f);
  inlinedVal1 = inlinedVal(undefined, undefined, undefined, undefined, undefined, f1, undefined);
  return inlinedVal1(undefined, undefined, undefined, undefined, undefined)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$(cryptarithm22, c, st) {
  return (iis) => {
    return iis(undefined, undefined, undefined, undefined, undefined, c, undefined, cryptarithm22, st, undefined, undefined, undefined, undefined)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, i) {
  return (_p) => {
    let StateT_run;
    StateT_run = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$$lambda$(i);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return caseScrut(undefined, undefined, undefined, undefined, undefined, f, cryptarithm22)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$_lambda$lambda(a, s) {
  let Cons_head, Cons_tail;
  Cons_head = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup21(a, s);
  Cons_tail = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil();
  return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$$lambda$(a) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$_lambda$lambda(a, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$_lambda$lambda(cryptarithm22, s, x) {
  let tup2_0, Cons_head, Cons_tail;
  tup2_0 = cryptarithm22.Unit;
  Cons_head = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2(tup2_0, s);
  Cons_tail = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil();
  return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons(Cons_head, Cons_tail)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$$lambda$(cryptarithm22, s) {
  return (x) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$_lambda$lambda(cryptarithm22, s, x)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return caseScrut(undefined, undefined, undefined, undefined, undefined, f, cryptarithm22)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda$lambda(cryptarithm22, ls, s) {
  let f, inlinedVal;
  f = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$$lambda$(s);
  inlinedVal = ls(undefined, undefined, undefined, undefined, undefined, f, undefined);
  return inlinedVal(undefined, undefined, undefined, undefined, undefined)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$$lambda$(cryptarithm22, ls) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda$lambda(cryptarithm22, ls, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$_lambda$lambda(s, x) {
  let Cons_head, Cons_tail;
  Cons_head = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2(x, s);
  Cons_tail = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Nil();
  return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$$lambda$(s) {
  return (x) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$_lambda$lambda(s, x)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_map$map = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_map$map(f, arg$Cons$1$);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$(cryptarithm22, xs) {
  return (x) => {
    let inlinedVal;
    inlinedVal = cryptarithm21[deleteBy$accessorSymbol](lambda, x, xs);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup2(x, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = runtime.safeCall(f(element0$));
    return tmp(undefined, undefined, element1$)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_map$map = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_map$map(f, arg$Cons$1$);
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run(s));
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f);
    tmp = main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_map$map(lambda$here, inlinedVal);
    return tmp(undefined, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = runtime.safeCall(f(element0$));
    return tmp(undefined, undefined, element1$)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$_lambda$lambda(a, s) {
  let Cons_head, Cons_tail;
  Cons_head = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup21(a, s);
  Cons_tail = main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Nil();
  return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$$lambda$(a) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$_lambda$lambda(a, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda2 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let inlinedVal, f1, inlinedVal1;
  inlinedVal = m(undefined, undefined, s);
  f1 = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$2(cryptarithm22, f);
  inlinedVal1 = inlinedVal(undefined, undefined, undefined, undefined, undefined, f1, undefined);
  return inlinedVal1(undefined, undefined, undefined, undefined, undefined)
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$2 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda2(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$2 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return caseScrut(undefined, undefined, undefined, undefined, undefined, f, cryptarithm22)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$map = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$map(f, arg$Cons$1$);
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons3(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil3()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda3 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run(s));
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$3(cryptarithm22, f);
    tmp = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$map(lambda$here, inlinedVal);
    return tmp(undefined, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$3 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda$lambda3(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda$lambda(cryptarithm22, carry, topNS) {
  let tmp, tmp1, StateT_run;
  tmp = cryptarithm22[sum$accessorSymbol](topNS);
  tmp1 = tmp + carry;
  StateT_run = main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_return__lambda$$lambda$(tmp1);
  return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT2(StateT_run)
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_lambda$$lambda$(cryptarithm22, carry) {
  return (topNS) => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda$lambda(cryptarithm22, carry, topNS)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = runtime.safeCall(f(element0$));
    return tmp(undefined, undefined, element1$)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$3 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_return__lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_return__lambda$_lambda$lambda(a, s) {
  let Cons_head, Cons_tail;
  Cons_head = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup22(a, s);
  Cons_tail = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Nil2();
  return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Cons2(Cons_head, Cons_tail)
};
main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_return__lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_return__lambda$$lambda$(a) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_lambda$_lambda_return__lambda$_lambda$lambda(a, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$lambda(cryptarithm22, c, st) {
  let k, t, inlinedVal, arg$Digits$1$;
  if (st instanceof cryptarithm22.Digits.class) {
    arg$Digits$1$ = st.c;
    k = c;
    t = arg$Digits$1$;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
        if (t instanceof NofibPrelude.Nil.class) {
          inlinedVal = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None1();
          break inlinedLbl
        } else if (t instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = t.head;
          arg$Cons$1$ = t.tail;
          if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
            element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
            scrut = k === element0$;
            if (scrut === true) {
              inlinedVal = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_Some1(element1$);
              break inlinedLbl
            }
            t = arg$Cons$1$;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal(undefined, undefined, cryptarithm22, c)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$$lambda$(cryptarithm22, c) {
  return (st) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$lambda1(cryptarithm22, c, st)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select$select = function main_testCryptarithm2_nofib_puzzle_solve_select$select(c) {
  let m, f, lambda$here;
  m = cryptarithm21.get;
  f = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$$lambda$1(cryptarithm21, c);
  lambda$here = main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$$lambda$1(cryptarithm21, m, f);
  return cryptarithm21.StateT(lambda$here)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_map$map1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_map$map1(f, arg$Cons$1$);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Cons1(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Nil1()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run(s));
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$$lambda$1(cryptarithm22, f);
    tmp = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_map$map1(lambda$here, inlinedVal);
    return tmp(undefined, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda$lambda1(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let inlinedVal, f1, inlinedVal1;
  inlinedVal = m(undefined, undefined, s);
  f1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$1(cryptarithm22, f);
  inlinedVal1 = inlinedVal(undefined, undefined, undefined, undefined, undefined, f1, undefined);
  return inlinedVal1(undefined, undefined, undefined, undefined, undefined)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda$lambda1(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda$lambda(cryptarithm22, c, st) {
  let tmp, lambda$here, m, f, StateT_run, StateT_run1, arg$Digits$0$;
  if (st instanceof cryptarithm22.Digits.class) {
    arg$Digits$0$ = st.i;
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$3(cryptarithm22, arg$Digits$0$);
    tmp = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_map$map1(lambda$here, arg$Digits$0$);
    StateT_run1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$$lambda$1(cryptarithm21, tmp);
    m = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT1(StateT_run1);
    f = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$2(cryptarithm22, c, st);
    StateT_run = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$$lambda$1(cryptarithm21, m, f);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1(StateT_run)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$$lambda$(cryptarithm22, c) {
  return (st) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda$lambda1(cryptarithm22, c, st)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let inlinedVal, f1, inlinedVal1;
  inlinedVal = m(undefined, undefined, s);
  f1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$1(cryptarithm22, f);
  inlinedVal1 = inlinedVal(undefined, undefined, undefined, undefined, undefined, f1, undefined);
  return inlinedVal1(undefined, undefined, undefined, undefined, undefined)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda$lambda1(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$2 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$(cryptarithm22, c, st) {
  return (iis) => {
    return iis(undefined, undefined, undefined, undefined, undefined, c, undefined, cryptarithm22, st, undefined, undefined, undefined, undefined)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, i) {
  return (_p) => {
    let StateT_run;
    StateT_run = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$$lambda$1(i);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1(StateT_run)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return caseScrut(undefined, undefined, undefined, undefined, undefined, f, cryptarithm22)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$_lambda$lambda(a, s) {
  let Cons_head, Cons_tail;
  Cons_head = main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2(a, s);
  Cons_tail = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil1();
  return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons1(Cons_head, Cons_tail)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$$lambda$(a) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$_lambda$lambda1(a, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$_lambda$lambda(cryptarithm22, s, x) {
  let tup2_0, Cons_head, Cons_tail;
  tup2_0 = cryptarithm22.Unit;
  Cons_head = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup21(tup2_0, s);
  Cons_tail = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil1();
  return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons1(Cons_head, Cons_tail)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$$lambda$(cryptarithm22, s) {
  return (x) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$_lambda$lambda1(cryptarithm22, s, x)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return caseScrut(undefined, undefined, undefined, undefined, undefined, f, cryptarithm22)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda$lambda(cryptarithm22, ls, s) {
  let f, inlinedVal;
  f = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$$lambda$1(s);
  inlinedVal = ls(undefined, undefined, undefined, undefined, undefined, f, undefined);
  return inlinedVal(undefined, undefined, undefined, undefined, undefined)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$$lambda$(cryptarithm22, ls) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda$lambda1(cryptarithm22, ls, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$_lambda$lambda(s, x) {
  let Cons_head, Cons_tail;
  Cons_head = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup21(x, s);
  Cons_tail = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Nil1();
  return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Cons1(Cons_head, Cons_tail)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$$lambda$(s) {
  return (x) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_lambda$_lambda$lambda1(s, x)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_map$map1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_map$map1(f, arg$Cons$1$);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons1(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Nil1()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$3 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$$lambda$(cryptarithm22, xs) {
  return (x) => {
    let inlinedVal;
    inlinedVal = cryptarithm21[deleteBy$accessorSymbol](lambda, x, xs);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup21(x, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = runtime.safeCall(f(element0$));
    return tmp(undefined, undefined, element1$)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda$lambda1(cryptarithm22, f, caseScrut)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_map$map1 = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_map$map1(f, arg$Cons$1$);
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Cons1(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Nil1()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run(s));
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$$lambda$1(cryptarithm22, f);
    tmp = main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_map$map1(lambda$here, inlinedVal);
    return tmp(undefined, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda$lambda1(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = runtime.safeCall(f(element0$));
    return tmp(undefined, undefined, element1$)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda$lambda1(cryptarithm22, f, caseScrut)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$_lambda$lambda1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$_lambda$lambda(a, s) {
  let Cons_head, Cons_tail;
  Cons_head = main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2(a, s);
  Cons_tail = main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Nil1();
  return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Cons1(Cons_head, Cons_tail)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$$lambda$(a) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$_lambda$lambda1(a, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$map = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$map(f, arg$Cons$1$);
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let tmp, lambda$here, inlinedVal;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run(s));
    lambda$here = main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f);
    tmp = main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$map(lambda$here, inlinedVal);
    return tmp(undefined, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, r, x) {
  let f, StateT_run;
  f = main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, x);
  StateT_run = main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$$lambda$(cryptarithm21, r, f);
  return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run)
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$$lambda$(cryptarithm22, r) {
  return (x) => {
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, r, x)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda$lambda(cryptarithm22, f, a, r) {
  let tmp, f1, lambda$here;
  tmp = runtime.safeCall(f(a));
  f1 = main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$$lambda$(cryptarithm22, r);
  lambda$here = main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$$lambda$(cryptarithm21, tmp, f1);
  return cryptarithm21.StateT(lambda$here)
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$$lambda$(cryptarithm22, f) {
  return (a, r) => {
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda$lambda(cryptarithm22, f, a, r)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, x, xs) {
  let tmp, StateT_run;
  tmp = NofibPrelude.Cons(x, xs);
  StateT_run = main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$$lambda$(tmp);
  return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run)
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$$lambda$(cryptarithm22, x) {
  return (xs) => {
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, x, xs)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = runtime.safeCall(f(element0$));
    return tmp(undefined, undefined, element1$)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$lambda(cryptarithm22, f, caseScrut)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$_lambda$lambda(a, s) {
  let tmp, Cons_tail;
  tmp = globalThis.Object.freeze([
    a,
    s
  ]);
  Cons_tail = main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil();
  return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons(tmp, Cons_tail)
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$$lambda$(a) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_lambda$_lambda_return__lambda$_lambda$lambda(a, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s) {
  let inlinedVal, f1, inlinedVal1;
  if (m instanceof cryptarithm22.StateT.class) {
    inlinedVal = runtime.safeCall(m.run(s));
    f1 = main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f);
    inlinedVal1 = inlinedVal(undefined, undefined, undefined, undefined, undefined, f1, undefined);
    return inlinedVal1(undefined, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$$lambda$(cryptarithm22, m, f) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda$lambda(cryptarithm22, m, f, s)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_lambda$$lambda$(cryptarithm22, f) {
  return (caseScrut) => {
    return caseScrut(undefined, undefined, undefined, undefined, undefined, f, cryptarithm22)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_return__lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_solve_return__lambda$_lambda$lambda(a, s) {
  let Cons_head, Cons_tail;
  Cons_head = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup22(a, s);
  Cons_tail = main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil2();
  return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons2(Cons_head, Cons_tail)
};
main_testCryptarithm2_nofib_puzzle_solve_return__lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_solve_return__lambda$$lambda$(a) {
  return (s) => {
    return main_testCryptarithm2_nofib_puzzle_solve_return__lambda$_lambda$lambda(a, s)
  }
};
main_testCryptarithm2_nofib_puzzle_execStateT_map$map = function main_testCryptarithm2_nofib_puzzle_execStateT_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCryptarithm2_nofib_puzzle_execStateT_map$map(f, arg$Cons$1$);
    return main_testCryptarithm2_nofib_puzzle_execStateT_concat$ls_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCryptarithm2_nofib_puzzle_execStateT_concat$ls_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_execStateT_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_execStateT_lambda$lambda(caseScrut) {
  return caseScrut(undefined, undefined, undefined, undefined)
};
main_testCryptarithm2_nofib_puzzle_solve_return__lambda$$lambda$1 = function main_testCryptarithm2_nofib_puzzle_solve_return__lambda$$lambda$(a) {
  return (s) => {
    let tmp;
    tmp = main_testCryptarithm2_nofib_puzzle_execStateT_lambda$caseScrut_tup2(a, s);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
};
main_testCryptarithm2_nofib_puzzle_look$_look$look = function main_testCryptarithm2_nofib_puzzle_look$_look$look(cryptarithm22, env, c) {
  let k, t, inlinedVal;
  k = c;
  t = env;
  inlinedLbl: {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (t instanceof NofibPrelude.Nil.class) {
        inlinedVal = main_testCryptarithm2_nofib_puzzle_look$_look_fromSome$s_dflt();
        break inlinedLbl
      } else if (t instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = t.head;
        arg$Cons$1$ = t.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          scrut = k === element0$;
          if (scrut === true) {
            inlinedVal = main_testCryptarithm2_nofib_puzzle_look$_look_fromSome$s_Some(element1$);
            break inlinedLbl
          }
          t = arg$Cons$1$;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  return inlinedVal(undefined, undefined)
};
main_testCryptarithm2_nofib_puzzle_look$$look$ = function main_testCryptarithm2_nofib_puzzle_look$$look$(cryptarithm22, env) {
  return (c) => {
    return main_testCryptarithm2_nofib_puzzle_look$_look$look(cryptarithm22, env, c)
  }
};
main_testCryptarithm2_nofib_puzzle_map$map = function main_testCryptarithm2_nofib_puzzle_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCryptarithm2_nofib_puzzle_map$map(f, arg$Cons$1$);
    return main_testCryptarithm2_nofib_puzzle_sum_go$xs_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCryptarithm2_nofib_puzzle_sum_go$xs_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_concat_append$append = function main_testCryptarithm2_nofib_puzzle_concat_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testCryptarithm2_nofib_puzzle_concat_append$append(arg$Cons$1$, ys);
    return main_testCryptarithm2_nofib_puzzle_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_concat$concat = function main_testCryptarithm2_nofib_puzzle_concat$concat(ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return main_testCryptarithm2_nofib_puzzle_append$xs_Nil()
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    tmp = main_testCryptarithm2_nofib_puzzle_concat$concat(arg$Cons$1$);
    return main_testCryptarithm2_nofib_puzzle_concat_append$append(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_nubBy$nubBy = function main_testCryptarithm2_nofib_puzzle_nubBy$nubBy(eq, ls) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, lambda$here;
  if (ls instanceof NofibPrelude.Nil.class) {
    return main_testCryptarithm2_nofib_puzzle_listLen_l$ls_Nil()
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    lambda$here = lambda$(eq, arg$Cons$0$);
    tmp = cryptarithm21[filter$accessorSymbol](lambda$here, arg$Cons$1$);
    tmp1 = main_testCryptarithm2_nofib_puzzle_nubBy$nubBy(eq, tmp);
    return main_testCryptarithm2_nofib_puzzle_listLen_l$ls_Cons(arg$Cons$0$, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_unlines_lambda$_lambda_append$append = function main_testCryptarithm2_nofib_puzzle_unlines_lambda$_lambda_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_testCryptarithm2_nofib_puzzle_unlines_lambda$_lambda_append$append(arg$Cons$1$, ys);
    return main_testCryptarithm2_nofib_puzzle_unlines_concat_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_unlines_lambda$_lambda$lambda = function main_testCryptarithm2_nofib_puzzle_unlines_lambda$_lambda$lambda(cryptarithm22, x) {
  let tmp, Cons_tail;
  Cons_tail = main_testCryptarithm2_nofib_puzzle_unlines_concat_append$xs_Nil();
  tmp = main_testCryptarithm2_nofib_puzzle_unlines_concat_append$xs_Cons("\n", Cons_tail);
  return main_testCryptarithm2_nofib_puzzle_unlines_lambda$_lambda_append$append(x, tmp)
};
main_testCryptarithm2_nofib_puzzle_unlines_lambda$$lambda$ = function main_testCryptarithm2_nofib_puzzle_unlines_lambda$$lambda$(cryptarithm22) {
  return (x) => {
    return main_testCryptarithm2_nofib_puzzle_unlines_lambda$_lambda$lambda(cryptarithm22, x)
  }
};
main_testCryptarithm2_nofib_puzzle_map$map1 = function main_testCryptarithm2_nofib_puzzle_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCryptarithm2_nofib_puzzle_map$map1(f, arg$Cons$1$);
    return main_testCryptarithm2_nofib_puzzle_unlines_map$xs_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCryptarithm2_nofib_puzzle_unlines_map$xs_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_Cons = function main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_l$_) => {
    fv_tmp = NofibPrelude.Cons(Cons_head, fv_l$_);
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_tmp)
  }
};
main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_Cons1 = function main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_l$_) => {
    fv_tmp = NofibPrelude.Cons(Cons_head, fv_l$_);
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_tmp)
  }
};
main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_dflt = function main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_l$_) => {
    return fv_l$_
  }
};
main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_dflt1 = function main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_l$_) => {
    return fv_l$_
  }
};
main_testCryptarithm2_nofib_puzzle_transpose$scrut_tup2 = function main_testCryptarithm2_nofib_puzzle_transpose$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_tls, fv_hds, fv_x, fv_xs) => {
    return main_testCryptarithm2_nofib_puzzle_transpose$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_tls, fv_hds, fv_x, fv_xs)
  }
};
main_testCryptarithm2_nofib_puzzle_transpose$scrut_tup2$worker = function main_testCryptarithm2_nofib_puzzle_transpose$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_tls, fv_hds, fv_x, fv_xs) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.Cons(fv_x, tup2_0);
  tmp1 = NofibPrelude.Cons(fv_xs, tup2_1);
  tmp2 = main_testCryptarithm2_nofib_puzzle_transpose$transpose(tmp1);
  return NofibPrelude.Cons(tmp, tmp2)
};
main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$l_Nil = function main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$l_Nil() {
  return (fv_tmp, fv_cryptarithm2, fv_a, fv_tmp1, fv_b, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_t, fv_y, fv_x, fv_tmp2, fv_tmp3) => {
    return main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$l_Nil$worker(fv_tmp, fv_cryptarithm2, fv_a, fv_tmp1, fv_b, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_t, fv_y, fv_x, fv_tmp2, fv_tmp3)
  }
};
main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$l_Nil$worker = function main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$l_Nil$worker(fv_tmp, fv_cryptarithm2, fv_a, fv_tmp1, fv_b, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_t, fv_y, fv_x, fv_tmp2, fv_tmp3) {
  let l$_, inlinedVal, l$_1, inlinedVal1;
  l$_1 = NofibPrelude.Nil;
  inlinedVal1 = fv_a(undefined, undefined, undefined, undefined, undefined, l$_1);
  l$_ = NofibPrelude.Nil;
  inlinedVal = fv_b(undefined, undefined, undefined, undefined, undefined, l$_);
  return main_testCryptarithm2_nofib_puzzle_transpose$scrut_tup2(inlinedVal1, inlinedVal)
};
main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$l_Cons = function main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_cryptarithm2, fv_a, fv_tmp1, fv_b, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_t, fv_y, fv_x, fv_tmp2, fv_tmp3) => {
    return Cons_head(fv_element0$, fv_element1$, fv_t, Cons_tail, fv_y, fv_x, fv_tmp2, fv_a, fv_tmp3, fv_b, fv_cryptarithm2)
  }
};
main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$arg$Cons$0$_tup2 = function main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$arg$Cons$0$_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_t, fv_arg$Cons$1$, fv_y, fv_x, fv_tmp, fv_a, fv_tmp1, fv_b, fv_cryptarithm2) => {
    return main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$arg$Cons$0$_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_t, fv_arg$Cons$1$, fv_y, fv_x, fv_tmp, fv_a, fv_tmp1, fv_b, fv_cryptarithm2)
  }
};
main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$arg$Cons$0$_tup2$worker = function main_testCryptarithm2_nofib_puzzle_transpose_unzip_f$arg$Cons$0$_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_t, fv_arg$Cons$1$, fv_y, fv_x, fv_tmp, fv_a, fv_tmp1, fv_b, fv_cryptarithm2) {
  let a, b;
  a = main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_Cons1(tup2_0, fv_a);
  b = main_testCryptarithm2_nofib_puzzle_transpose_unzip_f_reverse_r$l_Cons(tup2_1, fv_b);
  return fv_arg$Cons$1$(undefined, fv_cryptarithm2, a, undefined, b, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Nil()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$append(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons$worker2(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons$worker2 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons(fv_tmp, inlinedVal)
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ss, fv_a, fv_tmp, fv_f, fv_cryptarithm2) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_ss, fv_a, fv_tmp, fv_f, fv_cryptarithm2)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2$worker = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_ss, fv_a, fv_tmp, fv_f, fv_cryptarithm2) {
  fv_tmp = runtime.safeCall(fv_f(tup2_0));
  if (fv_tmp instanceof fv_cryptarithm2.StateT.class) {
    return runtime.safeCall(fv_tmp.run(tup2_1))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Nil1()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Cons = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Cons1(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Nil = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_Some = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_Some(Some_x) {
  return (fv_arg$Some$0$, fv_r, fv_cryptarithm2, fv_c) => {
    let StateT_run;
    StateT_run = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$$lambda$(Some_x);
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None() {
  return (fv_arg$Some$0$, fv_r, fv_cryptarithm2, fv_c) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None$worker1(fv_arg$Some$0$, fv_r, fv_cryptarithm2, fv_c)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None$worker1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None$worker(fv_arg$Some$0$, fv_r, fv_cryptarithm2, fv_c) {
  let m, f, StateT_run;
  m = cryptarithm21.get;
  f = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$$lambda$(cryptarithm21, fv_c);
  StateT_run = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$$lambda$(cryptarithm21, m, f);
  return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Nil = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Nil()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Cons = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Nil()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons(fv_tmp, inlinedVal)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ss, fv_a, fv_tmp, fv_f, fv_cryptarithm2) => {
    fv_tmp = runtime.safeCall(fv_f(tup2_0));
    return fv_tmp(undefined, undefined, tup2_1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Nil = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Cons = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Cons = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Nil = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons(fv_tmp, inlinedVal)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ss, fv_a, fv_tmp, fv_f, fv_cryptarithm2) => {
    fv_tmp = runtime.safeCall(fv_f(tup2_0));
    return fv_tmp(undefined, undefined, tup2_1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons$worker1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Cons(fv_tmp, inlinedVal)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Nil = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Nil()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup2 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_iss, fv_i, fv_tmp, fv_c, fv_tmp1, fv_cryptarithm2, fv_st, fv_tmp2, fv_tmp3, fv_tmp4, fv_lambda$here) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup2$worker1(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_iss, fv_i, fv_tmp, fv_c, fv_tmp1, fv_cryptarithm2, fv_st, fv_tmp2, fv_tmp3, fv_tmp4, fv_lambda$here)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup2$worker1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_iss, fv_i, fv_tmp, fv_c, fv_tmp1, fv_cryptarithm2, fv_st, fv_tmp2, fv_tmp3, fv_tmp4, fv_lambda$here) {
  let m, f, StateT_run, StateT_run1, arg$Digits$1$;
  fv_tmp = globalThis.Object.freeze([
    fv_c,
    tup2_0
  ]);
  if (fv_st instanceof fv_cryptarithm2.Digits.class) {
    arg$Digits$1$ = fv_st.c;
    fv_tmp2 = NofibPrelude.Cons(fv_tmp, arg$Digits$1$);
    fv_tmp3 = fv_cryptarithm2.Digits(tup2_1, fv_tmp2);
    StateT_run1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$$lambda$(cryptarithm21, fv_tmp3);
    m = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT(StateT_run1);
    f = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$$lambda$(fv_cryptarithm2, tup2_0);
    StateT_run = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$$lambda$(cryptarithm21, m, f);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Cons = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Nil = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Cons = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Nil = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil1()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Cons = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons1(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Nil = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT1 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil1()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons$worker1 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons1(fv_tmp, inlinedVal)
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup21 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ss, fv_a, fv_tmp, fv_f, fv_cryptarithm2) => {
    fv_tmp = runtime.safeCall(fv_f(tup2_0));
    return fv_tmp(undefined, undefined, tup2_1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil2 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return NofibPrelude.Nil
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons2 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil3 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil2()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons3 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT2 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons2 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons$worker = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Cons2(fv_tmp, inlinedVal)
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil2 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat$ls_Nil2()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT2 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Cons2 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_map$xs_Cons2(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup22 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ss, fv_a, fv_tmp, fv_f, fv_cryptarithm2) => {
    fv_tmp = runtime.safeCall(fv_f(tup2_0));
    return fv_tmp(undefined, undefined, tup2_1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Nil2 = function main_testCryptarithm2_nofib_puzzle_solve_bind_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_Some1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_Some(Some_x) {
  return (fv_arg$Some$0$, fv_r, fv_cryptarithm2, fv_c) => {
    let StateT_run;
    StateT_run = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_return__lambda$$lambda$1(Some_x);
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1(StateT_run)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None() {
  return (fv_arg$Some$0$, fv_r, fv_cryptarithm2, fv_c) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None$worker(fv_arg$Some$0$, fv_r, fv_cryptarithm2, fv_c)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None$worker = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda$scrut_None$worker(fv_arg$Some$0$, fv_r, fv_cryptarithm2, fv_c) {
  let m, f, StateT_run;
  m = cryptarithm21.get;
  f = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$$lambda$1(cryptarithm21, fv_c);
  StateT_run = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$$lambda$1(cryptarithm21, m, f);
  return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1(StateT_run)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Nil1()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Nil1()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil1()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons1(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons1(fv_tmp, inlinedVal)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil1()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup21 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ss, fv_a, fv_tmp, fv_f, fv_cryptarithm2) => {
    fv_tmp = runtime.safeCall(fv_f(tup2_0));
    return fv_tmp(undefined, undefined, tup2_1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Cons1(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil1()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons1(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons1(fv_tmp, inlinedVal)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil1()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup21 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ss, fv_a, fv_tmp, fv_f, fv_cryptarithm2) => {
    fv_tmp = runtime.safeCall(fv_f(tup2_0));
    return fv_tmp(undefined, undefined, tup2_1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons$worker = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Cons1(fv_tmp, inlinedVal)
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lift_lambda$_lambda_concat$ls_Nil1()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup21 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_iss, fv_i, fv_tmp, fv_c, fv_tmp1, fv_cryptarithm2, fv_st, fv_tmp2, fv_tmp3, fv_tmp4, fv_lambda$here) => {
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_iss, fv_i, fv_tmp, fv_c, fv_tmp1, fv_cryptarithm2, fv_st, fv_tmp2, fv_tmp3, fv_tmp4, fv_lambda$here)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup2$worker = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda$iis_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_iss, fv_i, fv_tmp, fv_c, fv_tmp1, fv_cryptarithm2, fv_st, fv_tmp2, fv_tmp3, fv_tmp4, fv_lambda$here) {
  let m, f, StateT_run, StateT_run1, arg$Digits$1$;
  fv_tmp = globalThis.Object.freeze([
    fv_c,
    tup2_0
  ]);
  if (fv_st instanceof fv_cryptarithm2.Digits.class) {
    arg$Digits$1$ = fv_st.c;
    fv_tmp2 = NofibPrelude.Cons(fv_tmp, arg$Digits$1$);
    fv_tmp3 = fv_cryptarithm2.Digits(tup2_1, fv_tmp2);
    StateT_run1 = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_put_lambda$$lambda$1(cryptarithm21, fv_tmp3);
    m = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_runStateT$m_StateT1(StateT_run1);
    f = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(fv_cryptarithm2, tup2_0);
    StateT_run = main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_lambda$_lambda_bind_lambda$$lambda$1(cryptarithm21, m, f);
    return main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1(StateT_run)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Cons1(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_select_lambda$_lambda_permute_bind_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT1 = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Cons1 = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Nil1 = function main_testCryptarithm2_nofib_puzzle_solve_select_bind_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(inlinedVal, undefined, undefined, undefined, undefined, undefined)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return NofibPrelude.Nil
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda_runStateT$m_StateT(StateT_run) {
  return (fv_arg$StateT$0$, fv_run, fv_s) => {
    return runtime.safeCall(StateT_run(fv_s))
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Nil() {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys, undefined, undefined, undefined, undefined, undefined);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat$ls_Nil()
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_concat$ls_Cons(fv_tmp, inlinedVal)
};
main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2 = function main_testCryptarithm2_nofib_puzzle_solve_mapM_lambda$_lambda_bind_lambda$_lambda_lambda$_lambda$caseScrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_ss, fv_a, fv_tmp, fv_f, fv_cryptarithm2) => {
    fv_tmp = runtime.safeCall(fv_f(tup2_0));
    return fv_tmp(undefined, undefined, tup2_1)
  }
};
main_testCryptarithm2_nofib_puzzle_execStateT_concat$ls_Cons = function main_testCryptarithm2_nofib_puzzle_execStateT_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_execStateT_concat_append$xs_Cons = function main_testCryptarithm2_nofib_puzzle_execStateT_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return main_testCryptarithm2_nofib_puzzle$scrut_Cons(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_execStateT_concat_append$xs_Nil = function main_testCryptarithm2_nofib_puzzle_execStateT_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_execStateT_concat$ls_Nil = function main_testCryptarithm2_nofib_puzzle_execStateT_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return main_testCryptarithm2_nofib_puzzle$scrut_dflt()
  }
};
main_testCryptarithm2_nofib_puzzle_execStateT_lambda$caseScrut_tup2 = function main_testCryptarithm2_nofib_puzzle_execStateT_lambda$caseScrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_s, fv_a) => {
    let Cons_tail;
    Cons_tail = main_testCryptarithm2_nofib_puzzle_execStateT_concat_append$xs_Nil();
    return main_testCryptarithm2_nofib_puzzle_execStateT_concat_append$xs_Cons(tup2_1, Cons_tail)
  }
};
main_testCryptarithm2_nofib_puzzle$scrut_dflt = function main_testCryptarithm2_nofib_puzzle$scrut_dflt() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_a, fv_tmp, fv_answer, fv_env, fv_look, fv_expand, fv_tmp1, fv_top, fv_topVal, fv_botVal, fv_bot, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_scrut, fv_scrut1, fv_tmp6) => {
    return main_testCryptarithm2_nofib_puzzle$scrut_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_a, fv_tmp, fv_answer, fv_env, fv_look, fv_expand, fv_tmp1, fv_top, fv_topVal, fv_botVal, fv_bot, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_scrut, fv_scrut1, fv_tmp6)
  }
};
main_testCryptarithm2_nofib_puzzle$scrut_dflt$worker = function main_testCryptarithm2_nofib_puzzle$scrut_dflt$worker(fv_arg$Cons$0$, fv_arg$Cons$1$, fv_a, fv_tmp, fv_answer, fv_env, fv_look, fv_expand, fv_tmp1, fv_top, fv_topVal, fv_botVal, fv_bot, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_scrut, fv_scrut1, fv_tmp6) {
  throw globalThis.Object.freeze(new globalThis.Error("match error"))
};
main_testCryptarithm2_nofib_puzzle$scrut_Cons = function main_testCryptarithm2_nofib_puzzle$scrut_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_a, fv_tmp, fv_answer, fv_env, fv_look, fv_expand, fv_tmp1, fv_top, fv_topVal, fv_botVal, fv_bot, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_scrut, fv_scrut1, fv_tmp6) => {
    return main_testCryptarithm2_nofib_puzzle$scrut_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_a, fv_tmp, fv_answer, fv_env, fv_look, fv_expand, fv_tmp1, fv_top, fv_topVal, fv_botVal, fv_bot, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_scrut, fv_scrut1, fv_tmp6)
  }
};
main_testCryptarithm2_nofib_puzzle$scrut_Cons$worker = function main_testCryptarithm2_nofib_puzzle$scrut_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_a, fv_tmp, fv_answer, fv_env, fv_look, fv_expand, fv_tmp1, fv_top, fv_topVal, fv_botVal, fv_bot, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_scrut, fv_scrut1, fv_tmp6) {
  let lambda$here, lambda$here1, inlinedVal, inlinedVal1, look, inlinedVal2, lambda$here2, inlinedVal3, arg$Digits$1$;
  if (Cons_head instanceof cryptarithm21.Digits.class) {
    arg$Digits$1$ = Cons_head.c;
    fv_look = main_testCryptarithm2_nofib_puzzle_look$$look$(cryptarithm21, arg$Digits$1$);
    fv_expand = lambda$4(cryptarithm21, fv_look);
    lambda$here = lambda$3(fv_expand);
    fv_tmp1 = main_testCryptarithm2_nofib_puzzle_map$map(lambda$here, fv_top);
    inlinedVal3 = fv_tmp1(0, undefined, undefined, undefined, undefined, undefined);
    look = main_testCryptarithm2_nofib_puzzle_look$$look$(cryptarithm21, arg$Digits$1$);
    lambda$here2 = lambda$5(look);
    inlinedVal2 = cryptarithm21[foldl$accessorSymbol](lambda$here2, 0, fv_bot);
    fv_tmp2 = main_testCryptarithm2_nofib_puzzle_concat$concat(fv_top);
    inlinedVal = fv_tmp2(undefined, undefined, undefined, undefined, undefined, fv_bot);
    fv_tmp4 = main_testCryptarithm2_nofib_puzzle_nubBy$nubBy(lambda3, inlinedVal);
    inlinedVal1 = fv_tmp4(undefined, undefined, undefined, undefined, undefined, 0);
    fv_scrut = inlinedVal1 <= 10;
    if (fv_scrut === true) {
      fv_scrut1 = inlinedVal3 == inlinedVal2;
      if (fv_scrut1 === true) {
        let f, inlinedVal4;
        lambda$here1 = lambda$2(cryptarithm21);
        fv_tmp6 = main_testCryptarithm2_nofib_puzzle_map$map1(lambda$here1, arg$Digits$1$);
        f = main_testCryptarithm2_nofib_puzzle_unlines_lambda$$lambda$(cryptarithm21);
        inlinedVal4 = fv_tmp6(undefined, undefined, undefined, undefined, undefined, f, undefined);
        return inlinedVal4(undefined, undefined, undefined, undefined, undefined)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCryptarithm2_nofib_puzzle_look$_look_fromSome$s_Some = function main_testCryptarithm2_nofib_puzzle_look$_look_fromSome$s_Some(Some_x) {
  return (fv_arg$Some$0$, fv_x) => {
    return Some_x
  }
};
main_testCryptarithm2_nofib_puzzle_look$_look_fromSome$s_dflt = function main_testCryptarithm2_nofib_puzzle_look$_look_fromSome$s_dflt() {
  return (fv_arg$Some$0$, fv_x) => {
    return main_testCryptarithm2_nofib_puzzle_look$_look_fromSome$s_dflt$worker(fv_arg$Some$0$, fv_x)
  }
};
main_testCryptarithm2_nofib_puzzle_look$_look_fromSome$s_dflt$worker = function main_testCryptarithm2_nofib_puzzle_look$_look_fromSome$s_dflt$worker(fv_arg$Some$0$, fv_x) {
  throw globalThis.Object.freeze(new globalThis.Error("match error"))
};
main_testCryptarithm2_nofib_puzzle_sum_go$xs_Nil = function main_testCryptarithm2_nofib_puzzle_sum_go$xs_Nil() {
  return (fv_a, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t, fv_h, fv_tmp) => {
    return fv_a
  }
};
main_testCryptarithm2_nofib_puzzle_sum_go$xs_Cons = function main_testCryptarithm2_nofib_puzzle_sum_go$xs_Cons(Cons_head, Cons_tail) {
  return (fv_a, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t, fv_h, fv_tmp) => {
    fv_tmp = fv_a + Cons_head;
    return Cons_tail(fv_tmp, undefined, undefined, undefined, undefined, undefined)
  }
};
main_testCryptarithm2_nofib_puzzle_append$xs_Cons = function main_testCryptarithm2_nofib_puzzle_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_append$xs_Nil = function main_testCryptarithm2_nofib_puzzle_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_listLen_l$ls_Cons = function main_testCryptarithm2_nofib_puzzle_listLen_l$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t, fv_h, fv_tmp, fv_a) => {
    fv_tmp = fv_a + 1;
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_tmp)
  }
};
main_testCryptarithm2_nofib_puzzle_listLen_l$ls_Nil = function main_testCryptarithm2_nofib_puzzle_listLen_l$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t, fv_h, fv_tmp, fv_a) => {
    return fv_a
  }
};
main_testCryptarithm2_nofib_puzzle_unlines_concat$ls_Cons = function main_testCryptarithm2_nofib_puzzle_unlines_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return Cons_head(undefined, undefined, undefined, undefined, undefined, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_unlines_concat$ls_Nil = function main_testCryptarithm2_nofib_puzzle_unlines_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return NofibPrelude.Nil
  }
};
main_testCryptarithm2_nofib_puzzle_unlines_concat_append$xs_Cons = function main_testCryptarithm2_nofib_puzzle_unlines_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_testCryptarithm2_nofib_puzzle_unlines_concat_append$xs_Nil = function main_testCryptarithm2_nofib_puzzle_unlines_concat_append$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_ys) => {
    return fv_ys
  }
};
main_testCryptarithm2_nofib_puzzle_unlines_map$xs_Nil = function main_testCryptarithm2_nofib_puzzle_unlines_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_unlines_concat$ls_Nil()
  }
};
main_testCryptarithm2_nofib_puzzle_unlines_map$xs_Cons = function main_testCryptarithm2_nofib_puzzle_unlines_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCryptarithm2_nofib_puzzle_unlines_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCryptarithm2_nofib_puzzle_unlines_map$xs_Cons$worker = function main_testCryptarithm2_nofib_puzzle_unlines_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testCryptarithm2_nofib_puzzle_unlines_concat$ls_Cons(fv_tmp, inlinedVal)
};
lambda$5 = (undefined, function (look) {
  return (a, b) => {
    return lambda2(look, a, b)
  }
});
lambda2 = (undefined, function (look, a, b) {
  let tmp, tmp1;
  tmp = a * 10;
  tmp1 = runtime.safeCall(look(b));
  return tmp + tmp1
});
lambda$4 = (undefined, function (cryptarithm22, look) {
  return (ls) => {
    let lambda$here;
    lambda$here = lambda$5(look);
    return cryptarithm22[foldl$accessorSymbol](lambda$here, 0, ls)
  }
});
lambda$3 = (undefined, function (expand) {
  return (xs) => {
    return runtime.safeCall(expand(xs))
  }
});
lambda$2 = (undefined, function (cryptarithm22) {
  return (caseScrut) => {
    return lambda4(cryptarithm22, caseScrut)
  }
});
lambda3 = (undefined, function (x, y) {
  return x === y
});
lambda4 = (undefined, function (cryptarithm22, caseScrut) {
  let element1$, element0$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    let inlinedVal;
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = NofibPrelude.nofibStringToList(" => ");
    inlinedVal = element1$ + "";
    tmp1 = NofibPrelude.nofibStringToList(inlinedVal);
    tmp2 = cryptarithm22[append$accessorSymbol](tmp, tmp1);
    return NofibPrelude.Cons(element0$, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda1 = (undefined, function (_p) {
  return NofibPrelude.Nil
});
lambda$1 = (undefined, function (a) {
  return (s) => {
    let tmp;
    tmp = globalThis.Object.freeze([
      a,
      s
    ]);
    return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
  }
});
lambda = (undefined, function (x, y) {
  return x === y
});
lambda$ = (undefined, function (eq, h) {
  return (y) => {
    let tmp;
    tmp = runtime.safeCall(eq(h, y));
    return ! tmp
  }
});
lambda5 = (undefined, function (s) {
  let tmp;
  tmp = globalThis.Object.freeze([
    s,
    s
  ]);
  return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
});
(class cryptarithm2 {
  static {
    cryptarithm21 = this
  }
  static get [append$accessorSymbol]() { return cryptarithm2.#append; }
  static get [filter$accessorSymbol]() { return cryptarithm2.#filter; }
  static get [foldl$accessorSymbol]() { return cryptarithm2.#foldl; }
  static get [foldr$accessorSymbol]() { return cryptarithm2.#foldr; }
  static get [deleteBy$accessorSymbol]() { return cryptarithm2.#deleteBy; }
  static get [sum$accessorSymbol]() { return cryptarithm2.#sum; }
  static {
    let tmp;
    (class Unit {
      static {
        new this
      }
      constructor() {
        cryptarithm2.Unit = this;
        Object.defineProperty(this, "class", {
          value: Unit
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Unit"];
    });
    cryptarithm2.StateT = function StateT(run) {
      return globalThis.Object.freeze(new StateT.class(run));
    };
    (class StateT {
      static {
        cryptarithm2.StateT.class = this
      }
      constructor(run) {
        this.run = run;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "StateT", ["run"]];
    });
    tmp = cryptarithm2.StateT(lambda5);
    cryptarithm2.get = tmp;
    cryptarithm2.Digits = function Digits(i, c) {
      return globalThis.Object.freeze(new Digits.class(i, c));
    };
    (class Digits {
      static {
        cryptarithm2.Digits.class = this
      }
      constructor(i, c) {
        this.i = i;
        this.c = c;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Digits", ["i", "c"]];
    });
  }
  static #reverse(l) {
    let l$_, l1, inlinedVal;
    l$_ = NofibPrelude.Nil;
    l1 = l;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp;
        if (l1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = l1.head;
          arg$Cons$1$ = l1.tail;
          tmp = NofibPrelude.Cons(arg$Cons$0$, l$_);
          l$_ = tmp;
          l1 = arg$Cons$1$;
          continue loopLabel
        }
        inlinedVal = l$_;
        break inlinedLbl;
      }
    }
    return inlinedVal
  }
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = cryptarithm2.#map(f, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #enumFromTo(a, b) {
    let scrut, tmp, tmp1;
    scrut = a <= b;
    if (scrut === true) {
      tmp = a + 1;
      tmp1 = cryptarithm2.#enumFromTo(tmp, b);
      return NofibPrelude.Cons(a, tmp1)
    }
    return NofibPrelude.Nil;
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = cryptarithm2.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
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
          tmp = cryptarithm2.#filter(f, arg$Cons$1$);
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
  static #foldr(f, z, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return z
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = cryptarithm2.#foldr(f, z, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
      tmp = cryptarithm2.#deleteBy(eq, x, arg$Cons$1$);
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
  static main() {
    let args, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, inlinedVal, solution, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, inlinedVal1, inlinedVal2;
    tmp = NofibPrelude.nofibStringToList("THIRTY");
    tmp1 = NofibPrelude.nofibStringToList("TWELVE");
    tmp2 = NofibPrelude.nofibStringToList("TWELVE");
    tmp3 = NofibPrelude.nofibStringToList("TWELVE");
    tmp4 = NofibPrelude.nofibStringToList("TWELVE");
    tmp5 = NofibPrelude.nofibStringToList("TWELVE");
    if (false === true) {
      tmp6 = NofibPrelude.nofibStringToList("1");
    } else {
      tmp6 = NofibPrelude.Nil;
    }
    tmp7 = cryptarithm21.#append(tmp5, tmp6);
    tmp8 = NofibPrelude.Cons(tmp7, NofibPrelude.Nil);
    tmp9 = NofibPrelude.Cons(tmp4, tmp8);
    tmp10 = NofibPrelude.Cons(tmp3, tmp9);
    tmp11 = NofibPrelude.Cons(tmp2, tmp10);
    tmp12 = NofibPrelude.Cons(tmp1, tmp11);
    args = NofibPrelude.Cons(tmp, tmp12);
    tmp13 = NofibPrelude.nofibStringToList("NINETY");
    tmp14 = cryptarithm21.#map(cryptarithm21.#reverse, args);
    tmp15 = main_testCryptarithm2_nofib_puzzle_transpose$transpose(tmp14);
    tmp16 = cryptarithm21.#reverse(tmp13);
    solution = main_testCryptarithm2_nofib_puzzle_solve$solve(tmp15, tmp16, 0);
    tmp17 = cryptarithm21.#enumFromTo(0, 9);
    tmp18 = cryptarithm21.Digits(tmp17, NofibPrelude.Nil);
    if (solution instanceof cryptarithm21.StateT.class) {
      inlinedVal1 = runtime.safeCall(solution.run(tmp18));
      tmp19 = main_testCryptarithm2_nofib_puzzle_execStateT_map$map(main_testCryptarithm2_nofib_puzzle_execStateT_lambda$lambda, inlinedVal1);
      inlinedVal2 = tmp19(undefined, undefined, undefined, undefined, undefined);
      inlinedVal = inlinedVal2(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, args, undefined, undefined, tmp13, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
      return runtime.safeCall(inlinedVal.toString())
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "cryptarithm2"];
});
export default cryptarithm21;
