from pathlib import Path
import subprocess
import sys

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
DDJVU = ROOT / ".codex-tools" / "DjVuLibre" / "ddjvu.exe"
DJVU = Path(r"C:/Users/Taras/Downloads/chubik-ia-maslov-am-spravochnik-po-teplofizicheskim-kharakteristikam-pishchevykh-produktov-i-polufabrikatov-studmed_ru.djvu")
OUT = Path(r"C:/Users/Taras/.codex/visualizations/2026/08/30/01a05212-1900-7421-8bac-3d40c66e4249/chubik_djvu_pages")

PAGES = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 39, 43, 44, 45, 56, 58, 89, 90, 91, 92, 95, 96, 97, 162, 163, 168]


def render_page(page: int) -> Path:
    OUT.mkdir(parents=True, exist_ok=True)
    ppm = OUT / f"page-{page:03d}.ppm"
    png = OUT / f"page-{page:03d}.png"
    subprocess.run(
        [str(DDJVU), "-format=ppm", f"-page={page}", str(DJVU), str(ppm)],
        check=True,
    )
    image = Image.open(ppm).convert("RGB")
    image.save(png)
    ppm.unlink(missing_ok=True)
    return png


def contact_sheet(name: str, pages: list[int]) -> None:
    thumbs = []
    for page in pages:
        image = Image.open(OUT / f"page-{page:03d}.png").convert("RGB")
        image.thumbnail((850, 1200))
        canvas = Image.new("RGB", (image.width, image.height + 38), "white")
        canvas.paste(image, (0, 38))
        ImageDraw.Draw(canvas).text((8, 8), f"page {page}", fill="black")
        thumbs.append(canvas)

    cols = 2
    width = max(image.width for image in thumbs)
    height = max(image.height for image in thumbs)
    rows = (len(thumbs) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * width, rows * height), "white")
    for index, image in enumerate(thumbs):
        sheet.paste(image, ((index % cols) * width, (index // cols) * height))
    sheet.save(OUT / f"contact-{name}.jpg", quality=92)


def main() -> int:
    for page in PAGES:
        render_page(page)

    contact_sheet("oils", [17, 18, 19, 20, 21])
    contact_sheet("oils-continued", [22, 23, 24, 25, 26])
    contact_sheet("flour-conf", [27, 29, 39, 43, 44, 45, 56, 58])
    contact_sheet("dairy-meat", [89, 90, 91, 92, 95, 96, 97])
    contact_sheet("other", [162, 163, 168])
    print(OUT)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
