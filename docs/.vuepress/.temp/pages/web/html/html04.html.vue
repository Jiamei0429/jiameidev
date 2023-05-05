<template><div><h1 id="_1-4-html5新增元素" tabindex="-1"><a class="header-anchor" href="#_1-4-html5新增元素" aria-hidden="true">#</a> 1.4 HTML5新增元素 🎉</h1>
<h2 id="容器元素-div" tabindex="-1"><a class="header-anchor" href="#容器元素-div" aria-hidden="true">#</a> 容器元素（div） 💎</h2>
<figure><img src="/images/html/html22.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>&lt;div&gt;</code> 可定义文档中的分区或节（division/section）</p>
<p><code v-pre>&lt;div&gt;</code> 标签可以把文档分割为独立的、不同的部分</p>
<p><code v-pre>&lt;div&gt;</code> 是一个块级元素。这意味着它的内容自动地开始一个新行</p>
<p><code v-pre>&lt;div&gt;</code>主要应用在布局上，作为布局的每个区域的容器</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
<CodeDemo id="code-demo-22" type="normal" title="%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA" code="eJytlM9r1EAUx/+VMeLNbLLigsRsQdoKnvTQgsJeZidvk8HJTEzeppbSg4jiTTyIePAgiBYFPejB339N19b/wpn82mzsL2hPSd6Pz/fNe2+yZUUYC8uz/HMrN5fX7txaJcawNJK+eRJBZTgcWSBHVmEDGugnIX4MSAmLaJoB6oD1tev2lSKm9kWIiQ33pjzX7tv2+jV7WcUJRT4WMLIIUxJBmtQbq0MIQm1rJUsag3blHDYSleJC/AYPMBoGkHMGdvFxkXDJkVNhZ4wKGPZ7bk1DjgKWVhSbxjrbd8rvwpXhZvVKSM/gKZeQbpUGQgqyR/que+FqbYtpGnLpEZfQKaravF0xTHNagAh4GKE3cJP7DWBM2d0wVVMZ2EwJlXrn6ZgFMOmiJM0bTilqo0q8fpt1Gn6sz9otlFxyDYoco9tGkJ6ACTagiVBUc4ytqahq42Aw7+Ki3rGll+4D1VMD6soXxq7+5dYUz0J/ohT+P2stc4IOHiXVlvGdekV9p7p4/lgFm+X6BjwnTNAs01ei2d5q7TvucjG1b+/Xs70PL2dvvvx9uOM7OuSgaL1789BPP/efvD801Eyhkez4zBY0nN2vP/bfPpg9fjT7+K1N6+QUo5uLP/28+/vdn53Xs1cvFko4rJxyKPP8788Xzlm/+U7VRd3W8l9nbf8DWzarGg==">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.container</span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token selector">.header</span><span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span>#abcdef<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token selector">.nav</span><span class="token punctuation">{</span>
      <span class="token property">margin-top</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span>#abcdef<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token selector">.main</span><span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> 
      <span class="token property">margin-top</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token selector">.main .left</span><span class="token punctuation">{</span>
      <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 55%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span>#abcdef<span class="token punctuation">;</span>      
     <span class="token punctuation">}</span>
    <span class="token selector">.main .right</span><span class="token punctuation">{</span>
      <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 40%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span>#abcdef<span class="token punctuation">;</span>      
     <span class="token punctuation">}</span>
    <span class="token selector">.footer</span><span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span> 
      <span class="token property">margin-top</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span>#abcdef<span class="token punctuation">;</span>  
     <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网站头部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网站导航<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网站主要内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网站右侧模块<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>网站底部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><VuePlayground title="%E9%9A%8F%E5%A0%82%E8%AE%AD%E7%BB%83" key="7a7c1942" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgPCEtLei%2FmemHjOWGmWh0bWzku6PnoIEtLT5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/7.mp3"
  title="音乐"
  poster="/mp3/7.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="新增布局标签" tabindex="-1"><a class="header-anchor" href="#新增布局标签" aria-hidden="true">#</a> 新增布局标签 💎</h2>
