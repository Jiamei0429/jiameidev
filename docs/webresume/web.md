---
article: false
sidebar: false
title: 简历附件
---


::: tabs

@tab 接口文档

    
> 接口文档:  https://jiameikj.com:10002/

> `测试token :`  sioejfiaojfgapganga（有效期至2023-06-01）

> 注意：除登录模块不需要token,请求其余模块均要在请求头中携带token
> 格式如下:
> ```js
> AUTHORIZATION：Bearer token
> ```


## 一、登录模块

### 1.1、发送手机验证码

接口地址 ：/login/sendPhoneCode/{17667300429}/

成功返回值：

```json
{
	success：短信发送成功
	code:200
}
```

失败返回值：

```json
{
	error：操作过于频繁
	code:400
}
```

### 1.2、发送邮箱验证码

接口地址 ：/login/sendEmailCode/{486428167@qq.com}/

成功返回值：

```json
{
	success：邮件发送成功
	code:200
}
```

失败返回值：

```json
{
	error：操作过于频繁
	code:400
}
```

### 1.3、新用户注册

接口地址 ：/login/register/

参数类型：

```json
{
	username："用户名/账号"
	password："密码"
	phone:"手机号"
	verificationCode："验证码"
}
```

成功返回值：

```json
{
	success：注册成功
	username：用户名
	phone:手机号
	token："dfjasfdhjaiosjfg"
	code:200
}
```

失败返回值：

```json
{
	error：验证码错误/注册失败
	code:400
}
```

### 1.4、账号密码登录

接口地址 ：/login/login/

参数类型：

```json
{
	username："用户名/账号"
	password："密码"
	verificationCode："验证码"
}
```

成功返回值：

```json
{
	token：sdiofgjaosgn
	code:200
}
```

失败返回值：

```json
{
	error：验证码错误/用户名或密码错误
	code:400
}
```

### 1.5、手机号一键登录

接口地址 ：/login/phoneLogin/

参数类型：

```json
{
	phone：17667300429
	verificationCode："验证码"
}
```

成功返回值：

```json
{
	token：sdiofgjaosgn
	code:200
}
```

失败返回值：

```json
{
	error：验证码错误/用户不存在
	code:400
}
```

## 二、文件上传模块

### 2.1、本地文件上传服务器

#### 2.1.1、图片上传

接口地址：/upload/fileUpload/**（name=images）**

####  2.1.2、文本文件上传

接口地址：/upload/fileUpload/**（name=files）**

#### 2.1.3、 音频文件上传

接口地址：/upload/fileUpload/**（name=mp3）**

#### 2.1.4、 视频文件上传

接口地址：/upload/fileUpload/**（name=mp4）**

成功返回值：

```json
{
    code:200
    success:文件上传成功
    url:http://127.0.0.1:8000/media/images/87078.png
}
```

失败返回值：

```json
{
	error：文件上传失败
	code:400
}
```

### 2.2、阿里云oss云存储

#### 2.2.1、图片上传

接口地址：/upload/fileUpload/**（name=images）**

####  2.2.2、文本文件上传

接口地址：/upload/fileUpload/**（name=files）**

####  2.2.3、音频文件上传

接口地址：/upload/fileUpload/**（name=mp3）**

#### 2.2.4、 视频文件上传

接口地址：/upload/fileUpload/**（name=mp4）**

成功返回值：

```json
{
    code:200
    success:文件上传成功
    url:http://127.0.0.1:8000/media/images/87078.png
}
```

失败返回值：

```json
{
	error：文件上传失败
	code:400
}
```

## 三、支付模块

### 3.1、微信小程序支付

接口地址：/pay/wxsmall/

参数类型

```json
{
     openid:用户标识
     amount：金额（单位分）
	 description：商品名称
}
```

成功返回值：

```json
{
    code:200
    url:http://127.0.0.1:8000/media/images/87078.png
}
```

### 3.2、网页端微信支付

接口地址：/pay/wxweb/

参数类型:

```json
{
     amount：金额（单位分）
	 description：商品名称
}
```

成功返回值：

```json
{
    code:200
    url:http://127.0.0.1:8000/media/images/87078.png
}
```

### 3.3、支付宝支付（沙箱环境）

接口地址：/pay/zhifubao/

参数类型:

```json
{
     amount：金额（单位元，小数点后可有两位）
	 description：商品名称
}
```

成功返回值：

```json
{
    code:200
    url:http://127.0.0.1:8000/media/images/87078.png
}
```

@tab 项目截图

111

:::

