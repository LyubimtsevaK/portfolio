import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages: сайт живёт на Baykanurov.github.io/lyubimtseva_k_portfolio/
  base: '/lyubimtseva_k_portfolio/',
  plugins: [react(), tailwindcss()],
})
