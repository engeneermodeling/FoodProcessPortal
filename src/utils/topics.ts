export interface Topic {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  body: string;
}

// Окремі імпорти для кожної мови
const ukModules = import.meta.glob('../content/uk/topics/*.md', { eager: true });
const ruModules = import.meta.glob('../content/ru/topics/*.md', { eager: true });
const enModules = import.meta.glob('../content/en/topics/*.md', { eager: true });
const deModules = import.meta.glob('../content/de/topics/*.md', { eager: true });

function loadTopics(modules: any): Topic[] {
  const topics: Topic[] = [];
  
  for (const path in modules) {
    const module = modules[path] as any;
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    if (module.frontmatter) {
      topics.push({
        slug,
        title: module.frontmatter.title,
        description: module.frontmatter.description,
        icon: module.frontmatter.icon,
        color: module.frontmatter.color,
        order: module.frontmatter.order,
        body: module.default?.render ? module.default.render() : '',
      });
    }
  }
  
  return topics.sort((a, b) => a.order - b.order);
}

export async function getTopics(locale: string = 'uk'): Promise<Topic[]> {
  try {
    switch (locale) {
      case 'uk':
        return loadTopics(ukModules);
      case 'ru':
        return loadTopics(ruModules);
      case 'en':
        return loadTopics(enModules);
      case 'de':
        return loadTopics(deModules);
      default:
        return loadTopics(ukModules);
    }
  } catch (error) {
    console.error('Error loading topics:', error);
    return [];
  }
}