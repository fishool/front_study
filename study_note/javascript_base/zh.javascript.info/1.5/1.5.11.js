/*
 JSON 方法，toJSONs
JSON 是一种数据格式，具有自己的独立标准和大多数编程语言的库。
JSON 支持 object，array，string，number，boolean 和 null。
JavaScript 提供序列化（serialize）成 JSON 的方法 JSON.stringify 和解析 JSON 的方法 JSON.parse。
这两种方法都支持用于智能读/写的转换函数。
如果一个对象具有 toJSON，那么它会被 JSON.stringify 调用。


JSON.stringify 将对象转换为 JSON。
JSON.parse 将 JSON 转换回对象。
 */

/*
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON 编码的对象：
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
// JSON.stringify 将对象转换为 JSON。
// JSON.parse 将 JSON 转换回对象。
let json = JSON.stringify(student);

console.log(typeof json);; // we've got a string!

console.log(json);;
