---
category: [UNIAPP,WEB前端]
tag: uniapp
---

# 12.6 基础API :tada:
::: tip
本章节只讲解部分常用的API，更多API请参考[https://uniapp.dcloud.net.cn/api/](https://uniapp.dcloud.net.cn/api/)
:::

## 路由（页面跳转） :gem:
![](/images/uniapp/uni29.png)
::: info 路由管理页面之间的跳转
  - uni.navigateTo(OBJECT)
  - uni.redirectTo(OBJECT)
  - uni.reLaunch(OBJECT)
  - uni.switchTab(OBJECT)
::: 

### uni.navigateTo :ghost:
保留当前页面，跳转到应用内的某个页面，使用`uni.navigateBack`可以返回到原页面
```js
uni.navigateTo({
  url:"/pages/list/list"
})
```
### uni.redirectTo :ghost:
关闭当前页面，跳转到应用内的某个页面
```js
uni.redirectTo({
  url:"/pages/list/list"
})
```
### uni.reLaunch :ghost:
关闭所有页面，打开到应用内的某个页面
```js
uni.reLaunch({
  url:"/pages/list/list"
})
```
### uni.switchTab :ghost:
跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
```js
uni.switchTab({
  url:"/pages/list/list"
})
```

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


## 路由传参（页面通讯） :gem:
![](/images/uniapp/uni30.png)

在项目中，页面与页面之间必然会需要传递数据，接下里我们说一说传递数据的方案

### 路由跳转传递参数 :ghost:
```js
//传递
uni.navigateTo({
  url:"/pages/list/list?name=itbaizhan"
})

//接收
onLoad((options)=>{
   console.log(options.name)
})
```
### 组件之间传递参数 :ghost:
  - 父传子
  - 子传父

::: tip
关于组件之间的通讯，请参考[Vue组件通讯]()
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

## 组件通讯 :gem:
![](/images/uniapp/uni31.png)

在uni-app中，组件通讯遵循Vue的规则

跨组件通讯

::: warning
在组件中，不可以使用onLoad()函数，在页面中才可以使用。

这里说的是非子父级关系的组件通讯，而是兄弟组件之间的数据传递
:::

发送数据组件

```js
sendWorldHandler(){
  uni.$emit('msg',{
       msg:'兄弟之间',
   })
}
```
获取数据组件

```js
uni.$on('msg', function(data) {
  console.log(data.msg);
})
```

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

## 数据缓存_同步 :gem:
![](/images/uniapp/uni32.png)

本地存储也是实际项目中必备的接口，一些用户信息、数据信息等需要存储到本地

::: info 同步数据缓存
  - uni.setStorageSync(KEY,DATA)
  - uni.getStorageSync(KEY)
  - uni.getStorageInfoSync()
  - uni.removeStorageSync(KEY)
  - uni.clearStorageSync()
:::

### uni.setStorageSync :ghost:
将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口
```js
try {
    uni.setStorageSync('storage_key', 'hello');
} catch (e) {
    // error
}
```
### uni.getStorageSync :ghost:
从本地缓存中同步获取指定 key 对应的内容
```js
try {
    const value = uni.getStorageSync('storage_key');
    if (value) {
        console.log(value);
    }
} catch (e) {
    // error
}
```
### uni.getStorageInfoSync :ghost:
同步获取当前 storage 的相关信息
```js
try {
    const res = uni.getStorageInfoSync();
    console.log(res.keys);
    console.log(res.currentSize);
    console.log(res.limitSize);
} catch (e) {
    // error
}
```
### uni.removeStorageSync :ghost:
从本地缓存中同步移除指定 key
```js
try {
    uni.removeStorageSync('storage_key');
} catch (e) {
    // error
}
```
### uni.clearStorageSync :ghost:
同步清理本地数据缓存
```js
try {
    uni.clearStorageSync();
} catch (e) {
    // error
}
```


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

## 数据缓存_异步 :gem:
![](/images/uniapp/uni33.png)

本地存储也是实际项目中必备的接口，一些用户信息、数据信息等需要存储到本地

::: info 异步数据缓存
  - uni.setStorage(OBJECT)
  - uni.getStorage(OBJECT)
  - uni.getStorageInfo(OBJECT)
  - uni.removeStorage(OBJECT)
  - uni.clearStorage()
:::

### uni.setStorage  :ghost:
将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口
```js
uni.setStorage({
  key: 'storage_key',
  data: 'hello',
  success: function() {
    console.log('success');
   }
});
```
### uni.getStorage  :ghost:
从本地缓存中异步获取指定 key 对应的内容
```js
uni.getStorage({
  key: 'storage_key',
  success: function (res) {
    console.log(res.data);
   }
});
```
### uni.getStorageInfo  :ghost:
异步获取当前 storage 的相关信息
```js
uni.getStorageInfo({
  success: function (res) {
    console.log(res.keys);
    console.log(res.currentSize);
    console.log(res.limitSize);
   }
});
```
### uni.removeStorage  :ghost:
从本地缓存中异步移除指定 key
```js
uni.removeStorage({
  key: 'storage_key',
  success: function (res) {
    console.log('success');
   }
});
```
### uni.clearStorage  :ghost:
清理本地数据缓存
```js
uni.clearStorage()
```



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

## 网络请求 :gem:
![](/images/uniapp/uni34.png)

发起网络请求：uni.request(OBJECT)

::: info 参数说明

| 参数名   | 类型                      | 必填 | 默认值 | 说明                                             |
| -------- | ------------------------- | ---- | ------ | ------------------------------------------------ |
| url      | String                    | 是   |        | 开发者服务器接口地址                             |
| data     | Object/String/ArrayBuffer | 否   |        | 请求的参数                                       |
| header   | Object                    | 否   |        | 设置请求的 header，header 中不能设置 Referer。   |
| method   | String                    | 否   | GET    | 请求方式                                         |
| timeout  | Number                    | 否   | 60000  | 超时时间，单位 ms                                |
| success  | Function                  | 否   |        | 收到开发者服务器成功返回的回调函数               |
| fail     | Function                  | 否   |        | 接口调用失败的回调函数                           |
| complete | Function                  | 否   |        | 接口调用结束的回调函数（调用成功、失败都会执行） |

:::

::: info success返回参数说明

| 参数名   | 类型                      | 必填 | 默认值 | 说明                                             |
| -------- | ------------------------- | ---- | ------ | ------------------------------------------------ |
| url      | String                    | 是   |        | 开发者服务器接口地址                             |
| data     | Object/String/ArrayBuffer | 否   |        | 请求的参数                                       |
| header   | Object                    | 否   |        | 设置请求的 header，header 中不能设置 Referer。   |
| method   | String                    | 否   | GET    | 请求方式                                         |
| timeout  | Number                    | 否   | 60000  | 超时时间，单位 ms                                |
| success  | Function                  | 否   |        | 收到开发者服务器成功返回的回调函数               |
| fail     | Function                  | 否   |        | 接口调用失败的回调函数                           |
| complete | Function                  | 否   |        | 接口调用结束的回调函数（调用成功、失败都会执行） |

:::


### GET请求 :ghost:
```js
uni.request({
  url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php",
  success(res) {
    console.log(res.data)
   }
})
```
### POST请求 :ghost:
```js
uni.request({
  url: "http://iwenwiki.com/api/blueberrypai/login.php",
  data: {
    user_id: "iwen@qq.com",
    password: "iwen123",
    verification_code: "crfvw"
   },
  method: "POST",
  header: {
    'Content-type': 'application/x-www-form-urlencoded'
   },
  success(res) {
    console.log(res.data)
   }
})
```


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
