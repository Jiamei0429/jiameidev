---
sticky: true
star: 10
---
# 快速排序 :tada:

![](./../../.vuepress/public/images/arithmetic/kuaisu1.png)

## 算法思路 :gem:

"快速排序"的思想很简单，整个排序过程只需要四步：

1. 在数据集之中，选择一个元素作为"基准"（pivot）。
2. 所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
3. 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止
4. 把所有的生成的新的数组元素合并在一起

![](./../../.vuepress/public/images/arithmetic/kuaisu2.gif)

## 快速排序案例 :gem:
::: tabs#fruit
@tab JavaScript
#### 案例：将数组[4,2,5,7,3,9,1]实现从小到大排序
- 第一步，选择中间的元素7作为"基准"。（基准值可以任意选择，但是选择中间的值比较容易理解。）
![](./../../.vuepress/public/images/arithmetic/kuaisu4.png)
- 第二步，按照顺序，将每个元素与"基准"进行比较，形成两个子集，一个"小于7"，另一个"大于等于7"
![](./../../.vuepress/public/images/arithmetic/kuaisu5.png)
- 第三步，对两个子集不断重复第一步和第二步，直到所有子集只剩下一个元素为止
![](./../../.vuepress/public/images/arithmetic/kuaisu6.png)
- 第四步，合并所有的元素
![](./../../.vuepress/public/images/arithmetic/kuaisu7.png)
```javascript
var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
   }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
     } else {
      right.push(arr[i]);
     }
   }
  return quickSort(left).concat([pivot], quickSort(right));
};
```
@tab Python
#### 案例：将列表[5，7，9，1，6，4，10，2，3，8]实现从小到大排序

![](./../../.vuepress/public/images/arithmetic/kuaisu8.png)


```python
def quick_sort(data):
  if len(data)>=2:
    # 找到基准值
    mid = data[len(data)//2]
    # 建立2个列表来存储比基准值小，大的数据
    left,right=[],[]
    # 从原数据中，删除mid
    data.remove(mid)
    # 遍历原有数据
    for num in data:
      # 如果数据比基准值大，就存放到right
      if num >= mid:
        right.append(num)
      else:
        left.append(num)
    # 合并数据,注意合并时,不把 列表和数字进行拼接,所以把mid封装到一个列表中
    return quick_sort(left) + [mid] +quick_sort(right)
  else:
    return data
if __name__ =='__main__':
  data =  [5，7，9，1，6，4，10，2，3，8]
  quick_sort(data)
```
:::



**轻松一刻**
<AudioPlayer
  src="/mp3/GoTime.mp3"
  title="英雄联盟"
  poster="https://img0.baidu.com/it/u=2811220644,2164135624&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
/>

**视频教程**
<VideoPlayer
  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4"/>

至此，本章节的学习就到此结束了，如有疑惑，可对接[技术客服](https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8)进行相关咨询。