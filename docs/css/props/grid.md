---
lastUpdated: false
contributors: false
---

# grid

将网页或者区域划分成一个个网格，可以任意组合不同的网格。

## Flex 布局 和 Grid 布局的区别

Grid 布局和 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们之间有着重大的区别。
Flex 布局是轴线性质的，只能指定 "项目" 针对轴线上的位置。可以看成是 一维布局。Grid 布局则是将容器划分成 行 和 列，产生 单元格 ，然后指定项目所在的单元格，可以看作是 二维布局。所以 Flex 布局能实现的，Grid 也可以，而 Grid 能实现的 Flex 却不行，Grid 布局 远比 Flex 强大(除却兼容性)。

## 基本概念

### 容器和项目

采用网格布局的区域(使用了 display: grid )，成为容器(container)。容器内部采用网格定位的子元素，称为项目(item)。

```html
<head>
  <style>
    .grid {
      display: grid;
    }
  </style>
</head>
<div class="grid">
  <div><p>1</p></div>
  <div><p>2</p></div>
  <div><p>3</p></div>
</div>
```

> 在上面的代码中，`class` 为 `grid` 的 `<div>` 元素就是容器。而容器里面的顶层子元素 div > div 就是项目。 `<p>` 标签则是项目中的元素，而不是网格中的项目。Grid 布局中的排列仅对项目生效。

### 行，列，单元格

容器(container)中水平区域称为行(row)，垂直区域称为列(column)，行和列的交叉区域称之为单元格(cell)

> 1：列
> 2：行
> 3：单元格

<img src="/image/css/props/grid/row-cls.png" />

### 网格线

划分网格的线，称为 "网格线(grid line)"。水平网格线划分出行，垂直网格线划分出列。

<img src="/image/css/props/grid/grid-line.png" />

## 容器属性

### display: grid

将一个元素开启网格布局。
默认情况下，容器元素都是块级元素，但也可以设置成行内块元素

> 设为网格布局以后，容器子元素的 float、display: inline-block、vertical-align 都会失效

```css
div {
  display: grid; // 块级容器
  display: inline-grid; // 行内块容器
}
```

<CssPropGrid type="display" />

### grid-template-columns，grid-template-rows

指定了该元素为网格布局后，就需要划分行也列了。

- grid-template-columns：定义了每一列的列宽
- gird-template-rows：定义了每一行的行高

```css
.grid2 {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-template-rows: 50px 50px 50px;
}
```

上面代码指定了 一个 3(grid-template-columns.length) \* 3(grid-template-rows.length) 的网格。

它的行高是 50px(grid-template-rows)，列宽是 50px (grid-template-columns)。所以每一块的区域宽度不超过 50px，高度不超过 50px。

> 单位不仅可以使用 px 之类的绝对单位，也可以使用 %，em 之类的相对单位

#### repeat()

当我们的行高或者列宽，都是同一个值的时候，重复写是很浪费时间的，可以使用 `repeat(number, value)` 来简化操作。将以上代码改写后

```css
.grid2 {
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(3, 50px);
}
```

<img src="/image/css/props/grid/repeat.png" />

value 可以不仅仅是一个 而是一组值

```css
.grid2 {
  display: grid;
  grid-template-columns: repeat(1, 100px 40px 60px);
  grid-template-rows: repeat(3, 50px);
}
```

<img src="/image/css/props/grid/repeat-group.png" />

#### auto-fill 关键字

大部分做自适应的时候，都不清楚当前的容器宽度是多少，是根据情况而定的。我们需要当前一行(一列) 容纳尽可能多(不超出边界)的单元格时，可以使用 `auto-fill` 来替代 `repeat(number, value)` 的 `number` 个数

```css
.grid4 {
  width: 220px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
  grid-template-rows: repeat(3, 50px);
}
```

<img src="/image/css/props/grid/autofill.png" />

原本是一行 3 三个，当我们设置了容器宽为 220px 时， 220 / 50 = 4.4。一行就可以摆放 4 个，但是多余的 20px 不够容纳 50px 的 单元格，所以被换行到下一行。

> 在 flex 布局中，则是会默认显示一行，需要单独设置 flex-wrap: wrap 才具备换行的功能。在 grid 布局中，也是默认的几行几列，需要使用 auto-fill 才能进行动态填补

#### fr 关键字

有时候，每个单元格显示的个数是一定的，但是容器大小是会随机变化的。这时候写死列宽 50px 就不对了。需要按比例动态变化。类似于 50% 。

