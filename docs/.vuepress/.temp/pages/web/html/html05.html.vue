<template><div><h1 id="_1-5-字符与元素分类" tabindex="-1"><a class="header-anchor" href="#_1-5-字符与元素分类" aria-hidden="true">#</a> 1.5 字符与元素分类🎉</h1>
<h2 id="实体字符" tabindex="-1"><a class="header-anchor" href="#实体字符" aria-hidden="true">#</a> 实体字符 💎</h2>
<figure><img src="/images/html/html20.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>我们考虑⼀个问题，如果我们要在页面上显示⼀个<code v-pre>&lt;</code>的时候，应该如何来写，如果直接写符号显然是不合理的，毕竟，它是属于标签的关键字，那我们应该如何来实现呢？</p>
<p>如果希望正确地显示预留字符，我们必须在 HTML 源代码中使用字符实体</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token entity" title="&#165;">&amp;#165;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&reg;">&amp;reg;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">显示结果</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">实体名称</th>
<th style="text-align:center">实体编号</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">空格</td>
<td style="text-align:center">&amp;nbsp</td>
<td style="text-align:center">&amp;#160</td>
</tr>
<tr>
<td style="text-align:center">&lt;</td>
<td style="text-align:center">小于号</td>
<td style="text-align:center">&amp;lt</td>
<td style="text-align:center">&amp;#60</td>
</tr>
<tr>
<td style="text-align:center">&gt;</td>
<td style="text-align:center">大于号</td>
<td style="text-align:center">&amp;gt</td>
<td style="text-align:center">&amp;#62</td>
</tr>
<tr>
<td style="text-align:center">&amp;</td>
<td style="text-align:center">和号</td>
<td style="text-align:center">&amp;amp</td>
<td style="text-align:center">&amp;#38</td>
</tr>
<tr>
<td style="text-align:center">&quot;</td>
<td style="text-align:center">引号</td>
<td style="text-align:center">&amp;quot</td>
<td style="text-align:center">&amp;#34</td>
</tr>
<tr>
<td style="text-align:center">'</td>
<td style="text-align:center">撇号</td>
<td style="text-align:center">&amp;apos (IE不支持)</td>
<td style="text-align:center">&amp;#39</td>
</tr>
<tr>
<td style="text-align:center">©</td>
<td style="text-align:center">版权（copyright）</td>
<td style="text-align:center">&amp;copy</td>
<td style="text-align:center">&amp;#169</td>
</tr>
<tr>
<td style="text-align:center">®</td>
<td style="text-align:center">注册商标</td>
<td style="text-align:center">&amp;reg</td>
<td style="text-align:center">&amp;#174</td>
</tr>
<tr>
<td style="text-align:center">¥</td>
<td style="text-align:center">元（yen）</td>
<td style="text-align:center">&amp;yen</td>
<td style="text-align:center">&amp;#165</td>
</tr>
</tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>实体名称对大小写敏感！</p>
<p>后边必须带 &quot;;&quot;</p>
</div>

<CodeDemo id="code-demo-170" type="normal" title="%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA" code="eJyrVsooyc1RslKyKbBTUzY0M7W20S+wi8kDcYtS05F4yfkFlUhcZWMLawUIV6kWANpHFI4=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token entity" title="&#165;">&amp;#165;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&reg;">&amp;reg;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&copy;">&amp;copy;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token entity" title="&#38;">&amp;#38;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><VuePlayground title="%E9%9A%8F%E5%A0%82%E8%AE%AD%E7%BB%83" key="9497e90c" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgPCEtLei%2FmemHjOWGmWh0bWzku6PnoIEtLT5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/5.mp3"
  title="音乐"
  poster="/mp3/5.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
<h2 id="元素分类" tabindex="-1"><a class="header-anchor" href="#元素分类" aria-hidden="true">#</a> 元素分类 💎</h2>
<figure><img src="/images/html/html21.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>HTML5出现之前，经常把元素按照块级元素和内联元素来区分。在HTML5中，元素不再按照这种⽅式来区分， 而是按照内容模型来区分，分为元数据型、区块型、标题型、文档流型、语句型、内嵌型、交互型。元素不属于任何⼀个类别，被称为穿透的，元素可能属于不止⼀个类别，称为混合的</p>
<p>虽然到了HTML5的版本，元素分类更细致了，但是这对初学者并不友好,所以我们仍然按照块元素和内联元素做区分，这对我们的布局起到了至关重要的作用</p>
<p>内联元素和块级元素的区别：</p>
<table>
<thead>
<tr>
<th style="text-align:center">块级元素</th>
<th style="text-align:center">内联元素</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">块元素会在页面中独占一行（自上向下垂直排列）</td>
<td style="text-align:center">行内元素不会独占页面中的一行，只占自身的大小</td>
</tr>
<tr>
<td style="text-align:center">可以设置width，height属性</td>
<td style="text-align:center">行内元素设置width，height属性无效</td>
</tr>
<tr>
<td style="text-align:center">⼀般块级元素可以包含行内元素和其他块级元素</td>
<td style="text-align:center">⼀般内联元素包含内联元素不包含块级元素</td>
</tr>
</tbody>
</table>
<div class="hint-container info">
<p class="hint-container-title">常见块级元素</p>
<p>div、form、h1~h6、hr、p、table、ul、等</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">常见内联元素</p>
<p>a、b、em、i、span、strong等</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">行内块级元素（特点：不换行、能够识别宽高）</p>
<p>button、img、input等</p>
</div>

<CodeDemo id="code-demo-257" type="normal" title="%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA" code="eJyrVsooyc1RslKyKbB71jHx2Yz1T+dON7TRL7CLybMpzUGIGdnoA7lAweKCxDyYcFvri8YpT1ubn29ZANQDlgGqSM3FIg/UDxQHyiYVKeiD6dKSknyYSS8W9gAVA615vms51Lz3e3pezNz7vGXbkx29z3oXAVUARZ7sbQOpXt/2tGP103V7X66eYaMPNQhoZGZeQWmJQkllQaptjFJJakVJjJJCWWJOKYiLyx4jIu2JUQK5WqkWALshqEY=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>我是块1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>我是块2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>我是内联元素1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">></span></span>我是内联元素2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>我是行内块级元素1，虽然不换行，但是识别宽高<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>我是行内块级元素2，虽然不换行，但是识别宽高<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><VuePlayground title="%E9%9A%8F%E5%A0%82%E8%AE%AD%E7%BB%83" key="38df198a" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgPCEtLei%2FmemHjOWGmWh0bWzku6PnoIEtLT5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<p><strong>轻松一刻</strong> 🎧</p>
<AudioPlayer
  src="/mp3/6.mp3"
  title="音乐"
  poster="/mp3/6.jpg"
/>
<p><strong>视频教程</strong> 🎥</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


