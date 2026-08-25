import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { spawnSync } from "node:child_process";

const pdfPath = "H:\\Мой диск\\Taras\\Books\\ПАБВ_підручник_Завялов_2024.pdf";
const outPath = join(process.cwd(), "tmp", "biotech-figure-inventory.json");
const python = process.env.CODEX_PYTHON || "C:\\Users\\Taras\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe";

const script = String.raw`
import json
import re
from pathlib import Path
import pdfplumber

pdf_path = Path(r"${pdfPath}")
items = []
caption_re = re.compile(r"(Рис\.\s*\d+(?:\.\d+)*\.?\s+.+)")

with pdfplumber.open(pdf_path) as pdf:
    for page_index, page in enumerate(pdf.pages, start=1):
        text = page.extract_text(x_tolerance=1, y_tolerance=3) or ""
        lines = [line.strip() for line in text.splitlines() if line.strip()]
        for idx, line in enumerate(lines):
            match = caption_re.search(line)
            if not match:
                continue
            caption = match.group(1)
            # Join wrapped caption continuation lines that do not start a new numbered item.
            next_idx = idx + 1
            while next_idx < len(lines):
                nxt = lines[next_idx]
                if re.match(r"^(Рис\.|Таблиця|Розділ|\d+(?:\.\d+)+\.|Запитання)", nxt):
                    break
                if len(caption) > 240:
                    break
                caption += " " + nxt
                next_idx += 1

            num = re.search(r"Рис\.\s*([\d.]+)", caption)
            chapter = int(num.group(1).split(".")[0]) if num else None
            items.append({
                "page": page_index,
                "chapter": chapter,
                "number": num.group(1).rstrip(".") if num else "",
                "caption": caption,
            })

Path(r"${outPath}").write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"{len(items)} figures -> {r'${outPath}'}")
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
