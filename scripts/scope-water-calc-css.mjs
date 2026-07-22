import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const srcPath = path.resolve(root, "../calc_water/src/App.css");
const outPath = path.resolve(root, "src/styles/water-calc.css");

const lines = fs.readFileSync(srcPath, "utf8").split("\n");

const skipRanges = [
  [105, 128],
  [130, 149],
  [151, 206],
  [208, 259],
  [626, 659],
  [809, 865],
];

const kept = lines.filter((_, index) => {
  const lineNum = index + 1;
  return !skipRanges.some(([start, end]) => lineNum >= start && lineNum <= end);
});

let css = kept.join("\n");

css = css
  .replace(/^:root \{/m, ".water-calc-root {")
  .replace(/\[data-theme="light"\]/g, '.water-calc-root[data-theme="light"]')
  .replace(/\[data-theme="auto"\]/g, '.water-calc-root[data-theme="auto"]')
  .replace(/\.container \{/g, ".water-calc-container {")
  .replace(/main\.main-content \{/g, ".water-calc-main {");

css = css.replace(/\/\*[\s\S]*?\*\//g, "");
css = prefixRules(css, ".water-calc-root");
css = css.replace(/\.water-calc-root \.water-calc-root/g, ".water-calc-root");

css += `

.water-calc-main {
  padding: 8px 0 32px;
}

.water-calc-container {
  max-width: 880px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.water-calc-root {
  font-family: var(--ff-body);
  color: var(--text-1);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.water-calc-root *,
.water-calc-root *::before,
.water-calc-root *::after {
  box-sizing: border-box;
}

.water-calc-root .error-banner {
  display: block;
}

.water-calc-note {
  font-size: 0.85rem;
  color: var(--text-3);
  margin-top: 2rem;
  line-height: 1.6;
}

.water-calc-note a {
  color: var(--blue);
}
`;

fs.writeFileSync(outPath, css);
console.log(`Wrote ${outPath} (${css.length} chars)`);

function prefixRules(input, prefix) {
  let out = "";
  let i = 0;

  while (i < input.length) {
    const ch = input[i];

    if (ch === "@") {
      const start = i;
      while (i < input.length && input[i] !== "{") i += 1;
      const head = input.slice(start, i).trim();
      i += 1;
      const { content, end } = readBlock(input, i);
      i = end;

      if (head.startsWith("@import") || head.startsWith("@keyframes")) {
        out += input.slice(start, i);
        continue;
      }

      out += `${head}{${prefixRules(content, prefix)}}`;
      continue;
    }

    if (ch === "}") {
      out += "}";
      i += 1;
      continue;
    }

    if (ch.trim() === "") {
      out += ch;
      i += 1;
      continue;
    }

    const ruleStart = i;
    while (i < input.length && input[i] !== "{") i += 1;
    if (i >= input.length) break;

    const selectors = input.slice(ruleStart, i).trim();
    i += 1;
    const { content, end } = readBlock(input, i);
    i = end;

    if (!selectors) continue;

    const prefixed = selectors
      .split(",")
      .map((sel) => {
        const trimmed = sel.trim();
        if (!trimmed || trimmed.startsWith("@")) return trimmed;
        if (trimmed.startsWith(prefix)) return trimmed;
        return `${prefix} ${trimmed}`;
      })
      .join(", ");

    out += `${prefixed}{${content}}`;
  }

  return out;
}

function readBlock(input, start) {
  let i = start;
  let depth = 1;
  while (i < input.length && depth > 0) {
    if (input[i] === "{") depth += 1;
    if (input[i] === "}") depth -= 1;
    if (depth > 0) i += 1;
  }
  return { content: input.slice(start, i), end: i + 1 };
}
