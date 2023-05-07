---
category: [小程序,WEB前端]
tag: [微信小程序]
---
# 11.2 全局配置 :tada:

## 全局配置_ Pages :gem:

![](/images/small/s15.png)

用于指定小程序由哪些页面组成，每一项都对应一个页面的路径（含文件名） 信息。文件名不需要写文件后缀，框架会自动去寻找对应位置的 `.json`, `.js`, `.wxml`, `.wxss` 四个文件进行处理

::: tip
未指定 entryPagePath 时，数组的第一项代表小程序的初始页面（首页）
:::

小程序中新增/减少页面，都需要对`app.json`文件中 `pages` 数组进行修改

默认项目存在两个页面: `index`和`logs`,对应的`app.json`中`pages`属性的配置

```json
"pages": [
  "pages/index/index",
  "pages/logs/logs"
]
```

### entryPagePath :ghost:
指定小程序的默认启动路径（首页），在 `app.json` 配置文件中增加 `entryPagePath`
```json
{
  "entryPagePath": "pages/logs/logs",
  "pages": [
    "pages/index/index",
    "pages/logs/logs"
   ],
}
```
### 增加页面 :ghost:
方式一：可视化操作（推荐）
- 选中pages --> 右键新建文件夹 --> 选中新建好的文件夹 --> 右键新建Page

方式二：修改app.json文件
- 修改 app.json 文件中的pages属性（在pages中直接添加路径，可以自动生成页面）
  ```json
    "pages": [
    "pages/news/news",
    "pages/index/index",
    "pages/logs/logs"
    ],
  ```

### 删除页面 :ghost:

::: warning
删除时要删除`app.json` 文件中`pages`属性下的对应路径，同时要删除页面文件夹，两者必须保持同步，否则不能完成删除操作
:::


## 全局配置_window :gem:

![](/images/small/s16.png)

`window` 用于设置小程序的状态栏、导航条、标题、窗口背景色等等

::: info 常用属性

| 属性                         | 类型     | 默认值  | 描述                                              |
| ---------------------------- | -------- | ------- | ------------------------------------------------- |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如 `#000000`                      |
| navigationBarTextStyle       | string   | white   | 导航栏标题颜色，仅支持 `black` / `white`          |
| navigationBarTitleText       | string   |         | 导航栏标题文字内容                                |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色                                      |
| backgroundTextStyle          | string   | dark    | 下拉 loading 的样式，仅支持 `dark` / `light`      |
| enablePullDownRefresh        | boolean  | false   | 是否开启全局的下拉刷新。                          |
| onReachBottomDistance        | number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位为 px。 |

:::


修改app.json文件中的window属性配置

```json
"window": {
  "navigationBarBackgroundColor": "#000000",
  "navigationBarTextStyle": "white",
  "navigationBarTitleText": "第一个小程序",
  "backgroundColor": "#000000",
  "backgroundTextStyle": "light",
  "enablePullDownRefresh":true,
  "onReachBottomDistance":50
},
```


## 全局配置_tabBar :gem:

![](/images/small/s17.png)

如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置 tab 切换时显示的对应页面

::: info tabBar属性

| 属性            | 类型     | 必填 | 默认值 | 描述                                                       |
| --------------- | -------- | ---- | ------ | ---------------------------------------------------------- |
| color           | HexColor | 是   |        | tab 上的文字默认颜色，仅支持十六进制颜色                   |
| selectedColor   | HexColor | 是   |        | tab 上的文字选中时的颜色，仅支持十六进制颜色               |
| backgroundColor | HexColor | 是   |        | tab 的背景色，仅支持十六进制颜色                           |
| borderStyle     | string   | 否   | black  | tabbar 上边框的颜色， 仅支持 `black` / `white`             |
| list            | Array    | 是   |        | tab 的列表，详见 `list` 属性说明，最少 2 个、最多 5 个 tab |
| position        | string   | 否   | bottom | tabBar 的位置，仅支持 `bottom` / `top`                     |

