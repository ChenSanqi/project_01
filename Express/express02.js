// 创建基本的服务器
const express = require('express');

const app = express();

//对外提供静态资源，将Ajax整个文件夹作为共享
//Ajax文件夹的名称不出现在路径中
app.use(express.static('../Ajax'))

app.listen(80, () => {
    console.log('express server running');
})

