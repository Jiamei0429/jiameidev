---
category: [VUE,WEB前端]
tag: [vue]
---
# 7.2 Vue基础:tada:  

## 响应式:gem:

![](/images/vue/vue6.png)

为了让大家上手组合式API更轻松，我们对比这选项式API来写，不同的编码风格完成相同的功能

### 选项式API_响应式:ghost:

```vue
<template>
  <h3>选项式API</h3>
  <p>{{ message }}</p>
  <p>{{ obj.name }}</p>
</template>
<script>
export default {
  data(){
    return{
      message:"选项式API 绑定数据",
      obj:{
          name:"123",
          age:12
	  }
    }
  }
}  
</script>
```

### 组合式API_响应式:ghost:

```vue
<template>
  <h3>组合式API</h3>
  <p>{{ message }}</p>
  <p>{{ userInfo.name }}</p>
</template>
<script setup>
import { ref,reactive } from "vue"
const message = ref("组合式API 绑定数据")
const userInfo = reactive({
   name:"iwen"
})
</script>
```

> **温馨提示**
>
> `ref`和`reactive`的区别
>
> `ref`用于创建基本类型响应数据
>
> `reactive`用于创建引用类型响应数据

在接下来的学习中，我将用组合式API带大家学习。

### 简单了解proxy:ghost:

```vue
<template>
  	<div class="main">
    	123
  	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
const a = ref<any>([])   //单一数据源
const b = reactive<any>({    //多个数据源
  c: []
})
var data = [
  {
    id: 1,
    message: "123"
  },
  {
    id: 2,
    message: "456"
  }
]
onMounted(() => {
  a.value = data
  console.log(a.value);   //proxy代理值
  console.log(JSON.parse(JSON.stringify(a.value)));   //真实值
  b.c = data
  console.log(b.c);     //proxy代理值
  console.log(JSON.parse(JSON.stringify(b.c)));   //真实值
})
</script>

<style lang="less" scoped>

</style>
```

### 教程视频:ghost:

<video  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" width="100%" controls></video>

## 模板语法:gem:

![](/images/vue/vue3.png)

Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。

### 文本插值:ghost:

最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：

```vue
<template>
  <p>{{ msg }}</p>
</template>

<script setup>
import {ref} from "vue"
const msg = ref("Hello World")
</script>
```

### 使用 JavaScript 表达式:ghost:

每个绑定仅支持**单一表达式**，也就是一段能够被求值的 JavaScript 代码。一个简单的判断方法是是否可以合法地写在 `return` 后面

```vue
<template>
  <p>{{ number + 1 }}</p>
  <p>{{ ok ? 'YES' : 'NO' }}</p>
  <p>{{ message.split('').reverse().join('') }}</p>
</template>

<script setup>
import {ref} from "vue"
const number = ref(10)
const msg = ref(true)
const ok = ref("Hello World")
</script>
```

以下是无效的情况:

> <!-- 这是一个语句，而非表达式 -->
>
> `{{ var a = 1 }}`
>
> <!-- 条件控制也不支持，请使用三元表达式 -->
> `{{ if (ok) { return message } }}`

### 原始 HTML:ghost:

双大括号将会将数据插值为纯文本，而不是 HTML。若想插入 HTML，你需要使用 `v-html` 指令

```vue
<template>
  <p>纯文本: {{ rawHtml }}</p>
  <p>属性: <span v-html="rawHtml"></span></p>
</template>

<script setup>
import {ref} from "vue"
const rawHtml = ref("<a href='https://itbaizhan.com'>百战程序员</a>")
</script>
```

### 教程视频:ghost:

<video  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" width="100%" controls></video>

## 属性绑定:gem:

### 普通类型Attribute:ghost:

![](/images/vue/vue4.png)

双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 `v-bind` 指令

`v-bind` 指令指示 Vue 将元素的 `id` attribute 与组件的 `dynamicId` 属性保持一致。如果绑定的值是 `null` 或者 `undefined`，那么该 attribute 将会从渲染的元素上移除

> ### 简写
>
> 因为 `v-bind` 非常常用，我们提供了特定的简写语法

```vue
<template>
  <div v-bind:id="dynamicId" :class="dynamicClass">AppID</div>
</template>

<script setup>
import {ref} from "vue"
const dynamicId = ref("appid")
const dynamicClass = ref("appclass")
</script>

<style>
.appclass{
  color: red;
  font-size: 20px;
}
</style>
```

### 布尔型 Attribute:ghost:

布尔型 attribute 依据 true / false 值来决定 attribute 是否应该存在于该元素上,`disabled`就是最常见的例子之一

