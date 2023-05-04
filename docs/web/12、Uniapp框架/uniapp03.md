---
category: [UNIAPP,WEB前端]
tag: uniapp
---

# 12.3 组件 :tada:
组件是视图层的基本组成单元
## 基础组件 :gem:
![](/images/uniapp/uni13.png)

### view :ghost:
视图容器

它类似于传统html中的div，用于包裹各种元素内容
::: code-tabs#shell
@tab view
```vue
<template>
    <view class="container">
        <view class="box1">1</view>
        <view class="box2">2</view>
        <view class="box3">3</view>
    </view>
</template>
<script setup></script>    
<style scoped></style>    
```
:::

### text :ghost:

文本组件

用于包裹文本内容

::: code-tabs#shell
@tab text
```vue
<template>
    <view class="box1">
        <text>盒子1</text>
    </view>
</template>
<script setup></script>    
<style scoped></style>    
```
:::

::: tip
`<text>` 组件内只支持嵌套 `<text>`，不支持其它组件或自定义组件，否则会引发在不同平台的渲染差异

如果使用 `<span>` 组件编译时会被转换为 `<text>`

除了文本节点以外的其他节点都无法长按选中
:::


### icon :ghost:
图标

::: code-tabs#shell
@tab icon
```vue
<template>
    <view>
        <icon color="green" type="success" size="26"/>
    </view>
</template>
<script setup></script>    
<style scoped></style>    
```
:::

::: info 属性说明

| 属性名 | 类型   | 默认值 | 说明                     |
| ------ | ------ | ------ | ------------------------ |
| type   | String |        | icon的类型               |
| size   | Number | 23     | icon的大小，单位px       |
| color  | Color  |        | icon的颜色，同css的color |

- - -

type 有效值:

success, success_no_circle, info, warn, waiting, cancel, download, search, clear
:::

::: tip
由于 icon 组件各端表现存在差异，可以通过使用 字体图标 的方式来弥补各端差异
:::

**轻松一刻**
<AudioPlayer
  src="/mp3/3.mp3"
  title="音乐"
  poster="/mp3/3.jpg"
/>

**视频教程** :film_projector:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。

## 滚动视图 :gem:
![](/images/uniapp/uni14.png)

可滚动视图区域。用于区域滚动

::: code-tabs#shell
@tab 垂直滚动
```vue
<template>
    <scroll-view class="scroll-Y" scroll-y="true">
        <view style="background-color: red;" class="scroll-view-item">A</view>
        <view style="background-color: green;" class="scroll-view-item">B</view>
        <view style="background-color: blue;" class="scroll-view-item">C</view>
    </scroll-view>
</template>
<script setup></script>    
<style scoped>
.scroll-Y {
    height: 300rpx;
}
.scroll-view_H {
    white-space: nowrap;
    width: 100%;
}
.scroll-view-item {
    height: 300rpx;
    line-height: 300rpx;
    text-align: center;
    font-size: 36rpx;
}
</style>    
```
@tab 水平滚动
```vue
<template>
    <scroll-view class="scroll-H" scroll-x="true">
        <view style="background-color: red;" class="scroll-view-item-H">A</view>
        <view style="background-color: green;" class="scroll-view-item-H">B</view>
        <view style="background-color: blue;" class="scroll-view-item-H">C</view>
    </scroll-view>
</template>
<script setup></script>    
<style scoped>
.scroll-H{
    white-space: nowrap;
    width: 100%;
}
.scroll-view-item-H{
    display: inline-block;
    width: 100%;
    height: 300rpx;
    line-height: 300rpx;
    text-align: center;
    font-size: 36rpx;
}
</style>    
```
:::

::: info 属性说明
| 属性名         | 类型          | 默认值 | 说明                                                         |
| -------------- | ------------- | ------ | ------------------------------------------------------------ |
| scroll-x       | Boolean       | false  | 允许横向滚动                                                 |
| scroll-y       | Boolean       | false  | 允许纵向滚动                                                 |
| scroll-top     | Number/String |        | 设置竖向滚动条位置                                           |
| scroll-left    | Number/String |        | 设置横向滚动条位置                                           |
| @scrolltoupper | EventHandle   |        | 滚动到顶部/左边，会触发 scrolltoupper 事件                   |
| @scrolltolower | EventHandle   |        | 滚动到底部/右边，会触发 scrolltolower 事件                   |
| @scroll        | EventHandle   |        | 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} |
:::



