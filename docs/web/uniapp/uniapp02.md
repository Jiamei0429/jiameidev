---
category: [UNIAPP,WEB前端]
tag: uniapp
---


# 12.2 全局配置 :tada:
## tarBar :gem:
![](/images/uniapp/uni11.png)

pages.json 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等。

它类似微信小程序中app.json的页面管理部分

如果应用是一个多 tab 应用，可以通过 tabBar 配置项指定一级导航栏，以及 tab 切换时显示的对应页

::: tip
当设置 position 为 top 时，将不会显示 icon

tabBar 中的 list 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序

tabbar 切换第一次加载时可能渲染不及时，可以在每个tabbar页面的onLoad生命周期里先弹出一个等待雪花

tabbar 的页面展现过一次后就保留在内存中，再次切换 tabbar 页面，只会触发每个页面的onShow，不会再触发onLoad

顶部的 tabbar 目前仅微信小程序上支持
:::

```json
"tabBar": {
  "color":"#8a8a8a",          // tab 上的文字默认颜色
  "selectedColor":"#ff0000", // tab 上的文字选中时的颜色
  "backgroundColor":"#ffffff",// tab 的背景色
  "borderStyle":"black",   // tabbar 上边框的颜色，可选值 black/white，也支持其他颜色值
  "position":"bottom",    // 可选值 bottom、top
  "fontSize":"10px",     // 文字默认大小
  "iconWidth":"24px",     // 图标默认宽度（高度等比例缩放）
  "spacing":"3px",            // 图标和文字的间距
  "height":"50px",            // tabBar 默认高度
  "list":[
     {
      "pagePath":"pages/index/index",
      "text":"首页",
      "iconPath":"static/home.png",
      "selectedIconPath": "static/home_select.png"
     },
     {
      "pagePath":"pages/cart/cart",
      "text":"购物车",
      "iconPath":"static/other.png",
      "selectedIconPath": "static/other_select.png"
     },
     {
      "pagePath":"pages/user/user",
      "text":"我的",
      "iconPath":"static/authorization.png",
      "selectedIconPath": "static/authorization_select.png"
     }
   ]
}
```


#### 单页面自定义tarBar
使用官方定义的tarBar虽然操作简单，但是结构单一，无法满足复杂的页面结构布局，因此可以自定义tarBar布局和样式，只需要简单修改页面文件夹下的json文件即可
```json
"tarBar": {
    "custom": true,
}
```


::: tip
单页面的tarBar优先级要==大于==全局的tarBar

更多tarBar配置请参考:[https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar](https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar)
:::

**轻松一刻** :headphones:
<AudioPlayer
  src="/mp3/7.mp3"
  title="音乐"
  poster="/mp3/7.jpg"
/>

**视频教程** :movie_camera:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。



## 窗口表现 :gem:
![](/images/uniapp/uni12.png)

pages.json 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等

```json
"globalStyle": {
  "navigationBarTextStyle": "white", // 导航栏标题颜色及状态栏前景颜色，仅支持 black/white
  "navigationBarTitleText": "百战", // 导航栏标题文字内容
  "navigationBarBackgroundColor": "#ff0000", // 导航栏背景颜色（同状态栏背景色），如"#000000"
  "backgroundColor": "#ff0000", // 窗口的背景色
  "pageOrientation": "auto", //横屏配置，全局屏幕旋转设置(仅 APP/微信/QQ小程序)，支持 auto / portrait / landscape
  "rpxCalcMaxDeviceWidth": 960, // rpx 计算所支持的最大设备宽度，单位 px
  "rpxCalcIncludeWidth": 750 ,// rpx 计算特殊处理的值，始终按实际的设备宽度计算，单位 rpx
  "enablePullDownRefresh":true, // 开启下拉刷新
  "backgroundTextStyle":"dark" ,// 下拉 loading 的样式，仅支持 dark / light
  "onReachBottomDistance":50 //页面上拉触底事件触发时距页面底部距离，单位只支持px
}
```
#### 单页面的窗口表现
```json
"style": {
  "navigationBarTextStyle": "white", 
  "navigationBarTitleText": "百战", 
  "navigationBarBackgroundColor": "#ff0000", 
  "backgroundColor": "#ff0000", 
  "pageOrientation": "auto", 
  "rpxCalcMaxDeviceWidth": 960, 
  "rpxCalcIncludeWidth": 750 ,
  "enablePullDownRefresh":true, 
  "backgroundTextStyle":"dark" ,
  "onReachBottomDistance":50
}
```

#### 单页面自定义窗口表现
使用官方定义的窗口表现虽然操作简单，但是结构单一，无法满足复杂的页面结构布局，因此可以自定义头部窗口的布局和样式，只需要简单修改页面文件夹下的json文件即可
```json
"navigationStyle": "custom",
```

::: tip
单页面的窗口表现优先级要==大于==全局的窗口表现

更多窗口表现配置请参考:[https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle](https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle)
:::


**轻松一刻** :headphones:
<AudioPlayer
  src="/mp3/2.mp3"
  title="音乐"
  poster="/mp3/2.jpg"
/>

**视频教程** :movie_camera:

<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。