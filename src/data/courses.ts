// Спільні дані для всіх курсів
interface CourseFrontmatter {
  title: string;
  course_title?: string;
  chapter?: number;
  description?: string;
  draft?: boolean;
}

interface ContentModule<TFrontmatter> {
  frontmatter: TFrontmatter;
}

export interface CourseChapter {
  slug: string;
  title: string;
  chapter: number;
  description: string;
  course_title?: string;
}

export interface LocaleCourse {
  slug: string;
  title: string;
  chapters: CourseChapter[];
}

type CourseModuleMap = Record<string, ContentModule<CourseFrontmatter>>;

const allCoursesUk = import.meta.glob<ContentModule<CourseFrontmatter>>("/src/content/courses/uk/**/*.md", { eager: true });
const allCoursesEn = import.meta.glob<ContentModule<CourseFrontmatter>>("/src/content/courses/en/**/*.md", { eager: true });
const allCoursesRu = import.meta.glob<ContentModule<CourseFrontmatter>>("/src/content/courses/ru/**/*.md", { eager: true });
const allCoursesDe = import.meta.glob<ContentModule<CourseFrontmatter>>("/src/content/courses/de/**/*.md", { eager: true });

const allLocaleCoursesMap: Record<string, CourseModuleMap> = {
  uk: allCoursesUk,
  en: allCoursesEn,
  ru: allCoursesRu,
  de: allCoursesDe,
};

export function getLocaleCourses(locale: string): LocaleCourse[] {
  const rawCourses = allLocaleCoursesMap[locale] || {};

  const coursesMap = new Map<string, LocaleCourse>();

  Object.entries(rawCourses).forEach(([path, module]) => {
    if (module.frontmatter.draft) return;

    const parts = path.split("/");
    const courseIndex = parts.indexOf("courses");
    if (courseIndex === -1) return;

    const courseSlug = parts[courseIndex + 2];
    const chapterSlug = path.split("/").pop()?.replace(".md", "") || "";

    if (!courseSlug) return;

    const course = coursesMap.get(courseSlug) || {
      slug: courseSlug,
      title: module.frontmatter.course_title || courseSlug,
      chapters: [],
    };

    const chapter = {
      slug: chapterSlug,
      title: module.frontmatter.title || chapterSlug,
      chapter: module.frontmatter.chapter || 0,
      description: module.frontmatter.description || "",
    };

    course.chapters.push(chapter);
    coursesMap.set(courseSlug, course);
  });

  return Array.from(coursesMap.values()).map((course) => ({
    ...course,
    chapters: course.chapters.sort((a, b) => a.chapter - b.chapter),
  }));
}

export function getCourseChapters(locale: string, course: string): CourseChapter[] {
  const rawCourses = allLocaleCoursesMap[locale] || {};

  return Object.entries(rawCourses)
    .filter(([path]) => {
      const parts = path.split("/");
      const idx = parts.indexOf("courses");
      return idx !== -1 && parts[idx + 2] === course;
    })
    .filter(([, module]) => !module.frontmatter?.draft)
    .map(([path, module]) => ({
      slug: path.split("/").pop()?.replace(".md", "") || "",
      title: module.frontmatter?.title || "",
      chapter: module.frontmatter?.chapter || 0,
      description: module.frontmatter?.description || "",
      course_title: module.frontmatter?.course_title || "",
    }))
    .sort((a, b) => a.chapter - b.chapter);
}
