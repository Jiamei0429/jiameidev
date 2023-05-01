<template><div><h1 id="_1-2-基础元素" tabindex="-1"><a class="header-anchor" href="#_1-2-基础元素" aria-hidden="true">#</a> 1.2 基础元素🎉</h1>
<h3 id="_1-1、标签之标题" tabindex="-1"><a class="header-anchor" href="#_1-1、标签之标题" aria-hidden="true">#</a> 1.1、标签之标题</h3>
<ul>
<li>标题（Heading）是通过<code v-pre>&lt;h1&gt; - &lt;h6&gt;</code>标签进行定义的。<code v-pre>&lt;h1&gt;</code>定义最大的标题 ,<code v-pre>&lt;h6&gt;</code>定义最小的标题。</li>
<li>请确保将 HTML 标题标签只用于标题。不要仅仅是为了生成粗体或大号的文本而使用标题。正确使用标题有益于SEO，应该将<code v-pre>&lt;h1&gt;</code> 用作主标题（最重要的），其后是 <code v-pre>&lt;h2&gt;</code>（次重要的），再其次是 <code v-pre>&lt;h3&gt;</code>，以此类推。</li>
<li>标题标签位置摆放，在标签中添加属性：<code v-pre>align=&quot;left | center | right&quot;</code> 默认居左</li>
</ul>
<h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>一级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>二级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>三级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>四级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">></span></span>五级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>六级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="效果反馈" tabindex="-1"><a class="header-anchor" href="#效果反馈" aria-hidden="true">#</a> 效果反馈</h4>
<ol>
<li>以下那个是三级标题标签：
A <code v-pre>&lt;h1&gt;&lt;/h1&gt;</code>
B <code v-pre>&lt;h2&gt;&lt;/h2&gt;</code>
C <code v-pre>&lt;h3&gt;&lt;/h3&gt;</code>
D <code v-pre>&lt;h4&gt;&lt;/h4&gt;</code></li>
<li>标题标签居中摆放属性使用正确的是:
A <code v-pre>align=&quot;left | center | right&quot;</code>
B <code v-pre>align=&quot;left&quot;</code>
C <code v-pre>align=&quot;center&quot;</code>
D <code v-pre>align=&quot;right&quot;</code></li>
<li>答案 : 1=&gt;C    2=&gt;C</li>
</ol>
<hr>
<h3 id="_1-2、标签之段落-换行-水平线" tabindex="-1"><a class="header-anchor" href="#_1-2、标签之段落-换行-水平线" aria-hidden="true">#</a> 1.2、标签之段落_换行_水平线</h3>
<h4 id="_1-2-1、段落" tabindex="-1"><a class="header-anchor" href="#_1-2-1、段落" aria-hidden="true">#</a> 1.2.1、段落</h4>
<ul>
<li>段落是通过<code v-pre>&lt;p&gt;</code>标签定义的</li>
</ul>
<h4 id="代码示例-1" tabindex="-1"><a class="header-anchor" href="#代码示例-1" aria-hidden="true">#</a> 代码示例</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是一个段落 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是另一个段落<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-2、换行" tabindex="-1"><a class="header-anchor" href="#_1-2-2、换行" aria-hidden="true">#</a> 1.2.2、换行</h4>
<ul>
<li>如果您希望在不产生一个新段落的情况下进行换行（新行），请使用 <code v-pre>&lt;br&gt;</code></li>
</ul>
<h4 id="代码示例-2" tabindex="-1"><a class="header-anchor" href="#代码示例-2" aria-hidden="true">#</a> 代码示例</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这个<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>段落<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>演示了分行的效果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-2-3、水平线" tabindex="-1"><a class="header-anchor" href="#_1-2-3、水平线" aria-hidden="true">#</a> 1.2.3、水平线</h4>
<ul>
<li><code v-pre>&lt;hr/&gt;</code>标签在 HTML 页面中创建水平线</li>
</ul>
<h4 id="水平线属性" tabindex="-1"><a class="header-anchor" href="#水平线属性" aria-hidden="true">#</a> 水平线属性</h4>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> color：设置水平线的颜色</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> width：设置水平线的长度</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> size：设置水平线的高度</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> align：设置水平线的对齐方式（默认居中），可取值<code v-pre>left|right</code></label></li>
</ul>
<h4 id="代码示例-3" tabindex="-1"><a class="header-anchor" href="#代码示例-3" aria-hidden="true">#</a> 代码示例</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3、标签之图片" tabindex="-1"><a class="header-anchor" href="#_1-3、标签之图片" aria-hidden="true">#</a> 1.3、标签之图片</h3>
<ul>
<li>网站中最多的元素毋庸置疑，一定是图片，<code v-pre>&lt;img&gt;</code> 标签定义 HTML 页面中的图像</li>
<li>注意事项</li>
</ul>
<blockquote>
<p><code v-pre>&lt;img&gt;</code>是单标签，不需要进行闭合操作</p>
</blockquote>
<h4 id="img-标签属性" tabindex="-1"><a class="header-anchor" href="#img-标签属性" aria-hidden="true">#</a> <code v-pre>&lt;img&gt;</code>标签属性</h4>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> src：路径（图片地址与名字）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> alt：规定图像的替代文本</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> width：规定图像的宽度</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> eight：规定图像的高度</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> title：鼠标悬停在图片上给予提示</label></li>
</ul>
<h4 id="代码示例-4" tabindex="-1"><a class="header-anchor" href="#代码示例-4" aria-hidden="true">#</a> 代码示例</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-4、路径详解" tabindex="-1"><a class="header-anchor" href="#_1-4、路径详解" aria-hidden="true">#</a> 1.4、路径详解</h3>
<h4 id="绝对路径" tabindex="-1"><a class="header-anchor" href="#绝对路径" aria-hidden="true">#</a> 绝对路径</h4>
<p>绝对路径是电脑的盘符存储与访问的具体地址</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--E:\itbaizhanCode\1.jpg--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>E:\itbaizhanCode\1.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径" aria-hidden="true">#</a> 相对路径</h4>
<p>两者相对关系，两者在同⼀路径下可以直接访问</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 
    ⼦级关系: /
    ⽗级关系: ../
    同级关系: ./  
