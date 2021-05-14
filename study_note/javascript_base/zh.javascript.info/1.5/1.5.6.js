/*
 数组方法
 */
// splice 刪除数组元素
let arr = ["I", "study", "JavaScript"];
console.log(arr.splice(1, 1)); // 从索引 1 开始删除 1 个元素
console.log(arr); // ["I", "JavaScript"]


//arr.slice  arr.slice([start], [end])
//它会返回一个新数组，将所有从索引 start 到 end（不包括 end）的数组项复制到一个新的数组
let arr2 = ["t", "e", "s", "t"];
console.log(arr2.slice(1, 3)); // e,s（复制从位置 1 到位置 3 的元素）
console.log(arr2.slice(-2)); // s,t（复制从位置 -2 到尾端的元素）

/*
其中from可以省略
arr.indexOf(item, from) 从索引 from 开始搜索 item，如果找到则返回索引，否则返回 -1。
arr.lastIndexOf(item, from) —— 和上面相同，只是从右向左搜索。
arr.includes(item, from) —— 从索引 from 开始搜索 item，如果找到则返回 true（译注：如果没找到，则返回 false）。
 */

/*
find 和 findIndex
let result = arr.find(function(item, index, array) {
  // 如果返回 true，则返回 item 并停止迭代
  // 对于假值（falsy）的情况，则返回 undefined
});
 */

/*
find 方法搜索的是使函数返回 true 的第一个（单个）元素。
如果需要匹配的有很多，我们可以使用 arr.filter(fn)。
let results = arr.filter(function(item, index, array) {
  // 如果 true item 被 push 到 results，迭代继续
  // 如果什么都没找到，则返回空数组
});
 */

let users = [
    {id: 2, name: "John"},
    {id: 3, name: "Pete"},
    {id: 1, name: "Mary"}
];

// 返回前两个用户的数组
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers.length); // 2


/*
map
arr.map 方法是最有用和经常使用的方法之一。
它对数组的每个元素都调用函数，并返回结果数组。
 */
console.log(users.map(item => item.name));

/*
sort(fn)
arr.sort 方法对数组进行 原位（in-place） 排序，更改元素的顺序
这些元素默认情况下被按字符串进行排序。
 */
users.sort((item1, item2) => item1.id - item2.id);
console.log(users);

/*
reverse
arr.reverse 方法用于颠倒 arr 中元素的顺序。
 */
users.reverse();
console.log(users);


console.log("split 和 join");
console.log("split");
let names = 'Bilbo, Gandalf, Nazgul';
let splitStr = names.split(', ');
for (let name of splitStr) {
    console.log(`I am ${name}`);
}
let joinStr = splitStr.join('|');
console.log(joinStr);


/*
reduce
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
该函数一个接一个地应用于所有数组元素，并将其结果“搬运（carry on）”到下一个调用。
参数：
accumulator —— 是上一个函数调用的结果，第一次等于 initial（如果提供了 initial 的话）。
item —— 当前的数组元素。
index —— 当前索引。
arr —— 数组本身。
initial -- 初始化值
 */
let reduce = users.map(item => item.id)
    .reduce((sum, current)=> sum + current, 0);
console.log(reduce);

console.log(users.reduce((joinStrReduce, item) => joinStrReduce + item.name + "|", ""));

/*
总结
数组方法备忘单：
添加/删除元素：
push(...items) —— 向尾端添加元素，
pop() —— 从尾端提取一个元素，
shift() —— 从首端提取一个元素，
unshift(...items) —— 向首端添加元素，
splice(pos, deleteCount, ...items) —— 从 pos 开始删除 deleteCount 个元素，并插入 items。
slice(start, end) —— 创建一个新数组，将从索引 start 到索引 end（但不包括 end）的元素复制进去。
concat(...items) —— 返回一个新数组：复制当前数组的所有元素，并向其中添加 items。如果 items 中的任意一项是一个数组，那么就取其元素。
搜索元素：

indexOf/lastIndexOf(item, pos) —— 从索引 pos 开始搜索 item，搜索到则返回该项的索引，否则返回 -1。
includes(value) —— 如果数组有 value，则返回 true，否则返回 false。
find/filter(func) —— 通过 func 过滤元素，返回使 func 返回 true 的第一个值/所有值。
findIndex 和 find 类似，但返回索引而不是值。
遍历元素：

forEach(func) —— 对每个元素都调用 func，不返回任何内容。
转换数组：

map(func) —— 根据对每个元素调用 func 的结果创建一个新数组。
sort(func) —— 对数组进行原位（in-place）排序，然后返回它。
reverse() —— 原位（in-place）反转数组，然后返回它。
split/join —— 将字符串转换为数组并返回。
reduce/reduceRight(func, initial) —— 通过对每个元素调用 func 计算数组上的单个值，并在调用之间传递中间结果。
其他：

Array.isArray(arr) 检查 arr 是否是一个数组。
请注意，sort，reverse 和 splice 方法修改的是数组本身。
 */
