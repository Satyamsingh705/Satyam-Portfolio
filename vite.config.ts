import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY === 'true' ? '/' : '/Satyam-Portfolio/',
  server: {
    watch: {
      usePolling: true,
    },
  },
})