// 函数绑定
/*
当将对象方法作为回调进行传递，例如传递给 setTimeout，这儿会存在一个常见的问题：“丢失 this”。
 */

let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};
setTimeout(user.sayHi, 1000); // Hello, undefined!


/*
解决方案 1：包装器
最简单的解决方案是使用一个包装函数：
 */
//现在它可以正常工作了，因为它从外部词法环境中获取到了 user (this指向函数调用方)，就可以正常地调用方法了。
setTimeout(() => user.sayHi(), 1000); // Hello, John!




// 函数绑定
/*
解决方案 2：bind
函数提供了一个内建方法 bind，它可以绑定 this。
基本的语法是：
// 稍后将会有更复杂的语法
let boundFunc = func.bind(context);

func.bind(context) 的结果是一个特殊的类似于函数的“外来对象（exotic object）”，
它可以像函数一样被调用，并且透明地（transparently）将调用传递给 func 并设定 this=context。
 */

let user2 = {
    firstName: "John22"
};

function func() {
    console.log(this.firstName);
}

let funcUser = func.bind(user2);
funcUser(); // John


/*
总结
方法 func.bind(context, ...args) 返回函数 func 的“绑定的（bound）变体”，它绑定了上下文 this 和第一个参数（如果给定了）。

通常我们应用 bind 来绑定对象方法的 this，这样我们就可以把它们传递到其他地方使用。例如，传递给 setTimeout。

当我们绑定一个现有的函数的某些参数时，绑定后的（不太通用的）函数被称为 partially applied 或 partial。

当我们不想一遍又一遍地重复相同的参数时，partial 非常有用。就像我们有一个 send(from, to) 函数，并且对于我们的任务来说，from 应该总是一样的，那么我们就可以搞一个 partial 并使用它。
 */


