---
category: [SASS,WEB前端]
tag: [sass]
---
# 3.5 Sass混合 :tada:

![](/images/sass/scss11.png)

如果你的整个网站中有几处小小的样式类似（例如一致的颜色和字体），那么使用变量来统一处理这种情况是非常不错的选择。但是当你的样式变得越来越复杂，你需要大段大段的重用样式的代码，独立的变量就没办法应付这种情况了。你可以通过`sass`的混合实现大段样式的重用

```scss
@mixin rounded-corners {
  border-radius: 5px;
}

.notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}
```

### 混合传参  :gem:

混合并不一定总得生成相同的样式。可以通过在`@include`时给混合传参，来定制混合生成的精确样式。

并且，我们还可以指定参数默认值，当参数不传递的时候，可以使用默认值

```scss
@mixin link-colors($color, $hover:blue) {
    color: $color;
    &:hover {
        color: $hover;
    }
}

.box1{
  @include link-colors(red,green);
}
.box2{
  @include link-colors(red);
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
@mixin rounded-corners {
  border-radius: 5px;
  background-color: red;
}
@mixin link-colors($color, $hover:red) {
    color: $color;
    &:hover {
        color: $hover;
    }
}
#content {
    article {
        h1 { 
            color: #333; 
            @include rounded-corners;
        }
        p { 
            margin-bottom: 1.4em; 
            @include link-colors(blue);
        }
    }
    aside {
        background-color: #EEE; 
        @include link-colors(pink,orange);
    }
}
```
:::





**轻松一刻** :headphones:
<AudioPlayer
  src="/mp3/5.mp3"
  title="音乐"
  poster="/mp3/5.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。