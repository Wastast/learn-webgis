# npm unexpected token .

使用 `npm install` 安装任意包模块的时候报错 `Unexpected token .`。

```shell
npm ERR! Unexpected token '.'
npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\<user>\AppData\Local\npm-cache\_logs\2022-02-02T15_25_07_320Z-debug-0.log
```

## 解决办法

### 降级版本

将 `node` 版本降级为 `node <= 16.13.2` 。此时就可以正常使用。

### 更新 nvm 版本

将 nvm 版本更新至 `1.1.8 >= nvm`。
