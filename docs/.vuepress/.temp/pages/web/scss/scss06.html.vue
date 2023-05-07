<template><div><h1 id="_3-6-scss继承" tabindex="-1"><a class="header-anchor" href="#_3-6-scss继承" aria-hidden="true">#</a> 3.6 Scss继承 🎉</h1>
<figure><img src="/images/scss/scss12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>使用<code v-pre>sass</code>的时候，最后一个减少重复的主要特性就是选择器继承。选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式。这个通过<code v-pre>@extend</code>语法实现</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token selector">.error </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.seriousError </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .error<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常使用继承会让你的<code v-pre>css</code>美观、整洁。因为继承只会在生成<code v-pre>css</code>时复制选择器，而不会复制大段的<code v-pre>css</code>属性。</p>
<div class="hint-container tip">
<p class="hint-container-title">思考继承和混合的区别</p>
<p>继承的原理并不是通过样式属性的复制来实现的，而是通过选择器的复制实现的，所以跟混合相比，继承生成的css代码相对更少。</p>
</div>

<CodeDemo id="code-demo-18" type="normal" title="%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA" code="eJxVjdsKwjAMhl8lxFvnqHq11eGD7MatxRZ6oq06GHt3I6tMQ8iJ/N8/o8rWYINc6Cdocelx9C5Ll3vsegcUXLGO8Zpq2UN35HWgjdckoo57TGNKRNkVMczrr2Iwwzp+YvTGxwaiFO12HHwUkq4sTJC80QIG85BtkS1rC3+cq5zIRRD+h2Nv8a5dNficvSXc4Sztl7L5VC8tsmrgFKaiJQdKXN5R7Ezz">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token selector">#content </span><span class="token punctuation">{</span>
    <span class="token selector">h1 </span><span class="token punctuation">{</span> 
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
    <span class="token selector">p </span><span class="token punctuation">{</span> 
        <span class="token keyword">@extend</span> h1<span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1.4em<span class="token punctuation">;</span> 
        <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/6.mp3"
  title="音乐"
  poster="/mp3/6.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


