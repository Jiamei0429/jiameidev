---
category: [sass,WEB前端]
tag: [sass]
---
# 3.1 初体验Sass :tada:

![](/images/sass/scss1.png)

::: tip 
sass是css预处理语言，scss 是 Sass 3 引入新的语法，其后缀名是分别为 .sass和.sass两种。

SASS版本3.0之前的后缀名为.sass，而版本3.0之后的后缀名.scss。

下面我为方便区分，名字统一叫做sass，文件后缀统一为.scss，不要刻意去区分sass和scss。
:::

我们写了这么久的代码，每次写页面都需要配合CSS，CSS里面重复代码其实很多，包含通配颜色值、容器大小等。那我们能否使用JavaScript声明变量的方式解决这些问题呢？原本的CSS当然是不支持的，但是有其他方案，他就是sass！！！

sass世界上最成熟、最稳定、最强大的专业级CSS扩展语言！


#### 为什么使用sass？

CSS 本身语法不够强大，导致重复编写一些代码，无法实现复用，而且代码也不方便维护。sass 引入合理的样式复用机制，增加了规则、变量、混入、选择器、继承、内置函数等等特性。

::: info sass优点
sass 是一个 CSS 预处理器

sass 完全兼容所有版本的 CSS

sass 扩展了 CSS3，增加了规则、变量、混入、选择器、继承、内置函数等等特性
:::


## Sass环境搭建 :gem:

![](/images/sass/scss2.png)

`sass`基于`Ruby`语言开发而成，因此安装`sass`前需要安装`Ruby`。（注:mac下自带Ruby无需再安装Ruby!）

### 安装Ruby :ghost:

Ruby下载地址：[https://rubyinstaller.org/downloads/](https://rubyinstaller.org/downloads/)

![](/images/sass/scss3.png)

看到下面的窗口，就代表着安装成功了，此时关闭即可

![](/images/sass/scss4.png)

安装完成后需测试安装有没有成功,运行CMD输入以下命令：

```bash
ruby -v
```

### RubyGems :ghost:

RubyGems 类似 Nodejs中的 npm

RubyGems 一直以来在国内都非常难访问到，我们需要将他的源替换国内的
```bash
// 删除替换原gem源
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/

// 打印是否替换成功
gem sources -l
// https://gems.ruby-china.com/
```



### sass安装 :ghost:
`Ruby`自带一个叫做`RubyGems`的系统，用来安装基于`Ruby`的软件。我们可以使用这个系统来 轻松地安装`Sass`和`Compass`

```bash
// 安装如下(如mac安装遇到权限问题需加 sudo gem install sass)
gem install sass
gem install compass
// 检测是否安装成功
sass -v     // Ruby Sass 3.7.4
compass -v // Compass 1.0.3
```



## 编译Sass  :gem:

![](/images/sass/scss5.png)

`sass`编译有很多种方式，如命令行编译模式、编译软件`koala` 、工程化工具`webpack`等

::: warning 为什么要编译sass
浏览器不支持解析sass，需要把sass文件编译为浏览器可解析执行的sass文件
:::

### 编写Sass代码 :ghost:
Sass文件的后缀名为.scss


```scss
/* style.scss */
.box {
  width: 300px;
  height: 400px;

   &-title {
    height: 30px;
    line-height: 30px;
   }
}
```
### 命令行编译 :ghost:

```bash
sass style.scss style.css
```



::: normal-demo 效果展示
```html
<div class="container">
  <div class="content">
    <div class="left">1</div>
    <div class="center">2</div>
    <div class="right">3</div>
  </div>
</div>
```
```scss
.container{
  background-color:red;
  .content{
    display: flex;
    justify-content: space-between;
    @mixin borderColor($color){
      color:$color;
    }
    .left{
       @include borderColor(green);
    }
    .center{
       @include borderColor(pink);
    }
    .right{
       @include borderColor(blue);
    }
  }
}
```


:::





**轻松一刻** :headphones:
<AudioPlayer
  src="/mp3/1.mp3"
  title="音乐"
  poster="/mp3/1.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。