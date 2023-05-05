---
category: [HTML,WEB前端]
tag: html
---
# 1.5 字符与元素分类:tada:

## 实体字符 :gem:
![](/images/html/html20.png)

我们考虑⼀个问题，如果我们要在页面上显示⼀个`<`的时候，应该如何来写，如果直接写符号显然是不合理的，毕竟，它是属于标签的关键字，那我们应该如何来实现呢？

如果希望正确地显示预留字符，我们必须在 HTML 源代码中使用字符实体

```html
<p>&#165;</p>
<p>&reg;</p>
```

| 显示结果 |       描述        |    实体名称    | 实体编号 |
| :------: | :---------------: | :------------: | :------: |
|          |       空格        |      &nbsp    |   &#160   |
|    <     |      小于号       |      &lt      |   &#60    |
|    >     |      大于号       |      &gt      |   &#62   |
|    &     |       和号        |      &amp     |  &#38   |
|    "     |       引号        |      &quot    |   &#34    |
|    '     |       撇号        | &apos (IE不支持) |   &#39    |
|    ©     | 版权（copyright） |      &copy       |   &#169    |
|    ®     |     注册商标      |      &reg      |   &#174    |
|    ¥     |     元（yen）     |      &yen       |   &#165   |

::: warning
实体名称对大小写敏感！

后边必须带 ";"
:::


::: normal-demo 效果展示
```html
<p>&#165;</p>
<p>&reg;</p>
<p>&copy;</p>
<p>&#38; </p>
```
:::


::: vue-playground 随堂训练
@file App.vue
```vue
<template>
   <!--这里写html代码-->
</template>
```
:::

**轻松一刻** :headphones:
<AudioPlayer
  src="/mp3/5.mp3"
  title="音乐"
  poster="/mp3/5.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。












## 元素分类 :gem:
![](/images/html/html21.png)

HTML5出现之前，经常把元素按照块级元素和内联元素来区分。在HTML5中，元素不再按照这种⽅式来区分， 而是按照内容模型来区分，分为元数据型、区块型、标题型、文档流型、语句型、内嵌型、交互型。元素不属于任何⼀个类别，被称为穿透的，元素可能属于不止⼀个类别，称为混合的

虽然到了HTML5的版本，元素分类更细致了，但是这对初学者并不友好,所以我们仍然按照块元素和内联元素做区分，这对我们的布局起到了至关重要的作用

内联元素和块级元素的区别：

|                   块级元素                   |                   内联元素                   |
| :------------------------------------------: | :------------------------------------------: |
| 块元素会在页面中独占一行（自上向下垂直排列） | 行内元素不会独占页面中的一行，只占自身的大小 |
|          可以设置width，height属性           |      行内元素设置width，height属性无效       |
|  ⼀般块级元素可以包含行内元素和其他块级元素  |    ⼀般内联元素包含内联元素不包含块级元素    |


::: info 常见块级元素
div、form、h1~h6、hr、p、table、ul、等
:::

::: info 常见内联元素
a、b、em、i、span、strong等
:::

::: info 行内块级元素（特点：不换行、能够识别宽高）
button、img、input等
:::


::: normal-demo 效果展示
```html
<p>我是块1</p>
<ul>我是块2</ul>
<span>我是内联元素1</span>
<em>我是内联元素2</em>
<br />
<button>我是行内块级元素1，虽然不换行，但是识别宽高</button>
<input type="text" value="我是行内块级元素2，虽然不换行，但是识别宽高"/>
```
:::


::: vue-playground 随堂训练
@file App.vue
```vue
<template>
   <!--这里写html代码-->
</template>
```
:::

**轻松一刻** :headphones:
<AudioPlayer
  src="/mp3/6.mp3"
  title="音乐"
  poster="/mp3/6.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。