<template><div><h1 id="_3-8-scss控制指令" tabindex="-1"><a class="header-anchor" href="#_3-8-scss控制指令" aria-hidden="true">#</a> 3.8 Scss控制指令 🎉</h1>
<figure><img src="/images/scss/scss14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>Sass</code>提供了一些基础的控制指令，比如在满足一定条件时引用样式，或者设定范围重复输出格式。控制指令是一种高级功能，日常编写过程中并不常用到</p>
<h2 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> @if 💎</h2>
<p>当 <code v-pre>@if</code> 的表达式返回值不是 <code v-pre>false</code> 或者 <code v-pre>null</code> 时，条件成立，输出 <code v-pre>{}</code> 内的代码</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token selector">1+1==2 </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token keyword">@if</span> <span class="token selector">5 &lt; 3 </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 2px dotted<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token keyword">@if</span> <span class="token selector">null </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 3px double<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> @for 💎</h2>
<p><code v-pre>@for</code> 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">3 </span><span class="token punctuation">{</span>
  <span class="token selector">.item-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 2px <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
<CodeDemo id="code-demo-23" type="normal" title="%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA" code="eJxtUNtOhDAQ/ZVJd2O8EVI2vmAhfghPUpCJ3Q5pq1EJ/+6AENkuJ02mcztnZgbRhbMRuVAaPwF1UYmabGhsqERZWWCovpRSqrRffTLLb/YMlhln2UTBbC942gRVOjOplKXZikfha+95lsMyAgx/hf1iJ7xgC/JBFkW2Zle8ktONy0H2X+DJoAbX6Of/mvGS5AkUnGKOmgwxRY/2/bpzMWQ2TQYjBoM+JD58myYHS7bZ0MzKLTk4IrSOziAhdI4+3rrrQSbc5DZ0Sd2h0beH4Yjj3V7VhJbvlXj8YU2Z8fr3LBEJRxeYXdhbkZ8YfwEm/odV">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>111<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>21<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>22<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>23<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token selector">#content </span><span class="token punctuation">{</span>
    <span class="token selector">p</span><span class="token punctuation">{</span>
        <span class="token keyword">@if</span> <span class="token selector">1+1==2 </span><span class="token punctuation">{</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">@if</span> <span class="token selector">5 &lt; 3 </span><span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token selector">ol</span><span class="token punctuation">{</span>
        <span class="token selector">li</span><span class="token punctuation">{</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">3 </span><span class="token punctuation">{</span>
                &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span><span class="token variable">#{$i}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> 
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/8.mp3"
  title="音乐"
  poster="/mp3/8.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