<figure><img src="/images/html/html23.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>HTML5是HTML最新的修订版本，2014年10月由万维网联盟（W3C）完成标准制定</p>
<p>在HTML5出现之前，我们一般采用DIV+CSS布局我们的页面。但是这样的布局方式不仅使我们的文档结构不够清晰，而且不利于搜索引擎爬虫对我们页面的爬取。为了解决上述缺点，HTML5新增了很多新的语义化标签</p>
<div class="hint-container info">
<p class="hint-container-title">H5新标签</p>
<ul>
<li><code v-pre>&lt;header&gt;&lt;/header&gt;</code> 头部</li>
<li><code v-pre>&lt;nav&gt;&lt;/nav&gt;</code> 导航</li>
<li><code v-pre>&lt;section&gt;&lt;/section&gt;</code>定义文档中的节,比如章节、页眉、页脚</li>
<li><code v-pre>&lt;aside&gt;&lt;/aside&gt;</code> 侧边栏</li>
<li><code v-pre>&lt;footer&gt;&lt;/footer&gt;</code> 脚部</li>
<li><code v-pre>&lt;article&gt;&lt;/article&gt;</code> 代表一个独立的、完整的相关内容块,例如一篇完整的论坛帖子，一篇博客文章，一个用户评论等</li>
</ul>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>div+css实现
<img src="/images/html/html24.png" alt="" loading="lazy"></p>
<p>H5新标签实现
<img src="/images/html/html25.png" alt="" loading="lazy"></p>
</div>

<CodeDemo id="code-demo-95" type="normal" title="%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA" code="eJylVF1r1EAU/StjxDfj7lrEErML0g/wSR9aUNiX2cndZHAyE5O725ZSENSlgq+KFKRUBMWH+qLQ7UN/zWZ1/4WTzKT7JVLo02TuPfece25usu9EGAvHc/wb64/Xtp492SBFoNWWfnESQWXYbDsg204ZAxrokxA/BqSERTTNADVge2vTXS0xVS5CTFx40eN9nX7qbj9011ScUOQdAW2HMCURZFH6aKMJQahjM8WSxqBTfQ47iUpxDr/DA4yaAfQ5A7e83CZccuRUuBmjApqNO/WKDTkKaK0r1ot1tV8z9zKV4Z59JKTwBSnZN7fizsMIPXKvnuw+qIIdyp6HqerJwGVKqNQjN2mHBdC9RJTdeKRRr9+qYgfmDHh/yh7TNOTSRZUU2BmFSrYxq2sZMmDIlVzucQ589SbvT3skXaGoZhLQxQVVmiJnAqaq/+DfXFn53wQIwi66VPBQeoTptwDpZcpMwiPaAaE9VIvqGQ9mtK/p+O7qkuO0IFwQ7SqlW7z2LuipUR3uKIwW7C6/+FLZr1Ub6dfsd+Z3VLBnttVsaCs/PRoN347OXo7Ovk9Ofk0+fR4ffhh//JG/O8+Pj38fvc6//Jy8+mYYNL6s1ctn99y3WzTHY2q1vM1ZaDl8CzRS+eBNfjrUIqOLr38uhuOTgZbKDwd+zWCNi0rNN4O8Qsvn78uWLb7wb31rG+Zn5Bz8BYm1ptg=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">header</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #abcdef<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token selector">div</span> <span class="token punctuation">{</span>
      <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token selector">section</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #abcdef<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 70%<span class="token punctuation">;</span>
      <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token selector">article</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #F33<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0px auto<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token selector">aside</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #abcdef<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 28%<span class="token punctuation">;</span>
      <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token selector">footer</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #abcdef<span class="token punctuation">;</span>
      <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
      <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>定义一个页面或是区域的头部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>定义一个区域<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">></span></span>定义页面内容的侧边框部分<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>定义一个页面或是区域的底部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><VuePlayground title="%E9%9A%8F%E5%A0%82%E8%AE%AD%E7%BB%83" key="1c337c34" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgPCEtLei%2FmemHjOWGmWh0bWzku6PnoIEtLT5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/8.mp3"
  title="音乐"
  poster="/mp3/8.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="视频和音频标签" tabindex="-1"><a class="header-anchor" href="#视频和音频标签" aria-hidden="true">#</a> 视频和音频标签 💎</h2>
<figure><img src="/images/html/html26.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>HTML5未出来之前，在线的音频和视频都是借助Flash或者第三方工具实现的，现在HTML5也支持了这方面的功能。在一个支持HTML5的浏览器中，不需要安装任何插件就能播放音频和视频。</p>
<h3 id="视频" tabindex="-1"><a class="header-anchor" href="#视频" aria-hidden="true">#</a> 视频 👻</h3>
<p>Video标签定义视频，比如电影片段或其他视频流</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>movie.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
    您的浏览器不支持 video 标签。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>src</code></td>
