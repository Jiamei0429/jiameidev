---
article: false
title: 主页
icon: home
collapsible: true
link: false
index: true
order: 1
home: true
heroImage: /images/logo.png
heroImageDark: /images/logo.png
# heroHeight: 580
actions:
  - text: 快速上手
    link: /qianyan.md
    type: primary
  - text: 关于我们
    link: /resume.md
    type: secondary
features:
  - title: 简洁至上
    details: 网站只针对性的涉及前端和后端相关技术，能够带你成为一个全栈开发者，不涉及非相关技术。
  - title: 主流技术
    details: 全网站覆盖前端和PY后端最主流的技术及框架，并不断补充拓展，不怕被淘汰落后。
  - title: 更新维护
    details: 我们会不中断的对其进行维护并更新教程,随时对其进行补充，始终走在技术最前沿。
  - title: 讲解清晰
    details: 提供文档和视频两种学习方式，一步一步的进行引导，能够清楚地让你知道在做什么，应该怎么做。
  - title: 实战练习
    details: 每个大的章节结束后，都会针对性的进行实战项目的开发用来练手。
footer: <a href="https://beian.miit.gov.cn/">备案号：	鲁ICP备2022010166号-1</a>
copyright: <a href="https://jiameikj.com">嘉美开发社区 &nbsp;&nbsp; CopyRight@2023 &nbsp;&nbsp; Version:1.2.4</a>
---

## 知识树
```mindmap
root((嘉美开发社区))
    后端
      Node方向
        NodeJS
        Express
        NestJS
      Python方向
        Python
        Flask
        Django
        爬虫
        办公自动化
        网络与并发编程
    前端
      前端三件套
      LESS <br /> SCSS
      TypeScript
      WebPack <br /> Vite
      ECMAScript
      Vue
      React
      Uniapp
      Electron
      微信小程序
      NuxtJS
      NextJS
    Linux
      Ubuntu
      Nginx
      Docker
    数据库
      Redis
      Mysql
      MongoDb
    必备技能
    算法
    面试题
```
## 数据视图
::: echarts 快速增长

```js
const data = [];

for (let i = 0; i < 5; i++) data.push(Math.round(Math.random() * 200));

const option = {
  xAxis: {
    max: "dataMax",
  },
  yAxis: {
    type: "category",
    data: ["JavaScript","NodeJs","Python"],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 2, // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: "量",
      type: "bar",
      data: data,
      label: {
        show: true,
        position: "right",
        valueAnimation: true,
      },
    },
  ],
  legend: {
    show: true,
  },
  toolbox: {
    show: true,
    feature: {
      mark: {
        show: true,
      },
      dataView: {
        show: true,
        readOnly: false,
      },
      restore: {
        show: true,
      },
      saveAsImage: {
        show: true,
      },
    },
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: "linear",
  animationEasingUpdate: "linear",
};
const run = () => {
  for (let i = 0; i < data.length; i++)
    data[i] += Math.round(Math.random() * Math.random() > 0.9 ? 2000 : 200);

  myChart.setOption({
    series: [{ type: "bar", data }],
  });
};
setTimeout(() => {
  run();
}, 0);
setInterval(() => {
  run();
}, 3000);
```

:::


## 常用网址（临时存在）
[ChatGPT](https://chat.openai.com/chat)   [GitHub](https://github.com)     [Gitee](https://e.gitee.com/jmwlkj/code/repos)

[Vue3](https://cn.vuejs.org/)     [React](https://react.docschina.org/)    [Uniapp](https://uniapp.dcloud.net.cn/)

[微信公众平台](https://mp.weixin.qq.com/)  [135编辑器](https://www.135editor.com/beautify_editor.html)    [微信开发文档](https://developers.weixin.qq.com/miniprogram/dev/component/)

[阿里云](https://account.aliyun.com/)     [腾讯云](https://cloud.tencent.com/)

[抖音](https://www.douyin.com/)     [哔哩哔哩](https://www.bilibili.com/)   [抖音创作平台](https://creator.douyin.com/creator-micro/home) 

[Icon图标库](https://www.iconfont.cn/)     [ElementUI](https://element-plus.gitee.io/zh-CN/)    [Antd Mobile](https://mobile.ant.design/zh/)   [Ant Design](https://ant.design/index-cn)   [Vant](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart)   [TDesign](https://tdesign.tencent.com/)

[百战视频](https://www.itbaizhan.com/)    [优酷视频](https://youku.com/channel/webhome)    [腾讯视频](https://v.qq.com/)

[vue-baidu-map-3x](http://map.heifahaizei.com/doc/)   [md-editor-v3](https://imzbf.github.io/md-editor-v3/index)   [随机密码生成](https://suijimimashengcheng.bmcx.com/)

[VuePress](https://v2.vuepress.vuejs.org/zh/)   [v-md-editor](https://ckang1229.gitee.io/vue-markdown-editor/zh/)   [ECharts](https://echarts.apache.org/zh/index.html)   [lucky-canvas 抽奖插件](https://100px.net/)