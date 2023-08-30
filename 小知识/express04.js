


// ...express省略代码

app.use((err, req, res, next) => {
    //这次错误是由token解析失败导致的
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: 401,
            message: '无效的token'
        })
    }
    return res.send({
        status: 500,
        message: '位置错误'
    })
})