const fs = require('fs')
// 读取
fs.readFile('./test1.txt', 'utf8', function (err, res) {

    if (err) {
        console.log(err);
        //如果err的结果是null说明读取成功，如果失败则为undefined
        return;
    } console.log(res);
})
// 写入
fs.writeFile('./test1.txt', 'abcd', 'utf8', function (err) {
    console.log(err);
})