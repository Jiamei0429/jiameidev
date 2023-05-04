---
category: [RRACT,WEB前端]
tag: react
---
# 8.2 React基础 :tada:
## React组件化思想:gem:
![](/images/react/react6.png)

在React应用中，我们把一个页面看作是由一个个组件构成的。

每一个组件可以包含自己的页面结构、样式与页面逻辑

组件化开发，带来了全新的开发体验，也带来了全新的编码方式。

在React中，构建管理自身状态的封装组件
由于组件逻辑使用 JavaScript 编写而非模板，因此你可以轻松地在应用中传递数据，并保持状态与 DOM 分离。


![](/images/react/react7.png)

如下展示的就是一个React组件，名字为Home
::: react-demo 代码演示及训练
```js
const { useState } = React;
const Home = () => {
  const [message, setMessage] = useState("Hello");
  return (
    <div className="box">
      <code id="powerful">我是Home组件</code>
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
  src="/mp3/5.mp3"
  title="音乐"
  poster="/mp3/5.jpg"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。






## JSX基本介绍:gem:
![](/images/react/react8.png)
### 什么是JSX？ :ghost:
**JSX**是一个 JavaScript 的语法扩展，**JSX 可以生成 React“元素”**，React元素用来描述页面应该长什么样子。
可以把JSX理解为 JavaScript + XML,XML我们不熟悉，那就把XML立即为具有严格规范的HTML。
::: tip 为什么使用 JSX？
React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据

React 并没有采用将标记与逻辑分离到不同文件这种人为的分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现关注点分离
:::

首先，我们看一下最简单的一段jsx
```jsx
const element = <h1>Hello, lcl</h1>
```

其次，我们在JSX中指定属性

```jsx
const element = <img src="https://www.baidu.com/img/flexible/logo/pc/result.png"></img>;
```

以上给我们的感觉就是普通的HTML结构，但是，它又有与其不同的地方，继续往下看

现在，我们在JSX中嵌入静态的表达式

```jsx
const name = 'lcl';
const element = <h1>Hello, {name}</h1>;  
const element = <h1>答案为, {1<0 ? "正确" : "错误"}</h1>;  
```

```jsx
const avatarUrl='https://www.baidu.com/img/flexible/logo/pc/result.png'
const element = <img src={avatarUrl}></img>;
```

通过上述对比，应该能够感觉到，在jsx中，当遇到`{}`就当作JavaScript来进行解析，当遇到`< >`就当作HTML来解析，下面看完整示例：

```jsx
import React from 'react';
const Home = () => {    //大驼峰命名
    const list = {
        title: 1,
        age: 12,
        desc: "哈哈"
    }
    return (
        <div>
            <p>{list.deac}</p>
        </div>
    )
}
export default Home
```

在上述代码中，我创建了一个函数组件，组件名称为`Home`，该组件返回一个React元素，我在上边提到过，React元素用来描述页面应该长什么样子。所以，此组件最终的样子就是`<div><p>哈哈</p></div>` 所渲染的样式。

::: react-demo 代码演示及训练
```js
const Home = () => {    //大驼峰命名
    const list = {
        title: 1,
        age: 12,
        desc: "哈哈"
    }
    return (
        <div>
            <p>{list.desc}</p>
        </div>
    )
}
export default Home
```
:::



### 浏览器插件的安装 :ghost:
chrome浏览器安装React开发者插件
::: tip chrome应用商店地址（需解决网络问题）：
https://chrome.google.com/webstore?utm_source=chrome-ntp-icon
:::
chrome -> 应用商店 -> 搜索 React Developer Tools -> 点击安装

尝试自己写一段JSX，代替App组件的界面
``` jsx
<h1>hello，world</h1>
```
最后，观察最终生成的DOM结构



### JSX的Class与Style属性 :ghost:
![](/images/react/react10.png)

在React中，`style`属性与HTML中的`style`属性一致，但是`class`属性名修改为 了`className`
::: tip 为什么class属性名修改为了className?
因为class在react中作为关键字被保留了
:::

#### className 
::: code-tabs#shell
@tab App.jsx
```jsx
import './App.css';   //引入app组件的css样式
function App() {
  const a = 12
  return (
    <div>
      <p className='text'>{a}</p>
    </div>
  );
}
export default App;
```
@tab App.css
```css
*{
  margin: 0;
  padding: 0;
}
.text{
  color: red;
  font-size: 30px;
}
```
:::
#### style 
```jsx
function App() {
  const a = 12
  return (
    <div>
      <p className='text' style={{ width: "200px", height: "200px", background: "green" }}>{a}</p>
    </div>
  );
}
export default App;
```
::: react-demo 代码演示及训练
```js
const Home = () => {    //大驼峰命名
    const a = 12
    return (
        <div>
            <p className='text' style={{ width: "100px", height: "100px", background: "green" }}>{a}</p>
        </div>
    );
}
export default Home
```
```css
.text{
    color: red;
}
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










