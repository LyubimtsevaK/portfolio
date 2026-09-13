import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages: сайт живёт на LyubimtsevaK.github.io/portfolio/
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
