<template><div><h1 id="_11-1-初体验小程序" tabindex="-1"><a class="header-anchor" href="#_11-1-初体验小程序" aria-hidden="true">#</a> 11.1 初体验小程序  🎉</h1>
<figure><img src="/images/small/s1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验</p>
<p>解释：微信小程序依赖于微信作为载体，呈现类似App的展示应用效果</p>
<div class="hint-container info">
<p class="hint-container-title">小程序与普通网页开发的区别</p>
<p>小程序的主要开发语言是 JavaScript ，小程序的开发同普通的网页开发相比有很大的相似性。对于前端开发者而言，从网页开发迁移到小程序的开发成本并不高，但是二者还是多少有些许区别的，例如：</p>
<ul>
<li>由原来的<code v-pre>html</code>文件修改为<code v-pre>wxml</code>文件</li>
<li>由原来的<code v-pre>css</code>文件修改为<code v-pre>wxss</code>文件</li>
<li>新增了属于小程序的特别配置</li>
</ul>
</div>
<p>开发者可使用微信客户端(6.7.2 及以上版本)扫码下方小程序码，体验小程序</p>
<figure><img src="/images/small/s2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="小程序账号申请" tabindex="-1"><a class="header-anchor" href="#小程序账号申请" aria-hidden="true">#</a> 小程序账号申请 💎</h2>
<figure><img src="/images/small/s3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>开发小程序的第一步，你需要拥有一个小程序帐号，通过这个帐号你就可以管理你的小程序</p>
<p>进入小程序注册页根据指引填写信息和提交相应的资料，就可以拥有自己的小程序帐号</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>注册地址：<a href="https://mp.weixin.qq.com/cgi-bin/wx?token=&amp;lang=zh_CN" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/cgi-bin/wx?token=&amp;lang=zh_CN<ExternalLinkIcon/></a></p>
</div>
<ul>
<li>第一步：添加账号信息</li>
</ul>
<figure><img src="/images/small/s4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>第二步：激活邮箱</li>
</ul>
<figure><img src="/images/small/s5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>第三步：信息登记</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>这里我们能选择的是个人和企业，如果是个人注册选择个人（我们这里选择个人），如果是企业注册选择企业</p>
<p>个人类型的小程序是无法进行微信支付的</p>
</div>
<figure><img src="/images/small/s6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>第四步：主体信息填写</li>
</ul>
<figure><img src="/images/small/s7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>第五步：进入控制台</li>
</ul>
<p>单独进入管理平台地址:<a href="https://mp.weixin.qq.com/" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/<ExternalLinkIcon/></a></p>
<figure><img src="/images/small/s8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>第六步：获取AppID</li>
</ul>
<p>注意：目前对我们有用的是“开发管理 - 开发设置 - AppID”</p>
<figure><img src="/images/small/s9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>小程序的 AppID 相当于小程序平台的一个身份证，后续你会在很多地方要用到 AppID</p>
<h2 id="开发者工具" tabindex="-1"><a class="header-anchor" href="#开发者工具" aria-hidden="true">#</a> 开发者工具 💎</h2>
<figure><img src="/images/small/s10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>为了帮助开发者简单和高效地开发和调试微信小程序，推出了微信开发者工具</p>
<p>使用小程序开发者工具，开发者可以完成小程序开发调试、代码查看和编辑、小程序预览和发布等功能。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>开发者工具下载地址: <a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html" target="_blank" rel="noopener noreferrer">https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html<ExternalLinkIcon/></a></p>
</div>
<p>安装如一般软件一样，并没有特别之处</p>
<ul>
<li>创建项目</li>
</ul>
<p>模板的选择根自身情况而定，个人喜欢选择<code v-pre>TS+Sass版</code></p>
<figure><img src="/images/small/s11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>开发者工具说明</li>
</ul>
<p>在微信开发者工具中，我们可以编写代码的同时查看运行结果和调试问题</p>
<figure><img src="/images/small/s12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="小程序目录结构" tabindex="-1"><a class="header-anchor" href="#小程序目录结构" aria-hidden="true">#</a> 小程序目录结构 💎</h2>
<figure><img src="/images/small/s13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>小程序包含一个描述整体程序的 <code v-pre>app</code> 和多个描述各自页面的 <code v-pre>page</code></p>
<figure><img src="/images/small/s14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container info">
<p class="hint-container-title">描述整体的 app</p>
<table>
<thead>
<tr>
<th>文件</th>
<th>必需</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>app.js</td>
<td>是</td>
<td>小程序逻辑</td>
</tr>
<tr>
<td>app.json</td>
<td>是</td>
<td>小程序公共配置</td>
</tr>
<tr>
<td>app.wxss</td>
<td>是</td>
<td>小程序公共样式表</td>
</tr>
</tbody>
</table>
</div>
<div class="hint-container info">
<p class="hint-container-title">描述各自页面的 page</p>
<p>一个小程序页面由四个文件组成，分别是</p>
<table>
<thead>
<tr>
<th>文件类型</th>
<th>必需</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>js</td>
<td>是</td>
<td>页面逻辑</td>
</tr>
<tr>
<td>wxml</td>
<td>是</td>
<td>页面结构</td>
</tr>
<tr>
<td>json</td>
<td>否</td>
<td>页面配置</td>
</tr>
<tr>
<td>wxss</td>
<td>否</td>
<td>页面样</td>
</tr>
</tbody>
</table>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>为了方便开发者减少配置项，描述页面的四个文件必须具有相同的路径与文件名</p>
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


