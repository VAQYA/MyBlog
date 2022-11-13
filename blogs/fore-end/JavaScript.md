---
title: JavaScript
date: 2020-10-01
tags: tag1
categories: 前端相关
---

运行在客户端的脚本语言；  
脚本语言不需要编译；
浏览器本身不会执行js代码，是通过内置的JavaScript引擎（解释器）来执行，逐行解释然后由计算机去执行； 
由3部分组成：语法（ECMAScript）、页面文档对象模型（DOM）、浏览器对象模型（BOM）

3种方式：  
1. 行内式
    如onclick
2. 内嵌式
在`<script></script>`标签里面写js语法

3. 外嵌式
```js
<script src="my.js"></script>
```
js文件返回的是个函数调用结果
## JavaScript语法

### 常用语句 

alert(msg);  浏览器弹出警示窗；  
console.log(msg);  控制台打印；  
prompt(info);  浏览器弹出输入框，用户可以输入，方法返回用户输入的字符串类型数据；  
JSON.stringify(value);  JavaScript对象转换为JSON字符串
JSON.parse(value);  JSON字符串转为JavaScript对象
${param}  $用于获取参数param的值，拼接在字符串中
url: `www.baidu.com/abc/${current}/${limit}`

### 变量

声明变量 var 

只声明，不赋值，undefined  

不声明，只赋值，也可以会变成全局变量  

驼峰命名  

变量的数据类型是弱类型/动态语言，只有在执行的时候根据右边的值才能确定是什么类型的数据  

数据类型是可变的

简单数据类型：Number（0）、String（""）、Boolean(false)、Undefined(undefined)、Null（null） 

复杂数据类型：Object  

数字前面加0，则表示八进制  

数字前面加0x，则表示十六进制  

数字的最大值：Number.MAX_VALUE  

数字的最小值：Number.MIN_VALUE  

非数值：NaN  

isNaN(vaq);  判断是非数字，vaq不是数字,返回true  

字符串：单引号或双引号;建议使用单引号  

vaq.length;  获取字符串的长度  

Boolean中的true参与算法运算可以当1来算，false当做0处理  

undefined+1结果为 NaN  

null+1结果为1  


### typeof用法
```js
var vaq = 'VAQ';  
console.log(typeof vaq);  // string
```


控制台中打印的紫色字体是数字、黑色是字符串、蓝色是boolean

### 数据类型转换

#### 其他类型转为字符串

1. toString();  
2. String(VAQ);  
3. VAQ+'';  //最常用

#### 其他转为数值

* parseInt(VAQ);  //转成整型  可以取以数字开头的字符串，只得到数字 (输入框默认会是字符串，可用此方法转为数字）
* parseFloat(VAQ);  //转成浮点数类型  可以取以数字开头的字符串，只得到数字  
* Number(VAQ);  转成数值型  
* 减号、乘号、除号这三种可以隐式转换

#### 其他转为布尔  

Boolean(VAQ);  // NaN、null、undefined、''、0 这五个会转换成false，其他都会转成true  
浮点数做运算会丢失精度   
递增/减 必须和变量搭配 （++、--）
前置递增：++n  先加1，再返回值  
后置递增：n++ 先返回原值，再加1
赋值运算符：  = 直接赋值；  
+=、-= 加、减一个数后再赋值； 
*=、/=、%= 乘、除、取模后再赋值
逻辑与&& 比 逻辑或|| 优先级高  
switch中的表达式和case是用全等(===)的方式比较的

循环的三种方式：for、while、do while   

### 数组 

创建数组 
```js
var arr1 = new Array(); 
var arr2 = [];
```
数组中可以存储任意类型的元素
获取数组元素  arr[0]
遍历数组  for循环  
数组长度  arr.length  
修改数组长度  arr.length = num;  
追加数组元素 
```js
arr = [1,2,3];  
arr[3] = 4;  
```
### 函数

声明函数  
```js
function funName(){ }
```
函数形参不传值，默认是undefined
函数没有return，则返回undefined  
所有的函数都内置了一个arguments对象，它存储了传递的所有实参  
arguments是个伪数组；伪数组：具有长度.length；有索引；没有正真数组的方法pop()、push()等； 

函数声明方式： 
```js
1. function funName(){};  // 命名函数

2. var fun = function(){}; //匿名函数
```
作用域：
全局作用域：`<script>`标签，或一个单独是js文件  
局部作用域：在函数的内部

### js预解析
JavaScript会先预解析代码，然后再执行  
js引擎会将所有的var变量和function提到当前作用域的最前面  
变量预解析：只提升变量，不提升赋值
函数预解析：只提升函数声明，不调用函数  

