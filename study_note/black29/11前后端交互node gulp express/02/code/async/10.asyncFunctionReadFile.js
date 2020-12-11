const fs = require('fs');
// 改造方法放在 util模块下
// 改造现有异步函数api 让其返回promise对象 从而支持异步函数语法
// readFile虽然是异步方法，但是其返回文件对象，所以无法返回默认Promise对象。 需要通过 promisefy 进行包装
const promisify = require('util').promisify;
// 调用promisify方法改造现有异步API 让其返回promise对象
const readFile = promisify(fs.readFile);

async function run () {
	let r1 = await readFile('./1.txt', 'utf8');
	let r2 = await readFile('./2.txt', 'utf8');
	let r3 = await readFile('./3.txt', 'utf8');
	console.log(r1)
	console.log(r2)
	console.log(r3)
}

run();

/**
 * node 运行环境中 没有dom 和 bom
 * Node中全局对象是global  有以下方法 可全局使用
 * console.log()
 * setTimeout()
 * clearTimeout()
 * setInterval()
 * clearInterval()
 *
 */
