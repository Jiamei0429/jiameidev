---
category: [VUE,WEB前端]
tag: [vue]
---
# 7.1 初体验Vue3:tada:

![](/images/vue/vue0.png)

Vue (发音为 /vjuː/，类似 **view**) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任，Vue易学易用，性能出色，适用场景丰富的 Web 前端框架，他是国内目前前端最火的框架之一。

目前，在开发中，Vue有两个大版本可以选择`Vue2`和`Vue3`，老项目一般都是`Vue2`的，而新项目一般都选择`Vue3`开发

我们本套课程讲解版本为`Vue3`，因为`Vue3`涵盖了`Vue2`的知识体系，当然`Vue3`也增加了很多新特性

学习Vue，一定要参考官方文档

> **官网文档**
>
> 地址：[https://cn.vuejs.org/](https://cn.vuejs.org/)

## 创建项目:gem:

![](/images/vue/vue1.png)

> **前提条件**
>
> - 熟悉命令行
> - 已安装 15.0 或更高版本的 Node.js

```apl
npm init vue@latest
```

这一指令将会安装并执行 `create-vue`，它是 Vue 官方的项目脚手架工具。你将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示

如果不确定是否要开启某个功能，你可以直接按下回车键选择 `No`。

## 安装依赖并启动:gem:

在项目被创建后，通过以下步骤安装依赖并启动开发服务器

```apl
cd <your-project-name>
npm install
npm run dev
```

这样就可以启动项目了，你会看到项目运行在本地的5173端口，如果你想让局域网内的其他人访问你正在开发中的项目，可以修改根目录下的package.json文件，修改如下：

```json
 "scripts": {
    "dev": "vite --host",
  }
```

## 打包项目:gem:

```apl
npm run build
```

当你完成开发后，你可以使用该命令对你的项目进行打包，打包完成后，你会在你的根目录下看到一个dist文件夹。

## Vue项目目录结构:gem:

![](/images/vue/vue2.png)

我们通过Vue命令行工具 `npm init vue@latest` 创建项目，会出现很多文件及文件夹

```apl
└─ 项目名
   └─  .vscode     --- VSCode工具的配置文件夹
   └─  gnode_modules   --- Vue项目的运行依赖文件夹
   └─  public      --- 资源文件夹（浏览器图标）
   └─  src       --- 源码文件夹
   └─  .gitignore    --- git忽略文件
   └─  index.html    --- 入口HTML文件
   └─  package.json   --- 信息描述文件
   └─  README.md    --- 注释文件
   └─  vite.config.js  --- Vue配置文件 
```

## 视频教程:film_projector:

<!-- <video  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" width="100%" controls></video> -->

<VideoPlayer src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" />

至此，我们已经初步体验了vue，接下来我会带大家正式进入vue3知识的学习了。
