---
category: [SASS,WEB前端]
tag: [sass]
---
# 3.3 Sass嵌套 :tada:

![](/images/sass/scss7.png)


`css`中重复写选择器是非常恼人的。如果要写一大串指向页面中同一块的样式时，往往需要 一遍又一遍地写同一个`ID`

```html
<div id="content">
    <article>
        <h1>标题</h1>
        <p>文字</p>
    </article>
    <aside>边</aside>
</div>
```
```css
#content article h1 { color: #333 }
#content article p { margin-bottom: 1.4em }
#content aside { background-color: #EEE }
```

像这种情况，`sass`可以让你只写一遍，且使样式可读性更高。在`Sass`中，你可以像俄罗斯套娃那样在规则块中嵌套规则块。`sass`在输出`css`时会帮你把这些嵌套规则处理好，避免你的重复书写。

```scss
#content {
    article {
        h1 { color: #333; }
        p { margin-bottom: 1.4em; }
    }
    aside { background-color: #EEE; }
}
```

大多数情况下这种简单的嵌套都没问题，但是有些场景下不行，比如你想要在嵌套的选择器 里边立刻应用一个类似于`：hover`的伪类。为了解决这种以及其他情况，`sass`提供了一个特殊结构 `&`

```scss
article a {
    color: blue;
    &:hover { color: red }
}
```


::: normal-demo 效果展示
```html
<div id="content">
    <article>
        <h1>标题</h1>
        <p>文字</p>
    </article>
    <aside>边</aside>
</div>
```
```scss
#content {
    article {
        h1 { color: #333; }
        p { 
            margin-bottom: 1.4em; 
            &:hover { color:red }
        }
    }
    aside { background-color: #EEE; }
}
```
:::

**轻松一刻** :headphones:
<AudioPlayer
  src="/mp3/3.mp3"
  title="音乐"
  poster="/mp3/3.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。