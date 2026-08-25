import { existsSync } from "node:fs";
import { join } from "node:path";

const LECTURE_IMAGE_PREFIX = "/images/lectures/";
const LOCALIZED_LOCALES = new Set(["en", "de", "ru"]);

function getLocaleFromFile(file) {
  const filename = String(file?.path || file?.history?.[0] || "");
  const normalized = filename.replace(/\\/g, "/");
  const match = normalized.match(/\/src\/content\/lectures\/(uk|en|de|ru)\//);
  return match?.[1] || "";
}

function localizedImagePath(src, locale) {
  if (!LOCALIZED_LOCALES.has(locale) || !src.startsWith(LECTURE_IMAGE_PREFIX)) {
    return src;
  }

  return `${LECTURE_IMAGE_PREFIX}${locale}/${src.slice(LECTURE_IMAGE_PREFIX.length)}`;
}

function localizedImageExists(src) {
  return existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));
}

function visit(node, locale) {
  if (!node || typeof node !== "object") return;

  if (node.type === "element" && node.tagName === "img") {
    const properties = node.properties || {};
    const src = properties.src;

    if (typeof src === "string") {
      const candidate = localizedImagePath(src, locale);
      if (candidate !== src && localizedImageExists(candidate)) {
        node.properties = {
          ...properties,
          src: candidate,
        };
      }
    }
  }

  if (Array.isArray(node.children)) {
    for (const child of node.children) visit(child, locale);
  }
}

export default function rehypeLocalizedLectureImages() {
  return (tree, file) => {
    visit(tree, getLocaleFromFile(file));
  };
}
