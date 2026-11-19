# Draft v3: code size and running time (MIN.GZ only, plain means)

Data: sizes measured on the Mac (`node bench/tinybench.mjs --sizes`, 2026-11-18 build), minified (terser
compress + mangle) and gzipped; timings from `bench/time-win-11.18.2.txt` (Windows, MIN output timed,
`--time 3000 --min-samples 20`). All time comparisons use the mean times only (tinybench's error margins are
ignored); a program counts as faster or slower whenever its mean time is lower or higher.


**Setup.** We compare six configurations:
- `none`: the baseline pipeline **[TODO: what it already includes]**;
- `opt` and `popt`: the baseline plus our optimization, with the monovariant and polyvariant analysis respectively;
- `dnone`: the baseline plus deforestation **[TODO cite]**, which is itself polyvariant;
- `dopt` and `dpopt`: deforestation followed by our optimization, monovariant and polyvariant.

The benchmarks are 36 programs: 12 SML programs **[TODO cite]** and 24 from nofib **[TODO cite]**. Code size is the minified and gzipped JavaScript output. Running time is the mean time of one run of the same minified code on Node.js **[TODO version, machine]**, over at least 3 s and 20 runs per program. **[TODO: update after the reruns]**

**Overall.** Deforestation followed by our monovariant optimization (`dopt`) gives the best results (Table 1). It is 1.33× faster than the baseline in geometric mean. It is faster on 33 of the 36 programs and slower on three, by at most 2.3%, while its code grows by 17.5%. It is both faster and smaller than deforestation alone.

**Our optimization alone.** On the programs as written, our optimization is a free improvement. Code never grows by more than 0.5% and shrinks for 26 programs, while programs run 1.03× faster in geometric mean, and up to 1.25×. No program is more than 3.8% slower. The averages are modest, as expected: the baseline already inlines and simplifies, and hand-written programs contain little dead code.

**Our optimization after deforestation.** The same analysis removes much more after deforestation. `dopt` is smaller than `dnone` on 31 of 36 programs, by up to 32%, and 1.04× faster in geometric mean, up to 1.85×. No program is more than 6.5% slower. Fusion leaves behind code that the baseline's clean-up passes cannot remove:
- parameters threaded through the fused functions that are dead at some or all call sites;
- closures that are created only to be applied once.

Recognizing such code requires knowing which values reach which call sites across function boundaries, which is exactly what our flow analysis computes. In one program, references to threaded parameters drop from 2,520 to 120. Our optimization is therefore a natural companion to aggressive transformations like deforestation: it cleans up after them without costing performance.

**Deforestation.** Deforestation makes code 21% larger and programs 1.28× faster in geometric mean, up to 11×; 32 of the 36 programs get faster.
- **The growth is inherent to the transformation, and it buys speed.** Deforestation specializes producers for each consumer they are fused with and splits case analyses into one function per branch, trading code for intermediate data structures that are never allocated or inspected. The largest growth, 2.2×, comes with a 1.5× speedup, which our clean-up raises to 1.9× while reducing the growth to 1.5×.
- **Fusion occasionally makes code smaller (5 programs, by up to 8%).** Removing an intermediate structure removes the code that builds it and also the code that inspects it. That includes the failure paths of pattern matches and small helpers that only build or traverse the structure.

**Polyvariance.** The polyvariant analysis makes code 9% larger than the monovariant one and programs a further 1.02× faster, up to 1.29×. The growth is expected, since the analysis specializes functions per calling context.

In 5 programs, however, the polyvariant output is *smaller*, by up to 6%. This is less surprising than it may seem: lambda set specialization **[TODO cite: Brandon et al., PLDI 2023]** also specializes per call site, and it is precisely the specialized copies that enable further simplification.
- **More removal per copy:** each copy sees only the values that reach its own call sites, so dead-code elimination removes more from it than from a shared version.
- **Cheaper inlining:** a copy with a single call site is inlined and simplified in context, while a shared helper is inlined only when it is small.

