// require 获取到的就是对应 js module.exports 对象
const a = require('./04.module.exports.js');
// 每个js都是一个module
// require 获取到的是对应模块的 module.exports 对象
// console.log(a.greeting('zhangsan'));
console.log(a);
// 调用方法对象
a.fuckyou();
console.log(module)
