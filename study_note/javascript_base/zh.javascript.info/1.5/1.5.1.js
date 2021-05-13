console.log(typeof undefined);// "undefined"

console.log(typeof 0) // "number"

console.log(typeof 10n) // "bigint"

console.log(typeof true) // "boolean"

console.log(typeof "foo") // "string"

console.log(typeof Symbol("id")) // "symbol"

console.log(typeof Math )// "object"  (1)

console.log(typeof null )// "object"  (2)

console.log(typeof console.log )// "function"  (3)


/*
   原始类型的方法
    7 种原始类型: null, undefined, string, number, bigint, boolean, symbol
    1 种对象 jsonObject {}
    let john = {
        name: "john",
        age: 17,
        sayHello: function() {
            console.log("hello i am"+ this.name);
        }
    }
 */


/*
“对象包装器”对于每种原始类型都是不同的，它们被称为 String、Number、Boolean 和 Symbol
 null/undefined 没有任何方法
 */

/**
 *
 let str = "Hello";
 alert( str.toUpperCase() ); // HELLO
 以下是 str.toUpperCase() 中实际发生的情况：

 1. 字符串 str 是一个原始值。因此，在访问其属性时，会创建一个包含字符串字面值的特殊对象，并且具有有用的方法，例如 toUpperCase()。
 2. 该方法运行并返回一个新的字符串（由 alert 显示）。
 3. 特殊对象被销毁，只留下原始值 str。

 原始类型不是对象, 它们不能存储额外的数据。
 */
