<template><div><h1 id="_12-6-基础api" tabindex="-1"><a class="header-anchor" href="#_12-6-基础api" aria-hidden="true">#</a> 12.6 基础API 🎉</h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>本章节只讲解部分常用的API，更多API请参考<a href="https://uniapp.dcloud.net.cn/api/" target="_blank" rel="noopener noreferrer">https://uniapp.dcloud.net.cn/api/<ExternalLinkIcon/></a></p>
</div>
<h2 id="路由-页面跳转" tabindex="-1"><a class="header-anchor" href="#路由-页面跳转" aria-hidden="true">#</a> 路由（页面跳转） 💎</h2>
<figure><img src="/images/uniapp/uni29.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container info">
<p class="hint-container-title">路由管理页面之间的跳转</p>
<ul>
<li>uni.navigateTo(OBJECT)</li>
<li>uni.redirectTo(OBJECT)</li>
<li>uni.reLaunch(OBJECT)</li>
<li>uni.switchTab(OBJECT)</li>
</ul>
</div>
<h3 id="uni-navigateto" tabindex="-1"><a class="header-anchor" href="#uni-navigateto" aria-hidden="true">#</a> uni.navigateTo 👻</h3>
<p>保留当前页面，跳转到应用内的某个页面，使用<code v-pre>uni.navigateBack</code>可以返回到原页面</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"/pages/list/list"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-redirectto" tabindex="-1"><a class="header-anchor" href="#uni-redirectto" aria-hidden="true">#</a> uni.redirectTo 👻</h3>
<p>关闭当前页面，跳转到应用内的某个页面</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"/pages/list/list"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-relaunch" tabindex="-1"><a class="header-anchor" href="#uni-relaunch" aria-hidden="true">#</a> uni.reLaunch 👻</h3>
<p>关闭所有页面，打开到应用内的某个页面</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">reLaunch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"/pages/list/list"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-switchtab" tabindex="-1"><a class="header-anchor" href="#uni-switchtab" aria-hidden="true">#</a> uni.switchTab 👻</h3>
<p>跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"/pages/list/list"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/3.mp3"
  title="音乐"
  poster="/mp3/3.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="路由传参-页面通讯" tabindex="-1"><a class="header-anchor" href="#路由传参-页面通讯" aria-hidden="true">#</a> 路由传参（页面通讯） 💎</h2>
<figure><img src="/images/uniapp/uni30.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在项目中，页面与页面之间必然会需要传递数据，接下里我们说一说传递数据的方案</p>
<h3 id="路由跳转传递参数" tabindex="-1"><a class="header-anchor" href="#路由跳转传递参数" aria-hidden="true">#</a> 路由跳转传递参数 👻</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//传递</span>
uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"/pages/list/list?name=itbaizhan"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//接收</span>
<span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件之间传递参数" tabindex="-1"><a class="header-anchor" href="#组件之间传递参数" aria-hidden="true">#</a> 组件之间传递参数 👻</h3>
<ul>
<li>
<p>父传子</p>
</li>
<li>
<p>子传父</p>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>关于组件之间的通讯，请参考<a href="">Vue组件通讯</a></p>
</div>
<p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/4.mp3"
  title="音乐"
  poster="/mp3/4.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="组件通讯" tabindex="-1"><a class="header-anchor" href="#组件通讯" aria-hidden="true">#</a> 组件通讯 💎</h2>
<figure><img src="/images/uniapp/uni31.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在uni-app中，组件通讯遵循Vue的规则</p>
<p>跨组件通讯</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>在组件中，不可以使用onLoad()函数，在页面中才可以使用。</p>
<p>这里说的是非子父级关系的组件通讯，而是兄弟组件之间的数据传递</p>
</div>
<p>发送数据组件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">sendWorldHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'msg'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
       <span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">'兄弟之间'</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取数据组件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'msg'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/5.mp3"
  title="音乐"
  poster="/mp3/5.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="数据缓存-同步" tabindex="-1"><a class="header-anchor" href="#数据缓存-同步" aria-hidden="true">#</a> 数据缓存_同步 💎</h2>
