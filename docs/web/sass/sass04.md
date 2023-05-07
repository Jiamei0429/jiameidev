---
category: [SASS,WEB前端]
tag: [sass]
---
# 3.4 导入和静默注释 :tada:

## 导入Sass文件 :gem:
![](/images/sass/scss8.png)

`css`有一个特别不常用的特性，即`@import`规则，它允许在一个`css`文件中导入其他`css`文件。然而，后果是只有执行到`@import`时，浏览器才会去下载其他`css`文件，这导致页面加载起来特别慢。

`sass`也有一个`@import`规则，但不同的是，`sass`的`@import`规则在生成`css文`件时就把相关文件导入进来。这意味着所有相关的样式被归纳到了同一个`css`文件中，而无需发起额外的下载请求。

使用`sass`的`@import`规则并不需要指明被导入文件的全名。你可以省略`.sass`或`.scss`文件后缀

![](/images/sass/scss9.png)


跟原生的`css`不同，`sass`允许`@import`命令写在`css`规则内

```scss
/* aside.scss */
a {
    background: blue;
    color: white;
}
```

```scss
@import "aside"   /* 导入方式1 */
div {
    color:red;
    @import "aside"   /* 导入方式2 */
}
``` 


::: tip
通过方式1导入后`a`和`div`属于同级关系，而通过方式2导入后`a`和`div`属于子父级关系，`a`被解析到了`div`里面
:::


## 静默注释 :gem:

![](/images/sass/scss10.png)

`css`中注释的作用包括帮助你组织样式、以后你看自己的代码时明白为什么这样写，以及简单的样式说明。但是，你并不希望每个浏览网站源码的人都能看到所有注释。

`sass`另外提供了一种不同于`css`标准注释格式`/* ... */`的注释语法，即静默注释，其内容不会出现在生成的`css`文件中。静默注释的语法跟JavaScript、Java等类C的语言中单行注释的语法相同，它们以 `//`开头，注释内容直到行末。


```scss
body {
 color: #333; // 这种注释内容不会出现在生成的css文件中
 padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}
```
实际上，`css`的标准注释格式`/* ... */`内的注释内容亦可在生成的`css`文件中抹去。当注释出现在原生`css`不允许的地方，如在`css`属性或选择器中，`sass`将不知如何将其生成到对应`css`文件中的相应位置，于是这些注释被抹掉
```scss
body {
  color /* 这块注释内容不会出现在生成的css中 */: #333;
}
```


**轻松一刻** :headphones:
<AudioPlayer
  src="/mp3/4.mp3"
  title="音乐"
  poster="/mp3/4.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。