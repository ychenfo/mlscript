// usage: node bench/parse-results.mjs <results.txt> [--out results.csv] [--no-median]
// parses the console output of bench/tinybench.mjs (the `--sizes` tables and the timing tables, in one file or both
// concatenated) into one tidy csv with a row per (program, variant, form):
//   program,variant,form,bytes,gz_bytes,lat_avg_ns,lat_avg_err_pct,lat_med_ns,lat_med_err_ns
// form is `raw` (the compiled module), `unmin` (terser mangle only) or `min` (terser compress+mangle);
// bytes/gz_bytes come from the RAW/UNMIN/MIN and RAW.GZ/UNMIN.GZ/MIN.GZ size columns, the latencies from the timing
// tables; a cell is empty when the input has no such measurement. latency avg is `value ± relative %`, median is
// `value ± absolute ns`. throughput and sample counts are dropped
//   --no-median  also drops the lat_med_* columns
import { readFileSync, writeFileSync } from "node:fs"

const args = process.argv.slice(2)
const flag = name => args.includes(name)
const option = name => args.includes(name) ? args[args.indexOf(name) + 1] : undefined
const input = args.find((a, i) => !a.startsWith("--") && args[i - 1] !== "--out")
if (!input) {
  console.error("usage: node bench/parse-results.mjs <results.txt> [--out results.csv] [--no-median]")
  process.exit(1)
}
const withMedian = !flag("--no-median")

const sizeForms = { raw: ["RAW", "RAW.GZ"], unmin: ["UNMIN", "UNMIN.GZ"], min: ["MIN", "MIN.GZ"] }

const strip = cell => cell.trim().replace(/^'|'$/g, "")
// `'46071333 ± 0.63%'` -> [46071333, 0.63]; `'46004291 ± 668437'` -> [46004291, 668437]
const withError = cell => {
  const m = strip(cell).match(/^([\d.]+) ± ([\d.]+)%?$/)
  if (!m) throw new Error(`cannot parse measurement cell: ${cell}`)
  return [Number(m[1]), Number(m[2])]
}

// rows keyed by program, variant and form, in order of first appearance
const rows = new Map()
const rowOf = (program, variant, form) => {
  const key = `${program}|${variant}|${form}`
  if (!rows.has(key)) rows.set(key, { program, variant, form })
  return rows.get(key)
}

const lines = readFileSync(input, "utf8").split("\n")
let program = null
let header = null
for (const line of lines) {
  const section = line.match(/^== (\S+)/)
  if (section) { program = section[1]; header = null; continue }
  if (!line.startsWith("│") || program === null) continue
  const cells = line.split("│").slice(1, -1)
  if (cells[0].trim() === "(index)") { header = cells.map(c => c.trim()); continue }
  if (header === null) throw new Error(`table row before its header in ${program}: ${line}`)
  const cell = name => cells[header.indexOf(name)]

  if (header.includes("Task name")) {
    // `eff/fft [dnone unmin]` -> variant dnone, form unmin; no suffix means the compiled module itself
    const task = strip(cell("Task name")).match(/^(\S+) \[(\S+)(?: (unmin|min))?\]$/)
    if (!task) throw new Error(`cannot parse task name: ${cell("Task name")}`)
    const row = rowOf(task[1], task[2], task[3] ?? "raw")
    ;[row.lat_avg_ns, row.lat_avg_err_pct] = withError(cell("Latency avg (ns)"))
    ;[row.lat_med_ns, row.lat_med_err_ns] = withError(cell("Latency med (ns)"))
  } else if (header.includes("RAW")) {
    const variant = cells[0].trim()
    for (const [form, [bytes, gz]] of Object.entries(sizeForms)) {
      const row = rowOf(program, variant, form)
      row.bytes = Number(cell(bytes))
      row.gz_bytes = Number(cell(gz))
    }
  } else throw new Error(`unknown table header in ${program}: ${header.join(",")}`)
}

const columns = ["program", "variant", "form", "bytes", "gz_bytes", "lat_avg_ns", "lat_avg_err_pct",
  ...(withMedian ? ["lat_med_ns", "lat_med_err_ns"] : [])]
const csv = [columns.join(","), ...[...rows.values()].map(r => columns.map(c => r[c] ?? "").join(","))].join("\n") + "\n"

const out = option("--out")
if (out) writeFileSync(out, csv)
else process.stdout.write(csv)
