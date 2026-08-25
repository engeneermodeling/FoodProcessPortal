from __future__ import annotations

import html
import re
from pathlib import Path


CHAPTER_FILES = [
    Path("src/content/courses/uk/bioprocess-engineering/chapter-01-general-information.md"),
    Path("src/content/courses/en/bioprocess-engineering/chapter-01-general-information.md"),
    Path("src/content/courses/de/bioprocess-engineering/chapter-01-general-information.md"),
    Path("src/content/courses/ru/bioprocess-engineering/chapter-01-general-information.md"),
]


def format_formula(raw: str) -> str:
    value = html.unescape(raw).strip()
    value = re.sub(r"[ \t]+", " ", value)
    value = re.sub(r"\n\s*", "\n", value)
    number = ""
    number_match = re.search(r"\s*(\(\d+\.\d+[a-zа-я]?\))\s*\.?\s*$", value, re.I)
    if number_match:
        number = number_match.group(1)
        value = value[: number_match.start()].rstrip(" ")
        if not value.endswith("..."):
            value = value.rstrip(".")

    escaped = html.escape(value)
    escaped = escaped.replace("\n", "<br />")

    escaped = re.sub(r"([A-Za-zА-Яа-яІіЇїЄєҐґρμνΔαβλτω])_([A-Za-zА-Яа-яІіЇїЄєҐґ0-9]+)", r"\1<sub>\2</sub>", escaped)
    escaped = re.sub(r"([A-Za-zА-Яа-яІіЇїЄєҐґρμνΔαβλτω])\^([A-Za-zА-Яа-яІіЇїЄєҐґ0-9]+)", r"\1<sup>\2</sup>", escaped)
    escaped = escaped.replace(" - ", " − ")
    escaped = escaped.replace("...", "…")

    number_html = f'\n  <span class="equation-number">{html.escape(number)}</span>' if number else ""
    return (
        '<div class="equation-block">\n'
        f'  <span class="equation-main">{escaped}</span>{number_html}\n'
        '</div>'
    )


def convert_file(path: Path) -> bool:
    if not path.exists():
        return False
    content = path.read_text(encoding="utf-8")
    next_content = re.sub(
        r'<pre class="formula-block"><code>(.*?)</code></pre>',
        lambda match: format_formula(match.group(1)),
        content,
        flags=re.S,
    )
    path.write_text(next_content, encoding="utf-8", newline="\n")
    return content != next_content


def main() -> None:
    changed = [str(path) for path in CHAPTER_FILES if convert_file(path)]
    print(f"Formatted equations in {len(changed)} chapter files.")


if __name__ == "__main__":
    main()
