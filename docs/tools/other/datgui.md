# dat.Gui

dat.Gui 是一个 Gui 组件，一般常用于在三维场景中，通过简短的函数，就可以实现参数变换的功能，无需手动书写组件。

## 下载及安装

通过包管理工具安装 `dat.gui`

<CodeGroup>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm i dat.gui
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add dat.gui
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm i dat.gui
```

  </CodeGroupItem>

</CodeGroup>

或通过 cdn 等方式下载相关文件

```html
<link rel="stylesheet" href="" />
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.9/dat.gui.min.js"
></script>
```

## 快速上手

以下通过几个示例来快速上手以及了解 `dat.gui` 的使用

```js
import * as dat from 'dat.gui';
let gui = new dat.GUI();
```

<img src="/image/tools/datgui/init.jpg" />

以上就是初始化后的样子，一个简单的管控按钮，接着我们了解下 [dat.gui](https://github.com/dataarts/dat.gui) 的参数，然后我们再书写几个应用场景。

### 参数以及函数

### 数字类型

以下展示了数字类型的三个用法

- 如果具备最小值和最大值以及增量参数，则会产生滑块，可以拖动选择数值
- 如果数据类型是字符，则不可以操作
- 如果单纯是数字，则可以通过上下拖动或者按键的方式，进行增量为 1 的操作

```js
var testObj = {
  x: 10,
  y: '20',
  z: 30
};

var gui = new dat.GUI();
var f = gui.addFolder('入门');
f.add(testObj, 'x', 5, 175, 1);
f.add(testObj, 'y');
f.add(testObj, 'z');
f.open();
```

<img src="/image/tools/datgui/gui.number.gif" />

### 颜色控件

自带颜色选择器，可支持 `十六进制`，`rgb`，`rgba`,`hsv`

```js
var testObj1 = {
  color0: '#ffae23', // CSS string
  color1: [0, 128, 255], // RGB array
  color2: [0, 128, 255, 0.3], // RGB with alpha
  color3: { h: 350, s: 0.9, v: 0.3 } // Hue, saturation, value
};

var gui = new dat.GUI();
var f1 = gui.addFolder('Colors');
f1.addColor(testObj1, 'color0').name('CSS颜色值');
f1.addColor(testObj1, 'color1').name('RGB颜色值');
f1.addColor(testObj1, 'color2').name('RGBA颜色值');
f1.addColor(testObj1, 'color3').name('HUB颜色值');
f1.open();
```

<img src="/image/tools/datgui/gui.color.gif" />

### 下拉框控件

下拉控件既可以是数字类型，也可以是字符类型，都通过 `gui.add()` 方法进行配置，但与数字类型的配置有所区别

```js
var testObj2 = {
  type: 'two',
  speed: 50
};

var gui = new dat.GUI();
var f2 = gui.addFolder('下拉框类型');
f2.add(testObj2, 'type', ['one', 'two', '三']);
f2.add(testObj2, 'speed', { slow: 1, 中速: 20, fast: 50 });
f2.open();
```

<img src="/image/tools/datgui/gui.select.gif" />

## 参数

### gui.closeOnTop： Boolean

处理 `gui` 打开/关闭按钮的位置

### gui.preset：String

一组保存值的标识符

### gui.width：Number

`gui` 元素的宽度

### gui.name：String

`gui` 的名称

### gui.closed：Boolean

当前 `gui` 的折叠状态的切换

### gui.load：Object

当前 `gui` 的状态

### gui.useLocalStorage：Boolean

是否使用 `LocalStorage` 作为记录当前 `gui` 状态的方式

### gui.add(object, property, [min], [max], [step]) ⇒ Controller

> 这个一共具备几种使用方式

| 参数     | 类型     | 描述           |
| -------- | -------- | -------------- |
| object   | `Object` | 被操作的对象   |
| property | `String` | 对象中的属性   |
| min      | `Number` | 最小值         |
| max      | `Number` | 最大值         |
| step     | `Number` | 每次改变的增量 |

### gui.remove(Controller)

从 `gui` 中删除指定的属性条

### gui.destroy()

删除根 GUI 并取消绑定所有事件侦听器，要删除子的 `gui`，使用 `gui.removeFolder(folder)`

### gui.addFolder(name) ⇒ dat.gui.GUI

创建一个新的子 FolderGUI

### gui.removeFolder(FolderGUI)

移除一个指定的 FolderGUI

### gui.open()

打开图形界面

### gui.close()

关闭图形界面
