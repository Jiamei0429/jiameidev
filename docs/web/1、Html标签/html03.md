---
category: [HTML,WEB前端]
tag: html
---
# 1.3 表单元素 :tada:

## 代码块分组
::: code-tabs#shell
@tab pnpm
```bash
pnpm add -D vuepress-theme-hope
```
@tab yarn
```bash
yarn add -D vuepress-theme-hope
```
@tab:active npm
```bash
npm i -D vuepress-theme-hope
```
:::

## 选项卡
::: tabs#fruit
@tab apple
Apple
@tab banana
Banana
@tab orange
Orange
:::

## 自定义容器
::: info
信息容器。
:::

::: note
注释容器。
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: danger
危险容器
:::

::: details
详情容器
:::

::: info 自定义标题
一个有 `代码` 和 [链接](#演示) 的信息容器。
```js
const a = 1;
```
:::
## 标记
VuePress Theme Hope ==非常== 强大!

## 卡片
```card
title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mrhope.site/logo.svg
link: https://mrhope.site
color: rgba(253, 230, 138, 0.15)
```
## Chart

::: chart 一个块状图案例
```json
{
  "type": "bar",
  "data": {
    "labels": ["红色", "蓝色", "黄色", "绿色", "紫色", "橙色"],
    "datasets": [
      {
        "label": "投票数",
        "data": [12, 19, 3, 5, 2, 3],
        "backgroundColor": [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        "borderColor": [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        "borderWidth": 1
      }
    ]
  },
  "options": {
    "scales": {
      "y": {
        "beginAtZero": true
      }
    }
  }
}
```
:::

## ECharts
::: echarts 一个基础南丁格尔玫瑰图案例

```json
{
  "legend": {
    "top": "bottom"
  },
  "toolbox": {
    "show": true,
    "feature": {
      "mark": {
        "show": true
      },
      "dataView": {
        "show": true,
        "readOnly": false
      },
      "restore": {
        "show": true
      },
      "saveAsImage": {
        "show": true
      }
    }
  },
  "series": [
    {
      "name": "Nightingale Chart",
      "type": "pie",
      "radius": [20, 100],
      "center": ["50%", "50%"],
      "roseType": "area",
      "itemStyle": {
        "borderRadius": 8
      },
      "data": [
        {
          "value": 40,
          "name": "rose 1"
        },
        {
          "value": 38,
          "name": "rose 2"
        },
        {
          "value": 32,
          "name": "rose 3"
        },
        {
          "value": 30,
          "name": "rose 4"
        },
        {
          "value": 28,
          "name": "rose 5"
        },
        {
          "value": 26,
          "name": "rose 6"
        },
        {
          "value": 22,
          "name": "rose 7"
        },
        {
          "value": 18,
          "name": "rose 8"
        }
      ]
    }
  ]
}
```
:::

## Mermaid
```mindmap
root((VuePress))
  Out of box
    Default theme
      Navbar
      Sidebar
      Darkmode
    I18n
    Search
      Search
      DocSearch<br />by algolia
  Customize
    Theme
      (hope)
    Plugins
      (components)
      (md-enhance)
      (photo-swipe)
      (copy-code2)
      (copyright2)
      (feed2)
      (sitemap2)
      (seo2)
```

## Vue 交互演示
::: vue-playground Vue 交互演示

@file App.vue

```vue
<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>

<script setup>
import { ref } from "vue";
const msg = ref("你好交互演示!");
</script>

<style scoped>

</style>
```

:::
## 普通代码演示
::: normal-demo Demo 演示

```html
<h1>VuePress Theme Hope</h1>
<p><span id="very">非常</span>强大!</p>
```

```js
document.querySelector("#very").addEventListener("click", () => {
  alert("非常强大");
});
```

```css
span {
  color: red;
}
```

:::

## Vue 代码演示
::: vue-demo 一个 Vue Option 演示

```vue
<template>
  <div class="box">
    <code>vuepress-theme-hope</code> is
    <span @click="handler">{{ message }}</span
    >!
  </div>
</template>
<script>
export default {
  data: () => ({ message: "powerful" }),
  methods: {
    handler() {
      this.message = "very " + this.message;
    },
  },
};
</script>
<style>
.box span {
  color: red;
}
</style>
```

:::

## React 代码演示
::: react-demo 一个函数式 React Demo

```js
const { useState } = React;

export default () => {
  const [message, setMessage] = useState(" 强大");

  const handler = () => {
    setMessage(`十分${message}`);
  };

  return (
    <div className="box">
      <code>vuepress-theme-hope</code>
      <span id="powerful" onClick={handler}>
        {message}
      </span>
    </div>
  );
};
```

```css
.box #powerful {
  color: blue;
}
```

:::

## 幻灯片演示
@slidestart [moon]

slide1
--
qfjewjwpvWVFfv 

---

slide2

---

slide3

@slideend

## 使用图标
<HopeIcon icon="share" />
<HopeIcon icon="/svg/HTML.svg" />
