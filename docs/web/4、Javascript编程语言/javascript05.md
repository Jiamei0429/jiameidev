---
category: [JavaScript,WEB前端]
tag: javascript
---
# 4.5 函数:tada:

::: normal-demo 代码演示
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


::: vue-playground 随堂训练
@file App.vue
```vue
<template>
   <div class="home">
      <!--这里写html代码-->
      <p class="text">1111</p>
   </div>
</template>

<script setup>
import {onMounted} from 'vue';
onMounted(()=>{
  // 这里写js
  document.querySelector(".text").innerHTML ="123888";
})
</script>

<style scoped>
/* 这里写css代码 */
.home{
  color: red;
}
</style>
```
:::


**轻松一刻**
<AudioPlayer
  src="http://dl.stream.qqmusic.qq.com/C400003dANGA3aX7c4.m4a?guid=4364984230&vkey=B1B59B82546D67E0C4DF69EBF99BD9B4291C24235FE31B0DF9C49CE9D21FF133282664A4C668A9270E322300588CB2FDB9FB8E717AEBE18D&uin=&fromtag=120032"
  title="恋爱画板"
  poster="https://img0.baidu.com/it/u=2811220644,2164135624&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。