- - -
常用属性是 `list` ,其中 `list` 接受一个数组，只能配置最少 2 个、最多 5 个 tab
:::

::: info List属性说明

| 属性             | 类型   | 必填 | 说明                                                         |
| ---------------- | ------ | ---- | ------------------------------------------------------------ |
| pagePath         | string | 是   | 页面路径，必须在 pages 中先定义                              |
| text             | string | 是   | tab 上按钮文字                                               |
| iconPath         | string | 否   | 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。 **当 `position` 为 `top` 时，不显示 icon。** |
| selectedIconPath | string | 否   | 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。 **当 `position` 为 `top` 时，不显示 icon。** |

:::


修改`app.json`配置文件，增加`tabBar`属性配置

```json
"tabBar": {
  "color":"#999999",
  "selectedColor":"#ff0000",
  "backgroundColor":"#fff",
  "borderStyle":"black",
  "position":"bottom",
  "list": [{
    "pagePath": "pages/index/index",
    "text": "首页",
    "iconPath":"./images/home.png",
    "selectedIconPath":"./images/home_select.png"
   }, {
    "pagePath": "pages/news/news",
    "text": "新闻",
    "iconPath": "./images/news.png",
    "selectedIconPath": "./images/news_select.png"
   }]
},
```

## 常用其他全局配置 :gem:

![](/images/small/s18.png)

小程序根目录下的 `app.json` 文件用来对微信小程序进行其他全局配置。文件内容为一个 JSON 对象

| 属性            | 类型    | 必填 | 描述                          |
| --------------- | ------- | ---- | ----------------------------- |
| style           | string  | 否   | 指定使用升级后的 weui 样式    |
| sitemapLocation | string  | 是   | 指明 sitemap.json 的位置      |
| networkTimeout  | Object  | 否   | 网络超时时间                  |
| debug           | boolean | 否   | 是否开启 debug 模式，默认关闭 |
| debugOptions    | Object  | 否   | 调试相关配置                  |
| permission      | Object  | 否   | 小程序接口权限相关设置        |
| ...             | ...     | ...  | ...                           |


### style :ghost:

微信客户端 7.0 开始，UI 界面进行了大改版。小程序也进行了基础组件的样式升级。app.json 中配置 `"style": "v2"`可表明启用新版的组件样式

### sitemapLocation :ghost:
指明 `sitemap.json`的位置；默认为 `'sitemap.json'` 即在 `app.json` 同级目录下名字的 `sitemap.json` 文件

### networkTimeout :ghost:
各类网络请求的超时时间，单位均为毫秒

| 属性          | 类型   | 必填 | 默认值 | 说明                                    |
| ------------- | ------ | ---- | ------ | --------------------------------------- |
| request       | number | 否   | 60000  | wx.request 的超时时间，单位：毫秒       |
| connectSocket | number | 否   | 60000  | wx.connectSocket 的超时时间，单位：毫秒 |
| uploadFile    | number | 否   | 60000  | wx.uploadFile 的超时时间，单位：毫秒    |
| downloadFile  | number | 否   | 60000  | wx.downloadFile 的超时时间，单位：毫秒  |


### debug :ghost:
可以在开发者工具中开启 `debug` 模式，在开发者工具的控制台面板，调试信息以 `info` 的形式给出，其信息有 `Page` 的注册，页面路由，数据更新，事件触发等。可以帮助开发者快速定位一些常见的问题

### debugOptions :ghost:
小程序调试相关配置项

| 属性           | 类型    | 必填 | 默认值 | 描述              |
| -------------- | ------- | ---- | ------ | ----------------- |
| enableFPSPanel | boolean | 否   | false  | 是否开启 FPS 面板 |

### FPS 面板 :ghost:

为了便于开发者调试渲染层的交互性能，小程序基础库提供了选项开启 FPS 面板，开发者可以实时查看渲染层帧率

**开启方式**：
```json
"debugOptions": {
  "enableFPSPanel": true
}
```
::: tip
必须在真机上才能看到
:::

