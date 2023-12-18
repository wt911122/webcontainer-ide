import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite';

export default defineConfig({
  // server: {
  //   headers: {
  //     'Cross-Origin-Embedder-Policy': 'require-corp',
  //     'Cross-Origin-Opener-Policy': 'same-origin',
  //   },
  // },
  base: '/webcontainer-ide/',
  plugins: [vue()],
  build: {
    outDir: 'docs'
  }
});