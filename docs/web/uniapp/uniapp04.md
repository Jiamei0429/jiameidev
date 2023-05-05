---
category: [UNIAPP,WEB前端]
tag: uniapp
---

# 12.4 使用UI组件库 :tada:

## uni-ui :gem:
![](/images/uniapp/uni26.png)

uni-ui是DCloud提供的一个跨端ui库，它是基于vue组件的、flex布局的、无dom的跨全端ui框架。

uni-ui不包括基础组件，它是基础组件的补充。

目前为止，在小程序和混合app领域，uni-ui是性能的标杆。

::: tip
如果你选择可视化安装使用uni-ui,请参考这里:[官当文档](https://uniapp.dcloud.net.cn/component/uniui/quickstart.html#%E5%9C%A8hbuilderx-%E6%96%B0%E5%BB%BAuni-app%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%A8%A1%E6%9D%BF%E4%B8%AD-%E9%80%89%E6%8B%A9uni-ui%E6%A8%A1%E6%9D%BF)
:::

### 快速使用 :ghost:
  - 在 vue-cli 项目中可以使用 npm 安装 uni-ui 库 ，或者直接在 HBuilderX 项目中使用 npm 。
    ::: tip
    注意 cli 项目默认是不编译 node_modules 下的组件的，导致条件编译等功能失效 ，导致组件异常 需要在根目录创建 vue.config.js 文件 ，增加 @dcloudio/uni-ui 包的编译即可正常
    ```json
    // vue.config.js
    module.exports = {
		transpileDependencies:['@dcloudio/uni-ui']
    }
    ```
    :::
  - 准备 sass
    vue-cli 项目请先安装 sass 及 sass-loader，如在 HBuliderX 中使用，可跳过此步。
    ```bash
    npm i sass -D
    npm i sass-loader -D
    ```
  - 安装 uni-ui
    ```bash
    npm i @dcloudio/uni-ui --save
    ```
  - 配置easycom
    使用 npm 安装好 uni-ui 之后，需要配置 easycom 规则，让 npm 安装的组件支持 easycom

    打开项目根目录下的 pages.json 并添加 easycom 节点：
    ```json
    // pages.json
    {
        "easycom": {
            "autoscan": true,
            "custom": {
                // uni-ui 规则如下配置
                "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
            }
        },
        // 其他内容
        pages:[
            // ...
        ]
    }
    ```
  - 在 template 中使用组件：
    ```vue
    <template>
        <uni-badge text="1"></uni-badge>
        <uni-badge text="2" type="success" @click="bindClick"></uni-badge>
        <uni-badge text="3" type="primary" :inverted="true"></uni-badge>
    </template>
    <script setup>
        const bindClick = () => {
        console.log(123);
        }
    </script>    
    <style scoped></style>    
    ```
**轻松一刻** :headphones: 
<AudioPlayer
  src="/mp3/8.mp3"
  title="音乐"
  poster="/mp3/8.jpg"
/>

**视频教程** :movie_camera:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。




## vant-ui :gem:
![](/images/uniapp/uni27.png)

uView来源于社区，也回归到社区，正是有一群热爱uni-app生态的同学推着它前行，而我们也一如既往的承诺，uView永久开源，永远免费。

关于uView的取名来由，首字母u来自于uni-app首字母，uni-app是基于Vue.js，Vue和View(延伸为UI、视图之意)同音，同时view组件是uni-app中 最基础，最重要的组件，故取名uView，表达源于uni-app和Vue之意，同时在此也对它们表示感谢。

uView是uni-app生态专用的UI框架，uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码， 可发布到iOS、Android、H5、以及各种小程序(微信/支付宝/百度/头条/QQ/钉钉)等多个平台(引言自uni-app网)。但目前除微信小程序，其它小程序平台的兼容可能存在一些问题，后续会针对这方面持续优化

::: danger 对VUE3的支持
目前uView尚未支持VUE3.0版本(nvue也尚未支持VUE3.0)，
:::

::: tip
官方文档：[https://www.uviewui.com/components/install.html](https://www.uviewui.com/components/install.html)
:::

### 快速使用 :ghost:
  - uView依赖SCSS，您必须要安装此插件，否则无法正常运行。
  ```bash
  npm i sass -D
  pm i sass-loader -D
  ```
  - 下载安装uView
  ```bash
  npm install uview-ui@2.0.31
  ```
  - 引入uView主JS库
  在项目src目录中的main.js中，引入并使用uView的JS库，注意这两行要放在import Vue之后。
  ```js
  // main.js
  import uView from "uview-ui";
  Vue.use(uView);
  ```
  - 引入uView的全局SCSS主题文件
  在项目src目录的uni.scss中引入此文件。
  ```scss
  /* uni.scss */
  @import 'uview-ui/theme.scss';
  ```
  - 引入uView基础样式
  ::: warning
  在App.vue中首行的位置引入，注意给style标签加入lang="scss"属性
  :::
  ```vue
  <style lang="scss">
     /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
     @import "uview-ui/index.scss";
  </style>
  ```
  - 配置easycom组件模式
  此配置需要在项目src目录的pages.json中进行。
  ::: tip
  uni-app为了调试性能的原因，修改easycom规则不会实时生效，配置完后，您需要重启HX或者重新编译项目才能正常使用uView的功能。

  请确保您的pages.json中只有一个easycom字段，否则请自行合并多个引入规则。
  :::
  ```json
  // pages.json
  {
	"easycom": {
		"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
	},
	
	// 此为本身已有的内容
	"pages": [
		// ......
	]
  }
  ```
  - Cli模式额外配置
  如果您是vue-cli模式的项目，还需要在项目根目录的vue.config.js文件中进行如下配置：
  ```js
  // vue.config.js，如没有此文件则手动创建
  module.exports = {
      transpileDependencies: ['uview-ui']
  }
  ```

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
