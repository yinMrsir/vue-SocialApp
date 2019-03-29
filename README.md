# SocialAPP

基于vue-cli3.0构建的一个社交H5平台(自适应方案通过px2rem+lib-flexible自动转换，UI部分使用了mint-ui+colorUi)

## 简介
1、无需自己手动转化rem(假设750的设计稿，一个元素在设计稿中宽度是300px, 我们在页面中直接写300px即可，将自动为转化为rem)

2、项目中使用摒弃Scoped使用CSS Modules模块化更合理(https://vue-loader.vuejs.org/zh/guide/css-modules.html)

3、封装了部分布局公用组件(src/components)

4、页面都是使用模块化开发形式，当无需页面中某部分功能时移除对应的模块即可

### src文件夹结构
* src   - 代码编写的目录（该目录为使用WePY后的开发目录）
 	* assets 	 		- 静态文件
		* images
		* css
 	* components 		- 公共组件
		* index 		- 组件集合引用文件
	* mock  			- 接口模拟
	* view  			- 页面文件
		* components 	- 页面公用组件
	* App.vue
	* main.js
	* router.js
	* store.js

## 安装下载
```
git clone https://github.com/yinMrsir/SocialAPP.git
```

## 快速使用

### 安装依赖
```
npm install
```

### 启动
```
npm run serve
```

### 编译
```
npm run build
```
