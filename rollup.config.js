import dayjs from 'dayjs'
import filesize from 'rollup-plugin-filesize' // 展示打包后的信息
import { terser } from 'rollup-plugin-terser' // 简化，压缩
import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'

const banner = `/**
 * ${pkg.description}
 * @version: ${pkg.version}
 * @author: ${pkg.author}
 * @date: ${dayjs().format('YYYY-MM-DD')}
 **/`
const baseOutputConfig = {
  banner,
}
export default {
  input: './src/index.ts',
  output: [
    { ...baseOutputConfig, file: pkg.main, format: 'cjs' },
    { ...baseOutputConfig, file: pkg.module, format: 'esm' },
  ],
  plugins: [
    typescript(),
    filesize(),
    terser(),
  ],
}
