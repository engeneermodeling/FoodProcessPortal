import type { APIRoute } from 'astro';
import { ENABLED_LOCALES } from '../locales.config';
import { siteConfig } from '../config';

const allTopics = import.meta.glob('/src/content/topics/**/*.md', { eager: true });
const allLectures = import.meta.glob('/src/content/lectures/**/*.md', { eager: true });
const allProblems = import.meta.glob('/src/content/problems/**/*.md', { eager: true });
const allPracticeCategories = import.meta.glob('/src/content/practice/*/*.md', { eager: true });
const allLabs = import.meta.glob('/src/content/labs/**/*.md', { eager: true });
const allCourses = import.meta.glob('/src/content/courses/**/*.md', { eager: true });

const sections = ['problems', 'practice', 'courses', 'videos'];
const referenceTools = ['water', 'fluids', 'food-props'];
const baseUrl = siteConfig.url;

function pathParts(path: string, collection: string) {
  const parts = path.split('/');
  const idx = parts.indexOf(collection);
  return { parts, idx };
}

function addUrl(urls: string[], loc: string, lastmod: string, priority = '0.7') {
  urls.push(`
  <url>
    <loc>${baseUrl}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`);
}

export const GET: APIRoute = () => {
  const urls: string[] = [];
  const now = new Date().toISOString().split('T')[0];

  addUrl(urls, '/', now, '1.0');

  // Головні сторінки
  ENABLED_LOCALES.forEach((locale) => {
    addUrl(urls, `/${locale}`, now, '1.0');
  });

  // Сторінки тем (список)
  ENABLED_LOCALES.forEach((locale) => {
    addUrl(urls, `/${locale}/topics`, now, '0.8');
  });

  // Окремі теми
  Object.keys(allTopics).forEach((path) => {
    const { parts, idx } = pathParts(path, 'topics');
    const locale = parts[idx + 1];
    const slug = parts.pop()?.replace('.md', '') || '';

    if (!ENABLED_LOCALES.includes(locale as typeof ENABLED_LOCALES[number])) return;

    addUrl(urls, `/${locale}/topics/${slug}`, now, '0.7');
  });

  // Основні розділи
  ENABLED_LOCALES.forEach((locale) => {
    sections.forEach((section) => {
      addUrl(urls, `/${locale}/${section}`, now, '0.6');
    });
  });

  // Лекції
  Object.keys(allLectures).forEach((path) => {
    const { parts, idx } = pathParts(path, 'lectures');
    const locale = parts[idx + 1];
    const topic = parts[idx + 2];
    const slug = parts.pop()?.replace('.md', '') || '';

    if (!ENABLED_LOCALES.includes(locale as typeof ENABLED_LOCALES[number])) return;

    addUrl(urls, `/${locale}/topics/${topic}/${slug}`, now, '0.8');
  });

  // Задачник
  Object.keys(allProblems).forEach((path) => {
    const { parts, idx } = pathParts(path, 'problems');
    const locale = parts[idx + 1];
    const slug = parts.pop()?.replace('.md', '') || '';
    if (!ENABLED_LOCALES.includes(locale as typeof ENABLED_LOCALES[number])) return;
    addUrl(urls, `/${locale}/problems/${slug}`, now, '0.7');
  });

  // Категорії практикуму з фолбеком на uk, як у маршрутах
  const practiceSlugs = new Set<string>();
  Object.keys(allPracticeCategories).forEach((path) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    if (slug) practiceSlugs.add(slug);
  });
  ENABLED_LOCALES.forEach((locale) => {
    practiceSlugs.forEach((slug) => {
      addUrl(urls, `/${locale}/practice/${slug}`, now, '0.7');
    });
  });

  // Лабораторні з фолбеком на uk, як у маршрутах
  const labKeys = new Set<string>();
  Object.keys(allLabs).forEach((path) => {
    const { parts, idx } = pathParts(path, 'labs');
    const category = parts[idx + 2];
    const slug = parts.pop()?.replace('.md', '') || '';
    if (category && slug) labKeys.add(`${category}/${slug}`);
  });
  ENABLED_LOCALES.forEach((locale) => {
    labKeys.forEach((key) => {
      addUrl(urls, `/${locale}/practice/${key}`, now, '0.7');
    });
  });

  // Курсові
  const courseKeys = new Set<string>();
  Object.keys(allCourses).forEach((path) => {
    const { parts, idx } = pathParts(path, 'courses');
    const locale = parts[idx + 1];
    const course = parts[idx + 2];
    const slug = parts.pop()?.replace('.md', '') || '';
    if (!ENABLED_LOCALES.includes(locale as typeof ENABLED_LOCALES[number])) return;
    if (course && slug) {
      courseKeys.add(`/${locale}/courses/${course}`);
      addUrl(urls, `/${locale}/courses/${course}/${slug}`, now, '0.7');
    }
  });
  courseKeys.forEach((loc) => addUrl(urls, loc, now, '0.7'));

  // Довідник
  ENABLED_LOCALES.forEach((locale) => {
    addUrl(urls, `/${locale}/reference`, now, '0.7');

    referenceTools.forEach((tool) => {
      addUrl(urls, `/${locale}/reference/${tool}`, now, '0.7');
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
