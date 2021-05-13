function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();
// makeUser() 中的 this 的值是 undefined
console.log( user.ref.name ); // 结果是什么？


function makeUser2() {
    return {
        name: "John",
        ref() {
            return this;
        }
    }
}

let user2 = makeUser2();

console.log( user2.ref().name ); // 结果是什么？


// =================

let calculator = {
    // ……你的代码……
    number1: 1,
    number2: 2,
    sum: function () {
        return this.number1 + this.number2;
    },
    mul: function () {
        return this.number1 * this.number2;
    }
};

console.log( calculator.sum() );
console.log( calculator.mul() );

/**
 *
 this 的值是在程序运行时得到的。

 一个函数在声明时，可能就使用了 this，但是这个 this 只有在函数被调用时才会有值。
 可以在对象之间复制函数。
 以“方法”的语法调用函数时：object.method()，调用过程中的 this 值是 object。
 请注意箭头函数有些特别：它们没有 this。在箭头函数内部访问到的 this 都是从外部获取的。
 */
