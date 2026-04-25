import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://usuario.github.io',
  base: '/telshop',
  vite: {
    plugins: [tailwindcss()]
  }
});