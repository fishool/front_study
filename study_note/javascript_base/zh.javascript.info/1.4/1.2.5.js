console.log(typeof undefined);// "undefined"

console.log(typeof 0) // "number"

console.log(typeof 10n) // "bigint"

console.log(typeof true) // "boolean"

console.log(typeof "foo") // "string"

console.log(typeof Symbol("id")) // "symbol"

console.log(typeof Math )// "object"  (1)

console.log(typeof null )// "object"  (2)

console.log(typeof console.log )// "function"  (3)


// 运行时类型 7个
/**
 * undefined
 * JavaScript的代码undefined是一个变量，而并非是一个关键字，
 * 这是JavaScript语言公认的设计失误之一，所以，我们为了避免无意中被篡改，我建议使用 void 0 来获取undefined值。
 * null
 * 与 undefined 不同，null 是 JavaScript 关键字，所以在任何代码中，你都可以放心用 null 关键字来获取 null 值
 * boolean
 * string
 * 有最大长度是 2^53 - 1    其为UTF16编码
 * number
 * Symbol
 * object
 */


/**
 JavaScript中的几个基本类型，都在对象类型中有一个“亲戚”。它们是： 理解为数据类型的包装类
 Number；
 String；
 Boolean；
 Symbol。


 我们必须认识到 3 与 new Number(3) 是完全不同的值，它们一个是 number 基本类型， 一个是对象类型。
 JavaScript 语言设计上试图模糊对象和基本类型之间的关系，我们日常代码可以把对象的方法在基本类型上使用，比如：
 console.log("abc".charAt(0)); //a


 甚至我们在原型上添加方法，都可以应用于基本类型，比如以下代码，
 在 Symbol 原型上添加了hello方法，在任何 Symbol 类型变量都可以调用。
 Symbol.prototype.hello = () => console.log("hello");

 var a = Symbol("a");
 console.log(typeof a); //symbol，a并非对象
 a.hello(); //hello，有效
 */

Symbol.prototype.hello = () => {
    console.log("hello");
}
let aSymbol = Symbol("a");
aSymbol.hello();


let aNumber = new Number("3.2");
console.log(aNumber);

/**
 拆箱转换
 在JavaScript标准中，规定了 ToPrimitive 函数，它是对象类型到基本类型的转换（即，拆箱转换）
 */

