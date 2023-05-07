<template><div><h1 id="_3-4-导入和静默注释" tabindex="-1"><a class="header-anchor" href="#_3-4-导入和静默注释" aria-hidden="true">#</a> 3.4 导入和静默注释 🎉</h1>
<h2 id="导入sass文件" tabindex="-1"><a class="header-anchor" href="#导入sass文件" aria-hidden="true">#</a> 导入Sass文件 💎</h2>
<figure><img src="/images/sass/scss8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>css</code>有一个特别不常用的特性，即<code v-pre>@import</code>规则，它允许在一个<code v-pre>css</code>文件中导入其他<code v-pre>css</code>文件。然而，后果是只有执行到<code v-pre>@import</code>时，浏览器才会去下载其他<code v-pre>css</code>文件，这导致页面加载起来特别慢。</p>
<p><code v-pre>sass</code>也有一个<code v-pre>@import</code>规则，但不同的是，<code v-pre>sass</code>的<code v-pre>@import</code>规则在生成<code v-pre>css文</code>件时就把相关文件导入进来。这意味着所有相关的样式被归纳到了同一个<code v-pre>css</code>文件中，而无需发起额外的下载请求。</p>
<p>使用<code v-pre>sass</code>的<code v-pre>@import</code>规则并不需要指明被导入文件的全名。你可以省略<code v-pre>.sass</code>或<code v-pre>.scss</code>文件后缀</p>
<figure><img src="/images/sass/scss9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>跟原生的<code v-pre>css</code>不同，<code v-pre>sass</code>允许<code v-pre>@import</code>命令写在<code v-pre>css</code>规则内</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token comment">/* aside.scss */</span>
<span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">"aside"</span>   <span class="token comment">/* 导入方式1 */</span>
<span class="token selector">div </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
    <span class="token keyword">@import</span> <span class="token string">"aside"</span>   <span class="token comment">/* 导入方式2 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>通过方式1导入后<code v-pre>a</code>和<code v-pre>div</code>属于同级关系，而通过方式2导入后<code v-pre>a</code>和<code v-pre>div</code>属于子父级关系，<code v-pre>a</code>被解析到了<code v-pre>div</code>里面</p>
</div>
<h2 id="静默注释" tabindex="-1"><a class="header-anchor" href="#静默注释" aria-hidden="true">#</a> 静默注释 💎</h2>
<figure><img src="/images/sass/scss10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>css</code>中注释的作用包括帮助你组织样式、以后你看自己的代码时明白为什么这样写，以及简单的样式说明。但是，你并不希望每个浏览网站源码的人都能看到所有注释。</p>
<p><code v-pre>sass</code>另外提供了一种不同于<code v-pre>css</code>标准注释格式<code v-pre>/* ... */</code>的注释语法，即静默注释，其内容不会出现在生成的<code v-pre>css</code>文件中。静默注释的语法跟JavaScript、Java等类C的语言中单行注释的语法相同，它们以 <code v-pre>//</code>开头，注释内容直到行末。</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token selector">body </span><span class="token punctuation">{</span>
 <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span> <span class="token comment">// 这种注释内容不会出现在生成的css文件中</span>
 <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/* 这种注释内容会出现在生成的css文件中 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，<code v-pre>css</code>的标准注释格式<code v-pre>/* ... */</code>内的注释内容亦可在生成的<code v-pre>css</code>文件中抹去。当注释出现在原生<code v-pre>css</code>不允许的地方，如在<code v-pre>css</code>属性或选择器中，<code v-pre>sass</code>将不知如何将其生成到对应<code v-pre>css</code>文件中的相应位置，于是这些注释被抹掉</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token selector">body </span><span class="token punctuation">{</span>
  color <span class="token comment">/* 这块注释内容不会出现在生成的css中 */</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/4.mp3"
  title="音乐"
  poster="/mp3/4.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