<td>要播放的视频的<code v-pre>URL</code></td>
</tr>
<tr>
<td><code v-pre>autoplay</code></td>
<td>自动播放</td>
</tr>
<tr>
<td><code v-pre>controls</code></td>
<td>显示控件,比如播放按钮</td>
</tr>
<tr>
<td><code v-pre>loop</code></td>
<td>循环播放</td>
</tr>
<tr>
<td><code v-pre>muted</code></td>
<td>输出被静音</td>
</tr>
<tr>
<td><code v-pre>preload</code></td>
<td>页面加载的时候,自动预加载资源</td>
</tr>
<tr>
<td><code v-pre>height</code></td>
<td>设置播放器高度</td>
</tr>
<tr>
<td><code v-pre>width</code></td>
<td>设置播放器宽度</td>
</tr>
<tr>
<td><code v-pre>poster</code></td>
<td>视频封面</td>
</tr>
</tbody>
</table>
<h3 id="音频" tabindex="-1"><a class="header-anchor" href="#音频" aria-hidden="true">#</a> 音频 👻</h3>
<p>Audio 标签定义声音，比如音乐或其他音频流</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>someaudio.mp3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    您的浏览器不支持 audio 标签。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>src</code></td>
<td>要播放的音频的<code v-pre>URL</code></td>
</tr>
<tr>
<td><code v-pre>autoplay</code></td>
<td>自动播放</td>
</tr>
<tr>
<td><code v-pre>controls</code></td>
<td>显示控件,比如播放按钮</td>
</tr>
<tr>
<td><code v-pre>loop</code></td>
<td>循环播放</td>
</tr>
<tr>
<td><code v-pre>muted</code></td>
<td>输出被静音</td>
</tr>
<tr>
<td><code v-pre>preload</code></td>
<td>页面加载的时候,自动预加载资源</td>
</tr>
</tbody>
</table>
<div class="hint-container info">
<p class="hint-container-title">source标签</p>
<p><code v-pre>&lt;source&gt;</code>标签为媒介元素（比如 <code v-pre>&lt;video&gt;</code>和 <code v-pre>&lt;audio&gt;</code>）定义媒介资源。</p>
<p><code v-pre>&lt;source&gt;</code>标签允许您规定可替换的视频/音频文件供浏览器根据它对媒体类型或者编解码器的支持进行选择</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horse.ogg<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horse.mp3<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    你的浏览器不支持此标签
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>

<CodeDemo id="code-demo-294" type="normal" title="%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA" code="eJyrVsooyc1RslKySSxNycxXSM7PKynKzym2i8lTUFCwKc4vLUpOVSguSraNUdLPLTDWN9IDkjFKChAFCk/2Lng+q+XZ1v4XyzuezlzxZEfvsynrn/U0Plu75NmC9udr98Xk2eiDjQZqsCnLTElF2KFQnplSkgE02NDAQDVGCWwiqo0ZJSUFxVb6+skpeXrJeUlZhnppKcV6iQWZermZupm56XrJ+bn6QGZuYk6OvqV5YrJRSnKyobGZeaqBcWKyqYWBkYFJillyomWiuZEJ0OEmCIc/a1qB1eEKkHCAOP5xQxPI/WBnA/Up1QIAKfd6SQ==">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/mp3/2.mp3<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    你的浏览器不支持此标签
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    您的浏览器不支持 audio 标签。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><VuePlayground title="%E9%9A%8F%E5%A0%82%E8%AE%AD%E7%BB%83" key="e395dd52" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgPCEtLei%2FmemHjOWGmWh0bWzku6PnoIEtLT5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/1.mp3"
  title="音乐"
  poster="/mp3/1.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="新增部分不常用标签" tabindex="-1"><a class="header-anchor" href="#新增部分不常用标签" aria-hidden="true">#</a> 新增部分不常用标签 💎</h2>
<figure><img src="/images/html/html27.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="figure" tabindex="-1"><a class="header-anchor" href="#figure" aria-hidden="true">#</a> figure 👻</h3>
<p>用于对元素进行组合。多用于图片与图片描述组合</p>

<CodeDemo id="code-demo-325" type="normal" title="figure" code="eJyrVsooyc1RslKySctMLy1KtYvJUwACm8zcdIXiomTbGCX9zNzE9NRi/Zz89Hy9grz0GCWFxJwSoAREw7MF7c/X7gMKlmSW5KRiCpdnppRkAIWNDAwKKoCmwSwAKktOLCjJzM+zg+h4PqsFqOnlohk2+khyMXlgLsRlSrUAOKFDKg==">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/images/logo.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>figure标签<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>figure标签<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200px<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">></span></span>figure的标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><h3 id="details" tabindex="-1"><a class="header-anchor" href="#details" aria-hidden="true">#</a> details 👻</h3>
<p><code v-pre>&lt;details&gt;</code>用于描述文档或文档的某个部分的细节，类似于下拉列表</p>

