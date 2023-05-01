---
title: 发布NPM软件包
icon: npm
order: 2
---

# 发布NPM软件包 :tada:

第一步：

去官网注册自己的账号

https://registry.npmjs.org/

第二部：

在文件根目录下执行npm init，进行初始化

```
package name: (node_server_ts)
version: (1.0.0) 1.0.1                                                                                                                                                                                                             
description: 初始化的nodejs项目
git repository:                                                                                                                                                                                                                 
keywords: 涉及到增删改查、登录、分页、搜索等一系列接口
author: 刘春龙                                                                                                                                                                                                                     
license: (ISC) 
```

第三步：登录自己的npm账号

```
npm login
将给出的网址复制到浏览器中打开
输入你的账号
输入你的密码

可能会发验证码

npm whoami   查看是谁登录的
```

第四步：执行npm publish   进行发布



下载：npm install node_server_ts

下载源文件：npm pack node_server_ts

升级

```
npm version patch   1.2.x  补丁版本
npm version minor    1.x.2   增加了新功能
npm version major  x.2.3   大改动

记得要 npm publish
```

删除

```
npm unpublish data_format_lcl --force 强制卸载
npm unpublish data_format_lcl@1.1.1 --force 
```

