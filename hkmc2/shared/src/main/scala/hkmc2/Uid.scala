package hkmc2

import mlscript.utils.*, shorthands.*

opaque type Uid[T] = Int

object Uid:
  class Handler[T]:
    class State:
      private var curUid = -1
      def nextUid: Uid[T] =
        curUid += 1
        curUid
      def reset = curUid = -1
  object Symbol extends Handler[semantics.Symbol]
  object StratVar extends Handler[codegen.deforest.StratVarState]
  object Result extends Handler[codegen.Result]

extension [T] (x: Uid[T])
  def <=(rhs: Uid[T]) = x <= rhs

private val ord = Ordering.Int
given [A]: Ordering[Uid[A]] = ord

