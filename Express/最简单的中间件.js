const express = require('express');
const app = express();

//定义一个最简单的中间件函数
// const mv=function(req,res,next){
//     console.log('这是一个最简单的中间件函数');
//     // 把流转关系转交给下一个中间件或路由
//     next();
// }
// 将mv注册为全局生效的中间件
// app.use(mv);

//简化后的中间件
app.use((req, res, next) => {
    console.log('这是一个简化过的中间件函数');
    // 把流转关系转交给下一个中间件或路由
    next();
});

app.get('/', (req, res) => {
    console.log('调用了接口');
    res.send('Home');
})

app.get('/user', (req, res) => {
    console.log('调用了user接口');
    res.send('User Page');
})

app.listen(80, () => {
    console.log('启动！');
})