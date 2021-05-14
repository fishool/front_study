/*
 解构赋值
 JavaScript 中最常用的两种数据结构是 Object 和 Array。
 解构赋值 是一种特殊的语法，
 它使我们可以将数组或对象“拆包”为到一系列变量中，
 因为有时候使用变量更加方便。
 解构操作对那些具有很多参数和默认值等的函数也很奏效。
 */

// 我们有一个存放了名字和姓氏的数组
let arr = ["Ilya", "Kantor"]
// 解构赋值
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
console.log(firstName);
console.log(surname);

// 不需要第二个元素
let [firstName1, , title2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title2);; // Consul

/*
转换对象
对象缺少数组存在的许多方法，例如 map 和 filter 等。

如果我们想应用它们，那么我们可以使用 Object.entries，然后使用 Object.fromEntries
使用 Object.entries(obj) 从 obj 获取由键/值对组成的数组。
对该数组使用数组方法，例如 map。
对结果数组使用 Object.fromEntries(array) 方法，将结果转回成对象。
例如，我们有一个带有价格的对象，并想将它们加倍：

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // 转换为数组，之后使用 map 方法，然后通过 fromEntries 再转回到对象
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
 */

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    // 转换为数组，之后使用 map 方法，然后通过 fromEntries 再转回到对象
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices.meat); // 8

let fromEntriesObj = Object.fromEntries(
    // Object.entries(user) = [ ["banana",1], ["orange",2], ["meat", 4] ]
    Object.entries(prices)
    // 数组解构 let [key, value] = ["banana",1];
        .map(([key, value]) => [key, value*2])

);
// orange
console.log(fromEntriesObj.orange);

