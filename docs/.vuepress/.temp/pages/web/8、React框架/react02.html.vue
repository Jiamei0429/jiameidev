<template><div><h1 id="_8-2-react基础" tabindex="-1"><a class="header-anchor" href="#_8-2-react基础" aria-hidden="true">#</a> 8.2 React基础 🎉</h1>
<h2 id="react组件化思想" tabindex="-1"><a class="header-anchor" href="#react组件化思想" aria-hidden="true">#</a> React组件化思想💎</h2>
<figure><img src="/images/react/react6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在React应用中，我们把一个页面看作是由一个个组件构成的。</p>
<p>每一个组件可以包含自己的页面结构、样式与页面逻辑</p>
<p>组件化开发，带来了全新的开发体验，也带来了全新的编码方式。</p>
<p>在React中，构建管理自身状态的封装组件，然后对其组合以构成复杂的 UI。</p>
<p>由于组件逻辑使用 JavaScript 编写而非模板，因此你可以轻松地在应用中传递数据，并保持状态与 DOM 分离。</p>
<figure><img src="/images/react/react7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如下展示的就是一个React组件，名字为Home</p>

<CodeDemo id="code-demo-30" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJw1j71uAjEQhF9l5DSHhEJP7qhpkiIp4xTGt0REPhv5J0E6XZcibbq8RToaXgfBa7DGXGFptDP+dqcXH0HMhXY2RPRIgV6iioQBDZ5J6fggbTGXriMeVhM0C/TSAmX+2lEI6p2mCBQfi37j4IiqpFiSMU6KCbMATzF5iyproG43n9BGhfCkOmqkWLmdFItisq1dS9i0bGzdF/l1Muyefn5Pf//5oPPh+3jY17Mcu32qZ4y86rxv4Ee7rfMRLa1VMqWItGIqdMjV73kj7kb62Mw4P8fKJMoMTg8Xq/9mnA==">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>message<span class="token punctuation">,</span> setMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>code id<span class="token operator">=</span><span class="token string">"powerful"</span><span class="token operator">></span>我是Home组件<span class="token operator">&lt;</span><span class="token operator">/</span>code<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box #powerful</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><p><strong>轻松一刻</strong></p>
<AudioPlayer
  src="/mp3/十年.mp3"
  title="十年"
  poster="/mp3/十年.jpg"
/>
<p><strong>视频教程</strong></p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="jsx基本介绍" tabindex="-1"><a class="header-anchor" href="#jsx基本介绍" aria-hidden="true">#</a> JSX基本介绍💎</h2>
<figure><img src="/images/react/react8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="什么是jsx" tabindex="-1"><a class="header-anchor" href="#什么是jsx" aria-hidden="true">#</a> 什么是JSX？ 👻</h3>
<p><strong>JSX</strong>是一个 JavaScript 的语法扩展，<strong>JSX 可以生成 React“元素”</strong>，React元素用来描述页面应该长什么样子。
可以把JSX理解为 JavaScript + XML,XML我们不熟悉，那就把XML立即为具有严格规范的HTML。</p>
<div class="hint-container tip">
<p class="hint-container-title">为什么使用 JSX？</p>
<p>React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据</p>
<p>React 并没有采用将标记与逻辑分离到不同文件这种人为的分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现关注点分离</p>
</div>
<p>首先，我们看一下最简单的一段jsx</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, lcl</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其次，我们在JSX中指定属性</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.baidu.com/img/flexible/logo/pc/result.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>img</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上给我们的感觉就是普通的HTML结构，但是，它又有与其不同的地方，继续往下看</p>
<p>现在，我们在JSX中嵌入静态的表达式</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'lcl'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>  
<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">答案为, </span><span class="token punctuation">{</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token number">0</span> <span class="token operator">?</span> <span class="token string">"正确"</span> <span class="token operator">:</span> <span class="token string">"错误"</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> avatarUrl<span class="token operator">=</span><span class="token string">'https://www.baidu.com/img/flexible/logo/pc/result.png'</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>avatarUrl<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>img</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上述对比，应该能够感觉到，在jsx中，当遇到<code v-pre>{}</code>就当作JavaScript来进行解析，当遇到<code v-pre>&lt; &gt;</code>就当作HTML来解析，下面看完整示例：</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>    <span class="token comment">//大驼峰命名</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">"哈哈"</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>list<span class="token punctuation">.</span>deac<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，我创建了一个函数组件，组件名称为<code v-pre>Home</code>，该组件返回一个React元素，我在上边提到过，React元素用来描述页面应该长什么样子。所以，此组件最终的样子就是<code v-pre>&lt;div&gt;&lt;p&gt;哈哈&lt;/p&gt;&lt;/div&gt;</code> 所渲染的样式。</p>

