/**
 * 可选链 "?."
 * 不存在属性
 * 如果该元素不存在，则访问 null 的 .innerHTML 时会出错。
 * 在某些情况下，当元素的缺失是没问题的时候，我们希望避免出现这种错误，而是接受 html = null 作为结果
 *
 *
     let user = {};
     alert(user.address ? user.address.street : undefined);
     三目运算 ,  值存在的时候 , 取(user.address.street) , 不存在时 取undefined
 */



/*
总结
可选链 ?. 语法有三种形式：

obj?.prop —— 如果 obj 存在则返回 obj.prop，否则返回 undefined。
obj?.[prop] —— 如果 obj 存在则返回 obj[prop]，否则返回 undefined。
obj.method?.() —— 如果 obj.method 存在则调用 obj.method()，否则返回 undefined。
 */
