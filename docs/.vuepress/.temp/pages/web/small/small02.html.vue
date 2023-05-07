<template><div><h1 id="_11-2-全局配置" tabindex="-1"><a class="header-anchor" href="#_11-2-全局配置" aria-hidden="true">#</a> 11.2 全局配置 🎉</h1>
<h2 id="全局配置-pages" tabindex="-1"><a class="header-anchor" href="#全局配置-pages" aria-hidden="true">#</a> 全局配置_ Pages 💎</h2>
<figure><img src="/images/small/s15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>用于指定小程序由哪些页面组成，每一项都对应一个页面的路径（含文件名） 信息。文件名不需要写文件后缀，框架会自动去寻找对应位置的 <code v-pre>.json</code>, <code v-pre>.js</code>, <code v-pre>.wxml</code>, <code v-pre>.wxss</code> 四个文件进行处理</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>未指定 entryPagePath 时，数组的第一项代表小程序的初始页面（首页）</p>
</div>
<p>小程序中新增/减少页面，都需要对<code v-pre>app.json</code>文件中 <code v-pre>pages</code> 数组进行修改</p>
<p>默认项目存在两个页面: <code v-pre>index</code>和<code v-pre>logs</code>,对应的<code v-pre>app.json</code>中<code v-pre>pages</code>属性的配置</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
  <span class="token string">"pages/logs/logs"</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="entrypagepath" tabindex="-1"><a class="header-anchor" href="#entrypagepath" aria-hidden="true">#</a> entryPagePath 👻</h3>
<p>指定小程序的默认启动路径（首页），在 <code v-pre>app.json</code> 配置文件中增加 <code v-pre>entryPagePath</code></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"entryPagePath"</span><span class="token operator">:</span> <span class="token string">"pages/logs/logs"</span><span class="token punctuation">,</span>
  <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
    <span class="token string">"pages/logs/logs"</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增加页面" tabindex="-1"><a class="header-anchor" href="#增加页面" aria-hidden="true">#</a> 增加页面 👻</h3>
<p>方式一：可视化操作（推荐）</p>
<ul>
<li>选中pages --&gt; 右键新建文件夹 --&gt; 选中新建好的文件夹 --&gt; 右键新建Page</li>
</ul>
<p>方式二：修改app.json文件</p>
<ul>
<li>修改 app.json 文件中的pages属性（在pages中直接添加路径，可以自动生成页面）<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>  <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">"pages/news/news"</span><span class="token punctuation">,</span>
  <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
  <span class="token string">"pages/logs/logs"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="删除页面" tabindex="-1"><a class="header-anchor" href="#删除页面" aria-hidden="true">#</a> 删除页面 👻</h3>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>删除时要删除<code v-pre>app.json</code> 文件中<code v-pre>pages</code>属性下的对应路径，同时要删除页面文件夹，两者必须保持同步，否则不能完成删除操作</p>
</div>
<h2 id="全局配置-window" tabindex="-1"><a class="header-anchor" href="#全局配置-window" aria-hidden="true">#</a> 全局配置_window 💎</h2>
<figure><img src="/images/small/s16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>window</code> 用于设置小程序的状态栏、导航条、标题、窗口背景色等等</p>
<div class="hint-container info">
<p class="hint-container-title">常用属性</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>navigationBarBackgroundColor</td>
<td>HexColor</td>
<td>#000000</td>
<td>导航栏背景颜色，如 <code v-pre>#000000</code></td>
</tr>
<tr>
<td>navigationBarTextStyle</td>
<td>string</td>
<td>white</td>
<td>导航栏标题颜色，仅支持 <code v-pre>black</code> / <code v-pre>white</code></td>
</tr>
<tr>
<td>navigationBarTitleText</td>
<td>string</td>
<td></td>
<td>导航栏标题文字内容</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>HexColor</td>
<td>#ffffff</td>
<td>窗口的背景色</td>
</tr>
<tr>
<td>backgroundTextStyle</td>
<td>string</td>
<td>dark</td>
<td>下拉 loading 的样式，仅支持 <code v-pre>dark</code> / <code v-pre>light</code></td>
</tr>
<tr>
<td>enablePullDownRefresh</td>
<td>boolean</td>
<td>false</td>
<td>是否开启全局的下拉刷新。</td>
</tr>
<tr>
<td>onReachBottomDistance</td>
<td>number</td>
<td>50</td>
<td>页面上拉触底事件触发时距页面底部距离，单位为 px。</td>
</tr>
</tbody>
</table>
</div>
<p>修改app.json文件中的window属性配置</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"window"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
  <span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
  <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"第一个小程序"</span><span class="token punctuation">,</span>
  <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
  <span class="token property">"backgroundTextStyle"</span><span class="token operator">:</span> <span class="token string">"light"</span><span class="token punctuation">,</span>
  <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"onReachBottomDistance"</span><span class="token operator">:</span><span class="token number">50</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局配置-tabbar" tabindex="-1"><a class="header-anchor" href="#全局配置-tabbar" aria-hidden="true">#</a> 全局配置_tabBar 💎</h2>
