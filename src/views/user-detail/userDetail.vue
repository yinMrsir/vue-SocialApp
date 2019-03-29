<template>
  <div>
    <Silder :list="list"></Silder>
    <UserInfo></UserInfo>
    <ActivityItem :cname="$style.btsolid"></ActivityItem>
    <UserDynamic></UserDynamic>
    <UserDetailFooter></UserDetailFooter>
  </div>
</template>

<script>
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
          {img: 'https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex'},
          {img: 'https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex'},
          {img: 'https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex'},
          {img: 'https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex'}
        ]
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