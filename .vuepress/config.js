module.exports = {
  "base": "/",
  "title": "VAQ的博客",
  "description": "平庸，就是失去追求卓越信念的那个瞬间！",
  "dest": "dist", // 博客部署时输出的文件夹
  "host": "localhost",
  "port": "8888",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?74ca4e8f49a2fce33bd8375637e32b07";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1"
      }
    ],
    [
      "meta",
      {
        "name": "baidu-site-verification",
        "content": "codeva-TjqXgaYxvv"
      }
    ],
    [
      "meta",
      {
        "name": "referrer",
        "content": "no-referrer"
      }
    ],
    [
      "meta",
      {
        "name": "keys",
        "content": "ChatGPT,GPT Plus,GPT4,国外虚拟卡"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [{
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "ChatGPT4升级方法",
        "icon": "",
        "link": "/blogs/chatgpt/upgrade-chatgptplus.html"

      },
      {
        "text": "Onlyfans订阅指南",
        "icon": "",
        "link": "/blogs/chatgpt/onlyfans.html"

      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [{
      //     "text": "vuepress-reco",
      //     "link": "/docs/theme-reco/"
      //   }]
      // },
      {
        "text": "联系我",
        "link": "/blogs/contact/",
        "icon": "reco-message"
      }
    ],
    "sidebar": {
      // "/": [
      //   "",
      //   "theme",
      //   "plugin",
      //   "api"
      // ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 4, // 在导航栏所占的位置
        "text": "分类"
      },
      "tag": {
        "location": 5,
        "text": "标签"
      }
    },
    "friendLink": [{
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "logo": "reco_luan.png",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "Java知识体系",
        "desc": "非常全面的Java知识网站",
        "logo": "/pdai.gif",
        "link": "https://www.pdai.tech/"
      },
      {
        "title": "被删的前端游乐场",
        "desc": "一个极度热爱前端的开发者",
        "logo": "/godbasin.jpg",
        "link": "http://www.godbasin.com"
      },
      {
        "title": "程序羊",
        "desc": "良心Up主，行业领头羊",
        "logo": "/codeSheep.jpg",
        "link": "https://www.r2coding.com"
      },
      {
        "title": "ChatGPT中文导航站",
        "desc": "ChatGPT 账号、订阅教程、代充",
        "logo": "https://chatgptzhinan.com/wp-content/uploads/2023/12/favicon.ico",
        "link": "http://chatgptzhinan.com"
      },
      {
        "title": "ChatGPT中文站",
        "desc": "提供ChatGPT账号、GPT4代充服务、Sora最新情报、海外APP使用教程",
        "logo": "https://groot-1253585616.cos.ap-shanghai.myqcloud.com/md/avatar.png",
        "link": "https://cngptplus.com"
      },
      {
        "title": "Ai导航中文网",
        "desc": "Ai变现 ChatGPT、Sora订阅及使用教程，代充代注册",
        "logo": "https://sorachatgpt4.com/img/avatar.png",
        "link": "https://sorachatgpt4.com"
      },
      {
        "title": "ChatGPT精选站",
        "desc": "ChatGPT 精选信息: 分享 OpenAI 各类产品的使用方法，第一资讯，精选信息。包括 ChatGPT、Sora 等",
        "logo": "https://chatgpt-jx.com/img/avatar.svg",
        "link": "https://chatgpt-jx.com"
      },
      {
        "title": "ChatGPT指南",
        "desc": "专注分享国内ChatGPT、Sora最新资讯/使用方法",
        "logo": "https://muyiio-1300292673.cos.ap-chongqing.myqcloud.com/favicon.ico",
        "link": "https://chatgptbom.com"
      },
      {
        "title": "ChatGPT-Share",
        "desc": "这里提供技术分享及一些教程，比如ChatGPT升级，如何充值GPT4，也提供一些云服务器（腾讯云服务器、阿里云服务器）的优惠活动",
        "logo": "https://leedu.ac.cn/static/favicon-32x32.png",
        "link": "https://leedu.ac.cn"
      },
      {
        "title": "ChatGPT甜品铺",
        "desc": "分享ChatGPT4.0升级方法、GPT代充、OnlyFans订阅等干货教程😀",
        "logo": "https://whalecoding.com/img/avatar.jpg",
        "link": "https://whalecoding.com"
      },
      {
        "title": "ChatGPT指南、最新咨询",
        "desc": "ChatGPT 注册、升级教程、代充",
        "logo": "https://anyubenyu.oss-cn-shanghai.aliyuncs.com/img202402272321577.jpg",
        "link": "https://anyubenyu.com"
      },
      {
        "title": "GPT教程",
        "desc": "ChatGPT 账号、订阅教程、代充",
        "logo": "https://duanduanhh.oss-cn-hangzhou.aliyuncs.com/gpt/icon.png",
        "link": "https://gpt-boot.com"
      },
      {
        "title": "OpenAI-ChatGPT订阅教程 ",
        "desc": "ChatGPT、OnlyFans、Sora订阅使用教程",
        "logo": "https://gpt4-1317472746.cos.ap-shanghai.myqcloud.com/OpenAI/gpt/202402271938538.jpg",
        "link": "https://actoyouai.com"
      },
      {
        "title": "扑扑特桔",
        "desc": "ChatGPT4.0升级、OnlyFans订阅指南、AI最新资讯",
        "logo": "https://puputeju-tc.oss-cn-beijing.aliyuncs.com/pptj.png",
        "link": "https://puputeju.com"
      },
      {
        "title": "Kaiho小站",
        "desc": "",
        "logo": "https://kaiho.cc/wp-content/uploads/2024/02/logo.png",
        "link": "https://kaiho.cc"
      },
      
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    // "sidebar": "auto", // 自动形成侧边导航
    "subSidebar": 'auto', // 自动形成侧边导航
    "lastUpdated": "Last Updated",
    "author": "VAQ",
    "authorAvatar": "/avatar.png", // 首页右侧信息栏头像
    "record": "豫ICP备2023021688号-1", // 备案号
    "startYear": "2019",
    /**
     *评论
     */
    valineConfig: {
      appId: 'CztB6WmRz21DKX6LGoTqBgLB-gzGzoHsz', // your appId
      appKey: 't9s1uuIYevQUwsblFgtz1vDc', // your appKey
    }
  },
  "markdown": {
    "lineNumbers": true // 代码显示行号
  },
  "locales": {
    "/": {
      lang: "zh-CN", // 仅供参考，具体 lang 配置根据自己需求定义
    }
  },
  plugins: [
    // 彩色背景 npm install vuepress-plugin-ribbon-animation -D
    ["ribbon-animation", {
      size: 80, // 默认数据
      opacity: 0.4, //  透明度
      zIndex: -1, //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "70%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.35,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 2,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 30,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true // 滑动彩带
    }],
    // 樱花插件 npm install vuepress-plugin-sakura -D
    ["sakura",
      {
        num: 5, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...' // 绝对路径
        }
      }
    ],
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: true,
        messages: {
          welcome: '我是lookroot欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        },
        width: 120,
        height: 176
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-pagation"
    ],
    [
      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      "cursor-effects",
      {
        size: 2, // size of the particle, default: 2
        shape: 'star', // shape of the particle, default: 'star' ,可改为'circle'
        zIndex: 999999999 // z-index property of the canvas, default: 999999999
      }
    ],
    [
      //插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
      "flowchart"
    ],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码", //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: "复制成功!"
      }
    }],
    [
      "vuepress-plugin-boxx"
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toLocaleDateString();
        }
      }
    ],
    [
      "sitemap",
      {
        hostname: "https://www.vaq86.cn",
      },
    ],
    [
      'vuepress-plugin-baidu-autopush'
    ],
    require('./vuepress-plugin-jsonld')
    // ["@vuepress-yard/vuepress-plugin-window",{
    //   title: "**の公告",  //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save
    //   contentInfo: {
    //     title: "欢迎进来的小耳朵 🎉🎉🎉",
    //     needImg: true,
    //     imgUrl: "https://reinness.com/avatar.png",
    //     content: "喜欢博皮可以到博客园关注教程",
    //     contentStyle: ""
    //   },
    //   bottomInfo: {
    //     btnText: '关于',
    //     linkTo: 'https://cnblogs.com/glassysky'
    //   },
    //   closeOnce: false
    // }]

  ],
  markdown: {
    // ......
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  // 使博客支持.webp格式的图片
  chainWebpack: (config) => {
    config.module
        .rule('url-loader')
        .test(/\.(webp)(\?.*)?$/)
        .use('url-loader')
        .loader('url-loader')
        .end()
}

}