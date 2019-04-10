# vue-SocialAPP

基于vue-cli3.0构建的一个社交H5平台(自适应方案通过px2rem+lib-flexible自动转换，UI部分使用了mint-ui+colorUi)

## 简介

1、无需自己手动转化rem(假设750的设计稿，一个元素在设计稿中宽度是300px, 我们在页面中直接写300px即可，将自动为转化为rem)

2、项目中使用摒弃Scoped使用CSS Modules模块化更合理(https://vue-loader.vuejs.org/zh/guide/css-modules.html)

3、封装了部分布局公用组件(文档：https://yinmrsir.github.io/vue-sociaApp-doc/index.html)

4、页面都是使用模块化开发形式，当无需页面中某部分功能时移除对应的模块即可

预览地址(建议使用谷歌按F12预览)：https://yinmrsir.github.io/vue-SocialApp/index.html#/

### 文件夹结构
```
├─ src                                      // 代码编写的目录
│  ├─ assets                                // 静态文件
│  │  ├─ css                                // 公共css
│  │  └─ images                             // 图片文件
│  ├─ components                            // 公共组件(注意此目录的组件保证迁移到其他项目也可以使用)
│  │  ├─ bottomModal
│  │  │	 └─ bottomModal.vue                 // bottomModal组件
│  │  └─ index.js                           // 组件集合引用文件
│  ├─ mock                                  // 定义模拟目录
│  │  └─ index.js                           // 接口模拟入口文件
│  ├─ view                                  // 页面文件
│  │  ├─ components                         // 页面公用组件
│  │  ├─ index
│  │  │  ├─ components                      // index页面组件
│  │  │  └─ index.vue                       // 首页
│  ├─ router.js                             // 路由定义
│  ├─ permission.js                         // 路由守卫权限控制
│  ├─ store.js                              // vuex配置
│  ├─ App.vue                               // 页面入口文件
│  └─ main.js                               // 程序入口文件
├─ .babel.config.js                         // ES6语法编译配置
├─ .gitignore                               // git 忽略项
├─ .postcssrc.config.js
├─ README.md                                // README
└─ package.json                             // 配置依赖
```

## 安装下载

```
git clone https://github.com/yinMrsir/vue-SocialApp.git
```

## 快速使用

```
# 安装依赖

npm install

# 启动

npm run serve

# 编译

npm run build
```

## 交流 & 提问

QQ交流群: 411121858

提问：https://github.com/yinMrsir/vue-SocialApp/issues

## 关于vue-SocialAPP

对于当前项目只是用于学习交流，当前还在开发阶段，欢迎大家提出宝贵的意见和建议，还有你们的star哦~
