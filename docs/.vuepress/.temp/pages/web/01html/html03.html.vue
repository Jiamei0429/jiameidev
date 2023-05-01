<template><div><h1 id="表单元素" tabindex="-1"><a class="header-anchor" href="#表单元素" aria-hidden="true">#</a> 表单元素 🎉</h1>
<h2 id="代码块分组" tabindex="-1"><a class="header-anchor" href="#代码块分组" aria-hidden="true">#</a> 代码块分组</h2>
<CodeTabs id="6" :data='[{"title":"pnpm"},{"title":"yarn"},{"title":"npm"}]' :active="2" tab-id="shell">
<template #tab0="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="选项卡" tabindex="-1"><a class="header-anchor" href="#选项卡" aria-hidden="true">#</a> 选项卡</h2>
<Tabs id="20" :data='[{"title":"apple"},{"title":"banana"},{"title":"orange"}]' tab-id="fruit">
<template #tab0="{ title, value, isActive }">
<p>Apple</p>
</template>
<template #tab1="{ title, value, isActive }">
<p>Banana</p>
</template>
<template #tab2="{ title, value, isActive }">
<p>Orange</p>
</template>
</Tabs>
<h2 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h2>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>信息容器。</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>注释容器。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>提示容器</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>警告容器</p>
</div>
<div class="hint-container danger">
<p class="hint-container-title">警告</p>
<p>危险容器</p>
</div>
<details class="hint-container details"><summary>详情</summary>
<p>详情容器</p>
</details>
<div class="hint-container info">
<p class="hint-container-title">自定义标题</p>
<p>一个有 <code v-pre>代码</code> 和 <a href="#%E6%BC%94%E7%A4%BA">链接</a> 的信息容器。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<h2 id="标记" tabindex="-1"><a class="header-anchor" href="#标记" aria-hidden="true">#</a> 标记</h2>
<p>VuePress Theme Hope <mark>非常</mark> 强大!</p>
<h2 id="卡片" tabindex="-1"><a class="header-anchor" href="#卡片" aria-hidden="true">#</a> 卡片</h2>
<VPCard v-bind='{"title":"Mr.Hope","desc":"Where there is light, there is hope","logo":"https://mrhope.site/logo.svg","link":"https://mrhope.site","color":"rgba(253, 230, 138, 0.15)"}' /><h2 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> Chart</h2>
<ChartJS id="chart-89" config="eJyNUrtOwzAU3fsVlieQLBQnJBA2xEcgUXVwGitERHHluEOFsrHAijowsCAhgVgQYqIDf5OUv+DactsEJaVDnPs4Puce614PEMJqNuH4BOGISUx0IWaKQUE3IctYxLMC8iGuv56Wtx+YILy8f7TRz+LGRvXiexV9vtmoen3Q0UjzWuaCK8NmKsiqbJT0JNXdvH5+qebvZh7btVMNqUsQDQnyCPIJgsSz7AYVsfFVIsU0j89EJmRDyLRlErE914eLIVBQD647B+5+Q2cF8g+hH0Df9QDdAzJMrhMQdAxfD+gIMDQ0U/fLUR/8UEfrac5tetSH0QMYz4DWmNYrCBlzuesL0P/9d0La7jshbe+dkD/O+5XWvgGyxfV5GqtLcE1tozT/EZyl2W4xUanI9QraBS/GLOObHCqzRqJ5eZLmp+qCSwENJae8Ra3PclAOfgFjv8GB" title="%E4%B8%80%E4%B8%AA%E5%9D%97%E7%8A%B6%E5%9B%BE%E6%A1%88%E4%BE%8B" type="json"></ChartJS><h2 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> ECharts</h2>
<ECharts id="echarts-95" config="eJyVk71ugzAUhfc8hWWpWwZCfhp1qzp1aaW26lJluCk3YNVgZF/SoirvXtslQH4gYcHce44/+9jwO2KMS4wxi/gdc5WtSeW24GtFpFJue7uxs5FScq1+Gp9J1LetSBfoDLazQaBCY22xrRT0V6s+nFY1Pd9rERC8C3T6+Rl7p+1qhOg5k6VVNiDNKUyjIXWwmwurG9jivXlMIb48yY/u+X84BrVAYz0fXqjjZ5A6Fn8ScUIii0Eie0hAE69XpTL3llxg09QQicLzwmDMJkGwqqVPzAi1k/g8uOFj5odG18rgW8UEe0gNVBCmr1TKo3RrpSPUL/sVl2dvpY7WjufVLcjCEWdBczmt5G47bOI+oyNsB2a67MaEAzBhN2Y6ANMTanY9JuwJNR+AWXRjFgMwPWdzez1m0hNq2cJUb6v6l1mNdqM/icX4bQ==" title="%E4%B8%80%E4%B8%AA%E5%9F%BA%E7%A1%80%E5%8D%97%E4%B8%81%E6%A0%BC%E5%B0%94%E7%8E%AB%E7%91%B0%E5%9B%BE%E6%A1%88%E4%BE%8B"></ECharts><h2 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h2>
<Mermaid id="mermaid-101" code="eJxdkD1vwyAQhvf+ihudwaraqUPVpV66tJFSdT/D2aAaDsGRr18f5MSxnY3n4X1PHM567TA8AURmqaq/TNtIKW02RQH8ZAHuoOXjiAANdZgHATHk6OYAvnHfYrzjzmpacoPx37Ge8l8vb/523BFGZebiGhtWV/PeRnj+aE+AQ8+DxTHxmZOws+dp7O/qSZXhQNclALZD7q1P86ViF9iTlzRFinS6Jm/Qq3uvyGBYuE4HO08b++FUq7LS64OMtjeylB2RXnKyQuXDV4q44AVkU2O4"></Mermaid><h2 id="vue-交互演示" tabindex="-1"><a class="header-anchor" href="#vue-交互演示" aria-hidden="true">#</a> Vue 交互演示</h2>
<VuePlayground title="Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA" key="414f02b6" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICA8aDE%2Be3sgbXNnIH19PC9oMT5cbiAgPGlucHV0IHYtbW9kZWw9XCJtc2dcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IG1zZyA9IHJlZihcIuS9oOWlveS6pOS6kua8lOekuiFcIik7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiJ9">
</VuePlayground>
<h2 id="普通代码演示" tabindex="-1"><a class="header-anchor" href="#普通代码演示" aria-hidden="true">#</a> 普通代码演示</h2>

