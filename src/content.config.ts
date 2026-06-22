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
  }),
});

export const collections = {
  'topics': topicsCollection,
};