<CodeDemo id="code-demo-88" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJyrVsoqVrJSSs7PKy5R8MjPTVWwVdDQVLC1U6hWAAJ9/adLlr9cuefp5g1PJ+59OqE3Jg8kDFGekwkkbBWqIWIgUJJZkpNqpWCogxBKTAcJGCGJpKQWJ1spxCg9ndwBRDFKEJlaCFWUWlJalKeggVBuk5JZZofggoUK7KpBluuBjKq10S9AkrfRR6jXjMkDGptaUZBfVAK0Ni2xNAfiyZg8pVoAGUtNbg==">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>    <span class="token comment">//大驼峰命名</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">"哈哈"</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>list<span class="token punctuation">.</span>desc<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><h3 id="浏览器插件的安装" tabindex="-1"><a class="header-anchor" href="#浏览器插件的安装" aria-hidden="true">#</a> 浏览器插件的安装 👻</h3>
<p>chrome浏览器安装React开发者插件</p>
<div class="hint-container tip">
<p class="hint-container-title">chrome应用商店地址（需解决网络问题）：</p>
<p>https://chrome.google.com/webstore?utm_source=chrome-ntp-icon</p>
</div>
<p>chrome -&gt; 应用商店 -&gt; 搜索 React Developer Tools -&gt; 点击安装</p>
<p>尝试自己写一段JSX，代替App组件的界面</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">hello，world</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，观察最终生成的DOM结构</p>
<h3 id="jsx的class与style属性" tabindex="-1"><a class="header-anchor" href="#jsx的class与style属性" aria-hidden="true">#</a> JSX的Class与Style属性 👻</h3>
<figure><img src="/images/react/react10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在React中，<code v-pre>style</code>属性与HTML中的<code v-pre>style</code>属性一致，但是<code v-pre>class</code>属性名修改为 了<code v-pre>className</code></p>
<div class="hint-container tip">
<p class="hint-container-title">为什么class属性名修改为了className?</p>
<p>因为class在react中作为关键字被保留了</p>
</div>
<h4 id="classname" tabindex="-1"><a class="header-anchor" href="#classname" aria-hidden="true">#</a> className</h4>
<CodeTabs id="129" :data='[{"title":"App.jsx"},{"title":"App.css"}]' tab-id="shell">
<template #tab0="{ title, value, isActive }">
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token string">'./App.css'</span><span class="token punctuation">;</span>   <span class="token comment">//引入app组件的css样式</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">12</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>text<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>a<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.text</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h4 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h4>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">12</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>text<span class="token punctuation">'</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"200px"</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"200px"</span><span class="token punctuation">,</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">"green"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>a<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
<CodeDemo id="code-demo-141" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkEFOwzAQRa8ymk1bqSIty5BkzYoTeGPiIQmkdmQ7EGT5CEhwByTEDolte5wseovGtaq2s/tPf/Tnj8NngymWShoL92pDkMN8AXkBDqZJkvH7Z/+7Hf//xq/d+PnBZMDRzifv+jYSTbbXEuZRhclE81qc5RF1ULbcmAe+oXxmabAzMPa9pdw5eGuErVNguF6tuoHhEmpqqtpeoUdevlRa9VIEXGkiyRC8Lxz3WdJd5GXJOX9xx6RnkoZOaQuCnnjfxrZM4hJLE15wE+5xp36t0ulUSsRN9AejPl8P">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>    <span class="token comment">//大驼峰命名</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">12</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">'text'</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"100px"</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"100px"</span><span class="token punctuation">,</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">"green"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>a<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.text</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><p><strong>轻松一刻</strong></p>
<AudioPlayer
  src="/mp3/星辰大海.mp3"
  title="星辰大海"
  poster="/mp3/星辰大海.jpg"
