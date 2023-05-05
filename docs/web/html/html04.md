---
category: [HTML,WEB前端]
tag: html
---
# 1.4 HTML5新增元素 :tada:

## 容器元素（div） :gem:

![](/images/html/html22.png)

`<div>` 可定义文档中的分区或节（division/section）

`<div>` 标签可以把文档分割为独立的、不同的部分

`<div>` 是一个块级元素。这意味着它的内容自动地开始一个新行

`<div>`主要应用在布局上，作为布局的每个区域的容器

```html
<div>
  <p>1</p>
  <p>2</p>
</div>
```

::: normal-demo 效果展示
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .container{
      width: 100%;
      margin: 0 auto;
     }
    .header{
      height:50px;
      background-color:#abcdef;
     }
    .nav{
      margin-top:10px;
      height:50px;
      background-color:#abcdef;
     }
    .main{
      height: 200px; 
      margin-top:10px;
     }
    .main .left{
      float: left;
      width: 55%;
      height: 200px;
      background-color:#abcdef;      
     }
    .main .right{
      float: right;
      width: 40%;
      height: 200px;
      background-color:#abcdef;      
     }
    .footer{
      height: 40px; 
      margin-top:10px;
      background-color:#abcdef;  
     }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">网站头部</div>
    <div class="nav">网站导航</div>
    <div class="main">
      <div class="left">网站主要内容</div>
      <div class="right">网站右侧模块</div>
    </div>
    <div class="footer">网站底部</div>
  </div>
</body>
</html>
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
  src="/mp3/7.mp3"
  title="音乐"
  poster="/mp3/7.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。


## 新增布局标签 :gem:

![](/images/html/html23.png)

HTML5是HTML最新的修订版本，2014年10月由万维网联盟（W3C）完成标准制定

在HTML5出现之前，我们一般采用DIV+CSS布局我们的页面。但是这样的布局方式不仅使我们的文档结构不够清晰，而且不利于搜索引擎爬虫对我们页面的爬取。为了解决上述缺点，HTML5新增了很多新的语义化标签

::: info H5新标签
  - `<header></header>` 头部
  - `<nav></nav>` 导航
  - `<section></section>`定义文档中的节,比如章节、页眉、页脚
  - `<aside></aside>` 侧边栏
  - `<footer></footer>` 脚部
  - `<article></article>` 代表一个独立的、完整的相关内容块,例如一篇完整的论坛帖子，一篇博客文章，一个用户评论等
:::

::: tip
div+css实现
![](/images/html/html24.png)

H5新标签实现
![](/images/html/html25.png)
:::


::: normal-demo 效果展示
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    header {
      height: 50px;
      background-color: #abcdef;
      width: 100%;
     }
    div {
      margin-top: 10px;
      height: 150px;
     }
    section {
      height: 150px;
      background-color: #abcdef;
      width: 70%;
      float: left;
     }
    article {
      background-color: #F33;
      width: 100%;
      text-align: center;
      margin: 0px auto;
     }
    aside {
      height: 150px;
      background-color: #abcdef;
      width: 28%;
      float: right;
     }
    footer {
      height: 50px;
      background-color: #abcdef;
      clear: both;
      margin-top: 10px;
     }
  </style>
</head>
<body>
  <header>定义一个页面或是区域的头部</header>
  <div>
    <section>定义一个区域</section>
    <aside>定义页面内容的侧边框部分</aside>
  </div>
  <footer>定义一个页面或是区域的底部</footer>
</body>
</html>
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
  src="/mp3/8.mp3"
  title="音乐"
  poster="/mp3/8.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。








## 视频和音频标签 :gem:

![](/images/html/html26.png)

HTML5未出来之前，在线的音频和视频都是借助Flash或者第三方工具实现的，现在HTML5也支持了这方面的功能。在一个支持HTML5的浏览器中，不需要安装任何插件就能播放音频和视频。

### 视频 :ghost:

Video标签定义视频，比如电影片段或其他视频流

```html
<video src="movie.mp4" controls>
    您的浏览器不支持 video 标签。
</video>
```

