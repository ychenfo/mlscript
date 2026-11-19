# Draft v1: code size and running time

Data: sizes measured on the Mac (`node bench/tinybench.mjs --sizes`, 2026-11-18 build), timings from
`bench/time-win-11.18.2.txt` (Windows, MIN output timed, `--time 3000 --min-samples 20`).
Sizes are reported in all four forms (UNMIN, UNMIN.gz, MIN, MIN.gz).


**Setup.** We compare six configurations. `none` is the baseline pipeline **[TODO: say what it already does: inlining, simplification, local dead-code elimination]**. `opt` and `popt` add our flow-analysis-based optimization, using the monovariant and the polyvariant analysis respectively. `dnone` adds only deforestation **[TODO cite]**, which is itself polyvariant: it specializes each producer for each consumer it is fused with. `dopt` and `dpopt` run deforestation followed by our optimization in each of the two modes. **[TODO: paper names for the configurations.]** The benchmarks are 36 programs: 12 SML programs **[TODO: suite + cite]** and 24 nofib programs **[TODO cite]**, ported as self-contained programs.

For code size we measure the generated JavaScript after terser **[TODO version]**: with identifier mangling only (UNMIN), and with mangling plus terser's own optimizations (MIN), each also gzipped at level 9. UNMIN is our primary measure. Without mangling, the compiler's long generated identifiers would dominate the size of specialized copies. Without terser's optimizer, every reduction we report is our compiler's own. Gzip partly hides duplication, because repeated copies compress well, so the gzipped columns understate the cost of specialization; we report them because they are closest to what is actually shipped.

Running times were measured with tinybench **[TODO version]** on Node.js **[TODO version]** on **[TODO machine]**. Each program and configuration was run for at least 3 s and 20 samples after warm-up, and we report the mean time of one call to the program's `main`. We time the MIN output; timing the UNMIN output instead changes no geometric mean by more than 0.4%. We call a configuration faster or slower than another on a program only when the difference exceeds the two measurements' combined 95% margins of error. **[TODO(rerun): 20 of the 432 measurements had a margin above 3%; update the numbers after the reruns. Leaving out the five affected programs changes no geometric mean by more than 1.2 points.]**

**Overall.** Deforestation followed by our monovariant optimization (`dopt`) gives the best trade-off of all configurations (Table 1).
- It is 1.33× faster than the baseline in geometric mean. It is faster on 30 of the 36 programs and slower on only two, by at most 2.3%.
- The fully polyvariant pipeline (`dpopt`) is just as fast, but its code is 29% larger than `dopt`'s. We return to this below.

**Monovariant optimization alone.** On the programs as written, `opt` essentially never grows code: at most +2% in UNMIN and +0.4% gzipped. It shrinks 27 of the 36 programs and improves running time by 2.7% in geometric mean, and by up to 1.25×. Where it is slower, the slowdown is at most 1.8%. Modest averages are expected here: the baseline already inlines and simplifies, and hand-written programs contain little dead code. The real case for the analysis is code produced by other transformations, which we discuss next.

**Deforestation.** Deforestation increases code size by 45% (UNMIN; 22% gzipped) and speeds programs up by 1.28× in geometric mean, and by up to 11×.
- **The growth is inherent to the transformation.** Deforestation specializes producers per consumer and splits each consumer's case analysis into one function per branch. It trades code for not allocating and inspecting intermediate data structures.
- **The programs that grow most also gain a lot (Table 3).** One program becomes 5.7× larger (1.4× gzipped) but runs 2.4× faster.
- **Fusion occasionally makes code smaller:** 5 programs, by up to 10%. Removing an intermediate structure also removes the code that inspects it, including the failure path of each pattern match. In JavaScript that path is relatively verbose: it throws an error built from global names, which a minifier cannot shorten. Small helpers that only build or traverse the intermediate structure disappear along with it.

**Cleaning up after deforestation.** Our optimization is most effective on deforested code.
- **Size:** compared with `dnone`, `dopt` is smaller on 33 of 36 programs: 9% smaller in geometric mean (UNMIN; 3.5% gzipped). That recovers about a quarter of deforestation's growth.
- **Speed:** it is also faster: 1.04× in geometric mean and up to 1.85×. It is slower on 4 programs, by at most 6.5%.
- **Why it matters:** on hand-written code the same analysis saves only 1%. That indicates deforestation leaves behind code the baseline's clean-up passes cannot remove:
  - parameters threaded through the fused branch functions that are dead at some or all call sites;
  - closures created only to be applied once.

  Recognizing these requires knowing which values flow to which call sites across function boundaries, which is exactly what our flow analysis computes. In one program, references to such threaded parameters drop from 2,520 to 120.

