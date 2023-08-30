const express = require('express');
const bodyparser=require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:false}));
//express内置的express.urlencoded中间件就是基于body-parser这个第三方中间件进一步封装出来的。
 
app.post('/user', (req, res) => {
    console.log('调用了user接口'+req.body);
    res.send('User Page');
})

app.listen(80, () => {
    console.log('启动！');
})