<figure><img src="/images/small/s17.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置 tab 切换时显示的对应页面</p>
<div class="hint-container info">
<p class="hint-container-title">tabBar属性</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>必填</th>
<th>默认值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>color</td>
<td>HexColor</td>
<td>是</td>
<td></td>
<td>tab 上的文字默认颜色，仅支持十六进制颜色</td>
</tr>
<tr>
<td>selectedColor</td>
<td>HexColor</td>
<td>是</td>
<td></td>
<td>tab 上的文字选中时的颜色，仅支持十六进制颜色</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>HexColor</td>
<td>是</td>
<td></td>
<td>tab 的背景色，仅支持十六进制颜色</td>
</tr>
<tr>
<td>borderStyle</td>
<td>string</td>
<td>否</td>
<td>black</td>
<td>tabbar 上边框的颜色， 仅支持 <code v-pre>black</code> / <code v-pre>white</code></td>
</tr>
<tr>
<td>list</td>
<td>Array</td>
<td>是</td>
<td></td>
<td>tab 的列表，详见 <code v-pre>list</code> 属性说明，最少 2 个、最多 5 个 tab</td>
</tr>
<tr>
<td>position</td>
<td>string</td>
<td>否</td>
<td>bottom</td>
<td>tabBar 的位置，仅支持 <code v-pre>bottom</code> / <code v-pre>top</code></td>
</tr>
</tbody>
</table>
<hr>
<p>常用属性是 <code v-pre>list</code> ,其中 <code v-pre>list</code> 接受一个数组，只能配置最少 2 个、最多 5 个 tab</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">List属性说明</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pagePath</td>
<td>string</td>
<td>是</td>
<td>页面路径，必须在 pages 中先定义</td>
</tr>
<tr>
<td>text</td>
<td>string</td>
<td>是</td>
<td>tab 上按钮文字</td>
</tr>
<tr>
<td>iconPath</td>
<td>string</td>
<td>否</td>
<td>图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。 <strong>当 <code v-pre>position</code> 为 <code v-pre>top</code> 时，不显示 icon。</strong></td>
</tr>
<tr>
<td>selectedIconPath</td>
<td>string</td>
<td>否</td>
<td>选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。 <strong>当 <code v-pre>position</code> 为 <code v-pre>top</code> 时，不显示 icon。</strong></td>
</tr>
</tbody>
</table>
</div>
<p>修改<code v-pre>app.json</code>配置文件，增加<code v-pre>tabBar</code>属性配置</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"color"</span><span class="token operator">:</span><span class="token string">"#999999"</span><span class="token punctuation">,</span>
  <span class="token property">"selectedColor"</span><span class="token operator">:</span><span class="token string">"#ff0000"</span><span class="token punctuation">,</span>
  <span class="token property">"backgroundColor"</span><span class="token operator">:</span><span class="token string">"#fff"</span><span class="token punctuation">,</span>
  <span class="token property">"borderStyle"</span><span class="token operator">:</span><span class="token string">"black"</span><span class="token punctuation">,</span>
  <span class="token property">"position"</span><span class="token operator">:</span><span class="token string">"bottom"</span><span class="token punctuation">,</span>
  <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
    <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
    <span class="token property">"iconPath"</span><span class="token operator">:</span><span class="token string">"./images/home.png"</span><span class="token punctuation">,</span>
    <span class="token property">"selectedIconPath"</span><span class="token operator">:</span><span class="token string">"./images/home_select.png"</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/news/news"</span><span class="token punctuation">,</span>
    <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"新闻"</span><span class="token punctuation">,</span>
    <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"./images/news.png"</span><span class="token punctuation">,</span>
    <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"./images/news_select.png"</span>
   <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用其他全局配置" tabindex="-1"><a class="header-anchor" href="#常用其他全局配置" aria-hidden="true">#</a> 常用其他全局配置 💎</h2>
