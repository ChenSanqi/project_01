// 中间件的作用
// 定义多个全局中间件

const express = require('express');
const app = express();

//简化后的中间件
//定义第一个全局中间件
app.use((req, res, next) => {
    //获取请求到达服务器的时间
    const time=Date.now();
    //为req对象挂载自定义属性，从而把时间共享给后面的所有路由
    req.startTime=time;
    next();
});

//定义第二个全局中间件
app.use((req, res, next) => {
    next();
});

app.get('/', (req, res) => {
    res.send('Home'+req.startTime);
})

app.get('/user', (req, res) => {
    res.send('User Page'+req.startTime);
})

app.listen(80, () => {
    console.log('启动！');
})