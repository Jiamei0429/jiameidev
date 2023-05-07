---
category: [SASS,WEB前端]
tag: [sass]
---
# 3.7 Sass运算 :tada:

![](/images/sass/scss13.png)

Sass支持数字的加减乘除等运算 `(+, -, *, /)`，如果必要会在不同单位间转换值

```scss
$size:1000px;
.root{
    width: $size + 200px;
}
.root1{
    width: $size - 200px;
}
.root2{
    width: $size * 2;
}
.root3{
    width: ($size / 2);
}
.root4{
    width: ($size - 400) * 2;
}
```
::: warning 
运算过程中，不同单位不要参与运算

乘或除的时候不要带单位，加减可以带单位
:::

在移动端适配的时候，通常会有REM计算

例如：根 `font-size`为 `50px`, 设计师给的数值是`340px`

```scss
$fontREM:50;
.root{
    width:(340rem / $fontREM);
}
```


::: normal-demo 效果展示
```html
<div id="content">
    <h1>1</h1>
    <p class="p1">2</p>
    <p class="p2">3</p>
    <p class="p3">4</p>
</div>
```
```scss
$size:14px;
#content {
    h1 { 
        font-size: $size;
    }
    .p1 { 
        font-size: $size - 2px;
    }
    .p2 { 
        font-size: $size + 2;
    }
    .p3 { 
        font-size: $size * 2;
    }
}
```
:::















**轻松一刻** :headphones:
<AudioPlayer
  src="/mp3/7.mp3"
  title="音乐"
  poster="/mp3/7.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。