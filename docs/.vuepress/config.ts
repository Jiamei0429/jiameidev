import { defineUserConfig } from 'vuepress';
import { hopeTheme, sidebar } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";  //搜索
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";  //增强
import { gitPlugin } from '@vuepress/plugin-git'   //git时间
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";  // 自动生成目录
export default defineUserConfig({
    lang: 'zh-CN',
    title: '嘉美开发社区',
    description: '带你成为全栈开发者',
    head: [
        ["link", { rel: 'icon', href: '/images/logo.png' }],
        ['meta', { name: '嘉美开发社区', content: '嘉美、嘉美工作室' }]
    ],
    plugins: [
        autoCatalogPlugin({
        }),
        gitPlugin({
            // 配置项
        }),
        searchProPlugin({
            indexContent: true,
        }),
        mdEnhancePlugin({
            // 启用自定义容器
            container: true,
            // 添加选项卡支持
            tabs: true,
            // 启用代码块分组
            codetabs: true,
            // 启用任务列表
            tasklist: true,
            // 启用 figure
            figure: true,
            // 启用图片懒加载
            imgLazyload: true,
            // 启用图片标记
            imgMark: true,
            // 启用图片大小
            imgSize: true,
            // 开启卡片支持
            card: true,
            // 启用图表
            chart: true,
            // 启用 ECharts 图表
            echarts: true,
            // 启用流程图
            flowchart: true,
            // 启用 mermaid
            mermaid: true,
            // 启用 vue 交互演示
            vuePlayground: true,
            // 启用代码演示
            demo: true,
            // 启用幻灯片
            presentation: true,
            // 开启标记
            mark: true,
            // 在此放置交互演示配置
            playground: {
                // 添加预设
                presets: [
                    "ts",
                    "vue",
                ],
            },

        }),
    ],
    theme: hopeTheme({
        home: "/",
        author: "刘春龙",   //  文章作者
        repo: "Jiamei0429/jiameidev",  //  仓库地址
        repoLabel: "GitHub",   // 仓库平台
        editLink: true,   //  开启编辑此页
        docsRepo: 'https://github.com/Jiamei0429/jiameidev',
        docsBranch: 'editlink',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        lastUpdated: true,   // 最近更新
        contributors: true,   //  贡献者
        hostname: "https://jiameikj.com",
        logo: '/images/logo.png',  // 页面logo
        logoDark: "/images/logo.png",
        fullscreen: true,      //  开启全屏
        iconAssets: "iconfont",
        blog: {         // 开启博客功能
            roundAvatar: true,
            avatar: "/images/logo.png",
            name: "嘉美社区",
            description: "快速向全栈开发转变",
            intro: "/resume/",
            timeline: "更新日志",
            medias: {
                "QQ": "QQ",
                "Wechat": "微信",
                "Weibo": "微博",
                "GitHub": "GitHub",
                "Gitee": "码云",
                "Email": "邮件",
                "Baidu": "百度",
            }
        },

        plugins: {
            blog: {
                excerptLength: 60,
            },
            components: {
                // 你想使用的组件
                components: [
                    "AudioPlayer",
                    "VideoPlayer",
                    "ArtPlayer",
                    "Badge",
                    "BiliBili",
                    "CodePen",
                    "PDF",
                    "Replit",
                    "StackBlitz",
                    "YouTube",
                ],
            },
            comment: {            //评论功能
                provider: "Giscus",
                repo: "Jiamei0429/jiamei",
                repoId: 'R_kgDOJcPjiQ',
                category: "Announcements",
                categoryId: "DIC_kwDOJcPjic4CWGm4",
            }
        },
        themeColor: {     // 主题颜色配置
            blue: "#2196f3",
            red: "#f26d6d",
            green: "#3eaf7c",
            orange: "orange",
            purple: "purple",
            pink: "pink",
            black: "black",
            reds: "red",
            yellow: "yellow",
            breen: "#cccccc",
            bluish: "#ccccff",
            lilac: "#339999",
        },
        encrypt: {     //开启加密
            config: {
                // 这会加密整个 markdown 目录，并且两个密码都是可用的
                // "/": ["1234", "5678"],
                "/arithmetic/kuaisu.html": "1234",
            },
            // global: true,
            // admin: ['1234', '5678']
        },
        navbar: [
            {
                text: '首页',
                icon: "home",
                link: '/'
            },
            {
                text: 'WEB前端',
                icon: "html",
                link: '/web/'
            },
            {
                text: 'Nodejs',
                icon: "nodeJS",
                link: '/nodejs/'
            },
            {
                text: 'Python',
                icon: "python",
                link: '/python/'
            },

            {
                text: 'Linux',
                icon: "linux",
                link: '/linux/'
            },
            {
                text: '数据库',
                icon: "mysql",
                link: '/sql/'
            },
            {
                text: '生态',
                icon: "creative",
                children: [
                    {
                        text: '必备技能',
                        link: '/skill/',
                        icon: "tool",
                        activeMatch: '^/skill/',
                    },
                    {
                        text: '常见算法',
                        icon: "exercise",
                        link: '/arithmetic/',
                        activeMatch: '^/arithmetic/',
                    },
                    {
                        text: '面试专区',
                        icon: "emoji",
                        link: '/interview/',
                        activeMatch: '^/interview/',
                    },
                ],
            },
            {
                text: '社区',
                icon: "blog",
                link: '/blog/'
            },
            {
                text: '关于我们',
                icon: "people",
                link: '/resume/'
            },
            {
                text: '面试（暂时存在）',
                icon: "creative",
                children: [
                    {
                        text: '个人简历',
                        link: '/webresume/',
                        icon: "tool",
                        activeMatch: '^/webresume/',
                    },
                    {
                        text: '简历附件',
                        icon: "exercise",
                        link: '/webresume/web/',
                        activeMatch: '^/webresume/web/',
                    },
                ]
            }
        ],
        // sidebar: "structure"
        sidebar: {
            "/web/": "structure",
            "/nodejs/": "structure",
            "/python/": "structure",
            "/linux/": "structure",
            "/sql/": "structure",
            "/skill/": "structure",
            "/arithmetic/": "structure",
            "/interview/": "structure",
            "/": [
                "",
                "blog",
                "qianyan",
                "daohang",
                "resume",
            ],
        }
        // sidebar: {
        //     "/": [
        //         {
        //             text: '前言',
        //             icon: "notice",
        //             link: "/qianyan/",
        //         },
        //         {
        //             text: '导航目录',
        //             icon: "sitemap",
        //             link: "/daohang/",
        //         },
        //         {
        //             text: 'WEB前端',
        //             collapsible: true,
        //             icon: "html",
        //             children: [
        //                 // "/web/README.md",
        //                 {
        //                     text: 'HTML模块',
        //                     collapsible: true,
        //                     icon: "html",
        //                     children: [
        //                         // "/web/html/README.md",
        //                         "/web/html/html01",
        //                         "/web/html/html02",
        //                         "/web/html/html03",
        //                         "/web/html/html04",
        //                         "/web/html/html05",
        //                     ]
        //                 },
        //                 {
        //                     text: 'CSS模块',
        //                     collapsible: true,
        //                     icon: "css",
        //                     children: [
        //                         "/web/css/",
        //                         "/web/css/css01",
        //                         "/web/css/css02",
        //                         "/web/css/css03",
        //                         "/web/css/css04",
        //                         "/web/css/css05",
        //                         "/web/css/css06",
        //                     ]
        //                 },
        //                 {
        //                     text: 'LESS和SCSS预处理器',
        //                     collapsible: true,
        //                     icon: "vssue",
        //                     children: [
        //                         "/web/less_scss/",
        //                         "/web/less_scss/less",
        //                         "/web/less_scss/scss",
        //                     ]
        //                 },
        //                 {
        //                     text: 'JavaScript编程模块 ',
        //                     collapsible: true,
        //                     icon: "javascript",
        //                     children: [
        //                         "/web/javascript/",
        //                         "/web/javascript/javascript01",
        //                         "/web/javascript/javascript02",
        //                         "/web/javascript/javascript03",
        //                         "/web/javascript/javascript04",
        //                         "/web/javascript/javascript05",
        //                         "/web/javascript/javascript06",
        //                         "/web/javascript/javascript07",
        //                         "/web/javascript/javascript08",
        //                         "/web/javascript/javascript09",
        //                         "/web/javascript/javascript10",
        //                         "/web/javascript/javascript11",
        //                     ]
        //                 },
        //                 {
        //                     text: 'ECMAScript新特性模块',
        //                     collapsible: true,
        //                     icon: "es6",
        //                     children: [
        //                         "/web/ecmascript/",
        //                         "/web/ecmascript/ecmascript01",
        //                         "/web/ecmascript/ecmascript02",
        //                         "/web/ecmascript/ecmascript03",
        //                         "/web/ecmascript/ecmascript04",
        //                         "/web/ecmascript/ecmascript05",
        //                         "/web/ecmascript/ecmascript06",
        //                         "/web/ecmascript/ecmascript07",
        //                         "/web/ecmascript/ecmascript08",
        //                         "/web/ecmascript/ecmascript09",
        //                         "/web/ecmascript/ecmascript10",
        //                         "/web/ecmascript/ecmascript11",
        //                         "/web/ecmascript/ecmascript12",
        //                         "/web/ecmascript/ecmascript13",
        //                         "/web/ecmascript/ecmascript14",
        //                         "/web/ecmascript/ecmascript15",
        //                     ]
        //                 },
        //                 {
        //                     text: 'TypeScript编程模块',
        //                     collapsible: true,
        //                     icon: "typescript",
        //                     children: [
        //                         "/web/typescript/",
        //                         "/web/typescript/typescript01",
        //                         "/web/typescript/typescript02",
        //                         "/web/typescript/typescript03",
        //                         "/web/typescript/typescript04",
        //                         "/web/typescript/typescript05",
        //                         "/web/typescript/typescript06",
        //                         "/web/typescript/typescript07",
        //                         "/web/typescript/typescript08",
        //                         "/web/typescript/typescript09",
        //                         "/web/typescript/typescript10",
        //                         "/web/typescript/typescript11",
        //                         "/web/typescript/typescript12",
        //                         "/web/typescript/typescript13",
        //                     ]
        //                 },
        //                 {
        //                     text: 'Vue3框架',
        //                     collapsible: true,
        //                     icon: "vue",
        //                     children: [
        //                         "/web/vue/",
        //                         "/web/vue/vue01",
        //                         "/web/vue/vue02",
        //                         "/web/vue/vue03",
        //                         "/web/vue/vue04",
        //                         "/web/vue/vue05",
        //                         "/web/vue/vue06",
        //                         "/web/vue/vue07",
        //                         "/web/vue/vue08",
        //                     ]
        //                 },
        //                 {
        //                     text: 'React框架',
        //                     collapsible: true,
        //                     icon: "react",
        //                     children: [
        //                         "/web/react/",
        //                         "/web/react/react01",
        //                         "/web/react/react02",
        //                         "/web/react/react03",
        //                         "/web/react/react04",
        //                         "/web/react/react05",
        //                         "/web/react/react06",
        //                         "/web/react/react07",
        //                         "/web/react/react08",
        //                     ]
        //                 },
        //                 {
        //                     text: 'Nuxt.js框架',
        //                     collapsible: true,
        //                     icon: "material",
        //                     children: [
        //                         "/web/nuxt/",
        //                         "/web/nuxt/nuxt01",
        //                         "/web/nuxt/nuxt02",
        //                         "/web/nuxt/nuxt03",
        //                         "/web/nuxt/nuxt04",
        //                         "/web/nuxt/nuxt05",
        //                         "/web/nuxt/nuxt06",
        //                         "/web/nuxt/nuxt07",
        //                         "/web/nuxt/nuxt08",
        //                     ]
        //                 },
        //                 {
        //                     text: 'Next.js框架',
        //                     collapsible: true,
        //                     icon: "read",
        //                     children: [
        //                         "/web/next/",
        //                         "/web/next/next01",
        //                         "/web/next/next02",
        //                         "/web/next/next03",
        //                         "/web/next/next04",
        //                         "/web/next/next05",
        //                         "/web/next/next06",
        //                         "/web/next/next07",
        //                         "/web/next/next08",
        //                     ]
        //                 },
        //                 {
        //                     text: '微信小程序',
        //                     collapsible: true,
        //                     icon: "mini-app",
        //                     children: [
        //                         "/web/small/",
        //                         "/web/small/small01",
        //                         "/web/small/small02",
        //                         "/web/small/small03",
        //                         "/web/small/small04",
        //                         "/web/small/small05",
        //                         "/web/small/small06",
        //                         "/web/small/small07",
        //                         "/web/small/small08",
        //                         "/web/small/small09",
        //                         "/web/small/small10",
        //                     ]
        //                 },
        //                 {
        //                     text: 'Uniapp框架',
        //                     icon: "app",
        //                     collapsible: true,
        //                     children: [
        //                         "/web/uniapp/",
        //                         "/web/uniapp/uniapp01",
        //                         "/web/uniapp/uniapp02",
        //                         "/web/uniapp/uniapp03",
        //                         "/web/uniapp/uniapp04",
        //                         "/web/uniapp/uniapp05",
        //                         "/web/uniapp/uniapp06",
        //                         "/web/uniapp/uniapp07",
        //                         "/web/uniapp/uniapp08",
        //                         "/web/uniapp/uniapp09",
        //                         "/web/uniapp/uniapp10",
        //                     ]
        //                 },
        //                 {
        //                     text: 'Electron',
        //                     icon: "window",
        //                     collapsible: true,
        //                     children: [
        //                         "/web/electron/",
        //                         "/web/electron/electron01",
        //                         "/web/electron/electron02",
        //                         "/web/electron/electron03",
        //                         "/web/electron/electron04",
        //                     ]
        //                 },
        //                 {
        //                     text: 'WebPack',
        //                     icon: "view",
        //                     link: '/web/webpack'
        //                 },
        //                 {
        //                     text: 'Vite',
        //                     icon: "valine",
        //                     link: '/web/vite',
        //                 },
        //             ],
        //         },
        //         {
        //             text: 'Python编程模块',
        //             collapsible: true,
        //             icon: "python",
        //             children: [
        //                 "/python/",
        //                 {
        //                     text: 'Python基础',
        //                     collapsible: true,
        //                     icon: "python",
        //                     children: [
        //                         "/python/pythonjc/",
        //                         "/python/pythonjc/pythonjc01",
        //                         "/python/pythonjc/pythonjc02",
        //                         "/python/pythonjc/pythonjc03",
        //                         "/python/pythonjc/pythonjc04",
        //                         "/python/pythonjc/pythonjc05",
        //                     ]
        //                 },
        //                 {
        //                     text: 'Python进阶',
        //                     collapsible: true,
        //                     icon: "python",
        //                     children: [
        //                         "/python/pythonjj/",
        //                         "/python/pythonjj/pythonjj01",
        //                         "/python/pythonjj/pythonjj02",
        //                         "/python/pythonjj/pythonjj03",
        //                         "/python/pythonjj/pythonjj04",
        //                         "/python/pythonjj/pythonjj05",
        //                     ]
        //                 },
        //                 {
        //                     text: '网络编程与并发',
        //                     collapsible: true,
        //                     icon: "network",
        //                     children: [
        //                         "/python/network/",
        //                         "/python/network/network01",
        //                         "/python/network/network02",
        //                         "/python/network/network03",
        //                         "/python/network/network04",
        //                         "/python/network/network05",
        //                     ]
        //                 },
        //                 {
        //                     text: 'Flask框架',
        //                     collapsible: true,
        //                     icon: "flower",
        //                     children: [
        //                         "/python/flask/",
        //                         "/python/flask/flask01",
        //                         "/python/flask/flask02",
        //                         "/python/flask/flask03",
        //                         "/python/flask/flask04",
        //                         "/python/flask/flask05",
        //                     ]
        //                 },
        //                 {
        //                     text: 'Django框架',
        //                     collapsible: true,
        //                     icon: "debug",
        //                     children: [
        //                         "/python/django/",
        //                         "/python/django/django01",
        //                         "/python/django/django02",
        //                         "/python/django/django03",
        //                         "/python/django/django04",
        //                         "/python/django/django05",
        //                     ]
        //                 },
        //                 {
        //                     text: '办公自动化',
        //                     collapsible: true,
        //                     icon: "form",
        //                     children: [
        //                         "/python/automation/",
        //                         "/python/automation/automation01",
        //                         "/python/automation/automation02",
        //                         "/python/automation/automation03",
        //                         "/python/automation/automation04",
        //                         "/python/automation/automation05",
        //                     ]
        //                 },
        //                 {
        //                     text: '爬虫开发',
        //                     collapsible: true,
        //                     icon: "semantic",
        //                     children: [
        //                         "/python/reptile/",
        //                         "/python/reptile/reptile01",
        //                         "/python/reptile/reptile02",
        //                         "/python/reptile/reptile03",
        //                         "/python/reptile/reptile04",
        //                         "/python/reptile/reptile05",
        //                     ]
        //                 },
        //                 {
        //                     text: '桌面应用开发',
        //                     collapsible: true,
        //                     icon: "windows",
        //                     children: [
        //                         "/python/desk/",
        //                         "/python/desk/desk01",
        //                         "/python/desk/desk02",
        //                         "/python/desk/desk03",
        //                         "/python/desk/desk04",
        //                         "/python/desk/desk05",
        //                     ]
        //                 },
        //             ],
        //         },

        //         {
        //             text: 'NodeJs编程模块',
        //             icon: "nodeJS",
        //             collapsible: true,
        //             children: [
        //                 {
        //                     text: 'Nodejs基础',
        //                     collapsible: true,
        //                     icon: "nodeJS",
        //                     children: [
        //                         // "/nodejs/nodejsjc/",
        //                         "/nodejs/nodejsjc/nodejsjc01",
        //                         "/nodejs/nodejsjc/nodejsjc02",
        //                         "/nodejs/nodejsjc/nodejsjc03",
        //                         "/nodejs/nodejsjc/nodejsjc04",
        //                     ]
        //                 },
        //                 {
        //                     text: 'Express框架',
        //                     collapsible: true,
        //                     icon: "exercise",
        //                     children: [
        //                         // "/nodejs/express/",
        //                         "/nodejs/express/express01",
        //                         "/nodejs/express/express02",
        //                         "/nodejs/express/express03",
        //                         "/nodejs/express/express04",
        //                     ]
        //                 },
        //                 {
        //                     text: 'NestJS框架',
        //                     collapsible: true,
        //                     icon: "vssue",
        //                     children: [
        //                         // "/nodejs/nestjs/",
        //                         "/nodejs/nestjs/nestjs01",
        //                         "/nodejs/nestjs/nestjs02",
        //                         "/nodejs/nestjs/nestjs03",
        //                         "/nodejs/nestjs/nestjs04",
        //                     ]
        //                 },
        //             ],
        //         },
        //         {
        //             text: 'Linux操作',
        //             icon: "linux",
        //             collapsible: true,
        //             children: [
        //                 "/linux/",
        //                 {
        //                     text: 'Ubuntu操作系统',
        //                     collapsible: true,
        //                     icon: "ubuntu",
        //                     children: [
        //                         "/linux/ubuntu/",
        //                         "/linux/ubuntu/ubuntu01",
        //                         "/linux/ubuntu/ubuntu02",
        //                         "/linux/ubuntu/ubuntu03",
        //                         "/linux/ubuntu/ubuntu04",
        //                     ]
        //                 },
        //                 {
        //                     text: 'Nginx服务器',
        //                     collapsible: true,
        //                     icon: "nginx",
        //                     children: [
        //                         "/linux/nginx/",
        //                         "/linux/nginx/nginx01",
        //                         "/linux/nginx/nginx02",
        //                         "/linux/nginx/nginx03",
        //                         "/linux/nginx/nginx04",
        //                     ]
        //                 },
        //                 {
        //                     text: 'Docker镜像',
        //                     collapsible: true,
        //                     icon: "diagram",
        //                     children: [
        //                         "/linux/docker/",
        //                         "/linux/docker/docker01",
        //                         "/linux/docker/docker02",
        //                         "/linux/docker/docker03",
        //                         "/linux/docker/docker04",
        //                     ]
        //                 },

        //             ],
        //         },
        //         {
        //             text: '数据库编程',
        //             collapsible: true,
        //             icon: "mysql",
        //             children: [
        //                 "/sql/",
        //                 {
        //                     text: 'MySql数据库',
        //                     collapsible: true,
        //                     icon: "cache",
        //                     children: [
        //                         "/sql/mysql/",
        //                         "/sql/mysql/mysql01",
        //                         "/sql/mysql/mysql02",
        //                         "/sql/mysql/mysql03",
        //                         "/sql/mysql/mysql04",
        //                     ]
        //                 },
        //                 {
        //                     text: 'Redis数据库',
        //                     collapsible: true,
        //                     icon: "workingDirectory",
        //                     children: [
        //                         "/sql/redis/",
        //                         "/sql/redis/redis01",
        //                         "/sql/redis/redis02",
        //                         "/sql/redis/redis03",
        //                         "/sql/redis/redis04",
        //                     ]
        //                 },
        //                 {
        //                     text: 'MongoDb数据库',
        //                     collapsible: true,
        //                     icon: "storage",
        //                     children: [
        //                         "/sql/mongodb/",
        //                         "/sql/mongodb/mongodb01",
        //                         "/sql/mongodb/mongodb02",
        //                         "/sql/mongodb/mongodb03",
        //                         "/sql/mongodb/mongodb04",
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             text: '必备技能',
        //             collapsible: true,
        //             icon: "tool",
        //             children: [
        //                 "/skill/",
        //                 "/skill/npm",
        //                 "/skill/esc",
        //                 "/skill/domain",
        //                 "/skill/animate",
        //                 "/skill/echarts",
        //                 "/skill/baidumap",
        //                 "/skill/gaodemap",
        //                 "/skill/tengxunmap",
        //                 "/skill/wangeditor",
        //                 "/skill/mdedeitorv3",
        //             ],
        //         },
        //         {
        //             text: '常见算法',
        //             collapsible: true,
        //             icon: "exercise",
        //             children: [
        //                 "/arithmetic/",
        //                 "/arithmetic/digui",
        //                 "/arithmetic/maopao",
        //                 "/arithmetic/kuaisu",
        //             ],
        //         },
        //         {
        //             text: '面试专区',
        //             collapsible: true,
        //             icon: "exercise",
        //             children: [
        //                 "/interview/",
        //             ],
        //         },
        //     ]
        // }
    })
});