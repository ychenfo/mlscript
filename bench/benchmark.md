# Draft v5.2-all: code size and running time, all 36 programs

Data: sizes measured on the Mac (`node bench/tinybench.mjs --sizes`, 2026-11-18 build), minified (terser
compress + mangle) and gzipped; timings from `bench/time-win-11.19.3.2.txt` (Windows; 11.18.2 with fft,
minimax, constraints and puzzle from the 11.19.1/2 reruns and zern from the 11.19.4 rerun), MIN output timed,
mean times only. `opt`/`popt` are compared with `none`, `dopt`/`dpopt` with `dnone`.
Internal note: zern's times vary by up to 30% between runs of identical code on this machine; across all 36
programs this moves no geometric mean by more than about 1 point.


**Setup.** We evaluate our optimization on two kinds of input: the benchmark programs as written, and the same programs after deforestation **[TODO cite]**, as an example of code produced by an aggressive program transformation. We compare the following configurations:
- `opt` and `popt`: our optimization with the monovariant and polyvariant analysis, applied to the programs as written and compared with the baseline pipeline `none`;
- `dopt` and `dpopt`: the same, applied after deforestation and compared with deforestation alone (`dnone`). Deforestation is itself polyvariant: it specializes each producer for each consumer it is fused with.

The benchmarks are 36 programs: 12 SML programs **[TODO cite]** and 24 from nofib **[TODO cite]**. Code size is the minified and gzipped JavaScript output. Running time is the mean time of one run of the same minified code on Node.js **[TODO version, machine]**, over at least 3 s and 20 runs per program.

We now discuss the results for the two kinds of input.

**Results.**
The running times for each comparison are in @figures/time.pdf \TODO{make it in the paper}. Each panel shows one program with four pairs of bars, from left to right: `none` (pink) and `opt` (lime); `none` (pink) and `popt` (yellow); `dnone` (green) and `dopt` (orange); `dnone` (green) and `dpopt` (blue). Each pair is normalized to its first bar, the input of the optimization, and drawn on its own scale, so the taller bar of a pair nearly reaches the top of the panel and heights can only be compared within a pair. A second bar lower than the first means that the optimization made the program faster.
The code sizes for each comparison are in @figures/size.pdf \TODO{make it in the paper}, which is laid out the same way; there, a second bar lower than the first means that the optimization made the program smaller.


**Programs as written.**
On hand-written programs, `opt` makes programs 3% faster and 0.7% smaller than `none` in geometric mean. This modest average improvement is expected: the baseline already inlines and simplifies, and hand-written programs contain little dead code.
`popt` makes programs 5% faster than `none` in geometric mean at the cost of 8.5% larger code.

**After deforestation.**
On deforested programs, `dopt` is 3.2% smaller than `dnone` in geometric mean and smaller on 31 of the 36 programs, by up to 32%; it is also 4% faster in geometric mean, and seven programs run at least 5% faster. Deforestation leaves behind code that the baseline's clean-up passes cannot remove:
  - dead parameters threaded through the fused functions that cannot be detected intraprocedurally;
  - closures that are created only to be applied once.

The largest speedup is 1.85× on gcd for `dopt` vs `dnone`. It comes from an interplay with later passes. After deforestation, the program's recursive computation calls itself through closures that are nested inside branches. And it is eta-expansion that lets the worker/wrapper transformation and the tail-recursion optimization later in the pipeline turn the recursion into a loop, making the hot path much faster. Our optimization is therefore a natural companion to aggressive transformations like deforestation: it performs a sound clean-up after them without costing performance, and it enables further optimizations on their output.


Now we give more comments on polyvariance.
Firstly, we notice that polyvariant specialization does not always grow the code: `popt` is *smaller* than `none` on 5 programs, by up to 8%, and `dpopt` is smaller than `dnone` on 12 programs, by up to 38%.
This is less surprising than it may seem: lambda set specialization **[TODO cite: Brandon et al., PLDI 2023]** also creates specialized copies and also reports code size reductions, and the specialized copies enable further simplification:
- **More removal per copy:** each copy sees only the values that reach its own call sites, so dead-code elimination removes more from it than from a shared version.
- **Cheaper inlining:** a copy with a single call site is inlined and simplified in context, while a shared helper may not get inlined at all.

When these effects compound, they may outweigh the duplication.

However, this does not mean that we should apply polyvariant specialization blindly.
`dpopt` is as fast as `dopt`, 4% faster than `dnone` in geometric mean, but its code is 8.5% larger than `dnone`'s, whereas `dopt`'s is 3.2% smaller.
Applied after deforestation, the polyvariant analysis makes code 8.5% larger than `dnone`, while the monovariant one makes it 3.2% smaller, and the two are equally fast (1.04×). One program (sphere) becomes 2.5× larger than `dnone` at about the same speed.
So a lesson we learned here is that a single polyvariant expansion per pipeline mostly suffices.
We also comment that our design allows mix poly and mono for different top-level definitions,
and this flexibility opens more room for improvements via fine-tuned heuristics, which we leave as a future work.