/>
<p><strong>视频教程</strong></p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染💎</h2>
<figure><img src="/images/react/react9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>我们可以根据不同的条件，渲染不同的界面，举个例子，现在有一个判断条件，如果正确就显示<code v-pre>A</code>，如果错误就显示<code v-pre>B</code>，相信大家用js都是能够实现的，那么在React中如何来实现呢，带大家看一下。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">//APP.jsx</span>
<span class="token keyword">const</span> <span class="token function-variable function">APP</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"数据"</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* 渲染文本 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token number">10</span> <span class="token operator">&lt;</span> <span class="token number">8</span> <span class="token operator">?</span> <span class="token string">"A"</span> <span class="token operator">:</span> <span class="token string">"B"</span><span class="token punctuation">}</span><span class="token plain-text">  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* 渲染标签 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token punctuation">{</span>
        message<span class="token punctuation">.</span>title <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">123</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span> <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">456</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token constant">APP</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
<CodeDemo id="code-demo-166" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxt0D8KwjAUBvCrfGRSB+t/RGpFT+ABsohGUWpa2lSE0rmTk+gk6AFUxMnJ48RrmKQVOpghJO+9/PhITFYh6ZGpx0OB4XiMPkpl9B3ElAMuE1izMJwsmGqYEiCWwmU9UCIPD7m7U6LLid4CJqKAo5TN2bPlxsmOQGxVIF9Ped7LYypPV1Qs88QM+k5cr8FGFwPFDimB5keUJKpp+f+QS/q5vYtIHk6vPHHVBFWk8uuNpoaUqy6tdqeo5oRt/fKWKVc1tvW9QGDG5pPINX9DOUm+J05gXw==">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">APP</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"数据"</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token comment">/* 渲染文本 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token number">10</span> <span class="token operator">&lt;</span> <span class="token number">8</span> <span class="token operator">?</span> <span class="token string">"A"</span> <span class="token operator">:</span> <span class="token string">"B"</span><span class="token punctuation">}</span>  <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token comment">/* 渲染标签 */</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span>
        message<span class="token punctuation">.</span>title <span class="token operator">?</span> <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token number">123</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span> <span class="token operator">:</span> <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token number">456</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token constant">APP</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><h4 id="与运算符" tabindex="-1"><a class="header-anchor" href="#与运算符" aria-hidden="true">#</a> 与运算符&amp;&amp;</h4>
<p>上边的例子，要么渲染A，要么渲染B，最后总要渲染一个，非黑即白，现在我有一个需求，条件正确就渲染A，否则什么都不渲染，下面来实现一下：</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">//APP.jsx</span>
<span class="token keyword">const</span> <span class="token function-variable function">APP</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> flag<span class="token operator">=</span><span class="token boolean">true</span>
  <span class="token keyword">const</span> uflag<span class="token operator">=</span><span class="token boolean">false</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>flag <span class="token operator">&amp;&amp;</span> <span class="token string">"A"</span><span class="token punctuation">}</span><span class="token plain-text">  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>
        uflag  <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">AA</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token constant">APP</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>在 JavaScript 中，true &amp;&amp; expression 总是会返回 expression, 而 false &amp;&amp; expression 总是会返回 false。</p>
<p>因此，如果条件是 true，&amp;&amp; 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。</p>
</div>

<CodeDemo id="code-demo-184" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxNjksKAyEQRK9SuBhmVrMPUfAGcwA3ktGQII74CQHx7vGTX6+qX1dXdyb3QE7kctgQwbcNFPMCypCFBQbWRl5p9En9UOpMSxM69CombzE3DZz324MNWRvHcjNjmiAIF6RUtrrvvN8Z1UPRjHWJ839XeSevn+hF2MrU0x0+YldaJtP/F5aUF0uwPnc=">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">APP</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> flag<span class="token operator">=</span><span class="token boolean">true</span>
  <span class="token keyword">const</span> uflag<span class="token operator">=</span><span class="token boolean">false</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>flag <span class="token operator">&amp;&amp;</span> <span class="token string">"A"</span><span class="token punctuation">}</span>  <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token punctuation">{</span>
        uflag  <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token constant">AA</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token constant">APP</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><p><strong>轻松一刻</strong></p>
