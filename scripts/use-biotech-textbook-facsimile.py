from __future__ import annotations

import re
from pathlib import Path


COURSE_DIR = Path("src/content/courses/uk/bioprocess-engineering")
IMAGE_ROOT = "/images/courses/bioprocess-engineering/textbook"

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


def facsimile_block(slug: str, start: int, end: int) -> str:
    pages = []
    for page_no in range(start, end + 1):
        pages.append(
            f'<figure class="textbook-page" id="textbook-page-{page_no}">\n'
            f'  <img src="{IMAGE_ROOT}/{slug}/page-{page_no:03d}.webp" alt="Сторінка {page_no} підручника Зав&apos;ялова" loading="lazy" />\n'
            f'  <figcaption>Сторінка {page_no}</figcaption>\n'
            f'</figure>'
        )

    return (
        "## Матеріал підручника\n\n"
        f"Нижче подано сторінки {start}-{end} з підручника Зав'ялова у вигляді точного зображення PDF: "
        "слово в слово, рисунок в рисунок, формула в формулу. Тести нижче є додатковим навчальним блоком порталу.\n\n"
        '<div class="textbook-pages">\n'
        + "\n\n".join(pages)
        + "\n</div>\n\n"
    )


def main() -> None:
    updated = 0
    for slug, (start, end) in PAGE_RANGES.items():
        path = COURSE_DIR / f"{slug}.md"
        content = path.read_text(encoding="utf-8")
        replacement = facsimile_block(slug, start, end)
        next_content = re.sub(
            r"## Матеріал підручника\n\n.*?(?=## Після опрацювання розділу студент має вміти)",
            replacement,
            content,
            flags=re.S,
        )
        if next_content == content:
            raise RuntimeError(f"Could not replace textbook block in {path}")
        path.write_text(next_content, encoding="utf-8", newline="\n")
        updated += 1

    print(f"Switched {updated} Ukrainian biotech chapters to PDF facsimile pages.")


if __name__ == "__main__":
    main()
