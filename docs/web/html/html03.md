---
category: [HTML,WEB前端]
tag: html
---
# 1.3 表单元素 :tada:
![](/images/html/html18.png)

表单在 Web 网页中用来给用户填写信息，从而能采用户信息，使网页具有交互的功能。

所有的用户输入内容的地方都用表单来写，如登录注册、搜索框。

表单是由容器和控件组成的，一个表单一般应该包含用户填写信息的输入框、提交按钮等，这些输入框、按钮叫做控件、表单就是容器、它能够容纳各种各样的控件。

::: tip
一个完整的表单包含三个基本组成部分：表单标签、表单域、表单按钮
:::

::: info form属性说明
- action：服务器地址
- name：表单名称
- method：数据提交方式GET/POST
- - -
get把提交的数据url可以看到，post看不到

get一般用于提交少量数据，post用来提交大量数据
:::

::: info input属性说明
- autofocus：自动地获得焦点
- type： 表单类型
- placeholder：描述输入域所期待的值
- required：不能为空
- name: 控件名称
- value：默认值
:::

::: info type属性值说明
- text：文本框
- password：密码框
- radio：单选按钮
- checkbox：复选框
- file：文件
- submit：提交按钮
- reset：重置按钮
- button：普通按钮
- image：图像图片按钮
- email：邮箱
- url：网址
- search：搜索框
- tel：电话号码
- color：颜色
- number：数字
- range：滑动控制
- date：日期
- month：定义 month 和 year 控件（不带时区）
- week：定义 week 和 year 控件（不带时区）
:::

```html
<form action="url" method="get|post" name="myform">
  <input type="text" >
  <input type="submit">
</form>
```

## Input框 :gem:

文本域通过`<input type="text"> `标签来设定，当用户要在表单中键入字母、数字等内容时，就会用到文本域
::: normal-demo 文本框
```html
<form>
   First name: <input type="text" name="firstname">
  <br>
   Last name: <input type="text" name="lastname">
</form>
```
:::



密码字段通过标签`<input type="password">` 来定义
::: tip
密码字段字符不会明文显示，而是以星号或圆点替代
:::

::: normal-demo 密码框
```html
<form>
   Password: <input type="password" name="pwd" value="123">
</form>
```
:::



`<input type="radio">` 标签定义了表单单选框选项
::: normal-demo 单选按钮
```html
<form>
  <input type="radio" name="sex" value="male">Male
  <br>
  <input type="radio" name="sex" value="female">Female
</form>
```
:::



`<input type="checkbox">`定义了复选框. 用户需要从若干给定的选择中选取一个或若干选项
::: normal-demo 复选框
```html
<form>
  <input type="checkbox" name="vehicle" value="Bike">I have a bike
  <br>
  <input type="checkbox" name="vehicle" value="Car">I have a car
</form>
```
:::



定义文件选择字段和 "浏览..." 按钮，供文件上传
::: normal-demo 文件
```html
<form>
  <input type="file" name="img">
</form>
```
:::



当用户单击确认按钮时，表单的内容会被传送到另一个文件。表单的动作属性定义了目的文件的文件名。由动作属性定义的这个文件通常会对接收到的输入数据进行相关的处理
::: normal-demo 提交按钮
```html
<form name="input" action="url" method="get">
   Username: <input type="text" name="user">
  <input type="submit" value="Submit">
</form>
```
:::



定义重置按钮（重置所有表单值为默认值）
::: normal-demo 重置按钮
```html
<form name="input" action="url" method="get">
   Username: <input type="text" name="user">
  <input type="reset">
</form>
```
:::


没有任何功能的按钮
文本域通过`<input type="text"> `标签来设定，当用户要在表单中键入字母、数字等内容时，就会用到文本域
::: normal-demo 普通按钮
```html
<form name="input" action="url" method="get">
  <input type="button" value="点我"/>
  <button>点我</button>
</form>
```
:::



定义图像作为提交按钮
::: normal-demo 图像图片按钮
```html
<form name="input" action="url" method="get">
  <input type="image" src="https://img0.baidu.com/it/u=998105705,2493742435&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=220" />
</form>
```
:::



定义用于 e-mail 地址的字段（当提交表单时会自动对 email 字段的值进行验证）
::: normal-demo email
```html
<form>
   E-mail: <input type="email" name="usremail">
  <input type="submit">
</form>
```
:::



定义用于输入 URL 的字段
::: normal-demo url
```html
<form>
  <input type="url" name="homepage">
  <input type="submit">
</form>
```
:::



定义搜索字段（比如站内搜索或谷歌搜索等）
::: normal-demo 搜索框
```html
<form>
   Search Google: <input type="search" name="googlesearch">
  <input type="submit">
</form>
```
:::



