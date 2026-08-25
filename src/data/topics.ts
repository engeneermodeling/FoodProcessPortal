// Спільні дані для всіх сторінок тем
interface TopicFrontmatter {
  title: string;
  order?: number;
}

interface ContentModule<TFrontmatter> {
  frontmatter: TFrontmatter;
}

interface LocaleTopic {
  slug: string;
  title: string;
  order: number;
  path: string;
}

export const allTopics = import.meta.glob<ContentModule<TopicFrontmatter>>(
  '/src/content/topics/**/*.md',
  { eager: true },
);

export function getTopicSlug(path: string): { locale: string; slug: string } {
  const parts = path.split('/');
  const locale = parts[parts.indexOf('topics') + 1];
  const slug = parts.pop()?.replace('.md', '') || '';
  return { locale, slug };
}

export function getLocaleTopics(locale: string): LocaleTopic[] {
  return Object.entries(allTopics)
    .filter(([path]) => path.includes(`/${locale}/`))
    .map(([path, module]) => ({
      slug: path.split('/').pop()?.replace('.md', '') || '',
      title: module.frontmatter.title,
      order: module.frontmatter.order || 0,
      path,
    }))
    .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
}
