
// 以module.exports为准
exports.name = 's'
exports.fuckyou = function() {
    console.log('fuckyou');
}

// module.exports  exports  默认是指向同一个空对象
// 最终对外暴露的对象 是module.exports
console.log(module.exports)
console.log(exports)
console.log(module.exports === exports)