```vue
<template>
  <button :disabled="isButtonDisabled">Button</button>
</template>

<script setup>
import {ref} from "vue"
const isButtonDisabled = ref(true)
</script>
```

### 动态绑定多个值:ghost:

如果你有像这样的一个包含多个 attribute 的 JavaScript 对象

```vue
<template>
  <div v-bind="objectOfAttrs">Hello World</div>
</template>

<script setup>
import { reactiive } from "vue"
const objectOfAttrs = ref({
     id: 'container',
     class: 'wrapper'
})
</script>
```

### 教程视频:ghost:

<video  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" width="100%" controls></video>

## class绑定:gem:

![](/images/vue/vue5.png)

数据绑定的一个常见需求场景是操纵元素的 CSS class 列表，因为 `class` 是 attribute，我们可以和其他 attribute 一样使用 `v-bind` 将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。因此，Vue 专门为 `class` 的 `v-bind` 用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组

### 对象绑定:ghost:

```vue
<template>
  <div class="main">
    <p :class="obj">111</p>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const obj = reactive({
  class1: true,
  class2: true,
  class3: false
})
</script>

<style lang="less" scoped>
.class1 {
  color: red;
}
.class2 {
  background: pink;
}
.class3 {
  border: 3px solid #000;
}
</style>
```

### 数组绑定:ghost:

普通数组绑定:

```vue
<template>
  <div class="main">
    <p :class='arr'>111</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const arr = ref(["class1", "class2", "class3"])
</script>

<style lang="less" scoped>
.class1 {
  color: red;
}
.class2 {
  background: pink;
}
.class3 {
  border: 3px solid #000;
}
</style
```

如果你也想在数组中有条件地渲染某个 class，你可以使用三元表达式：

```vue
<template>
  <div :class="[isActive ? 'active' : '']">isActive</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isActive = ref(true)
</script>

<style lang="less" scoped>
.active {
  color: red;
}
</style>
```

当然，你也可以用数组的对象混合嵌套的方式：

```vue
<template>
  <div :class="[{ 'active':isActive }, errorClass]">123</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isActive = ref(true)
</script>

<style lang="less" scoped>
.active {
    color: red;
}
.text-danger{
    background:yellow;
}
</style>
```

> **温馨提示**
>
> 数组和对象嵌套过程中，只能是数组嵌套对象，不能反其道而行

### 教程视频:ghost:

<video  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" width="100%" controls></video>

## style绑定:gem:

数据绑定的一个常见需求场景是操纵元素的 CSS style列表，因为 `style` 是 attribute，我们可以和其他 attribute 一样使用 `v-bind` 将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。因此，Vue 专门为 `style` 的 `v-bind` 用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组

### 对象绑定:ghost:

```vue
<template>
  	<div class="main">
    	<div :style="styleObject">Style绑定</div>
  	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
const styleObject = reactive({
  color: "red",
  background: 'pink'
})
</script>

<style lang="less" scoped>

</style>
```

### 数组绑定:ghost:

我们还可以给 `:style` 绑定一个包含多个样式对象的数组

```vue
<template>
  <div class="main">
    <div :style="StylesArr">Style绑定</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
const StylesArr = reactive([
  { color: "red" },
  { background: 'yellow' }
])
</script>

<style lang="less" scoped>

</style>
```

### 教程视频:ghost:

<video  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" width="100%" controls></video>

## 条件渲染:gem:

![](/images/vue/vue7.png)

在 `Vue` 中，提供了条件渲染，这类似于`JavaScript` 中的条件语句

### v-if，v-else-if，v-else :ghost:

- `v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染
- `v-else-if` 提供的是相应于 `v-if` 的“else if 区块”。它可以连续多次重复使用
- 你也可以使用 `v-else` 为 `v-if` 添加一个“else 区块”

```vue
<template>
  <div class="main">
    <template v-if="flag == 0">
      <p>1</p>
      <p>2</p>
    </template>
    <template v-else-if="flag == 1">
      <p>3</p>
      <p>4</p>
    </template>
    <template v-else>
      <p>5</p>
      <p>6</p>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const flag = ref(1)
</script>
```

### v-show:ghost:

另一个可以用来按条件显示一个元素的指令是 `v-show`。其用法基本一样

```vue
<template>
  <div>
    <p v-show="flag1">7</p>
    <p v-show="！flag1">8</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const flag1 = ref(false)