**Polyvariance.** A polyvariant analysis specializes functions per instantiation context, so it is expected to grow code. `popt` is 17% larger than `opt` (UNMIN; 9% gzipped) and adds a further 2.2% speedup in geometric mean, up to 1.29×.

**Limitation: polyvariance twice.** Running the polyvariant analysis after deforestation, which is already polyvariant, grows code by a further 29% (UNMIN; 12% gzipped) without making programs faster.
- **Speed:** the geometric mean ratio is 1.00. Times are within ±5% on 34 of 36 programs; the other two are 5.5% and 13% slower **[TODO: investigate these two]**.
- **Worst case:** one program becomes 5.3× larger than under `dopt` (2.6× gzipped) at the same speed (Table 4).
- **Why:** two specializing passes compose badly. Deforestation already makes a copy per fusion site, and the polyvariant analysis then specializes each of those copies again, multiplying them. The speed benefit, meanwhile, has already been collected by deforestation and the monovariant clean-up.
- **Lesson:** one polyvariant expansion per pipeline is enough, and later passes should analyze its output monovariantly; that is the `dopt` configuration. Because our analysis supports both modes in one framework, the choice is a configuration decision, not a different analysis. **[TODO verify before claiming: the mode can be chosen per definition, even within one file]** This leaves room for heuristics that specialize only where it pays off, for example under a per-function size budget.

**Polyvariance can also shrink code.** In a few programs the polyvariant configuration is smaller than the monovariant one despite its copies: 6 programs without deforestation and 5 with it, by up to 5% in UNMIN and 8% gzipped (Table 5). This is less surprising than it may first appear. Lambda set specialization **[TODO cite: Brandon et al., PLDI 2023]** also duplicates functions per call site, and it is precisely the specialized copies that make further simplification possible.
- **Per-copy optimization:** each copy sees only the values that reach its own call sites. Dead-branch and dead-parameter elimination can therefore remove more from it than from a shared version, and eta expansion applies to it even when another call site of the original would prevent it.
- **Free inlining:** a specialized copy usually has a single call site, so the simplifier inlines it unconditionally and simplifies it further in context. A shared helper is only inlined below a size threshold.

These effects compound. When the specialized helpers are small, have few callers, and simplify well once their arguments are known, the savings outweigh the duplication. **[LISTING: `size-examples/SpecializedBranches.mls`, mono vs poly output side by side.]** Even so, most size reductions come from the monovariant step: where `dpopt` is smaller than `dnone`, 83% of the gzipped reduction comes from the mono step, and in UNMIN all of it does, since the poly step there even adds size.

---

**Table 1.** Each configuration relative to `none`: sizes and running times, geometric means over 36 programs.

| config | UNMIN | UNMIN.gz | MIN | MIN.gz | speedup (geomean) | speedup (median) | faster / same / slower | max speedup | worst slowdown beyond noise |
|---|---:|---:|---:|---:|---:|---:|---|---:|---:|
| opt | 0.990 | 0.992 | 0.990 | 0.993 | 1.03× | 1.00× | 15 / 15 / 6 | 1.25× | 1.8% |
| popt | 1.161 | 1.083 | 1.167 | 1.085 | 1.05× | 1.02× | 25 / 6 / 5 | 1.62× | 3.0% |
| dnone | 1.453 | 1.217 | 1.421 | 1.213 | 1.28× | 1.13× | 29 / 4 / 3 | 11.1× | 1.7% |
| dopt | 1.324 | 1.174 | 1.313 | 1.175 | 1.33× | 1.16× | 30 / 4 / 2 | 20.4× | 2.3% |
| dpopt | 1.705 | 1.317 | 1.670 | 1.316 | 1.33× | 1.15× | 32 / 3 / 1 | 20.2× | 0.4% |

**Table 2.** One pipeline step at a time.

