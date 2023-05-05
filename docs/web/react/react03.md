---
category: [RRACT,WEB前端]
tag: react
---

# 8.3 React进阶 :tada:

## 严格模式 :gem:

被`<React.StrictMode>`包裹的组件会执行严格的代码规范检查

```jsx
import React from 'react';
import App from "./App"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />           //组件被严格模式标签包裹即可
  </React.StrictMode>
);
```

## 组件分类 :gem:
![](/images/react/react17.png)

在React中，组件可分为函数组件与类组件
::: tip
类组件也被叫做==有状态组件==，函数组件也被叫做==无状态组件==
:::

### 函数组件:ghost:

可以使用首字母为大写的名称定义一个函数，并且让这个函数返回一个 React 元素，这类组件被称为“函数组件”。
```jsx
import React from 'react';
function App() {
  const a = 12
  return (
    <div>
      <p>{a}</p>
    </div>
  );
}
export default App;
```

### 类组件:ghost:

可以使用ES6 的 class来定义组件，通过定义render函数来返回react元素，这类组件被称为“类组件”。
```jsx
import React, { Component } from 'react'
import './App.css';   //引入app组件的css样式
class App extends Component {
  render() {
    const a = 12
    return (
      <div className='text'>{a}</div>
    )
  }
}
export default App;
```
### 使用组件 :ghost:
直接像使用普通标签那样使用就可以了。
```jsx
<Home />
```
**轻松一刻**
<AudioPlayer
  src="/mp3/2.mp3"
  title="音乐"
  poster="/mp3/2.jpg"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。


## 组件关系及传值(Props) :gem:
### 组件关系 :ghost:
![](/images/react/react18.png)

引用其它组件的组件叫做父组件，被引用在其它组件界面的组件叫做子组件。

我们用下边的一段代码来讲解组件关系
```jsx
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
const App = () => {
  return (
    <div>
      <Header />
      <p>1</p>
      <Footer />
    </div>
  )
}
export default App
```
如上，我们看到了三个组件，分别是`App` `Header`和 `Footer`，很明显，我们在`App`组件中引入了 `Header`和 `Footer`，所以，`App` 是`Header`和 `Footer`的父级，`Header`和 `Footer`是`App` 的子级，他们就构成了父子关系。
::: tip
引用其它组件的组件叫做父组件，被引用在其它组件界面的组件叫做子组件。

![](/images/react/react19.png)
:::

### 父传子 :ghost:
![](/images/react/react20.png)

组件与组件之间是可以交互的，可以互相传递数据的，我们可以通过props属性让父组件向子组件传递数据。

::: code-tabs#shell
@tab 父组件
```jsx
import React from 'react';
import Header from './components/header';
const App = () => {
  const toChild = "这是父组件的值，现在要传递给子组件"
  return (
    <div>
      <Header value={toChild} value1="123" />
      <p>App</p>
    </div>
  )
}
export default App
```
@tab 子组件
```jsx
import React from 'react'
const Header = (props) => {
    return (
        <div>
            <p>header</p>
            <p>{props.value}</p>
            <p>{props.value1}</p>
        </div>
    )
}
export default Header
```
:::




::: tip
组件可以接受任意 props，包括基本数据类型，React 元素以及函数。

组件无论是使用函数声明还是通过 class 声明，都不能修改自身的 props，props具有只读性。
:::

::: react-demo 代码演示及训练
```js
// 子组件
const Header = (props) => {
    return (
        <div>
            <p>header</p>
            <p>{props.value}</p>
            <p>{props.value1}</p>
        </div>
    )
}
// 父组件
const App = () => {
  const toChild = "这是父组件的值，现在要传递给子组件"
  return (
    <div>
      <Header value={toChild} value1="123" />
      <p>App</p>
    </div>
  )
}
export default App
```
:::



### 子传父 :ghost:
![](/images/react/react21.png)

子组件向父组件传递数据，依然可以利用props实现。

