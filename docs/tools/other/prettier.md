# Prettier

## 使用

1. 通过 `npm` 或 `yarn` 等包管理工具下载 `prettier` 配合 `eslint` 使用
2. 在文件根目录中创建 `.prettierrc` 文件，配合 vscode 使用

## 规则说明

### Print Width

```json
{
  "printWidth": 80 // 指定自动换行的长度，默认为 80
}
```

### Tab Width

指定每个缩进级别的空格数，默认为两个空格

```json
{
  "tabWidth": 2
}
```

### UseTabs

用 tab 键代替空格缩进，默认值为 false

```json
{
  "useTabs": true
}
```

### Semi

在语句的末尾是否自动添加分号，默认值为 true

> true 在每个语句的默认添加一个分号
>
> false 只在可能导致 ASI 失败的行开头添加分号

```json
{
  "semi": true
}
```

### Quote

是否使用单引号，代替双引号，默认值为 false

```json
{
  "quote": false
}
```

### Quote Props

当对象中的属性是 `quote` 时启用，默认为 `as-needed`

> as-needed 只在需要的对象属性周围添加引号。
>
> consistent 如果对象中至少有一个属性需要引用，则需要引用所有属性
>
> preserve 对象属性中引号的输入使用

```json
{
  "quoteProps": "as-needed"
}
```

### JSX Quotes

在 JSX 中使用单引号而不是双引号，默认为 false

```json
{
  "jsxSingleQuote": false
}
```

### Trailing Commas

在多行逗号分隔的语法结构中，尽可能打印尾随逗号。默认为 `es5`

> es5 尾随逗号在 ES5 中有效(对象，数组等)。在 TS 中，类型参数中没有后面的逗号
>
> none 不会添加逗号。
>
> all 尽可能以逗号结尾

```json
{
  "trailingComma": "es5"
}
```

### Bracket Spacing

在对象字面量的括号之间打印空格，默认为 true

> true -- `{ isBool: true }` false --- `{isBool:true}`

```json
{
  "bracketSpacing": true
}
```

### Bracket Line

将多行 HTML 元素的 `>` 放在最后一行的末尾，而不是单独放在下一行(不适用于自关闭元素，比如 img)

**true**

```html
<!--
<button
  className="prettier-class"
  id="prettier-id"
  onClick="{this.handleClick}">
  Click Here
</button>
-->
```

**false**

```html
<button
  className="prettier-class"
  id="prettier-id"
  onClick="{this.handleClick}"
>
  Click Here
</button>
```

```json
{
  "bracketSameLine": false
}
```

### Arrow Function Parentheses

在只有一个参数的箭头函数时候包含圆括号

> always 总是包含括号 (x) => x
>
> avoid 尽可能省略括号：x => x

```json
{
  "arrowParens": "always"
}
```

### Range

只格式文件的几个片段

```json
{
  "rangeEnd": "Infinity",
  "rangeStart": 0
}
```

### Parser

指定要使用的解析器，会自动从输入文件路径判断采用的解析器

```json
{
  "parser": null
}
```

### File Path

指定要使用的文件名，以推断要使用哪个解析器

> 该配置仅在 cli 和 API 中有效果。在配置文件中使用没有意义

```json
{
  "filepath": ""
}
```

### Require Pragma

Prettier 可以限制自己只格式化在文件顶部包含特殊注释的文件。

```json
{
  "requirePragma": false
}
```

### Insert Pragma

Prettier 可以在文件顶部插入一个特殊的 `@format` 标记，指定该文件已使用 Prettier 进行格式化。

```json
{
  "insertPragma": false
}
```

### Prose Wrap

默认情况下，由于一些服务使用对换行敏感的渲染器，例如 GiuHub comments 和 BitBucket，因此 pretty 不会更改标记文本的换行。

> always 将散文包装的打印宽度
>
> never 将散文都拆成一行
>
> preserve 什么都不做

```json
{
  "proseWrap": "preserve"
}
```

### HTML Whitespace Sensitivity

> css CSS display 属性的默认值。对于处理一样严格
>
> strict 所有标记周围的空白(或没有空白)被认为是重要的
>
> ignore 所有标记周围的空白(或没有空白)被认为是无关紧要的

```json
{
  "htmlWhitespaceSensitivity": "css"
}
```

### Vue files script and style tags indentation

是否缩进 Vue 文件中 `script` 和 `style` 标签内的代码，默认为 false

```json
{
  "vueIndentScriptAndStyle": false
}
```

### End Of Line

换行符格式

> lf 仅限换行(/n) Linux 的换行符
>
> crlf 回车 + 换行字符(/r/n)，Windows 换行符
>
> cr 只返回字符(/r)，很少使用]
>
> auto 不修改，维持现状

```json
{
  "endOfLine": "lf"
}
```

### Embedded Language Formatting

控制 Prettier 是否格式化文件中嵌入的引用代码。

> auto 如果可以识别，则格式化嵌入的代码
>
> off 永远不要自动格式化嵌入代码

```json
{
  "embeddedLanguageFormatting": "auto"
}
```

### Single Attribute Per Line

在 HTML、Vue 和 JSX 中强制每行使用单个属性，默认为 false

```json
{
  "singleAttributePerLine": false
}
```
