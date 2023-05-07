import{_ as l,Y as i,Z as u,a1 as a,a2 as r,$ as n,a0 as s,a3 as d,I as t}from"./framework-5cc4ff0f.js";const k="/images/sass/scss7.png",m={},g=d('<h1 id="_3-3-sass嵌套" tabindex="-1"><a class="header-anchor" href="#_3-3-sass嵌套" aria-hidden="true">#</a> 3.3 Sass嵌套 🎉</h1><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>css</code>中重复写选择器是非常恼人的。如果要写一大串指向页面中同一块的样式时，往往需要 一遍又一遍地写同一个<code>ID</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">&gt;</span></span>边<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#content article h1</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #333 <span class="token punctuation">}</span>
<span class="token selector">#content article p</span> <span class="token punctuation">{</span> <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1.4em <span class="token punctuation">}</span>
<span class="token selector">#content aside</span> <span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span> #EEE <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>像这种情况，<code>sass</code>可以让你只写一遍，且使样式可读性更高。在<code>Sass</code>中，你可以像俄罗斯套娃那样在规则块中嵌套规则块。<code>sass</code>在输出<code>css</code>时会帮你把这些嵌套规则处理好，避免你的重复书写。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#content </span><span class="token punctuation">{</span>
    <span class="token selector">article </span><span class="token punctuation">{</span>
        <span class="token selector">h1 </span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token selector">p </span><span class="token punctuation">{</span> <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1.4em<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token selector">aside </span><span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span> #EEE<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大多数情况下这种简单的嵌套都没问题，但是有些场景下不行，比如你想要在嵌套的选择器 里边立刻应用一个类似于<code>：hover</code>的伪类。为了解决这种以及其他情况，<code>sass</code>提供了一个特殊结构 <code>&amp;</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">article a </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("article")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("标题"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("文字"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("article")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("aside")]),n("span",{class:"token punctuation"},">")]),s("边"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("aside")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-scss line-numbers-mode","data-ext":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token selector"},"#content "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token selector"},"article "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token selector"},"h1 "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #333"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token selector"},"p "),n("span",{class:"token punctuation"},"{"),s(` 
            `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 1.4em"),n("span",{class:"token punctuation"},";"),s(` 
            `),n("span",{class:"token selector"},[n("span",{class:"token parent important"},"&"),s(":hover ")]),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s("red "),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token selector"},"aside "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" #EEE"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("p",null,[n("strong",null,"轻松一刻"),s(" 🎧")],-1),_=n("p",null,[n("strong",null,"视频教程"),s(" 🎥")],-1),x={href:"https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8",target:"_blank",rel:"noopener noreferrer"};function y(E,f){const e=t("CodeDemo"),c=t("AudioPlayer"),o=t("VideoPlayer"),p=t("ExternalLinkIcon");return i(),u("div",null,[g,a(e,{id:"code-demo-19",type:"normal",title:"%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA",code:"eJxdTkEOgjAQ/EpTE08qIXjCyo1fcMG2kUZoSaleiGd+oB6Ndx/gxd9I9BcuWATdNNmdzs7slDgxWYp9TJjYIcGWEaZKGi5NhINIIigSayNoyi1svxI3qM/V63IiDowDIg/qQ/W4HomTd3LnV0/iQjAePO83YNoxksSB69DxBBe0KCDOyKZA5UdlPTrYVOKiElGVKu2jked5C7TvyRy4HjWVxXot5HSljFGZj9zZnGeLv52xn6gd119fzdnQ1I62teFhdRXTzVqrrWTTLk0Yhm0aeHj/Bh6Fa9E="},{default:r(()=>[v,b]),_:1}),h,a(c,{src:"/mp3/3.mp3",title:"音乐",poster:"/mp3/3.jpg"}),_,a(o,{src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"}),n("p",null,[s("至此，本章节的学习就到此结束了，如有疑惑，可对接"),n("a",x,[s("技术客服"),a(p)]),s("进行相关咨询。")])])}const V=l(m,[["render",y],["__file","sass03.html.vue"]]);export{V as default};
