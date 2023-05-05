# 1.1 初体验Python  :tada:

![](/images/python/py1.png)

Python是当今世界最流行的程序语言之一。由荷兰人，吉多·范罗苏姆（Guido van Rossum）1989年发明，1991年公布。官网：[www.python.org](http://www.python.org/)

Python突出的简洁性、易读性和可扩展性，使得在数据科学、人工智能、云计算、图形处理与互联网应用等领域占尽风头。有这么一个梗，python出了生孩子，其他都能做，足以体现python的地位了。

目前，Python有两大版本，分别是Python2.x和Python3.x。Python2.x版本在2020年已经停止支持，因此Python3.x是目前主流。

> ⚠️Python3：2008年发布。Python3有了较大的提升，不兼容Python2。
>
> ❤️兼容问题解决：
>
> 1. Python3的很多新特性也被移植到了Python2.7，作为过渡。如果程序可以在2.7运行，可以通过一个名为2to3（Python自带的一个脚本）的转换工具无缝迁移到Python3。
> 2. 强烈建议大家从Python3开始，毕竟它是现在，也是未来

## Python特点:gem:

- **可读性强**

  > 可读性远比听上去重要的多得多。
  >
  > 可读性强意味着让你可以在更短时间内学习和记忆，直接提高生产率。

- **简洁，简洁，简洁**

  > python完成同样功能只用其他语言一半的代码，其实就是提高了一倍的生产率。
  >
  > 程序员再也不需要关注复杂的语法，而是关注任务本身。

- **开源**

  > Python是纯粹的开源语言，软件更容易移植到其他的平台，如Mac、Linux等，因此Python拥有丰富的第三方资源库是不足为奇的。

- **标准脚本语言**

  > 脚本程序是指只有需要被调用时，才会被动态的解释执行。
  >
  > Python也被称为：“胶水语言”。
  >
  > Python允许混合使用C、Java与Python代码例如Python程序中允许调用一段由Java编写的程序模块（库），甚至这段Java模块可以是保密的。

## **Python应用场景**:gem:

![](/images/python/py2.png)

1. **人工智能(AI** Artificial Intelligence**)**

   人工智能领域的王者！人工智能领域大多数开发场景都有Python的身影。

2. **Web应用开发**

   一些Web框架，如Django，TurboGears，web2py，Zope等，可以让程序员轻松地开发和管理复杂的Web程序。

3. **操作系统管理、服务器运维的自动化脚本**

   大多数Linux发行版以及NetBSD、OpenBSD和MacOSX都集成了Python，可以在终端下直接运行Python。一般说来，Python编写的系统管理脚本在可读性、性能、代码重用度、扩展性几方面都优于普通的shell脚本。

4. **科学计算和数据分析**

   NumPy，SciPy，Matplotlib可以让Python程序员编写科学计算程序。

5. **桌面软件**

   PyQt、PySide、wxPython、PyGTK是Python快速开发桌面应用程序的利器。

6. **服务器软件、网络爬虫**

7. **游戏开发**

   很多游戏使用C++编写图形显示等高性能模块，而使用Python或者Lua编写游戏的逻辑、服务器。

## Python运行环境搭建:gem:

![](/images/python/py3.png)

不管用什么工具开发Python程序，都必须安装Python的运行环境。目前最常用的是Windows、Linux平台。由于目前使用Windows的人数最多，我们以Windows10为主讲解。同时，我们使用python3.11版本为主要学习版本。

> ⚠️其实编程和平台关系不大。大家也可以使用Linux、Mac。

- 第一步：进入python官网(python.org)，[下载python安装包](https://www.python.org/ftp/python/3.11.3/python-3.11.3-amd64.exe)

- 第二步：以管理员身份运行下载好的`python.exe`

  ![](/images/python/py4.png)

- 第三步：选中界面下方的"Add Python 3.11 to Path"复选框，这样安装程序就会自动将Python的路径加到PATH环境变量中，进行安装

  ![](/images/python/py5.png)

  ![](/images/python/py6.png)

  ![](/images/python/py7.png)

  ![](/images/python/py8.png)

  直到看到successful，就代表安装成功了

- 第四步：运行python

  windows查找命令中输入`cmd`，或直接win+r输入`cmd`， 进入命令行窗口，再输入：`python`

  ![](/images/python/py9.png)

  输入`print("hello world")`

  ![](/images/python/py10.png)

  > 1. `>>>` 即为“提示符”
  >
  > 2. 关闭交互模式：
  >
  >    (1) `Ctrl+Z`和`回车`
  >
  >    (2) 输入`quit()`或`exit()`命令
  >
  >    (3) 直接关闭命令行窗口

## **IDLE开发环境使用入门**:gem:

![](/images/python/py11.png)

开发环境，英文是IDE（Integrated Development Environment 集成开发环境）。

不要纠结于使用哪个开发环境。开发环境本质上就是对Python解释器python.exe的封装，核心都一样。可以说：“开发环境IDE，只是解释器的一个外挂而已”，只是为了让程序员更加方便编程，减少出错率，尤其是拼写错误。

工欲善其事，必先利其器，选择自己擅长的开发工具是十分重要的。

常用的开发环境如下：

1. IDLE
2. Pycharm （推荐）
3. vscode （推荐）
4. jupyter

个人习惯使用vscode，在接下来的讲解中，我都用此工具进行代码的编辑。

## 视频讲解:film_projector:

<video  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/97ac2dcc1367e03ac580204d6ca9a724.mp4" width="100%" controls></video>

至此，我们已经初步体验了python并用其写出了第一个程序，接下来我会带大家正式进入python知识的学习了