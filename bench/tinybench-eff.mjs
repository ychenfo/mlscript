// usage: node bench/tinybench-eff.mjs [--variants base,opt,other] [--only fft,tsp] [--time 1000] [--min-samples 10] [--iterations 20]
// benchmarks `main()` of every compiled `flowopt-<variant>/eff/*.mjs`; one tinybench suite per program,
// one task per variant, so the variants of the same program are directly comparable
import { Bench } from "tinybench"
import { readdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const compileDir = join(dirname(fileURLToPath(import.meta.url)),
  "../hkmc2/shared/src/test/mlscript-compile")

const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, all) =>
  a.startsWith("--") ? [...acc, [a.slice(2), all[i + 1]]] : acc, []))
const variants = (args.variants ?? "base,opt,other").split(",")
const only = args.only?.split(",")
const time = Number(args.time ?? 1000)
const minSamples = Number(args["min-samples"] ?? 10)
const fixedIterations = args.iterations === undefined ? undefined : Number(args.iterations)

// one sample count per program, shared by all its variants so they stay comparable:
// enough calls to fill `time` given the slowest variant's probe call, but at least `minSamples`
// (--iterations overrides this with an exact count); time 0 makes tinybench run exactly `n` calls
const benchOptionsFor = slowestProbeMs => {
  const n = fixedIterations ?? Math.max(minSamples, Math.ceil(time / slowestProbeMs))
  return { n, options: { time: 0, iterations: n, warmupTime: 0, warmupIterations: Math.ceil(n / 4) } }
}

const effDir = v => join(compileDir, `flowopt-${v}`, "eff")
const programsOf = v => readdirSync(effDir(v)).filter(f => f.endsWith(".mjs")).map(f => f.slice(0, -4))

const programs = [...new Set(variants.flatMap(programsOf))].sort().filter(p => !only || only.includes(p))

for (const prog of programs) {
  const mods = []
  for (const v of variants) {
    if (!programsOf(v).includes(prog)) continue
    const mod = (await import(pathToFileURL(join(effDir(v), prog + ".mjs")))).default
    const start = performance.now()
    mod.main() // probe call: fails early, and its duration (cold, so an overestimate) sizes the sample count
    mods.push({ v, mod, probeMs: performance.now() - start })
  }
  const { n, options } = benchOptionsFor(Math.max(...mods.map(m => m.probeMs)))
  const bench = new Bench(options)
  for (const { v, mod } of mods) bench.add(`${prog} [${v}]`, () => { mod.main() })
  console.log(`\n== ${prog} (${n} samples each)`)
  await bench.run()
  console.table(bench.table())
}
