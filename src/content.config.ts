import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    chapterNumber: z.number(),
    shortTitle: z.string().optional(),
    subtitle: z.string().optional(),
    tag: z.string().default('System Design Chapter'),
    accentColor: z.enum(['pink', 'blue', 'yellow', 'purple', 'green', 'orange']).default('blue'),
    handwrittenAnnotation: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { notes };
