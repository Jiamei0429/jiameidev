<template><div><h1 id="_3-2-sass变量" tabindex="-1"><a class="header-anchor" href="#_3-2-sass变量" aria-hidden="true">#</a> 3.2 Sass变量 🎉</h1>
<figure><img src="/images/sass/scss6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>sass</code>让人们受益的一个重要特性就是它为css引入了变量。你可以把反复使用的css属性值 定义成变量，然后通过变量名来引用它们，而无需重复书写这一属性值。或者，对于仅使用过一 次的属性值，你可以赋予其一个易懂的变量名，让人一眼就知道这个属性值的用途</p>
<p><code v-pre>sass</code>使用<code v-pre>$</code>符号来标识变量</p>
<p>比如<code v-pre>$highlight-color</code>和<code v-pre>$sidebar-width</code>。为什么选择<code v-pre>$</code> 符号呢？因为它好认、更具美感，且在CSS中并无他用，不会导致与现存或未来的css语法冲突</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$highlight-color</span></span><span class="token punctuation">:</span> #F90<span class="token punctuation">;</span>
<span class="token selector">.selected </span><span class="token punctuation">{</span>
 <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token variable">$highlight-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$highlight-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">默认变量值</p>
<p>一般情况下，你反复声明一个变量，只有最后一处声明有效且它会覆盖前边的值</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$link-color</span></span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$link-color</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$link-color</span><span class="token punctuation">;</span> <span class="token comment">// red</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container info">
<p class="hint-container-title">!default说明</p>
<p><code v-pre>!default</code> 作用，是将这次变量值的优先级降到最低</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$link-color</span></span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$link-color</span></span><span class="token punctuation">:</span> red <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$link-color</span><span class="token punctuation">;</span> <span class="token comment">// blue</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>

<CodeDemo id="code-demo-28" type="normal" title="%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA" code="eJx9zTsKgDAMgOGrlOAoirr5OkkWqfUBtUJTXMS7m1ocBDVjvoR/h8ktGkqo+3kTUndEDYJWg0NoszrlbYvmgVIZpyxz/sp2Hif/XNwKMZAk4kYkV73a0qq+QpP4yI5G8IS9CM52MIfMz8EV+nY4TuVISpg=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token selector">.left</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/2.mp3"
  title="音乐"
  poster="/mp3/2.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