### permission :ghost:
小程序接口权限相关设置

例如：小程序定位设置，配置如下
```json
"permission": {
  "scope.userLocation": {
    "desc": "你的位置信息将用于小程序位置接口的效果展示"
   }
}
```

```json
{
  "entryPagePath": "pages/index/index",
  "pages": [
    "pages/news/news",
    "pages/index/index",
    "pages/logs/logs",
    "pages/about/about"
   ],
  "window": {
    "navigationBarBackgroundColor": "#000000",
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "第一个小程序",
    "backgroundColor": "#000000",
    "backgroundTextStyle": "light",
    "enablePullDownRefresh": true,
    "onReachBottomDistance": 50
   },
  "tabBar": {
    "color": "#999999",
    "selectedColor": "#ff0000",
    "backgroundColor": "#fff",
    "borderStyle": "black",
    "position": "bottom",
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": "./images/home.png",
      "selectedIconPath": "./images/home_select.png"
     }, {
      "pagePath": "pages/news/news",
      "text": "新闻",
      "iconPath": "./images/news.png",
      "selectedIconPath": "./images/news_select.png"
     }]
   },
  "style": "v2",
  "sitemapLocation": "sitemap.json",
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000
   },
  "debug": true,
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
     }
   },
  "debugOptions": {
    "enableFPSPanel": true
   }
}
```


## 单页面配置 :gem:
![](/images/small/s19.png)

`app.json` 中的部分配置，也支持对单个页面进行配置

可以在页面对应的 文件`.json` 文件来对本页面的表现进行配置

::: info    配置项

| 属性                         | 类型     | 默认值  | 描述                                             |
| ---------------------------- | -------- | ------- | ------------------------------------------------ |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如 `#000000`                     |
| navigationBarTextStyle       | string   | white   | 导航栏标题颜色，仅支持 `black` / `white`         |
| navigationBarTitleText       | string   |         | 导航栏标题文字内容                               |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色(开启下拉菜单可以观察)               |
| backgroundTextStyle          | string   | dark    | 下拉 loading 的样式，仅支持 `dark` / `light`     |
| enablePullDownRefresh        | boolean  | false   | 是否开启当前页面下拉刷新                         |
| onReachBottomDistance        | number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位为px。 |
| style                        | string   | default | 启用新版的组件样式                               |
| ...                          | ...      | ...     | ...                                              |

:::

::: warning
虽然配置与 `app.json` 基本一致，但是注意，不再需要添加 `window` 作为父级

单页面里的`.json`配置会覆盖掉`app.json`的配置
:::

```json
{
  "usingComponents": {},
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "第二个页面",
  "backgroundColor": "#ffffff",
  "backgroundTextStyle": "light",
  "enablePullDownRefresh": true,
  "onReachBottomDistance": 50,
  "style":"v2"
}
```

::: tip 自定义window和tabBar
- 自定义window
```json
"navigationStyle": "custom",
```
使用官网自带的头部，样式单一，结构固定，不适合复杂业务的处理，因此可以选择当前页面自定义头部布局
- 自定义tarBar
```json
"tabBar": {
    "custom":true,
    ……
}
```
所有 `tab` 页的 `json` 里需声明 usingComponents 项，也可以在 `app.json` 全局开启。
:::

## 全局配置_公共样式 :gem:

![](/images/small/s20.png)

在项目根目录的 app.wxss 文件为小程序公的共样式表，相当与CSS初始化文件配置

WXSS (WeiXin Style Sheets)是一套样式语言，用于描述 WXML 的组件样式

WXSS 用来决定 WXML 的组件应该怎么显示

为了适应广大的前端开发者，WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改。

与 CSS 相比，WXSS 扩展的特性有

- 尺寸单位

- 样式导入

### 公共样式 :ghost:
在 `app.wxss` 文件中添加样式

```css
text{
  color:red;
}
```
项目中所有的页面的 `text` 文本都会呈现红色
### 尺寸单位 :ghost:
rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素

