import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Layout',
      component: Layout,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'index',
          nameText: '首页',
          icon: require('./assets/images/icon_home_n@3x.png'),
          iconActive: require('./assets/images/icon_home_h@3x.png'),
          alwaysShow: true,
          meta: {
            title: '首页'
          },
          component: () => import('./views/index/index.vue')
        },
        {
          path: '/belle',
          name: 'belle',
          nameText: '美女',
          icon: require('./assets/images/icon_beauty_n@3x.png'),
          iconActive: require('./assets/images/icon_beauty_h@3x.png'),
          alwaysShow: true,
          meta: {
            title: '美女'
          },
          component: () => import('./views/belle/belle.vue')
        },
        {
          path: '/dynamic',
          name: 'dynamic',
          nameText: '动态',
          icon: require('./assets/images/icon_moment_n@3x.png'),
          iconActive: require('./assets/images/icon_moment_h@3x.png'),
          alwaysShow: true,
          meta: {
            title: '动态'
          },
          component: () => import('./views/dynamic/dynamic.vue')
        },
        {
          path: '/my',
          name: 'my',
          nameText: '我的',
          icon: require('./assets/images/icon_mine_n@3x.png'),
          iconActive: require('./assets/images/icon_mine_h@3x.png'),
          alwaysShow: true,
          meta: {
            title: '我的'
          },
          component: () => import('./views/my/my.vue')
        }
      ]
    },
    {
      path: '/userdetail',
      name: 'userdetail',
      meta: {
        title: '详情'
      },
      component: () => import('./views/user-detail/userDetail.vue')
    },
    {
      path: '/appointment',
      name: 'appointment',
      meta: {
        title: '预约时间'
      },
      component: () => import('./views/appointment/appointment.vue')
    },
    {
      path: '/join',
      name: 'join',
      meta: {
        title: '我要入驻'
      },
      component: () => import('./views/join/join.vue')
    },
    {
      path: '/heartbeat',
      name: 'heartbeat',
      meta: {
        title: '我的心动'
      },
      component: () => import('./views/heartbeat/heartbeat.vue')
    }
  ]
})
