---
category: [小程序,WEB前端]
tag: [微信小程序]
---
# 11.1 初体验小程序  :tada:

![](/images/small/s1.png)

小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验

解释：微信小程序依赖于微信作为载体，呈现类似App的展示应用效果

::: info 小程序与普通网页开发的区别
小程序的主要开发语言是 JavaScript ，小程序的开发同普通的网页开发相比有很大的相似性。对于前端开发者而言，从网页开发迁移到小程序的开发成本并不高，但是二者还是多少有些许区别的，例如：
  - 由原来的`html`文件修改为`wxml`文件
  - 由原来的`css`文件修改为`wxss`文件
  - 新增了属于小程序的特别配置
:::

开发者可使用微信客户端(6.7.2 及以上版本)扫码下方小程序码，体验小程序

![](/images/small/s2.png)

## 小程序账号申请 :gem:

![](/images/small/s3.png)

开发小程序的第一步，你需要拥有一个小程序帐号，通过这个帐号你就可以管理你的小程序

进入小程序注册页根据指引填写信息和提交相应的资料，就可以拥有自己的小程序帐号


::: tip
注册地址：[https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_CN](https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_CN)
:::

- 第一步：添加账号信息

![](/images/small/s4.png)

- 第二步：激活邮箱

![](/images/small/s5.png)

- 第三步：信息登记

::: tip
这里我们能选择的是个人和企业，如果是个人注册选择个人（我们这里选择个人），如果是企业注册选择企业

个人类型的小程序是无法进行微信支付的
:::

![](/images/small/s6.png)

- 第四步：主体信息填写

![](/images/small/s7.png)

- 第五步：进入控制台

单独进入管理平台地址:[https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)

![](/images/small/s8.png)

- 第六步：获取AppID

注意：目前对我们有用的是“开发管理 - 开发设置 - AppID”

![](/images/small/s9.png)

小程序的 AppID 相当于小程序平台的一个身份证，后续你会在很多地方要用到 AppID


## 开发者工具 :gem:
![](/images/small/s10.png)

为了帮助开发者简单和高效地开发和调试微信小程序，推出了微信开发者工具

使用小程序开发者工具，开发者可以完成小程序开发调试、代码查看和编辑、小程序预览和发布等功能。

::: tip
开发者工具下载地址: [https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
:::

安装如一般软件一样，并没有特别之处

- 创建项目

模板的选择根自身情况而定，个人喜欢选择`TS+Sass版`

![](/images/small/s11.png)


- 开发者工具说明

在微信开发者工具中，我们可以编写代码的同时查看运行结果和调试问题

![](/images/small/s12.png)

## 小程序目录结构 :gem:

![](/images/small/s13.png)

小程序包含一个描述整体程序的 `app` 和多个描述各自页面的 `page`

![](/images/small/s14.png)

::: info 描述整体的 app

| 文件     | 必需 | 作用             |
| -------- | ---- | ---------------- |
| app.js   | 是   | 小程序逻辑       |
| app.json | 是   | 小程序公共配置   |
| app.wxss | 是   | 小程序公共样式表 |

:::

::: info 描述各自页面的 page

一个小程序页面由四个文件组成，分别是

| 文件类型 | 必需 | 作用     |
| -------- | ---- | -------- |
| js       | 是   | 页面逻辑 |
| wxml     | 是   | 页面结构 |
| json     | 否   | 页面配置 |
| wxss     | 否   | 页面样   |

:::

::: tip
为了方便开发者减少配置项，描述页面的四个文件必须具有相同的路径与文件名
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
