**轻松一刻**
<AudioPlayer
  src="/mp3/4.mp3"
  title="音乐"
  poster="/mp3/4.jpg"
/>

**视频教程** :film_projector:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。





## 图片 :gem:
![](/images/uniapp/uni15.png)

图片

::: code-tabs#shell
@tab image
```vue
<template>
    <view>
        <image mode="widthFix" src="/images/logo.png"></image>
    </view>
</template>
<script setup></script>    
<style scoped></style>    
```
:::

::: info
`<image> `组件默认宽度 320px、高度 240px

src 仅支持相对路径、绝对路径，支持 base64 码
:::

::: info 属性说明
| 属性名 | 类型   | 默认值        | 说明                 |
| ------ | ------ | ------------- | -------------------- |
| src    | String |               | 图片资源地址         |
| mode   | String | 'scaleToFill' | 图片裁剪、缩放的模式 |
:::

::: info mode有效值
| 模式 | 值           | 说明                                                         |
| ---- | ------------ | ------------------------------------------------------------ |
| 缩放 | scaleToFill  | 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素  |
| 缩放 | aspectFit    | 保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。 |
| 缩放 | aspectFill   | 保持纵横比缩放图片，只保证图片的短边能完全显示出来           |
| 缩放 | widthFix     | 宽度不变，高度自动变化，保持原图宽高比不变                   |
| 缩放 | heightFix    | 高度不变，宽度自动变化，保持原图宽高比不变                   |
| 裁剪 | top          | 不缩放图片，只显示图片的顶部区域                             |
| 裁剪 | bottom       | 不缩放图片，只显示图片的底部区域                             |
| 裁剪 | center       | 不缩放图片，只显示图片的中间区域                             |
| 裁剪 | left         | 不缩放图片，只显示图片的左边区域                             |
| 裁剪 | right        | 不缩放图片，只显示图片的右边区域                             |
| 裁剪 | top left     | 不缩放图片，只显示图片的左上边区域                           |
| 裁剪 | top right    | 不缩放图片，只显示图片的右上边区域                           |
| 裁剪 | bottom left  | 不缩放图片，只显示图片的左下边区域                           |
| 裁剪 | bottom right | 不缩放图片，只显示图片的右下边区域                           |
:::

**轻松一刻**
<AudioPlayer
  src="/mp3/5.mp3"
  title="音乐"
  poster="/mp3/5.jpg"
/>

**视频教程** :film_projector:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。

## Swiper :gem:
![](/images/uniapp/uni16.png)

滑块视图容器

一般用于左右滑动或上下滑动，比如banner轮播图

::: code-tabs#shell
@tab swiper
```vue
<template>
    <swiper class="swiper" circular indicator-dots="true" autoplay interval="true" duration="500">
        <swiper-item>
            <image mode="widthFix" src="../../static/1.webp"></image>
        </swiper-item>
        <swiper-item>
            <image mode="widthFix" src="../../static/2.webp"></image>
        </swiper-item>
        <swiper-item>
            <image mode="widthFix" src="../../static/3.webp"></image>
        </swiper-item>
    </swiper>
</template>
<script setup></script>    
<style scoped></style>    
```
:::

::: info 属性说明
| 属性名                 | 类型        | 默认值            | 说明                                                         |
| ---------------------- | ----------- | ----------------- | ------------------------------------------------------------ |
| indicator-dots         | Boolean     | false             | 是否显示面板指示点                                           |
| indicator-color        | Color       | rgba(0, 0, 0, .3) | 指示点颜色                                                   |
| indicator-active-color | Color       | #000000           | 当前选中的指示点颜色                                         |
| autoplay               | Boolean     | false             | 是否自动切换                                                 |
| interval               | Number      | 5000              | 自动切换时间间隔                                             |
| duration               | Number      | 500               | 滑动动画时长                                                 |
| circular               | Boolean     | false             | 是否采用衔接滑动，即播放到末尾后重新回到开头                 |
| vertical               | Boolean     | false             | 滑动方向是否为纵向                                           |
| @change                | EventHandle |                   | current 改变时会触发 change 事件，event.detail = {current: current, source: source} |
:::

**轻松一刻**
<AudioPlayer
  src="/mp3/6.mp3"
  title="音乐"
  poster="/mp3/6.jpg"
/>

**视频教程** :film_projector:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。

## 进度条 :gem:
![](/images/uniapp/uni17.png)

进度条

::: code-tabs#shell
@tab progress
```vue 
<template>
    <progress percent="30" show-info stroke-width="3" />
</template>
<script setup></script>    
<style scoped></style>    
```
:::

