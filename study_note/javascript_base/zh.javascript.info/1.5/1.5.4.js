/*
 数组
 */

let firuts = ["apple", "banana", "orange",];
console.log(firuts[0]);
console.log(firuts[1]);
console.log(firuts[2]);

/**
 pop/push, shift/unshift 方法

 push 在末端添加一个元素.
 pop 从末端取出一个元素.
 shift 在头端取出一个元素.
 unshift 从末端添加一个元素.
 */
firuts.push("tail");
console.log(firuts);
console.log(firuts.pop());
console.log(firuts);

console.log("====  unshift =====");

firuts.unshift("head");
console.log(firuts);
console.log(firuts.shift());
console.log(firuts);


/**
 *
 性能
 push/pop 方法运行的比较快，而 shift/unshift 比较慢。
 */



/*
创建一个数组 styles，里面存储有 “Jazz” 和 “Blues”。
将 “Rock-n-Roll” 从数组末端添加进去。
用 “Classics” 替换掉数组最中间的元素。查找数组最中间的元素的代码应该适用于任何奇数长度的数组。
去掉数组的第一个值并显示它。
在数组前面添加 Rap 和 Reggae。
 */
console.log("=========");
let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
index = Math.floor(styles.length / 2);
styles[index] = "Classics";
console.log(styles);
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);