### 对象

==创建==： 

1. 字面量创建 { }

```js
var obj = {
	name: 'VAQ',
	age: 18, 
	sayHi: function( ){
				console.log('hi~')
			}
	}
```

调用属性：
```
1. obj.name
2. obj['name']  
```
调用方法：
`obj.sayHi( )`

2. new Object( ) 创建
```js
   var obj = new Object( );
   obj.name = 'VAQ';
   obj.age = 18; 
   obj.sayHi = function( ){ 
   					console.log('hi~'); 
   				}
```

3. 构造函数创建
```
function Star(name, age ){
	this.name = name;
	this.age = age;
}
var obj = new Star('VAQ',18); 
```

new关键字执行流程：构造函数先在内存中创建一个空的对象，this指向空对象，执行构造函数的代码，给空对象添加属性和方法，返回对象  

**Object常用方法**

```js
Object.assign(target,source); //将source的属性赋值给target，返回target（ES6）  
Object.create(target);  //创建一个新对象，使用现有的对象来提供新创建的对象的__proto__  
Object.defineProperty(target,prop,descriptor); //在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。  
Object.getOwnPropertyNames(target); //返回指定对象的所有属性名组成的数组  
obj.hasOwnProperty(prop); //判断是否有指定的属性  
Object.is(target,source); //判断两个值是否为同一个值（ES6）  
Object.keys(obj); //返回包括所有key（obj是数组时返回索引）的Array数组wd  
Object.values(obj);  //返回包括所有value的Array数组  

```

### for in  遍历对象

```js
for(var key in obj){
	console.log(key);  // 属性名
	console.log(obj[key]); // 属性值
}
```
## JavaScript的对象
内置对象、浏览器对象、自定义对象

###  内置对象

#### Math对象 
Math.PI 圆周率
Math.max(1,99,3); 最大值
Math.random(); 随机数

#### Date日期对象
通过构造函数来创建
```js
var date = new Date();
data.getFullYear( );
```
#### Array数组对象
```js
var arr1 = new Array(3); // 长度为3的空数组
var arr2 = new Array(1,2,3); //等价于 [1,2,3]  
```
检测是否为数组：
```js
console.log(arr instanceof Array);  
console.log(Array.isArray(arr));  
```
常用方法：
``` js 
push(参数1...); // 末尾添加一个或多个元素；返回的是新数组的长度  
pop( ); //删除最后一个元素；； 返回的是删除的那个元素  
unshift(参数1...); //向数组的开头添加一个或多个元素；返回的是新数组的长度  
shift( );  //删除第一个元素； 返回的是删除的那个元素  
reverse( ); // 颠倒顺序；  
sort( ); // 排序 1,13,2,34,5,6  

var arr = ['red','green','blue','red']
arr.indexOf('red');  //返回0；返回满足的第一个索引号；如果没有则返回-1    
arr.lastIndexOf('red'); //返回3；返回满足的最后一个索引号；如果没有则返回-1 

arr.toString( ); //转成字符串  
arr.join( );  //转成字符串，以指定符号分隔，默认是逗号；
arr.join('。')； 结果为：red。green。blue。red
```
####  字符串对象
```js
字符串不可变
var str  = 'VAQ';  
str.length   //字符串长度  
str.indexOf('Q',n);  //根据字符返回位置，n表示起始位置,可以不写;找不到则返回-1  
str.lastIndexOf('Q'); //从后面开始查找第一个匹配的位置  
str.chatAt(index );  //返回指定索引号的字符  
str.chatCodeAt(n);  //返回指定索引号的字符的ASCLL码  
str[index];  //与str.charAt(n)等效
str.concat(str1,str2...);  //连接字符串，等效与（+），+更常用  
str.substr(start,length);  //从start位置开始，截取length个字符  
str.slice(start,end);  //截取[start,end)的字符串  
str.substring(start,end);  //和slice同效  
str.replace(source,target);  //把source替换成target  
str.split('分隔符');  // 通过分隔符转换为数组  
str.toUpperCase( );  //转换为大写  
str.toLowerCase( );  //转换为小写  
```
#### 简单数据类型（基本类型、值类型）和复杂数据类型（引用类型）
值类型：string、number、boolean、undefined、null；存于栈中  
引用类型：Object、Array、Date、Math等；存于堆中  

## DOM页面文档对象模型
DOM树

* 文档：一个页面就是一个文档，document表示  
* 元素：页面内所有的标签，element表示  
* 节点：网页中所有内容都是结点，如标签、属性、文本、注释等，node表示  

