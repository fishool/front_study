// const fs = require('fs');
//
// // fs.readFile('./1.txt', 'utf8', (err, result1) => {
// // 	console.log(result1)
// // 	fs.readFile('./2.txt', 'utf8', (err, result2) => {
// // 		console.log(result2)
// // 		fs.readFile('./3.txt', 'utf8', (err, result3) => {
// // 			console.log(result3)
// // 		})
// // 	})
// // });
//
// function p1 () {
// 	return new Promise ((resolve, reject) => {
// 		fs.readFile('./1.txt', 'utf8', (err, result) => {
// 			resolve(result)
// 		})
// 	});
// }
//
// function p2 () {
// 	return new Promise ((resolve, reject) => {
// 		fs.readFile('./2.txt', 'utf8', (err, result) => {
// 			resolve(result)
// 		})
// 	});
// }
//
// function p3 () {
// 	return new Promise ((resolve, reject) => {
// 		fs.readFile('./3.txt', 'utf8', (err, result) => {
// 			resolve(result)
// 		})
// 	});
// }
//
// /**
//  * 三个API 需要三个Promise对象
//  *
//  */
//
// p1().then((r1)=> {
// 	console.log(r1);
// 	return p2();
// })
// .then((r2)=> {
// 	console.log(r2);
// 	return p3();
// })
// .then((r3) => {
// 	console.log(r3)
// })


function myfunction1() {
	return new Promise ((resolve, reject) => {
		// 异步任务
		console.log("pro=====myfunction1");
		resolve("resolve===myfunction1");
	})
}

function myfunction2() {
	return new Promise ((resolve, reject) => {
		// 异步任务
		console.log("pro=====myfunction2");
		resolve("resolve===myfunction2");


	})
}

function myfunction3() {
	return new Promise ((resolve, reject) => {
		// 异步任务
		console.log("pro=====myfunction3");
		resolve("resolve===myfunction3");

	})
}


myfunction1().then((data)=>{
	console.log(data);
	return myfunction2();
})
.then((data)=>{
	console.log(data);
	return myfunction3();
})
.then((data)=>{
	console.log(data);
	return data;
})
.then((data)=>{
	console.log(data);
	return	"111"
})
	.then((data)=>{
		console.log(data);
		return	"111"
	})
