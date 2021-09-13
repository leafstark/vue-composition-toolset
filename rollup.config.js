import ts from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    name: 'VueToolset',
    globals: { 'vue-demi': 'VueDemi' },
    format: 'cjs',
  },
  external: ['vue-demi'],
  plugins: [ts()],
}