props对于数据类型没有限制，那么就可以利用props传递函数，然后在子组件中调用传递进来的函数，并且在调用的时候传递数据。
::: code-tabs#shell
@tab 父组件
```jsx
import React from 'react';
import Header from './components/header';
const App = () => {
  const toChild = "这是父组件的值，现在要传递给子组件"
  const onChange = (data) => {
    console.log("父组件打印", data)
  }
  return (
    <div>
      <Header value={toChild} value1="123" value2={onChange} />
      <p>App</p>
    </div>
  )
}
export default App
```
@tab 子组件
```jsx
import React from 'react'
const Header = (props) => {
    const toParent = "这是子组件的值，现在要传递给父组件"
    const send = () => {
        props.value2 && props.value2(toParent)
    }
    return (
        <div>
            <p>header</p>
            <p>{props.value}</p>
            <p>{props.value1}</p>
            <button onClick={send}>传递</button>
        </div>
    )
}
export default Header
```
:::

::: react-demo 代码演示及训练
```js
// 子组件
const Header = (props) => {
    const toParent = "这是子组件的值，现在要传递给父组件"
    const send = () => {
        props.value2 && props.value2(toParent)
    }
    return (
        <div>
            <p>header</p>
            <button onClick={send}>传递</button>
        </div>
    )
}
// 父组件
const App = () => {
  const onChange = (data) => {
    console.log("父组件打印", data)
  }
  return (
    <div>
      <Header value2={onChange} />
      <p>App</p>
    </div>
  )
}
export default App
```
:::
**轻松一刻**
<AudioPlayer
  src="/mp3/3.mp3"
  title="音乐"
  poster="/mp3/3.jpg"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。



## 组件组合:gem:
![](/images/react/react22.png)

有时候，我们传递的不仅仅是一个数据，而是一个HTML结构，可以把它想象成Vue中的插槽，   这时直接在传递的组件中嵌套要传递的结构标签即可，具体实现如下：
::: code-tabs#shell
@tab 父组件
```jsx
import React from 'react';
import Header from './components/header';
const App = () => {
  return (
    <div>
      <Header>
        <div>
          <h1>我是传递的结构</h1>
          <p>1213</p>
        </div>
      </Header>
      <p>App</p>
    </div>
  )
}
export default App
```
@tab 子组件
```jsx
import React from 'react'
const Header = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
        </div>
    )
}
export default Header
```
:::

::: tip
1. 组件要改成双标签结构
2. 传递的结构要在父组件中定义，定义的位置在父组件所引用的子组件的标签之间，最终在子组件在显示
:::

::: react-demo 代码演示及训练
```js
// 子组件
const Header = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
        </div>
    )
}
// 父组件
const App = () => {
  return (
    <div>
      <Header>
        <div>
          <h1>我是传递的结构</h1>
          <p>1213</p>
        </div>
      </Header>
      <p>App</p>
    </div>
  )
}
export default App
```
:::
**轻松一刻**
<AudioPlayer
  src="/mp3/4.mp3"
  title="音乐"
  poster="/mp3/4.jpg"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。

## 组件状态State :gem:
![](/images/react/react23.png)

`State` 与 `props` 类似，但是 `state` 是组件私有的，并且完全受控于所属的组件。

使用`State的目的`：管理组件内部状态，并且当组件内部状态发生变化的时候，重新渲染页面。

### State的使用 :ghost:

初始化并使用state，在类的构造函数中为 `state` 赋初值，并且通过`this.state`访问数据
```jsx
// 父组件
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 12,
      value2: {
        name: "lcl",
        age: 12
      }
    };
  }
  render() {
    return (
      <div>
        <p> {this.state.value1} </p>
        <p> {this.state.value2.name} </p>
      </div>
    )
  }
}
export default App
```
### State的更新 :ghost:
使用`this.setState()`更新state并让页面重新渲染
```jsx
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 12,
    };
  }
  onChange = () => {
    this.setState({ value1: 23 })
    console.log(this.state.value1);   //13
  }
  render() {
    return (
      <div>
        <p> {this.state.value1} </p>
        <button onClick={this.onChange}>更新state</button>
      </div>
    )
  }
}
export default App

```
::: warning
更改state,不要直接修改 state
```jsx
this.state.date=new Date()     //这样的代码是不会生效的
```
:::

