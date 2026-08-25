import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const root = process.cwd();

const requiredFiles = [
  "dist/index.html",
  "dist/uk/index.html",
  "dist/uk/topics/index.html",
  "dist/uk/practice/index.html",
  "dist/uk/reference/water/index.html",
  "dist/uk/problems/chapter-01-hydraulics-basics/index.html",
  "dist/uk/practice/hydromechanical/lab-01-vessel-rotation/index.html",
  "dist/sitemap-index.xml",
  "dist/robots.txt",
  "dist/images/og-default.png",
];

const missing = requiredFiles.filter((file) => !existsSync(join(root, file)));

if (missing.length > 0) {
  console.error("Smoke check failed. Missing files:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

function listFiles(dir, predicate) {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return listFiles(path, predicate);
    return entry.isFile() && predicate(path) ? [path] : [];
  });
}

const brokenImports = [];
const nestedPracticeContent = [];
const fragileMathUnits = [];
for (const file of listFiles(join(root, "src", "content"), (path) => path.endsWith(".md"))) {
  const text = readFileSync(file, "utf8");
  const imports = [...text.matchAll(/import\s+.+?\s+from\s+["']([^"']+)["']/g)].map((match) => match[1]);
  for (const specifier of imports) {
    if (!specifier.startsWith(".")) continue;
    const target = resolve(dirname(file), specifier);
    if (!existsSync(target)) brokenImports.push(`${file}: ${specifier}`);
  }

  const relative = file.replace(root, "").replaceAll("\\", "/");
  if (/\/src\/content\/practice\/[^/]+\/[^/]+\/.+\.md$/.test(relative)) {
    nestedPracticeContent.push(file);
  }

  const lines = text.split(/\r?\n/);
  lines.forEach((line, index) => {
    if (/\\text\{[^\r\n}]*\}\^\d+\\text\{/.test(line)) {
      fragileMathUnits.push(`${file}:${index + 1}`);
    }
  });
}

if (brokenImports.length > 0) {
  console.error("Smoke check failed. Broken local imports in content:");
  for (const item of brokenImports) console.error(`- ${item}`);
  process.exit(1);
}

if (nestedPracticeContent.length > 0) {
  console.error("Smoke check failed. Nested practice markdown is not routed; use src/content/labs for lab pages:");
  for (const file of nestedPracticeContent) console.error(`- ${file}`);
  process.exit(1);
}

if (fragileMathUnits.length > 0) {
  console.error("Smoke check failed. Fragile KaTeX unit markup found; use \\mathrm for units with powers:");
  for (const item of fragileMathUnits) console.error(`- ${item}`);
  process.exit(1);
}

const sitemap = readFileSync(join(root, "dist/sitemap-index.xml"), "utf8");
const robots = readFileSync(join(root, "dist/robots.txt"), "utf8");
const urlCount = (sitemap.match(/<loc>/g) || []).length;
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

const requiredUrls = [
  "https://foodprocessportal.com/",
  "https://foodprocessportal.com/uk",
  "https://foodprocessportal.com/uk/reference/water",
  "https://foodprocessportal.com/uk/problems/chapter-01-hydraulics-basics",
  "https://foodprocessportal.com/uk/practice/hydromechanical/lab-01-vessel-rotation",
];

const missingUrls = requiredUrls.filter((url) => !sitemap.includes(`<loc>${url}</loc>`));

if (missingUrls.length > 0) {
  console.error("Smoke check failed. Missing sitemap URLs:");
  for (const url of missingUrls) console.error(`- ${url}`);
  process.exit(1);
}

if (!robots.includes("Sitemap: https://foodprocessportal.com/sitemap-index.xml")) {
  console.error("Smoke check failed. robots.txt points to an unexpected sitemap URL.");
  process.exit(1);
}

const duplicateUrls = urls.filter((url, index) => urls.indexOf(url) !== index);
if (duplicateUrls.length > 0) {
  console.error("Smoke check failed. Duplicate sitemap URLs:");
  for (const url of [...new Set(duplicateUrls)]) console.error(`- ${url}`);
  process.exit(1);
}

const htmlFiles = listFiles(join(root, "dist"), (path) => path.endsWith(".html"));

function localTargetExists(target) {
  const clean = target.split("#")[0].split("?")[0];
  if (!clean || !clean.startsWith("/")) return true;

  const relative = clean.slice(1);
  const distPath = join(root, "dist", relative);
  if (existsSync(distPath)) return true;
  if (existsSync(join(distPath, "index.html"))) return true;
  if (!relative.includes(".") && existsSync(`${distPath}.html`)) return true;
  return false;
}

const ignoredPrefixes = [
  "http://",
  "https://",
  "mailto:",
  "tel:",
  "data:",
  "javascript:",
];

const brokenLinks = [];
const relativeSocialImages = [];
const unsafeExternalLinks = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const refs = [...html.matchAll(/\s(?:href|src)=["']([^"']+)["']/g)].map((match) => match[1]);
  for (const ref of refs) {
    if (ref.startsWith("#") || ignoredPrefixes.some((prefix) => ref.startsWith(prefix))) continue;
    if (!localTargetExists(ref)) brokenLinks.push(`${file}: ${ref}`);
  }

  const socialImages = [
    ...html.matchAll(/<meta\s+(?:property|name)=["'](?:og:image|twitter:image)["']\s+content=["']([^"']+)["']/g),
  ].map((match) => match[1]);
  for (const image of socialImages) {
    if (!image.startsWith("https://")) relativeSocialImages.push(`${file}: ${image}`);
  }

  const anchors = [...html.matchAll(/<a\b([^>]*?)>/g)].map((match) => match[1]);
  for (const attrs of anchors) {
    const href = attrs.match(/\shref=["']([^"']+)["']/)?.[1];
    if (!href || !/^https?:\/\//i.test(href)) continue;

    const target = attrs.match(/\starget=["']([^"']+)["']/)?.[1];
    const rel = attrs.match(/\srel=["']([^"']+)["']/)?.[1] || "";
    if (target !== "_blank" || !/\bnoopener\b/.test(rel) || !/\bnoreferrer\b/.test(rel)) {
      unsafeExternalLinks.push(`${file}: ${href}`);
    }
  }
}

if (brokenLinks.length > 0) {
  console.error("Smoke check failed. Broken local links/assets:");
  for (const link of brokenLinks.slice(0, 50)) console.error(`- ${link}`);
  if (brokenLinks.length > 50) console.error(`...and ${brokenLinks.length - 50} more`);
  process.exit(1);
}

if (relativeSocialImages.length > 0) {
  console.error("Smoke check failed. Social image meta tags must use absolute HTTPS URLs:");
  for (const image of relativeSocialImages.slice(0, 50)) console.error(`- ${image}`);
  if (relativeSocialImages.length > 50) console.error(`...and ${relativeSocialImages.length - 50} more`);
  process.exit(1);
}

if (unsafeExternalLinks.length > 0) {
  console.error("Smoke check failed. External links must open in a new tab with noopener/noreferrer:");
  for (const link of unsafeExternalLinks.slice(0, 50)) console.error(`- ${link}`);
  if (unsafeExternalLinks.length > 50) console.error(`...and ${unsafeExternalLinks.length - 50} more`);
  process.exit(1);
}

console.log(`Smoke check passed. Sitemap URLs: ${urlCount}. Checked ${htmlFiles.length} HTML files.`);
