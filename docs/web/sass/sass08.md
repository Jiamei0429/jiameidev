---
category: [SASS,WEB前端]
tag: [sass]
---
# 3.8 Sass控制指令 :tada:

![](/images/sass/scss14.png)

`Sass`提供了一些基础的控制指令，比如在满足一定条件时引用样式，或者设定范围重复输出格式。控制指令是一种高级功能，日常编写过程中并不常用到

## @if :gem:

当 `@if` 的表达式返回值不是 `false` 或者 `null` 时，条件成立，输出 `{}` 内的代码
```scss
p {
  @if 1+1==2 {
    border: 1px solid;
   }
  @if 5 < 3 {
    border: 2px dotted;
   }
  @if null {
    border: 3px double;
   }
}
```

## @for :gem:
`@for` 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。
```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 2px * $i;
   }
}
```



::: normal-demo 效果展示
```html
<div id="content">
    <p>111</p>
    <ol>
        <li>21</li>
        <li>22</li>
        <li>23</li>
    </ol>
</div>
```
```scss
#content {
    p{
        @if 1+1==2 {
            border: 1px solid red;
        }
        @if 5 < 3 {
            color: pink;
        }
    }
    ol{
        li{
            list-style: none;
            @for $i from 1 through 3 {
                &:nth-child(#{$i}) {
                    font-size: 12px * $i;
                }
            } 
        }
    }
}
```
:::







**轻松一刻** :headphones:
<AudioPlayer
  src="/mp3/8.mp3"
  title="音乐"
  poster="/mp3/8.jpg"
/>

**视频教程** :movie_camera:
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。