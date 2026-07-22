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

export const collections = {
  'topics': topicsCollection,
  'lectures': lecturesCollection,
};
