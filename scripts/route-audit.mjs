import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = process.cwd();
const distDir = join(root, "dist");
const site = "https://foodprocessportal.com";

if (!existsSync(distDir)) {
  console.error("Route audit failed. Build output is missing: dist");
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

function routeFromHtmlFile(file) {
  const normalized = relative(distDir, file).split(sep).join("/");
  if (normalized === "index.html") return "/";
  if (normalized.endsWith("/index.html")) return `/${normalized.slice(0, -"/index.html".length)}`;
  return `/${normalized.replace(/\.html$/, "")}`;
}

function routeFromUrl(url) {
  if (!url.startsWith(site)) return null;
  const path = url.slice(site.length);
  return path === "" ? "/" : path;
}

function sectionOf(route) {
  const parts = route.split("/").filter(Boolean);
  if (parts.length === 0) return "root";
  if (["uk", "en", "ru", "de"].includes(parts[0])) return parts[1] ?? "locale-root";
  return parts[0];
}

const htmlRoutes = listFiles(distDir, (path) => path.endsWith(".html"))
  .map(routeFromHtmlFile)
  .sort();

const sitemap = readFileSync(join(distDir, "sitemap-index.xml"), "utf8");
const sitemapRoutes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((match) => routeFromUrl(match[1]))
  .filter(Boolean)
  .sort();

const htmlSet = new Set(htmlRoutes);
const sitemapSet = new Set(sitemapRoutes);

const missingFromSitemap = htmlRoutes.filter((route) => !sitemapSet.has(route));
const missingFromDist = sitemapRoutes.filter((route) => !htmlSet.has(route));

if (missingFromSitemap.length > 0 || missingFromDist.length > 0) {
  console.error("Route audit failed. Sitemap and generated HTML routes differ.");

  if (missingFromSitemap.length > 0) {
    console.error("\nGenerated HTML routes missing from sitemap:");
    for (const route of missingFromSitemap.slice(0, 50)) console.error(`- ${route}`);
    if (missingFromSitemap.length > 50) console.error(`...and ${missingFromSitemap.length - 50} more`);
  }

  if (missingFromDist.length > 0) {
    console.error("\nSitemap routes missing from generated HTML:");
    for (const route of missingFromDist.slice(0, 50)) console.error(`- ${route}`);
    if (missingFromDist.length > 50) console.error(`...and ${missingFromDist.length - 50} more`);
  }

  process.exit(1);
}

const breakdown = htmlRoutes.reduce((counts, route) => {
  const section = sectionOf(route);
  counts.set(section, (counts.get(section) ?? 0) + 1);
  return counts;
}, new Map());

const summary = [...breakdown.entries()]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([section, count]) => `${section}:${count}`)
  .join(", ");

console.log(`Route audit passed. Routes: ${htmlRoutes.length}. ${summary}`);
