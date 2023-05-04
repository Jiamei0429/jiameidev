---
category: [HTML,WEB前端]
tag: html
---

# 1.2 基础元素:tada:

## 标签之标题 :gem:
![](/images/html/html5.png)

- 标题（Heading）是通过`<h1> - <h6>`标签进行定义的。`<h1>`定义最大的标题 ,`<h6>`定义最小的标题。
- 请确保将 HTML 标题标签只用于标题。不要仅仅是为了生成粗体或大号的文本而使用标题。正确使用标题有益于SEO，应该将`<h1>` 用作主标题（最重要的），其后是 `<h2>`（次重要的），再其次是 `<h3>`，以此类推。
- 标题标签位置摆放，在标签中添加属性：`align="left | center | right"` 默认居左

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6 align="center">六级标题</h6>
```

::: info 标题属性
- [ ] align：设置水平线的对齐方式（默认居中），可取值`left| center| right`
:::

::: tip
生成h1~h6快捷键：h$*6
:::

::: normal-demo 效果展示
```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5 align="right">五级标题</h5>
<h6 align="center">六级标题</h6>
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

**轻松一刻**
<AudioPlayer
  src="/mp3/1.mp3"
  title="音乐"
  poster="/mp3/1.jpg"
/>

**视频教程** :film_projector:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。




















## 标签之段落_换行_水平线:gem:

![](/images/html/html6.png)

### 段落 :ghost:
段落是通过`<p>`标签定义的

```html
<p>这是一个段落 </p> 
<p>这是另一个段落</p>
```

### 换行 :ghost:
如果你希望在不产生一个新段落的情况下进行换行（新行），请使用 `<br>`

```html
<p>这个<br>段落<br>演示了分行的效果</p>
```

### 水平线 :ghost:
`<hr/>`标签在 HTML 页面中创建水平线
 
::: info 水平线属性
- [ ] color：设置水平线的颜色
- [ ] width：设置水平线的长度
- [ ] size：设置水平线的高度
- [ ] align：设置水平线的对齐方式（默认居中），可取值`left|center|right`
:::

```html
<hr color="" width="" size="" align=""/>
```

::: normal-demo 效果展示
```html
<p>这是一个段落 </p> 
<p>这是另一个段落</p>
<p>这个<br>段落<br>演示了分行的效果</p>
<hr color="red" width="80%" size="10px" align="center"/>
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

**轻松一刻**
<AudioPlayer
  src="/mp3/2.mp3"
  title="音乐"
  poster="/mp3/2.jpg"
/>

**视频教程** :film_projector:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。
























## 标签之图片 :gem:
![](/images/html/html7.png)

网站中最多的元素毋庸置疑，一定是图片，`<img>` 标签定义 HTML 页面中的图像

::: warning
`<img>`是单标签，不需要进行闭合操作
:::

::: info img属性
- [ ] src：路径（图片地址与名字）
- [ ] alt：规定图像的替代文本
- [ ] width：规定图像的宽度
- [ ] eight：规定图像的高度
- [ ] title：鼠标悬停在图片上给予提示
:::

```html
<img src="" alt="" title="" width="" height="">
```

::: normal-demo 效果展示
```html
<img src="/images/logo.png" alt="我是logo" title="嘉美" width="80px" height="80px">
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

**轻松一刻**
<AudioPlayer
  src="/mp3/3.mp3"
  title="音乐"
  poster="/mp3/3.jpg"
/>

**视频教程** :film_projector:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。











## 路径详解 :gem:
![](/images/html/html8.png)

### 绝对路径 :ghost:
绝对路径是电脑的盘符存储与访问的具体地址

```html
<img src="E:\code\1.jpg">
```

### 相对路径  :ghost:

两者相对关系，两者在同⼀路径下可以直接访问

```html
<!-- 
    ⼦级关系: /
    同级关系: ./  
    ⽗级关系: ../
-->
<img src="./1.jpg">
<img src="../src/1.jpg">
<img src="../../src/1.jpg">
```

