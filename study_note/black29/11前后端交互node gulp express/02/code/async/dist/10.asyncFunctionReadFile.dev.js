"use strict";

var fs = require('fs'); // 改造方法放在 util模块下
// 改造现有异步函数api 让其返回promise对象 从而支持异步函数语法   
// readFile虽然是异步方法，但是其返回文件对象，所以无法返回默认Promise对象。 需要通过 promisefy 进行包装


var promisify = require('util').promisify; // 调用promisify方法改造现有异步API 让其返回promise对象


var readFile = promisify(fs.readFile);

function run() {
  var r1, r2, r3;
  return regeneratorRuntime.async(function run$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(readFile('./1.txt', 'utf8'));

        case 2:
          r1 = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(readFile('./2.txt', 'utf8'));

        case 5:
          r2 = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(readFile('./3.txt', 'utf8'));

        case 8:
          r3 = _context.sent;
          console.log(r1);
          console.log(r2);
          console.log(r3);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
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