::: tip
一般我们只在类组件里面使用state，函数组件当中不使用state，所以有的时候把类组件叫做有状态组件，函数组件叫做无状态组件。

State：负责组件内部的状态管理

Props：负责组件与组件之间的数据交互
:::

::: react-demo 代码演示及训练
```js{10}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 1 };
  }
  handler() {
    this.setState({
      message:12345678 ,
    });
    console.log(this.state.message);   //1
  }
  render() {
    return (
      <div className="box">
        <p> {this.state.message} </p>
        <button onClick={this.handler.bind(this)}>更新state</button>
      </div>
    );
  }
}
```
:::
上边的第11代码，我明显将value1的值更改了，但是打印出来的值依旧是原来的值，这是为什么呢？

`setState`是异步的

上面setState之后，下面的代码是没法获取到更新后的state的

解决方案： 直接给setState传递回调函数。
::: react-demo 代码演示及训练
```js{10}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 1 };
  }
  handler() {
    this.setState({message:12345678},()=>{
        console.log(this.state.message);
    });
  }
  render() {
    return (
      <div className="box">
        <p> {this.state.message} </p>
        <button onClick={this.handler.bind(this)}>更新state</button>
      </div>
    );
  }
}
```
:::

**轻松一刻**
<AudioPlayer
  src="/mp3/5.mp3"
  title="音乐"
  poster="/mp3/5.jpg"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。

## setState重新渲染 :gem:

![](/images/react/react24.png)

调用setState，组件的render方法会被重新调用，从而重新渲染页面(组件跟子组件)
::: code-tabs#shell
@tab 父组件
```jsx
import React from 'react';
import Header from './child';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 12,
    };
  }
  onChange = () => {
    this.setState({ value: 23 }, () => {
      console.log(this.state.value)
    })
  }
  render() {
    return (
      <div>
        <p> {this.state.value} </p>
        <button onClick={this.onChange}>更新state</button>
        <Header data={this.state.value} />
      </div>
    )
  }
}
export default App
```
@tab 子组件
```jsx
import React from 'react'
class Header extends React.Component {
    render() {
        const value = this.props.data
        return (
            <div>
                <p>header</p>
                <p>{value}</p>
            </div>
        )
    }
}
export default Header
```
:::

点击更新state时，结果是父组件和子组件的值都变化了

那么，问题来了，如何只让父组件变化，子组件的值不发生变化呢？

解决方式就是基于props初始化state，如下：
::: code-tabs#shell
@tab 子组件
```jsx
import React from 'react'
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.data
        }
    }
    render() {
        return (
            <div>
                <p>header</p>
                <p>{this.state.value}</p>
            </div>
        )
    }
}
export default Header
```
:::

**轻松一刻**
<AudioPlayer
  src="/mp3/6.mp3"
  title="音乐"
  poster="/mp3/6.jpg"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。












## 组件的生命周期:gem:

![](/images/react/react25.png)

每个组件都有自己的生命周期，从“生”到”死“。

这个过程当中，它会有不同的状态，针对不同的状态，都有对应的一些钩子函数，我们可以借助这些钩子函数做这样的事情：针对组件的某个生命状态去执行某些代码。

::: tip
 - 组件的生命周期只针对类组件，函数组件无法使用
 - 生命周期关键节点

    1. 挂载时：`constructor`、`static getDerivedStateFromProps` 、`render()` 、`componentDidMount()`
    2. 更新时：`static getDerivedStateFromProps` 、`shouldComponentUpdate` 、`render()`、`getSnapshotBeforeUpdate`、`componentDidUpdate`
    3. 卸载时：`componentWillUnmount`
 - 组件生命周期图谱

    ![](/images/react/react26.png)
:::

### 挂载阶段 :ghost:
![](/images/react/react27.png)

挂载阶段指的是组件被初始化到第一次渲染到页面上这个过程。

挂载阶段的钩子函数：
  -  constructor ：构造函数，组件被初始化时调用，在生命周期中只会被调用一次。
  -  static getDerivedStateFromProps：是组件类的静态函数， 组件props或者state初始化或者变化时调用，最终可以返回一个新的state对象，使用率低。
  -  render ：定义并返回组件的界面（react元素）。
  -  componentDidMount： 生成了真实DOM并被渲染到页面之后调用，在生命周期中只会被调用一次。

