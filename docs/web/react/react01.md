---
category: [RRACT,WEB前端]
tag: react
---
# 初体验React :tada:

![](./../../../.vuepress/public/images/react/react1.png)

React官方参考文档：[https://zh-hans.reactjs.org/](https://zh-hans.reactjs.org/)

React 起源于 Facebook 的内部项目，于2013年5月公开发布，用于构建用户界面的 JavaScript 库。它通过组件化的方式，使得开发者可以将页面拆分成一系列独立、可重用的组件，每个组件都有自己的状态和行为。React 负责渲染这些组件，并将其组合成完整的用户界面。

首先，它是目前前端最火的框架之一，其次，React是目前企业技术栈中要求的知识点，能够大大提升开发效率和体验。

## React 的特点:gem:

1. **声明式** − 以声明式编写 UI，我们只需要编写代码描述UI，当数据变动时 React 能高效更新并渲染合适的组件
2. **JSX** − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
3. **高效** −React通过对DOM的模拟，最大限度地减少与DOM的交互。
4. **组件** − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
5. **单向响应的数据流** − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

## React项目创建:gem:

![](./../../../.vuepress/public/images/react/react2.png)

> **温馨提示**
>
> 1. 需要在你的机器上安装 Node >= 14.0.0 和 npm >= 5.6
> 2. 项目名称不能存在大写字母，可以使用横杠(-)连接多个词汇

```sh
# 创建
npx create-react-app my-app   // 普通的react项目
npx create-react-app my-app --template typescript    //react+Ts

## 进入并启动
cd my-app
npm start

# 打包
npm run build   // 会在根目录下生成一个build文件夹
```

启动成功效果：

![](./../../../.vuepress/public/images/react/react3.png)

> ### VSCode快捷键
>
> vsCode有很多针对React快捷键，这里我推荐：`ES7 React/Redux/GraphQL/React-Native snippets`
>
> - 函数组件快捷生产键：rfc
> - 类组件快捷生产键：rcc

## React项目结构:gem:

学习React,了解React项目的项目结构对我们的开发是很有必要的，他的基本结构如下：

![](./../../../.vuepress/public/images/react/react4.png)

> - node_modules：React项目需要的依赖包，注意：此文件夹不可以移动压缩复制等操作
>
> - public：React项目静态资源文件夹，包含index.html入口文件、图片、manifest.json配置文件等
>
> - src：源码文件夹，我们开发主要在这里编写代码
>
> - .gitignore：git忽略文件
>
> - package-lock.json：完整依赖包的信息文件
>
> - package.json：定义项目所需要的各种模块名称、版本信息等
>
> - README.md：markdown文件，项目的注释或描述文件

`src`文件夹下的文件

> - App.css：App组件对应的css文件 
>
> - App.js：App组件，主入口组件
>
> - App.test.js：App组件测试文件
>
> - index.css：index主入口文件对应css文件，也是公共css文件
>
> - index.js：主入口文件
>
> - logo.svg：logo图片
>
> - reportWebVitals.js：检测文件。包含三个关键指标（CLS、FID、LCP）和两个辅助指标（FCP、TTFB）
>
> - setupTests.js：测试文件，针对项目编写测试用例使用

## 视频教程:film_projector:

<video  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" width="100%" controls></video>

至此，我们已经初步体验了React，接下来我会带大家正式进入React知识的学习了。