# Print in node

> Prints all files in the specified directory

## Usage

```shell
npm install print-in-node
```

```javascript
import print from 'print-in-node'
print(dir[, options[, printer]])
```

- dir 需要打印的目录 string
- options 选项 string[]
  - landscape 横向打印
  - sides=two-sided-short-edge 双面模式打印
  - sides=one-sided 单面模式打印
- printer 打印机，不传为默认打印机 string

## Reference

- [unix-print](https://github.com/artiebits/unix-print)
- [从 Linux 命令行进行打印](https://linux.cn/article-13012-1.html)
- [lp 命令](https://linux265.com/course/linux-command-lp.html)
