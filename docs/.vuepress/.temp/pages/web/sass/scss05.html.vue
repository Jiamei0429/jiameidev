<template><div><h1 id="_3-5-scss混合" tabindex="-1"><a class="header-anchor" href="#_3-5-scss混合" aria-hidden="true">#</a> 3.5 Scss混合 🎉</h1>
<figure><img src="/images/scss/scss11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果你的整个网站中有几处小小的样式类似（例如一致的颜色和字体），那么使用变量来统一处理这种情况是非常不错的选择。但是当你的样式变得越来越复杂，你需要大段大段的重用样式的代码，独立的变量就没办法应付这种情况了。你可以通过<code v-pre>sass</code>的混合实现大段样式的重用</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">rounded-corners </span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.notice </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #00aa00<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> rounded-corners<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混合传参" tabindex="-1"><a class="header-anchor" href="#混合传参" aria-hidden="true">#</a> 混合传参  💎</h3>
<p>混合并不一定总得生成相同的样式。可以通过在<code v-pre>@include</code>时给混合传参，来定制混合生成的精确样式。</p>
<p>并且，我们还可以指定参数默认值，当参数不传递的时候，可以使用默认值</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">link-colors</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$hover</span></span><span class="token punctuation">:</span>blue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$hover</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.box1</span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">link-colors</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">link-colors</span><span class="token punctuation">(</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
<CodeDemo id="code-demo-20" type="normal" title="%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA" code="eJx1UUFOhDAUvcpPZ2KcBCQE3TBIZsMt2ABtoBloSQuTScis5wbq0rj3AG68jRO9hbUUrYMSkv/b9/577euAqq6pUYgiTHdA8W2KCs46wroUxSkD9UWZ6GhRE7PUW5Ufnx6PH08PkadaC2jj093x7fk+8tpp3Ps9H2WSYhK/v74oRLcpizzlripykCykVMfZNHRPGQjeM0ywW3DBiJAwfGnkXGAiXJFh2ssQbtr9Wm9nxbbUA4pecxGCIFghh5QZtZqy7YjJy6WuDiwrviMiVNTVqA5gpkeGlga4CDVvotg0DRia8lL/wkQ4sU0A9nDlwwA/S0tvEQTB+gzaUFbUPSbneRhX4zy17Uy6yURJmZvzruNNCP7VNWn+9bBTyuuerOYupujns281f4JFkiS2058ureodLjJWfpuNQaLDJ/Jtz4Q=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">></span></span>边<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">rounded-corners </span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@mixin</span> <span class="token function">link-colors</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$hover</span></span><span class="token punctuation">:</span>red<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$hover</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">#content </span><span class="token punctuation">{</span>
    <span class="token selector">article </span><span class="token punctuation">{</span>
        <span class="token selector">h1 </span><span class="token punctuation">{</span> 
            <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span> 
            <span class="token keyword">@include</span> rounded-corners<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">p </span><span class="token punctuation">{</span> 
            <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1.4em<span class="token punctuation">;</span> 
            <span class="token keyword">@include</span> <span class="token function">link-colors</span><span class="token punctuation">(</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token selector">aside </span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #EEE<span class="token punctuation">;</span> 
        <span class="token keyword">@include</span> <span class="token function">link-colors</span><span class="token punctuation">(</span>pink<span class="token punctuation">,</span>orange<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/5.mp3"
  title="音乐"
  poster="/mp3/5.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


