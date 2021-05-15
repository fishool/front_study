// Async/await

async function f() {
    return 10086;
}

/*
在函数前面的 “async” 这个单词表达了一个简单的事情：
即这个函数总是返回一个 promise。其他值将自动被包装在一个 resolved 的 promise 中。
 */
f().then(value => {
    console.log(value);
})

//Await
// 只在 async 函数内工作
// let value = await promise;
// 关键字 await 让 JavaScript 引擎等待直到 promise 完成（settle）并返回结果。

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise; // 等待，直到 promise resolve (*)
    console.log(result);; // "done!"
}
f();



// 1.不能在普通函数中使用 await (函数前面写 async 关键字)
// 2. await 不能在顶层代码运行 ()
/*
    // 用在顶层代码中会报语法错误
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();

(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  ...
})();
 */

// 立即执行函数
(async ()=>{
    let myPro= new Promise(resolve => {
        setTimeout(()=>{
            resolve("timeout")
        }, 1000)
    })
    // 等待promise  settle  并获取value
    let value = await myPro;
    console.log(value);
})();



/*
用 async/await 来重写
重写下面这个来自 Promise 链 一章的示例代码，使用 async/await 而不是 .then/catch：

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404
 */
const fetch = require('node-fetch');
function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.toString;
            } else {
                throw new Error(response.status);
            }
        });
}

loadJson('http://www.baidu11111.com')
    .catch(console.log); // Error: 404

async function loadJson22() {
    let result = await fetch(url);
    if (result.status == 200) {
        return result.toString;
    } else {
        throw new Error(response.status);
    }
}
loadJson22('http://www.baidu11111.com')
    .catch(console.log); // Error: 404
