import{_ as p,Y as i,Z as u,a1 as a,a2 as r,$ as n,a0 as s,a3 as d,I as e}from"./framework-5cc4ff0f.js";const k="/images/sass/scss12.png",m={},v=d('<h1 id="_3-6-sass继承" tabindex="-1"><a class="header-anchor" href="#_3-6-sass继承" aria-hidden="true">#</a> 3.6 Sass继承 🎉</h1><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用<code>sass</code>的时候，最后一个减少重复的主要特性就是选择器继承。选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式。这个通过<code>@extend</code>语法实现</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.error </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.seriousError </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .error<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常使用继承会让你的<code>css</code>美观、整洁。因为继承只会在生成<code>css</code>时复制选择器，而不会复制大段的<code>css</code>属性。</p><div class="hint-container tip"><p class="hint-container-title">思考继承和混合的区别</p><p>继承的原理并不是通过样式属性的复制来实现的，而是通过选择器的复制实现的，所以跟混合相比，继承生成的css代码相对更少。</p></div>`,6),b=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-scss line-numbers-mode","data-ext":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token selector"},"#content "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token selector"},"h1 "),n("span",{class:"token punctuation"},"{"),s(` 
        `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid blue"),n("span",{class:"token punctuation"},";"),s(` 
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token selector"},"p "),n("span",{class:"token punctuation"},"{"),s(` 
        `),n("span",{class:"token keyword"},"@extend"),s(" h1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 1.4em"),n("span",{class:"token punctuation"},";"),s(` 
        `),n("span",{class:"token property"},"border-width"),n("span",{class:"token punctuation"},":"),s(" 3px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("p",null,[n("strong",null,"轻松一刻"),s(" 🎧")],-1),h=n("p",null,[n("strong",null,"视频教程"),s(" 🎥")],-1),x={href:"https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8",target:"_blank",rel:"noopener noreferrer"};function f(y,w){const t=e("CodeDemo"),c=e("AudioPlayer"),o=e("VideoPlayer"),l=e("ExternalLinkIcon");return i(),u("div",null,[v,a(t,{id:"code-demo-18",type:"normal",title:"%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA",code:"eJxVjdsKwjAMhl8lxFvnqHq11eGD7MatxRZ6oq06GHt3I6tMQ8iJ/N8/o8rWYINc6Cdocelx9C5Ll3vsegcUXLGO8Zpq2UN35HWgjdckoo57TGNKRNkVMczrr2Iwwzp+YvTGxwaiFO12HHwUkq4sTJC80QIG85BtkS1rC3+cq5zIRRD+h2Nv8a5dNficvSXc4Sztl7L5VC8tsmrgFKaiJQdKXN5R7Ezz"},{default:r(()=>[b,g]),_:1}),_,a(c,{src:"/mp3/6.mp3",title:"音乐",poster:"/mp3/6.jpg"}),h,a(o,{src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"}),n("p",null,[s("至此，本章节的学习就到此结束了，如有疑惑，可对接"),n("a",x,[s("技术客服"),a(l)]),s("进行相关咨询。")])])}const C=p(m,[["render",f],["__file","sass06.html.vue"]]);export{C as default};