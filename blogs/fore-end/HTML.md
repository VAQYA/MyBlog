---
title: HTML
date: 2020-10-01
tags: tag1
categories: 前端相关
---

超文本标记语言  
注释方式：`<!--注释-->`

### 标签

* html文件最上方加上<!doctryp html>表示是HTML5.0，去掉表示是HTML4.0  
*  <html>  告知浏览器这是一个HTML文档，是HTML文档的最外层标签  
属性有：xmlns，是规定文档xml的命名空间  (XML namespaces)  
*  HTML不区分大小写

``` html
<!DOCTYPE html>
<html>

<head>
    <title>标题名</title>
</head>
<body>

    <h1>一级标题</h1>
    <h2></h2>
    <h3></h3>
    <h4></h4>
    <h5></h5>
    <h6></h6>
    <p> 段落</p>
    <blockquote>表示引用的段落；相对于p标签，多了首行缩进</blockquote>

    <!--换行,是单标签-->
    <br>
    <!--水平横线，单标签-->
    <hr>
    
    <pre>预留格式</pre>
    
    <del>删除字</del>
    
    <ins>插入字</ins>
    
    <b>粗体</b>
    
    <i>斜体</i>
    
    <em>强调标签，自带倾斜</em>

    <center>
        10<sup>右上角加字</sup>
    
        10<sub>右下角加字</sub>
    </center>
</body>
</html>
```

### 表格

```html
    <table border="1px" width="60%" height="150px" align="center">
        <tr> //第一行
            <td>第一列</td>
            <td>第二列</td>
            <td>第三列</td>
        </tr>
        <tr>//第二行
            <td>第一列</td>
            <td>第二列</td>
            <td>第三列</td>
        </tr>
    </table>
```
* `<th>`比`<td>` 多了居中、加粗
* rowspan="2" 合并两行；合并时删除下面的行的一列
* colspan="2" 合并两列；

### 实体符号

以&开始，以;结束  
```
&lt; 小于号
&gt; 大于号
&nbsp; 空格
```

### 背景颜色 
bgcolor
### 背景图片
background

### 图片

`<img src="" width="100px" alt="" /> `只设置宽度，高度会进行等比例改变;  
alt 图片加载失败时的显示

### 超链接
```
<a href="www.baidu.com" target="_self" >百度</a> get请求
target的值：_self在当前页面打开；_blank新窗口；_top顶级窗口；_parent父窗口
```
* 阻止链接跳转： href的值javascript:void(0); 或 javascript:; 
### 有序列表
```html
<ol type="a">  //type的值：a以abc来标序号，1以数字
	<li></li>
	<li></li>
</ol>	
```
### 无序列表
```html
<ul type="circle">  //type的值：circle圆圈；square方块；disc圆点
	<li></li>
	<li></li>
</ul>
```
### 表单

```html
<form action="" method="get"> //action的值：服务器地址；和href属性一样，都可以向服务器发送请求
	
	<input  id="vaq" type="submit" name="key" value="value" readonly maxlenth="100" placeholder="提示信息"/>  
	
	<input id="man" type="radio" name="sex" value='1'/>  
	<label for="man">男</label>   // label的for属性和input的id绑定，当写了for属性时，点击文字也会被选中，不然只能点击选择框
	
	<input id="women" type="radio" name="sex" value='2'/>
	<label for="women">女</label>

    <select multiple="multiple" size="2" name="xueLi"> //multiple下拉框支持多选，size显示的条目数量
    	<option value="cz">初中</option>
    	<option value="gz">高中</option>
    	<option value="dx" selected>大学</option>  //默认选中
    </select>
	
    
</form>
```
#### label
标记input

#### input的属性

	//name表单项写了name属性的才会提交。
	//readonly属性表示只读，会将数据提交给服务器。
	//disabled属性表示只读，但不会将数据提交给服务器，表示禁用该input元素。
	//maxlenth属性表示可输入字符的最大数量。
	//autofocus属性自动获取焦点。 autofocus|autofocus="autofocus"|autofocus=true  三种方式
	//step属性规定输入字段的合法数字间隔  
	//oninput属性，表示输入事件
	//onchange属性，表示改变事件
	//oninvalid属性，表示验证不通过事件  
	//type的值：
	    text文本框；
	    password密码框；
	    checkbox复选框；
	    radio单选框；
	    button只是普通按钮；
	    submit是提交按钮表示可以提交；
	    reset重置；
	    file文件上传；
	    hidden在网页上隐藏的数据，但同样会提交给服务器；
	    email邮箱格式；
	    search搜索样式的输入，有叉号；


form或input标签中，autocomplate属性，表示输入一次，则下次输入时会自动提示

#### 表单元素必填
required
#### 表单验证使用正则表达式
pattern
#### 提交表单时使验证失效
novalidata 在form上应用
formnovalidata 在input上应用

#### div和span
都是图层，可以保证页面灵活的布局。
div默认独自占一行，pan不会。

#### 表单验证

1. willValidate属性  

2. validity属性  
下面validityState属性都是Boolean类型的  
* badInput  用户提供了一个浏览器不能转换的input  
* customError  setConstomValidity()  
* patternMismatch  是否使用了正则  
* rangeOverflow 是否设置了最大值 
* rangeUnderflow  是否设置了最小值  
* stepMismatch  step  
* tooLong  对应input的maxLength属性  
* tooShort 对应input的minLength属性    
* typMismatch  是否不符合某种类型，如email、tel、rul等  
* valid  所有都是false，这是就是true  
* valueMissing  required

3. validationMessage属性 
错误信息

4. checkValidity()方法 
只有满足了input属性中的所有约束，才会是true

5. setConstomValidity()方法  
setConstomValidity("这是提示信息：不能为空");

### HTML自带的伪类 
:required选题 :optional必填  
:in-range在范围内 :out-of-range在范围外  
:valid有效 :invalid无效  
:read-only只读 :read-write读写