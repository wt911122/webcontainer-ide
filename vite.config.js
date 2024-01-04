import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite';

export default defineConfig({
  // server: {
  //   proxy: {
  //     '/components': 'http://localhost:57526'
  //   }
    // headers: {
    //   'Cross-Origin-Embedder-Policy': 'require-corp',
    //   'Cross-Origin-Opener-Policy': 'same-origin',
    // },
  // },
  base: '/webcontainer-ide/',
  plugins: [vue()],
  build: {
    outDir: 'docs'
  }
});