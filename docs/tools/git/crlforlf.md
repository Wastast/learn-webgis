# git 换行符 CRLF 和 LF

换行符有两种 `CRLF` 和 `LF`

- `CRLF`：是回车换行的意思，即 `\r\n`，是 windows 系统环境下的换行方式
- `LF`：是换行的意思，即 `\n`，是 Linux 系统环境下的换行方式。

:::tip

`Unix/Linux` 使用的是 `0x0A(LF)`，早期的 `Mac OS` 使用的是 `0x0D(CR)`，后来的 `OS X` 在更换内核后与 `Unix` 保持一致了。

`DOS/Windows` 一直使用 `0x0D0A(CRLF)` 作为换行符。
:::

由于不同平台之间的换行符不一致问题是开发过程中比较严重的问题，所以我们需要统一。

一般来讲，都是统一成 `LF`。

以下给出两种将 `Git` 换行符统一的方案。

## Git 全局配置

```shell
# 提交时转换为LF，检出时转换为CRLF
git config --global core.autocrlf true

# 提交时转换为LF，检出时不转换
git config --global core.autocrlf input

# 提交检出均不转换
git config --global core.autocrlf false
```

## Git 项目级文件配置

在项目中创建文件 `.gitattributes`，写入以下内容

```
*.js text eol=lf
*.ts text eol=lf
*.vue text eol=lf
*.tsx text eol=lf
*.d.ts text eol=lf
```

将需要变换的文件格式写上即可

虽然具备两种方案。但还是推荐两种方案结合使用，避免产生不必要的问题。
