<template><div><Tabs id="0" :data='[{"title":"接口文档"},{"title":"项目截图"}]'>
<template #tab0="{ title, value, isActive }">
<blockquote>
<p>接口文档:  https://jiameikj.com:10002/</p>
</blockquote>
<blockquote>
<p><code v-pre>测试token :</code>  sioejfiaojfgapganga（有效期至2023-06-01）</p>
</blockquote>
<blockquote>
<p>注意：除登录模块不需要token,请求其余模块均要在请求头中携带token
格式如下:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">AUTHORIZATION</span>：Bearer token
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<h2 id="一、登录模块" tabindex="-1"><a class="header-anchor" href="#一、登录模块" aria-hidden="true">#</a> 一、登录模块</h2>
<h3 id="_1-1、发送手机验证码" tabindex="-1"><a class="header-anchor" href="#_1-1、发送手机验证码" aria-hidden="true">#</a> 1.1、发送手机验证码</h3>
<p>接口地址 ：/login/sendPhoneCode/{17667300429}/</p>
<p>成功返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	success：短信发送成功
	code<span class="token operator">:</span><span class="token number">200</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>失败返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	error：操作过于频繁
	code<span class="token operator">:</span><span class="token number">400</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2、发送邮箱验证码" tabindex="-1"><a class="header-anchor" href="#_1-2、发送邮箱验证码" aria-hidden="true">#</a> 1.2、发送邮箱验证码</h3>
<p>接口地址 ：/login/sendEmailCode/{486428167@qq.com}/</p>
<p>成功返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	success：邮件发送成功
	code<span class="token operator">:</span><span class="token number">200</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>失败返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	error：操作过于频繁
	code<span class="token operator">:</span><span class="token number">400</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3、新用户注册" tabindex="-1"><a class="header-anchor" href="#_1-3、新用户注册" aria-hidden="true">#</a> 1.3、新用户注册</h3>
<p>接口地址 ：/login/register/</p>
<p>参数类型：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	username：<span class="token string">"用户名/账号"</span>
	password：<span class="token string">"密码"</span>
	phone<span class="token operator">:</span><span class="token string">"手机号"</span>
	verificationCode：<span class="token string">"验证码"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	success：注册成功
	username：用户名
	phone<span class="token operator">:</span>手机号
	token：<span class="token string">"dfjasfdhjaiosjfg"</span>
	code<span class="token operator">:</span><span class="token number">200</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>失败返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	error：验证码错误/注册失败
	code<span class="token operator">:</span><span class="token number">400</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4、账号密码登录" tabindex="-1"><a class="header-anchor" href="#_1-4、账号密码登录" aria-hidden="true">#</a> 1.4、账号密码登录</h3>
<p>接口地址 ：/login/login/</p>
<p>参数类型：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	username：<span class="token string">"用户名/账号"</span>
	password：<span class="token string">"密码"</span>
	verificationCode：<span class="token string">"验证码"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	token：sdiofgjaosgn
	code<span class="token operator">:</span><span class="token number">200</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>失败返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	error：验证码错误/用户名或密码错误
	code<span class="token operator">:</span><span class="token number">400</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5、手机号一键登录" tabindex="-1"><a class="header-anchor" href="#_1-5、手机号一键登录" aria-hidden="true">#</a> 1.5、手机号一键登录</h3>
<p>接口地址 ：/login/phoneLogin/</p>
<p>参数类型：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	phone：<span class="token number">17667300429</span>
	verificationCode：<span class="token string">"验证码"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	token：sdiofgjaosgn
	code<span class="token operator">:</span><span class="token number">200</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>失败返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	error：验证码错误/用户不存在
	code<span class="token operator">:</span><span class="token number">400</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、文件上传模块" tabindex="-1"><a class="header-anchor" href="#二、文件上传模块" aria-hidden="true">#</a> 二、文件上传模块</h2>
