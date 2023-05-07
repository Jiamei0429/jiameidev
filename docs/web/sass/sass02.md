---
category: [SASS,WEB前端]
tag: [sass]
---
# 3.2 Sass变量 :tada:

![](/images/sass/scss6.png)



`sass`让人们受益的一个重要特性就是它为css引入了变量。你可以把反复使用的css属性值 定义成变量，然后通过变量名来引用它们，而无需重复书写这一属性值。或者，对于仅使用过一 次的属性值，你可以赋予其一个易懂的变量名，让人一眼就知道这个属性值的用途

`sass`使用`$`符号来标识变量

比如`$highlight-color`和`$sidebar-width`。为什么选择`$` 符号呢？因为它好认、更具美感，且在CSS中并无他用，不会导致与现存或未来的css语法冲突

```scss
$highlight-color: #F90;
.selected {
 border: 1px solid $highlight-color;
}
.box{
    color: $highlight-color;
}
```

::: info 默认变量值
一般情况下，你反复声明一个变量，只有最后一处声明有效且它会覆盖前边的值
```scss
$link-color: blue;
$link-color: red;
a {
    color: $link-color; // red
}
```
:::

::: info !default说明
`!default` 作用，是将这次变量值的优先级降到最低
```scss
$link-color: blue;
$link-color: red !default;
a {
    color: $link-color; // blue
}
```
:::

::: normal-demo 效果展示
```html
<div class="left">1</div>
<div class="center">2</div>
<div class="right">3</div>
```
```scss
$color:red;
.left{
    color: $color;
}
.center{
    color: $color;
}
.right{
    color: $color;
}
```
:::









**轻松一刻** :headphones:
<AudioPlayer
  src="/mp3/2.mp3"
  title="音乐"
  poster="/mp3/2.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。