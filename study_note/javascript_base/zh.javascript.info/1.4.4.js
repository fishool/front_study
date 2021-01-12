function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log( user.ref.name ); // 结果是什么？

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

