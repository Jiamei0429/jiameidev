<template><div><h1 id="_2-1-初体验css" tabindex="-1"><a class="header-anchor" href="#_2-1-初体验css" aria-hidden="true">#</a> 2.1 初体验CSS 🎉</h1>
<figure><img src="/images/css/css1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>从HTML被发明开始，样式就以各种形式存在。不同的浏览器结合它们各自的样式语言为用户提供页面效果的控制。最初的HTML只包含很少的显示属性。</p>
<p>随着HTML的成长，为了满足页面设计者的要求，HTML添加了很多显示功能。但是随着这些功能的增加，HTML变的越来越杂乱，而且HTML页面也越来越臃肿。于是CSS便诞生了。</p>
<p>在这里，首先我们要了解几个概念</p>
<div class="hint-container info">
<p class="hint-container-title">CSS概念</p>
<p>CSS（Cascading Style Sheets）层叠样式表，又叫级联样式表，简称样式表</p>
<p>CSS文件后缀名为<code v-pre>.css</code></p>
<p>CSS用于HTML文档中元素样式的定义</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">为什么需要CSS</p>
<p>使用css的目的就是让网页具有美观一致的页面</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">CSS和HTML之间的关系</p>
<p>HTML用于构建网页的结构</p>
<p>CSS用于构建HTML元素的样式</p>
<p>HTML是页面的内容组成，CSS是页面的表现</p>
</div>
<h2 id="css语法" tabindex="-1"><a class="header-anchor" href="#css语法" aria-hidden="true">#</a> css语法 💎</h2>
<p>CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明</p>
<figure><img src="/images/css/css2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>选择器通常是您需要改变样式的 HTML 元素</p>
<p>每条声明由一个属性和一个值组成</p>
<p>属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">h1</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们简单看一下使用css后的具体效果：</p>

