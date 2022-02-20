module.exports = {
  "base": "/MyBlog/",
  "title": "VAQ的博客",
  "description": "平庸，就是失去追求卓越信念的那个瞬间！",
  "dest": "public", // 博客部署时输出的文件夹
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
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
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2, // 在导航栏所占的位置
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [{
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      },
      {
        "title": "被删的前端游乐场",
        "desc": "一个极度热爱前端的开发者",
        "avatar": "https://gitee.com/vaq/image/raw/master/avatar/godbasin.jpg",
        "link": "http://www.godbasin.com"
      },
      {
        "title": "程序羊",
        "desc": "良心Up主，行业领头羊",
        "avatar": "https://gitee.com/vaq/image/raw/master/avatar/codeSheep.jpg",
        "link": "https://www.r2coding.com"
      },
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    // "sidebar": "auto", // 自动形成侧边导航
    "subSidebar": 'auto',
    "lastUpdated": "Last Updated",
    "author": "VAQ",
    "authorAvatar": "/avatar.png",
    "record": "", // 备案号
    "startYear": "2017",
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
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
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
    // [
    //   //彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
    //   "ribbon",
    //   {
    //     size: 90, // width of the ribbon, default: 90
    //     opacity: 0.8, // opacity of the ribbon, default: 0.3
    //     zIndex: -1 // z-index property of the background, default: -1
    //   }
    // ],
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
    ]
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

  ]
}