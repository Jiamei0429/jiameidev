<template><div><h1 id="ubuntu系统的安装" tabindex="-1"><a class="header-anchor" href="#ubuntu系统的安装" aria-hidden="true">#</a> Ubuntu系统的安装 🎉</h1>
<blockquote>
<p>注意事项：</p>
<p>如若保持双系统，请提前准备一个空的磁盘分区并见将其处于未分配的状态</p>
</blockquote>
<h2 id="制作启动盘" tabindex="-1"><a class="header-anchor" href="#制作启动盘" aria-hidden="true">#</a> 制作启动盘💎</h2>
<p>首先下载系统镜像，利用U盘制作启动盘，从<a href="https://cn.ubuntu.com/" target="_blank" rel="noopener noreferrer">Ubuntu官网<ExternalLinkIcon/></a>进行下载，你可以选择桌面版本，也可以选择服务器版本，下载最新的LTS(意思为长期支持)版本，这里我选择桌面版本进行给大家演示。</p>
<p>其次下载启动盘自作工具，类似于这样的工具有很多，这里我给大家推荐Rufus这款工具，无需安装，下载即使用，<a href="https://github.com/pbatard/rufus/releases/download/v3.22/rufus-3.22.exe" target="_blank" rel="noopener noreferrer">点击这里<ExternalLinkIcon/></a>进行下载，完成之后，我们就可以制作启动盘了（任何系统的安装都适用）。</p>
<p>第一步：插入一个空间不小于8G的空U盘，找到下载的镜像文件并选择，分区类型选择GPT(也不一定选择GPT,具体要根据自身电脑配置来选择，具体怎么选择，我给大家附带一篇<a href="https://www.luyouqi.com/shezhi/29593.html" target="_blank" rel="noopener noreferrer">文章<ExternalLinkIcon/></a>，请自行参考，简单总结一句，MBR兼容性好，GPT比较先进)，其他选项默认即可。</p>
<figure><img src="@source/../.vuepress/public/images/ubuntu/ubuntu1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击开始，选择以ISO镜像模式写入，点击OK，此时会提示你即将格式化你的U盘，点击确定就行，操作过程可能需要等待1分钟左右，直到出现准备就绪就代表启动盘制作成功了。</p>
<h2 id="进行系统安装" tabindex="-1"><a class="header-anchor" href="#进行系统安装" aria-hidden="true">#</a> 进行系统安装💎</h2>
<p>将启动盘插入你要安装系统的电脑，开机时进入bois引导界面（我的电脑是狂按F2）,在启动菜单里找到你的U盘，选择并进入系统（这里有可能是点击选择进行启动，也有可能是调整启动顺序），不同的电脑设置BIOS界面虽稍有不同，也是大同小异。</p>
<figure><img src="@source/../.vuepress/public/images/ubuntu/ubuntu2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>进入之后，桌面上开始展示黑色窗口，请选择Try Ubuntu....... installing或者 Install Ubuntu，正式进入安装页面，接下开开始选择你的语言</p>
<figure><img src="@source/../.vuepress/public/images/ubuntu/ubuntu3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果你是笔记本电脑，会询问你是否连接WIFI，选择稍后连接或者直接连上WIFI都行，点击下一步，选择如何安装，重点的地方来了</p>
<figure><img src="@source/../.vuepress/public/images/ubuntu/ubuntu4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这里有三个选择：</p>
<ul>
<li>
<p>与你本机已有的系统同时存在，也就是双系统</p>
</li>
<li>
<p>清除整个磁盘安装Ubuntu，就是删除之前存在的系统，只保留Ubuntu</p>
</li>
<li>
<p>自定义安装（自由度高，推荐使用）</p>
<ul>
<li>
<p>分区1：efi引导分区 1024M    主分区</p>
</li>
<li>
<p>分区2：swap交换空间   一般为物理内存的空间大小     主分区</p>
</li>
<li>
<p>分区3： 用于Ext4日志文件系统    挂载点 /     剩余全部空间      主分区</p>
<blockquote>
<p>这是自定义分区最简的分区方式，当然你也可以把/home、/var、/usr等单独分离出去</p>
<p>需要注意的是，这里的分区是要在之前预留的未分配的空闲空间上进行，点击+号进行创建</p>
</blockquote>
</li>
</ul>
</li>
</ul>
<p>分区完成后点击下一步，选择时区，用鼠标点击中国版图的区域即可选择，之后开始进行填写系统相关信息，此处设置的密码，在登录系统、使用终端Terminal等都会用到，请记牢。</p>
<figure><img src="@source/../.vuepress/public/images/ubuntu/ubuntu5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击下一步，开始安装，界面下方显示安装进度，安装完成后，会弹出提示框，此时，拔掉U盘，点击重启即可，至此Ubuntu系统安装完成，若如安装遇到困难，可对接<a href="https://work.weixin.qq.com/kfid/kfc8c0fd9b49c1f38b8" target="_blank" rel="noopener noreferrer">技术人员<ExternalLinkIcon/></a>进行协助。</p>
</div></template>


