import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';


const config = [
  {
    input: 'src/index.js',
    external: ['react'],
    output: {
      file: 'lib/index.js',
      name: "index",
      format: 'umd',
      exports: 'named',
      globals: {
        react: "React"
      }
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      resolve(),
    ]
  },
  // {
  //   input: 'src/countdown.js',
  //   external: ['react'],
  //   output: {
  //     file: 'lib/countdown.js',
  //     name: "countdown",
  //     format: 'umd',
  //     globals: {
  //       react: "React"
  //     }
  //   },
  //   plugins: [
  //     babel({
  //       exclude: "node_modules/**"
  //     }),
  //     resolve(),
  //   ]
  // },
  // {
  //   input: 'src/component2.js',
  //   external: ['react'],
  //   output: {
  //     file: 'lib/component2.js',
  //     name: "component2",
  //     format: 'umd',
  //     globals: {
  //       react: "React"
  //     }
  //   },
  //   plugins: [
  //     babel({
  //       exclude: "node_modules/**"
  //     }),
  //     resolve(),
  //   ]
  // },
  // {
  //   input: 'src/component3.js',
  //   external: ['react'],
  //   output: {
  //     file: 'lib/component3.js',
  //     name: "component2",
  //     format: 'umd',
  //     globals: {
  //       react: "React"
  //     }
  //   },
  //   plugins: [
  //     babel({
  //       exclude: "node_modules/**"
  //     }),
  //     resolve(),
  //   ]
  // },
];

export default config
