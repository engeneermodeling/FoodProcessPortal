from __future__ import annotations

from pathlib import Path

import pypdfium2 as pdfium


PDF_PATH = Path(r"H:\Мой диск\Taras\Books\ПАБВ_підручник_Завялов_2024.pdf")
OUT_DIR = Path("public/images/courses/bioprocess-engineering/textbook")

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


def main() -> None:
    if not PDF_PATH.exists():
        raise FileNotFoundError(PDF_PATH)

    pdf = pdfium.PdfDocument(str(PDF_PATH))
    rendered = 0

    for slug, (start, end) in PAGE_RANGES.items():
        chapter_dir = OUT_DIR / slug
        chapter_dir.mkdir(parents=True, exist_ok=True)
        for page_no in range(start, end + 1):
            out_path = chapter_dir / f"page-{page_no:03d}.webp"
            if out_path.exists():
                continue
            page = pdf[page_no - 1]
            image = page.render(scale=2).to_pil().convert("RGB")
            image.save(out_path, "WEBP", quality=86, method=6)
            rendered += 1

    print(f"Rendered {rendered} textbook page images.")


if __name__ == "__main__":
    main()