<figure><img src="/images/uniapp/uni32.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>本地存储也是实际项目中必备的接口，一些用户信息、数据信息等需要存储到本地</p>
<div class="hint-container info">
<p class="hint-container-title">同步数据缓存</p>
<ul>
<li>uni.setStorageSync(KEY,DATA)</li>
<li>uni.getStorageSync(KEY)</li>
<li>uni.getStorageInfoSync()</li>
<li>uni.removeStorageSync(KEY)</li>
<li>uni.clearStorageSync()</li>
</ul>
</div>
<h3 id="uni-setstoragesync" tabindex="-1"><a class="header-anchor" href="#uni-setstoragesync" aria-hidden="true">#</a> uni.setStorageSync 👻</h3>
<p>将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    uni<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">'storage_key'</span><span class="token punctuation">,</span> <span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-getstoragesync" tabindex="-1"><a class="header-anchor" href="#uni-getstoragesync" aria-hidden="true">#</a> uni.getStorageSync 👻</h3>
<p>从本地缓存中同步获取指定 key 对应的内容</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">'storage_key'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-getstorageinfosync" tabindex="-1"><a class="header-anchor" href="#uni-getstorageinfosync" aria-hidden="true">#</a> uni.getStorageInfoSync 👻</h3>
<p>同步获取当前 storage 的相关信息</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getStorageInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>keys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>currentSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>limitSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-removestoragesync" tabindex="-1"><a class="header-anchor" href="#uni-removestoragesync" aria-hidden="true">#</a> uni.removeStorageSync 👻</h3>
<p>从本地缓存中同步移除指定 key</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    uni<span class="token punctuation">.</span><span class="token function">removeStorageSync</span><span class="token punctuation">(</span><span class="token string">'storage_key'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-clearstoragesync" tabindex="-1"><a class="header-anchor" href="#uni-clearstoragesync" aria-hidden="true">#</a> uni.clearStorageSync 👻</h3>
<p>同步清理本地数据缓存</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    uni<span class="token punctuation">.</span><span class="token function">clearStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>轻松一刻</strong>  🎧</p>
<AudioPlayer
  src="/mp3/6.mp3"
  title="音乐"
  poster="/mp3/6.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="数据缓存-异步" tabindex="-1"><a class="header-anchor" href="#数据缓存-异步" aria-hidden="true">#</a> 数据缓存_异步 💎</h2>
<figure><img src="/images/uniapp/uni33.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>本地存储也是实际项目中必备的接口，一些用户信息、数据信息等需要存储到本地</p>
<div class="hint-container info">
<p class="hint-container-title">异步数据缓存</p>
<ul>
<li>uni.setStorage(OBJECT)</li>
<li>uni.getStorage(OBJECT)</li>
<li>uni.getStorageInfo(OBJECT)</li>
<li>uni.removeStorage(OBJECT)</li>
<li>uni.clearStorage()</li>
</ul>
</div>
<h3 id="uni-setstorage" tabindex="-1"><a class="header-anchor" href="#uni-setstorage" aria-hidden="true">#</a> uni.setStorage  👻</h3>
<p>将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'storage_key'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-getstorage" tabindex="-1"><a class="header-anchor" href="#uni-getstorage" aria-hidden="true">#</a> uni.getStorage  👻</h3>
<p>从本地缓存中异步获取指定 key 对应的内容</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'storage_key'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-getstorageinfo" tabindex="-1"><a class="header-anchor" href="#uni-getstorageinfo" aria-hidden="true">#</a> uni.getStorageInfo  👻</h3>
<p>异步获取当前 storage 的相关信息</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">getStorageInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>keys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>currentSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>limitSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-removestorage" tabindex="-1"><a class="header-anchor" href="#uni-removestorage" aria-hidden="true">#</a> uni.removeStorage  👻</h3>
<p>从本地缓存中异步移除指定 key</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">removeStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'storage_key'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-clearstorage" tabindex="-1"><a class="header-anchor" href="#uni-clearstorage" aria-hidden="true">#</a> uni.clearStorage  👻</h3>
<p>清理本地数据缓存</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">clearStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>轻松一刻</strong>  🎧</p>
<AudioPlayer
  src="/mp3/7.mp3"
  title="音乐"
  poster="/mp3/7.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求" aria-hidden="true">#</a> 网络请求 💎</h2>
<figure><img src="/images/uniapp/uni34.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>发起网络请求：uni.request(OBJECT)</p>
<div class="hint-container info">
<p class="hint-container-title">参数说明</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>必填</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>url</td>
<td>String</td>
<td>是</td>
<td></td>
<td>开发者服务器接口地址</td>
</tr>
<tr>
<td>data</td>
<td>Object/String/ArrayBuffer</td>
<td>否</td>
<td></td>
<td>请求的参数</td>
</tr>
<tr>
<td>header</td>
<td>Object</td>
<td>否</td>
<td></td>
<td>设置请求的 header，header 中不能设置 Referer。</td>
</tr>
<tr>
<td>method</td>
<td>String</td>
<td>否</td>
<td>GET</td>
<td>请求方式</td>
</tr>
<tr>
<td>timeout</td>
<td>Number</td>
<td>否</td>
<td>60000</td>
<td>超时时间，单位 ms</td>
</tr>
<tr>
<td>success</td>
<td>Function</td>
<td>否</td>
<td></td>
<td>收到开发者服务器成功返回的回调函数</td>
</tr>
<tr>
<td>fail</td>
<td>Function</td>
<td>否</td>
<td></td>
<td>接口调用失败的回调函数</td>
</tr>
<tr>
<td>complete</td>
<td>Function</td>
<td>否</td>
<td></td>
<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>
</tr>
</tbody>
</table>
</div>
<div class="hint-container info">
<p class="hint-container-title">success返回参数说明</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>必填</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>url</td>
<td>String</td>
<td>是</td>
<td></td>
<td>开发者服务器接口地址</td>
</tr>
<tr>
<td>data</td>
<td>Object/String/ArrayBuffer</td>
<td>否</td>
<td></td>
<td>请求的参数</td>
</tr>
<tr>
<td>header</td>
<td>Object</td>
<td>否</td>
<td></td>
<td>设置请求的 header，header 中不能设置 Referer。</td>
</tr>
<tr>
<td>method</td>
<td>String</td>
<td>否</td>
<td>GET</td>
<td>请求方式</td>
</tr>
<tr>
<td>timeout</td>
<td>Number</td>
<td>否</td>
<td>60000</td>
<td>超时时间，单位 ms</td>
</tr>
<tr>
<td>success</td>
<td>Function</td>
<td>否</td>
<td></td>
<td>收到开发者服务器成功返回的回调函数</td>
</tr>
<tr>
<td>fail</td>
<td>Function</td>
<td>否</td>
<td></td>
<td>接口调用失败的回调函数</td>
</tr>
<tr>
<td>complete</td>
<td>Function</td>
<td>否</td>
<td></td>
<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>
</tr>
</tbody>
</table>
</div>
<h3 id="get请求" tabindex="-1"><a class="header-anchor" href="#get请求" aria-hidden="true">#</a> GET请求 👻</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"</span><span class="token punctuation">,</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post请求" tabindex="-1"><a class="header-anchor" href="#post请求" aria-hidden="true">#</a> POST请求 👻</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://iwenwiki.com/api/blueberrypai/login.php"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user_id</span><span class="token operator">:</span> <span class="token string">"iwen@qq.com"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">"iwen123"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">verification_code</span><span class="token operator">:</span> <span class="token string">"crfvw"</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Content-type'</span><span class="token operator">:</span> <span class="token string">'application/x-www-form-urlencoded'</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/8.mp3"
  title="音乐"
  poster="/mp3/8.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


