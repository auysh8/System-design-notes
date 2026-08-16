import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://auysh8.github.io',
  base: '/System-design-notes/',
  integrations: [mdx()],
  trailingSlash: 'always',
});
