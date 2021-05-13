// 克隆与合并，Object.assign
/**
 Object.assign(dest, [src1, src2, src3...])
 第一个参数 dest 是指目标对象。
 更后面的参数 src1, ..., srcN（可按需传递多个参数）是源对象。
 该方法将所有源对象的属性拷贝到目标对象 dest 中。换句话说，从第二个开始的所有参数的属性都被拷贝到第一个参数的对象中。
 调用结果返回 dest。
 */
let user = {name: "Peter"};
let permissions1 = {canEdit: true};
let permissions2 = {canView: true};

Object.assign(user, permissions1, permissions2);
console.log(user);


// 深拷贝
// lodash 中的 _.cloneDeep(obj)