fr 关键字解决了这个问题，它类似于 `flex` 布局中的 `flex-grow`

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
```

<img src="/image/css/props/grid/fr.png" />

使用 fr 关键字，将一行分为了几等分，1 + 2 = 3。上述代码分为了 3 等分。第一列为 1/3 等分，第二列为 2/3 等分

> fr 就相当于 flex 中的 flex-grow，当一个有绝对值时，剩下的一样会根据 fr 的累加值进行均分

#### minmax()

`minmax(min, max)` 函数产生一个长度范围。它接受两个参数，分别为最小值和最大值。网格动态分布时，尺寸不会小于最小值，不会大于最大值

```css
.grid6 {
  width: 220px;
  display: grid;
  grid-template-columns: 1fr 2fr minmax(20px, 40px);
  grid-template-rows: repeat(3, 50px);
}
```

<img src="/image/css/props/grid/minmax.png" />

#### auto 关键字

表示由浏览器自己决定长度。
当 列宽其他都固定宽度时，仅有一个需要动态显示的，就可以给这个单元格设置为 `auto`。当前面两列列宽为 50px，第三列为 auto 这时就会将剩余的宽度都分配给第三列

```css
.grid6 {
  width: 220px;
  display: grid;
  grid-template-columns: repeat(1, 50px 50px auto);
  grid-template-rows: repeat(3, 50px);
}
```

<img src="/image/css/props/grid/auto.png" />

### grid-gap，grid-row-gap，grid-column-gap

当我们知道如何设置列宽和行高时，还需要知道如何设置单元格(Cell) 的间距( 行间距，列间距)。
使用 `grid-row-gap` 设置行间距，`grid-column-gap` 设置列间距

```css
.grid8 {
  width: 220px;
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(3, 50px);
  grid-gap: 10px 10px;
}
```

`grid-gap` 是 `grid-row-gap` 和 `grid-column-gap` 的缩写属性。

`grid-gap`: `<grid-row-gap>` `<grid-column-gap>`

> 根据最新标准规定，上面三个属性名的 grid- 前缀可以删除。简写为 row-gap，column-gap，gap。
> gap 参数可以在 Flex 布局中使用

### grid-template-areas，grid-area

网格布局允许指定区域(area)，一个区域由单个或多个单元格组成。`grid-template-areas` 属性用于定义区域。
而 `grid-area` 用于定义项目名称

```css
.grid9 {
  width: 220px;
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(3, 50px);
  gap: 10px 10px;
  grid-template-areas:
    'a a d'
    'b b b'
    'c c c';
}
.grid9 .item-1 {
  grid-area: a;
}
.grid9 .item-2 {
  grid-area: b;
}
.grid9 .item-3 {
  grid-area: c;
}
.grid9 .item-4 {
  grid-area: d;
}
```

将网格划分为 a, b, c 三个区，由于 grid-template-columns 和 grid-template-rows 设置了行高和列宽，所以 grid-template-areas 中的每一个名称都会采用其设置的宽高

<img src="/image/css/props/grid/grid-area.png" />

以上就是代码所实现的效果，1, 2, 3 通过 `grid-area` 进行定义名称，在根据 `grid-template-areas` 进行排列，如果容器中还有多余的项目，还是会根据规则正常排列下去
在使用 `grid-template-areas` 进行区域排列时，有些地方不想要这个区域时，就可以用 `.` 进行占位

```css
.grid9 {
  width: 220px;
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(3, 50px);
  gap: 10px 10px;
  grid-template-areas:
    'a a .'
    'b b b'
    'c c c';
}
.grid9 .item-1 {
  grid-area: a;
}
.grid9 .item-2 {
  grid-area: b;
}
.grid9 .item-3 {
  grid-area: c;
}
```

<img src="/image/css/props/grid/grid-area-.png" />

### grid-auto-flow

划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的防止顺序是 "先行后列" ，先填满第一行，在开始放入第二行，也就是 `grid-auto-flow: row `

<img src="/image/css/props/grid/grid-auto-flow-row.png" />

默认都是 "先行后列" 也就是 row 。也可以将它设为 column ，变成 "先列后行"。grid-auto-flow: column;

<img src="/image/css/props/grid/grid-auto-flow-column.png" />

`dense` 紧密。`grid-auto-flow` 专属可以使用。主要用于，某些项目指定位置以后，剩下的项目怎么放置。

<img src="/image/css/props/grid/grid-auto-flow-dense.png" />

如果当第一个元素和第二个元素宽度基本独占一行时，第三个会跟在第二个后面进行排列，这样就会空出一个位置，这时候可以使用 dense 进行紧密的排列

<img src="/image/css/props/grid/grid-auto-flow-dense-1.png" />

在瀑布流布局时，非常好用。`grid-auto-flow: column dense;`

<img src="/image/css/props/grid/grid-auto-flow-dense-2.png" />

### justify-items，align-items，place-items

`justify-items` 设置单元格内容的水平位置(左中右)，align-items 设置单元格内容的垂直位置(上中下)。

```css
.grid {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```

这两者写法完全相同，都可以取下面这些值

- start：对齐单元格的起始边缘(row：左，column：上)
- end：对齐单元格的结束边缘(row：右，column：下)
- center：对齐单元格的中间(row：中，column：中)
- stretch：拉伸。沾满单元格的整个宽度(默认值)

`place-items` 是上述两者的合并简写形式 `place-items: <align-items> <justify-items>`

- 例子：place-items: start end
- 如果只有一个属性值时，则默认第二个值与第一个值相等。

### justify-content，align-content，place-content

`justify-content` 是整个内容区域在容器中的水平位置(左中右)，align-content 属性是整个内容区域的垂直位置(上中下)

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between
    | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between |
    space-evenly;
}
```

- start：对其容器的起始边框

<img src="/image/css/props/grid/content-start.png" />

- end：对齐容器的结束边框

<img src="/image/css/props/grid/content-end.png" />

- center：容器内部居中

<img src="/image/css/props/grid/content-center.png" />

- stretch：项目大小没有指定时，拉伸占据整个网格容器

<img src="/image/css/props/grid/content-stretch.png" />

- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器的边框大一倍

<img src="/image/css/props/grid/space-around.png" />

- space-between：项目与项目的间隔相等，项目与容器边框之间没有间隔

<img src="/image/css/props/grid/space-between.png" />

- space-evenly：项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

<img src="/image/css/props/grid/space-evenly.png" />

`place-content` 属性是 `justify-content` 和 `align-content` 属性的合并简写形式。

`place-content: <align-content> <justify-content>`

> 如果只有一个属性值时，则默认第二个值与第一个值相等

### grid-auto-columns，grid-auto-rows

有时候，一些项目的指定位置，在现有网格的外部。比如网格是 3x3 的只有 3 列，但是某一个项目指定在第五行。如果不去指定这些超出行数或者列数的项目宽高，则会自动采用 grid-template-columns 和 grid-template-rows 的设置。

<img src="/image/css/props/grid/grid-auto-columns.png" />

通过 `grid-auto-columns` 和 `grid-auto-rows` 改写超出的项目宽高

```css
.grid11 {
  width: 220px;
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(3, 50px);
  grid-auto-rows: 30px;
  grid-auto-columns: 20px;
}
```

<img src="/image/css/props/grid/grid-auto-rows.png" />

## 项目属性

### grid-column-start，grid-column-end，grid-column，grid-row-start，grid-row-end，grid-row

在上面的基本概念中讲述了网格线的概念。而这四个属性都与网格线相关，可以指定项目从 n => n 条网格线

- grid-column-start：左边框所在的垂直网格线
- grid-column-end：右边框所在的垂直网格线
- grid-row-start：上边框所在的水平网格线
- grid-row-end：下边框所在的水平网格线

```css
.grid12 {
  width: 220px;
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(3, 50px);
}

.grid12 .item-1 {
  grid-column-start: 2;
  grid-column-end: 4;
}
```

<img src="/image/css/props/grid/grid-column-start.png" />

上面这个效果，我指定了宽度起始位置在 第二条线(列)，终止位置在第四条线(列)。然后后续的排列会按照 `grid-auto-flow` 进行排列。
除了使用 `number` 表示第几条线之外，还可以使用网格线名称来指定网格线

```css
.item-1 {
  grid-column-start: column-1;
  grid-column-end: column-2;
}
```

`span`关键字：表示跨越，即左右边框(上下边框)之间跨越多少个网格

```css
.item-1 {
  grid-column-start: span 2;
}
```

<img src="/image/css/props/grid/grid-column-start1.png" />

该关键字虽然方便跨网格的时候使用。但缺陷在于指定不了起始网格线，默认为第一条。
如果在使用这四个属性的过程中，产生了项目的重叠，则使用 z-index 属性指定项目的重叠顺序

`grid-column` 是 `grid-column-start` 和 `grid-column-end` 的合并简写形式， `grid-row` 也是 `grid-row-start` 和 `grid-row-end` 的简写

```css
.item {
  grid-column: <start-line> / <end-line>;
  grid-row: <start-line> / <end-line>;
}
```

将上面的第一个例子的代码进行改写

```css
.grid12 .item-1 {
  grid-column: 2 / 4;
}
```

<img src="/image/css/props/grid/grid-column.png" />

在之前的说明中 span 关键字使用后 不能指定起始线条，而使用简写形式就可以改善这个问题。将上述代码再次改写

```css
.grid12 .item-1 {
  grid-column: 2 / span 2;
}
```

### grid-area

`grid-area` 属性指定项目放在哪一个区域。需要配合 `grid-template-areas` 使用。具体可以查看上面的 `grid-template-areas` 属性

### justify-self，align-self，place-self

`justify-self` 属性设置单元格内容的水平位置(左中右)，与 `justify-items` 属性的用法完全一致，但只作用于单个项目
`align-self` 属性设置单元格内容的水平位置，跟 `align-items` 属性的用法完全一致，但只作用于单个项目

```css
justify-self: start | end | center | stretch;
align-self: start | end | center | stretch;
```

- start：对齐单元格的起始边缘
- end：对齐单元格的结束边缘
- center：单元格内部居中
- stretch：拉伸，占满单元格的整个宽度(默认值)

`place-self` 是 `align-self` 和 `justify-self` 属性的合并简写形式

`place-self: <align-self> <justify-self>`

> 如果只有一个属性值时，则默认第二个值与第一个值相等。
