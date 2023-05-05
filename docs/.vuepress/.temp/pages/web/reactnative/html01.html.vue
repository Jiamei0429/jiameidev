<template><div><h1 id="_1-1-初体验html" tabindex="-1"><a class="header-anchor" href="#_1-1-初体验html" aria-hidden="true">#</a> 1.1 初体验HTML 🎉</h1>
<figure><img src="/images/html/html1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>HTML5</code>是用来描述网页的一种语言，被称为超文本标记语言。用HTML5编写的文件，后缀以.html结尾，<code v-pre>HTML</code>是一种标记语言，标记语言是一套标记标签。标签是由尖括号包围的关键字，例如：<code v-pre>&lt;html&gt;</code></p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>文件后缀名以.html结尾</p>
<p>在编写代码的过程中，&lt;&gt;必须是英文状态下编写</p>
</div>
<p>HTML标签有两种表现形式：</p>
<ul>
<li>双标签，例如：<code v-pre>&lt;html&gt;&lt;/html&gt;</code></li>
<li>单标签，例如：<code v-pre>&lt;img&gt;</code></li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">HTML是做什么的？</p>
<p>HTML是网页结构的基本架构，你可以把它想象成人的骨架、人体结构等，它决定了网站的结构布局</p>
</div>
<h2 id="html5基本骨架" tabindex="-1"><a class="header-anchor" href="#html5基本骨架" aria-hidden="true">#</a> <strong>HTML5基本骨架</strong>💎</h2>
<ul>
<li>
<p><strong>HTML5的DOCTYPE声明</strong>
<code v-pre>DOCTYPE</code>是document type (文档类型) 的缩写。<!DOCTYPE html >是H5的声明位于文档的最前面，处于标签之前。 他是网页必备的组成部分，避免浏览器的怪异模式。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>html标签</strong>
定义 HTML 文档，这个元素我们浏览器看到后就明白这是个HTML文档了，所以你的其它元素要包裹在它里面，标签限定了文档的开始点和结束点。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>head标签</strong>
head标签用于定义文档的头部。文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>body标签</strong>
body 元素定义文档的主体。
body 元素包含文档的所有内容（比如文本、超链接、图像、表格和列表等等。）
它会直接在页面中显示出来，也就是用户可以直观看到的内容</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
      我会显示在浏览器中
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>title标签</strong>
可定义文档的标题。
它显示在浏览器窗口的标题栏或状态栏上。
<code v-pre>&lt;title&gt;</code> 标签是 <code v-pre>&lt;head&gt;</code> 标签中唯一必须要求包含的东西，就是说写head一定要写title
<code v-pre>&lt;title&gt;</code>的增加有利于SEO优化</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>SEO是搜索引擎优化的英文缩写。通过对网站内容调整，满足搜索引擎的排名需求</p>
</div>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>第一个页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
     我会显示在浏览器中
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>meta标签</strong>
meta标签用来描述一个HTML网页文档的属性，关键词等，例如：<code v-pre>charset=&quot;utf-8&quot;</code>是说当前使用的是<code v-pre>utf-8</code>编码格式，在开发中我们经常会看到<code v-pre>utf-8</code>，或是gbk，这些都是编码格式，通常使用<code v-pre>utf-8</code>。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>itbaizhan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 这是一段注释 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="html注释" tabindex="-1"><a class="header-anchor" href="#html注释" aria-hidden="true">#</a> HTML注释</h2>
<figure><img src="/images/html/html4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>浏览器不会显示注释</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 这是一段注释 --></span>
<span class="token comment">&lt;!-- 这里的内容不会被浏览器显示 --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>在开始标签中有一个叹号，但是结束标签中没有</p>
</div>
<h2 id="开发工具推荐" tabindex="-1"><a class="header-anchor" href="#开发工具推荐" aria-hidden="true">#</a> 开发工具推荐💎</h2>
<figure><img src="/images/html/html2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>工欲善其事，必先利其器，要想有好的开发体验，选择一款合适的开发工具是十分必要的</p>
<p>VS Code，全称是Visual Studio Code，但因为全称太长，微软旗下另一款产品visual studio又经常被简称为VS，所以这款与vs有一定渊源的代码编辑器就被简称为VSCode。</p>
<p>VSCode是一款由微软开发且跨平台的免费源代码编辑器。该软件支持语法高亮、代码自动补全（又称 IntelliSense）、代码重构、查看定义功能，并且内置了命令行工具和 Git 版本控制系统。用户可以更改主题和键盘快捷方式实现个性化设置，也可以通过内置的扩展程序商店安装扩展以拓展软件功能。</p>
<p>VS Code 使用 Monaco Editor 作为其底层的代码编辑器。</p>
<p>在 2019 年的 Stack Overflow 组织的开发者调查中，Visual Studio Code 被认为是最受开发者欢迎的开发环境。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>vscode生成HTML结构快捷键：<code v-pre>！+回车</code>，代码如下</p>
</div>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">VSCode常用快捷键列表</p>
<ol>
<li>代码格式化：<code v-pre>Shift+Alt+F</code></li>
<li>向上或向下移动一行：<code v-pre>Alt+Up 或 Alt+Down</code></li>
<li>快速复制一行代码：<code v-pre>Shift+Alt+Up 或 Shift+Alt+Down</code></li>
<li>快速保存：<code v-pre>Ctrl + S</code></li>
<li>快速查找：<code v-pre>Ctrl + F</code></li>
<li>快速替换：<code v-pre>Ctrl + H</code></li>
</ol>
</div>
<div class="hint-container info">
<p class="hint-container-title">浏览器是我们最重要的合作伙伴</p>
<p>我们推荐谷歌浏览器，有两点原因：</p>
<ul>
<li>简洁大方，打开响应速度快</li>
<li>开发者调试工具</li>
</ul>
</div>
<p><strong>轻松一刻</strong></p>
<AudioPlayer
  src="/mp3/1.mp3"
  title="音乐"
  poster="/mp3/1.jpg"
/>
<p><strong>视频教程</strong> 📽️</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


