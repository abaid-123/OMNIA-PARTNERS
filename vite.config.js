import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ No need to import tailwindcss plugin — Tailwind is processed via PostCSS

export default defineConfig({
  plugins: [react()],
});
