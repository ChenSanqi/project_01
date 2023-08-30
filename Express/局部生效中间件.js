const express = require('express');
const app = express();

//定义一个最简单的中间件函数
//局部生效中间件
//第一个局部生效中间件
const mv=function(req,res,next){
    console.log('这是一个局部生效的中间件1函数');
    // 把流转关系转交给下一个中间件或路由
    next();
}
//第二个局部生效中间件
const mv1=function(req,res,next){
    console.log('这是一个局部生效的中间件2函数');
    // 把流转关系转交给下一个中间件或路由
    next();
}

//局部生效
app.get('/',mv,mv1, (req, res) => {
    console.log('调用了Home接口');
    res.send('Home');
})
app.get('/my',[mv,mv1], (req, res) => {
    console.log('调用了My接口');
    res.send('My');
})

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