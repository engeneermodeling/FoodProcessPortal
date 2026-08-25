import { ENABLED_LOCALES } from "../locales.config";

const allTopics = import.meta.glob("/src/content/topics/**/*.md");
const allLectures = import.meta.glob("/src/content/lectures/**/*.md");
const allProblems = import.meta.glob("/src/content/problems/**/*.md");
const allPracticeCategories = import.meta.glob("/src/content/practice/*/*.md");
const allLabs = import.meta.glob("/src/content/labs/**/*.md");
const allCourses = import.meta.glob("/src/content/courses/**/*.md");

function partsFor(path: string, collection: string) {
  const parts = path.split("/");
  return { parts, idx: parts.indexOf(collection) };
}

function withoutMd(path: string) {
  return path.split("/").pop()?.replace(".md", "") || "";
}

function buildGeneratedPaths() {
  const paths = new Set<string>(["/"]);

  for (const locale of ENABLED_LOCALES) {
    paths.add(`/${locale}`);
    paths.add(`/${locale}/topics`);
    paths.add(`/${locale}/problems`);
    paths.add(`/${locale}/practice`);
    paths.add(`/${locale}/reference`);
    paths.add(`/${locale}/reference/water`);
    paths.add(`/${locale}/reference/fluids`);
    paths.add(`/${locale}/reference/food-props`);
    paths.add(`/${locale}/courses`);
    paths.add(`/${locale}/videos`);
  }

  for (const path of Object.keys(allTopics)) {
    const { parts, idx } = partsFor(path, "topics");
    const locale = parts[idx + 1];
    const slug = withoutMd(path);
    if (ENABLED_LOCALES.includes(locale as (typeof ENABLED_LOCALES)[number]) && slug) {
      paths.add(`/${locale}/topics/${slug}`);
    }
  }

  for (const path of Object.keys(allLectures)) {
    const { parts, idx } = partsFor(path, "lectures");
    const locale = parts[idx + 1];
    const topic = parts[idx + 2];
    const slug = withoutMd(path);
    if (ENABLED_LOCALES.includes(locale as (typeof ENABLED_LOCALES)[number]) && topic && slug) {
      paths.add(`/${locale}/topics/${topic}/${slug}`);
    }
  }

  for (const path of Object.keys(allProblems)) {
    const { parts, idx } = partsFor(path, "problems");
    const locale = parts[idx + 1];
    const slug = withoutMd(path);
    if (ENABLED_LOCALES.includes(locale as (typeof ENABLED_LOCALES)[number]) && slug) {
      paths.add(`/${locale}/problems/${slug}`);
    }
  }

  const practiceSlugs = new Set<string>();
  for (const path of Object.keys(allPracticeCategories)) {
    const slug = withoutMd(path);
    if (slug) practiceSlugs.add(slug);
  }
  for (const locale of ENABLED_LOCALES) {
    for (const slug of practiceSlugs) paths.add(`/${locale}/practice/${slug}`);
  }

  const labKeys = new Set<string>();
  for (const path of Object.keys(allLabs)) {
    const { parts, idx } = partsFor(path, "labs");
    const category = parts[idx + 2];
    const slug = withoutMd(path);
    if (category && slug) labKeys.add(`${category}/${slug}`);
  }
  for (const locale of ENABLED_LOCALES) {
    for (const key of labKeys) paths.add(`/${locale}/practice/${key}`);
  }

  for (const path of Object.keys(allCourses)) {
    const { parts, idx } = partsFor(path, "courses");
    const locale = parts[idx + 1];
    const course = parts[idx + 2];
    const slug = withoutMd(path);
    if (ENABLED_LOCALES.includes(locale as (typeof ENABLED_LOCALES)[number]) && course && slug) {
      paths.add(`/${locale}/courses/${course}`);
      paths.add(`/${locale}/courses/${course}/${slug}`);
    }
  }

  return paths;
}

const generatedPaths = buildGeneratedPaths();

export function getLocalizedPath(currentPath: string, newLocale: string) {
  if (currentPath === "/") return `/${newLocale}`;

  const parts = currentPath.split("/").filter(Boolean);
  const allLocales = ["uk", "ru", "en", "de"];
  if (parts.length > 0 && allLocales.includes(parts[0])) {
    parts[0] = newLocale;
    const candidate = `/${parts.join("/")}`;
    if (generatedPaths.has(candidate)) return candidate;

    const section = parts[1];
    if (section && generatedPaths.has(`/${newLocale}/${section}`)) {
      return `/${newLocale}/${section}`;
    }
    return `/${newLocale}`;
  }

  const candidate = `/${newLocale}${currentPath}`;
  return generatedPaths.has(candidate) ? candidate : `/${newLocale}`;
}
