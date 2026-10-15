import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || 'https://nexiu-dev.github.io',
  base: process.env.SITE_BASE || '/ElisabeteFreireBeauty',
});
