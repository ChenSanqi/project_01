一、初识node
1、为什么js可以在浏览器中被执行？
js解析引擎以及（内置API），chrome的v8引擎最好。

2、为什么js可以操作DOM和BOM？
每个浏览器都内置了DOM、Bom这样的API 函数，所以，浏览器中的js才可以调用它们。

3、什么是Node.js?
Node.js是一个基于chrome V8引擎的js运行环境。

ps:
1、浏览器是js的前端运行环境
2、node.js是js的后端运行环境。
3、node。js中无法调用Dom和Bom等浏览器内置API。

4、node.js可以做什么？
1、基于express框架，快速构建web应用
2、基于electron框架，构建平台桌面应用
3、基于restify框架，快速构建api接口项目

5、终端
专门为开发人员设计的，用于实现人机交互的一种方式。


6、在node.js环境中执行js代码
6.1、打开终端
6.2、node 要执行的js文件的路径

7、更方便的在node.js环境中执行js代码
要执行文件夹按shift 打开powershell

8、常用终端快捷键
1、使用上箭头，快速定位到上一命令
2、tab快速补全文件路径
3、esc快速清空输入



二、fs文件系统模块
1、什么是fs文件系统模块
fs模块是node.js官方提供的、用来操作文件的模块。

fs.readFile()，用来读取指定文件中的内容。
语法：fs.readFile(path[,options],callback);
参数options:以什么编码格式读取文件。

fs.writeFile(),用来向指定文件中写入内容。
语法：fs.writeFile(file,data[,options],callback);
参数options:以什么编码格式读取文件。


三、path路径模块
path路径模块：用来处理路径的模块

path.join([...paths]);
//用来将多个路径片段拼接成一v额完整的路径字符串。
path.basename(path[,ext]);
//用来从路径字符串中将文件名解析出来
path.extname(path);
//获取路径中的文件扩展名

四、http模块
http模块：用来创建web服务器的模块
通过http.createServer()方法创建服务

服务器和普通电脑的区别：服务器上安装了web服务器软件，例如IIS、Apache，通过安装这些服务器软件，就能把一台普通的电脑变成一台web服务器。

#IP地址
IP地址：互联网上每台计算机的唯一地址。

ping 网址 ：就能查看对应服务器的ip地址。

#域名和域名服务器
域名就是字符型的IP地址方案。
IP与域名一一对应的关系存放在一种名为域名服务器的电脑中。

#端口号
端口号：端口号类似于门牌号，通过端口号可以准确地将客户端发送过来的请求交给对应的web服务进行处理。
ps:
每个端口号不能同时被多个web服务占用。
URL中的80端口可以被省略。