## 条件渲染:gem:
![](/images/react/react9.png)

我们可以根据不同的条件，渲染不同的界面，举个例子，现在有一个判断条件，如果正确就显示`A`，如果错误就显示`B`，相信大家用js都是能够实现的，那么在React中如何来实现呢，带大家看一下。
```jsx
//APP.jsx
const APP = () => {
  let message = {
    title: "数据"
  }
  return (
    <div>
      {/* 渲染文本 */}
      <p>{10 < 8 ? "A" : "B"}  </p>
      {/* 渲染标签 */}
      {
        message.title ? <p>123</p> : <p>456</p>
      }
    </div>
  )
}
export default APP
```
::: react-demo 代码演示及训练
```js
const APP = () => {
  let message = {
    title: "数据"
  }
  return (
    <div>
      {/* 渲染文本 */}
      <p>{10 < 8 ? "A" : "B"}  </p>
      {/* 渲染标签 */}
      {
        message.title ? <p>123</p> : <p>456</p>
      }
    </div>
  )
}
export default APP
```
:::

#### 与运算符&&
上边的例子，要么渲染A，要么渲染B，最后总要渲染一个，非黑即白，现在我有一个需求，条件正确就渲染A，否则什么都不渲染，下面来实现一下：

```jsx
//APP.jsx
const APP = () => {
  const flag=true
  const uflag=false
  return (
    <div>
      <p>{flag && "A"}  </p>
      {
        uflag  && <p>AA</p>
      }
    </div>
  )
}
export default APP
```

::: tip 
在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回 false。

因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。
:::
::: react-demo 代码演示及训练
```js
const APP = () => {
  const flag=true
  const uflag=false
  return (
    <div>
      <p>{flag && "A"}  </p>
      {
        uflag  && <p>AA</p>
      }
    </div>
  )
}
export default APP
```
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












## 列表渲染 :gem:
![](/images/react/react11.png)

列表是页面常见的展示效果,可以通过使用 {} 在 JSX 内构建一个元素集合。
::: code-tabs#shell
@tab 简单列表渲染
```jsx
const App = () => {
  const list = ["前端团队", "后端团队", "设计团队"]
  return (
    <div>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}
export default App
```
@tab 复杂列表渲染
```jsx
const App = () => {
  const list = [
    {
      title: 1,
      age: 11,
      desc: "111"
    },
    {
      title: 2,
      age: 22,
      desc: "222"
    }
  ]
  return (
    <div>
      {list.map((item, index) => {
        return (
          <ul key={index}>
            <li >{item.title}</li>
            <li >{item.age}</li>
            <li >{item.desc}</li>
          </ul>
        )
      })}
    </div>
  )
}
export default App
```
:::


::: react-demo 代码演示及训练
```js
const App = () => {
  const arrs = ["前端团队", "后端团队", "设计团队"]
  const lists = [
    {
      title: "小米",
      age: 11,
      desc: "111"
    },
    {
      title: "大米",
      age: 22,
      desc: "222"
    }
  ]
  return (
    <div>
      {lists.map((item, index) => {
        return (
          <ul key={index}>
            <li >{`${item.title}的年龄是${item.age}`}</li>
          </ul>
        )
      })}
      {arrs.map((item, index) => {
          return <p key={index}>{item}</p>
      })}
    </div>
  )
}
export default App
```
:::

::: tip 列表渲染_key
![](/images/react/react12.png)

key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识

一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用数据中的 id 来作为元素的 key

当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key
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










## 事件及事件传参 :gem:
![](/images/react/react13.png)

React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：
- React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

在学Recat之前，事件处理是这样的:
::: code-tabs#shell
@tab Html
```html
<button onclick="onadd()">新增</button>
```
@tab Js
```js
function onadd(){
    console.log("事件触发了")
}
```
:::
学了Recat之后，事件处理是这样的:
```jsx
//App.jsx
const App = () => {
  const onAdd = () => {
    console.log('点击事件发生了')
  }
  const change = () => {
    console.log('正在输入')
  }
  return (
    <div>
      <button onClick={onAdd}>提交</button>
      <input type="text"
        onChange={change}
        onFocus={() => console.log('获得焦点')}
        onBlur={() => console.log('失去焦点')}
      />
    </div>
  )
}
export default App
```
::: react-demo 代码演示及训练
```js
const App = () => {
  const onAdd = () => {
    console.log('点击事件发生了')
  }
  const change = () => {
    console.log('正在输入')
  }
  return (
    <div>
      <button onClick={onAdd}>提交</button>
      <input type="text"
        onChange={change}
        onFocus={() => console.log('获得焦点')}
        onBlur={() => console.log('失去焦点')}
      />
    </div>
  )
}
export default App
```
:::
### 事件对象:ghost:
![](/images/react/react14.png)

