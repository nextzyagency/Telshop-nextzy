import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://telshop-nextzy.pages.dev',
  vite: {
    plugins: [tailwindcss()]
  }
});