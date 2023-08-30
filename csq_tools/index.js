/*包的入口文件*/
const date=require('./src/dateFormat');
const escape=require('./src/htmlEscape');




//暴露共享成员
module.exports = {
    ...date,
    ...escape
}