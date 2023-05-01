<template><div><h1 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序  🎉</h1>
<figure><img src="/images/arithmetic/maopao1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>冒泡排序是一种简单的排序算法</p>
<h2 id="算法思路" tabindex="-1"><a class="header-anchor" href="#算法思路" aria-hidden="true">#</a> 算法思路 💎</h2>
<ul>
<li>
<p>比较相邻的元素。如果第一个比第二个大，就交换它们两个；</p>
</li>
<li>
<p>对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；</p>
</li>
<li>
<p>针对所有的元素重复以上的步骤，这时候最后一个元素是最大的，所以就不需要参与比较大小了；</p>
</li>
<li>
<p>持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较</p>
<figure><img src="/images/arithmetic/maopao2.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ul>
<h2 id="冒泡排序案例" tabindex="-1"><a class="header-anchor" href="#冒泡排序案例" aria-hidden="true">#</a> 冒泡排序案例 💎</h2>
<Tabs id="40" :data='[{"title":"JavaScript"},{"title":"Python"}]' tab-id="fruit">
<template #tab0="{ title, value, isActive }">
<h4 id="案例-将数组-40-30-20-10-实现从小到大排序" tabindex="-1"><a class="header-anchor" href="#案例-将数组-40-30-20-10-实现从小到大排序" aria-hidden="true">#</a> 案例：将数组[40,30,20,10]实现从小到大排序</h4>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="/images/arithmetic/maopao3.png" alt="" loading="lazy"></h2>
<h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> <img src="/images/arithmetic/maopao4.png" alt="" loading="lazy"></h2>
<figure><img src="/images/arithmetic/maopao5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 相邻元素两两对比，元素交换，大的元素交换到后面</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"循环次数"</span><span class="token operator">+</span>j<span class="token operator">+</span><span class="token string">":"</span><span class="token operator">+</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"第"</span><span class="token operator">+</span>i<span class="token operator">+</span><span class="token string">"轮结束"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<h4 id="案例-将列表-5-2-6-4-7-3-1-实现从小到大排序" tabindex="-1"><a class="header-anchor" href="#案例-将列表-5-2-6-4-7-3-1-实现从小到大排序" aria-hidden="true">#</a> 案例：将列表[5，2，6，4，7，3，1]实现从小到大排序</h4>
<figure><img src="/images/arithmetic/maopao6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">bubble_sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span><span class="token builtin">list</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token boolean">None</span><span class="token punctuation">:</span>
  <span class="token comment"># 获取数据的长度</span>
  length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
  <span class="token comment"># 最外层循环</span>
  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 里面循环</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>i<span class="token punctuation">)</span><span class="token punctuation">:</span>
      <span class="token comment"># 判断数据是否需要交换</span>
      <span class="token keyword">if</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> nums<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span><span class="token string">'__main__'</span><span class="token punctuation">:</span>
  nums <span class="token operator">=</span>  <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
  bubble_sort<span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
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


