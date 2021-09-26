import ts from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'

const configs = []
const input = 'src/index.ts'
const external = ['vue-demi']

configs.push({
  input,
  output: [
    {
      file: 'lib/index.cjs.js',
      name: 'VueToolset',
      globals: { 'vue-demi': 'VueDemi' },
      format: 'cjs'
    },
    {
      file: 'lib/index.esm.js',
      format: 'es'
    }
  ],
  external,
  plugins: [
    ts({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false
        }
      }
    })
  ]
})

configs.push({
  input,
  output: {
    file: `lib/index.d.ts`,
    format: 'es'
  },
  plugins: [dts()],
  external
})

export default configs
