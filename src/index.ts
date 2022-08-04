import fs from 'fs'
import { join } from 'path'
import { exec } from 'child_process'
import util from 'util'
const execAsync = util.promisify(exec)
/**
 * 打印当前指定目录下所有文件
 */
const print: Print = async (path, options, printer) => {
  const files = fs.readdirSync(path)
  const args = files.map((file: string) => join(path, file))

  if (options) {
    const str = options.reduce((prev, elem) => {
      return `${prev} -o ${elem}`
    }, '')
    args.push(str)
  }

  if (printer) {
    args.push('-d')
    args.push(printer)
  }

  return execAsync(`lp ${args.join(' ')}`)
}
export default print