| 设备         | rpx换算px (屏幕宽度/750) | px换算rpx (750/屏幕宽度) |
| ------------ | ------------------------ | ------------------------ |
| iPhone5      | 1rpx = 0.42px            | 1px = 2.34rpx            |
| iPhone6      | 1rpx = 0.5px             | 1px = 2rpx               |
| iPhone6 Plus | 1rpx = 0.552px           | 1px = 1.81rpx            |





::: tip
建议： 开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。

注意： 在较小的屏幕上不可避免的会有一些毛刺，请在开发时尽量避免这种情况
:::

```html
<view class="box"></view>
```

```css
.box{
  width: 200rpx;
  height: 200rpx;
  background: red;
}
```

在iphone5上的效果，元素的宽高是85px

![](/images/small/s21.png)

在iphone6上的效果，元素的宽高是100px

![](/images/small/s22.png)


### 样式导入 :ghost:


使用`@import`语句可以导入外联样式表，`@import`后跟需要导入的外联样式表的相对路径，用;表示语句结束

在项目根目录下创建`common`文件夹，并创建`common.wxss`文件，增加`box`的样式

```css
.box{
  margin: 50px;
}
```
在`app.wxss`文件中引入`common.wxss`文件
```css
@import "./common/common.wxss";
```


## 全局属性 :gem:

![](/images/small/s23.png)

整个小程序只有一个 App 实例，是全部页面共享的。开发者可以通过 `getApp` 方法获取到全局唯一的 App 实例，获取 App 上的数据或调用开发者注册在 App 上的函数。

在 app.js 文件中增加全局属性

```js
// app.js
App({
 globalData: {
  userInfo: "我是全局属性"
  }
})
```

我们在news.js文件中读取全局属性

```js
const appInstance = getApp()
Page({
  onLoad(options) {
    console.log(appInstance.globalData.userInfo) // 我是全局属性
   }
})
```

当然，我们也可以在页面中显示，首先修改`news.js`文件
```js
Page({
  data:{
    message:""
   },
  onLoad(options) {
    const appInstance = getApp()
    // 关于this.setData({}),后续会详细讲解，目前我们知道可以给message赋值即可
    this.setData({
      message:appInstance.globalData.userInfo
     })
   }
})
```

修改`news.wxml`文件显示内容
```html
<text>{{ message }}</text>
```

## 页面中的Data对象 :gem:

![](/images/small/s25.png)

`data` 是页面第一次渲染使用的初始数据

页面加载时，`data` 中的数据将会以JSON字符串的形式由逻辑层传至渲染层，因此data中的数据必须是可以转成JSON的类型：字符串，数字，布尔值，对象，数组

我们在`news.js`文件中增加data对象，并增加相应的数据,显示在页面中

```js
// news.js文件
Page({
  data:{
    hello:"hello",
    num:10,
    flag:true,
    user:{
      name:"iwen",
      age:20
     },
    names:["iwen","ime","frank"]
   }
})
```
```html
<!-- news.wxml文件 -->
<text>{{ hello }}</text>
<text>{{ num }}</text>
<text>{{ user.name }}</text>
<text>{{ names[1] }}</text>
```



### setData函数 :ghost:

`setData` 函数用于将`data`中的数据进行修改，并发送到视图层

我们在`news.js`文件中修改`data`中的数据，我们可以尝试在`onLoad`中修改`num`的属性值

```js
Page({
  data:{
    message:"",
    hello:"hello",
    num:10,
    flag:true,
    user:{
      name:"iwen",
      age:20
     },
    names:["iwen","ime","frank"]
   },
  onLoad(options) {
    this.setData({
      num:20
     })
   }
})
```

我们可以观察到页面中的`num`数字发生了变化为20


::: tip
- 直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致
- 仅支持设置可 JSON 化的数据
- 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据
- 请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题

- - -
关于data和setData这种操作很神奇,其实也是前端最常用的模版数据绑定方案
:::