These effects compound, and for small helpers with few callers they outweigh the duplication **[LISTING: `size-examples/SpecializedBranches.mls`, mono vs poly]**. Most size reductions still come from the monovariant optimization: where `dpopt` is smaller than `dnone`, 85% of the reduction is already achieved by `dopt`.

**Limitation: polyvariance twice.** Applied after deforestation, the polyvariant analysis makes code 12% larger than the monovariant one but no faster:
- **Speed:** the geometric mean is 1.00. Times are within ±5% on 34 of 36 programs; the other two are 5.5% and 13% slower **[TODO: investigate]**.
- **Worst case:** one program becomes 2.6× larger at the same speed.
- **Why:** deforestation has already specialized the code per fusion site, so a second polyvariant pass specializes those copies again. It multiplies them, while the speed benefit has already been collected.
- **Lesson:** a single polyvariant expansion per pipeline suffices, and later passes should analyze its output monovariantly; this is the `dopt` configuration. Since both modes are part of one analysis, the choice is a configuration decision, not a different analysis **[TODO: verify before claiming that the mode can be mixed per definition, even within one file]**. This leaves room for heuristics that specialize only where it pays off.

---

**Table 1.** Results relative to the baseline, geometric means over 36 programs. Size is minified and gzipped.

| configuration | code size | speedup | max speedup | programs faster / slower | max slowdown |
|---|---:|---:|---:|---:|---:|
| `opt` | 0.993 | 1.03× | 1.25× | 24 / 12 | 3.8% |
| `popt` | 1.085 | 1.05× | 1.62× | 28 / 8 | 3.0% |
| `dnone` | 1.213 | 1.28× | 11.1× | 32 / 4 | 1.7% |
| `dopt` | 1.175 | 1.33× | 20.4× | 33 / 3 | 2.3% |
| `dpopt` | 1.316 | 1.33× | 20.2× | 33 / 3 | 0.4% |

**Table 2.** One step at a time.

| step | comparison | code size | programs smaller | speedup | max slowdown |
|---|---|---:|---:|---:|---:|
| + our optimization | `opt` vs `none` | 0.993 | 26 | 1.03× | 3.8% |
| + our optimization after deforestation | `dopt` vs `dnone` | 0.968 | 31 | 1.04× | 6.5% |
| mono → poly | `popt` vs `opt` | 1.093 | 5 | 1.02× | 4.3% |
| mono → poly after deforestation | `dpopt` vs `dopt` | 1.120 | 5 | 1.00× | 13.4% |
| + deforestation | `dnone` vs `none` | 1.213 | 5 | 1.28× | 1.7% |

**Table 3.** The extreme cases cited in the text.

| case | comparison | code size | speedup |
|---|---|---:|---:|
| largest growth from deforestation | integer, `dnone` vs `none` | 2.21 | 1.48× |
| … after our clean-up | integer, `dopt` vs `none` | 1.50 | 1.90× |
| largest reduction by our clean-up | integer, `dopt` vs `dnone` | 0.68 | 1.28× |
| largest speedup from our clean-up | gcd, `dopt` vs `dnone` | 0.92 | 1.85× |
| largest shrink from fusion | fft, `dnone` vs `none` | 0.92 | 1.83× |
| largest shrink from polyvariance | pretty, `popt` vs `opt` | 0.94 | 1.01× |
| worst case of polyvariance twice | sphere, `dpopt` vs `dopt` | 2.56 | 1.01× |

**Figures to make:**
- **[FIG 1] Size–speed plane.**
  - Axes: x is code size relative to `none`, y is speedup, both log scale.
  - Marks: one arrow chain dnone → dopt → dpopt per program, with `opt` and `popt` as small markers.
  - What it should show: dnone → dopt goes left and slightly up (smaller, faster); dopt → dpopt goes right and stays level (bigger, not faster).
- **[FIG 2] Per-program speedup over `none`.** Grouped bars per configuration on a log y-axis, sorted by `dopt`, no error bars; gcd (20×) clipped and labelled.
