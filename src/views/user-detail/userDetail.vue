<template>
  <div>
    <Silder :list="list"></Silder>
    <UserInfo></UserInfo>
    <ActivityItem :cname="$style.btsolid"></ActivityItem>
    <UserDynamic :dynamicList="dynamicList"></UserDynamic>
    <UserDetailFooter></UserDetailFooter>
  </div>
</template>

<script>
  import axios from 'axios'
  import {Silder} from '@/components'
  import ActivityItem from '../components/activityItem.vue'
  import UserInfo from './components/userinfo.vue'
  import UserDynamic from './components/userDynamic.vue'
  import UserDetailFooter from './components/userDetailFooter.vue'

  export default {
    components: {
      Silder,
      UserDynamic,
      UserInfo,
      ActivityItem,
      UserDetailFooter
    },
    data() {
      return {
        list: [
          {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000654958&di=7eb320c5334d1eb393f88c94add51efb&imgtype=0&src=http%3A%2F%2Fs11.sinaimg.cn%2Fmw690%2F006hikKrzy7slvkud5g2a%26690'},
          {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000634961&di=324c5e9f167c63e3b08db48fd78cd30c&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fnews%2Fpics%2Fhv1%2F114%2F82%2F2182%2F141905574.jpg'},
          {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000580696&di=3a8dab2cde437e540de730adfd5a8c11&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F006hikKrzy7sly9Fzoeb2%26690'}
        ],
        dynamicList: []
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      async getList() {
        let {data: {list}} = await axios.get('/dynamic/getList')
        list = list.filter(value => value.type === 1)
        this.dynamicList = this.dynamicList.concat(list)
      }
    }
  }
</script>

<style module>
  .btsolid {
    border-top: #F6F6F6 solid 20px;
    background: #fff;
  }
</style>