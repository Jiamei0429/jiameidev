---
category: [CSS,WEB前端]
tag: css
---

# 2.1 初体验CSS :tada:
![](/images/css/css1.png)

从HTML被发明开始，样式就以各种形式存在。不同的浏览器结合它们各自的样式语言为用户提供页面效果的控制。最初的HTML只包含很少的显示属性。

随着HTML的成长，为了满足页面设计者的要求，HTML添加了很多显示功能。但是随着这些功能的增加，HTML变的越来越杂乱，而且HTML页面也越来越臃肿。于是CSS便诞生了。

在这里，首先我们要了解几个概念

::: info CSS概念
CSS（Cascading Style Sheets）层叠样式表，又叫级联样式表，简称样式表

CSS文件后缀名为`.css`

CSS用于HTML文档中元素样式的定义
:::

::: info 为什么需要CSS
使用css的目的就是让网页具有美观一致的页面
:::

::: info CSS和HTML之间的关系

HTML用于构建网页的结构

CSS用于构建HTML元素的样式

HTML是页面的内容组成，CSS是页面的表现
:::

## css语法 :gem:
CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明

![](/images/css/css2.png)

选择器通常是您需要改变样式的 HTML 元素

每条声明由一个属性和一个值组成

属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开

```html
<style>
  h1{
    color: blue;
    font-size: 12px;
   }
</style>
```

下面我们简单看一下使用css后的具体效果：

::: normal-demo 使用css之前的效果
```html
<h4>我是按钮</h4>
<button>按钮</button>
<h5>我是输入框</h5>
<input type="text">
```
:::

::: normal-demo 使用css之后的效果
```html
<h4>我是按钮</h4>
<button>按钮</button>
<h5>我是输入框</h5>
<input type="text">
```
```css
h4 {
    color: pink;
    background-color: blue;
}

button {
    background: purple;
    width: 100px;
    height: 30px;
    border-radius: 2px;
    background-color:#000;
    color:#fff;
}

h5 {
    color: red;
    font-size:30px;
    text-decoration: line-through;
}

input {
    border-radius: 10px;
    width: 200px;
    height: 40px;
    padding:0 20px;
    outline: none;
    border: 1px solid rgb(201, 43, 177);
}
```
:::

::: vue-playground 随堂训练
@file App.vue
```vue
<template>
   <!--这里写html代码-->
</template>

<style scoped>
   /* 这里写css代码 */
</style>
```
:::


## CSS的引入方式 :gem:

![](/images/css/css3.png)

### 内联样式（行内样式） :ghost:
要使用内联样式，你需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性

```html
<p style="background: orange; font-size: 24px;">CSS<p>
```

::: tip 
内联样式乏整体性和规划性，不利于维护，维护成本高
:::


### 内部样式 :ghost:
当单个文档需要特殊的样式时，就应该使用内部样式表。你可以使用 `<style>` 标签在文档头部定义内部样式表

```html {9-18}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        input {
            border-radius: 10px;
            width: 200px;
            height: 40px;
            padding:0 20px;
            outline: none;
            border: 1px solid rgb(201, 43, 177);
        }
    </style>
</head>

<body>
    <input type="text">
</body>

</html>
```

::: tip 
`style`标签放在`head`标签之间，个人习惯放到`title`后面

单个页面内的CSS代码具有统一性和规划性，便于维护，但是在多个页面之间容易混乱
:::



### 外部样式（推荐） :ghost:

当样式需要应用于很多页面时，外部样式表将是理想的选择。在使用外部样式表的情况下，你可以通过改变一个文件来改变整个站点的外观。每个页面使用 `<link>` 标签链接到样式表。 `<link>` 标签在（文档的）头部

::: code-tabs#shell
@tab html
```html {10}
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="./index.css">
</head>

<body>
    <input type="text">
</body>

</html>
```
@tab css
```css
/* index.css */
input {
    border-radius: 10px;
    width: 70px;
    height: 30px;
}
```
:::