::: info 属性说明
| 属性名          | 类型          | 默认值  | 说明                       |
| --------------- | ------------- | ------- | -------------------------- |
| percent         | Number        | 无      | 百分比0~100                |
| show-info       | Boolean       | false   | 在进度条右侧显示百分比     |
| border-radius   | Number/String | 0       | 圆角大小(小程序)           |
| font-size       | Number/String | 16      | 右侧百分比字体大小(小程序) |
| stroke-width    | Number        | 6       | 进度条线的宽度，单位px     |
| activeColor     | Color         | #09BB07 | 已选择的进度条的颜色       |
| backgroundColor | Color         | #EBEBEB | 未选择的进度条的颜色       |
| active          | Boolean       | false   | 进度条从左往右的动画       |
:::

**轻松一刻**
<AudioPlayer
  src="/mp3/7.mp3"
  title="音乐"
  poster="/mp3/7.jpg"
/>

**视频教程** :film_projector:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。



## 页面跳转 :gem:
![](/images/uniapp/uni18.png)

页面跳转

该组件类似HTML中的`<a>`组件，但只能跳转本地页面。目标页面必须在pages.json中注册

::: code-tabs#shell
@tab navigator
```vue 
<template>
    <navigator url="../list/list" hover-class="navigator-hover">
        <button type="default">跳转到新页面</button>
    </navigator>
</template>
<script setup></script>    
<style scoped></style>    
```
:::

::: info 属性说明

| 属性名           | 类型   | 默认值   | 说明                                     |
| ---------------- | ------ | -------- | ---------------------------------------- |
| url              | String |          | 应用内的跳转链接，值为相对路径或绝对路径 |
| open-type        | String | navigate | 跳转方式                                 |
| hover-start-time | Number | 50       | 按住后多久出现点击态，单位毫秒           |
| hover-stay-time  | Number | 600      | 手指松开后点击态保留时间，单位毫秒       |

:::

::: info open-type 有效值

| 值           | 说明                         |
| ------------ | ---------------------------- |
| navigate     | 对应 uni.navigateTo 的功能   |
| redirect     | 对应 uni.redirectTo 的功能   |
| switchTab    | 对应 uni.switchTab 的功能    |
| reLaunch     | 对应 uni.reLaunch 的功能     |
| navigateBack | 对应 uni.navigateBack 的功能 |

:::


### 携带参数 :ghost:
::: code-tabs#shell
@tab 传递参数
```vue 
<template>
    <navigator url="../list/list?name=iwen" hover-class="navigator-hover">
        <button type="default">跳转到新页面</button>
    </navigator>
</template>
<script setup></script>    
<style scoped></style>    
```

@tab 接收参数
```vue 
<template>
    <button type="default">list页面</button>
<template>
<script setup>
import { onLoad } from '@dcloudio/uni-app'
onLoad((options)=>{
    console.log(options.name)
})
</script>    
<style scoped></style>    
```
:::

**轻松一刻**
<AudioPlayer
  src="/mp3/8.mp3"
  title="音乐"
  poster="/mp3/8.jpg"
/>

**视频教程** :film_projector:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。


## 表单_按钮 :gem:
![](/images/uniapp/uni19.png)

表单是页面最常用的组件之一，包含按钮、输入框等

### button :ghost:

按钮

::: code-tabs#shell
@tab button
```vue 
<template>
    <button type="primary">页面主操作 Normal</button>
    <button type="primary" loading="true">页面主操作 Loading</button>
    <button type="primary" disabled="true">页面主操作 Disabled</button>
    <button type="default">页面次要操作 Normal</button>
    <button type="default" disabled="true">页面次要操作 Disabled</button>
    <button type="warn">警告类操作 Normal</button>
    <button type="warn" disabled="true">警告类操作 Disabled</button>
    <view class="button-sp-area">
        <button type="primary" plain="true">按钮</button>
        <button type="primary" disabled="true" plain="true">不可点击的按钮</button>
        <button type="default" plain="true">按钮</button>
        <button type="default" disabled="true" plain="true">按钮</button>
        <button class="mini-btn" type="primary" size="mini">按钮</button>
        <button class="mini-btn" type="default" size="mini">按钮</button>
        <button class="mini-btn" type="warn" size="mini">按钮</button>
    </view>
</template>
<script setup></script>    
<style scoped></style>    
```
:::

::: info 属性说明

