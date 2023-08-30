// 创建基本的服务器
const express = require('express');

//实例化
const app = express();


//挂载路由
// 监听get请求
app.get('/user',(req,res)=>{
    res.send({name:'zs',age:20})
})

app.get('/',(req,res)=>{
    // req.query属性默认是一个空对象，如果URL携带参数可以背其获取到
    console.log(req.query);
    res.send({name:'zs',age:20})
})

app.get('/user/:id',(req,res)=>{
    // 多个动态参数/:id/:name
    //:id表示一个动态参数
    //req.params属性可以获取到动态参数
    console.log(req.params);
    res.send(req.params)
})

// 监听post请求
app.post('/user',(req,res)=>{
    res.send('请求成功')
})

app.post('/user',(req,res)=>{
    
    res.send('请求成功')
})

//启动服务器
app.listen(80, () => {
    console.log('express server running');
})