获取元素：
``` js
 通过id获取：document.getElementById('id');  //返回对象   
 通过标签名获取：document.getElementsByTagName('tagName');  //返回的是伪数组 
 获取指定元素下指定标签名的元素？可以先获取父元素，再用父元素通过标签名获取   
 通过类名获取：document.getElementsByClassName('className');  
document.querySelector('选择器');  //根据指定选择器返回第一个元素对象  
document.querySelector('#id');  
document.querySelector('tagName'); 
document.querySelector('.className');  
document.querySelectorAll('选择器');  //根据指定选择器返回所有元素对象  
```
获取html标签：

`document.documentElement`
获取body标签：

`document.body`  

鼠标事件： 
onclick  点击左键触发  
onmouseover  经过时触发 
onmouseout  离开时触发  
onfocus  获得焦点时触发  
onblur  失去焦点时触发  
onmousemove  移动时触发  
onmouseup  弹起时触发  
onmousedown  按下时触发  

修改普通标签的内容，不能修改input的内容；想修改input标签的内容时，修改其value  
`element.innerText`  起始位置到终止位置的内容，不包括HTML标签，会去掉空格和换行  
`element.innerHTML`  起始位置到终止位置的内容，包括HTML标签，同时保留空格和换行  

`img.src = ''; ` //就能重新给img标签下的src属性重新赋值  


* 表单的属性操作：  
```js
  var btn = document.querySelector('button');  
  btn.onclick = function(){
      input.value = '被点击了';  
      input.disabled = true;  
      this.disabled = true;  //this指事件函数的调用者，这里指btn  
  }
```
修改样式属性：

1. `element.style` //行内样式操作，适合修改较少的样式
2. `element.className`//类名样式操作，可以更改当前元素的类，覆盖掉以前的；适合修改较多的样式    

利用document可以操作这些表单属性：type、value、checked、selected、disabled

### DOM操作元素  

#### 操作元素内容
innerText、innerHTML

#### 操作元素属性  
src、href、title、alt等

#### 获取属性的值
```js
element.src  //获取内置属性  
element.src = '' //设置属性值
element.getAttribute('属性名'); //获取自定义属性 ，规定自定义属性都是data-开头的属性名 
element.setAttribute('属性名','属性值'); //设置自定义属性值
element.removeAttribute('属性名');  //移除属性
```
#### 操作表单元素属性
type、value、disabled等

#### 操作元素样式属性
element.style、element.className  

### 节点操作获取元素
js中万物皆是节点，至少包括nodeType节点类型、nodeName节点名称、nodeValue节点值；  
元素节点nodeType=1，属性节点nodeType=2，文本节点nodeType=3（文字、空格、换行等），

#### 获取父节点
```html
<div class='color'>
	<div class='red'> </div>
</div>
```
```js
var node = document.querySelector(".red");  
node.parentNode;  //最近的上一节点，即class为color的节点  
```
#### 获取子节点
```js
node.childNodes;  //包含子节点，包括元素节点、文本节点  
node.children;  //只包括子元素节点；开发中常用  
node.firstChild;  //获取第一个子节点，包括元素节点、文本节点  
node.lastChild;  //获取最后一个子节点，包括元素节点、文本节点    等效于 node.children[node.children.length-1];  
node.firstElementChild;  //获取第一个子元素节点  
node.lastElementChild;  //获取最后一个子元素节点  
```
#### 获取兄弟节点
```js
node.nextSibling;  //获取下一个兄弟节点，包含元素节点、文本节点  
node.previousSibling;  //获取上一个兄弟节点，包含元素节点、文本节点  
node.ElementSibling;  //获取下一个兄弟元素节点  
node.previousElementSibing;  //获取上一个兄弟元素节点  
没有时，返回null
```
#### 创建节点、添加节点
```js
var li = document.createElement('li');  //创建节点
var ul = document.querySelector('ul');    
ul.appendChild(li); //在父节点的子节点最后追加子节点
ul.insertBefore(li,ul.children[0]);  //在父节点的指定位置前插入节点  
```
#### 删除节点
```js
node.removeChild(child);  //删除父节点中的一个子节点  
```
#### 复制节点
```js
node.cloneNode(); 或node.cloneNode(false);  只复制当前节点，不赋值其子节点  
node.cloneNode(true);  深度复制，也复制其子节点  
```

### 事件
DOM中所有的事件对象都是基于Event对象的，都可以访问Event对象的属性、方法  
`event.preventDefault(); ` 如果事件可以取消，调用该方法就会将其取消  
#### 注册/绑定事件：给元素添加事件

* 传统注册方式
同一个元素同一个事件只能设置一个处理函数，后面的处理函数会将前面的函数覆盖掉    
1. onclick
2. btn.onclick = function(){}  