定义用于输入电话号码的字段
::: normal-demo 电话号码
```html
<form>
   电话号码: <input type="tel" name="usrtel">
  <input type="submit">
</form>
```
:::



从拾色器中选取颜色
::: normal-demo 颜色
```html
<form>
   选择你喜欢的颜色: <input type="color" name="favcolor">
  <input type="submit">
</form>
```
:::



定义用于输入数字的字段（您可以设置可接受数字的限制）
::: normal-demo number
```html
<form>
   数量 ( 1 到 5 之间): <input type="number" name="quantity" min="1" max="5">
  <input type="submit">
</form>
```
:::



定义用于精确值不重要的输入数字的控件（比如 slider 控件）。您也可以设置可接受数字的限制
::: tip 请使用下面的属性来规定限制：
- max : 规定允许的最大值。
- min : 规定允许的最小值。
- step : 规定合法数字间隔。
- value : 规定默认值。
:::

::: normal-demo range
```html
<form>
  <input type="range" name="points" min="1" max="10">
  <input type="submit">
</form>
```
:::



定义 date 控件
::: normal-demo 日期
```html
<form>
   生日: <input type="date" name="bday">
  <input type="submit">
</form>
```
:::





定义 month 和 year 控件（不带时区）
::: normal-demo month
```html
<form>
   生日 ( 月和年 ): <input type="month" name="bdaymonth">
  <input type="submit">
</form>
```
:::




定义 week 和 year 控件（不带时区）
::: normal-demo week
```html
<form>
   选择周: <input type="week" name="week_year">
  <input type="submit">
</form>
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


## 下拉列表 :gem:

![](/images/html/html19.png)

`<select>`元素用来创建下拉列表。

`<option>`标签定义下拉列表中的一个选项（一个条目）

`<optgroup>`标签经常用于把相关的选项组合在一起。

如果你有很多的选项组合, 你可以使`<optgroup> `标签能够很简单的将相关选项组合在一起。

```html
<form name="input" action="url" method="get">
  <select>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
</form>
```



::: normal-demo 效果展示

```html
<form name="input" action="url" method="get">
  <select>
    <optgroup label="Swedish Cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </optgroup>
  </select>
</form>
```
:::

::: normal-demo 一级下拉列表效果展示

```html
<form name="input" action="url" method="get">
  <select>
    <option value="volvo">山东</option>
    <option value="saab">湖北</option>
    <option value="mercedes" selected="selected">河南</option>
  </select>
</form>   
```
:::
::: normal-demo 二级下拉列表效果展示

```html
<select name="" id="">
  <optgroup label="山东">
    <option value="" style="display: none">请选择</option>
    <option value="">青岛</option>
    <option value="" selected="selected">德州</op	tion>
    <option value="">潍坊</option>
  </optgroup>
  <optgroup label="河南">
    <option value="">郑州</option>
    <option value="">周口</option>
  </optgroup>
</select>
```
:::

::: tip
`selected="selected"` 代表默认值
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
  src="/mp3/2.mp3"
  title="音乐"
  poster="/mp3/2.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。





## 多行文本框 :gem:

`<textarea>`标签定义一个多行的文本输入控件。文本区域中可容纳无限数量的文本。

可以通过 cols 和 rows 属性来规定 textarea 的尺寸大小，不过更好的办法是使用 CSS 的 height 和 width 属性

```html
<form name="input" action="url" method="get">
  <textarea rows="10" cols="30">我是一个文本框</textarea>
</form>
```

::: normal-demo 效果展示

```html
<form name="input" action="url" method="get">
  <textarea rows="10" cols="30">我是一个文本框</textarea>
</form>
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








## label属性说明 :gem:

`<label>`标签为 input 元素定义标注（标记）。

label元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果您在 label元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。

`<label>` 标签的 for 属性应当与相关元素的 id 属性相同

::: tip
for属性可把 label绑定到另外一个元素。请把 for 属性的值设置为相关元素的 id属性的值
:::

```html
<input type="radio" name="sex" value="nan" id="nan" />
<label for="nan">男</label><br />
<input type="radio" name="sex" value="nv" id="nv" />
<label for="nv" checked="checked">女</label>
```


::: normal-demo 效果展示
```html
<input type="radio" name="sex" value="nan" id="nan" />
<label for="nan">男</label><br />
<input type="radio" name="sex" value="nv" id="nv" checked="checked"/>
<label for="nv">女</label>
```
:::

::: tip
checked="checked" : 默认值，如上：默认值为：女
:::

这样，你无论是点击勾选按钮还是点击文字，都能选中对应的选项了

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
  src="/mp3/4.mp3"
  title="音乐"
  poster="/mp3/4.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。

