<template><div><h1 id="_12-5-状态管理pinia" tabindex="-1"><a class="header-anchor" href="#_12-5-状态管理pinia" aria-hidden="true">#</a> 12.5 状态管理Pinia 🎉</h1>
<details class="hint-container details"><summary>学习此章节之前，请先阅读这里！！！</summary>
<p>如果你已经完成了Vue的学习，那么你可以继续往下学习此章节，假如你没有学习完Vue，确切的说是没有学习过Pinia，请点击<a href="/web/vue/vue07">状态管理Pinia</a>，学习完该章节之后再继续阅读本章节！</p>
</details>
<figure><img src="/images/uniapp/uni28.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>uni-app 内置了 Pinia</p>
<p>使用 HBuilder X 不需要手动安装，直接使用即可。使用 CLI 需要手动安装，执行 <code v-pre>npm install pinia</code>。</p>
</div>
<p>安装持久化插件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i pinia-plugin-persist-uni
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">如果你使用的是TS,还需增加以下配置</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"types"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pinia-plugin-persist-uni"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<p>基本示例
在 main.js 中编写以下代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createSSRApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> piniaPersist <span class="token keyword">from</span> <span class="token string">'pinia-plugin-persist-uni'</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createSSRApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPersist<span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">,</span>
    pinia<span class="token punctuation">,</span> <span class="token comment">// 此处必须将 Pinia 返回</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先创建一个仓库</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// stores/navStore.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore<span class="token punctuation">,</span> acceptHMRUpdate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useNavStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'navStore'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> number <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            number
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//普通操作</span>
        <span class="token function">changeNumber</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">=</span> val
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//异步操作</span>
        <span class="token function">changeNumberAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">persist</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 开启持久化</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//热更新</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token function">acceptHMRUpdate</span><span class="token punctuation">(</span>useNavStore<span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在组件中使用它：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>页面中的值：{{ num }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 读取store仓库的值 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>store仓库中的值：{{ navStore.number }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>change<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>修改仓库中的值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeAsync<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>处罚异步操作<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useNavStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/navStore'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> navStore <span class="token operator">=</span> <span class="token function">useNavStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>   <span class="token comment">//修改仓库中的值,处理普通操作</span>
  navStore<span class="token punctuation">.</span><span class="token function">changeNumber</span><span class="token punctuation">(</span><span class="token number">11111111</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">changeAsync</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>       <span class="token comment">//处理普通操作</span>
  <span class="token keyword">await</span> navStore<span class="token punctuation">.</span><span class="token function">changeNumberAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>    

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>轻松一刻</strong> 🎧</p>
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