<figure><img src="/images/small/s18.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>小程序根目录下的 <code v-pre>app.json</code> 文件用来对微信小程序进行其他全局配置。文件内容为一个 JSON 对象</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>必填</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>style</td>
<td>string</td>
<td>否</td>
<td>指定使用升级后的 weui 样式</td>
</tr>
<tr>
<td>sitemapLocation</td>
<td>string</td>
<td>是</td>
<td>指明 sitemap.json 的位置</td>
</tr>
<tr>
<td>networkTimeout</td>
<td>Object</td>
<td>否</td>
<td>网络超时时间</td>
</tr>
<tr>
<td>debug</td>
<td>boolean</td>
<td>否</td>
<td>是否开启 debug 模式，默认关闭</td>
</tr>
<tr>
<td>debugOptions</td>
<td>Object</td>
<td>否</td>
<td>调试相关配置</td>
</tr>
<tr>
<td>permission</td>
<td>Object</td>
<td>否</td>
<td>小程序接口权限相关设置</td>
</tr>
<tr>
<td>...</td>
<td>...</td>
<td>...</td>
<td>...</td>
</tr>
</tbody>
</table>
<h3 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style 👻</h3>
<p>微信客户端 7.0 开始，UI 界面进行了大改版。小程序也进行了基础组件的样式升级。app.json 中配置 <code v-pre>&quot;style&quot;: &quot;v2&quot;</code>可表明启用新版的组件样式</p>
<h3 id="sitemaplocation" tabindex="-1"><a class="header-anchor" href="#sitemaplocation" aria-hidden="true">#</a> sitemapLocation 👻</h3>
<p>指明 <code v-pre>sitemap.json</code>的位置；默认为 <code v-pre>'sitemap.json'</code> 即在 <code v-pre>app.json</code> 同级目录下名字的 <code v-pre>sitemap.json</code> 文件</p>
<h3 id="networktimeout" tabindex="-1"><a class="header-anchor" href="#networktimeout" aria-hidden="true">#</a> networkTimeout 👻</h3>
<p>各类网络请求的超时时间，单位均为毫秒</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>必填</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>request</td>
<td>number</td>
<td>否</td>
<td>60000</td>
<td>wx.request 的超时时间，单位：毫秒</td>
</tr>
<tr>
<td>connectSocket</td>
<td>number</td>
<td>否</td>
<td>60000</td>
<td>wx.connectSocket 的超时时间，单位：毫秒</td>
</tr>
<tr>
<td>uploadFile</td>
<td>number</td>
<td>否</td>
<td>60000</td>
<td>wx.uploadFile 的超时时间，单位：毫秒</td>
</tr>
<tr>
<td>downloadFile</td>
<td>number</td>
<td>否</td>
<td>60000</td>
<td>wx.downloadFile 的超时时间，单位：毫秒</td>
</tr>
</tbody>
</table>
<h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> debug 👻</h3>
<p>可以在开发者工具中开启 <code v-pre>debug</code> 模式，在开发者工具的控制台面板，调试信息以 <code v-pre>info</code> 的形式给出，其信息有 <code v-pre>Page</code> 的注册，页面路由，数据更新，事件触发等。可以帮助开发者快速定位一些常见的问题</p>
<h3 id="debugoptions" tabindex="-1"><a class="header-anchor" href="#debugoptions" aria-hidden="true">#</a> debugOptions 👻</h3>
<p>小程序调试相关配置项</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>必填</th>
<th>默认值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>enableFPSPanel</td>
<td>boolean</td>
<td>否</td>
<td>false</td>
<td>是否开启 FPS 面板</td>
</tr>
</tbody>
</table>
<h3 id="fps-面板" tabindex="-1"><a class="header-anchor" href="#fps-面板" aria-hidden="true">#</a> FPS 面板 👻</h3>
<p>为了便于开发者调试渲染层的交互性能，小程序基础库提供了选项开启 FPS 面板，开发者可以实时查看渲染层帧率</p>
<p><strong>开启方式</strong>：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"debugOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"enableFPSPanel"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>必须在真机上才能看到</p>
</div>
<h3 id="permission" tabindex="-1"><a class="header-anchor" href="#permission" aria-hidden="true">#</a> permission 👻</h3>
<p>小程序接口权限相关设置</p>
<p>例如：小程序定位设置，配置如下</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"permission"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"scope.userLocation"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"desc"</span><span class="token operator">:</span> <span class="token string">"你的位置信息将用于小程序位置接口的效果展示"</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"entryPagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
  <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"pages/news/news"</span><span class="token punctuation">,</span>
    <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
    <span class="token string">"pages/logs/logs"</span><span class="token punctuation">,</span>
    <span class="token string">"pages/about/about"</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"window"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
    <span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"第一个小程序"</span><span class="token punctuation">,</span>
    <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
    <span class="token property">"backgroundTextStyle"</span><span class="token operator">:</span> <span class="token string">"light"</span><span class="token punctuation">,</span>
    <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"onReachBottomDistance"</span><span class="token operator">:</span> <span class="token number">50</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#999999"</span><span class="token punctuation">,</span>
    <span class="token property">"selectedColor"</span><span class="token operator">:</span> <span class="token string">"#ff0000"</span><span class="token punctuation">,</span>
    <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>
    <span class="token property">"borderStyle"</span><span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    <span class="token property">"position"</span><span class="token operator">:</span> <span class="token string">"bottom"</span><span class="token punctuation">,</span>
    <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
      <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"首页"</span><span class="token punctuation">,</span>
      <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"./images/home.png"</span><span class="token punctuation">,</span>
      <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"./images/home_select.png"</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/news/news"</span><span class="token punctuation">,</span>
      <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"新闻"</span><span class="token punctuation">,</span>
      <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"./images/news.png"</span><span class="token punctuation">,</span>
      <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"./images/news_select.png"</span>
     <span class="token punctuation">}</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"v2"</span><span class="token punctuation">,</span>
  <span class="token property">"sitemapLocation"</span><span class="token operator">:</span> <span class="token string">"sitemap.json"</span><span class="token punctuation">,</span>
  <span class="token property">"networkTimeout"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"request"</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token property">"downloadFile"</span><span class="token operator">:</span> <span class="token number">10000</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"debug"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"permission"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"scope.userLocation"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"desc"</span><span class="token operator">:</span> <span class="token string">"你的位置信息将用于小程序位置接口的效果展示"</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"debugOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"enableFPSPanel"</span><span class="token operator">:</span> <span class="token boolean">true</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单页面配置" tabindex="-1"><a class="header-anchor" href="#单页面配置" aria-hidden="true">#</a> 单页面配置 💎</h2>
