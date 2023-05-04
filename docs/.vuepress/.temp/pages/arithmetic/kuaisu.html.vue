<template><div><h1 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序 🎉</h1>
<figure><img src="/images/arithmetic/kuaisu1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="算法思路" tabindex="-1"><a class="header-anchor" href="#算法思路" aria-hidden="true">#</a> 算法思路 💎</h2>
<p>&quot;快速排序&quot;的思想很简单，整个排序过程只需要四步：</p>
<ol>
<li>在数据集之中，选择一个元素作为&quot;基准&quot;（pivot）。</li>
<li>所有小于&quot;基准&quot;的元素，都移到&quot;基准&quot;的左边；所有大于&quot;基准&quot;的元素，都移到&quot;基准&quot;的右边。</li>
<li>对&quot;基准&quot;左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止</li>
<li>把所有的生成的新的数组元素合并在一起</li>
</ol>
<figure><img src="/images/arithmetic/kuaisu2.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="快速排序案例" tabindex="-1"><a class="header-anchor" href="#快速排序案例" aria-hidden="true">#</a> 快速排序案例 💎</h2>
<Tabs id="40" :data='[{"title":"JavaScript"},{"title":"Python"}]' tab-id="fruit">
<template #tab0="{ title, value, isActive }">
<h4 id="案例-将数组-4-2-5-7-3-9-1-实现从小到大排序" tabindex="-1"><a class="header-anchor" href="#案例-将数组-4-2-5-7-3-9-1-实现从小到大排序" aria-hidden="true">#</a> 案例：将数组[4,2,5,7,3,9,1]实现从小到大排序</h4>
<ul>
<li>第一步，选择中间的元素7作为&quot;基准&quot;。（基准值可以任意选择，但是选择中间的值比较容易理解。）
<img src="/images/arithmetic/kuaisu4.png" alt="" loading="lazy"></li>
<li>第二步，按照顺序，将每个元素与&quot;基准&quot;进行比较，形成两个子集，一个&quot;小于7&quot;，另一个&quot;大于等于7&quot;
<img src="/images/arithmetic/kuaisu5.png" alt="" loading="lazy"></li>
<li>第三步，对两个子集不断重复第一步和第二步，直到所有子集只剩下一个元素为止
<img src="/images/arithmetic/kuaisu6.png" alt="" loading="lazy"></li>
<li>第四步，合并所有的元素
<img src="/images/arithmetic/kuaisu7.png" alt="" loading="lazy"></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">quickSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token keyword">var</span> pivotIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> pivot <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>pivotIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pivot<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<h4 id="案例-将列表-5-7-9-1-6-4-10-2-3-8-实现从小到大排序" tabindex="-1"><a class="header-anchor" href="#案例-将列表-5-7-9-1-6-4-10-2-3-8-实现从小到大排序" aria-hidden="true">#</a> 案例：将列表[5，7，9，1，6，4，10，2，3，8]实现从小到大排序</h4>
<figure><img src="/images/arithmetic/kuaisu8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">quick_sort</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token operator">>=</span><span class="token number">2</span><span class="token punctuation">:</span>
    <span class="token comment"># 找到基准值</span>
    mid <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token operator">//</span><span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token comment"># 建立2个列表来存储比基准值小，大的数据</span>
    left<span class="token punctuation">,</span>right<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment"># 从原数据中，删除mid</span>
    data<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>mid<span class="token punctuation">)</span>
    <span class="token comment"># 遍历原有数据</span>
    <span class="token keyword">for</span> num <span class="token keyword">in</span> data<span class="token punctuation">:</span>
      <span class="token comment"># 如果数据比基准值大，就存放到right</span>
      <span class="token keyword">if</span> num <span class="token operator">>=</span> mid<span class="token punctuation">:</span>
        right<span class="token punctuation">.</span>append<span class="token punctuation">(</span>num<span class="token punctuation">)</span>
      <span class="token keyword">else</span><span class="token punctuation">:</span>
        left<span class="token punctuation">.</span>append<span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token comment"># 合并数据,注意合并时,不把 列表和数字进行拼接,所以把mid封装到一个列表中</span>
    <span class="token keyword">return</span> quick_sort<span class="token punctuation">(</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">+</span>quick_sort<span class="token punctuation">(</span>right<span class="token punctuation">)</span>
  <span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> data
<span class="token keyword">if</span> __name__ <span class="token operator">==</span><span class="token string">'__main__'</span><span class="token punctuation">:</span>
  data <span class="token operator">=</span>  <span class="token punctuation">[</span><span class="token number">5</span>，<span class="token number">7</span>，<span class="token number">9</span>，<span class="token number">1</span>，<span class="token number">6</span>，<span class="token number">4</span>，<span class="token number">10</span>，<span class="token number">2</span>，<span class="token number">3</span>，<span class="token number">8</span><span class="token punctuation">]</span>
  quick_sort<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<p><strong>轻松一刻</strong></p>
<AudioPlayer
  src="/mp3/2.mp3"
  title="音乐"
  poster="/mp3/2.jpg"
/>
<p><strong>视频教程</strong></p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


