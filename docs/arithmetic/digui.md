---
sticky: 10
star: 10
title: 递归算法
icon: sort
order: 1
---

# 递归算法 :tada:
![](/images/arithmetic/digui1.png)
## 递归简介:gem:
#### 什么是递归呢？
一个函数在内部调用了其本身，那个这个函数就是递归函数，递归本质上是将原来的问题，转化为更小的同一问题，大白话就是：一个函数不断的调用自己，粗暴的理解：函数内部自己调用自己，这个函数就是递归函数。
::: tip 举例说明
从前有座山，山里有个庙，庙里有个老和尚在给小和尚讲故事，讲的是从前有座山，山里有个庙，庙里有个老和尚在给小和尚讲故事，讲的是从前有座山……

这就是一个典型的递归，在不考虑岁数等自身的条件下，这将是个死递归，没有终止条件。
:::


::: info 递归三要素如下：
- 一个问题的解可以分解为几个更小的同一题的解
- 分解后的子问题只存在数据不一样的问题。
- 存在递归终止条件
:::

::: info 递归其主要思想在于：
- 将问题分为规模更小的相同问题，持续分解，直到问题规模小到可以用非常简单直接的方式来解决
- 分解完后，再合并结果

![](/images/arithmetic/digui3.png)

因此，递归的编写首先可以定义一个函数，其次找到出口条件的同时还要找到规律。
:::

::: warning 使用递归容易产生栈溢出的错误
- 递归一定要有出口，否则就是"死循环"的递归
- 递归的次数不能太多
:::

## 递归案例 :gem:
::: tabs#fruit
@tab JavaScript
#### 案例：实现5的阶乘
![](/images/arithmetic/digui2.png)
```javascript
// 5的阶乘：5*4*3*2*1
function sum (num) {
  if (num <= 1) {
    return 1;
   } else {
    return (num * sum(num-1));
   }
};
```
@tab Python
#### 案例一：实现10的阶乘
```python
def jie_cheng(num:int):
  if num == 1:
    return 1
  else:
    return num * jie_cheng(num-1)
print(jie_cheng(10))
```
#### 案例二：爬楼梯
假设你正在爬楼梯。需要 n 阶你才能到达楼顶
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

![](/images/arithmetic/digui4.png)

根据这个数据结果发现规律，结果的1、2、3、5、8... 可以发现这个数据的结果就是斐波那契数列

```python
def pa_lou(n:int) -> int:
  if n < 0:
    return 0
  elif 0 <= n <= 2:
    return n
  else:
    return pa_lou(n-1) + pa_lou(n -2)
print(pa_lou(10)) 
```
:::

**轻松一刻**
<AudioPlayer
  src="/mp3/1.mp3"
  poster="/mp3/1.jpg"
  title="音乐"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。