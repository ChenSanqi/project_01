一、Express
1、什么是express？
基于node.js平台，快速、开放、极简的web开发框架
(作用和node.js内置的http模块类似，是专门用来创建web服务器的)
本质：一个npm上的第三方包。

## 托管静态资源
express.static()
语法：app.use(express.static('文件目录地址'))

## 托管多个静态资源
app.use(express.static('文件目录地址'))
app.use(express.static('文件目录地址'))
ps：多次调用即可；
ps:访问静态资源文件时，express.static会根据添加时的顺序进行查找。

## 挂载路径前缀
app.use('/public',express.static('文件目录地址'))
ps：这样就能改变访问的路径，use的第一个参数只要符合文件系统的访问接口就能加。

## nodemon
能够监听项目文件变动，当代码修改后，会自动帮忙重启项目
全局安装：npm install -g nodemon

## 使用nodemon
nodemon 文件路径

二、路由
路由：映射关系

## express中的路由
客户端的请求与服务器处理函数之间的映射关系
路由三部分：请求的类型、请求的URL地址、处理函数
app.METHOD(PATH,HANDLER)

## 路由的匹配过程
每当一个请求到达服务器之后，需要仙经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数。
ps：路由会按照定义的先后顺序进行匹配、请求类型和请求URL同时匹配成功才会调用对应的处理函数。

## 路由最简单的用法

## 模块化路由
1、创建路由模块对应的.js文件
2、调用express。Route()函数创建路由对象
3、向路由对象上挂载具体的路由
4、使用module。exports向外共享路由对象
5、使用app.use()函数注册路由模块


ps:app.use()函数的作用，就是用来注册全局中间件的。
ps:注意，这里的app只是一个可自定义的变量名称，接收了express以后的变量，可以改成其他的。

## 为路由模块添加访问前缀
app.use('/api',router)
ps：那么请求该路由的地址也都要加上/api前缀


三、中间件
中间件：特指业务流程的处理环节。

## express中间件的调用流程
当一个请求到达express的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理。

## express中间件的格式
本质：function处理函数
ps:中间件的函数的形参列表中，必须包含next参数，二路由处理函数只包含req和res,next必须放到最后一个。

## next函数的作用
实现多个中间件连续调用的关键，表示把流转关系转交给下一个中间件或路由。

## 定义中间件函数

## 全局生效的中间件
客户端发起的任何请求到达服务器之后，都会触发的中间件。
app.use(中间件函数)

## 全局生效的中间件的简化形式

## 中间件的作用
多个中间件之间，共享一份req和res

## 定义多个中间件
可以使用app.use()连续定义多个全局中间件，请求到达服务器的时候，会按照中间件定义的顺序执行他们。

## 局部生效的中间件
局部生效的中间件：不使用aoo.use（）定义的中间件。

## 中间件的使用事项
1、一定要在路由之前定义中间件
2、客户端发送过来的请求，可以连续调用多个中间件进行处理
3、不要忘记调用next请求
4、只要调用了next()函数之后就不要写额外的代码了,类似return
5、多个中间件共享req和res对象

## 中间件的分类
应用级别中间件：凡是绑定到app实例上的中间件，都叫做应用级别的中间件。
路由级别中间件：绑定到express.Router()示例上的中间件。
错误级别中间件：专门来捕获整个项目中发生的错误，从而防止项目一场崩溃的问题，必须有4个形参，固定顺序：（err,req,res,next）。
Express内置中间件：
内置了三个常用的中间件：
1、express.static快速托管静态资源的内置中间件(无兼容性为题)；
2、express.json解析Json格式的请求体（有兼容性，仅>4.16.0+）;
3、express.urlencoded解析URL-encoded格式的请求体数据（有兼容性，仅>4.16.0+）。

ps:错误级别中间件要放到所有路由之后，否则会失效。

## 第三方中间件
例如：body-parser 解析请求体数据


## 自定义中间件
需求：解析post提交到服务器的数据
实现步骤：
1、定义中间件
2、监听req的data事件
3、监听req的end事件
4、使用querystring模块解析请求体数据
5、将解析出来的数据对象挂载为req.body
6、将自定义中间件封装为模块

三、CORS跨域问题相关
推荐使用CORS解决跨域问题

## 什么是cors（跨域资源共享）?
由一系列HTTP响应头组成，这些Http响应头决定了浏览器是否阻止前端js代码卡与获取资源。

## ACAO(Access-Control-Allow-Origin) 响应头
允许访问该资源的外域URL
例如：res.setHeader('Access-Control-Allow-Origin','http://xxx.com')

允许任何域的请求，使用通配符*
res.setHeader('Access-Control-Allow-Origin','*')

## ACAH(Access-Control-Allow-Headers) 响应头
默认情况下，CORS仅支持客户端向服务器端发送9个请求头，如果需要额外的则需要通过该属性新增

## ACAM(Access-Control-Allow-Methods) 响应头
如果需要使用PUT、DeLete等额外的请求方式，需要设置允许的请求方式
支持通配符。