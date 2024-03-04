---
title: Ajax
date: 2020-10-01
tags: tag1
categories: 前端相关
---

# Ajax

Asynchronous JavaScript And XML 
无刷新获取数据  
没有浏览历史，不能回退  
存在跨域问题  

##原生发送Ajax

``` js
btn.onclick = function(){
	//初始化对象
	const xhr = new XMLHttpRequest();
	xhr.timeout = 2000;  // 超时设置
	xhr.ontimeout = function (){};  // 超时回调
	xhr.onerror = function(){};  // 网络异常回调
	xhr.responseType = 'json'  //自动将接收的数据转换为JSON字符串
	//  设置请求方法类型和url
	xhr.open('GET','http://127.0.0.1:8080/server?name=VAQ&age=18');
	// 设置请求头
	xhr.setRequestHeader('Content-Type','appliction/x-www-form-urlencoded');
	// 发送
	xhr.send(); //如果是Post请求，GET改为POST，send里面写请求体
	// 事件绑定，处理服务端返回的结果
	// readystate 表示状态：0,1,2,3,4，为4时表示已经接收完全部数据 
	// status 响应的状态码
	xhr.onreadystatechange = function(){
		if(xhr.readystate === 4){
			if(xhr.status === 200){
				xhr.status //状态码 200
				xhr.statusText //状态字符串 OK
				xhr.getAllResponseHeaders() //所有的响应头
				xhr.response //响应体
			}
		}
	}
	xhr.abort();  // 取消调用  
}

```

## axios发送Ajax
安装或引用在线js
``` html
npm install axios 

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>  
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.js"></script> // bootcdn网站代理，速度更快
```

### axios发送get和post请求
asios.get(url,url参数和配置参数)  2个形参
asios.post(url,请求体参数,url参数和配置参数) 3个形参  

``` html
<!DOCTYPE html>

<head>
    <script src="https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.js"></script>
</head>

<body>
    <button>get请求</button>
    <button>post请求</button>
    <button>Ajax请求</button>

    <script type="text/javascript">

        let btns = document.querySelectorAll('button');
        btns[0].addEventListener('click', getFun);
        btns[1].addEventListener('click', postFun);
        btns[2].addEventListener('click', ajaxFun);

        function getFun() {
            axios.get('https://api.thecatapi.com/v1/images/search', {
                //url参数
                params: {
                    name: 'VAQ',
                    age: 18
                },
                //请求头参数
                headers: {

                }
            }).then(res => {
                console.log(res);
                console.log(res.data);//data里是响应体数据
            })
        }

        function postFun() {
            axios.post('https://api.thecatapi.com/v2',
                //请求体
                {
                    name: 'VAQ',
                    age: 18
                },
                {   //url参数
                    params: {

                    },
                    //请求头参数
                    headers: {

                    }
                }).then(res => {
                    console.log(res);
                    console.log(res.data);//data里是响应体数据
                })
        }

        function ajaxFun() {
            axios(
                {
                    //请求方法
                    method: 'POST',
                    //url
                    url: 'https://api.thecatapi.com/v',
                    //url参数
                    params: {

                    },
                    //请求头参数
                    headers: {

                    },
                    //请求体参数
                    data: {

                    }
                }
            ).then(res => {
                console.log(res.status);//状态码
                console.log(res.statusText);//响应状态字符串
                console.log(res.data);//data里是响应体数据
                console.log(res.headers);//headers里是响应头数据

            })
        }

    </script>

</body>

</html>
```


## fetch函数发送Ajax
fetch() 方法是个JavaScript提供的全局方法
[fetch介绍](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

## 同源策略

* 协议、域名、端口号必须完全相同。  
* Ajax请求默认是在同源策略下的，违背同源策略就是跨域。

### 解决跨域问题 

1. JSONP，非官方的，只支持get请求  

2. CORS，管方的  
后台通过设置一个响应头来告诉浏览器该请求允许跨域，

`response.setHeaders("Access-Control-Allow-Orign","http://127.0.0.1:8080"); `只允许这个路径下的接口
`response.setHeaders("Access-Control-Allow-Orign","*"); `允许所有的跨域请求
还有其他类型如：只允许哪些请求方法、允许客户端自定义请求头等

## FormData
1. 是Ajax提供的对象，用以将数据编译成键值对，便于XMLHttpRequest发送数据（只能用于post方法）
``` html
<form id = "form">
<input type="text" name = "username"/>
...
</form>
```
```js
let form = document.getElementById('form');
let formData = new FormData(form);
xhr.send(formData); //自动转换成键值对形式的请求体
```

2. 可用于异步上传二进制文件  
[FormData上传文件](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)



