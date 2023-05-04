---
sticky: 9
star: true
title: 冒泡排序
icon: state
order: 2
---
# 冒泡排序  :tada:

![](/images/arithmetic/maopao1.png)

冒泡排序是一种简单的排序算法

## 算法思路 :gem:

- 比较相邻的元素。如果第一个比第二个大，就交换它们两个；

- 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；

- 针对所有的元素重复以上的步骤，这时候最后一个元素是最大的，所以就不需要参与比较大小了；

- 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较

  ![](/images/arithmetic/maopao2.gif)

## 冒泡排序案例 :gem:
::: tabs#fruit
@tab JavaScript
#### 案例：将数组[40,30,20,10]实现从小到大排序
![](/images/arithmetic/maopao3.png)
---
![](/images/arithmetic/maopao4.png)
---
![](/images/arithmetic/maopao5.png)
```javascript
function sort(arr) {
  for (var i = 0; i < arr.length-1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      // 相邻元素两两对比，元素交换，大的元素交换到后面
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
       }
      console.log("循环次数"+j+":"+arr);
     }
    console.log("第"+i+"轮结束");
   }
  return arr;
}
```
@tab Python
#### 案例：将列表[5，2，6，4，7，3，1]实现从小到大排序

![](/images/arithmetic/maopao6.png)


```python
def bubble_sort(nums:list[int]) -> None:
  # 获取数据的长度
  length = len(nums)
  # 最外层循环
  for i in range(length-1):
    # 里面循环
    for j in range(length-1-i):
      # 判断数据是否需要交换
      if nums[j] > nums[j+1]:
        nums[j],nums[j+1] = nums[j+1],nums[j]

if __name__ =='__main__':
  nums =  [5,2,6,4,7,3,1]
  bubble_sort(nums)
  print(nums)
```
:::



**轻松一刻**
<AudioPlayer
  src="/mp3/3.mp3"
  title="音乐"
  poster="/mp3/3.jpg"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。