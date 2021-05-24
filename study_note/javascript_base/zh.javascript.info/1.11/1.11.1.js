// 简介：回调

// 异常处理
try{
    alert('Start of try runs');  // (1) <--
}catch (err) {
    console.log("发生异常");
    console.log(err.toString());
}

/*
回调函数:
    函数A作为函数B的入参
    在函数B执行完毕后 执行函数A
 */


//Promise
/*
let promise = new Promise(function(resolve, reject) {
  // executor（生产者代码，“歌手”）  resolve 和 reject 是由 JavaScript 自身提供的回调
  // executor 会自动运行并尝试执行一项工作。尝试结束后，如果成功则调用 resolve，如果出现 error 则调用 reject。
});
 */


/*
由 new Promise 构造器返回的 promise 对象具有以下内部属性：
state — 最初是 "pending"，然后在 resolve 被调用时变为 "fulfilled"，或者在 reject 被调用时变为 "rejected"。
result — 最初是 undefined，然后在 resolve(value) 被调用时变为 value，或者在 reject(error) 被调用时变为 error。
 */

/*
通过运行上面的代码，我们可以看到两件事儿：
executor 被自动且立即调用（通过 new Promise）。
executor 接受两个参数：resolve 和 reject。这些函数由 JavaScipt 引擎预先定义，因此我们不需要创建它们。
我们只需要在准备好（译注：指的是 executor 准备好）时调用其中之一即可。
 */

/*
这儿只能有一个结果或一个 error
executor 只能调用一个 resolve 或一个 reject。任何状态的更改都是最终的。
所有其他的再对 resolve 和 reject 的调用都会被忽略：
 */

/*
state 和 result 都是内部的
Promise 对象的 state 和 result 属性都是内部的。
我们无法直接访问它们。但我们可以对它们使用 .then/.catch/.finally 方法。我们在下面对这些方法进行了描述。
 */

/*
.then 的第一个参数是一个函数，该函数将在 promise resolved 后运行并接收结果。
.then 的第二个参数也是一个函数，该函数将在 promise rejected 后运行并接收 error。
 */

//then
let firstPro = new Promise((resolve, reject) => {
    resolve("ok222");
}).then((value => {
    console.log(value);}),
    (error => {
        console.log(error);
    }))


// catch
/**
 * 如果我们只对 error 感兴趣，那么我们可以使用 null 作为第一个参数：.then(null, errorHandlingFunction)。
 * 或者我们也可以使用 .catch(errorHandlingFunction)，其实是一样的：
 */

new Promise(((resolve, reject) => {
    reject("fuck");
})).catch(error=>{
    console.log(error);
})


//finally
/*
.finally(f) 调用与 .then(f, f) 类似，在某种意义上，
f 总是在 promise 被 settled 时运行：即 promise 被 resolve 或 reject
 */


var r = new Promise(function(resolve, reject){
    console.log("a");
    resolve()
});
setTimeout(()=>console.log("d"), 0)
r.then(() => console.log("c"));
console.log("b")

/**
 *
 微任务始终先于宏任务
 Promise 产生的是 JavaScript 引擎内部的微任务，而 setTimeout 是浏览器 API，它产生宏任务。
 */


/*
我们可以总结一下如何分析异步执行的顺序：

首先我们分析有多少个宏任务；
在每个宏任务中，分析有多少个微任务；
根据调用次序，确定宏任务中的微任务执行次序；
根据宏任务的触发规则和调用次序，确定宏任务的执行次序；
确定整个顺序。
 */