| 属性名   | 类型    | 默认值  | 说明                      |
| -------- | ------- | ------- | ------------------------- |
| size     | String  | default | 按钮的大小                |
| type     | String  | default | 按钮的样式类型            |
| plain    | Boolean | false   | 按钮是否镂空，背景色透明  |
| disabled | Boolean | false   | 是否禁用                  |
| loading  | Boolean | false   | 名称前是否带 loading 图标 |

:::

### checkbox  :ghost:

多选项目

多项选择器，内部由多个 checkbox 组成

::: code-tabs#shell
@tab checkbox
```vue 
<template>
    <checkbox-group>
        <label>
            <checkbox value="cb" checked="true" />选中
        </label>
        <label>
            <checkbox value="cb" />未选中
        </label>
    </checkbox-group>

    <checkbox-group @change="checkboxChange">
        <label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
            <view>
                <checkbox :value="item.value" :checked="item.checked" />
            </view>
            <view>{{item.name}}</view>
        </label>
    </checkbox-group>
</template>
<script setup>

import { ref } from "vue"
const items =ref([
    {
        value: 'USA',
        name: '美国'
    },
    {
        value: 'CHN',
        name: '中国',
        checked: 'true'
    },
    {
        value: 'BRA',
        name: '巴西'
    },
    {
        value: 'JPN',
        name: '日本'
    },
    {
        value: 'ENG',
        name: '英国'
    },
    {
        value: 'FRA',
        name: '法国'
    }
])
const checkboxChange = (e) => {
    console.log(e.detail.value)
}
</script>    
<style scoped></style>    
```
:::

::: info 属性说明
| 属性名   | 类型        | 默认值 | 说明                                                         |
| -------- | ----------- | ------ | ------------------------------------------------------------ |
| value    | String      |        | `<checkbox>` 标识，选中时触发 `<checkbox-group>` 的 change 事件，并携带 `<checkbox>` 的 value。 |
| disabled | Boolean     | false  | 是否禁用                                                     |
| checked  | Boolean     | false  | 当前是否选中，可用来设置默认选中                             |
| color    | Color       |        | checkbox的颜色，同css的color                                 |
| @change  | EventHandle |        | `<checkbox-group>`中选中项发生改变是触发 change 事件，detail = {value:[选中的checkbox的value的数组]} |
:::










### input   :ghost:

输入框

::: code-tabs#shell
@tab input
```vue 
<template>
    <view>
        <view class="title">可自动聚焦的input</view>
        <input class="uni-input" focus placeholder="自动获得焦点" />
    </view>
    <view>
        <view class="title">键盘右下角按钮显示为搜索</view>
        <input class="uni-input" confirm-type="search" placeholder="键盘右下角按钮显示为搜索" />
    </view>
    <view>
        <view class="title">控制最大输入长度的input</view>
        <input class="uni-input" maxlength="10" placeholder="最大输入长度为10" />
    </view>
    <view>
        <view class="title">实时获取输入值：{{ inputValue }}</view>
        <input class="uni-input" @input="onKeyInput" placeholder="输入同步到view中" />
    </view>
    <view>
        <view class="title">控制输入的input</view>
        <input class="uni-input" @input="replaceInput" v-model="changeValue" placeholder="连续的两个1会变成2" />
    </view>
    <view>
        <view class="title">数字输入的input</view>
        <input class="uni-input" type="number" placeholder="这是一个数字输入框" />
    </view>
    <view>
        <view class="title">密码输入的input</view>
        <input class="uni-input" password type="text" placeholder="这是一个密码输入框" />
    </view>
    <view>
        <view class="title">带小数点的input</view>
        <input class="uni-input" type="digit" placeholder="带小数点的数字键盘" />
    </view>
    <view>
        <view class="title">身份证输入的input</view>
        <input class="uni-input" type="idcard" placeholder="身份证输入键盘" />
    </view>
    <view>
        <view class="title">控制占位符颜色的input</view>
        <input class="uni-input" placeholder-style="color:#F76260" placeholder="占位符字体是红色的" />
    </view>
</template>
<script setup>
import { ref } from "vue"
const placeholder =ref("开始输入...")
const inputValue =ref("")
const changeValue =ref("")
const onKeyInput = (e) => {
    inputValue.value = e.target.value
}
const replaceInput = (e) => {
    var value = e.target.value;
    if (value === '11') {
        changeValue.value = '2';
    }
}
</script>    
<style scoped></style>    
```
:::

::: info 属性说明

