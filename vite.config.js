import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/trimcate.js'),
      name: 'trimcate',
      fileName: (format) => `trimcate.${format}.js`,
    },
  },
});
