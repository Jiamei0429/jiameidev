---
category: [RRACT,WEB前端]
tag: react
---
# 8.1 初体验React :tada:

![](/images/react/react1.png)



React 起源于 Facebook 的内部项目，于2013年5月公开发布，用于构建用户界面的 JavaScript 库。它通过组件化的方式，使得开发者可以将页面拆分成一系列独立、可重用的组件，每个组件都有自己的状态和行为。React 负责渲染这些组件，并将其组合成完整的用户界面。

首先，React是目前前端最火的框架之一，其次，React是目前企业技术栈中要求的知识点，能够大大提升开发效率和体验。

::: tip 参考文档
React官方参考文档：[https://zh-hans.reactjs.org/](https://zh-hans.reactjs.org/)
:::

::: info React有以下几个特点
1. **声明式** − 以声明式编写 UI，我们只需要编写代码描述UI，当数据变动时 React 能高效更新并渲染合适的组件
2. **JSX** − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
3. **高效** −React通过对DOM的模拟，最大限度地减少与DOM的交互。
4. **组件** − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
5. **单向响应的数据流** − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。
:::


## React项目创建:gem:

![](/images/react/react2.png)

::: warning 前提条件
1. 需要在你的电脑上安装 Node >= 14.0.0 和 npm >= 5.6
2. 项目名称不能存在大写字母，可以使用横杠(-)连接多个词汇
:::

::: code-tabs#shell
@tab 第一步：创建项目
```bash
npx create-react-app my-app   // 普通的react项目
npx create-react-app my-app --template typescript    //react+Ts
```
@tab 第二步：进入启动项目
```bash
cd my-app
npm start
```
@tab:第三步：打包项目
```bash
npm run build   // 会在根目录下生成一个build文件夹
```
:::
启动成功效果：

![](/images/react/react3.png)

::: tip VSCode快捷键
 vsCode有很多针对React快捷键，这里我推荐：`ES7 React/Redux/GraphQL/React-Native snippets`

 - 函数组件快捷生产键：rfc
 - 类组件快捷生产键：rcc
:::


## React项目结构:gem:
![](/images/react/react5.png)
学习React,了解React项目的项目结构对我们的开发是很有必要的，他的基本结构如下：

![](/images/react/react4.png)

::: info 根目录下的文件
 - node_modules：React项目需要的依赖包，注意：此文件夹不可以移动压缩复制等操作
 - public：React项目静态资源文件夹，包含index.html入口文件、图片、manifest.json配置文件等
 - src：源码文件夹，我们开发主要在这里编写代码
 - .gitignore：git忽略文件
 - package-lock.json：完整依赖包的信息文件
 - package.json：定义项目所需要的各种模块名称、版本信息等
 - README.md：markdown文件，项目的注释或描述文件
:::

::: info src目录下的文件
 - App.css：App组件对应的css文件 
 - App.js：App组件，主入口组件
 - App.test.js：App组件测试文件
 - index.css：index主入口文件对应css文件，也是公共css文件
 - index.js：主入口文件
 - logo.svg：logo图片
 - reportWebVitals.js：检测文件。包含三个关键指标（CLS、FID、LCP）和两个辅助指标（FCP、TTFB）
 - setupTests.js：测试文件，针对项目编写测试用例使用
:::

::: react-demo 代码演示及训练
```js
const { useState } = React;
const Home = () => {
  const [message, setMessage] = useState("Hello");
  const handler = () => {
    setMessage(`${message},World`);
  };
  return (
    <div className="box">
      <code>你好React</code>
      <span id="powerful" onClick={handler}>
        {message}
      </span>
    </div>
  );
};
export default Home
```
```css
.box #powerful {
  color: blue;
}
```
:::


**轻松一刻**
<AudioPlayer
  src="/mp3/像鱼.mp3"
  title="像鱼"
  poster="/mp3/像鱼.jpg"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。