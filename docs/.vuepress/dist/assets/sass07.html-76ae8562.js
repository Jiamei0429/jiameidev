import{_ as l,Y as i,Z as u,a1 as a,a2 as r,$ as n,a0 as s,a3 as k,I as t}from"./framework-5cc4ff0f.js";const d="/images/sass/scss13.png",v={},m=k('<h1 id="_3-7-sass运算" tabindex="-1"><a class="header-anchor" href="#_3-7-sass运算" aria-hidden="true">#</a> 3.7 Sass运算 🎉</h1><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Sass支持数字的加减乘除等运算 <code>(+, -, *, /)</code>，如果必要会在不同单位间转换值</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$size</span></span><span class="token punctuation">:</span>1000px<span class="token punctuation">;</span>
<span class="token selector">.root</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span> <span class="token operator">+</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.root1</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span> <span class="token operator">-</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.root2</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.root3</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$size</span> <span class="token operator">/</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.root4</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$size</span> <span class="token operator">-</span> 400<span class="token punctuation">)</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>运算过程中，不同单位不要参与运算</p><p>乘或除的时候不要带单位，加减可以带单位</p></div><p>在移动端适配的时候，通常会有REM计算</p><p>例如：根 <code>font-size</code>为 <code>50px</code>, 设计师给的数值是<code>340px</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$fontREM</span></span><span class="token punctuation">:</span>50<span class="token punctuation">;</span>
<span class="token selector">.root</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span><span class="token punctuation">(</span>340rem <span class="token operator">/</span> <span class="token variable">$fontREM</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),b=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("p1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("p2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("p3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-scss line-numbers-mode","data-ext":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token property"},[n("span",{class:"token variable"},"$size")]),n("span",{class:"token punctuation"},":"),s("14px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token selector"},"#content "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token selector"},"h1 "),n("span",{class:"token punctuation"},"{"),s(` 
        `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token variable"},"$size"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token selector"},".p1 "),n("span",{class:"token punctuation"},"{"),s(` 
        `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token variable"},"$size"),s(),n("span",{class:"token operator"},"-"),s(" 2px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token selector"},".p2 "),n("span",{class:"token punctuation"},"{"),s(` 
        `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token variable"},"$size"),s(),n("span",{class:"token operator"},"+"),s(" 2"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token selector"},".p3 "),n("span",{class:"token punctuation"},"{"),s(` 
        `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token variable"},"$size"),s(),n("span",{class:"token operator"},"*"),s(" 2"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("p",null,[n("strong",null,"轻松一刻"),s(" 🎧")],-1),_=n("p",null,[n("strong",null,"视频教程"),s(" 🎥")],-1),f={href:"https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8",target:"_blank",rel:"noopener noreferrer"};function x(y,z){const e=t("CodeDemo"),p=t("AudioPlayer"),o=t("VideoPlayer"),c=t("ExternalLinkIcon");return i(),u("div",null,[m,a(e,{id:"code-demo-25",type:"normal",title:"%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA",code:"eJx9jsEOwiAMhl+lqZ7UucB2mrgn4WK2GUgmkkCMkezd7WAHXRYaQqH//7UNqPxjxAZFr1+g+6vE7mn8YLzEVhqgEIq1TJR0L38L3XhzjqyWkYuL0m5InKRqW6pIqpMkSppLGU/oOudokb3Tn6FhtX1fpNkty0BIXRSDAOk5x53UIvohYkTM5Smls827oQAep/wxPM8cga+JKk8cfgk6OH0BeWZpnQ=="},{default:r(()=>[b,g]),_:1}),h,a(p,{src:"/mp3/7.mp3",title:"音乐",poster:"/mp3/7.jpg"}),_,a(o,{src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"}),n("p",null,[s("至此，本章节的学习就到此结束了，如有疑惑，可对接"),n("a",f,[s("技术客服"),a(c)]),s("进行相关咨询。")])])}const q=l(v,[["render",x],["__file","sass07.html.vue"]]);export{q as default};