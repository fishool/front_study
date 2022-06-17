// npm install moment@2.22.2  安装指定版本号
// dependencies 核心依赖包 开发上线都会用到
// devDependencies 开发依赖包 ,只在开发期间会用到  npm install -D

const moment = require('moment');

let format = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(format);

// npm -g  全局依赖包  安装到全局的 node_modules文件夹下  工具性质的包 ,才需要全局安装(直接命令行使用)


