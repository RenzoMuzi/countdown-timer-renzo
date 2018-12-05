import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';


const config = [
  {
    input: 'src/index.js',
    external: ['react'],
    output: {
      file: 'dist/index.js',
      name: "index",
      format: 'umd',
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
  },
  {
    input: 'src/countdown.js',
    external: ['react'],
    output: {
      file: 'dist/countdown.js',
      name: "countdown",
      format: 'umd',
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
  },
  {
    input: 'src/component2.js',
    external: ['react'],
    output: {
      file: 'dist/component2.js',
      name: "component2",
      format: 'umd',
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
  },
  {
    input: 'src/component3.js',
    external: ['react'],
    output: {
      file: 'dist/component3.js',
      name: "component2",
      format: 'umd',
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
];

export default config