默认情况下，react会传递一个事件对象到事件的处理函数，这个事件对象是一个合成事件对象。
```jsx
const App = () => {
  const onAdd = (e) => {
    console.log(e)
  }
  return (
    <div>
      <button onClick={onAdd}>提交</button>
    </div>
  )
}
```
通过事件对象，我们可以达到阻止默认事件、阻止冒泡、获取输入的值等目的。
```jsx
const App = () => {
  const onAdd = (e) => {
    e.preventDefault();//阻止默认事件
    e.stopPropagation()//阻止事件冒泡
    console.log(e)
  }
  return (
    <div>
      <a onClick={onAdd} href="https://www.baidu.com">点击</a>
      <input onChange={(e) => { console.log(e.target.value) }} />
    </div>
  )
}
export default App
```
::: react-demo 代码演示及训练
```js
const App = () => {
  const onAdd = (e) => {
    e.preventDefault();//阻止默认事件
    e.stopPropagation()//阻止事件冒泡
    console.log(e)
  }
  return (
    <div>
      <a onClick={onAdd} href="https://www.baidu.com">点击</a>
      <input onChange={(e) => { console.log(e.target.value) }} />
    </div>
  )
}
export default App
```
:::
### 事件传参:ghost:
![](/images/react/react15.png)

除了自带的事件对象参数，还可以传递其他的一个或多个参数

```jsx
const App = () => {
  // 方式1
  const onAdd = (param) => {
    return (e) => {
      console.log(param)
      console.log(e)
    }
  }
  //方式2
  const onAdd1 = (param,e) => {
    console.log(param)
    console.log(e)
  }
  return (
    <div>
      <button onClick={onAdd('hello')}>点击1</button>
      <button onClick={(e) => onAdd1('hello', e)}>点击2</button>
    </div>
  )
}
export default App
```
::: tip
当参数和事件对象都要传递时，默认把事件对象`event`放到后面
:::
::: react-demo 代码演示及训练
```js
const App = () => {
  // 方式1
  const onAdd = (param) => {
    return (e) => {
      console.log(param)
      console.log(e)
    }
  }
  //方式2
  const onAdd1 = ( param,e) => {
    console.log(param)
    console.log(e)
  }
  return (
    <div>
      <button onClick={onAdd('hello')}>点击1</button>
      <button onClick={(e) => onAdd1('hello', e)}>点击2</button>
    </div>
  )
}
export default App
```
:::
### class组件中的事件:ghost:
![](/images/react/react16.png)

类组件中的`this`指向类的实例，在render函数中可以通过`this`访问该类的实例的属性。
```jsx
import React from 'react';
class App extends React.Component {
  onAdd() {
    console.log('点击事件发生了')
  }
  render() {
    return <div>
      <button onClick={this.onAdd}>点击</button>
    </div>
  }
}
export default App
```
::: tip
在 JavaScript 中，class 的方法默认不会绑定`this`,你可以在上边的案例中的onAdd函数中打印一下`console.log(this)`,值为`Undefined`
:::

那么，如何才能在函数中访问到this?

我准备了三种方式

  - 方法一：手动绑定函数中`this`的指向
    ```jsx
    import React from 'react';
    class App extends React.Component {
      onAdd() {
        console.log('点击事件发生了')
        console.log(this);

      }
      render() {
        return <div>
          <button onClick={this.onAdd.bind(this)}>点击</button>
        </div>
      }
    }
    export default App
    ```
  - 方法二：使用箭头函数

    ```jsx
    import React from 'react';
    class App extends React.Component {
      onAdd = () => {
        console.log('点击事件发生了')
        console.log(this);
      }
      render() {
        return <div>
          <button onClick={this.onAdd}>点击</button>
        </div>
      }
    }
    export default App
    ```

  - 方法三：在类的构造函数中绑定

    ```jsx
    import React from 'react';
    class App extends React.Component{
      constructor(props:) {
        super(props)
        this.onAdd = this.onAdd.bind(this)
      }
      onAdd() {
        console.log('点击事件发生了')
        console.log(this)
      }
      render() {
        return <div>
          <button onClick={this.onAdd}>点击</button>
        </div>
      }
    }
    export default App
    ```

在这里，我并不推荐大家使用类组件，很明显，这要比使用函数组件麻烦的多，而且在后期的Ant Design UI组件库的学习中，官方提供的都是函数组件，后期的ReactHook学习也是针对函数组件来进行的，使用函数组件具有一定的技术前瞻性！

**轻松一刻**
<AudioPlayer
  src="/mp3/1.mp3"
  title="音乐"
  poster="/mp3/1.jpg"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。