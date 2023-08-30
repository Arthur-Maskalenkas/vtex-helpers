
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';
import pluginPrefix from 'postcss-prefix-selector';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        pluginPrefix({prefix: '.GCE'})
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/views/styles/_main.scss";`,
      },
    },
  },
  plugins: [react()]
})