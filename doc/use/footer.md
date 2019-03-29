# Footer

## 引用组件
```
import {Footer} from '@/components'

export default {
	components: {
	  Footer
	}
}
```

## 使用
该组件数据直接在路由中获取，并确保按以下参数传递
```
export default new Router({
  routes: [
    {
      path: '',
      name: 'Layout',
      component: Layout,
      redirect: '/',
      children: [
        {
          path: '/',													// 路径
          name: 'index',												// 组件名
          nameText: '首页',												// 底部显示的文案
          icon: require('./assets/images/icon_home_n@3x.png'),			// 默认图标
          iconActive: require('./assets/images/icon_home_h@3x.png'),	// 激活图标
          alwaysShow: true,												// 是否在底部显示
          component: () => import('./views/index/index.vue')			// 对应View
        },
        ...
      ]
    }
  ]
})
```

