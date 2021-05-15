// 使用 promise 进行错误处理
/*
Promise 链在错误（error）处理中十分强大。
当一个 promise 被 reject 时，控制权将移交至最近的 rejection 处理程序（handler）
 */
 new Promise((resolve, reject) => {
    reject("error");
    }).then(value => {
     console.log("then");
     console.log(value);
    }).catch(error=>{
     console.log("catch");
     console.log(error);
 })

/*
.catch 处理 promise 中的各种 error：在 reject() 调用中的，或者在处理程序（handler）中抛出的（thrown）error。
我们应该将 .catch 准确地放到我们想要处理 error，并知道如何处理这些 error 的地方。
处理程序应该分析 error（可以自定义 error 类来帮助分析）并再次抛出未知的 error（可能它们是编程错误）。
如果没有办法从 error 中恢复的话，不使用 .catch 也可以。
在任何情况下我们都应该有 unhandledrejection 事件处理程序（用于浏览器，以及其他环境的模拟），
以跟踪未处理的 error 并告知用户（可能还有我们的服务器）有关信息，以使我们的应用程序永远不会“死掉”。
 */
