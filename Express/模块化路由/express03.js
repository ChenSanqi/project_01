// 创建基本的服务器
const express = require('express');

const app = express();

// 1、导入路由模块
const router = require('./expressrouter');
// 2、注册路由模块
app.use(router);

app.listen(80, () => {
    console.log('express server running');
})