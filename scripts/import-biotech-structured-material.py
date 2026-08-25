from __future__ import annotations

import json
import re
from pathlib import Path

import pdfplumber


PDF_PATH = Path(r"H:\Мой диск\Taras\Books\ПАБВ_підручник_Завялов_2024.pdf")
COURSE_DIR = Path("src/content/courses/uk/bioprocess-engineering")
FIGURE_DIR = Path("public/images/courses/bioprocess-engineering")
INVENTORY_PATH = Path("tmp/biotech-figure-inventory.json")

PAGE_RANGES = {
    "chapter-01-general-information": (1, 21, 43),
    "chapter-02-hydraulics-basics": (2, 44, 73),
    "chapter-03-heterogeneous-systems-separation": (3, 74, 119),
    "chapter-04-membrane-separation": (4, 120, 134),
    "chapter-05-mixing": (5, 135, 170),
    "chapter-06-heat-transfer-basics": (6, 171, 181),
    "chapter-07-heating-cooling": (7, 182, 201),
    "chapter-08-evaporation": (8, 202, 223),
    "chapter-09-condensation": (9, 224, 232),
    "chapter-10-mass-transfer-basics": (10, 233, 255),
    "chapter-11-drying": (11, 256, 309),
    "chapter-12-distillation": (12, 310, 341),
    "chapter-13-sorption-processes": (13, 342, 358),
    "chapter-14-extraction": (14, 359, 400),
    "chapter-15-crystallization": (15, 401, 442),
    "chapter-16-size-reduction": (16, 443, 456),
    "chapter-17-bulk-material-sorting": (17, 457, 465),
    "chapter-18-pressing": (18, 466, 479),
    "chapter-19-bioengineering-processes": (19, 481, 498),
    "chapter-20-mixing-during-cultivation": (20, 499, 506),
    "chapter-21-mass-transfer-and-air-sterilization": (21, 507, 548),
    "chapter-22-foaming-product-recovery-membranes": (22, 549, 584),
}


