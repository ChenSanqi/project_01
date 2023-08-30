const express = require('express');
const app = express();

//注意，除了错误级别中间件，其他中间件必须都在路由之前进行配置。
//通过express.json()解析传递过来的json数据
app.use(express.json())

//通过express.urlencoded() 中间件，解析表单中的url-encoded格式的数据
app.use(express.urlencoded({ extended: false }))


//通过express.json()解析传递过来的json数据
app.post('/user', (req, res) => {
    //在服务器使用req.body属性，接收客户端发送过来的请求体数据
    //默认情况下如果不配置解析表单数据的中间件，则req.body默认等于undefined。
    const body = req.body;
    console.log('调用了user接口', +body);
    res.send('User Page');
})

//通过express.urlencoded() 中间件，解析表单中的url-encoded格式的数据
app.post('/book', (req, res) => {
    //在服务器使用req.body属性，接收客户端发送过来的请求体数据
    //默认情况下如果不配置解析表单数据的中间件，则req.body默认等于undefined。
    const body = req.body;
    console.log('调用了book接口', +body);
    res.send('Book Page');
})

app.listen(80, () => {
    console.log('启动！');
})