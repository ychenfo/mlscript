// usage: node bench/tinybench.mjs [--variants dnone,dopt,none,opt] [--only eff,nofib/ansi]
//          [--time 1000] [--min-samples 10] [--bench-min] [--sizes]
// e.g. node --stack-size=16384 bench/tinybench.mjs --only eff --bench-min --time 1000 --min-samples 1
// e.g. node --stack-size=16384 bench/tinybench.mjs --only eff/fft --variants dnone,opt
// e.g. node --stack-size=16384 bench/tinybench.mjs --only eff,nofib/ansi --time 3000 --bench-min
// e.g. node --stack-size=16384 bench/tinybench.mjs --sizes --only nofib
// e.g. node --stack-size=16384 bench/tinybench.mjs --only eff/fft --min-samples 50
// benchmarks `main()` of every compiled `flowopt-<variant>/{eff,nofib}/*.mjs`; one tinybench suite per program,
// one task per variant, so the variants of the same program are directly comparable
//   --bench-min  also benchmarks the terser outputs (written next to the sources as <prog>.terse.*.mjs,
//                like nofib/runterse.fish does, so that their relative imports keep working)
//   --sizes      instead of timing, prints per-variant byte sizes (raw / terser mangle only / terser compress+mangle,
//                each plain and gzipped), the same columns as nofib/runterse.fish
//   --only       programs to run: a group (eff, nofib), a program as group/name (eff/fft), or a bare name (fft)
import { Bench } from "tinybench"
import { minify } from "terser"
import { gzipSync } from "node:zlib"
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const compileDir = join(dirname(fileURLToPath(import.meta.url)),
  "../hkmc2/shared/src/test/mlscript-compile")

const args = Object.fromEntries(process.argv.slice(2).reduce((acc, a, i, all) =>
  a.startsWith("--") ? [...acc, [a.slice(2), all[i + 1]]] : acc, []))
const variants = (args.variants ?? "dnone,dopt,none,opt").split(",")
const only = args.only?.split(",")
const time = Number(args.time ?? 1000)
const minSamples = Number(args["min-samples"] ?? 10)
const benchMin = "bench-min" in args
const sizes = "sizes" in args

// without `concurrency: "task"`, tinybench samples a task until both `time` ms and `iterations` samples are reached
// (`iterations` is a floor, not a cap): a slow program stops right after `minSamples`, a fast one runs for `time` ms
// the same rule with `warmupTime: 0` makes exactly `warmupIterations` warmup calls
const benchOptions = { time, iterations: minSamples, warmupTime: 0, warmupIterations: Math.ceil(minSamples / 4) }
const benchDescription = `at least ${time} ms and ${minSamples} samples each`

// a program is `group/name`, e.g. `eff/fft`; its compiled module is `flowopt-<variant>/<group>/<name>.mjs`
const groups = ["eff", "nofib"]
const sourceFile = (v, prog) => join(compileDir, `flowopt-${v}`, prog + ".mjs")
const terseFile = (v, prog, mode) => join(compileDir, `flowopt-${v}`, `${prog}.terse.${mode}.mjs`)
const isTerseOutput = f => f.includes(".terse.")
// a group directory is only created when its sources were compiled, so a missing one has no programs
const programsOf = v => groups.flatMap(group => (existsSync(join(compileDir, `flowopt-${v}`, group))
    ? readdirSync(join(compileDir, `flowopt-${v}`, group)) : [])
  .filter(f => f.endsWith(".mjs") && !isTerseOutput(f)).map(f => `${group}/${f.slice(0, -4)}`))

// `--only` tokens: `group/name` is one program, `group` is every program of that group, `name` is that program in any group
const selected = prog => {
  if (!only) return true
  const [group, name] = prog.split("/")
  return only.some(s => s === prog || s === group || s === name)
}
const programs = [...new Set(variants.flatMap(programsOf))].sort().filter(selected)
if (programs.length === 0) {
  console.error(`no compiled programs found under ${compileDir}/flowopt-<variant>/ for variants ${variants.join(",")}`
    + (only ? ` and --only ${only.join(",")}` : "") + "; compile them first (ctest)")
  process.exit(1)
}

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
        const file = terseFile(v, prog, mode)
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
    mod.main() // probe call: a broken entry fails before any of the program's variants is timed
    mods.push({ label, mod })
  }
  const bench = new Bench(benchOptions)
  for (const { label, mod } of mods) bench.add(`${prog} [${label}]`, () => { mod.main() })
  console.log(`\n== ${prog} (${benchDescription})`)
  await bench.run()
  console.table(bench.table())
}
