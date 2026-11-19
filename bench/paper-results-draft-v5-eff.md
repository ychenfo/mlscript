# Draft v5-eff: code size and running time, the 12 eff programs only

Data: sizes measured on the Mac (`node bench/tinybench.mjs --sizes`, 2026-11-18 build), minified (terser
compress + mangle) and gzipped; timings from `bench/time-win-11.19.3.txt` (Windows; 11.18.2 with fft, zern,
minimax, constraints and puzzle replaced by their 11.19 reruns), MIN output timed, mean times only.
Only the 12 `eff/` programs; `opt`/`popt` are compared with `none`, `dopt`/`dpopt` with `dnone`.


**Setup.** We evaluate our optimization on two kinds of input: the benchmark programs as written, and the same programs after deforestation **[TODO cite]**, as an example of code produced by an aggressive program transformation. We compare the following configurations:
- `opt` and `popt`: our optimization with the monovariant and polyvariant analysis, applied to the programs as written and compared with the baseline pipeline `none` **[TODO: what the baseline already includes]**;
- `dopt` and `dpopt`: the same, applied after deforestation and compared with deforestation alone (`dnone`). Deforestation is itself polyvariant: it specializes each producer for each consumer it is fused with.

The benchmarks are 12 SML programs **[TODO cite]**. Code size is the minified and gzipped JavaScript output. Running time is the mean time of one run of the same minified code on Node.js **[TODO version, machine]**, over at least 3 s and 20 runs per program.

**Overall.** The monovariant optimization makes programs smaller on both kinds of input, and faster on the programs as written (Table 1). On the programs as written, they become 0.9% smaller and 1.03× faster in geometric mean; after deforestation, 2.2% smaller at unchanged speed on average (1.00×; **[TODO zern]**: 1.01× without it). The polyvariant optimization gives the largest speedup on the programs as written, 1.05×, at the cost of 12.6% larger code. After deforestation it gives 1.01×, while its code is 12% larger than the monovariant one's (Table 2).

**Programs as written.** On hand-written programs, the monovariant optimization is a free improvement. Code never grows by more than 0.5% and shrinks for 10 of the 12 programs. The speedup is concentrated in the programs where the analysis finds something to remove: three programs run at least 5% faster, none of the others changes by more than 5% either way, and no program is more than 1.6% slower. A modest average is expected: the baseline already inlines and simplifies, and hand-written programs contain little dead code.

**After deforestation.** The same analysis removes more from deforested code: `dopt` is smaller than `dnone` on 9 of the 12 programs, by up to 8%. On average it leaves the speed unchanged. One program runs 1.10× faster, and apart from one program whose timing is unstable **[TODO zern, see below]**, no program is more than 3.4% slower. Deforestation leaves behind code that the baseline's clean-up passes cannot remove:
- parameters threaded through the fused functions that are dead at some or all call sites;
- closures that are created only to be applied once.

Recognizing such code requires knowing which values reach which call sites across function boundaries, which is exactly what our flow analysis computes. In five of the programs, references to threaded parameters roughly halve. Our optimization thus cleans up after aggressive transformations like deforestation without costing performance.

**Polyvariance.** On the programs as written, the polyvariant analysis makes code 14% larger than the monovariant one and programs a further 1.02× faster. The growth is expected, since the analysis specializes functions per calling context.

**Limitation: polyvariance twice.** Applied after deforestation, the polyvariant analysis makes code 12% larger than the monovariant one, for a geometric mean speedup of only 1.01× (0.99× without zern):
- **Speed:** times are within ±5% on 9 of 12 programs. Two of the others are 5.5% and 13% slower **[TODO: investigate]**, and the program with unstable timing is faster.
- **Worst case:** one program becomes 1.5× larger and 5.5% slower.
- **Why:** deforestation has already specialized the code per fusion site, so a second polyvariant pass specializes those copies again. It multiplies them, while the speed benefit has already been collected.
- **Lesson:** a single polyvariant expansion per pipeline suffices, and later passes should analyze its output monovariantly; this is the `dopt` configuration. Since both modes are part of one analysis, the choice is a configuration decision, not a different analysis **[TODO: verify before claiming that the mode can be mixed per definition, even within one file]**. This leaves room for heuristics that specialize only where it pays off.

**[TODO zern]** After deforestation, our optimization only removes an unused parameter from a few of zern's functions, yet the minified `dopt` version measures 15% slower than `dnone`, while the unminified one is only 1% slower. More generally, zern's minified and unminified versions of the same configuration differ in time by up to 20%, more than for any other program. With only 12 programs, zern moves the eff geometric means by about 1 point: without it, `dopt` vs `dnone` is 1.015× and `dpopt` vs `dopt` 0.988×. Decide: footnote it, rerun it alone, or drop it.

---

**Table 1.** Our optimization relative to its input, geometric means over the 12 eff programs. Size is minified and gzipped.

| configuration | compared with | code size | programs smaller | speedup | programs faster / slower | max slowdown |
|---|---|---:|---:|---:|---:|---:|
| `opt` | `none` | 0.991 | 10 | 1.033× | 7 / 5 | 1.6% |
| `popt` | `none` | 1.126 | 2 | 1.050× | 9 / 3 | 2.0% |
| `dopt` | `dnone` | 0.978 | 9 | 1.002× | 9 / 3 | 14.8% (zern; next 3.4%) |
| `dpopt` | `dnone` | 1.097 | 1 | 1.014× | 8 / 4 | 3.8% |

**Table 2.** Polyvariant relative to monovariant.

| input | comparison | code size | programs smaller | speedup | max slowdown |
|---|---|---:|---:|---:|---:|
| programs as written | `popt` vs `opt` | 1.137 | 2 | 1.017× | 4.3% |
| after deforestation | `dpopt` vs `dopt` | 1.122 | 0 | 1.012× | 13.4% |

**Table 3.** The individual cases cited in the text.

| case | comparison | code size | speedup |
|---|---|---:|---:|
| largest reduction by our optimization | tardis, `dopt` vs `dnone` | 0.92 | 1.02× |
| worst case of polyvariance twice | tardis, `dpopt` vs `dopt` | 1.48 | 0.95× |

**Figures to make:**
- **[FIG 1] Size–speed plane, two panels.**
  - Left panel: the programs as written, relative to `none`. Right panel: after deforestation, relative to `dnone`.
  - Axes: x is code size, y is speedup, both relative to the panel's input.
  - Marks: per program, an arrow from the monovariant point to the polyvariant one (`opt` → `popt` on the left, `dopt` → `dpopt` on the right).
  - What it should show: the monovariant points sit at or left of 1 and mostly above 1. The arrows point right; on the right panel they stay level (bigger, not faster).
- **[FIG 2] Per-program speedup bars.** The four configurations, each relative to its own input, no error bars.
