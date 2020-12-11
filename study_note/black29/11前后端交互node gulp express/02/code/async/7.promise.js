const fs = require('fs');

/**
 * Promise出现目的是解决Node.js 异步编程中回调地狱的问题
 * resolve  执行成功函数 ，可将执行结果传递出去
 * reject   执行失败函数， 可将错误信息传递出去
 */
let promise = new Promise((resolve, reject) => {

	fs.readFile('./100.txt', 'utf8', (err, result) => {

		if (err != null) {
			reject(err);
		}else {
			resolve(result);
		}

	});

});

/**
 *  promise对象 then方法传入调用成功的回调函数
 * 				catch方法传入调用失败的回调函数
 */
promise.then((result) => {
	 console.log(result);
})
.catch((err)=> {
	console.log("错误");
})
