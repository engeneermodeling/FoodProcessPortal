import { existsSync } from "node:fs";
import { join } from "node:path";
import { readdir, readFile } from "node:fs/promises";

const locales = ["en", "de", "ru"];
const lecturesRoot = join(process.cwd(), "src", "content", "lectures");
const publicRoot = join(process.cwd(), "public");
const imagePattern = /!\[[^\]]*]\((\/images\/lectures\/[^)]+\.svg)\)/g;
const cyrillicPattern = /[А-Яа-яІіЇїЄєҐґ]/;
const ukrainianSpecificPattern = /[ІіЇїЄєҐґ]/;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (entry.isFile()) {
      files.push(full);
    }
  }
  return files;
}

function localizedPath(src, locale) {
  return src.replace("/images/lectures/", `/images/lectures/${locale}/`);
}

async function readPublicSvg(src) {
  const full = join(publicRoot, src.replace(/^\//, ""));
  if (!existsSync(full)) return "";
  return readFile(full, "utf8");
}

async function hasCyrillicInPublicSvg(src) {
  return cyrillicPattern.test(await readPublicSvg(src));
}

async function hasWrongScriptInLocalizedSvg(src, locale) {
  const source = await readPublicSvg(src);
  if (locale === "ru") {
    return ukrainianSpecificPattern.test(source);
  }
  return cyrillicPattern.test(source);
}

const issues = [];

for (const locale of locales) {
  const files = await walk(join(lecturesRoot, locale));
  for (const file of files) {
    const source = await readFile(file, "utf8");
    for (const match of source.matchAll(imagePattern)) {
      const src = match[1];
      const localized = localizedPath(src, locale);
      const hasLocalized = existsSync(join(publicRoot, localized.replace(/^\//, "")));
      const localizedHasWrongScript = hasLocalized ? await hasWrongScriptInLocalizedSvg(localized, locale) : false;
      const sourceHasCyrillic = await hasCyrillicInPublicSvg(src);

      if (!hasLocalized && sourceHasCyrillic) {
        issues.push({ locale, file, src, problem: "missing-localized-svg" });
      } else if (localizedHasWrongScript) {
        issues.push({ locale, file, src: localized, problem: "localized-svg-has-wrong-script" });
      }
    }
  }
}

if (issues.length > 0) {
  console.log(`Lecture image localization issues: ${issues.length}`);
  for (const issue of issues) {
    console.log(`${issue.locale}\t${issue.problem}\t${issue.src}\t${issue.file}`);
  }
  process.exitCode = 1;
} else {
  console.log("Lecture image localization audit passed.");
}
