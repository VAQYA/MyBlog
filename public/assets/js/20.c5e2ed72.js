(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{609:function(t,n,s){t.exports=s.p+"assets/img/image-20221229151320928.9597abce.png"},610:function(t,n,s){t.exports=s.p+"assets/img/image-20230111100748344.eabd9a57.png"},722:function(t,n,s){"use strict";s.r(n);var r=s(5),a=Object(r.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("用来做负载均衡和反向代理的web服务器")]),t._v(" "),r("p",[t._v("为性能优化而来的，可支持5万并发")]),t._v(" "),r("p",[t._v("支持热部署")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://nginx.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方下载"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"反向代理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[t._v("#")]),t._v(" 反向代理")]),t._v(" "),r("p",[t._v("正向代理：代理客户端，在客户端或者浏览器中配置代理，服务端不知道实际发起请求的客户端"),r("br"),t._v("\n反向代理：代理服务端，客户端访问反向代理服务器，反向代理服务器将请求转发到实际的tomcat服务器，客户端不知道实际提供服务的服务器")]),t._v(" "),r("h2",{attrs:{id:"负载均衡"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),r("p",[t._v("针对多个服务器，将请求平均分发到这些服务器上")]),t._v(" "),r("h2",{attrs:{id:"动静分离"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动静分离"}},[t._v("#")]),t._v(" 动静分离")]),t._v(" "),r("h2",{attrs:{id:"命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),r("p",[t._v("进入到nginx的目录下，再运行命令\n/usr/local/nginx/sbin")]),t._v(" "),r("p",[t._v("./nginx -v  版本号"),r("br"),t._v("\n./nginx  启动nginx"),r("br"),t._v("\n./nginx -s stop  关闭nginx\n./nginx -t    测试能否运行成功（重启之前-t一下更稳）"),r("br"),t._v("\n./nginx -s reload  热加载nginx（重新加载配置文件）")]),t._v(" "),r("h3",{attrs:{id:"centos查看安装目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#centos查看安装目录"}},[t._v("#")]),t._v(" CentOS查看安装目录")]),t._v(" "),r("p",[t._v("ps -ef|grep nginx    //获取进程id")]),t._v(" "),r("p",[t._v("ls -l /proc/进程id/exe")]),t._v(" "),r("h2",{attrs:{id:"配置文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),r("p",[t._v("位置：/usr/local/nginx/conf/nginx.conf")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("全局块 *\nworker_processess 1;  Nginx可处理的并发量")])]),t._v(" "),r("li",[r("p",[t._v("events块 *\n主要影响Nginx服务器与网络的连接"),r("br"),t._v("\nworker_connections 1024;  支持的最大连接数")])]),t._v(" "),r("li",[r("p",[t._v("http块 *\n配置最频繁的部分，包含了http全局块、server块"),r("br"),t._v("\nlisten 80;  监听的端口\nserver_name localhost;  服务名")])])]),t._v(" "),r("p",[r("img",{attrs:{src:s(609),alt:"alias和root"}})]),t._v(" "),r("h3",{attrs:{id:"proxy-pass"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy-pass"}},[t._v("#")]),t._v(" proxy_pass")]),t._v(" "),r("p",[r("img",{attrs:{src:s(610),alt:"proxy_pass"}})]),t._v(" "),r("p",[t._v("如果location或if中用到了正则，则不能再转发除ip:port外的路径请求")])])}),[],!1,null,null,null);n.default=a.exports}}]);