// Promise 链
new Promise((resolve, reject) => {
    resolve(1);
}).then(value => {
    return value*2;  //2
}).then(value => {
    return value + 1 //3
}).then(value => {
    console.log(value); //3
})

/*
初始 promise 后进行 resolve (*)，
然后 .then 处理程序（handler）被调用 (**)。
它返回的值被传入下一个 .then 处理程序（handler）(***)
……依此类推。
 */


/*
返回 promise
.then(handler) 中所使用的处理程序（handler）可以创建并返回一个 promise。
在这种情况下，其他的处理程序（handler）将等待它 settled 后再获得其结果（result）。
 */

// 1 → 2 → 4，但是现在在每次 alert 调用之间会有 1 秒钟的延迟
new Promise(resolve => {
    setTimeout(()=>{
        resolve(1)
    }, 1000);
}).then((value => {
    console.log(value);
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(value*2);
        }, 1000)
    })
})).then((value => {
    console.log(value);
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(value*2);
        }, 1000)
    })
})).then(value => {
    console.log(value);
})