``` jsx
class App extends React.Component {
  constructor(props) {
    console.log('constructor')
    super(props);
    // 初始化 state状态
    this.state = {
      text: "初始值"
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    return {
      text: props.text
    }
  }
  change = () => {
    this.setState({ text: "改变之后的值" })
  }
  render() {
    console.log('render')
    return (
      <div>
        <p>app</p>
        <button onClick={this.change}>更改state</button>
      </div>
    )
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}
export default App
```
::: info 运行结果
刷新页面打印：

1. constructor
2. getDerivedStateFromProps
3. render
4. componentDidMount

点击更改状态打印：

1. getDerivedStateFromProps
2. render
:::



### 更新阶段 :ghost:
![](/images/react/react28.png)

更新阶段指的是当影响组件的数据状态发生变更时（`props`，`state`发生变更）,重新更新渲染组件页面的过程

更新阶段的钩子函数：
  -  static getDerivedStateFromProps ：组件props或者state变化时调用
  -  shouldComponentUpdate： 返回布尔值，true则组件会重新渲染，false则不会重新渲染。
  -  render ：定义并返回组件的界面（react元素）。
  -  getSnapshotBeforeUpdate：在更新DOM之前调用，必须要返回一个值，要与 componentDidUpdate() 方法一起使用。
  -  componentDidUpdate： 页面更新之后调用

``` jsx
import React from 'react';
class App extends React.Component {
  constructor(props) {
    console.log('constructor', "组件被初始化")
    super(props);
    // 初始化 state状态
    this.state = {
      text: "初始值"
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', "props或者state初始化或者变化")
    return {
      text: state.text
    }
  }
  change = () => {
    this.setState({ text: "改变之后的值" })
  }
  render() {
    console.log('render', "真实DOM渲染")
    return (
      <div>
        <p> {this.state.text} </p>
        <button onClick={this.change}> 更改state</button>
      </div>
    )
  }
  componentDidMount() {
    console.log("componentDidMount", "真实DOM已经渲染到了页面上");
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate', "控制组件是否重新渲染")
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", "更新DOM之前调用");
    console.log("更新DOM前的值", prevState);
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate", "更新DOM之后调用");
  }
}
export default App
```
::: info 运行结果
刷新页面打印：

1. constructor 组件被初始化
2. getDerivedStateFromProps props或者state初始化或者变化
3. render 真实DOM渲染
4. componentDidMount 真实DOM已经渲染到了页面上

点击更改状态打印：

1. getDerivedStateFromProps props或者state初始化或者变化
2. shouldComponentUpdate 控制组件是否重新渲染
3. render 真实DOM渲染
4. getSnapshotBeforeUpdate 更新DOM之前调用
5. 更新DOM前的值 {text: '初始值'}
6. componentDidUpdate 更新DOM之后调用
:::
### 卸载阶段 :ghost:
![](/images/react/react29.png)

卸载阶段指的是组件从DOM移除的过程。

组件卸载时会调用的钩子函数：

  - componentWillUnmount：组件卸载之前调用。我们可以在这个钩子函数里面执行必要的清理操作。例如，清除定时器，关闭持续的网络连接，移除监听器等。