<figure><img src="/images/small/s19.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>app.json</code> 中的部分配置，也支持对单个页面进行配置</p>
<p>可以在页面对应的 文件<code v-pre>.json</code> 文件来对本页面的表现进行配置</p>
<div class="hint-container info">
<p class="hint-container-title">配置项</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>navigationBarBackgroundColor</td>
<td>HexColor</td>
<td>#000000</td>
<td>导航栏背景颜色，如 <code v-pre>#000000</code></td>
</tr>
<tr>
<td>navigationBarTextStyle</td>
<td>string</td>
<td>white</td>
<td>导航栏标题颜色，仅支持 <code v-pre>black</code> / <code v-pre>white</code></td>
</tr>
<tr>
<td>navigationBarTitleText</td>
<td>string</td>
<td></td>
<td>导航栏标题文字内容</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>HexColor</td>
<td>#ffffff</td>
<td>窗口的背景色(开启下拉菜单可以观察)</td>
</tr>
<tr>
<td>backgroundTextStyle</td>
<td>string</td>
<td>dark</td>
<td>下拉 loading 的样式，仅支持 <code v-pre>dark</code> / <code v-pre>light</code></td>
</tr>
<tr>
<td>enablePullDownRefresh</td>
<td>boolean</td>
<td>false</td>
<td>是否开启当前页面下拉刷新</td>
</tr>
<tr>
<td>onReachBottomDistance</td>
<td>number</td>
<td>50</td>
<td>页面上拉触底事件触发时距页面底部距离，单位为px。</td>
</tr>
<tr>
<td>style</td>
<td>string</td>
<td>default</td>
<td>启用新版的组件样式</td>
</tr>
<tr>
<td>...</td>
<td>...</td>
<td>...</td>
<td>...</td>
</tr>
</tbody>
</table>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>虽然配置与 <code v-pre>app.json</code> 基本一致，但是注意，不再需要添加 <code v-pre>window</code> 作为父级</p>
<p>单页面里的<code v-pre>.json</code>配置会覆盖掉<code v-pre>app.json</code>的配置</p>
</div>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"usingComponents"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#ffffff"</span><span class="token punctuation">,</span>
  <span class="token property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
  <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"第二个页面"</span><span class="token punctuation">,</span>
  <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#ffffff"</span><span class="token punctuation">,</span>
  <span class="token property">"backgroundTextStyle"</span><span class="token operator">:</span> <span class="token string">"light"</span><span class="token punctuation">,</span>
  <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"onReachBottomDistance"</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token property">"style"</span><span class="token operator">:</span><span class="token string">"v2"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">自定义window和tabBar</p>