def normalize_spaces(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def clean_extracted_text(text: str) -> list[str]:
    lines: list[str] = []
    for raw in text.splitlines():
        line = normalize_spaces(raw)
        if not line:
            continue
        if re.fullmatch(r"\d+", line):
            continue
        if line.startswith("ІНЖИНІРИНГ БІОПРОЦЕСІВ"):
            continue
        if line.startswith("Модуль 1. Процеси та апарати"):
            continue
        if line in {"ЧАСТИНА 1. ЗАГАЛЬНІ ПРОЦЕСИ", "ЧАСТИНА 2. СПЕЦІАЛЬНІ ПРОЦЕСИ"}:
            lines.append(line)
            continue
        lines.append(line)

    merged: list[str] = []
    for line in lines:
        if merged and merged[-1].endswith("-"):
            merged[-1] = merged[-1][:-1] + line
        else:
            merged.append(line)
    return merged


def is_heading(line: str) -> bool:
    return bool(
        re.match(r"^(Розділ\s+\d+\.|Частина\s+\d+\.|\d+\.\d+(?:\.\d+)*\.\s+)", line)
        or line.startswith("Запитання для самоконтролю")
    )


def heading_markdown(line: str) -> str:
    if re.match(r"^Розділ\s+\d+\.", line):
        return f"### {line}"
    if re.match(r"^(Частина\s+\d+\.|Запитання для самоконтролю)", line):
        return f"### {line}"
    if re.match(r"^\d+\.\d+\.\s+", line):
        return f"### {line}"
    if re.match(r"^\d+\.\d+\.\d+\.\s+", line):
        return f"#### {line}"
    return f"#### {line}"


def looks_like_formula(line: str) -> bool:
    if len(line) > 180:
        return False
    if re.search(r"[=∑√∆Δμρτπληξαβγφω]", line):
        return True
    if re.search(r"\b(d|p|P|G|F|N|Q|V|Re|Nu|Pr|Pe|Eu)\b.*=", line):
        return True
    if re.fullmatch(r"[A-Za-zА-Яа-яІіЇїЄєҐґ0-9\s.,;:()+*/^_\\-]{1,120}\(\d+\.\d+[а-я]?\)", line):
        return True
    return False


def formula_block(line: str) -> str:
    escaped = line.replace("\\", "\\\\")
    return f'<pre class="formula-block"><code>{escaped}</code></pre>'


def paragraph_blocks(lines: list[str]) -> str:
    blocks: list[str] = []
    paragraph: list[str] = []

    def flush() -> None:
        nonlocal paragraph
        if paragraph:
            blocks.append(" ".join(paragraph))
            paragraph = []

    for line in lines:
        if is_heading(line):
            flush()
            blocks.append(heading_markdown(line))
            continue
        if line.startswith("Таблиця "):
            flush()
            blocks.append(f"**{line}**")
            continue
        if line.startswith("Рис. "):
            flush()
            blocks.append(f"*{line}*")
            continue
        if looks_like_formula(line):
            flush()
            blocks.append(formula_block(line))
            continue
        paragraph.append(line)

    flush()
    return "\n\n".join(blocks)


def load_figure_inventory() -> dict[int, dict[str, str]]:
    if not INVENTORY_PATH.exists():
        return {}
    raw = json.loads(INVENTORY_PATH.read_text(encoding="utf-8"))
    captions: dict[int, dict[str, str]] = {}
    for item in raw:
        chapter = item.get("chapter")
        number = str(item.get("number", "")).strip().rstrip(".")
        caption = normalize_spaces(item.get("caption", ""))
        if not chapter or not number:
            continue
        # PDF extraction often glues the next paragraph to the caption. Keep a short,
        # editable caption and let the surrounding text carry the full explanation.
        caption = re.split(r"\s{2,}| (?=де |Для |У |В |На |Ці |Останн)", caption, maxsplit=1)[0]
        if len(caption) > 140:
            caption = caption[:140].rsplit(" ", 1)[0].rstrip(".,;:") + "..."
        captions.setdefault(int(chapter), {})[number] = caption
    return captions


def figure_number_from_file(file_name: str) -> str:
    stem = Path(file_name).stem.removeprefix("fig-")
    return stem.replace("-", ".")


def figure_markdown(chapter: int, captions: dict[int, dict[str, str]]) -> str:
    directory = FIGURE_DIR / f"chapter-{chapter:02d}"
    if not directory.exists():
        return ""

    files = sorted(
        directory.glob("fig-*.webp"),
        key=lambda path: [int(part) if part.isdigit() else part for part in path.stem.removeprefix("fig-").split("-")],
    )
    if not files:
        return ""

    blocks: list[str] = []
    for file in files:
        number = figure_number_from_file(file.name)
        caption = captions.get(chapter, {}).get(number, f"Рис. {number}.")
        src = f"/images/courses/bioprocess-engineering/chapter-{chapter:02d}/{file.name}"
        alt = caption.replace('"', "'")
        blocks.append(f"![{alt}]({src})\n*{caption}*")

    return "### Рисунки з підручника\n\n" + "\n\n".join(blocks)


def extract_chapter_material(pdf: pdfplumber.PDF, chapter: int, start: int, end: int, captions: dict[int, dict[str, str]]) -> str:
    chunks: list[str] = []
    for page_no in range(start, end + 1):
        page = pdf.pages[page_no - 1]
        chunks.append(page.extract_text(x_tolerance=1, y_tolerance=3) or "")
    lines = clean_extracted_text("\n".join(chunks))
    text = paragraph_blocks(lines)
    figures = figure_markdown(chapter, captions)
    note = (
        f"Нижче подано структурований матеріал за сторінками {start}-{end} підручника Зав'ялова: "
        "текст витягнуто з PDF, формули винесено в окремі блоки, рисунки додано окремими файлами. "
        "Це робоча MD-версія для подальшого перекладу і ручного звірення складних формул та таблиць."
    )
    return "\n\n".join(part for part in [note, text, figures] if part)


def replace_material_block(content: str, material: str) -> str:
    replacement = f"## Матеріал підручника\n\n{material}\n\n"
    pattern = re.compile(r"## Матеріал підручника\n\n.*?(?=## Після опрацювання розділу студент має вміти)", re.S)
    if not pattern.search(content):
        raise RuntimeError("Could not find textbook material block")
    return pattern.sub(replacement, content, count=1)


def main() -> None:
    if not PDF_PATH.exists():
        raise FileNotFoundError(PDF_PATH)

    captions = load_figure_inventory()
    updated = 0
    with pdfplumber.open(str(PDF_PATH)) as pdf:
        for slug, (chapter, start, end) in PAGE_RANGES.items():
            path = COURSE_DIR / f"{slug}.md"
            content = path.read_text(encoding="utf-8")
            material = extract_chapter_material(pdf, chapter, start, end, captions)
            path.write_text(replace_material_block(content, material), encoding="utf-8", newline="\n")
            updated += 1

    print(f"Imported structured textbook material into {updated} Ukrainian biotech chapters.")


if __name__ == "__main__":
    main()
