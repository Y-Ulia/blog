---
title: 使用WebIDE自动化构建Hexo博客
date: 2017-03-16 13:30:49
tags: 
    - WebIDE
    - Hexo
---
# Ulia的Hexo博客

##### 第一步：创建coding新项目(blog)，
>打开`WebIDE`，选择blog新项目，配置CPU、磁盘空间、内存(为避免开发过程中依赖包的缘故，尽量选择max配置)

##### 第二步：查看coding运行环境(可选)
>打开右上侧`运行环境`列表(点击`？`问号，可查看什么是运行环境)，选择`default`默认环境(可保存blog项目运行环境)

<!-- more -->

##### 第三步：配置coding开发环境
>打开左下侧`终端`git命令行界面，输入`node -v`查看node版本(一般不是最新版本且不含npm，使用nvm来管理node版本)
    
1.安装 [nvm](https://github.com/creationix/nvm)

>安装v0.33.1版本，更改版本号下载对应版本
``` bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

>激活nvm
``` bash
source ~/.nvm/nvm.sh
```

2.安装 [node](https://github.com/nodejs/node)

>默认安装最新的node版本
``` bash
nvm install node
```

>选择需要安装的版本 (如最新6.10.0稳定版本)
``` bash
nvm install 6.10.0
```

>切换需要的版本 (如最新6.10.0稳定版本)
``` bash
nvm use node 6.10.0
```

3.安装 [hexo](https://github.com/hexojs/hexo/)

>安装hexo脚手架
``` bash
npm install hexo-cli -g
```

>初始化hexo项目并命名Ulia
``` bash
hexo init Ulia
```

##### 第四步：在线测试hexo博客
>切换至Ulia目录下
``` bash
cd Ulia
```

>安装npm依赖包(不含`node_modules`文件时)
``` bash
npm install
```

>测试hexo博客文件
``` bash
hexo server
```

>打开右上侧访问链接，修改成对应的端口号(8080 --> 4000)，点击生成链接，点击其链接进行查看。

##### 第五步：更换 [hexo主题](https://hexo.io/themes/)
>1.[安装Next主题](http://theme-next.iissnan.com/getting-started.html#install-next-theme)
``` bash
git clone https://github.com/iissnan/hexo-theme-next themes/next
```

>2.[主题配置](http://theme-next.iissnan.com/getting-started.html#theme-settings)[`_config.yml`](http://theme-next.iissnan.com/theme-settings.html)

>[`设置 RSS`](http://theme-next.iissnan.com/theme-settings.html#rss)
>[`添加「标签」页面`](http://theme-next.iissnan.com/theme-settings.html#tags-page)
>[`添加「分类」页面`](http://theme-next.iissnan.com/theme-settings.html#categories-page)
>[`设置字体`](http://theme-next.iissnan.com/theme-settings.html#fonts-customization)
>[`设置代码高亮主题`](http://theme-next.iissnan.com/theme-settings.html#syntax-highlight-scheme)
>[`侧边栏社交链接`](http://theme-next.iissnan.com/theme-settings.html#author-sites)
>[`开启打赏功能`](http://theme-next.iissnan.com/theme-settings.html#reward)
>[`友情链接`](http://theme-next.iissnan.com/theme-settings.html#blogroll)
>[`多说评论显示 UA`](http://theme-next.iissnan.com/theme-settings.html#duoshuo-ua)
>[`腾讯公益404页面`](http://theme-next.iissnan.com/theme-settings.html#volunteer-404)
>[`站点建立时间`](http://theme-next.iissnan.com/theme-settings.html#site-since)
>[`订阅微信公众号`](http://theme-next.iissnan.com/theme-settings.html#wechat-subscriber)

##### 第六步：修改博客配置文件`_config.yml`

>1.常见配置
    
|  对应项  |    修改属性   |  原属性值  |  新属性值            |   备注   |
|  ------- |   ---------   |  --------  |  --------            |:--------:|
| 出口路径 | `public_dir:` | `public`   | `../`                |  `必选`  |
| 根 目 录 | `root:`       | `/`        | `/blog/`             |  `必选`  |
| 站点主题 | `theme:`      | `landscape`| `next`               |  `按需`  |
| 站点语言 | `language:`   | ` `        | `zh-Hans`            |  `按需`  |
| 站点标题 | `title:`      | ` `        | `Ulia博客`           |  `按需`  |
| 站点作者 | `author:`     | ` `        | `Ulia`               |  `按需`  |
| 站点描述 | `description:`| ` `        | `记录当下，点亮未来` |  `按需`  |
| 其他     | `...`         | `...`      | `...`                |  `--- `  |

>2.集成第三方服务

>[`评论系统`](http://theme-next.iissnan.com/third-party-services.html#comment-system)
>[`数据统计与分析`](http://theme-next.iissnan.com/third-party-services.html#analytics-system)
>[`内容分享服务`](http://theme-next.iissnan.com/third-party-services.html#share-system)
>[`搜索服务`](http://theme-next.iissnan.com/third-party-services.html#search-system)
>[`其他服务`](http://theme-next.iissnan.com/third-party-services.html#others)

>3.(可选)根据需要修改.gitignore需要忽略的文件(这里去掉之前的默认出口文件) 

>`public/`

##### 第七步：构建hexo博客文件

>1.构建hexo博客文件
``` bash
hexo generate
```

>2.提交至当前运行环境git仓库，点击左上方`版本`按钮，点击`提交`按钮，填写提交说明(如：构建hexo博客文件)，点击`提交`(可能需要点时间)。

>3.提交至远程coding.net项目，点击左上方`版本`按钮，点击`推送`按钮。

##### 第八步：开启Page服务
>1.部署来源，点击`Page服务`，选择`master分支`，点击`保存`。

>2.添加自定义[域名]()(需购买)

>3.设置强制 HTTPS 访问

##### 第九步：[博客写作](https://hexo.io/zh-cn/docs/writing.html)

>1.切换至Ulia目录下
``` bash
hexo new post <name>
```
>2.构建hexo博客文件
``` bash
hexo g
```




    注：有任何疑问，欢迎联系我 &( ^___^ )&
    
    
    