| step | ratio | UNMIN | UNMIN.gz | programs smaller (UNMIN) | time | faster / same / slower | worst slowdown beyond noise |
|---|---|---:|---:|---:|---:|---|---:|
| + mono opt | opt/none | 0.990 | 0.992 | 27/36 | 0.973 | 15 / 15 / 6 | 1.8% |
| + mono opt after deforestation | dopt/dnone | 0.911 | 0.965 | 33/36 | 0.965 | 14 / 18 / 4 | 6.5% |
| mono → poly | popt/opt | 1.173 | 1.092 | 6/36 | 0.978 | 18 / 12 / 6 | 4.3% |
| mono → poly after deforestation | dpopt/dopt | 1.288 | 1.122 | 5/36 | 1.001 | 12 / 16 / 8 | 13.4% |
| + deforestation | dnone/none | 1.453 | 1.217 | 5/36 | 0.779 | 29 / 4 / 3 | 1.7% |

**Table 3.** Deforestation: the largest growths with their speedups (size relative to `none`, UNMIN with gzipped in parentheses), and the programs that fusion shrinks.

| program | dnone size | dopt size | dnone speedup | dopt speedup |
|---|---:|---:|---:|---:|
| minimax | 5.71 (1.46) | 5.65 (1.44) | 2.42× | 2.46× |
| integer | 6.46 (2.33) | 4.78 (1.50) | 1.48× | 1.90× |
| cryptarithm2 | 2.80 (1.84) | 2.27 (1.72) | 1.70× | 1.84× |
| simple | 2.43 (1.82) | 2.16 (1.69) | 1.26× | 1.27× |
| constraints | 2.13 (1.54) | 1.74 (1.48) | 1.19× | 1.21× |
| sphere | 1.95 (1.61) | 1.75 (1.56) | 1.24× | 1.25× |
| *fusion shrinks:* fft | 0.93 (0.91) | 0.89 (0.91) | 1.83× | 1.85× |
| zern | 0.90 (0.93) | 0.89 (0.93) | 1.04× | 1.10× |
| gcd | 0.94 (0.95) | 0.69 (0.86) | 11.1× | 20.4× |

**Table 4.** Polyvariance twice (`dpopt` relative to `dopt`): the largest growths.

| program | UNMIN | UNMIN.gz | time |
|---|---:|---:|---:|
| sphere | 5.30 | 2.59 | 0.99 |
| awards | 3.95 | 1.92 | 1.01 |
| calendar | 2.59 | 1.48 | 1.02 |
| tardis | 2.48 | 1.48 | 1.06 |
| tsp | 1.82 | 1.11 | 1.00 |
| smithNormalForm | 1.67 | 1.37 | 1.13 |

**Table 5.** Programs where poly is smaller than mono (UNMIN / UNMIN.gz). All their times are within ±2%.

| `popt`/`opt` | `dpopt`/`dopt` |
|---|---|
| pretty 0.95 / 0.92 | cryptarithm1 0.97 / 0.95 |
| cse 0.95 / 0.99 | clausify 0.97 / 0.98 |
| gcd 0.97 / 0.97 | integer 0.99 / 0.93 |
| fft 0.99 / 0.99 | gcd 0.99 / 0.99 |
| logic 0.99 / 1.02 | pretty 1.01 / 0.95 (gzipped only) |

**Figures to make:**
- **[FIG 1, the main one] Size–speed plane.**
  - Axes: x is code size relative to `none` (UNMIN, log scale); y is speedup over `none` (log scale).
  - Marks: for each program, arrows dnone → dopt → dpopt; `opt` and `popt` as small separate markers. Label only the extreme programs.
  - What it should show: dnone → dopt arrows point left and slightly up (smaller and faster); dopt → dpopt arrows point right, staying level (bigger, not faster).
- **[FIG 2] Per-program speedup over `none`.**
  - Grouped bars, one per configuration, on a log y-axis, sorted by `dopt` speedup, with 95% whiskers.
  - gcd (20×) is clipped, with its value written on the bar.
- **[FIG 3] One strip plot per pipeline step.** For each row of Table 2, a strip of per-program ratios, size in the top panel and time in the bottom, with a reference line at 1.
  - The two mono steps cluster at or below 1 in both panels.
  - The two poly steps spread to the right in size while staying at 1 in time.
  - Deforestation spreads right in size and down in time.
