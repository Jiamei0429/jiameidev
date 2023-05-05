---
category: [UNIAPP,WEB前端]
tag: uniapp
---


# 12.7 Uniapp补充知识 :tada:

##  条件编译 :gem:
![](/images/uniapp/uni35.png)

uni-app 已将常用的组件、JS API 封装到框架中，开发者按照 uni-app 规范开发即可保证多平台兼容，大部分业务均可直接满足。

但每个平台有自己的一些特性，因此会存在一些无法跨平台的情况。

  - 大量写 if else，会造成代码执行性能低下和管理混乱。

  - 编译到不同的工程后二次修改，会让后续升级变的很麻烦。

在 C 语言中，通过 `#ifdef`、`#ifndef` 的方式，为 windows、mac 等不同 os 编译不同的代码。 uni-app 参考这个思路，为 uni-app 提供了条件编译手段，在一个工程里优雅的完成了平台个性化实现。

条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。
::: tip 写法
以 `#ifdef` 或 `#ifndef` 加 `%PLATFORM%` 开头，以 `#endif` 结尾。
  - `#ifdef`：if defined 仅在某平台存在
  - `#ifndef`：if not defined 除了某平台均存在
  - `%PLATFORM%`：平台名称
:::




::: info

| 条件编译写法                                             | 说明                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| #ifdef **APP-PLUS** 需条件编译的代码 #endif              | 仅出现在 App 平台下的代码                                    |
| #ifndef **H5** 需条件编译的代码 #endif                   | 除了 H5 平台，其它平台均存在的代码                           |
| #ifdef **H5** \|\| **MP-WEIXIN** 需条件编译的代码 #endif | 在 H5 平台或微信小程序平台存在的代码（这里只有\|\|，不可能出现&&，因为没有交集） |

:::

::: info  %PLATFORM% 可取值如下：

| 值                      | 生效条件                                                     |
| :---------------------- | :----------------------------------------------------------- |
| VUE3                    | HBuilderX 3.2.0+ [详情](https://ask.dcloud.net.cn/article/37834) |
| APP-PLUS                | App                                                          |
| APP-PLUS-NVUE或APP-NVUE | App nvue 页面                                                |
| APP-ANDROID             | App Android 平台 仅限 uts文件                                |
| APP-IOS                 | App iOS 平台 仅限 uts文件                                    |
| H5                      | H5                                                           |
| MP-WEIXIN               | 微信小程序                                                   |
| MP-ALIPAY               | 支付宝小程序                                                 |
| MP-BAIDU                | 百度小程序                                                   |
| MP-TOUTIAO              | 字节跳动小程序                                               |
| MP-LARK                 | 飞书小程序                                                   |
| MP-QQ                   | QQ小程序                                                     |
| MP-KUAISHOU             | 快手小程序                                                   |
| MP-JD                   | 京东小程序                                                   |
| MP-360                  | 360小程序                                                    |
| MP                      | 微信小程序/支付宝小程序/百度小程序/字节跳动小程序/飞书小程序/QQ小程序/360小程序 |
| QUICKAPP-WEBVIEW        | 快应用通用(包含联盟、华为)                                   |
| QUICKAPP-WEBVIEW-UNION  | 快应用联盟                                                   |
| QUICKAPP-WEBVIEW-HUAWEI | 快应用华为                                                   |

:::

```vue
<template>
    <view>
        <!-- #ifdef H5 -->
        <button class="cls1" @click="change1">仅仅H5显示</button>
        <!-- #endif -->

        <!-- #ifdef MP-WEIXIN -->
        <button class="cls2"  @click="change2">仅仅wx小程序显示</button>
        <!-- #endif -->
    </view>
</template>

<script setup>
// #ifdef H5
const change1 = () => {
    console.log("仅仅H5显示")
}
// #endif

// #ifdef MP-WEIXIN
const change2 = (仅仅wx小程序显示) => {
    console.log("仅仅H5显示")
}
// #endif
</script>    

<style scoped>
/*  #ifdef H5  */
.cls1{
    color:red;
}
/*  #endif  */

/*  #ifdef MP-WEIXIN  */
.cls1{
    color:yellow;
}
/*  #endif  */
</style>
```

::: tip
条件编译更多信息请参考：[https://uniapp.dcloud.net.cn/tutorial/platform.html](https://uniapp.dcloud.net.cn/tutorial/platform.html)
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