| 属性名            | 类型        | 默认值 | 说明                                                |
| ----------------- | ----------- | ------ | --------------------------------------------------- |
| value             | String      |        | 输入框的初始内容                                    |
| type              | String      | text   | input 的类型                                        |
| placeholder-style | String      |        | 指定 placeholder 的样式                             |
| disabled          | Boolean     | false  | 是否禁用                                            |
| placeholder       | String      |        | 输入框为空时占位符                                  |
| disabled          | Boolean     | false  | 是否禁用                                            |
| focus             | Boolean     | false  | 获取焦点                                            |
| @input            | EventHandle |        | 当键盘输入时，触发input事件，event.detail = {value} |


:::

::: info type效值

| 值            | 说明               | **平台差异说明**                                             |
| ------------- | ------------------ | ------------------------------------------------------------ |
| text          | 文本输入键盘       |                                                              |
| number        | 数字输入键盘       | 均支持，App平台、H5平台 3.1.22 以下版本 vue 页面在 iOS 平台显示的键盘包含负数和小数。 |
| idcard        | 身份证输入键盘     | 微信、支付宝、百度、QQ小程序、快手小程序、京东小程序         |
| digit         | 带小数点的数字键盘 | 均支持，App平台、H5平台 vue 页面在 iOS 平台显示的键盘包含负数。 |
| tel           | 电话输入键盘       | 仅App的nvue页面支持                                          |
| safe-password | 密码安全输入键盘   | 微信小程序                                                   |
| nickname      | 昵称输入键盘       | 微信小程序                                                   |


:::

### radio :ghost:

::: code-tabs#shell
@tab radio
```vue 
<template>
  <radio-group>
    <label class="radio">
      <radio value="r1" checked="true" />选中
    </label>
    <label class="radio">
      <radio value="r2" />未选中
    </label>
  </radio-group>
  <radio-group @change="radioChange">
    <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
      <view>
        <radio :value="item.value" :checked="index === current" />
      </view>
      <view>{{ item.name }}</view>
    </label>
  </radio-group>
</template>
<script setup>
import { ref } from "vue"
const items = ref([
  {
    value: 'USA',
    name: '美国'
  },
  {
    value: 'CHN',
    name: '中国',
    checked: 'true'
  },
  {
    value: 'BRA',
    name: '巴西'
  },
  {
    value: 'JPN',
    name: '日本'
  },
  {
    value: 'ENG',
    name: '英国'
  },
  {
    value: 'FRA',
    name: '法国'
  }
])
const radioChange = (e) => {
  console.log(e.detail)
}
</script>    
<style scoped></style>        
```
:::


::: info 属性说明
| 属性名   | 类型        | 默认值 | 说明                                                         |
| -------- | ----------- | ------ | ------------------------------------------------------------ |
| value    | String      |        | `<radio>` 标识。当该 `<radio>` 选中时，`<radio-group>` 的 change 事件会携带 `<radio>` 的 value |
| checked  | Boolean     | false  | 当前是否选中                                                 |
| disabled | Boolean     | false  | 是否禁用                                                     |
| color    | Color       |        | radio的颜色，同css的color                                    |
| @change  | EventHandle |        | `<radio-group>` 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value} |
:::






### picker  :ghost:
从底部弹起的滚动选择器。支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器
::: code-tabs#shell
@tab 普通选择器
```vue 
<template>
  <view>地区选择器</view>
  <view>
    <view>
      当前选择
    </view>
    <view>
      <picker @change="bindPickerChange" :value="index" :range="array">
        <view>{{ array[index] }}</view>
      </picker>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const array = ref(['中国', '美国', '巴西', '日本'])
const index = ref(0)
const bindPickerChange = (e) => {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  index.value = e.detail.value
}
</script>    

<style scoped></style>     
```
@tab 时间选择器
```vue 
<template>
  <view>时间选择器</view>
  <view>
    <view>
      <view>
        当前选择
      </view>
      <view>
        <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
          <view>{{ time }}</view>
        </picker>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const time = ref("12:01")
const bindTimeChange = (e) => {
  time.value = e.detail.value
}
</script>    

<style scoped></style>        
```
@tab 日期选择器
```vue 
<template>
  <view>日期选择器</view>
  <view>
    <view>
      当前选择
    </view>
    <view>
      <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
        <view>{{ date }}</view>
      </picker>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'

const getDate = (type) => {
  const date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (type === 'start') {
    year = year - 60
  } else if (type === 'end') {
    year = year + 2;
  }
  month = month > 9 ? month : '0' + month
  day = day > 9 ? day : '0' + day
  return `${year}-${month}-${day}`;
}

const currentDate = getDate({
  format: true
})
const date = ref(currentDate)


const startDate = computed(() => {
  return getDate('start');
})

const endDate = computed(() => {
  return getDate('end');
})

const bindDateChange = (e) => {
  date.value = e.detail.value
}
</script>    

<style scoped></style>         
```
:::

