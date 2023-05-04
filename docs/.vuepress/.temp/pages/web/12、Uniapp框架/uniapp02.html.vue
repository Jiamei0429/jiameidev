<template><div><h1 id="_12-2-全局配置" tabindex="-1"><a class="header-anchor" href="#_12-2-全局配置" aria-hidden="true">#</a> 12.2 全局配置 🎉</h1>
<h2 id="tarbar" tabindex="-1"><a class="header-anchor" href="#tarbar" aria-hidden="true">#</a> tarBar 💎</h2>
<figure><img src="/images/uniapp/uni11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>pages.json 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等。</p>
<p>它类似微信小程序中app.json的页面管理部分</p>
<p>如果应用是一个多 tab 应用，可以通过 tabBar 配置项指定一级导航栏，以及 tab 切换时显示的对应页</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>当设置 position 为 top 时，将不会显示 icon</p>
<p>tabBar 中的 list 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序</p>
<p>tabbar 切换第一次加载时可能渲染不及时，可以在每个tabbar页面的onLoad生命周期里先弹出一个等待雪花</p>
<p>tabbar 的页面展现过一次后就保留在内存中，再次切换 tabbar 页面，只会触发每个页面的onShow，不会再触发onLoad</p>
<p>顶部的 tabbar 目前仅微信小程序上支持</p>
</div>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"color"</span><span class="token operator">:</span><span class="token string">"#8a8a8a"</span><span class="token punctuation">,</span>          <span class="token comment">// tab 上的文字默认颜色</span>
  <span class="token property">"selectedColor"</span><span class="token operator">:</span><span class="token string">"#ff0000"</span><span class="token punctuation">,</span> <span class="token comment">// tab 上的文字选中时的颜色</span>
  <span class="token property">"backgroundColor"</span><span class="token operator">:</span><span class="token string">"#ffffff"</span><span class="token punctuation">,</span><span class="token comment">// tab 的背景色</span>
  <span class="token property">"borderStyle"</span><span class="token operator">:</span><span class="token string">"black"</span><span class="token punctuation">,</span>   <span class="token comment">// tabbar 上边框的颜色，可选值 black/white，也支持其他颜色值</span>
  <span class="token property">"position"</span><span class="token operator">:</span><span class="token string">"bottom"</span><span class="token punctuation">,</span>    <span class="token comment">// 可选值 bottom、top</span>
  <span class="token property">"fontSize"</span><span class="token operator">:</span><span class="token string">"10px"</span><span class="token punctuation">,</span>     <span class="token comment">// 文字默认大小</span>
  <span class="token property">"iconWidth"</span><span class="token operator">:</span><span class="token string">"24px"</span><span class="token punctuation">,</span>     <span class="token comment">// 图标默认宽度（高度等比例缩放）</span>
  <span class="token property">"spacing"</span><span class="token operator">:</span><span class="token string">"3px"</span><span class="token punctuation">,</span>            <span class="token comment">// 图标和文字的间距</span>
  <span class="token property">"height"</span><span class="token operator">:</span><span class="token string">"50px"</span><span class="token punctuation">,</span>            <span class="token comment">// tabBar 默认高度</span>
  <span class="token property">"list"</span><span class="token operator">:</span><span class="token punctuation">[</span>
     <span class="token punctuation">{</span>
      <span class="token property">"pagePath"</span><span class="token operator">:</span><span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
      <span class="token property">"text"</span><span class="token operator">:</span><span class="token string">"首页"</span><span class="token punctuation">,</span>
      <span class="token property">"iconPath"</span><span class="token operator">:</span><span class="token string">"static/home.png"</span><span class="token punctuation">,</span>
      <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"static/home_select.png"</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">{</span>
      <span class="token property">"pagePath"</span><span class="token operator">:</span><span class="token string">"pages/cart/cart"</span><span class="token punctuation">,</span>
      <span class="token property">"text"</span><span class="token operator">:</span><span class="token string">"购物车"</span><span class="token punctuation">,</span>
      <span class="token property">"iconPath"</span><span class="token operator">:</span><span class="token string">"static/other.png"</span><span class="token punctuation">,</span>
      <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"static/other_select.png"</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">{</span>
      <span class="token property">"pagePath"</span><span class="token operator">:</span><span class="token string">"pages/user/user"</span><span class="token punctuation">,</span>
      <span class="token property">"text"</span><span class="token operator">:</span><span class="token string">"我的"</span><span class="token punctuation">,</span>
      <span class="token property">"iconPath"</span><span class="token operator">:</span><span class="token string">"static/authorization.png"</span><span class="token punctuation">,</span>
      <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"static/authorization_select.png"</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单页面自定义tarbar" tabindex="-1"><a class="header-anchor" href="#单页面自定义tarbar" aria-hidden="true">#</a> 单页面自定义tarBar</h4>
<p>使用官方定义的tarBar虽然操作简单，但是结构单一，无法满足复杂的页面结构布局，因此可以自定义tarBar布局和样式，只需要简单修改页面文件夹下的json文件即可</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"tarBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"custom"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>单页面的tarBar优先级要<mark>大于</mark>全局的tarBar</p>
<p>更多tarBar配置请参考:<a href="https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar" target="_blank" rel="noopener noreferrer">https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar<ExternalLinkIcon/></a></p>
</div>
<h2 id="窗口表现" tabindex="-1"><a class="header-anchor" href="#窗口表现" aria-hidden="true">#</a> 窗口表现 💎</h2>
<figure><img src="/images/uniapp/uni12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>pages.json 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"globalStyle"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span> <span class="token comment">// 导航栏标题颜色及状态栏前景颜色，仅支持 black/white</span>
  <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"百战"</span><span class="token punctuation">,</span> <span class="token comment">// 导航栏标题文字内容</span>
  <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#ff0000"</span><span class="token punctuation">,</span> <span class="token comment">// 导航栏背景颜色（同状态栏背景色），如"#000000"</span>
  <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#ff0000"</span><span class="token punctuation">,</span> <span class="token comment">// 窗口的背景色</span>
  <span class="token property">"pageOrientation"</span><span class="token operator">:</span> <span class="token string">"auto"</span><span class="token punctuation">,</span> <span class="token comment">//横屏配置，全局屏幕旋转设置(仅 APP/微信/QQ小程序)，支持 auto / portrait / landscape</span>
  <span class="token property">"rpxCalcMaxDeviceWidth"</span><span class="token operator">:</span> <span class="token number">960</span><span class="token punctuation">,</span> <span class="token comment">// rpx 计算所支持的最大设备宽度，单位 px</span>
  <span class="token property">"rpxCalcIncludeWidth"</span><span class="token operator">:</span> <span class="token number">750</span> <span class="token punctuation">,</span><span class="token comment">// rpx 计算特殊处理的值，始终按实际的设备宽度计算，单位 rpx</span>
  <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启下拉刷新</span>
  <span class="token property">"backgroundTextStyle"</span><span class="token operator">:</span><span class="token string">"dark"</span> <span class="token punctuation">,</span><span class="token comment">// 下拉 loading 的样式，仅支持 dark / light</span>
  <span class="token property">"onReachBottomDistance"</span><span class="token operator">:</span><span class="token number">50</span> <span class="token comment">//页面上拉触底事件触发时距页面底部距离，单位只支持px</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单页面的窗口表现" tabindex="-1"><a class="header-anchor" href="#单页面的窗口表现" aria-hidden="true">#</a> 单页面的窗口表现</h4>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span> 
  <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"百战"</span><span class="token punctuation">,</span> 
  <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#ff0000"</span><span class="token punctuation">,</span> 
  <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#ff0000"</span><span class="token punctuation">,</span> 
  <span class="token property">"pageOrientation"</span><span class="token operator">:</span> <span class="token string">"auto"</span><span class="token punctuation">,</span> 
  <span class="token property">"rpxCalcMaxDeviceWidth"</span><span class="token operator">:</span> <span class="token number">960</span><span class="token punctuation">,</span> 
  <span class="token property">"rpxCalcIncludeWidth"</span><span class="token operator">:</span> <span class="token number">750</span> <span class="token punctuation">,</span>
  <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> 
  <span class="token property">"backgroundTextStyle"</span><span class="token operator">:</span><span class="token string">"dark"</span> <span class="token punctuation">,</span>
  <span class="token property">"onReachBottomDistance"</span><span class="token operator">:</span><span class="token number">50</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单页面自定义窗口表现" tabindex="-1"><a class="header-anchor" href="#单页面自定义窗口表现" aria-hidden="true">#</a> 单页面自定义窗口表现</h4>
<p>使用官方定义的窗口表现虽然操作简单，但是结构单一，无法满足复杂的页面结构布局，因此可以自定义头部窗口的布局和样式，只需要简单修改页面文件夹下的json文件即可</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"navigationStyle"</span><span class="token operator">:</span> <span class="token string">"custom"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>单页面的窗口表现优先级要<mark>大于</mark>全局的窗口表现</p>
<p>更多窗口表现配置请参考:<a href="https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle" target="_blank" rel="noopener noreferrer">https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle<ExternalLinkIcon/></a></p>
</div>
<p><strong>轻松一刻</strong></p>
<AudioPlayer
  src="/mp3/2.mp3"
  title="音乐"
  poster="/mp3/2.jpg"
/>
<p><strong>视频教程</strong> 📽️</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


