import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // user/organization GitHub Pages sites are served from the domain root
  base: '/',
  plugins: [tailwindcss(), react()],
})
