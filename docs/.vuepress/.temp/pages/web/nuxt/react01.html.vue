<template><div><h1 id="初体验react" tabindex="-1"><a class="header-anchor" href="#初体验react" aria-hidden="true">#</a> 初体验React 🎉</h1>
<figure><img src="/images/react/react1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>React 起源于 Facebook 的内部项目，于2013年5月公开发布，用于构建用户界面的 JavaScript 库。它通过组件化的方式，使得开发者可以将页面拆分成一系列独立、可重用的组件，每个组件都有自己的状态和行为。React 负责渲染这些组件，并将其组合成完整的用户界面。</p>
<p>首先，React是目前前端最火的框架之一，其次，React是目前企业技术栈中要求的知识点，能够大大提升开发效率和体验。</p>
<div class="hint-container tip">
<p class="hint-container-title">参考文档</p>
<p>React官方参考文档：<a href="https://zh-hans.reactjs.org/" target="_blank" rel="noopener noreferrer">https://zh-hans.reactjs.org/<ExternalLinkIcon/></a></p>
</div>
<div class="hint-container info">
<p class="hint-container-title">React有以下几个特点</p>
<ol>
<li><strong>声明式</strong> − 以声明式编写 UI，我们只需要编写代码描述UI，当数据变动时 React 能高效更新并渲染合适的组件</li>
<li><strong>JSX</strong> − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。</li>
<li><strong>高效</strong> −React通过对DOM的模拟，最大限度地减少与DOM的交互。</li>
<li><strong>组件</strong> − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。</li>
<li><strong>单向响应的数据流</strong> − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。</li>
</ol>
</div>
<h2 id="react项目创建" tabindex="-1"><a class="header-anchor" href="#react项目创建" aria-hidden="true">#</a> React项目创建💎</h2>
<figure><img src="/images/react/react2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">前提条件</p>
<ol>
<li>需要在你的电脑上安装 Node &gt;= 14.0.0 和 npm &gt;= 5.6</li>
<li>项目名称不能存在大写字母，可以使用横杠(-)连接多个词汇</li>
</ol>
</div>
<CodeTabs id="66" :data='[{"title":"第一步：创建项目"},{"title":"第二步：进入启动项目"},{"title":":第三步：打包项目"}]' tab-id="shell">
<template #tab0="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx create-react-app my-app   // 普通的react项目
npx create-react-app my-app <span class="token parameter variable">--template</span> typescript    //react+Ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> my-app
<span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build   // 会在根目录下生成一个build文件夹
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>启动成功效果：</p>
<figure><img src="/images/react/react3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">VSCode快捷键</p>
<p>vsCode有很多针对React快捷键，这里我推荐：<code v-pre>ES7 React/Redux/GraphQL/React-Native snippets</code></p>
<ul>
<li>函数组件快捷生产键：rfc</li>
<li>类组件快捷生产键：rcc</li>
</ul>
</div>
<h2 id="react项目结构" tabindex="-1"><a class="header-anchor" href="#react项目结构" aria-hidden="true">#</a> React项目结构💎</h2>
<p><img src="/images/react/react5.png" alt="" loading="lazy">
学习React,了解React项目的项目结构对我们的开发是很有必要的，他的基本结构如下：</p>
<figure><img src="/images/react/react4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container info">
<p class="hint-container-title">根目录下的文件</p>
<ul>
<li>node_modules：React项目需要的依赖包，注意：此文件夹不可以移动压缩复制等操作</li>
<li>public：React项目静态资源文件夹，包含index.html入口文件、图片、manifest.json配置文件等</li>
<li>src：源码文件夹，我们开发主要在这里编写代码</li>
<li>.gitignore：git忽略文件</li>
<li>package-lock.json：完整依赖包的信息文件</li>
<li>package.json：定义项目所需要的各种模块名称、版本信息等</li>
<li>README.md：markdown文件，项目的注释或描述文件</li>
</ul>
</div>
<div class="hint-container info">
<p class="hint-container-title">src目录下的文件</p>
<ul>
<li>App.css：App组件对应的css文件</li>
<li>App.js：App组件，主入口组件</li>
<li>App.test.js：App组件测试文件</li>
<li>index.css：index主入口文件对应css文件，也是公共css文件</li>
<li>index.js：主入口文件</li>
<li>logo.svg：logo图片</li>
<li>reportWebVitals.js：检测文件。包含三个关键指标（CLS、FID、LCP）和两个辅助指标（FCP、TTFB）</li>
<li>setupTests.js：测试文件，针对项目编写测试用例使用</li>
</ul>
</div>

<CodeDemo id="code-demo-192" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>message<span class="token punctuation">,</span> setMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,World</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>code<span class="token operator">></span>你好React<span class="token operator">&lt;</span><span class="token operator">/</span>code<span class="token operator">></span>
      <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">"powerful"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handler<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token punctuation">{</span>message<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box #powerful</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><p><strong>轻松一刻</strong></p>
<AudioPlayer
  src="/mp3/像鱼.mp3"
  title="像鱼"
  poster="/mp3/像鱼.jpg"
/>
<p><strong>视频教程</strong></p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