### 网络路径  :ghost:

具体的⽹络地址: http://iwenwiki.com/api/newworld/images/n1.png

```html
<img src="http://iwenwiki.com/api/newworld/images/n1.png">
```

::: normal-demo 效果展示
```html
<!-- 网络路径 -->
<img src="http://iwenwiki.com/api/newworld/images/n1.png" width="100px">
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

**轻松一刻**
<AudioPlayer
  src="/mp3/4.mp3"
  title="音乐"
  poster="/mp3/4.jpg"
/>

**视频教程** :film_projector:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。

























## 标签之超链接 :gem:

### 超文本链接 :ghost:
![](/images/html/html9.png)

HTML使用标签 `<a>`来设置超文本链接,超链接可以是一个字，一个词，或者一组词，也可以是一幅图像，您可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。

::: info 超文本链接属性
- [ ] href：路径（描述链接的地址）
- [ ] title：鼠标划上去的提示文字
- [ ] target：以设置点击超链接之后网页打开的方式
:::

::: info target属性说明
- _self：这是默认属性，也是用得最多的，表示在当前窗口中打开链接的内容
- _parent：当等于这个值时候，表示在父级框架中打开连接的内容
- _blank：当等于这个属性时，表示在新窗口中打开链接的内容
- _top：表示在顶级框架中，打开链接的内容
:::

默认情况下，链接将以如下形式出现在浏览器中：
- 一个未访问过的链接显示为蓝色字体并带有下划线。
- 访问过的链接显示为紫色并带有下划线。
- 点击链接时，链接显示为红色并带有下划线。

```html
<a href="https://jiameikj.com" title="我是超链接" target="_blank" />
```
::: tip 
后期我们会通过CSS样式修改掉这些效果

当您把鼠标指针移动到网页中的某个链接上时，箭头会变为一只小手
:::

::: normal-demo 效果展示
```html
<a href="https://jiameikj.com" title="我是超链接" target="_blank">点我跳转</a>
```
:::

### 锚点链接 :ghost:

![](/images/html/html10.png)

超链接可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。

跳转到当前文档的某个部分的形式就是“锚点”

```html
<a href="#hello">跳转到文本信息位置</a>
<p>1</p>
<p>1</p>
<p id="hello">文本信息</p>
<p>1</p>
<p>1</p>
```
::: tip
测试锚点链接时，页面高度需要达到一屏的高度才可！
:::

::: vue-playground 随堂训练
@file App.vue
```vue
<template>
   <!--这里写html代码-->
</template>
```
:::

**轻松一刻**
<AudioPlayer
  src="/mp3/5.mp3"
  title="音乐"
  poster="/mp3/5.jpg"
/>

**视频教程** :film_projector:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。











## 标签之文本 :gem:

![](/images/html/html11.png)

| 标签       | 描述               |
| ---------- | ------------------ |
| &nbsp; &nbsp; &nbsp; &nbsp;`<em>`     | &nbsp; &nbsp; &nbsp; &nbsp;定义着重文字       |
| &nbsp; &nbsp; &nbsp; &nbsp;`<b>`      | &nbsp; &nbsp; &nbsp; &nbsp;定义粗体文本       |
| &nbsp; &nbsp; &nbsp; &nbsp;`<i>`      | &nbsp; &nbsp; &nbsp; &nbsp;定义斜体字         |
| &nbsp; &nbsp; &nbsp; &nbsp;`<strong>` | &nbsp; &nbsp; &nbsp; &nbsp;定义加重语气       |
| &nbsp; &nbsp; &nbsp; &nbsp;`<sub>`    | &nbsp; &nbsp; &nbsp; &nbsp;定义下标字         |
| &nbsp; &nbsp; &nbsp; &nbsp;`<sup>`    | &nbsp; &nbsp; &nbsp; &nbsp;定义上标字         |
| &nbsp; &nbsp; &nbsp; &nbsp;`<del>`    | &nbsp; &nbsp; &nbsp; &nbsp;定义删除字         |
| &nbsp; &nbsp; &nbsp; &nbsp;`<span>`   | &nbsp; &nbsp; &nbsp; &nbsp;元素没有特定的含义 |

::: tip
常用文本标签和段落标签是不同的，段落代表一段文本，而文本标签一般表示文本词汇
:::

```html
<div style="text-align: center;">
  <a href="https://www.mi.com/blackshark4s">
    <img src="./1.webp" alt="">
    <h3><i>黑鲨4S</i></h3>
    <p>磁动力升降肩键</p>
    <p>2699元起 <del>3999元</del></p>
  </a>
