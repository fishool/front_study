/*
   数字类型
   let billion = 1e9;  // 10 亿，字面意思：数字 1 后面跟 9 个 0
   alert( 7.3e9 );  // 73 亿（7,300,000,000）\

   let ms = 1e-6; // 1 的左边有 6 个 0
 */

/*
toString(base)

Math.floor   地板
向下舍入：3.1 变成 3，-1.1 变成 -2。
Math.ceil    天花板
向上舍入：3.1 变成 4，-1.1 变成 -1。
Math.round
向最近的整数舍入：3.1 变成 3，3.6 变成 4，-1.1 变成 -1。
Math.trunc（IE 浏览器不支持这个方法）
移除小数点后的所有内容而没有舍入：3.1 变成 3，-1.1 变成 -1。


函数 toFixed(n) 将数字舍入到小数点后 n 位，并以字符串形式返回结果。
这会向上或向下舍入到最接近的值，类似于 Math.round
let num = 12.34;
alert( num.toFixed(1) ); // "12.3"


总结
要写有很多零的数字：

将 "e" 和 0 的数量附加到数字后。就像：123e6 与 123 后面接 6 个 0 相同。
"e" 后面的负数将使数字除以 1 后面接着给定数量的零的数字。例如 123e-6 表示 0.000123（123 的百万分之一）。
对于不同的数字系统：

可以直接在十六进制（0x），八进制（0o）和二进制（0b）系统中写入数字。
parseInt(str，base) 将字符串 str 解析为在给定的 base 数字系统中的整数，2 ≤ base ≤ 36。
num.toString(base) 将数字转换为在给定的 base 数字系统中的字符串。
要将 12pt 和 100px 之类的值转换为数字：

使用 parseInt/parseFloat 进行“软”转换，它从字符串中读取数字，然后返回在发生 error 前可以读取到的值。
小数：

使用 Math.floor，Math.ceil，Math.trunc，Math.round 或 num.toFixed(precision) 进行舍入。
请确保记住使用小数时会损失精度。
 */

/*
parseInt 和 parseFloat
它们可以从字符串中“读取”数字，直到无法读取为止。
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12，只有整数部分被返回了
alert( parseFloat('12.3.4') ); // 12.3，在第二个点出停止了读取
 */

// 判断 0.1 + 0.2  是否 等于 0.3 的正确方式
console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);


class Animal {
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log("my name"+this.name +"say");
    }
}

class Dog extends Animal{
    constructor(name) {
        super(name);
    }

    say() {
        console.log("bark~~~"+this.name);
    }
}

let d = new Dog('Mitzie');
d.say(); // Mitzie barks.



class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }

}
