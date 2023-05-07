<template><div><h1 id="_3-1-初体验scss" tabindex="-1"><a class="header-anchor" href="#_3-1-初体验scss" aria-hidden="true">#</a> 3.1 初体验Scss 🎉</h1>
<figure><img src="/images/scss/scss1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>sass和scss其实是一样的css预处理语言，SCSS 是 Sass 3 引入新的语法，其后缀名是分别为 .sass和.scss两种。</p>
<p>SASS版本3.0之前的后缀名为.sass，而版本3.0之后的后缀名.scss。</p>
<p>下面我提到的Scss或者Sass，其实都是一样的，不要刻意去区分他。</p>
</div>
<p>我们写了这么久的代码，每次写页面都需要配合CSS，CSS里面重复代码其实很多，包含通配颜色值、容器大小等。那我们能否使用JavaScript声明变量的方式解决这些问题呢？原本的CSS当然是不支持的，但是有其他方案，他就是Scss！！！</p>
<p>Scss世界上最成熟、最稳定、最强大的专业级CSS扩展语言！</p>
<h4 id="为什么使用scss" tabindex="-1"><a class="header-anchor" href="#为什么使用scss" aria-hidden="true">#</a> 为什么使用Scss？</h4>
<p>CSS 本身语法不够强大，导致重复编写一些代码，无法实现复用，而且代码也不方便维护。Scss 引入合理的样式复用机制，增加了规则、变量、混入、选择器、继承、内置函数等等特性。</p>
<div class="hint-container info">
<p class="hint-container-title">Scss优点</p>
<p>Scss 是一个 CSS 预处理器</p>
<p>Scss 完全兼容所有版本的 CSS</p>
<p>Scss 扩展了 CSS3，增加了规则、变量、混入、选择器、继承、内置函数等等特性</p>
</div>
<h2 id="scss环境搭建" tabindex="-1"><a class="header-anchor" href="#scss环境搭建" aria-hidden="true">#</a> Scss环境搭建 💎</h2>
<figure><img src="/images/scss/scss2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>sass</code>基于<code v-pre>Ruby</code>语言开发而成，因此安装<code v-pre>sass</code>前需要安装<code v-pre>Ruby</code>。（注:mac下自带Ruby无需再安装Ruby!）</p>
<h3 id="安装ruby" tabindex="-1"><a class="header-anchor" href="#安装ruby" aria-hidden="true">#</a> 安装Ruby 👻</h3>
<p>Ruby下载地址：<a href="https://rubyinstaller.org/downloads/" target="_blank" rel="noopener noreferrer">https://rubyinstaller.org/downloads/<ExternalLinkIcon/></a></p>
<figure><img src="/images/scss/scss3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>看到下面的窗口，就代表着安装成功了，此时关闭即可</p>
<figure><img src="/images/scss/scss4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>安装完成后需测试安装有没有成功,运行CMD输入以下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ruby <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rubygems" tabindex="-1"><a class="header-anchor" href="#rubygems" aria-hidden="true">#</a> RubyGems 👻</h3>
<p>RubyGems 类似 Nodejs中的 npm</p>
<p>RubyGems 一直以来在国内都非常难访问到，我们需要将他的源替换国内的</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>// 删除替换原gem源
gem sources <span class="token parameter variable">--add</span> https://gems.ruby-china.com/ <span class="token parameter variable">--remove</span> https://rubygems.org/

// 打印是否替换成功
gem sources <span class="token parameter variable">-l</span>
// https://gems.ruby-china.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sass安装" tabindex="-1"><a class="header-anchor" href="#sass安装" aria-hidden="true">#</a> sass安装 👻</h3>
<p><code v-pre>Ruby</code>自带一个叫做<code v-pre>RubyGems</code>的系统，用来安装基于<code v-pre>Ruby</code>的软件。我们可以使用这个系统来 轻松地安装<code v-pre>Sass</code>和<code v-pre>Compass</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>// 安装如下<span class="token punctuation">(</span>如mac安装遇到权限问题需加 <span class="token function">sudo</span> gem <span class="token function">install</span> sass<span class="token punctuation">)</span>
gem <span class="token function">install</span> sass
gem <span class="token function">install</span> compass
// 检测是否安装成功
sass <span class="token parameter variable">-v</span>     // Ruby Sass <span class="token number">3.7</span>.4
compass <span class="token parameter variable">-v</span> // Compass <span class="token number">1.0</span>.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译sass" tabindex="-1"><a class="header-anchor" href="#编译sass" aria-hidden="true">#</a> 编译Sass  💎</h2>
<figure><img src="/images/scss/scss5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>sass</code>编译有很多种方式，如命令行编译模式、编译软件<code v-pre>koala</code> 、工程化工具<code v-pre>webpack</code>等</p>
<div class="hint-container warning">
<p class="hint-container-title">为什么要编译scss</p>
<p>浏览器不支持解析scss，需要把scss文件编译为浏览器可解析执行的scc文件</p>
</div>
<h3 id="编写sass代码" tabindex="-1"><a class="header-anchor" href="#编写sass代码" aria-hidden="true">#</a> 编写Sass代码 👻</h3>
<p>Sass文件的后缀名为.scss</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token comment">/* style.scss */</span>
<span class="token selector">.box </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>

   <span class="token selector"><span class="token parent important">&amp;</span>-title </span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令行编译" tabindex="-1"><a class="header-anchor" href="#命令行编译" aria-hidden="true">#</a> 命令行编译 👻</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>sass style.scss style.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>
<CodeDemo id="code-demo-110" type="normal" title="%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA" code="eJyFkNFuwjAMRX/FivYwpMG07a1jE9J+oy9p4haP4FRJuoEQ/06SFhAFhBQlke+5vpZ3YhnWRhRirukPlJHef5VCWQ6SGF0pvksGuBKRwyCNRIN1Ut7mr7F6C1DRmvu+30UcNcvU5ONMHH/HV7wIr7yPc89Os+4SWEm1apztWE+VNdYVDvVnEjIXszMFoMm3Rm4LqA1uMgDw2/lA9TYaM1mAb6XCaYXhH5EHaLGmDTFU1ml0Pyni+SknTYbOAH1wXx1c+/6ZpfWcOFgQK9NpvOjWuBg2Gfn6rT1wtsSrsTHv8oGvMh1e+OIVj9gfAHr2sJU=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token selector">.container</span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
  <span class="token selector">.content</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
    <span class="token keyword">@mixin</span> <span class="token function">borderColor</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span><span class="token variable">$color</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.left</span><span class="token punctuation">{</span>
       <span class="token keyword">@include</span> <span class="token function">borderColor</span><span class="token punctuation">(</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.center</span><span class="token punctuation">{</span>
       <span class="token keyword">@include</span> <span class="token function">borderColor</span><span class="token punctuation">(</span>pink<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span><span class="token punctuation">{</span>
       <span class="token keyword">@include</span> <span class="token function">borderColor</span><span class="token punctuation">(</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><p><strong>轻松一刻</strong> 🎧</p>
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


