import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const topicsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
    color: z.string().optional(),
    order: z.number().optional(),
    category: z.string().optional(),
    headings: z.array(z.object({
      slug: z.string(),
      text: z.string(),
      depth: z.number(),
    })).optional(),
  }),
});

const lecturesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    topic_title: z.string().optional(),
    lecture: z.number(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    duration: z.string().optional(),
    difficulty: z.string().optional(),
    author: z.string().optional(),
    updated: z.string().optional(),
  }),
});

const practiceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
    color: z.string().optional(),
    order: z.number().optional(),
  }),
});

const labsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    category_title: z.string().optional(),
    lab: z.number(),
    goal: z.string().optional(),
    description: z.string().optional(),
    duration: z.string().optional(),
    difficulty: z.string().optional(),
    author: z.string().optional(),
    updated: z.string().optional(),
  }),
});

const problemsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    topic: z.string().optional(),
    topic_title: z.string().optional(),
    chapter: z.number(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    examplesCount: z.number().optional(),
    controlCount: z.number().optional(),
    difficulty: z.string().optional(),
    source: z.string().optional(),
    updated: z.string().optional(),
  }),
});

const coursesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    course: z.string(),
    course_title: z.string().optional(),
    chapter: z.number(),
    description: z.string().optional(),
    updated: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  'topics': topicsCollection,
  'lectures': lecturesCollection,
  'practice': practiceCollection,
  'labs': labsCollection,
  'problems': problemsCollection,
  'courses': coursesCollection,
};
