<template><div><h1 id="_12-7-uniapp补充知识" tabindex="-1"><a class="header-anchor" href="#_12-7-uniapp补充知识" aria-hidden="true">#</a> 12.7 Uniapp补充知识 🎉</h1>
<h2 id="条件编译" tabindex="-1"><a class="header-anchor" href="#条件编译" aria-hidden="true">#</a> 条件编译 💎</h2>
<figure><img src="/images/uniapp/uni35.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>uni-app 已将常用的组件、JS API 封装到框架中，开发者按照 uni-app 规范开发即可保证多平台兼容，大部分业务均可直接满足。</p>
<p>但每个平台有自己的一些特性，因此会存在一些无法跨平台的情况。</p>
<ul>
<li>
<p>大量写 if else，会造成代码执行性能低下和管理混乱。</p>
</li>
<li>
<p>编译到不同的工程后二次修改，会让后续升级变的很麻烦。</p>
</li>
</ul>
<p>在 C 语言中，通过 <code v-pre>#ifdef</code>、<code v-pre>#ifndef</code> 的方式，为 windows、mac 等不同 os 编译不同的代码。 uni-app 参考这个思路，为 uni-app 提供了条件编译手段，在一个工程里优雅的完成了平台个性化实现。</p>
<p>条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。</p>
<div class="hint-container tip">
<p class="hint-container-title">写法</p>
<p>以 <code v-pre>#ifdef</code> 或 <code v-pre>#ifndef</code> 加 <code v-pre>%PLATFORM%</code> 开头，以 <code v-pre>#endif</code> 结尾。</p>
<ul>
<li><code v-pre>#ifdef</code>：if defined 仅在某平台存在</li>
<li><code v-pre>#ifndef</code>：if not defined 除了某平台均存在</li>
<li><code v-pre>%PLATFORM%</code>：平台名称</li>
</ul>
</div>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<table>
<thead>
<tr>
<th>条件编译写法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>#ifdef <strong>APP-PLUS</strong> 需条件编译的代码 #endif</td>
<td>仅出现在 App 平台下的代码</td>
</tr>
<tr>
<td>#ifndef <strong>H5</strong> 需条件编译的代码 #endif</td>
<td>除了 H5 平台，其它平台均存在的代码</td>
</tr>
<tr>
<td>#ifdef <strong>H5</strong> || <strong>MP-WEIXIN</strong> 需条件编译的代码 #endif</td>
<td>在 H5 平台或微信小程序平台存在的代码（这里只有||，不可能出现&amp;&amp;，因为没有交集）</td>
</tr>
</tbody>
</table>
</div>
<div class="hint-container info">
<p class="hint-container-title">%PLATFORM% 可取值如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">生效条件</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">VUE3</td>
<td style="text-align:left">HBuilderX 3.2.0+ <a href="https://ask.dcloud.net.cn/article/37834" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">APP-PLUS</td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">APP-PLUS-NVUE或APP-NVUE</td>
<td style="text-align:left">App nvue 页面</td>
</tr>
<tr>
<td style="text-align:left">APP-ANDROID</td>
<td style="text-align:left">App Android 平台 仅限 uts文件</td>
</tr>
<tr>
<td style="text-align:left">APP-IOS</td>
<td style="text-align:left">App iOS 平台 仅限 uts文件</td>
</tr>
<tr>
<td style="text-align:left">H5</td>
<td style="text-align:left">H5</td>
</tr>
<tr>
<td style="text-align:left">MP-WEIXIN</td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-ALIPAY</td>
<td style="text-align:left">支付宝小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-BAIDU</td>
<td style="text-align:left">百度小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-TOUTIAO</td>
<td style="text-align:left">字节跳动小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-LARK</td>
<td style="text-align:left">飞书小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-QQ</td>
<td style="text-align:left">QQ小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-KUAISHOU</td>
<td style="text-align:left">快手小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-JD</td>
<td style="text-align:left">京东小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-360</td>
<td style="text-align:left">360小程序</td>
</tr>
<tr>
<td style="text-align:left">MP</td>
<td style="text-align:left">微信小程序/支付宝小程序/百度小程序/字节跳动小程序/飞书小程序/QQ小程序/360小程序</td>
</tr>
<tr>
<td style="text-align:left">QUICKAPP-WEBVIEW</td>
<td style="text-align:left">快应用通用(包含联盟、华为)</td>
</tr>
<tr>
<td style="text-align:left">QUICKAPP-WEBVIEW-UNION</td>
<td style="text-align:left">快应用联盟</td>
</tr>
<tr>
<td style="text-align:left">QUICKAPP-WEBVIEW-HUAWEI</td>
<td style="text-align:left">快应用华为</td>
</tr>
</tbody>
</table>
</div>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- #ifdef H5 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cls1<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>change1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>仅仅H5显示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- #endif --></span>

        <span class="token comment">&lt;!-- #ifdef MP-WEIXIN --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cls2<span class="token punctuation">"</span></span>  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>change2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>仅仅wx小程序显示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- #endif --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// #ifdef H5</span>
<span class="token keyword">const</span> <span class="token function-variable function">change1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"仅仅H5显示"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// #endif</span>

<span class="token comment">// #ifdef MP-WEIXIN</span>
<span class="token keyword">const</span> <span class="token function-variable function">change2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">仅仅wx小程序显示</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"仅仅H5显示"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// #endif</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>    

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token comment">/*  #ifdef H5  */</span>
<span class="token selector">.cls1</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*  #endif  */</span>

<span class="token comment">/*  #ifdef MP-WEIXIN  */</span>
<span class="token selector">.cls1</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*  #endif  */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>条件编译更多信息请参考：<a href="https://uniapp.dcloud.net.cn/tutorial/platform.html" target="_blank" rel="noopener noreferrer">https://uniapp.dcloud.net.cn/tutorial/platform.html<ExternalLinkIcon/></a></p>
</div>
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