<CodeDemo id="code-demo-64" type="normal" title="%E4%BD%BF%E7%94%A8css%E4%B9%8B%E5%89%8D%E7%9A%84%E6%95%88%E6%9E%9C" code="eJyrVsooyc1RslKyyTCxe9Yx8dmM9c96Ol9OWmejDxSIybNJKi0pyc+zgwlCuUCJDFOo+hf7Jj9tXfpsYRtQiylIJjOvoLREoaSyINU2RqkktaIkRgkorFQLAIGMMCo=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>我是按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">></span></span>我是输入框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>
<CodeDemo id="code-demo-67" type="normal" title="%E4%BD%BF%E7%94%A8css%E4%B9%8B%E5%90%8E%E7%9A%84%E6%95%88%E6%9E%9C" code="eJxtkEFOwzAQRa9imQ1IjXDaVJVM6UmySWInthrGlmOLQtUlCCQ2wIYtC7ZwA25DBLfAURwCFd75/T/zZ2aLhT2rMcVLkazam/v26a29u/16eF0ee5DCMnfWKlgNMHy9IObB//n++HH10j5f+5J5p0jQziJ7oflpii3f2BR7jCe4aBqfJBK0TQH5V6haGYq0hPVJT/KsWFdGOWBREPPacS/uUkihDx+qR69v4YyuO18nnEtmBUUxIXoTkOCyEpai2YhyZRg3kcmYdA1F01HYn+GAEBK0AMqyHGYS871tDGfBXCqwUSMvOf0V290jYrxQJrNSAUW1BB5Z4QMrMTTtLzjs+XfQeOwVFp3+s2gyIp0xJqGixBt/oHK2C6YIFAx364N8gt6gRtWSIVPlh1MST1Aym6B4sTjqB8S7b+x/w3w=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>我是按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">></span></span>我是输入框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">h4</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">button</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>#000<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h5</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> line-through<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span>0 20px<span class="token punctuation">;</span>
    <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgb</span><span class="token punctuation">(</span>201<span class="token punctuation">,</span> 43<span class="token punctuation">,</span> 177<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><VuePlayground title="%E9%9A%8F%E5%A0%82%E8%AE%AD%E7%BB%83" key="7c27df0b" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgPCEtLei%2FmemHjOWGmWh0bWzku6PnoIEtLT5cbjwvdGVtcGxhdGU%2BXG5cbjxzdHlsZSBzY29wZWQ%2BXG4gICAvKiDov5nph4zlhpljc3Pku6PnoIEgKi9cbjwvc3R5bGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<h2 id="css的引入方式" tabindex="-1"><a class="header-anchor" href="#css的引入方式" aria-hidden="true">#</a> CSS的引入方式 💎</h2>
<figure><img src="/images/css/css3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="内联样式-行内样式" tabindex="-1"><a class="header-anchor" href="#内联样式-行内样式" aria-hidden="true">#</a> 内联样式（行内样式） 👻</h3>
<p>要使用内联样式，你需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>CSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>内联样式乏整体性和规划性，不利于维护，维护成本高</p>
</div>
<h3 id="内部样式" tabindex="-1"><a class="header-anchor" href="#内部样式" aria-hidden="true">#</a> 内部样式 👻</h3>
<p>当单个文档需要特殊的样式时，就应该使用内部样式表。你可以使用 <code v-pre>&lt;style&gt;</code> 标签在文档头部定义内部样式表</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">input</span> <span class="token punctuation">{</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span>0 20px<span class="token punctuation">;</span>
            <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgb</span><span class="token punctuation">(</span>201<span class="token punctuation">,</span> 43<span class="token punctuation">,</span> 177<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><code v-pre>style</code>标签放在<code v-pre>head</code>标签之间，个人习惯放到<code v-pre>title</code>后面</p>
<p>单个页面内的CSS代码具有统一性和规划性，便于维护，但是在多个页面之间容易混乱</p>
</div>
<h3 id="外部样式-推荐" tabindex="-1"><a class="header-anchor" href="#外部样式-推荐" aria-hidden="true">#</a> 外部样式（推荐） 👻</h3>
<p>当样式需要应用于很多页面时，外部样式表将是理想的选择。在使用外部样式表的情况下，你可以通过改变一个文件来改变整个站点的外观。每个页面使用 <code v-pre>&lt;link&gt;</code> 标签链接到样式表。 <code v-pre>&lt;link&gt;</code> 标签在（文档的）头部</p>
<CodeTabs id="115" :data='[{"title":"html"},{"title":"css"}]' tab-id="shell">
<template #tab0="{ title, value, isActive }">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- index.html --></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./index.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/* index.css */</span>
<span class="token selector">input</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="导入式-了解即可" tabindex="-1"><a class="header-anchor" href="#导入式-了解即可" aria-hidden="true">#</a> 导入式（了解即可） 👻</h3>
<p>此种方式使用率比较低,因为会影响加载速度</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"css文件路径"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">@import和link的区别</p>
<ul>
<li><code v-pre>@import</code>是CSS提供加载样式的一种方式，只能用于加载CSS。link标签除了可以加载CSS外，还可以做很多其它的事情，比如定义rel连接属性等</li>
<li>加载顺序的差别。当一个页面被加载的时候，link引用的CSS会同时被加载，<code v-pre>@import</code>引用的CSS会等到页面全部被下载完再被加载。所以有时候浏览<code v-pre>@import</code>加载CSS的页面时开始会没有样式（就是闪烁），网速慢的时候会比较明显</li>
<li>兼容性的差别。<code v-pre>@import</code>在IE5以上才能识别，而link标签无此问题</li>
<li>使用dom控制样式时的差别。当使用javascript控制dom去改变样式的时候，只能使用link标签，因为dom操作元素的样式时，用<code v-pre>@import</code>方式的样式也许还未加载完成</li>
<li>使用<code v-pre>@import</code>方式会增HTTP请求，会影响加载速度，所以谨慎使用该方法</li>
</ul>
</div>
<VuePlayground title="%E9%9A%8F%E5%A0%82%E8%AE%AD%E7%BB%83" key="5624a8b2" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgPCEtLei%2FmemHjOWGmWh0bWzku6PnoIEtLT5cbjwvdGVtcGxhdGU%2BXG5cbjxzdHlsZSBzY29wZWQ%2BXG4gICAvKiDov5nph4zlhpljc3Pku6PnoIEgKi9cbjwvc3R5bGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<h2 id="css样式表特征" tabindex="-1"><a class="header-anchor" href="#css样式表特征" aria-hidden="true">#</a> CSS样式表特征 💎</h2>
<figure><img src="/images/css/css4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="继承性" tabindex="-1"><a class="header-anchor" href="#继承性" aria-hidden="true">#</a> 继承性 👻</h3>
<p>指被包含在内部的标签可以拥有外部标签的样式，比如：text-、font-、line-height，但有些属性不能继承，比如：border、padding、margin</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>我是黑色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>我是黑色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很明显，<code v-pre>p</code>和<code v-pre>h3</code>都继承了<code v-pre>div</code>的颜色</p>
<h3 id="层叠性" tabindex="-1"><a class="header-anchor" href="#层叠性" aria-hidden="true">#</a> 层叠性 👻</h3>
<p>简单的说，层叠就是对一个元素多次设置同一个样式，这将使用最后一次设置的属性值。例如对一个站点中的多个页面使用了同一套CSS样式表，而某些页面中的某些元素想使用其他样式，就可以针对这些样式单独定义一个样式表应用到页面中。这些后来定义的样式将对前面的样式设置进行重写，在浏览器中看到的将是最后面设置的样式效果</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>我是红色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">p</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很明显，后面把前面的颜色给覆盖掉了</p>
<h3 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级 👻</h3>
<p>样式定义冲突时，按照不同样式规则的优先级来应用样式</p>
<p>行内样式&gt;内部样式（外部样式）</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>内部样式和外部样式优先级一样，写在后面的生效</p>
</div>
<h3 id="css注释" tabindex="-1"><a class="header-anchor" href="#css注释" aria-hidden="true">#</a> CSS注释 👻</h3>
<p>注释是用来解释你的代码，并且可以随意编辑它，浏览器会忽略它</p>
<p>CSS注释以 <code v-pre>/*</code> 开始, 以 <code v-pre>*/</code>结束,</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/* 这是注释 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><VuePlayground title="%E9%9A%8F%E5%A0%82%E8%AE%AD%E7%BB%83" key="356342a0" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgPCEtLei%2FmemHjOWGmWh0bWzku6PnoIEtLT5cbjwvdGVtcGxhdGU%2BXG5cbjxzdHlsZSBzY29wZWQ%2BXG4gICAvKiDov5nph4zlhpljc3Pku6PnoIEgKi9cbjwvc3R5bGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<h2 id="基础选择器" tabindex="-1"><a class="header-anchor" href="#基础选择器" aria-hidden="true">#</a> 基础选择器 💎</h2>
<figure><img src="/images/css/css5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="全局选择器" tabindex="-1"><a class="header-anchor" href="#全局选择器" aria-hidden="true">#</a> 全局选择器 👻</h3>
<p>可以与任何元素匹配，优先级最低，不推荐使用</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span>
   <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>不同的浏览器会带有相应的内外边距，可以用此进行清除！</p>
</div>
<h3 id="元素选择器" tabindex="-1"><a class="header-anchor" href="#元素选择器" aria-hidden="true">#</a> 元素选择器 👻</h3>
<p>HTML文档中的元素，<code v-pre>p</code>、<code v-pre>b</code>、<code v-pre>div</code>、<code v-pre>a</code>、<code v-pre>img</code>、<code v-pre>body</code>等。</p>
<p>标签选择器，选择的是页面上所有这种类型的标签，所以经常描述“共性”，无法描述某一个元素的“个性”</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">p</span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再比如说，我想让“学完前端，继续学Java”这句话中的“前端”两个变为红色字体，那么我可以用<code v-pre>&lt;span&gt;</code>标签把“前端”这两个字围起来，然后给<code v-pre>&lt;span&gt;</code>标签加一个标签选择器</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>学完了<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>前端<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>，继续学Java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">span</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>所有的标签，都可以是选择器。比如ul、li、label、dt、dl、input、div等</p>
<p>无论这个标签藏的多深，一定能够被选择上</p>
<p><mark>选择的所有，而不是一个</mark></p>
</div>
<h3 id="类选择器" tabindex="-1"><a class="header-anchor" href="#类选择器" aria-hidden="true">#</a> 类选择器 👻</h3>
<p>规定用圆点 <code v-pre>.</code> 来定义，针对你想要的所有标签使用</p>
<div class="hint-container tip">
<p class="hint-container-title">class属性的特点</p>
<p>类选择器可以被多种标签使用</p>
<p>类名不能以数字开头</p>
<p>同一个标签可以使用多个类选择器。用空格隔开</p>
</div>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>oneclass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>你好<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>classone classtwo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是一个h3啊<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.oneclass</span><span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token selector">.classone</span><span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token selector">.classtwo</span><span class="token punctuation">{</span>
   <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="id选择器" tabindex="-1"><a class="header-anchor" href="#id选择器" aria-hidden="true">#</a> ID选择器 👻</h3>
<p>针对某一个特定的标签来使用，<mark>只能使用一次</mark> 。css中的<code v-pre>ID选择器</code>以 <code v-pre>#</code> 来定义</p>
<div class="hint-container tip">
<p class="hint-container-title">特别提示</p>
<p>ID是唯一的</p>
<p>ID不能以数字开头</p>
</div>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mytitle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>你好<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">#mytitle</span><span class="token punctuation">{</span>
   <span class="token property">border</span><span class="token punctuation">:</span>3px solid green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并选择器" tabindex="-1"><a class="header-anchor" href="#合并选择器" aria-hidden="true">#</a> 合并选择器 👻</h3>
<p>语法：<code v-pre>选择器1,选择器2,...{ }</code></p>
<p>作用：提取共同的样式，减少重复代码</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cls1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>你好,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cls2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>李焕英<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.cls1,.cls2</span><span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="important和优先级" tabindex="-1"><a class="header-anchor" href="#important和优先级" aria-hidden="true">#</a> <code v-pre>!important</code>和优先级 👻</h3>
<p><code v-pre>!important</code> 直接把优先级增加到最大</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cls<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>你好<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.cls</span><span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span> yellow <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.cls</span><span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们能看到字的颜色依旧是黄色，并没有被红色给覆盖掉。</p>
<div class="hint-container info">
<p class="hint-container-title">选择器的优先级</p>
<p>CSS中,权重用数字衡量</p>
<ul>
<li>
<p>全局选择器的权重为: 最小</p>
</li>
<li>
<p>元素选择器的权重为: 1</p>
</li>
<li>
<p>class选择器的权重为: 10</p>
</li>
<li>
<p>id选择器的权重为: 100</p>
</li>
<li>
<p>内联样式的权重为: 1000</p>
</li>
<li>
<p><code v-pre>!important</code> 的权重为: 最大</p>
</li>
</ul>
</div>
<VuePlayground title="%E9%9A%8F%E5%A0%82%E8%AE%AD%E7%BB%83" key="25e70270" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgPCEtLei%2FmemHjOWGmWh0bWzku6PnoIEtLT5cbjwvdGVtcGxhdGU%2BXG5cbjxzdHlsZSBzY29wZWQ%2BXG4gICAvKiDov5nph4zlhpljc3Pku6PnoIEgKi9cbjwvc3R5bGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<h2 id="网页结构布局实战" tabindex="-1"><a class="header-anchor" href="#网页结构布局实战" aria-hidden="true">#</a> 网页结构布局实战 💎</h2>
<figure><img src="/images/css/css6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container info">
<p class="hint-container-title">布局时常用的属性</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>宽度</td>
</tr>
<tr>
<td>height</td>
<td>高度</td>
</tr>
<tr>
<td>background-color</td>
<td>背景颜色</td>
</tr>
<tr>
<td>float</td>
<td>浮动（div不在独占一行，左右摆放）</td>
</tr>
</tbody>
</table>
</div>

<CodeDemo id="code-demo-418" type="normal" title="%E5%B8%83%E5%B1%80-%E4%B8%8A%E4%B8%AD%E4%B8%8B%E7%BB%93%E6%9E%84" code="eJyNjkEOwiAQRa9Cxq3WxpVi7UnY4AClEQcDaEya3l0MxoSFptv/8ubNBDZdHXDo1Phg6GSMJwFWS6WDgL7b5rkXVFH0lDSlX9h4nyoZ1oAx5kZT7rJJEGNWj4NNnO3b2/P4Hs4SL0Pwd1Ib9M4HzlYGMaNZkKDmU63lXfvPNoevXZ5aXkY0xYX5BXfpY54=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fcc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ff9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.footer</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ccf<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>
<CodeDemo id="code-demo-422" type="normal" title="%E5%B8%83%E5%B1%80-%E4%B8%8A%E4%B8%AD%E4%B8%8B-%E5%B7%A6%E5%8F%B3" code="eJylklFugzAQRK9iWepfS2lRq4qmPQk/Dl7AYutFxiGNoty9NjhqIHEUKV8ID/NmPcueN/YHec5XUg2sRNH3XwUvSVuhNJiCfxeasZnYgJCjsnp2x+e6FkNc9GTQNnAXIkLllX/r0uyci+TFF0bVzRwRmaMimqOOT/7Iy753hSTTPdnee7dK2iZnL2n68OnfG/BBOXtPu9/xYC3Ktja00fKpJCSTMwPSKYdCJ66Q65S3OKVTug2YUN0p6oz0msZRO0CkbYBN978+1kecJQG6vt2tcQMB6Hc3w2VZkmW3T9cJhJpQgjbki2OsQhLO5MHHBsb9351iAHQkYfx/7g0YFCHYaf8XQvjhD2ImJ7Y=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.nav</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.footer</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> deepskyblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 33.33%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> palegoldenrod<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 33.33%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> palegreen<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 33.33%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> palevioletred<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><VuePlayground title="%E9%9A%8F%E5%A0%82%E8%AE%AD%E7%BB%83" key="2c1218a2" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgPCEtLei%2FmemHjOWGmWh0bWzku6PnoIEtLT5cbjwvdGVtcGxhdGU%2BXG5cbjxzdHlsZSBzY29wZWQ%2BXG4gICAvKiDov5nph4zlhpljc3Pku6PnoIEgKi9cbjwvc3R5bGU%2BXG4ifQ%3D%3D">
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
</div></template>


