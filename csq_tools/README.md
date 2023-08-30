## 安装
```
npm install csq-tools
```

## 导入
```js
const csq=require('csq-tools')
```

## 格式化时间
```js
const dtstr=csq.dateFormat(new Date());
// 2023-08-29 21:46:08
```

## 转义 HTML 中的特殊字符
```js
const htmlstr='待转换的字符串';
const str=csq.htmlEscape(htmlstr);
```

## 还原 HTML 中的特殊字符
```js
const htmlstr='待还原的字符串';
const str=csq.htmlunEscape(htmlstr);
```

## 开源协议
ISC