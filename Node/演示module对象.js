console.log(module);

console.log(module.exports);

console.log(exports);

// 在外界使用require()方法导入自定义模块时，得到的就是module.exports对象
const m1=require('./fslearn');

//想要共享成员,module.exports={}