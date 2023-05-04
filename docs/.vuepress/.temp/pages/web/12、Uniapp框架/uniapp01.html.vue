<template><div><h1 id="_12-1-初体验uniapp" tabindex="-1"><a class="header-anchor" href="#_12-1-初体验uniapp" aria-hidden="true">#</a> 12.1 初体验uniapp 🎉</h1>
<details class="hint-container details"><summary>学习此章节之前，请先阅读这里！！！</summary>
<p>如果你已经完成了Vue和微信小程序的学习，那么你可以继续往下学习此章节，假如你没有学习完Vue和微信小程序，，请点击<a href="">Vue3</a>和<a href="">微信小程序</a>，学习这两个章节之后再继续阅读本章节！</p>
</details>
<figure><img src="/images/uniapp/uni1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>uni-app</strong> 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台</p>
<p><strong>uni-app</strong> 核心：开发一次，多端覆盖</p>
<p>目前可以支持14个平台，当然，最核心的几个平台包含：Android端、iOS端、Web端、微信小程序端</p>
<p>扫描下面二维码，亲自体验最全面的跨平台效果！
<img src="/images/uniapp/uni2.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>官网文档：<a href="https://uniapp.dcloud.net.cn/" target="_blank" rel="noopener noreferrer">https://uniapp.dcloud.net.cn/<ExternalLinkIcon/></a></p>
</div>
<h4 id="基本语言和开发规范" tabindex="-1"><a class="header-anchor" href="#基本语言和开发规范" aria-hidden="true">#</a> 基本语言和开发规范</h4>
<p>uni-app代码编写，基本语言包括js、vue、css。以及ts、scss等css预编译器</p>
<p>为了实现多端兼容，综合考虑编译速度、运行性能等因素，uni-app 约定了如下开发规范：</p>
<ul>
<li>页面文件遵循 Vue 单文件组件 (SFC) 规范，即每个页面是一个.vue文件</li>
<li>组件标签靠近小程序规范</li>
<li>接口能力（JS API）靠近小程序规范，但需将前缀 wx、my 等替换为 uni</li>
<li>数据绑定及事件处理同 Vue.js 规范，同时补充了App及页面的生命周期
uni-app分编译器和运行时（runtime）。uni-app能实现一套代码、多端运行，是通过这2部分配合完成的基本语言和开发规范</li>
</ul>
<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目 💎</h2>
<Tabs id="62" :data='[{"title":"vue-cli命令行创建"},{"title":"可视化创建"}]'>
<template #tab0="{ title, value, isActive }">
<p>可以使用 cli 脚手架，可以通过 vue-cli 创建 uni-app 项目。</p>
<h4 id="全局安装-vue-cli" tabindex="-1"><a class="header-anchor" href="#全局安装-vue-cli" aria-hidden="true">#</a> <mark>全局安装 vue-cli</mark></h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建uni-app" tabindex="-1"><a class="header-anchor" href="#创建uni-app" aria-hidden="true">#</a> <mark>创建uni-app</mark></h4>
<ul>
<li>
<p>使用正式版（对应HBuilderX最新正式版）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>vue create <span class="token parameter variable">-p</span> dcloudio/uni-preset-vue my-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>使用alpha版（对应HBuilderX最新alpha版）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>vue create <span class="token parameter variable">-p</span> dcloudio/uni-preset-vue<span class="token comment">#alpha my-alpha-project</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>使用Vue3/Vite版</p>
<ul>
<li>创建以 javascript 开发的工程<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx degit dcloudio/uni-preset-vue<span class="token comment">#vite my-vue3-project</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>创建以 typescript 开发的工程<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx degit dcloudio/uni-preset-vue<span class="token comment">#vite-ts my-vue3-project</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<p>此时，会提示选择项目模板（使用Vue3/Vite版不会提示，目前只支持创建默认模板），初次体验建议选择 hello uni-app 项目模板，如下所示：</p>
<figure><img src="/images/uniapp/uni8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="运行、发布uni-app" tabindex="-1"><a class="header-anchor" href="#运行、发布uni-app" aria-hidden="true">#</a> <mark>运行、发布uni-app</mark></h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev:%PLATFORM%
<span class="token function">npm</span> run build:%PLATFORM%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="platform-可取值如下" tabindex="-1"><a class="header-anchor" href="#platform-可取值如下" aria-hidden="true">#</a> <strong>%PLATFORM% 可取值如下：</strong></h4>
<table>
<thead>
<tr>
<th>值</th>
<th>平台</th>
</tr>
</thead>
<tbody>
<tr>
<td>app-plus</td>
<td>app平台生成打包资源（支持npm run build:app-plus，可用于持续集成。不支持run，运行调试仍需在HBuilderX中操作）</td>
</tr>
<tr>
<td>h5</td>
<td>H5</td>
</tr>
<tr>
<td>mp-alipay</td>
<td>支付宝小程序</td>
</tr>
<tr>
<td>mp-baidu</td>
<td>百度小程序</td>
</tr>
<tr>
<td>mp-weixin</td>
<td>微信小程序</td>
</tr>
<tr>
<td>mp-toutiao</td>
<td>字节跳动小程序</td>
</tr>
<tr>
<td>mp-lark</td>
<td>飞书小程序</td>
</tr>
<tr>
<td>mp-qq</td>
<td>qq 小程序</td>
</tr>
<tr>
<td>mp-360</td>
<td>360 小程序</td>
</tr>
<tr>
<td>mp-kuaishou</td>
<td>快手小程序</td>
</tr>
<tr>
<td>mp-jd</td>
<td>京东小程序</td>
</tr>
<tr>
<td>mp-xhs</td>
<td>小红书小程序</td>
</tr>
<tr>
<td>quickapp-webview</td>
<td>快应用(webview)</td>
</tr>
<tr>
<td>quickapp-webview-union</td>
<td>快应用联盟</td>
</tr>
<tr>
<td>quickapp-webview-huawei</td>
<td>快应用华为</td>
</tr>
</tbody>
</table>
</template>
<template #tab1="{ title, value, isActive }">
<p>可视化的方式比较简单，HBuilderX内置相关环境，开箱即用，无需配置nodejs</p>
<p>开始之前，开发者需先下载安装如下工具：</p>
<ul>
<li>HBuilderX：官方IDE下载地址：<a href="https://www.dcloud.io/hbuilderx.html" target="_blank" rel="noopener noreferrer">https://www.dcloud.io/hbuilderx.html<ExternalLinkIcon/></a></li>
</ul>
<p>HBuilderX是通用的前端开发工具，但为uni-app做了特别强化</p>
<h4 id="创建uni-app-1" tabindex="-1"><a class="header-anchor" href="#创建uni-app-1" aria-hidden="true">#</a> <mark>创建uni-app</mark></h4>
<p>在点击工具栏里的文件 -&gt; 新建 -&gt; 项目（快捷键Ctrl+N）：</p>
<figure><img src="/images/uniapp/uni3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>选择uni-app类型，输入工程名，选择模板，点击创建，即可成功创建</p>
<p>uni-app自带的模板有 默认的空项目模板、Hello uni-app 官方组件和API示例，还有一个重要模板是 uni ui项目模板，日常开发推荐使用该模板，已内置大量常用组件</p>
<figure><img src="/images/uniapp/uni4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="运行uni-app" tabindex="-1"><a class="header-anchor" href="#运行uni-app" aria-hidden="true">#</a> <mark>运行uni-app</mark></h4>
<ul>
<li>浏览器运行：进入hello-uniapp项目，点击工具栏的运行 -&gt; 运行到浏览器 -&gt; 选择浏览器，即可体验 uni-app 的 web 版</li>
</ul>
<figure><img src="/images/uniapp/uni5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>运行App到手机或模拟器：使用电压足够的usb端口连接手机，设置中开启USB调试，手机上允许电脑设备调试手机，进入hello-uniapp项目，点击工具栏的运行 -&gt; 运行App到手机或模拟器，即可在该设备里面体验uni-app</li>
</ul>
<figure><img src="/images/uniapp/uni6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>在微信开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -&gt; 运行到小程序模拟器 -&gt; 微信开发者工具，即可在微信开发者工具里面体验uni-app</li>
</ul>
<figure><img src="/images/uniapp/uni7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>如果是第一次使用，需要先配置小程序ide的相关路径，才能运行成功 <br/></p>
<p>微信开发者工具需要开启服务端口 在微信工具的设置-&gt;安全中</p>
</blockquote>
</template>
</Tabs>
<h2 id="项目目录结构" tabindex="-1"><a class="header-anchor" href="#项目目录结构" aria-hidden="true">#</a> 项目目录结构 💎</h2>
<figure><img src="/images/uniapp/uni9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>一个uni-app工程，默认包含如下目录及文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>┌─uniCloud       云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见uniCloud）
│─components      符合vue组件规范的uni-app组件目录
│ └─comp-a.vue     可复用的a组件
├─utssdk        存放uts文件
├─pages         业务页面文件存放的目录
│ ├─index
│ │ └─index.vue    index页面
│ └─list
│   └─list.vue    list页面
├─static        存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─uni_modules      存放<span class="token punctuation">[</span>uni_module<span class="token punctuation">]</span><span class="token punctuation">(</span>uni_modules<span class="token punctuation">)</span>。
├─platforms       存放各平台专用页面的目录，详见
├─nativeplugins     App原生语言插件 详见
├─nativeResources    App端原生资源目录
│ └─android      Android原生资源目录 详见
├─hybrid        App端存放本地html文件的目录，详见
├─wxcomponents     存放小程序组件的目录，详见
├─unpackage       非工程代码，一般存放运行或发行的编译结果
├─AndroidManifest.xml  Android原生应用清单文件 详见
├─main.js        Vue初始化入口文件
├─App.vue        应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json     配置应用名称、appid、logo、版本等打包信息，详见
├─pages.json      配置页面路由、导航条、选项卡等页面类信息，详见
└─uni.scss       这里是uni-app内置的常用样式变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面简介" tabindex="-1"><a class="header-anchor" href="#页面简介" aria-hidden="true">#</a> 页面简介 💎</h2>
<figure><img src="/images/uniapp/uni10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>uni-app项目中，一个页面就是一个符合Vue SFC规范的.vue文件</p>
<ul>
<li>
<p>新建页面</p>
<p>uni-app中的页面，通常会保存在工程根目录下的pages目录下</p>
<p>每次新建页面，均需在pages.json中配置pages列表；未在pages.json -&gt; pages 中配置的页面，uni-app会在编译阶段进行忽略</p>
</li>
<li>
<p>删除页面</p>
<p>删除页面时，需做两件工作</p>
<ul>
<li>删除.vue文件</li>
<li>删除pages.json -&gt; pages列表项中的配置</li>
</ul>
</li>
<li>
<p>应用首页</p>
<p>uni-app会将pages.json -&gt; pages配置项中的第一个页面，作为当前工程的首页（启动页）</p>
<p>也可以使用<code v-pre>entryPagePath</code>指定具体启动页</p>
</li>
</ul>
<p><strong>轻松一刻</strong></p>
<AudioPlayer
  src="/mp3/1.mp3"
  title="音乐"
  poster="/mp3/1.jpg"
/>
<p><strong>视频教程</strong> 📽️</p>
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>
<p>至此，本章节的学习就到此结束了，如有疑惑，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术客服<ExternalLinkIcon/></a>进行相关咨询。</p>
</div></template>


