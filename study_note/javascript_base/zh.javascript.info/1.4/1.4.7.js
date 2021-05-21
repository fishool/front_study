/**
 * Symbol
 根据规范，对象的属性键只能是字符串类型或者 Symbol 类型。不
 是 Number，也不是 Boolean，只有字符串或 Symbol 这两种类型。


 let id1 = Symbol("id");
 let id2 = Symbol("id");

 alert(id1 == id2); // false
 */


let id1 = Symbol("1");
console.log(id1.toString());
console.log(id1.description);


/*
总结
Symbol 是唯一标识符的基本类型

Symbol 是使用带有可选描述（name）的 Symbol() 调用创建的。

Symbol 总是不同的值，即使它们有相同的名字。
如果我们希望同名的 Symbol 相等，
那么我们应该使用全局注册表：Symbol.for(key) 返回（如果需要的话则创建）一个以 key 作为名字的全局 Symbol。
使用 Symbol.for 多次调用 key 相同的 Symbol 时，返回的就是同一个 Symbol。

Symbol 有两个主要的使用场景：

“隐藏” 对象属性。 如果我们想要向“属于”另一个脚本或者库的对象添加一个属性，
我们可以创建一个 Symbol 并使用它作为属性的键。Symbol 属性不会出现在 for..in 中，
因此它不会意外地被与其他属性一起处理。并且，它不会被直接访问，因为另一个脚本没有我们的 symbol。
因此，该属性将受到保护，防止被意外使用或重写。

因此我们可以使用 Symbol 属性“秘密地”将一writable些东西隐藏到我们需要的对象中，但其他地方看不到它。

JavaScript 使用了许多系统 Symbol，这些 Symbol 可以作为 Symbol.* 访问。
我们可以使用它们来改变一些内置行为。例如，在本教程的后面部分，我们将使用 Symbol.iterator 来进行 迭代 操作，
使用 Symbol.toPrimitive 来设置 对象原始值的转换 等等。
 */
