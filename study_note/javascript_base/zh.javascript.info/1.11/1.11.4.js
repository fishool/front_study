// 使用 promise API

/** 1.Promise.all */
//假设我们希望并行执行多个 promise，并等待所有 promise 都准备就绪。
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(value => {
    console.log(value);
}); // 1,2,3 当上面这些 promise 准备好时：每个 promise 都贡献了数组中的一个元素


/**2.Promise.allSettled*/
// 如果任意的 promise reject，
// 则 Promise.all 整个将会 reject。
// 当我们需要 所有 结果都成功时，它对这种“全有或全无”的情况很有用：
/*
Promise.allSettled 等待所有的 promise 都被 settle，无论结果如何。结果数组具有：
{status:"fulfilled", value:result} 对于成功的响应，
{status:"rejected", reason:error} 对于 error。
 */


/*
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });
 */

/*
[
  {status: 'fulfilled', value: ...response...},
  {status: 'fulfilled', value: ...response...},
  {status: 'rejected', reason: ...error object...}
]
 */



/*
Promise.race
与 Promise.all 类似，但只等待第一个 settled 的 promise 并获取其结果（或 error）。

语法：

let promise = Promise.race(iterable);
例如，这里的结果将是 1：

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
 */
Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log, console.log); // 1


/*
Promise 处理始终是异步的，
因为所有 promise 行为都会通过内部的 “promise jobs” 队列，也被称为“微任务队列”（ES8 术语）。
因此，.then/catch/finally 处理程序（handler）总是在当前代码完成后才会被调用。
如果我们需要确保一段代码在 .then/catch/finally 之后被执行，我们可以将它添加到链式调用的 .then 中。
在大多数 JavaScript 引擎中（包括浏览器和 Node.js），微任务（microtask）的概念与“事件循环（event loop）”和“宏任务（macrotasks）”紧密相关。由于这些概念跟 promise 没有直接关系，所以我们将在本教程另外一部分的 事件循环：微任务和宏任务 一章中对它们进行介绍。
 */