::: code-tabs#shell
@tab 父组件
``` jsx
import React from 'react';
import Header from './components/header';
class App extends React.Component{
  constructor(props) {
    console.log('constructor', "组件被初始化")
    super(props);
    // 初始化 state状态
    this.state = {
      text: "初始值",
      show: true
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', "props或者state初始化或者变化")
    return {
      text: state.text
    }
  }
  change = () => {
    this.setState({ text: "改变之后的值" })
  }
  isShow = () => {
    this.setState({ show: !this.state.show })
  }
  render() {
    console.log('render', "真实DOM渲染")
    return (
      <div>
        <p> {this.state.text} </p>
        <button onClick={this.change}> 更改state</button>
        <button onClick={this.isShow}>控制子组件显示</button>
        {
          this.state.show && <Header />
        }
      </div>
    )
  }
  componentDidMount() {
    console.log("componentDidMount", "真实DOM已经渲染到了页面上");
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate', "控制组件是否重新渲染")
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", "更新DOM之前调用");
    console.log("更新DOM前的值", prevState);
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate", "更新DOM之后调用");
  }
  componentWillUnmount() {
    console.log('componentWillUnmount', "组件马上要被移除卸载了")
  }
}
export default App
```
@tab 子组件
```jsx
import React from 'react'
class Header extends React.Component {
    componentWillUnmount() {
        console.log('componentWillUnmount', "组件马上要被移除卸载了")
    }
    render() {
        return (
            <div>
                <p>header</p>
            </div>
        )
    }
}
export default Header
```
:::
::: info 运行结果
刷新页面打印：
1. constructor 组件被初始化
2. getDerivedStateFromProps props或者state初始化或者变化
3. render 真实DOM渲染
4. componentDidMount 真实DOM已经渲染到了页面上

点击控制子组件显示打印：

1. getDerivedStateFromProps props或者state初始化或者变化
2. shouldComponentUpdate 控制组件是否重新渲染
3. render 真实DOM渲染
4. getSnapshotBeforeUpdate 更新DOM之前调用
5. 更新DOM前的值 {text: '初始值'}
6. componentWillUnmount 组件马上要被移除卸载了
7. componentDidUpdate 更新DOM之后调用
:::





**轻松一刻**
<AudioPlayer
  src="/mp3/7.mp3"
  title="音乐"
  poster="/mp3/7.jpg"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。
















## 表单输入:gem:
### 受控组件 :ghost:
![](/images/react/react30.png)

使 React 的 state 成为表单显示的“唯一数据源”，并且使用React控制用户输入过程中表单发生的操作。

这种由state驱动的表单元素就叫做“受控组件”


```jsx
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }
  onNameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  onPassChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.username} onChange={this.onNameChange} />
        <input type="password" value={this.state.password} onChange={this.onPassChange} />
        <button onClick={this.onSubmit}>提交</button>
      </div>
    )
  }
}
export default App
```
上面方式只用于处理少量表单，我们能看到，每当处理一个表单都要添加一个事件，那么晚要是有10个、100个表单呢？接着往下看。

受控组件处理多个输入

```jsx
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.username);
    console.log(this.state.email);
    console.log(this.state.password);
  }
  render() {
    return (
      <div>
        <input name='username' type="text" value={this.state.username} onChange={this.change} />
        <input name='email' type="text" value={this.state.email} onChange={this.change} />
        <input name='password' type="password" value={this.state.password} onChange={this.change} />
        <button onClick={this.onSubmit}>提交</button>
      </div>
    )
  }
}
export default App
```
::: tip 
注意：`input`中一定要加入`name`属性
:::


### 非受控组件 :ghost:
![](/images/react/react31.png)

在一个受控组件中，表单数据是由 React 组件来管理的，为每一个受控组件添加事件处理函数，写起来比较复杂，这并不完美。

可以使用替代方案：使用**非受控组件**，这时表单数据将由 DOM 节点来处理，但是这存在着性能消耗的问题，也不完美

```jsx
import React, { Component } from 'react'
export default class LoginForm extends Component {
  username
  email
  password
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.username.current.value);
    console.log(this.email.current.value);
    console.log(this.password.current.value);
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.username} />
        <input type="text" ref={this.email} />
        <input type="password" ref={this.password} />
        <button onClick={this.onSubmit}>提交</button>
      </div>
    )
  }
}
```


::: warning
如果你不介意代码美观性，并且希望快速编写代码，使用非受控组件往往可以减少你的代码量。否则，你应该使用受控组件。

强烈大家使用受控组件，尽量减少dom操作，否则会有性能消耗，在这里只给大家展示一下，不做过多介绍

毕竟，多些一些代码，能够减少性能消耗的话，也是十分有必要的
:::



**轻松一刻**
<AudioPlayer
  src="/mp3/8.mp3"
  title="音乐"
  poster="/mp3/8.jpg"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。
