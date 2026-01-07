// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://chaudandigadhi.gov.np',
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'ne',
    locales: ['ne', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  build: {
    inlineStylesheets: 'auto'
  }, compressHTML: true
});