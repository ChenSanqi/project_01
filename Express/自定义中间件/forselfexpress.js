const express = require('express');

const app = express();

//导入node内置querystring模块
const qs = require('querystring');

//1、定义中间件
app.use((req, res, next) => {
    //用来存储客户端发送给过来的请求体数据
    let str = '';
    //监听req对象的data事件
    req.on('data', (chunk) => {
        str += chunk
    })
    //监听req的end事件
    req.on('end', () => {
        //此时的str存放的是完整的请求体数据
        console.log(str);
        //TODO:把字符串格式的请求体数据，解析成对象格式
        //使用querystring模块处理查询字符串
        const body = qs.parse(str);
        req.body = body;
        next();
    })
})

app.post('/user', (req, res) => {
    res.send(req.body);
})

app.listen(80, () => {
    console.log('启动！');
})