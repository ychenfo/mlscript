#!/usr/bin/env fish

# Check dependencies
for cmd in terser gzip wc
    if not command -q $cmd
        echo "Error: $cmd not found"
        exit 1
    end
end

set -l files *.mjs

# Remove previously generated files from the input list
set -l inputs
for file in $files
    if test -f "$file"; and not string match -q '*.terse.*.mjs' "$file"
        set -a inputs "$file"
    end
end

if test (count $inputs) -eq 0
    echo "No input .mjs files found."
    exit 0
end

set -l totals 0 0 0 0 0 0

printf "%-30s %10s %10s %10s %10s %10s %10s\n" \
    "FILE" "RAW" "RAW.GZ" "UNMIN" "UNMIN.GZ" "MIN" "MIN.GZ"

for file in $inputs
    set -l base (string replace -r '\.mjs$' '' "$file")

    set -l unmin "$base.terse.uncompressed.mjs"
    set -l min "$base.terse.compressed.mjs"

    # Terser without compression
    terser "$file" --mangle --comments false \
        --output "$unmin"
    or exit 1

    # Terser with compression
    terser "$file" --compress --mangle --comments false \
        --output "$min"
    or exit 1

    # Gzip (deterministic headers)
    gzip -n -9 -c "$file" > "$file.gz"
    or exit 1

    gzip -n -9 -c "$unmin" > "$unmin.gz"
    or exit 1

    gzip -n -9 -c "$min" > "$min.gz"
    or exit 1

    # File sizes
    set -l sizes
    for f in "$file" "$file.gz" "$unmin" "$unmin.gz" "$min" "$min.gz"
        set -a sizes (wc -c < "$f" | string trim)
    end

    printf "%-30s %10s %10s %10s %10s %10s %10s\n" \
        "$file" $sizes

    for i in (seq 1 6)
        set totals[$i] (math "$totals[$i] + $sizes[$i]")
    end
end

echo ""
printf "%-30s %10s %10s %10s %10s %10s %10s\n" \
    "TOTAL" $totals

echo ""
echo "Processed "(count $inputs)" files."
echo ""
echo "Columns:"
echo "RAW       = Original JavaScript"
echo "RAW.GZ    = Original gzip"
echo "UNMIN     = Terser without compression"
echo "UNMIN.GZ  = Uncompressed-mode gzip"
echo "MIN       = Terser with compression"
echo "MIN.GZ    = Compressed-mode gzip"
