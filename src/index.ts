import fs from 'fs'
import { join } from 'path'
import { exec } from 'child_process'
import util from 'util'
const execAsync = util.promisify(exec)
/**
 * 打印当前指定目录下所有文件
 */
const print: Print = async ({ path, printer, options }) => {
  const files = fs.readdirSync(path)
  const args = files.map((file: string) => join(path, file))

  if (printer) {
    args.push('-d', printer)
  }

  if (options) {
    options.forEach(arg => args.push(arg))
  }

  return execAsync(`lp ${args.join(' ')}`)
}
export default print