<h3 id="_2-1、本地文件上传服务器" tabindex="-1"><a class="header-anchor" href="#_2-1、本地文件上传服务器" aria-hidden="true">#</a> 2.1、本地文件上传服务器</h3>
<h4 id="_2-1-1、图片上传" tabindex="-1"><a class="header-anchor" href="#_2-1-1、图片上传" aria-hidden="true">#</a> 2.1.1、图片上传</h4>
<p>接口地址：/upload/fileUpload/<strong>（name=images）</strong></p>
<h4 id="_2-1-2、文本文件上传" tabindex="-1"><a class="header-anchor" href="#_2-1-2、文本文件上传" aria-hidden="true">#</a> 2.1.2、文本文件上传</h4>
<p>接口地址：/upload/fileUpload/<strong>（name=files）</strong></p>
<h4 id="_2-1-3、-音频文件上传" tabindex="-1"><a class="header-anchor" href="#_2-1-3、-音频文件上传" aria-hidden="true">#</a> 2.1.3、 音频文件上传</h4>
<p>接口地址：/upload/fileUpload/<strong>（name=mp3）</strong></p>
<h4 id="_2-1-4、-视频文件上传" tabindex="-1"><a class="header-anchor" href="#_2-1-4、-视频文件上传" aria-hidden="true">#</a> 2.1.4、 视频文件上传</h4>
<p>接口地址：/upload/fileUpload/<strong>（name=mp4）</strong></p>
<p>成功返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    code<span class="token operator">:</span><span class="token number">200</span>
    success<span class="token operator">:</span>文件上传成功
    url<span class="token operator">:</span>http<span class="token operator">:</span><span class="token comment">//127.0.0.1:8000/media/images/87078.png</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>失败返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	error：文件上传失败
	code<span class="token operator">:</span><span class="token number">400</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2、阿里云oss云存储" tabindex="-1"><a class="header-anchor" href="#_2-2、阿里云oss云存储" aria-hidden="true">#</a> 2.2、阿里云oss云存储</h3>
<h4 id="_2-2-1、图片上传" tabindex="-1"><a class="header-anchor" href="#_2-2-1、图片上传" aria-hidden="true">#</a> 2.2.1、图片上传</h4>
<p>接口地址：/upload/fileUpload/<strong>（name=images）</strong></p>
<h4 id="_2-2-2、文本文件上传" tabindex="-1"><a class="header-anchor" href="#_2-2-2、文本文件上传" aria-hidden="true">#</a> 2.2.2、文本文件上传</h4>
<p>接口地址：/upload/fileUpload/<strong>（name=files）</strong></p>
<h4 id="_2-2-3、音频文件上传" tabindex="-1"><a class="header-anchor" href="#_2-2-3、音频文件上传" aria-hidden="true">#</a> 2.2.3、音频文件上传</h4>
<p>接口地址：/upload/fileUpload/<strong>（name=mp3）</strong></p>
<h4 id="_2-2-4、-视频文件上传" tabindex="-1"><a class="header-anchor" href="#_2-2-4、-视频文件上传" aria-hidden="true">#</a> 2.2.4、 视频文件上传</h4>
<p>接口地址：/upload/fileUpload/<strong>（name=mp4）</strong></p>
<p>成功返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    code<span class="token operator">:</span><span class="token number">200</span>
    success<span class="token operator">:</span>文件上传成功
    url<span class="token operator">:</span>http<span class="token operator">:</span><span class="token comment">//127.0.0.1:8000/media/images/87078.png</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>失败返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	error：文件上传失败
	code<span class="token operator">:</span><span class="token number">400</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、支付模块" tabindex="-1"><a class="header-anchor" href="#三、支付模块" aria-hidden="true">#</a> 三、支付模块</h2>
<h3 id="_3-1、微信小程序支付" tabindex="-1"><a class="header-anchor" href="#_3-1、微信小程序支付" aria-hidden="true">#</a> 3.1、微信小程序支付</h3>
<p>接口地址：/pay/wxsmall/</p>
<p>参数类型</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
     openid<span class="token operator">:</span>用户标识
     amount：金额（单位分）
	 description：商品名称
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    code<span class="token operator">:</span><span class="token number">200</span>
    url<span class="token operator">:</span>http<span class="token operator">:</span><span class="token comment">//127.0.0.1:8000/media/images/87078.png</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2、网页端微信支付" tabindex="-1"><a class="header-anchor" href="#_3-2、网页端微信支付" aria-hidden="true">#</a> 3.2、网页端微信支付</h3>
<p>接口地址：/pay/wxweb/</p>
<p>参数类型:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
     amount：金额（单位分）
	 description：商品名称
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    code<span class="token operator">:</span><span class="token number">200</span>
    url<span class="token operator">:</span>http<span class="token operator">:</span><span class="token comment">//127.0.0.1:8000/media/images/87078.png</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3、支付宝支付-沙箱环境" tabindex="-1"><a class="header-anchor" href="#_3-3、支付宝支付-沙箱环境" aria-hidden="true">#</a> 3.3、支付宝支付（沙箱环境）</h3>
<p>接口地址：/pay/zhifubao/</p>
<p>参数类型:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
     amount：金额（单位元，小数点后可有两位）
	 description：商品名称
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回值：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    code<span class="token operator">:</span><span class="token number">200</span>
    url<span class="token operator">:</span>http<span class="token operator">:</span><span class="token comment">//127.0.0.1:8000/media/images/87078.png</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<p>111</p>
</template>
</Tabs>
</div></template>