<CodeDemo id="code-demo-334" type="normal" title="details" code="eJyrVsooyc1RslKySUktSczMKbaLyVNQULApLs3NTSyqtHvW0/503azns1qeLWh/uWjG+z09z6eseNax/XnTzqftuyGCz6Zve7px6vMlu57s6H45dxFIcWfDszmdT9tan67bCdQCYTztX/9k99JnM4Dk7id7pz7du+jpnn6gYoisjT7MSogDUjLLICwgu8AOouZZf/+L/Rts9AugavQhioA03O02irq6Ck/3Tn66aN6LdfvyC1Lznm6c96xhOdCNQIdADIAY9nL3jBfrlkAcrqCrC9ILNUYBpG2Ih4NSLQAt2wWk">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span>指定的标题，用户点击标题时展示下面的所有内容，内容可以是任何形式的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>内容描述<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 当增设open属性时，描述内容默认展示 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span> <span class="token attr-name">open</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span>指定的标题，用户点击标题时展示下面的所有内容，内容可以是任何形式的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>内容描述<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><h3 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> mark 👻</h3>
<p>主要用来在视觉上向用户呈现那些需要突出的文字。<code v-pre>&lt;mark&gt;</code>标签的一个比较典型的应用就是在搜索结果中向用户高亮显示搜索关键词</p>

<CodeDemo id="code-demo-343" type="normal" title="mark" code="eJyrVsooyc1RslKyKbB7snfBsxnrbXITi7Ltni5Z/nLq/het+230IfwJ09/vmW+jX2AXk6dUCwDAXRoT">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>你是<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">></span></span>大长腿<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">></span></span>吗？<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeDemo><h3 id="meter" tabindex="-1"><a class="header-anchor" href="#meter" aria-hidden="true">#</a> meter 👻</h3>
<p>定义度量衡。仅用于已知最大和最小值的度量</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>low：最低临界点</p>
<p>high：最高临界点</p>
<p>Min：最小值</p>
<p>Max：最大值</p>
<p>Value：当前值</p>
</div>

<CodeDemo id="code-demo-369" type="normal" title="meter" code="eJyrVsooyc1RslKyyU0tSS1SyM3Ms41RMohRUshNrACyDA1A7LLEnNJUIM/CEMjJyS8HMo1A4hmZ6RkgYSDbzkYfbIJdTJ5SLQBvshnh">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meter</span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>81<span class="token punctuation">"</span></span> <span class="token attr-name">low</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">high</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>80<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>meter</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeDemo><h3 id="progress" tabindex="-1"><a class="header-anchor" href="#progress" aria-hidden="true">#</a> progress 👻</h3>
<p>运行中的进程。可以使用 <code v-pre>&lt;progress&gt;</code>标签来显示 JavaScript中耗费时间的函数的进程</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>max：定义完成值</p>
<p>value：定义当前值</p>
</div>

<CodeDemo id="code-demo-386" type="normal" title="progress" code="eJyrVsooyc1RslKyKSjKTy9KLS5WyE2ssI1RMjQwiFFSKEvMKU0F8oyAHDsbfZgau5g8pVoAQysTTw==">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>progress</span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>progress</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeDemo><h3 id="datalist" tabindex="-1"><a class="header-anchor" href="#datalist" aria-hidden="true">#</a> datalist 👻</h3>
<p>定义可选数据的列表。与 <code v-pre>input</code>元素配合使用，就可以制作出输入值的下拉列表。</p>
<p><code v-pre>datalist</code> 及其选项不会被显示出来，它仅仅是合法的输入值列表。</p>
<p>请使用 <code v-pre>input</code> 元素的 <code v-pre>list</code>属性来绑定 <code v-pre>datalist</code></p>

<CodeDemo id="code-demo-401" type="normal" title="datalist" code="eJyrVsooyc1RslKyycwrKC1RyEyxjVHKrXROLIpRUsjJLC4BcpMTi4qBPH27mDyblMSSRJAwRCFEBiiuoKBgk19Qkpmfp1CWmFOaCpRz8g3HJeWWX5SCSy4sP6csHyxpow+zDMhRqgUA1yQ45Q==">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myCar<span class="token punctuation">"</span></span> <span class="token attr-name">list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cars<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datalist</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cars<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>BMW<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Ford<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Volvo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>datalist</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><VuePlayground title="%E9%9A%8F%E5%A0%82%E8%AE%AD%E7%BB%83" key="7cc0cbef" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgPCEtLei%2FmemHjOWGmWh0bWzku6PnoIEtLT5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/3.mp3"
  title="音乐"
  poster="/mp3/3.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


