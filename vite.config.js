import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/jenkins-frontend-demo/', // important for GitHub Pages
})
