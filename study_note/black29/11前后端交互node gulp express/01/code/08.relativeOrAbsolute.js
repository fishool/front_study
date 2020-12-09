const fs = require('fs');
const path = require('path');

console.log(__dirname);
console.log(path.join(__dirname, '01.helloworld.js'))

fs.readFile(path.join(__dirname, '01.helloworld.js'), 'utf8', (err, doc) => {
	console.log(err)
	console.log(doc)
});

/**
 * 获取第三方模块        npm install formidable
 * npm install 模块名称 
 * 下载至 node_modules文件夹中
 * 
 * 
 * 移除第三方模块			npm uninstall package formidable
 * npm uninstall package 模块名
 * 
 * 
 * 第三方模块 nodemon 监控文件保持操作，进行js热更新, 在文件进行修改后 会再次执行该文件
 * npm install nodemon -g  全局安装
 * 在命令行工具中 使用nodemon命令替换node命令
 * 
 * 第三方模块 nrm  管理npm源下载地址
 * npm install nrm -g  全局安装
 * nrm ls 查询
 * nrm use 切换下载地址
 * 
 * gulp
 * 
 */