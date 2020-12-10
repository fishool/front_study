const fs = require('fs');
const path = require('path');

console.log(__dirname);
console.log(path.join(__dirname, '01.helloworld.js'))

fs.readFile(path.join(__dirname, '01.helloworld.js'), 'utf8', (err, doc) => {
	console.log(err)
	console.log(doc)
});

/**
 * 获取第三方模块        npm install formidable
 * npm install 模块名称 
 * 下载至 node_modules文件夹中
 * 
 * 
 * 移除第三方模块			npm uninstall package formidable
 * npm uninstall package 模块名
 * 
 * 
 * 第三方模块 nodemon 监控文件保持操作，进行js热更新, 在文件进行修改后 会再次执行该文件
 * npm install nodemon -g  全局安装
 * 在命令行工具中 使用nodemon命令替换node命令
 * 
 * 第三方模块 nrm  管理npm源下载地址
 * npm install nrm -g  全局安装
 * nrm ls 查询
 * nrm use 切换下载地址
 * 
 * gulp
 * npm install gulp
 * npm install gulp-cli -g
 * 
 * 
 *  package.json 文件
 *  项目描述文件，记录当前项目信息， 项目依赖的第三方模块
 *  使用 npm init 命令生成 		  npm init -y 使用默认参数生成
 * 	
 *  main: 项目主模块文件
 *  scripts: 命令别名
 * 
 *  只要package.json 文件存在  使用npm install xxx，模块依赖会自动写入package.json
 *  
 *  运行依赖:   即项目运行依赖   											dependencies
 *  开发依赖:   即项目开发阶段工具 如gulp  使用 npm install xxx --save-dev    devDependencies
 * 
 * 	npm install --production 只下载运行依赖
 * 
 * 	复习下maven scope
 * scope的分类

1.compile：默认值 他表示被依赖项目需要参与当前项目的编译，还有后续的测试，运行周期也参与其中，是一个比较强的依赖。打包的时候通常需要包含进去

2.test：依赖项目仅仅参与测试相关的工作，包括测试代码的编译和执行，不会被打包，例如：junit

3.runtime：表示被依赖项目无需参与项目的编译，不过后期的测试和运行周期需要其参与。与compile相比，跳过了编译而已。例如JDBC驱动，适用运行和测试阶段

4.provided：打包的时候可以不用包进去，别的设施会提供。事实上该依赖理论上可以参与编译，测试，运行等周期。相当于compile，但是打包阶段做了exclude操作

5.system：从参与度来说，和provided相同，不过被依赖项不会从maven仓库下载，而是从本地文件系统拿。需要添加systemPath的属性来定义路径


	package-lock.json 记录模块之间依赖记录， 记录各模块版本，防止下载其他版本

   

scripts: 命令别名     npm run build    ==  nodemon app.js
	"scripts": {
		"build": "nodemon app.js",
		"test":  "echo \"test\" && exit 1"
	}



nodejs中模块加载机制
1.  完整路径 require('./find.js');
2.  省略后缀 require(./find);
	先找同名js文件 再找同名js文件夹
    如果找到了同名文件夹，找文件夹中的index.js
	如果文件夹中没有index.js 就会去当前文件夹中的package.json 文件中找main选项中的入口文件
	如果入口文件不存在或者没有指定入口文件就会报错。

3.  省略路径和后缀 require('find');
	1. Node.js 会假设它是系统模块
	2. Node.js 会去node_modules文件中 
	   查看是否有该名字的JS文件，
	   再查找是否有该名字的文件夹 、如果有文件夹会去找index.js ，
	   如果没有就会去对应文件夹package.json 文件中找main选项中的入口文件。

	   
 */