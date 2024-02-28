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
  size: 80,   // 默认数据
  opacity: 0.4,  //  透明度
  zIndex: -1,   //  层级
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
  ribbonAnimationShow: true  // 滑动彩带
}],
    // 樱花插件 npm install vuepress-plugin-sakura -D
 ["sakura", 
 {
  num: 5,  // 默认数量
  show: true, //  是否显示
  zIndex: -1,   // 层级
  img: {
    replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
    httpUrl: '...'     // 绝对路径
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
         transformer: (timestamp, lang) => { return new Date(timestamp).toLocaleDateString();}      
      }    
    ],
    [
			"sitemap",
			{
				hostname: "https://www.vaq86.cn",
			},
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

  ],
  markdown: {
    // ......
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  }
}
