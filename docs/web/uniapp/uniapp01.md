---
category: [UNIAPP,WEB前端]
tag: uniapp
---

# 12.1 初体验uniapp :tada:

::: details  学习此章节之前，请先阅读这里！！！
如果你已经完成了Vue和微信小程序的学习，那么你可以继续往下学习此章节，假如你没有学习完Vue和微信小程序，请点击[Vue3](/web/uniapp)和[微信小程序](/web/small)，学习完这两个章节之后再继续阅读本章节！
:::


![](/images/uniapp/uni1.png)

**uni-app** 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台

**uni-app** 核心：开发一次，多端覆盖

目前可以支持14个平台，当然，最核心的几个平台包含：Android端、iOS端、Web端、微信小程序端

扫描下面二维码，亲自体验最全面的跨平台效果！
![](/images/uniapp/uni2.png)

::: tip
官网文档：[https://uniapp.dcloud.net.cn/](https://uniapp.dcloud.net.cn/)
:::

#### 基本语言和开发规范
uni-app代码编写，基本语言包括js、vue、css。以及ts、scss等css预编译器

为了实现多端兼容，综合考虑编译速度、运行性能等因素，uni-app 约定了如下开发规范：

- 页面文件遵循 Vue 单文件组件 (SFC) 规范，即每个页面是一个.vue文件
- 组件标签靠近小程序规范
- 接口能力（JS API）靠近小程序规范，但需将前缀 wx、my 等替换为 uni
- 数据绑定及事件处理同 Vue.js 规范，同时补充了App及页面的生命周期
uni-app分编译器和运行时（runtime）。uni-app能实现一套代码、多端运行，是通过这2部分配合完成的基本语言和开发规范

## 创建项目 :gem:

::: tabs

@tab vue-cli命令行创建
可以使用 cli 脚手架，可以通过 vue-cli 创建 uni-app 项目。

#### ==全局安装 vue-cli==

```bash
npm install -g @vue/cli
```

#### ==创建uni-app==

  - 使用正式版（对应HBuilderX最新正式版）
    ```bash
    vue create -p dcloudio/uni-preset-vue my-project
    ```

  - 使用alpha版（对应HBuilderX最新alpha版）
    ```bash
    vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
    ```

  - 使用Vue3/Vite版
    - 创建以 javascript 开发的工程
      ```bash
      npx degit dcloudio/uni-preset-vue#vite my-vue3-project
      ```
    - 创建以 typescript 开发的工程
      ```bash
      npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
      ```
    
此时，会提示选择项目模板（使用Vue3/Vite版不会提示，目前只支持创建默认模板），初次体验建议选择 hello uni-app 项目模板，如下所示：

![](/images/uniapp/uni8.png)

#### ==运行、发布uni-app==

```bash
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```
#### **%PLATFORM% 可取值如下：**

| 值                      | 平台                                                         |
| ----------------------- | ------------------------------------------------------------ |
| app-plus                | app平台生成打包资源（支持npm run build:app-plus，可用于持续集成。不支持run，运行调试仍需在HBuilderX中操作） |
| h5                      | H5                                                           |
| mp-alipay               | 支付宝小程序                                                 |
| mp-baidu                | 百度小程序                                                   |
| mp-weixin               | 微信小程序                                                   |
| mp-toutiao              | 字节跳动小程序                                               |
| mp-lark                 | 飞书小程序                                                   |
| mp-qq                   | qq 小程序                                                    |
| mp-360                  | 360 小程序                                                   |
| mp-kuaishou             | 快手小程序                                                   |
| mp-jd                   | 京东小程序                                                   |
| mp-xhs                  | 小红书小程序                                                 |
| quickapp-webview        | 快应用(webview)                                              |
| quickapp-webview-union  | 快应用联盟                                                   |
| quickapp-webview-huawei | 快应用华为                                                   |

@tab 可视化创建

可视化的方式比较简单，HBuilderX内置相关环境，开箱即用，无需配置nodejs

开始之前，开发者需先下载安装如下工具：

- HBuilderX：官方IDE下载地址：[https://www.dcloud.io/hbuilderx.html](https://www.dcloud.io/hbuilderx.html)

HBuilderX是通用的前端开发工具，但为uni-app做了特别强化

#### ==创建uni-app==
在点击工具栏里的文件 -> 新建 -> 项目（快捷键Ctrl+N）：

![](/images/uniapp/uni3.png)

选择uni-app类型，输入工程名，选择模板，点击创建，即可成功创建

uni-app自带的模板有 默认的空项目模板、Hello uni-app 官方组件和API示例，还有一个重要模板是 uni ui项目模板，日常开发推荐使用该模板，已内置大量常用组件

![](/images/uniapp/uni4.png)

#### ==运行uni-app==
- 浏览器运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器，即可体验 uni-app 的 web 版

![](/images/uniapp/uni5.png)

- 运行App到手机或模拟器：使用电压足够的usb端口连接手机，设置中开启USB调试，手机上允许电脑设备调试手机，进入hello-uniapp项目，点击工具栏的运行 -> 运行App到手机或模拟器，即可在该设备里面体验uni-app

![](/images/uniapp/uni6.png)

- 在微信开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 微信开发者工具，即可在微信开发者工具里面体验uni-app

![](/images/uniapp/uni7.png)

> 如果是第一次使用，需要先配置小程序ide的相关路径，才能运行成功 <br/>
> 微信开发者工具需要开启服务端口 在微信工具的设置->安全中
:::

## 项目目录结构 :gem:
![](/images/uniapp/uni9.png)

一个uni-app工程，默认包含如下目录及文件

```bash
┌─uniCloud       云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见uniCloud）
│─components      符合vue组件规范的uni-app组件目录
│ └─comp-a.vue     可复用的a组件
├─utssdk        存放uts文件
├─pages         业务页面文件存放的目录
│ ├─index
│ │ └─index.vue    index页面
│ └─list
│   └─list.vue    list页面
├─static        存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─uni_modules      存放[uni_module](uni_modules)。
├─platforms       存放各平台专用页面的目录，详见
├─nativeplugins     App原生语言插件 详见
├─nativeResources    App端原生资源目录
│ └─android      Android原生资源目录 详见
├─hybrid        App端存放本地html文件的目录，详见
├─wxcomponents     存放小程序组件的目录，详见
├─unpackage       非工程代码，一般存放运行或发行的编译结果
├─AndroidManifest.xml  Android原生应用清单文件 详见
├─main.js        Vue初始化入口文件
├─App.vue        应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json     配置应用名称、appid、logo、版本等打包信息，详见
├─pages.json      配置页面路由、导航条、选项卡等页面类信息，详见
└─uni.scss       这里是uni-app内置的常用样式变量
```

## 页面简介 :gem:
![](/images/uniapp/uni10.png)

uni-app项目中，一个页面就是一个符合Vue SFC规范的.vue文件

- 新建页面

  uni-app中的页面，通常会保存在工程根目录下的pages目录下

  每次新建页面，均需在pages.json中配置pages列表；未在pages.json -> pages 中配置的页面，uni-app会在编译阶段进行忽略

- 删除页面

  删除页面时，需做两件工作
  - 删除.vue文件
  - 删除pages.json -> pages列表项中的配置

- 应用首页

  uni-app会将pages.json -> pages配置项中的第一个页面，作为当前工程的首页（启动页）

  也可以使用`entryPagePath`指定具体启动页


::: warning 不要混淆页面和组件

页面和组件很相似，都是以后缀.vue结尾

页面中不能使用vue的生命周期函数，而应该使用小程序的生命周期函数

组件中应使用Vue的生命周期函数
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