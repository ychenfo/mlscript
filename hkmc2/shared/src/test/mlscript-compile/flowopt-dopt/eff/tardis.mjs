const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const initialBw$accessorSymbol = globalThis.Symbol("initialBw");
const map$tailrec$accessorSymbol = globalThis.Symbol("map$tailrec");
let getBw1, get, go, tardis1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, score1, throws1, getBw1$, get$, lambda$, lambda$1, lambda$2, lambda$3, throws1$, score1$, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, main_score_go_getPast$getPast, main_score_go$lambda$, main_score_go$lambda, main_score_go$go, main_score$score, main_score_go_bind$bind, main_score_go_lambda$_lambda_pure$pure, main_score_go_lambda$_lambda$lambda, main_score_go_lambda$$lambda$, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, main_score_go_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_score_go_lambda$_lambda_lambda$_lambda$lambda, main_score_go_lambda$_lambda_lambda$$lambda$, main_score_go_lambda$_lambda$lambda1, main_score_go_lambda$$lambda$1, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind, main_score_go_lambda$_lambda_lambda$_lambda_getPast$getPast, main_score_go_lambda$_lambda_lambda$_lambda_bind$bind, main_score_go_lambda$_lambda_sendPast$sendPast, main_score_go_lambda$_lambda_bind$bind, main_score_go_fix$fix, main_score_go_bind$bind1, score_go_fix$fix, score_go$lambda$, score_go$lambda, score_go$go, score_go_bind$bind, score_go_lambda$_lambda_lambda$_lambda_getPast$getPast, score_go_lambda$_lambda_lambda$_lambda$lambda, score_go_lambda$_lambda_lambda$$lambda$, score_go_lambda$_lambda$lambda, score_go_lambda$$lambda$, score_go_lambda$_lambda_lambda$_lambda_bind$bind, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, score_go_lambda$_lambda_lambda$_lambda_lambda$$lambda$, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture, score_go_lambda$_lambda_bind$bind, score_go_lambda$_lambda_sendPast$sendPast, score_go_getPast$getPast, score_go_bind$bind1, score_go_lambda$_lambda_pure$pure, score_go_lambda$_lambda$lambda1, score_go_lambda$$lambda$1, go_getPast$getPast, go$lambda$, go$lambda, go_bind$bind, go_lambda$_lambda_pure$pure, go_lambda$_lambda$lambda, go_lambda$$lambda$, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, go_lambda$_lambda_lambda$_lambda_lambda$$lambda$, go_lambda$_lambda_lambda$_lambda$lambda, go_lambda$_lambda_lambda$$lambda$, go_lambda$_lambda$lambda1, go_lambda$$lambda$1, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind, go_lambda$_lambda_lambda$_lambda_getPast$getPast, go_lambda$_lambda_lambda$_lambda_bind$bind, go_lambda$_lambda_sendPast$sendPast, go_lambda$_lambda_bind$bind, go_fix$fix, go_bind$bind1, lambda_getPast$getPast, lambda$lambda$, lambda$go, lambda_bind$bind, lambda_lambda$_lambda_pure$pure, lambda_lambda$_lambda$lambda, lambda_lambda$$lambda$, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda_lambda$_lambda_lambda$_lambda$lambda, lambda_lambda$_lambda_lambda$$lambda$, lambda_lambda$_lambda$lambda1, lambda_lambda$$lambda$1, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind, lambda_lambda$_lambda_lambda$_lambda_getPast$getPast, lambda_lambda$_lambda_lambda$_lambda_bind$bind, lambda_lambda$_lambda_sendPast$sendPast, lambda_lambda$_lambda_bind$bind, lambda_fix$fix, lambda_bind$bind1, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda_lambda$_lambda_lambda$$lambda$1, lambda_lambda$_lambda$lambda2, lambda_lambda$$lambda$2, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind1, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2, lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture, lambda_lambda$_lambda_lambda$_lambda_bind$bind1, lambda_lambda$_lambda_getPast$getPast, lambda_lambda$_lambda_bind$bind1, lambda_sendPast$sendPast, lambda_bind$bind2, lambda$_getPast$getPast, lambda$$lambda, lambda$$go, lambda$_bind$bind, lambda$_lambda$_lambda_pure$pure, lambda$_lambda$_lambda$lambda, lambda$_lambda$$lambda$, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda$_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda$_lambda_lambda$$lambda$, lambda$_lambda$_lambda$lambda1, lambda$_lambda$$lambda$1, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind, lambda$_lambda$_lambda_lambda$_lambda_getPast$getPast, lambda$_lambda$_lambda_lambda$_lambda_bind$bind, lambda$_lambda$_lambda_sendPast$sendPast, lambda$_lambda$_lambda_bind$bind, lambda$_fix$fix, lambda$_bind$bind1, lambda$_lambda_lambda$_lambda_getPast$getPast, lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda_lambda$$lambda$, lambda$_lambda$lambda, lambda$_lambda_lambda$_lambda_bind$bind, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind, lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture, lambda$_lambda_bind$bind, lambda$_lambda_sendPast$sendPast, lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, lambda_lambda$_lambda_lambda$_lambda$lambda2, lambda_lambda$_lambda_lambda$$lambda$2, lambda_lambda$_lambda$lambda3, lambda_lambda$$lambda$3, lambda_lambda$_lambda_lambda$_lambda_bind$bind2, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2, lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$2, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2, lambda_lambda$_lambda_sendFuture$sendFuture, lambda_lambda$_lambda_bind$bind2, lambda_getPast$getPast1, lambda_bind$bind3, lambda$_lambda_getPast$getPast, lambda$_lambda$lambda1, lambda$_lambda_bind$bind1, lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda_lambda$$lambda$1, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind1, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2, lambda$_lambda_lambda$_lambda_bind$bind1, lambda$_lambda_lambda$_lambda_sendFuture$sendFuture, lambda_lambda$_lambda_getFuture$getFuture, lambda_lambda$_lambda$lambda4, lambda_lambda$$lambda$4, lambda_lambda$_lambda_bind$bind3, lambda_lambda$_lambda_lambda$_lambda_pure$pure, lambda_lambda$_lambda_lambda$_lambda$lambda3, lambda_lambda$_lambda_lambda$$lambda$3, lambda_lambda$_lambda_lambda$_lambda_pure$pure1, lambda_lambda$_lambda_lambda$_lambda_pure$pure2, lambda_sendFuture$sendFuture, lambda_bind$bind4, lambda$_lambda_lambda$_lambda_getFuture$getFuture, lambda$_lambda_lambda$_lambda$lambda2, lambda$_lambda_lambda$$lambda$2, lambda$_lambda$lambda2, lambda$_lambda_lambda$_lambda_bind$bind2, lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure, lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2, lambda$_lambda_lambda$_lambda_lambda$$lambda$2, lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1, lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2, lambda$_lambda_bind$bind2, lambda$_lambda_sendFuture$sendFuture, lambda_getFuture$getFuture, lambda_bind$bind5, lambda_lambda$_lambda_pure$pure1, lambda_lambda$_lambda$lambda5, lambda_lambda$$lambda$5, lambda_lambda$_lambda_pure$pure2, lambda_lambda$_lambda_pure$pure3, lambda$_lambda_getFuture$getFuture, lambda$_lambda$lambda3, lambda$_lambda_bind$bind3, lambda$_lambda_lambda$_lambda_pure$pure, lambda$_lambda_lambda$_lambda$lambda3, lambda$_lambda_lambda$$lambda$3, lambda$_lambda_lambda$_lambda_pure$pure1, lambda$_lambda_lambda$_lambda_pure$pure2, main_score_go_bind$scrut_tup3, main_score_go_bind$scrut_rest, main_score_go_bind$scrut_tup31, main_score_go_bind$scrut_rest1, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest, main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, main_score_go_lambda$_lambda_bind$scrut_tup3, main_score_go_lambda$_lambda_bind$scrut_rest, main_score_go_lambda$_lambda_bind$scrut_tup31, main_score_go_lambda$_lambda_bind$scrut_rest1, main_score_go_fix$scrut_tup3, main_score_go_fix$scrut_rest, main_score_go_bind$scrut_tup32, main_score_go_bind$scrut_rest2, main_score$game_Game, main_score$game_rest, main_score_go$frames_Cons, main_score_go$frames_rest, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_rest, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame, main_score_go$frames_Nil, score_go_bind$scrut_tup3, score_go_bind$scrut_rest, score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, score_go_lambda$_lambda_bind$scrut_tup3, score_go_lambda$_lambda_bind$scrut_rest, score_go_lambda$_lambda_bind$scrut_rest1, score_go_lambda$_lambda_bind$scrut_tup31, score_go_fix$scrut_tup3, score_go_fix$scrut_rest, score_go_bind$scrut_tup31, score_go_bind$scrut_rest1, score_go_bind$scrut_tup32, score_go_bind$scrut_rest2, go_bind$scrut_tup3, go_bind$scrut_rest, go_bind$scrut_tup31, go_bind$scrut_rest1, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, go_lambda$_lambda_lambda$_lambda_bind$scrut_rest, go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, go_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, go_lambda$_lambda_bind$scrut_tup3, go_lambda$_lambda_bind$scrut_rest, go_lambda$_lambda_bind$scrut_tup31, go_lambda$_lambda_bind$scrut_rest1, go_fix$scrut_tup3, go_fix$scrut_rest, go_bind$scrut_tup32, go_bind$scrut_rest2, lambda_bind$scrut_tup3, lambda_bind$scrut_rest, lambda_bind$scrut_tup31, lambda_bind$scrut_rest1, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, lambda_lambda$_lambda_bind$scrut_tup3, lambda_lambda$_lambda_bind$scrut_rest, lambda_lambda$_lambda_bind$scrut_tup31, lambda_lambda$_lambda_bind$scrut_rest1, lambda_fix$scrut_tup3, lambda_fix$scrut_rest, lambda_bind$scrut_tup32, lambda_bind$scrut_rest2, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup32, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest2, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest3, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup32, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest2, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest3, lambda_lambda$_lambda_bind$scrut_tup32, lambda_lambda$_lambda_bind$scrut_rest2, lambda_lambda$_lambda_bind$scrut_tup33, lambda_lambda$_lambda_bind$scrut_rest3, lambda_bind$scrut_tup33, lambda_bind$scrut_rest3, lambda_bind$scrut_tup34, lambda_bind$scrut_rest4, lambda$_bind$scrut_tup3, lambda$_bind$scrut_rest, lambda$_bind$scrut_tup31, lambda$_bind$scrut_rest1, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_rest, lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, lambda$_lambda$_lambda_bind$scrut_tup3, lambda$_lambda$_lambda_bind$scrut_rest, lambda$_lambda$_lambda_bind$scrut_tup31, lambda$_lambda$_lambda_bind$scrut_rest1, lambda$_fix$scrut_tup3, lambda$_fix$scrut_rest, lambda$_bind$scrut_tup32, lambda$_bind$scrut_rest2, lambda$_lambda_lambda$_lambda_bind$scrut_tup3, lambda$_lambda_lambda$_lambda_bind$scrut_rest, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31, lambda$_lambda_lambda$_lambda_bind$scrut_tup31, lambda$_lambda_lambda$_lambda_bind$scrut_rest1, lambda$_lambda_bind$scrut_tup3, lambda$_lambda_bind$scrut_rest, lambda$_lambda_bind$scrut_rest1, lambda$_lambda_bind$scrut_tup31, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup34, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest4, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup35, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest5, lambda_lambda$_lambda_bind$scrut_tup34, lambda_lambda$_lambda_bind$scrut_rest4, lambda_lambda$_lambda_bind$scrut_tup35, lambda_lambda$_lambda_bind$scrut_rest5, lambda_bind$scrut_tup35, lambda_bind$scrut_rest5, lambda_bind$scrut_tup36, lambda_bind$scrut_rest6, lambda$_lambda_bind$scrut_tup32, lambda$_lambda_bind$scrut_rest2, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup32, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest2, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest3, lambda$_lambda_lambda$_lambda_bind$scrut_tup32, lambda$_lambda_lambda$_lambda_bind$scrut_rest2, lambda$_lambda_lambda$_lambda_bind$scrut_rest3, lambda$_lambda_lambda$_lambda_bind$scrut_tup33, lambda$_lambda_bind$scrut_tup33, lambda$_lambda_bind$scrut_rest3, lambda_lambda$_lambda_bind$scrut_tup36, lambda_lambda$_lambda_bind$scrut_rest6, lambda_lambda$_lambda_bind$scrut_tup37, lambda_lambda$_lambda_bind$scrut_rest7, lambda_bind$scrut_tup37, lambda_bind$scrut_rest7, lambda_bind$scrut_tup38, lambda_bind$scrut_rest8, lambda$_lambda_lambda$_lambda_bind$scrut_tup34, lambda$_lambda_lambda$_lambda_bind$scrut_rest4, lambda$_lambda_lambda$_lambda_bind$scrut_tup35, lambda$_lambda_lambda$_lambda_bind$scrut_rest5, lambda$_lambda_bind$scrut_tup34, lambda$_lambda_bind$scrut_rest4, lambda$_lambda_bind$scrut_rest5, lambda$_lambda_bind$scrut_tup35, lambda_bind$scrut_tup39, lambda_bind$scrut_rest9, lambda_bind$scrut_tup310, lambda_bind$scrut_rest10, lambda$_lambda_bind$scrut_tup36, lambda$_lambda_bind$scrut_rest6, lambda$_lambda_bind$scrut_tup37, lambda$_lambda_bind$scrut_rest7, lambda$_lambda_bind$scrut_tup3$worker, lambda$_lambda_bind$scrut_tup3$worker1, lambda_bind$scrut_tup3$worker, lambda_bind$scrut_tup3$worker1, lambda$_lambda_bind$scrut_tup3$worker2, lambda$_lambda_bind$scrut_tup3$worker3, lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, lambda_bind$scrut_tup3$worker2, lambda_bind$scrut_tup3$worker3, lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda_lambda$_lambda_bind$scrut_tup3$worker1, lambda$_lambda_bind$scrut_tup3$worker4, lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2, lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, lambda$_lambda_bind$scrut_tup3$worker5, lambda_bind$scrut_tup3$worker4, lambda_bind$scrut_tup3$worker5, lambda_lambda$_lambda_bind$scrut_tup3$worker2, lambda_lambda$_lambda_bind$scrut_tup3$worker3, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, lambda$_lambda_bind$scrut_tup3$worker6, lambda$_lambda_bind$scrut_tup3$worker7, lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker4, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker5, lambda$_bind$scrut_tup3$worker, lambda$_fix$scrut_tup3$worker, lambda$_lambda$_lambda_bind$scrut_tup3$worker, lambda$_lambda$_lambda_bind$scrut_tup3$worker1, lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, lambda$_bind$scrut_tup3$worker1, lambda$_bind$scrut_tup3$worker2, lambda_bind$scrut_tup3$worker6, lambda_bind$scrut_tup3$worker7, lambda_lambda$_lambda_bind$scrut_tup3$worker4, lambda_lambda$_lambda_bind$scrut_tup3$worker5, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, lambda_bind$scrut_tup3$worker8, lambda_fix$scrut_tup3$worker, lambda_lambda$_lambda_bind$scrut_tup3$worker6, lambda_lambda$_lambda_bind$scrut_tup3$worker7, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker4, lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker5, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, lambda_bind$scrut_tup3$worker9, lambda_bind$scrut_tup3$worker10, go_bind$scrut_tup3$worker, go_fix$scrut_tup3$worker, go_lambda$_lambda_bind$scrut_tup3$worker, go_lambda$_lambda_bind$scrut_tup3$worker1, go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, go_bind$scrut_tup3$worker1, go_bind$scrut_tup3$worker2, score_go_bind$scrut_tup3$worker, score_go_bind$scrut_tup3$worker1, score_go_fix$scrut_tup3$worker, score_go_lambda$_lambda_bind$scrut_tup3$worker, score_go_lambda$_lambda_bind$scrut_tup3$worker1, score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, score_go_bind$scrut_tup3$worker2, main_score_go$frames_Cons$worker, main_score$game_Game$worker, main_score_go_bind$scrut_tup3$worker, main_score_go_fix$scrut_tup3$worker, main_score_go_lambda$_lambda_bind$scrut_tup3$worker, main_score_go_lambda$_lambda_bind$scrut_tup3$worker1, main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1, main_score_go_bind$scrut_tup3$worker1, main_score_go_bind$scrut_tup3$worker2, lambda$_lambda_lambda$_lambda$lambda$worker, lambda$_lambda_bind$bind$worker, lambda_lambda$_lambda$lambda$worker, lambda_bind$bind$worker, lambda$_lambda_bind$bind$worker1, lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker, lambda$_lambda_lambda$_lambda_bind$bind$worker, lambda_bind$bind$worker1, lambda_lambda$_lambda_lambda$_lambda$lambda$worker, lambda_lambda$_lambda_bind$bind$worker, lambda$_lambda_lambda$_lambda_bind$bind$worker1, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker, lambda$_lambda_lambda$_lambda$lambda$worker1, lambda$_lambda_bind$bind$worker2, lambda_bind$bind$worker2, lambda_lambda$_lambda_bind$bind$worker1, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker, lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker, lambda_lambda$_lambda$lambda$worker1, lambda$_lambda_bind$bind$worker3, lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker, lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker, lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker1, lambda$_lambda_lambda$_lambda_bind$bind$worker2, lambda$_bind$bind$worker, lambda$_fix$fix$worker, lambda$_lambda$_lambda_bind$bind$worker, lambda$_lambda$_lambda_lambda$_lambda_bind$bind$worker, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker, lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker, lambda$_lambda$_lambda$lambda$worker, lambda$_bind$bind$worker1, lambda_bind$bind$worker3, lambda_lambda$_lambda_bind$bind$worker2, lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker, lambda_lambda$_lambda_lambda$_lambda$lambda$worker1, lambda_bind$bind$worker4, lambda_fix$fix$worker, lambda_lambda$_lambda_bind$bind$worker3, lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker2, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker, lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker, lambda_lambda$_lambda$lambda$worker2, lambda_bind$bind$worker5, go_bind$bind$worker, go_fix$fix$worker, go_lambda$_lambda_bind$bind$worker, go_lambda$_lambda_lambda$_lambda_bind$bind$worker, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker, go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker, go_lambda$_lambda$lambda$worker, go_bind$bind$worker1, score_go_bind$bind$worker, score_go_lambda$_lambda_bind$bind$worker, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker, score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker, score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker, score_go_lambda$_lambda$lambda$worker, score_go_bind$bind$worker1, score_go_fix$fix$worker, main_score_go_bind$bind$worker, main_score_go_fix$fix$worker, main_score_go_lambda$_lambda_bind$bind$worker, main_score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker, main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker, main_score_go_lambda$_lambda$lambda$worker, main_score_go_bind$bind$worker1;
main_score_go_getPast$getPast = function main_score_go_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return main_score_go_bind$scrut_tup3$worker2(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
main_score_go$go = function main_score_go$go(tardis2, finalFrameScore, frames) {
  return frames(undefined, undefined, undefined, undefined, undefined, tardis2, undefined, undefined, finalFrameScore, undefined)
};
main_score_go$lambda = function main_score_go$lambda(tardis2, finalFrameScore, fs, _) {
  return fs(undefined, undefined, undefined, undefined, undefined, tardis2, undefined, undefined, finalFrameScore, undefined)
};
main_score_go$lambda$ = function main_score_go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return fs(undefined, tardis2, undefined, undefined, finalFrameScore, undefined)
  }
};
main_score$score = function main_score$score(game) {
  return game(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
};
main_score_go_bind$bind = function main_score_go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return main_score_go_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
main_score_go_bind$bind$worker1 = function main_score_go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
main_score_go_lambda$_lambda_pure$pure = function main_score_go_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return main_score_go_bind$scrut_tup3$worker1(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
main_score_go_lambda$_lambda$lambda = function main_score_go_lambda$_lambda$lambda(tardis2, finalFrameScore, scores) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$13(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return main_score_go_lambda$_lambda_pure$pure(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go_lambda$$lambda$ = function main_score_go_lambda$$lambda$(tardis2, finalFrameScore) {
  return (scores) => {
    return main_score_go_lambda$_lambda$lambda(tardis2, finalFrameScore, scores)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, _) {
  return runtime.Unit
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(f, score);
      return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, f1, eta$0$0, eta$0$1)
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, scores) {
  let arg$Cons$0$, tmp, tmp1, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    tmp1 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture(tmp);
    lambda$here = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(f, arg$Cons$0$);
    return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(tmp1)(lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return (scores) => {
    return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, scores)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda$lambda = function main_score_go_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, _) {
  return runtime.Unit
};
main_score_go_lambda$_lambda_lambda$$lambda$ = function main_score_go_lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11);
      return main_score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker(main_score_go_lambda$_lambda_lambda$_lambda_getPast$getPast, f1, eta$0$0, eta$0$1)
    }
  }
};
main_score_go_lambda$_lambda$lambda1 = function main_score_go_lambda$_lambda$lambda(tardis2, f, p) {
  return (eta$0$0, eta$0$1) => {
    return main_score_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
  }
};
main_score_go_lambda$_lambda$lambda$worker = function main_score_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score11, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = throws1$(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score11 = score1$(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score11, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = f(undefined, arg$Cons$0$, nextThrows, undefined, undefined)(eta$0$0, tmp)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go_lambda$$lambda$1 = function main_score_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return main_score_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  return f(undefined, tardis2, score, nextThrows, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        return f(undefined, score, nextThrows, undefined, undefined)(eta$0$0, eta$0$1)(eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
main_score_go_lambda$_lambda_lambda$_lambda_getPast$getPast = function main_score_go_lambda$_lambda_lambda$_lambda_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_bind$bind = function main_score_go_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return main_score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker = function main_score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
main_score_go_lambda$_lambda_sendPast$sendPast = function main_score_go_lambda$_lambda_sendPast$sendPast(bw) {
  return (fw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return main_score_go_lambda$_lambda_bind$scrut_tup3$worker1(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
main_score_go_lambda$_lambda_bind$bind = function main_score_go_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return main_score_go_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
main_score_go_lambda$_lambda_bind$bind$worker = function main_score_go_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut;
  r = new tardis1.Ref.class(tardis1.None);
  scrut = runtime.safeCall(m(fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
main_score_go_fix$fix = function main_score_go_fix$fix(f) {
  return (bw, fw) => {
    return main_score_go_fix$fix$worker(f, bw, fw)
  }
};
main_score_go_fix$fix$worker = function main_score_go_fix$fix$worker(f, bw, fw) {
  let r, scrut, callPrefix, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
main_score_go_bind$bind1 = function main_score_go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return main_score_go_bind$bind$worker(m, f, bw, fw)
    }
  }
};
main_score_go_bind$bind$worker = function main_score_go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
score_go_fix$fix = function score_go_fix$fix(f) {
  return (bw, fw) => {
    return score_go_fix$fix$worker(f, bw, fw)
  }
};
score_go_fix$fix$worker = function score_go_fix$fix$worker(f, bw, fw) {
  let r, scrut, callPrefix, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
score_go$go = function score_go$go(tardis2, finalFrameScore, frames) {
  let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here, lambda$here1, lambda$here2;
  if (frames instanceof tardis2.Nil.class) {
    lambda$here = score_go_lambda$$lambda$1(tardis2, finalFrameScore);
    return score_go_bind$bind1(score_go_getPast$getPast)(lambda$here)
  } else if (frames instanceof tardis2.Cons.class) {
    arg$Cons$0$ = frames.head;
    arg$Cons$1$ = frames.tail;
    lambda$here1 = score_go_lambda$$lambda$(tardis2, arg$Cons$0$);
    tmp = score_go_fix$fix(lambda$here1);
    lambda$here2 = score_go$lambda$(tardis2, finalFrameScore, arg$Cons$1$);
    return score_go_bind$bind(tmp)(lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go$lambda = function score_go$lambda(tardis2, finalFrameScore, fs) {
  return score_go$go(tardis2, finalFrameScore, fs)
};
score_go$lambda$ = function score_go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return score_go$lambda(tardis2, finalFrameScore, fs)
  }
};
score_go_bind$bind = function score_go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return score_go_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
score_go_bind$bind$worker1 = function score_go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
score_go_lambda$_lambda_lambda$_lambda_getPast$getPast = function score_go_lambda$_lambda_lambda$_lambda_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
score_go_lambda$_lambda_lambda$_lambda$lambda = function score_go_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, _) {
  return runtime.Unit
};
score_go_lambda$_lambda_lambda$$lambda$ = function score_go_lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = score_go_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11);
      return score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker(score_go_lambda$_lambda_lambda$_lambda_getPast$getPast, f1, eta$0$0, eta$0$1)
    }
  }
};
score_go_lambda$_lambda$lambda = function score_go_lambda$_lambda$lambda(tardis2, f, p) {
  return (eta$0$0, eta$0$1) => {
    return score_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
  }
};
score_go_lambda$_lambda$lambda$worker = function score_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score11, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = throws1$(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score11 = score1$(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, tardis4, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score11, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    tardis4 = tardis2;
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, arg$Cons$0$, nextThrows, eta$0$0, tmp, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$$lambda$ = function score_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return score_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
score_go_lambda$_lambda_lambda$_lambda_bind$bind = function score_go_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker = function score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, _) {
  return runtime.Unit
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score);
      return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, f1, eta$0$0, eta$0$1)
    }
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, scores) {
  let arg$Cons$0$, tmp, tmp1, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    tmp1 = score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture(tmp);
    lambda$here = score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, arg$Cons$0$);
    return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(tmp1)(lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function score_go_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return (scores) => {
    return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, scores)
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  return (eta$0$0, eta$0$1) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$;
  if (f instanceof tardis2.Strike.class) {
    let tup3_0, fv_tmp;
    tup3_0 = lambda$9(score, nextThrows);
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, eta$1$8, eta$0$1)
  } else if (f instanceof tardis2.Spare.class) {
    let tup3_0, fv_tmp;
    arg$Spare$0$ = f.firstThrow;
    tup3_0 = lambda$8(score, nextThrows, arg$Spare$0$);
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, eta$1$8, eta$0$1)
  } else if (f instanceof tardis2.Frame.class) {
    let tup3_0, fv_tmp;
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    tup3_0 = lambda$7(score, arg$Frame$1$, arg$Frame$0$);
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, eta$1$8, eta$0$1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
score_go_lambda$_lambda_bind$bind = function score_go_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return score_go_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
score_go_lambda$_lambda_bind$bind$worker = function score_go_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut;
  r = new tardis1.Ref.class(tardis1.None);
  scrut = runtime.safeCall(m(fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
score_go_lambda$_lambda_sendPast$sendPast = function score_go_lambda$_lambda_sendPast$sendPast(bw) {
  return (fw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return score_go_lambda$_lambda_bind$scrut_tup3$worker(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
score_go_getPast$getPast = function score_go_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return score_go_bind$scrut_tup3$worker1(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
score_go_bind$bind1 = function score_go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return score_go_bind$bind$worker(m, f, bw, fw)
    }
  }
};
score_go_bind$bind$worker = function score_go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
score_go_lambda$_lambda_pure$pure = function score_go_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return score_go_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
score_go_lambda$_lambda$lambda1 = function score_go_lambda$_lambda$lambda(tardis2, finalFrameScore, scores) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$13(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return score_go_lambda$_lambda_pure$pure(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$$lambda$1 = function score_go_lambda$$lambda$(tardis2, finalFrameScore) {
  return (scores) => {
    return score_go_lambda$_lambda$lambda1(tardis2, finalFrameScore, scores)
  }
};
go_getPast$getPast = function go_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return go_bind$scrut_tup3$worker2(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
go$lambda = function go$lambda(tardis2, finalFrameScore, fs, _) {
  return runtime.Unit
};
go$lambda$ = function go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return go(tardis2, finalFrameScore, fs)
  }
};
go_bind$bind = function go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return go_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
go_bind$bind$worker1 = function go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
go_lambda$_lambda_pure$pure = function go_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return go_bind$scrut_tup3$worker1(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
go_lambda$_lambda$lambda = function go_lambda$_lambda$lambda(tardis2, finalFrameScore, scores) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$13(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return go_lambda$_lambda_pure$pure(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_lambda$$lambda$ = function go_lambda$$lambda$(tardis2, finalFrameScore) {
  return (scores) => {
    return go_lambda$_lambda$lambda(tardis2, finalFrameScore, scores)
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, _) {
  return runtime.Unit
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score);
      return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, f1, eta$0$0, eta$0$1)
    }
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, scores) {
  let arg$Cons$0$, tmp, tmp1, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    tmp1 = go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture(tmp);
    lambda$here = go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, arg$Cons$0$);
    return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(tmp1)(lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function go_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return (scores) => {
    return go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, scores)
  }
};
go_lambda$_lambda_lambda$_lambda$lambda = function go_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, _) {
  return runtime.Unit
};
go_lambda$_lambda_lambda$$lambda$ = function go_lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = go_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11);
      return go_lambda$_lambda_lambda$_lambda_bind$bind$worker(go_lambda$_lambda_lambda$_lambda_getPast$getPast, f1, eta$0$0, eta$0$1)
    }
  }
};
go_lambda$_lambda$lambda1 = function go_lambda$_lambda$lambda(tardis2, f, p) {
  return (eta$0$0, eta$0$1) => {
    return go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
  }
};
go_lambda$_lambda$lambda$worker = function go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score11, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = throws1$(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score11 = score1$(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, tardis4, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score11, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    tardis4 = tardis2;
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, arg$Cons$0$, nextThrows, eta$0$0, tmp, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_lambda$$lambda$1 = function go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  return (eta$0$0, eta$0$1) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$;
  if (f instanceof tardis2.Strike.class) {
    let tup3_0, fv_tmp;
    tup3_0 = lambda$9(score, nextThrows);
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, eta$1$8, eta$0$1)
  } else if (f instanceof tardis2.Spare.class) {
    let tup3_0, fv_tmp;
    arg$Spare$0$ = f.firstThrow;
    tup3_0 = lambda$8(score, nextThrows, arg$Spare$0$);
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, eta$1$8, eta$0$1)
  } else if (f instanceof tardis2.Frame.class) {
    let tup3_0, fv_tmp;
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    tup3_0 = lambda$7(score, arg$Frame$1$, arg$Frame$0$);
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, eta$1$8, eta$0$1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
go_lambda$_lambda_lambda$_lambda_getPast$getPast = function go_lambda$_lambda_lambda$_lambda_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
go_lambda$_lambda_lambda$_lambda_bind$bind = function go_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return go_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
go_lambda$_lambda_lambda$_lambda_bind$bind$worker = function go_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
go_lambda$_lambda_sendPast$sendPast = function go_lambda$_lambda_sendPast$sendPast(bw) {
  return (fw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return go_lambda$_lambda_bind$scrut_tup3$worker1(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
go_lambda$_lambda_bind$bind = function go_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return go_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
go_lambda$_lambda_bind$bind$worker = function go_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut;
  r = new tardis1.Ref.class(tardis1.None);
  scrut = runtime.safeCall(m(fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
go_fix$fix = function go_fix$fix(f) {
  return (bw, fw) => {
    return go_fix$fix$worker(f, bw, fw)
  }
};
go_fix$fix$worker = function go_fix$fix$worker(f, bw, fw) {
  let r, scrut, callPrefix, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
go_bind$bind1 = function go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return go_bind$bind$worker(m, f, bw, fw)
    }
  }
};
go_bind$bind$worker = function go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_getPast$getPast = function lambda_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda_bind$scrut_tup3$worker10(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda$go = function lambda$go(tardis2, finalFrameScore, frames) {
  let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here, lambda$here1, lambda$here2;
  if (frames instanceof tardis2.Nil.class) {
    lambda$here = lambda_lambda$$lambda$(tardis2, finalFrameScore);
    return lambda_bind$bind(lambda_getPast$getPast)(lambda$here)
  } else if (frames instanceof tardis2.Cons.class) {
    arg$Cons$0$ = frames.head;
    arg$Cons$1$ = frames.tail;
    lambda$here1 = lambda_lambda$$lambda$1(tardis2, arg$Cons$0$);
    tmp = lambda_fix$fix(lambda$here1);
    lambda$here2 = lambda$lambda$(tardis2, finalFrameScore, arg$Cons$1$);
    return lambda_bind$bind1(tmp)(lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$lambda$ = function lambda$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return lambda13(tardis2, finalFrameScore, fs)
  }
};
lambda_bind$bind = function lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_bind$bind$worker5(m, f, bw, fw)
    }
  }
};
lambda_bind$bind$worker5 = function lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_lambda$_lambda_pure$pure = function lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_bind$scrut_tup3$worker9(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda$lambda(tardis2, finalFrameScore, scores) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$13(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return lambda_lambda$_lambda_pure$pure(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$$lambda$ = function lambda_lambda$$lambda$(tardis2, finalFrameScore) {
  return (scores) => {
    return lambda_lambda$_lambda$lambda(tardis2, finalFrameScore, scores)
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, _) {
  return runtime.Unit
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score);
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, scores) {
  let arg$Cons$0$, tmp, tmp1, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    tmp1 = lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture(tmp);
    lambda$here = lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, arg$Cons$0$);
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(tmp1)(lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return (scores) => {
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, scores)
  }
};
lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, _) {
  return runtime.Unit
};
lambda_lambda$_lambda_lambda$$lambda$ = function lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11);
      return lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker2(lambda_lambda$_lambda_lambda$_lambda_getPast$getPast, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda_lambda$_lambda$lambda1 = function lambda_lambda$_lambda$lambda(tardis2, f, p) {
  return (eta$0$0, eta$0$1) => {
    return lambda_lambda$_lambda$lambda$worker2(tardis2, f, p, eta$0$0, eta$0$1)
  }
};
lambda_lambda$_lambda$lambda$worker2 = function lambda_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score11, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = throws1$(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score11 = score1$(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, tardis4, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score11, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    tardis4 = tardis2;
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, arg$Cons$0$, nextThrows, eta$0$0, tmp, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$$lambda$1 = function lambda_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return lambda_lambda$_lambda$lambda$worker2(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  return (eta$0$0, eta$0$1) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$;
  if (f instanceof tardis2.Strike.class) {
    let tup3_0, fv_tmp;
    tup3_0 = lambda$9(score, nextThrows);
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, eta$1$8, eta$0$1)
  } else if (f instanceof tardis2.Spare.class) {
    let tup3_0, fv_tmp;
    arg$Spare$0$ = f.firstThrow;
    tup3_0 = lambda$8(score, nextThrows, arg$Spare$0$);
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, eta$1$8, eta$0$1)
  } else if (f instanceof tardis2.Frame.class) {
    let tup3_0, fv_tmp;
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    tup3_0 = lambda$7(score, arg$Frame$1$, arg$Frame$0$);
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, eta$1$8, eta$0$1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_lambda$_lambda_lambda$_lambda_getPast$getPast = function lambda_lambda$_lambda_lambda$_lambda_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker5(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda_lambda$_lambda_lambda$_lambda_bind$bind = function lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker2(m, f, bw, fw)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker2 = function lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_lambda$_lambda_sendPast$sendPast = function lambda_lambda$_lambda_sendPast$sendPast(bw) {
  return (fw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return lambda_lambda$_lambda_bind$scrut_tup3$worker7(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
lambda_lambda$_lambda_bind$bind = function lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_lambda$_lambda_bind$bind$worker3(m, f, bw, fw)
    }
  }
};
lambda_lambda$_lambda_bind$bind$worker3 = function lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut;
  r = new tardis1.Ref.class(tardis1.None);
  scrut = runtime.safeCall(m(fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_fix$fix = function lambda_fix$fix(f) {
  return (bw, fw) => {
    return lambda_fix$fix$worker(f, bw, fw)
  }
};
lambda_fix$fix$worker = function lambda_fix$fix$worker(f, bw, fw) {
  let r, scrut, callPrefix, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_bind$bind1 = function lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_bind$bind$worker4(m, f, bw, fw)
    }
  }
};
lambda_bind$bind$worker4 = function lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, _) {
  return runtime.Unit
};
lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(tardis2, f, score);
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, scores) {
  return (eta$0$0, eta$0$1) => {
    return lambda_lambda$_lambda_lambda$_lambda$lambda$worker1(tardis2, f, score11, scores, eta$0$0, eta$0$1)
  }
};
lambda_lambda$_lambda_lambda$_lambda$lambda$worker1 = function lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score11, scores, eta$0$0, eta$0$1) {
  let arg$Cons$0$, tmp;
  if (scores instanceof tardis2.Cons.class) {
    let r, tup3_1, r1, nextThrows, eta$1$8, inlinedVal;
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    r = new tardis1.Ref.class(tardis1.None);
    tup3_1 = getBw1$(tardis1, r);
    r1 = new tardis1.Ref.class(tardis1.None);
    nextThrows = getBw1$(tardis1, r1);
    eta$1$8 = getBw1$(tardis1, r1);
    inlinedVal = lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, arg$Cons$0$, nextThrows, eta$0$0, tmp, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, eta$1$8);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$$lambda$1 = function lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return (scores) => {
    return (eta$0$0, eta$0$1) => {
      return lambda_lambda$_lambda_lambda$_lambda$lambda$worker1(tardis2, f, score11, scores, eta$0$0, eta$0$1)
    }
  }
};
lambda_lambda$_lambda$lambda2 = function lambda_lambda$_lambda$lambda(tardis2, f, score11, _) {
  return runtime.Unit
};
lambda_lambda$$lambda$2 = function lambda_lambda$$lambda$(tardis2, f, score11) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = lambda_lambda$_lambda_lambda$$lambda$1(tardis2, f, score11);
      return lambda_lambda$_lambda_bind$bind$worker2(lambda_lambda$_lambda_getPast$getPast, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  return (eta$0$0, eta$0$1) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  if (f instanceof tardis2.Strike.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33(eta$1$8)
  } else if (f instanceof tardis2.Spare.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33(eta$1$8)
  } else if (f instanceof tardis2.Frame.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33(eta$1$8)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture = function lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_bind$bind1 = function lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1 = function lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_lambda$_lambda_getPast$getPast = function lambda_lambda$_lambda_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda_lambda$_lambda_bind$scrut_tup3$worker5(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda_lambda$_lambda_bind$bind1 = function lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_lambda$_lambda_bind$bind$worker2(m, f, bw, fw)
    }
  }
};
lambda_lambda$_lambda_bind$bind$worker2 = function lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_sendPast$sendPast = function lambda_sendPast$sendPast(bw) {
  return (fw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return lambda_bind$scrut_tup3$worker7(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
lambda_bind$bind2 = function lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_bind$bind$worker3(m, f, bw, fw)
    }
  }
};
lambda_bind$bind$worker3 = function lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut;
  r = new tardis1.Ref.class(tardis1.None);
  scrut = runtime.safeCall(m(fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_getPast$getPast = function lambda$_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda$_bind$scrut_tup3$worker2(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda$$go = function lambda$$go(tardis2, finalFrameScore, frames) {
  let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here, lambda$here1, lambda$here2;
  if (frames instanceof tardis2.Nil.class) {
    lambda$here = lambda$_lambda$$lambda$(tardis2, finalFrameScore);
    return lambda$_bind$bind(lambda$_getPast$getPast)(lambda$here)
  } else if (frames instanceof tardis2.Cons.class) {
    arg$Cons$0$ = frames.head;
    arg$Cons$1$ = frames.tail;
    lambda$here1 = lambda$_lambda$$lambda$1(tardis2, arg$Cons$0$);
    tmp = lambda$_fix$fix(lambda$here1);
    lambda$here2 = lambda$(tardis2, finalFrameScore, arg$Cons$1$);
    return lambda$_bind$bind1(tmp)(lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$$lambda = function lambda$$lambda(tardis2, finalFrameScore, fs) {
  return lambda$$go(tardis2, finalFrameScore, fs)
};
lambda$_bind$bind = function lambda$_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
lambda$_bind$bind$worker1 = function lambda$_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda$_lambda_pure$pure = function lambda$_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_bind$scrut_tup3$worker1(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda$_lambda$lambda = function lambda$_lambda$_lambda$lambda(tardis2, finalFrameScore, scores) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$13(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return lambda$_lambda$_lambda_pure$pure(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$$lambda$ = function lambda$_lambda$$lambda$(tardis2, finalFrameScore) {
  return (scores) => {
    return lambda$_lambda$_lambda$lambda(tardis2, finalFrameScore, scores)
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, _) {
  return runtime.Unit
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score);
      return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, scores) {
  let arg$Cons$0$, tmp, tmp1, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    tmp1 = lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture(tmp);
    lambda$here = lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, arg$Cons$0$);
    return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(tmp1)(lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return (scores) => {
    return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, scores)
  }
};
lambda$_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, _) {
  return runtime.Unit
};
lambda$_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11);
      return lambda$_lambda$_lambda_lambda$_lambda_bind$bind$worker(lambda$_lambda$_lambda_lambda$_lambda_getPast$getPast, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda$_lambda$_lambda$lambda1 = function lambda$_lambda$_lambda$lambda(tardis2, f, p) {
  return (eta$0$0, eta$0$1) => {
    return lambda$_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
  }
};
lambda$_lambda$_lambda$lambda$worker = function lambda$_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score11, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = throws1$(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score11 = score1$(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, tardis4, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score11, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    tardis4 = tardis2;
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, arg$Cons$0$, nextThrows, eta$0$0, tmp, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$$lambda$1 = function lambda$_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return lambda$_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  return (eta$0$0, eta$0$1) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  let arg$Frame$0$, arg$Frame$1$, arg$Spare$0$;
  if (f instanceof tardis2.Strike.class) {
    let tup3_0, fv_tmp;
    tup3_0 = lambda$9(score, nextThrows);
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, eta$1$8, eta$0$1)
  } else if (f instanceof tardis2.Spare.class) {
    let tup3_0, fv_tmp;
    arg$Spare$0$ = f.firstThrow;
    tup3_0 = lambda$8(score, nextThrows, arg$Spare$0$);
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, eta$1$8, eta$0$1)
  } else if (f instanceof tardis2.Frame.class) {
    let tup3_0, fv_tmp;
    arg$Frame$0$ = f.firstThrow;
    arg$Frame$1$ = f.secondThrow;
    tup3_0 = lambda$7(score, arg$Frame$1$, arg$Frame$0$);
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, eta$1$8, eta$0$1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda$_lambda_lambda$_lambda_getPast$getPast = function lambda$_lambda$_lambda_lambda$_lambda_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda$_lambda$_lambda_lambda$_lambda_bind$bind = function lambda$_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda$_lambda$_lambda_lambda$_lambda_bind$bind$worker = function lambda$_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda$_lambda_sendPast$sendPast = function lambda$_lambda$_lambda_sendPast$sendPast(bw) {
  return (fw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return lambda$_lambda$_lambda_bind$scrut_tup3$worker1(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
lambda$_lambda$_lambda_bind$bind = function lambda$_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda$_lambda$_lambda_bind$bind$worker = function lambda$_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut;
  r = new tardis1.Ref.class(tardis1.None);
  scrut = runtime.safeCall(m(fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_fix$fix = function lambda$_fix$fix(f) {
  return (bw, fw) => {
    return lambda$_fix$fix$worker(f, bw, fw)
  }
};
lambda$_fix$fix$worker = function lambda$_fix$fix$worker(f, bw, fw) {
  let r, scrut, callPrefix, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_bind$bind1 = function lambda$_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda$_bind$bind$worker = function lambda$_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda_lambda$_lambda_getPast$getPast = function lambda$_lambda_lambda$_lambda_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker5(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, _) {
  return runtime.Unit
};
lambda$_lambda_lambda$$lambda$ = function lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11);
      return lambda$_lambda_lambda$_lambda_bind$bind$worker2(lambda$_lambda_lambda$_lambda_getPast$getPast, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda$_lambda$lambda = function lambda$_lambda$lambda(tardis2, f, p) {
  return runtime.Unit
};
lambda$_lambda_lambda$_lambda_bind$bind = function lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda_lambda$_lambda_bind$bind$worker2(m, f, bw, fw)
    }
  }
};
lambda$_lambda_lambda$_lambda_bind$bind$worker2 = function lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, _) {
  return runtime.Unit
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score);
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, scores) {
  return (eta$0$0, eta$0$1) => {
    return lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker1(tardis2, f, score11, scores, eta$0$0, eta$0$1)
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score11, scores, eta$0$0, eta$0$1) {
  let arg$Cons$0$, tmp;
  if (scores instanceof tardis2.Cons.class) {
    let r, tup3_1, r1, nextThrows, eta$1$8, inlinedVal;
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    r = new tardis1.Ref.class(tardis1.None);
    tup3_1 = getBw1$(tardis1, r);
    r1 = new tardis1.Ref.class(tardis1.None);
    nextThrows = getBw1$(tardis1, r1);
    eta$1$8 = getBw1$(tardis1, r1);
    inlinedVal = lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, arg$Cons$0$, nextThrows, eta$0$0, tmp, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, eta$1$8);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return (scores) => {
    return (eta$0$0, eta$0$1) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker1(tardis2, f, score11, scores, eta$0$0, eta$0$1)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  return (eta$0$0, eta$0$1) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  if (f instanceof tardis2.Strike.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(eta$1$8)
  } else if (f instanceof tardis2.Spare.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(eta$1$8)
  } else if (f instanceof tardis2.Frame.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(eta$1$8)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        return lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture = function lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
lambda$_lambda_bind$bind = function lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda_bind$bind$worker3(m, f, bw, fw)
    }
  }
};
lambda$_lambda_bind$bind$worker3 = function lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut;
  r = new tardis1.Ref.class(tardis1.None);
  scrut = runtime.safeCall(m(fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda_sendPast$sendPast = function lambda$_lambda_sendPast$sendPast(bw) {
  return (fw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return lambda$_lambda_bind$scrut_tup3$worker6(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture = function lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda_lambda$_lambda_lambda$_lambda$lambda2 = function lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, _) {
  return runtime.Unit
};
lambda_lambda$_lambda_lambda$$lambda$2 = function lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$2(tardis2, f, score);
      return lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda_lambda$_lambda$lambda3 = function lambda_lambda$_lambda$lambda(tardis2, f, score11, scores) {
  return (eta$0$0, eta$0$1) => {
    return lambda_lambda$_lambda$lambda$worker1(tardis2, f, score11, scores, eta$0$0, eta$0$1)
  }
};
lambda_lambda$_lambda$lambda$worker1 = function lambda_lambda$_lambda$lambda$worker(tardis2, f, score11, scores, eta$0$0, eta$0$1) {
  let arg$Cons$0$, tmp;
  if (scores instanceof tardis2.Cons.class) {
    let r, tup3_1, r1, nextThrows, eta$1$8, inlinedVal;
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    r = new tardis1.Ref.class(tardis1.None);
    tup3_1 = getBw1$(tardis1, r);
    r1 = new tardis1.Ref.class(tardis1.None);
    nextThrows = getBw1$(tardis1, r1);
    eta$1$8 = getBw1$(tardis1, r1);
    inlinedVal = lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, arg$Cons$0$, nextThrows, eta$0$0, tmp, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, eta$1$8);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$$lambda$3 = function lambda_lambda$$lambda$(tardis2, f, score11) {
  return (scores) => {
    return (eta$0$0, eta$0$1) => {
      return lambda_lambda$_lambda$lambda$worker1(tardis2, f, score11, scores, eta$0$0, eta$0$1)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_bind$bind2 = function lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker = function lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  return (eta$0$0, eta$0$1) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  if (f instanceof tardis2.Strike.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda_lambda$_lambda_bind$scrut_tup35(eta$1$8)
  } else if (f instanceof tardis2.Spare.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda_lambda$_lambda_bind$scrut_tup35(eta$1$8)
  } else if (f instanceof tardis2.Frame.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda_lambda$_lambda_bind$scrut_tup35(eta$1$8)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$2 = function lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda_sendFuture$sendFuture = function lambda_lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return lambda_lambda$_lambda_bind$scrut_tup3$worker3(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
lambda_lambda$_lambda_bind$bind2 = function lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_lambda$_lambda_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
lambda_lambda$_lambda_bind$bind$worker1 = function lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_getPast$getPast1 = function lambda_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda_bind$scrut_tup3$worker5(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda_bind$bind3 = function lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_bind$bind$worker2(m, f, bw, fw)
    }
  }
};
lambda_bind$bind$worker2 = function lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda_getPast$getPast = function lambda$_lambda_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda$_lambda_bind$scrut_tup3$worker5(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda$_lambda$lambda1 = function lambda$_lambda$lambda(tardis2, f, score11, _) {
  return runtime.Unit
};
lambda$_lambda_bind$bind1 = function lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda_bind$bind$worker2(m, f, bw, fw)
    }
  }
};
lambda$_lambda_bind$bind$worker2 = function lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture = function lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, _) {
  return runtime.Unit
};
lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1(tardis2, f, score);
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score11, scores) {
  return (eta$0$0, eta$0$1) => {
    return lambda$_lambda_lambda$_lambda$lambda$worker1(tardis2, f, score11, scores, eta$0$0, eta$0$1)
  }
};
lambda$_lambda_lambda$_lambda$lambda$worker1 = function lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score11, scores, eta$0$0, eta$0$1) {
  let arg$Cons$0$, tmp;
  if (scores instanceof tardis2.Cons.class) {
    let r, tup3_1, r1, nextThrows, eta$1$8, inlinedVal;
    arg$Cons$0$ = scores.head;
    tmp = tardis2.Cons(score11, scores);
    r = new tardis1.Ref.class(tardis1.None);
    tup3_1 = getBw1$(tardis1, r);
    r1 = new tardis1.Ref.class(tardis1.None);
    nextThrows = getBw1$(tardis1, r1);
    eta$1$8 = getBw1$(tardis1, r1);
    inlinedVal = lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, arg$Cons$0$, nextThrows, eta$0$0, tmp, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, eta$1$8);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda_lambda$$lambda$(tardis2, f, score11) {
  return (scores) => {
    return (eta$0$0, eta$0$1) => {
      return lambda$_lambda_lambda$_lambda$lambda$worker1(tardis2, f, score11, scores, eta$0$0, eta$0$1)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  return (eta$0$0, eta$0$1) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  if (f instanceof tardis2.Strike.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda$_lambda_lambda$_lambda_bind$scrut_tup32(eta$1$8)
  } else if (f instanceof tardis2.Spare.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda$_lambda_lambda$_lambda_bind$scrut_tup32(eta$1$8)
  } else if (f instanceof tardis2.Frame.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda$_lambda_lambda$_lambda_bind$scrut_tup32(eta$1$8)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        return lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda_lambda$_lambda_bind$bind1 = function lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda_lambda$_lambda_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
lambda$_lambda_lambda$_lambda_bind$bind$worker1 = function lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda_lambda$_lambda_sendFuture$sendFuture = function lambda$_lambda_lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
lambda_lambda$_lambda_getFuture$getFuture = function lambda_lambda$_lambda_getFuture$getFuture(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda_lambda$_lambda$lambda4 = function lambda_lambda$_lambda$lambda(tardis2, f, score, _) {
  return runtime.Unit
};
lambda_lambda$$lambda$4 = function lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = lambda_lambda$_lambda_lambda$$lambda$3(tardis2, f, score);
      return lambda_lambda$_lambda_bind$bind$worker(lambda_lambda$_lambda_getFuture$getFuture, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda_lambda$_lambda_bind$bind3 = function lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda_lambda$_lambda_bind$bind$worker = function lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_lambda$_lambda_lambda$_lambda_pure$pure = function lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda$lambda3 = function lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  return (eta$0$0, eta$0$1) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda$lambda$worker = function lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  if (f instanceof tardis2.Strike.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda_bind$scrut_tup38(eta$1$8)
  } else if (f instanceof tardis2.Spare.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda_bind$scrut_tup38(eta$1$8)
  } else if (f instanceof tardis2.Frame.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda_bind$scrut_tup38(eta$1$8)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$$lambda$3 = function lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        return lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_pure$pure1 = function lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda_lambda$_lambda_pure$pure2 = function lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_sendFuture$sendFuture = function lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return lambda_bind$scrut_tup3$worker3(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
lambda_bind$bind4 = function lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
lambda_bind$bind$worker1 = function lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda_lambda$_lambda_getFuture$getFuture = function lambda$_lambda_lambda$_lambda_getFuture$getFuture(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(bw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda$_lambda_lambda$_lambda$lambda2 = function lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, _) {
  return runtime.Unit
};
lambda$_lambda_lambda$$lambda$2 = function lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return () => {
    return (eta$0$0, eta$0$1) => {
      let f1;
      f1 = lambda$_lambda_lambda$_lambda_lambda$$lambda$2(tardis2, f, score);
      return lambda$_lambda_lambda$_lambda_bind$bind$worker(lambda$_lambda_lambda$_lambda_getFuture$getFuture, f1, eta$0$0, eta$0$1)
    }
  }
};
lambda$_lambda$lambda2 = function lambda$_lambda$lambda(tardis2, f, score11, scores) {
  if (scores instanceof tardis2.Cons.class) {
    tardis2.Cons(score11, scores);
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda_bind$bind2 = function lambda$_lambda_lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda$_lambda_lambda$_lambda_bind$bind$worker = function lambda$_lambda_lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure = function lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2 = function lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  return (eta$0$0, eta$0$1) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker = function lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  if (f instanceof tardis2.Strike.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda$_lambda_bind$scrut_tup34(eta$1$8)
  } else if (f instanceof tardis2.Spare.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda$_lambda_bind$scrut_tup34(eta$1$8)
  } else if (f instanceof tardis2.Frame.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return lambda$_lambda_bind$scrut_tup34(eta$1$8)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda_lambda$$lambda$2 = function lambda$_lambda_lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        return lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda_bind$bind2 = function lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda_bind$bind$worker1(m, f, bw, fw)
    }
  }
};
lambda$_lambda_bind$bind$worker1 = function lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda_sendFuture$sendFuture = function lambda$_lambda_sendFuture$sendFuture(fw) {
  return (bw) => {
    return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
      return lambda$_lambda_bind$scrut_tup3$worker2(bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
    }
  }
};
lambda_getFuture$getFuture = function lambda_getFuture$getFuture(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda_bind$scrut_tup3$worker1(bw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda_bind$bind5 = function lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda_bind$bind$worker = function lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda_lambda$_lambda_pure$pure1 = function lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda$lambda5 = function lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  return (eta$0$0, eta$0$1) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
lambda_lambda$_lambda$lambda$worker = function lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  if (f instanceof tardis2.Strike.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return runtime.Unit
  } else if (f instanceof tardis2.Spare.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return runtime.Unit
  } else if (f instanceof tardis2.Frame.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$$lambda$5 = function lambda_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        return lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
lambda_lambda$_lambda_pure$pure2 = function lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda_lambda$_lambda_pure$pure3 = function lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda_getFuture$getFuture = function lambda$_lambda_getFuture$getFuture(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return lambda$_lambda_bind$scrut_tup3$worker1(bw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
lambda$_lambda$lambda3 = function lambda$_lambda$lambda(tardis2, f, score, _) {
  return runtime.Unit
};
lambda$_lambda_bind$bind3 = function lambda$_lambda_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return lambda$_lambda_bind$bind$worker(m, f, bw, fw)
    }
  }
};
lambda$_lambda_bind$bind$worker = function lambda$_lambda_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
lambda$_lambda_lambda$_lambda_pure$pure = function lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda_lambda$_lambda$lambda3 = function lambda$_lambda_lambda$_lambda$lambda(tardis2, f, score, nextThrows) {
  return (eta$0$0, eta$0$1) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
lambda$_lambda_lambda$_lambda$lambda$worker = function lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  if (f instanceof tardis2.Strike.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return runtime.Unit
  } else if (f instanceof tardis2.Spare.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return runtime.Unit
  } else if (f instanceof tardis2.Frame.class) {
    let fv_tmp;
    fv_tmp = eta$1$6;
    fv_tmp = tardis1.Some(eta$0$0);
    eta$1$7.value = fv_tmp;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$$lambda$3 = function lambda$_lambda_lambda$$lambda$(tardis2, f, score) {
  return (nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        return lambda$_lambda_lambda$_lambda$lambda$worker(tardis2, f, score, nextThrows, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
lambda$_lambda_lambda$_lambda_pure$pure1 = function lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
lambda$_lambda_lambda$_lambda_pure$pure2 = function lambda$_lambda_lambda$_lambda_pure$pure() {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return lambda$_lambda_bind$scrut_tup3$worker(bw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
main_score_go_bind$scrut_tup3 = function main_score_go_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return main_score_go_bind$scrut_tup3$worker2(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
main_score_go_bind$scrut_tup3$worker2 = function main_score_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
main_score_go_bind$scrut_tup31 = function main_score_go_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return main_score_go_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
main_score_go_bind$scrut_tup3$worker1 = function main_score_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return globalThis.Object.freeze([
    tup3_0,
    fv_bw2,
    tup3_2
  ])
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, fv_bw2, tup3_2)
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, fv_bw2, tup3_2)
};
main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_score_go_lambda$_lambda_bind$scrut_tup31(tup3_0, fv_bw2, tup3_2)
};
main_score_go_lambda$_lambda_bind$scrut_tup3 = function main_score_go_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return main_score_go_lambda$_lambda_bind$scrut_tup3$worker1(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
main_score_go_lambda$_lambda_bind$scrut_tup3$worker1 = function main_score_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
main_score_go_lambda$_lambda_bind$scrut_tup31 = function main_score_go_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return main_score_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
main_score_go_lambda$_lambda_bind$scrut_tup3$worker = function main_score_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_score_go_fix$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
main_score_go_fix$scrut_tup3 = function main_score_go_fix$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) => {
    return main_score_go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r)
  }
};
main_score_go_fix$scrut_tup3$worker = function main_score_go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) {
  fv_tmp = tardis1.Some(tup3_0);
  fv_r.value = fv_tmp;
  return main_score_go_bind$scrut_tup32(tup3_0, tup3_1, tup3_2)
};
main_score_go_bind$scrut_tup32 = function main_score_go_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return main_score_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
main_score_go_bind$scrut_tup3$worker = function main_score_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  if (runtime.Tuple.isArrayLike(fv_scrut) && fv_scrut.length === 3) {
    fv_element0$1 = runtime.Tuple.get(fv_scrut, 0);
    fv_element1$1 = runtime.Tuple.get(fv_scrut, 1);
    fv_element2$1 = runtime.Tuple.get(fv_scrut, 2);
    fv_tmp = tardis1.Some(fv_element1$1);
    fv_r.value = fv_tmp;
    return globalThis.Object.freeze([
      fv_element0$1,
      tup3_1,
      fv_element2$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score$game_Game = function main_score$game_Game(Game_frames, Game_lastFrame) {
  return (fv_finalFrameScore, fv_initialFw, fv_element0$) => {
    return main_score$game_Game$worker(Game_frames, Game_lastFrame, fv_finalFrameScore, fv_initialFw, fv_element0$)
  }
};
main_score$game_Game$worker = function main_score$game_Game$worker(Game_frames, Game_lastFrame, fv_finalFrameScore, fv_initialFw, fv_element0$) {
  let inlinedVal, bw, inlinedVal1, inlinedVal2, arg$LStrike$0$, arg$LStrike$1$, tmp;
  if (Game_lastFrame instanceof tardis1.LStrike.class) {
    arg$LStrike$0$ = Game_lastFrame.bonus1;
    arg$LStrike$1$ = Game_lastFrame.bonus2;
    tmp = 10 + arg$LStrike$0$;
    inlinedVal2 = tmp + arg$LStrike$1$;
    fv_finalFrameScore = inlinedVal2;
    fv_initialFw = tardis1.Cons(lambda14, tardis1.Nil);
    inlinedVal = Game_frames(undefined, tardis1, undefined, undefined, inlinedVal2, undefined);
    bw = tardis1[initialBw$accessorSymbol](Game_lastFrame);
    inlinedVal1 = runtime.safeCall(inlinedVal(bw, fv_initialFw));
    if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
      fv_element0$ = runtime.Tuple.get(inlinedVal1, 0);
      runtime.Tuple.get(inlinedVal1, 1);
      runtime.Tuple.get(inlinedVal1, 2);
      return tardis1[map$tailrec$accessorSymbol](lambda15, fv_element0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score_go$frames_Cons = function main_score_go$frames_Cons(Cons_head, Cons_tail) {
  return (fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore, fv_lambda$here2) => {
    return main_score_go$frames_Cons$worker(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore, fv_lambda$here2)
  }
};
main_score_go$frames_Cons$worker = function main_score_go$frames_Cons$worker(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore, fv_lambda$here2) {
  fv_lambda$here = main_score_go_lambda$$lambda$1(fv_tardis, Cons_head);
  fv_tmp = main_score_go_fix$fix(fv_lambda$here);
  fv_lambda$here1 = main_score_go$lambda$(fv_tardis, fv_finalFrameScore, Cons_tail);
  return main_score_go_bind$bind1(fv_tmp)(fv_lambda$here1)
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike() {
  return (fv_lambda$here, fv_score, fv_nextThrows, fv_lambda$here1, fv_lambda$here2) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here = lambda$9(fv_score, fv_nextThrows);
        tup3_0 = lambda$9(fv_score, fv_nextThrows);
        return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare(Spare_firstThrow) {
  return (fv_lambda$here, fv_score, fv_nextThrows, fv_lambda$here1, fv_lambda$here2) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here1 = lambda$8(fv_score, fv_nextThrows, Spare_firstThrow);
        tup3_0 = lambda$8(fv_score, fv_nextThrows, Spare_firstThrow);
        return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame(Frame_firstThrow, Frame_secondThrow) {
  return (fv_lambda$here, fv_score, fv_nextThrows, fv_lambda$here1, fv_lambda$here2) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here2 = lambda$7(fv_score, Frame_secondThrow, Frame_firstThrow);
        tup3_0 = lambda$7(fv_score, Frame_secondThrow, Frame_firstThrow);
        return main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_score_go$frames_Nil = function main_score_go$frames_Nil() {
  return (fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore, fv_lambda$here2) => {
    fv_lambda$here2 = main_score_go_lambda$$lambda$(fv_tardis, fv_finalFrameScore);
    return main_score_go_bind$bind(main_score_go_getPast$getPast)(fv_lambda$here2)
  }
};
score_go_bind$scrut_tup3 = function score_go_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return score_go_bind$scrut_tup3$worker2(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
score_go_bind$scrut_tup3$worker2 = function score_go_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(undefined));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  if (runtime.Tuple.isArrayLike(fv_scrut) && fv_scrut.length === 3) {
    fv_element0$1 = runtime.Tuple.get(fv_scrut, 0);
    fv_element1$1 = runtime.Tuple.get(fv_scrut, 1);
    fv_element2$1 = runtime.Tuple.get(fv_scrut, 2);
    fv_tmp = tardis1.Some(fv_element1$1);
    fv_r.value = fv_tmp;
    return globalThis.Object.freeze([
      fv_element0$1,
      tup3_1,
      fv_element2$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, fv_bw2, tup3_2)
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return score_go_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
score_go_lambda$_lambda_bind$scrut_tup3 = function score_go_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return score_go_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
score_go_lambda$_lambda_bind$scrut_tup3$worker1 = function score_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return score_go_fix$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
score_go_lambda$_lambda_bind$scrut_tup31 = function score_go_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return score_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
score_go_lambda$_lambda_bind$scrut_tup3$worker = function score_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
score_go_fix$scrut_tup3 = function score_go_fix$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) => {
    return score_go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r)
  }
};
score_go_fix$scrut_tup3$worker = function score_go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) {
  fv_tmp = tardis1.Some(tup3_0);
  fv_r.value = fv_tmp;
  return score_go_bind$scrut_tup3(tup3_1, tup3_2)
};
score_go_bind$scrut_tup31 = function score_go_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return score_go_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
score_go_bind$scrut_tup3$worker1 = function score_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
score_go_bind$scrut_tup32 = function score_go_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return score_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
score_go_bind$scrut_tup3$worker = function score_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return globalThis.Object.freeze([
    tup3_0,
    fv_bw2,
    tup3_2
  ])
};
go_bind$scrut_tup3 = function go_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return go_bind$scrut_tup3$worker2(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
go_bind$scrut_tup3$worker2 = function go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
go_bind$scrut_tup31 = function go_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return go_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
go_bind$scrut_tup3$worker1 = function go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return globalThis.Object.freeze([
    tup3_0,
    fv_bw2,
    tup3_2
  ])
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, fv_bw2, tup3_2)
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, fv_bw2, tup3_2)
};
go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return go_lambda$_lambda_bind$scrut_tup31(tup3_0, fv_bw2, tup3_2)
};
go_lambda$_lambda_bind$scrut_tup3 = function go_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return go_lambda$_lambda_bind$scrut_tup3$worker1(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
go_lambda$_lambda_bind$scrut_tup3$worker1 = function go_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
go_lambda$_lambda_bind$scrut_tup31 = function go_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
go_lambda$_lambda_bind$scrut_tup3$worker = function go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return go_fix$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
go_fix$scrut_tup3 = function go_fix$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) => {
    return go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r)
  }
};
go_fix$scrut_tup3$worker = function go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) {
  fv_tmp = tardis1.Some(tup3_0);
  fv_r.value = fv_tmp;
  return go_bind$scrut_tup32(tup3_1, tup3_2)
};
go_bind$scrut_tup32 = function go_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return go_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
go_bind$scrut_tup3$worker = function go_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(undefined));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  if (runtime.Tuple.isArrayLike(fv_scrut) && fv_scrut.length === 3) {
    fv_element0$1 = runtime.Tuple.get(fv_scrut, 0);
    fv_element1$1 = runtime.Tuple.get(fv_scrut, 1);
    fv_element2$1 = runtime.Tuple.get(fv_scrut, 2);
    fv_tmp = tardis1.Some(fv_element1$1);
    fv_r.value = fv_tmp;
    return globalThis.Object.freeze([
      fv_element0$1,
      tup3_1,
      fv_element2$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_bind$scrut_tup3 = function lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_bind$scrut_tup3$worker10(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_bind$scrut_tup3$worker10 = function lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_bind$scrut_tup31 = function lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_bind$scrut_tup3$worker9(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_bind$scrut_tup3$worker9 = function lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return globalThis.Object.freeze([
    tup3_0,
    fv_bw2,
    tup3_2
  ])
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, fv_bw2, tup3_2)
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, fv_bw2, tup3_2)
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker5(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker5 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker4(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker4 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, fv_bw2, tup3_2)
};
lambda_lambda$_lambda_bind$scrut_tup3 = function lambda_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_lambda$_lambda_bind$scrut_tup3$worker7(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_lambda$_lambda_bind$scrut_tup3$worker7 = function lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_lambda$_lambda_bind$scrut_tup31 = function lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_lambda$_lambda_bind$scrut_tup3$worker6(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_lambda$_lambda_bind$scrut_tup3$worker6 = function lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda_fix$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
lambda_fix$scrut_tup3 = function lambda_fix$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) => {
    return lambda_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r)
  }
};
lambda_fix$scrut_tup3$worker = function lambda_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) {
  fv_tmp = tardis1.Some(tup3_0);
  fv_r.value = fv_tmp;
  return lambda_bind$scrut_tup32(tup3_1, tup3_2)
};
lambda_bind$scrut_tup32 = function lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_bind$scrut_tup3$worker8(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_bind$scrut_tup3$worker8 = function lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(undefined));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  if (runtime.Tuple.isArrayLike(fv_scrut) && fv_scrut.length === 3) {
    fv_element0$1 = runtime.Tuple.get(fv_scrut, 0);
    fv_element1$1 = runtime.Tuple.get(fv_scrut, 1);
    fv_element2$1 = runtime.Tuple.get(fv_scrut, 2);
    fv_tmp = tardis1.Some(fv_element1$1);
    fv_r.value = fv_tmp;
    return globalThis.Object.freeze([
      fv_element0$1,
      tup3_1,
      fv_element2$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup32 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33(fv_bw2)
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup32 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda_lambda$_lambda_bind$scrut_tup33(fv_bw2)
};
lambda_lambda$_lambda_bind$scrut_tup32 = function lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_lambda$_lambda_bind$scrut_tup3$worker5(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_lambda$_lambda_bind$scrut_tup3$worker5 = function lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_lambda$_lambda_bind$scrut_tup33 = function lambda_lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_lambda$_lambda_bind$scrut_tup3$worker4(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_lambda$_lambda_bind$scrut_tup3$worker4 = function lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda_bind$scrut_tup34(fv_bw2)
};
lambda_bind$scrut_tup33 = function lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_bind$scrut_tup3$worker7(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_bind$scrut_tup3$worker7 = function lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_bind$scrut_tup34 = function lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_bind$scrut_tup3$worker6(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_bind$scrut_tup3$worker6 = function lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return runtime.Unit
};
lambda$_bind$scrut_tup3 = function lambda$_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_bind$scrut_tup3$worker2(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_bind$scrut_tup3$worker2 = function lambda$_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_bind$scrut_tup31 = function lambda$_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_bind$scrut_tup3$worker1 = function lambda$_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return globalThis.Object.freeze([
    tup3_0,
    fv_bw2,
    tup3_2
  ])
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, fv_bw2, tup3_2)
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup31(tup3_0, fv_bw2, tup3_2)
};
lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda$_lambda$_lambda_bind$scrut_tup31(tup3_0, fv_bw2, tup3_2)
};
lambda$_lambda$_lambda_bind$scrut_tup3 = function lambda$_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda$_lambda_bind$scrut_tup3$worker1(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda$_lambda_bind$scrut_tup3$worker1 = function lambda$_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_lambda$_lambda_bind$scrut_tup31 = function lambda$_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda$_lambda_bind$scrut_tup3$worker = function lambda$_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda$_fix$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
lambda$_fix$scrut_tup3 = function lambda$_fix$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) => {
    return lambda$_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r)
  }
};
lambda$_fix$scrut_tup3$worker = function lambda$_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) {
  fv_tmp = tardis1.Some(tup3_0);
  fv_r.value = fv_tmp;
  return lambda$_bind$scrut_tup32(tup3_1, tup3_2)
};
lambda$_bind$scrut_tup32 = function lambda$_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_bind$scrut_tup3$worker = function lambda$_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(undefined));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  if (runtime.Tuple.isArrayLike(fv_scrut) && fv_scrut.length === 3) {
    fv_element0$1 = runtime.Tuple.get(fv_scrut, 0);
    fv_element1$1 = runtime.Tuple.get(fv_scrut, 1);
    fv_element2$1 = runtime.Tuple.get(fv_scrut, 2);
    fv_tmp = tardis1.Some(fv_element1$1);
    fv_r.value = fv_tmp;
    return globalThis.Object.freeze([
      fv_element0$1,
      tup3_1,
      fv_element2$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker5(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker5 = function lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(fv_bw2)
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda$_lambda_lambda$_lambda_bind$scrut_tup31(fv_bw2)
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_lambda_lambda$_lambda_bind$scrut_tup31 = function lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker4(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker4 = function lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda$_lambda_bind$scrut_tup3(fv_bw2)
};
lambda$_lambda_bind$scrut_tup3 = function lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda_bind$scrut_tup3$worker7(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda_bind$scrut_tup3$worker7 = function lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return runtime.Unit
};
lambda$_lambda_bind$scrut_tup31 = function lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda_bind$scrut_tup3$worker6(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda_bind$scrut_tup3$worker6 = function lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup34 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup35 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda_lambda$_lambda_bind$scrut_tup35(fv_bw2)
};
lambda_lambda$_lambda_bind$scrut_tup34 = function lambda_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_lambda$_lambda_bind$scrut_tup3$worker3(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_lambda$_lambda_bind$scrut_tup3$worker3 = function lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_lambda$_lambda_bind$scrut_tup35 = function lambda_lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_lambda$_lambda_bind$scrut_tup3$worker2(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_lambda$_lambda_bind$scrut_tup3$worker2 = function lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda_bind$scrut_tup36(fv_bw2)
};
lambda_bind$scrut_tup35 = function lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_bind$scrut_tup3$worker5(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_bind$scrut_tup3$worker5 = function lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_bind$scrut_tup36 = function lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_bind$scrut_tup3$worker4(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_bind$scrut_tup3$worker4 = function lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return runtime.Unit
};
lambda$_lambda_bind$scrut_tup32 = function lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda_bind$scrut_tup3$worker5(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda_bind$scrut_tup3$worker5 = function lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup32 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda$_lambda_lambda$_lambda_bind$scrut_tup32(fv_bw2)
};
lambda$_lambda_lambda$_lambda_bind$scrut_tup32 = function lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3 = function lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda$_lambda_bind$scrut_tup33(fv_bw2)
};
lambda$_lambda_lambda$_lambda_bind$scrut_tup33 = function lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2 = function lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_lambda_bind$scrut_tup33 = function lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda_bind$scrut_tup3$worker4(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda_bind$scrut_tup3$worker4 = function lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return runtime.Unit
};
lambda_lambda$_lambda_bind$scrut_tup36 = function lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_lambda$_lambda_bind$scrut_tup37 = function lambda_lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda_bind$scrut_tup38(fv_bw2)
};
lambda_bind$scrut_tup37 = function lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_bind$scrut_tup3$worker3(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_bind$scrut_tup3$worker3 = function lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_bind$scrut_tup38 = function lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_bind$scrut_tup3$worker2(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_bind$scrut_tup3$worker2 = function lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return runtime.Unit
};
lambda$_lambda_lambda$_lambda_bind$scrut_tup34 = function lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 = function lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_lambda_lambda$_lambda_bind$scrut_tup35 = function lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return lambda$_lambda_bind$scrut_tup34(fv_bw2)
};
lambda$_lambda_bind$scrut_tup34 = function lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda_bind$scrut_tup3$worker3(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda_bind$scrut_tup3$worker3 = function lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return runtime.Unit
};
lambda$_lambda_bind$scrut_tup35 = function lambda$_lambda_bind$scrut_tup3(tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda_bind$scrut_tup3$worker2(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda_bind$scrut_tup3$worker2 = function lambda$_lambda_bind$scrut_tup3$worker(tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f());
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_bind$scrut_tup39 = function lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda_bind$scrut_tup3$worker1 = function lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda_bind$scrut_tup310 = function lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda_bind$scrut_tup3$worker = function lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return runtime.Unit
};
lambda$_lambda_bind$scrut_tup36 = function lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return lambda$_lambda_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
lambda$_lambda_bind$scrut_tup3$worker1 = function lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
lambda$_lambda_bind$scrut_tup37 = function lambda$_lambda_bind$scrut_tup3(tup3_1) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
lambda$_lambda_bind$scrut_tup3$worker = function lambda$_lambda_bind$scrut_tup3$worker(tup3_1, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return runtime.Unit
};
main_score_go_bind$scrut_rest = function main_score_go_bind$scrut_rest() {
  return null
};
main_score_go_bind$scrut_rest1 = function main_score_go_bind$scrut_rest() {
  return null
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
main_score_go_lambda$_lambda_bind$scrut_rest = function main_score_go_lambda$_lambda_bind$scrut_rest() {
  return null
};
main_score_go_lambda$_lambda_bind$scrut_rest1 = function main_score_go_lambda$_lambda_bind$scrut_rest() {
  return null
};
main_score_go_fix$scrut_rest = function main_score_go_fix$scrut_rest() {
  return null
};
main_score_go_bind$scrut_rest2 = function main_score_go_bind$scrut_rest() {
  return null
};
main_score$game_rest = function main_score$game_rest() {
  return null
};
main_score_go$frames_rest = function main_score_go$frames_rest() {
  return null
};
main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_rest = function main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_rest() {
  return null
};
score_go_bind$scrut_rest = function score_go_bind$scrut_rest() {
  return null
};
score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
score_go_lambda$_lambda_bind$scrut_rest = function score_go_lambda$_lambda_bind$scrut_rest() {
  return null
};
score_go_lambda$_lambda_bind$scrut_rest1 = function score_go_lambda$_lambda_bind$scrut_rest() {
  return null
};
score_go_fix$scrut_rest = function score_go_fix$scrut_rest() {
  return null
};
score_go_bind$scrut_rest1 = function score_go_bind$scrut_rest() {
  return null
};
score_go_bind$scrut_rest2 = function score_go_bind$scrut_rest() {
  return null
};
go_bind$scrut_rest = function go_bind$scrut_rest() {
  return null
};
go_bind$scrut_rest1 = function go_bind$scrut_rest() {
  return null
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
go_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function go_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
go_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function go_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
go_lambda$_lambda_bind$scrut_rest = function go_lambda$_lambda_bind$scrut_rest() {
  return null
};
go_lambda$_lambda_bind$scrut_rest1 = function go_lambda$_lambda_bind$scrut_rest() {
  return null
};
go_fix$scrut_rest = function go_fix$scrut_rest() {
  return null
};
go_bind$scrut_rest2 = function go_bind$scrut_rest() {
  return null
};
lambda_bind$scrut_rest = function lambda_bind$scrut_rest() {
  return null
};
lambda_bind$scrut_rest1 = function lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_bind$scrut_rest = function lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_bind$scrut_rest1 = function lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_fix$scrut_rest = function lambda_fix$scrut_rest() {
  return null
};
lambda_bind$scrut_rest2 = function lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest2 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest3 = function lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest2 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest3 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_bind$scrut_rest2 = function lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_bind$scrut_rest3 = function lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_bind$scrut_rest3 = function lambda_bind$scrut_rest() {
  return null
};
lambda_bind$scrut_rest4 = function lambda_bind$scrut_rest() {
  return null
};
lambda$_bind$scrut_rest = function lambda$_bind$scrut_rest() {
  return null
};
lambda$_bind$scrut_rest1 = function lambda$_bind$scrut_rest() {
  return null
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda$_lambda_bind$scrut_rest = function lambda$_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda$_lambda_bind$scrut_rest1 = function lambda$_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_fix$scrut_rest = function lambda$_fix$scrut_rest() {
  return null
};
lambda$_bind$scrut_rest2 = function lambda$_bind$scrut_rest() {
  return null
};
lambda$_lambda_lambda$_lambda_bind$scrut_rest = function lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_lambda$_lambda_bind$scrut_rest1 = function lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_bind$scrut_rest = function lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_bind$scrut_rest1 = function lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest4 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest5 = function lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_bind$scrut_rest4 = function lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_bind$scrut_rest5 = function lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_bind$scrut_rest5 = function lambda_bind$scrut_rest() {
  return null
};
lambda_bind$scrut_rest6 = function lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_bind$scrut_rest2 = function lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest2 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest3 = function lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_lambda$_lambda_bind$scrut_rest2 = function lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_lambda$_lambda_bind$scrut_rest3 = function lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_bind$scrut_rest3 = function lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_bind$scrut_rest6 = function lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_lambda$_lambda_bind$scrut_rest7 = function lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_bind$scrut_rest7 = function lambda_bind$scrut_rest() {
  return null
};
lambda_bind$scrut_rest8 = function lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_lambda$_lambda_bind$scrut_rest4 = function lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_lambda$_lambda_bind$scrut_rest5 = function lambda$_lambda_lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_bind$scrut_rest4 = function lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_bind$scrut_rest5 = function lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda_bind$scrut_rest9 = function lambda_bind$scrut_rest() {
  return null
};
lambda_bind$scrut_rest10 = function lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_bind$scrut_rest6 = function lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$_lambda_bind$scrut_rest7 = function lambda$_lambda_bind$scrut_rest() {
  return null
};
lambda$13 = (undefined, function (finalFrameScore, score) {
  return () => {
    let tmp;
    tmp = runtime.safeCall(score());
    return finalFrameScore + tmp
  }
});
lambda = (undefined, function (finalFrameScore, score) {
  runtime.safeCall(score());
  return runtime.Unit
});
lambda$2 = (undefined, function (tardis2, finalFrameScore) {
  return (scores) => {
    return runtime.Unit
  }
});
score1$ = function score1$(p) {
  return () => {
    return score1(p)
  }
};
throws1$ = function throws1$(p) {
  return () => {
    return throws1(p)
  }
};
lambda$12 = (undefined, function (score, nextThrows) {
  return () => {
    return lambda2(score, nextThrows)
  }
});
lambda2 = (undefined, function (score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$9 = (undefined, function (score, nextThrows) {
  return (_) => {
    return lambda3(score, nextThrows)
  }
});
lambda$11 = (undefined, function (score, nextThrows) {
  return () => {
    return lambda4(score, nextThrows)
  }
});
lambda4 = (undefined, function (score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$8 = (undefined, function (score, nextThrows, firstThrow) {
  return (_) => {
    return lambda5(score, nextThrows, firstThrow)
  }
});
lambda$10 = (undefined, function (score, secondThrow, firstThrow) {
  return () => {
    return lambda6(score, secondThrow, firstThrow)
  }
});
lambda6 = (undefined, function (score, secondThrow, firstThrow) {
  let tmp, tmp1;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + firstThrow;
  return tmp1 + secondThrow
});
lambda$7 = (undefined, function (score, secondThrow, firstThrow) {
  return (_) => {
    return lambda7(score, secondThrow, firstThrow)
  }
});
lambda3 = (undefined, function (score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = lambda$12(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda5 = (undefined, function (score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = lambda$11(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
});
lambda7 = (undefined, function (score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$10(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
});
lambda$6 = (undefined, function (tardis2, f, score) {
  return (nextThrows) => {
    return runtime.Unit
  }
});
lambda8 = (undefined, function (tardis2, f, score, nextThrows) {
  if (f instanceof tardis2.Strike.class) {
    return runtime.Unit
  } else if (f instanceof tardis2.Spare.class) {
    return runtime.Unit
  } else if (f instanceof tardis2.Frame.class) {
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$5 = (undefined, function (tardis2, f, score) {
  return (_) => {
    return runtime.Unit
  }
});
lambda9 = (undefined, function (tardis2, f, score, _) {
  return runtime.Unit
});
lambda$4 = (undefined, function (tardis2, f, score11) {
  return (scores) => {
    return runtime.Unit
  }
});
lambda10 = (undefined, function (tardis2, f, score11, scores) {
  if (scores instanceof tardis2.Cons.class) {
    tardis2.Cons(score11, scores);
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (tardis2, f, score11) {
  return (_) => {
    return runtime.Unit
  }
});
score1 = function score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
throws1 = function throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda11 = (undefined, function (tardis2, f, score11, _) {
  return runtime.Unit
});
lambda$1 = (undefined, function (tardis2, f) {
  return (p) => {
    return runtime.Unit
  }
});
lambda$ = (undefined, function (tardis2, finalFrameScore, fs) {
  return (_) => {
    return lambda$$lambda(tardis2, finalFrameScore, fs)
  }
});
lambda1 = (undefined, function (tardis2, finalFrameScore, scores) {
  if (scores instanceof tardis2.Cons.class) {
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda12 = (undefined, function (tardis2, f, p) {
  return runtime.Unit
});
lambda13 = (undefined, function (tardis2, finalFrameScore, fs) {
  return lambda$go(tardis2, finalFrameScore, fs)
});
go = function go(tardis2, finalFrameScore, frames) {
  let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here, lambda$here1, lambda$here2;
  if (frames instanceof tardis2.Nil.class) {
    lambda$here = go_lambda$$lambda$(tardis2, finalFrameScore);
    return go_bind$bind(go_getPast$getPast)(lambda$here)
  } else if (frames instanceof tardis2.Cons.class) {
    arg$Cons$0$ = frames.head;
    arg$Cons$1$ = frames.tail;
    lambda$here1 = go_lambda$$lambda$1(tardis2, arg$Cons$0$);
    tmp = go_fix$fix(lambda$here1);
    lambda$here2 = go$lambda$(tardis2, finalFrameScore, arg$Cons$1$);
    return go_bind$bind1(tmp)(lambda$here2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda14 = (undefined, function () {
  return 0
});
lambda15 = (undefined, function (th) {
  return runtime.safeCall(th())
});
get$ = function get$(tardis2, r) {
  return (a) => {
    return get(tardis2, r, a)
  }
};
get = function get(tardis2, r, a) {
  let scrut;
  scrut = r.value;
  if (scrut instanceof tardis2.Some.class) {
    return runtime.safeCall(scrut.value(a))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
getBw1$ = function getBw1$(tardis2, r) {
  return () => {
    return getBw1(tardis2, r)
  }
};
getBw1 = function getBw1(tardis2, r) {
  let scrut;
  scrut = r.value;
  if (scrut instanceof tardis2.Some.class) {
    return runtime.safeCall(scrut.value())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
(class tardis {
  static {
    tardis1 = this
  }
  static get [map$tailrec$accessorSymbol]() { return tardis.#map$tailrec; }
  static get [initialBw$accessorSymbol]() { return tardis.#initialBw; }
  static {
    tardis.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        tardis.Cons.class = this
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
        tardis.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    tardis.Some = function Some(value) {
      return globalThis.Object.freeze(new Some.class(value));
    };
    (class Some {
      static {
        tardis.Some.class = this
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
        tardis.None = this;
        Object.defineProperty(this, "class", {
          value: None
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"];
    });
    tardis.Ref = function Ref(value) {
      return globalThis.Object.freeze(new Ref.class(value));
    };
    (class Ref {
      static {
        tardis.Ref.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["value"]];
    });
    (class Strike {
      static {
        new this
      }
      constructor() {
        tardis.Strike = this;
        Object.defineProperty(this, "class", {
          value: Strike
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Strike"];
    });
    tardis.Spare = function Spare(firstThrow) {
      return globalThis.Object.freeze(new Spare.class(firstThrow));
    };
    (class Spare {
      static {
        tardis.Spare.class = this
      }
      constructor(firstThrow) {
        this.firstThrow = firstThrow;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Spare", ["firstThrow"]];
    });
    tardis.Frame = function Frame(firstThrow, secondThrow) {
      return globalThis.Object.freeze(new Frame.class(firstThrow, secondThrow));
    };
    (class Frame {
      static {
        tardis.Frame.class = this
      }
      constructor(firstThrow, secondThrow) {
        this.firstThrow = firstThrow;
        this.secondThrow = secondThrow;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Frame", ["firstThrow", "secondThrow"]];
    });
    tardis.LStrike = function LStrike(bonus1, bonus2) {
      return globalThis.Object.freeze(new LStrike.class(bonus1, bonus2));
    };
    (class LStrike {
      static {
        tardis.LStrike.class = this
      }
      constructor(bonus1, bonus2) {
        this.bonus1 = bonus1;
        this.bonus2 = bonus2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LStrike", ["bonus1", "bonus2"]];
    });
    tardis.LSpare = function LSpare(bonus1, throw1) {
      return globalThis.Object.freeze(new LSpare.class(bonus1, throw1));
    };
    (class LSpare {
      static {
        tardis.LSpare.class = this
      }
      constructor(bonus1, throw1) {
        this.bonus1 = bonus1;
        this.throw1 = throw1;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LSpare", ["bonus1", "throw1"]];
    });
    tardis.LFrame = function LFrame(throw1, throw2) {
      return globalThis.Object.freeze(new LFrame.class(throw1, throw2));
    };
    (class LFrame {
      static {
        tardis.LFrame.class = this
      }
      constructor(throw1, throw2) {
        this.throw1 = throw1;
        this.throw2 = throw2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LFrame", ["throw1", "throw2"]];
    });
    tardis.Game = function Game(frames, lastFrame) {
      return globalThis.Object.freeze(new Game.class(frames, lastFrame));
    };
    (class Game {
      static {
        tardis.Game.class = this
      }
      constructor(frames, lastFrame) {
        this.frames = frames;
        this.lastFrame = lastFrame;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Game", ["frames", "lastFrame"]];
    });
  }
  static #map$tailrec(f, l) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (l instanceof tardis.Nil.class) {
      return tardis.Nil
    } else if (l instanceof tardis.Cons.class) {
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = tardis.#map$tailrec(f, arg$Cons$1$);
      return tardis.Cons(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #map(f) {
    return (l) => {
      return tardis.#map$tailrec(f, l)
    }
  }
  static #run(m, bw, fw) {
    return runtime.safeCall(m(bw, fw))
  }
  static #pure() {
    return (bw, fw) => {
      return runtime.Unit
    }
  }
  static #getPast(bw, fw) {
    return runtime.Unit
  }
  static #getFuture(bw, fw) {
    return runtime.Unit
  }
  static #sendPast(bw) {
    return (bw0, fw) => {
      return runtime.Unit
    }
  }
  static #sendFuture(fw) {
    return (bw, fw0) => {
      return runtime.Unit
    }
  }
  static #bind(m) {
    return (f) => {
      return (bw, fw) => {
        let r, scrut, scrut1, element2$, element0$, element1$, callPrefix, tmp;
        r = new tardis.Ref.class(tardis.None);
        scrut = runtime.safeCall(m(undefined, fw));
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
          element0$ = runtime.Tuple.get(scrut, 0);
          runtime.Tuple.get(scrut, 1);
          element2$ = runtime.Tuple.get(scrut, 2);
          callPrefix = runtime.safeCall(f(element0$));
          scrut1 = runtime.safeCall(callPrefix(bw, element2$));
          if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
            runtime.Tuple.get(scrut1, 0);
            element1$ = runtime.Tuple.get(scrut1, 1);
            runtime.Tuple.get(scrut1, 2);
            tmp = tardis.Some(element1$);
            r.value = tmp;
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
  }
  static #fix(f) {
    return (bw, fw) => {
      let r, scrut, element0$, callPrefix, tmp;
      r = new tardis.Ref.class(tardis.None);
      callPrefix = runtime.safeCall(f(undefined));
      scrut = runtime.safeCall(callPrefix(bw, fw));
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
        element0$ = runtime.Tuple.get(scrut, 0);
        runtime.Tuple.get(scrut, 1);
        runtime.Tuple.get(scrut, 2);
        tmp = tardis.Some(element0$);
        r.value = tmp;
        return runtime.Unit
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #fst(p) {
    let element0$;
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      element0$ = runtime.Tuple.get(p, 0);
      runtime.Tuple.get(p, 1);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #snd(p) {
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      return runtime.Tuple.get(p, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #lframeScore(lastFrame) {
    let arg$LStrike$0$, arg$LStrike$1$, tmp;
    if (lastFrame instanceof tardis.LStrike.class) {
      arg$LStrike$0$ = lastFrame.bonus1;
      arg$LStrike$1$ = lastFrame.bonus2;
      tmp = 10 + arg$LStrike$0$;
      return tmp + arg$LStrike$1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #initialBw(lastFrame) {
    return () => {
      let arg$LStrike$0$;
      if (lastFrame instanceof tardis.LStrike.class) {
        arg$LStrike$0$ = lastFrame.bonus1;
        return globalThis.Object.freeze([
          10,
          arg$LStrike$0$
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #score(game) {
    let finalFrameScore, initialFw, scrut, arg$Game$0$, arg$Game$1$, element0$, tmp, tmp1;
    if (game instanceof tardis.Game.class) {
      arg$Game$0$ = game.frames;
      arg$Game$1$ = game.lastFrame;
      finalFrameScore = tardis.#lframeScore(arg$Game$1$);
      initialFw = tardis.Cons(lambda14, tardis.Nil);
      tmp = score_go$go(tardis, finalFrameScore, arg$Game$0$);
      tmp1 = tardis.#initialBw(arg$Game$1$);
      scrut = tardis.#run(tmp, tmp1, initialFw);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
        element0$ = runtime.Tuple.get(scrut, 0);
        runtime.Tuple.get(scrut, 1);
        runtime.Tuple.get(scrut, 2);
        return tardis.#map(lambda15)(element0$)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let tmp, Cons_head, Cons_tail, Cons_head1, Cons_tail1, Cons_head2, Cons_tail2, Cons_head3, Cons_tail3, Cons_head4, Cons_tail4, Cons_head5, Cons_tail5, Cons_head6, Cons_tail6, Cons_head7, Cons_tail7, Cons_head8, Cons_tail8, Game_frames;
    Cons_head = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike();
    Cons_tail = main_score_go$frames_Nil();
    Cons_head1 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike();
    Cons_tail1 = main_score_go$frames_Cons(Cons_head, Cons_tail);
    Cons_head2 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare(7);
    Cons_tail2 = main_score_go$frames_Cons(Cons_head1, Cons_tail1);
    Cons_head3 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame(8, 1);
    Cons_tail3 = main_score_go$frames_Cons(Cons_head2, Cons_tail2);
    Cons_head4 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike();
    Cons_tail4 = main_score_go$frames_Cons(Cons_head3, Cons_tail3);
    Cons_head5 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike();
    Cons_tail5 = main_score_go$frames_Cons(Cons_head4, Cons_tail4);
    Cons_head6 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike();
    Cons_tail6 = main_score_go$frames_Cons(Cons_head5, Cons_tail5);
    Cons_head7 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare(9);
    Cons_tail7 = main_score_go$frames_Cons(Cons_head6, Cons_tail6);
    Cons_head8 = main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike();
    Cons_tail8 = main_score_go$frames_Cons(Cons_head7, Cons_tail7);
    tmp = tardis.LStrike(10, 10);
    Game_frames = main_score_go$frames_Cons(Cons_head8, Cons_tail8);
    return main_score$game_Game$worker(Game_frames, tmp, undefined, undefined, undefined)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "tardis"];
});
export { getBw1 as _$_modulePrivate_$_getBw1 };
export { get as _$_modulePrivate_$_get };
export { go as _$_modulePrivate_$_go };
export { tardis1 as _$_modulePrivate_$_tardis };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda6 as _$_modulePrivate_$_lambda6 };
export { lambda7 as _$_modulePrivate_$_lambda7 };
export { lambda8 as _$_modulePrivate_$_lambda8 };
export { lambda9 as _$_modulePrivate_$_lambda9 };
export { lambda10 as _$_modulePrivate_$_lambda10 };
export { lambda11 as _$_modulePrivate_$_lambda11 };
export { lambda12 as _$_modulePrivate_$_lambda12 };
export { lambda13 as _$_modulePrivate_$_lambda13 };
export { lambda14 as _$_modulePrivate_$_lambda14 };
export { lambda15 as _$_modulePrivate_$_lambda15 };
export { score1 as _$_modulePrivate_$_score1 };
export { throws1 as _$_modulePrivate_$_throws1 };
export { getBw1$ as _$_modulePrivate_$_getBw1$ };
export { get$ as _$_modulePrivate_$_get$ };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { throws1$ as _$_modulePrivate_$_throws1$ };
export { score1$ as _$_modulePrivate_$_score1$ };
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
export { main_score_go_getPast$getPast as _$_modulePrivate_$_main_score_go_getPast$getPast };
export { main_score_go$lambda$ as _$_modulePrivate_$_main_score_go$lambda$ };
export { main_score_go$lambda as _$_modulePrivate_$_main_score_go$lambda };
export { main_score_go$go as _$_modulePrivate_$_main_score_go$go };
export { main_score$score as _$_modulePrivate_$_main_score$score };
export { main_score_go_bind$bind as _$_modulePrivate_$_main_score_go_bind$bind };
export { main_score_go_lambda$_lambda_pure$pure as _$_modulePrivate_$_main_score_go_lambda$_lambda_pure$pure };
export { main_score_go_lambda$_lambda$lambda as _$_modulePrivate_$_main_score_go_lambda$_lambda$lambda };
export { main_score_go_lambda$$lambda$ as _$_modulePrivate_$_main_score_go_lambda$$lambda$ };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { main_score_go_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda$lambda };
export { main_score_go_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$$lambda$ };
export { main_score_go_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_score_go_lambda$_lambda$lambda1 };
export { main_score_go_lambda$$lambda$1 as _$_modulePrivate_$_main_score_go_lambda$$lambda$1 };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind };
export { main_score_go_lambda$_lambda_lambda$_lambda_getPast$getPast as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_getPast$getPast };
export { main_score_go_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_bind$bind };
export { main_score_go_lambda$_lambda_sendPast$sendPast as _$_modulePrivate_$_main_score_go_lambda$_lambda_sendPast$sendPast };
export { main_score_go_lambda$_lambda_bind$bind as _$_modulePrivate_$_main_score_go_lambda$_lambda_bind$bind };
export { main_score_go_fix$fix as _$_modulePrivate_$_main_score_go_fix$fix };
export { main_score_go_bind$bind1 as _$_modulePrivate_$_main_score_go_bind$bind1 };
export { score_go_fix$fix as _$_modulePrivate_$_score_go_fix$fix };
export { score_go$lambda$ as _$_modulePrivate_$_score_go$lambda$ };
export { score_go$lambda as _$_modulePrivate_$_score_go$lambda };
export { score_go$go as _$_modulePrivate_$_score_go$go };
export { score_go_bind$bind as _$_modulePrivate_$_score_go_bind$bind };
export { score_go_lambda$_lambda_lambda$_lambda_getPast$getPast as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_getPast$getPast };
export { score_go_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda$lambda };
export { score_go_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$$lambda$ };
export { score_go_lambda$_lambda$lambda as _$_modulePrivate_$_score_go_lambda$_lambda$lambda };
export { score_go_lambda$$lambda$ as _$_modulePrivate_$_score_go_lambda$$lambda$ };
export { score_go_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_bind$bind };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture };
export { score_go_lambda$_lambda_bind$bind as _$_modulePrivate_$_score_go_lambda$_lambda_bind$bind };
export { score_go_lambda$_lambda_sendPast$sendPast as _$_modulePrivate_$_score_go_lambda$_lambda_sendPast$sendPast };
export { score_go_getPast$getPast as _$_modulePrivate_$_score_go_getPast$getPast };
export { score_go_bind$bind1 as _$_modulePrivate_$_score_go_bind$bind1 };
export { score_go_lambda$_lambda_pure$pure as _$_modulePrivate_$_score_go_lambda$_lambda_pure$pure };
export { score_go_lambda$_lambda$lambda1 as _$_modulePrivate_$_score_go_lambda$_lambda$lambda1 };
export { score_go_lambda$$lambda$1 as _$_modulePrivate_$_score_go_lambda$$lambda$1 };
export { go_getPast$getPast as _$_modulePrivate_$_go_getPast$getPast };
export { go$lambda$ as _$_modulePrivate_$_go$lambda$ };
export { go$lambda as _$_modulePrivate_$_go$lambda };
export { go_bind$bind as _$_modulePrivate_$_go_bind$bind };
export { go_lambda$_lambda_pure$pure as _$_modulePrivate_$_go_lambda$_lambda_pure$pure };
export { go_lambda$_lambda$lambda as _$_modulePrivate_$_go_lambda$_lambda$lambda };
export { go_lambda$$lambda$ as _$_modulePrivate_$_go_lambda$$lambda$ };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { go_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { go_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda$lambda };
export { go_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_go_lambda$_lambda_lambda$$lambda$ };
export { go_lambda$_lambda$lambda1 as _$_modulePrivate_$_go_lambda$_lambda$lambda1 };
export { go_lambda$$lambda$1 as _$_modulePrivate_$_go_lambda$$lambda$1 };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind };
export { go_lambda$_lambda_lambda$_lambda_getPast$getPast as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_getPast$getPast };
export { go_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_bind$bind };
export { go_lambda$_lambda_sendPast$sendPast as _$_modulePrivate_$_go_lambda$_lambda_sendPast$sendPast };
export { go_lambda$_lambda_bind$bind as _$_modulePrivate_$_go_lambda$_lambda_bind$bind };
export { go_fix$fix as _$_modulePrivate_$_go_fix$fix };
export { go_bind$bind1 as _$_modulePrivate_$_go_bind$bind1 };
export { lambda_getPast$getPast as _$_modulePrivate_$_lambda_getPast$getPast };
export { lambda$lambda$ as _$_modulePrivate_$_lambda$lambda$ };
export { lambda$go as _$_modulePrivate_$_lambda$go };
export { lambda_bind$bind as _$_modulePrivate_$_lambda_bind$bind };
export { lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_lambda_lambda$_lambda_pure$pure };
export { lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda$lambda1 };
export { lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$$lambda$1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind };
export { lambda_lambda$_lambda_lambda$_lambda_getPast$getPast as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_getPast$getPast };
export { lambda_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$bind };
export { lambda_lambda$_lambda_sendPast$sendPast as _$_modulePrivate_$_lambda_lambda$_lambda_sendPast$sendPast };
export { lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda_lambda$_lambda_bind$bind };
export { lambda_fix$fix as _$_modulePrivate_$_lambda_fix$fix };
export { lambda_bind$bind1 as _$_modulePrivate_$_lambda_bind$bind1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda_lambda$_lambda$lambda2 };
export { lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda_lambda$$lambda$2 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 };
export { lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture };
export { lambda_lambda$_lambda_lambda$_lambda_bind$bind1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$bind1 };
export { lambda_lambda$_lambda_getPast$getPast as _$_modulePrivate_$_lambda_lambda$_lambda_getPast$getPast };
export { lambda_lambda$_lambda_bind$bind1 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$bind1 };
export { lambda_sendPast$sendPast as _$_modulePrivate_$_lambda_sendPast$sendPast };
export { lambda_bind$bind2 as _$_modulePrivate_$_lambda_bind$bind2 };
export { lambda$_getPast$getPast as _$_modulePrivate_$_lambda$_getPast$getPast };
export { lambda$$lambda as _$_modulePrivate_$_lambda$$lambda };
export { lambda$$go as _$_modulePrivate_$_lambda$$go };
export { lambda$_bind$bind as _$_modulePrivate_$_lambda$_bind$bind };
export { lambda$_lambda$_lambda_pure$pure as _$_modulePrivate_$_lambda$_lambda$_lambda_pure$pure };
export { lambda$_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda$lambda };
export { lambda$_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$$lambda$ };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda$_lambda$lambda1 };
export { lambda$_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda$$lambda$1 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind };
export { lambda$_lambda$_lambda_lambda$_lambda_getPast$getPast as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_getPast$getPast };
export { lambda$_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_bind$bind };
export { lambda$_lambda$_lambda_sendPast$sendPast as _$_modulePrivate_$_lambda$_lambda$_lambda_sendPast$sendPast };
export { lambda$_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda$_lambda$_lambda_bind$bind };
export { lambda$_fix$fix as _$_modulePrivate_$_lambda$_fix$fix };
export { lambda$_bind$bind1 as _$_modulePrivate_$_lambda$_bind$bind1 };
export { lambda$_lambda_lambda$_lambda_getPast$getPast as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_getPast$getPast };
export { lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$bind };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$ };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture };
export { lambda$_lambda_bind$bind as _$_modulePrivate_$_lambda$_lambda_bind$bind };
export { lambda$_lambda_sendPast$sendPast as _$_modulePrivate_$_lambda$_lambda_sendPast$sendPast };
export { lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture };
export { lambda_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$$lambda$2 };
export { lambda_lambda$_lambda$lambda3 as _$_modulePrivate_$_lambda_lambda$_lambda$lambda3 };
export { lambda_lambda$$lambda$3 as _$_modulePrivate_$_lambda_lambda$$lambda$3 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$bind2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$bind2 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$2 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 };
export { lambda_lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda_lambda$_lambda_sendFuture$sendFuture };
export { lambda_lambda$_lambda_bind$bind2 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$bind2 };
export { lambda_getPast$getPast1 as _$_modulePrivate_$_lambda_getPast$getPast1 };
export { lambda_bind$bind3 as _$_modulePrivate_$_lambda_bind$bind3 };
export { lambda$_lambda_getPast$getPast as _$_modulePrivate_$_lambda$_lambda_getPast$getPast };
export { lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda$lambda1 };
export { lambda$_lambda_bind$bind1 as _$_modulePrivate_$_lambda$_lambda_bind$bind1 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_getFuture$getFuture };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind1 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda1 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$$lambda$1 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 };
export { lambda$_lambda_lambda$_lambda_bind$bind1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$bind1 };
export { lambda$_lambda_lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_sendFuture$sendFuture };
export { lambda_lambda$_lambda_getFuture$getFuture as _$_modulePrivate_$_lambda_lambda$_lambda_getFuture$getFuture };
export { lambda_lambda$_lambda$lambda4 as _$_modulePrivate_$_lambda_lambda$_lambda$lambda4 };
export { lambda_lambda$$lambda$4 as _$_modulePrivate_$_lambda_lambda$$lambda$4 };
export { lambda_lambda$_lambda_bind$bind3 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$bind3 };
export { lambda_lambda$_lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_pure$pure };
export { lambda_lambda$_lambda_lambda$_lambda$lambda3 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$lambda3 };
export { lambda_lambda$_lambda_lambda$$lambda$3 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$$lambda$3 };
export { lambda_lambda$_lambda_lambda$_lambda_pure$pure1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 };
export { lambda_lambda$_lambda_lambda$_lambda_pure$pure2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 };
export { lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda_sendFuture$sendFuture };
export { lambda_bind$bind4 as _$_modulePrivate_$_lambda_bind$bind4 };
export { lambda$_lambda_lambda$_lambda_getFuture$getFuture as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_getFuture$getFuture };
export { lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda$_lambda_lambda$$lambda$2 };
export { lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda$_lambda$lambda2 };
export { lambda$_lambda_lambda$_lambda_bind$bind2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$bind2 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda2 };
export { lambda$_lambda_lambda$_lambda_lambda$$lambda$2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$$lambda$2 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure1 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure2 };
export { lambda$_lambda_bind$bind2 as _$_modulePrivate_$_lambda$_lambda_bind$bind2 };
export { lambda$_lambda_sendFuture$sendFuture as _$_modulePrivate_$_lambda$_lambda_sendFuture$sendFuture };
export { lambda_getFuture$getFuture as _$_modulePrivate_$_lambda_getFuture$getFuture };
export { lambda_bind$bind5 as _$_modulePrivate_$_lambda_bind$bind5 };
export { lambda_lambda$_lambda_pure$pure1 as _$_modulePrivate_$_lambda_lambda$_lambda_pure$pure1 };
export { lambda_lambda$_lambda$lambda5 as _$_modulePrivate_$_lambda_lambda$_lambda$lambda5 };
export { lambda_lambda$$lambda$5 as _$_modulePrivate_$_lambda_lambda$$lambda$5 };
export { lambda_lambda$_lambda_pure$pure2 as _$_modulePrivate_$_lambda_lambda$_lambda_pure$pure2 };
export { lambda_lambda$_lambda_pure$pure3 as _$_modulePrivate_$_lambda_lambda$_lambda_pure$pure3 };
export { lambda$_lambda_getFuture$getFuture as _$_modulePrivate_$_lambda$_lambda_getFuture$getFuture };
export { lambda$_lambda$lambda3 as _$_modulePrivate_$_lambda$_lambda$lambda3 };
export { lambda$_lambda_bind$bind3 as _$_modulePrivate_$_lambda$_lambda_bind$bind3 };
export { lambda$_lambda_lambda$_lambda_pure$pure as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_pure$pure };
export { lambda$_lambda_lambda$_lambda$lambda3 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$lambda3 };
export { lambda$_lambda_lambda$$lambda$3 as _$_modulePrivate_$_lambda$_lambda_lambda$$lambda$3 };
export { lambda$_lambda_lambda$_lambda_pure$pure1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_pure$pure1 };
export { lambda$_lambda_lambda$_lambda_pure$pure2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_pure$pure2 };
export { main_score_go_bind$scrut_tup3 as _$_modulePrivate_$_main_score_go_bind$scrut_tup3 };
export { main_score_go_bind$scrut_rest as _$_modulePrivate_$_main_score_go_bind$scrut_rest };
export { main_score_go_bind$scrut_tup31 as _$_modulePrivate_$_main_score_go_bind$scrut_tup31 };
export { main_score_go_bind$scrut_rest1 as _$_modulePrivate_$_main_score_go_bind$scrut_rest1 };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { main_score_go_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_main_score_go_lambda$_lambda_bind$scrut_tup3 };
export { main_score_go_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_main_score_go_lambda$_lambda_bind$scrut_rest };
export { main_score_go_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_main_score_go_lambda$_lambda_bind$scrut_tup31 };
export { main_score_go_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_bind$scrut_rest1 };
export { main_score_go_fix$scrut_tup3 as _$_modulePrivate_$_main_score_go_fix$scrut_tup3 };
export { main_score_go_fix$scrut_rest as _$_modulePrivate_$_main_score_go_fix$scrut_rest };
export { main_score_go_bind$scrut_tup32 as _$_modulePrivate_$_main_score_go_bind$scrut_tup32 };
export { main_score_go_bind$scrut_rest2 as _$_modulePrivate_$_main_score_go_bind$scrut_rest2 };
export { main_score$game_Game as _$_modulePrivate_$_main_score$game_Game };
export { main_score$game_rest as _$_modulePrivate_$_main_score$game_rest };
export { main_score_go$frames_Cons as _$_modulePrivate_$_main_score_go$frames_Cons };
export { main_score_go$frames_rest as _$_modulePrivate_$_main_score_go$frames_rest };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_rest as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_rest };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame };
export { main_score_go$frames_Nil as _$_modulePrivate_$_main_score_go$frames_Nil };
export { score_go_bind$scrut_tup3 as _$_modulePrivate_$_score_go_bind$scrut_tup3 };
export { score_go_bind$scrut_rest as _$_modulePrivate_$_score_go_bind$scrut_rest };
export { score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { score_go_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_score_go_lambda$_lambda_bind$scrut_tup3 };
export { score_go_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_score_go_lambda$_lambda_bind$scrut_rest };
export { score_go_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_score_go_lambda$_lambda_bind$scrut_rest1 };
export { score_go_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_score_go_lambda$_lambda_bind$scrut_tup31 };
export { score_go_fix$scrut_tup3 as _$_modulePrivate_$_score_go_fix$scrut_tup3 };
export { score_go_fix$scrut_rest as _$_modulePrivate_$_score_go_fix$scrut_rest };
export { score_go_bind$scrut_tup31 as _$_modulePrivate_$_score_go_bind$scrut_tup31 };
export { score_go_bind$scrut_rest1 as _$_modulePrivate_$_score_go_bind$scrut_rest1 };
export { score_go_bind$scrut_tup32 as _$_modulePrivate_$_score_go_bind$scrut_tup32 };
export { score_go_bind$scrut_rest2 as _$_modulePrivate_$_score_go_bind$scrut_rest2 };
export { go_bind$scrut_tup3 as _$_modulePrivate_$_go_bind$scrut_tup3 };
export { go_bind$scrut_rest as _$_modulePrivate_$_go_bind$scrut_rest };
export { go_bind$scrut_tup31 as _$_modulePrivate_$_go_bind$scrut_tup31 };
export { go_bind$scrut_rest1 as _$_modulePrivate_$_go_bind$scrut_rest1 };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { go_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { go_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { go_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_go_lambda$_lambda_bind$scrut_tup3 };
export { go_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_go_lambda$_lambda_bind$scrut_rest };
export { go_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_go_lambda$_lambda_bind$scrut_tup31 };
export { go_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_go_lambda$_lambda_bind$scrut_rest1 };
export { go_fix$scrut_tup3 as _$_modulePrivate_$_go_fix$scrut_tup3 };
export { go_fix$scrut_rest as _$_modulePrivate_$_go_fix$scrut_rest };
export { go_bind$scrut_tup32 as _$_modulePrivate_$_go_bind$scrut_tup32 };
export { go_bind$scrut_rest2 as _$_modulePrivate_$_go_bind$scrut_rest2 };
export { lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda_bind$scrut_tup3 };
export { lambda_bind$scrut_rest as _$_modulePrivate_$_lambda_bind$scrut_rest };
export { lambda_bind$scrut_tup31 as _$_modulePrivate_$_lambda_bind$scrut_tup31 };
export { lambda_bind$scrut_rest1 as _$_modulePrivate_$_lambda_bind$scrut_rest1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_rest };
export { lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { lambda_fix$scrut_tup3 as _$_modulePrivate_$_lambda_fix$scrut_tup3 };
export { lambda_fix$scrut_rest as _$_modulePrivate_$_lambda_fix$scrut_rest };
export { lambda_bind$scrut_tup32 as _$_modulePrivate_$_lambda_bind$scrut_tup32 };
export { lambda_bind$scrut_rest2 as _$_modulePrivate_$_lambda_bind$scrut_rest2 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup32 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup32 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest2 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest3 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest3 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup32 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup32 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest2 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest3 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest3 };
export { lambda_lambda$_lambda_bind$scrut_tup32 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup32 };
export { lambda_lambda$_lambda_bind$scrut_rest2 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_rest2 };
export { lambda_lambda$_lambda_bind$scrut_tup33 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup33 };
export { lambda_lambda$_lambda_bind$scrut_rest3 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_rest3 };
export { lambda_bind$scrut_tup33 as _$_modulePrivate_$_lambda_bind$scrut_tup33 };
export { lambda_bind$scrut_rest3 as _$_modulePrivate_$_lambda_bind$scrut_rest3 };
export { lambda_bind$scrut_tup34 as _$_modulePrivate_$_lambda_bind$scrut_tup34 };
export { lambda_bind$scrut_rest4 as _$_modulePrivate_$_lambda_bind$scrut_rest4 };
export { lambda$_bind$scrut_tup3 as _$_modulePrivate_$_lambda$_bind$scrut_tup3 };
export { lambda$_bind$scrut_rest as _$_modulePrivate_$_lambda$_bind$scrut_rest };
export { lambda$_bind$scrut_tup31 as _$_modulePrivate_$_lambda$_bind$scrut_tup31 };
export { lambda$_bind$scrut_rest1 as _$_modulePrivate_$_lambda$_bind$scrut_rest1 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { lambda$_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda$_lambda$_lambda_bind$scrut_tup3 };
export { lambda$_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_lambda$_lambda$_lambda_bind$scrut_rest };
export { lambda$_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_lambda$_lambda$_lambda_bind$scrut_tup31 };
export { lambda$_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_lambda$_lambda$_lambda_bind$scrut_rest1 };
export { lambda$_fix$scrut_tup3 as _$_modulePrivate_$_lambda$_fix$scrut_tup3 };
export { lambda$_fix$scrut_rest as _$_modulePrivate_$_lambda$_fix$scrut_rest };
export { lambda$_bind$scrut_tup32 as _$_modulePrivate_$_lambda$_bind$scrut_tup32 };
export { lambda$_bind$scrut_rest2 as _$_modulePrivate_$_lambda$_bind$scrut_rest2 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_tup31 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_rest1 };
export { lambda$_lambda_bind$scrut_tup3 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup3 };
export { lambda$_lambda_bind$scrut_rest as _$_modulePrivate_$_lambda$_lambda_bind$scrut_rest };
export { lambda$_lambda_bind$scrut_rest1 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_rest1 };
export { lambda$_lambda_bind$scrut_tup31 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup31 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup34 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup34 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest4 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest4 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup35 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup35 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest5 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest5 };
export { lambda_lambda$_lambda_bind$scrut_tup34 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup34 };
export { lambda_lambda$_lambda_bind$scrut_rest4 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_rest4 };
export { lambda_lambda$_lambda_bind$scrut_tup35 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup35 };
export { lambda_lambda$_lambda_bind$scrut_rest5 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_rest5 };
export { lambda_bind$scrut_tup35 as _$_modulePrivate_$_lambda_bind$scrut_tup35 };
export { lambda_bind$scrut_rest5 as _$_modulePrivate_$_lambda_bind$scrut_rest5 };
export { lambda_bind$scrut_tup36 as _$_modulePrivate_$_lambda_bind$scrut_tup36 };
export { lambda_bind$scrut_rest6 as _$_modulePrivate_$_lambda_bind$scrut_rest6 };
export { lambda$_lambda_bind$scrut_tup32 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup32 };
export { lambda$_lambda_bind$scrut_rest2 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_rest2 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup32 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup32 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest2 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup33 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest3 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_rest3 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_tup32 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_tup32 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_rest2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_rest2 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_rest3 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_rest3 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_tup33 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_tup33 };
export { lambda$_lambda_bind$scrut_tup33 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup33 };
export { lambda$_lambda_bind$scrut_rest3 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_rest3 };
export { lambda_lambda$_lambda_bind$scrut_tup36 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup36 };
export { lambda_lambda$_lambda_bind$scrut_rest6 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_rest6 };
export { lambda_lambda$_lambda_bind$scrut_tup37 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup37 };
export { lambda_lambda$_lambda_bind$scrut_rest7 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_rest7 };
export { lambda_bind$scrut_tup37 as _$_modulePrivate_$_lambda_bind$scrut_tup37 };
export { lambda_bind$scrut_rest7 as _$_modulePrivate_$_lambda_bind$scrut_rest7 };
export { lambda_bind$scrut_tup38 as _$_modulePrivate_$_lambda_bind$scrut_tup38 };
export { lambda_bind$scrut_rest8 as _$_modulePrivate_$_lambda_bind$scrut_rest8 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_tup34 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_tup34 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_rest4 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_rest4 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_tup35 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_tup35 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_rest5 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_rest5 };
export { lambda$_lambda_bind$scrut_tup34 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup34 };
export { lambda$_lambda_bind$scrut_rest4 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_rest4 };
export { lambda$_lambda_bind$scrut_rest5 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_rest5 };
export { lambda$_lambda_bind$scrut_tup35 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup35 };
export { lambda_bind$scrut_tup39 as _$_modulePrivate_$_lambda_bind$scrut_tup39 };
export { lambda_bind$scrut_rest9 as _$_modulePrivate_$_lambda_bind$scrut_rest9 };
export { lambda_bind$scrut_tup310 as _$_modulePrivate_$_lambda_bind$scrut_tup310 };
export { lambda_bind$scrut_rest10 as _$_modulePrivate_$_lambda_bind$scrut_rest10 };
export { lambda$_lambda_bind$scrut_tup36 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup36 };
export { lambda$_lambda_bind$scrut_rest6 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_rest6 };
export { lambda$_lambda_bind$scrut_tup37 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup37 };
export { lambda$_lambda_bind$scrut_rest7 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_rest7 };
export { lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup3$worker1 };
export { lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker };
export { lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker1 };
export { lambda$_lambda_bind$scrut_tup3$worker2 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup3$worker2 };
export { lambda$_lambda_bind$scrut_tup3$worker3 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup3$worker3 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { lambda_bind$scrut_tup3$worker2 as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker2 };
export { lambda_bind$scrut_tup3$worker3 as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker3 };
export { lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { lambda$_lambda_bind$scrut_tup3$worker4 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup3$worker4 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { lambda$_lambda_bind$scrut_tup3$worker5 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup3$worker5 };
export { lambda_bind$scrut_tup3$worker4 as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker4 };
export { lambda_bind$scrut_tup3$worker5 as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker5 };
export { lambda_lambda$_lambda_bind$scrut_tup3$worker2 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup3$worker2 };
export { lambda_lambda$_lambda_bind$scrut_tup3$worker3 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup3$worker3 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { lambda$_lambda_bind$scrut_tup3$worker6 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup3$worker6 };
export { lambda$_lambda_bind$scrut_tup3$worker7 as _$_modulePrivate_$_lambda$_lambda_bind$scrut_tup3$worker7 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker4 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker4 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker5 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker5 };
export { lambda$_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda$_bind$scrut_tup3$worker };
export { lambda$_fix$scrut_tup3$worker as _$_modulePrivate_$_lambda$_fix$scrut_tup3$worker };
export { lambda$_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda$_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda$_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda$_lambda$_lambda_bind$scrut_tup3$worker1 };
export { lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { lambda$_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda$_bind$scrut_tup3$worker1 };
export { lambda$_bind$scrut_tup3$worker2 as _$_modulePrivate_$_lambda$_bind$scrut_tup3$worker2 };
export { lambda_bind$scrut_tup3$worker6 as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker6 };
export { lambda_bind$scrut_tup3$worker7 as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker7 };
export { lambda_lambda$_lambda_bind$scrut_tup3$worker4 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup3$worker4 };
export { lambda_lambda$_lambda_bind$scrut_tup3$worker5 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup3$worker5 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { lambda_bind$scrut_tup3$worker8 as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker8 };
export { lambda_fix$scrut_tup3$worker as _$_modulePrivate_$_lambda_fix$scrut_tup3$worker };
export { lambda_lambda$_lambda_bind$scrut_tup3$worker6 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup3$worker6 };
export { lambda_lambda$_lambda_bind$scrut_tup3$worker7 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$scrut_tup3$worker7 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker4 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker4 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker5 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker5 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker2 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker3 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { lambda_bind$scrut_tup3$worker9 as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker9 };
export { lambda_bind$scrut_tup3$worker10 as _$_modulePrivate_$_lambda_bind$scrut_tup3$worker10 };
export { go_bind$scrut_tup3$worker as _$_modulePrivate_$_go_bind$scrut_tup3$worker };
export { go_fix$scrut_tup3$worker as _$_modulePrivate_$_go_fix$scrut_tup3$worker };
export { go_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_go_lambda$_lambda_bind$scrut_tup3$worker };
export { go_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_go_lambda$_lambda_bind$scrut_tup3$worker1 };
export { go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { go_bind$scrut_tup3$worker1 as _$_modulePrivate_$_go_bind$scrut_tup3$worker1 };
export { go_bind$scrut_tup3$worker2 as _$_modulePrivate_$_go_bind$scrut_tup3$worker2 };
export { score_go_bind$scrut_tup3$worker as _$_modulePrivate_$_score_go_bind$scrut_tup3$worker };
export { score_go_bind$scrut_tup3$worker1 as _$_modulePrivate_$_score_go_bind$scrut_tup3$worker1 };
export { score_go_fix$scrut_tup3$worker as _$_modulePrivate_$_score_go_fix$scrut_tup3$worker };
export { score_go_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_score_go_lambda$_lambda_bind$scrut_tup3$worker };
export { score_go_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_score_go_lambda$_lambda_bind$scrut_tup3$worker1 };
export { score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { score_go_bind$scrut_tup3$worker2 as _$_modulePrivate_$_score_go_bind$scrut_tup3$worker2 };
export { main_score_go$frames_Cons$worker as _$_modulePrivate_$_main_score_go$frames_Cons$worker };
export { main_score$game_Game$worker as _$_modulePrivate_$_main_score$game_Game$worker };
export { main_score_go_bind$scrut_tup3$worker as _$_modulePrivate_$_main_score_go_bind$scrut_tup3$worker };
export { main_score_go_fix$scrut_tup3$worker as _$_modulePrivate_$_main_score_go_fix$scrut_tup3$worker };
export { main_score_go_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda_bind$scrut_tup3$worker };
export { main_score_go_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_bind$scrut_tup3$worker1 };
export { main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker1 };
export { main_score_go_bind$scrut_tup3$worker1 as _$_modulePrivate_$_main_score_go_bind$scrut_tup3$worker1 };
export { main_score_go_bind$scrut_tup3$worker2 as _$_modulePrivate_$_main_score_go_bind$scrut_tup3$worker2 };
export { lambda$_lambda_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$lambda$worker };
export { lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda$_lambda_bind$bind$worker };
export { lambda_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda_lambda$_lambda$lambda$worker };
export { lambda_bind$bind$worker as _$_modulePrivate_$_lambda_bind$bind$worker };
export { lambda$_lambda_bind$bind$worker1 as _$_modulePrivate_$_lambda$_lambda_bind$bind$worker1 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker };
export { lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { lambda_bind$bind$worker1 as _$_modulePrivate_$_lambda_bind$bind$worker1 };
export { lambda_lambda$_lambda_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker };
export { lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda_lambda$_lambda_bind$bind$worker };
export { lambda$_lambda_lambda$_lambda_bind$bind$worker1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$bind$worker1 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { lambda$_lambda_lambda$_lambda$lambda$worker1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda$lambda$worker1 };
export { lambda$_lambda_bind$bind$worker2 as _$_modulePrivate_$_lambda$_lambda_bind$bind$worker2 };
export { lambda_bind$bind$worker2 as _$_modulePrivate_$_lambda_bind$bind$worker2 };
export { lambda_lambda$_lambda_bind$bind$worker1 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$bind$worker1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker };
export { lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { lambda_lambda$_lambda$lambda$worker1 as _$_modulePrivate_$_lambda_lambda$_lambda$lambda$worker1 };
export { lambda$_lambda_bind$bind$worker3 as _$_modulePrivate_$_lambda$_lambda_bind$bind$worker3 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1 };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker1 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker1 };
export { lambda$_lambda_lambda$_lambda_bind$bind$worker2 as _$_modulePrivate_$_lambda$_lambda_lambda$_lambda_bind$bind$worker2 };
export { lambda$_bind$bind$worker as _$_modulePrivate_$_lambda$_bind$bind$worker };
export { lambda$_fix$fix$worker as _$_modulePrivate_$_lambda$_fix$fix$worker };
export { lambda$_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda$_lambda$_lambda_bind$bind$worker };
export { lambda$_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker };
export { lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda$_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { lambda$_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda$_lambda$_lambda$lambda$worker };
export { lambda$_bind$bind$worker1 as _$_modulePrivate_$_lambda$_bind$bind$worker1 };
export { lambda_bind$bind$worker3 as _$_modulePrivate_$_lambda_bind$bind$worker3 };
export { lambda_lambda$_lambda_bind$bind$worker2 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$bind$worker2 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { lambda_lambda$_lambda_lambda$_lambda$lambda$worker1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker1 };
export { lambda_bind$bind$worker4 as _$_modulePrivate_$_lambda_bind$bind$worker4 };
export { lambda_fix$fix$worker as _$_modulePrivate_$_lambda_fix$fix$worker };
export { lambda_lambda$_lambda_bind$bind$worker3 as _$_modulePrivate_$_lambda_lambda$_lambda_bind$bind$worker3 };
export { lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker2 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker2 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1 as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker1 };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker };
export { lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { lambda_lambda$_lambda$lambda$worker2 as _$_modulePrivate_$_lambda_lambda$_lambda$lambda$worker2 };
export { lambda_bind$bind$worker5 as _$_modulePrivate_$_lambda_bind$bind$worker5 };
export { go_bind$bind$worker as _$_modulePrivate_$_go_bind$bind$worker };
export { go_fix$fix$worker as _$_modulePrivate_$_go_fix$fix$worker };
export { go_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_go_lambda$_lambda_bind$bind$worker };
export { go_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker };
export { go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { go_lambda$_lambda$lambda$worker as _$_modulePrivate_$_go_lambda$_lambda$lambda$worker };
export { go_bind$bind$worker1 as _$_modulePrivate_$_go_bind$bind$worker1 };
export { score_go_bind$bind$worker as _$_modulePrivate_$_score_go_bind$bind$worker };
export { score_go_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_score_go_lambda$_lambda_bind$bind$worker };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$lambda$worker };
export { score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { score_go_lambda$_lambda$lambda$worker as _$_modulePrivate_$_score_go_lambda$_lambda$lambda$worker };
export { score_go_bind$bind$worker1 as _$_modulePrivate_$_score_go_bind$bind$worker1 };
export { score_go_fix$fix$worker as _$_modulePrivate_$_score_go_fix$fix$worker };
export { main_score_go_bind$bind$worker as _$_modulePrivate_$_main_score_go_bind$bind$worker };
export { main_score_go_fix$fix$worker as _$_modulePrivate_$_main_score_go_fix$fix$worker };
export { main_score_go_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda_bind$bind$worker };
export { main_score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$bind$worker };
export { main_score_go_lambda$_lambda$lambda$worker as _$_modulePrivate_$_main_score_go_lambda$_lambda$lambda$worker };
export { main_score_go_bind$bind$worker1 as _$_modulePrivate_$_main_score_go_bind$bind$worker1 };
export default tardis1;
