<template>
  <div class="bg-white">
    <Header></Header>
    <GonggeList :list="listGg" cname="bsbottom"></GonggeList>
    <MenuList :list="listOne" cname="bsbottom"></MenuList>
    <MenuList :list="listTwo"></MenuList>
  </div>
</template>

<script>
  import {MenuList, GonggeList} from '@/components'
  import Header from './components/header.vue'

  export default {
    components: {
      MenuList,
      GonggeList,
      Header
    },
    data() {
      return{
        listGg: [
          {link: '/heartbeat', icon: require('../../assets/images/my/icon_heart@3x.png'), name: '我的心动', number: '99'},
          {link: '/', icon: require('../../assets/images/my/icon_message_big@3x.png'), name: '我的留言', number: '99'},
          {link: '/', icon: require('../../assets/images/my/icon_moment@3x.png'), name: '我的动态', number: '99'},
          {link: '/', icon: require('../../assets/images/my/icon_focus_h@3x.png'), name: '我的关注', number: '99'}
        ],
        listOne: [
          {link: '/', icon: require('../../assets/images/my/icon_counts@2x.png'), name: '我的账户'},
          {link: '/', icon: require('../../assets/images/my/icon_order@2x.png'), name: '我的订单'},
          {link: '/', icon: require('../../assets/images/my/icon_invite@2x.png'), name: '我的邀约'},
          {link: '/join', icon: require('../../assets/images/my/icon_superman@2x.png'), name: '我要做牛人'}
        ],
        listTwo: [
          {link: '/', icon: require('../../assets/images/my/icon_share@2x.png'), name: '分享赢金'},
          {link: '/', icon: require('../../assets/images/my/icon_money@2x.png'), name: '邀请牛人赚钱'},
          {link: '/', icon: require('../../assets/images/my/icon_tips@2x.png'), name: '意见反馈'}
        ]
      }
    }
  }
</script>