::: info 属性说明
| 属性名   | 类型          | 默认值 | 说明                                                        |
| -------- | ------------- | ------ | ----------------------------------------------------------- |
| range    | Array / Array | []     | mode为 selector 时，range 有效                              |
| value    | Number        | 0      | value 的值表示选择了 range 中的第几个（下标从 0 开始）      |
| disabled | Boolean       | false  | 是否禁用                                                    |
| @change  | EventHandle   |        | value 改变时触发 change 事件，event.detail = {value: value} |
:::









### slider :ghost:
slider滑动选择器

::: code-tabs#shell
@tab slider
```vue 
<template>
    <slider 
        activeColor="#f00" 
        value="30" 
        min="0" 
        max="50" 
        backgroundColor="#999"
        @change="sliderChange" 
        block-size="20"
        block-color="#f00"
        show-value
        @changing="sliderChangeing"
        step="5" />
</template>
<script setup>
const sliderChange=(e)=>{
    console.log('value 发生变化：' + e.detail.value)
}
const sliderChangeing=(e)=>{
    console.log('value 发生变化：' + e.detail.value)
}
</script>    
<style scoped></style>    
```
:::

::: info 属性说明
| 属性名          | 类型        | 默认值       | 说明                                                    |
| --------------- | ----------- | ------------ | ------------------------------------------------------- |
| min             | Number      | 0            | 最小值                                                  |
| max             | Number      | 100          | 最大值                                                  |
| step            | Number      | 1            | 步长，取值必须大于 0，并且可被(max - min)整除           |
| disabled        | Boolean     | false        | 是否禁用                                                |
| value           | Number      | 0            | 当前取值                                                |
| activeColor     | Color       | 各个平台不同 | 滑块左侧已选择部分的线条颜色                            |
| backgroundColor | Color       | #e9e9e9      | 滑块右侧背景条的颜色                                    |
| block-size      | Number      | 28           | 滑块的大小，取值范围为 12 - 28                          |
| block-color     | Color       | #ffffff      | 滑块的颜色                                              |
| show-value      | Boolean     | false        | 是否显示当前 value                                      |
| @change         | EventHandle |              | 完成一次拖动后触发的事件，event.detail = {value: value} |
| @changing       | EventHandle |              | 拖动过程中触发的事件，event.detail = {value: value}     |
:::



### switch :ghost:
switch开关选择器

::: code-tabs#shell
@tab switch
```vue 
<template>
    <switch 
        checked
        type="switch"
        color="#f00"
        @change="changeHandler"
        >
    </switch>
</template>
<script setup>
const changeHandler = (e) => {
    console.log(e.detail.value)
}
</script>    
<style scoped></style>    
```
:::

::: info 属性说明

| 属性名   | 类型        | 默认值 | 说明                                                         |
| -------- | ----------- | ------ | ------------------------------------------------------------ |
| checked  | Boolean     | false  | 是否选中                                                     |
| disabled | Boolean     | false  | 是否禁用                                                     |
| type     | String      | switch | 样式，有效值：switch, checkbox                               |
| color    | Color       |        | switch 的颜色，同 css 的 color                               |
| @change  | EventHandle |        | checked 改变时触发 change 事件，event.detail={ value:checked} |


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



## 音频 :gem:
![](/images/uniapp/uni20.png)

audio音频