<ul>
<li>自定义window</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"navigationStyle"</span><span class="token operator">:</span> <span class="token string">"custom"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用官网自带的头部，样式单一，结构固定，不适合复杂业务的处理，因此可以选择当前页面自定义头部布局</p>
<ul>
<li>自定义tarBar</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"custom"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    ……
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有 <code v-pre>tab</code> 页的 <code v-pre>json</code> 里需声明 usingComponents 项，也可以在 <code v-pre>app.json</code> 全局开启。</p>
</div>
<h2 id="全局配置-公共样式" tabindex="-1"><a class="header-anchor" href="#全局配置-公共样式" aria-hidden="true">#</a> 全局配置_公共样式 💎</h2>
<figure><img src="/images/small/s20.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在项目根目录的 app.wxss 文件为小程序公的共样式表，相当与CSS初始化文件配置</p>
<p>WXSS (WeiXin Style Sheets)是一套样式语言，用于描述 WXML 的组件样式</p>
<p>WXSS 用来决定 WXML 的组件应该怎么显示</p>
<p>为了适应广大的前端开发者，WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改。</p>
<p>与 CSS 相比，WXSS 扩展的特性有</p>
<ul>
<li>
<p>尺寸单位</p>
</li>
<li>
<p>样式导入</p>
</li>
</ul>
<h3 id="公共样式" tabindex="-1"><a class="header-anchor" href="#公共样式" aria-hidden="true">#</a> 公共样式 👻</h3>
<p>在 <code v-pre>app.wxss</code> 文件中添加样式</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">text</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目中所有的页面的 <code v-pre>text</code> 文本都会呈现红色</p>
<h3 id="尺寸单位" tabindex="-1"><a class="header-anchor" href="#尺寸单位" aria-hidden="true">#</a> 尺寸单位 👻</h3>
<p>rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素</p>
<table>
<thead>
<tr>
<th>设备</th>
<th>rpx换算px (屏幕宽度/750)</th>
<th>px换算rpx (750/屏幕宽度)</th>
</tr>
</thead>
<tbody>
<tr>
<td>iPhone5</td>
<td>1rpx = 0.42px</td>
<td>1px = 2.34rpx</td>
</tr>
<tr>
<td>iPhone6</td>
<td>1rpx = 0.5px</td>
<td>1px = 2rpx</td>
</tr>
<tr>
<td>iPhone6 Plus</td>
<td>1rpx = 0.552px</td>
<td>1px = 1.81rpx</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>建议： 开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。</p>
<p>注意： 在较小的屏幕上不可避免的会有一些毛刺，请在开发时尽量避免这种情况</p>
</div>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200rpx<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在iphone5上的效果，元素的宽高是85px</p>
<figure><img src="/images/small/s21.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在iphone6上的效果，元素的宽高是100px</p>
<figure><img src="/images/small/s22.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="样式导入" tabindex="-1"><a class="header-anchor" href="#样式导入" aria-hidden="true">#</a> 样式导入 👻</h3>
<p>使用<code v-pre>@import</code>语句可以导入外联样式表，<code v-pre>@import</code>后跟需要导入的外联样式表的相对路径，用;表示语句结束</p>
<p>在项目根目录下创建<code v-pre>common</code>文件夹，并创建<code v-pre>common.wxss</code>文件，增加<code v-pre>box</code>的样式</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>app.wxss</code>文件中引入<code v-pre>common.wxss</code>文件</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">"./common/common.wxss"</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="全局属性" tabindex="-1"><a class="header-anchor" href="#全局属性" aria-hidden="true">#</a> 全局属性 💎</h2>
<figure><img src="/images/small/s23.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>整个小程序只有一个 App 实例，是全部页面共享的。开发者可以通过 <code v-pre>getApp</code> 方法获取到全局唯一的 App 实例，获取 App 上的数据或调用开发者注册在 App 上的函数。</p>
<p>在 app.js 文件中增加全局属性</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// app.js</span>
<span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token string">"我是全局属性"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在news.js文件中读取全局属性</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> appInstance <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appInstance<span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>userInfo<span class="token punctuation">)</span> <span class="token comment">// 我是全局属性</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，我们也可以在页面中显示，首先修改<code v-pre>news.js</code>文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">""</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> appInstance <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 关于this.setData({}),后续会详细讲解，目前我们知道可以给message赋值即可</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span>appInstance<span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>userInfo
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code v-pre>news.wxml</code>文件显示内容</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="页面中的data对象" tabindex="-1"><a class="header-anchor" href="#页面中的data对象" aria-hidden="true">#</a> 页面中的Data对象 💎</h2>
<figure><img src="/images/small/s25.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>data</code> 是页面第一次渲染使用的初始数据</p>
<p>页面加载时，<code v-pre>data</code> 中的数据将会以JSON字符串的形式由逻辑层传至渲染层，因此data中的数据必须是可以转成JSON的类型：字符串，数字，布尔值，对象，数组</p>
<p>我们在<code v-pre>news.js</code>文件中增加data对象，并增加相应的数据,显示在页面中</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// news.js文件</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">hello</span><span class="token operator">:</span><span class="token string">"hello"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">flag</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"iwen"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">names</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"iwen"</span><span class="token punctuation">,</span><span class="token string">"ime"</span><span class="token punctuation">,</span><span class="token string">"frank"</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- news.wxml文件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>{{ hello }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>{{ num }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>{{ user.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>{{ names[1] }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setdata函数" tabindex="-1"><a class="header-anchor" href="#setdata函数" aria-hidden="true">#</a> setData函数 👻</h3>
<p><code v-pre>setData</code> 函数用于将<code v-pre>data</code>中的数据进行修改，并发送到视图层</p>
<p>我们在<code v-pre>news.js</code>文件中修改<code v-pre>data</code>中的数据，我们可以尝试在<code v-pre>onLoad</code>中修改<code v-pre>num</code>的属性值</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hello</span><span class="token operator">:</span><span class="token string">"hello"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">flag</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"iwen"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">names</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"iwen"</span><span class="token punctuation">,</span><span class="token string">"ime"</span><span class="token punctuation">,</span><span class="token string">"frank"</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">20</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以观察到页面中的<code v-pre>num</code>数字发生了变化为20</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li>直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致</li>
<li>仅支持设置可 JSON 化的数据</li>
<li>单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据</li>
<li>请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题</li>
</ul>
<hr>
<p>关于data和setData这种操作很神奇,其实也是前端最常用的模版数据绑定方案</p>
</div>
</div></template>


