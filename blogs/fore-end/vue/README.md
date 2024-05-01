1. vue基础
2. vue-cli
3. vue-router
4. vuex
5. element-ui

Vue是个渐进式JavaScript框架

特点：组件化模式、声明式代码

vue前需要掌握的JavaScript知识
ES6基本语法规范
ES模块化
包管理器
原型、原型链
数组常用方法
axios
promise

 el: 用于指定当前Vue实例为哪个容器服务，即挂载，值通常是css选择器字符串
 data中存储数据，共el所指定的容器使用
 容器和Vue实例的关系是一对一的，不能一对多
 一个页面就是一个vue实例，配合组件一起使用
 
 ### 模板语法：
 1. 插值语法： {{xxx}}插值表达式，xxx是js表达式，可自动读取data中的所有属性
 2. 指令语法
 v-bind：可简写为：，单项绑定
 v-model:value ：可简写为v-model，双向绑定，但指定应用在表单类（输入类）元素上，如input、单选框、双选框
 
 
 
 
 #### 插值语法和指令语法
 插值语法：用于解析标签体内容
 指令语法：用于解析标签
 
 ### 实例方法
 .$mount('#root'); 给将实例挂载在id为root的实例上，可替代new Vue中的el
 
 ### data的两种写法
 对象式、函数式（组件中只能用这种方式）
 
 ### MVVM模型
 Model-View-ViewModel
 
 Model：数据，即data
 View: 模板代码，DOM
 ViewModel: vue实例，所以经常习惯性将实例命名为vm
 
 
 
 
 
 
 
 
 