| 属性       | 描述                          |
| ---------- | ----------------------------- |
| `src`      | 要播放的视频的`URL`           |
| `autoplay` | 自动播放                      |
| `controls` | 显示控件,比如播放按钮         |
| `loop`     | 循环播放                      |
| `muted`    | 输出被静音                    |
| `preload`  | 页面加载的时候,自动预加载资源 |
| `height`   | 设置播放器高度                |
| `width`    | 设置播放器宽度                |
| `poster`   | 视频封面                      |

### 音频 :ghost:

Audio 标签定义声音，比如音乐或其他音频流

```html
<audio src="someaudio.mp3">
    您的浏览器不支持 audio 标签。
</audio>
```

| 属性       | 描述                          |
| ---------- | ----------------------------- |
| `src`      | 要播放的音频的`URL`           |
| `autoplay` | 自动播放                      |
| `controls` | 显示控件,比如播放按钮         |
| `loop`     | 循环播放                      |
| `muted`    | 输出被静音                    |
| `preload`  | 页面加载的时候,自动预加载资源 |


::: info source标签
`<source>`标签为媒介元素（比如 `<video>`和 `<audio>`）定义媒介资源。

`<source>`标签允许您规定可替换的视频/音频文件供浏览器根据它对媒体类型或者编解码器的支持进行选择

```html
<audio controls>
   <source src="horse.ogg" >
   <source src="horse.mp3" >
    你的浏览器不支持此标签
</audio>
```
:::

::: normal-demo 效果展示
```html
<audio controls>
   <source src="/mp3/2.mp3" >
    你的浏览器不支持此标签
</audio>
<video controls width="100%">
  <source src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" >
    您的浏览器不支持 audio 标签。
</video>
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
  src="/mp3/1.mp3"
  title="音乐"
  poster="/mp3/1.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。



## 新增部分不常用标签 :gem:

![](/images/html/html27.png)

### figure :ghost:
用于对元素进行组合。多用于图片与图片描述组合

::: normal-demo figure
```html
<figure>
    <img src="/images/logo.png" alt="figure标签" title="figure标签" width="200px"/>
    <figcaption>figure的标题</figcaption>
</figure>
```
:::
### details :ghost:
`<details>`用于描述文档或文档的某个部分的细节，类似于下拉列表

::: normal-demo details
```html
<details>
   <summary>指定的标题，用户点击标题时展示下面的所有内容，内容可以是任何形式的内容</summary>
   <div>
     <p>内容描述</p>
   </div>
</details>
<!-- 当增设open属性时，描述内容默认展示 -->
<details open>
   <summary>指定的标题，用户点击标题时展示下面的所有内容，内容可以是任何形式的内容</summary>
   <div>
     <p>内容描述</p>
   </div>
</details>
```
:::
### mark :ghost:
主要用来在视觉上向用户呈现那些需要突出的文字。`<mark>`标签的一个比较典型的应用就是在搜索结果中向用户高亮显示搜索关键词

::: normal-demo mark
```html
<p>你是<mark>大长腿</mark>吗？</p>
```
:::
### meter :ghost:
定义度量衡。仅用于已知最大和最小值的度量
::: info
low：最低临界点

high：最高临界点

Min：最小值

Max：最大值

Value：当前值
:::

::: normal-demo meter
```html
<meter min="0" max="100" value="81" low="20" high="80"></meter>
```
:::


### progress :ghost:
运行中的进程。可以使用 `<progress>`标签来显示 JavaScript中耗费时间的函数的进程
::: info
max：定义完成值

value：定义当前值
:::

::: normal-demo progress
```html
<progress max="100" value="20"></progress>
```
:::


### datalist :ghost:
定义可选数据的列表。与 `input`元素配合使用，就可以制作出输入值的下拉列表。

`datalist` 及其选项不会被显示出来，它仅仅是合法的输入值列表。

请使用 `input` 元素的 `list`属性来绑定 `datalist`

::: normal-demo datalist
```html
<input id="myCar" list="cars" />
<datalist id="cars">
   <option value="BMW">
   <option value="Ford">
   <option value="Volvo">
</datalist>
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
  src="/mp3/3.mp3"
  title="音乐"
  poster="/mp3/3.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。
