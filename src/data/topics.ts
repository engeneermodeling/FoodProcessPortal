// Спільні дані для всіх сторінок тем
export const allTopics = import.meta.glob('/src/content/topics/**/*.md', { eager: true });

export function getTopicSlug(path: string): { locale: string; slug: string } {
  const parts = path.split('/');
  const locale = parts[parts.indexOf('topics') + 1];
  const slug = parts.pop()?.replace('.md', '') || '';
  return { locale, slug };
}

export function getLocaleTopics(locale: string) {
  return Object.entries(allTopics)
    .filter(([path]) => path.includes(`/${locale}/`))
    .map(([path, module]: [string, any]) => ({
      slug: path.split('/').pop()?.replace('.md', '') || '',
      title: module.frontmatter.title,
      order: module.frontmatter.order || 0,
      path,
    }))
    .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
}