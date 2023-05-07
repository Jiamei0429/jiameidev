---
category: [SASS,WEB前端]
tag: [sass]
---
# 3.6 Sass继承 :tada:


![](/images/sass/scss12.png)

使用`sass`的时候，最后一个减少重复的主要特性就是选择器继承。选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式。这个通过`@extend`语法实现


```scss
.error {
  border: 1px solid red;
  background-color: #fdd;
}

.seriousError {
  @extend .error;
  border-width: 3px;
}
```


通常使用继承会让你的`css`美观、整洁。因为继承只会在生成`css`时复制选择器，而不会复制大段的`css`属性。

::: tip  思考继承和混合的区别
继承的原理并不是通过样式属性的复制来实现的，而是通过选择器的复制实现的，所以跟混合相比，继承生成的css代码相对更少。
:::







::: normal-demo 效果展示
```html
<div id="content">
    <h1>1</h1>
    <p>2</p>
</div>
```
```scss
#content {
    h1 { 
        color: red;
        border: 1px solid blue; 
    }
    p { 
        @extend h1;
        margin-bottom: 1.4em; 
        border-width: 3px;
    }
}
```
:::


**轻松一刻** :headphones:
<AudioPlayer
  src="/mp3/6.mp3"
  title="音乐"
  poster="/mp3/6.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。