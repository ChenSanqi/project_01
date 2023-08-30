const express = require('express');
const bodyparser = require('./custom-body-parser');

const app = express();


//将自定义中间件，注册为全局可用的中间件
app.use(bodyparser)

app.post('/user', (req, res) => {
    res.send(req.body);
})

app.listen(80, () => {
    console.log('启动！');
})