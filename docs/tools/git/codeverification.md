# 使用 husky + lint-staged + commitlint + commitizen 代码提交校验

## 工具

- husky：操作 git 钩子的工具
- lint-staged：本地暂存代码检查工具
- commitlint：commit 信息校验工具
- commitzen：辅助 commit 信息，通过选择以及描述，来简短的实现一个规范的提交信息

## 流程

### 1.安装 husky

在终端执行以下安装命令

<CodeGroup>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm i husky -D
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add husky -D
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm i husky -D
```

  </CodeGroupItem>

</CodeGroup>

在终端执行 `npm i husky -D`，并在 `package.json` 中添加命令

```json
{
  "scripts": {
    ...,
    "prepare": "husky install",
  }
}
```

执行 `npm run prepare` 会进行 **husky** 的初始化，在项目的根目录中创建 **.husky** 的文件夹

### 2.安装 lint-staged 并添加好配置

执行以下命令安装 [lint-staged](https://github.com/okonet/lint-staged)

<CodeGroup>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm i lint-staged -D
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add lint-staged -D
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm i lint-staged -D
```

  </CodeGroupItem>

</CodeGroup>

执行以下命令创建 `pre-commit` 的提交钩子

```shell
npx husky add .husky/pre-commit "npx lint-staged"
```

执行该命令会在 **.husky** 文件夹中创建 `pre-commit` 文件 并添加 `npx lint-staged` 指令

> 如果执行命令失败，则分开执行，先执行 `npx husky add .husky/pre-commit`，再将 `npx lint-staged` 写入到 `./husky/pre-commit` 中

在项目的根目录中创建 `.lintstagedrc.json` 并添加以下配置

```json
{
  "*.{js,jsx,ts,tsx}": ["prettier --write .", "eslint  --fix"],
  "*.md": ["prettier --write"]
}
```

:::tip 注意
需要安装 eslint 和 prettier，如果未安装则校验的时候会报错
:::

### 3.安装提交信息校验依赖 commitlint

执行以下命令安装 [commitlint](https://github.com/conventional-changelog/commitlint)

<CodeGroup>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm i commitlint -D
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add commitlint -D
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm i commitlint -D
```

  </CodeGroupItem>

</CodeGroup>

执行以下命令创建 `commit-msg` 校验文件

```shell
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

执行上述执行可以在 **.husky** 文件夹中看到一个 `commit-msg` 文件

> 如果执行命令失败，则分开执行 先 `npx husky add .husky/commit-msg` 再将 `npx --no-install commitlint --edit $1` 写入到 ./husky/commit-msg 中

### 4.安装辅助提交依赖，以及自定义提交信息 commitzen + commitlint-config-cz + cz-customizable

<CodeGroup>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm i commitizen commitlint-config-cz cz-customizable -D
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add commitizen commitlint-config-cz cz-customizable -D
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm i commitizen commitlint-config-cz cz-customizable -D
```

  </CodeGroupItem>

</CodeGroup>

在 `package.json` 中添加命令

```json
{
  "scripts": {
    ...,
    "prepare": "husky install",
    "commit": "git add . && git-cz"
  }
}
```

新建 `.commitlintrc` 文件，并添加内容

> 可以是 .json .yaml .yml .js .cjs .ts 看项目情况以及构建工具类别、版本而定

```json
{
  "extends": ["cz"],
  "rules": {}
}
```

增加 `.cz.config.js`。 [查看配置](https://github.com/leoforfree/cz-customizable)

> 可以是 .js .cjs 看项目情况以及构建工具类别、版本而定

```js
'use strict';
module.exports = {
  types: [
    { value: '✨新增', name: '新增:    新的内容' },
    { value: '👍修改', name: '修改:    将原有内容进行调整' },
    { value: '🐛修复', name: '修复:    修复一个Bug' },
    { value: '📝文档', name: '文档:    变更的只有文档' },
    { value: '💄格式', name: '格式:    空格, 分号等格式修复' },
    { value: '♻️重构', name: '重构:    代码重构，注意和特性、修复区分开' },
    { value: '⚡️性能', name: '性能:    提升性能' },
    { value: '✅测试', name: '测试:    添加一个测试' },
    { value: '🔧工具', name: '工具:    开发工具变动(构建、脚手架工具等)' },
    { value: '⏪回滚', name: '回滚:    代码回退' }
  ],
  messages: {
    type: '请选择提交类型:',
    customScope: '当前提交文件更改的范围:', // 需要 allowCustomScopes: true
    subject: '请简要描述提交:\n',
    body: '请输入详细描述(可选):\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue,例如：#31, #34(可选):\n',
    confirmCommit: '确认以上信息提交?(y/n)'
  },
  skipQuestion: ['footer'], // 跳过问题
  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  subjectLimit: 100
};
```

在 `package.json` 中添加的 config 命令

```json
{
  "config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    },
    "cz-customizable": {
      "config": ".cz.config.js"
    }
  }
}
```

## 总结

至此我们就把一套代码提交的校验流程做好了，可能会根据某些构建工具的版本会有些变化及出入，视情况个人进行调整。

代码提交时，只需要执行 `npm run commit` 即可自动提交文件到暂存区域以及文件的验证
