<template><div><h1 id="_7-1-初体验vue3" tabindex="-1"><a class="header-anchor" href="#_7-1-初体验vue3" aria-hidden="true">#</a> 7.1 初体验Vue3 🎉</h1>
<figure><img src="/images/vue/vue0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Vue (发音为 /vjuː/，类似 <strong>view</strong>) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任，Vue易学易用，性能出色，适用场景丰富的 Web 前端框架，他是国内目前前端最火的框架之一。</p>
<p>目前，在开发中，Vue有两个大版本可以选择<code v-pre>Vue2</code>和<code v-pre>Vue3</code>，老项目一般都是<code v-pre>Vue2</code>的，而新项目一般都选择<code v-pre>Vue3</code>开发</p>
<p>我们本套课程讲解版本为<code v-pre>Vue3</code>，因为<code v-pre>Vue3</code>涵盖了<code v-pre>Vue2</code>的知识体系，当然<code v-pre>Vue3</code>也增加了很多新特性</p>
<p>学习Vue，一定要参考官方文档</p>
<blockquote>
<p><strong>官网文档</strong></p>
<p>地址：<a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目💎</h2>
<figure><img src="/images/vue/vue1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p><strong>前提条件</strong></p>
<ul>
<li>熟悉命令行</li>
<li>已安装 15.0 或更高版本的 Node.js</li>
</ul>
</blockquote>
<div class="language-apl line-numbers-mode" data-ext="apl"><pre v-pre class="language-apl"><code>npm init vue<span class="token dyadic-operator operator">@</span>latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这一指令将会安装并执行 <code v-pre>create-vue</code>，它是 Vue 官方的项目脚手架工具。你将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示</p>
<p>如果不确定是否要开启某个功能，你可以直接按下回车键选择 <code v-pre>No</code>。</p>
<h2 id="安装依赖并启动" tabindex="-1"><a class="header-anchor" href="#安装依赖并启动" aria-hidden="true">#</a> 安装依赖并启动💎</h2>
<p>在项目被创建后，通过以下步骤安装依赖并启动开发服务器</p>
<div class="language-apl line-numbers-mode" data-ext="apl"><pre v-pre class="language-apl"><code>cd <span class="token function">&lt;</span>your<span class="token function">-</span>project<span class="token function">-</span>name<span class="token function">></span>
npm install
npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以启动项目了，你会看到项目运行在本地的5173端口，如果你想让局域网内的其他人访问你正在开发中的项目，可以修改根目录下的package.json文件，修改如下：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code> <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite --host"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包项目" tabindex="-1"><a class="header-anchor" href="#打包项目" aria-hidden="true">#</a> 打包项目💎</h2>
<div class="language-apl line-numbers-mode" data-ext="apl"><pre v-pre class="language-apl"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当你完成开发后，你可以使用该命令对你的项目进行打包，打包完成后，你会在你的根目录下看到一个dist文件夹。</p>
<h2 id="vue项目目录结构" tabindex="-1"><a class="header-anchor" href="#vue项目目录结构" aria-hidden="true">#</a> Vue项目目录结构💎</h2>
<figure><img src="/images/vue/vue2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>我们通过Vue命令行工具 <code v-pre>npm init vue@latest</code> 创建项目，会出现很多文件及文件夹</p>
<div class="language-apl line-numbers-mode" data-ext="apl"><pre v-pre class="language-apl"><code>└─ 项目名
   └─  <span class="token dyadic-operator operator">.</span>vscode     <span class="token function">-</span><span class="token function">-</span><span class="token function">-</span> VSCode工具的配置文件夹
   └─  gnode_modules   <span class="token function">-</span><span class="token function">-</span><span class="token function">-</span> Vue项目的运行依赖文件夹
   └─  public      <span class="token function">-</span><span class="token function">-</span><span class="token function">-</span> 资源文件夹（浏览器图标）
   └─  src       <span class="token function">-</span><span class="token function">-</span><span class="token function">-</span> 源码文件夹
   └─  <span class="token dyadic-operator operator">.</span>gitignore    <span class="token function">-</span><span class="token function">-</span><span class="token function">-</span> git忽略文件
   └─  index<span class="token dyadic-operator operator">.</span>html    <span class="token function">-</span><span class="token function">-</span><span class="token function">-</span> 入口HTML文件
   └─  package<span class="token dyadic-operator operator">.</span>json   <span class="token function">-</span><span class="token function">-</span><span class="token function">-</span> 信息描述文件
   └─  README<span class="token dyadic-operator operator">.</span>md    <span class="token function">-</span><span class="token function">-</span><span class="token function">-</span> 注释文件
   └─  vite<span class="token dyadic-operator operator">.</span>config<span class="token dyadic-operator operator">.</span>js  <span class="token function">-</span><span class="token function">-</span><span class="token function">-</span> Vue配置文件 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="视频教程" tabindex="-1"><a class="header-anchor" href="#视频教程" aria-hidden="true">#</a> 视频教程📽️</h2>
<!-- <video  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" width="100%" controls></video> -->
<VideoPlayer src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" /><p>至此，我们已经初步体验了vue，接下来我会带大家正式进入vue3知识的学习了。</p>
</div></template>


