import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import './mock'
// px 转 rem换算
import 'lib-flexible'

import Mint from 'mint-ui'
Vue.use(Mint)
import { Swipe, SwipeItem, InfiniteScroll, Loadmore} from 'mint-ui'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(InfiniteScroll)
Vue.use(Loadmore)

// 自定义插件
import {previewImagePlugins} from './plugins'
Vue.use(previewImagePlugins)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
