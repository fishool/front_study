// 递归和堆栈
/*
Rest 参数与 Spread 语法

Math.max(arg1, arg2, ..., argN) —— 返回入参中的最大值。
Object.assign(dest, src1, ..., srcN) —— 依次将属性从 src1..N 复制到 dest。
 */

function sumAll(... value) {
    let sum = 0;
    for (let valueElement of value) {
        sum += valueElement;
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4, 5));
//  Rest 参数必须放到参数列表的末尾
/*
function f(arg1, ...rest, arg2) { // arg2 在 ...rest 后面？！
  // error
}
 */


// “arguments” 变量
function showName() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);

    // 它是可遍历的
    // for(let arg of arguments) alert(arg);
}
// 依次显示：2，Julius，Caesar
showName("Julius", "Caesar");
// 依次显示：1，Ilya，undefined（没有第二个参数）
showName("Ilya");

/*
箭头函数是没有 "arguments"
在过去，JavaScript 中没有 rest 参数，而使用 arguments 是获取函数所有参数的唯一方法。
现在它仍然有效，我们可以在一些老代码里找到它。
但缺点是，尽管 arguments 是一个类数组，也是可迭代对象，但它终究不是数组。
它不支持数组方法，因此我们不能调用 arguments.map(...) 等方法。
此外，它始终包含所有参数，我们不能像使用 rest 参数那样只截取入参的一部分。
因此，当我们需要这些功能时，最好使用 rest 参数。
 */


// Spread 语法
/*
Spread 语法 来帮助你了！它看起来和 rest 参数很像，也使用 ...，但是二者的用途完全相反。
当在函数调用中使用 ...arr 时，它会把可迭代对象 arr “展开”到参数列表中。
alert( Math.max(3, 5, 1) ); // 5
Math.max 希望你传入一个列表形式的数值型参数，而不是一个数组
let arr = [3, 5, 1];
alert( Math.max(arr) ); // NaN
 */
let arr = [3, 5, 1];
console.log(Math.max(...arr)); // 5（spread 语法把数组转换为参数列表）


/*
当我们在代码中看到 "..." 时，它要么是 rest 参数，要么就是 spread 语法。

有一个简单的方法可以区分它们：

若 ... 出现在函数参数列表的最后，那么它就是 rest 参数，它会把参数列表中剩余的参数收集到一个数组中。
若 ... 出现在函数调用或类似的表达式中，那它就是 spread 语法，它会把一个数组展开为列表。
使用场景：

Rest 参数用于创建可接受任意数量参数的函数。
Spread 语法用于将数组传递给通常需要含有许多参数的列表的函数。
 */
