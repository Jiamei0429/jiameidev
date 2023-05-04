---
category: [UNIAPP,WEB前端]
tag: uniapp
---


# 12.5 状态管理Pinia :tada:

::: details 学习此章节之前，请先阅读这里！！！
如果你已经完成了Vue的学习，那么你可以继续往下学习此章节，假如你没有学习完Vue，确切的说是没有学习过Pinia，请点击[Pinia]()，学习完该章节之后再继续阅读本章节！
:::

![](/images/uniapp/uni28.png)

::: tip
uni-app 内置了 Pinia

使用 HBuilder X 不需要手动安装，直接使用即可。使用 CLI 需要手动安装，执行 `npm install pinia`。
:::

安装持久化插件
```bash
npm i pinia-plugin-persist-uni
```

::: tip 如果你使用的是TS,还需增加以下配置
```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["pinia-plugin-persist-uni"]
  }
}
```
:::

基本示例
在 main.js 中编写以下代码：
```js
import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist-uni'
export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia()
  pinia.use(piniaPersist)
  app.use(pinia)
  return {
    app,
    pinia, // 此处必须将 Pinia 返回
  };
}
```
首先创建一个仓库
```js
// stores/navStore.js
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const useNavStore = defineStore('navStore', {
    state: () => {
        const number = ref(1)
        return {
            number
        }
    },
    getters: {

    },
    actions: {
        //普通操作
        changeNumber(val) {
            this.number = val
        },
        //异步操作
        changeNumberAsync() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(1)
                    return resolve()
                }, 2000)
            })
        },
    },
    persist: {
        enabled: true,  // 开启持久化
    },
})
//热更新
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useNavStore, import.meta.hot))
}
```

然后在组件中使用它：

```vue
<template>
  <view>页面中的值：{{ num }}</view>
  <!-- 读取store仓库的值 -->
  <view>store仓库中的值：{{ navStore.number }}</view>
  <button @click="change">修改仓库中的值</button>
  <button @click="changeAsync">处罚异步操作</button>
</template>

<script setup>
import { ref } from "vue"
import { useNavStore } from '@/stores/navStore';
const navStore = useNavStore();
const num = ref(111)
const change = () => {   //修改仓库中的值,处理普通操作
  navStore.changeNumber(11111111)
}
const changeAsync = async () => {       //处理普通操作
  await navStore.changeNumberAsync()
  console.log(2);
}
</script>    

<style scoped></style>     
```

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