</div>
```


::: normal-demo 效果展示
```html
<div style="text-align: center;">
  <a href="https://www.mi.com" target="_blank">
    <img src="/images/logo.png" alt="" width="100px">
     </a>
    <h3><i>黑鲨4S</i></h3>
    <p>磁动力升降肩键</p>
    <p>2699元起 <del>3999元</del></p>
  </a>
</div>
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

**轻松一刻**
<AudioPlayer
  src="/mp3/6.mp3"
  title="音乐"
  poster="/mp3/6.jpg"
/>

**视频教程** :film_projector:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。













## 标签之列表标签 :gem:
### 有序列表 :ghost:
![](/images/html/html12.png)

有序列表是一列项目，列表项目使用数字进行标记。 有序列表始于`<ol>` 标签。每个列表项始于 `<li>`标签。

::: info ol的type属性
- 1 表示列表项目用数字标号（1,2,3...）
- a 表示列表项目用小写字母标号（a,b,c...）
- A 表示列表项目用大写字母标号（A,B,C...）
- i 表示列表项目用小写罗马数字标号（i,ii,iii...）
- I 表示列表项目用大写罗马数字标号（I,II,III...）
:::

```html
<ol>
  <li>第一</li>
  <li>第二</li>
</ol>
```
::: tip
有序列表是可以进行嵌套的
:::

::: normal-demo 效果展示
```html
<ol type="A">
  <li>第一</li>
  <li>第二</li>
  <li>
    <ol>
      <li>水果</li>
      <li>蔬菜</li>
    </ol>
  </li>
</ol>
```
:::

### 无序列表 :ghost:
![](/images/html/html13.png)

无序列表是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记，无序列表始于 `<ul>` 标签。每个列表项始于`<li>` 标签。

::: info ul的type属性
- disc  默认实心圆
- circle   空心圆
- square 小方块
- none  不显示
:::

```html
<ul>
  <li>哈哈</li>
  <li>嘿嘿</li>
</ul>
```

::: tip
无序列表是可以进行嵌套的
:::

::: normal-demo 效果展示
```html
<ul>
  <li>尚学堂</li>
  <li>
    <ul type="square">
      <li>阿里</li>
      <li>京东</li>
    </ul>
  </li>
  <li>嘉美</li>
</ul>
```
:::

### 自定义序列表 :ghost:
![](/images/html/html14.png)

自定义列表不仅仅是一列项目，而是项目及其注释的组合。

自定义列表以 `<dl>` 标签开始。每个自定义列表项以 `<dt>` 开始。每个自定义列表项的定义以 `<dd>` 开始。

```html
<dl>
  <dt>web</dt>
  <dd>vue</dd>
  <dt>uniapp</dt>
  <dd>react</dd>
</dl>
```

::: tip 应用场景
在一些需要对列表进行解释的部分，可以使用自定义列表

![](/images/html/html15.png)
:::

