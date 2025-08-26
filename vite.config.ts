import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-mid-week/',
  test: { environment: 'jsdom', setupFiles: './setupTests.ts', globals: true },
})