<AudioPlayer
  src="/mp3/像鱼.mp3"
  title="像鱼"
  poster="/mp3/像鱼.jpg"
/>
<p><strong>视频教程</strong></p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染 💎</h2>
<figure><img src="/images/react/react11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>列表是页面常见的展示效果,可以通过使用 {} 在 JSX 内构建一个元素集合。</p>
<CodeTabs id="207" :data='[{"title":"简单列表渲染"},{"title":"复杂列表渲染"}]' tab-id="shell">
<template #tab0="{ title, value, isActive }">
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"前端团队"</span><span class="token punctuation">,</span> <span class="token string">"后端团队"</span><span class="token punctuation">,</span> <span class="token string">"设计团队"</span><span class="token punctuation">]</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
      <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">"111"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
      <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">"222"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>desc<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>

<CodeDemo id="code-demo-215" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJyFkstOg0AUQH/lZuICkqYElg2Q+B1iUlJGMzqlBAZTQ2bXjQsfy0YXRmPiwqTV6MZN/wZp/8JhBqaiTZwNcC733AcU6CRDAzSaxBmD/SQBDwwTPB+KIAZQOEzTTPCDAJUXl9XLsrx73MzvA9QDQW6ufpH1YrVePLTkcKuhJGPKIxCoAvVhhFE8qF2v19Xbu7C0kfBYcNvWzxHORvWLtm0HSEHeBHfYnp532Bznj81xHG2rL7LlFLM8jcFQ3I3Imd/mFXKQ/jhMDIMwPO4BiSM83W5Nna5BHTencIrPvUJmcK1sopSAXwz3itral4Pw6nZWfn5sVrOv+bIJiDn4kLsWJZ1818rpD2C2t9yUU8nO6y/5b+O6dTfpNCuri7qJrqLVrtUuSJQVDE+TScrEho/CnMr/KogR/wY7Jsl4">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arrs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"前端团队"</span><span class="token punctuation">,</span> <span class="token string">"后端团队"</span><span class="token punctuation">,</span> <span class="token string">"设计团队"</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> lists <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"小米"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
      <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">"111"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"大米"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
      <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">"222"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>lists<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>ul key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>li <span class="token operator">></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">的年龄是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span>arrs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token operator">&lt;</span>p key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><div class="hint-container tip">
<p class="hint-container-title">列表渲染_key</p>
<figure><img src="/images/react/react12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识</p>
<p>一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用数据中的 id 来作为元素的 key</p>
<p>当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key</p>
</div>
<p><strong>轻松一刻</strong></p>
<AudioPlayer
  src="/mp3/像鱼.mp3"
  title="像鱼"
  poster="/mp3/像鱼.jpg"
/>
<p><strong>视频教程</strong></p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="事件及事件传参" tabindex="-1"><a class="header-anchor" href="#事件及事件传参" aria-hidden="true">#</a> 事件及事件传参 💎</h2>
<figure><img src="/images/react/react13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：</p>
<ul>
<li>React 事件的命名采用小驼峰式（camelCase），而不是纯小写。</li>
<li>使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。</li>
</ul>
<p>在学Recat之前，事件处理是这样的:</p>
<CodeTabs id="267" :data='[{"title":"Html"},{"title":"Js"}]' tab-id="shell">
<template #tab0="{ title, value, isActive }">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">onadd</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>新增<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">onadd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"事件触发了"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>学了Recat之后，事件处理是这样的:</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">//App.jsx</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onAdd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'点击事件发生了'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'正在输入'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onAdd<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">提交</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>change<span class="token punctuation">}</span></span>
        <span class="token attr-name">onFocus</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获得焦点'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onBlur</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'失去焦点'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
