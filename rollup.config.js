import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';


const config = {
  
  external: ['react'],
  output: {
    format: 'umd',
    name: 'countdown',
    globals: {
      react: "React"
    }
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    uglify(),
    resolve(),
  ]
}
export default config
