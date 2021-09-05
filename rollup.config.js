import nodeResolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

export default {
  input: "src/index.js",
  output: {
    file: "lib/index.js",
    name: "VueToolset",
    globals: { "vue-demi": "VueDemi" },
    format: "umd",
  },
  external: ["vue-demi"],
  plugins: [nodeResolve(), commonjs()],
}
