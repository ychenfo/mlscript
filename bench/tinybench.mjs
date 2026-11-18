// benchmarks `main()` of the compiled flow-opt benchmark programs; run with --help for the flags
import { Bench } from "tinybench"
import { minify } from "terser"
import { gzipSync } from "node:zlib"
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const compileDir = join(dirname(fileURLToPath(import.meta.url)),
  "../hkmc2/shared/src/test/mlscript-compile")

const allVariants = ["dnone", "dopt", "dpopt", "none", "opt", "popt"]
const allForms = ["raw", "unmin", "min"]

const help = `usage: node --stack-size=16384 bench/tinybench.mjs [flags]

Times main() of the compiled benchmark programs, hkmc2/shared/src/test/mlscript-compile/flowopt-<variant>/{eff,nofib}/
<prog>.mjs (compile them first in sbt: fcs all eff/ nofib/). Each program gets one tinybench suite with one task per
(variant, form), so all the variants of a program are timed side by side. The output is console tables, one per
program, which bench/parse-results.mjs turns into a csv and bench/results-viewer.html reads directly.

flags:
  --variants <v,...>   variants to include (default: all), any of
                         dnone   deforestation, no flow-based opt
                         dopt    deforestation + mono flow-based opt
                         dpopt   deforestation + poly flow-based opt
                         none    neither
                         opt     mono flow-based opt
                         popt    poly flow-based opt
  --filter <p,...>     programs to include (default: all): a group (eff, nofib), a program (eff/fft),
                       or a bare name (fft, which matches it in any group)
  --forms <f,...>      forms each variant is timed in, in this order (default: raw):
                         raw     the compiled module
                         unmin   its terser output with names mangled only (no code changes)
                         min     its terser output compressed and mangled (terser also folds and removes code)
                       the terser outputs are written next to the module as <prog>.terse.<form>.mjs, so that its
                       relative imports keep working; their tasks are labelled "<variant> <form>"
  --time <ms>          minimum time per task in milliseconds (default: 1000)
  --min-samples <n>    minimum samples per task (default: 10); a task runs until both --time and --min-samples are
                       reached, so a slow program stops after n samples and a fast one after --time ms;
                       before timing, each task gets ceil(n/4) warmup calls, plus one probe call per module so that
                       a broken module fails before anything is timed
  --sizes              print byte sizes instead of timing: per variant, the raw module, its unmin and its min terser
                       outputs, each plain and gzipped (level 9); --forms, --time and --min-samples are ignored
  --help               print this message

programs that read input files (nofib/rsa, nofib/sorting, nofib/treejoin) get their contents as main(...) arguments,
read once from hkmc2/shared/src/test/mlscript/nofib/input/ before timing

notes:
  - run node with --stack-size=16384: some programs recurse deeply; if node segfaults instead of throwing a stack
    overflow, the OS stack of node's main thread is smaller than that (raise it with ulimit -s, or lower --stack-size)
  - the machine should be otherwise idle; results are rough with few samples

examples:
  node --stack-size=16384 bench/tinybench.mjs --forms raw,unmin,min
  node --stack-size=16384 bench/tinybench.mjs --filter eff --forms unmin,min --time 3000 --min-samples 20
  node --stack-size=16384 bench/tinybench.mjs --filter eff/fft --variants dnone,dpopt --min-samples 50
  node --stack-size=16384 bench/tinybench.mjs --sizes --filter nofib > sizes.txt
  node bench/parse-results.mjs sizes.txt --out sizes.csv`

// `--flag value` for the flags with values, `--flag` for the others
const valueFlags = ["variants", "filter", "forms", "time", "min-samples"]
const booleanFlags = ["sizes", "help"]
const args = {}
const argv = process.argv.slice(2)
for (let i = 0; i < argv.length; i++) {
  const flag = argv[i].startsWith("--") ? argv[i].slice(2) : null
  const fail = msg => { console.error(`${msg}\nrun with --help for the flags`); process.exit(1) }
  if (flag === null) fail(`unexpected argument: ${argv[i]}`)
  else if (booleanFlags.includes(flag)) args[flag] = true
  else if (valueFlags.includes(flag)) {
    if (i + 1 >= argv.length || argv[i + 1].startsWith("--")) fail(`--${flag} needs a value`)
    args[flag] = argv[++i]
  }
  else fail(`unknown flag: --${flag}`)
}
if (args.help) { console.log(help); process.exit(0) }

const listFlag = (name, all, dflt) => {
  const vals = (args[name] ?? dflt.join(",")).split(",")
  const unknown = vals.filter(v => !all.includes(v))
  if (unknown.length > 0) {
    console.error(`unknown --${name} ${unknown.join(",")}; expected some of ${all.join(",")}`)
    process.exit(1)
  }
  return vals
}
const numberFlag = (name, dflt) => {
  const n = Number(args[name] ?? dflt)
  if (!(n > 0)) { console.error(`--${name} must be a positive number, got ${args[name]}`); process.exit(1) }
  return n
}
const variants = listFlag("variants", allVariants, allVariants)
const forms = listFlag("forms", allForms, ["raw"])
const filter = args.filter?.split(",")
const time = numberFlag("time", 1000)
const minSamples = numberFlag("min-samples", 10)
const sizes = args.sizes === true

