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

| 参数    | 类型     | 备注           |
| ------- | -------- | -------------- |
| dir     | string   | 需要打印的目录 |
| options | string[] | 选项           |
| printer | string   | 指定打印机     |

- options 选项 string[]
  - landscape 横向打印
  - sides=two-sided-short-edge 双面模式打印
  - sides=one-sided 单面模式打印

## Reference

- [unix-print](https://github.com/artiebits/unix-print)
- [从 Linux 命令行进行打印](https://linux.cn/article-13012-1.html)
- [lp 命令](https://linux265.com/course/linux-command-lp.html)
