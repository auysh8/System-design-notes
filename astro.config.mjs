import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app',
  integrations: [mdx()],
  trailingSlash: 'always',
});