// without `concurrency: "task"`, tinybench samples a task until both `time` ms and `iterations` samples are reached
// (`iterations` is a floor, not a cap): a slow program stops right after `minSamples`, a fast one runs for `time` ms
// the same rule with `warmupTime: 0` makes exactly `warmupIterations` warmup calls
const benchOptions = { time, iterations: minSamples, warmupTime: 0, warmupIterations: Math.ceil(minSamples / 4) }
const benchDescription = `at least ${time} ms and ${minSamples} samples each`

// a program is `group/name`, e.g. `eff/fft`; its compiled module is `flowopt-<variant>/<group>/<name>.mjs`
const groups = ["eff", "nofib"]
const sourceFile = (v, prog) => join(compileDir, `flowopt-${v}`, prog + ".mjs")
const terseFile = (v, prog, form) => join(compileDir, `flowopt-${v}`, `${prog}.terse.${form}.mjs`)
const isTerseOutput = f => f.includes(".terse.")
// modules imported by the programs, without a `main` of their own
const libraries = ["NofibPrelude.mjs"]
// a group directory is only created when its sources were compiled, so a missing one has no programs
const programsOf = v => groups.flatMap(group => (existsSync(join(compileDir, `flowopt-${v}`, group))
    ? readdirSync(join(compileDir, `flowopt-${v}`, group)) : [])
  .filter(f => f.endsWith(".mjs") && !isTerseOutput(f) && !libraries.includes(f)).map(f => `${group}/${f.slice(0, -4)}`))

// programs whose `main` takes the contents of input files (the original nofib programs read them from files or stdin);
// the files are read once, before timing
const inputDir = join(dirname(fileURLToPath(import.meta.url)), "../hkmc2/shared/src/test/mlscript/nofib/input")
const inputFiles = {
  "nofib/rsa": ["rsa.faststdin"],
  "nofib/sorting": ["Main.hs"],
  "nofib/treejoin": ["1500.1", "1500.2"],
}
const mainArgsOf = prog => (inputFiles[prog] ?? []).map(f => readFileSync(join(inputDir, f), "utf8"))

// `--filter` tokens: `group/name` is one program, `group` is every program of that group, `name` is that program in any group
const selected = prog => {
  if (!filter) return true
  const [group, name] = prog.split("/")
  return filter.some(s => s === prog || s === group || s === name)
}
const programs = [...new Set(variants.flatMap(programsOf))].sort().filter(selected)
if (programs.length === 0) {
  console.error(`no compiled programs found under ${compileDir}/flowopt-<variant>/ for variants ${variants.join(",")}`
    + (filter ? ` and --filter ${filter.join(",")}` : "") + "; compile them first (fcs <variants> eff/ nofib/ in sbt)")
  process.exit(1)
}

// the two terser modes of nofib/runterse.fish (comments dropped), plus `module: true`: the outputs are ES modules,
// and without it terser keeps every top-level name verbatim, i.e. the long names of lifted functions and their copies
const terserOptions = {
  unmin: { module: true, compress: false, mangle: true, format: { comments: false } },
  min: { module: true, compress: {}, mangle: true, format: { comments: false } },
}
const terse = async (code, form) => (await minify(code, terserOptions[form])).code
const bytes = s => Buffer.byteLength(s)
const gzBytes = s => gzipSync(s, { level: 9 }).length

const printSizes = async prog => {
  const rows = {}
  for (const v of variants) {
    if (!programsOf(v).includes(prog)) continue
    const raw = readFileSync(sourceFile(v, prog), "utf8")
    const unmin = await terse(raw, "unmin")
    const min = await terse(raw, "min")
    rows[v] = {
      RAW: bytes(raw), "RAW.GZ": gzBytes(raw),
      UNMIN: bytes(unmin), "UNMIN.GZ": gzBytes(unmin),
      MIN: bytes(min), "MIN.GZ": gzBytes(min),
    }
  }
  console.log(`\n== ${prog}`)
  console.table(rows)
}

// the benchmarked entries of a program: each variant in each of the --forms, labelled `<variant>` for the compiled
// module itself and `<variant> <form>` for a terser output
const entriesOf = async prog => {
  const entries = []
  for (const v of variants) {
    if (!programsOf(v).includes(prog)) continue
    for (const form of forms) {
      if (form === "raw") entries.push({ label: v, file: sourceFile(v, prog) })
      else {
        const file = terseFile(v, prog, form)
        writeFileSync(file, await terse(readFileSync(sourceFile(v, prog), "utf8"), form))
        entries.push({ label: `${v} ${form}`, file })
      }
    }
  }
  return entries
}

for (const prog of programs) {
  if (sizes) { await printSizes(prog); continue }

  const mainArgs = mainArgsOf(prog)
  const mods = []
  for (const { label, file } of await entriesOf(prog)) {
    const mod = (await import(pathToFileURL(file))).default
    mod.main(...mainArgs) // probe call: a broken entry fails before any of the program's variants is timed
    mods.push({ label, mod })
  }
  const bench = new Bench(benchOptions)
  for (const { label, mod } of mods) bench.add(`${prog} [${label}]`, () => { mod.main(...mainArgs) })
  console.log(`\n== ${prog} (${benchDescription})`)
  await bench.run()
  console.table(bench.table())
}
