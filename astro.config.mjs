// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.DOMAIN_NAME || process.env.SITE_URL || 'https://chaudandigadhimun.digprofile.com',
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'ne',
    locales: ['ne', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto'
  }, compressHTML: true
});