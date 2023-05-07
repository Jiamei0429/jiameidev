<template><div><h1 id="_3-7-sass运算" tabindex="-1"><a class="header-anchor" href="#_3-7-sass运算" aria-hidden="true">#</a> 3.7 Sass运算 🎉</h1>
<figure><img src="/images/sass/scss13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Sass支持数字的加减乘除等运算 <code v-pre>(+, -, *, /)</code>，如果必要会在不同单位间转换值</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$size</span></span><span class="token punctuation">:</span>1000px<span class="token punctuation">;</span>
<span class="token selector">.root</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span> <span class="token operator">+</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.root1</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span> <span class="token operator">-</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.root2</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.root3</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$size</span> <span class="token operator">/</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.root4</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$size</span> <span class="token operator">-</span> 400<span class="token punctuation">)</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>运算过程中，不同单位不要参与运算</p>
<p>乘或除的时候不要带单位，加减可以带单位</p>
</div>
<p>在移动端适配的时候，通常会有REM计算</p>
<p>例如：根 <code v-pre>font-size</code>为 <code v-pre>50px</code>, 设计师给的数值是<code v-pre>340px</code></p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$fontREM</span></span><span class="token punctuation">:</span>50<span class="token punctuation">;</span>
<span class="token selector">.root</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span><span class="token punctuation">(</span>340rem <span class="token operator">/</span> <span class="token variable">$fontREM</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
<CodeDemo id="code-demo-25" type="normal" title="%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA" code="eJx9jsEOwiAMhl+lqZ7UucB2mrgn4WK2GUgmkkCMkezd7WAHXRYaQqH//7UNqPxjxAZFr1+g+6vE7mn8YLzEVhqgEIq1TJR0L38L3XhzjqyWkYuL0m5InKRqW6pIqpMkSppLGU/oOudokb3Tn6FhtX1fpNkty0BIXRSDAOk5x53UIvohYkTM5Smls827oQAep/wxPM8cga+JKk8cfgk6OH0BeWZpnQ==">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$size</span></span><span class="token punctuation">:</span>14px<span class="token punctuation">;</span>
<span class="token selector">#content </span><span class="token punctuation">{</span>
    <span class="token selector">h1 </span><span class="token punctuation">{</span> 
        <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.p1 </span><span class="token punctuation">{</span> 
        <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$size</span> <span class="token operator">-</span> 2px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.p2 </span><span class="token punctuation">{</span> 
        <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$size</span> <span class="token operator">+</span> 2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.p3 </span><span class="token punctuation">{</span> 
        <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$size</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/7.mp3"
  title="音乐"
  poster="/mp3/7.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


