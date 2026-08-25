import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { spawnSync } from "node:child_process";

const pdfPath = "H:\\Мой диск\\Taras\\Books\\ПАБВ_підручник_Завялов_2024.pdf";
const outPath = join(process.cwd(), "tmp", "biotech-pdf-outline.txt");

const python = process.env.CODEX_PYTHON || "C:\\Users\\Taras\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe";

const script = String.raw`
import re
from pathlib import Path
import pdfplumber

pdf_path = Path(r"${pdfPath}")
lines = []

with pdfplumber.open(pdf_path) as pdf:
    lines.append(f"pages: {len(pdf.pages)}")
    lines.append("")
    for idx, page in enumerate(pdf.pages[:35], start=1):
        text = page.extract_text(x_tolerance=1, y_tolerance=3) or ""
        lines.append(f"--- page {idx} ---")
        lines.extend(text.splitlines()[:80])
        lines.append("")

Path(r"${outPath}").write_text("\n".join(lines), encoding="utf-8")
print(out_path := r"${outPath}")
`;

await mkdir(dirname(outPath), { recursive: true });
const result = spawnSync(python, ["-c", script], {
  cwd: process.cwd(),
  encoding: "utf8",
});

if (result.status !== 0) {
  process.stderr.write(result.stderr || result.stdout);
  process.exit(result.status || 1);
}

process.stdout.write(result.stdout);
