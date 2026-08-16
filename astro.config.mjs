import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Detect GitHub Actions (GitHub Pages) vs Root hosting (Vercel, Netlify, localhost)
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://auysh8.github.io' : 'https://system-design-notes-l362awb0x-auysh8s-projects.vercel.app',
  base: isGitHubPages ? '/System-design-notes/' : '/',
  integrations: [mdx()],
  trailingSlash: 'always',
});

