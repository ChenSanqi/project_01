一、什么是Ajax?
Ajax的全称是 Asynchronous JavaScript And XML(异步JavaScript 和 XML)。

通俗理解：在网页中利用XmlHttpRequest对象和服务器进行数据交互的方式，就是Ajax。

Ajax能让我们轻松实现网页与服务器之间的数据交互。

二、ajax的典型应用场景
通过ajax检测用户名是否重复、动态加载搜索提示列表、根据页码值动态刷新表格的数据、数据的增删改查等等。

三、jQuery中的Ajax
ps:[]代表可选参数。
$.get(url,[data],[callback]);
专门用于发起get请求，从而将服务器上的资源请求到客户端。
$.post(url,[data],[callback]);
专门用于发起get请求，从而向服务器提交数据。
$.ajax({
    type:'', //请求方式
    url:'',
    data:[],
    success:function(res){}
});


四、接口
什么是接口？
使用Ajax请求数据时，被请求的URL地址就叫做数据接口（简称接口）

接口文档的书写：
1、接口名称：接口的简单说明
2、接口URL
3、调用方式：GET或POST
4、参数格式：参数名称、参数类型、是否必选、参数说明
5、响应格式：返回数据的格式，数据名称，数据类型等等
6、返回示例（可选）

五、form表单
1、属性介绍：
action 规定当提交表单时，向何处发送表单数据（一般是URL地址，但格式上不同语言有不同使用语法）；
target 规定在何处打开action（_blank新开一个窗口、_self在当前默认打开）；
method 提交数据的方式，get or post；
enctype 发送表单数据之前如何对数据进行编码，文件上传必须使用multipart/form-data,不涉及文件上传可以使用默认值。

2、表单的同步提交：
点击submit类型的button会触发表单的提交，这就叫做同步提交；
缺点：
2.1、会直接跳转action Url所指向的地址，体验差
2.2、页面之前的状态和数据会丢失

解决方案：表单只负责采集数据，Ajax负责将数据提交到服务器；

3、监听表单提交事件的两种方式示例：
$('#id').submit(function(e){
    alert('监听到了表单的提交事件')
})；
$('#id').on('submit',function(e){
    alert('监听到了表单的提交事件')
})；


4、阻止表单的默认提交行为：
$('#id').submit(function(e){
    e.preventDefault();//阻止语句
})；
$('#id').on('submit',function(e){
    e.preventDefault();
})；

5、快速获取表单中的数据：
$(选择表单的选择器).serialize()；
可以一次性获取表单里的所有数据。
示例：$('#id').serialize();
ps:必须为每个表单的输入设置name才能获取到。


六、模板引擎
目的是为了解决UI结构渲染时需要拼接字符串
模板引擎：根据指定的模板结构和数据，自动生成一个完整的HTML页面。

目标：art-template模板引擎入门
标准语法：{{xxx}}；
标准语法-原文输出：{{@xxx}},如果绑定的数据中有HTML结构，则需要使用这个；

标准语法-条件输出：
{{if... else if... /if}}
示例：
{{if value}} 按需输出的内容 {{/if}}
PS：{{/if}}表示这一块代码逻辑结束。

标准语法-循环输出：
{{each 数组}} {{$index}}{{$value}} {{/each}}

标准语法-过滤器：
{{value | filterName}}
定义过滤器的基本语法：
template.defaultes.imports.过滤器名称=function(value){/*return处理的结果*/};

七、模板引擎的实现原理
exec()函数用于检索字符串中的正则表达式的匹配。
如果字符串中有匹配的值则返回该匹配值，否则null。
RegExpObject.exec(string);
PS:RegExpObject这个是定义的正则表达式。

分组：
正则表达式中（）包起来的内容表示一个分组

实现简易的模板引擎
1、定义模板结构
2、调用模板引擎
3、渲染Html结构

八、Ajax加强
8.1、XHR的基本使用
Get步骤：
1、创建xhr对象
var xhr=new XMLHttpRequest()
2、调用xhr.open()函数
xhr.open(get，url地址（带参或者不带参）)
3、调用xhr.send()函数
xhr.send()
4、监听xhr.onreadystatechange事件
xhr.onreadystatechange=function(){
    4.1、监听xhr对象的请求状态readyState;与服务器响应的状态status
    if(xhr.readyState===4&&xhr.status===200){
        //响应成功，打印响应回来的数据
        console.log(xhr.responseText)
    }
}

readySate属性：表示当前Ajax请求所处的状态。

查询字符串：url末尾加上用于向服务器发送信息的字符串。

Get请求携带参数的本质：使用get方式发起请求时，都是以查询字符串的方式提交数据的。

URL编码：URL地址中不允许出现中文字符（出现会导致URL链接无法读取），如果需要中文字符则需要编码（转义）


URL编码或解码API：
encodeURL() 编码的函数
decodeURL() 解码的函数

Post步骤：
1、创建xhr对象
var xhr=new XMLHttpRequest()
2、调用xhr.open()函数
xhr.open(get，url地址（带参或者不带参）)
3、设置Content-Type属性（固定写法）
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
4、调用xhr.send()函数，同时指定要发送的数据
xhr.send('键值对参数，多个参数用&符连接')
ps:注意这里的因为ContentType是url编码类型，如果是其他数据交换格式需要用不一样的send数据比如byte。
5、监听xhr.onreadystatechange事件
xhr.onreadystatechange=function(){
    4.1、监听xhr对象的请求状态readyState;与服务器响应的状态status
    if(xhr.readyState===4&&xhr.status===200){
        //响应成功，打印响应回来的数据
        console.log(xhr.responseText)
    }
}

数据交换格式(服务器端与客户端之间进行的数据传输与交换的格式)：XML和Json

XML：可扩展标记语言
ps:Html标志是指标记内容的显示方式,而XML的标记是传输和存储数据的显示方式。

缺点：js解析起来比较麻烦，格式臃肿，和数据无关的代码多，体积大，传输效率低。

Json:本质是字符串，用于表示JS的对象和数组的字符串表示法。（轻量级文本数据交换格式）

Json的两种结构：
对象和数组

序列化和反序列化：
序列化：把数据对象转换为字符串的过程
反序列化：把字符串转换为数据对象

封装自己的Ajax函数：ajaxhelp.js

新版XHR Level2的新特性:
1、可以设置HTTP请求的时限
2、可以使用FormData对象管理表单的数据
3、可以上传文件
4、可以获得数据传输的进度信息

设置http请求的时限：timeout属性
示例：
xhr.timeout=3000(单位是毫秒)
还可以绑定一个监听事件：
xhr.ontimeout=function(event){}


ajaxstart、ajaxstop

九、axios
专注于网络请求的库、相比于Jquery来说更加轻量化，只专注于网络数据请求，简单易用。

使用axios发起get请求的语法：
axios.get('url',{parms:{参数}}).then(callback)


