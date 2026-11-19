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

We now discuss the results for two kinds of input:

**Result**
The result of the runtime for each of the comparison is in @figures/time.pdf \TODO{make it in the paper},
and \TODO{explain} how to read the picture.
"none (pink), opt (lime) | none (pink), popt (yellow) | dnone (green), dopt (orange) | dnone (green), dpopt (blue)"
The result of the size of each pair of comparison is in @figures/size.pdf \TODO{make it in the paper},
and \TODO{explain} how to read the picture.



**Programs as written.**
On hand-written programs,
state the numbers for `opt vs none`: geomean time change, geomean size change, and then say a modest average improvement is expected: the baseline already inlines and simplifies, and hand-written programs contain little dead code.
state the numbers for `popt vs none`: TODO: find somethign to say, compare with none! not opt!

**After deforestation.**
On deforested programs,
state the numbers for `dopt vs dnone`: `dopt` is smaller than `dnone` on 31 of the 36 programs, by up to 32%, and 1.04× faster in geometric mean; seven programs run at least 5% faster. Deforestation leaves behind code that the baseline's clean-up passes cannot remove:
  - parameters threaded through the fused functions that are dead at some or all call sites;
  - closures that are created only to be applied once.
The largest speedup, 1.85× on gcd for both `dopt` and `dpopt`, comes from an interplay with later passes. After deforestation, the program's recursive computation calls itself through closures. Our optimization eta-expands them, which lets the worker/wrapper transformation and the tail-recursion optimization later in the pipeline turn the recursion into a loop, making the hot path much faster. Our optimization is therefore a natural companion to aggressive transformations like deforestation: it performs a sound clean up after them without costing performance, and it enables further optimizations on their output.

state the numbers for `dpopt vs dnone`: TODO: find something to say.


Now we give more comments on the polyvariance:
firstly, we notice that the polyvariance speicalization does not always grows the code,

In 5 programs, the polyvariant output is *smaller*, by up to 6% (TODO: what are those number? which compares to which????).
This is less surprising than it may seem: lambda set specialization **[TODO cite: Brandon et al., PLDI 2023]** also creates specialized copies,
and also report code size reduce, and the specialized copies enables further simplification:
- **More removal per copy:** each copy sees only the values that reach its own call sites, so dead-code elimination removes more from it than from a shared version.
- **Cheaper inlining:** a copy with a single call site is inlined and simplified in context, while a shared helper may not get inlined at all.

So with these effects compound, they outweigh the duplication. Most actual size reductions still come from the monovariant optimization: of the 12 programs where `dpopt` is smaller than `dnone`, 85% of the reduction is already achieved by `dopt`.

However, this doesn't mean that we should apply polyvariant speicalization blindly:
Applied after deforestation, the polyvariant analysis makes code 12% larger (TODO: is it dpopt vs dnone? check and never report numbers of dpopt and dopt, and similarly never popt vs opt, always compare to none/dnone for clarity) than the monovariant one but no faster, one program (spehere) becomes 2.6× larger at the same speed.
So a lesson we learned here is that a single polyvariant expansion per pipeline mostly suffices.
Moreover, it is also possible to mix poly and mono for different top level definitions,
and then this flexibility also opens more room for improvements via fine tune heuristics.



---

**Table 1.** Our optimization relative to its input, geometric means over 36 programs. Size is minified and gzipped.

| configuration | compared with | code size | programs smaller | speedup | programs faster / slower | max slowdown |
|---|---|---:|---:|---:|---:|---:|
| `opt` | `none` | 0.993 | 26 | 1.033× | 26 / 10 | 1.8% |
| `popt` | `none` | 1.085 | 5 | 1.051× | 29 / 7 | 3.0% |
| `dopt` | `dnone` | 0.968 | 31 | 1.039× | 27 / 9 | 6.5% |
| `dpopt` | `dnone` | 1.085 | 12 | 1.039× | 25 / 11 | 3.8% |

**Table 2.** Polyvariant relative to monovariant.

| input | comparison | code size | programs smaller | speedup | max slowdown |
|---|---|---:|---:|---:|---:|
| programs as written | `popt` vs `opt` | 1.093 | 5 | 1.018× | 4.3% |
| after deforestation | `dpopt` vs `dopt` | 1.120 | 5 | 1.000× | 13.4% |

**Table 3.** The individual cases cited in the text.

| case | comparison | code size | speedup |
|---|---|---:|---:|
| largest reduction by our optimization | integer, `dopt` vs `dnone` | 0.68 | 1.28× |
| largest shrink from polyvariance | pretty, `popt` vs `opt` | 0.94 | 1.01× |
| worst case of polyvariance twice | sphere, `dpopt` vs `dopt` | 2.56 | 1.01× |

**Figures to make:**
- **[FIG 1] Size–speed plane, two panels.**
  - Left panel: the programs as written, relative to `none`. Right panel: after deforestation, relative to `dnone`.
  - Axes: x is code size, y is speedup, both relative to the panel's input.
  - Marks: per program, an arrow from the monovariant point to the polyvariant one (`opt` → `popt` on the left, `dopt` → `dpopt` on the right).
  - What it should show: the monovariant points sit at or left of 1 and mostly above 1. The arrows point right; on the right panel they stay level (bigger, not faster).
- **[FIG 2] Per-program speedup bars.** The four configurations, each relative to its own input, no error bars.
