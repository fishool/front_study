// 变量作用域，闭包
/*
嵌套函数
当一个函数是在另一个函数中创建的时，那么该函数就被称为“嵌套”的。

function sayHiBye(firstName, lastName) {
  // 辅助嵌套函数使用如下
  function getFullName() {
    return firstName + " " + lastName;
  }
  alert( "Hello, " + getFullName() );
  alert( "Bye, " + getFullName() );
}

嵌套方法可以访问 外部变量
 */


let sum = function (firstVal) {
    return function (secondValue) {
        return firstVal + secondValue;
    }
}

console.log(sum(1)(2));


/*
全局对象包含应该在任何位置都可见的变量。

其中包括 JavaScript 的内建方法，例如 “Array” 和环境特定（environment-specific）的值，
例如 window.innerHeight — 浏览器中的窗口高度。

全局对象有一个通用名称 globalThis。

……但是更常见的是使用“老式”的环境特定（environment-specific）的名字，例如 window（浏览器）和 global（Node.js）。

仅当值对于我们的项目而言确实是全局的时，才应将其存储在全局对象中。并保持其数量最少。

在浏览器中，除非我们使用 modules，否则使用 var 声明的全局函数和变量会成为全局对象的属性。

为了使我们的代码面向未来并更易于理解，我们应该使用直接的方式访问全局对象的属性，如 window.x。
 */
