---
title: Node.js
date: 2020-10-01
tags: tag1
categories: 前端相关
---

* Node.js是什么？
JS是个基于浏览器的解释型脚本语言,通俗的来说就是：JS只能在浏览器里运行，因为浏览器里有个JS引擎负责解释运行JS代码,当然浏览器里还有负责对html,css负责解析绘制的引擎。而node.js是一个基于Chrome浏览器 V8（js）引擎的运行环境，能够使得javascript脱离浏览器运行。

* Node.js能做什么？
在前端开发里一般是用来执行编译CSS预编译语言、预编译、压缩、混淆JS、压缩图片、reload、deploy等工程化任务，常用的平台有Grunt和Gulp，现在主流就是用来跑npm 

* npm是什么？
npm,Node Package Manager，基于Node.js的包管理器

* Node.js和npm的版本对应关系
[Node下载](https://nodejs.org/zh-cn/download/releases)

# 使用版本管理器来安装 Nodejs 和 NPM
因为 Nodejs 和 NPM 的各版本间可能存在差异较大，所以推荐做法是使用版本管理器来安装 Nodejs 和 NPM，方便以后在开发过程中各版本间的切换。
[npm 中文文档][]中列明了各操作系统推荐使用的版本管理器。windows 下推荐使用 [nvm-windows][]进行安装。
1. nvm-windows 安装

    到Github [nvm-windows 下载](https://github.com/coreybutler/nvm-windows/releases)页，提供了 setup 和 noinstall 两种安装方式。下载最新的 setup 安装包，安装很简单，过程中，360会有警告，直接放行即可。
    如果使用 noinstall 的方式安装，参考[nodejs 在 windows 下的安装配置(使用NVM的方式)][]。<br>
    配置环境变量，例如下：
    * NVM_HOME：D:\Program\nvm
    * NVM_SYMLINK：D:\Program\nodejs
    > <span style="color:red;">**注意：安装路径不要带空格，建议是纯字母的路径**</span>

1. nvm-windows 命令

    |命令|说明|
    |---|---|
    |nvm|显示 nvm 的所有命令说明|
    |nvm v|查看当前 nvm 版本，如需更新 nvm 的版本，直接下载最新的安装包，安装覆盖当前安装的路径即可，已安装的 Nodejs 不受影响|
    |nvm install latest|安装最新版本的 Nodejs|
    |nvm install &lt;version&gt;|安装指定版本的 Nodejs，如：nvm install 8.10.0，即安装 Nodejs 8.10.0 版本|
    |nvm list|显示当前已经安装的 Nodejs 版本|
    |nvm use &lt;version&gt;|使用指定版本的 Nodejs，该命令可以方便的切换到不同的版本，如：nvm use 8.10.0，即使用 Nodejs 8.10.0 版本|
    |nvm uninstall &lt;version&gt;|卸载指定版本的 Nodejs，如：nvm uninstall 9.7.1，即卸载 Nodejs 9.7.1 版本|
    > 推荐安装指定版本：偶数版本为稳定版本。从 [Node.js 官网][] 获取最新的版本号。
    > * LTS：为上一个稳定版本；
    > * Current：为当前稳定版本；

# 淘宝镜像
## 方式一
```shell script
npm install -g cnpm --registry=https://registry.npmmirror.com
```
或者直接用以下命令进行安装
```shell script
npm install --registry=https://registry.npmmirror.com
```
使用
```
cnpm install
```
## 方式二
更换成淘宝的源
```
npm config set registry https://registry.npmmirror.com
```
配置后可通过下面方式来验证是否成功
```
npm config get registry
```
使用
```
npm install
```


# 依赖更新

1. 安装全局插件 npm-check-updates
    ```shell script
    cnpm install -g npm-check-updates
    ```
2. 在 package.json 执行 ncu 命令查看可更新依赖
3. 执行 ncu -u 更新 package.json 中的版本
4. 执行 cnpm install 更新包

# 更新全局依赖
```shell script
cnpm update -g
```

# pm2
1. 介绍

    pm2是一个进程管理工具,可以用它来管理你的node进程，并查看node进程的状态，当然也支持性能监控，进程守护，负载均衡等功能

1. 安装

    pm2 需要全局安装
    ```shell script
    npm install -g pm2
    ```

1. 命令

    进入项目根目录执行命令
    
    | 描述 | 命令 |
    | --- | --- |
    | 启动进程/应用 | pm2 start bin/www 或 pm2 start app.js |
    | 重命名进程/应用 | pm2 start app.js --name wb123 | 
    | 添加进程/应用 | watch pm2 start bin/www --watch |
    | 结束进程/应用 | pm2 stop www |
    | 结束所有进程/应用 | pm2 stop all |
    | 删除进程/应用 | pm2 delete www |
    | 删除所有进程/应用 | pm2 delete all |
    | 列出所有进程/应用 | pm2 list |
    | 查看某个进程/应用具体情况 | pm2 describe www |
    | 查看进程/应用的资源消耗情况 | pm2 monit |
    | 查看pm2的日志 | pm2 logs |
    | 若要查看某个进程/应用的日志,使用 | pm2 logs www |
    | 重新启动进程/应用 | pm2 restart www |
    | 重新启动所有进程/应用 | pm2 restart all |

# 问题
## cnpm.ps1,因为在此系统上禁止运行脚本
解决方法:
1. 以管理员身份运行**PowerShell**
2. 输入**set-ExecutionPolicy RemoteSigned**
3. 输入**A**回车

问题解决

# 查看所有全局安装的包
```shell script
npm list --depth=0 -global
```

# nrm
开发的npm registry 管理工具 nrm, 能够查看和切换当前使用的registry。
## 安装
```
npm install -g nrm
```

# 参考
* Node.js 中文网：http://nodejs.cn/
* 一键更新package.json中所有模块为最新版本：https://www.jianshu.com/p/ce9a46ae3a03
* PM2 实用入门指南：https://imweb.io/topic/57c8cbb27f226f687b365636
* PM2 官网：https://pm2.keymetrics.io/docs/usage/quick-start/
* nrm是什么？以及nrm的安装与命令：https://blog.csdn.net/liangtaox8/article/details/100022107

[Node.js 官网]: https://nodejs.org/en/download/
[npm 中文文档]: https://www.npmjs.com.cn/all/
[nvm-windows]: https://github.com/coreybutler/nvm-windows
[nvm-windows 下载]: https://github.com/coreybutler/nvm-windows/releases
[nodejs 在 windows 下的安装配置(使用NVM的方式)]: http://blog.csdn.net/tyro_java/article/details/51232458





# 乱
## Node.js
查看Node.js的安装版本
```
node -v
```

## npm相关

查看npm的安装版本
```
npm -v 
```

更新到最新版npm
```
npm install npm@last -g
```

## npm的模块相关

### 初始化
```
npm init // 会初始化一个简单的package.json，执行完命令行会依次询问name, version, description 等字段  
npm init -y|--yes  // 作用同上，不过不会询问那些字段
```

### 安装模块
安装package.json的所有模块
```
npm install

```
在当前项目安装vuepress模块
```
npm install vuepress
```

安装指定版本的包
```
npm install vuepress@1.9.7
```

安装最新版本的包
```
npm install vuepress@latest
```

全局安装模块
```
npm install -g vuepress 
```

```
npm install vuepress --save
npm install vuepress --save-dev
```

### 更新模块
更新模块到最新版本
```
update vuepress@latest
```

检查当前文件夹下的包版本，会列出Package(包名)、Current(当前版本)、Wanted(建议的版本)、Latest(最新版本)、Location(所属的项目名)
```
npm outdated
```

更新模块到指定版本
```
方法1：npm update vuepress@1.9.7
方法2：先在package.json中修改vuepress的版本号，再运行npm update vuepress
```

更新全局安装的包
```
npm update -g vuepress  
```

更新全局安装的所有包
```
npm update -g 
```

### 查看模块

查看全局安装的模块在哪个文件夹下
```
npm config edit  
后会自动打开.npmrc文件，里面的prefix=安装目录
```

查看当前项目安装了哪些模块
```
npm list|ls|ll --depth=0 // package.json文件夹下运行
```

查看全局安装了哪些模块
```
npm list|ls|ll --depth=0 -g
```

查看模块的安装版本
```
npm info vuepress version
```

### 删除模块
删除模块
```
npm uninstall vuepress 
```

删除全局安装的模块
```
npm uninstall -g vuepress 
```

从package.json文件中删除依赖
```
npm uninstall --save vuepress  
```

### dependencies和devDependencies区别
都是package.json里面的节点
--save-dev：将保存配置信息到package.json的devDependencies节点中。
dependencies：运行时的依赖，发布后使用，生产环境下需要用的模块（生产）。
devDependencies：开发时的依赖，开发时测试环境下使用，发布时用不到它（测试）。


### --save和--save-dev和-g的区别
--save 或 -S：将模块写入dependencies节点，运行npm install时会将模块下载到当前node_modules目录下
--save-dev 或 -D：将模块写入devDependencies节点，不会写入dependencies节点，运行npm install时会将模块下载到当前node_modules目录下
-g：安装模块到全局的node_modules目录下，不会修改package.json文件，所以运行npm install时不会将模块下载到当前node_modules目录下


### npm audit fix 
检测项目依赖中的漏洞并自动安装需要更新的有漏洞的依赖，而不必再自己进行跟踪和修复

### 全局安装的位置
`C:\Users\VAQ\AppData\Roaming\npm\node_modules\cnpm\node_modules`