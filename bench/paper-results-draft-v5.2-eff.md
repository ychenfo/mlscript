# Draft v5.2-eff: code size and running time, the 12 eff programs only

Data: sizes measured on the Mac (`node bench/tinybench.mjs --sizes`, 2026-11-18 build), minified (terser
compress + mangle) and gzipped; timings from `bench/time-win-11.19.3.2.txt` (Windows; 11.18.2 with fft and
minimax from the 11.19.1/2 reruns and zern from the 11.19.4 rerun), MIN output timed, mean times only.
Only the 12 `eff/` programs; `opt`/`popt` are compared with `none`, `dopt`/`dpopt` with `dnone`.
Internal note: zern's times vary by up to 30% between runs of identical code on this machine; with only 12
programs, the zern run used decides the `dopt` vs `dnone` speedup (1.00× with the 11.19.1 run, 1.03× with 11.19.4).


**Setup.** We evaluate our optimization on two kinds of input: the benchmark programs as written, and the same programs after deforestation **[TODO cite]**, as an example of code produced by an aggressive program transformation. We compare the following configurations:
- `opt` and `popt`: our optimization with the monovariant and polyvariant analysis, applied to the programs as written and compared with the baseline pipeline `none` **[TODO: what the baseline already includes]**;
- `dopt` and `dpopt`: the same, applied after deforestation and compared with deforestation alone (`dnone`). Deforestation is itself polyvariant: it specializes each producer for each consumer it is fused with.

The benchmarks are 12 SML programs **[TODO cite]**. Code size is the minified and gzipped JavaScript output. Running time is the mean time of one run of the same minified code on Node.js **[TODO version, machine]**, over at least 3 s and 20 runs per program.

**Overall.** The monovariant optimization makes programs both smaller and faster on both kinds of input (Table 1). On the programs as written, they become 0.9% smaller and 1.04× faster in geometric mean; after deforestation, 2.2% smaller and 1.03× faster. The polyvariant optimization gives the largest speedup on the programs as written, 1.06×, at the cost of 12.6% larger code. After deforestation it is just as fast as the monovariant one (1.025× against 1.026×), while its code is 12% larger (Table 2).

**Programs as written.** On hand-written programs, the monovariant optimization is a free improvement. Code never grows by more than 0.5% and shrinks for 10 of the 12 programs. The speedup is concentrated in the programs where the analysis finds something to remove: four programs run at least 5% faster, none of the others changes by more than 5% either way, and no program is more than 1.6% slower. A modest average is expected: the baseline already inlines and simplifies, and hand-written programs contain little dead code.

**After deforestation.** The same analysis removes more from deforested code: `dopt` is smaller than `dnone` on 9 of the 12 programs, by up to 8%, and 1.03× faster in geometric mean. Two programs run at least 5% faster, and no program is more than 3.4% slower. Deforestation leaves behind code that the baseline's clean-up passes cannot remove:
- parameters threaded through the fused functions that are dead at some or all call sites;
- closures that are created only to be applied once.

Our optimization thus cleans up after aggressive transformations like deforestation without costing performance.

**Polyvariance.** On the programs as written, the polyvariant analysis makes code 14% larger than the monovariant one and programs a further 1.02× faster. The growth is expected, since the analysis specializes functions per calling context.

**Limitation: polyvariance twice.** Applied after deforestation, the polyvariant analysis makes code 12% larger than the monovariant one but no faster:
- **Speed:** the geometric mean is 1.00. Times are within ±5% on 9 of 12 programs; two of the others are 5.5% and 13% slower **[TODO: investigate]**, and one is 12% faster.
- **Worst case:** one program becomes 1.5× larger and 5.5% slower.
- **Why:** deforestation has already specialized the code per fusion site, so a second polyvariant pass specializes those copies again. It multiplies them, while the speed benefit has already been collected.
- **Lesson:** a single polyvariant expansion per pipeline suffices, and later passes should analyze its output monovariantly; this is the `dopt` configuration. Since both modes are part of one analysis, the choice is a configuration decision, not a different analysis **[TODO: verify before claiming that the mode can be mixed per definition, even within one file]**. This leaves room for heuristics that specialize only where it pays off.

---

**Table 1.** Our optimization relative to its input, geometric means over the 12 eff programs. Size is minified and gzipped.

| configuration | compared with | code size | programs smaller | speedup | programs faster / slower | max slowdown |
|---|---|---:|---:|---:|---:|---:|
| `opt` | `none` | 0.991 | 10 | 1.039× | 7 / 5 | 1.6% |
| `popt` | `none` | 1.126 | 2 | 1.058× | 9 / 3 | 2.0% |
| `dopt` | `dnone` | 0.978 | 9 | 1.026× | 10 / 2 | 3.4% |
| `dpopt` | `dnone` | 1.097 | 1 | 1.025× | 8 / 4 | 3.8% |

**Table 2.** Polyvariant relative to monovariant.

| input | comparison | code size | programs smaller | speedup | max slowdown |
|---|---|---:|---:|---:|---:|
| programs as written | `popt` vs `opt` | 1.137 | 2 | 1.018× | 4.3% |
| after deforestation | `dpopt` vs `dopt` | 1.122 | 0 | 0.999× | 13.4% |

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