### 导入式（了解即可） :ghost:

此种方式使用率比较低,因为会影响加载速度

```html
<style type="text/css">
  @import url("css文件路径");
</style>
```

::: tip @import和link的区别
  - `@import`是CSS提供加载样式的一种方式，只能用于加载CSS。link标签除了可以加载CSS外，还可以做很多其它的事情，比如定义rel连接属性等
  - 加载顺序的差别。当一个页面被加载的时候，link引用的CSS会同时被加载，`@import`引用的CSS会等到页面全部被下载完再被加载。所以有时候浏览`@import`加载CSS的页面时开始会没有样式（就是闪烁），网速慢的时候会比较明显
  - 兼容性的差别。`@import`在IE5以上才能识别，而link标签无此问题
  - 使用dom控制样式时的差别。当使用javascript控制dom去改变样式的时候，只能使用link标签，因为dom操作元素的样式时，用`@import`方式的样式也许还未加载完成
  - 使用`@import`方式会增HTTP请求，会影响加载速度，所以谨慎使用该方法
:::


::: vue-playground 随堂训练
@file App.vue
```vue
<template>
   <!--这里写html代码-->
</template>

<style scoped>
   /* 这里写css代码 */
</style>
```
:::


## CSS样式表特征 :gem:

![](/images/css/css4.png)

### 继承性 :ghost:

指被包含在内部的标签可以拥有外部标签的样式，比如：text-、font-、line-height，但有些属性不能继承，比如：border、padding、margin

```html
<div>
    <p>我是黑色</p>
    <h3>我是黑色</h3>
</div>
```
```css
div{
    color: black;
}
```
很明显，`p`和`h3`都继承了`div`的颜色

### 层叠性 :ghost:

简单的说，层叠就是对一个元素多次设置同一个样式，这将使用最后一次设置的属性值。例如对一个站点中的多个页面使用了同一套CSS样式表，而某些页面中的某些元素想使用其他样式，就可以针对这些样式单独定义一个样式表应用到页面中。这些后来定义的样式将对前面的样式设置进行重写，在浏览器中看到的将是最后面设置的样式效果

```html
<p>我是红色</p>
```
```css
p{
    color: black;
}

p{
    color: red;
}
```
很明显，后面把前面的颜色给覆盖掉了

### 优先级 :ghost:
样式定义冲突时，按照不同样式规则的优先级来应用样式

行内样式>内部样式（外部样式）

::: tip
内部样式和外部样式优先级一样，写在后面的生效
:::

### CSS注释 :ghost:
注释是用来解释你的代码，并且可以随意编辑它，浏览器会忽略它

CSS注释以 `/*` 开始, 以 `*/`结束,

```css
/* 这是注释 */
```

::: vue-playground 随堂训练
@file App.vue
```vue
<template>
   <!--这里写html代码-->
</template>

<style scoped>
   /* 这里写css代码 */
</style>
```
:::

## 基础选择器 :gem:

![](/images/css/css5.png)

### 全局选择器 :ghost:
可以与任何元素匹配，优先级最低，不推荐使用
```css
*{
   margin: 0;
   padding: 0;
}
```
::: tip
不同的浏览器会带有相应的内外边距，可以用此进行清除！
:::

### 元素选择器 :ghost:
HTML文档中的元素，`p`、`b`、`div`、`a`、`img`、`body`等。

标签选择器，选择的是页面上所有这种类型的标签，所以经常描述“共性”，无法描述某一个元素的“个性”

```css
p{
  font-size:14px;
}
```
再比如说，我想让“学完前端，继续学Java”这句话中的“前端”两个变为红色字体，那么我可以用`<span>`标签把“前端”这两个字围起来，然后给`<span>`标签加一个标签选择器
```html
<p>学完了<span>前端</span>，继续学Java</p>
```
```css
span{
    color: red;
}
```

::: tip
所有的标签，都可以是选择器。比如ul、li、label、dt、dl、input、div等

