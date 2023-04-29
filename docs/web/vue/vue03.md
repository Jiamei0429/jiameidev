# Vue进阶:tada: 

## 组件:gem:

![](./../../../.vuepress/public/images/vue/vue14.png)

组件最大的优势就是可复用性

当使用构建步骤时，我们一般会将 Vue 组件定义在一个单独的 `.vue` 文件中，这被叫做单文件组件(简称 SFC)

### 组成结构:ghost:

```vue
<template>
  <div>承载标签</div>
</template>

<script setup>
</script>

<style scoped>
</style>
```

### 组件引用:ghost:

```vue
<template>
   <TemplateDemo />
</template>

<script>
import TemplateDemo from "./components/TemplateDemo.vue"
</script>
```

> **在Vue单文件组件中，样式中的`scoped`的作用是生效作用域，只在当前组件内生效**

### 组件嵌套关系:ghost:

![](./../../../.vuepress/public/images/vue/vue15.png)

组件允许我们将 UI 划分为独立的、可重用的部分，并且可以对每个部分进行单独的思考。在实际应用中，组件常常被组织成层层嵌套的树状结构

这和我们嵌套 HTML 元素的方式类似，Vue 实现了自己的组件模型，使我们可以在每个组件内封装自定义内容与逻辑

## **组件注册方式**:gem:

一个 Vue 组件在使用前需要先被“注册”，这样 Vue 才能在渲染模板时找到其对应的实现。组件注册有两种方式：全局注册和局部注册

### 全局注册:ghost:

```ts
// main.ts

import Home from "./views/HomeView.vue"
const app = createApp(App)
app.component('Home', Home)   //注册的Home组件任意地方都能用
```

全局注册虽然很方便，但有以下几个问题:

1. 全局注册，但并没有被使用的组件无法在生产打包时被自动移除 (也叫“tree-shaking”)。如果你全局注册了一个组件，即使它并没有被实际使用，它仍然会出现在打包后的 JS 文件中
2. 全局注册在大型项目中使项目的依赖关系变得不那么明确。在父组件中使用子组件时，不太容易定位子组件的实现。和使用过多的全局变量一样，这可能会影响应用长期的可维护性

### 局部注册:ghost:

```vue
<template> 
	<HomeView />
</template>

<script setup lang="ts">
//引入即注册，组件名为HomeView，只能在当前组件使用
import HomeView from '../views/HomeView.vue'
</script>

<style lang="less">
</style>
```

## **异步组件**:gem:

![](./../../../.vuepress/public/images/vue/vue16.png)

在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。Vue 提供了 `defineAsyncComponent`方法来实现此功能

### 全局异步注册:ghost:

```ts
// main.ts

import { defineAsyncComponent } from 'vue'
app.component('Header', defineAsyncComponent(() =>
  	import('@/components/Header.vue')
))
```

### 局部异步注册:ghost:

```vue
<template> 
	<Header />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
//仅仅是导入方式不同
const Header = defineAsyncComponent(() => import('@/components/Header.vue'))   
</script>

<style lang="less">
</style>
```

## 组件的自定义指令:gem:

![](./../../../.vuepress/public/images/vue/vue17.png)

自定义指令是区分全局和局部注册，在全局注册，可以在任意组件中使用，局部注册，只在当前组件中使用

### 全局自定义指令:ghost:

```ts
// main.ts

const app = createApp(App)
//全局自定义指令v-red，任意组件直接使用
app.directive("red", {
    mounted(element: any) {
        element.style.coler = "yellow"
    }
})
```

### 局部自定义指令:ghost:

```vue
<template>
  	<div>
    	<p v-change>123</p>
  	</div>
</template>

<script setup lang="ts">
//局部定义自定义指令v-change，只能当前组件使用
const vChange = {
  	mounted: (element: any) => {
    	console.log(element);
    	element.style.color = 'red'
  	}
}
</script>

<style lang="less" scoped>
</style>
```

## 动态组件:gem:

![](./../../../.vuepress/public/images/vue/vue18.png)

有些场景会需要在两个组件间来回切换，比如 Tab 界面

假设`Home`和`About`组件已经在全局注册

```vue
<template> 
	<component :is="tab"></component>
	<button @click="change">切换</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tab = ref("Home")
const change = () => {
  	tab.value = tab.value == "Home" ? "About" : "Home"
}
</script>

<style lang="less">
</style>
```

## 组件保持存活:gem:

![](./../../../.vuepress/public/images/vue/vue19.png)

当使用 `<component :is="...">` 来在多个组件间作切换时，被切换掉的组件会被卸载。我们可以通过`<keep-alive>`组件强制被切换掉的组件仍然保持“存活”的状态

假设`Home`和`About`组件已经在全局注册

```vue
<template>        
	<keep-alive>
		<component :is="tab"></component>
	</keep-alive>
	<button @click="change">切换</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tab = ref("Home")
const change = () => {
  	tab.value = tab.value == "Home" ? "About" : "Home"
}
</script>

<style lang="less">
</style>
```

## 组件生命周期:gem:

![](./../../../.vuepress/public/images/vue/vue20.png)

每个 Vue 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 DOM，以及在数据改变时更新 DOM。在此过程中，它也会运行被称为生命周期钩子的函数，让开发者有机会在特定阶段运行自己的代码

### 生命周期示意图:ghost:

![](./../../../.vuepress/public/images/vue/vue21.png)

```vue
<template>
  	<div></div>
</template>

<script setup lang="ts">  //setup取代beforeCreate和created
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated, onDeactivated } from "vue";
onBeforeMount(() => {
  	//在挂载前被调用
})
onMounted(() => {
  	//挂载完成后调用
})
onBeforeUpdate(() => {
  	//数据更新时调用，发生在虚拟 DOM 打补丁之前。此时内存中的数据已经被修改，但还没有更新到页面上
})
onUpdated(() => {
  	//数据更新后调用，此时内存数据已经修改，页面数据也已经更新
})
onBeforeUnmount(() => {
  	//组件卸载前调用
})
onUnmounted(() => {
  	//卸载组件实例后调用
})
onErrorCaptured(() => {
  	//每当事件处理程序或生命周期钩子抛出错误时调用
})
onRenderTracked(() => {
  	//状态跟踪，vue3新引入的钩子函数，只有在开发环境有用，用于跟踪所有响应式变量和方法，一旦页面有update，就会跟踪他们并返回一个event对象
})
onRenderTriggered(() => {
  	//状态触发，同样是vue3新引入的钩子函数，只有在开发环境有效，与onRenderTracked的效果类似，但不会跟踪所有的响应式变量方法，只会追踪发生改变的数据，同样返回一个event对象
})
onActivated(() => {
  	//与keep-alive一起使用，当keep-alive包裹的组件激活时调用
})
onDeactivated(() => {
  	//与keep-alive一起使用，当keep-alive包裹的组件停用时调用
})
</script>
```

### 生命周期应用:ghost:

组件的生命周期会随着我们对`Vue`的了解越多，也会越来越重要，这里我们先讲两个常用的应用常见：

1. 通过`ref`获取元素DOM结构
2. 模拟网络请求渲染数据

举例：

```vue
<template>
  <h3>组件生命周期应用</h3>
  <p ref="name">Hello</p>
</template>
<script setup>
import {ref,onBeforeMount,onMounted} from "vue"
const name = ref("") 
onBeforeMount(()=>{
    console.log(name.value.innerHTML); // undefind
})
onMounted(()=>{
    console.log(name.value.innerHTML);
})
</script>
```

## 组件传值