* 方法监听注册方式
addEventListener()； //同一个元素同一个事件可以注册多个监听器  
```html
<button> 这是个按钮</button>
```
```js
var btns = document.querySelectorAll('button');
btns[0].addEventListener('click', function(){
	alert('这是弹窗1');
});
btns[0].addEventListener('click',fn);
function fn(e){
	alert('这是弹窗2');
}
这两个方法会依次执行
```

#### 删除/解绑事件
* 传统方式
`btn.onclick = null;`

* 方法监听方式 
`removeEventListener('click',fn);`  //fn是监听注册的函数

### DOM事件流  
多个事件的传播过程

事件流的两个阶段：  
1. 捕获阶段：事件从document到父级再到子级依次执行   
2. 冒泡阶段（常用）：事件从子级到父级别一直到DOM最顶层节点依次执行  
`btn.addEventListener('click',fn,true);` // true表示捕获阶段，false或空表示冒泡阶段

onblur、onfocus、onmouseenter、onmouseleave没有冒泡

* 事件对象
```js
ul.addEventListener('click',function(e){
	console.log(e);
	e.stopPropagation();  // 阻止冒泡事件
}
e //表示当前事件的对象；  
e.target //返回的是触发事件的对象，this返回的是绑定事件的对象  
e.type //返回事件类型，如click、mouseover、mouseout
e.preventDefault() //阻止默认方法，如本来click点击，让其失效  
e.stopPropagation(); // 阻止冒泡事件

```
* 事件委托
不给每个节点设置事件监听器，而是将事件监听器设置在其父节点上，通过冒泡原理影响设置所有的子节点  

## BOM浏览器对象模型  
浏览器窗口进行交互的对象，核心是window，window是浏览器的顶级对象，是全局对象  
BOM包含了DOM
```js
window.document
window.location  
window.navigation  
window.screen  
window.history  
```

* 窗口/页面加载事件
```js
window.onload = function(){}; 
或  
window.addEventListener('load', function(){});//当文档内容（包括图像、脚本文件、CSS文件等）完全加载完成后会触发该事件调用处理函数；  
window.addEventListener('DOMContentLoaded',function(){});  仅当DOM（不包括CSS、图片）加载完成后触发该函数  
```

* 调整页面大小事件  
```js 
全局作用域和普通函数中，this指window
window.onresize = function(){};
window.innerWidth  //当前屏幕的宽度
window.setTimeout(调用函数，延迟毫秒数(可省略，默认为0));//定时器定时调用一次这个函数
window.clearTimeout(timeoutId);//停止定时器
window.setInterval(调用函数，延迟毫秒数(可省略，默认为0));//定时器定时无限循环调用多次这个函数
window.clearInterval(timeoutId);//停止定时器
```

* 异步任务
普通事件：click、resize等  
资源加载：load、error等
定时器：setTimeout、setInterval等；  
异步任务的相关回调函数会添加到任务队列中；  
js会先执行执行栈中的同步任务，执行结束后再执行任务队列中的异步任务
事件循环：主线程不断重复获得任务、执行任务、再获取异步任务、执行任务......的机制  


* location对象
```js
location.href //获取或设置整个url  
location.host //主机/域名  
location.port //端口号  
location.pathname //路径  
location.search //返回参数  
location.hash //返回锚点链接  
location.assign('http://www.baidu.com'); //和href一样，跳转页面（重定向）记录历史，可以实现后退  
location.replace('http://www.baidu.com'); //不记录历史，不可以后退  
location.reload();  //重新加载页面，相当于F5

* navigator  包含浏览器的一些属性  
navigator.userAgent  是客户机向服务器发送的user-agent头部的值  
```
* history
  与浏览器历史记录进行交互
```js
history.back() //后退；  
history.forward  //前进；  
history.go(参数)  //前进或后退；参数是1则前进一个页面，是-1则后退一个页面，-2后退两个
```
## Others

### navigator.clipboard
剪切板功能  
### import 
js中的import的会最先执行  

### _proto_和prototype
_proto_是每个对象都有的属性，称为隐式原型，它指向了构造该对象的构造函数的原型，保证了实例能够访问在构造函数原型中定义的属性和方法（toString()、valueOf()）  
prototype，称为显示原型，函数是个特殊的对象，除了和其他对象一样有_proto_属性外，还有个特有的属性prototype，这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）。原型对象也有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数

### 判空
```js
if(!obj){
	// 为null或者为空字符串，就会进来
}
```
### 获取json数据
```js
params:{'age':39,'name':'VAQ'}
var age = params['age']
```