<CodeDemo id="code-demo-113" type="normal" title="Demo%20%E6%BC%94%E7%A4%BA" code="eJwljrGKAjEQhl9lbq5REJdrvZju4IorDhSrNEsysKvZZE2ygoiPopXgK4j4Olv4Fk7cZor5v3++OWCVGoszFNWXXHX0HyhGWFbUEPz6lkTBe+VEK0VsSwe1mSvcUdgrlM/Tub/dRJED2T/u/eX6IYqWcZzgOvJR43XXkEvTbceVBVnSyYeRws/hxHhaGvOzY+Kvjokc5UzbWm8UTmA0hrmEg3IApaWQOBuUg4vr38od82Cfjln4/vHd0N76MINAJkOMHF8ck1dC">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>VuePress Theme Hope<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>very<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>非常<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>强大!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#very"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"非常强大"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><h2 id="vue-代码演示" tabindex="-1"><a class="header-anchor" href="#vue-代码演示" aria-hidden="true">#</a> Vue 代码演示</h2>

<CodeDemo id="code-demo-121" type="vue" title="%E4%B8%80%E4%B8%AA%20Vue%20Option%20%E6%BC%94%E7%A4%BA" code="eJxVUEtuwyAQvcorq0Rt4r1LrB7EGwqT2io2CLCbyOLuHWOnajaA5n2ZRcwTiVrIRIO3KlHTjoA0/QxtVYyXVny6WyvKmAHtDDUs8YFiPKWOBjp1zpOsCoI+7sTo1YgPbXv9zR6dGo2lwD7LgoGl6ouQs6xW2qZoXkpyxdEcJqt/hWTUofeJX3TzLiQYuqrJJiyrxKikahyOuDQ4/LnXaIV3PxSuk20F8vFt5Q6UOmdivSmBvReL9wGQuj6eHxUv7DJTuPOF1yfofePnYruemSf8n0dTGdPdruXPvD+UbZQI7awLNQIZ5uci2Yki/wLx9ISI">
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">></span></span>vuepress-theme-hope<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">></span></span> is
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handler<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>
    <span class="token punctuation">></span></span>!
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"powerful"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">"very "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.box span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><h2 id="react-代码演示" tabindex="-1"><a class="header-anchor" href="#react-代码演示" aria-hidden="true">#</a> React 代码演示</h2>

<CodeDemo id="code-demo-127" type="react" title="%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E5%BC%8F%20React%20Demo" code="eJxNkD1OxDAQha8yMhRZaZf0S5KGGgooMdJ6nVkScOzIP8tKkQsaRMMtkLgD4jq5B3b+tN1I771v3kxHXgzZEq6ksdCBM/hgmUXwkMM9Mm6vqaQST63SFko8MCcsJCvIC+ioBBiDjw0aw55xDQbt7Tg/BcKMSyiB/u+3//6hZDUQ52TFZClQB+8ZFM4wya7/eu8/Py67aYffRQKAnzgardMSkjGYlfURuGDG3LEGc0r26kRJMYpB5qrE4uiw1YG2sRU2uKlUi1k6KIvPtExCXQZAq95QH5wIJyh5I2r+mndTa7/4AZZ6CyKNjMmRpaHXMMfysTpZE27i669CQ7iYt8xfFUpvYS8cRntw+3+/Wo8y">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>message<span class="token punctuation">,</span> setMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">" 强大"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">十分</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>code<span class="token operator">></span>vuepress<span class="token operator">-</span>theme<span class="token operator">-</span>hope<span class="token operator">&lt;</span><span class="token operator">/</span>code<span class="token operator">></span>
      <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">"powerful"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handler<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token punctuation">{</span>message<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box #powerful</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><h2 id="幻灯片演示" tabindex="-1"><a class="header-anchor" href="#幻灯片演示" aria-hidden="true">#</a> 幻灯片演示</h2>
<Presentation id="presentation-134" code="eJzjKs7JTEk15NLV5SpMy0otzyovKAsPc0srU+ACiulyQeSNkDnGXACfzg59" theme="[moon]"></Presentation><h2 id="使用图标" tabindex="-1"><a class="header-anchor" href="#使用图标" aria-hidden="true">#</a> 使用图标</h2>
<HopeIcon icon="share" /><HopeIcon icon="/svg/HTML.svg" /></div></template>