</script>
```

### `v-if` vs `v-show`的区别:ghost:

`v-if` 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。

`v-if` 也是**惰性**的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。

相比之下，`v-show` 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS `display` 属性会被切换。

总的来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 `v-show` 较好；如果在运行时绑定条件很少改变，则 `v-if` 会更合适

## 列表渲染:ghost:

![](/images/vue/vue8.png)

我们可以使用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令的值需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据的数组，而 `item` 是迭代项的**别名**

大多数情况，我们渲染的数据源来源于网络请求，也就是 `JSON` 格式，要么数组，要么对象。

```vue
<template>
  <div class="main">
      //遍历数组（两个参数）
    <p v-for="(item, index) in arr" :key="index">{{ item }}</p>
      //遍历对象（三个参数）
    <p v-for="(value, key, index) of obj" :key="index">{{ index }}--{{ key }}--{{ value }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
const arr = ref(["kaka", "jeje", "haha"])
const obj = reactive({
  name: "123",
  age: 30,
  job: "web"
})
</script>

<style lang="less" scoped>

</style>
```

Vue 默认按照“就地更新”的策略来更新通过 `v-for` 渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。

为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个唯一的 `key` attribute：

> **温馨提示**
>
> `key` 在这里是一个通过 `v-bind` 绑定的特殊 attribute
>
> 推荐在任何可行的时候为 `v-for` 提供一个 `key` attribute
>
> `key` 绑定的值期望是一个基础类型的值，例如字符串或 number 类型
>
> 在这里我并不推荐大家使用`index`作为`key`的值，我们要确保每一条数据的唯一索引不会发生变化，可以使用item.id等唯一不变的值

## 事件处理:gem:

![](/images/vue/vue9.png)

我们可以使用 `v-on` 指令 (简写为 `@`) 来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。用法：`v-on:click="methodName"` 或 `@click="handler"`

事件处理器的值可以是

1. **内联事件处理器**：事件被触发时执行的内联 JavaScript 语句 (与 `onclick` 类似)
2. **方法事件处理器**：一个指向组件上定义的方法的属性名或是路径

### 事件处理器:ghost:

#### 内联事件处理器（不推荐）:revolving_hearts:

内联事件处理器通常用于简单场景

```vue
<template>
  	<div class="main">
        <p>{{ count }}</p>
        <button @click="count++">count+</button>
  	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const count = ref(1)
</script>

<style lang="less" scoped>

</style>
```

#### 方法事件处理器（推荐）:revolving_hearts:

```vue
<template>
  	<div class="main">
        <p>{{ count }}</p>
        <button @click="countAdd()">count+</button>
  	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const count = ref(1)
const countAdd = () => {
  	count.value++
}
</script>

<style lang="less" scoped>

</style>
```

### 事件传参:ghost:

#### 获取`event`对象:revolving_hearts:

```vue
<template>
  	<div class="main">
        <p>{{ count }}</p>
        <button @click="countAdd()">count+</button>
  	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const count = ref(1)
const countAdd = (event) => {
  	console.log(event);
}
</script>
```

#### 获取普通参数:revolving_hearts:

```vue
<template>
  	<div class="main">
        <p>{{ count }}</p>
        <button @click="countAdd(123)">count+</button>
  	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const count = ref(1)
const countAdd = (num) => {
  	console.log(num);  //123
}
</script>
```

#### 获取参数和`event`:revolving_hearts:

```vue
<template>
  	<div class="main">
        <p>{{ count }}</p>
        <button @click="countAdd(123,$event)">count+</button>
  	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const count = ref(1)
const countAdd = (num,event) => {
  	console.log(num,event); 
}
</script>
```

> 传递多个参数时，event事件对象要放到最后，加$符号

### 事件修饰符:ghost:

在处理事件时调用 `event.preventDefault()` 或 `event.stopPropagation()` 是很常见的。尽管我们可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 DOM 事件的细节会更好

为解决这一问题，Vue 为 `v-on` 提供了**事件修饰符**，常用有以下几个：

1. `.stop`
2. `.prevent`
3. `.once`
4. `.enter`
5. ...

> **具体参考**
>
> 地址：https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers

```vue
<template>
  	<div class="main">
        <!-- 阻止事件冒泡 -->
        <button @click.stop="count3Add(3)">count1+</button>
        <!-- 阻止默认行为 -->
        <button @click.prevent="count3Add(3)">count1+</button>
        <!-- 最多执行一次 -->
        <button @click.once="count3Add(3)">count1+</button>
  	</div>
</template>
```

## 数组变化侦测:gem:

Vue 能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新。这些变更方法包括：

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

相对地，也有一些不可变 (immutable) 方法，例如 `filter()`，`concat()` 和 `slice()`，这些都不会更改原数组，而总是**返回一个新数组**。当遇到的是非变更方法时，我们需要将旧的数组替换为新的

```vue
<template>
    <div class="main">
         <p>{{arr}}</p>
         <button @click="pushValue">pushValue+</button>
         <button @click="filterValue">filterValue+</button>
  	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from "vue";
const arr = ref([1,2,3])
const pushValue = () => {
  	arr.value.push(4)
}
const filterValue = () => {
  	arr.value = arr.value.concat(2)
}
</script>

<style lang="less" scoped>

</style>
```

## 计算属性:gem:

![](/images/vue/vue10.png)

模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。因此我们推荐使用**计算属性**来描述依赖响应式状态的复杂逻辑

### 未使用计算属性前:ghost:

```vue
<template>
    <div class="main">
        <!-- 每次加载都会重新计算 -->
        <p>{{ names.length > 2 ? "大于" : "小于" }}</p>
  	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const names = ref([1, 2, 3, 4])
</script>
```

### 使用计算属性后:ghost:

```vue
<template>
    <div class="main">
        <!-- okLength虽然是个方法，但是计算属性不用带括号 -->
        <p>{{ okLength }}</p>
  	</div>
</template>

<script lang="ts" setup>
import { ref,computed } from "vue";
const names = ref([1, 2, 3, 4])
const okLength = computed(() => {
  	return names.value.length > 2 ? "大于" : "小于"
})
</script>
```

你可能注意到我们在表达式中像这样调用一个函数也会获得和计算属性相同的结果，比如像下面这样:

```vue
<template>
    <div class="main">
        <!-- okLength虽然是个方法，但是计算属性不用带括号 -->
        <p>{{ okLength() }}</p>
  	</div>
</template>

<script lang="ts" setup>
import { ref,computed } from "vue";
const names = ref([1, 2, 3, 4])
const okLength = () => {
  	return names.value.length > 2 ? "大于" : "小于"
}
</script>
```

> **重点区别**：
>
> 计算属性：**计算属性值会基于其响应式依赖被缓存**。一个计算属性仅会在其响应式依赖更新时才重新计算
>
> 方法：方法调用**总是**会在重渲染发生时再次执行函数

## 侦听器:gem:

![](/images/vue/vue11.png)

我们可以使用 `watch` 选项在每次响应式属性发生变化时触发一个函数

```vue
<template>
  	<div class="main">
    	<p>{{ count }}</p>
    	<button @click="add">add</button>
  	</div>
</template>

<script lang="ts" setup>
import { ref,watch } from "vue";
const count = ref(1)
const add = () => {
  	count.value++
}
//通过{{}}绑定的数据是可以监听的, 这里监听的是count的变化
watch(count, async (newValue, oldValue) => {
  	console.log(newValue, oldValue);
})
</script>
```

## 表单的输入绑定:gem:

![](/images/vue/vue12.png)

在前端处理表单时，我们常常需要将表单输入框的内容同步给 JavaScript 中相应的变量。手动连接值绑定和更改事件监听器可能会很麻烦,`v-model` 指令帮我们简化了这一步骤

### 普通输入框 :ghost:

```vue
<template>
  <input type="text" v-model="message">
  <p>{{ message }}</p>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const message = ref("")
</script>
```

### 复选框:ghost:

```vue
<template>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const checked = ref(true)
</script>
```

### 修饰符:ghost:

`v-model`也提供了修饰符：`.lazy`、`.number`、`.trim`，常用的是`.lazy`，默认情况下，`v-model` 会在每次 `input` 事件后更新数据。你可以添加 `lazy` 修饰符来改为在每次 `change` 事件后更新数据

```vue
<template>
  <input type="text" v-model.lazy="message">
  <p>{{ message }}</p>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const message = ref("")
</script>
```

## 模板引用(Dom操作):gem:

![](/images/vue/vue13.png)

虽然 Vue 的声明性渲染模型为你抽象了大部分对 DOM 的直接操作，但在某些情况下，我们仍然需要直接访问底层 DOM 元素。要实现这一点，我们可以使用特殊的 `ref` attribute，组合式API的实现更为简洁

```vue
<template>
  <h3>组合式API</h3>
  <p ref="message">组合式API-模板引用</p>
</template>
<script setup>
import { ref,onMounted } from "vue"
// 声明一个 ref 来存放该元素的引用,必须和模板里的 ref 同名
const message = ref(null)
onMounted(() =>{
  message.value.innerHTML = "组合式API-模板引用-修改"
})
</script>
```

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
