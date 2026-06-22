import type { APIRoute } from 'astro';

const allTopics = import.meta.glob('/src/content/topics/**/*.md', { eager: true });

const locales = ['uk', 'ru', 'en', 'de'];
const sections = ['problems', 'practice', 'reference', 'courses', 'videos'];
const baseUrl = 'https://foodprocessportal.vercel.app'; // ← Заміни на свій домен

export const GET: APIRoute = () => {
  const urls: string[] = [];
  const now = new Date().toISOString().split('T')[0];

  // Головні сторінки
  locales.forEach((locale) => {
    urls.push(`
  <url>
    <loc>${baseUrl}/${locale}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`);
  });

  // Сторінки тем (список)
  locales.forEach((locale) => {
    urls.push(`
  <url>
    <loc>${baseUrl}/${locale}/topics</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
  });

  // Окремі теми
  Object.keys(allTopics).forEach((path) => {
    const parts = path.split('/');
    const locale = parts[parts.indexOf('topics') + 1];
    const slug = parts.pop()?.replace('.md', '') || '';
    
    urls.push(`
  <url>
    <loc>${baseUrl}/${locale}/topics/${slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });

  // Розділи-заглушки
  locales.forEach((locale) => {
    sections.forEach((section) => {
      urls.push(`
  <url>
    <loc>${baseUrl}/${locale}/${section}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`);
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