--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./1.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../src/1.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../../src/1.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="网络路径" tabindex="-1"><a class="header-anchor" href="#网络路径" aria-hidden="true">#</a> 网络路径</h4>
<p>具体的⽹络地址: http://iwenwiki.com/api/newworld/images/n1.png</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://iwenwiki.com/api/newworld/images/n1.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-5、标签之超文本链接" tabindex="-1"><a class="header-anchor" href="#_1-5、标签之超文本链接" aria-hidden="true">#</a> 1.5、标签之超文本链接</h3>
<ul>
<li>HTML使用标签 <code v-pre>&lt;a&gt;</code>来设置超文本链接,超链接可以是一个字，一个词，或者一组词，也可以是一幅图像，您可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。</li>
</ul>
<h4 id="超链接属性" tabindex="-1"><a class="header-anchor" href="#超链接属性" aria-hidden="true">#</a> 超链接属性</h4>
<ul>
<li>在标签<code v-pre>&lt;a&gt;</code>中使用了href属性来描述链接的地址,默认情况下，链接将以，以下形式出现在浏览器中：
<ul>
<li>一个未访问过的链接显示为蓝色字体并带有下划线。</li>
<li>访问过的链接显示为紫色并带有下划线。</li>
<li>点击链接时，链接显示为红色并带有下划线。</li>
</ul>
</li>
<li>title属性：鼠标划上去的提示文字</li>
<li>target属性：可以设置点击超链接之后网页打开的方式
<ul>
<li>_blank:表示点击超链接后在一个新的页面窗口打开网址</li>
<li>_blank:表示点击超链接后在一个新的页面窗口打开网址</li>
<li>_blank:表示点击超链接后在一个新的页面窗口打开网址</li>
<li>_blank:表示点击超链接后在一个新的页面窗口打开网址</li>
</ul>
</li>
</ul>
<blockquote>
<p>特别提示:
后期我们会通过CSS样式修改掉这些效果
当您把鼠标指针移动到网页中的某个链接上时，箭头会变为一只小手</p>
</blockquote>
<h4 id="代码示例-5" tabindex="-1"><a class="header-anchor" href="#代码示例-5" aria-hidden="true">#</a> 代码示例</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.mi.com/blackshark4s<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>我是超链接<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./1.webp<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>黑鲨4S<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>磁动力升降肩键<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>2699元起<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6、超链接之锚点" tabindex="-1"><a class="header-anchor" href="#_1-6、超链接之锚点" aria-hidden="true">#</a> 1.6、超链接之锚点</h3>
<p>超链接可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。跳转到当前文档的某个部分的形式就是“锚点”</p>
<h4 id="锚点实现方式" tabindex="-1"><a class="header-anchor" href="#锚点实现方式" aria-hidden="true">#</a> 锚点实现方式</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#hello<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>跳转到文本信息位置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文本信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7、标签之文本" tabindex="-1"><a class="header-anchor" href="#_1-7、标签之文本" aria-hidden="true">#</a> 1.7、标签之文本</h3>
<h4 id="常用文本标签" tabindex="-1"><a class="header-anchor" href="#常用文本标签" aria-hidden="true">#</a> 常用文本标签</h4>
<table>
<thead>
<tr>
<th>标签</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&lt;em&gt;</code></td>
<td>定义着重文字</td>
</tr>
<tr>
<td><code v-pre>&lt;b&gt;</code></td>
<td>定义粗体文本</td>
</tr>
<tr>
<td><code v-pre>&lt;i&gt;</code></td>
<td>定义斜体字</td>
</tr>
<tr>
<td><code v-pre>&lt;strong&gt;</code></td>
<td>定义加重语气</td>
</tr>
<tr>
<td><code v-pre>&lt;sub&gt;</code></td>
<td>定义下标字</td>
</tr>
<tr>
<td><code v-pre>&lt;sup&gt;</code></td>
<td>定义上标字</td>
</tr>
<tr>
<td><code v-pre>&lt;del&gt;</code></td>
<td>定义删除字</td>
</tr>
<tr>
<td><code v-pre>&lt;span&gt;</code></td>
<td>元素没有特定的含义</td>
</tr>
</tbody>
</table>
<blockquote>
<p>特别提示
常用文本标签和段落是不同的，段落代表一段文本，而文本标签一般表示文本词汇</p>
</blockquote>
<h4 id="代码示例-6" tabindex="-1"><a class="header-anchor" href="#代码示例-6" aria-hidden="true">#</a> 代码示例</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.mi.com/blackshark4s<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./1.webp<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>黑鲨4S<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>磁动力升降肩键<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>2699元起 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>del</span><span class="token punctuation">></span></span>3999元<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>del</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


