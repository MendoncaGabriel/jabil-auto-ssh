// tsup.config.ts
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  minify: true,
  format: ['esm'],
  target: 'node22',
  splitting: false,
  sourcemap: false,
  clean: true,
  external: [],
  noExternal: ['.'],
})