<CodeDemo id="code-demo-279" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJyrVsoqVrJSSs7PKy5RcCwoULBV0NBUsLVTqI7JU1CACOfnOaakoEpApPJzUvVy8tM11J837XzavvvJru4nu7c97Z/4fMr8J7va1DVBKmsR5iRnJOalp+I16NnaxU/nrHixb/LT1qVI+otSS0qL8hQ0IDpsUjLL7CBMICeptKQkPw/oSOeczORs22qwa2vtnvVPeLJriY0+RBqhPDOvoLREoaSyINU2RqkktaIkRgkmpwAyBOxG22qIW8GWw6Tc8pNLi22rIY5HcfWLvu1P901/3rIMGA7qmiianHJKi7Dqebpk49O+3Rh69KEutdGHeRIYCkDZ1IqC/KIShZTUtMTSHHBMxeQp1QIATrihkw==">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onAdd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'点击事件发生了'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'正在输入'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onAdd<span class="token punctuation">}</span><span class="token operator">></span>提交<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span>change<span class="token punctuation">}</span>
        onFocus<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获得焦点'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        onBlur<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'失去焦点'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><h3 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象" aria-hidden="true">#</a> 事件对象👻</h3>
<h3 id="事件传参" tabindex="-1"><a class="header-anchor" href="#事件传参" aria-hidden="true">#</a> 事件传参👻</h3>
<p><strong>轻松一刻</strong></p>
<AudioPlayer
  src="/mp3/像鱼.mp3"
  title="像鱼"
  poster="/mp3/像鱼.jpg"
/>
<p><strong>视频教程</strong></p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="react组件化思想-1" tabindex="-1"><a class="header-anchor" href="#react组件化思想-1" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-302" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-2" tabindex="-1"><a class="header-anchor" href="#react组件化思想-2" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-320" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-3" tabindex="-1"><a class="header-anchor" href="#react组件化思想-3" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-338" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-4" tabindex="-1"><a class="header-anchor" href="#react组件化思想-4" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-356" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-5" tabindex="-1"><a class="header-anchor" href="#react组件化思想-5" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-374" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-6" tabindex="-1"><a class="header-anchor" href="#react组件化思想-6" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-392" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-7" tabindex="-1"><a class="header-anchor" href="#react组件化思想-7" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-410" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-8" tabindex="-1"><a class="header-anchor" href="#react组件化思想-8" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-428" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-9" tabindex="-1"><a class="header-anchor" href="#react组件化思想-9" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-446" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-10" tabindex="-1"><a class="header-anchor" href="#react组件化思想-10" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-464" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-11" tabindex="-1"><a class="header-anchor" href="#react组件化思想-11" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-482" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-12" tabindex="-1"><a class="header-anchor" href="#react组件化思想-12" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-500" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-13" tabindex="-1"><a class="header-anchor" href="#react组件化思想-13" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-518" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-14" tabindex="-1"><a class="header-anchor" href="#react组件化思想-14" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-536" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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
<h2 id="react组件化思想-15" tabindex="-1"><a class="header-anchor" href="#react组件化思想-15" aria-hidden="true">#</a> React组件化思想💎</h2>

<CodeDemo id="code-demo-554" type="react" title="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E5%8F%8A%E8%AE%AD%E7%BB%83" code="eJxVkLFOwzAURX/lyTCkUkT2kmRh6QIDDAwYqa79CgHHjmwHKkX+FxY+o38D/1E7TqJ2sax37z2+fgP5sGRNuFbWwQC9xSfHHIKHCh6RcXdLVRI3usUwzFZQ1TBQBZDmLy1ay94wB4vuPt1fg3FGZZRsUEpNySqw5tQ7U0KiuQTCGSLbXg8T2efP2kixTXk/ngZdbxRkKVaK5gu4ZNY+sBYrSnb6QEmdxCBzLbD+O/78/x7HT5XFOFl02zEFjQjBTn+j2feSEtDqTjb8sxqmrn7xAyzVFkQRGZOjLEKf8R4rx8J46LRxIHDPepl2SRXJCbdx+zehLlzNT8/LldqsYSd7jIzg9iexqo3s">
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


