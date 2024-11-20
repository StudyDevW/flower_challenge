import { defineConfig } from 'vite';
import viteSassDts from 'vite-plugin-sass-dts';

export default defineConfig({
  plugins: [viteSassDts()],
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler'
      } , 
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: ['./preprocessor/main.sass', './preprocessor/mixins.sass'],
      output: {
        assetFileNames: 'style.[ext]',
      },
    },
  },
});
