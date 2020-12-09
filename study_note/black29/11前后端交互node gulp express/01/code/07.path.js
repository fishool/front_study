// public/uploads/avatar  路径拼接 根据当前系统获取对应拼接路径
const path = require('path');

// public/uploads/avatar
const finalPath = path.join('public', 'uploads','avatar');

console.log(finalPath);