无论这个标签藏的多深，一定能够被选择上

==选择的所有，而不是一个==
:::

### 类选择器 :ghost:
规定用圆点 `.` 来定义，针对你想要的所有标签使用

::: tip class属性的特点
类选择器可以被多种标签使用

类名不能以数字开头

同一个标签可以使用多个类选择器。用空格隔开
:::

```html
<h2 class="oneclass">你好</h2>
<h3 class="classone classtwo">我是一个h3啊</h3>
```
```css
.oneclass{
   color: red; 
}
.classone{
   color: pink; 
}
.classtwo{
   background: yellow; 
}
```

### ID选择器 :ghost:
针对某一个特定的标签来使用，==只能使用一次== 。css中的`ID选择器`以 `#` 来定义

::: tip 特别提示
ID是唯一的

ID不能以数字开头
:::

```html
<h2 id="mytitle">你好</h2>
```
```css
#mytitle{
   border:3px solid green;
}
```

### 合并选择器 :ghost:
语法：`选择器1,选择器2,...{ }`

作用：提取共同的样式，减少重复代码

```html
<p class="cls1">你好,</p>
<p class="cls2">李焕英</p>
```
```css
.cls1,.cls2{
   color: green;
}
```

### `!important`和优先级 :ghost:


`!important` 直接把优先级增加到最大

```html
<p class="cls">你好</p>
```
```css
.cls{
   color: yellow !important;
}
.cls{
   color: red;
}
```

这里我们能看到字的颜色依旧是黄色，并没有被红色给覆盖掉。

::: info 选择器的优先级
CSS中,权重用数字衡量
  - 全局选择器的权重为: 最小

  - 元素选择器的权重为: 1

  - class选择器的权重为: 10

  - id选择器的权重为: 100

  - 内联样式的权重为: 1000

  - `!important` 的权重为: 最大
:::

::: vue-playground 随堂训练
@file App.vue
```vue
<template>
   <!--这里写html代码-->
</template>

<style scoped>
   /* 这里写css代码 */
</style>
```
:::


## 网页结构布局实战 :gem:
![](/images/css/css6.png)

::: info 布局时常用的属性

| 属性             | 描述                              |
| ---------------- | --------------------------------- |
| width            | 宽度                              |
| height           | 高度                              |
| background-color | 背景颜色                          |
| float            | 浮动（div不在独占一行，左右摆放） |

:::


::: normal-demo 布局-上中下结构
```html
<div class="header"></div>
<div class="content"></div>
<div class="footer"></div>
```

```css
.header {
  height: 80px;
  background-color: #fcc;
}

.content {
  height: 200px;
  background-color: #ff9;
}

.footer {
  height: 80px;
  background-color: #ccf;
}
```
:::

::: normal-demo 布局-上中下-左右
```html
<div class="container">
  <div class="header"></div>
  <div class="nav"></div>
  <div class="content">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
  </div>
  <div class="footer"></div>
</div>
```

```css
.header {
  width: 100%;
  height: 60px;
  background-color: red;
}
.nav {
  width: 100%;
  height: 50px;
  background-color: pink;
}
.content {
  width:100%;
  height: 200px;
  background-color: yellow;
}
.footer {
  width: 100%;
  height: 80px;
  background-color: deepskyblue;
}
.left {
  width: 33.33%;
  height: 200px;
  background-color: palegoldenrod;
  float: left;
}
.center {
  width: 33.33%;
  height: 200px;
  background-color: palegreen;
  float: left;
}
.right {
  width: 33.33%;
  height: 200px;
  background-color: palevioletred;
  float: left;
}
```
:::














::: vue-playground 随堂训练
@file App.vue
```vue
<template>
   <!--这里写html代码-->
</template>

<style scoped>
   /* 这里写css代码 */
</style>
```
:::

**轻松一刻** :headphones:
<AudioPlayer
  src="/mp3/1.mp3"
  title="音乐"
  poster="/mp3/1.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。





