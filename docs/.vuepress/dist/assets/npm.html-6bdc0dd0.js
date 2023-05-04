import{_ as e,Y as n,Z as i,a3 as s}from"./framework-5cc4ff0f.js";const d={},a=s(`<h1 id="发布npm软件包" tabindex="-1"><a class="header-anchor" href="#发布npm软件包" aria-hidden="true">#</a> 发布NPM软件包 🎉</h1><p>第一步：</p><p>去官网注册自己的账号</p><p>https://registry.npmjs.org/</p><p>第二部：</p><p>在文件根目录下执行npm init，进行初始化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package name: (node_server_ts)
version: (1.0.0) 1.0.1                                                                                                                                                                                                             
description: 初始化的nodejs项目
git repository:                                                                                                                                                                                                                 
keywords: 涉及到增删改查、登录、分页、搜索等一系列接口
author: 刘春龙                                                                                                                                                                                                                     
license: (ISC) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：登录自己的npm账号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm login
将给出的网址复制到浏览器中打开
输入你的账号
输入你的密码

可能会发验证码

npm whoami   查看是谁登录的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四步：执行npm publish 进行发布</p><p>下载：npm install node_server_ts</p><p>下载源文件：npm pack node_server_ts</p><p>升级</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm version patch   1.2.x  补丁版本
npm version minor    1.x.2   增加了新功能
npm version major  x.2.3   大改动

记得要 npm publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm unpublish data_format_lcl --force 强制卸载
npm unpublish data_format_lcl@1.1.1 --force 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[a];function r(t,c){return n(),i("div",null,l)}const m=e(d,[["render",r],["__file","npm.html.vue"]]);export{m as default};
