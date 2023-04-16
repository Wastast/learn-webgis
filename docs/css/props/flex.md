---
lastUpdated: false
contributors: false
---

# flex

Flex 是 Flexible Box 的缩写，意为 "弹性布局"，用来为盒装模型提供最大的灵活性。
任何一个容器都可以指定 Flex 布局

```css
/* 块级容器 */
.box {
  display: flex;
}
/* 行内块容器 */
.box {
  display: inline-flex;
}
```

## 基本概念

采用 Flex 布局的元素，称为 Flex 容器 (flex container)，简称 "容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称 "项目"

<img src="/image/css/props/flex/flex-box.png" />

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴开始的位置(与容器的边界的交叉点)叫做 `main start` ，结束的位置叫 `main end`；交叉轴的开始位置叫 `cross start`，结束的位置叫 `cross end`。

项目(容器成员) 默认沿主轴从左到右进行排列。单个项目在主轴所占空间叫 `main size`，占据的交叉轴空间叫 `cross size`。

## 容器的属性

### flex-direction

```css
flex-direction: row | row-reverse | column | column-reverse;
```

该属性决定主轴的方向（项目的排列方向）

- row(默认值)：主轴为水平方向，起点在左端，项目排列从左到右
- row-reverse：主轴为水平方向，起点在右端，项目排列从右到左(row 的 翻转)
- column：主轴为垂直方向，起点在上方，项目排列从上到下
- column-reverse：主轴为垂直方向，起点在下方，项目排列从下到上

### flex-wrap

```css
flex-wrap: wrap | nowrap | wrap-reverse;
```

该属性决定项目如果在一条轴线上排不下，该如何换行

- nowrap(默认)：不换行，如果项目个数超出预期一行显示个数，会压缩项目的宽度
- wrap：换行，第二行在第一行的下方（在主轴上，自上而下换行，在交叉轴上自左向右换行
- wrap-reverse：换行，与 wrap 相反

### flex-flow

```css
flex-flow: row nowrap;
```

`flex-flow` 属性是 `flex-direction` 和 `flex-wrap` 两个属性的简写形式;

### justify-content

```css
justify-content: flex-start | flex-end | center | space-between | space-around |
  space-evenly;
```

该属性定义了项目在主轴(row)上的对齐方式。根据主轴的起点不同会有不同的效果

- flex-start(默认值)：主轴起点对齐
- flex-end：主轴尾部对齐
- center：居中
- space-between：两端对齐，项目之间的间隔都相等(最左与最右这两元素触碰边界)
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框之间的间隔大
- space-evenly：每个项目在不换行的前提下，间隔都均匀相等，与边框也一样

### align-items

```css
align-items: flex-start | flex-end | center | baseline | stretch;
```

该属性定义项目在交叉轴上如何对齐。根据交叉轴的起点不同会有不同效果

- flex-start：交叉轴起点对齐
- flex-end：交叉轴尾部对齐
- center：交叉轴居中对齐
- baseline：项目的第一行的基线对齐
- stretch(默认)： 如果项目未设置高度会设为 auto，将会占满整个容器的高度

### align-content

```css
align-content: flex-start | flex-end | center | space-between | space-around |
  stretch;
```

该属性定义了多跟轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

- flex-start：与交叉轴的起点对齐
- flex-end：与交叉轴的终点对齐
- center：与交叉轴的中点对齐
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大
- stretch(默认值)：轴线沾满整个交叉轴

## 项目(成员)的属性

### order

定义项目在轴线中的排列顺序。数值越小，排列越靠前，相同则按照 HTML 加载顺序

<img src="/image/css/props/flex/item-order.png" />

### flex-grow

定义项目的放大比例，默认为 0(如果存在剩余空间，也不放大)
如果所有项目(成员)的 flex-grow 属性都为 1，则他们将等分剩余空间。如果一个项目的 flex-grow 属性为 2，其他项目都为 1，则为 2 的占据剩余空间将比其他项目多一倍

<img src="/image/css/props/flex/flex-grow.png" />

### flex-shrink

该属性定义了项目的缩小比例，默认 1(如果空间不足，该项目将缩小)。
如果所有项目的 `flex-shrink`属性都为 1， 当空间不足时，都将等比例缩小。如果一个项目 `flex-shrink` 属性为 0，其他项目为 1，则空间不足时，前者不缩小。

<img src="/image/css/props/flex/flex-shrink.jpg" />

### flex-basis

```css
flex-basis：auto
```

该属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有杜宇空间。默认值为 `auto`，即项目的本来大小。

### flex

```css
flex: none | [ < flex-grow > < flex-shrink >? || < flex-basis > ];
```

该属性是 `flex-grow`, `flex-shrink`, `flex-basis` 的简写, 默认值为 0 1 auto。后两个属性可选
简写的属性优先推荐，浏览器会根据该属性更好的计算相关值

### align-self

```css
align-self： auto | flex-start | flex-end | center | baseline | stretch
```

该属性允许单个项目有与其他项目不一样的对齐方式，可覆盖
默认为 `auto` ，表示继承父元素的 `align-items` 属性，如果没有父元素，则等同于 `stretch`
