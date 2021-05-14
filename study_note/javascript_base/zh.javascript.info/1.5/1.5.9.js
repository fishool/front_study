/*
 Object.keys，values，entries
 */

/*
Object.keys，values，entries
对于普通对象，下列这些方法是可用的：

Object.keys(obj) —— 返回一个包含该对象所有的键的数组。
Object.values(obj) —— 返回一个包含该对象所有的值的数组。
Object.entries(obj) —— 返回一个包含该对象所有 [key, value] 键值对的数组。
Object.keys/values/entries 会忽略 symbol 属性
 */

let user = {
    name: "John",
    age: 30
};

/*
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]
 */

/*
for in遍历的是数组的索引（即键名），
而for of遍历的是数组元素值。
 */

// 遍历所有的值
for (let value of Object.values(user)) {
    console.log(value);
}
