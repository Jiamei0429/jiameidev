import{_ as i,Y as c,Z as d,a1 as r,a2 as e,I as u,$ as n,a0 as s}from"./framework-5cc4ff0f.js";const p={},m=n("blockquote",null,[n("p",null,"接口文档: https://jiameikj.com:10002/")],-1),h=n("blockquote",null,[n("p",null,[n("code",null,"测试token :"),s(" sioejfiaojfgapganga（有效期至2023-06-01）")])],-1),_=n("blockquote",null,[n("p",null,"注意：除登录模块不需要token,请求其余模块均要在请求头中携带token 格式如下:"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token constant"},"AUTHORIZATION"),s(`：Bearer token
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])],-1),b=n("h2",{id:"一、登录模块",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、登录模块","aria-hidden":"true"},"#"),s(" 一、登录模块")],-1),v=n("h3",{id:"_1-1、发送手机验证码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-1、发送手机验证码","aria-hidden":"true"},"#"),s(" 1.1、发送手机验证码")],-1),g=n("p",null,"接口地址 ：/login/sendPhoneCode/{17667300429}/",-1),k=n("p",null,"成功返回值：",-1),j=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	success：短信发送成功
	code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"200"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("p",null,"失败返回值：",-1),f=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	error：操作过于频繁
	code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"400"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("h3",{id:"_1-2、发送邮箱验证码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-2、发送邮箱验证码","aria-hidden":"true"},"#"),s(" 1.2、发送邮箱验证码")],-1),w=n("p",null,"接口地址 ：/login/sendEmailCode/{486428167@qq.com}/",-1),C=n("p",null,"成功返回值：",-1),q=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	success：邮件发送成功
	code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"200"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("p",null,"失败返回值：",-1),A=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	error：操作过于频繁
	code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"400"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("h3",{id:"_1-3、新用户注册",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-3、新用户注册","aria-hidden":"true"},"#"),s(" 1.3、新用户注册")],-1),N=n("p",null,"接口地址 ：/login/register/",-1),y=n("p",null,"参数类型：",-1),I=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	username：`),n("span",{class:"token string"},'"用户名/账号"'),s(`
	password：`),n("span",{class:"token string"},'"密码"'),s(`
	phone`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},'"手机号"'),s(`
	verificationCode：`),n("span",{class:"token string"},'"验证码"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("p",null,"成功返回值：",-1),E=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	success：注册成功
	username：用户名
	phone`),n("span",{class:"token operator"},":"),s(`手机号
	token：`),n("span",{class:"token string"},'"dfjasfdhjaiosjfg"'),s(`
	code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"200"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("p",null,"失败返回值：",-1),Z=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	error：验证码错误/注册失败
	code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"400"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("h3",{id:"_1-4、账号密码登录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-4、账号密码登录","aria-hidden":"true"},"#"),s(" 1.4、账号密码登录")],-1),H=n("p",null,"接口地址 ：/login/login/",-1),L=n("p",null,"参数类型：",-1),P=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	username：`),n("span",{class:"token string"},'"用户名/账号"'),s(`
	password：`),n("span",{class:"token string"},'"密码"'),s(`
	verificationCode：`),n("span",{class:"token string"},'"验证码"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("p",null,"成功返回值：",-1),Y=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	token：sdiofgjaosgn
	code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"200"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$=n("p",null,"失败返回值：",-1),D=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	error：验证码错误/用户名或密码错误
	code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"400"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("h3",{id:"_1-5、手机号一键登录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-5、手机号一键登录","aria-hidden":"true"},"#"),s(" 1.5、手机号一键登录")],-1),G=n("p",null,"接口地址 ：/login/phoneLogin/",-1),J=n("p",null,"参数类型：",-1),K=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	phone：`),n("span",{class:"token number"},"17667300429"),s(`
	verificationCode：`),n("span",{class:"token string"},'"验证码"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("p",null,"成功返回值：",-1),Q=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	token：sdiofgjaosgn
	code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"200"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("p",null,"失败返回值：",-1),W=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	error：验证码错误/用户不存在
	code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"400"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),X=n("h2",{id:"二、文件上传模块",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二、文件上传模块","aria-hidden":"true"},"#"),s(" 二、文件上传模块")],-1),nn=n("h3",{id:"_2-1、本地文件上传服务器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-1、本地文件上传服务器","aria-hidden":"true"},"#"),s(" 2.1、本地文件上传服务器")],-1),sn=n("h4",{id:"_2-1-1、图片上传",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-1-1、图片上传","aria-hidden":"true"},"#"),s(" 2.1.1、图片上传")],-1),en=n("p",null,[s("接口地址：/upload/fileUpload/"),n("strong",null,"（name=images）")],-1),an=n("h4",{id:"_2-1-2、文本文件上传",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-1-2、文本文件上传","aria-hidden":"true"},"#"),s(" 2.1.2、文本文件上传")],-1),ln=n("p",null,[s("接口地址：/upload/fileUpload/"),n("strong",null,"（name=files）")],-1),on=n("h4",{id:"_2-1-3、-音频文件上传",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-1-3、-音频文件上传","aria-hidden":"true"},"#"),s(" 2.1.3、 音频文件上传")],-1),tn=n("p",null,[s("接口地址：/upload/fileUpload/"),n("strong",null,"（name=mp3）")],-1),cn=n("h4",{id:"_2-1-4、-视频文件上传",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-1-4、-视频文件上传","aria-hidden":"true"},"#"),s(" 2.1.4、 视频文件上传")],-1),dn=n("p",null,[s("接口地址：/upload/fileUpload/"),n("strong",null,"（name=mp4）")],-1),rn=n("p",null,"成功返回值：",-1),un=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
    code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"200"),s(`
    success`),n("span",{class:"token operator"},":"),s(`文件上传成功
    url`),n("span",{class:"token operator"},":"),s("http"),n("span",{class:"token operator"},":"),n("span",{class:"token comment"},"//127.0.0.1:8000/media/images/87078.png"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pn=n("p",null,"失败返回值：",-1),mn=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	error：文件上传失败
	code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"400"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),hn=n("h3",{id:"_2-2、阿里云oss云存储",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-2、阿里云oss云存储","aria-hidden":"true"},"#"),s(" 2.2、阿里云oss云存储")],-1),_n=n("h4",{id:"_2-2-1、图片上传",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-2-1、图片上传","aria-hidden":"true"},"#"),s(" 2.2.1、图片上传")],-1),bn=n("p",null,[s("接口地址：/upload/fileUpload/"),n("strong",null,"（name=images）")],-1),vn=n("h4",{id:"_2-2-2、文本文件上传",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-2-2、文本文件上传","aria-hidden":"true"},"#"),s(" 2.2.2、文本文件上传")],-1),gn=n("p",null,[s("接口地址：/upload/fileUpload/"),n("strong",null,"（name=files）")],-1),kn=n("h4",{id:"_2-2-3、音频文件上传",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-2-3、音频文件上传","aria-hidden":"true"},"#"),s(" 2.2.3、音频文件上传")],-1),jn=n("p",null,[s("接口地址：/upload/fileUpload/"),n("strong",null,"（name=mp3）")],-1),xn=n("h4",{id:"_2-2-4、-视频文件上传",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-2-4、-视频文件上传","aria-hidden":"true"},"#"),s(" 2.2.4、 视频文件上传")],-1),fn=n("p",null,[s("接口地址：/upload/fileUpload/"),n("strong",null,"（name=mp4）")],-1),Un=n("p",null,"成功返回值：",-1),wn=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
    code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"200"),s(`
    success`),n("span",{class:"token operator"},":"),s(`文件上传成功
    url`),n("span",{class:"token operator"},":"),s("http"),n("span",{class:"token operator"},":"),n("span",{class:"token comment"},"//127.0.0.1:8000/media/images/87078.png"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Cn=n("p",null,"失败返回值：",-1),qn=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
	error：文件上传失败
	code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"400"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Tn=n("h2",{id:"三、支付模块",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#三、支付模块","aria-hidden":"true"},"#"),s(" 三、支付模块")],-1),An=n("h3",{id:"_3-1、微信小程序支付",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-1、微信小程序支付","aria-hidden":"true"},"#"),s(" 3.1、微信小程序支付")],-1),Bn=n("p",null,"接口地址：/pay/wxsmall/",-1),Nn=n("p",null,"参数类型",-1),yn=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
     openid`),n("span",{class:"token operator"},":"),s(`用户标识
     amount：金额（单位分）
	 description：商品名称
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),In=n("p",null,"成功返回值：",-1),Vn=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
    code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"200"),s(`
    url`),n("span",{class:"token operator"},":"),s("http"),n("span",{class:"token operator"},":"),n("span",{class:"token comment"},"//127.0.0.1:8000/media/images/87078.png"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),En=n("h3",{id:"_3-2、网页端微信支付",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-2、网页端微信支付","aria-hidden":"true"},"#"),s(" 3.2、网页端微信支付")],-1),On=n("p",null,"接口地址：/pay/wxweb/",-1),Zn=n("p",null,"参数类型:",-1),zn=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
     amount：金额（单位分）
	 description：商品名称
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Hn=n("p",null,"成功返回值：",-1),Ln=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
    code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"200"),s(`
    url`),n("span",{class:"token operator"},":"),s("http"),n("span",{class:"token operator"},":"),n("span",{class:"token comment"},"//127.0.0.1:8000/media/images/87078.png"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Pn=n("h3",{id:"_3-3、支付宝支付-沙箱环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-3、支付宝支付-沙箱环境","aria-hidden":"true"},"#"),s(" 3.3、支付宝支付（沙箱环境）")],-1),Rn=n("p",null,"接口地址：/pay/zhifubao/",-1),Yn=n("p",null,"参数类型:",-1),$n=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
     amount：金额（单位元，小数点后可有两位）
	 description：商品名称
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Dn=n("p",null,"成功返回值：",-1),Fn=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
    code`),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"200"),s(`
    url`),n("span",{class:"token operator"},":"),s("http"),n("span",{class:"token operator"},":"),n("span",{class:"token comment"},"//127.0.0.1:8000/media/images/87078.png"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Gn=n("p",null,"111",-1);function Jn(Kn,Mn){const a=u("Tabs");return c(),d("div",null,[r(a,{id:"0",data:[{title:"接口文档"},{title:"项目截图"}]},{tab0:e(({title:l,value:o,isActive:t})=>[m,h,_,b,v,g,k,j,x,f,U,w,C,q,T,A,B,N,y,I,V,E,O,Z,z,H,L,P,R,Y,$,D,F,G,J,K,M,Q,S,W,X,nn,sn,en,an,ln,on,tn,cn,dn,rn,un,pn,mn,hn,_n,bn,vn,gn,kn,jn,xn,fn,Un,wn,Cn,qn,Tn,An,Bn,Nn,yn,In,Vn,En,On,Zn,zn,Hn,Ln,Pn,Rn,Yn,$n,Dn,Fn]),tab1:e(({title:l,value:o,isActive:t})=>[Gn]),_:1})])}const Sn=i(p,[["render",Jn],["__file","web.html.vue"]]);export{Sn as default};
