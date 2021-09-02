import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import dayjs from 'dayjs'
import pkg from '../package.json'

const banner = `/**
 * ${pkg.description}
 * @version: ${pkg.version}
 * @author: ${pkg.author}
 * @date: ${dayjs().format('YYYY-MM-DD')}
 **/`

export default {
  input: './src/index.js',
  output: [
    {
      file: './lib/index.iife.js',
      name: 'kdschema',
      format: 'iife',
      exports: 'named',
      interop: true,
      banner
    },
    {
      file: './lib/index.umd.js',
      name: 'kdschema',
      format: 'umd',
      exports: 'named',
      interop: true,
      banner
    },
    {
      file: './lib/index.esm.js',
      format: 'esm',
      interop: true,
      banner
    }
  ],
  plugins: [
    json(),
    resolve(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    commonjs()
  ]
}
