const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const listNth$accessorSymbol = globalThis.Symbol("listNth");
const isSome$accessorSymbol = globalThis.Symbol("isSome");
const snd$accessorSymbol = globalThis.Symbol("snd");
const find$accessorSymbol = globalThis.Symbol("find");
const playerEq$accessorSymbol = globalThis.Symbol("playerEq");
const playerOccupies$accessorSymbol = globalThis.Symbol("playerOccupies");
const moveTo$accessorSymbol = globalThis.Symbol("moveTo");
const top$accessorSymbol = globalThis.Symbol("top");
const boardToIndex$accessorSymbol = globalThis.Symbol("boardToIndex");
const listAll$tailrec$accessorSymbol = globalThis.Symbol("listAll$tailrec");
const listFoldl$tailrec$accessorSymbol = globalThis.Symbol("listFoldl$tailrec");
const map$tailrec$accessorSymbol = globalThis.Symbol("map$tailrec");
let go, minimaxTT, doKid, minimax1, lambda, lambda1, lambda2, lambda$, lambda$1, lambda$2, lambda$3, doKid$, main_gameTree_minimax$minimax, main_gameTreeWithTT_minimaxTT$minimaxTT, gameTreeWithTT_minimaxTT$minimaxTT, gameTree_minimax$minimax, doKid$doKid$, doKid$$doKid, main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons, main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil, main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons, main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil, main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1, main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1, main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1, main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1, main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons, main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil, main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons, main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil, main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1, main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1, main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1, main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1, main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons, main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil, main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons, main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil, main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1, main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1, main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1, main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1, main_gameTree_minimax_successors_allMoves_f_rev_go$l_Cons, main_gameTree_minimax_successors_allMoves_f_rev_go$l_Nil, main_gameTree_minimax_successors_map$l_Cons, main_gameTree_minimax_successors_map$l_Nil, main_gameTree_minimax_map$l_Cons, main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons, main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil, main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons, main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil, main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1, main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1, main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1, main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1, main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons, main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil, main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons, main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil, main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1, main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1, main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1, main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1, main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons, main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil, main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons, main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil, main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1, main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1, main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1, main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1, main_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Cons, main_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Nil, main_gameTreeWithTT_minimaxTT_successors_map$l_Cons, main_gameTreeWithTT_minimaxTT_successors_map$l_Nil, main_gameTreeWithTT_minimaxTT_map$l_Cons, gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Nil, gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Cons, gameTreeWithTT_minimaxTT_successors_map$l_Nil, gameTreeWithTT_minimaxTT_successors_map$l_Cons, gameTreeWithTT_minimaxTT_map$l_Cons, gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons, gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil, gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons, gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil, gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1, gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1, gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1, gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1, gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons, gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil, gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons, gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil, gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1, gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1, gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1, gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1, gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons, gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil, gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons, gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil, gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1, gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1, gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1, gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1, gameTree_minimax_successors_allMoves_f_rev_go$l_Nil, gameTree_minimax_successors_allMoves_f_rev_go$l_Cons, gameTree_minimax_successors_map$l_Nil, gameTree_minimax_successors_map$l_Cons, gameTree_minimax_map$l_Cons, gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons, gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil, gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons, gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil, gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1, gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1, gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1, gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1, gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons, gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil, gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons, gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil, gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1, gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1, gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1, gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1, gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons, gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil, gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons, gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil, gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1, gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1, gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1, gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1, minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons, minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil, minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons, minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil, minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons, minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil, minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons1, minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil1, minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1, minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1, minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1, minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1, minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons, minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil, minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons, minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil, minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons, minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil, minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons1, minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil1, minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1, minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1, minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1, minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1, minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons, minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil, minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons, minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil, minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons, minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil, minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1, minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1, minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1, minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1, minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons1, minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil1, minimax_successors_allMoves_f_rev_go$l_Cons, minimax_successors_allMoves_f_rev_go$l_Nil, minimax_successors_map$l_Cons, minimax_successors_map$l_Nil, minimax_map$l_Cons, successors_allMoves_f_rev_go$l_Nil, successors_allMoves_f_rev_go$l_Cons, successors_map$l_Nil, successors_map$l_Cons, gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons, gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil, gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons, gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil, gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons, gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil, gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1, gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1, gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1, gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1, gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons1, gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil1, gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons, gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil, gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons, gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil, gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons, gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil, gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1, gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1, gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1, gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1, gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons1, gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil1, allMoves_f_rev_go$l_Cons, allMoves_f_rev_go$l_Nil, score_isWinFor_hasDiag_hasTrip_listAll$l_Cons, score_isWinFor_hasDiag_hasTrip_listAll$l_Nil, score_isWinFor_hasCol_hasTrip_listAll$l_Cons, score_isWinFor_hasCol_hasTrip_listAll$l_Nil, score_isWinFor_hasRow_hasTrip_listAll$l_Cons, score_isWinFor_hasRow_hasTrip_listAll$l_Nil, score_isWinFor_hasDiag_hasTrip_listAll$l_Cons1, score_isWinFor_hasDiag_hasTrip_listAll$l_Nil1, score_isWinFor_hasCol_hasTrip_listAll$l_Cons1, score_isWinFor_hasCol_hasTrip_listAll$l_Nil1, score_isWinFor_hasRow_hasTrip_listAll$l_Cons1, score_isWinFor_hasRow_hasTrip_listAll$l_Nil1, isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons, isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil, isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons, isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil, isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons, isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil, isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1, isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1, isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1, isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1, isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons, isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil, isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons, isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil, isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1, isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1, isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1, isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1, isWinFor_hasRow_hasTrip_listAll$l_Cons, isWinFor_hasRow_hasTrip_listAll$l_Nil, isWinFor_hasCol_hasTrip_listAll$l_Cons, isWinFor_hasCol_hasTrip_listAll$l_Nil, hasCol_hasTrip_listAll$l_Cons, hasCol_hasTrip_listAll$l_Nil, hasRow_hasTrip_listAll$l_Cons, hasRow_hasTrip_listAll$l_Nil, minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons, minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil, minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons, minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil, minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1, minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1, minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1, minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1, minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons, minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil, minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons, minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil, minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1, minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1, minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1, minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1, minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons, minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil, minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons, minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil, minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1, minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1, minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1, minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1, minimaxTT_successors_allMoves_f_rev_go$l_Cons, minimaxTT_successors_allMoves_f_rev_go$l_Nil, minimaxTT_successors_map$l_Cons, minimaxTT_successors_map$l_Nil, minimaxTT_map$l_Cons, minimaxTT$worker, minimaxTT_map$l_Cons$worker, minimaxTT_successors_map$l_Cons$worker, minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, hasRow_hasTrip_listAll$l_Cons$worker, hasCol_hasTrip_listAll$l_Cons$worker, isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker, isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker, score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1, gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker, gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1, gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker, gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1, gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, successors_map$l_Cons$worker, minimax_map$l_Cons$worker, minimax_successors_map$l_Cons$worker, minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker, minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1, minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker, minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1, minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker, minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1, gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, gameTree_minimax_map$l_Cons$worker, gameTree_minimax_successors_map$l_Cons$worker, gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, gameTreeWithTT_minimaxTT_map$l_Cons$worker, gameTreeWithTT_minimaxTT_successors_map$l_Cons$worker, main_gameTreeWithTT_minimaxTT_map$l_Cons$worker, main_gameTreeWithTT_minimaxTT_successors_map$l_Cons$worker, main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, main_gameTree_minimax_map$l_Cons$worker, main_gameTree_minimax_successors_map$l_Cons$worker, main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker, main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker, main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1, main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1, gameTree_minimax$minimax$worker, gameTreeWithTT_minimaxTT$minimaxTT$worker, main_gameTreeWithTT_minimaxTT$minimaxTT$worker, main_gameTree_minimax$minimax$worker;
main_gameTree_minimax$minimax = function main_gameTree_minimax$minimax(p) {
  return (b) => {
    return main_gameTree_minimax$minimax$worker(p, b)
  }
};
main_gameTree_minimax$minimax$worker = function main_gameTree_minimax$minimax$worker(p, b) {
  let tmp, tmp1, tmp2, tmp3, inlinedVal, p1, Cons_tail, inlinedVal1, inlinedVal2, arg$Some$0$, inlinedVal3;
  p1 = minimax1.X;
  Cons_tail = main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
  inlinedVal3 = minimax1[listNth$accessorSymbol](b, 0);
  if (inlinedVal3 instanceof minimax1.Some.class) {
    arg$Some$0$ = inlinedVal3.value;
    inlinedVal2 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$);
    if (inlinedVal2 === true) {
      let inlinedVal4, inlinedVal5, scrut, arg$Some$0$1;
      scrut = minimax1[find$accessorSymbol](b, 1);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$1 = scrut.value;
        inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
        if (inlinedVal5 === true) {
          let fv_tmp, inlinedVal6;
          fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(2);
          if (fv_tmp === true) {
            inlinedVal6 = true;
          } else {
            inlinedVal6 = false;
          }
          inlinedVal4 = inlinedVal6;
        } else {
          inlinedVal4 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
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
    let inlinedVal4, inlinedVal5, scrut, arg$Some$0$1;
    scrut = minimax1[find$accessorSymbol](b, 3);
    if (scrut instanceof minimax1.Some.class) {
      arg$Some$0$1 = scrut.value;
      inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
      if (inlinedVal5 === true) {
        let fv_tmp, inlinedVal6;
        fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
        if (fv_tmp === true) {
          let Cons_tail1, fv_p, inlinedVal7;
          Cons_tail1 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
          fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
          inlinedVal7 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail1, undefined, fv_p);
          inlinedVal6 = inlinedVal7;
        } else {
          inlinedVal6 = false;
        }
        inlinedVal4 = inlinedVal6;
      } else {
        inlinedVal4 = false;
      }
    } else if (scrut instanceof minimax1.None.class) {
      inlinedVal4 = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal4 === false) {
      let fv_tmp, inlinedVal6;
      fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
      if (fv_tmp === true) {
        let Cons_tail1, fv_p, inlinedVal7;
        Cons_tail1 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail);
        fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
        inlinedVal7 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail1, undefined, fv_p);
        inlinedVal6 = inlinedVal7;
      } else {
        inlinedVal6 = false;
      }
      if (inlinedVal6 === false) {
        let Cons_tail1, inlinedVal7, inlinedVal8, arg$Some$0$2, inlinedVal9;
        Cons_tail1 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
        inlinedVal9 = minimax1[listNth$accessorSymbol](b, 0);
        if (inlinedVal9 instanceof minimax1.Some.class) {
          arg$Some$0$2 = inlinedVal9.value;
          inlinedVal8 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$2);
          if (inlinedVal8 === true) {
            let inlinedVal10, inlinedVal11, scrut1, arg$Some$0$3;
            scrut1 = minimax1[find$accessorSymbol](b, 3);
            if (scrut1 instanceof minimax1.Some.class) {
              arg$Some$0$3 = scrut1.value;
              inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
              if (inlinedVal11 === true) {
                let fv_tmp1, inlinedVal12;
                fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
                if (fv_tmp1 === true) {
                  inlinedVal12 = true;
                } else {
                  inlinedVal12 = false;
                }
                inlinedVal10 = inlinedVal12;
              } else {
                inlinedVal10 = false;
              }
            } else if (scrut1 instanceof minimax1.None.class) {
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
          let inlinedVal10, inlinedVal11, scrut1, arg$Some$0$3;
          scrut1 = minimax1[find$accessorSymbol](b, 1);
          if (scrut1 instanceof minimax1.Some.class) {
            arg$Some$0$3 = scrut1.value;
            inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
            if (inlinedVal11 === true) {
              let fv_tmp1, inlinedVal12;
              fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
              if (fv_tmp1 === true) {
                let Cons_tail2, fv_p, inlinedVal13;
                Cons_tail2 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
                inlinedVal13 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail2, undefined, fv_p);
                inlinedVal12 = inlinedVal13;
              } else {
                inlinedVal12 = false;
              }
              inlinedVal10 = inlinedVal12;
            } else {
              inlinedVal10 = false;
            }
          } else if (scrut1 instanceof minimax1.None.class) {
            inlinedVal10 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          if (inlinedVal10 === false) {
            let fv_tmp1, inlinedVal12;
            fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(2);
            if (fv_tmp1 === true) {
              let Cons_tail2, fv_p, inlinedVal13;
              Cons_tail2 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail1);
              fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
              inlinedVal13 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail2, undefined, fv_p);
              inlinedVal12 = inlinedVal13;
            } else {
              inlinedVal12 = false;
            }
            if (inlinedVal12 === false) {
              let inlinedVal13, inlinedVal14, arg$Some$0$4, inlinedVal15;
              inlinedVal15 = minimax1[listNth$accessorSymbol](b, 0);
              if (inlinedVal15 instanceof minimax1.Some.class) {
                arg$Some$0$4 = inlinedVal15.value;
                inlinedVal14 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$4);
                if (inlinedVal14 === true) {
                  let inlinedVal16, inlinedVal17, scrut2, arg$Some$0$5;
                  scrut2 = minimax1[find$accessorSymbol](b, 4);
                  if (scrut2 instanceof minimax1.Some.class) {
                    arg$Some$0$5 = scrut2.value;
                    inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                    if (inlinedVal17 === true) {
                      let fv_tmp2, inlinedVal18;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p1)(b)(8);
                      if (fv_tmp2 === true) {
                        inlinedVal18 = true;
                      } else {
                        inlinedVal18 = false;
                      }
                      inlinedVal16 = inlinedVal18;
                    } else {
                      inlinedVal16 = false;
                    }
                  } else if (scrut2 instanceof minimax1.None.class) {
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
                let inlinedVal16, inlinedVal17, scrut2, arg$Some$0$5;
                scrut2 = minimax1[find$accessorSymbol](b, 2);
                if (scrut2 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = scrut2.value;
                  inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                  if (inlinedVal17 === true) {
                    let fv_tmp2, inlinedVal18;
                    fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
                    if (fv_tmp2 === true) {
                      let fv_tmp3, inlinedVal19;
                      fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
                      if (fv_tmp3 === true) {
                        inlinedVal19 = true;
                      } else {
                        inlinedVal19 = false;
                      }
                      inlinedVal18 = inlinedVal19;
                    } else {
                      inlinedVal18 = false;
                    }
                    inlinedVal16 = inlinedVal18;
                  } else {
                    inlinedVal16 = false;
                  }
                } else if (scrut2 instanceof minimax1.None.class) {
                  inlinedVal16 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal16 === false) {
                  let p2, Cons_tail2, inlinedVal18, inlinedVal19, arg$Some$0$6, inlinedVal20;
                  p2 = minimax1.O;
                  Cons_tail2 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                  inlinedVal20 = minimax1[listNth$accessorSymbol](b, 0);
                  if (inlinedVal20 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = inlinedVal20.value;
                    inlinedVal19 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                    if (inlinedVal19 === true) {
                      let inlinedVal21, inlinedVal22, scrut3, arg$Some$0$7;
                      scrut3 = minimax1[find$accessorSymbol](b, 1);
                      if (scrut3 instanceof minimax1.Some.class) {
                        arg$Some$0$7 = scrut3.value;
                        inlinedVal22 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                        if (inlinedVal22 === true) {
                          let fv_tmp2, inlinedVal23;
                          fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
                          if (fv_tmp2 === true) {
                            inlinedVal23 = true;
                          } else {
                            inlinedVal23 = false;
                          }
                          inlinedVal21 = inlinedVal23;
                        } else {
                          inlinedVal21 = false;
                        }
                      } else if (scrut3 instanceof minimax1.None.class) {
                        inlinedVal21 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal18 = inlinedVal21;
                    } else {
                      inlinedVal18 = false;
                    }
                  } else if (inlinedVal20 instanceof minimax1.None.class) {
                    inlinedVal18 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal18 === false) {
                    let inlinedVal21, inlinedVal22, scrut3, arg$Some$0$7;
                    scrut3 = minimax1[find$accessorSymbol](b, 3);
                    if (scrut3 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = scrut3.value;
                      inlinedVal22 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                      if (inlinedVal22 === true) {
                        let fv_tmp2, inlinedVal23;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                        if (fv_tmp2 === true) {
                          let Cons_tail3, fv_p, inlinedVal24;
                          Cons_tail3 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                          fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                          inlinedVal24 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail3, undefined, fv_p);
                          inlinedVal23 = inlinedVal24;
                        } else {
                          inlinedVal23 = false;
                        }
                        inlinedVal21 = inlinedVal23;
                      } else {
                        inlinedVal21 = false;
                      }
                    } else if (scrut3 instanceof minimax1.None.class) {
                      inlinedVal21 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    if (inlinedVal21 === false) {
                      let fv_tmp2, inlinedVal23;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                      if (fv_tmp2 === true) {
                        let Cons_tail3, fv_p, inlinedVal24;
                        Cons_tail3 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail2);
                        fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                        inlinedVal24 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail3, undefined, fv_p);
                        inlinedVal23 = inlinedVal24;
                      } else {
                        inlinedVal23 = false;
                      }
                      if (inlinedVal23 === false) {
                        let Cons_tail3, inlinedVal24, inlinedVal25, arg$Some$0$8, inlinedVal26;
                        Cons_tail3 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                        inlinedVal26 = minimax1[listNth$accessorSymbol](b, 0);
                        if (inlinedVal26 instanceof minimax1.Some.class) {
                          arg$Some$0$8 = inlinedVal26.value;
                          inlinedVal25 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$8);
                          if (inlinedVal25 === true) {
                            let inlinedVal27, inlinedVal28, scrut4, arg$Some$0$9;
                            scrut4 = minimax1[find$accessorSymbol](b, 3);
                            if (scrut4 instanceof minimax1.Some.class) {
                              arg$Some$0$9 = scrut4.value;
                              inlinedVal28 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                              if (inlinedVal28 === true) {
                                let fv_tmp3, inlinedVal29;
                                fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                                if (fv_tmp3 === true) {
                                  inlinedVal29 = true;
                                } else {
                                  inlinedVal29 = false;
                                }
                                inlinedVal27 = inlinedVal29;
                              } else {
                                inlinedVal27 = false;
                              }
                            } else if (scrut4 instanceof minimax1.None.class) {
                              inlinedVal27 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            inlinedVal24 = inlinedVal27;
                          } else {
                            inlinedVal24 = false;
                          }
                        } else if (inlinedVal26 instanceof minimax1.None.class) {
                          inlinedVal24 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        if (inlinedVal24 === false) {
                          let inlinedVal27, inlinedVal28, scrut4, arg$Some$0$9;
                          scrut4 = minimax1[find$accessorSymbol](b, 1);
                          if (scrut4 instanceof minimax1.Some.class) {
                            arg$Some$0$9 = scrut4.value;
                            inlinedVal28 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                            if (inlinedVal28 === true) {
                              let fv_tmp3, inlinedVal29;
                              fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                              if (fv_tmp3 === true) {
                                let Cons_tail4, fv_p, inlinedVal30;
                                Cons_tail4 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                                inlinedVal30 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail4, undefined, fv_p);
                                inlinedVal29 = inlinedVal30;
                              } else {
                                inlinedVal29 = false;
                              }
                              inlinedVal27 = inlinedVal29;
                            } else {
                              inlinedVal27 = false;
                            }
                          } else if (scrut4 instanceof minimax1.None.class) {
                            inlinedVal27 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          if (inlinedVal27 === false) {
                            let fv_tmp3, inlinedVal29;
                            fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
                            if (fv_tmp3 === true) {
                              let Cons_tail4, fv_p, inlinedVal30;
                              Cons_tail4 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail3);
                              fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                              inlinedVal30 = main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail4, undefined, fv_p);
                              inlinedVal29 = inlinedVal30;
                            } else {
                              inlinedVal29 = false;
                            }
                            if (inlinedVal29 === false) {
                              let inlinedVal30, inlinedVal31, arg$Some$0$10, inlinedVal32;
                              inlinedVal32 = minimax1[listNth$accessorSymbol](b, 0);
                              if (inlinedVal32 instanceof minimax1.Some.class) {
                                arg$Some$0$10 = inlinedVal32.value;
                                inlinedVal31 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$10);
                                if (inlinedVal31 === true) {
                                  let inlinedVal33, inlinedVal34, scrut5, arg$Some$0$11;
                                  scrut5 = minimax1[find$accessorSymbol](b, 4);
                                  if (scrut5 instanceof minimax1.Some.class) {
                                    arg$Some$0$11 = scrut5.value;
                                    inlinedVal34 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                                    if (inlinedVal34 === true) {
                                      let fv_tmp4, inlinedVal35;
                                      fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p2)(b)(8);
                                      if (fv_tmp4 === true) {
                                        inlinedVal35 = true;
                                      } else {
                                        inlinedVal35 = false;
                                      }
                                      inlinedVal33 = inlinedVal35;
                                    } else {
                                      inlinedVal33 = false;
                                    }
                                  } else if (scrut5 instanceof minimax1.None.class) {
                                    inlinedVal33 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  inlinedVal30 = inlinedVal33;
                                } else {
                                  inlinedVal30 = false;
                                }
                              } else if (inlinedVal32 instanceof minimax1.None.class) {
                                inlinedVal30 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              if (inlinedVal30 === false) {
                                let inlinedVal33, inlinedVal34, scrut5, arg$Some$0$11;
                                scrut5 = minimax1[find$accessorSymbol](b, 2);
                                if (scrut5 instanceof minimax1.Some.class) {
                                  arg$Some$0$11 = scrut5.value;
                                  inlinedVal34 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                                  if (inlinedVal34 === true) {
                                    let fv_tmp4;
                                    fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                                    if (fv_tmp4 === true) {
                                      let fv_tmp5;
                                      fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                                      if (fv_tmp5 === true) {
                                        inlinedVal33 = true;
                                      } else {
                                        inlinedVal33 = false;
                                      }
                                    } else {
                                      inlinedVal33 = false;
                                    }
                                  } else {
                                    inlinedVal33 = false;
                                  }
                                } else if (scrut5 instanceof minimax1.None.class) {
                                  inlinedVal33 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                if (inlinedVal33 === false) {
                                  let inlinedVal35, p3, inlinedVal36;
                                  p3 = minimax1[isSome$accessorSymbol];
                                  inlinedVal36 = minimax1[listAll$tailrec$accessorSymbol](p3, b);
                                  if (inlinedVal36 === true) {
                                    let p4, Cons_tail4, inlinedVal37, inlinedVal38, arg$Some$0$12, inlinedVal39;
                                    p4 = minimax1.X;
                                    Cons_tail4 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                    inlinedVal39 = minimax1[listNth$accessorSymbol](b, 0);
                                    if (inlinedVal39 instanceof minimax1.Some.class) {
                                      arg$Some$0$12 = inlinedVal39.value;
                                      inlinedVal38 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$12);
                                      if (inlinedVal38 === true) {
                                        let inlinedVal40, inlinedVal41, scrut6, arg$Some$0$13;
                                        scrut6 = minimax1[find$accessorSymbol](b, 1);
                                        if (scrut6 instanceof minimax1.Some.class) {
                                          arg$Some$0$13 = scrut6.value;
                                          inlinedVal41 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$13);
                                          if (inlinedVal41 === true) {
                                            let fv_tmp4, inlinedVal42;
                                            fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(2);
                                            if (fv_tmp4 === true) {
                                              inlinedVal42 = true;
                                            } else {
                                              inlinedVal42 = false;
                                            }
                                            inlinedVal40 = inlinedVal42;
                                          } else {
                                            inlinedVal40 = false;
                                          }
                                        } else if (scrut6 instanceof minimax1.None.class) {
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
                                      let inlinedVal40, inlinedVal41, scrut6, arg$Some$0$13;
                                      scrut6 = minimax1[find$accessorSymbol](b, 3);
                                      if (scrut6 instanceof minimax1.Some.class) {
                                        arg$Some$0$13 = scrut6.value;
                                        inlinedVal41 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$13);
                                        if (inlinedVal41 === true) {
                                          let fv_tmp4, inlinedVal42;
                                          fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                          if (fv_tmp4 === true) {
                                            let Cons_tail5, fv_p, inlinedVal43;
                                            Cons_tail5 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                            fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                            inlinedVal43 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail5, undefined, fv_p);
                                            inlinedVal42 = inlinedVal43;
                                          } else {
                                            inlinedVal42 = false;
                                          }
                                          inlinedVal40 = inlinedVal42;
                                        } else {
                                          inlinedVal40 = false;
                                        }
                                      } else if (scrut6 instanceof minimax1.None.class) {
                                        inlinedVal40 = false;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                      if (inlinedVal40 === false) {
                                        let fv_tmp4, inlinedVal42;
                                        fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                        if (fv_tmp4 === true) {
                                          let Cons_tail5, fv_p, inlinedVal43;
                                          Cons_tail5 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail4);
                                          fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                          inlinedVal43 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail5, undefined, fv_p);
                                          inlinedVal42 = inlinedVal43;
                                        } else {
                                          inlinedVal42 = false;
                                        }
                                        if (inlinedVal42 === false) {
                                          let Cons_tail5, inlinedVal43, inlinedVal44, arg$Some$0$14, inlinedVal45;
                                          Cons_tail5 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                          inlinedVal45 = minimax1[listNth$accessorSymbol](b, 0);
                                          if (inlinedVal45 instanceof minimax1.Some.class) {
                                            arg$Some$0$14 = inlinedVal45.value;
                                            inlinedVal44 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$14);
                                            if (inlinedVal44 === true) {
                                              let inlinedVal46, inlinedVal47, scrut7, arg$Some$0$15;
                                              scrut7 = minimax1[find$accessorSymbol](b, 3);
                                              if (scrut7 instanceof minimax1.Some.class) {
                                                arg$Some$0$15 = scrut7.value;
                                                inlinedVal47 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$15);
                                                if (inlinedVal47 === true) {
                                                  let fv_tmp5, inlinedVal48;
                                                  fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                                  if (fv_tmp5 === true) {
                                                    inlinedVal48 = true;
                                                  } else {
                                                    inlinedVal48 = false;
                                                  }
                                                  inlinedVal46 = inlinedVal48;
                                                } else {
                                                  inlinedVal46 = false;
                                                }
                                              } else if (scrut7 instanceof minimax1.None.class) {
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
                                            let inlinedVal46, inlinedVal47, scrut7, arg$Some$0$15;
                                            scrut7 = minimax1[find$accessorSymbol](b, 1);
                                            if (scrut7 instanceof minimax1.Some.class) {
                                              arg$Some$0$15 = scrut7.value;
                                              inlinedVal47 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$15);
                                              if (inlinedVal47 === true) {
                                                let fv_tmp5, inlinedVal48;
                                                fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                                if (fv_tmp5 === true) {
                                                  let Cons_tail6, fv_p, inlinedVal49;
                                                  Cons_tail6 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                                  fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                                  inlinedVal49 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail6, undefined, fv_p);
                                                  inlinedVal48 = inlinedVal49;
                                                } else {
                                                  inlinedVal48 = false;
                                                }
                                                inlinedVal46 = inlinedVal48;
                                              } else {
                                                inlinedVal46 = false;
                                              }
                                            } else if (scrut7 instanceof minimax1.None.class) {
                                              inlinedVal46 = false;
                                            } else {
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                            }
                                            if (inlinedVal46 === false) {
                                              let fv_tmp5, inlinedVal48;
                                              fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(2);
                                              if (fv_tmp5 === true) {
                                                let Cons_tail6, fv_p, inlinedVal49;
                                                Cons_tail6 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail5);
                                                fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                                inlinedVal49 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail6, undefined, fv_p);
                                                inlinedVal48 = inlinedVal49;
                                              } else {
                                                inlinedVal48 = false;
                                              }
                                              if (inlinedVal48 === false) {
                                                let inlinedVal49, inlinedVal50, arg$Some$0$16, inlinedVal51;
                                                inlinedVal51 = minimax1[listNth$accessorSymbol](b, 0);
                                                if (inlinedVal51 instanceof minimax1.Some.class) {
                                                  arg$Some$0$16 = inlinedVal51.value;
                                                  inlinedVal50 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$16);
                                                  if (inlinedVal50 === true) {
                                                    let inlinedVal52, inlinedVal53, scrut8, arg$Some$0$17;
                                                    scrut8 = minimax1[find$accessorSymbol](b, 4);
                                                    if (scrut8 instanceof minimax1.Some.class) {
                                                      arg$Some$0$17 = scrut8.value;
                                                      inlinedVal53 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                                      if (inlinedVal53 === true) {
                                                        let fv_tmp6, inlinedVal54;
                                                        fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p4)(b)(8);
                                                        if (fv_tmp6 === true) {
                                                          inlinedVal54 = true;
                                                        } else {
                                                          inlinedVal54 = false;
                                                        }
                                                        inlinedVal52 = inlinedVal54;
                                                      } else {
                                                        inlinedVal52 = false;
                                                      }
                                                    } else if (scrut8 instanceof minimax1.None.class) {
                                                      inlinedVal52 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    inlinedVal49 = inlinedVal52;
                                                  } else {
                                                    inlinedVal49 = false;
                                                  }
                                                } else if (inlinedVal51 instanceof minimax1.None.class) {
                                                  inlinedVal49 = false;
                                                } else {
                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                }
                                                if (inlinedVal49 === false) {
                                                  let inlinedVal52, inlinedVal53, scrut8, arg$Some$0$17;
                                                  scrut8 = minimax1[find$accessorSymbol](b, 2);
                                                  if (scrut8 instanceof minimax1.Some.class) {
                                                    arg$Some$0$17 = scrut8.value;
                                                    inlinedVal53 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                                    if (inlinedVal53 === true) {
                                                      let fv_tmp6, inlinedVal54;
                                                      fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                                      if (fv_tmp6 === true) {
                                                        let fv_tmp7, inlinedVal55;
                                                        fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                                        if (fv_tmp7 === true) {
                                                          inlinedVal55 = true;
                                                        } else {
                                                          inlinedVal55 = false;
                                                        }
                                                        inlinedVal54 = inlinedVal55;
                                                      } else {
                                                        inlinedVal54 = false;
                                                      }
                                                      inlinedVal52 = inlinedVal54;
                                                    } else {
                                                      inlinedVal52 = false;
                                                    }
                                                  } else if (scrut8 instanceof minimax1.None.class) {
                                                    inlinedVal52 = false;
                                                  } else {
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                  }
                                                  if (inlinedVal52 === false) {
                                                    let p5, inlinedVal54, Cons_tail6, inlinedVal55, inlinedVal56, arg$Some$0$18, inlinedVal57;
                                                    p5 = minimax1.O;
                                                    Cons_tail6 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                                    inlinedVal57 = minimax1[listNth$accessorSymbol](b, 0);
                                                    if (inlinedVal57 instanceof minimax1.Some.class) {
                                                      arg$Some$0$18 = inlinedVal57.value;
                                                      inlinedVal56 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$18);
                                                      if (inlinedVal56 === true) {
                                                        let inlinedVal58, inlinedVal59, scrut9, arg$Some$0$19;
                                                        scrut9 = minimax1[find$accessorSymbol](b, 1);
                                                        if (scrut9 instanceof minimax1.Some.class) {
                                                          arg$Some$0$19 = scrut9.value;
                                                          inlinedVal59 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$19);
                                                          if (inlinedVal59 === true) {
                                                            let fv_tmp6, inlinedVal60;
                                                            fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(2);
                                                            if (fv_tmp6 === true) {
                                                              inlinedVal60 = true;
                                                            } else {
                                                              inlinedVal60 = false;
                                                            }
                                                            inlinedVal58 = inlinedVal60;
                                                          } else {
                                                            inlinedVal58 = false;
                                                          }
                                                        } else if (scrut9 instanceof minimax1.None.class) {
                                                          inlinedVal58 = false;
                                                        } else {
                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                        }
                                                        inlinedVal55 = inlinedVal58;
                                                      } else {
                                                        inlinedVal55 = false;
                                                      }
                                                    } else if (inlinedVal57 instanceof minimax1.None.class) {
                                                      inlinedVal55 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    if (inlinedVal55 === false) {
                                                      let inlinedVal58, inlinedVal59, scrut9, arg$Some$0$19;
                                                      scrut9 = minimax1[find$accessorSymbol](b, 3);
                                                      if (scrut9 instanceof minimax1.Some.class) {
                                                        arg$Some$0$19 = scrut9.value;
                                                        inlinedVal59 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$19);
                                                        if (inlinedVal59 === true) {
                                                          let fv_tmp6, inlinedVal60;
                                                          fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                          if (fv_tmp6 === true) {
                                                            let Cons_tail7, fv_p, inlinedVal61;
                                                            Cons_tail7 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                                            fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                            inlinedVal61 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail7, undefined, fv_p);
                                                            inlinedVal60 = inlinedVal61;
                                                          } else {
                                                            inlinedVal60 = false;
                                                          }
                                                          inlinedVal58 = inlinedVal60;
                                                        } else {
                                                          inlinedVal58 = false;
                                                        }
                                                      } else if (scrut9 instanceof minimax1.None.class) {
                                                        inlinedVal58 = false;
                                                      } else {
                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                      }
                                                      if (inlinedVal58 === false) {
                                                        let fv_tmp6, inlinedVal60;
                                                        fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                        if (fv_tmp6 === true) {
                                                          let Cons_tail7, fv_p, inlinedVal61;
                                                          Cons_tail7 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail6);
                                                          fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                          inlinedVal61 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail7, undefined, fv_p);
                                                          inlinedVal60 = inlinedVal61;
                                                        } else {
                                                          inlinedVal60 = false;
                                                        }
                                                        if (inlinedVal60 === false) {
                                                          let Cons_tail7, inlinedVal61, inlinedVal62, arg$Some$0$20, inlinedVal63;
                                                          Cons_tail7 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                                          inlinedVal63 = minimax1[listNth$accessorSymbol](b, 0);
                                                          if (inlinedVal63 instanceof minimax1.Some.class) {
                                                            arg$Some$0$20 = inlinedVal63.value;
                                                            inlinedVal62 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$20);
                                                            if (inlinedVal62 === true) {
                                                              let inlinedVal64, inlinedVal65, scrut10, arg$Some$0$21;
                                                              scrut10 = minimax1[find$accessorSymbol](b, 3);
                                                              if (scrut10 instanceof minimax1.Some.class) {
                                                                arg$Some$0$21 = scrut10.value;
                                                                inlinedVal65 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$21);
                                                                if (inlinedVal65 === true) {
                                                                  let fv_tmp7, inlinedVal66;
                                                                  fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                                  if (fv_tmp7 === true) {
                                                                    inlinedVal66 = true;
                                                                  } else {
                                                                    inlinedVal66 = false;
                                                                  }
                                                                  inlinedVal64 = inlinedVal66;
                                                                } else {
                                                                  inlinedVal64 = false;
                                                                }
                                                              } else if (scrut10 instanceof minimax1.None.class) {
                                                                inlinedVal64 = false;
                                                              } else {
                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                              }
                                                              inlinedVal61 = inlinedVal64;
                                                            } else {
                                                              inlinedVal61 = false;
                                                            }
                                                          } else if (inlinedVal63 instanceof minimax1.None.class) {
                                                            inlinedVal61 = false;
                                                          } else {
                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                          }
                                                          if (inlinedVal61 === false) {
                                                            let inlinedVal64, inlinedVal65, scrut10, arg$Some$0$21;
                                                            scrut10 = minimax1[find$accessorSymbol](b, 1);
                                                            if (scrut10 instanceof minimax1.Some.class) {
                                                              arg$Some$0$21 = scrut10.value;
                                                              inlinedVal65 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$21);
                                                              if (inlinedVal65 === true) {
                                                                let fv_tmp7, inlinedVal66;
                                                                fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                                if (fv_tmp7 === true) {
                                                                  let Cons_tail8, fv_p, inlinedVal67;
                                                                  Cons_tail8 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                                                  fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                                  inlinedVal67 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail8, undefined, fv_p);
                                                                  inlinedVal66 = inlinedVal67;
                                                                } else {
                                                                  inlinedVal66 = false;
                                                                }
                                                                inlinedVal64 = inlinedVal66;
                                                              } else {
                                                                inlinedVal64 = false;
                                                              }
                                                            } else if (scrut10 instanceof minimax1.None.class) {
                                                              inlinedVal64 = false;
                                                            } else {
                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                            }
                                                            if (inlinedVal64 === false) {
                                                              let fv_tmp7, inlinedVal66;
                                                              fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(2);
                                                              if (fv_tmp7 === true) {
                                                                let Cons_tail8, fv_p, inlinedVal67;
                                                                Cons_tail8 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail7);
                                                                fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                                inlinedVal67 = main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail8, undefined, fv_p);
                                                                inlinedVal66 = inlinedVal67;
                                                              } else {
                                                                inlinedVal66 = false;
                                                              }
                                                              if (inlinedVal66 === false) {
                                                                let inlinedVal67, inlinedVal68, arg$Some$0$22, inlinedVal69;
                                                                inlinedVal69 = minimax1[listNth$accessorSymbol](b, 0);
                                                                if (inlinedVal69 instanceof minimax1.Some.class) {
                                                                  arg$Some$0$22 = inlinedVal69.value;
                                                                  inlinedVal68 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$22);
                                                                  if (inlinedVal68 === true) {
                                                                    let inlinedVal70, inlinedVal71, scrut11, arg$Some$0$23;
                                                                    scrut11 = minimax1[find$accessorSymbol](b, 4);
                                                                    if (scrut11 instanceof minimax1.Some.class) {
                                                                      arg$Some$0$23 = scrut11.value;
                                                                      inlinedVal71 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$23);
                                                                      if (inlinedVal71 === true) {
                                                                        let fv_tmp8, inlinedVal72;
                                                                        fv_tmp8 = minimax1[playerOccupies$accessorSymbol](p5)(b)(8);
                                                                        if (fv_tmp8 === true) {
                                                                          inlinedVal72 = true;
                                                                        } else {
                                                                          inlinedVal72 = false;
                                                                        }
                                                                        inlinedVal70 = inlinedVal72;
                                                                      } else {
                                                                        inlinedVal70 = false;
                                                                      }
                                                                    } else if (scrut11 instanceof minimax1.None.class) {
                                                                      inlinedVal70 = false;
                                                                    } else {
                                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                    }
                                                                    inlinedVal67 = inlinedVal70;
                                                                  } else {
                                                                    inlinedVal67 = false;
                                                                  }
                                                                } else if (inlinedVal69 instanceof minimax1.None.class) {
                                                                  inlinedVal67 = false;
                                                                } else {
                                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                }
                                                                if (inlinedVal67 === false) {
                                                                  let inlinedVal70, scrut11, arg$Some$0$23;
                                                                  scrut11 = minimax1[find$accessorSymbol](b, 2);
                                                                  if (scrut11 instanceof minimax1.Some.class) {
                                                                    arg$Some$0$23 = scrut11.value;
                                                                    inlinedVal70 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$23);
                                                                    if (inlinedVal70 === true) {
                                                                      let fv_tmp8;
                                                                      fv_tmp8 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                                      if (fv_tmp8 === true) {
                                                                        let fv_tmp9;
                                                                        fv_tmp9 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                                        if (fv_tmp9 === true) {
                                                                          inlinedVal54 = false;
                                                                        } else {
                                                                          inlinedVal54 = true;
                                                                        }
                                                                      } else {
                                                                        inlinedVal54 = true;
                                                                      }
                                                                    } else {
                                                                      inlinedVal54 = true;
                                                                    }
                                                                  } else if (scrut11 instanceof minimax1.None.class) {
                                                                    inlinedVal54 = true;
                                                                  } else {
                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                  }
                                                                } else {
                                                                  inlinedVal54 = false;
                                                                }
                                                              } else {
                                                                inlinedVal54 = false;
                                                              }
                                                            } else {
                                                              inlinedVal54 = false;
                                                            }
                                                          } else {
                                                            inlinedVal54 = false;
                                                          }
                                                        } else {
                                                          inlinedVal54 = false;
                                                        }
                                                      } else {
                                                        inlinedVal54 = false;
                                                      }
                                                    } else {
                                                      inlinedVal54 = false;
                                                    }
                                                    inlinedVal35 = inlinedVal54;
                                                  } else {
                                                    inlinedVal35 = false;
                                                  }
                                                } else {
                                                  inlinedVal35 = false;
                                                }
                                              } else {
                                                inlinedVal35 = false;
                                              }
                                            } else {
                                              inlinedVal35 = false;
                                            }
                                          } else {
                                            inlinedVal35 = false;
                                          }
                                        } else {
                                          inlinedVal35 = false;
                                        }
                                      } else {
                                        inlinedVal35 = false;
                                      }
                                    } else {
                                      inlinedVal35 = false;
                                    }
                                  } else {
                                    inlinedVal35 = false;
                                  }
                                  inlinedVal = inlinedVal35;
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
    let inlinedVal4, p2, Cons_tail1, inlinedVal5, inlinedVal6, arg$Some$0$1, inlinedVal7;
    p2 = minimax1.X;
    Cons_tail1 = main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
    inlinedVal7 = minimax1[listNth$accessorSymbol](b, 0);
    if (inlinedVal7 instanceof minimax1.Some.class) {
      arg$Some$0$1 = inlinedVal7.value;
      inlinedVal6 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$1);
      if (inlinedVal6 === true) {
        let inlinedVal8, inlinedVal9, scrut, arg$Some$0$2;
        scrut = minimax1[find$accessorSymbol](b, 1);
        if (scrut instanceof minimax1.Some.class) {
          arg$Some$0$2 = scrut.value;
          inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
          if (inlinedVal9 === true) {
            let fv_tmp, inlinedVal10;
            fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
            if (fv_tmp === true) {
              inlinedVal10 = true;
            } else {
              inlinedVal10 = false;
            }
            inlinedVal8 = inlinedVal10;
          } else {
            inlinedVal8 = false;
          }
        } else if (scrut instanceof minimax1.None.class) {
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
      let inlinedVal8, inlinedVal9, scrut, arg$Some$0$2;
      scrut = minimax1[find$accessorSymbol](b, 3);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$2 = scrut.value;
        inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
        if (inlinedVal9 === true) {
          let fv_tmp, inlinedVal10;
          fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
          if (fv_tmp === true) {
            let Cons_tail2, fv_p, inlinedVal11;
            Cons_tail2 = main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
            fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
            inlinedVal11 = main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail2, undefined, fv_p);
            inlinedVal10 = inlinedVal11;
          } else {
            inlinedVal10 = false;
          }
          inlinedVal8 = inlinedVal10;
        } else {
          inlinedVal8 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
        inlinedVal8 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal8 === false) {
        let fv_tmp, inlinedVal10;
        fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
        if (fv_tmp === true) {
          let Cons_tail2, fv_p, inlinedVal11;
          Cons_tail2 = main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail1);
          fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
          inlinedVal11 = main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail2, undefined, fv_p);
          inlinedVal10 = inlinedVal11;
        } else {
          inlinedVal10 = false;
        }
        if (inlinedVal10 === false) {
          let Cons_tail2, inlinedVal11, inlinedVal12, arg$Some$0$3, inlinedVal13;
          Cons_tail2 = main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
          inlinedVal13 = minimax1[listNth$accessorSymbol](b, 0);
          if (inlinedVal13 instanceof minimax1.Some.class) {
            arg$Some$0$3 = inlinedVal13.value;
            inlinedVal12 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$3);
            if (inlinedVal12 === true) {
              let inlinedVal14, inlinedVal15, scrut1, arg$Some$0$4;
              scrut1 = minimax1[find$accessorSymbol](b, 3);
              if (scrut1 instanceof minimax1.Some.class) {
                arg$Some$0$4 = scrut1.value;
                inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
                if (inlinedVal15 === true) {
                  let fv_tmp1, inlinedVal16;
                  fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                  if (fv_tmp1 === true) {
                    inlinedVal16 = true;
                  } else {
                    inlinedVal16 = false;
                  }
                  inlinedVal14 = inlinedVal16;
                } else {
                  inlinedVal14 = false;
                }
              } else if (scrut1 instanceof minimax1.None.class) {
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
            let inlinedVal14, inlinedVal15, scrut1, arg$Some$0$4;
            scrut1 = minimax1[find$accessorSymbol](b, 1);
            if (scrut1 instanceof minimax1.Some.class) {
              arg$Some$0$4 = scrut1.value;
              inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
              if (inlinedVal15 === true) {
                let fv_tmp1, inlinedVal16;
                fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                if (fv_tmp1 === true) {
                  let Cons_tail3, fv_p, inlinedVal17;
                  Cons_tail3 = main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                  fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                  inlinedVal17 = main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail3, undefined, fv_p);
                  inlinedVal16 = inlinedVal17;
                } else {
                  inlinedVal16 = false;
                }
                inlinedVal14 = inlinedVal16;
              } else {
                inlinedVal14 = false;
              }
            } else if (scrut1 instanceof minimax1.None.class) {
              inlinedVal14 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal14 === false) {
              let fv_tmp1, inlinedVal16;
              fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
              if (fv_tmp1 === true) {
                let Cons_tail3, fv_p, inlinedVal17;
                Cons_tail3 = main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail2);
                fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                inlinedVal17 = main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail3, undefined, fv_p);
                inlinedVal16 = inlinedVal17;
              } else {
                inlinedVal16 = false;
              }
              if (inlinedVal16 === false) {
                let inlinedVal17, inlinedVal18, arg$Some$0$5, inlinedVal19;
                inlinedVal19 = minimax1[listNth$accessorSymbol](b, 0);
                if (inlinedVal19 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = inlinedVal19.value;
                  inlinedVal18 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$5);
                  if (inlinedVal18 === true) {
                    let inlinedVal20, inlinedVal21, scrut2, arg$Some$0$6;
                    scrut2 = minimax1[find$accessorSymbol](b, 4);
                    if (scrut2 instanceof minimax1.Some.class) {
                      arg$Some$0$6 = scrut2.value;
                      inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                      if (inlinedVal21 === true) {
                        let fv_tmp2, inlinedVal22;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(8);
                        if (fv_tmp2 === true) {
                          inlinedVal22 = true;
                        } else {
                          inlinedVal22 = false;
                        }
                        inlinedVal20 = inlinedVal22;
                      } else {
                        inlinedVal20 = false;
                      }
                    } else if (scrut2 instanceof minimax1.None.class) {
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
                  let inlinedVal20, inlinedVal21, scrut2, arg$Some$0$6;
                  scrut2 = minimax1[find$accessorSymbol](b, 2);
                  if (scrut2 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = scrut2.value;
                    inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                    if (inlinedVal21 === true) {
                      let fv_tmp2, inlinedVal22;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                      if (fv_tmp2 === true) {
                        let fv_tmp3, inlinedVal23;
                        fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                        if (fv_tmp3 === true) {
                          inlinedVal23 = true;
                        } else {
                          inlinedVal23 = false;
                        }
                        inlinedVal22 = inlinedVal23;
                      } else {
                        inlinedVal22 = false;
                      }
                      inlinedVal20 = inlinedVal22;
                    } else {
                      inlinedVal20 = false;
                    }
                  } else if (scrut2 instanceof minimax1.None.class) {
                    inlinedVal20 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal20 === false) {
                    let p3, Cons_tail3, inlinedVal22, inlinedVal23, arg$Some$0$7, inlinedVal24;
                    p3 = minimax1.O;
                    Cons_tail3 = main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                    inlinedVal24 = minimax1[listNth$accessorSymbol](b, 0);
                    if (inlinedVal24 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = inlinedVal24.value;
                      inlinedVal23 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$7);
                      if (inlinedVal23 === true) {
                        let inlinedVal25, inlinedVal26, scrut3, arg$Some$0$8;
                        scrut3 = minimax1[find$accessorSymbol](b, 1);
                        if (scrut3 instanceof minimax1.Some.class) {
                          arg$Some$0$8 = scrut3.value;
                          inlinedVal26 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$8);
                          if (inlinedVal26 === true) {
                            let fv_tmp2, inlinedVal27;
                            fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(2);
                            if (fv_tmp2 === true) {
                              inlinedVal27 = true;
                            } else {
                              inlinedVal27 = false;
                            }
                            inlinedVal25 = inlinedVal27;
                          } else {
                            inlinedVal25 = false;
                          }
                        } else if (scrut3 instanceof minimax1.None.class) {
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
                      let inlinedVal25, inlinedVal26, scrut3, arg$Some$0$8;
                      scrut3 = minimax1[find$accessorSymbol](b, 3);
                      if (scrut3 instanceof minimax1.Some.class) {
                        arg$Some$0$8 = scrut3.value;
                        inlinedVal26 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$8);
                        if (inlinedVal26 === true) {
                          let fv_tmp2, inlinedVal27;
                          fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                          if (fv_tmp2 === true) {
                            let Cons_tail4, fv_p, inlinedVal28;
                            Cons_tail4 = main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                            fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                            inlinedVal28 = main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail4, undefined, fv_p);
                            inlinedVal27 = inlinedVal28;
                          } else {
                            inlinedVal27 = false;
                          }
                          inlinedVal25 = inlinedVal27;
                        } else {
                          inlinedVal25 = false;
                        }
                      } else if (scrut3 instanceof minimax1.None.class) {
                        inlinedVal25 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      if (inlinedVal25 === false) {
                        let fv_tmp2, inlinedVal27;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                        if (fv_tmp2 === true) {
                          let Cons_tail4, fv_p, inlinedVal28;
                          Cons_tail4 = main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail3);
                          fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                          inlinedVal28 = main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail4, undefined, fv_p);
                          inlinedVal27 = inlinedVal28;
                        } else {
                          inlinedVal27 = false;
                        }
                        if (inlinedVal27 === false) {
                          let Cons_tail4, inlinedVal28, inlinedVal29, arg$Some$0$9, inlinedVal30;
                          Cons_tail4 = main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                          inlinedVal30 = minimax1[listNth$accessorSymbol](b, 0);
                          if (inlinedVal30 instanceof minimax1.Some.class) {
                            arg$Some$0$9 = inlinedVal30.value;
                            inlinedVal29 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$9);
                            if (inlinedVal29 === true) {
                              let inlinedVal31, inlinedVal32, scrut4, arg$Some$0$10;
                              scrut4 = minimax1[find$accessorSymbol](b, 3);
                              if (scrut4 instanceof minimax1.Some.class) {
                                arg$Some$0$10 = scrut4.value;
                                inlinedVal32 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                                if (inlinedVal32 === true) {
                                  let fv_tmp3, inlinedVal33;
                                  fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                                  if (fv_tmp3 === true) {
                                    inlinedVal33 = true;
                                  } else {
                                    inlinedVal33 = false;
                                  }
                                  inlinedVal31 = inlinedVal33;
                                } else {
                                  inlinedVal31 = false;
                                }
                              } else if (scrut4 instanceof minimax1.None.class) {
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
                            let inlinedVal31, inlinedVal32, scrut4, arg$Some$0$10;
                            scrut4 = minimax1[find$accessorSymbol](b, 1);
                            if (scrut4 instanceof minimax1.Some.class) {
                              arg$Some$0$10 = scrut4.value;
                              inlinedVal32 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                              if (inlinedVal32 === true) {
                                let fv_tmp3, inlinedVal33;
                                fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                                if (fv_tmp3 === true) {
                                  let Cons_tail5, fv_p, inlinedVal34;
                                  Cons_tail5 = main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                  fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                                  inlinedVal34 = main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail5, undefined, fv_p);
                                  inlinedVal33 = inlinedVal34;
                                } else {
                                  inlinedVal33 = false;
                                }
                                inlinedVal31 = inlinedVal33;
                              } else {
                                inlinedVal31 = false;
                              }
                            } else if (scrut4 instanceof minimax1.None.class) {
                              inlinedVal31 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            if (inlinedVal31 === false) {
                              let fv_tmp3, inlinedVal33;
                              fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(2);
                              if (fv_tmp3 === true) {
                                let Cons_tail5, fv_p, inlinedVal34;
                                Cons_tail5 = main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail4);
                                fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                                inlinedVal34 = main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail5, undefined, fv_p);
                                inlinedVal33 = inlinedVal34;
                              } else {
                                inlinedVal33 = false;
                              }
                              if (inlinedVal33 === false) {
                                let inlinedVal34, inlinedVal35, arg$Some$0$11, inlinedVal36;
                                inlinedVal36 = minimax1[listNth$accessorSymbol](b, 0);
                                if (inlinedVal36 instanceof minimax1.Some.class) {
                                  arg$Some$0$11 = inlinedVal36.value;
                                  inlinedVal35 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$11);
                                  if (inlinedVal35 === true) {
                                    let inlinedVal37, inlinedVal38, scrut5, arg$Some$0$12;
                                    scrut5 = minimax1[find$accessorSymbol](b, 4);
                                    if (scrut5 instanceof minimax1.Some.class) {
                                      arg$Some$0$12 = scrut5.value;
                                      inlinedVal38 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                                      if (inlinedVal38 === true) {
                                        let fv_tmp4, inlinedVal39;
                                        fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p3)(b)(8);
                                        if (fv_tmp4 === true) {
                                          inlinedVal39 = true;
                                        } else {
                                          inlinedVal39 = false;
                                        }
                                        inlinedVal37 = inlinedVal39;
                                      } else {
                                        inlinedVal37 = false;
                                      }
                                    } else if (scrut5 instanceof minimax1.None.class) {
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
                                  let inlinedVal37, scrut5, arg$Some$0$12;
                                  scrut5 = minimax1[find$accessorSymbol](b, 2);
                                  if (scrut5 instanceof minimax1.Some.class) {
                                    arg$Some$0$12 = scrut5.value;
                                    inlinedVal37 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                                    if (inlinedVal37 === true) {
                                      let fv_tmp4;
                                      fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                                      if (fv_tmp4 === true) {
                                        let fv_tmp5;
                                        fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                                        if (fv_tmp5 === true) {
                                          inlinedVal4 = -1;
                                        } else {
                                          inlinedVal4 = 0;
                                        }
                                      } else {
                                        inlinedVal4 = 0;
                                      }
                                    } else {
                                      inlinedVal4 = 0;
                                    }
                                  } else if (scrut5 instanceof minimax1.None.class) {
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
    tmp1 = main_gameTree_minimax$minimax(inlinedVal4);
    tmp4 = minimax1[moveTo$accessorSymbol](b, p);
    minimax2 = minimax1;
    n = 0;
    m = b;
    acc = main_gameTree_minimax_successors_allMoves_f_rev_go$l_Nil();
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp5, tmp6, tmp7;
        if (m instanceof minimax2.Nil.class) {
          let acc1, inlinedVal9;
          acc1 = main_gameTree_minimax_successors_map$l_Nil();
          inlinedVal9 = acc(acc1);
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
            tmp7 = main_gameTree_minimax_successors_allMoves_f_rev_go$l_Cons(n, acc);
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
    inlinedVal7 = inlinedVal8(undefined, tmp4);
    inlinedVal5 = inlinedVal7(undefined, tmp1);
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
main_gameTreeWithTT_minimaxTT$minimaxTT = function main_gameTreeWithTT_minimaxTT$minimaxTT(minimax2, transTable, p) {
  return (b) => {
    return main_gameTreeWithTT_minimaxTT$minimaxTT$worker(minimax2, transTable, p, b)
  }
};
main_gameTreeWithTT_minimaxTT$minimaxTT$worker = function main_gameTreeWithTT_minimaxTT$minimaxTT$worker(minimax2, transTable, p, b) {
  let tmp, inlinedVal, p1, Cons_tail, inlinedVal1, inlinedVal2, arg$Some$0$, inlinedVal3;
  p1 = minimax1.X;
  Cons_tail = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
  inlinedVal3 = minimax1[listNth$accessorSymbol](b, 0);
  if (inlinedVal3 instanceof minimax1.Some.class) {
    arg$Some$0$ = inlinedVal3.value;
    inlinedVal2 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$);
    if (inlinedVal2 === true) {
      let inlinedVal4, inlinedVal5, scrut, arg$Some$0$1;
      scrut = minimax1[find$accessorSymbol](b, 1);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$1 = scrut.value;
        inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
        if (inlinedVal5 === true) {
          let fv_tmp, inlinedVal6;
          fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(2);
          if (fv_tmp === true) {
            inlinedVal6 = true;
          } else {
            inlinedVal6 = false;
          }
          inlinedVal4 = inlinedVal6;
        } else {
          inlinedVal4 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
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
    let inlinedVal4, inlinedVal5, scrut, arg$Some$0$1;
    scrut = minimax1[find$accessorSymbol](b, 3);
    if (scrut instanceof minimax1.Some.class) {
      arg$Some$0$1 = scrut.value;
      inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
      if (inlinedVal5 === true) {
        let fv_tmp, inlinedVal6;
        fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
        if (fv_tmp === true) {
          let Cons_tail1, fv_p, inlinedVal7;
          Cons_tail1 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
          fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
          inlinedVal7 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail1, undefined, fv_p);
          inlinedVal6 = inlinedVal7;
        } else {
          inlinedVal6 = false;
        }
        inlinedVal4 = inlinedVal6;
      } else {
        inlinedVal4 = false;
      }
    } else if (scrut instanceof minimax1.None.class) {
      inlinedVal4 = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal4 === false) {
      let fv_tmp, inlinedVal6;
      fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
      if (fv_tmp === true) {
        let Cons_tail1, fv_p, inlinedVal7;
        Cons_tail1 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail);
        fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
        inlinedVal7 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail1, undefined, fv_p);
        inlinedVal6 = inlinedVal7;
      } else {
        inlinedVal6 = false;
      }
      if (inlinedVal6 === false) {
        let Cons_tail1, inlinedVal7, inlinedVal8, arg$Some$0$2, inlinedVal9;
        Cons_tail1 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
        inlinedVal9 = minimax1[listNth$accessorSymbol](b, 0);
        if (inlinedVal9 instanceof minimax1.Some.class) {
          arg$Some$0$2 = inlinedVal9.value;
          inlinedVal8 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$2);
          if (inlinedVal8 === true) {
            let inlinedVal10, inlinedVal11, scrut1, arg$Some$0$3;
            scrut1 = minimax1[find$accessorSymbol](b, 3);
            if (scrut1 instanceof minimax1.Some.class) {
              arg$Some$0$3 = scrut1.value;
              inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
              if (inlinedVal11 === true) {
                let fv_tmp1, inlinedVal12;
                fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
                if (fv_tmp1 === true) {
                  inlinedVal12 = true;
                } else {
                  inlinedVal12 = false;
                }
                inlinedVal10 = inlinedVal12;
              } else {
                inlinedVal10 = false;
              }
            } else if (scrut1 instanceof minimax1.None.class) {
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
          let inlinedVal10, inlinedVal11, scrut1, arg$Some$0$3;
          scrut1 = minimax1[find$accessorSymbol](b, 1);
          if (scrut1 instanceof minimax1.Some.class) {
            arg$Some$0$3 = scrut1.value;
            inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
            if (inlinedVal11 === true) {
              let fv_tmp1, inlinedVal12;
              fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
              if (fv_tmp1 === true) {
                let Cons_tail2, fv_p, inlinedVal13;
                Cons_tail2 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
                inlinedVal13 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail2, undefined, fv_p);
                inlinedVal12 = inlinedVal13;
              } else {
                inlinedVal12 = false;
              }
              inlinedVal10 = inlinedVal12;
            } else {
              inlinedVal10 = false;
            }
          } else if (scrut1 instanceof minimax1.None.class) {
            inlinedVal10 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          if (inlinedVal10 === false) {
            let fv_tmp1, inlinedVal12;
            fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(2);
            if (fv_tmp1 === true) {
              let Cons_tail2, fv_p, inlinedVal13;
              Cons_tail2 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail1);
              fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
              inlinedVal13 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail2, undefined, fv_p);
              inlinedVal12 = inlinedVal13;
            } else {
              inlinedVal12 = false;
            }
            if (inlinedVal12 === false) {
              let inlinedVal13, inlinedVal14, arg$Some$0$4, inlinedVal15;
              inlinedVal15 = minimax1[listNth$accessorSymbol](b, 0);
              if (inlinedVal15 instanceof minimax1.Some.class) {
                arg$Some$0$4 = inlinedVal15.value;
                inlinedVal14 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$4);
                if (inlinedVal14 === true) {
                  let inlinedVal16, inlinedVal17, scrut2, arg$Some$0$5;
                  scrut2 = minimax1[find$accessorSymbol](b, 4);
                  if (scrut2 instanceof minimax1.Some.class) {
                    arg$Some$0$5 = scrut2.value;
                    inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                    if (inlinedVal17 === true) {
                      let fv_tmp2, inlinedVal18;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p1)(b)(8);
                      if (fv_tmp2 === true) {
                        inlinedVal18 = true;
                      } else {
                        inlinedVal18 = false;
                      }
                      inlinedVal16 = inlinedVal18;
                    } else {
                      inlinedVal16 = false;
                    }
                  } else if (scrut2 instanceof minimax1.None.class) {
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
                let inlinedVal16, inlinedVal17, scrut2, arg$Some$0$5;
                scrut2 = minimax1[find$accessorSymbol](b, 2);
                if (scrut2 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = scrut2.value;
                  inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                  if (inlinedVal17 === true) {
                    let fv_tmp2, inlinedVal18;
                    fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
                    if (fv_tmp2 === true) {
                      let fv_tmp3, inlinedVal19;
                      fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
                      if (fv_tmp3 === true) {
                        inlinedVal19 = true;
                      } else {
                        inlinedVal19 = false;
                      }
                      inlinedVal18 = inlinedVal19;
                    } else {
                      inlinedVal18 = false;
                    }
                    inlinedVal16 = inlinedVal18;
                  } else {
                    inlinedVal16 = false;
                  }
                } else if (scrut2 instanceof minimax1.None.class) {
                  inlinedVal16 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal16 === false) {
                  let p2, Cons_tail2, inlinedVal18, inlinedVal19, arg$Some$0$6, inlinedVal20;
                  p2 = minimax1.O;
                  Cons_tail2 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                  inlinedVal20 = minimax1[listNth$accessorSymbol](b, 0);
                  if (inlinedVal20 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = inlinedVal20.value;
                    inlinedVal19 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                    if (inlinedVal19 === true) {
                      let inlinedVal21, inlinedVal22, scrut3, arg$Some$0$7;
                      scrut3 = minimax1[find$accessorSymbol](b, 1);
                      if (scrut3 instanceof minimax1.Some.class) {
                        arg$Some$0$7 = scrut3.value;
                        inlinedVal22 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                        if (inlinedVal22 === true) {
                          let fv_tmp2, inlinedVal23;
                          fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
                          if (fv_tmp2 === true) {
                            inlinedVal23 = true;
                          } else {
                            inlinedVal23 = false;
                          }
                          inlinedVal21 = inlinedVal23;
                        } else {
                          inlinedVal21 = false;
                        }
                      } else if (scrut3 instanceof minimax1.None.class) {
                        inlinedVal21 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal18 = inlinedVal21;
                    } else {
                      inlinedVal18 = false;
                    }
                  } else if (inlinedVal20 instanceof minimax1.None.class) {
                    inlinedVal18 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal18 === false) {
                    let inlinedVal21, inlinedVal22, scrut3, arg$Some$0$7;
                    scrut3 = minimax1[find$accessorSymbol](b, 3);
                    if (scrut3 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = scrut3.value;
                      inlinedVal22 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                      if (inlinedVal22 === true) {
                        let fv_tmp2, inlinedVal23;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                        if (fv_tmp2 === true) {
                          let Cons_tail3, fv_p, inlinedVal24;
                          Cons_tail3 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                          fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                          inlinedVal24 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail3, undefined, fv_p);
                          inlinedVal23 = inlinedVal24;
                        } else {
                          inlinedVal23 = false;
                        }
                        inlinedVal21 = inlinedVal23;
                      } else {
                        inlinedVal21 = false;
                      }
                    } else if (scrut3 instanceof minimax1.None.class) {
                      inlinedVal21 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    if (inlinedVal21 === false) {
                      let fv_tmp2, inlinedVal23;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                      if (fv_tmp2 === true) {
                        let Cons_tail3, fv_p, inlinedVal24;
                        Cons_tail3 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail2);
                        fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                        inlinedVal24 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail3, undefined, fv_p);
                        inlinedVal23 = inlinedVal24;
                      } else {
                        inlinedVal23 = false;
                      }
                      if (inlinedVal23 === false) {
                        let Cons_tail3, inlinedVal24, inlinedVal25, arg$Some$0$8, inlinedVal26;
                        Cons_tail3 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                        inlinedVal26 = minimax1[listNth$accessorSymbol](b, 0);
                        if (inlinedVal26 instanceof minimax1.Some.class) {
                          arg$Some$0$8 = inlinedVal26.value;
                          inlinedVal25 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$8);
                          if (inlinedVal25 === true) {
                            let inlinedVal27, inlinedVal28, scrut4, arg$Some$0$9;
                            scrut4 = minimax1[find$accessorSymbol](b, 3);
                            if (scrut4 instanceof minimax1.Some.class) {
                              arg$Some$0$9 = scrut4.value;
                              inlinedVal28 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                              if (inlinedVal28 === true) {
                                let fv_tmp3, inlinedVal29;
                                fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                                if (fv_tmp3 === true) {
                                  inlinedVal29 = true;
                                } else {
                                  inlinedVal29 = false;
                                }
                                inlinedVal27 = inlinedVal29;
                              } else {
                                inlinedVal27 = false;
                              }
                            } else if (scrut4 instanceof minimax1.None.class) {
                              inlinedVal27 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            inlinedVal24 = inlinedVal27;
                          } else {
                            inlinedVal24 = false;
                          }
                        } else if (inlinedVal26 instanceof minimax1.None.class) {
                          inlinedVal24 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        if (inlinedVal24 === false) {
                          let inlinedVal27, inlinedVal28, scrut4, arg$Some$0$9;
                          scrut4 = minimax1[find$accessorSymbol](b, 1);
                          if (scrut4 instanceof minimax1.Some.class) {
                            arg$Some$0$9 = scrut4.value;
                            inlinedVal28 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                            if (inlinedVal28 === true) {
                              let fv_tmp3, inlinedVal29;
                              fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                              if (fv_tmp3 === true) {
                                let Cons_tail4, fv_p, inlinedVal30;
                                Cons_tail4 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                                inlinedVal30 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail4, undefined, fv_p);
                                inlinedVal29 = inlinedVal30;
                              } else {
                                inlinedVal29 = false;
                              }
                              inlinedVal27 = inlinedVal29;
                            } else {
                              inlinedVal27 = false;
                            }
                          } else if (scrut4 instanceof minimax1.None.class) {
                            inlinedVal27 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          if (inlinedVal27 === false) {
                            let fv_tmp3, inlinedVal29;
                            fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
                            if (fv_tmp3 === true) {
                              let Cons_tail4, fv_p, inlinedVal30;
                              Cons_tail4 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail3);
                              fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                              inlinedVal30 = main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail4, undefined, fv_p);
                              inlinedVal29 = inlinedVal30;
                            } else {
                              inlinedVal29 = false;
                            }
                            if (inlinedVal29 === false) {
                              let inlinedVal30, inlinedVal31, arg$Some$0$10, inlinedVal32;
                              inlinedVal32 = minimax1[listNth$accessorSymbol](b, 0);
                              if (inlinedVal32 instanceof minimax1.Some.class) {
                                arg$Some$0$10 = inlinedVal32.value;
                                inlinedVal31 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$10);
                                if (inlinedVal31 === true) {
                                  let inlinedVal33, inlinedVal34, scrut5, arg$Some$0$11;
                                  scrut5 = minimax1[find$accessorSymbol](b, 4);
                                  if (scrut5 instanceof minimax1.Some.class) {
                                    arg$Some$0$11 = scrut5.value;
                                    inlinedVal34 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                                    if (inlinedVal34 === true) {
                                      let fv_tmp4, inlinedVal35;
                                      fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p2)(b)(8);
                                      if (fv_tmp4 === true) {
                                        inlinedVal35 = true;
                                      } else {
                                        inlinedVal35 = false;
                                      }
                                      inlinedVal33 = inlinedVal35;
                                    } else {
                                      inlinedVal33 = false;
                                    }
                                  } else if (scrut5 instanceof minimax1.None.class) {
                                    inlinedVal33 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  inlinedVal30 = inlinedVal33;
                                } else {
                                  inlinedVal30 = false;
                                }
                              } else if (inlinedVal32 instanceof minimax1.None.class) {
                                inlinedVal30 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              if (inlinedVal30 === false) {
                                let inlinedVal33, inlinedVal34, scrut5, arg$Some$0$11;
                                scrut5 = minimax1[find$accessorSymbol](b, 2);
                                if (scrut5 instanceof minimax1.Some.class) {
                                  arg$Some$0$11 = scrut5.value;
                                  inlinedVal34 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                                  if (inlinedVal34 === true) {
                                    let fv_tmp4;
                                    fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                                    if (fv_tmp4 === true) {
                                      let fv_tmp5;
                                      fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                                      if (fv_tmp5 === true) {
                                        inlinedVal33 = true;
                                      } else {
                                        inlinedVal33 = false;
                                      }
                                    } else {
                                      inlinedVal33 = false;
                                    }
                                  } else {
                                    inlinedVal33 = false;
                                  }
                                } else if (scrut5 instanceof minimax1.None.class) {
                                  inlinedVal33 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                if (inlinedVal33 === false) {
                                  let inlinedVal35, p3, inlinedVal36;
                                  p3 = minimax1[isSome$accessorSymbol];
                                  inlinedVal36 = minimax1[listAll$tailrec$accessorSymbol](p3, b);
                                  if (inlinedVal36 === true) {
                                    let p4, Cons_tail4, inlinedVal37, inlinedVal38, arg$Some$0$12, inlinedVal39;
                                    p4 = minimax1.X;
                                    Cons_tail4 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                    inlinedVal39 = minimax1[listNth$accessorSymbol](b, 0);
                                    if (inlinedVal39 instanceof minimax1.Some.class) {
                                      arg$Some$0$12 = inlinedVal39.value;
                                      inlinedVal38 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$12);
                                      if (inlinedVal38 === true) {
                                        let inlinedVal40, inlinedVal41, scrut6, arg$Some$0$13;
                                        scrut6 = minimax1[find$accessorSymbol](b, 1);
                                        if (scrut6 instanceof minimax1.Some.class) {
                                          arg$Some$0$13 = scrut6.value;
                                          inlinedVal41 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$13);
                                          if (inlinedVal41 === true) {
                                            let fv_tmp4, inlinedVal42;
                                            fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(2);
                                            if (fv_tmp4 === true) {
                                              inlinedVal42 = true;
                                            } else {
                                              inlinedVal42 = false;
                                            }
                                            inlinedVal40 = inlinedVal42;
                                          } else {
                                            inlinedVal40 = false;
                                          }
                                        } else if (scrut6 instanceof minimax1.None.class) {
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
                                      let inlinedVal40, inlinedVal41, scrut6, arg$Some$0$13;
                                      scrut6 = minimax1[find$accessorSymbol](b, 3);
                                      if (scrut6 instanceof minimax1.Some.class) {
                                        arg$Some$0$13 = scrut6.value;
                                        inlinedVal41 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$13);
                                        if (inlinedVal41 === true) {
                                          let fv_tmp4, inlinedVal42;
                                          fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                          if (fv_tmp4 === true) {
                                            let Cons_tail5, fv_p, inlinedVal43;
                                            Cons_tail5 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                            fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                            inlinedVal43 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail5, undefined, fv_p);
                                            inlinedVal42 = inlinedVal43;
                                          } else {
                                            inlinedVal42 = false;
                                          }
                                          inlinedVal40 = inlinedVal42;
                                        } else {
                                          inlinedVal40 = false;
                                        }
                                      } else if (scrut6 instanceof minimax1.None.class) {
                                        inlinedVal40 = false;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                      if (inlinedVal40 === false) {
                                        let fv_tmp4, inlinedVal42;
                                        fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                        if (fv_tmp4 === true) {
                                          let Cons_tail5, fv_p, inlinedVal43;
                                          Cons_tail5 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail4);
                                          fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                          inlinedVal43 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail5, undefined, fv_p);
                                          inlinedVal42 = inlinedVal43;
                                        } else {
                                          inlinedVal42 = false;
                                        }
                                        if (inlinedVal42 === false) {
                                          let Cons_tail5, inlinedVal43, inlinedVal44, arg$Some$0$14, inlinedVal45;
                                          Cons_tail5 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                          inlinedVal45 = minimax1[listNth$accessorSymbol](b, 0);
                                          if (inlinedVal45 instanceof minimax1.Some.class) {
                                            arg$Some$0$14 = inlinedVal45.value;
                                            inlinedVal44 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$14);
                                            if (inlinedVal44 === true) {
                                              let inlinedVal46, inlinedVal47, scrut7, arg$Some$0$15;
                                              scrut7 = minimax1[find$accessorSymbol](b, 3);
                                              if (scrut7 instanceof minimax1.Some.class) {
                                                arg$Some$0$15 = scrut7.value;
                                                inlinedVal47 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$15);
                                                if (inlinedVal47 === true) {
                                                  let fv_tmp5, inlinedVal48;
                                                  fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                                  if (fv_tmp5 === true) {
                                                    inlinedVal48 = true;
                                                  } else {
                                                    inlinedVal48 = false;
                                                  }
                                                  inlinedVal46 = inlinedVal48;
                                                } else {
                                                  inlinedVal46 = false;
                                                }
                                              } else if (scrut7 instanceof minimax1.None.class) {
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
                                            let inlinedVal46, inlinedVal47, scrut7, arg$Some$0$15;
                                            scrut7 = minimax1[find$accessorSymbol](b, 1);
                                            if (scrut7 instanceof minimax1.Some.class) {
                                              arg$Some$0$15 = scrut7.value;
                                              inlinedVal47 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$15);
                                              if (inlinedVal47 === true) {
                                                let fv_tmp5, inlinedVal48;
                                                fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                                if (fv_tmp5 === true) {
                                                  let Cons_tail6, fv_p, inlinedVal49;
                                                  Cons_tail6 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                                  fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                                  inlinedVal49 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail6, undefined, fv_p);
                                                  inlinedVal48 = inlinedVal49;
                                                } else {
                                                  inlinedVal48 = false;
                                                }
                                                inlinedVal46 = inlinedVal48;
                                              } else {
                                                inlinedVal46 = false;
                                              }
                                            } else if (scrut7 instanceof minimax1.None.class) {
                                              inlinedVal46 = false;
                                            } else {
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                            }
                                            if (inlinedVal46 === false) {
                                              let fv_tmp5, inlinedVal48;
                                              fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(2);
                                              if (fv_tmp5 === true) {
                                                let Cons_tail6, fv_p, inlinedVal49;
                                                Cons_tail6 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail5);
                                                fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                                inlinedVal49 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail6, undefined, fv_p);
                                                inlinedVal48 = inlinedVal49;
                                              } else {
                                                inlinedVal48 = false;
                                              }
                                              if (inlinedVal48 === false) {
                                                let inlinedVal49, inlinedVal50, arg$Some$0$16, inlinedVal51;
                                                inlinedVal51 = minimax1[listNth$accessorSymbol](b, 0);
                                                if (inlinedVal51 instanceof minimax1.Some.class) {
                                                  arg$Some$0$16 = inlinedVal51.value;
                                                  inlinedVal50 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$16);
                                                  if (inlinedVal50 === true) {
                                                    let inlinedVal52, inlinedVal53, scrut8, arg$Some$0$17;
                                                    scrut8 = minimax1[find$accessorSymbol](b, 4);
                                                    if (scrut8 instanceof minimax1.Some.class) {
                                                      arg$Some$0$17 = scrut8.value;
                                                      inlinedVal53 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                                      if (inlinedVal53 === true) {
                                                        let fv_tmp6, inlinedVal54;
                                                        fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p4)(b)(8);
                                                        if (fv_tmp6 === true) {
                                                          inlinedVal54 = true;
                                                        } else {
                                                          inlinedVal54 = false;
                                                        }
                                                        inlinedVal52 = inlinedVal54;
                                                      } else {
                                                        inlinedVal52 = false;
                                                      }
                                                    } else if (scrut8 instanceof minimax1.None.class) {
                                                      inlinedVal52 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    inlinedVal49 = inlinedVal52;
                                                  } else {
                                                    inlinedVal49 = false;
                                                  }
                                                } else if (inlinedVal51 instanceof minimax1.None.class) {
                                                  inlinedVal49 = false;
                                                } else {
                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                }
                                                if (inlinedVal49 === false) {
                                                  let inlinedVal52, inlinedVal53, scrut8, arg$Some$0$17;
                                                  scrut8 = minimax1[find$accessorSymbol](b, 2);
                                                  if (scrut8 instanceof minimax1.Some.class) {
                                                    arg$Some$0$17 = scrut8.value;
                                                    inlinedVal53 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                                    if (inlinedVal53 === true) {
                                                      let fv_tmp6, inlinedVal54;
                                                      fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                                      if (fv_tmp6 === true) {
                                                        let fv_tmp7, inlinedVal55;
                                                        fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                                        if (fv_tmp7 === true) {
                                                          inlinedVal55 = true;
                                                        } else {
                                                          inlinedVal55 = false;
                                                        }
                                                        inlinedVal54 = inlinedVal55;
                                                      } else {
                                                        inlinedVal54 = false;
                                                      }
                                                      inlinedVal52 = inlinedVal54;
                                                    } else {
                                                      inlinedVal52 = false;
                                                    }
                                                  } else if (scrut8 instanceof minimax1.None.class) {
                                                    inlinedVal52 = false;
                                                  } else {
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                  }
                                                  if (inlinedVal52 === false) {
                                                    let p5, inlinedVal54, Cons_tail6, inlinedVal55, inlinedVal56, arg$Some$0$18, inlinedVal57;
                                                    p5 = minimax1.O;
                                                    Cons_tail6 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                                    inlinedVal57 = minimax1[listNth$accessorSymbol](b, 0);
                                                    if (inlinedVal57 instanceof minimax1.Some.class) {
                                                      arg$Some$0$18 = inlinedVal57.value;
                                                      inlinedVal56 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$18);
                                                      if (inlinedVal56 === true) {
                                                        let inlinedVal58, inlinedVal59, scrut9, arg$Some$0$19;
                                                        scrut9 = minimax1[find$accessorSymbol](b, 1);
                                                        if (scrut9 instanceof minimax1.Some.class) {
                                                          arg$Some$0$19 = scrut9.value;
                                                          inlinedVal59 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$19);
                                                          if (inlinedVal59 === true) {
                                                            let fv_tmp6, inlinedVal60;
                                                            fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(2);
                                                            if (fv_tmp6 === true) {
                                                              inlinedVal60 = true;
                                                            } else {
                                                              inlinedVal60 = false;
                                                            }
                                                            inlinedVal58 = inlinedVal60;
                                                          } else {
                                                            inlinedVal58 = false;
                                                          }
                                                        } else if (scrut9 instanceof minimax1.None.class) {
                                                          inlinedVal58 = false;
                                                        } else {
                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                        }
                                                        inlinedVal55 = inlinedVal58;
                                                      } else {
                                                        inlinedVal55 = false;
                                                      }
                                                    } else if (inlinedVal57 instanceof minimax1.None.class) {
                                                      inlinedVal55 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    if (inlinedVal55 === false) {
                                                      let inlinedVal58, inlinedVal59, scrut9, arg$Some$0$19;
                                                      scrut9 = minimax1[find$accessorSymbol](b, 3);
                                                      if (scrut9 instanceof minimax1.Some.class) {
                                                        arg$Some$0$19 = scrut9.value;
                                                        inlinedVal59 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$19);
                                                        if (inlinedVal59 === true) {
                                                          let fv_tmp6, inlinedVal60;
                                                          fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                          if (fv_tmp6 === true) {
                                                            let Cons_tail7, fv_p, inlinedVal61;
                                                            Cons_tail7 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                                            fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                            inlinedVal61 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail7, undefined, fv_p);
                                                            inlinedVal60 = inlinedVal61;
                                                          } else {
                                                            inlinedVal60 = false;
                                                          }
                                                          inlinedVal58 = inlinedVal60;
                                                        } else {
                                                          inlinedVal58 = false;
                                                        }
                                                      } else if (scrut9 instanceof minimax1.None.class) {
                                                        inlinedVal58 = false;
                                                      } else {
                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                      }
                                                      if (inlinedVal58 === false) {
                                                        let fv_tmp6, inlinedVal60;
                                                        fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                        if (fv_tmp6 === true) {
                                                          let Cons_tail7, fv_p, inlinedVal61;
                                                          Cons_tail7 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail6);
                                                          fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                          inlinedVal61 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail7, undefined, fv_p);
                                                          inlinedVal60 = inlinedVal61;
                                                        } else {
                                                          inlinedVal60 = false;
                                                        }
                                                        if (inlinedVal60 === false) {
                                                          let Cons_tail7, inlinedVal61, inlinedVal62, arg$Some$0$20, inlinedVal63;
                                                          Cons_tail7 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                                          inlinedVal63 = minimax1[listNth$accessorSymbol](b, 0);
                                                          if (inlinedVal63 instanceof minimax1.Some.class) {
                                                            arg$Some$0$20 = inlinedVal63.value;
                                                            inlinedVal62 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$20);
                                                            if (inlinedVal62 === true) {
                                                              let inlinedVal64, inlinedVal65, scrut10, arg$Some$0$21;
                                                              scrut10 = minimax1[find$accessorSymbol](b, 3);
                                                              if (scrut10 instanceof minimax1.Some.class) {
                                                                arg$Some$0$21 = scrut10.value;
                                                                inlinedVal65 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$21);
                                                                if (inlinedVal65 === true) {
                                                                  let fv_tmp7, inlinedVal66;
                                                                  fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                                  if (fv_tmp7 === true) {
                                                                    inlinedVal66 = true;
                                                                  } else {
                                                                    inlinedVal66 = false;
                                                                  }
                                                                  inlinedVal64 = inlinedVal66;
                                                                } else {
                                                                  inlinedVal64 = false;
                                                                }
                                                              } else if (scrut10 instanceof minimax1.None.class) {
                                                                inlinedVal64 = false;
                                                              } else {
                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                              }
                                                              inlinedVal61 = inlinedVal64;
                                                            } else {
                                                              inlinedVal61 = false;
                                                            }
                                                          } else if (inlinedVal63 instanceof minimax1.None.class) {
                                                            inlinedVal61 = false;
                                                          } else {
                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                          }
                                                          if (inlinedVal61 === false) {
                                                            let inlinedVal64, inlinedVal65, scrut10, arg$Some$0$21;
                                                            scrut10 = minimax1[find$accessorSymbol](b, 1);
                                                            if (scrut10 instanceof minimax1.Some.class) {
                                                              arg$Some$0$21 = scrut10.value;
                                                              inlinedVal65 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$21);
                                                              if (inlinedVal65 === true) {
                                                                let fv_tmp7, inlinedVal66;
                                                                fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                                if (fv_tmp7 === true) {
                                                                  let Cons_tail8, fv_p, inlinedVal67;
                                                                  Cons_tail8 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                                                  fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                                  inlinedVal67 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail8, undefined, fv_p);
                                                                  inlinedVal66 = inlinedVal67;
                                                                } else {
                                                                  inlinedVal66 = false;
                                                                }
                                                                inlinedVal64 = inlinedVal66;
                                                              } else {
                                                                inlinedVal64 = false;
                                                              }
                                                            } else if (scrut10 instanceof minimax1.None.class) {
                                                              inlinedVal64 = false;
                                                            } else {
                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                            }
                                                            if (inlinedVal64 === false) {
                                                              let fv_tmp7, inlinedVal66;
                                                              fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(2);
                                                              if (fv_tmp7 === true) {
                                                                let Cons_tail8, fv_p, inlinedVal67;
                                                                Cons_tail8 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail7);
                                                                fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                                inlinedVal67 = main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail8, undefined, fv_p);
                                                                inlinedVal66 = inlinedVal67;
                                                              } else {
                                                                inlinedVal66 = false;
                                                              }
                                                              if (inlinedVal66 === false) {
                                                                let inlinedVal67, inlinedVal68, arg$Some$0$22, inlinedVal69;
                                                                inlinedVal69 = minimax1[listNth$accessorSymbol](b, 0);
                                                                if (inlinedVal69 instanceof minimax1.Some.class) {
                                                                  arg$Some$0$22 = inlinedVal69.value;
                                                                  inlinedVal68 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$22);
                                                                  if (inlinedVal68 === true) {
                                                                    let inlinedVal70, inlinedVal71, scrut11, arg$Some$0$23;
                                                                    scrut11 = minimax1[find$accessorSymbol](b, 4);
                                                                    if (scrut11 instanceof minimax1.Some.class) {
                                                                      arg$Some$0$23 = scrut11.value;
                                                                      inlinedVal71 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$23);
                                                                      if (inlinedVal71 === true) {
                                                                        let fv_tmp8, inlinedVal72;
                                                                        fv_tmp8 = minimax1[playerOccupies$accessorSymbol](p5)(b)(8);
                                                                        if (fv_tmp8 === true) {
                                                                          inlinedVal72 = true;
                                                                        } else {
                                                                          inlinedVal72 = false;
                                                                        }
                                                                        inlinedVal70 = inlinedVal72;
                                                                      } else {
                                                                        inlinedVal70 = false;
                                                                      }
                                                                    } else if (scrut11 instanceof minimax1.None.class) {
                                                                      inlinedVal70 = false;
                                                                    } else {
                                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                    }
                                                                    inlinedVal67 = inlinedVal70;
                                                                  } else {
                                                                    inlinedVal67 = false;
                                                                  }
                                                                } else if (inlinedVal69 instanceof minimax1.None.class) {
                                                                  inlinedVal67 = false;
                                                                } else {
                                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                }
                                                                if (inlinedVal67 === false) {
                                                                  let inlinedVal70, scrut11, arg$Some$0$23;
                                                                  scrut11 = minimax1[find$accessorSymbol](b, 2);
                                                                  if (scrut11 instanceof minimax1.Some.class) {
                                                                    arg$Some$0$23 = scrut11.value;
                                                                    inlinedVal70 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$23);
                                                                    if (inlinedVal70 === true) {
                                                                      let fv_tmp8;
                                                                      fv_tmp8 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                                      if (fv_tmp8 === true) {
                                                                        let fv_tmp9;
                                                                        fv_tmp9 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                                        if (fv_tmp9 === true) {
                                                                          inlinedVal54 = false;
                                                                        } else {
                                                                          inlinedVal54 = true;
                                                                        }
                                                                      } else {
                                                                        inlinedVal54 = true;
                                                                      }
                                                                    } else {
                                                                      inlinedVal54 = true;
                                                                    }
                                                                  } else if (scrut11 instanceof minimax1.None.class) {
                                                                    inlinedVal54 = true;
                                                                  } else {
                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                  }
                                                                } else {
                                                                  inlinedVal54 = false;
                                                                }
                                                              } else {
                                                                inlinedVal54 = false;
                                                              }
                                                            } else {
                                                              inlinedVal54 = false;
                                                            }
                                                          } else {
                                                            inlinedVal54 = false;
                                                          }
                                                        } else {
                                                          inlinedVal54 = false;
                                                        }
                                                      } else {
                                                        inlinedVal54 = false;
                                                      }
                                                    } else {
                                                      inlinedVal54 = false;
                                                    }
                                                    inlinedVal35 = inlinedVal54;
                                                  } else {
                                                    inlinedVal35 = false;
                                                  }
                                                } else {
                                                  inlinedVal35 = false;
                                                }
                                              } else {
                                                inlinedVal35 = false;
                                              }
                                            } else {
                                              inlinedVal35 = false;
                                            }
                                          } else {
                                            inlinedVal35 = false;
                                          }
                                        } else {
                                          inlinedVal35 = false;
                                        }
                                      } else {
                                        inlinedVal35 = false;
                                      }
                                    } else {
                                      inlinedVal35 = false;
                                    }
                                  } else {
                                    inlinedVal35 = false;
                                  }
                                  inlinedVal = inlinedVal35;
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
    let inlinedVal4, p2, Cons_tail1, inlinedVal5, inlinedVal6, arg$Some$0$1, inlinedVal7;
    p2 = minimax1.X;
    Cons_tail1 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
    inlinedVal7 = minimax1[listNth$accessorSymbol](b, 0);
    if (inlinedVal7 instanceof minimax1.Some.class) {
      arg$Some$0$1 = inlinedVal7.value;
      inlinedVal6 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$1);
      if (inlinedVal6 === true) {
        let inlinedVal8, inlinedVal9, scrut, arg$Some$0$2;
        scrut = minimax1[find$accessorSymbol](b, 1);
        if (scrut instanceof minimax1.Some.class) {
          arg$Some$0$2 = scrut.value;
          inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
          if (inlinedVal9 === true) {
            let fv_tmp, inlinedVal10;
            fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
            if (fv_tmp === true) {
              inlinedVal10 = true;
            } else {
              inlinedVal10 = false;
            }
            inlinedVal8 = inlinedVal10;
          } else {
            inlinedVal8 = false;
          }
        } else if (scrut instanceof minimax1.None.class) {
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
      let inlinedVal8, inlinedVal9, scrut, arg$Some$0$2;
      scrut = minimax1[find$accessorSymbol](b, 3);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$2 = scrut.value;
        inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
        if (inlinedVal9 === true) {
          let fv_tmp, inlinedVal10;
          fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
          if (fv_tmp === true) {
            let Cons_tail2, fv_p, inlinedVal11;
            Cons_tail2 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
            fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
            inlinedVal11 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail2, undefined, fv_p);
            inlinedVal10 = inlinedVal11;
          } else {
            inlinedVal10 = false;
          }
          inlinedVal8 = inlinedVal10;
        } else {
          inlinedVal8 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
        inlinedVal8 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal8 === false) {
        let fv_tmp, inlinedVal10;
        fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
        if (fv_tmp === true) {
          let Cons_tail2, fv_p, inlinedVal11;
          Cons_tail2 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail1);
          fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
          inlinedVal11 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail2, undefined, fv_p);
          inlinedVal10 = inlinedVal11;
        } else {
          inlinedVal10 = false;
        }
        if (inlinedVal10 === false) {
          let Cons_tail2, inlinedVal11, inlinedVal12, arg$Some$0$3, inlinedVal13;
          Cons_tail2 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
          inlinedVal13 = minimax1[listNth$accessorSymbol](b, 0);
          if (inlinedVal13 instanceof minimax1.Some.class) {
            arg$Some$0$3 = inlinedVal13.value;
            inlinedVal12 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$3);
            if (inlinedVal12 === true) {
              let inlinedVal14, inlinedVal15, scrut1, arg$Some$0$4;
              scrut1 = minimax1[find$accessorSymbol](b, 3);
              if (scrut1 instanceof minimax1.Some.class) {
                arg$Some$0$4 = scrut1.value;
                inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
                if (inlinedVal15 === true) {
                  let fv_tmp1, inlinedVal16;
                  fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                  if (fv_tmp1 === true) {
                    inlinedVal16 = true;
                  } else {
                    inlinedVal16 = false;
                  }
                  inlinedVal14 = inlinedVal16;
                } else {
                  inlinedVal14 = false;
                }
              } else if (scrut1 instanceof minimax1.None.class) {
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
            let inlinedVal14, inlinedVal15, scrut1, arg$Some$0$4;
            scrut1 = minimax1[find$accessorSymbol](b, 1);
            if (scrut1 instanceof minimax1.Some.class) {
              arg$Some$0$4 = scrut1.value;
              inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
              if (inlinedVal15 === true) {
                let fv_tmp1, inlinedVal16;
                fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                if (fv_tmp1 === true) {
                  let Cons_tail3, fv_p, inlinedVal17;
                  Cons_tail3 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                  fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                  inlinedVal17 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail3, undefined, fv_p);
                  inlinedVal16 = inlinedVal17;
                } else {
                  inlinedVal16 = false;
                }
                inlinedVal14 = inlinedVal16;
              } else {
                inlinedVal14 = false;
              }
            } else if (scrut1 instanceof minimax1.None.class) {
              inlinedVal14 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal14 === false) {
              let fv_tmp1, inlinedVal16;
              fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
              if (fv_tmp1 === true) {
                let Cons_tail3, fv_p, inlinedVal17;
                Cons_tail3 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail2);
                fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                inlinedVal17 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail3, undefined, fv_p);
                inlinedVal16 = inlinedVal17;
              } else {
                inlinedVal16 = false;
              }
              if (inlinedVal16 === false) {
                let inlinedVal17, inlinedVal18, arg$Some$0$5, inlinedVal19;
                inlinedVal19 = minimax1[listNth$accessorSymbol](b, 0);
                if (inlinedVal19 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = inlinedVal19.value;
                  inlinedVal18 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$5);
                  if (inlinedVal18 === true) {
                    let inlinedVal20, inlinedVal21, scrut2, arg$Some$0$6;
                    scrut2 = minimax1[find$accessorSymbol](b, 4);
                    if (scrut2 instanceof minimax1.Some.class) {
                      arg$Some$0$6 = scrut2.value;
                      inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                      if (inlinedVal21 === true) {
                        let fv_tmp2, inlinedVal22;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(8);
                        if (fv_tmp2 === true) {
                          inlinedVal22 = true;
                        } else {
                          inlinedVal22 = false;
                        }
                        inlinedVal20 = inlinedVal22;
                      } else {
                        inlinedVal20 = false;
                      }
                    } else if (scrut2 instanceof minimax1.None.class) {
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
                  let inlinedVal20, inlinedVal21, scrut2, arg$Some$0$6;
                  scrut2 = minimax1[find$accessorSymbol](b, 2);
                  if (scrut2 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = scrut2.value;
                    inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                    if (inlinedVal21 === true) {
                      let fv_tmp2, inlinedVal22;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                      if (fv_tmp2 === true) {
                        let fv_tmp3, inlinedVal23;
                        fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                        if (fv_tmp3 === true) {
                          inlinedVal23 = true;
                        } else {
                          inlinedVal23 = false;
                        }
                        inlinedVal22 = inlinedVal23;
                      } else {
                        inlinedVal22 = false;
                      }
                      inlinedVal20 = inlinedVal22;
                    } else {
                      inlinedVal20 = false;
                    }
                  } else if (scrut2 instanceof minimax1.None.class) {
                    inlinedVal20 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal20 === false) {
                    let p3, Cons_tail3, inlinedVal22, inlinedVal23, arg$Some$0$7, inlinedVal24;
                    p3 = minimax1.O;
                    Cons_tail3 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                    inlinedVal24 = minimax1[listNth$accessorSymbol](b, 0);
                    if (inlinedVal24 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = inlinedVal24.value;
                      inlinedVal23 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$7);
                      if (inlinedVal23 === true) {
                        let inlinedVal25, inlinedVal26, scrut3, arg$Some$0$8;
                        scrut3 = minimax1[find$accessorSymbol](b, 1);
                        if (scrut3 instanceof minimax1.Some.class) {
                          arg$Some$0$8 = scrut3.value;
                          inlinedVal26 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$8);
                          if (inlinedVal26 === true) {
                            let fv_tmp2, inlinedVal27;
                            fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(2);
                            if (fv_tmp2 === true) {
                              inlinedVal27 = true;
                            } else {
                              inlinedVal27 = false;
                            }
                            inlinedVal25 = inlinedVal27;
                          } else {
                            inlinedVal25 = false;
                          }
                        } else if (scrut3 instanceof minimax1.None.class) {
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
                      let inlinedVal25, inlinedVal26, scrut3, arg$Some$0$8;
                      scrut3 = minimax1[find$accessorSymbol](b, 3);
                      if (scrut3 instanceof minimax1.Some.class) {
                        arg$Some$0$8 = scrut3.value;
                        inlinedVal26 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$8);
                        if (inlinedVal26 === true) {
                          let fv_tmp2, inlinedVal27;
                          fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                          if (fv_tmp2 === true) {
                            let Cons_tail4, fv_p, inlinedVal28;
                            Cons_tail4 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                            fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                            inlinedVal28 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail4, undefined, fv_p);
                            inlinedVal27 = inlinedVal28;
                          } else {
                            inlinedVal27 = false;
                          }
                          inlinedVal25 = inlinedVal27;
                        } else {
                          inlinedVal25 = false;
                        }
                      } else if (scrut3 instanceof minimax1.None.class) {
                        inlinedVal25 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      if (inlinedVal25 === false) {
                        let fv_tmp2, inlinedVal27;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                        if (fv_tmp2 === true) {
                          let Cons_tail4, fv_p, inlinedVal28;
                          Cons_tail4 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail3);
                          fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                          inlinedVal28 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail4, undefined, fv_p);
                          inlinedVal27 = inlinedVal28;
                        } else {
                          inlinedVal27 = false;
                        }
                        if (inlinedVal27 === false) {
                          let Cons_tail4, inlinedVal28, inlinedVal29, arg$Some$0$9, inlinedVal30;
                          Cons_tail4 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                          inlinedVal30 = minimax1[listNth$accessorSymbol](b, 0);
                          if (inlinedVal30 instanceof minimax1.Some.class) {
                            arg$Some$0$9 = inlinedVal30.value;
                            inlinedVal29 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$9);
                            if (inlinedVal29 === true) {
                              let inlinedVal31, inlinedVal32, scrut4, arg$Some$0$10;
                              scrut4 = minimax1[find$accessorSymbol](b, 3);
                              if (scrut4 instanceof minimax1.Some.class) {
                                arg$Some$0$10 = scrut4.value;
                                inlinedVal32 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                                if (inlinedVal32 === true) {
                                  let fv_tmp3, inlinedVal33;
                                  fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                                  if (fv_tmp3 === true) {
                                    inlinedVal33 = true;
                                  } else {
                                    inlinedVal33 = false;
                                  }
                                  inlinedVal31 = inlinedVal33;
                                } else {
                                  inlinedVal31 = false;
                                }
                              } else if (scrut4 instanceof minimax1.None.class) {
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
                            let inlinedVal31, inlinedVal32, scrut4, arg$Some$0$10;
                            scrut4 = minimax1[find$accessorSymbol](b, 1);
                            if (scrut4 instanceof minimax1.Some.class) {
                              arg$Some$0$10 = scrut4.value;
                              inlinedVal32 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                              if (inlinedVal32 === true) {
                                let fv_tmp3, inlinedVal33;
                                fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                                if (fv_tmp3 === true) {
                                  let Cons_tail5, fv_p, inlinedVal34;
                                  Cons_tail5 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                  fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                                  inlinedVal34 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail5, undefined, fv_p);
                                  inlinedVal33 = inlinedVal34;
                                } else {
                                  inlinedVal33 = false;
                                }
                                inlinedVal31 = inlinedVal33;
                              } else {
                                inlinedVal31 = false;
                              }
                            } else if (scrut4 instanceof minimax1.None.class) {
                              inlinedVal31 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            if (inlinedVal31 === false) {
                              let fv_tmp3, inlinedVal33;
                              fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(2);
                              if (fv_tmp3 === true) {
                                let Cons_tail5, fv_p, inlinedVal34;
                                Cons_tail5 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail4);
                                fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                                inlinedVal34 = main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail5, undefined, fv_p);
                                inlinedVal33 = inlinedVal34;
                              } else {
                                inlinedVal33 = false;
                              }
                              if (inlinedVal33 === false) {
                                let inlinedVal34, inlinedVal35, arg$Some$0$11, inlinedVal36;
                                inlinedVal36 = minimax1[listNth$accessorSymbol](b, 0);
                                if (inlinedVal36 instanceof minimax1.Some.class) {
                                  arg$Some$0$11 = inlinedVal36.value;
                                  inlinedVal35 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$11);
                                  if (inlinedVal35 === true) {
                                    let inlinedVal37, inlinedVal38, scrut5, arg$Some$0$12;
                                    scrut5 = minimax1[find$accessorSymbol](b, 4);
                                    if (scrut5 instanceof minimax1.Some.class) {
                                      arg$Some$0$12 = scrut5.value;
                                      inlinedVal38 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                                      if (inlinedVal38 === true) {
                                        let fv_tmp4, inlinedVal39;
                                        fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p3)(b)(8);
                                        if (fv_tmp4 === true) {
                                          inlinedVal39 = true;
                                        } else {
                                          inlinedVal39 = false;
                                        }
                                        inlinedVal37 = inlinedVal39;
                                      } else {
                                        inlinedVal37 = false;
                                      }
                                    } else if (scrut5 instanceof minimax1.None.class) {
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
                                  let inlinedVal37, scrut5, arg$Some$0$12;
                                  scrut5 = minimax1[find$accessorSymbol](b, 2);
                                  if (scrut5 instanceof minimax1.Some.class) {
                                    arg$Some$0$12 = scrut5.value;
                                    inlinedVal37 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                                    if (inlinedVal37 === true) {
                                      let fv_tmp4;
                                      fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                                      if (fv_tmp4 === true) {
                                        let fv_tmp5;
                                        fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                                        if (fv_tmp5 === true) {
                                          inlinedVal4 = -1;
                                        } else {
                                          inlinedVal4 = 0;
                                        }
                                      } else {
                                        inlinedVal4 = 0;
                                      }
                                    } else {
                                      inlinedVal4 = 0;
                                    }
                                  } else if (scrut5 instanceof minimax1.None.class) {
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
      let fv_b, fv_minimax, fv_p, fv_tmp, fv_transTable, fv_tmp1, fv_tmp2, inlinedVal5, inlinedVal6, f, g, f1, inlinedVal7, tmp2, tmp3, inlinedVal8, minimax3, n, m, acc, inlinedVal9;
      fv_b = b;
      fv_minimax = minimax2;
      fv_p = p;
      fv_transTable = transTable;
      if (p instanceof fv_minimax.X.class) {
        inlinedVal5 = minimax2.O;
      } else if (p instanceof fv_minimax.O.class) {
        inlinedVal5 = minimax2.X;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      fv_tmp = main_gameTreeWithTT_minimaxTT$minimaxTT(minimax2, transTable, inlinedVal5);
      tmp3 = minimax1[moveTo$accessorSymbol](b, p);
      minimax3 = minimax1;
      n = 0;
      m = b;
      acc = main_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Nil();
      inlinedLbl: {
        loopLabel: while (true) {
          let arg$Cons$0$, arg$Cons$1$, tmp4, tmp5, tmp6;
          if (m instanceof minimax3.Nil.class) {
            let acc1, inlinedVal10;
            acc1 = main_gameTreeWithTT_minimaxTT_successors_map$l_Nil();
            inlinedVal10 = acc(acc1);
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
              tmp6 = main_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Cons(n, acc);
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
      inlinedVal8 = inlinedVal9(undefined, tmp3);
      inlinedVal6 = inlinedVal8(undefined, fv_tmp);
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
gameTreeWithTT_minimaxTT$minimaxTT = function gameTreeWithTT_minimaxTT$minimaxTT(minimax2, transTable, p) {
  return (b) => {
    return gameTreeWithTT_minimaxTT$minimaxTT$worker(minimax2, transTable, p, b)
  }
};
gameTreeWithTT_minimaxTT$minimaxTT$worker = function gameTreeWithTT_minimaxTT$minimaxTT$worker(minimax2, transTable, p, b) {
  let tmp, inlinedVal, p1, Cons_tail, inlinedVal1, inlinedVal2, arg$Some$0$, inlinedVal3;
  p1 = minimax1.X;
  Cons_tail = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
  inlinedVal3 = minimax1[listNth$accessorSymbol](b, 0);
  if (inlinedVal3 instanceof minimax1.Some.class) {
    arg$Some$0$ = inlinedVal3.value;
    inlinedVal2 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$);
    if (inlinedVal2 === true) {
      let inlinedVal4, inlinedVal5, scrut, arg$Some$0$1;
      scrut = minimax1[find$accessorSymbol](b, 1);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$1 = scrut.value;
        inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
        if (inlinedVal5 === true) {
          let fv_tmp, inlinedVal6;
          fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(2);
          if (fv_tmp === true) {
            inlinedVal6 = true;
          } else {
            inlinedVal6 = false;
          }
          inlinedVal4 = inlinedVal6;
        } else {
          inlinedVal4 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
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
    let inlinedVal4, inlinedVal5, scrut, arg$Some$0$1;
    scrut = minimax1[find$accessorSymbol](b, 3);
    if (scrut instanceof minimax1.Some.class) {
      arg$Some$0$1 = scrut.value;
      inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
      if (inlinedVal5 === true) {
        let fv_tmp, inlinedVal6;
        fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
        if (fv_tmp === true) {
          let Cons_tail1, fv_p, inlinedVal7;
          Cons_tail1 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
          fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
          inlinedVal7 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail1, undefined, fv_p);
          inlinedVal6 = inlinedVal7;
        } else {
          inlinedVal6 = false;
        }
        inlinedVal4 = inlinedVal6;
      } else {
        inlinedVal4 = false;
      }
    } else if (scrut instanceof minimax1.None.class) {
      inlinedVal4 = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal4 === false) {
      let fv_tmp, inlinedVal6;
      fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
      if (fv_tmp === true) {
        let Cons_tail1, fv_p, inlinedVal7;
        Cons_tail1 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail);
        fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
        inlinedVal7 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail1, undefined, fv_p);
        inlinedVal6 = inlinedVal7;
      } else {
        inlinedVal6 = false;
      }
      if (inlinedVal6 === false) {
        let Cons_tail1, inlinedVal7, inlinedVal8, arg$Some$0$2, inlinedVal9;
        Cons_tail1 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
        inlinedVal9 = minimax1[listNth$accessorSymbol](b, 0);
        if (inlinedVal9 instanceof minimax1.Some.class) {
          arg$Some$0$2 = inlinedVal9.value;
          inlinedVal8 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$2);
          if (inlinedVal8 === true) {
            let inlinedVal10, inlinedVal11, scrut1, arg$Some$0$3;
            scrut1 = minimax1[find$accessorSymbol](b, 3);
            if (scrut1 instanceof minimax1.Some.class) {
              arg$Some$0$3 = scrut1.value;
              inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
              if (inlinedVal11 === true) {
                let fv_tmp1, inlinedVal12;
                fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
                if (fv_tmp1 === true) {
                  inlinedVal12 = true;
                } else {
                  inlinedVal12 = false;
                }
                inlinedVal10 = inlinedVal12;
              } else {
                inlinedVal10 = false;
              }
            } else if (scrut1 instanceof minimax1.None.class) {
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
          let inlinedVal10, inlinedVal11, scrut1, arg$Some$0$3;
          scrut1 = minimax1[find$accessorSymbol](b, 1);
          if (scrut1 instanceof minimax1.Some.class) {
            arg$Some$0$3 = scrut1.value;
            inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
            if (inlinedVal11 === true) {
              let fv_tmp1, inlinedVal12;
              fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
              if (fv_tmp1 === true) {
                let Cons_tail2, fv_p, inlinedVal13;
                Cons_tail2 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
                inlinedVal13 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail2, undefined, fv_p);
                inlinedVal12 = inlinedVal13;
              } else {
                inlinedVal12 = false;
              }
              inlinedVal10 = inlinedVal12;
            } else {
              inlinedVal10 = false;
            }
          } else if (scrut1 instanceof minimax1.None.class) {
            inlinedVal10 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          if (inlinedVal10 === false) {
            let fv_tmp1, inlinedVal12;
            fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(2);
            if (fv_tmp1 === true) {
              let Cons_tail2, fv_p, inlinedVal13;
              Cons_tail2 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail1);
              fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
              inlinedVal13 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail2, undefined, fv_p);
              inlinedVal12 = inlinedVal13;
            } else {
              inlinedVal12 = false;
            }
            if (inlinedVal12 === false) {
              let inlinedVal13, inlinedVal14, arg$Some$0$4, inlinedVal15;
              inlinedVal15 = minimax1[listNth$accessorSymbol](b, 0);
              if (inlinedVal15 instanceof minimax1.Some.class) {
                arg$Some$0$4 = inlinedVal15.value;
                inlinedVal14 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$4);
                if (inlinedVal14 === true) {
                  let inlinedVal16, inlinedVal17, scrut2, arg$Some$0$5;
                  scrut2 = minimax1[find$accessorSymbol](b, 4);
                  if (scrut2 instanceof minimax1.Some.class) {
                    arg$Some$0$5 = scrut2.value;
                    inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                    if (inlinedVal17 === true) {
                      let fv_tmp2, inlinedVal18;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p1)(b)(8);
                      if (fv_tmp2 === true) {
                        inlinedVal18 = true;
                      } else {
                        inlinedVal18 = false;
                      }
                      inlinedVal16 = inlinedVal18;
                    } else {
                      inlinedVal16 = false;
                    }
                  } else if (scrut2 instanceof minimax1.None.class) {
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
                let inlinedVal16, inlinedVal17, scrut2, arg$Some$0$5;
                scrut2 = minimax1[find$accessorSymbol](b, 2);
                if (scrut2 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = scrut2.value;
                  inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                  if (inlinedVal17 === true) {
                    let fv_tmp2, inlinedVal18;
                    fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
                    if (fv_tmp2 === true) {
                      let fv_tmp3, inlinedVal19;
                      fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
                      if (fv_tmp3 === true) {
                        inlinedVal19 = true;
                      } else {
                        inlinedVal19 = false;
                      }
                      inlinedVal18 = inlinedVal19;
                    } else {
                      inlinedVal18 = false;
                    }
                    inlinedVal16 = inlinedVal18;
                  } else {
                    inlinedVal16 = false;
                  }
                } else if (scrut2 instanceof minimax1.None.class) {
                  inlinedVal16 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal16 === false) {
                  let p2, Cons_tail2, inlinedVal18, inlinedVal19, arg$Some$0$6, inlinedVal20;
                  p2 = minimax1.O;
                  Cons_tail2 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                  inlinedVal20 = minimax1[listNth$accessorSymbol](b, 0);
                  if (inlinedVal20 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = inlinedVal20.value;
                    inlinedVal19 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                    if (inlinedVal19 === true) {
                      let inlinedVal21, inlinedVal22, scrut3, arg$Some$0$7;
                      scrut3 = minimax1[find$accessorSymbol](b, 1);
                      if (scrut3 instanceof minimax1.Some.class) {
                        arg$Some$0$7 = scrut3.value;
                        inlinedVal22 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                        if (inlinedVal22 === true) {
                          let fv_tmp2, inlinedVal23;
                          fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
                          if (fv_tmp2 === true) {
                            inlinedVal23 = true;
                          } else {
                            inlinedVal23 = false;
                          }
                          inlinedVal21 = inlinedVal23;
                        } else {
                          inlinedVal21 = false;
                        }
                      } else if (scrut3 instanceof minimax1.None.class) {
                        inlinedVal21 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal18 = inlinedVal21;
                    } else {
                      inlinedVal18 = false;
                    }
                  } else if (inlinedVal20 instanceof minimax1.None.class) {
                    inlinedVal18 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal18 === false) {
                    let inlinedVal21, inlinedVal22, scrut3, arg$Some$0$7;
                    scrut3 = minimax1[find$accessorSymbol](b, 3);
                    if (scrut3 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = scrut3.value;
                      inlinedVal22 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                      if (inlinedVal22 === true) {
                        let fv_tmp2, inlinedVal23;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                        if (fv_tmp2 === true) {
                          let Cons_tail3, fv_p, inlinedVal24;
                          Cons_tail3 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                          fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                          inlinedVal24 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail3, undefined, fv_p);
                          inlinedVal23 = inlinedVal24;
                        } else {
                          inlinedVal23 = false;
                        }
                        inlinedVal21 = inlinedVal23;
                      } else {
                        inlinedVal21 = false;
                      }
                    } else if (scrut3 instanceof minimax1.None.class) {
                      inlinedVal21 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    if (inlinedVal21 === false) {
                      let fv_tmp2, inlinedVal23;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                      if (fv_tmp2 === true) {
                        let Cons_tail3, fv_p, inlinedVal24;
                        Cons_tail3 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail2);
                        fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                        inlinedVal24 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail3, undefined, fv_p);
                        inlinedVal23 = inlinedVal24;
                      } else {
                        inlinedVal23 = false;
                      }
                      if (inlinedVal23 === false) {
                        let Cons_tail3, inlinedVal24, inlinedVal25, arg$Some$0$8, inlinedVal26;
                        Cons_tail3 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                        inlinedVal26 = minimax1[listNth$accessorSymbol](b, 0);
                        if (inlinedVal26 instanceof minimax1.Some.class) {
                          arg$Some$0$8 = inlinedVal26.value;
                          inlinedVal25 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$8);
                          if (inlinedVal25 === true) {
                            let inlinedVal27, inlinedVal28, scrut4, arg$Some$0$9;
                            scrut4 = minimax1[find$accessorSymbol](b, 3);
                            if (scrut4 instanceof minimax1.Some.class) {
                              arg$Some$0$9 = scrut4.value;
                              inlinedVal28 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                              if (inlinedVal28 === true) {
                                let fv_tmp3, inlinedVal29;
                                fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                                if (fv_tmp3 === true) {
                                  inlinedVal29 = true;
                                } else {
                                  inlinedVal29 = false;
                                }
                                inlinedVal27 = inlinedVal29;
                              } else {
                                inlinedVal27 = false;
                              }
                            } else if (scrut4 instanceof minimax1.None.class) {
                              inlinedVal27 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            inlinedVal24 = inlinedVal27;
                          } else {
                            inlinedVal24 = false;
                          }
                        } else if (inlinedVal26 instanceof minimax1.None.class) {
                          inlinedVal24 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        if (inlinedVal24 === false) {
                          let inlinedVal27, inlinedVal28, scrut4, arg$Some$0$9;
                          scrut4 = minimax1[find$accessorSymbol](b, 1);
                          if (scrut4 instanceof minimax1.Some.class) {
                            arg$Some$0$9 = scrut4.value;
                            inlinedVal28 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                            if (inlinedVal28 === true) {
                              let fv_tmp3, inlinedVal29;
                              fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                              if (fv_tmp3 === true) {
                                let Cons_tail4, fv_p, inlinedVal30;
                                Cons_tail4 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                                inlinedVal30 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail4, undefined, fv_p);
                                inlinedVal29 = inlinedVal30;
                              } else {
                                inlinedVal29 = false;
                              }
                              inlinedVal27 = inlinedVal29;
                            } else {
                              inlinedVal27 = false;
                            }
                          } else if (scrut4 instanceof minimax1.None.class) {
                            inlinedVal27 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          if (inlinedVal27 === false) {
                            let fv_tmp3, inlinedVal29;
                            fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
                            if (fv_tmp3 === true) {
                              let Cons_tail4, fv_p, inlinedVal30;
                              Cons_tail4 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail3);
                              fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                              inlinedVal30 = gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail4, undefined, fv_p);
                              inlinedVal29 = inlinedVal30;
                            } else {
                              inlinedVal29 = false;
                            }
                            if (inlinedVal29 === false) {
                              let inlinedVal30, inlinedVal31, arg$Some$0$10, inlinedVal32;
                              inlinedVal32 = minimax1[listNth$accessorSymbol](b, 0);
                              if (inlinedVal32 instanceof minimax1.Some.class) {
                                arg$Some$0$10 = inlinedVal32.value;
                                inlinedVal31 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$10);
                                if (inlinedVal31 === true) {
                                  let inlinedVal33, inlinedVal34, scrut5, arg$Some$0$11;
                                  scrut5 = minimax1[find$accessorSymbol](b, 4);
                                  if (scrut5 instanceof minimax1.Some.class) {
                                    arg$Some$0$11 = scrut5.value;
                                    inlinedVal34 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                                    if (inlinedVal34 === true) {
                                      let fv_tmp4, inlinedVal35;
                                      fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p2)(b)(8);
                                      if (fv_tmp4 === true) {
                                        inlinedVal35 = true;
                                      } else {
                                        inlinedVal35 = false;
                                      }
                                      inlinedVal33 = inlinedVal35;
                                    } else {
                                      inlinedVal33 = false;
                                    }
                                  } else if (scrut5 instanceof minimax1.None.class) {
                                    inlinedVal33 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  inlinedVal30 = inlinedVal33;
                                } else {
                                  inlinedVal30 = false;
                                }
                              } else if (inlinedVal32 instanceof minimax1.None.class) {
                                inlinedVal30 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              if (inlinedVal30 === false) {
                                let inlinedVal33, inlinedVal34, scrut5, arg$Some$0$11;
                                scrut5 = minimax1[find$accessorSymbol](b, 2);
                                if (scrut5 instanceof minimax1.Some.class) {
                                  arg$Some$0$11 = scrut5.value;
                                  inlinedVal34 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                                  if (inlinedVal34 === true) {
                                    let fv_tmp4;
                                    fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                                    if (fv_tmp4 === true) {
                                      let fv_tmp5;
                                      fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                                      if (fv_tmp5 === true) {
                                        inlinedVal33 = true;
                                      } else {
                                        inlinedVal33 = false;
                                      }
                                    } else {
                                      inlinedVal33 = false;
                                    }
                                  } else {
                                    inlinedVal33 = false;
                                  }
                                } else if (scrut5 instanceof minimax1.None.class) {
                                  inlinedVal33 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                if (inlinedVal33 === false) {
                                  let inlinedVal35, p3, inlinedVal36;
                                  p3 = minimax1[isSome$accessorSymbol];
                                  inlinedVal36 = minimax1[listAll$tailrec$accessorSymbol](p3, b);
                                  if (inlinedVal36 === true) {
                                    let p4, Cons_tail4, inlinedVal37, inlinedVal38, arg$Some$0$12, inlinedVal39;
                                    p4 = minimax1.X;
                                    Cons_tail4 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                    inlinedVal39 = minimax1[listNth$accessorSymbol](b, 0);
                                    if (inlinedVal39 instanceof minimax1.Some.class) {
                                      arg$Some$0$12 = inlinedVal39.value;
                                      inlinedVal38 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$12);
                                      if (inlinedVal38 === true) {
                                        let inlinedVal40, inlinedVal41, scrut6, arg$Some$0$13;
                                        scrut6 = minimax1[find$accessorSymbol](b, 1);
                                        if (scrut6 instanceof minimax1.Some.class) {
                                          arg$Some$0$13 = scrut6.value;
                                          inlinedVal41 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$13);
                                          if (inlinedVal41 === true) {
                                            let fv_tmp4, inlinedVal42;
                                            fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(2);
                                            if (fv_tmp4 === true) {
                                              inlinedVal42 = true;
                                            } else {
                                              inlinedVal42 = false;
                                            }
                                            inlinedVal40 = inlinedVal42;
                                          } else {
                                            inlinedVal40 = false;
                                          }
                                        } else if (scrut6 instanceof minimax1.None.class) {
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
                                      let inlinedVal40, inlinedVal41, scrut6, arg$Some$0$13;
                                      scrut6 = minimax1[find$accessorSymbol](b, 3);
                                      if (scrut6 instanceof minimax1.Some.class) {
                                        arg$Some$0$13 = scrut6.value;
                                        inlinedVal41 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$13);
                                        if (inlinedVal41 === true) {
                                          let fv_tmp4, inlinedVal42;
                                          fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                          if (fv_tmp4 === true) {
                                            let Cons_tail5, fv_p, inlinedVal43;
                                            Cons_tail5 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                            fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                            inlinedVal43 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail5, undefined, fv_p);
                                            inlinedVal42 = inlinedVal43;
                                          } else {
                                            inlinedVal42 = false;
                                          }
                                          inlinedVal40 = inlinedVal42;
                                        } else {
                                          inlinedVal40 = false;
                                        }
                                      } else if (scrut6 instanceof minimax1.None.class) {
                                        inlinedVal40 = false;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                      if (inlinedVal40 === false) {
                                        let fv_tmp4, inlinedVal42;
                                        fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                        if (fv_tmp4 === true) {
                                          let Cons_tail5, fv_p, inlinedVal43;
                                          Cons_tail5 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail4);
                                          fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                          inlinedVal43 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail5, undefined, fv_p);
                                          inlinedVal42 = inlinedVal43;
                                        } else {
                                          inlinedVal42 = false;
                                        }
                                        if (inlinedVal42 === false) {
                                          let Cons_tail5, inlinedVal43, inlinedVal44, arg$Some$0$14, inlinedVal45;
                                          Cons_tail5 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                          inlinedVal45 = minimax1[listNth$accessorSymbol](b, 0);
                                          if (inlinedVal45 instanceof minimax1.Some.class) {
                                            arg$Some$0$14 = inlinedVal45.value;
                                            inlinedVal44 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$14);
                                            if (inlinedVal44 === true) {
                                              let inlinedVal46, inlinedVal47, scrut7, arg$Some$0$15;
                                              scrut7 = minimax1[find$accessorSymbol](b, 3);
                                              if (scrut7 instanceof minimax1.Some.class) {
                                                arg$Some$0$15 = scrut7.value;
                                                inlinedVal47 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$15);
                                                if (inlinedVal47 === true) {
                                                  let fv_tmp5, inlinedVal48;
                                                  fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                                  if (fv_tmp5 === true) {
                                                    inlinedVal48 = true;
                                                  } else {
                                                    inlinedVal48 = false;
                                                  }
                                                  inlinedVal46 = inlinedVal48;
                                                } else {
                                                  inlinedVal46 = false;
                                                }
                                              } else if (scrut7 instanceof minimax1.None.class) {
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
                                            let inlinedVal46, inlinedVal47, scrut7, arg$Some$0$15;
                                            scrut7 = minimax1[find$accessorSymbol](b, 1);
                                            if (scrut7 instanceof minimax1.Some.class) {
                                              arg$Some$0$15 = scrut7.value;
                                              inlinedVal47 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$15);
                                              if (inlinedVal47 === true) {
                                                let fv_tmp5, inlinedVal48;
                                                fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                                if (fv_tmp5 === true) {
                                                  let Cons_tail6, fv_p, inlinedVal49;
                                                  Cons_tail6 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                                  fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                                  inlinedVal49 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail6, undefined, fv_p);
                                                  inlinedVal48 = inlinedVal49;
                                                } else {
                                                  inlinedVal48 = false;
                                                }
                                                inlinedVal46 = inlinedVal48;
                                              } else {
                                                inlinedVal46 = false;
                                              }
                                            } else if (scrut7 instanceof minimax1.None.class) {
                                              inlinedVal46 = false;
                                            } else {
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                            }
                                            if (inlinedVal46 === false) {
                                              let fv_tmp5, inlinedVal48;
                                              fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(2);
                                              if (fv_tmp5 === true) {
                                                let Cons_tail6, fv_p, inlinedVal49;
                                                Cons_tail6 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail5);
                                                fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                                inlinedVal49 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail6, undefined, fv_p);
                                                inlinedVal48 = inlinedVal49;
                                              } else {
                                                inlinedVal48 = false;
                                              }
                                              if (inlinedVal48 === false) {
                                                let inlinedVal49, inlinedVal50, arg$Some$0$16, inlinedVal51;
                                                inlinedVal51 = minimax1[listNth$accessorSymbol](b, 0);
                                                if (inlinedVal51 instanceof minimax1.Some.class) {
                                                  arg$Some$0$16 = inlinedVal51.value;
                                                  inlinedVal50 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$16);
                                                  if (inlinedVal50 === true) {
                                                    let inlinedVal52, inlinedVal53, scrut8, arg$Some$0$17;
                                                    scrut8 = minimax1[find$accessorSymbol](b, 4);
                                                    if (scrut8 instanceof minimax1.Some.class) {
                                                      arg$Some$0$17 = scrut8.value;
                                                      inlinedVal53 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                                      if (inlinedVal53 === true) {
                                                        let fv_tmp6, inlinedVal54;
                                                        fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p4)(b)(8);
                                                        if (fv_tmp6 === true) {
                                                          inlinedVal54 = true;
                                                        } else {
                                                          inlinedVal54 = false;
                                                        }
                                                        inlinedVal52 = inlinedVal54;
                                                      } else {
                                                        inlinedVal52 = false;
                                                      }
                                                    } else if (scrut8 instanceof minimax1.None.class) {
                                                      inlinedVal52 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    inlinedVal49 = inlinedVal52;
                                                  } else {
                                                    inlinedVal49 = false;
                                                  }
                                                } else if (inlinedVal51 instanceof minimax1.None.class) {
                                                  inlinedVal49 = false;
                                                } else {
                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                }
                                                if (inlinedVal49 === false) {
                                                  let inlinedVal52, inlinedVal53, scrut8, arg$Some$0$17;
                                                  scrut8 = minimax1[find$accessorSymbol](b, 2);
                                                  if (scrut8 instanceof minimax1.Some.class) {
                                                    arg$Some$0$17 = scrut8.value;
                                                    inlinedVal53 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                                    if (inlinedVal53 === true) {
                                                      let fv_tmp6, inlinedVal54;
                                                      fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                                      if (fv_tmp6 === true) {
                                                        let fv_tmp7, inlinedVal55;
                                                        fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                                        if (fv_tmp7 === true) {
                                                          inlinedVal55 = true;
                                                        } else {
                                                          inlinedVal55 = false;
                                                        }
                                                        inlinedVal54 = inlinedVal55;
                                                      } else {
                                                        inlinedVal54 = false;
                                                      }
                                                      inlinedVal52 = inlinedVal54;
                                                    } else {
                                                      inlinedVal52 = false;
                                                    }
                                                  } else if (scrut8 instanceof minimax1.None.class) {
                                                    inlinedVal52 = false;
                                                  } else {
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                  }
                                                  if (inlinedVal52 === false) {
                                                    let p5, inlinedVal54, Cons_tail6, inlinedVal55, inlinedVal56, arg$Some$0$18, inlinedVal57;
                                                    p5 = minimax1.O;
                                                    Cons_tail6 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                                    inlinedVal57 = minimax1[listNth$accessorSymbol](b, 0);
                                                    if (inlinedVal57 instanceof minimax1.Some.class) {
                                                      arg$Some$0$18 = inlinedVal57.value;
                                                      inlinedVal56 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$18);
                                                      if (inlinedVal56 === true) {
                                                        let inlinedVal58, inlinedVal59, scrut9, arg$Some$0$19;
                                                        scrut9 = minimax1[find$accessorSymbol](b, 1);
                                                        if (scrut9 instanceof minimax1.Some.class) {
                                                          arg$Some$0$19 = scrut9.value;
                                                          inlinedVal59 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$19);
                                                          if (inlinedVal59 === true) {
                                                            let fv_tmp6, inlinedVal60;
                                                            fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(2);
                                                            if (fv_tmp6 === true) {
                                                              inlinedVal60 = true;
                                                            } else {
                                                              inlinedVal60 = false;
                                                            }
                                                            inlinedVal58 = inlinedVal60;
                                                          } else {
                                                            inlinedVal58 = false;
                                                          }
                                                        } else if (scrut9 instanceof minimax1.None.class) {
                                                          inlinedVal58 = false;
                                                        } else {
                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                        }
                                                        inlinedVal55 = inlinedVal58;
                                                      } else {
                                                        inlinedVal55 = false;
                                                      }
                                                    } else if (inlinedVal57 instanceof minimax1.None.class) {
                                                      inlinedVal55 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    if (inlinedVal55 === false) {
                                                      let inlinedVal58, inlinedVal59, scrut9, arg$Some$0$19;
                                                      scrut9 = minimax1[find$accessorSymbol](b, 3);
                                                      if (scrut9 instanceof minimax1.Some.class) {
                                                        arg$Some$0$19 = scrut9.value;
                                                        inlinedVal59 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$19);
                                                        if (inlinedVal59 === true) {
                                                          let fv_tmp6, inlinedVal60;
                                                          fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                          if (fv_tmp6 === true) {
                                                            let Cons_tail7, fv_p, inlinedVal61;
                                                            Cons_tail7 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                                            fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                            inlinedVal61 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail7, undefined, fv_p);
                                                            inlinedVal60 = inlinedVal61;
                                                          } else {
                                                            inlinedVal60 = false;
                                                          }
                                                          inlinedVal58 = inlinedVal60;
                                                        } else {
                                                          inlinedVal58 = false;
                                                        }
                                                      } else if (scrut9 instanceof minimax1.None.class) {
                                                        inlinedVal58 = false;
                                                      } else {
                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                      }
                                                      if (inlinedVal58 === false) {
                                                        let fv_tmp6, inlinedVal60;
                                                        fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                        if (fv_tmp6 === true) {
                                                          let Cons_tail7, fv_p, inlinedVal61;
                                                          Cons_tail7 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail6);
                                                          fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                          inlinedVal61 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail7, undefined, fv_p);
                                                          inlinedVal60 = inlinedVal61;
                                                        } else {
                                                          inlinedVal60 = false;
                                                        }
                                                        if (inlinedVal60 === false) {
                                                          let Cons_tail7, inlinedVal61, inlinedVal62, arg$Some$0$20, inlinedVal63;
                                                          Cons_tail7 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                                          inlinedVal63 = minimax1[listNth$accessorSymbol](b, 0);
                                                          if (inlinedVal63 instanceof minimax1.Some.class) {
                                                            arg$Some$0$20 = inlinedVal63.value;
                                                            inlinedVal62 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$20);
                                                            if (inlinedVal62 === true) {
                                                              let inlinedVal64, inlinedVal65, scrut10, arg$Some$0$21;
                                                              scrut10 = minimax1[find$accessorSymbol](b, 3);
                                                              if (scrut10 instanceof minimax1.Some.class) {
                                                                arg$Some$0$21 = scrut10.value;
                                                                inlinedVal65 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$21);
                                                                if (inlinedVal65 === true) {
                                                                  let fv_tmp7, inlinedVal66;
                                                                  fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                                  if (fv_tmp7 === true) {
                                                                    inlinedVal66 = true;
                                                                  } else {
                                                                    inlinedVal66 = false;
                                                                  }
                                                                  inlinedVal64 = inlinedVal66;
                                                                } else {
                                                                  inlinedVal64 = false;
                                                                }
                                                              } else if (scrut10 instanceof minimax1.None.class) {
                                                                inlinedVal64 = false;
                                                              } else {
                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                              }
                                                              inlinedVal61 = inlinedVal64;
                                                            } else {
                                                              inlinedVal61 = false;
                                                            }
                                                          } else if (inlinedVal63 instanceof minimax1.None.class) {
                                                            inlinedVal61 = false;
                                                          } else {
                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                          }
                                                          if (inlinedVal61 === false) {
                                                            let inlinedVal64, inlinedVal65, scrut10, arg$Some$0$21;
                                                            scrut10 = minimax1[find$accessorSymbol](b, 1);
                                                            if (scrut10 instanceof minimax1.Some.class) {
                                                              arg$Some$0$21 = scrut10.value;
                                                              inlinedVal65 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$21);
                                                              if (inlinedVal65 === true) {
                                                                let fv_tmp7, inlinedVal66;
                                                                fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                                if (fv_tmp7 === true) {
                                                                  let Cons_tail8, fv_p, inlinedVal67;
                                                                  Cons_tail8 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                                                  fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                                  inlinedVal67 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail8, undefined, fv_p);
                                                                  inlinedVal66 = inlinedVal67;
                                                                } else {
                                                                  inlinedVal66 = false;
                                                                }
                                                                inlinedVal64 = inlinedVal66;
                                                              } else {
                                                                inlinedVal64 = false;
                                                              }
                                                            } else if (scrut10 instanceof minimax1.None.class) {
                                                              inlinedVal64 = false;
                                                            } else {
                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                            }
                                                            if (inlinedVal64 === false) {
                                                              let fv_tmp7, inlinedVal66;
                                                              fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(2);
                                                              if (fv_tmp7 === true) {
                                                                let Cons_tail8, fv_p, inlinedVal67;
                                                                Cons_tail8 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail7);
                                                                fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                                inlinedVal67 = gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail8, undefined, fv_p);
                                                                inlinedVal66 = inlinedVal67;
                                                              } else {
                                                                inlinedVal66 = false;
                                                              }
                                                              if (inlinedVal66 === false) {
                                                                let inlinedVal67, inlinedVal68, arg$Some$0$22, inlinedVal69;
                                                                inlinedVal69 = minimax1[listNth$accessorSymbol](b, 0);
                                                                if (inlinedVal69 instanceof minimax1.Some.class) {
                                                                  arg$Some$0$22 = inlinedVal69.value;
                                                                  inlinedVal68 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$22);
                                                                  if (inlinedVal68 === true) {
                                                                    let inlinedVal70, inlinedVal71, scrut11, arg$Some$0$23;
                                                                    scrut11 = minimax1[find$accessorSymbol](b, 4);
                                                                    if (scrut11 instanceof minimax1.Some.class) {
                                                                      arg$Some$0$23 = scrut11.value;
                                                                      inlinedVal71 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$23);
                                                                      if (inlinedVal71 === true) {
                                                                        let fv_tmp8, inlinedVal72;
                                                                        fv_tmp8 = minimax1[playerOccupies$accessorSymbol](p5)(b)(8);
                                                                        if (fv_tmp8 === true) {
                                                                          inlinedVal72 = true;
                                                                        } else {
                                                                          inlinedVal72 = false;
                                                                        }
                                                                        inlinedVal70 = inlinedVal72;
                                                                      } else {
                                                                        inlinedVal70 = false;
                                                                      }
                                                                    } else if (scrut11 instanceof minimax1.None.class) {
                                                                      inlinedVal70 = false;
                                                                    } else {
                                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                    }
                                                                    inlinedVal67 = inlinedVal70;
                                                                  } else {
                                                                    inlinedVal67 = false;
                                                                  }
                                                                } else if (inlinedVal69 instanceof minimax1.None.class) {
                                                                  inlinedVal67 = false;
                                                                } else {
                                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                }
                                                                if (inlinedVal67 === false) {
                                                                  let inlinedVal70, scrut11, arg$Some$0$23;
                                                                  scrut11 = minimax1[find$accessorSymbol](b, 2);
                                                                  if (scrut11 instanceof minimax1.Some.class) {
                                                                    arg$Some$0$23 = scrut11.value;
                                                                    inlinedVal70 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$23);
                                                                    if (inlinedVal70 === true) {
                                                                      let fv_tmp8;
                                                                      fv_tmp8 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                                      if (fv_tmp8 === true) {
                                                                        let fv_tmp9;
                                                                        fv_tmp9 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                                        if (fv_tmp9 === true) {
                                                                          inlinedVal54 = false;
                                                                        } else {
                                                                          inlinedVal54 = true;
                                                                        }
                                                                      } else {
                                                                        inlinedVal54 = true;
                                                                      }
                                                                    } else {
                                                                      inlinedVal54 = true;
                                                                    }
                                                                  } else if (scrut11 instanceof minimax1.None.class) {
                                                                    inlinedVal54 = true;
                                                                  } else {
                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                  }
                                                                } else {
                                                                  inlinedVal54 = false;
                                                                }
                                                              } else {
                                                                inlinedVal54 = false;
                                                              }
                                                            } else {
                                                              inlinedVal54 = false;
                                                            }
                                                          } else {
                                                            inlinedVal54 = false;
                                                          }
                                                        } else {
                                                          inlinedVal54 = false;
                                                        }
                                                      } else {
                                                        inlinedVal54 = false;
                                                      }
                                                    } else {
                                                      inlinedVal54 = false;
                                                    }
                                                    inlinedVal35 = inlinedVal54;
                                                  } else {
                                                    inlinedVal35 = false;
                                                  }
                                                } else {
                                                  inlinedVal35 = false;
                                                }
                                              } else {
                                                inlinedVal35 = false;
                                              }
                                            } else {
                                              inlinedVal35 = false;
                                            }
                                          } else {
                                            inlinedVal35 = false;
                                          }
                                        } else {
                                          inlinedVal35 = false;
                                        }
                                      } else {
                                        inlinedVal35 = false;
                                      }
                                    } else {
                                      inlinedVal35 = false;
                                    }
                                  } else {
                                    inlinedVal35 = false;
                                  }
                                  inlinedVal = inlinedVal35;
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
    let inlinedVal4, p2, Cons_tail1, inlinedVal5, inlinedVal6, arg$Some$0$1, inlinedVal7;
    p2 = minimax1.X;
    Cons_tail1 = gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
    inlinedVal7 = minimax1[listNth$accessorSymbol](b, 0);
    if (inlinedVal7 instanceof minimax1.Some.class) {
      arg$Some$0$1 = inlinedVal7.value;
      inlinedVal6 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$1);
      if (inlinedVal6 === true) {
        let inlinedVal8, inlinedVal9, scrut, arg$Some$0$2;
        scrut = minimax1[find$accessorSymbol](b, 1);
        if (scrut instanceof minimax1.Some.class) {
          arg$Some$0$2 = scrut.value;
          inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
          if (inlinedVal9 === true) {
            let fv_tmp, inlinedVal10;
            fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
            if (fv_tmp === true) {
              inlinedVal10 = true;
            } else {
              inlinedVal10 = false;
            }
            inlinedVal8 = inlinedVal10;
          } else {
            inlinedVal8 = false;
          }
        } else if (scrut instanceof minimax1.None.class) {
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
      let inlinedVal8, inlinedVal9, scrut, arg$Some$0$2;
      scrut = minimax1[find$accessorSymbol](b, 3);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$2 = scrut.value;
        inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
        if (inlinedVal9 === true) {
          let fv_tmp, inlinedVal10;
          fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
          if (fv_tmp === true) {
            let Cons_tail2, fv_p, inlinedVal11;
            Cons_tail2 = gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
            fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
            inlinedVal11 = gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail2, undefined, fv_p);
            inlinedVal10 = inlinedVal11;
          } else {
            inlinedVal10 = false;
          }
          inlinedVal8 = inlinedVal10;
        } else {
          inlinedVal8 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
        inlinedVal8 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal8 === false) {
        let fv_tmp, inlinedVal10;
        fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
        if (fv_tmp === true) {
          let Cons_tail2, fv_p, inlinedVal11;
          Cons_tail2 = gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail1);
          fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
          inlinedVal11 = gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail2, undefined, fv_p);
          inlinedVal10 = inlinedVal11;
        } else {
          inlinedVal10 = false;
        }
        if (inlinedVal10 === false) {
          let Cons_tail2, inlinedVal11, inlinedVal12, arg$Some$0$3, inlinedVal13;
          Cons_tail2 = gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
          inlinedVal13 = minimax1[listNth$accessorSymbol](b, 0);
          if (inlinedVal13 instanceof minimax1.Some.class) {
            arg$Some$0$3 = inlinedVal13.value;
            inlinedVal12 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$3);
            if (inlinedVal12 === true) {
              let inlinedVal14, inlinedVal15, scrut1, arg$Some$0$4;
              scrut1 = minimax1[find$accessorSymbol](b, 3);
              if (scrut1 instanceof minimax1.Some.class) {
                arg$Some$0$4 = scrut1.value;
                inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
                if (inlinedVal15 === true) {
                  let fv_tmp1, inlinedVal16;
                  fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                  if (fv_tmp1 === true) {
                    inlinedVal16 = true;
                  } else {
                    inlinedVal16 = false;
                  }
                  inlinedVal14 = inlinedVal16;
                } else {
                  inlinedVal14 = false;
                }
              } else if (scrut1 instanceof minimax1.None.class) {
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
            let inlinedVal14, inlinedVal15, scrut1, arg$Some$0$4;
            scrut1 = minimax1[find$accessorSymbol](b, 1);
            if (scrut1 instanceof minimax1.Some.class) {
              arg$Some$0$4 = scrut1.value;
              inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
              if (inlinedVal15 === true) {
                let fv_tmp1, inlinedVal16;
                fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                if (fv_tmp1 === true) {
                  let Cons_tail3, fv_p, inlinedVal17;
                  Cons_tail3 = gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                  fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                  inlinedVal17 = gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail3, undefined, fv_p);
                  inlinedVal16 = inlinedVal17;
                } else {
                  inlinedVal16 = false;
                }
                inlinedVal14 = inlinedVal16;
              } else {
                inlinedVal14 = false;
              }
            } else if (scrut1 instanceof minimax1.None.class) {
              inlinedVal14 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal14 === false) {
              let fv_tmp1, inlinedVal16;
              fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
              if (fv_tmp1 === true) {
                let Cons_tail3, fv_p, inlinedVal17;
                Cons_tail3 = gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail2);
                fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                inlinedVal17 = gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail3, undefined, fv_p);
                inlinedVal16 = inlinedVal17;
              } else {
                inlinedVal16 = false;
              }
              if (inlinedVal16 === false) {
                let inlinedVal17, inlinedVal18, arg$Some$0$5, inlinedVal19;
                inlinedVal19 = minimax1[listNth$accessorSymbol](b, 0);
                if (inlinedVal19 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = inlinedVal19.value;
                  inlinedVal18 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$5);
                  if (inlinedVal18 === true) {
                    let inlinedVal20, inlinedVal21, scrut2, arg$Some$0$6;
                    scrut2 = minimax1[find$accessorSymbol](b, 4);
                    if (scrut2 instanceof minimax1.Some.class) {
                      arg$Some$0$6 = scrut2.value;
                      inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                      if (inlinedVal21 === true) {
                        let fv_tmp2, inlinedVal22;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(8);
                        if (fv_tmp2 === true) {
                          inlinedVal22 = true;
                        } else {
                          inlinedVal22 = false;
                        }
                        inlinedVal20 = inlinedVal22;
                      } else {
                        inlinedVal20 = false;
                      }
                    } else if (scrut2 instanceof minimax1.None.class) {
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
                  let inlinedVal20, inlinedVal21, scrut2, arg$Some$0$6;
                  scrut2 = minimax1[find$accessorSymbol](b, 2);
                  if (scrut2 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = scrut2.value;
                    inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                    if (inlinedVal21 === true) {
                      let fv_tmp2, inlinedVal22;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                      if (fv_tmp2 === true) {
                        let fv_tmp3, inlinedVal23;
                        fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                        if (fv_tmp3 === true) {
                          inlinedVal23 = true;
                        } else {
                          inlinedVal23 = false;
                        }
                        inlinedVal22 = inlinedVal23;
                      } else {
                        inlinedVal22 = false;
                      }
                      inlinedVal20 = inlinedVal22;
                    } else {
                      inlinedVal20 = false;
                    }
                  } else if (scrut2 instanceof minimax1.None.class) {
                    inlinedVal20 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal20 === false) {
                    let p3, Cons_tail3, inlinedVal22, inlinedVal23, arg$Some$0$7, inlinedVal24;
                    p3 = minimax1.O;
                    Cons_tail3 = gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                    inlinedVal24 = minimax1[listNth$accessorSymbol](b, 0);
                    if (inlinedVal24 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = inlinedVal24.value;
                      inlinedVal23 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$7);
                      if (inlinedVal23 === true) {
                        let inlinedVal25, inlinedVal26, scrut3, arg$Some$0$8;
                        scrut3 = minimax1[find$accessorSymbol](b, 1);
                        if (scrut3 instanceof minimax1.Some.class) {
                          arg$Some$0$8 = scrut3.value;
                          inlinedVal26 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$8);
                          if (inlinedVal26 === true) {
                            let fv_tmp2, inlinedVal27;
                            fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(2);
                            if (fv_tmp2 === true) {
                              inlinedVal27 = true;
                            } else {
                              inlinedVal27 = false;
                            }
                            inlinedVal25 = inlinedVal27;
                          } else {
                            inlinedVal25 = false;
                          }
                        } else if (scrut3 instanceof minimax1.None.class) {
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
                      let inlinedVal25, inlinedVal26, scrut3, arg$Some$0$8;
                      scrut3 = minimax1[find$accessorSymbol](b, 3);
                      if (scrut3 instanceof minimax1.Some.class) {
                        arg$Some$0$8 = scrut3.value;
                        inlinedVal26 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$8);
                        if (inlinedVal26 === true) {
                          let fv_tmp2, inlinedVal27;
                          fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                          if (fv_tmp2 === true) {
                            let Cons_tail4, fv_p, inlinedVal28;
                            Cons_tail4 = gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                            fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                            inlinedVal28 = gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail4, undefined, fv_p);
                            inlinedVal27 = inlinedVal28;
                          } else {
                            inlinedVal27 = false;
                          }
                          inlinedVal25 = inlinedVal27;
                        } else {
                          inlinedVal25 = false;
                        }
                      } else if (scrut3 instanceof minimax1.None.class) {
                        inlinedVal25 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      if (inlinedVal25 === false) {
                        let fv_tmp2, inlinedVal27;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                        if (fv_tmp2 === true) {
                          let Cons_tail4, fv_p, inlinedVal28;
                          Cons_tail4 = gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail3);
                          fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                          inlinedVal28 = gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail4, undefined, fv_p);
                          inlinedVal27 = inlinedVal28;
                        } else {
                          inlinedVal27 = false;
                        }
                        if (inlinedVal27 === false) {
                          let Cons_tail4, inlinedVal28, inlinedVal29, arg$Some$0$9, inlinedVal30;
                          Cons_tail4 = gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                          inlinedVal30 = minimax1[listNth$accessorSymbol](b, 0);
                          if (inlinedVal30 instanceof minimax1.Some.class) {
                            arg$Some$0$9 = inlinedVal30.value;
                            inlinedVal29 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$9);
                            if (inlinedVal29 === true) {
                              let inlinedVal31, inlinedVal32, scrut4, arg$Some$0$10;
                              scrut4 = minimax1[find$accessorSymbol](b, 3);
                              if (scrut4 instanceof minimax1.Some.class) {
                                arg$Some$0$10 = scrut4.value;
                                inlinedVal32 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                                if (inlinedVal32 === true) {
                                  let fv_tmp3, inlinedVal33;
                                  fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                                  if (fv_tmp3 === true) {
                                    inlinedVal33 = true;
                                  } else {
                                    inlinedVal33 = false;
                                  }
                                  inlinedVal31 = inlinedVal33;
                                } else {
                                  inlinedVal31 = false;
                                }
                              } else if (scrut4 instanceof minimax1.None.class) {
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
                            let inlinedVal31, inlinedVal32, scrut4, arg$Some$0$10;
                            scrut4 = minimax1[find$accessorSymbol](b, 1);
                            if (scrut4 instanceof minimax1.Some.class) {
                              arg$Some$0$10 = scrut4.value;
                              inlinedVal32 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                              if (inlinedVal32 === true) {
                                let fv_tmp3, inlinedVal33;
                                fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                                if (fv_tmp3 === true) {
                                  let Cons_tail5, fv_p, inlinedVal34;
                                  Cons_tail5 = gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                  fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                                  inlinedVal34 = gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail5, undefined, fv_p);
                                  inlinedVal33 = inlinedVal34;
                                } else {
                                  inlinedVal33 = false;
                                }
                                inlinedVal31 = inlinedVal33;
                              } else {
                                inlinedVal31 = false;
                              }
                            } else if (scrut4 instanceof minimax1.None.class) {
                              inlinedVal31 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            if (inlinedVal31 === false) {
                              let fv_tmp3, inlinedVal33;
                              fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(2);
                              if (fv_tmp3 === true) {
                                let Cons_tail5, fv_p, inlinedVal34;
                                Cons_tail5 = gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail4);
                                fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                                inlinedVal34 = gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail5, undefined, fv_p);
                                inlinedVal33 = inlinedVal34;
                              } else {
                                inlinedVal33 = false;
                              }
                              if (inlinedVal33 === false) {
                                let inlinedVal34, inlinedVal35, arg$Some$0$11, inlinedVal36;
                                inlinedVal36 = minimax1[listNth$accessorSymbol](b, 0);
                                if (inlinedVal36 instanceof minimax1.Some.class) {
                                  arg$Some$0$11 = inlinedVal36.value;
                                  inlinedVal35 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$11);
                                  if (inlinedVal35 === true) {
                                    let inlinedVal37, inlinedVal38, scrut5, arg$Some$0$12;
                                    scrut5 = minimax1[find$accessorSymbol](b, 4);
                                    if (scrut5 instanceof minimax1.Some.class) {
                                      arg$Some$0$12 = scrut5.value;
                                      inlinedVal38 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                                      if (inlinedVal38 === true) {
                                        let fv_tmp4, inlinedVal39;
                                        fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p3)(b)(8);
                                        if (fv_tmp4 === true) {
                                          inlinedVal39 = true;
                                        } else {
                                          inlinedVal39 = false;
                                        }
                                        inlinedVal37 = inlinedVal39;
                                      } else {
                                        inlinedVal37 = false;
                                      }
                                    } else if (scrut5 instanceof minimax1.None.class) {
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
                                  let inlinedVal37, scrut5, arg$Some$0$12;
                                  scrut5 = minimax1[find$accessorSymbol](b, 2);
                                  if (scrut5 instanceof minimax1.Some.class) {
                                    arg$Some$0$12 = scrut5.value;
                                    inlinedVal37 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                                    if (inlinedVal37 === true) {
                                      let fv_tmp4;
                                      fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                                      if (fv_tmp4 === true) {
                                        let fv_tmp5;
                                        fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                                        if (fv_tmp5 === true) {
                                          inlinedVal4 = -1;
                                        } else {
                                          inlinedVal4 = 0;
                                        }
                                      } else {
                                        inlinedVal4 = 0;
                                      }
                                    } else {
                                      inlinedVal4 = 0;
                                    }
                                  } else if (scrut5 instanceof minimax1.None.class) {
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
    return minimax2.Rose(tmp, undefined)
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
      fv_tmp = gameTreeWithTT_minimaxTT$minimaxTT(minimax2, transTable, inlinedVal5);
      tmp3 = minimax1[moveTo$accessorSymbol](b, p);
      minimax3 = minimax1;
      n = 0;
      m = b;
      acc = gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Nil();
      inlinedLbl: {
        loopLabel: while (true) {
          let arg$Cons$0$, arg$Cons$1$, tmp4, tmp5, tmp6;
          if (m instanceof minimax3.Nil.class) {
            let acc1, inlinedVal10;
            acc1 = gameTreeWithTT_minimaxTT_successors_map$l_Nil();
            inlinedVal10 = acc(acc1);
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
              tmp6 = gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Cons(n, acc);
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
      inlinedVal8 = inlinedVal9(undefined, tmp3);
      inlinedVal6 = inlinedVal8(undefined, fv_tmp);
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
      return fv_minimax.Rose(fv_tmp2, undefined)
    }
    {
      let fv_tmp;
      fv_tmp = globalThis.Object.freeze([
        b,
        inlinedVal4
      ]);
      return minimax2.Rose(fv_tmp, undefined);
    }
  }
};
gameTree_minimax$minimax = function gameTree_minimax$minimax(p) {
  return (b) => {
    return gameTree_minimax$minimax$worker(p, b)
  }
};
gameTree_minimax$minimax$worker = function gameTree_minimax$minimax$worker(p, b) {
  let tmp, tmp1, tmp2, tmp3, inlinedVal, p1, Cons_tail, inlinedVal1, inlinedVal2, arg$Some$0$, inlinedVal3;
  p1 = minimax1.X;
  Cons_tail = gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
  inlinedVal3 = minimax1[listNth$accessorSymbol](b, 0);
  if (inlinedVal3 instanceof minimax1.Some.class) {
    arg$Some$0$ = inlinedVal3.value;
    inlinedVal2 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$);
    if (inlinedVal2 === true) {
      let inlinedVal4, inlinedVal5, scrut, arg$Some$0$1;
      scrut = minimax1[find$accessorSymbol](b, 1);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$1 = scrut.value;
        inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
        if (inlinedVal5 === true) {
          let fv_tmp, inlinedVal6;
          fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(2);
          if (fv_tmp === true) {
            inlinedVal6 = true;
          } else {
            inlinedVal6 = false;
          }
          inlinedVal4 = inlinedVal6;
        } else {
          inlinedVal4 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
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
    let inlinedVal4, inlinedVal5, scrut, arg$Some$0$1;
    scrut = minimax1[find$accessorSymbol](b, 3);
    if (scrut instanceof minimax1.Some.class) {
      arg$Some$0$1 = scrut.value;
      inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
      if (inlinedVal5 === true) {
        let fv_tmp, inlinedVal6;
        fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
        if (fv_tmp === true) {
          let Cons_tail1, fv_p, inlinedVal7;
          Cons_tail1 = gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
          fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
          inlinedVal7 = gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail1, undefined, fv_p);
          inlinedVal6 = inlinedVal7;
        } else {
          inlinedVal6 = false;
        }
        inlinedVal4 = inlinedVal6;
      } else {
        inlinedVal4 = false;
      }
    } else if (scrut instanceof minimax1.None.class) {
      inlinedVal4 = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal4 === false) {
      let fv_tmp, inlinedVal6;
      fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
      if (fv_tmp === true) {
        let Cons_tail1, fv_p, inlinedVal7;
        Cons_tail1 = gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail);
        fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
        inlinedVal7 = gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail1, undefined, fv_p);
        inlinedVal6 = inlinedVal7;
      } else {
        inlinedVal6 = false;
      }
      if (inlinedVal6 === false) {
        let Cons_tail1, inlinedVal7, inlinedVal8, arg$Some$0$2, inlinedVal9;
        Cons_tail1 = gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
        inlinedVal9 = minimax1[listNth$accessorSymbol](b, 0);
        if (inlinedVal9 instanceof minimax1.Some.class) {
          arg$Some$0$2 = inlinedVal9.value;
          inlinedVal8 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$2);
          if (inlinedVal8 === true) {
            let inlinedVal10, inlinedVal11, scrut1, arg$Some$0$3;
            scrut1 = minimax1[find$accessorSymbol](b, 3);
            if (scrut1 instanceof minimax1.Some.class) {
              arg$Some$0$3 = scrut1.value;
              inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
              if (inlinedVal11 === true) {
                let fv_tmp1, inlinedVal12;
                fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
                if (fv_tmp1 === true) {
                  inlinedVal12 = true;
                } else {
                  inlinedVal12 = false;
                }
                inlinedVal10 = inlinedVal12;
              } else {
                inlinedVal10 = false;
              }
            } else if (scrut1 instanceof minimax1.None.class) {
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
          let inlinedVal10, inlinedVal11, scrut1, arg$Some$0$3;
          scrut1 = minimax1[find$accessorSymbol](b, 1);
          if (scrut1 instanceof minimax1.Some.class) {
            arg$Some$0$3 = scrut1.value;
            inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
            if (inlinedVal11 === true) {
              let fv_tmp1, inlinedVal12;
              fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
              if (fv_tmp1 === true) {
                let Cons_tail2, fv_p, inlinedVal13;
                Cons_tail2 = gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
                inlinedVal13 = gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail2, undefined, fv_p);
                inlinedVal12 = inlinedVal13;
              } else {
                inlinedVal12 = false;
              }
              inlinedVal10 = inlinedVal12;
            } else {
              inlinedVal10 = false;
            }
          } else if (scrut1 instanceof minimax1.None.class) {
            inlinedVal10 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          if (inlinedVal10 === false) {
            let fv_tmp1, inlinedVal12;
            fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(2);
            if (fv_tmp1 === true) {
              let Cons_tail2, fv_p, inlinedVal13;
              Cons_tail2 = gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail1);
              fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
              inlinedVal13 = gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail2, undefined, fv_p);
              inlinedVal12 = inlinedVal13;
            } else {
              inlinedVal12 = false;
            }
            if (inlinedVal12 === false) {
              let inlinedVal13, inlinedVal14, arg$Some$0$4, inlinedVal15;
              inlinedVal15 = minimax1[listNth$accessorSymbol](b, 0);
              if (inlinedVal15 instanceof minimax1.Some.class) {
                arg$Some$0$4 = inlinedVal15.value;
                inlinedVal14 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$4);
                if (inlinedVal14 === true) {
                  let inlinedVal16, inlinedVal17, scrut2, arg$Some$0$5;
                  scrut2 = minimax1[find$accessorSymbol](b, 4);
                  if (scrut2 instanceof minimax1.Some.class) {
                    arg$Some$0$5 = scrut2.value;
                    inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                    if (inlinedVal17 === true) {
                      let fv_tmp2, inlinedVal18;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p1)(b)(8);
                      if (fv_tmp2 === true) {
                        inlinedVal18 = true;
                      } else {
                        inlinedVal18 = false;
                      }
                      inlinedVal16 = inlinedVal18;
                    } else {
                      inlinedVal16 = false;
                    }
                  } else if (scrut2 instanceof minimax1.None.class) {
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
                let inlinedVal16, inlinedVal17, scrut2, arg$Some$0$5;
                scrut2 = minimax1[find$accessorSymbol](b, 2);
                if (scrut2 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = scrut2.value;
                  inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                  if (inlinedVal17 === true) {
                    let fv_tmp2, inlinedVal18;
                    fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
                    if (fv_tmp2 === true) {
                      let fv_tmp3, inlinedVal19;
                      fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
                      if (fv_tmp3 === true) {
                        inlinedVal19 = true;
                      } else {
                        inlinedVal19 = false;
                      }
                      inlinedVal18 = inlinedVal19;
                    } else {
                      inlinedVal18 = false;
                    }
                    inlinedVal16 = inlinedVal18;
                  } else {
                    inlinedVal16 = false;
                  }
                } else if (scrut2 instanceof minimax1.None.class) {
                  inlinedVal16 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal16 === false) {
                  let p2, Cons_tail2, inlinedVal18, inlinedVal19, arg$Some$0$6, inlinedVal20;
                  p2 = minimax1.O;
                  Cons_tail2 = gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                  inlinedVal20 = minimax1[listNth$accessorSymbol](b, 0);
                  if (inlinedVal20 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = inlinedVal20.value;
                    inlinedVal19 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                    if (inlinedVal19 === true) {
                      let inlinedVal21, inlinedVal22, scrut3, arg$Some$0$7;
                      scrut3 = minimax1[find$accessorSymbol](b, 1);
                      if (scrut3 instanceof minimax1.Some.class) {
                        arg$Some$0$7 = scrut3.value;
                        inlinedVal22 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                        if (inlinedVal22 === true) {
                          let fv_tmp2, inlinedVal23;
                          fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
                          if (fv_tmp2 === true) {
                            inlinedVal23 = true;
                          } else {
                            inlinedVal23 = false;
                          }
                          inlinedVal21 = inlinedVal23;
                        } else {
                          inlinedVal21 = false;
                        }
                      } else if (scrut3 instanceof minimax1.None.class) {
                        inlinedVal21 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal18 = inlinedVal21;
                    } else {
                      inlinedVal18 = false;
                    }
                  } else if (inlinedVal20 instanceof minimax1.None.class) {
                    inlinedVal18 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal18 === false) {
                    let inlinedVal21, inlinedVal22, scrut3, arg$Some$0$7;
                    scrut3 = minimax1[find$accessorSymbol](b, 3);
                    if (scrut3 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = scrut3.value;
                      inlinedVal22 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                      if (inlinedVal22 === true) {
                        let fv_tmp2, inlinedVal23;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                        if (fv_tmp2 === true) {
                          let Cons_tail3, fv_p, inlinedVal24;
                          Cons_tail3 = gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                          fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                          inlinedVal24 = gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail3, undefined, fv_p);
                          inlinedVal23 = inlinedVal24;
                        } else {
                          inlinedVal23 = false;
                        }
                        inlinedVal21 = inlinedVal23;
                      } else {
                        inlinedVal21 = false;
                      }
                    } else if (scrut3 instanceof minimax1.None.class) {
                      inlinedVal21 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    if (inlinedVal21 === false) {
                      let fv_tmp2, inlinedVal23;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                      if (fv_tmp2 === true) {
                        let Cons_tail3, fv_p, inlinedVal24;
                        Cons_tail3 = gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail2);
                        fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                        inlinedVal24 = gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail3, undefined, fv_p);
                        inlinedVal23 = inlinedVal24;
                      } else {
                        inlinedVal23 = false;
                      }
                      if (inlinedVal23 === false) {
                        let Cons_tail3, inlinedVal24, inlinedVal25, arg$Some$0$8, inlinedVal26;
                        Cons_tail3 = gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                        inlinedVal26 = minimax1[listNth$accessorSymbol](b, 0);
                        if (inlinedVal26 instanceof minimax1.Some.class) {
                          arg$Some$0$8 = inlinedVal26.value;
                          inlinedVal25 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$8);
                          if (inlinedVal25 === true) {
                            let inlinedVal27, inlinedVal28, scrut4, arg$Some$0$9;
                            scrut4 = minimax1[find$accessorSymbol](b, 3);
                            if (scrut4 instanceof minimax1.Some.class) {
                              arg$Some$0$9 = scrut4.value;
                              inlinedVal28 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                              if (inlinedVal28 === true) {
                                let fv_tmp3, inlinedVal29;
                                fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                                if (fv_tmp3 === true) {
                                  inlinedVal29 = true;
                                } else {
                                  inlinedVal29 = false;
                                }
                                inlinedVal27 = inlinedVal29;
                              } else {
                                inlinedVal27 = false;
                              }
                            } else if (scrut4 instanceof minimax1.None.class) {
                              inlinedVal27 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            inlinedVal24 = inlinedVal27;
                          } else {
                            inlinedVal24 = false;
                          }
                        } else if (inlinedVal26 instanceof minimax1.None.class) {
                          inlinedVal24 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        if (inlinedVal24 === false) {
                          let inlinedVal27, inlinedVal28, scrut4, arg$Some$0$9;
                          scrut4 = minimax1[find$accessorSymbol](b, 1);
                          if (scrut4 instanceof minimax1.Some.class) {
                            arg$Some$0$9 = scrut4.value;
                            inlinedVal28 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                            if (inlinedVal28 === true) {
                              let fv_tmp3, inlinedVal29;
                              fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                              if (fv_tmp3 === true) {
                                let Cons_tail4, fv_p, inlinedVal30;
                                Cons_tail4 = gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                                inlinedVal30 = gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail4, undefined, fv_p);
                                inlinedVal29 = inlinedVal30;
                              } else {
                                inlinedVal29 = false;
                              }
                              inlinedVal27 = inlinedVal29;
                            } else {
                              inlinedVal27 = false;
                            }
                          } else if (scrut4 instanceof minimax1.None.class) {
                            inlinedVal27 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          if (inlinedVal27 === false) {
                            let fv_tmp3, inlinedVal29;
                            fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
                            if (fv_tmp3 === true) {
                              let Cons_tail4, fv_p, inlinedVal30;
                              Cons_tail4 = gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail3);
                              fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                              inlinedVal30 = gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail4, undefined, fv_p);
                              inlinedVal29 = inlinedVal30;
                            } else {
                              inlinedVal29 = false;
                            }
                            if (inlinedVal29 === false) {
                              let inlinedVal30, inlinedVal31, arg$Some$0$10, inlinedVal32;
                              inlinedVal32 = minimax1[listNth$accessorSymbol](b, 0);
                              if (inlinedVal32 instanceof minimax1.Some.class) {
                                arg$Some$0$10 = inlinedVal32.value;
                                inlinedVal31 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$10);
                                if (inlinedVal31 === true) {
                                  let inlinedVal33, inlinedVal34, scrut5, arg$Some$0$11;
                                  scrut5 = minimax1[find$accessorSymbol](b, 4);
                                  if (scrut5 instanceof minimax1.Some.class) {
                                    arg$Some$0$11 = scrut5.value;
                                    inlinedVal34 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                                    if (inlinedVal34 === true) {
                                      let fv_tmp4, inlinedVal35;
                                      fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p2)(b)(8);
                                      if (fv_tmp4 === true) {
                                        inlinedVal35 = true;
                                      } else {
                                        inlinedVal35 = false;
                                      }
                                      inlinedVal33 = inlinedVal35;
                                    } else {
                                      inlinedVal33 = false;
                                    }
                                  } else if (scrut5 instanceof minimax1.None.class) {
                                    inlinedVal33 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  inlinedVal30 = inlinedVal33;
                                } else {
                                  inlinedVal30 = false;
                                }
                              } else if (inlinedVal32 instanceof minimax1.None.class) {
                                inlinedVal30 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              if (inlinedVal30 === false) {
                                let inlinedVal33, inlinedVal34, scrut5, arg$Some$0$11;
                                scrut5 = minimax1[find$accessorSymbol](b, 2);
                                if (scrut5 instanceof minimax1.Some.class) {
                                  arg$Some$0$11 = scrut5.value;
                                  inlinedVal34 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                                  if (inlinedVal34 === true) {
                                    let fv_tmp4;
                                    fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                                    if (fv_tmp4 === true) {
                                      let fv_tmp5;
                                      fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                                      if (fv_tmp5 === true) {
                                        inlinedVal33 = true;
                                      } else {
                                        inlinedVal33 = false;
                                      }
                                    } else {
                                      inlinedVal33 = false;
                                    }
                                  } else {
                                    inlinedVal33 = false;
                                  }
                                } else if (scrut5 instanceof minimax1.None.class) {
                                  inlinedVal33 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                if (inlinedVal33 === false) {
                                  let inlinedVal35, p3, inlinedVal36;
                                  p3 = minimax1[isSome$accessorSymbol];
                                  inlinedVal36 = minimax1[listAll$tailrec$accessorSymbol](p3, b);
                                  if (inlinedVal36 === true) {
                                    let p4, Cons_tail4, inlinedVal37, inlinedVal38, arg$Some$0$12, inlinedVal39;
                                    p4 = minimax1.X;
                                    Cons_tail4 = gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                    inlinedVal39 = minimax1[listNth$accessorSymbol](b, 0);
                                    if (inlinedVal39 instanceof minimax1.Some.class) {
                                      arg$Some$0$12 = inlinedVal39.value;
                                      inlinedVal38 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$12);
                                      if (inlinedVal38 === true) {
                                        let inlinedVal40, inlinedVal41, scrut6, arg$Some$0$13;
                                        scrut6 = minimax1[find$accessorSymbol](b, 1);
                                        if (scrut6 instanceof minimax1.Some.class) {
                                          arg$Some$0$13 = scrut6.value;
                                          inlinedVal41 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$13);
                                          if (inlinedVal41 === true) {
                                            let fv_tmp4, inlinedVal42;
                                            fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(2);
                                            if (fv_tmp4 === true) {
                                              inlinedVal42 = true;
                                            } else {
                                              inlinedVal42 = false;
                                            }
                                            inlinedVal40 = inlinedVal42;
                                          } else {
                                            inlinedVal40 = false;
                                          }
                                        } else if (scrut6 instanceof minimax1.None.class) {
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
                                      let inlinedVal40, inlinedVal41, scrut6, arg$Some$0$13;
                                      scrut6 = minimax1[find$accessorSymbol](b, 3);
                                      if (scrut6 instanceof minimax1.Some.class) {
                                        arg$Some$0$13 = scrut6.value;
                                        inlinedVal41 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$13);
                                        if (inlinedVal41 === true) {
                                          let fv_tmp4, inlinedVal42;
                                          fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                          if (fv_tmp4 === true) {
                                            let Cons_tail5, fv_p, inlinedVal43;
                                            Cons_tail5 = gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                            fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                            inlinedVal43 = gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail5, undefined, fv_p);
                                            inlinedVal42 = inlinedVal43;
                                          } else {
                                            inlinedVal42 = false;
                                          }
                                          inlinedVal40 = inlinedVal42;
                                        } else {
                                          inlinedVal40 = false;
                                        }
                                      } else if (scrut6 instanceof minimax1.None.class) {
                                        inlinedVal40 = false;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                      if (inlinedVal40 === false) {
                                        let fv_tmp4, inlinedVal42;
                                        fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                        if (fv_tmp4 === true) {
                                          let Cons_tail5, fv_p, inlinedVal43;
                                          Cons_tail5 = gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail4);
                                          fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                          inlinedVal43 = gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail5, undefined, fv_p);
                                          inlinedVal42 = inlinedVal43;
                                        } else {
                                          inlinedVal42 = false;
                                        }
                                        if (inlinedVal42 === false) {
                                          let Cons_tail5, inlinedVal43, inlinedVal44, arg$Some$0$14, inlinedVal45;
                                          Cons_tail5 = gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                          inlinedVal45 = minimax1[listNth$accessorSymbol](b, 0);
                                          if (inlinedVal45 instanceof minimax1.Some.class) {
                                            arg$Some$0$14 = inlinedVal45.value;
                                            inlinedVal44 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$14);
                                            if (inlinedVal44 === true) {
                                              let inlinedVal46, inlinedVal47, scrut7, arg$Some$0$15;
                                              scrut7 = minimax1[find$accessorSymbol](b, 3);
                                              if (scrut7 instanceof minimax1.Some.class) {
                                                arg$Some$0$15 = scrut7.value;
                                                inlinedVal47 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$15);
                                                if (inlinedVal47 === true) {
                                                  let fv_tmp5, inlinedVal48;
                                                  fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                                  if (fv_tmp5 === true) {
                                                    inlinedVal48 = true;
                                                  } else {
                                                    inlinedVal48 = false;
                                                  }
                                                  inlinedVal46 = inlinedVal48;
                                                } else {
                                                  inlinedVal46 = false;
                                                }
                                              } else if (scrut7 instanceof minimax1.None.class) {
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
                                            let inlinedVal46, inlinedVal47, scrut7, arg$Some$0$15;
                                            scrut7 = minimax1[find$accessorSymbol](b, 1);
                                            if (scrut7 instanceof minimax1.Some.class) {
                                              arg$Some$0$15 = scrut7.value;
                                              inlinedVal47 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$15);
                                              if (inlinedVal47 === true) {
                                                let fv_tmp5, inlinedVal48;
                                                fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                                if (fv_tmp5 === true) {
                                                  let Cons_tail6, fv_p, inlinedVal49;
                                                  Cons_tail6 = gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                                  fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                                  inlinedVal49 = gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail6, undefined, fv_p);
                                                  inlinedVal48 = inlinedVal49;
                                                } else {
                                                  inlinedVal48 = false;
                                                }
                                                inlinedVal46 = inlinedVal48;
                                              } else {
                                                inlinedVal46 = false;
                                              }
                                            } else if (scrut7 instanceof minimax1.None.class) {
                                              inlinedVal46 = false;
                                            } else {
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                            }
                                            if (inlinedVal46 === false) {
                                              let fv_tmp5, inlinedVal48;
                                              fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(2);
                                              if (fv_tmp5 === true) {
                                                let Cons_tail6, fv_p, inlinedVal49;
                                                Cons_tail6 = gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail5);
                                                fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                                inlinedVal49 = gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail6, undefined, fv_p);
                                                inlinedVal48 = inlinedVal49;
                                              } else {
                                                inlinedVal48 = false;
                                              }
                                              if (inlinedVal48 === false) {
                                                let inlinedVal49, inlinedVal50, arg$Some$0$16, inlinedVal51;
                                                inlinedVal51 = minimax1[listNth$accessorSymbol](b, 0);
                                                if (inlinedVal51 instanceof minimax1.Some.class) {
                                                  arg$Some$0$16 = inlinedVal51.value;
                                                  inlinedVal50 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$16);
                                                  if (inlinedVal50 === true) {
                                                    let inlinedVal52, inlinedVal53, scrut8, arg$Some$0$17;
                                                    scrut8 = minimax1[find$accessorSymbol](b, 4);
                                                    if (scrut8 instanceof minimax1.Some.class) {
                                                      arg$Some$0$17 = scrut8.value;
                                                      inlinedVal53 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                                      if (inlinedVal53 === true) {
                                                        let fv_tmp6, inlinedVal54;
                                                        fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p4)(b)(8);
                                                        if (fv_tmp6 === true) {
                                                          inlinedVal54 = true;
                                                        } else {
                                                          inlinedVal54 = false;
                                                        }
                                                        inlinedVal52 = inlinedVal54;
                                                      } else {
                                                        inlinedVal52 = false;
                                                      }
                                                    } else if (scrut8 instanceof minimax1.None.class) {
                                                      inlinedVal52 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    inlinedVal49 = inlinedVal52;
                                                  } else {
                                                    inlinedVal49 = false;
                                                  }
                                                } else if (inlinedVal51 instanceof minimax1.None.class) {
                                                  inlinedVal49 = false;
                                                } else {
                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                }
                                                if (inlinedVal49 === false) {
                                                  let inlinedVal52, inlinedVal53, scrut8, arg$Some$0$17;
                                                  scrut8 = minimax1[find$accessorSymbol](b, 2);
                                                  if (scrut8 instanceof minimax1.Some.class) {
                                                    arg$Some$0$17 = scrut8.value;
                                                    inlinedVal53 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                                    if (inlinedVal53 === true) {
                                                      let fv_tmp6, inlinedVal54;
                                                      fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                                      if (fv_tmp6 === true) {
                                                        let fv_tmp7, inlinedVal55;
                                                        fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                                        if (fv_tmp7 === true) {
                                                          inlinedVal55 = true;
                                                        } else {
                                                          inlinedVal55 = false;
                                                        }
                                                        inlinedVal54 = inlinedVal55;
                                                      } else {
                                                        inlinedVal54 = false;
                                                      }
                                                      inlinedVal52 = inlinedVal54;
                                                    } else {
                                                      inlinedVal52 = false;
                                                    }
                                                  } else if (scrut8 instanceof minimax1.None.class) {
                                                    inlinedVal52 = false;
                                                  } else {
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                  }
                                                  if (inlinedVal52 === false) {
                                                    let p5, inlinedVal54, Cons_tail6, inlinedVal55, inlinedVal56, arg$Some$0$18, inlinedVal57;
                                                    p5 = minimax1.O;
                                                    Cons_tail6 = gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                                    inlinedVal57 = minimax1[listNth$accessorSymbol](b, 0);
                                                    if (inlinedVal57 instanceof minimax1.Some.class) {
                                                      arg$Some$0$18 = inlinedVal57.value;
                                                      inlinedVal56 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$18);
                                                      if (inlinedVal56 === true) {
                                                        let inlinedVal58, inlinedVal59, scrut9, arg$Some$0$19;
                                                        scrut9 = minimax1[find$accessorSymbol](b, 1);
                                                        if (scrut9 instanceof minimax1.Some.class) {
                                                          arg$Some$0$19 = scrut9.value;
                                                          inlinedVal59 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$19);
                                                          if (inlinedVal59 === true) {
                                                            let fv_tmp6, inlinedVal60;
                                                            fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(2);
                                                            if (fv_tmp6 === true) {
                                                              inlinedVal60 = true;
                                                            } else {
                                                              inlinedVal60 = false;
                                                            }
                                                            inlinedVal58 = inlinedVal60;
                                                          } else {
                                                            inlinedVal58 = false;
                                                          }
                                                        } else if (scrut9 instanceof minimax1.None.class) {
                                                          inlinedVal58 = false;
                                                        } else {
                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                        }
                                                        inlinedVal55 = inlinedVal58;
                                                      } else {
                                                        inlinedVal55 = false;
                                                      }
                                                    } else if (inlinedVal57 instanceof minimax1.None.class) {
                                                      inlinedVal55 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    if (inlinedVal55 === false) {
                                                      let inlinedVal58, inlinedVal59, scrut9, arg$Some$0$19;
                                                      scrut9 = minimax1[find$accessorSymbol](b, 3);
                                                      if (scrut9 instanceof minimax1.Some.class) {
                                                        arg$Some$0$19 = scrut9.value;
                                                        inlinedVal59 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$19);
                                                        if (inlinedVal59 === true) {
                                                          let fv_tmp6, inlinedVal60;
                                                          fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                          if (fv_tmp6 === true) {
                                                            let Cons_tail7, fv_p, inlinedVal61;
                                                            Cons_tail7 = gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                                            fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                            inlinedVal61 = gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail7, undefined, fv_p);
                                                            inlinedVal60 = inlinedVal61;
                                                          } else {
                                                            inlinedVal60 = false;
                                                          }
                                                          inlinedVal58 = inlinedVal60;
                                                        } else {
                                                          inlinedVal58 = false;
                                                        }
                                                      } else if (scrut9 instanceof minimax1.None.class) {
                                                        inlinedVal58 = false;
                                                      } else {
                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                      }
                                                      if (inlinedVal58 === false) {
                                                        let fv_tmp6, inlinedVal60;
                                                        fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                        if (fv_tmp6 === true) {
                                                          let Cons_tail7, fv_p, inlinedVal61;
                                                          Cons_tail7 = gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail6);
                                                          fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                          inlinedVal61 = gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail7, undefined, fv_p);
                                                          inlinedVal60 = inlinedVal61;
                                                        } else {
                                                          inlinedVal60 = false;
                                                        }
                                                        if (inlinedVal60 === false) {
                                                          let Cons_tail7, inlinedVal61, inlinedVal62, arg$Some$0$20, inlinedVal63;
                                                          Cons_tail7 = gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                                          inlinedVal63 = minimax1[listNth$accessorSymbol](b, 0);
                                                          if (inlinedVal63 instanceof minimax1.Some.class) {
                                                            arg$Some$0$20 = inlinedVal63.value;
                                                            inlinedVal62 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$20);
                                                            if (inlinedVal62 === true) {
                                                              let inlinedVal64, inlinedVal65, scrut10, arg$Some$0$21;
                                                              scrut10 = minimax1[find$accessorSymbol](b, 3);
                                                              if (scrut10 instanceof minimax1.Some.class) {
                                                                arg$Some$0$21 = scrut10.value;
                                                                inlinedVal65 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$21);
                                                                if (inlinedVal65 === true) {
                                                                  let fv_tmp7, inlinedVal66;
                                                                  fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                                  if (fv_tmp7 === true) {
                                                                    inlinedVal66 = true;
                                                                  } else {
                                                                    inlinedVal66 = false;
                                                                  }
                                                                  inlinedVal64 = inlinedVal66;
                                                                } else {
                                                                  inlinedVal64 = false;
                                                                }
                                                              } else if (scrut10 instanceof minimax1.None.class) {
                                                                inlinedVal64 = false;
                                                              } else {
                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                              }
                                                              inlinedVal61 = inlinedVal64;
                                                            } else {
                                                              inlinedVal61 = false;
                                                            }
                                                          } else if (inlinedVal63 instanceof minimax1.None.class) {
                                                            inlinedVal61 = false;
                                                          } else {
                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                          }
                                                          if (inlinedVal61 === false) {
                                                            let inlinedVal64, inlinedVal65, scrut10, arg$Some$0$21;
                                                            scrut10 = minimax1[find$accessorSymbol](b, 1);
                                                            if (scrut10 instanceof minimax1.Some.class) {
                                                              arg$Some$0$21 = scrut10.value;
                                                              inlinedVal65 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$21);
                                                              if (inlinedVal65 === true) {
                                                                let fv_tmp7, inlinedVal66;
                                                                fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                                if (fv_tmp7 === true) {
                                                                  let Cons_tail8, fv_p, inlinedVal67;
                                                                  Cons_tail8 = gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                                                  fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                                  inlinedVal67 = gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail8, undefined, fv_p);
                                                                  inlinedVal66 = inlinedVal67;
                                                                } else {
                                                                  inlinedVal66 = false;
                                                                }
                                                                inlinedVal64 = inlinedVal66;
                                                              } else {
                                                                inlinedVal64 = false;
                                                              }
                                                            } else if (scrut10 instanceof minimax1.None.class) {
                                                              inlinedVal64 = false;
                                                            } else {
                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                            }
                                                            if (inlinedVal64 === false) {
                                                              let fv_tmp7, inlinedVal66;
                                                              fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(2);
                                                              if (fv_tmp7 === true) {
                                                                let Cons_tail8, fv_p, inlinedVal67;
                                                                Cons_tail8 = gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail7);
                                                                fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                                inlinedVal67 = gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail8, undefined, fv_p);
                                                                inlinedVal66 = inlinedVal67;
                                                              } else {
                                                                inlinedVal66 = false;
                                                              }
                                                              if (inlinedVal66 === false) {
                                                                let inlinedVal67, inlinedVal68, arg$Some$0$22, inlinedVal69;
                                                                inlinedVal69 = minimax1[listNth$accessorSymbol](b, 0);
                                                                if (inlinedVal69 instanceof minimax1.Some.class) {
                                                                  arg$Some$0$22 = inlinedVal69.value;
                                                                  inlinedVal68 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$22);
                                                                  if (inlinedVal68 === true) {
                                                                    let inlinedVal70, inlinedVal71, scrut11, arg$Some$0$23;
                                                                    scrut11 = minimax1[find$accessorSymbol](b, 4);
                                                                    if (scrut11 instanceof minimax1.Some.class) {
                                                                      arg$Some$0$23 = scrut11.value;
                                                                      inlinedVal71 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$23);
                                                                      if (inlinedVal71 === true) {
                                                                        let fv_tmp8, inlinedVal72;
                                                                        fv_tmp8 = minimax1[playerOccupies$accessorSymbol](p5)(b)(8);
                                                                        if (fv_tmp8 === true) {
                                                                          inlinedVal72 = true;
                                                                        } else {
                                                                          inlinedVal72 = false;
                                                                        }
                                                                        inlinedVal70 = inlinedVal72;
                                                                      } else {
                                                                        inlinedVal70 = false;
                                                                      }
                                                                    } else if (scrut11 instanceof minimax1.None.class) {
                                                                      inlinedVal70 = false;
                                                                    } else {
                                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                    }
                                                                    inlinedVal67 = inlinedVal70;
                                                                  } else {
                                                                    inlinedVal67 = false;
                                                                  }
                                                                } else if (inlinedVal69 instanceof minimax1.None.class) {
                                                                  inlinedVal67 = false;
                                                                } else {
                                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                }
                                                                if (inlinedVal67 === false) {
                                                                  let inlinedVal70, scrut11, arg$Some$0$23;
                                                                  scrut11 = minimax1[find$accessorSymbol](b, 2);
                                                                  if (scrut11 instanceof minimax1.Some.class) {
                                                                    arg$Some$0$23 = scrut11.value;
                                                                    inlinedVal70 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$23);
                                                                    if (inlinedVal70 === true) {
                                                                      let fv_tmp8;
                                                                      fv_tmp8 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                                      if (fv_tmp8 === true) {
                                                                        let fv_tmp9;
                                                                        fv_tmp9 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                                        if (fv_tmp9 === true) {
                                                                          inlinedVal54 = false;
                                                                        } else {
                                                                          inlinedVal54 = true;
                                                                        }
                                                                      } else {
                                                                        inlinedVal54 = true;
                                                                      }
                                                                    } else {
                                                                      inlinedVal54 = true;
                                                                    }
                                                                  } else if (scrut11 instanceof minimax1.None.class) {
                                                                    inlinedVal54 = true;
                                                                  } else {
                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                  }
                                                                } else {
                                                                  inlinedVal54 = false;
                                                                }
                                                              } else {
                                                                inlinedVal54 = false;
                                                              }
                                                            } else {
                                                              inlinedVal54 = false;
                                                            }
                                                          } else {
                                                            inlinedVal54 = false;
                                                          }
                                                        } else {
                                                          inlinedVal54 = false;
                                                        }
                                                      } else {
                                                        inlinedVal54 = false;
                                                      }
                                                    } else {
                                                      inlinedVal54 = false;
                                                    }
                                                    inlinedVal35 = inlinedVal54;
                                                  } else {
                                                    inlinedVal35 = false;
                                                  }
                                                } else {
                                                  inlinedVal35 = false;
                                                }
                                              } else {
                                                inlinedVal35 = false;
                                              }
                                            } else {
                                              inlinedVal35 = false;
                                            }
                                          } else {
                                            inlinedVal35 = false;
                                          }
                                        } else {
                                          inlinedVal35 = false;
                                        }
                                      } else {
                                        inlinedVal35 = false;
                                      }
                                    } else {
                                      inlinedVal35 = false;
                                    }
                                  } else {
                                    inlinedVal35 = false;
                                  }
                                  inlinedVal = inlinedVal35;
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
    let inlinedVal4, p2, Cons_tail1, inlinedVal5, inlinedVal6, arg$Some$0$1, inlinedVal7;
    p2 = minimax1.X;
    Cons_tail1 = gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
    inlinedVal7 = minimax1[listNth$accessorSymbol](b, 0);
    if (inlinedVal7 instanceof minimax1.Some.class) {
      arg$Some$0$1 = inlinedVal7.value;
      inlinedVal6 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$1);
      if (inlinedVal6 === true) {
        let inlinedVal8, inlinedVal9, scrut, arg$Some$0$2;
        scrut = minimax1[find$accessorSymbol](b, 1);
        if (scrut instanceof minimax1.Some.class) {
          arg$Some$0$2 = scrut.value;
          inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
          if (inlinedVal9 === true) {
            let fv_tmp, inlinedVal10;
            fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
            if (fv_tmp === true) {
              inlinedVal10 = true;
            } else {
              inlinedVal10 = false;
            }
            inlinedVal8 = inlinedVal10;
          } else {
            inlinedVal8 = false;
          }
        } else if (scrut instanceof minimax1.None.class) {
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
      let inlinedVal8, inlinedVal9, scrut, arg$Some$0$2;
      scrut = minimax1[find$accessorSymbol](b, 3);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$2 = scrut.value;
        inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
        if (inlinedVal9 === true) {
          let fv_tmp, inlinedVal10;
          fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
          if (fv_tmp === true) {
            let Cons_tail2, fv_p, inlinedVal11;
            Cons_tail2 = gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
            fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
            inlinedVal11 = gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail2, undefined, fv_p);
            inlinedVal10 = inlinedVal11;
          } else {
            inlinedVal10 = false;
          }
          inlinedVal8 = inlinedVal10;
        } else {
          inlinedVal8 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
        inlinedVal8 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal8 === false) {
        let fv_tmp, inlinedVal10;
        fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
        if (fv_tmp === true) {
          let Cons_tail2, fv_p, inlinedVal11;
          Cons_tail2 = gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail1);
          fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
          inlinedVal11 = gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail2, undefined, fv_p);
          inlinedVal10 = inlinedVal11;
        } else {
          inlinedVal10 = false;
        }
        if (inlinedVal10 === false) {
          let Cons_tail2, inlinedVal11, inlinedVal12, arg$Some$0$3, inlinedVal13;
          Cons_tail2 = gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
          inlinedVal13 = minimax1[listNth$accessorSymbol](b, 0);
          if (inlinedVal13 instanceof minimax1.Some.class) {
            arg$Some$0$3 = inlinedVal13.value;
            inlinedVal12 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$3);
            if (inlinedVal12 === true) {
              let inlinedVal14, inlinedVal15, scrut1, arg$Some$0$4;
              scrut1 = minimax1[find$accessorSymbol](b, 3);
              if (scrut1 instanceof minimax1.Some.class) {
                arg$Some$0$4 = scrut1.value;
                inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
                if (inlinedVal15 === true) {
                  let fv_tmp1, inlinedVal16;
                  fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                  if (fv_tmp1 === true) {
                    inlinedVal16 = true;
                  } else {
                    inlinedVal16 = false;
                  }
                  inlinedVal14 = inlinedVal16;
                } else {
                  inlinedVal14 = false;
                }
              } else if (scrut1 instanceof minimax1.None.class) {
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
            let inlinedVal14, inlinedVal15, scrut1, arg$Some$0$4;
            scrut1 = minimax1[find$accessorSymbol](b, 1);
            if (scrut1 instanceof minimax1.Some.class) {
              arg$Some$0$4 = scrut1.value;
              inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
              if (inlinedVal15 === true) {
                let fv_tmp1, inlinedVal16;
                fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                if (fv_tmp1 === true) {
                  let Cons_tail3, fv_p, inlinedVal17;
                  Cons_tail3 = gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                  fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                  inlinedVal17 = gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail3, undefined, fv_p);
                  inlinedVal16 = inlinedVal17;
                } else {
                  inlinedVal16 = false;
                }
                inlinedVal14 = inlinedVal16;
              } else {
                inlinedVal14 = false;
              }
            } else if (scrut1 instanceof minimax1.None.class) {
              inlinedVal14 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal14 === false) {
              let fv_tmp1, inlinedVal16;
              fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
              if (fv_tmp1 === true) {
                let Cons_tail3, fv_p, inlinedVal17;
                Cons_tail3 = gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail2);
                fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                inlinedVal17 = gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail3, undefined, fv_p);
                inlinedVal16 = inlinedVal17;
              } else {
                inlinedVal16 = false;
              }
              if (inlinedVal16 === false) {
                let inlinedVal17, inlinedVal18, arg$Some$0$5, inlinedVal19;
                inlinedVal19 = minimax1[listNth$accessorSymbol](b, 0);
                if (inlinedVal19 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = inlinedVal19.value;
                  inlinedVal18 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$5);
                  if (inlinedVal18 === true) {
                    let inlinedVal20, inlinedVal21, scrut2, arg$Some$0$6;
                    scrut2 = minimax1[find$accessorSymbol](b, 4);
                    if (scrut2 instanceof minimax1.Some.class) {
                      arg$Some$0$6 = scrut2.value;
                      inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                      if (inlinedVal21 === true) {
                        let fv_tmp2, inlinedVal22;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(8);
                        if (fv_tmp2 === true) {
                          inlinedVal22 = true;
                        } else {
                          inlinedVal22 = false;
                        }
                        inlinedVal20 = inlinedVal22;
                      } else {
                        inlinedVal20 = false;
                      }
                    } else if (scrut2 instanceof minimax1.None.class) {
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
                  let inlinedVal20, inlinedVal21, scrut2, arg$Some$0$6;
                  scrut2 = minimax1[find$accessorSymbol](b, 2);
                  if (scrut2 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = scrut2.value;
                    inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                    if (inlinedVal21 === true) {
                      let fv_tmp2, inlinedVal22;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                      if (fv_tmp2 === true) {
                        let fv_tmp3, inlinedVal23;
                        fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                        if (fv_tmp3 === true) {
                          inlinedVal23 = true;
                        } else {
                          inlinedVal23 = false;
                        }
                        inlinedVal22 = inlinedVal23;
                      } else {
                        inlinedVal22 = false;
                      }
                      inlinedVal20 = inlinedVal22;
                    } else {
                      inlinedVal20 = false;
                    }
                  } else if (scrut2 instanceof minimax1.None.class) {
                    inlinedVal20 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal20 === false) {
                    let p3, Cons_tail3, inlinedVal22, inlinedVal23, arg$Some$0$7, inlinedVal24;
                    p3 = minimax1.O;
                    Cons_tail3 = gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                    inlinedVal24 = minimax1[listNth$accessorSymbol](b, 0);
                    if (inlinedVal24 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = inlinedVal24.value;
                      inlinedVal23 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$7);
                      if (inlinedVal23 === true) {
                        let inlinedVal25, inlinedVal26, scrut3, arg$Some$0$8;
                        scrut3 = minimax1[find$accessorSymbol](b, 1);
                        if (scrut3 instanceof minimax1.Some.class) {
                          arg$Some$0$8 = scrut3.value;
                          inlinedVal26 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$8);
                          if (inlinedVal26 === true) {
                            let fv_tmp2, inlinedVal27;
                            fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(2);
                            if (fv_tmp2 === true) {
                              inlinedVal27 = true;
                            } else {
                              inlinedVal27 = false;
                            }
                            inlinedVal25 = inlinedVal27;
                          } else {
                            inlinedVal25 = false;
                          }
                        } else if (scrut3 instanceof minimax1.None.class) {
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
                      let inlinedVal25, inlinedVal26, scrut3, arg$Some$0$8;
                      scrut3 = minimax1[find$accessorSymbol](b, 3);
                      if (scrut3 instanceof minimax1.Some.class) {
                        arg$Some$0$8 = scrut3.value;
                        inlinedVal26 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$8);
                        if (inlinedVal26 === true) {
                          let fv_tmp2, inlinedVal27;
                          fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                          if (fv_tmp2 === true) {
                            let Cons_tail4, fv_p, inlinedVal28;
                            Cons_tail4 = gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                            fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                            inlinedVal28 = gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail4, undefined, fv_p);
                            inlinedVal27 = inlinedVal28;
                          } else {
                            inlinedVal27 = false;
                          }
                          inlinedVal25 = inlinedVal27;
                        } else {
                          inlinedVal25 = false;
                        }
                      } else if (scrut3 instanceof minimax1.None.class) {
                        inlinedVal25 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      if (inlinedVal25 === false) {
                        let fv_tmp2, inlinedVal27;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                        if (fv_tmp2 === true) {
                          let Cons_tail4, fv_p, inlinedVal28;
                          Cons_tail4 = gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail3);
                          fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                          inlinedVal28 = gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail4, undefined, fv_p);
                          inlinedVal27 = inlinedVal28;
                        } else {
                          inlinedVal27 = false;
                        }
                        if (inlinedVal27 === false) {
                          let Cons_tail4, inlinedVal28, inlinedVal29, arg$Some$0$9, inlinedVal30;
                          Cons_tail4 = gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                          inlinedVal30 = minimax1[listNth$accessorSymbol](b, 0);
                          if (inlinedVal30 instanceof minimax1.Some.class) {
                            arg$Some$0$9 = inlinedVal30.value;
                            inlinedVal29 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$9);
                            if (inlinedVal29 === true) {
                              let inlinedVal31, inlinedVal32, scrut4, arg$Some$0$10;
                              scrut4 = minimax1[find$accessorSymbol](b, 3);
                              if (scrut4 instanceof minimax1.Some.class) {
                                arg$Some$0$10 = scrut4.value;
                                inlinedVal32 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                                if (inlinedVal32 === true) {
                                  let fv_tmp3, inlinedVal33;
                                  fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                                  if (fv_tmp3 === true) {
                                    inlinedVal33 = true;
                                  } else {
                                    inlinedVal33 = false;
                                  }
                                  inlinedVal31 = inlinedVal33;
                                } else {
                                  inlinedVal31 = false;
                                }
                              } else if (scrut4 instanceof minimax1.None.class) {
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
                            let inlinedVal31, inlinedVal32, scrut4, arg$Some$0$10;
                            scrut4 = minimax1[find$accessorSymbol](b, 1);
                            if (scrut4 instanceof minimax1.Some.class) {
                              arg$Some$0$10 = scrut4.value;
                              inlinedVal32 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                              if (inlinedVal32 === true) {
                                let fv_tmp3, inlinedVal33;
                                fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                                if (fv_tmp3 === true) {
                                  let Cons_tail5, fv_p, inlinedVal34;
                                  Cons_tail5 = gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                  fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                                  inlinedVal34 = gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail5, undefined, fv_p);
                                  inlinedVal33 = inlinedVal34;
                                } else {
                                  inlinedVal33 = false;
                                }
                                inlinedVal31 = inlinedVal33;
                              } else {
                                inlinedVal31 = false;
                              }
                            } else if (scrut4 instanceof minimax1.None.class) {
                              inlinedVal31 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            if (inlinedVal31 === false) {
                              let fv_tmp3, inlinedVal33;
                              fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(2);
                              if (fv_tmp3 === true) {
                                let Cons_tail5, fv_p, inlinedVal34;
                                Cons_tail5 = gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail4);
                                fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                                inlinedVal34 = gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail5, undefined, fv_p);
                                inlinedVal33 = inlinedVal34;
                              } else {
                                inlinedVal33 = false;
                              }
                              if (inlinedVal33 === false) {
                                let inlinedVal34, inlinedVal35, arg$Some$0$11, inlinedVal36;
                                inlinedVal36 = minimax1[listNth$accessorSymbol](b, 0);
                                if (inlinedVal36 instanceof minimax1.Some.class) {
                                  arg$Some$0$11 = inlinedVal36.value;
                                  inlinedVal35 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$11);
                                  if (inlinedVal35 === true) {
                                    let inlinedVal37, inlinedVal38, scrut5, arg$Some$0$12;
                                    scrut5 = minimax1[find$accessorSymbol](b, 4);
                                    if (scrut5 instanceof minimax1.Some.class) {
                                      arg$Some$0$12 = scrut5.value;
                                      inlinedVal38 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                                      if (inlinedVal38 === true) {
                                        let fv_tmp4, inlinedVal39;
                                        fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p3)(b)(8);
                                        if (fv_tmp4 === true) {
                                          inlinedVal39 = true;
                                        } else {
                                          inlinedVal39 = false;
                                        }
                                        inlinedVal37 = inlinedVal39;
                                      } else {
                                        inlinedVal37 = false;
                                      }
                                    } else if (scrut5 instanceof minimax1.None.class) {
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
                                  let inlinedVal37, scrut5, arg$Some$0$12;
                                  scrut5 = minimax1[find$accessorSymbol](b, 2);
                                  if (scrut5 instanceof minimax1.Some.class) {
                                    arg$Some$0$12 = scrut5.value;
                                    inlinedVal37 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                                    if (inlinedVal37 === true) {
                                      let fv_tmp4;
                                      fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                                      if (fv_tmp4 === true) {
                                        let fv_tmp5;
                                        fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                                        if (fv_tmp5 === true) {
                                          inlinedVal4 = -1;
                                        } else {
                                          inlinedVal4 = 0;
                                        }
                                      } else {
                                        inlinedVal4 = 0;
                                      }
                                    } else {
                                      inlinedVal4 = 0;
                                    }
                                  } else if (scrut5 instanceof minimax1.None.class) {
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
    return minimax1.Rose(tmp, undefined)
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
    tmp1 = gameTree_minimax$minimax(inlinedVal4);
    tmp4 = minimax1[moveTo$accessorSymbol](b, p);
    minimax2 = minimax1;
    n = 0;
    m = b;
    acc = gameTree_minimax_successors_allMoves_f_rev_go$l_Nil();
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp5, tmp6, tmp7;
        if (m instanceof minimax2.Nil.class) {
          let acc1, inlinedVal9;
          acc1 = gameTree_minimax_successors_map$l_Nil();
          inlinedVal9 = acc(acc1);
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
            tmp7 = gameTree_minimax_successors_allMoves_f_rev_go$l_Cons(n, acc);
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
    inlinedVal7 = inlinedVal8(undefined, tmp4);
    inlinedVal5 = inlinedVal7(undefined, tmp1);
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
        return minimax1.Rose(tmp2, undefined)
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
        return minimax1.Rose(tmp3, undefined)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
};
doKid$doKid$ = function doKid$doKid$(minimax2) {
  return (t, acc) => {
    return doKid(minimax2, t, acc)
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
main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons = function main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil = function main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons = function main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil = function main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons = function main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil = function main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons = function main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil = function main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons = function main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil = function main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons = function main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil = function main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTree_minimax_successors_allMoves_f_rev_go$l_Cons = function main_gameTree_minimax_successors_allMoves_f_rev_go$l_Cons(Cons_head, Cons_tail) {
  return (fv_acc) => {
    return (eta$0$4, eta$0$5) => {
      let acc;
      acc = main_gameTree_minimax_successors_map$l_Cons(Cons_head, fv_acc);
      return Cons_tail(acc)(eta$0$4, eta$0$5)
    }
  }
};
main_gameTree_minimax_successors_allMoves_f_rev_go$l_Nil = function main_gameTree_minimax_successors_allMoves_f_rev_go$l_Nil() {
  return (fv_acc) => {
    return (eta$0$4, eta$0$5) => {
      return fv_acc(eta$0$4, eta$0$5)
    }
  }
};
main_gameTree_minimax_successors_map$l_Cons = function main_gameTree_minimax_successors_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_gameTree_minimax_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_gameTree_minimax_successors_map$l_Cons$worker = function main_gameTree_minimax_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return main_gameTree_minimax_map$l_Cons(fv_tmp, inlinedVal)
};
main_gameTree_minimax_successors_map$l_Nil = function main_gameTree_minimax_successors_map$l_Nil() {
  return (fv_tmp, fv_f) => {
    return (eta$0$4, eta$0$5) => {
      return minimax1.Nil
    }
  }
};
main_gameTree_minimax_map$l_Cons = function main_gameTree_minimax_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_gameTree_minimax_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_gameTree_minimax_map$l_Cons$worker = function main_gameTree_minimax_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return minimax1.Cons(fv_tmp, inlinedVal)
};
main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons = function main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil = function main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons = function main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil = function main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons = function main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil = function main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons = function main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil = function main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons = function main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil = function main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons = function main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil = function main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
main_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Cons = function main_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Cons(Cons_head, Cons_tail) {
  return (fv_acc) => {
    return (eta$0$4, eta$0$5) => {
      let acc;
      acc = main_gameTreeWithTT_minimaxTT_successors_map$l_Cons(Cons_head, fv_acc);
      return Cons_tail(acc)(eta$0$4, eta$0$5)
    }
  }
};
main_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Nil = function main_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Nil() {
  return (fv_acc) => {
    return (eta$0$4, eta$0$5) => {
      return fv_acc(eta$0$4, eta$0$5)
    }
  }
};
main_gameTreeWithTT_minimaxTT_successors_map$l_Cons = function main_gameTreeWithTT_minimaxTT_successors_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_gameTreeWithTT_minimaxTT_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_gameTreeWithTT_minimaxTT_successors_map$l_Cons$worker = function main_gameTreeWithTT_minimaxTT_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return main_gameTreeWithTT_minimaxTT_map$l_Cons(fv_tmp, inlinedVal)
};
main_gameTreeWithTT_minimaxTT_successors_map$l_Nil = function main_gameTreeWithTT_minimaxTT_successors_map$l_Nil() {
  return (fv_tmp, fv_f) => {
    return (eta$0$4, eta$0$5) => {
      return minimax1.Nil
    }
  }
};
main_gameTreeWithTT_minimaxTT_map$l_Cons = function main_gameTreeWithTT_minimaxTT_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_gameTreeWithTT_minimaxTT_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_gameTreeWithTT_minimaxTT_map$l_Cons$worker = function main_gameTreeWithTT_minimaxTT_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return minimax1.Cons(fv_tmp, inlinedVal)
};
gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Nil = function gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Nil() {
  return (fv_acc) => {
    return (eta$0$4, eta$0$5) => {
      return fv_acc(eta$0$4, eta$0$5)
    }
  }
};
gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Cons = function gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Cons(Cons_head, Cons_tail) {
  return (fv_acc) => {
    return (eta$0$4, eta$0$5) => {
      let acc;
      acc = gameTreeWithTT_minimaxTT_successors_map$l_Cons(Cons_head, fv_acc);
      return Cons_tail(acc)(eta$0$4, eta$0$5)
    }
  }
};
gameTreeWithTT_minimaxTT_successors_map$l_Nil = function gameTreeWithTT_minimaxTT_successors_map$l_Nil() {
  return (fv_tmp, fv_f) => {
    return (eta$0$4, eta$0$5) => {
      return minimax1.Nil
    }
  }
};
gameTreeWithTT_minimaxTT_successors_map$l_Cons = function gameTreeWithTT_minimaxTT_successors_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return gameTreeWithTT_minimaxTT_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
gameTreeWithTT_minimaxTT_successors_map$l_Cons$worker = function gameTreeWithTT_minimaxTT_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return gameTreeWithTT_minimaxTT_map$l_Cons(fv_tmp, inlinedVal)
};
gameTreeWithTT_minimaxTT_map$l_Cons = function gameTreeWithTT_minimaxTT_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return gameTreeWithTT_minimaxTT_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
gameTreeWithTT_minimaxTT_map$l_Cons$worker = function gameTreeWithTT_minimaxTT_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return minimax1.Cons(fv_tmp, inlinedVal)
};
gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons = function gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil = function gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons = function gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil = function gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons = function gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil = function gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons = function gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil = function gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons = function gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil = function gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons = function gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil = function gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTree_minimax_successors_allMoves_f_rev_go$l_Nil = function gameTree_minimax_successors_allMoves_f_rev_go$l_Nil() {
  return (fv_acc) => {
    return (eta$0$4, eta$0$5) => {
      return fv_acc(eta$0$4, eta$0$5)
    }
  }
};
gameTree_minimax_successors_allMoves_f_rev_go$l_Cons = function gameTree_minimax_successors_allMoves_f_rev_go$l_Cons(Cons_head, Cons_tail) {
  return (fv_acc) => {
    return (eta$0$4, eta$0$5) => {
      let acc;
      acc = gameTree_minimax_successors_map$l_Cons(Cons_head, fv_acc);
      return Cons_tail(acc)(eta$0$4, eta$0$5)
    }
  }
};
gameTree_minimax_successors_map$l_Nil = function gameTree_minimax_successors_map$l_Nil() {
  return (fv_tmp, fv_f) => {
    return (eta$0$4, eta$0$5) => {
      return minimax1.Nil
    }
  }
};
gameTree_minimax_successors_map$l_Cons = function gameTree_minimax_successors_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return gameTree_minimax_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
gameTree_minimax_successors_map$l_Cons$worker = function gameTree_minimax_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return gameTree_minimax_map$l_Cons(fv_tmp, inlinedVal)
};
gameTree_minimax_map$l_Cons = function gameTree_minimax_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return gameTree_minimax_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
gameTree_minimax_map$l_Cons$worker = function gameTree_minimax_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return minimax1.Cons(fv_tmp, inlinedVal)
};
gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons = function gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil = function gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons = function gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil = function gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons = function gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil = function gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons = function gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil = function gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons = function gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil = function gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons = function gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil = function gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons = function minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 = function minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil = function minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons = function minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil = function minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons = function minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil = function minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 = function minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker = function minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 = function minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons = function minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 = function minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil = function minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons = function minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil = function minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons = function minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil = function minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 = function minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker = function minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 = function minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons = function minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil = function minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons = function minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil = function minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons = function minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 = function minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil = function minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 = function minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker = function minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 = function minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimax_successors_allMoves_f_rev_go$l_Cons = function minimax_successors_allMoves_f_rev_go$l_Cons(Cons_head, Cons_tail) {
  return (fv_acc) => {
    return (eta$0$4, eta$0$5) => {
      let acc;
      acc = minimax_successors_map$l_Cons(Cons_head, fv_acc);
      return Cons_tail(acc)(eta$0$4, eta$0$5)
    }
  }
};
minimax_successors_allMoves_f_rev_go$l_Nil = function minimax_successors_allMoves_f_rev_go$l_Nil() {
  return (fv_acc) => {
    return (eta$0$4, eta$0$5) => {
      return fv_acc(eta$0$4, eta$0$5)
    }
  }
};
minimax_successors_map$l_Cons = function minimax_successors_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return minimax_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
minimax_successors_map$l_Cons$worker = function minimax_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return minimax_map$l_Cons(fv_tmp, inlinedVal)
};
minimax_successors_map$l_Nil = function minimax_successors_map$l_Nil() {
  return (fv_tmp, fv_f) => {
    return (eta$0$4, eta$0$5) => {
      return minimax1.Nil
    }
  }
};
minimax_map$l_Cons = function minimax_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return minimax_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
minimax_map$l_Cons$worker = function minimax_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return minimax1.Cons(fv_tmp, inlinedVal)
};
successors_allMoves_f_rev_go$l_Nil = function successors_allMoves_f_rev_go$l_Nil() {
  return (fv_acc) => {
    return (eta$0$5) => {
      return fv_acc(eta$0$5)
    }
  }
};
successors_allMoves_f_rev_go$l_Cons = function successors_allMoves_f_rev_go$l_Cons(Cons_head, Cons_tail) {
  return (fv_acc) => {
    return (eta$0$5) => {
      let acc;
      acc = successors_map$l_Cons(Cons_head, fv_acc);
      return Cons_tail(acc)(eta$0$5)
    }
  }
};
successors_map$l_Nil = function successors_map$l_Nil() {
  return (fv_f) => {
    return minimax1.Nil
  }
};
successors_map$l_Cons = function successors_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_f) => {
    return successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_f)
  }
};
successors_map$l_Cons$worker = function successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_f) {
  runtime.safeCall(fv_f(Cons_head));
  Cons_tail(fv_f);
  return runtime.Unit
};
gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons = function gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil = function gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons = function gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil = function gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons = function gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 = function gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil = function gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 = function gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker = function gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 = function gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons = function gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil = function gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons = function gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil = function gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons = function gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 = function gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil = function gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 = function gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker = function gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 = function gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
allMoves_f_rev_go$l_Cons = function allMoves_f_rev_go$l_Cons(Cons_tail) {
  return (fv_minimax) => {
    return runtime.Unit
  }
};
allMoves_f_rev_go$l_Nil = function allMoves_f_rev_go$l_Nil() {
  return (fv_minimax) => {
    return runtime.Unit
  }
};
score_isWinFor_hasDiag_hasTrip_listAll$l_Cons = function score_isWinFor_hasDiag_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 = function score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
score_isWinFor_hasDiag_hasTrip_listAll$l_Nil = function score_isWinFor_hasDiag_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
score_isWinFor_hasCol_hasTrip_listAll$l_Cons = function score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
score_isWinFor_hasCol_hasTrip_listAll$l_Nil = function score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
score_isWinFor_hasRow_hasTrip_listAll$l_Cons = function score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
score_isWinFor_hasRow_hasTrip_listAll$l_Nil = function score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
score_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 = function score_isWinFor_hasDiag_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker = function score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
score_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 = function score_isWinFor_hasDiag_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons = function isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil = function isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons = function isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil = function isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons = function isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker = function isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil = function isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons = function isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil = function isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons = function isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil = function isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
isWinFor_hasRow_hasTrip_listAll$l_Cons = function isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
isWinFor_hasRow_hasTrip_listAll$l_Nil = function isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
isWinFor_hasCol_hasTrip_listAll$l_Cons = function isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
isWinFor_hasCol_hasTrip_listAll$l_Nil = function isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
hasCol_hasTrip_listAll$l_Cons = function hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
hasCol_hasTrip_listAll$l_Cons$worker = function hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
hasCol_hasTrip_listAll$l_Nil = function hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
hasRow_hasTrip_listAll$l_Cons = function hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
hasRow_hasTrip_listAll$l_Cons$worker = function hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
hasRow_hasTrip_listAll$l_Nil = function hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons = function minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil = function minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons = function minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil = function minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons = function minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil = function minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons = function minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil = function minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons = function minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 = function minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil = function minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons = function minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 = function minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil = function minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 = function minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker = function minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 = function minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 = function minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_p) => {
    return minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p)
  }
};
minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker = function minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_p) {
  fv_tmp = runtime.safeCall(fv_p(Cons_head));
  if (fv_tmp === true) {
    return Cons_tail(undefined, fv_p)
  }
  return false;
};
minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 = function minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil() {
  return (fv_tmp, fv_p) => {
    return true
  }
};
minimaxTT_successors_allMoves_f_rev_go$l_Cons = function minimaxTT_successors_allMoves_f_rev_go$l_Cons(Cons_head, Cons_tail) {
  return (fv_acc) => {
    return (eta$0$4, eta$0$5) => {
      let acc;
      acc = minimaxTT_successors_map$l_Cons(Cons_head, fv_acc);
      return Cons_tail(acc)(eta$0$4, eta$0$5)
    }
  }
};
minimaxTT_successors_allMoves_f_rev_go$l_Nil = function minimaxTT_successors_allMoves_f_rev_go$l_Nil() {
  return (fv_acc) => {
    return (eta$0$4, eta$0$5) => {
      return fv_acc(eta$0$4, eta$0$5)
    }
  }
};
minimaxTT_successors_map$l_Cons = function minimaxTT_successors_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return minimaxTT_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
minimaxTT_successors_map$l_Cons$worker = function minimaxTT_successors_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return minimaxTT_map$l_Cons(fv_tmp, inlinedVal)
};
minimaxTT_successors_map$l_Nil = function minimaxTT_successors_map$l_Nil() {
  return (fv_tmp, fv_f) => {
    return (eta$0$4, eta$0$5) => {
      return minimax1.Nil
    }
  }
};
minimaxTT_map$l_Cons = function minimaxTT_map$l_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return minimaxTT_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
minimaxTT_map$l_Cons$worker = function minimaxTT_map$l_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return minimax1.Cons(fv_tmp, inlinedVal)
};
doKid$ = function doKid$(minimax2) {
  return (t, acc) => {
    return doKid$$doKid(minimax2, t, acc)
  }
};
doKid = function doKid(minimax2, t, acc) {
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
      f = doKid$doKid$(minimax2);
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
lambda$3 = (undefined, function (unused) {
  return () => {
    return unused
  }
});
minimaxTT = function minimaxTT(minimax2, transTable, p) {
  return (b) => {
    return minimaxTT$worker(minimax2, transTable, p, b)
  }
};
minimaxTT$worker = function minimaxTT$worker(minimax2, transTable, p, b) {
  let tmp, inlinedVal, p1, Cons_tail, inlinedVal1, inlinedVal2, arg$Some$0$, inlinedVal3;
  p1 = minimax1.X;
  Cons_tail = minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
  inlinedVal3 = minimax1[listNth$accessorSymbol](b, 0);
  if (inlinedVal3 instanceof minimax1.Some.class) {
    arg$Some$0$ = inlinedVal3.value;
    inlinedVal2 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$);
    if (inlinedVal2 === true) {
      let inlinedVal4, inlinedVal5, scrut, arg$Some$0$1;
      scrut = minimax1[find$accessorSymbol](b, 1);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$1 = scrut.value;
        inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
        if (inlinedVal5 === true) {
          let fv_tmp, inlinedVal6;
          fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(2);
          if (fv_tmp === true) {
            inlinedVal6 = true;
          } else {
            inlinedVal6 = false;
          }
          inlinedVal4 = inlinedVal6;
        } else {
          inlinedVal4 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
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
    let inlinedVal4, inlinedVal5, scrut, arg$Some$0$1;
    scrut = minimax1[find$accessorSymbol](b, 3);
    if (scrut instanceof minimax1.Some.class) {
      arg$Some$0$1 = scrut.value;
      inlinedVal5 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$1);
      if (inlinedVal5 === true) {
        let fv_tmp, inlinedVal6;
        fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
        if (fv_tmp === true) {
          let Cons_tail1, fv_p, inlinedVal7;
          Cons_tail1 = minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
          fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
          inlinedVal7 = minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail1, undefined, fv_p);
          inlinedVal6 = inlinedVal7;
        } else {
          inlinedVal6 = false;
        }
        inlinedVal4 = inlinedVal6;
      } else {
        inlinedVal4 = false;
      }
    } else if (scrut instanceof minimax1.None.class) {
      inlinedVal4 = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal4 === false) {
      let fv_tmp, inlinedVal6;
      fv_tmp = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
      if (fv_tmp === true) {
        let Cons_tail1, fv_p, inlinedVal7;
        Cons_tail1 = minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail);
        fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
        inlinedVal7 = minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail1, undefined, fv_p);
        inlinedVal6 = inlinedVal7;
      } else {
        inlinedVal6 = false;
      }
      if (inlinedVal6 === false) {
        let Cons_tail1, inlinedVal7, inlinedVal8, arg$Some$0$2, inlinedVal9;
        Cons_tail1 = minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
        inlinedVal9 = minimax1[listNth$accessorSymbol](b, 0);
        if (inlinedVal9 instanceof minimax1.Some.class) {
          arg$Some$0$2 = inlinedVal9.value;
          inlinedVal8 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$2);
          if (inlinedVal8 === true) {
            let inlinedVal10, inlinedVal11, scrut1, arg$Some$0$3;
            scrut1 = minimax1[find$accessorSymbol](b, 3);
            if (scrut1 instanceof minimax1.Some.class) {
              arg$Some$0$3 = scrut1.value;
              inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
              if (inlinedVal11 === true) {
                let fv_tmp1, inlinedVal12;
                fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
                if (fv_tmp1 === true) {
                  inlinedVal12 = true;
                } else {
                  inlinedVal12 = false;
                }
                inlinedVal10 = inlinedVal12;
              } else {
                inlinedVal10 = false;
              }
            } else if (scrut1 instanceof minimax1.None.class) {
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
          let inlinedVal10, inlinedVal11, scrut1, arg$Some$0$3;
          scrut1 = minimax1[find$accessorSymbol](b, 1);
          if (scrut1 instanceof minimax1.Some.class) {
            arg$Some$0$3 = scrut1.value;
            inlinedVal11 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$3);
            if (inlinedVal11 === true) {
              let fv_tmp1, inlinedVal12;
              fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
              if (fv_tmp1 === true) {
                let Cons_tail2, fv_p, inlinedVal13;
                Cons_tail2 = minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
                inlinedVal13 = minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail2, undefined, fv_p);
                inlinedVal12 = inlinedVal13;
              } else {
                inlinedVal12 = false;
              }
              inlinedVal10 = inlinedVal12;
            } else {
              inlinedVal10 = false;
            }
          } else if (scrut1 instanceof minimax1.None.class) {
            inlinedVal10 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          if (inlinedVal10 === false) {
            let fv_tmp1, inlinedVal12;
            fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p1)(b)(2);
            if (fv_tmp1 === true) {
              let Cons_tail2, fv_p, inlinedVal13;
              Cons_tail2 = minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail1);
              fv_p = minimax1[playerOccupies$accessorSymbol](p1)(b);
              inlinedVal13 = minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail2, undefined, fv_p);
              inlinedVal12 = inlinedVal13;
            } else {
              inlinedVal12 = false;
            }
            if (inlinedVal12 === false) {
              let inlinedVal13, inlinedVal14, arg$Some$0$4, inlinedVal15;
              inlinedVal15 = minimax1[listNth$accessorSymbol](b, 0);
              if (inlinedVal15 instanceof minimax1.Some.class) {
                arg$Some$0$4 = inlinedVal15.value;
                inlinedVal14 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$4);
                if (inlinedVal14 === true) {
                  let inlinedVal16, inlinedVal17, scrut2, arg$Some$0$5;
                  scrut2 = minimax1[find$accessorSymbol](b, 4);
                  if (scrut2 instanceof minimax1.Some.class) {
                    arg$Some$0$5 = scrut2.value;
                    inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                    if (inlinedVal17 === true) {
                      let fv_tmp2, inlinedVal18;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p1)(b)(8);
                      if (fv_tmp2 === true) {
                        inlinedVal18 = true;
                      } else {
                        inlinedVal18 = false;
                      }
                      inlinedVal16 = inlinedVal18;
                    } else {
                      inlinedVal16 = false;
                    }
                  } else if (scrut2 instanceof minimax1.None.class) {
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
                let inlinedVal16, inlinedVal17, scrut2, arg$Some$0$5;
                scrut2 = minimax1[find$accessorSymbol](b, 2);
                if (scrut2 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = scrut2.value;
                  inlinedVal17 = minimax1[playerEq$accessorSymbol](p1, arg$Some$0$5);
                  if (inlinedVal17 === true) {
                    let fv_tmp2, inlinedVal18;
                    fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p1)(b)(4);
                    if (fv_tmp2 === true) {
                      let fv_tmp3, inlinedVal19;
                      fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p1)(b)(6);
                      if (fv_tmp3 === true) {
                        inlinedVal19 = true;
                      } else {
                        inlinedVal19 = false;
                      }
                      inlinedVal18 = inlinedVal19;
                    } else {
                      inlinedVal18 = false;
                    }
                    inlinedVal16 = inlinedVal18;
                  } else {
                    inlinedVal16 = false;
                  }
                } else if (scrut2 instanceof minimax1.None.class) {
                  inlinedVal16 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal16 === false) {
                  let p2, Cons_tail2, inlinedVal18, inlinedVal19, arg$Some$0$6, inlinedVal20;
                  p2 = minimax1.O;
                  Cons_tail2 = minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                  inlinedVal20 = minimax1[listNth$accessorSymbol](b, 0);
                  if (inlinedVal20 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = inlinedVal20.value;
                    inlinedVal19 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                    if (inlinedVal19 === true) {
                      let inlinedVal21, inlinedVal22, scrut3, arg$Some$0$7;
                      scrut3 = minimax1[find$accessorSymbol](b, 1);
                      if (scrut3 instanceof minimax1.Some.class) {
                        arg$Some$0$7 = scrut3.value;
                        inlinedVal22 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                        if (inlinedVal22 === true) {
                          let fv_tmp2, inlinedVal23;
                          fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
                          if (fv_tmp2 === true) {
                            inlinedVal23 = true;
                          } else {
                            inlinedVal23 = false;
                          }
                          inlinedVal21 = inlinedVal23;
                        } else {
                          inlinedVal21 = false;
                        }
                      } else if (scrut3 instanceof minimax1.None.class) {
                        inlinedVal21 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal18 = inlinedVal21;
                    } else {
                      inlinedVal18 = false;
                    }
                  } else if (inlinedVal20 instanceof minimax1.None.class) {
                    inlinedVal18 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal18 === false) {
                    let inlinedVal21, inlinedVal22, scrut3, arg$Some$0$7;
                    scrut3 = minimax1[find$accessorSymbol](b, 3);
                    if (scrut3 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = scrut3.value;
                      inlinedVal22 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$7);
                      if (inlinedVal22 === true) {
                        let fv_tmp2, inlinedVal23;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                        if (fv_tmp2 === true) {
                          let Cons_tail3, fv_p, inlinedVal24;
                          Cons_tail3 = minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                          fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                          inlinedVal24 = minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail3, undefined, fv_p);
                          inlinedVal23 = inlinedVal24;
                        } else {
                          inlinedVal23 = false;
                        }
                        inlinedVal21 = inlinedVal23;
                      } else {
                        inlinedVal21 = false;
                      }
                    } else if (scrut3 instanceof minimax1.None.class) {
                      inlinedVal21 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    if (inlinedVal21 === false) {
                      let fv_tmp2, inlinedVal23;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                      if (fv_tmp2 === true) {
                        let Cons_tail3, fv_p, inlinedVal24;
                        Cons_tail3 = minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail2);
                        fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                        inlinedVal24 = minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail3, undefined, fv_p);
                        inlinedVal23 = inlinedVal24;
                      } else {
                        inlinedVal23 = false;
                      }
                      if (inlinedVal23 === false) {
                        let Cons_tail3, inlinedVal24, inlinedVal25, arg$Some$0$8, inlinedVal26;
                        Cons_tail3 = minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                        inlinedVal26 = minimax1[listNth$accessorSymbol](b, 0);
                        if (inlinedVal26 instanceof minimax1.Some.class) {
                          arg$Some$0$8 = inlinedVal26.value;
                          inlinedVal25 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$8);
                          if (inlinedVal25 === true) {
                            let inlinedVal27, inlinedVal28, scrut4, arg$Some$0$9;
                            scrut4 = minimax1[find$accessorSymbol](b, 3);
                            if (scrut4 instanceof minimax1.Some.class) {
                              arg$Some$0$9 = scrut4.value;
                              inlinedVal28 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                              if (inlinedVal28 === true) {
                                let fv_tmp3, inlinedVal29;
                                fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                                if (fv_tmp3 === true) {
                                  inlinedVal29 = true;
                                } else {
                                  inlinedVal29 = false;
                                }
                                inlinedVal27 = inlinedVal29;
                              } else {
                                inlinedVal27 = false;
                              }
                            } else if (scrut4 instanceof minimax1.None.class) {
                              inlinedVal27 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            inlinedVal24 = inlinedVal27;
                          } else {
                            inlinedVal24 = false;
                          }
                        } else if (inlinedVal26 instanceof minimax1.None.class) {
                          inlinedVal24 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        if (inlinedVal24 === false) {
                          let inlinedVal27, inlinedVal28, scrut4, arg$Some$0$9;
                          scrut4 = minimax1[find$accessorSymbol](b, 1);
                          if (scrut4 instanceof minimax1.Some.class) {
                            arg$Some$0$9 = scrut4.value;
                            inlinedVal28 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$9);
                            if (inlinedVal28 === true) {
                              let fv_tmp3, inlinedVal29;
                              fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                              if (fv_tmp3 === true) {
                                let Cons_tail4, fv_p, inlinedVal30;
                                Cons_tail4 = minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                                inlinedVal30 = minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail4, undefined, fv_p);
                                inlinedVal29 = inlinedVal30;
                              } else {
                                inlinedVal29 = false;
                              }
                              inlinedVal27 = inlinedVal29;
                            } else {
                              inlinedVal27 = false;
                            }
                          } else if (scrut4 instanceof minimax1.None.class) {
                            inlinedVal27 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          if (inlinedVal27 === false) {
                            let fv_tmp3, inlinedVal29;
                            fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
                            if (fv_tmp3 === true) {
                              let Cons_tail4, fv_p, inlinedVal30;
                              Cons_tail4 = minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail3);
                              fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                              inlinedVal30 = minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail4, undefined, fv_p);
                              inlinedVal29 = inlinedVal30;
                            } else {
                              inlinedVal29 = false;
                            }
                            if (inlinedVal29 === false) {
                              let inlinedVal30, inlinedVal31, arg$Some$0$10, inlinedVal32;
                              inlinedVal32 = minimax1[listNth$accessorSymbol](b, 0);
                              if (inlinedVal32 instanceof minimax1.Some.class) {
                                arg$Some$0$10 = inlinedVal32.value;
                                inlinedVal31 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$10);
                                if (inlinedVal31 === true) {
                                  let inlinedVal33, inlinedVal34, scrut5, arg$Some$0$11;
                                  scrut5 = minimax1[find$accessorSymbol](b, 4);
                                  if (scrut5 instanceof minimax1.Some.class) {
                                    arg$Some$0$11 = scrut5.value;
                                    inlinedVal34 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                                    if (inlinedVal34 === true) {
                                      let fv_tmp4, inlinedVal35;
                                      fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p2)(b)(8);
                                      if (fv_tmp4 === true) {
                                        inlinedVal35 = true;
                                      } else {
                                        inlinedVal35 = false;
                                      }
                                      inlinedVal33 = inlinedVal35;
                                    } else {
                                      inlinedVal33 = false;
                                    }
                                  } else if (scrut5 instanceof minimax1.None.class) {
                                    inlinedVal33 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  inlinedVal30 = inlinedVal33;
                                } else {
                                  inlinedVal30 = false;
                                }
                              } else if (inlinedVal32 instanceof minimax1.None.class) {
                                inlinedVal30 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              if (inlinedVal30 === false) {
                                let inlinedVal33, inlinedVal34, scrut5, arg$Some$0$11;
                                scrut5 = minimax1[find$accessorSymbol](b, 2);
                                if (scrut5 instanceof minimax1.Some.class) {
                                  arg$Some$0$11 = scrut5.value;
                                  inlinedVal34 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$11);
                                  if (inlinedVal34 === true) {
                                    let fv_tmp4;
                                    fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                                    if (fv_tmp4 === true) {
                                      let fv_tmp5;
                                      fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                                      if (fv_tmp5 === true) {
                                        inlinedVal33 = true;
                                      } else {
                                        inlinedVal33 = false;
                                      }
                                    } else {
                                      inlinedVal33 = false;
                                    }
                                  } else {
                                    inlinedVal33 = false;
                                  }
                                } else if (scrut5 instanceof minimax1.None.class) {
                                  inlinedVal33 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                if (inlinedVal33 === false) {
                                  let inlinedVal35, p3, inlinedVal36;
                                  p3 = minimax1[isSome$accessorSymbol];
                                  inlinedVal36 = minimax1[listAll$tailrec$accessorSymbol](p3, b);
                                  if (inlinedVal36 === true) {
                                    let p4, Cons_tail4, inlinedVal37, inlinedVal38, arg$Some$0$12, inlinedVal39;
                                    p4 = minimax1.X;
                                    Cons_tail4 = minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                    inlinedVal39 = minimax1[listNth$accessorSymbol](b, 0);
                                    if (inlinedVal39 instanceof minimax1.Some.class) {
                                      arg$Some$0$12 = inlinedVal39.value;
                                      inlinedVal38 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$12);
                                      if (inlinedVal38 === true) {
                                        let inlinedVal40, inlinedVal41, scrut6, arg$Some$0$13;
                                        scrut6 = minimax1[find$accessorSymbol](b, 1);
                                        if (scrut6 instanceof minimax1.Some.class) {
                                          arg$Some$0$13 = scrut6.value;
                                          inlinedVal41 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$13);
                                          if (inlinedVal41 === true) {
                                            let fv_tmp4, inlinedVal42;
                                            fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(2);
                                            if (fv_tmp4 === true) {
                                              inlinedVal42 = true;
                                            } else {
                                              inlinedVal42 = false;
                                            }
                                            inlinedVal40 = inlinedVal42;
                                          } else {
                                            inlinedVal40 = false;
                                          }
                                        } else if (scrut6 instanceof minimax1.None.class) {
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
                                      let inlinedVal40, inlinedVal41, scrut6, arg$Some$0$13;
                                      scrut6 = minimax1[find$accessorSymbol](b, 3);
                                      if (scrut6 instanceof minimax1.Some.class) {
                                        arg$Some$0$13 = scrut6.value;
                                        inlinedVal41 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$13);
                                        if (inlinedVal41 === true) {
                                          let fv_tmp4, inlinedVal42;
                                          fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                          if (fv_tmp4 === true) {
                                            let Cons_tail5, fv_p, inlinedVal43;
                                            Cons_tail5 = minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                            fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                            inlinedVal43 = minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail5, undefined, fv_p);
                                            inlinedVal42 = inlinedVal43;
                                          } else {
                                            inlinedVal42 = false;
                                          }
                                          inlinedVal40 = inlinedVal42;
                                        } else {
                                          inlinedVal40 = false;
                                        }
                                      } else if (scrut6 instanceof minimax1.None.class) {
                                        inlinedVal40 = false;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                      if (inlinedVal40 === false) {
                                        let fv_tmp4, inlinedVal42;
                                        fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                        if (fv_tmp4 === true) {
                                          let Cons_tail5, fv_p, inlinedVal43;
                                          Cons_tail5 = minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail4);
                                          fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                          inlinedVal43 = minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail5, undefined, fv_p);
                                          inlinedVal42 = inlinedVal43;
                                        } else {
                                          inlinedVal42 = false;
                                        }
                                        if (inlinedVal42 === false) {
                                          let Cons_tail5, inlinedVal43, inlinedVal44, arg$Some$0$14, inlinedVal45;
                                          Cons_tail5 = minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                          inlinedVal45 = minimax1[listNth$accessorSymbol](b, 0);
                                          if (inlinedVal45 instanceof minimax1.Some.class) {
                                            arg$Some$0$14 = inlinedVal45.value;
                                            inlinedVal44 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$14);
                                            if (inlinedVal44 === true) {
                                              let inlinedVal46, inlinedVal47, scrut7, arg$Some$0$15;
                                              scrut7 = minimax1[find$accessorSymbol](b, 3);
                                              if (scrut7 instanceof minimax1.Some.class) {
                                                arg$Some$0$15 = scrut7.value;
                                                inlinedVal47 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$15);
                                                if (inlinedVal47 === true) {
                                                  let fv_tmp5, inlinedVal48;
                                                  fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                                  if (fv_tmp5 === true) {
                                                    inlinedVal48 = true;
                                                  } else {
                                                    inlinedVal48 = false;
                                                  }
                                                  inlinedVal46 = inlinedVal48;
                                                } else {
                                                  inlinedVal46 = false;
                                                }
                                              } else if (scrut7 instanceof minimax1.None.class) {
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
                                            let inlinedVal46, inlinedVal47, scrut7, arg$Some$0$15;
                                            scrut7 = minimax1[find$accessorSymbol](b, 1);
                                            if (scrut7 instanceof minimax1.Some.class) {
                                              arg$Some$0$15 = scrut7.value;
                                              inlinedVal47 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$15);
                                              if (inlinedVal47 === true) {
                                                let fv_tmp5, inlinedVal48;
                                                fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                                if (fv_tmp5 === true) {
                                                  let Cons_tail6, fv_p, inlinedVal49;
                                                  Cons_tail6 = minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                                  fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                                  inlinedVal49 = minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail6, undefined, fv_p);
                                                  inlinedVal48 = inlinedVal49;
                                                } else {
                                                  inlinedVal48 = false;
                                                }
                                                inlinedVal46 = inlinedVal48;
                                              } else {
                                                inlinedVal46 = false;
                                              }
                                            } else if (scrut7 instanceof minimax1.None.class) {
                                              inlinedVal46 = false;
                                            } else {
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                            }
                                            if (inlinedVal46 === false) {
                                              let fv_tmp5, inlinedVal48;
                                              fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p4)(b)(2);
                                              if (fv_tmp5 === true) {
                                                let Cons_tail6, fv_p, inlinedVal49;
                                                Cons_tail6 = minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail5);
                                                fv_p = minimax1[playerOccupies$accessorSymbol](p4)(b);
                                                inlinedVal49 = minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail6, undefined, fv_p);
                                                inlinedVal48 = inlinedVal49;
                                              } else {
                                                inlinedVal48 = false;
                                              }
                                              if (inlinedVal48 === false) {
                                                let inlinedVal49, inlinedVal50, arg$Some$0$16, inlinedVal51;
                                                inlinedVal51 = minimax1[listNth$accessorSymbol](b, 0);
                                                if (inlinedVal51 instanceof minimax1.Some.class) {
                                                  arg$Some$0$16 = inlinedVal51.value;
                                                  inlinedVal50 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$16);
                                                  if (inlinedVal50 === true) {
                                                    let inlinedVal52, inlinedVal53, scrut8, arg$Some$0$17;
                                                    scrut8 = minimax1[find$accessorSymbol](b, 4);
                                                    if (scrut8 instanceof minimax1.Some.class) {
                                                      arg$Some$0$17 = scrut8.value;
                                                      inlinedVal53 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                                      if (inlinedVal53 === true) {
                                                        let fv_tmp6, inlinedVal54;
                                                        fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p4)(b)(8);
                                                        if (fv_tmp6 === true) {
                                                          inlinedVal54 = true;
                                                        } else {
                                                          inlinedVal54 = false;
                                                        }
                                                        inlinedVal52 = inlinedVal54;
                                                      } else {
                                                        inlinedVal52 = false;
                                                      }
                                                    } else if (scrut8 instanceof minimax1.None.class) {
                                                      inlinedVal52 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    inlinedVal49 = inlinedVal52;
                                                  } else {
                                                    inlinedVal49 = false;
                                                  }
                                                } else if (inlinedVal51 instanceof minimax1.None.class) {
                                                  inlinedVal49 = false;
                                                } else {
                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                }
                                                if (inlinedVal49 === false) {
                                                  let inlinedVal52, inlinedVal53, scrut8, arg$Some$0$17;
                                                  scrut8 = minimax1[find$accessorSymbol](b, 2);
                                                  if (scrut8 instanceof minimax1.Some.class) {
                                                    arg$Some$0$17 = scrut8.value;
                                                    inlinedVal53 = minimax1[playerEq$accessorSymbol](p4, arg$Some$0$17);
                                                    if (inlinedVal53 === true) {
                                                      let fv_tmp6, inlinedVal54;
                                                      fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p4)(b)(4);
                                                      if (fv_tmp6 === true) {
                                                        let fv_tmp7, inlinedVal55;
                                                        fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p4)(b)(6);
                                                        if (fv_tmp7 === true) {
                                                          inlinedVal55 = true;
                                                        } else {
                                                          inlinedVal55 = false;
                                                        }
                                                        inlinedVal54 = inlinedVal55;
                                                      } else {
                                                        inlinedVal54 = false;
                                                      }
                                                      inlinedVal52 = inlinedVal54;
                                                    } else {
                                                      inlinedVal52 = false;
                                                    }
                                                  } else if (scrut8 instanceof minimax1.None.class) {
                                                    inlinedVal52 = false;
                                                  } else {
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                  }
                                                  if (inlinedVal52 === false) {
                                                    let p5, inlinedVal54, Cons_tail6, inlinedVal55, inlinedVal56, arg$Some$0$18, inlinedVal57;
                                                    p5 = minimax1.O;
                                                    Cons_tail6 = minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                                    inlinedVal57 = minimax1[listNth$accessorSymbol](b, 0);
                                                    if (inlinedVal57 instanceof minimax1.Some.class) {
                                                      arg$Some$0$18 = inlinedVal57.value;
                                                      inlinedVal56 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$18);
                                                      if (inlinedVal56 === true) {
                                                        let inlinedVal58, inlinedVal59, scrut9, arg$Some$0$19;
                                                        scrut9 = minimax1[find$accessorSymbol](b, 1);
                                                        if (scrut9 instanceof minimax1.Some.class) {
                                                          arg$Some$0$19 = scrut9.value;
                                                          inlinedVal59 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$19);
                                                          if (inlinedVal59 === true) {
                                                            let fv_tmp6, inlinedVal60;
                                                            fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(2);
                                                            if (fv_tmp6 === true) {
                                                              inlinedVal60 = true;
                                                            } else {
                                                              inlinedVal60 = false;
                                                            }
                                                            inlinedVal58 = inlinedVal60;
                                                          } else {
                                                            inlinedVal58 = false;
                                                          }
                                                        } else if (scrut9 instanceof minimax1.None.class) {
                                                          inlinedVal58 = false;
                                                        } else {
                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                        }
                                                        inlinedVal55 = inlinedVal58;
                                                      } else {
                                                        inlinedVal55 = false;
                                                      }
                                                    } else if (inlinedVal57 instanceof minimax1.None.class) {
                                                      inlinedVal55 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    if (inlinedVal55 === false) {
                                                      let inlinedVal58, inlinedVal59, scrut9, arg$Some$0$19;
                                                      scrut9 = minimax1[find$accessorSymbol](b, 3);
                                                      if (scrut9 instanceof minimax1.Some.class) {
                                                        arg$Some$0$19 = scrut9.value;
                                                        inlinedVal59 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$19);
                                                        if (inlinedVal59 === true) {
                                                          let fv_tmp6, inlinedVal60;
                                                          fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                          if (fv_tmp6 === true) {
                                                            let Cons_tail7, fv_p, inlinedVal61;
                                                            Cons_tail7 = minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                                            fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                            inlinedVal61 = minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail7, undefined, fv_p);
                                                            inlinedVal60 = inlinedVal61;
                                                          } else {
                                                            inlinedVal60 = false;
                                                          }
                                                          inlinedVal58 = inlinedVal60;
                                                        } else {
                                                          inlinedVal58 = false;
                                                        }
                                                      } else if (scrut9 instanceof minimax1.None.class) {
                                                        inlinedVal58 = false;
                                                      } else {
                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                      }
                                                      if (inlinedVal58 === false) {
                                                        let fv_tmp6, inlinedVal60;
                                                        fv_tmp6 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                        if (fv_tmp6 === true) {
                                                          let Cons_tail7, fv_p, inlinedVal61;
                                                          Cons_tail7 = minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail6);
                                                          fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                          inlinedVal61 = minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail7, undefined, fv_p);
                                                          inlinedVal60 = inlinedVal61;
                                                        } else {
                                                          inlinedVal60 = false;
                                                        }
                                                        if (inlinedVal60 === false) {
                                                          let Cons_tail7, inlinedVal61, inlinedVal62, arg$Some$0$20, inlinedVal63;
                                                          Cons_tail7 = minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                                          inlinedVal63 = minimax1[listNth$accessorSymbol](b, 0);
                                                          if (inlinedVal63 instanceof minimax1.Some.class) {
                                                            arg$Some$0$20 = inlinedVal63.value;
                                                            inlinedVal62 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$20);
                                                            if (inlinedVal62 === true) {
                                                              let inlinedVal64, inlinedVal65, scrut10, arg$Some$0$21;
                                                              scrut10 = minimax1[find$accessorSymbol](b, 3);
                                                              if (scrut10 instanceof minimax1.Some.class) {
                                                                arg$Some$0$21 = scrut10.value;
                                                                inlinedVal65 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$21);
                                                                if (inlinedVal65 === true) {
                                                                  let fv_tmp7, inlinedVal66;
                                                                  fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                                  if (fv_tmp7 === true) {
                                                                    inlinedVal66 = true;
                                                                  } else {
                                                                    inlinedVal66 = false;
                                                                  }
                                                                  inlinedVal64 = inlinedVal66;
                                                                } else {
                                                                  inlinedVal64 = false;
                                                                }
                                                              } else if (scrut10 instanceof minimax1.None.class) {
                                                                inlinedVal64 = false;
                                                              } else {
                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                              }
                                                              inlinedVal61 = inlinedVal64;
                                                            } else {
                                                              inlinedVal61 = false;
                                                            }
                                                          } else if (inlinedVal63 instanceof minimax1.None.class) {
                                                            inlinedVal61 = false;
                                                          } else {
                                                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                          }
                                                          if (inlinedVal61 === false) {
                                                            let inlinedVal64, inlinedVal65, scrut10, arg$Some$0$21;
                                                            scrut10 = minimax1[find$accessorSymbol](b, 1);
                                                            if (scrut10 instanceof minimax1.Some.class) {
                                                              arg$Some$0$21 = scrut10.value;
                                                              inlinedVal65 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$21);
                                                              if (inlinedVal65 === true) {
                                                                let fv_tmp7, inlinedVal66;
                                                                fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                                if (fv_tmp7 === true) {
                                                                  let Cons_tail8, fv_p, inlinedVal67;
                                                                  Cons_tail8 = minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                                                  fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                                  inlinedVal67 = minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail8, undefined, fv_p);
                                                                  inlinedVal66 = inlinedVal67;
                                                                } else {
                                                                  inlinedVal66 = false;
                                                                }
                                                                inlinedVal64 = inlinedVal66;
                                                              } else {
                                                                inlinedVal64 = false;
                                                              }
                                                            } else if (scrut10 instanceof minimax1.None.class) {
                                                              inlinedVal64 = false;
                                                            } else {
                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                            }
                                                            if (inlinedVal64 === false) {
                                                              let fv_tmp7, inlinedVal66;
                                                              fv_tmp7 = minimax1[playerOccupies$accessorSymbol](p5)(b)(2);
                                                              if (fv_tmp7 === true) {
                                                                let Cons_tail8, fv_p, inlinedVal67;
                                                                Cons_tail8 = minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail7);
                                                                fv_p = minimax1[playerOccupies$accessorSymbol](p5)(b);
                                                                inlinedVal67 = minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail8, undefined, fv_p);
                                                                inlinedVal66 = inlinedVal67;
                                                              } else {
                                                                inlinedVal66 = false;
                                                              }
                                                              if (inlinedVal66 === false) {
                                                                let inlinedVal67, inlinedVal68, arg$Some$0$22, inlinedVal69;
                                                                inlinedVal69 = minimax1[listNth$accessorSymbol](b, 0);
                                                                if (inlinedVal69 instanceof minimax1.Some.class) {
                                                                  arg$Some$0$22 = inlinedVal69.value;
                                                                  inlinedVal68 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$22);
                                                                  if (inlinedVal68 === true) {
                                                                    let inlinedVal70, inlinedVal71, scrut11, arg$Some$0$23;
                                                                    scrut11 = minimax1[find$accessorSymbol](b, 4);
                                                                    if (scrut11 instanceof minimax1.Some.class) {
                                                                      arg$Some$0$23 = scrut11.value;
                                                                      inlinedVal71 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$23);
                                                                      if (inlinedVal71 === true) {
                                                                        let fv_tmp8, inlinedVal72;
                                                                        fv_tmp8 = minimax1[playerOccupies$accessorSymbol](p5)(b)(8);
                                                                        if (fv_tmp8 === true) {
                                                                          inlinedVal72 = true;
                                                                        } else {
                                                                          inlinedVal72 = false;
                                                                        }
                                                                        inlinedVal70 = inlinedVal72;
                                                                      } else {
                                                                        inlinedVal70 = false;
                                                                      }
                                                                    } else if (scrut11 instanceof minimax1.None.class) {
                                                                      inlinedVal70 = false;
                                                                    } else {
                                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                    }
                                                                    inlinedVal67 = inlinedVal70;
                                                                  } else {
                                                                    inlinedVal67 = false;
                                                                  }
                                                                } else if (inlinedVal69 instanceof minimax1.None.class) {
                                                                  inlinedVal67 = false;
                                                                } else {
                                                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                }
                                                                if (inlinedVal67 === false) {
                                                                  let inlinedVal70, scrut11, arg$Some$0$23;
                                                                  scrut11 = minimax1[find$accessorSymbol](b, 2);
                                                                  if (scrut11 instanceof minimax1.Some.class) {
                                                                    arg$Some$0$23 = scrut11.value;
                                                                    inlinedVal70 = minimax1[playerEq$accessorSymbol](p5, arg$Some$0$23);
                                                                    if (inlinedVal70 === true) {
                                                                      let fv_tmp8;
                                                                      fv_tmp8 = minimax1[playerOccupies$accessorSymbol](p5)(b)(4);
                                                                      if (fv_tmp8 === true) {
                                                                        let fv_tmp9;
                                                                        fv_tmp9 = minimax1[playerOccupies$accessorSymbol](p5)(b)(6);
                                                                        if (fv_tmp9 === true) {
                                                                          inlinedVal54 = false;
                                                                        } else {
                                                                          inlinedVal54 = true;
                                                                        }
                                                                      } else {
                                                                        inlinedVal54 = true;
                                                                      }
                                                                    } else {
                                                                      inlinedVal54 = true;
                                                                    }
                                                                  } else if (scrut11 instanceof minimax1.None.class) {
                                                                    inlinedVal54 = true;
                                                                  } else {
                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                  }
                                                                } else {
                                                                  inlinedVal54 = false;
                                                                }
                                                              } else {
                                                                inlinedVal54 = false;
                                                              }
                                                            } else {
                                                              inlinedVal54 = false;
                                                            }
                                                          } else {
                                                            inlinedVal54 = false;
                                                          }
                                                        } else {
                                                          inlinedVal54 = false;
                                                        }
                                                      } else {
                                                        inlinedVal54 = false;
                                                      }
                                                    } else {
                                                      inlinedVal54 = false;
                                                    }
                                                    inlinedVal35 = inlinedVal54;
                                                  } else {
                                                    inlinedVal35 = false;
                                                  }
                                                } else {
                                                  inlinedVal35 = false;
                                                }
                                              } else {
                                                inlinedVal35 = false;
                                              }
                                            } else {
                                              inlinedVal35 = false;
                                            }
                                          } else {
                                            inlinedVal35 = false;
                                          }
                                        } else {
                                          inlinedVal35 = false;
                                        }
                                      } else {
                                        inlinedVal35 = false;
                                      }
                                    } else {
                                      inlinedVal35 = false;
                                    }
                                  } else {
                                    inlinedVal35 = false;
                                  }
                                  inlinedVal = inlinedVal35;
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
    let inlinedVal4, p2, Cons_tail1, inlinedVal5, inlinedVal6, arg$Some$0$1, inlinedVal7;
    p2 = minimax1.X;
    Cons_tail1 = minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
    inlinedVal7 = minimax1[listNth$accessorSymbol](b, 0);
    if (inlinedVal7 instanceof minimax1.Some.class) {
      arg$Some$0$1 = inlinedVal7.value;
      inlinedVal6 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$1);
      if (inlinedVal6 === true) {
        let inlinedVal8, inlinedVal9, scrut, arg$Some$0$2;
        scrut = minimax1[find$accessorSymbol](b, 1);
        if (scrut instanceof minimax1.Some.class) {
          arg$Some$0$2 = scrut.value;
          inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
          if (inlinedVal9 === true) {
            let fv_tmp, inlinedVal10;
            fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
            if (fv_tmp === true) {
              inlinedVal10 = true;
            } else {
              inlinedVal10 = false;
            }
            inlinedVal8 = inlinedVal10;
          } else {
            inlinedVal8 = false;
          }
        } else if (scrut instanceof minimax1.None.class) {
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
      let inlinedVal8, inlinedVal9, scrut, arg$Some$0$2;
      scrut = minimax1[find$accessorSymbol](b, 3);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$2 = scrut.value;
        inlinedVal9 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$2);
        if (inlinedVal9 === true) {
          let fv_tmp, inlinedVal10;
          fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
          if (fv_tmp === true) {
            let Cons_tail2, fv_p, inlinedVal11;
            Cons_tail2 = minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
            fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
            inlinedVal11 = minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail2, undefined, fv_p);
            inlinedVal10 = inlinedVal11;
          } else {
            inlinedVal10 = false;
          }
          inlinedVal8 = inlinedVal10;
        } else {
          inlinedVal8 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
        inlinedVal8 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal8 === false) {
        let fv_tmp, inlinedVal10;
        fv_tmp = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
        if (fv_tmp === true) {
          let Cons_tail2, fv_p, inlinedVal11;
          Cons_tail2 = minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail1);
          fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
          inlinedVal11 = minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail2, undefined, fv_p);
          inlinedVal10 = inlinedVal11;
        } else {
          inlinedVal10 = false;
        }
        if (inlinedVal10 === false) {
          let Cons_tail2, inlinedVal11, inlinedVal12, arg$Some$0$3, inlinedVal13;
          Cons_tail2 = minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
          inlinedVal13 = minimax1[listNth$accessorSymbol](b, 0);
          if (inlinedVal13 instanceof minimax1.Some.class) {
            arg$Some$0$3 = inlinedVal13.value;
            inlinedVal12 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$3);
            if (inlinedVal12 === true) {
              let inlinedVal14, inlinedVal15, scrut1, arg$Some$0$4;
              scrut1 = minimax1[find$accessorSymbol](b, 3);
              if (scrut1 instanceof minimax1.Some.class) {
                arg$Some$0$4 = scrut1.value;
                inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
                if (inlinedVal15 === true) {
                  let fv_tmp1, inlinedVal16;
                  fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                  if (fv_tmp1 === true) {
                    inlinedVal16 = true;
                  } else {
                    inlinedVal16 = false;
                  }
                  inlinedVal14 = inlinedVal16;
                } else {
                  inlinedVal14 = false;
                }
              } else if (scrut1 instanceof minimax1.None.class) {
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
            let inlinedVal14, inlinedVal15, scrut1, arg$Some$0$4;
            scrut1 = minimax1[find$accessorSymbol](b, 1);
            if (scrut1 instanceof minimax1.Some.class) {
              arg$Some$0$4 = scrut1.value;
              inlinedVal15 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$4);
              if (inlinedVal15 === true) {
                let fv_tmp1, inlinedVal16;
                fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                if (fv_tmp1 === true) {
                  let Cons_tail3, fv_p, inlinedVal17;
                  Cons_tail3 = minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                  fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                  inlinedVal17 = minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail3, undefined, fv_p);
                  inlinedVal16 = inlinedVal17;
                } else {
                  inlinedVal16 = false;
                }
                inlinedVal14 = inlinedVal16;
              } else {
                inlinedVal14 = false;
              }
            } else if (scrut1 instanceof minimax1.None.class) {
              inlinedVal14 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal14 === false) {
              let fv_tmp1, inlinedVal16;
              fv_tmp1 = minimax1[playerOccupies$accessorSymbol](p2)(b)(2);
              if (fv_tmp1 === true) {
                let Cons_tail3, fv_p, inlinedVal17;
                Cons_tail3 = minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail2);
                fv_p = minimax1[playerOccupies$accessorSymbol](p2)(b);
                inlinedVal17 = minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail3, undefined, fv_p);
                inlinedVal16 = inlinedVal17;
              } else {
                inlinedVal16 = false;
              }
              if (inlinedVal16 === false) {
                let inlinedVal17, inlinedVal18, arg$Some$0$5, inlinedVal19;
                inlinedVal19 = minimax1[listNth$accessorSymbol](b, 0);
                if (inlinedVal19 instanceof minimax1.Some.class) {
                  arg$Some$0$5 = inlinedVal19.value;
                  inlinedVal18 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$5);
                  if (inlinedVal18 === true) {
                    let inlinedVal20, inlinedVal21, scrut2, arg$Some$0$6;
                    scrut2 = minimax1[find$accessorSymbol](b, 4);
                    if (scrut2 instanceof minimax1.Some.class) {
                      arg$Some$0$6 = scrut2.value;
                      inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                      if (inlinedVal21 === true) {
                        let fv_tmp2, inlinedVal22;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(8);
                        if (fv_tmp2 === true) {
                          inlinedVal22 = true;
                        } else {
                          inlinedVal22 = false;
                        }
                        inlinedVal20 = inlinedVal22;
                      } else {
                        inlinedVal20 = false;
                      }
                    } else if (scrut2 instanceof minimax1.None.class) {
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
                  let inlinedVal20, inlinedVal21, scrut2, arg$Some$0$6;
                  scrut2 = minimax1[find$accessorSymbol](b, 2);
                  if (scrut2 instanceof minimax1.Some.class) {
                    arg$Some$0$6 = scrut2.value;
                    inlinedVal21 = minimax1[playerEq$accessorSymbol](p2, arg$Some$0$6);
                    if (inlinedVal21 === true) {
                      let fv_tmp2, inlinedVal22;
                      fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p2)(b)(4);
                      if (fv_tmp2 === true) {
                        let fv_tmp3, inlinedVal23;
                        fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p2)(b)(6);
                        if (fv_tmp3 === true) {
                          inlinedVal23 = true;
                        } else {
                          inlinedVal23 = false;
                        }
                        inlinedVal22 = inlinedVal23;
                      } else {
                        inlinedVal22 = false;
                      }
                      inlinedVal20 = inlinedVal22;
                    } else {
                      inlinedVal20 = false;
                    }
                  } else if (scrut2 instanceof minimax1.None.class) {
                    inlinedVal20 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal20 === false) {
                    let p3, Cons_tail3, inlinedVal22, inlinedVal23, arg$Some$0$7, inlinedVal24;
                    p3 = minimax1.O;
                    Cons_tail3 = minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                    inlinedVal24 = minimax1[listNth$accessorSymbol](b, 0);
                    if (inlinedVal24 instanceof minimax1.Some.class) {
                      arg$Some$0$7 = inlinedVal24.value;
                      inlinedVal23 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$7);
                      if (inlinedVal23 === true) {
                        let inlinedVal25, inlinedVal26, scrut3, arg$Some$0$8;
                        scrut3 = minimax1[find$accessorSymbol](b, 1);
                        if (scrut3 instanceof minimax1.Some.class) {
                          arg$Some$0$8 = scrut3.value;
                          inlinedVal26 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$8);
                          if (inlinedVal26 === true) {
                            let fv_tmp2, inlinedVal27;
                            fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(2);
                            if (fv_tmp2 === true) {
                              inlinedVal27 = true;
                            } else {
                              inlinedVal27 = false;
                            }
                            inlinedVal25 = inlinedVal27;
                          } else {
                            inlinedVal25 = false;
                          }
                        } else if (scrut3 instanceof minimax1.None.class) {
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
                      let inlinedVal25, inlinedVal26, scrut3, arg$Some$0$8;
                      scrut3 = minimax1[find$accessorSymbol](b, 3);
                      if (scrut3 instanceof minimax1.Some.class) {
                        arg$Some$0$8 = scrut3.value;
                        inlinedVal26 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$8);
                        if (inlinedVal26 === true) {
                          let fv_tmp2, inlinedVal27;
                          fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                          if (fv_tmp2 === true) {
                            let Cons_tail4, fv_p, inlinedVal28;
                            Cons_tail4 = minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                            fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                            inlinedVal28 = minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail4, undefined, fv_p);
                            inlinedVal27 = inlinedVal28;
                          } else {
                            inlinedVal27 = false;
                          }
                          inlinedVal25 = inlinedVal27;
                        } else {
                          inlinedVal25 = false;
                        }
                      } else if (scrut3 instanceof minimax1.None.class) {
                        inlinedVal25 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      if (inlinedVal25 === false) {
                        let fv_tmp2, inlinedVal27;
                        fv_tmp2 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                        if (fv_tmp2 === true) {
                          let Cons_tail4, fv_p, inlinedVal28;
                          Cons_tail4 = minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail3);
                          fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                          inlinedVal28 = minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail4, undefined, fv_p);
                          inlinedVal27 = inlinedVal28;
                        } else {
                          inlinedVal27 = false;
                        }
                        if (inlinedVal27 === false) {
                          let Cons_tail4, inlinedVal28, inlinedVal29, arg$Some$0$9, inlinedVal30;
                          Cons_tail4 = minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                          inlinedVal30 = minimax1[listNth$accessorSymbol](b, 0);
                          if (inlinedVal30 instanceof minimax1.Some.class) {
                            arg$Some$0$9 = inlinedVal30.value;
                            inlinedVal29 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$9);
                            if (inlinedVal29 === true) {
                              let inlinedVal31, inlinedVal32, scrut4, arg$Some$0$10;
                              scrut4 = minimax1[find$accessorSymbol](b, 3);
                              if (scrut4 instanceof minimax1.Some.class) {
                                arg$Some$0$10 = scrut4.value;
                                inlinedVal32 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                                if (inlinedVal32 === true) {
                                  let fv_tmp3, inlinedVal33;
                                  fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                                  if (fv_tmp3 === true) {
                                    inlinedVal33 = true;
                                  } else {
                                    inlinedVal33 = false;
                                  }
                                  inlinedVal31 = inlinedVal33;
                                } else {
                                  inlinedVal31 = false;
                                }
                              } else if (scrut4 instanceof minimax1.None.class) {
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
                            let inlinedVal31, inlinedVal32, scrut4, arg$Some$0$10;
                            scrut4 = minimax1[find$accessorSymbol](b, 1);
                            if (scrut4 instanceof minimax1.Some.class) {
                              arg$Some$0$10 = scrut4.value;
                              inlinedVal32 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$10);
                              if (inlinedVal32 === true) {
                                let fv_tmp3, inlinedVal33;
                                fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                                if (fv_tmp3 === true) {
                                  let Cons_tail5, fv_p, inlinedVal34;
                                  Cons_tail5 = minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                  fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                                  inlinedVal34 = minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail5, undefined, fv_p);
                                  inlinedVal33 = inlinedVal34;
                                } else {
                                  inlinedVal33 = false;
                                }
                                inlinedVal31 = inlinedVal33;
                              } else {
                                inlinedVal31 = false;
                              }
                            } else if (scrut4 instanceof minimax1.None.class) {
                              inlinedVal31 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            if (inlinedVal31 === false) {
                              let fv_tmp3, inlinedVal33;
                              fv_tmp3 = minimax1[playerOccupies$accessorSymbol](p3)(b)(2);
                              if (fv_tmp3 === true) {
                                let Cons_tail5, fv_p, inlinedVal34;
                                Cons_tail5 = minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail4);
                                fv_p = minimax1[playerOccupies$accessorSymbol](p3)(b);
                                inlinedVal34 = minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail5, undefined, fv_p);
                                inlinedVal33 = inlinedVal34;
                              } else {
                                inlinedVal33 = false;
                              }
                              if (inlinedVal33 === false) {
                                let inlinedVal34, inlinedVal35, arg$Some$0$11, inlinedVal36;
                                inlinedVal36 = minimax1[listNth$accessorSymbol](b, 0);
                                if (inlinedVal36 instanceof minimax1.Some.class) {
                                  arg$Some$0$11 = inlinedVal36.value;
                                  inlinedVal35 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$11);
                                  if (inlinedVal35 === true) {
                                    let inlinedVal37, inlinedVal38, scrut5, arg$Some$0$12;
                                    scrut5 = minimax1[find$accessorSymbol](b, 4);
                                    if (scrut5 instanceof minimax1.Some.class) {
                                      arg$Some$0$12 = scrut5.value;
                                      inlinedVal38 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                                      if (inlinedVal38 === true) {
                                        let fv_tmp4, inlinedVal39;
                                        fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p3)(b)(8);
                                        if (fv_tmp4 === true) {
                                          inlinedVal39 = true;
                                        } else {
                                          inlinedVal39 = false;
                                        }
                                        inlinedVal37 = inlinedVal39;
                                      } else {
                                        inlinedVal37 = false;
                                      }
                                    } else if (scrut5 instanceof minimax1.None.class) {
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
                                  let inlinedVal37, scrut5, arg$Some$0$12;
                                  scrut5 = minimax1[find$accessorSymbol](b, 2);
                                  if (scrut5 instanceof minimax1.Some.class) {
                                    arg$Some$0$12 = scrut5.value;
                                    inlinedVal37 = minimax1[playerEq$accessorSymbol](p3, arg$Some$0$12);
                                    if (inlinedVal37 === true) {
                                      let fv_tmp4;
                                      fv_tmp4 = minimax1[playerOccupies$accessorSymbol](p3)(b)(4);
                                      if (fv_tmp4 === true) {
                                        let fv_tmp5;
                                        fv_tmp5 = minimax1[playerOccupies$accessorSymbol](p3)(b)(6);
                                        if (fv_tmp5 === true) {
                                          inlinedVal4 = -1;
                                        } else {
                                          inlinedVal4 = 0;
                                        }
                                      } else {
                                        inlinedVal4 = 0;
                                      }
                                    } else {
                                      inlinedVal4 = 0;
                                    }
                                  } else if (scrut5 instanceof minimax1.None.class) {
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
    return minimax2.Rose(tmp, undefined)
  }
  {
    let scrut, tmp1, inlinedVal4;
    tmp1 = minimax2[boardToIndex$accessorSymbol](p, b);
    inlinedVal4 = transTable.at(tmp1);
    scrut = inlinedVal4 == -2;
    if (scrut === true) {
      let fv_b, fv_minimax, fv_p, fv_tmp, fv_transTable, fv_tmp1, fv_tmp2, inlinedVal5, inlinedVal6, f, g, f1, inlinedVal7, tmp2, tmp3, inlinedVal8, minimax3, n, m, acc, inlinedVal9;
      fv_b = b;
      fv_minimax = minimax2;
      fv_p = p;
      fv_transTable = transTable;
      if (p instanceof fv_minimax.X.class) {
        inlinedVal5 = minimax2.O;
      } else if (p instanceof fv_minimax.O.class) {
        inlinedVal5 = minimax2.X;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      fv_tmp = minimaxTT(minimax2, transTable, inlinedVal5);
      tmp3 = minimax1[moveTo$accessorSymbol](b, p);
      minimax3 = minimax1;
      n = 0;
      m = b;
      acc = minimaxTT_successors_allMoves_f_rev_go$l_Nil();
      inlinedLbl: {
        loopLabel: while (true) {
          let arg$Cons$0$, arg$Cons$1$, tmp4, tmp5, tmp6;
          if (m instanceof minimax3.Nil.class) {
            let acc1, inlinedVal10;
            acc1 = minimaxTT_successors_map$l_Nil();
            inlinedVal10 = acc(acc1);
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
              tmp6 = minimaxTT_successors_allMoves_f_rev_go$l_Cons(n, acc);
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
      inlinedVal8 = inlinedVal9(undefined, tmp3);
      inlinedVal6 = inlinedVal8(undefined, fv_tmp);
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
      return fv_minimax.Rose(fv_tmp2, undefined)
    }
    {
      let fv_tmp;
      fv_tmp = globalThis.Object.freeze([
        b,
        inlinedVal4
      ]);
      return minimax2.Rose(fv_tmp, undefined);
    }
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
  return () => {
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
  tmp = runtime.safeCall(f());
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
  static get [find$accessorSymbol]() { return minimax.#find; }
  static get [playerEq$accessorSymbol]() { return minimax.#playerEq; }
  static get [playerOccupies$accessorSymbol]() { return minimax.#playerOccupies; }
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
  static #listExists$tailrec(p, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof minimax.Nil.class) {
        return false
      } else if (l instanceof minimax.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(p(arg$Cons$0$));
        if (tmp === false) {
          l = arg$Cons$1$;
          continue loopLabel
        }
        return true;
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
  static #listAll(p) {
    return (l) => {
      return minimax.#listAll$tailrec(p, l)
    }
  }
  static #listExists(p) {
    return (l) => {
      minimax.#listExists$tailrec;
      return runtime.Unit
    }
  }
  static #listFoldl(f) {
    return (init) => {
      return (l) => {
        return minimax.#listFoldl$tailrec(f, init, l)
      }
    }
  }
  static #listFoldr(f) {
    return (init) => {
      return (l) => {
        return minimax.#listFoldr$tailrec(f, init, l)
      }
    }
  }
  static #map(f) {
    return (l) => {
      return minimax.#map$tailrec(f, l)
    }
  }
  static #rev(l) {
    let minimax2, l1, acc, inlinedVal;
    minimax2 = minimax;
    l1 = l;
    acc = minimax.Nil;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$1$;
        if (l1 instanceof minimax2.Nil.class) {
          inlinedVal = acc;
          break inlinedLbl
        } else if (l1 instanceof minimax2.Cons.class) {
          arg$Cons$1$ = l1.tail;
          l1 = arg$Cons$1$;
          acc = undefined;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal
  }
  static #isSome(o) {
    if (o instanceof minimax.Some.class) {
      return true
    } else if (o instanceof minimax.None.class) {
      return false
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #not_(b) {
    switch (b) {
      case false:
        return true;
      case true:
        return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  static #compose(f, g) {
    return lambda$(f, g)
  }
  static #intMax(a, b) {
    let scrut;
    scrut = a > b;
    if (scrut === true) {
      return a
    }
    return b;
  }
  static #fillTabulate(arr, i, n, f) {
    loopLabel: while (true) {
      let scrut, tmp, tmp1;
      scrut = i == n;
      if (scrut === true) {
        return arr
      }
      tmp = runtime.safeCall(f());
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
  static #arraySub(a, i) {
    return a.at(i)
  }
  static #arrayUpdate(a, i, x) {
    a[i] = x;
    return runtime.Unit
  }
  static #snd(p) {
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      return runtime.Tuple.get(p, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rows() {
    return runtime.Unit
  }
  static #cols() {
    return runtime.Unit
  }
  static #diags() {
    return runtime.Unit
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
  static #find(b, i) {
    return minimax.#listNth(b, i)
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
  static #playerOccupies(p) {
    return (b) => {
      return (i) => {
        let scrut, arg$Some$0$;
        scrut = minimax.#find(b, i);
        if (scrut instanceof minimax.Some.class) {
          arg$Some$0$ = scrut.value;
          return minimax.#playerEq(p, arg$Some$0$)
        } else if (scrut instanceof minimax.None.class) {
          return false
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
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
  static #hasTrip(b, p) {
    return (t) => {
      let tmp;
      tmp = minimax.#playerOccupies(p)(b);
      return minimax.#listAll(tmp)(t)
    }
  }
  static #hasRow(b, p) {
    let Cons_tail, inlinedVal, inlinedVal1, arg$Some$0$, inlinedVal2;
    Cons_tail = hasRow_hasTrip_listAll$l_Nil();
    inlinedVal2 = minimax1.#listNth(b, 0);
    if (inlinedVal2 instanceof minimax1.Some.class) {
      arg$Some$0$ = inlinedVal2.value;
      inlinedVal1 = minimax1.#playerEq(p, arg$Some$0$);
      if (inlinedVal1 === true) {
        let inlinedVal3, inlinedVal4, scrut, arg$Some$0$1;
        scrut = minimax1.#find(b, 1);
        if (scrut instanceof minimax1.Some.class) {
          arg$Some$0$1 = scrut.value;
          inlinedVal4 = minimax1.#playerEq(p, arg$Some$0$1);
          if (inlinedVal4 === true) {
            let fv_tmp, inlinedVal5;
            fv_tmp = minimax1.#playerOccupies(p)(b)(2);
            if (fv_tmp === true) {
              inlinedVal5 = true;
            } else {
              inlinedVal5 = false;
            }
            inlinedVal3 = inlinedVal5;
          } else {
            inlinedVal3 = false;
          }
        } else if (scrut instanceof minimax1.None.class) {
          inlinedVal3 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        inlinedVal = inlinedVal3;
      } else {
        inlinedVal = false;
      }
    } else if (inlinedVal2 instanceof minimax1.None.class) {
      inlinedVal = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal === false) {
      let inlinedVal3, inlinedVal4, scrut, arg$Some$0$1;
      scrut = minimax1.#find(b, 3);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$1 = scrut.value;
        inlinedVal4 = minimax1.#playerEq(p, arg$Some$0$1);
        if (inlinedVal4 === true) {
          let fv_tmp, inlinedVal5;
          fv_tmp = minimax1.#playerOccupies(p)(b)(4);
          if (fv_tmp === true) {
            let Cons_tail1, fv_p, inlinedVal6;
            Cons_tail1 = hasRow_hasTrip_listAll$l_Nil();
            fv_p = minimax1.#playerOccupies(p)(b);
            inlinedVal6 = hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail1, undefined, fv_p);
            inlinedVal5 = inlinedVal6;
          } else {
            inlinedVal5 = false;
          }
          inlinedVal3 = inlinedVal5;
        } else {
          inlinedVal3 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
        inlinedVal3 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal3 === false) {
        let fv_tmp;
        fv_tmp = minimax1.#playerOccupies(p)(b)(6);
        if (fv_tmp === true) {
          let Cons_tail1, fv_p, inlinedVal5;
          Cons_tail1 = hasRow_hasTrip_listAll$l_Cons(8, Cons_tail);
          fv_p = minimax1.#playerOccupies(p)(b);
          inlinedVal5 = hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail1, undefined, fv_p);
          if (inlinedVal5 === false) {
            return false
          }
          return true;
        }
        return false;
      }
      return true;
    }
    return true;
  }
  static #hasCol(b, p) {
    let Cons_tail, inlinedVal, inlinedVal1, arg$Some$0$, inlinedVal2;
    Cons_tail = hasCol_hasTrip_listAll$l_Nil();
    inlinedVal2 = minimax1.#listNth(b, 0);
    if (inlinedVal2 instanceof minimax1.Some.class) {
      arg$Some$0$ = inlinedVal2.value;
      inlinedVal1 = minimax1.#playerEq(p, arg$Some$0$);
      if (inlinedVal1 === true) {
        let inlinedVal3, inlinedVal4, scrut, arg$Some$0$1;
        scrut = minimax1.#find(b, 3);
        if (scrut instanceof minimax1.Some.class) {
          arg$Some$0$1 = scrut.value;
          inlinedVal4 = minimax1.#playerEq(p, arg$Some$0$1);
          if (inlinedVal4 === true) {
            let fv_tmp, inlinedVal5;
            fv_tmp = minimax1.#playerOccupies(p)(b)(6);
            if (fv_tmp === true) {
              inlinedVal5 = true;
            } else {
              inlinedVal5 = false;
            }
            inlinedVal3 = inlinedVal5;
          } else {
            inlinedVal3 = false;
          }
        } else if (scrut instanceof minimax1.None.class) {
          inlinedVal3 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        inlinedVal = inlinedVal3;
      } else {
        inlinedVal = false;
      }
    } else if (inlinedVal2 instanceof minimax1.None.class) {
      inlinedVal = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal === false) {
      let inlinedVal3, inlinedVal4, scrut, arg$Some$0$1;
      scrut = minimax1.#find(b, 1);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$1 = scrut.value;
        inlinedVal4 = minimax1.#playerEq(p, arg$Some$0$1);
        if (inlinedVal4 === true) {
          let fv_tmp, inlinedVal5;
          fv_tmp = minimax1.#playerOccupies(p)(b)(4);
          if (fv_tmp === true) {
            let Cons_tail1, fv_p, inlinedVal6;
            Cons_tail1 = hasCol_hasTrip_listAll$l_Nil();
            fv_p = minimax1.#playerOccupies(p)(b);
            inlinedVal6 = hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail1, undefined, fv_p);
            inlinedVal5 = inlinedVal6;
          } else {
            inlinedVal5 = false;
          }
          inlinedVal3 = inlinedVal5;
        } else {
          inlinedVal3 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
        inlinedVal3 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal3 === false) {
        let fv_tmp;
        fv_tmp = minimax1.#playerOccupies(p)(b)(2);
        if (fv_tmp === true) {
          let Cons_tail1, fv_p, inlinedVal5;
          Cons_tail1 = hasCol_hasTrip_listAll$l_Cons(8, Cons_tail);
          fv_p = minimax1.#playerOccupies(p)(b);
          inlinedVal5 = hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail1, undefined, fv_p);
          if (inlinedVal5 === false) {
            return false
          }
          return true;
        }
        return false;
      }
      return true;
    }
    return true;
  }
  static #hasDiag(b, p) {
    let inlinedVal, inlinedVal1, arg$Some$0$, inlinedVal2;
    inlinedVal2 = minimax1.#listNth(b, 0);
    if (inlinedVal2 instanceof minimax1.Some.class) {
      arg$Some$0$ = inlinedVal2.value;
      inlinedVal1 = minimax1.#playerEq(p, arg$Some$0$);
      if (inlinedVal1 === true) {
        let inlinedVal3, inlinedVal4, scrut, arg$Some$0$1;
        scrut = minimax1.#find(b, 4);
        if (scrut instanceof minimax1.Some.class) {
          arg$Some$0$1 = scrut.value;
          inlinedVal4 = minimax1.#playerEq(p, arg$Some$0$1);
          if (inlinedVal4 === true) {
            let fv_tmp, inlinedVal5;
            fv_tmp = minimax1.#playerOccupies(p)(b)(8);
            if (fv_tmp === true) {
              inlinedVal5 = true;
            } else {
              inlinedVal5 = false;
            }
            inlinedVal3 = inlinedVal5;
          } else {
            inlinedVal3 = false;
          }
        } else if (scrut instanceof minimax1.None.class) {
          inlinedVal3 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        inlinedVal = inlinedVal3;
      } else {
        inlinedVal = false;
      }
    } else if (inlinedVal2 instanceof minimax1.None.class) {
      inlinedVal = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal === false) {
      let inlinedVal3, scrut, arg$Some$0$1;
      scrut = minimax1.#find(b, 2);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$1 = scrut.value;
        inlinedVal3 = minimax1.#playerEq(p, arg$Some$0$1);
        if (inlinedVal3 === true) {
          let fv_tmp;
          fv_tmp = minimax1.#playerOccupies(p)(b)(4);
          if (fv_tmp === true) {
            let fv_tmp1;
            fv_tmp1 = minimax1.#playerOccupies(p)(b)(6);
            if (fv_tmp1 === true) {
              return true
            }
            return false;
          }
          return false;
        }
        return false;
      } else if (scrut instanceof minimax1.None.class) {
        return false
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    return true;
  }
  static #isFull(b) {
    return minimax.#listAll(minimax.#isSome)(b)
  }
  static #isWinFor(b) {
    return (p) => {
      let Cons_tail, inlinedVal, inlinedVal1, arg$Some$0$, inlinedVal2;
      Cons_tail = isWinFor_hasRow_hasTrip_listAll$l_Nil();
      inlinedVal2 = minimax1.#listNth(b, 0);
      if (inlinedVal2 instanceof minimax1.Some.class) {
        arg$Some$0$ = inlinedVal2.value;
        inlinedVal1 = minimax1.#playerEq(p, arg$Some$0$);
        if (inlinedVal1 === true) {
          let inlinedVal3, inlinedVal4, scrut, arg$Some$0$1;
          scrut = minimax1.#find(b, 1);
          if (scrut instanceof minimax1.Some.class) {
            arg$Some$0$1 = scrut.value;
            inlinedVal4 = minimax1.#playerEq(p, arg$Some$0$1);
            if (inlinedVal4 === true) {
              let fv_tmp, inlinedVal5;
              fv_tmp = minimax1.#playerOccupies(p)(b)(2);
              if (fv_tmp === true) {
                inlinedVal5 = true;
              } else {
                inlinedVal5 = false;
              }
              inlinedVal3 = inlinedVal5;
            } else {
              inlinedVal3 = false;
            }
          } else if (scrut instanceof minimax1.None.class) {
            inlinedVal3 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          inlinedVal = inlinedVal3;
        } else {
          inlinedVal = false;
        }
      } else if (inlinedVal2 instanceof minimax1.None.class) {
        inlinedVal = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal === false) {
        let inlinedVal3, inlinedVal4, scrut, arg$Some$0$1;
        scrut = minimax1.#find(b, 3);
        if (scrut instanceof minimax1.Some.class) {
          arg$Some$0$1 = scrut.value;
          inlinedVal4 = minimax1.#playerEq(p, arg$Some$0$1);
          if (inlinedVal4 === true) {
            let fv_tmp, inlinedVal5;
            fv_tmp = minimax1.#playerOccupies(p)(b)(4);
            if (fv_tmp === true) {
              let Cons_tail1, fv_p, inlinedVal6;
              Cons_tail1 = isWinFor_hasRow_hasTrip_listAll$l_Nil();
              fv_p = minimax1.#playerOccupies(p)(b);
              inlinedVal6 = isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail1, undefined, fv_p);
              inlinedVal5 = inlinedVal6;
            } else {
              inlinedVal5 = false;
            }
            inlinedVal3 = inlinedVal5;
          } else {
            inlinedVal3 = false;
          }
        } else if (scrut instanceof minimax1.None.class) {
          inlinedVal3 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        if (inlinedVal3 === false) {
          let fv_tmp, inlinedVal5;
          fv_tmp = minimax1.#playerOccupies(p)(b)(6);
          if (fv_tmp === true) {
            let Cons_tail1, fv_p, inlinedVal6;
            Cons_tail1 = isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail);
            fv_p = minimax1.#playerOccupies(p)(b);
            inlinedVal6 = isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail1, undefined, fv_p);
            inlinedVal5 = inlinedVal6;
          } else {
            inlinedVal5 = false;
          }
          if (inlinedVal5 === false) {
            let Cons_tail1, inlinedVal6, inlinedVal7, arg$Some$0$2, inlinedVal8;
            Cons_tail1 = isWinFor_hasCol_hasTrip_listAll$l_Nil();
            inlinedVal8 = minimax1.#listNth(b, 0);
            if (inlinedVal8 instanceof minimax1.Some.class) {
              arg$Some$0$2 = inlinedVal8.value;
              inlinedVal7 = minimax1.#playerEq(p, arg$Some$0$2);
              if (inlinedVal7 === true) {
                let inlinedVal9, inlinedVal10, scrut1, arg$Some$0$3;
                scrut1 = minimax1.#find(b, 3);
                if (scrut1 instanceof minimax1.Some.class) {
                  arg$Some$0$3 = scrut1.value;
                  inlinedVal10 = minimax1.#playerEq(p, arg$Some$0$3);
                  if (inlinedVal10 === true) {
                    let fv_tmp1, inlinedVal11;
                    fv_tmp1 = minimax1.#playerOccupies(p)(b)(6);
                    if (fv_tmp1 === true) {
                      inlinedVal11 = true;
                    } else {
                      inlinedVal11 = false;
                    }
                    inlinedVal9 = inlinedVal11;
                  } else {
                    inlinedVal9 = false;
                  }
                } else if (scrut1 instanceof minimax1.None.class) {
                  inlinedVal9 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                inlinedVal6 = inlinedVal9;
              } else {
                inlinedVal6 = false;
              }
            } else if (inlinedVal8 instanceof minimax1.None.class) {
              inlinedVal6 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal6 === false) {
              let inlinedVal9, inlinedVal10, scrut1, arg$Some$0$3;
              scrut1 = minimax1.#find(b, 1);
              if (scrut1 instanceof minimax1.Some.class) {
                arg$Some$0$3 = scrut1.value;
                inlinedVal10 = minimax1.#playerEq(p, arg$Some$0$3);
                if (inlinedVal10 === true) {
                  let fv_tmp1, inlinedVal11;
                  fv_tmp1 = minimax1.#playerOccupies(p)(b)(4);
                  if (fv_tmp1 === true) {
                    let Cons_tail2, fv_p, inlinedVal12;
                    Cons_tail2 = isWinFor_hasCol_hasTrip_listAll$l_Nil();
                    fv_p = minimax1.#playerOccupies(p)(b);
                    inlinedVal12 = isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail2, undefined, fv_p);
                    inlinedVal11 = inlinedVal12;
                  } else {
                    inlinedVal11 = false;
                  }
                  inlinedVal9 = inlinedVal11;
                } else {
                  inlinedVal9 = false;
                }
              } else if (scrut1 instanceof minimax1.None.class) {
                inlinedVal9 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              if (inlinedVal9 === false) {
                let fv_tmp1, inlinedVal11;
                fv_tmp1 = minimax1.#playerOccupies(p)(b)(2);
                if (fv_tmp1 === true) {
                  let Cons_tail2, fv_p, inlinedVal12;
                  Cons_tail2 = isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail1);
                  fv_p = minimax1.#playerOccupies(p)(b);
                  inlinedVal12 = isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail2, undefined, fv_p);
                  inlinedVal11 = inlinedVal12;
                } else {
                  inlinedVal11 = false;
                }
                if (inlinedVal11 === false) {
                  let inlinedVal12, inlinedVal13, arg$Some$0$4, inlinedVal14;
                  inlinedVal14 = minimax1.#listNth(b, 0);
                  if (inlinedVal14 instanceof minimax1.Some.class) {
                    arg$Some$0$4 = inlinedVal14.value;
                    inlinedVal13 = minimax1.#playerEq(p, arg$Some$0$4);
                    if (inlinedVal13 === true) {
                      let inlinedVal15, inlinedVal16, scrut2, arg$Some$0$5;
                      scrut2 = minimax1.#find(b, 4);
                      if (scrut2 instanceof minimax1.Some.class) {
                        arg$Some$0$5 = scrut2.value;
                        inlinedVal16 = minimax1.#playerEq(p, arg$Some$0$5);
                        if (inlinedVal16 === true) {
                          let fv_tmp2, inlinedVal17;
                          fv_tmp2 = minimax1.#playerOccupies(p)(b)(8);
                          if (fv_tmp2 === true) {
                            inlinedVal17 = true;
                          } else {
                            inlinedVal17 = false;
                          }
                          inlinedVal15 = inlinedVal17;
                        } else {
                          inlinedVal15 = false;
                        }
                      } else if (scrut2 instanceof minimax1.None.class) {
                        inlinedVal15 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      inlinedVal12 = inlinedVal15;
                    } else {
                      inlinedVal12 = false;
                    }
                  } else if (inlinedVal14 instanceof minimax1.None.class) {
                    inlinedVal12 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal12 === false) {
                    let inlinedVal15, scrut2, arg$Some$0$5;
                    scrut2 = minimax1.#find(b, 2);
                    if (scrut2 instanceof minimax1.Some.class) {
                      arg$Some$0$5 = scrut2.value;
                      inlinedVal15 = minimax1.#playerEq(p, arg$Some$0$5);
                      if (inlinedVal15 === true) {
                        let fv_tmp2;
                        fv_tmp2 = minimax1.#playerOccupies(p)(b)(4);
                        if (fv_tmp2 === true) {
                          let fv_tmp3;
                          fv_tmp3 = minimax1.#playerOccupies(p)(b)(6);
                          if (fv_tmp3 === true) {
                            return true
                          }
                          return false;
                        }
                        return false;
                      }
                      return false;
                    } else if (scrut2 instanceof minimax1.None.class) {
                      return false
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  return true;
                }
                return true;
              }
              return true;
            }
            return true;
          }
          return true;
        }
        return true;
      }
      return true;
    }
  }
  static #isWin(b) {
    let p, Cons_tail, inlinedVal, inlinedVal1, arg$Some$0$, inlinedVal2;
    p = minimax.X;
    Cons_tail = isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
    inlinedVal2 = minimax1.#listNth(b, 0);
    if (inlinedVal2 instanceof minimax1.Some.class) {
      arg$Some$0$ = inlinedVal2.value;
      inlinedVal1 = minimax1.#playerEq(p, arg$Some$0$);
      if (inlinedVal1 === true) {
        let inlinedVal3, inlinedVal4, scrut, arg$Some$0$1;
        scrut = minimax1.#find(b, 1);
        if (scrut instanceof minimax1.Some.class) {
          arg$Some$0$1 = scrut.value;
          inlinedVal4 = minimax1.#playerEq(p, arg$Some$0$1);
          if (inlinedVal4 === true) {
            let fv_tmp, inlinedVal5;
            fv_tmp = minimax1.#playerOccupies(p)(b)(2);
            if (fv_tmp === true) {
              inlinedVal5 = true;
            } else {
              inlinedVal5 = false;
            }
            inlinedVal3 = inlinedVal5;
          } else {
            inlinedVal3 = false;
          }
        } else if (scrut instanceof minimax1.None.class) {
          inlinedVal3 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        inlinedVal = inlinedVal3;
      } else {
        inlinedVal = false;
      }
    } else if (inlinedVal2 instanceof minimax1.None.class) {
      inlinedVal = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal === false) {
      let inlinedVal3, inlinedVal4, scrut, arg$Some$0$1;
      scrut = minimax1.#find(b, 3);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$1 = scrut.value;
        inlinedVal4 = minimax1.#playerEq(p, arg$Some$0$1);
        if (inlinedVal4 === true) {
          let fv_tmp, inlinedVal5;
          fv_tmp = minimax1.#playerOccupies(p)(b)(4);
          if (fv_tmp === true) {
            let Cons_tail1, fv_p, inlinedVal6;
            Cons_tail1 = isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
            fv_p = minimax1.#playerOccupies(p)(b);
            inlinedVal6 = isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail1, undefined, fv_p);
            inlinedVal5 = inlinedVal6;
          } else {
            inlinedVal5 = false;
          }
          inlinedVal3 = inlinedVal5;
        } else {
          inlinedVal3 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
        inlinedVal3 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal3 === false) {
        let fv_tmp, inlinedVal5;
        fv_tmp = minimax1.#playerOccupies(p)(b)(6);
        if (fv_tmp === true) {
          let Cons_tail1, fv_p, inlinedVal6;
          Cons_tail1 = isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail);
          fv_p = minimax1.#playerOccupies(p)(b);
          inlinedVal6 = isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail1, undefined, fv_p);
          inlinedVal5 = inlinedVal6;
        } else {
          inlinedVal5 = false;
        }
        if (inlinedVal5 === false) {
          let Cons_tail1, inlinedVal6, inlinedVal7, arg$Some$0$2, inlinedVal8;
          Cons_tail1 = isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
          inlinedVal8 = minimax1.#listNth(b, 0);
          if (inlinedVal8 instanceof minimax1.Some.class) {
            arg$Some$0$2 = inlinedVal8.value;
            inlinedVal7 = minimax1.#playerEq(p, arg$Some$0$2);
            if (inlinedVal7 === true) {
              let inlinedVal9, inlinedVal10, scrut1, arg$Some$0$3;
              scrut1 = minimax1.#find(b, 3);
              if (scrut1 instanceof minimax1.Some.class) {
                arg$Some$0$3 = scrut1.value;
                inlinedVal10 = minimax1.#playerEq(p, arg$Some$0$3);
                if (inlinedVal10 === true) {
                  let fv_tmp1, inlinedVal11;
                  fv_tmp1 = minimax1.#playerOccupies(p)(b)(6);
                  if (fv_tmp1 === true) {
                    inlinedVal11 = true;
                  } else {
                    inlinedVal11 = false;
                  }
                  inlinedVal9 = inlinedVal11;
                } else {
                  inlinedVal9 = false;
                }
              } else if (scrut1 instanceof minimax1.None.class) {
                inlinedVal9 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              inlinedVal6 = inlinedVal9;
            } else {
              inlinedVal6 = false;
            }
          } else if (inlinedVal8 instanceof minimax1.None.class) {
            inlinedVal6 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          if (inlinedVal6 === false) {
            let inlinedVal9, inlinedVal10, scrut1, arg$Some$0$3;
            scrut1 = minimax1.#find(b, 1);
            if (scrut1 instanceof minimax1.Some.class) {
              arg$Some$0$3 = scrut1.value;
              inlinedVal10 = minimax1.#playerEq(p, arg$Some$0$3);
              if (inlinedVal10 === true) {
                let fv_tmp1, inlinedVal11;
                fv_tmp1 = minimax1.#playerOccupies(p)(b)(4);
                if (fv_tmp1 === true) {
                  let Cons_tail2, fv_p, inlinedVal12;
                  Cons_tail2 = isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                  fv_p = minimax1.#playerOccupies(p)(b);
                  inlinedVal12 = isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail2, undefined, fv_p);
                  inlinedVal11 = inlinedVal12;
                } else {
                  inlinedVal11 = false;
                }
                inlinedVal9 = inlinedVal11;
              } else {
                inlinedVal9 = false;
              }
            } else if (scrut1 instanceof minimax1.None.class) {
              inlinedVal9 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal9 === false) {
              let fv_tmp1, inlinedVal11;
              fv_tmp1 = minimax1.#playerOccupies(p)(b)(2);
              if (fv_tmp1 === true) {
                let Cons_tail2, fv_p, inlinedVal12;
                Cons_tail2 = isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail1);
                fv_p = minimax1.#playerOccupies(p)(b);
                inlinedVal12 = isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail2, undefined, fv_p);
                inlinedVal11 = inlinedVal12;
              } else {
                inlinedVal11 = false;
              }
              if (inlinedVal11 === false) {
                let inlinedVal12, inlinedVal13, arg$Some$0$4, inlinedVal14;
                inlinedVal14 = minimax1.#listNth(b, 0);
                if (inlinedVal14 instanceof minimax1.Some.class) {
                  arg$Some$0$4 = inlinedVal14.value;
                  inlinedVal13 = minimax1.#playerEq(p, arg$Some$0$4);
                  if (inlinedVal13 === true) {
                    let inlinedVal15, inlinedVal16, scrut2, arg$Some$0$5;
                    scrut2 = minimax1.#find(b, 4);
                    if (scrut2 instanceof minimax1.Some.class) {
                      arg$Some$0$5 = scrut2.value;
                      inlinedVal16 = minimax1.#playerEq(p, arg$Some$0$5);
                      if (inlinedVal16 === true) {
                        let fv_tmp2, inlinedVal17;
                        fv_tmp2 = minimax1.#playerOccupies(p)(b)(8);
                        if (fv_tmp2 === true) {
                          inlinedVal17 = true;
                        } else {
                          inlinedVal17 = false;
                        }
                        inlinedVal15 = inlinedVal17;
                      } else {
                        inlinedVal15 = false;
                      }
                    } else if (scrut2 instanceof minimax1.None.class) {
                      inlinedVal15 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    inlinedVal12 = inlinedVal15;
                  } else {
                    inlinedVal12 = false;
                  }
                } else if (inlinedVal14 instanceof minimax1.None.class) {
                  inlinedVal12 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal12 === false) {
                  let inlinedVal15, inlinedVal16, scrut2, arg$Some$0$5;
                  scrut2 = minimax1.#find(b, 2);
                  if (scrut2 instanceof minimax1.Some.class) {
                    arg$Some$0$5 = scrut2.value;
                    inlinedVal16 = minimax1.#playerEq(p, arg$Some$0$5);
                    if (inlinedVal16 === true) {
                      let fv_tmp2, inlinedVal17;
                      fv_tmp2 = minimax1.#playerOccupies(p)(b)(4);
                      if (fv_tmp2 === true) {
                        let fv_tmp3, inlinedVal18;
                        fv_tmp3 = minimax1.#playerOccupies(p)(b)(6);
                        if (fv_tmp3 === true) {
                          inlinedVal18 = true;
                        } else {
                          inlinedVal18 = false;
                        }
                        inlinedVal17 = inlinedVal18;
                      } else {
                        inlinedVal17 = false;
                      }
                      inlinedVal15 = inlinedVal17;
                    } else {
                      inlinedVal15 = false;
                    }
                  } else if (scrut2 instanceof minimax1.None.class) {
                    inlinedVal15 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal15 === false) {
                    let p1, Cons_tail2, inlinedVal17, inlinedVal18, arg$Some$0$6, inlinedVal19;
                    p1 = minimax.O;
                    Cons_tail2 = isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                    inlinedVal19 = minimax1.#listNth(b, 0);
                    if (inlinedVal19 instanceof minimax1.Some.class) {
                      arg$Some$0$6 = inlinedVal19.value;
                      inlinedVal18 = minimax1.#playerEq(p1, arg$Some$0$6);
                      if (inlinedVal18 === true) {
                        let inlinedVal20, inlinedVal21, scrut3, arg$Some$0$7;
                        scrut3 = minimax1.#find(b, 1);
                        if (scrut3 instanceof minimax1.Some.class) {
                          arg$Some$0$7 = scrut3.value;
                          inlinedVal21 = minimax1.#playerEq(p1, arg$Some$0$7);
                          if (inlinedVal21 === true) {
                            let fv_tmp2, inlinedVal22;
                            fv_tmp2 = minimax1.#playerOccupies(p1)(b)(2);
                            if (fv_tmp2 === true) {
                              inlinedVal22 = true;
                            } else {
                              inlinedVal22 = false;
                            }
                            inlinedVal20 = inlinedVal22;
                          } else {
                            inlinedVal20 = false;
                          }
                        } else if (scrut3 instanceof minimax1.None.class) {
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
                      let inlinedVal20, inlinedVal21, scrut3, arg$Some$0$7;
                      scrut3 = minimax1.#find(b, 3);
                      if (scrut3 instanceof minimax1.Some.class) {
                        arg$Some$0$7 = scrut3.value;
                        inlinedVal21 = minimax1.#playerEq(p1, arg$Some$0$7);
                        if (inlinedVal21 === true) {
                          let fv_tmp2, inlinedVal22;
                          fv_tmp2 = minimax1.#playerOccupies(p1)(b)(4);
                          if (fv_tmp2 === true) {
                            let Cons_tail3, fv_p, inlinedVal23;
                            Cons_tail3 = isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                            fv_p = minimax1.#playerOccupies(p1)(b);
                            inlinedVal23 = isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(5, Cons_tail3, undefined, fv_p);
                            inlinedVal22 = inlinedVal23;
                          } else {
                            inlinedVal22 = false;
                          }
                          inlinedVal20 = inlinedVal22;
                        } else {
                          inlinedVal20 = false;
                        }
                      } else if (scrut3 instanceof minimax1.None.class) {
                        inlinedVal20 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      if (inlinedVal20 === false) {
                        let fv_tmp2, inlinedVal22;
                        fv_tmp2 = minimax1.#playerOccupies(p1)(b)(6);
                        if (fv_tmp2 === true) {
                          let Cons_tail3, fv_p, inlinedVal23;
                          Cons_tail3 = isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail2);
                          fv_p = minimax1.#playerOccupies(p1)(b);
                          inlinedVal23 = isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(7, Cons_tail3, undefined, fv_p);
                          inlinedVal22 = inlinedVal23;
                        } else {
                          inlinedVal22 = false;
                        }
                        if (inlinedVal22 === false) {
                          let Cons_tail3, inlinedVal23, inlinedVal24, arg$Some$0$8, inlinedVal25;
                          Cons_tail3 = isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                          inlinedVal25 = minimax1.#listNth(b, 0);
                          if (inlinedVal25 instanceof minimax1.Some.class) {
                            arg$Some$0$8 = inlinedVal25.value;
                            inlinedVal24 = minimax1.#playerEq(p1, arg$Some$0$8);
                            if (inlinedVal24 === true) {
                              let inlinedVal26, inlinedVal27, scrut4, arg$Some$0$9;
                              scrut4 = minimax1.#find(b, 3);
                              if (scrut4 instanceof minimax1.Some.class) {
                                arg$Some$0$9 = scrut4.value;
                                inlinedVal27 = minimax1.#playerEq(p1, arg$Some$0$9);
                                if (inlinedVal27 === true) {
                                  let fv_tmp3, inlinedVal28;
                                  fv_tmp3 = minimax1.#playerOccupies(p1)(b)(6);
                                  if (fv_tmp3 === true) {
                                    inlinedVal28 = true;
                                  } else {
                                    inlinedVal28 = false;
                                  }
                                  inlinedVal26 = inlinedVal28;
                                } else {
                                  inlinedVal26 = false;
                                }
                              } else if (scrut4 instanceof minimax1.None.class) {
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
                            let inlinedVal26, inlinedVal27, scrut4, arg$Some$0$9;
                            scrut4 = minimax1.#find(b, 1);
                            if (scrut4 instanceof minimax1.Some.class) {
                              arg$Some$0$9 = scrut4.value;
                              inlinedVal27 = minimax1.#playerEq(p1, arg$Some$0$9);
                              if (inlinedVal27 === true) {
                                let fv_tmp3, inlinedVal28;
                                fv_tmp3 = minimax1.#playerOccupies(p1)(b)(4);
                                if (fv_tmp3 === true) {
                                  let Cons_tail4, fv_p, inlinedVal29;
                                  Cons_tail4 = isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                  fv_p = minimax1.#playerOccupies(p1)(b);
                                  inlinedVal29 = isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(7, Cons_tail4, undefined, fv_p);
                                  inlinedVal28 = inlinedVal29;
                                } else {
                                  inlinedVal28 = false;
                                }
                                inlinedVal26 = inlinedVal28;
                              } else {
                                inlinedVal26 = false;
                              }
                            } else if (scrut4 instanceof minimax1.None.class) {
                              inlinedVal26 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            if (inlinedVal26 === false) {
                              let fv_tmp3, inlinedVal28;
                              fv_tmp3 = minimax1.#playerOccupies(p1)(b)(2);
                              if (fv_tmp3 === true) {
                                let Cons_tail4, fv_p, inlinedVal29;
                                Cons_tail4 = isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail3);
                                fv_p = minimax1.#playerOccupies(p1)(b);
                                inlinedVal29 = isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(5, Cons_tail4, undefined, fv_p);
                                inlinedVal28 = inlinedVal29;
                              } else {
                                inlinedVal28 = false;
                              }
                              if (inlinedVal28 === false) {
                                let inlinedVal29, inlinedVal30, arg$Some$0$10, inlinedVal31;
                                inlinedVal31 = minimax1.#listNth(b, 0);
                                if (inlinedVal31 instanceof minimax1.Some.class) {
                                  arg$Some$0$10 = inlinedVal31.value;
                                  inlinedVal30 = minimax1.#playerEq(p1, arg$Some$0$10);
                                  if (inlinedVal30 === true) {
                                    let inlinedVal32, inlinedVal33, scrut5, arg$Some$0$11;
                                    scrut5 = minimax1.#find(b, 4);
                                    if (scrut5 instanceof minimax1.Some.class) {
                                      arg$Some$0$11 = scrut5.value;
                                      inlinedVal33 = minimax1.#playerEq(p1, arg$Some$0$11);
                                      if (inlinedVal33 === true) {
                                        let fv_tmp4, inlinedVal34;
                                        fv_tmp4 = minimax1.#playerOccupies(p1)(b)(8);
                                        if (fv_tmp4 === true) {
                                          inlinedVal34 = true;
                                        } else {
                                          inlinedVal34 = false;
                                        }
                                        inlinedVal32 = inlinedVal34;
                                      } else {
                                        inlinedVal32 = false;
                                      }
                                    } else if (scrut5 instanceof minimax1.None.class) {
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
                                  let inlinedVal32, scrut5, arg$Some$0$11;
                                  scrut5 = minimax1.#find(b, 2);
                                  if (scrut5 instanceof minimax1.Some.class) {
                                    arg$Some$0$11 = scrut5.value;
                                    inlinedVal32 = minimax1.#playerEq(p1, arg$Some$0$11);
                                    if (inlinedVal32 === true) {
                                      let fv_tmp4;
                                      fv_tmp4 = minimax1.#playerOccupies(p1)(b)(4);
                                      if (fv_tmp4 === true) {
                                        let fv_tmp5;
                                        fv_tmp5 = minimax1.#playerOccupies(p1)(b)(6);
                                        if (fv_tmp5 === true) {
                                          return true
                                        }
                                        return false;
                                      }
                                      return false;
                                    }
                                    return false;
                                  } else if (scrut5 instanceof minimax1.None.class) {
                                    return false
                                  }
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                }
                                return true;
                              }
                              return true;
                            }
                            return true;
                          }
                          return true;
                        }
                        return true;
                      }
                      return true;
                    }
                    return true;
                  }
                  return true;
                }
                return true;
              }
              return true;
            }
            return true;
          }
          return true;
        }
        return true;
      }
      return true;
    }
    return true;
  }
  static #isCat(b) {
    let tmp, tmp1;
    tmp = minimax.#isFull(b);
    if (tmp === true) {
      let p, inlinedVal, Cons_tail, inlinedVal1, inlinedVal2, arg$Some$0$, inlinedVal3;
      p = minimax.X;
      Cons_tail = isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
      inlinedVal3 = minimax1.#listNth(b, 0);
      if (inlinedVal3 instanceof minimax1.Some.class) {
        arg$Some$0$ = inlinedVal3.value;
        inlinedVal2 = minimax1.#playerEq(p, arg$Some$0$);
        if (inlinedVal2 === true) {
          let inlinedVal4, inlinedVal5, scrut, arg$Some$0$1;
          scrut = minimax1.#find(b, 1);
          if (scrut instanceof minimax1.Some.class) {
            arg$Some$0$1 = scrut.value;
            inlinedVal5 = minimax1.#playerEq(p, arg$Some$0$1);
            if (inlinedVal5 === true) {
              let fv_tmp, inlinedVal6;
              fv_tmp = minimax1.#playerOccupies(p)(b)(2);
              if (fv_tmp === true) {
                inlinedVal6 = true;
              } else {
                inlinedVal6 = false;
              }
              inlinedVal4 = inlinedVal6;
            } else {
              inlinedVal4 = false;
            }
          } else if (scrut instanceof minimax1.None.class) {
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
        let inlinedVal4, inlinedVal5, scrut, arg$Some$0$1;
        scrut = minimax1.#find(b, 3);
        if (scrut instanceof minimax1.Some.class) {
          arg$Some$0$1 = scrut.value;
          inlinedVal5 = minimax1.#playerEq(p, arg$Some$0$1);
          if (inlinedVal5 === true) {
            let fv_tmp, inlinedVal6;
            fv_tmp = minimax1.#playerOccupies(p)(b)(4);
            if (fv_tmp === true) {
              let Cons_tail1, fv_p, inlinedVal7;
              Cons_tail1 = isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
              fv_p = minimax1.#playerOccupies(p)(b);
              inlinedVal7 = isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(5, Cons_tail1, undefined, fv_p);
              inlinedVal6 = inlinedVal7;
            } else {
              inlinedVal6 = false;
            }
            inlinedVal4 = inlinedVal6;
          } else {
            inlinedVal4 = false;
          }
        } else if (scrut instanceof minimax1.None.class) {
          inlinedVal4 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        if (inlinedVal4 === false) {
          let fv_tmp, inlinedVal6;
          fv_tmp = minimax1.#playerOccupies(p)(b)(6);
          if (fv_tmp === true) {
            let Cons_tail1, fv_p, inlinedVal7;
            Cons_tail1 = isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail);
            fv_p = minimax1.#playerOccupies(p)(b);
            inlinedVal7 = isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(7, Cons_tail1, undefined, fv_p);
            inlinedVal6 = inlinedVal7;
          } else {
            inlinedVal6 = false;
          }
          if (inlinedVal6 === false) {
            let Cons_tail1, inlinedVal7, inlinedVal8, arg$Some$0$2, inlinedVal9;
            Cons_tail1 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
            inlinedVal9 = minimax1.#listNth(b, 0);
            if (inlinedVal9 instanceof minimax1.Some.class) {
              arg$Some$0$2 = inlinedVal9.value;
              inlinedVal8 = minimax1.#playerEq(p, arg$Some$0$2);
              if (inlinedVal8 === true) {
                let inlinedVal10, inlinedVal11, scrut1, arg$Some$0$3;
                scrut1 = minimax1.#find(b, 3);
                if (scrut1 instanceof minimax1.Some.class) {
                  arg$Some$0$3 = scrut1.value;
                  inlinedVal11 = minimax1.#playerEq(p, arg$Some$0$3);
                  if (inlinedVal11 === true) {
                    let fv_tmp1, inlinedVal12;
                    fv_tmp1 = minimax1.#playerOccupies(p)(b)(6);
                    if (fv_tmp1 === true) {
                      inlinedVal12 = true;
                    } else {
                      inlinedVal12 = false;
                    }
                    inlinedVal10 = inlinedVal12;
                  } else {
                    inlinedVal10 = false;
                  }
                } else if (scrut1 instanceof minimax1.None.class) {
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
              let inlinedVal10, inlinedVal11, scrut1, arg$Some$0$3;
              scrut1 = minimax1.#find(b, 1);
              if (scrut1 instanceof minimax1.Some.class) {
                arg$Some$0$3 = scrut1.value;
                inlinedVal11 = minimax1.#playerEq(p, arg$Some$0$3);
                if (inlinedVal11 === true) {
                  let fv_tmp1, inlinedVal12;
                  fv_tmp1 = minimax1.#playerOccupies(p)(b)(4);
                  if (fv_tmp1 === true) {
                    let Cons_tail2, fv_p, inlinedVal13;
                    Cons_tail2 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                    fv_p = minimax1.#playerOccupies(p)(b);
                    inlinedVal13 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(7, Cons_tail2, undefined, fv_p);
                    inlinedVal12 = inlinedVal13;
                  } else {
                    inlinedVal12 = false;
                  }
                  inlinedVal10 = inlinedVal12;
                } else {
                  inlinedVal10 = false;
                }
              } else if (scrut1 instanceof minimax1.None.class) {
                inlinedVal10 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              if (inlinedVal10 === false) {
                let fv_tmp1, inlinedVal12;
                fv_tmp1 = minimax1.#playerOccupies(p)(b)(2);
                if (fv_tmp1 === true) {
                  let Cons_tail2, fv_p, inlinedVal13;
                  Cons_tail2 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail1);
                  fv_p = minimax1.#playerOccupies(p)(b);
                  inlinedVal13 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(5, Cons_tail2, undefined, fv_p);
                  inlinedVal12 = inlinedVal13;
                } else {
                  inlinedVal12 = false;
                }
                if (inlinedVal12 === false) {
                  let inlinedVal13, inlinedVal14, inlinedVal15, arg$Some$0$4, inlinedVal16;
                  inlinedVal16 = minimax1.#listNth(b, 0);
                  if (inlinedVal16 instanceof minimax1.Some.class) {
                    arg$Some$0$4 = inlinedVal16.value;
                    inlinedVal15 = minimax1.#playerEq(p, arg$Some$0$4);
                    if (inlinedVal15 === true) {
                      let inlinedVal17, inlinedVal18, scrut2, arg$Some$0$5;
                      scrut2 = minimax1.#find(b, 4);
                      if (scrut2 instanceof minimax1.Some.class) {
                        arg$Some$0$5 = scrut2.value;
                        inlinedVal18 = minimax1.#playerEq(p, arg$Some$0$5);
                        if (inlinedVal18 === true) {
                          let fv_tmp2, inlinedVal19;
                          fv_tmp2 = minimax1.#playerOccupies(p)(b)(8);
                          if (fv_tmp2 === true) {
                            inlinedVal19 = true;
                          } else {
                            inlinedVal19 = false;
                          }
                          inlinedVal17 = inlinedVal19;
                        } else {
                          inlinedVal17 = false;
                        }
                      } else if (scrut2 instanceof minimax1.None.class) {
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
                    let inlinedVal17, inlinedVal18, scrut2, arg$Some$0$5;
                    scrut2 = minimax1.#find(b, 2);
                    if (scrut2 instanceof minimax1.Some.class) {
                      arg$Some$0$5 = scrut2.value;
                      inlinedVal18 = minimax1.#playerEq(p, arg$Some$0$5);
                      if (inlinedVal18 === true) {
                        let fv_tmp2;
                        fv_tmp2 = minimax1.#playerOccupies(p)(b)(4);
                        if (fv_tmp2 === true) {
                          let fv_tmp3;
                          fv_tmp3 = minimax1.#playerOccupies(p)(b)(6);
                          if (fv_tmp3 === true) {
                            inlinedVal17 = true;
                          } else {
                            inlinedVal17 = false;
                          }
                        } else {
                          inlinedVal17 = false;
                        }
                      } else {
                        inlinedVal17 = false;
                      }
                    } else if (scrut2 instanceof minimax1.None.class) {
                      inlinedVal17 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    inlinedVal13 = inlinedVal17;
                  } else {
                    inlinedVal13 = true;
                  }
                  inlinedVal = inlinedVal13;
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
      tmp1 = minimax.#not_(inlinedVal);
      if (tmp1 === true) {
        let p1, Cons_tail1, Cons_tail2, Cons_tail3, inlinedVal4, inlinedVal5, arg$Some$0$1, inlinedVal6;
        p1 = minimax.O;
        Cons_tail1 = isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
        Cons_tail2 = isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
        Cons_tail3 = isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail2);
        inlinedVal6 = minimax1.#listNth(b, 0);
        if (inlinedVal6 instanceof minimax1.Some.class) {
          arg$Some$0$1 = inlinedVal6.value;
          inlinedVal5 = minimax1.#playerEq(p1, arg$Some$0$1);
          if (inlinedVal5 === true) {
            let fv_tmp, inlinedVal7;
            fv_tmp = minimax1.#playerOccupies(p1)(b)(1);
            if (fv_tmp === true) {
              let Cons_tail4, fv_p, inlinedVal8;
              Cons_tail4 = isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
              fv_p = minimax1.#playerOccupies(p1)(b);
              inlinedVal8 = isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(2, Cons_tail4, undefined, fv_p);
              inlinedVal7 = inlinedVal8;
            } else {
              inlinedVal7 = false;
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
          let fv_tmp, inlinedVal7;
          fv_tmp = minimax1.#playerOccupies(p1)(b)(3);
          if (fv_tmp === true) {
            let Cons_tail4, fv_p, inlinedVal8;
            Cons_tail4 = isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(5, Cons_tail1);
            fv_p = minimax1.#playerOccupies(p1)(b);
            inlinedVal8 = isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(4, Cons_tail4, undefined, fv_p);
            inlinedVal7 = inlinedVal8;
          } else {
            inlinedVal7 = false;
          }
          if (inlinedVal7 === false) {
            let Cons_tail4, fv_p, inlinedVal8;
            Cons_tail4 = isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(7, Cons_tail3);
            fv_p = minimax1.#playerOccupies(p1)(b);
            inlinedVal8 = isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(6, Cons_tail4, undefined, fv_p);
            if (inlinedVal8 === false) {
              let Cons_tail5, Cons_tail6, Cons_tail7, inlinedVal9, inlinedVal10, arg$Some$0$2, inlinedVal11;
              Cons_tail5 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
              Cons_tail6 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
              Cons_tail7 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail6);
              inlinedVal11 = minimax1.#listNth(b, 0);
              if (inlinedVal11 instanceof minimax1.Some.class) {
                arg$Some$0$2 = inlinedVal11.value;
                inlinedVal10 = minimax1.#playerEq(p1, arg$Some$0$2);
                if (inlinedVal10 === true) {
                  let fv_tmp1, inlinedVal12;
                  fv_tmp1 = minimax1.#playerOccupies(p1)(b)(3);
                  if (fv_tmp1 === true) {
                    let Cons_tail8, fv_p1, inlinedVal13;
                    Cons_tail8 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                    fv_p1 = minimax1.#playerOccupies(p1)(b);
                    inlinedVal13 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(6, Cons_tail8, undefined, fv_p1);
                    inlinedVal12 = inlinedVal13;
                  } else {
                    inlinedVal12 = false;
                  }
                  inlinedVal9 = inlinedVal12;
                } else {
                  inlinedVal9 = false;
                }
              } else if (inlinedVal11 instanceof minimax1.None.class) {
                inlinedVal9 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              if (inlinedVal9 === false) {
                let fv_tmp1, inlinedVal12;
                fv_tmp1 = minimax1.#playerOccupies(p1)(b)(1);
                if (fv_tmp1 === true) {
                  let Cons_tail8, fv_p1, inlinedVal13;
                  Cons_tail8 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(7, Cons_tail5);
                  fv_p1 = minimax1.#playerOccupies(p1)(b);
                  inlinedVal13 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(4, Cons_tail8, undefined, fv_p1);
                  inlinedVal12 = inlinedVal13;
                } else {
                  inlinedVal12 = false;
                }
                if (inlinedVal12 === false) {
                  let Cons_tail8, fv_p1, inlinedVal13;
                  Cons_tail8 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(5, Cons_tail7);
                  fv_p1 = minimax1.#playerOccupies(p1)(b);
                  inlinedVal13 = isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(2, Cons_tail8, undefined, fv_p1);
                  if (inlinedVal13 === false) {
                    let Cons_tail9, inlinedVal14, inlinedVal15, arg$Some$0$3, inlinedVal16;
                    Cons_tail9 = isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                    inlinedVal16 = minimax1.#listNth(b, 0);
                    if (inlinedVal16 instanceof minimax1.Some.class) {
                      arg$Some$0$3 = inlinedVal16.value;
                      inlinedVal15 = minimax1.#playerEq(p1, arg$Some$0$3);
                      if (inlinedVal15 === true) {
                        let fv_tmp2, inlinedVal17;
                        fv_tmp2 = minimax1.#playerOccupies(p1)(b)(4);
                        if (fv_tmp2 === true) {
                          let Cons_tail10, fv_p2, inlinedVal18;
                          Cons_tail10 = isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                          fv_p2 = minimax1.#playerOccupies(p1)(b);
                          inlinedVal18 = isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(8, Cons_tail10, undefined, fv_p2);
                          inlinedVal17 = inlinedVal18;
                        } else {
                          inlinedVal17 = false;
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
                      let fv_tmp2;
                      fv_tmp2 = minimax1.#playerOccupies(p1)(b)(2);
                      if (fv_tmp2 === true) {
                        let Cons_tail10, fv_p2, inlinedVal17;
                        Cons_tail10 = isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons(6, Cons_tail9);
                        fv_p2 = minimax1.#playerOccupies(p1)(b);
                        inlinedVal17 = isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(4, Cons_tail10, undefined, fv_p2);
                        if (inlinedVal17 === false) {
                          return runtime.Unit
                        }
                        return runtime.Unit;
                      }
                      return runtime.Unit;
                    }
                    return runtime.Unit;
                  }
                  return runtime.Unit;
                }
                return runtime.Unit;
              }
              return runtime.Unit;
            }
            return runtime.Unit;
          }
          return runtime.Unit;
        }
        return runtime.Unit;
      }
      return false;
    }
    return false;
  }
  static #score(b) {
    let p, Cons_tail, Cons_tail1, Cons_tail2, inlinedVal, inlinedVal1, arg$Some$0$, inlinedVal2;
    p = minimax.X;
    Cons_tail = score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
    Cons_tail1 = score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
    Cons_tail2 = score_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail1);
    inlinedVal2 = minimax1.#listNth(b, 0);
    if (inlinedVal2 instanceof minimax1.Some.class) {
      arg$Some$0$ = inlinedVal2.value;
      inlinedVal1 = minimax1.#playerEq(p, arg$Some$0$);
      if (inlinedVal1 === true) {
        let fv_tmp, inlinedVal3;
        fv_tmp = minimax1.#playerOccupies(p)(b)(1);
        if (fv_tmp === true) {
          let Cons_tail3, fv_p, inlinedVal4;
          Cons_tail3 = score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
          fv_p = minimax1.#playerOccupies(p)(b);
          inlinedVal4 = score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(2, Cons_tail3, undefined, fv_p);
          inlinedVal3 = inlinedVal4;
        } else {
          inlinedVal3 = false;
        }
        inlinedVal = inlinedVal3;
      } else {
        inlinedVal = false;
      }
    } else if (inlinedVal2 instanceof minimax1.None.class) {
      inlinedVal = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal === false) {
      let fv_tmp, inlinedVal3;
      fv_tmp = minimax1.#playerOccupies(p)(b)(3);
      if (fv_tmp === true) {
        let Cons_tail3, fv_p, inlinedVal4;
        Cons_tail3 = score_isWinFor_hasRow_hasTrip_listAll$l_Cons(5, Cons_tail);
        fv_p = minimax1.#playerOccupies(p)(b);
        inlinedVal4 = score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(4, Cons_tail3, undefined, fv_p);
        inlinedVal3 = inlinedVal4;
      } else {
        inlinedVal3 = false;
      }
      if (inlinedVal3 === false) {
        let Cons_tail3, fv_p, inlinedVal4;
        Cons_tail3 = score_isWinFor_hasRow_hasTrip_listAll$l_Cons(7, Cons_tail2);
        fv_p = minimax1.#playerOccupies(p)(b);
        inlinedVal4 = score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(6, Cons_tail3, undefined, fv_p);
        if (inlinedVal4 === false) {
          let Cons_tail4, Cons_tail5, Cons_tail6, inlinedVal5, inlinedVal6, scrut, arg$Some$0$1;
          Cons_tail4 = score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
          Cons_tail5 = score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
          Cons_tail6 = score_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail5);
          scrut = minimax1.#find(b, 0);
          if (scrut instanceof minimax1.Some.class) {
            arg$Some$0$1 = scrut.value;
            inlinedVal6 = minimax1.#playerEq(p, arg$Some$0$1);
            if (inlinedVal6 === true) {
              let fv_tmp1, inlinedVal7;
              fv_tmp1 = minimax1.#playerOccupies(p)(b)(3);
              if (fv_tmp1 === true) {
                let Cons_tail7, fv_p1, inlinedVal8;
                Cons_tail7 = score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                fv_p1 = minimax1.#playerOccupies(p)(b);
                inlinedVal8 = score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(6, Cons_tail7, undefined, fv_p1);
                inlinedVal7 = inlinedVal8;
              } else {
                inlinedVal7 = false;
              }
              inlinedVal5 = inlinedVal7;
            } else {
              inlinedVal5 = false;
            }
          } else if (scrut instanceof minimax1.None.class) {
            inlinedVal5 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          if (inlinedVal5 === false) {
            let fv_tmp1, inlinedVal7;
            fv_tmp1 = minimax1.#playerOccupies(p)(b)(1);
            if (fv_tmp1 === true) {
              let Cons_tail7, fv_p1, inlinedVal8;
              Cons_tail7 = score_isWinFor_hasCol_hasTrip_listAll$l_Cons(7, Cons_tail4);
              fv_p1 = minimax1.#playerOccupies(p)(b);
              inlinedVal8 = score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(4, Cons_tail7, undefined, fv_p1);
              inlinedVal7 = inlinedVal8;
            } else {
              inlinedVal7 = false;
            }
            if (inlinedVal7 === false) {
              let Cons_tail7, fv_p1, inlinedVal8;
              Cons_tail7 = score_isWinFor_hasCol_hasTrip_listAll$l_Cons(5, Cons_tail6);
              fv_p1 = minimax1.#playerOccupies(p)(b);
              inlinedVal8 = score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(2, Cons_tail7, undefined, fv_p1);
              if (inlinedVal8 === false) {
                let Cons_tail8, inlinedVal9, inlinedVal10, scrut1, arg$Some$0$2;
                Cons_tail8 = score_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                scrut1 = minimax1.#find(b, 0);
                if (scrut1 instanceof minimax1.Some.class) {
                  arg$Some$0$2 = scrut1.value;
                  inlinedVal10 = minimax1.#playerEq(p, arg$Some$0$2);
                  if (inlinedVal10 === true) {
                    let fv_tmp2, inlinedVal11;
                    fv_tmp2 = minimax1.#playerOccupies(p)(b)(4);
                    if (fv_tmp2 === true) {
                      let Cons_tail9, fv_p2, inlinedVal12;
                      Cons_tail9 = score_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                      fv_p2 = minimax1.#playerOccupies(p)(b);
                      inlinedVal12 = score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(8, Cons_tail9, undefined, fv_p2);
                      inlinedVal11 = inlinedVal12;
                    } else {
                      inlinedVal11 = false;
                    }
                    inlinedVal9 = inlinedVal11;
                  } else {
                    inlinedVal9 = false;
                  }
                } else if (scrut1 instanceof minimax1.None.class) {
                  inlinedVal9 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal9 === false) {
                  let fv_tmp2, inlinedVal11;
                  fv_tmp2 = minimax1.#playerOccupies(p)(b)(2);
                  if (fv_tmp2 === true) {
                    let Cons_tail9, fv_p2, inlinedVal12;
                    Cons_tail9 = score_isWinFor_hasDiag_hasTrip_listAll$l_Cons(6, Cons_tail8);
                    fv_p2 = minimax1.#playerOccupies(p)(b);
                    inlinedVal12 = score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(4, Cons_tail9, undefined, fv_p2);
                    inlinedVal11 = inlinedVal12;
                  } else {
                    inlinedVal11 = false;
                  }
                  if (inlinedVal11 === false) {
                    let p1, Cons_tail9, Cons_tail10, Cons_tail11, inlinedVal12, inlinedVal13, scrut2, arg$Some$0$3;
                    p1 = minimax.O;
                    Cons_tail9 = score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                    Cons_tail10 = score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                    Cons_tail11 = score_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail10);
                    scrut2 = minimax1.#find(b, 0);
                    if (scrut2 instanceof minimax1.Some.class) {
                      arg$Some$0$3 = scrut2.value;
                      inlinedVal13 = minimax1.#playerEq(p1, arg$Some$0$3);
                      if (inlinedVal13 === true) {
                        let fv_tmp3, inlinedVal14;
                        fv_tmp3 = minimax1.#playerOccupies(p1)(b)(1);
                        if (fv_tmp3 === true) {
                          let Cons_tail12, fv_p2, inlinedVal15;
                          Cons_tail12 = score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                          fv_p2 = minimax1.#playerOccupies(p1)(b);
                          inlinedVal15 = score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(2, Cons_tail12, undefined, fv_p2);
                          inlinedVal14 = inlinedVal15;
                        } else {
                          inlinedVal14 = false;
                        }
                        inlinedVal12 = inlinedVal14;
                      } else {
                        inlinedVal12 = false;
                      }
                    } else if (scrut2 instanceof minimax1.None.class) {
                      inlinedVal12 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    if (inlinedVal12 === false) {
                      let fv_tmp3, inlinedVal14;
                      fv_tmp3 = minimax1.#playerOccupies(p1)(b)(3);
                      if (fv_tmp3 === true) {
                        let Cons_tail12, fv_p2, inlinedVal15;
                        Cons_tail12 = score_isWinFor_hasRow_hasTrip_listAll$l_Cons1(5, Cons_tail9);
                        fv_p2 = minimax1.#playerOccupies(p1)(b);
                        inlinedVal15 = score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(4, Cons_tail12, undefined, fv_p2);
                        inlinedVal14 = inlinedVal15;
                      } else {
                        inlinedVal14 = false;
                      }
                      if (inlinedVal14 === false) {
                        let Cons_tail12, fv_p2, inlinedVal15;
                        Cons_tail12 = score_isWinFor_hasRow_hasTrip_listAll$l_Cons1(7, Cons_tail11);
                        fv_p2 = minimax1.#playerOccupies(p1)(b);
                        inlinedVal15 = score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(6, Cons_tail12, undefined, fv_p2);
                        if (inlinedVal15 === false) {
                          let Cons_tail13, Cons_tail14, Cons_tail15, inlinedVal16, inlinedVal17, scrut3, arg$Some$0$4;
                          Cons_tail13 = score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                          Cons_tail14 = score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                          Cons_tail15 = score_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail14);
                          scrut3 = minimax1.#find(b, 0);
                          if (scrut3 instanceof minimax1.Some.class) {
                            arg$Some$0$4 = scrut3.value;
                            inlinedVal17 = minimax1.#playerEq(p1, arg$Some$0$4);
                            if (inlinedVal17 === true) {
                              let fv_tmp4, inlinedVal18;
                              fv_tmp4 = minimax1.#playerOccupies(p1)(b)(3);
                              if (fv_tmp4 === true) {
                                let Cons_tail16, fv_p3, inlinedVal19;
                                Cons_tail16 = score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                fv_p3 = minimax1.#playerOccupies(p1)(b);
                                inlinedVal19 = score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(6, Cons_tail16, undefined, fv_p3);
                                inlinedVal18 = inlinedVal19;
                              } else {
                                inlinedVal18 = false;
                              }
                              inlinedVal16 = inlinedVal18;
                            } else {
                              inlinedVal16 = false;
                            }
                          } else if (scrut3 instanceof minimax1.None.class) {
                            inlinedVal16 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          if (inlinedVal16 === false) {
                            let fv_tmp4, inlinedVal18;
                            fv_tmp4 = minimax1.#playerOccupies(p1)(b)(1);
                            if (fv_tmp4 === true) {
                              let Cons_tail16, fv_p3, inlinedVal19;
                              Cons_tail16 = score_isWinFor_hasCol_hasTrip_listAll$l_Cons1(7, Cons_tail13);
                              fv_p3 = minimax1.#playerOccupies(p1)(b);
                              inlinedVal19 = score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(4, Cons_tail16, undefined, fv_p3);
                              inlinedVal18 = inlinedVal19;
                            } else {
                              inlinedVal18 = false;
                            }
                            if (inlinedVal18 === false) {
                              let Cons_tail16, fv_p3, inlinedVal19;
                              Cons_tail16 = score_isWinFor_hasCol_hasTrip_listAll$l_Cons1(5, Cons_tail15);
                              fv_p3 = minimax1.#playerOccupies(p1)(b);
                              inlinedVal19 = score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(2, Cons_tail16, undefined, fv_p3);
                              if (inlinedVal19 === false) {
                                let Cons_tail17, inlinedVal20, inlinedVal21, scrut4, arg$Some$0$5;
                                Cons_tail17 = score_isWinFor_hasDiag_hasTrip_listAll$l_Nil1();
                                scrut4 = minimax1.#find(b, 0);
                                if (scrut4 instanceof minimax1.Some.class) {
                                  arg$Some$0$5 = scrut4.value;
                                  inlinedVal21 = minimax1.#playerEq(p1, arg$Some$0$5);
                                  if (inlinedVal21 === true) {
                                    let fv_tmp5, inlinedVal22;
                                    fv_tmp5 = minimax1.#playerOccupies(p1)(b)(4);
                                    if (fv_tmp5 === true) {
                                      let Cons_tail18, fv_p4, inlinedVal23;
                                      Cons_tail18 = score_isWinFor_hasDiag_hasTrip_listAll$l_Nil1();
                                      fv_p4 = minimax1.#playerOccupies(p1)(b);
                                      inlinedVal23 = score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(8, Cons_tail18, undefined, fv_p4);
                                      inlinedVal22 = inlinedVal23;
                                    } else {
                                      inlinedVal22 = false;
                                    }
                                    inlinedVal20 = inlinedVal22;
                                  } else {
                                    inlinedVal20 = false;
                                  }
                                } else if (scrut4 instanceof minimax1.None.class) {
                                  inlinedVal20 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                if (inlinedVal20 === false) {
                                  let fv_tmp5;
                                  fv_tmp5 = minimax1.#playerOccupies(p1)(b)(2);
                                  if (fv_tmp5 === true) {
                                    let Cons_tail18, fv_p4, inlinedVal22;
                                    Cons_tail18 = score_isWinFor_hasDiag_hasTrip_listAll$l_Cons1(6, Cons_tail17);
                                    fv_p4 = minimax1.#playerOccupies(p1)(b);
                                    inlinedVal22 = score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(4, Cons_tail18, undefined, fv_p4);
                                    if (inlinedVal22 === false) {
                                      return 0
                                    }
                                    return -1;
                                  }
                                  return 0;
                                }
                                return -1;
                              }
                              return -1;
                            }
                            return -1;
                          }
                          return -1;
                        }
                        return -1;
                      }
                      return -1;
                    }
                    return -1;
                  }
                  return 1;
                }
                return 1;
              }
              return 1;
            }
            return 1;
          }
          return 1;
        }
        return 1;
      }
      return 1;
    }
    return 1;
  }
  static #mkLeaf(x) {
    return minimax.Rose(x, undefined)
  }
  static #allMoves(b) {
    let minimax2, n, m, acc, inlinedVal;
    minimax2 = minimax;
    n = 0;
    m = b;
    acc = allMoves_f_rev_go$l_Nil();
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
        if (m instanceof minimax2.Nil.class) {
          inlinedVal = undefined;
          break inlinedLbl
        } else if (m instanceof minimax2.Cons.class) {
          arg$Cons$0$ = m.head;
          arg$Cons$1$ = m.tail;
          if (arg$Cons$0$ instanceof minimax2.Some.class) {
            tmp = n + 1;
            n = tmp;
            m = arg$Cons$1$;
            continue loopLabel
          } else if (arg$Cons$0$ instanceof minimax2.None.class) {
            tmp1 = n + 1;
            n = tmp1;
            m = arg$Cons$1$;
            acc = allMoves_f_rev_go$l_Cons(acc);
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal
  }
  static #other(p) {
    if (p instanceof minimax.X.class) {
      return minimax.O
    } else if (p instanceof minimax.O.class) {
      return minimax.X
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #top(t) {
    if (t instanceof minimax.Rose.class) {
      return t.x
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listExtreme(e) {
    return (l) => {
      let arg$Cons$0$, arg$Cons$1$;
      if (l instanceof minimax.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        return minimax.#listFoldl(e)(arg$Cons$0$)(arg$Cons$1$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listmax(l) {
    return minimax.#listExtreme(lambda)(l)
  }
  static #listmin(l) {
    return minimax.#listExtreme(lambda1)(l)
  }
  static #gameOver(b) {
    let p, Cons_tail, Cons_tail1, Cons_tail2, inlinedVal, inlinedVal1, scrut, arg$Some$0$;
    p = minimax1.X;
    Cons_tail = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
    Cons_tail1 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
    Cons_tail2 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail1);
    scrut = minimax1.#find(b, 0);
    if (scrut instanceof minimax1.Some.class) {
      arg$Some$0$ = scrut.value;
      inlinedVal1 = minimax1.#playerEq(p, arg$Some$0$);
      if (inlinedVal1 === true) {
        let fv_tmp, inlinedVal2;
        fv_tmp = minimax1.#playerOccupies(p)(b)(1);
        if (fv_tmp === true) {
          let Cons_tail3, fv_p, inlinedVal3;
          Cons_tail3 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
          fv_p = minimax1.#playerOccupies(p)(b);
          inlinedVal3 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(2, Cons_tail3, undefined, fv_p);
          inlinedVal2 = inlinedVal3;
        } else {
          inlinedVal2 = false;
        }
        inlinedVal = inlinedVal2;
      } else {
        inlinedVal = false;
      }
    } else if (scrut instanceof minimax1.None.class) {
      inlinedVal = false;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    if (inlinedVal === false) {
      let fv_tmp, inlinedVal2;
      fv_tmp = minimax1.#playerOccupies(p)(b)(3);
      if (fv_tmp === true) {
        let Cons_tail3, fv_p, inlinedVal3;
        Cons_tail3 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1(5, Cons_tail);
        fv_p = minimax1.#playerOccupies(p)(b);
        inlinedVal3 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(4, Cons_tail3, undefined, fv_p);
        inlinedVal2 = inlinedVal3;
      } else {
        inlinedVal2 = false;
      }
      if (inlinedVal2 === false) {
        let Cons_tail3, fv_p, inlinedVal3;
        Cons_tail3 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1(7, Cons_tail2);
        fv_p = minimax1.#playerOccupies(p)(b);
        inlinedVal3 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(6, Cons_tail3, undefined, fv_p);
        if (inlinedVal3 === false) {
          let Cons_tail4, Cons_tail5, Cons_tail6, inlinedVal4, inlinedVal5, scrut1, arg$Some$0$1;
          Cons_tail4 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
          Cons_tail5 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
          Cons_tail6 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail5);
          scrut1 = minimax1.#find(b, 0);
          if (scrut1 instanceof minimax1.Some.class) {
            arg$Some$0$1 = scrut1.value;
            inlinedVal5 = minimax1.#playerEq(p, arg$Some$0$1);
            if (inlinedVal5 === true) {
              let fv_tmp1, inlinedVal6;
              fv_tmp1 = minimax1.#playerOccupies(p)(b)(3);
              if (fv_tmp1 === true) {
                let Cons_tail7, fv_p1, inlinedVal7;
                Cons_tail7 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                fv_p1 = minimax1.#playerOccupies(p)(b);
                inlinedVal7 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(6, Cons_tail7, undefined, fv_p1);
                inlinedVal6 = inlinedVal7;
              } else {
                inlinedVal6 = false;
              }
              inlinedVal4 = inlinedVal6;
            } else {
              inlinedVal4 = false;
            }
          } else if (scrut1 instanceof minimax1.None.class) {
            inlinedVal4 = false;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          if (inlinedVal4 === false) {
            let fv_tmp1, inlinedVal6;
            fv_tmp1 = minimax1.#playerOccupies(p)(b)(1);
            if (fv_tmp1 === true) {
              let Cons_tail7, fv_p1, inlinedVal7;
              Cons_tail7 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1(7, Cons_tail4);
              fv_p1 = minimax1.#playerOccupies(p)(b);
              inlinedVal7 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(4, Cons_tail7, undefined, fv_p1);
              inlinedVal6 = inlinedVal7;
            } else {
              inlinedVal6 = false;
            }
            if (inlinedVal6 === false) {
              let Cons_tail7, fv_p1, inlinedVal7;
              Cons_tail7 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1(5, Cons_tail6);
              fv_p1 = minimax1.#playerOccupies(p)(b);
              inlinedVal7 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(2, Cons_tail7, undefined, fv_p1);
              if (inlinedVal7 === false) {
                let Cons_tail8, inlinedVal8, inlinedVal9, scrut2, arg$Some$0$2;
                Cons_tail8 = gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil1();
                scrut2 = minimax1.#find(b, 0);
                if (scrut2 instanceof minimax1.Some.class) {
                  arg$Some$0$2 = scrut2.value;
                  inlinedVal9 = minimax1.#playerEq(p, arg$Some$0$2);
                  if (inlinedVal9 === true) {
                    let fv_tmp2, inlinedVal10;
                    fv_tmp2 = minimax1.#playerOccupies(p)(b)(4);
                    if (fv_tmp2 === true) {
                      let Cons_tail9, fv_p2, inlinedVal11;
                      Cons_tail9 = gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil1();
                      fv_p2 = minimax1.#playerOccupies(p)(b);
                      inlinedVal11 = gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(8, Cons_tail9, undefined, fv_p2);
                      inlinedVal10 = inlinedVal11;
                    } else {
                      inlinedVal10 = false;
                    }
                    inlinedVal8 = inlinedVal10;
                  } else {
                    inlinedVal8 = false;
                  }
                } else if (scrut2 instanceof minimax1.None.class) {
                  inlinedVal8 = false;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal8 === false) {
                  let fv_tmp2, inlinedVal10;
                  fv_tmp2 = minimax1.#playerOccupies(p)(b)(2);
                  if (fv_tmp2 === true) {
                    let Cons_tail9, fv_p2, inlinedVal11;
                    Cons_tail9 = gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons1(6, Cons_tail8);
                    fv_p2 = minimax1.#playerOccupies(p)(b);
                    inlinedVal11 = gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(4, Cons_tail9, undefined, fv_p2);
                    inlinedVal10 = inlinedVal11;
                  } else {
                    inlinedVal10 = false;
                  }
                  if (inlinedVal10 === false) {
                    let p1, Cons_tail9, Cons_tail10, Cons_tail11, inlinedVal11, inlinedVal12, scrut3, arg$Some$0$3;
                    p1 = minimax1.O;
                    Cons_tail9 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                    Cons_tail10 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                    Cons_tail11 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail10);
                    scrut3 = minimax1.#find(b, 0);
                    if (scrut3 instanceof minimax1.Some.class) {
                      arg$Some$0$3 = scrut3.value;
                      inlinedVal12 = minimax1.#playerEq(p1, arg$Some$0$3);
                      if (inlinedVal12 === true) {
                        let fv_tmp3, inlinedVal13;
                        fv_tmp3 = minimax1.#playerOccupies(p1)(b)(1);
                        if (fv_tmp3 === true) {
                          let Cons_tail12, fv_p2, inlinedVal14;
                          Cons_tail12 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                          fv_p2 = minimax1.#playerOccupies(p1)(b);
                          inlinedVal14 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(2, Cons_tail12, undefined, fv_p2);
                          inlinedVal13 = inlinedVal14;
                        } else {
                          inlinedVal13 = false;
                        }
                        inlinedVal11 = inlinedVal13;
                      } else {
                        inlinedVal11 = false;
                      }
                    } else if (scrut3 instanceof minimax1.None.class) {
                      inlinedVal11 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    if (inlinedVal11 === false) {
                      let fv_tmp3, inlinedVal13;
                      fv_tmp3 = minimax1.#playerOccupies(p1)(b)(3);
                      if (fv_tmp3 === true) {
                        let Cons_tail12, fv_p2, inlinedVal14;
                        Cons_tail12 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(5, Cons_tail9);
                        fv_p2 = minimax1.#playerOccupies(p1)(b);
                        inlinedVal14 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(4, Cons_tail12, undefined, fv_p2);
                        inlinedVal13 = inlinedVal14;
                      } else {
                        inlinedVal13 = false;
                      }
                      if (inlinedVal13 === false) {
                        let Cons_tail12, fv_p2, inlinedVal14;
                        Cons_tail12 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(7, Cons_tail11);
                        fv_p2 = minimax1.#playerOccupies(p1)(b);
                        inlinedVal14 = gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(6, Cons_tail12, undefined, fv_p2);
                        if (inlinedVal14 === false) {
                          let Cons_tail13, Cons_tail14, Cons_tail15, inlinedVal15, inlinedVal16, scrut4, arg$Some$0$4;
                          Cons_tail13 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                          Cons_tail14 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                          Cons_tail15 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail14);
                          scrut4 = minimax1.#find(b, 0);
                          if (scrut4 instanceof minimax1.Some.class) {
                            arg$Some$0$4 = scrut4.value;
                            inlinedVal16 = minimax1.#playerEq(p1, arg$Some$0$4);
                            if (inlinedVal16 === true) {
                              let fv_tmp4, inlinedVal17;
                              fv_tmp4 = minimax1.#playerOccupies(p1)(b)(3);
                              if (fv_tmp4 === true) {
                                let Cons_tail16, fv_p3, inlinedVal18;
                                Cons_tail16 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                fv_p3 = minimax1.#playerOccupies(p1)(b);
                                inlinedVal18 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(6, Cons_tail16, undefined, fv_p3);
                                inlinedVal17 = inlinedVal18;
                              } else {
                                inlinedVal17 = false;
                              }
                              inlinedVal15 = inlinedVal17;
                            } else {
                              inlinedVal15 = false;
                            }
                          } else if (scrut4 instanceof minimax1.None.class) {
                            inlinedVal15 = false;
                          } else {
                            throw globalThis.Object.freeze(new globalThis.Error("match error"))
                          }
                          if (inlinedVal15 === false) {
                            let fv_tmp4, inlinedVal17;
                            fv_tmp4 = minimax1.#playerOccupies(p1)(b)(1);
                            if (fv_tmp4 === true) {
                              let Cons_tail16, fv_p3, inlinedVal18;
                              Cons_tail16 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(7, Cons_tail13);
                              fv_p3 = minimax1.#playerOccupies(p1)(b);
                              inlinedVal18 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(4, Cons_tail16, undefined, fv_p3);
                              inlinedVal17 = inlinedVal18;
                            } else {
                              inlinedVal17 = false;
                            }
                            if (inlinedVal17 === false) {
                              let Cons_tail16, fv_p3, inlinedVal18;
                              Cons_tail16 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(5, Cons_tail15);
                              fv_p3 = minimax1.#playerOccupies(p1)(b);
                              inlinedVal18 = gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(2, Cons_tail16, undefined, fv_p3);
                              if (inlinedVal18 === false) {
                                let Cons_tail17, inlinedVal19, inlinedVal20, scrut5, arg$Some$0$5;
                                Cons_tail17 = gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                                scrut5 = minimax1.#find(b, 0);
                                if (scrut5 instanceof minimax1.Some.class) {
                                  arg$Some$0$5 = scrut5.value;
                                  inlinedVal20 = minimax1.#playerEq(p1, arg$Some$0$5);
                                  if (inlinedVal20 === true) {
                                    let fv_tmp5, inlinedVal21;
                                    fv_tmp5 = minimax1.#playerOccupies(p1)(b)(4);
                                    if (fv_tmp5 === true) {
                                      let Cons_tail18, fv_p4, inlinedVal22;
                                      Cons_tail18 = gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                                      fv_p4 = minimax1.#playerOccupies(p1)(b);
                                      inlinedVal22 = gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(8, Cons_tail18, undefined, fv_p4);
                                      inlinedVal21 = inlinedVal22;
                                    } else {
                                      inlinedVal21 = false;
                                    }
                                    inlinedVal19 = inlinedVal21;
                                  } else {
                                    inlinedVal19 = false;
                                  }
                                } else if (scrut5 instanceof minimax1.None.class) {
                                  inlinedVal19 = false;
                                } else {
                                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                }
                                if (inlinedVal19 === false) {
                                  let inlinedVal21, fv_tmp5;
                                  fv_tmp5 = minimax1.#playerOccupies(p1)(b)(2);
                                  if (fv_tmp5 === true) {
                                    let Cons_tail18, fv_p4, inlinedVal22;
                                    Cons_tail18 = gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons(6, Cons_tail17);
                                    fv_p4 = minimax1.#playerOccupies(p1)(b);
                                    inlinedVal22 = gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(4, Cons_tail18, undefined, fv_p4);
                                    if (inlinedVal22 === false) {
                                      inlinedVal21 = false;
                                    } else {
                                      inlinedVal21 = true;
                                    }
                                  } else {
                                    inlinedVal21 = false;
                                  }
                                  if (inlinedVal21 === false) {
                                    let p2, inlinedVal22;
                                    p2 = minimax1.#isSome;
                                    inlinedVal22 = minimax1.#listAll$tailrec(p2, b);
                                    if (inlinedVal22 === true) {
                                      let p3, Cons_tail18, Cons_tail19, Cons_tail20, inlinedVal23, inlinedVal24, scrut6, arg$Some$0$6;
                                      p3 = minimax1.X;
                                      Cons_tail18 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                      Cons_tail19 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                      Cons_tail20 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail19);
                                      scrut6 = minimax1.#find(b, 0);
                                      if (scrut6 instanceof minimax1.Some.class) {
                                        arg$Some$0$6 = scrut6.value;
                                        inlinedVal24 = minimax1.#playerEq(p3, arg$Some$0$6);
                                        if (inlinedVal24 === true) {
                                          let fv_tmp6, inlinedVal25;
                                          fv_tmp6 = minimax1.#playerOccupies(p3)(b)(1);
                                          if (fv_tmp6 === true) {
                                            let Cons_tail21, fv_p4, inlinedVal26;
                                            Cons_tail21 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                            fv_p4 = minimax1.#playerOccupies(p3)(b);
                                            inlinedVal26 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(2, Cons_tail21, undefined, fv_p4);
                                            inlinedVal25 = inlinedVal26;
                                          } else {
                                            inlinedVal25 = false;
                                          }
                                          inlinedVal23 = inlinedVal25;
                                        } else {
                                          inlinedVal23 = false;
                                        }
                                      } else if (scrut6 instanceof minimax1.None.class) {
                                        inlinedVal23 = false;
                                      } else {
                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                      }
                                      if (inlinedVal23 === false) {
                                        let fv_tmp6, inlinedVal25;
                                        fv_tmp6 = minimax1.#playerOccupies(p3)(b)(3);
                                        if (fv_tmp6 === true) {
                                          let Cons_tail21, fv_p4, inlinedVal26;
                                          Cons_tail21 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(5, Cons_tail18);
                                          fv_p4 = minimax1.#playerOccupies(p3)(b);
                                          inlinedVal26 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(4, Cons_tail21, undefined, fv_p4);
                                          inlinedVal25 = inlinedVal26;
                                        } else {
                                          inlinedVal25 = false;
                                        }
                                        if (inlinedVal25 === false) {
                                          let Cons_tail21, fv_p4, inlinedVal26;
                                          Cons_tail21 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(7, Cons_tail20);
                                          fv_p4 = minimax1.#playerOccupies(p3)(b);
                                          inlinedVal26 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(6, Cons_tail21, undefined, fv_p4);
                                          if (inlinedVal26 === false) {
                                            let Cons_tail22, Cons_tail23, Cons_tail24, inlinedVal27, inlinedVal28, scrut7, arg$Some$0$7;
                                            Cons_tail22 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                            Cons_tail23 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                            Cons_tail24 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail23);
                                            scrut7 = minimax1.#find(b, 0);
                                            if (scrut7 instanceof minimax1.Some.class) {
                                              arg$Some$0$7 = scrut7.value;
                                              inlinedVal28 = minimax1.#playerEq(p3, arg$Some$0$7);
                                              if (inlinedVal28 === true) {
                                                let fv_tmp7, inlinedVal29;
                                                fv_tmp7 = minimax1.#playerOccupies(p3)(b)(3);
                                                if (fv_tmp7 === true) {
                                                  let Cons_tail25, fv_p5, inlinedVal30;
                                                  Cons_tail25 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                                  fv_p5 = minimax1.#playerOccupies(p3)(b);
                                                  inlinedVal30 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(6, Cons_tail25, undefined, fv_p5);
                                                  inlinedVal29 = inlinedVal30;
                                                } else {
                                                  inlinedVal29 = false;
                                                }
                                                inlinedVal27 = inlinedVal29;
                                              } else {
                                                inlinedVal27 = false;
                                              }
                                            } else if (scrut7 instanceof minimax1.None.class) {
                                              inlinedVal27 = false;
                                            } else {
                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                            }
                                            if (inlinedVal27 === false) {
                                              let fv_tmp7, inlinedVal29;
                                              fv_tmp7 = minimax1.#playerOccupies(p3)(b)(1);
                                              if (fv_tmp7 === true) {
                                                let Cons_tail25, fv_p5, inlinedVal30;
                                                Cons_tail25 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(7, Cons_tail22);
                                                fv_p5 = minimax1.#playerOccupies(p3)(b);
                                                inlinedVal30 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(4, Cons_tail25, undefined, fv_p5);
                                                inlinedVal29 = inlinedVal30;
                                              } else {
                                                inlinedVal29 = false;
                                              }
                                              if (inlinedVal29 === false) {
                                                let Cons_tail25, fv_p5, inlinedVal30;
                                                Cons_tail25 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(5, Cons_tail24);
                                                fv_p5 = minimax1.#playerOccupies(p3)(b);
                                                inlinedVal30 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(2, Cons_tail25, undefined, fv_p5);
                                                if (inlinedVal30 === false) {
                                                  let Cons_tail26, inlinedVal31, inlinedVal32, scrut8, arg$Some$0$8;
                                                  Cons_tail26 = gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil1();
                                                  scrut8 = minimax1.#find(b, 0);
                                                  if (scrut8 instanceof minimax1.Some.class) {
                                                    arg$Some$0$8 = scrut8.value;
                                                    inlinedVal32 = minimax1.#playerEq(p3, arg$Some$0$8);
                                                    if (inlinedVal32 === true) {
                                                      let fv_tmp8, inlinedVal33;
                                                      fv_tmp8 = minimax1.#playerOccupies(p3)(b)(4);
                                                      if (fv_tmp8 === true) {
                                                        let Cons_tail27, fv_p6, inlinedVal34;
                                                        Cons_tail27 = gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil1();
                                                        fv_p6 = minimax1.#playerOccupies(p3)(b);
                                                        inlinedVal34 = gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(8, Cons_tail27, undefined, fv_p6);
                                                        inlinedVal33 = inlinedVal34;
                                                      } else {
                                                        inlinedVal33 = false;
                                                      }
                                                      inlinedVal31 = inlinedVal33;
                                                    } else {
                                                      inlinedVal31 = false;
                                                    }
                                                  } else if (scrut8 instanceof minimax1.None.class) {
                                                    inlinedVal31 = false;
                                                  } else {
                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                  }
                                                  if (inlinedVal31 === false) {
                                                    let fv_tmp8, inlinedVal33;
                                                    fv_tmp8 = minimax1.#playerOccupies(p3)(b)(2);
                                                    if (fv_tmp8 === true) {
                                                      let Cons_tail27, fv_p6, inlinedVal34;
                                                      Cons_tail27 = gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons1(6, Cons_tail26);
                                                      fv_p6 = minimax1.#playerOccupies(p3)(b);
                                                      inlinedVal34 = gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(4, Cons_tail27, undefined, fv_p6);
                                                      inlinedVal33 = inlinedVal34;
                                                    } else {
                                                      inlinedVal33 = false;
                                                    }
                                                    if (inlinedVal33 === false) {
                                                      let p4, Cons_tail27, Cons_tail28, Cons_tail29, inlinedVal34, inlinedVal35, scrut9, arg$Some$0$9;
                                                      p4 = minimax1.O;
                                                      Cons_tail27 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                                      Cons_tail28 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                                      Cons_tail29 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail28);
                                                      scrut9 = minimax1.#find(b, 0);
                                                      if (scrut9 instanceof minimax1.Some.class) {
                                                        arg$Some$0$9 = scrut9.value;
                                                        inlinedVal35 = minimax1.#playerEq(p4, arg$Some$0$9);
                                                        if (inlinedVal35 === true) {
                                                          let fv_tmp9, inlinedVal36;
                                                          fv_tmp9 = minimax1.#playerOccupies(p4)(b)(1);
                                                          if (fv_tmp9 === true) {
                                                            let Cons_tail30, fv_p6, inlinedVal37;
                                                            Cons_tail30 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                                            fv_p6 = minimax1.#playerOccupies(p4)(b);
                                                            inlinedVal37 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(2, Cons_tail30, undefined, fv_p6);
                                                            inlinedVal36 = inlinedVal37;
                                                          } else {
                                                            inlinedVal36 = false;
                                                          }
                                                          inlinedVal34 = inlinedVal36;
                                                        } else {
                                                          inlinedVal34 = false;
                                                        }
                                                      } else if (scrut9 instanceof minimax1.None.class) {
                                                        inlinedVal34 = false;
                                                      } else {
                                                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                      }
                                                      if (inlinedVal34 === false) {
                                                        let fv_tmp9, inlinedVal36;
                                                        fv_tmp9 = minimax1.#playerOccupies(p4)(b)(3);
                                                        if (fv_tmp9 === true) {
                                                          let Cons_tail30, fv_p6, inlinedVal37;
                                                          Cons_tail30 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(5, Cons_tail27);
                                                          fv_p6 = minimax1.#playerOccupies(p4)(b);
                                                          inlinedVal37 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(4, Cons_tail30, undefined, fv_p6);
                                                          inlinedVal36 = inlinedVal37;
                                                        } else {
                                                          inlinedVal36 = false;
                                                        }
                                                        if (inlinedVal36 === false) {
                                                          let Cons_tail30, fv_p6, inlinedVal37;
                                                          Cons_tail30 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(7, Cons_tail29);
                                                          fv_p6 = minimax1.#playerOccupies(p4)(b);
                                                          inlinedVal37 = gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(6, Cons_tail30, undefined, fv_p6);
                                                          if (inlinedVal37 === false) {
                                                            let Cons_tail31, Cons_tail32, Cons_tail33, inlinedVal38, inlinedVal39, scrut10, arg$Some$0$10;
                                                            Cons_tail31 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                                            Cons_tail32 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                                            Cons_tail33 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail32);
                                                            scrut10 = minimax1.#find(b, 0);
                                                            if (scrut10 instanceof minimax1.Some.class) {
                                                              arg$Some$0$10 = scrut10.value;
                                                              inlinedVal39 = minimax1.#playerEq(p4, arg$Some$0$10);
                                                              if (inlinedVal39 === true) {
                                                                let fv_tmp10, inlinedVal40;
                                                                fv_tmp10 = minimax1.#playerOccupies(p4)(b)(3);
                                                                if (fv_tmp10 === true) {
                                                                  let Cons_tail34, fv_p7, inlinedVal41;
                                                                  Cons_tail34 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                                                  fv_p7 = minimax1.#playerOccupies(p4)(b);
                                                                  inlinedVal41 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(6, Cons_tail34, undefined, fv_p7);
                                                                  inlinedVal40 = inlinedVal41;
                                                                } else {
                                                                  inlinedVal40 = false;
                                                                }
                                                                inlinedVal38 = inlinedVal40;
                                                              } else {
                                                                inlinedVal38 = false;
                                                              }
                                                            } else if (scrut10 instanceof minimax1.None.class) {
                                                              inlinedVal38 = false;
                                                            } else {
                                                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                            }
                                                            if (inlinedVal38 === false) {
                                                              let fv_tmp10, inlinedVal40;
                                                              fv_tmp10 = minimax1.#playerOccupies(p4)(b)(1);
                                                              if (fv_tmp10 === true) {
                                                                let Cons_tail34, fv_p7, inlinedVal41;
                                                                Cons_tail34 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(7, Cons_tail31);
                                                                fv_p7 = minimax1.#playerOccupies(p4)(b);
                                                                inlinedVal41 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(4, Cons_tail34, undefined, fv_p7);
                                                                inlinedVal40 = inlinedVal41;
                                                              } else {
                                                                inlinedVal40 = false;
                                                              }
                                                              if (inlinedVal40 === false) {
                                                                let Cons_tail34, fv_p7, inlinedVal41;
                                                                Cons_tail34 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(5, Cons_tail33);
                                                                fv_p7 = minimax1.#playerOccupies(p4)(b);
                                                                inlinedVal41 = gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(2, Cons_tail34, undefined, fv_p7);
                                                                if (inlinedVal41 === false) {
                                                                  let Cons_tail35, inlinedVal42, inlinedVal43, scrut11, arg$Some$0$11;
                                                                  Cons_tail35 = gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                                                                  scrut11 = minimax1.#find(b, 0);
                                                                  if (scrut11 instanceof minimax1.Some.class) {
                                                                    arg$Some$0$11 = scrut11.value;
                                                                    inlinedVal43 = minimax1.#playerEq(p4, arg$Some$0$11);
                                                                    if (inlinedVal43 === true) {
                                                                      let fv_tmp11, inlinedVal44;
                                                                      fv_tmp11 = minimax1.#playerOccupies(p4)(b)(4);
                                                                      if (fv_tmp11 === true) {
                                                                        let Cons_tail36, fv_p8, inlinedVal45;
                                                                        Cons_tail36 = gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                                                                        fv_p8 = minimax1.#playerOccupies(p4)(b);
                                                                        inlinedVal45 = gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(8, Cons_tail36, undefined, fv_p8);
                                                                        inlinedVal44 = inlinedVal45;
                                                                      } else {
                                                                        inlinedVal44 = false;
                                                                      }
                                                                      inlinedVal42 = inlinedVal44;
                                                                    } else {
                                                                      inlinedVal42 = false;
                                                                    }
                                                                  } else if (scrut11 instanceof minimax1.None.class) {
                                                                    inlinedVal42 = false;
                                                                  } else {
                                                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                  }
                                                                  if (inlinedVal42 === false) {
                                                                    let fv_tmp11;
                                                                    fv_tmp11 = minimax1.#playerOccupies(p4)(b)(2);
                                                                    if (fv_tmp11 === true) {
                                                                      let Cons_tail36, fv_p8, inlinedVal44;
                                                                      Cons_tail36 = gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons(6, Cons_tail35);
                                                                      fv_p8 = minimax1.#playerOccupies(p4)(b);
                                                                      inlinedVal44 = gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(4, Cons_tail36, undefined, fv_p8);
                                                                      if (inlinedVal44 === false) {
                                                                        return true
                                                                      }
                                                                      return false;
                                                                    }
                                                                    return true;
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
                                          return false;
                                        }
                                        return false;
                                      }
                                      return false;
                                    }
                                    return false;
                                  }
                                  return true;
                                }
                                return true;
                              }
                              return true;
                            }
                            return true;
                          }
                          return true;
                        }
                        return true;
                      }
                      return true;
                    }
                    return true;
                  }
                  return true;
                }
                return true;
              }
              return true;
            }
            return true;
          }
          return true;
        }
        return true;
      }
      return true;
    }
    return true;
  }
  static #successors(b, p) {
    let tmp, minimax2, n, m, acc, inlinedVal;
    tmp = minimax.#moveTo(b, p);
    minimax2 = minimax1;
    n = 0;
    m = b;
    acc = successors_allMoves_f_rev_go$l_Nil();
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp1, tmp2, tmp3;
        if (m instanceof minimax2.Nil.class) {
          let acc1, inlinedVal1;
          acc1 = successors_map$l_Nil();
          inlinedVal1 = acc(acc1);
          inlinedVal = inlinedVal1;
          break inlinedLbl
        } else if (m instanceof minimax2.Cons.class) {
          arg$Cons$0$ = m.head;
          arg$Cons$1$ = m.tail;
          if (arg$Cons$0$ instanceof minimax2.Some.class) {
            tmp1 = n + 1;
            n = tmp1;
            m = arg$Cons$1$;
            continue loopLabel
          } else if (arg$Cons$0$ instanceof minimax2.None.class) {
            tmp2 = n + 1;
            tmp3 = successors_allMoves_f_rev_go$l_Cons(n, acc);
            n = tmp2;
            m = arg$Cons$1$;
            acc = tmp3;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal(tmp)
  }
  static #minimax(p) {
    return (b) => {
      let scores, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, inlinedVal, p1, Cons_tail, Cons_tail1, Cons_tail2, inlinedVal1, inlinedVal2, scrut, arg$Some$0$;
      p1 = minimax1.X;
      Cons_tail = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
      Cons_tail1 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
      Cons_tail2 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail1);
      scrut = minimax1.#find(b, 0);
      if (scrut instanceof minimax1.Some.class) {
        arg$Some$0$ = scrut.value;
        inlinedVal2 = minimax1.#playerEq(p1, arg$Some$0$);
        if (inlinedVal2 === true) {
          let fv_tmp, inlinedVal3;
          fv_tmp = minimax1.#playerOccupies(p1)(b)(1);
          if (fv_tmp === true) {
            let Cons_tail3, fv_p, inlinedVal4;
            Cons_tail3 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil();
            fv_p = minimax1.#playerOccupies(p1)(b);
            inlinedVal4 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(2, Cons_tail3, undefined, fv_p);
            inlinedVal3 = inlinedVal4;
          } else {
            inlinedVal3 = false;
          }
          inlinedVal1 = inlinedVal3;
        } else {
          inlinedVal1 = false;
        }
      } else if (scrut instanceof minimax1.None.class) {
        inlinedVal1 = false;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      if (inlinedVal1 === false) {
        let fv_tmp, inlinedVal3;
        fv_tmp = minimax1.#playerOccupies(p1)(b)(3);
        if (fv_tmp === true) {
          let Cons_tail3, fv_p, inlinedVal4;
          Cons_tail3 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(5, Cons_tail);
          fv_p = minimax1.#playerOccupies(p1)(b);
          inlinedVal4 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(4, Cons_tail3, undefined, fv_p);
          inlinedVal3 = inlinedVal4;
        } else {
          inlinedVal3 = false;
        }
        if (inlinedVal3 === false) {
          let Cons_tail3, fv_p, inlinedVal4;
          Cons_tail3 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons(7, Cons_tail2);
          fv_p = minimax1.#playerOccupies(p1)(b);
          inlinedVal4 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(6, Cons_tail3, undefined, fv_p);
          if (inlinedVal4 === false) {
            let Cons_tail4, Cons_tail5, Cons_tail6, inlinedVal5, inlinedVal6, scrut1, arg$Some$0$1;
            Cons_tail4 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
            Cons_tail5 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
            Cons_tail6 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail5);
            scrut1 = minimax1.#find(b, 0);
            if (scrut1 instanceof minimax1.Some.class) {
              arg$Some$0$1 = scrut1.value;
              inlinedVal6 = minimax1.#playerEq(p1, arg$Some$0$1);
              if (inlinedVal6 === true) {
                let fv_tmp1, inlinedVal7;
                fv_tmp1 = minimax1.#playerOccupies(p1)(b)(3);
                if (fv_tmp1 === true) {
                  let Cons_tail7, fv_p1, inlinedVal8;
                  Cons_tail7 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                  fv_p1 = minimax1.#playerOccupies(p1)(b);
                  inlinedVal8 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(6, Cons_tail7, undefined, fv_p1);
                  inlinedVal7 = inlinedVal8;
                } else {
                  inlinedVal7 = false;
                }
                inlinedVal5 = inlinedVal7;
              } else {
                inlinedVal5 = false;
              }
            } else if (scrut1 instanceof minimax1.None.class) {
              inlinedVal5 = false;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal5 === false) {
              let fv_tmp1, inlinedVal7;
              fv_tmp1 = minimax1.#playerOccupies(p1)(b)(1);
              if (fv_tmp1 === true) {
                let Cons_tail7, fv_p1, inlinedVal8;
                Cons_tail7 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(7, Cons_tail4);
                fv_p1 = minimax1.#playerOccupies(p1)(b);
                inlinedVal8 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(4, Cons_tail7, undefined, fv_p1);
                inlinedVal7 = inlinedVal8;
              } else {
                inlinedVal7 = false;
              }
              if (inlinedVal7 === false) {
                let Cons_tail7, fv_p1, inlinedVal8;
                Cons_tail7 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons(5, Cons_tail6);
                fv_p1 = minimax1.#playerOccupies(p1)(b);
                inlinedVal8 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(2, Cons_tail7, undefined, fv_p1);
                if (inlinedVal8 === false) {
                  let Cons_tail8, inlinedVal9, inlinedVal10, scrut2, arg$Some$0$2;
                  Cons_tail8 = minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                  scrut2 = minimax1.#find(b, 0);
                  if (scrut2 instanceof minimax1.Some.class) {
                    arg$Some$0$2 = scrut2.value;
                    inlinedVal10 = minimax1.#playerEq(p1, arg$Some$0$2);
                    if (inlinedVal10 === true) {
                      let fv_tmp2, inlinedVal11;
                      fv_tmp2 = minimax1.#playerOccupies(p1)(b)(4);
                      if (fv_tmp2 === true) {
                        let Cons_tail9, fv_p2, inlinedVal12;
                        Cons_tail9 = minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                        fv_p2 = minimax1.#playerOccupies(p1)(b);
                        inlinedVal12 = minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(8, Cons_tail9, undefined, fv_p2);
                        inlinedVal11 = inlinedVal12;
                      } else {
                        inlinedVal11 = false;
                      }
                      inlinedVal9 = inlinedVal11;
                    } else {
                      inlinedVal9 = false;
                    }
                  } else if (scrut2 instanceof minimax1.None.class) {
                    inlinedVal9 = false;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal9 === false) {
                    let fv_tmp2, inlinedVal11;
                    fv_tmp2 = minimax1.#playerOccupies(p1)(b)(2);
                    if (fv_tmp2 === true) {
                      let Cons_tail9, fv_p2, inlinedVal12;
                      Cons_tail9 = minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons(6, Cons_tail8);
                      fv_p2 = minimax1.#playerOccupies(p1)(b);
                      inlinedVal12 = minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(4, Cons_tail9, undefined, fv_p2);
                      inlinedVal11 = inlinedVal12;
                    } else {
                      inlinedVal11 = false;
                    }
                    if (inlinedVal11 === false) {
                      let p2, Cons_tail9, Cons_tail10, Cons_tail11, inlinedVal12, inlinedVal13, scrut3, arg$Some$0$3;
                      p2 = minimax1.O;
                      Cons_tail9 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                      Cons_tail10 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                      Cons_tail11 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail10);
                      scrut3 = minimax1.#find(b, 0);
                      if (scrut3 instanceof minimax1.Some.class) {
                        arg$Some$0$3 = scrut3.value;
                        inlinedVal13 = minimax1.#playerEq(p2, arg$Some$0$3);
                        if (inlinedVal13 === true) {
                          let fv_tmp3, inlinedVal14;
                          fv_tmp3 = minimax1.#playerOccupies(p2)(b)(1);
                          if (fv_tmp3 === true) {
                            let Cons_tail12, fv_p2, inlinedVal15;
                            Cons_tail12 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                            fv_p2 = minimax1.#playerOccupies(p2)(b);
                            inlinedVal15 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(2, Cons_tail12, undefined, fv_p2);
                            inlinedVal14 = inlinedVal15;
                          } else {
                            inlinedVal14 = false;
                          }
                          inlinedVal12 = inlinedVal14;
                        } else {
                          inlinedVal12 = false;
                        }
                      } else if (scrut3 instanceof minimax1.None.class) {
                        inlinedVal12 = false;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      if (inlinedVal12 === false) {
                        let fv_tmp3, inlinedVal14;
                        fv_tmp3 = minimax1.#playerOccupies(p2)(b)(3);
                        if (fv_tmp3 === true) {
                          let Cons_tail12, fv_p2, inlinedVal15;
                          Cons_tail12 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1(5, Cons_tail9);
                          fv_p2 = minimax1.#playerOccupies(p2)(b);
                          inlinedVal15 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(4, Cons_tail12, undefined, fv_p2);
                          inlinedVal14 = inlinedVal15;
                        } else {
                          inlinedVal14 = false;
                        }
                        if (inlinedVal14 === false) {
                          let Cons_tail12, fv_p2, inlinedVal15;
                          Cons_tail12 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1(7, Cons_tail11);
                          fv_p2 = minimax1.#playerOccupies(p2)(b);
                          inlinedVal15 = minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(6, Cons_tail12, undefined, fv_p2);
                          if (inlinedVal15 === false) {
                            let Cons_tail13, Cons_tail14, Cons_tail15, inlinedVal16, inlinedVal17, scrut4, arg$Some$0$4;
                            Cons_tail13 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                            Cons_tail14 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                            Cons_tail15 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail14);
                            scrut4 = minimax1.#find(b, 0);
                            if (scrut4 instanceof minimax1.Some.class) {
                              arg$Some$0$4 = scrut4.value;
                              inlinedVal17 = minimax1.#playerEq(p2, arg$Some$0$4);
                              if (inlinedVal17 === true) {
                                let fv_tmp4, inlinedVal18;
                                fv_tmp4 = minimax1.#playerOccupies(p2)(b)(3);
                                if (fv_tmp4 === true) {
                                  let Cons_tail16, fv_p3, inlinedVal19;
                                  Cons_tail16 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                  fv_p3 = minimax1.#playerOccupies(p2)(b);
                                  inlinedVal19 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(6, Cons_tail16, undefined, fv_p3);
                                  inlinedVal18 = inlinedVal19;
                                } else {
                                  inlinedVal18 = false;
                                }
                                inlinedVal16 = inlinedVal18;
                              } else {
                                inlinedVal16 = false;
                              }
                            } else if (scrut4 instanceof minimax1.None.class) {
                              inlinedVal16 = false;
                            } else {
                              throw globalThis.Object.freeze(new globalThis.Error("match error"))
                            }
                            if (inlinedVal16 === false) {
                              let fv_tmp4, inlinedVal18;
                              fv_tmp4 = minimax1.#playerOccupies(p2)(b)(1);
                              if (fv_tmp4 === true) {
                                let Cons_tail16, fv_p3, inlinedVal19;
                                Cons_tail16 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1(7, Cons_tail13);
                                fv_p3 = minimax1.#playerOccupies(p2)(b);
                                inlinedVal19 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(4, Cons_tail16, undefined, fv_p3);
                                inlinedVal18 = inlinedVal19;
                              } else {
                                inlinedVal18 = false;
                              }
                              if (inlinedVal18 === false) {
                                let Cons_tail16, fv_p3, inlinedVal19;
                                Cons_tail16 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1(5, Cons_tail15);
                                fv_p3 = minimax1.#playerOccupies(p2)(b);
                                inlinedVal19 = minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(2, Cons_tail16, undefined, fv_p3);
                                if (inlinedVal19 === false) {
                                  let Cons_tail17, inlinedVal20, inlinedVal21, scrut5, arg$Some$0$5;
                                  Cons_tail17 = minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil1();
                                  scrut5 = minimax1.#find(b, 0);
                                  if (scrut5 instanceof minimax1.Some.class) {
                                    arg$Some$0$5 = scrut5.value;
                                    inlinedVal21 = minimax1.#playerEq(p2, arg$Some$0$5);
                                    if (inlinedVal21 === true) {
                                      let fv_tmp5, inlinedVal22;
                                      fv_tmp5 = minimax1.#playerOccupies(p2)(b)(4);
                                      if (fv_tmp5 === true) {
                                        let Cons_tail18, fv_p4, inlinedVal23;
                                        Cons_tail18 = minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil1();
                                        fv_p4 = minimax1.#playerOccupies(p2)(b);
                                        inlinedVal23 = minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(8, Cons_tail18, undefined, fv_p4);
                                        inlinedVal22 = inlinedVal23;
                                      } else {
                                        inlinedVal22 = false;
                                      }
                                      inlinedVal20 = inlinedVal22;
                                    } else {
                                      inlinedVal20 = false;
                                    }
                                  } else if (scrut5 instanceof minimax1.None.class) {
                                    inlinedVal20 = false;
                                  } else {
                                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                  }
                                  if (inlinedVal20 === false) {
                                    let inlinedVal22, fv_tmp5;
                                    fv_tmp5 = minimax1.#playerOccupies(p2)(b)(2);
                                    if (fv_tmp5 === true) {
                                      let Cons_tail18, fv_p4, inlinedVal23;
                                      Cons_tail18 = minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons1(6, Cons_tail17);
                                      fv_p4 = minimax1.#playerOccupies(p2)(b);
                                      inlinedVal23 = minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(4, Cons_tail18, undefined, fv_p4);
                                      if (inlinedVal23 === false) {
                                        inlinedVal22 = false;
                                      } else {
                                        inlinedVal22 = true;
                                      }
                                    } else {
                                      inlinedVal22 = false;
                                    }
                                    if (inlinedVal22 === false) {
                                      let inlinedVal23, p3, inlinedVal24;
                                      p3 = minimax1.#isSome;
                                      inlinedVal24 = minimax1.#listAll$tailrec(p3, b);
                                      if (inlinedVal24 === true) {
                                        let p4, Cons_tail18, Cons_tail19, Cons_tail20, inlinedVal25, inlinedVal26, scrut6, arg$Some$0$6;
                                        p4 = minimax1.X;
                                        Cons_tail18 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                        Cons_tail19 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                        Cons_tail20 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail19);
                                        scrut6 = minimax1.#find(b, 0);
                                        if (scrut6 instanceof minimax1.Some.class) {
                                          arg$Some$0$6 = scrut6.value;
                                          inlinedVal26 = minimax1.#playerEq(p4, arg$Some$0$6);
                                          if (inlinedVal26 === true) {
                                            let fv_tmp6, inlinedVal27;
                                            fv_tmp6 = minimax1.#playerOccupies(p4)(b)(1);
                                            if (fv_tmp6 === true) {
                                              let Cons_tail21, fv_p4, inlinedVal28;
                                              Cons_tail21 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                                              fv_p4 = minimax1.#playerOccupies(p4)(b);
                                              inlinedVal28 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(2, Cons_tail21, undefined, fv_p4);
                                              inlinedVal27 = inlinedVal28;
                                            } else {
                                              inlinedVal27 = false;
                                            }
                                            inlinedVal25 = inlinedVal27;
                                          } else {
                                            inlinedVal25 = false;
                                          }
                                        } else if (scrut6 instanceof minimax1.None.class) {
                                          inlinedVal25 = false;
                                        } else {
                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                        }
                                        if (inlinedVal25 === false) {
                                          let fv_tmp6, inlinedVal27;
                                          fv_tmp6 = minimax1.#playerOccupies(p4)(b)(3);
                                          if (fv_tmp6 === true) {
                                            let Cons_tail21, fv_p4, inlinedVal28;
                                            Cons_tail21 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(5, Cons_tail18);
                                            fv_p4 = minimax1.#playerOccupies(p4)(b);
                                            inlinedVal28 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(4, Cons_tail21, undefined, fv_p4);
                                            inlinedVal27 = inlinedVal28;
                                          } else {
                                            inlinedVal27 = false;
                                          }
                                          if (inlinedVal27 === false) {
                                            let Cons_tail21, fv_p4, inlinedVal28;
                                            Cons_tail21 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons(7, Cons_tail20);
                                            fv_p4 = minimax1.#playerOccupies(p4)(b);
                                            inlinedVal28 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(6, Cons_tail21, undefined, fv_p4);
                                            if (inlinedVal28 === false) {
                                              let Cons_tail22, Cons_tail23, Cons_tail24, inlinedVal29, inlinedVal30, scrut7, arg$Some$0$7;
                                              Cons_tail22 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                              Cons_tail23 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                              Cons_tail24 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail23);
                                              scrut7 = minimax1.#find(b, 0);
                                              if (scrut7 instanceof minimax1.Some.class) {
                                                arg$Some$0$7 = scrut7.value;
                                                inlinedVal30 = minimax1.#playerEq(p4, arg$Some$0$7);
                                                if (inlinedVal30 === true) {
                                                  let fv_tmp7, inlinedVal31;
                                                  fv_tmp7 = minimax1.#playerOccupies(p4)(b)(3);
                                                  if (fv_tmp7 === true) {
                                                    let Cons_tail25, fv_p5, inlinedVal32;
                                                    Cons_tail25 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                                    fv_p5 = minimax1.#playerOccupies(p4)(b);
                                                    inlinedVal32 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(6, Cons_tail25, undefined, fv_p5);
                                                    inlinedVal31 = inlinedVal32;
                                                  } else {
                                                    inlinedVal31 = false;
                                                  }
                                                  inlinedVal29 = inlinedVal31;
                                                } else {
                                                  inlinedVal29 = false;
                                                }
                                              } else if (scrut7 instanceof minimax1.None.class) {
                                                inlinedVal29 = false;
                                              } else {
                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                              }
                                              if (inlinedVal29 === false) {
                                                let fv_tmp7, inlinedVal31;
                                                fv_tmp7 = minimax1.#playerOccupies(p4)(b)(1);
                                                if (fv_tmp7 === true) {
                                                  let Cons_tail25, fv_p5, inlinedVal32;
                                                  Cons_tail25 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(7, Cons_tail22);
                                                  fv_p5 = minimax1.#playerOccupies(p4)(b);
                                                  inlinedVal32 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(4, Cons_tail25, undefined, fv_p5);
                                                  inlinedVal31 = inlinedVal32;
                                                } else {
                                                  inlinedVal31 = false;
                                                }
                                                if (inlinedVal31 === false) {
                                                  let Cons_tail25, fv_p5, inlinedVal32;
                                                  Cons_tail25 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons(5, Cons_tail24);
                                                  fv_p5 = minimax1.#playerOccupies(p4)(b);
                                                  inlinedVal32 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(2, Cons_tail25, undefined, fv_p5);
                                                  if (inlinedVal32 === false) {
                                                    let Cons_tail26, inlinedVal33, inlinedVal34, scrut8, arg$Some$0$8;
                                                    Cons_tail26 = minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                                                    scrut8 = minimax1.#find(b, 0);
                                                    if (scrut8 instanceof minimax1.Some.class) {
                                                      arg$Some$0$8 = scrut8.value;
                                                      inlinedVal34 = minimax1.#playerEq(p4, arg$Some$0$8);
                                                      if (inlinedVal34 === true) {
                                                        let fv_tmp8, inlinedVal35;
                                                        fv_tmp8 = minimax1.#playerOccupies(p4)(b)(4);
                                                        if (fv_tmp8 === true) {
                                                          let Cons_tail27, fv_p6, inlinedVal36;
                                                          Cons_tail27 = minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                                                          fv_p6 = minimax1.#playerOccupies(p4)(b);
                                                          inlinedVal36 = minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(8, Cons_tail27, undefined, fv_p6);
                                                          inlinedVal35 = inlinedVal36;
                                                        } else {
                                                          inlinedVal35 = false;
                                                        }
                                                        inlinedVal33 = inlinedVal35;
                                                      } else {
                                                        inlinedVal33 = false;
                                                      }
                                                    } else if (scrut8 instanceof minimax1.None.class) {
                                                      inlinedVal33 = false;
                                                    } else {
                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                    }
                                                    if (inlinedVal33 === false) {
                                                      let fv_tmp8, inlinedVal35;
                                                      fv_tmp8 = minimax1.#playerOccupies(p4)(b)(2);
                                                      if (fv_tmp8 === true) {
                                                        let Cons_tail27, fv_p6, inlinedVal36;
                                                        Cons_tail27 = minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons(6, Cons_tail26);
                                                        fv_p6 = minimax1.#playerOccupies(p4)(b);
                                                        inlinedVal36 = minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(4, Cons_tail27, undefined, fv_p6);
                                                        inlinedVal35 = inlinedVal36;
                                                      } else {
                                                        inlinedVal35 = false;
                                                      }
                                                      if (inlinedVal35 === false) {
                                                        let p5, inlinedVal36, Cons_tail27, Cons_tail28, Cons_tail29, inlinedVal37, inlinedVal38, scrut9, arg$Some$0$9;
                                                        p5 = minimax1.O;
                                                        Cons_tail27 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                                        Cons_tail28 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                                        Cons_tail29 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail28);
                                                        scrut9 = minimax1.#find(b, 0);
                                                        if (scrut9 instanceof minimax1.Some.class) {
                                                          arg$Some$0$9 = scrut9.value;
                                                          inlinedVal38 = minimax1.#playerEq(p5, arg$Some$0$9);
                                                          if (inlinedVal38 === true) {
                                                            let fv_tmp9, inlinedVal39;
                                                            fv_tmp9 = minimax1.#playerOccupies(p5)(b)(1);
                                                            if (fv_tmp9 === true) {
                                                              let Cons_tail30, fv_p6, inlinedVal40;
                                                              Cons_tail30 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
                                                              fv_p6 = minimax1.#playerOccupies(p5)(b);
                                                              inlinedVal40 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(2, Cons_tail30, undefined, fv_p6);
                                                              inlinedVal39 = inlinedVal40;
                                                            } else {
                                                              inlinedVal39 = false;
                                                            }
                                                            inlinedVal37 = inlinedVal39;
                                                          } else {
                                                            inlinedVal37 = false;
                                                          }
                                                        } else if (scrut9 instanceof minimax1.None.class) {
                                                          inlinedVal37 = false;
                                                        } else {
                                                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                        }
                                                        if (inlinedVal37 === false) {
                                                          let fv_tmp9, inlinedVal39;
                                                          fv_tmp9 = minimax1.#playerOccupies(p5)(b)(3);
                                                          if (fv_tmp9 === true) {
                                                            let Cons_tail30, fv_p6, inlinedVal40;
                                                            Cons_tail30 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(5, Cons_tail27);
                                                            fv_p6 = minimax1.#playerOccupies(p5)(b);
                                                            inlinedVal40 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(4, Cons_tail30, undefined, fv_p6);
                                                            inlinedVal39 = inlinedVal40;
                                                          } else {
                                                            inlinedVal39 = false;
                                                          }
                                                          if (inlinedVal39 === false) {
                                                            let Cons_tail30, fv_p6, inlinedVal40;
                                                            Cons_tail30 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1(7, Cons_tail29);
                                                            fv_p6 = minimax1.#playerOccupies(p5)(b);
                                                            inlinedVal40 = minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(6, Cons_tail30, undefined, fv_p6);
                                                            if (inlinedVal40 === false) {
                                                              let Cons_tail31, Cons_tail32, Cons_tail33, inlinedVal41, inlinedVal42, scrut10, arg$Some$0$10;
                                                              Cons_tail31 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                                              Cons_tail32 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                                              Cons_tail33 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail32);
                                                              scrut10 = minimax1.#find(b, 0);
                                                              if (scrut10 instanceof minimax1.Some.class) {
                                                                arg$Some$0$10 = scrut10.value;
                                                                inlinedVal42 = minimax1.#playerEq(p5, arg$Some$0$10);
                                                                if (inlinedVal42 === true) {
                                                                  let fv_tmp10, inlinedVal43;
                                                                  fv_tmp10 = minimax1.#playerOccupies(p5)(b)(3);
                                                                  if (fv_tmp10 === true) {
                                                                    let Cons_tail34, fv_p7, inlinedVal44;
                                                                    Cons_tail34 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                                                                    fv_p7 = minimax1.#playerOccupies(p5)(b);
                                                                    inlinedVal44 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(6, Cons_tail34, undefined, fv_p7);
                                                                    inlinedVal43 = inlinedVal44;
                                                                  } else {
                                                                    inlinedVal43 = false;
                                                                  }
                                                                  inlinedVal41 = inlinedVal43;
                                                                } else {
                                                                  inlinedVal41 = false;
                                                                }
                                                              } else if (scrut10 instanceof minimax1.None.class) {
                                                                inlinedVal41 = false;
                                                              } else {
                                                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                              }
                                                              if (inlinedVal41 === false) {
                                                                let fv_tmp10, inlinedVal43;
                                                                fv_tmp10 = minimax1.#playerOccupies(p5)(b)(1);
                                                                if (fv_tmp10 === true) {
                                                                  let Cons_tail34, fv_p7, inlinedVal44;
                                                                  Cons_tail34 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(7, Cons_tail31);
                                                                  fv_p7 = minimax1.#playerOccupies(p5)(b);
                                                                  inlinedVal44 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(4, Cons_tail34, undefined, fv_p7);
                                                                  inlinedVal43 = inlinedVal44;
                                                                } else {
                                                                  inlinedVal43 = false;
                                                                }
                                                                if (inlinedVal43 === false) {
                                                                  let Cons_tail34, fv_p7, inlinedVal44;
                                                                  Cons_tail34 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1(5, Cons_tail33);
                                                                  fv_p7 = minimax1.#playerOccupies(p5)(b);
                                                                  inlinedVal44 = minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(2, Cons_tail34, undefined, fv_p7);
                                                                  if (inlinedVal44 === false) {
                                                                    let Cons_tail35, inlinedVal45, inlinedVal46, scrut11, arg$Some$0$11;
                                                                    Cons_tail35 = minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil1();
                                                                    scrut11 = minimax1.#find(b, 0);
                                                                    if (scrut11 instanceof minimax1.Some.class) {
                                                                      arg$Some$0$11 = scrut11.value;
                                                                      inlinedVal46 = minimax1.#playerEq(p5, arg$Some$0$11);
                                                                      if (inlinedVal46 === true) {
                                                                        let fv_tmp11, inlinedVal47;
                                                                        fv_tmp11 = minimax1.#playerOccupies(p5)(b)(4);
                                                                        if (fv_tmp11 === true) {
                                                                          let Cons_tail36, fv_p8, inlinedVal48;
                                                                          Cons_tail36 = minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil1();
                                                                          fv_p8 = minimax1.#playerOccupies(p5)(b);
                                                                          inlinedVal48 = minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(8, Cons_tail36, undefined, fv_p8);
                                                                          inlinedVal47 = inlinedVal48;
                                                                        } else {
                                                                          inlinedVal47 = false;
                                                                        }
                                                                        inlinedVal45 = inlinedVal47;
                                                                      } else {
                                                                        inlinedVal45 = false;
                                                                      }
                                                                    } else if (scrut11 instanceof minimax1.None.class) {
                                                                      inlinedVal45 = false;
                                                                    } else {
                                                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                                                    }
                                                                    if (inlinedVal45 === false) {
                                                                      let fv_tmp11;
                                                                      fv_tmp11 = minimax1.#playerOccupies(p5)(b)(2);
                                                                      if (fv_tmp11 === true) {
                                                                        let Cons_tail36, fv_p8, inlinedVal47;
                                                                        Cons_tail36 = minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons1(6, Cons_tail35);
                                                                        fv_p8 = minimax1.#playerOccupies(p5)(b);
                                                                        inlinedVal47 = minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(4, Cons_tail36, undefined, fv_p8);
                                                                        if (inlinedVal47 === false) {
                                                                          inlinedVal36 = true;
                                                                        } else {
                                                                          inlinedVal36 = false;
                                                                        }
                                                                      } else {
                                                                        inlinedVal36 = true;
                                                                      }
                                                                    } else {
                                                                      inlinedVal36 = false;
                                                                    }
                                                                  } else {
                                                                    inlinedVal36 = false;
                                                                  }
                                                                } else {
                                                                  inlinedVal36 = false;
                                                                }
                                                              } else {
                                                                inlinedVal36 = false;
                                                              }
                                                            } else {
                                                              inlinedVal36 = false;
                                                            }
                                                          } else {
                                                            inlinedVal36 = false;
                                                          }
                                                        } else {
                                                          inlinedVal36 = false;
                                                        }
                                                        inlinedVal23 = inlinedVal36;
                                                      } else {
                                                        inlinedVal23 = false;
                                                      }
                                                    } else {
                                                      inlinedVal23 = false;
                                                    }
                                                  } else {
                                                    inlinedVal23 = false;
                                                  }
                                                } else {
                                                  inlinedVal23 = false;
                                                }
                                              } else {
                                                inlinedVal23 = false;
                                              }
                                            } else {
                                              inlinedVal23 = false;
                                            }
                                          } else {
                                            inlinedVal23 = false;
                                          }
                                        } else {
                                          inlinedVal23 = false;
                                        }
                                      } else {
                                        inlinedVal23 = false;
                                      }
                                      inlinedVal = inlinedVal23;
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
        let inlinedVal3, p2, Cons_tail3, Cons_tail4, Cons_tail5, inlinedVal4, inlinedVal5, scrut1, arg$Some$0$1;
        p2 = minimax1.X;
        Cons_tail3 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
        Cons_tail4 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
        Cons_tail5 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1(8, Cons_tail4);
        scrut1 = minimax1.#find(b, 0);
        if (scrut1 instanceof minimax1.Some.class) {
          arg$Some$0$1 = scrut1.value;
          inlinedVal5 = minimax1.#playerEq(p2, arg$Some$0$1);
          if (inlinedVal5 === true) {
            let fv_tmp, inlinedVal6;
            fv_tmp = minimax1.#playerOccupies(p2)(b)(1);
            if (fv_tmp === true) {
              let Cons_tail6, fv_p, inlinedVal7;
              Cons_tail6 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1();
              fv_p = minimax1.#playerOccupies(p2)(b);
              inlinedVal7 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(2, Cons_tail6, undefined, fv_p);
              inlinedVal6 = inlinedVal7;
            } else {
              inlinedVal6 = false;
            }
            inlinedVal4 = inlinedVal6;
          } else {
            inlinedVal4 = false;
          }
        } else if (scrut1 instanceof minimax1.None.class) {
          inlinedVal4 = false;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        if (inlinedVal4 === false) {
          let fv_tmp, inlinedVal6;
          fv_tmp = minimax1.#playerOccupies(p2)(b)(3);
          if (fv_tmp === true) {
            let Cons_tail6, fv_p, inlinedVal7;
            Cons_tail6 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1(5, Cons_tail3);
            fv_p = minimax1.#playerOccupies(p2)(b);
            inlinedVal7 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(4, Cons_tail6, undefined, fv_p);
            inlinedVal6 = inlinedVal7;
          } else {
            inlinedVal6 = false;
          }
          if (inlinedVal6 === false) {
            let Cons_tail6, fv_p, inlinedVal7;
            Cons_tail6 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1(7, Cons_tail5);
            fv_p = minimax1.#playerOccupies(p2)(b);
            inlinedVal7 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker(6, Cons_tail6, undefined, fv_p);
            if (inlinedVal7 === false) {
              let Cons_tail7, Cons_tail8, Cons_tail9, inlinedVal8, inlinedVal9, scrut2, arg$Some$0$2;
              Cons_tail7 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
              Cons_tail8 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
              Cons_tail9 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1(8, Cons_tail8);
              scrut2 = minimax1.#find(b, 0);
              if (scrut2 instanceof minimax1.Some.class) {
                arg$Some$0$2 = scrut2.value;
                inlinedVal9 = minimax1.#playerEq(p2, arg$Some$0$2);
                if (inlinedVal9 === true) {
                  let fv_tmp1, inlinedVal10;
                  fv_tmp1 = minimax1.#playerOccupies(p2)(b)(3);
                  if (fv_tmp1 === true) {
                    let Cons_tail10, fv_p1, inlinedVal11;
                    Cons_tail10 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1();
                    fv_p1 = minimax1.#playerOccupies(p2)(b);
                    inlinedVal11 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(6, Cons_tail10, undefined, fv_p1);
                    inlinedVal10 = inlinedVal11;
                  } else {
                    inlinedVal10 = false;
                  }
                  inlinedVal8 = inlinedVal10;
                } else {
                  inlinedVal8 = false;
                }
              } else if (scrut2 instanceof minimax1.None.class) {
                inlinedVal8 = false;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              if (inlinedVal8 === false) {
                let fv_tmp1, inlinedVal10;
                fv_tmp1 = minimax1.#playerOccupies(p2)(b)(1);
                if (fv_tmp1 === true) {
                  let Cons_tail10, fv_p1, inlinedVal11;
                  Cons_tail10 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1(7, Cons_tail7);
                  fv_p1 = minimax1.#playerOccupies(p2)(b);
                  inlinedVal11 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(4, Cons_tail10, undefined, fv_p1);
                  inlinedVal10 = inlinedVal11;
                } else {
                  inlinedVal10 = false;
                }
                if (inlinedVal10 === false) {
                  let Cons_tail10, fv_p1, inlinedVal11;
                  Cons_tail10 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1(5, Cons_tail9);
                  fv_p1 = minimax1.#playerOccupies(p2)(b);
                  inlinedVal11 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker(2, Cons_tail10, undefined, fv_p1);
                  if (inlinedVal11 === false) {
                    let Cons_tail11, inlinedVal12, inlinedVal13, scrut3, arg$Some$0$3;
                    Cons_tail11 = minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil1();
                    scrut3 = minimax1.#find(b, 0);
                    if (scrut3 instanceof minimax1.Some.class) {
                      arg$Some$0$3 = scrut3.value;
                      inlinedVal13 = minimax1.#playerEq(p2, arg$Some$0$3);
                      if (inlinedVal13 === true) {
                        let fv_tmp2, inlinedVal14;
                        fv_tmp2 = minimax1.#playerOccupies(p2)(b)(4);
                        if (fv_tmp2 === true) {
                          let Cons_tail12, fv_p2, inlinedVal15;
                          Cons_tail12 = minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil1();
                          fv_p2 = minimax1.#playerOccupies(p2)(b);
                          inlinedVal15 = minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(8, Cons_tail12, undefined, fv_p2);
                          inlinedVal14 = inlinedVal15;
                        } else {
                          inlinedVal14 = false;
                        }
                        inlinedVal12 = inlinedVal14;
                      } else {
                        inlinedVal12 = false;
                      }
                    } else if (scrut3 instanceof minimax1.None.class) {
                      inlinedVal12 = false;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                    if (inlinedVal12 === false) {
                      let fv_tmp2, inlinedVal14;
                      fv_tmp2 = minimax1.#playerOccupies(p2)(b)(2);
                      if (fv_tmp2 === true) {
                        let Cons_tail12, fv_p2, inlinedVal15;
                        Cons_tail12 = minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons1(6, Cons_tail11);
                        fv_p2 = minimax1.#playerOccupies(p2)(b);
                        inlinedVal15 = minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker(4, Cons_tail12, undefined, fv_p2);
                        inlinedVal14 = inlinedVal15;
                      } else {
                        inlinedVal14 = false;
                      }
                      if (inlinedVal14 === false) {
                        let p3, Cons_tail12, Cons_tail13, Cons_tail14, inlinedVal15, inlinedVal16, scrut4, arg$Some$0$4;
                        p3 = minimax1.O;
                        Cons_tail12 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                        Cons_tail13 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                        Cons_tail14 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(8, Cons_tail13);
                        scrut4 = minimax1.#find(b, 0);
                        if (scrut4 instanceof minimax1.Some.class) {
                          arg$Some$0$4 = scrut4.value;
                          inlinedVal16 = minimax1.#playerEq(p3, arg$Some$0$4);
                          if (inlinedVal16 === true) {
                            let fv_tmp3, inlinedVal17;
                            fv_tmp3 = minimax1.#playerOccupies(p3)(b)(1);
                            if (fv_tmp3 === true) {
                              let Cons_tail15, fv_p2, inlinedVal18;
                              Cons_tail15 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil();
                              fv_p2 = minimax1.#playerOccupies(p3)(b);
                              inlinedVal18 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(2, Cons_tail15, undefined, fv_p2);
                              inlinedVal17 = inlinedVal18;
                            } else {
                              inlinedVal17 = false;
                            }
                            inlinedVal15 = inlinedVal17;
                          } else {
                            inlinedVal15 = false;
                          }
                        } else if (scrut4 instanceof minimax1.None.class) {
                          inlinedVal15 = false;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        if (inlinedVal15 === false) {
                          let fv_tmp3, inlinedVal17;
                          fv_tmp3 = minimax1.#playerOccupies(p3)(b)(3);
                          if (fv_tmp3 === true) {
                            let Cons_tail15, fv_p2, inlinedVal18;
                            Cons_tail15 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(5, Cons_tail12);
                            fv_p2 = minimax1.#playerOccupies(p3)(b);
                            inlinedVal18 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(4, Cons_tail15, undefined, fv_p2);
                            inlinedVal17 = inlinedVal18;
                          } else {
                            inlinedVal17 = false;
                          }
                          if (inlinedVal17 === false) {
                            let Cons_tail15, fv_p2, inlinedVal18;
                            Cons_tail15 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons(7, Cons_tail14);
                            fv_p2 = minimax1.#playerOccupies(p3)(b);
                            inlinedVal18 = minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1(6, Cons_tail15, undefined, fv_p2);
                            if (inlinedVal18 === false) {
                              let Cons_tail16, Cons_tail17, Cons_tail18, inlinedVal19, inlinedVal20, scrut5, arg$Some$0$5;
                              Cons_tail16 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                              Cons_tail17 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                              Cons_tail18 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(8, Cons_tail17);
                              scrut5 = minimax1.#find(b, 0);
                              if (scrut5 instanceof minimax1.Some.class) {
                                arg$Some$0$5 = scrut5.value;
                                inlinedVal20 = minimax1.#playerEq(p3, arg$Some$0$5);
                                if (inlinedVal20 === true) {
                                  let fv_tmp4, inlinedVal21;
                                  fv_tmp4 = minimax1.#playerOccupies(p3)(b)(3);
                                  if (fv_tmp4 === true) {
                                    let Cons_tail19, fv_p3, inlinedVal22;
                                    Cons_tail19 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil();
                                    fv_p3 = minimax1.#playerOccupies(p3)(b);
                                    inlinedVal22 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(6, Cons_tail19, undefined, fv_p3);
                                    inlinedVal21 = inlinedVal22;
                                  } else {
                                    inlinedVal21 = false;
                                  }
                                  inlinedVal19 = inlinedVal21;
                                } else {
                                  inlinedVal19 = false;
                                }
                              } else if (scrut5 instanceof minimax1.None.class) {
                                inlinedVal19 = false;
                              } else {
                                throw globalThis.Object.freeze(new globalThis.Error("match error"))
                              }
                              if (inlinedVal19 === false) {
                                let fv_tmp4, inlinedVal21;
                                fv_tmp4 = minimax1.#playerOccupies(p3)(b)(1);
                                if (fv_tmp4 === true) {
                                  let Cons_tail19, fv_p3, inlinedVal22;
                                  Cons_tail19 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(7, Cons_tail16);
                                  fv_p3 = minimax1.#playerOccupies(p3)(b);
                                  inlinedVal22 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(4, Cons_tail19, undefined, fv_p3);
                                  inlinedVal21 = inlinedVal22;
                                } else {
                                  inlinedVal21 = false;
                                }
                                if (inlinedVal21 === false) {
                                  let Cons_tail19, fv_p3, inlinedVal22;
                                  Cons_tail19 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons(5, Cons_tail18);
                                  fv_p3 = minimax1.#playerOccupies(p3)(b);
                                  inlinedVal22 = minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1(2, Cons_tail19, undefined, fv_p3);
                                  if (inlinedVal22 === false) {
                                    let Cons_tail20, inlinedVal23, inlinedVal24, scrut6, arg$Some$0$6;
                                    Cons_tail20 = minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                                    scrut6 = minimax1.#find(b, 0);
                                    if (scrut6 instanceof minimax1.Some.class) {
                                      arg$Some$0$6 = scrut6.value;
                                      inlinedVal24 = minimax1.#playerEq(p3, arg$Some$0$6);
                                      if (inlinedVal24 === true) {
                                        let fv_tmp5, inlinedVal25;
                                        fv_tmp5 = minimax1.#playerOccupies(p3)(b)(4);
                                        if (fv_tmp5 === true) {
                                          let Cons_tail21, fv_p4, inlinedVal26;
                                          Cons_tail21 = minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil();
                                          fv_p4 = minimax1.#playerOccupies(p3)(b);
                                          inlinedVal26 = minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(8, Cons_tail21, undefined, fv_p4);
                                          inlinedVal25 = inlinedVal26;
                                        } else {
                                          inlinedVal25 = false;
                                        }
                                        inlinedVal23 = inlinedVal25;
                                      } else {
                                        inlinedVal23 = false;
                                      }
                                    } else if (scrut6 instanceof minimax1.None.class) {
                                      inlinedVal23 = false;
                                    } else {
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                                    }
                                    if (inlinedVal23 === false) {
                                      let fv_tmp5;
                                      fv_tmp5 = minimax1.#playerOccupies(p3)(b)(2);
                                      if (fv_tmp5 === true) {
                                        let Cons_tail21, fv_p4, inlinedVal25;
                                        Cons_tail21 = minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons(6, Cons_tail20);
                                        fv_p4 = minimax1.#playerOccupies(p3)(b);
                                        inlinedVal25 = minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1(4, Cons_tail21, undefined, fv_p4);
                                        if (inlinedVal25 === false) {
                                          inlinedVal3 = 0;
                                        } else {
                                          inlinedVal3 = -1;
                                        }
                                      } else {
                                        inlinedVal3 = 0;
                                      }
                                    } else {
                                      inlinedVal3 = -1;
                                    }
                                  } else {
                                    inlinedVal3 = -1;
                                  }
                                } else {
                                  inlinedVal3 = -1;
                                }
                              } else {
                                inlinedVal3 = -1;
                              }
                            } else {
                              inlinedVal3 = -1;
                            }
                          } else {
                            inlinedVal3 = -1;
                          }
                        } else {
                          inlinedVal3 = -1;
                        }
                      } else {
                        inlinedVal3 = 1;
                      }
                    } else {
                      inlinedVal3 = 1;
                    }
                  } else {
                    inlinedVal3 = 1;
                  }
                } else {
                  inlinedVal3 = 1;
                }
              } else {
                inlinedVal3 = 1;
              }
            } else {
              inlinedVal3 = 1;
            }
          } else {
            inlinedVal3 = 1;
          }
        } else {
          inlinedVal3 = 1;
        }
        tmp = globalThis.Object.freeze([
          b,
          inlinedVal3
        ]);
        return minimax.#mkLeaf(tmp)
      }
      {
        let inlinedVal3, tmp8, inlinedVal4, minimax2, n, m, acc, inlinedVal5;
        tmp1 = minimax.#other(p);
        tmp2 = minimax.#minimax(tmp1);
        tmp8 = minimax1.#moveTo(b, p);
        minimax2 = minimax1;
        n = 0;
        m = b;
        acc = minimax_successors_allMoves_f_rev_go$l_Nil();
        inlinedLbl: {
          loopLabel: while (true) {
            let arg$Cons$0$, arg$Cons$1$, tmp9, tmp10, tmp11;
            if (m instanceof minimax2.Nil.class) {
              let acc1, inlinedVal6;
              acc1 = minimax_successors_map$l_Nil();
              inlinedVal6 = acc(acc1);
              inlinedVal5 = inlinedVal6;
              break inlinedLbl
            } else if (m instanceof minimax2.Cons.class) {
              arg$Cons$0$ = m.head;
              arg$Cons$1$ = m.tail;
              if (arg$Cons$0$ instanceof minimax2.Some.class) {
                tmp9 = n + 1;
                n = tmp9;
                m = arg$Cons$1$;
                continue loopLabel
              } else if (arg$Cons$0$ instanceof minimax2.None.class) {
                tmp10 = n + 1;
                tmp11 = minimax_successors_allMoves_f_rev_go$l_Cons(n, acc);
                n = tmp10;
                m = arg$Cons$1$;
                acc = tmp11;
                continue loopLabel
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        inlinedVal4 = inlinedVal5(undefined, tmp8);
        inlinedVal3 = inlinedVal4(undefined, tmp2);
        tmp3 = minimax.#compose(minimax.#snd, minimax.#top);
        scores = minimax.#map(tmp3)(inlinedVal3);
        if (p instanceof minimax.X.class) {
          tmp4 = minimax.#listmax(scores);
          tmp5 = globalThis.Object.freeze([
            b,
            tmp4
          ]);
          return minimax.Rose(tmp5, undefined)
        }
        tmp6 = minimax.#listmin(scores);
        tmp7 = globalThis.Object.freeze([
          b,
          tmp6
        ]);
        return minimax.Rose(tmp7, undefined);
      }
    }
  }
  static #gameTree() {
    let tmp, p;
    tmp = minimax.#empty();
    p = minimax.X;
    return gameTree_minimax$minimax$worker(p, tmp)
  }
  static #boardToIndex(p, b) {
    let start, scrut, tmp, lambda$here;
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
      return runtime.Tuple.get(scrut, 0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #gameTreeWithTT() {
    let transTable, tmp, lambda$here, p;
    lambda$here = lambda$3(-2);
    transTable = minimax.#arrayTabulate(59049, lambda$here);
    tmp = minimax.#empty();
    p = minimax.X;
    return gameTreeWithTT_minimaxTT$minimaxTT$worker(minimax, transTable, p, tmp)
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
    let tmp, tmp1, f, inlinedVal, tmp2, f1, inlinedVal1, f2, inlinedVal2, p, inlinedVal3, p1, inlinedVal4;
    f1 = lambda$1(minimax1);
    inlinedVal1 = go(minimax1, 9, f1, 0);
    p = minimax1.X;
    inlinedVal3 = main_gameTree_minimax$minimax$worker(p, inlinedVal1);
    tmp = minimax.#treeStats(inlinedVal3);
    f = lambda$3(-2);
    tmp2 = [];
    inlinedVal = minimax1.#fillTabulate(tmp2, 0, 59049, f);
    f2 = lambda$1(minimax1);
    inlinedVal2 = go(minimax1, 9, f2, 0);
    p1 = minimax1.X;
    inlinedVal4 = main_gameTreeWithTT_minimaxTT$minimaxTT$worker(minimax1, inlinedVal, p1, inlinedVal2);
    tmp1 = minimax.#treeStats(inlinedVal4);
    return globalThis.Object.freeze([
      tmp,
      tmp1
    ])
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "minimax"];
});
export { go as _$_modulePrivate_$_go };
export { minimaxTT as _$_modulePrivate_$_minimaxTT };
export { doKid as _$_modulePrivate_$_doKid };
export { minimax1 as _$_modulePrivate_$_minimax };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { doKid$ as _$_modulePrivate_$_doKid$ };
export { main_gameTree_minimax$minimax as _$_modulePrivate_$_main_gameTree_minimax$minimax };
export { main_gameTreeWithTT_minimaxTT$minimaxTT as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT$minimaxTT };
export { gameTreeWithTT_minimaxTT$minimaxTT as _$_modulePrivate_$_gameTreeWithTT_minimaxTT$minimaxTT };
export { gameTree_minimax$minimax as _$_modulePrivate_$_gameTree_minimax$minimax };
export { doKid$doKid$ as _$_modulePrivate_$_doKid$doKid$ };
export { doKid$$doKid as _$_modulePrivate_$_doKid$$doKid };
export { main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { main_gameTree_minimax_successors_allMoves_f_rev_go$l_Cons as _$_modulePrivate_$_main_gameTree_minimax_successors_allMoves_f_rev_go$l_Cons };
export { main_gameTree_minimax_successors_allMoves_f_rev_go$l_Nil as _$_modulePrivate_$_main_gameTree_minimax_successors_allMoves_f_rev_go$l_Nil };
export { main_gameTree_minimax_successors_map$l_Cons as _$_modulePrivate_$_main_gameTree_minimax_successors_map$l_Cons };
export { main_gameTree_minimax_successors_map$l_Nil as _$_modulePrivate_$_main_gameTree_minimax_successors_map$l_Nil };
export { main_gameTree_minimax_map$l_Cons as _$_modulePrivate_$_main_gameTree_minimax_map$l_Cons };
export { main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { main_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Cons as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Cons };
export { main_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Nil as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Nil };
export { main_gameTreeWithTT_minimaxTT_successors_map$l_Cons as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_successors_map$l_Cons };
export { main_gameTreeWithTT_minimaxTT_successors_map$l_Nil as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_successors_map$l_Nil };
export { main_gameTreeWithTT_minimaxTT_map$l_Cons as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_map$l_Cons };
export { gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Nil as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Nil };
export { gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Cons as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_successors_allMoves_f_rev_go$l_Cons };
export { gameTreeWithTT_minimaxTT_successors_map$l_Nil as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_successors_map$l_Nil };
export { gameTreeWithTT_minimaxTT_successors_map$l_Cons as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_successors_map$l_Cons };
export { gameTreeWithTT_minimaxTT_map$l_Cons as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_map$l_Cons };
export { gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { gameTree_minimax_successors_allMoves_f_rev_go$l_Nil as _$_modulePrivate_$_gameTree_minimax_successors_allMoves_f_rev_go$l_Nil };
export { gameTree_minimax_successors_allMoves_f_rev_go$l_Cons as _$_modulePrivate_$_gameTree_minimax_successors_allMoves_f_rev_go$l_Cons };
export { gameTree_minimax_successors_map$l_Nil as _$_modulePrivate_$_gameTree_minimax_successors_map$l_Nil };
export { gameTree_minimax_successors_map$l_Cons as _$_modulePrivate_$_gameTree_minimax_successors_map$l_Cons };
export { gameTree_minimax_map$l_Cons as _$_modulePrivate_$_gameTree_minimax_map$l_Cons };
export { gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons };
export { minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil };
export { minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 };
export { minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 };
export { minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons };
export { minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil };
export { minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 };
export { minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 };
export { minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons };
export { minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil };
export { minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 };
export { minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 };
export { minimax_successors_allMoves_f_rev_go$l_Cons as _$_modulePrivate_$_minimax_successors_allMoves_f_rev_go$l_Cons };
export { minimax_successors_allMoves_f_rev_go$l_Nil as _$_modulePrivate_$_minimax_successors_allMoves_f_rev_go$l_Nil };
export { minimax_successors_map$l_Cons as _$_modulePrivate_$_minimax_successors_map$l_Cons };
export { minimax_successors_map$l_Nil as _$_modulePrivate_$_minimax_successors_map$l_Nil };
export { minimax_map$l_Cons as _$_modulePrivate_$_minimax_map$l_Cons };
export { successors_allMoves_f_rev_go$l_Nil as _$_modulePrivate_$_successors_allMoves_f_rev_go$l_Nil };
export { successors_allMoves_f_rev_go$l_Cons as _$_modulePrivate_$_successors_allMoves_f_rev_go$l_Cons };
export { successors_map$l_Nil as _$_modulePrivate_$_successors_map$l_Nil };
export { successors_map$l_Cons as _$_modulePrivate_$_successors_map$l_Cons };
export { gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons };
export { gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil };
export { gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 };
export { gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 };
export { gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons };
export { gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil };
export { gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 };
export { gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 };
export { allMoves_f_rev_go$l_Cons as _$_modulePrivate_$_allMoves_f_rev_go$l_Cons };
export { allMoves_f_rev_go$l_Nil as _$_modulePrivate_$_allMoves_f_rev_go$l_Nil };
export { score_isWinFor_hasDiag_hasTrip_listAll$l_Cons as _$_modulePrivate_$_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons };
export { score_isWinFor_hasDiag_hasTrip_listAll$l_Nil as _$_modulePrivate_$_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil };
export { score_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_score_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { score_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_score_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { score_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_score_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { score_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_score_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { score_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons1 };
export { score_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_score_isWinFor_hasDiag_hasTrip_listAll$l_Nil1 };
export { score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons as _$_modulePrivate_$_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons };
export { isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil as _$_modulePrivate_$_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Nil };
export { isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_hasCol_hasTrip_listAll$l_Cons };
export { hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_hasCol_hasTrip_listAll$l_Nil };
export { hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_hasRow_hasTrip_listAll$l_Cons };
export { hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_hasRow_hasTrip_listAll$l_Nil };
export { minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons };
export { minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil };
export { minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons as _$_modulePrivate_$_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons };
export { minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil as _$_modulePrivate_$_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil };
export { minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons1 };
export { minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Nil1 };
export { minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 as _$_modulePrivate_$_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons1 };
export { minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 as _$_modulePrivate_$_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Nil1 };
export { minimaxTT_successors_allMoves_f_rev_go$l_Cons as _$_modulePrivate_$_minimaxTT_successors_allMoves_f_rev_go$l_Cons };
export { minimaxTT_successors_allMoves_f_rev_go$l_Nil as _$_modulePrivate_$_minimaxTT_successors_allMoves_f_rev_go$l_Nil };
export { minimaxTT_successors_map$l_Cons as _$_modulePrivate_$_minimaxTT_successors_map$l_Cons };
export { minimaxTT_successors_map$l_Nil as _$_modulePrivate_$_minimaxTT_successors_map$l_Nil };
export { minimaxTT_map$l_Cons as _$_modulePrivate_$_minimaxTT_map$l_Cons };
export { minimaxTT$worker as _$_modulePrivate_$_minimaxTT$worker };
export { minimaxTT_map$l_Cons$worker as _$_modulePrivate_$_minimaxTT_map$l_Cons$worker };
export { minimaxTT_successors_map$l_Cons$worker as _$_modulePrivate_$_minimaxTT_successors_map$l_Cons$worker };
export { minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_hasRow_hasTrip_listAll$l_Cons$worker };
export { hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_hasCol_hasTrip_listAll$l_Cons$worker };
export { isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker };
export { isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker };
export { score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 };
export { gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker };
export { gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 };
export { gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker };
export { gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 };
export { gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { successors_map$l_Cons$worker as _$_modulePrivate_$_successors_map$l_Cons$worker };
export { minimax_map$l_Cons$worker as _$_modulePrivate_$_minimax_map$l_Cons$worker };
export { minimax_successors_map$l_Cons$worker as _$_modulePrivate_$_minimax_successors_map$l_Cons$worker };
export { minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker };
export { minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimax_score_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 };
export { minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker };
export { minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimax_gameOver_isWin_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 };
export { minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker };
export { minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_minimax_gameOver_isCat_isWinFor_hasDiag_hasTrip_listAll$l_Cons$worker1 };
export { gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { gameTree_minimax_map$l_Cons$worker as _$_modulePrivate_$_gameTree_minimax_map$l_Cons$worker };
export { gameTree_minimax_successors_map$l_Cons$worker as _$_modulePrivate_$_gameTree_minimax_successors_map$l_Cons$worker };
export { gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { gameTreeWithTT_minimaxTT_map$l_Cons$worker as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_map$l_Cons$worker };
export { gameTreeWithTT_minimaxTT_successors_map$l_Cons$worker as _$_modulePrivate_$_gameTreeWithTT_minimaxTT_successors_map$l_Cons$worker };
export { main_gameTreeWithTT_minimaxTT_map$l_Cons$worker as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_map$l_Cons$worker };
export { main_gameTreeWithTT_minimaxTT_successors_map$l_Cons$worker as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_successors_map$l_Cons$worker };
export { main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { main_gameTree_minimax_map$l_Cons$worker as _$_modulePrivate_$_main_gameTree_minimax_map$l_Cons$worker };
export { main_gameTree_minimax_successors_map$l_Cons$worker as _$_modulePrivate_$_main_gameTree_minimax_successors_map$l_Cons$worker };
export { main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_main_gameTree_minimax_score_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_main_gameTree_minimax_score_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isWin_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isWin_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker };
export { main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker };
export { main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isCat_isWinFor_hasRow_hasTrip_listAll$l_Cons$worker1 };
export { main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 as _$_modulePrivate_$_main_gameTree_minimax_gameOver_isCat_isWinFor_hasCol_hasTrip_listAll$l_Cons$worker1 };
export { gameTree_minimax$minimax$worker as _$_modulePrivate_$_gameTree_minimax$minimax$worker };
export { gameTreeWithTT_minimaxTT$minimaxTT$worker as _$_modulePrivate_$_gameTreeWithTT_minimaxTT$minimaxTT$worker };
export { main_gameTreeWithTT_minimaxTT$minimaxTT$worker as _$_modulePrivate_$_main_gameTreeWithTT_minimaxTT$minimaxTT$worker };
export { main_gameTree_minimax$minimax$worker as _$_modulePrivate_$_main_gameTree_minimax$minimax$worker };
export default minimax1;
