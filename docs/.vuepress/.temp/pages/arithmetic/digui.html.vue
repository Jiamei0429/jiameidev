<template><div><h1 id="递归算法" tabindex="-1"><a class="header-anchor" href="#递归算法" aria-hidden="true">#</a> 递归算法 🎉</h1>
<figure><img src="/images/arithmetic/digui1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="递归简介" tabindex="-1"><a class="header-anchor" href="#递归简介" aria-hidden="true">#</a> 递归简介💎</h2>
<h4 id="什么是递归呢" tabindex="-1"><a class="header-anchor" href="#什么是递归呢" aria-hidden="true">#</a> 什么是递归呢？</h4>
<p>一个函数在内部调用了其本身，那个这个函数就是递归函数，递归本质上是将原来的问题，转化为更小的同一问题，大白话就是：一个函数不断的调用自己，粗暴的理解：函数内部自己调用自己，这个函数就是递归函数。</p>
<div class="hint-container tip">
<p class="hint-container-title">举例说明</p>
<p>从前有座山，山里有个庙，庙里有个老和尚在给小和尚讲故事，讲的是从前有座山，山里有个庙，庙里有个老和尚在给小和尚讲故事，讲的是从前有座山……</p>
<p>这就是一个典型的递归，在不考虑岁数等自身的条件下，这将是个死递归，没有终止条件。</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">递归三要素如下：</p>
<ul>
<li>一个问题的解可以分解为几个更小的同一题的解</li>
<li>分解后的子问题只存在数据不一样的问题。</li>
<li>存在递归终止条件</li>
</ul>
</div>
<div class="hint-container info">
<p class="hint-container-title">递归其主要思想在于：</p>
<ul>
<li>将问题分为规模更小的相同问题，持续分解，直到问题规模小到可以用非常简单直接的方式来解决</li>
<li>分解完后，再合并结果</li>
</ul>
<figure><img src="/images/arithmetic/digui3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>因此，递归的编写首先可以定义一个函数，其次找到出口条件的同时还要找到规律。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">使用递归容易产生栈溢出的错误</p>
<ul>
<li>递归一定要有出口，否则就是&quot;死循环&quot;的递归</li>
<li>递归的次数不能太多</li>
</ul>
</div>
<h2 id="递归案例" tabindex="-1"><a class="header-anchor" href="#递归案例" aria-hidden="true">#</a> 递归案例 💎</h2>
<Tabs id="79" :data='[{"title":"JavaScript"},{"title":"Python"}]' tab-id="fruit">
<template #tab0="{ title, value, isActive }">
<h4 id="案例-实现5的阶乘" tabindex="-1"><a class="header-anchor" href="#案例-实现5的阶乘" aria-hidden="true">#</a> 案例：实现5的阶乘</h4>
<figure><img src="/images/arithmetic/digui2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 5的阶乘：5*4*3*2*1</span>
<span class="token keyword">function</span> <span class="token function">sum</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>num <span class="token operator">*</span> <span class="token function">sum</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<h4 id="案例一-实现10的阶乘" tabindex="-1"><a class="header-anchor" href="#案例一-实现10的阶乘" aria-hidden="true">#</a> 案例一：实现10的阶乘</h4>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">jie_cheng</span><span class="token punctuation">(</span>num<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> num <span class="token operator">*</span> jie_cheng<span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>jie_cheng<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例二-爬楼梯" tabindex="-1"><a class="header-anchor" href="#案例二-爬楼梯" aria-hidden="true">#</a> 案例二：爬楼梯</h4>
<p>假设你正在爬楼梯。需要 n 阶你才能到达楼顶
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？</p>
<figure><img src="/images/arithmetic/digui4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>根据这个数据结果发现规律，结果的1、2、3、5、8... 可以发现这个数据的结果就是斐波那契数列</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">pa_lou</span><span class="token punctuation">(</span>n<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token keyword">elif</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> n <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> n
  <span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> pa_lou<span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> pa_lou<span class="token punctuation">(</span>n <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>pa_lou<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<p><strong>轻松一刻</strong></p>
<AudioPlayer
  src="/mp3/GoTime.mp3"
  title="英雄联盟"
  poster="https://img0.baidu.com/it/u=2811220644,2164135624&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
/>
<p><strong>视频教程</strong></p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


