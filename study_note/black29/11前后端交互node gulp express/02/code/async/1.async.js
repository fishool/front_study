console.log('before');

setTimeout(function (){
	console.log('last');
}, 2000)

console.log('after');

/**
 * 同步API: 只有当前API执行完成后，才能继续执行下一个API
 * 异步API: 并发执行。
 */