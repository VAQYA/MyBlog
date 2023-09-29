---
title: CSS
date: 2020-10-01
tags: tag1
categories: 前端相关
---

Cascading Style Sheets层叠样式表
写在`<stylye type="text/css"></style>`标签里 CSS3中可以省略不写type

注释方式`/*注释*/`

- 将css放在head里，可避免浏览器渲染的重复计算。

### 字体

font-size: 16px  字号大小；  单位px、em、in、cm、mm、pt
font-family: "Microsoft YaHei"  字体； 有空格或符号就必须用引号包裹；支持汉字，但最好用英文；也可用Unicode表示  
font-weight: 400 字体粗细；400相当于normal正常字体、700相当于bold粗体  
font-style: italic 字体风格;  italic字体倾斜、normal正常  

综合设置字体样式：font:  font-style  font-weight  font-size/line-height  font-family;  顺序不可改，font-size和font-family必须写，其他可以省略  


### 边框  
border

### 内边距  
指元素里的内容与边框之间的距离  

padding-top:上内边距  
padding-right:右内边距 
padding-bottom:下内边距  
padding-left:左内边距 

4个值时，padding: 上 右 下 左  
3个值时，padding: 上 右 下 (左取右值)  
2个值时，padding: 上 右 (下取上值) (左取右值)  
1个值时，padding: 四个都取这个值  

### 外边距  
指边框与边框之间的距离  

`<span></span>`是内联元素，无法设置上下外边距  
margin-top:上外边距  
margin-right:右外边距 
margin-bottom:下外边距  
margin-left:左外边距 

auto 浏览器计算外边距  
margin:auto 相当于 margin:auto auto auto auto   
maigin:0 auto 相当于 margin:0 auto 0 auto  

### width宽度  

### 背景  
background-color 背景颜色  


## 选择器

### 标签选择器
直接定义标签，使所有标签都生效  

### 类选择器
在标签里面用class声明，然后引用；多个类用空格隔开  
.类名{属性1: 属性1值; 属性2: 属性2值}    //点开头

### id选择器
在标签里面用id声明，然后引用；
#id名{属性1: 属性1值; 属性2: 属性2值}    //#开头

类选择器可以在不用标签中调用多次，id选择器只能在标签里被调用一次

### 通配符选择器  
`*{属性1: 属性1值; 属性2: 属性2值}` 

### 伪类选择器
#### 链接伪类选择器
:link  未访问的链接  
:visited  已访问过的链接  
:hover  鼠标经过时的链接  
:active 选定时的链接（点击不松开鼠标时） 

例 a:link {属性1: 属性1值; 属性2: 属性2值}
#### 结构（位置）伪类选择器
:first-child  父元素的首个子元素的指定选择器
:last-child  父元素的最后一个子元素的指定选择器
:nth-child(n)  父元素的正数第n个，n从0开始；  n可以是数字、odd代表奇数、even偶数、计算公式2n等
:nth-last-child(n)  父元素的倒数第n个，n从0开始

#### 目标伪类选择器  
:target {属性1: 属性1值; 属性2: 属性2值}  
修饰当前选中的id样式  

### 复合选择器  
#### 交集选择器
即...又...  
例：p.red{属性1: 属性1值; 属性2: 属性2值}      对标签是p，并且类名为red起作用  

#### 并集选择器
或 
p,div,.red,#test{属性1: 属性1值; 属性2: 属性2值}   对标签是p，div，类名是red，id是test的都起作用  

#### 后代选择器 
空格隔开  
p div{属性1: 属性1值; 属性2: 属性2值} 对p标签下的div标签起作用  
```html
<p> 
	<div></div>
</p>
```
#### 子元素选择器 
大于号
`.red>h3{}`


### 颜色  
color: red;  
1. 英文表示，red、blue等
2. 十六进制，#FF0000等
3. RGB代码，rgb(255,0,0)  

### 行间距  
line-height: 26px;  一般设置比字号大8像素

### 水平对齐方式  
text-align: center;  文字水平对齐  

### 首行缩进  
text-lindent: 2em;  1em表示一个汉字的宽度  

### 字间距
letter-spacing: 3px;  

### 单词间距  
word-spacing: 2px;  

### 颜色半透明  
color: raba(r,g,b,a);  a是alpha透明度，0~1之间  

### 文字阴影
text-shadow: 水平位置 垂直位置 模糊距离 阴影颜色;  后两个可以省略  




## 行内式样式表  
只对当前标签及其子标签有效
```html
<div style="属性1: 属性1值; 属性2: 属性2值;"> </div>  
```
## 内部样式表  
将CSS代码用style标签定义，可以写在HTML文档任何地方，但一般放在head头部标签中  
```html
<head>
    <style type="text/CSS">
    	选择器 {属性1: 属性1值; 属性2: 属性2值;}
    </style>
</head>
```

## 外部样式表  
```html
<head>
	<link rel="stylesheet" href="css文件的路径" type="text/CSS">
 </head>
```

### 块级元素

会独占一行，宽度默认是容器的100%；  
可以设置宽度、高度、对齐等属性；  
可容纳内联元素和其他块元素  
```
例：<div>、<h1>~<h6>、<p>、<ul>、<ol>、<li>等  
```
### 行级元素  
不独占一行，可以和相邻个行内元素在同一行显示；  
不可以设置宽度、高度、对齐等属性； 
```
例：<span>、<a>、<strong>、<b>、<em>、<i>、<del>、<s>、<ins>、<u>、
```
### 行内块元素
可以在同一行；  
可以设置高度、行高、内外边距等属性；
```
例：<img />、<input />、<td>等
```

### 显示模式display
块转行内元素：display:inline;  
行转块内元素：display:block; 并显示  
行内标签转为行内块元素：display: inline-block;  























