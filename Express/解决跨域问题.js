const express = require('express');
const app = express();

//一定要在路由之前配置cors这个中间件，从而解决接口跨域的问题。
const cors = require('cors'); 
app.use(cors());

app.get('/user', (req, res) => {
    console.log('调用了user接口');
    res.send('User Page');
})

app.post('/userpost', (req, res) => {
    console.log('调用了userpost接口');
    res.send('Userpost Page');
})

app.listen(80, () => {
    console.log('启动！');
})