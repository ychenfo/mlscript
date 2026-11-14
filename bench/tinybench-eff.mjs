// usage: node bench/tinybench-eff.mjs [--variants base,opt,other] [--only fft,tsp]
//          [--time 1000] [--min-samples 10] [--iterations 20] [--bench-min] [--sizes]
// benchmarks `main()` of every compiled `flowopt-<variant>/eff/*.mjs`; one tinybench suite per program,
// one task per variant, so the variants of the same program are directly comparable
//   --bench-min  also benchmarks the terser outputs (written next to the sources as <prog>.terse.*.mjs,
//                like nofib/runterse.fish does, so that their relative imports keep working)
//   --sizes      instead of timing, prints per-variant byte sizes (raw / terser mangle only / terser compress+mangle,
//                each plain and gzipped), the same columns as nofib/runterse.fish
import { Bench } from "tinybench"
import { minify } from "terser"
import { gzipSync } from "node:zlib"
import { readdirSync, readFileSync, writeFileSync } from "node:fs"
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
const benchMin = "bench-min" in args
const sizes = "sizes" in args

// one sample count per program, shared by all its variants so they stay comparable:
// enough calls to fill `time` given the slowest variant's probe call, but at least `minSamples`
// (--iterations overrides this with an exact count); time 0 makes tinybench run exactly `n` calls
const benchOptionsFor = slowestProbeMs => {
  const n = fixedIterations ?? Math.max(minSamples, Math.ceil(time / slowestProbeMs))
  return { n, options: { time: 0, iterations: n, warmupTime: 0, warmupIterations: Math.ceil(n / 4) } }
}

const effDir = v => join(compileDir, `flowopt-${v}`, "eff")
const sourceFile = (v, prog) => join(effDir(v), prog + ".mjs")
const isTerseOutput = f => f.includes(".terse.")
const programsOf = v => readdirSync(effDir(v))
  .filter(f => f.endsWith(".mjs") && !isTerseOutput(f)).map(f => f.slice(0, -4))

const programs = [...new Set(variants.flatMap(programsOf))].sort().filter(p => !only || only.includes(p))

// same two terser modes as nofib/runterse.fish (no `module`/`toplevel`, comments dropped)
const terserModes = {
  uncompressed: { compress: false, mangle: true, format: { comments: false } },
  compressed: { compress: {}, mangle: true, format: { comments: false } },
}
const terse = async code => ({
  uncompressed: (await minify(code, terserModes.uncompressed)).code,
  compressed: (await minify(code, terserModes.compressed)).code,
})
const bytes = s => Buffer.byteLength(s)
const gzBytes = s => gzipSync(s, { level: 9 }).length

const printSizes = async prog => {
  const rows = {}
  for (const v of variants) {
    if (!programsOf(v).includes(prog)) continue
    const raw = readFileSync(sourceFile(v, prog), "utf8")
    const { uncompressed, compressed } = await terse(raw)
    rows[v] = {
      RAW: bytes(raw), "RAW.GZ": gzBytes(raw),
      UNMIN: bytes(uncompressed), "UNMIN.GZ": gzBytes(uncompressed),
      MIN: bytes(compressed), "MIN.GZ": gzBytes(compressed),
    }
  }
  const baseline = Object.values(rows)[0]
  for (const row of Object.values(rows)) row["MIN.GZ vs first"] = (row["MIN.GZ"] / baseline["MIN.GZ"]).toFixed(2)
  console.log(`\n== ${prog}`)
  console.table(rows)
}

// the benchmarked entries of a program: each variant's compiled module, plus its terser outputs with --bench-min
const entriesOf = async prog => {
  const entries = []
  for (const v of variants) {
    if (!programsOf(v).includes(prog)) continue
    entries.push({ label: v, file: sourceFile(v, prog) })
    if (benchMin) {
      const outputs = await terse(readFileSync(sourceFile(v, prog), "utf8"))
      for (const [mode, code] of Object.entries(outputs)) {
        const file = join(effDir(v), `${prog}.terse.${mode}.mjs`)
        writeFileSync(file, code)
        entries.push({ label: `${v} ${mode === "compressed" ? "min" : "unmin"}`, file })
      }
    }
  }
  return entries
}

for (const prog of programs) {
  if (sizes) { await printSizes(prog); continue }

  const mods = []
  for (const { label, file } of await entriesOf(prog)) {
    const mod = (await import(pathToFileURL(file))).default
    const start = performance.now()
    mod.main() // probe call: fails early, and its duration (cold, so an overestimate) sizes the sample count
    mods.push({ label, mod, probeMs: performance.now() - start })
  }
  const { n, options } = benchOptionsFor(Math.max(...mods.map(m => m.probeMs)))
  const bench = new Bench(options)
  for (const { label, mod } of mods) bench.add(`${prog} [${label}]`, () => { mod.main() })
  console.log(`\n== ${prog} (${n} samples each)`)
  await bench.run()
  console.table(bench.table())
}