::: danger 
微信小程序平台自基础库 1.6.0 版本开始，不再维护 audio 组件，推荐使用API方式而不是组件方式来播放音频。API见 [uni.createInnerAudioContext](https://uniapp.dcloud.net.cn/api/media/audio-context.html#createinneraudiocontext) 替代。
:::


**轻松一刻**
<AudioPlayer
  src="/mp3/2.mp3"
  title="音乐"
  poster="/mp3/2.jpg"
/>

**视频教程** :film_projector:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。

## 视频 :gem:
![](/images/uniapp/uni21.png)

video视频播放组件



::: code-tabs#shell
@tab video
```vue 
<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <view>
        <video id="myVideo"
          src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
          @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
      </view>
    </view>
  </view>
</template>
<script setup>
import { ref } from "vue"
const danmuList = ref([
  {
    text: '第 1s 出现的弹幕',
    color: '#ff0000',
    time: 1
  },
  {
    text: '第 3s 出现的弹幕',
    color: '#ff00ff',
    time: 3
  }
])
const videoErrorCallback = (e) => {
  uni.showModal({
    content: e.target.errMsg,
    showCancel: false
  })
}
</script>    
<style scoped></style>    
```
:::



::: info 属性说明

| 属性名               | 类型         | 默认值 | 说明                                                         | **平台差异说明**                                         |
| -------------------- | ------------ | ------ | ------------------------------------------------------------ | -------------------------------------------------------- |
| src                  | String       |        | 要播放视频的资源地址                                         |                                                          |
| autoplay             | Boolean      | false  | 是否自动播放                                                 |                                                          |
| loop                 | Boolean      | false  | 是否循环播放                                                 |                                                          |
| muted                | Boolean      | false  | 是否静音播放                                                 | 字节跳动小程序与飞书小程序不支持                         |
| initial-time         | Number       |        | 指定视频初始播放位置，单位为秒（s）。                        | 字节跳动小程序与飞书小程序不支持                         |
| duration             | Number       |        | 指定视频时长，单位为秒（s）。                                | 字节跳动小程序、飞书小程序、快手小程序、京东小程序不支持 |
| controls             | Boolean      | true   | 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）        | 快手小程序不支持                                         |
| danmu-list           | Object Array |        | 弹幕列表                                                     | 字节跳动小程序、飞书小程序、快手小程序、京东小程序不支持 |
| danmu-btn            | Boolean      | false  | 是否显示弹幕按钮，只在初始化时有效，不能动态变更             | 字节跳动小程序、飞书小程序、快手小程序、京东小程序不支持 |
| enable-danmu         | Boolean      | false  | 是否展示弹幕，只在初始化时有效，不能动态变更                 | 字节跳动小程序、飞书小程序、快手小程序、京东小程序不支持 |
| page-gesture         | Boolean      | false  | 在非全屏模式下，是否开启亮度与音量调节手势                   | 微信小程序、H5                                           |
| show-fullscreen-btn  | Boolean      | true   | 是否显示全屏按钮                                             | 京东小程序不支持                                         |
| show-play-btn        | Boolean      | true   | 是否显示视频底部控制栏的播放按钮                             | 京东小程序不支持                                         |
| show-center-play-btn | Boolean      | true   | 是否显示视频中间的播放按钮                                   | 字节跳动小程序、京东小程序不支持                         |
| @play                | EventHandle  |        | 当开始/继续播放时触发play事件                                | 字节跳动小程序与飞书小程序不支持                         |
| @pause               | EventHandle  |        | 当暂停播放时触发 pause 事件                                  | 字节跳动小程序与飞书小程序不支持                         |
| @ended               | EventHandle  |        | 当播放到末尾时触发 ended 事件                                | 字节跳动小程序与飞书小程序不支持                         |
| @timeupdate          | EventHandle  |        | 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次 | 字节跳动小程序与飞书小程序不支持                         |
| @fullscreenchange    | EventHandle  |        | 当视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal | 字节跳动小程序与飞书小程序不支持                         |

:::




**轻松一刻**
<AudioPlayer
  src="/mp3/3.mp3"
  title="音乐"
  poster="/mp3/3.jpg"
/>

**视频教程** :film_projector:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。









## 相机 :gem:
![](/images/uniapp/uni22.png)

camera 页面内嵌的区域相机组件。注意这不是点击后全屏打开的相机

::: warning
目前只支持微信小程序
:::

::: code-tabs#shell
@tab camera
```vue 
<template>
    <view>
        <camera 
            device-position="back" 
            flash="off" 
            @error="error" 
            style="width: 100%; height: 300px;">
        </camera>
        <button type="primary" @click="takePhoto">拍照</button>
        <view>预览</view>
        <image mode="widthFix" :src="src"></image>
    </view>
</template>
<script setup>
import { ref } from "vue"
const src = ref("")
const takePhoto=()=> {
    const ctx = uni.createCameraContext();
    ctx.takePhoto({
        quality: 'high',
        success: (res) => {
            src.value = res.tempImagePath
        },
        error(e) {
            console.log(e.detail);
        }
    })
}
</script>    
<style scoped></style>    
```
:::

::: info 属性说明

| 属性名          | 类型        | 默认值 | 说明                                       |
| --------------- | ----------- | ------ | ------------------------------------------ |
| device-position | String      | back   | 前置或后置摄像头，值为front, back          |
| flash           | String      | auto   | 闪光灯，值为auto, on, off                  |
| mode            | String      | normal | 有效值为 normal, scanCode                  |
| @stop           | EventHandle |        | 摄像头在非正常终止时触发，如退出后台等情况 |
| @error          | EventHandle |        | 用户不允许使用摄像头时触发                 |

:::


**轻松一刻**
<AudioPlayer
  src="/mp3/4.mp3"
  title="音乐"
  poster="/mp3/4.jpg"
/>

**视频教程** :film_projector:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。










## 地图 :gem:
![](/images/uniapp/uni23.png)

map地图组件

地图组件用于展示地图，而定位API只是获取坐标，请勿混淆两者

::: code-tabs#shell
@tab map
```vue 
<template>
    <map 
    style="width: 100%;height: 300px;"
    scale="10"
    :latitude="latitude" 
    :longitude="longitude" 
    @markertap="markerHandler"
    :markers="covers">
    </map>
</template>
<script setup>
import { ref } from "vue"
const latitude = ref(39.909)
const longitude = ref(116.39742)
const covers = ref([{
    id: 0, // 使用 marker点击事件 需要填写id
    latitude: 39.909,
    longitude: 116.39742,
    iconPath: "../../static/location.png"
}])
const markerHandler= (e)=>{
    console.log(e.detail)
}
</script>    
<style scoped></style>    
```
:::

::: info 地图服务商说明

| 地图服务商 | App  | H5      | 微信小程序 |
| ---------- | ---- | ------- | ---------- |
| 高德       | √    | 3.6.0+  |            |
| Goolge     | 3.4+ | 3.2.10+ |            |
| 腾讯       |      | √       | √          |

:::

::: info 属性说明

| 地图服务商 | App  | H5      | 微信小程序 |
| ---------- | ---- | ------- | ---------- |
| 高德       | √    | 3.6.0+  |            |
| Goolge     | 3.4+ | 3.2.10+ |            |
| 腾讯       |      | √       | √          |

:::


::: tip
需要增加根据选择的地图的KEY：https://lbs.qq.com/
:::



**轻松一刻**
<AudioPlayer
  src="/mp3/5.mp3"
  title="音乐"
  poster="/mp3/5.jpg"
/>

**视频教程** :film_projector:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。








## 画布 :gem:
![](/images/uniapp/uni24.png)

canvas画布

::: tip
canvas 标签默认宽度 300px、高度 225px，动态修改 canvas 大小后需要重新绘制
:::

::: code-tabs#shell
@tab canvas
```vue 
<template>
  <canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas"></canvas>
</template>
<script setup>
import { onReady } from '@dcloudio/uni-app'
onReady(() => {
  var context = uni.createCanvasContext('firstCanvas')
  context.setStrokeStyle("#00ff00")
  context.setLineWidth(5)
  context.rect(0, 0, 200, 200)
  context.stroke()
  context.setStrokeStyle("#ff0000")
  context.setLineWidth(2)
  context.moveTo(160, 100)
  context.arc(100, 100, 60, 0, 2 * Math.PI, true)
  context.moveTo(140, 100)
  context.arc(100, 100, 40, 0, Math.PI, false)
  context.moveTo(85, 80)
  context.arc(80, 80, 5, 0, 2 * Math.PI, true)
  context.moveTo(125, 80)
  context.arc(120, 80, 5, 0, 2 * Math.PI, true)
  context.stroke()
  context.draw()
})
</script>    
<style scoped></style>    
```
:::




**轻松一刻**
<AudioPlayer
  src="/mp3/6.mp3"
  title="音乐"
  poster="/mp3/6.jpg"
/>

**视频教程** :film_projector:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。

## web-view :gem:
![](/images/uniapp/uni25.png)

map地图组件

::: code-tabs#shell
@tab map
```vue 
<template>
    <web-view src="https://mi.com"></web-view>
</template>
<script setup>

</script>    
<style scoped></style>    
```
:::

::: warning 属性说明
仅支持小程序并且仅支持加载网络网页，不支持本地html
:::

**轻松一刻**
<AudioPlayer
  src="/mp3/7.mp3"
  title="音乐"
  poster="/mp3/7.jpg"
/>

**视频教程** :film_projector:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。
