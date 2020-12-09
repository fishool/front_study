//const a = require('./03.module-a.js');    .js 可省略
// 引入a.js的exports 對象
const a = require('./03.module-a');
console.log(a.add(10, 200));