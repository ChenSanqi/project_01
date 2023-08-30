// 创建web服务器的基本步骤
// 1、导入http模块
const http = require('http');

// 2、创建web服务器实例
const server = http.createServer()

// 3、为服务器实例绑定request事件,监听客户端请求
server.on('request', (req, res) => {
    // req是请求随心，包含了客户端相关的数据和属性
    const url = req.url;
    const method = req.method;
    console.log(`Someone visit our web server.${url}${method}`);

    const str = 'xxxxxxxxxxxxxxxxxxxxxxxx';
    //为了防止中文乱码，需要设置Content-Type响应头为text/html; charset=utf-8
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.end(str);//向客户端发送内容并结束本次请求
})
// 4、启动服务器
server.listen(8080, function () {
    console.log('server running at http://127.0.0.1:8080');
})