::: normal-demo 效果展示
```html
<dl>
  <dt>web</dt>
  <dd>vue</dd>
  <dd>react</dd>
  <dt>java</dt>
  <dd>springboot</dd>
</dl>
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

**轻松一刻**
<AudioPlayer
  src="/mp3/7.mp3"
  title="音乐"
  poster="/mp3/7.jpg"
/>

**视频教程** :film_projector:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。















## 标签之表格 :gem:
![](/images/html/html16.png)

表格在数据展示方面非常简单，并且表现优秀

::: info 表格组成与特点
表格名字 `<caption>`

表格头部 `<thead>`
  - 特殊单元格 `<th>`

表格的身体 `<tbody>`
  - 行 `<tr>`
  - 列（单元格） `<td>`

表格的脚步 `<tfoot>`

- - -
表格特点：同行等高、同列等宽。
:::


::: info table表格属性
- border：设置表格的边框
- width：设置表格的宽度
- height：设置表格的高度
- align：设置表格的水平对齐方式
- cellpadding：设置内容距离边框的距离
- cellspacing：设置单元格之间的距离
- bgcolor：设置表格背景颜色
- bordercolor：设置边框颜色
- background：设置背景图片
:::

::: info  tr的属性
- height：设置一行的高度
- bgcolor：设置一行的背景颜色
- background：设置一行的背景图片
- align：设置行里内容水平对齐方式，取值：left、center、right
- valign：设置行里内容垂直对齐方式，取值：top、middle、bottom
:::

::: info td（单元格）的属性
- width：设置单元格的宽度，同列等宽
- height：设置单元格的高度，同行等高
- align：设置单元格内容水平对齐方式
- valign：设置单元格内容垂直对齐方式
- bgcolor：设置单元格背景颜色
- background：设置单元格背景图片
:::



::: tip 快捷键
快速生成表格结构：table>tr*2>td{单元格}
:::

``` html
<table>
  <caption>表格名字</caption>
  <thead>
    <th>姓名</th>
    <th>年龄</th>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>30</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>李四</td>
      <td>20</td>
    </tr>
  </tfoot>
</table>

```
::: normal-demo 效果展示
```html
<table  border="1" cellspacing="0" width="300px">
  <caption>表格名字</caption>
  <thead>
    <th>姓名</th>
    <th>年龄</th>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>30</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>李四</td>
      <td>20</td>
    </tr>
  </tfoot>
</table>
```
:::


### 单元格合并 :ghost:
![](/images/html/html17.png)
::: info 单元格合并属性
水平合并：colspan
垂直合并：rowspan
:::

```html
<table border="1" width="500" height="500" align="center">
  <tr>
    <td colspan="2"></td>
    <td rowspan="2"></td>
  </tr>
  <tr>
    <td rowspan="2"></td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2"></td>
  </tr>
</table>
```

::: normal-demo 效果展示
```html
<table width="400" height="400">
  <tr align="center" bgcolor="pink">
    <td rowspan="2">酒店</td>
    <td>海外酒店</td>
    <td>团购</td>
  </tr>
  <tr align="center" bgcolor="pink">
    <td>特价酒店</td>
    <td>民宿.客栈</td>
  </tr>
  <tr align="center" bgcolor="blue">
    <td rowspan="2">机票</td>
    <td>火车票.抢票</td>
    <td>汽车票.船票</td>
  </tr>
  <tr align="center" bgcolor="blue">
    <td>特价机票</td>
    <td>专车.租车</td>
  </tr>
  <tr align="center" bgcolor="green">
    <td rowspan="2">旅游</td>
    <td>目的地攻略</td>
    <td>邮轮旅游</td>
  </tr>
  <tr align="center" bgcolor="green">
    <td>周边游</td>
    <td>定制旅行</td>
  </tr>
  <tr align="center" bgcolor="yellow">
    <td>景点玩乐</td>
    <td>美食林</td>
    <td>购物外汇</td>
  </tr>
  <tr align="center" bgcolor="yellow">
    <td>礼品卡</td>
    <td>WIFI电话</td>
    <td>保险签证</td>
  </tr>
</table>
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

**轻松一刻**
<AudioPlayer
  src="/mp3/8.mp3"
  title="音乐"
  poster="/mp3/8.jpg"
/>

**视频教程** :film_projector:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。
