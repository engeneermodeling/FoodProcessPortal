from __future__ import annotations

import re
from pathlib import Path

import pdfplumber


PDF_PATH = Path(r"H:\Мой диск\Taras\Books\ПАБВ_підручник_Завялов_2024.pdf")
COURSE_DIR = Path("src/content/courses/uk/bioprocess-engineering")

PAGE_RANGES = {
    "chapter-01-general-information": (21, 43),
    "chapter-02-hydraulics-basics": (44, 73),
    "chapter-03-heterogeneous-systems-separation": (74, 119),
    "chapter-04-membrane-separation": (120, 134),
    "chapter-05-mixing": (135, 170),
    "chapter-06-heat-transfer-basics": (171, 181),
    "chapter-07-heating-cooling": (182, 201),
    "chapter-08-evaporation": (202, 223),
    "chapter-09-condensation": (224, 232),
    "chapter-10-mass-transfer-basics": (233, 255),
    "chapter-11-drying": (256, 309),
    "chapter-12-distillation": (310, 341),
    "chapter-13-sorption-processes": (342, 358),
    "chapter-14-extraction": (359, 400),
    "chapter-15-crystallization": (401, 442),
    "chapter-16-size-reduction": (443, 456),
    "chapter-17-bulk-material-sorting": (457, 465),
    "chapter-18-pressing": (466, 479),
    "chapter-19-bioengineering-processes": (481, 498),
    "chapter-20-mixing-during-cultivation": (499, 506),
    "chapter-21-mass-transfer-and-air-sterilization": (507, 548),
    "chapter-22-foaming-product-recovery-membranes": (549, 584),
}


def clean_lines(text: str) -> list[str]:
    lines: list[str] = []
    for raw in text.splitlines():
        line = re.sub(r"\s+", " ", raw).strip()
        if not line:
            continue
        if re.fullmatch(r"\d+", line):
            continue
        if line in {"ЧАСТИНА 1. ЗАГАЛЬНІ ПРОЦЕСИ"}:
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


def line_to_markdown(line: str) -> str:
    compact = re.sub(r"\s+", " ", line).strip()
    if re.match(r"^Розділ\s+\d+", compact):
        return f"### {compact}"
    if re.match(r"^\d+\.\d+(?:\.\d+)*\.\s+", compact):
        level = min(6, 3 + compact.count("."))
        return f"{'#' * level} {compact}"
    if compact.startswith("Запитання"):
        return f"### {compact}"
    if compact.startswith("Частина "):
        return f"### {compact}"
    return compact


def to_markdown(lines: list[str]) -> str:
    blocks: list[str] = []
    paragraph: list[str] = []

    def flush() -> None:
        nonlocal paragraph
        if paragraph:
            blocks.append(" ".join(paragraph))
            paragraph = []

    for line in lines:
        md = line_to_markdown(line)
        is_heading = md.startswith("###") or md.startswith("####") or md.startswith("#####") or md.startswith("######")
        is_formulaish = bool(re.search(r"\(\d+\.\d+\)", md)) or md.startswith("Рис.")
        if is_heading:
            flush()
            blocks.append(md)
        elif is_formulaish:
            flush()
            blocks.append(md)
        else:
            paragraph.append(md)
    flush()
    return "\n\n".join(blocks)


def replace_textbook_material(content: str, material: str, start: int, end: int) -> str:
    heading = "## Матеріал підручника"
    source_note = (
        f"Нижче подано основний матеріал розділу за підручником Зав'ялова "
        f"(сторінки {start}-{end}) з технічним очищенням перенесень рядків після витягування з PDF."
    )
    replacement = f"{heading}\n\n{source_note}\n\n{material}\n\n"

    old_pattern = re.compile(
        r"## Лекційний конспект\n\n.*?(?=## Наочні матеріали\n)",
        re.S,
    )
    if old_pattern.search(content):
        return old_pattern.sub(replacement, content)

    outline_pattern = re.compile(
        r"(## Структура матеріалу за підручником\n\n(?:- .+\n)+\n)",
        re.S,
    )
    if outline_pattern.search(content):
        return outline_pattern.sub(r"\1\n" + replacement, content, count=1)

    raise RuntimeError("Could not find insertion point")


def main() -> None:
    if not PDF_PATH.exists():
        raise FileNotFoundError(PDF_PATH)

    extracted: dict[str, str] = {}
    with pdfplumber.open(str(PDF_PATH)) as pdf:
        for slug, (start, end) in PAGE_RANGES.items():
            chunks: list[str] = []
            for page_no in range(start, end + 1):
                page = pdf.pages[page_no - 1]
                chunks.append(page.extract_text(x_tolerance=1, y_tolerance=3) or "")
            lines = clean_lines("\n".join(chunks))
            extracted[slug] = to_markdown(lines)

    updated = 0
    for slug, material in extracted.items():
        path = COURSE_DIR / f"{slug}.md"
        content = path.read_text(encoding="utf-8")
        start, end = PAGE_RANGES[slug]
        next_content = replace_textbook_material(content, material, start, end)
        path.write_text(next_content, encoding="utf-8", newline="\n")
        updated += 1

    print(f"Imported textbook material into {updated} Ukrainian biotech chapters.")


if __name__ == "__main__":
    main()
