---
category: [HTML,WEB前端]
tag: html
---

# 1.1 初体验HTML :tada:

![](/images/html/html1.png)

`HTML5`是用来描述网页的一种语言，被称为超文本标记语言。用HTML5编写的文件，后缀以.html结尾，`HTML`是一种标记语言，标记语言是一套标记标签。标签是由尖括号包围的关键字，例如：`<html>`
::: tip
文件后缀名以.html结尾

在编写代码的过程中，<>必须是英文状态下编写
:::
HTML标签有两种表现形式：
- 双标签，例如：`<html></html>`
- 单标签，例如：`<img>`

::: info HTML是做什么的？
HTML是网页结构的基本架构，你可以把它想象成人的骨架、人体结构等，它决定了网站的结构布局
:::

## **HTML5基本骨架**:gem:

- **HTML5的DOCTYPE声明**
  `DOCTYPE`是document type (文档类型) 的缩写。<!DOCTYPE html >是H5的声明位于文档的最前面，处于标签之前。 他是网页必备的组成部分，避免浏览器的怪异模式。

  ```html
  <!DOCTYPE html>
  ```
- **html标签**
  定义 HTML 文档，这个元素我们浏览器看到后就明白这是个HTML文档了，所以你的其它元素要包裹在它里面，标签限定了文档的开始点和结束点。

  ```html
  <!DOCTYPE html>
  <html>
  </html>
  ```
- **head标签**
  head标签用于定义文档的头部。文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。

  ```html
  <!DOCTYPE html>
  <html>
    <head>
    </head>
  </html>
  ```
- **body标签**
  body 元素定义文档的主体。
  body 元素包含文档的所有内容（比如文本、超链接、图像、表格和列表等等。）
  它会直接在页面中显示出来，也就是用户可以直观看到的内容

  ```html
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
        我会显示在浏览器中
    </body>
  </html>
  ```
- **title标签**
  可定义文档的标题。
  它显示在浏览器窗口的标题栏或状态栏上。
  `<title>` 标签是 `<head>` 标签中唯一必须要求包含的东西，就是说写head一定要写title
  `<title>`的增加有利于SEO优化
  ::: tip
  SEO是搜索引擎优化的英文缩写。通过对网站内容调整，满足搜索引擎的排名需求
  :::
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>第一个页面</title>
    </head>
    <body>
       我会显示在浏览器中
    </body>
  </html>
  ```

- **meta标签**
  meta标签用来描述一个HTML网页文档的属性，关键词等，例如：`charset="utf-8"`是说当前使用的是`utf-8`编码格式，在开发中我们经常会看到`utf-8`，或是gbk，这些都是编码格式，通常使用`utf-8`。

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>itbaizhan</title>
    </head>
    <body>
        <!-- 这是一段注释 -->
    </body>
  </html>
  ```
## HTML注释
![](/images/html/html4.png)

浏览器不会显示注释
```html
<!-- 这是一段注释 -->
<!-- 这里的内容不会被浏览器显示 -->
```
::: warning
在开始标签中有一个叹号，但是结束标签中没有
:::
## 开发工具推荐:gem:

![](/images/html/html2.png)

工欲善其事，必先利其器，要想有好的开发体验，选择一款合适的开发工具是十分必要的

VS Code，全称是Visual Studio Code，但因为全称太长，微软旗下另一款产品visual studio又经常被简称为VS，所以这款与vs有一定渊源的代码编辑器就被简称为VSCode。

VSCode是一款由微软开发且跨平台的免费源代码编辑器。该软件支持语法高亮、代码自动补全（又称 IntelliSense）、代码重构、查看定义功能，并且内置了命令行工具和 Git 版本控制系统。用户可以更改主题和键盘快捷方式实现个性化设置，也可以通过内置的扩展程序商店安装扩展以拓展软件功能。

VS Code 使用 Monaco Editor 作为其底层的代码编辑器。

在 2019 年的 Stack Overflow 组织的开发者调查中，Visual Studio Code 被认为是最受开发者欢迎的开发环境。

::: tip
vscode生成HTML结构快捷键：`！+回车`，代码如下
:::

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
::: info VSCode常用快捷键列表
1. 代码格式化：`Shift+Alt+F`
2. 向上或向下移动一行：`Alt+Up 或 Alt+Down`
3. 快速复制一行代码：`Shift+Alt+Up 或 Shift+Alt+Down`
4. 快速保存：`Ctrl + S`
5. 快速查找：`Ctrl + F`
6. 快速替换：`Ctrl + H`
:::


::: info 浏览器是我们最重要的合作伙伴
我们推荐谷歌浏览器，有两点原因：

  - 简洁大方，打开响应速度快
  - 开发者调试工具
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
