<template>
  <div>
    <NavTab :tablist="tabList" :currIndex="currIndex" v-model="currIndex" cname="bg-white"></NavTab>
    <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10" :class="$style.scrollbox">
      <mt-loadmore :top-method="loadTop" ref="dynamic">
        <DynamicItem></DynamicItem>
        <ActivityItem></ActivityItem>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
  import {NavTab} from '@/components'
  import DynamicItem from '../components/dynamicItem.vue'
  import ActivityItem from '../components/activityItem.vue'

  export default {
    components: {
      DynamicItem,
      ActivityItem,
      NavTab
    },
    data() {
      return {
        currIndex: 0,
        tabList: ['关注', '广场', '附近']
      }
    },
    watch: {
      currIndex(value) {
        console.log(value)
      }
    },
    methods: {
      loadTop() {
        console.log(11)
        this.$refs.dynamic.onTopLoaded()
      },
      loadMore() {
        console.log(22)
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element.scss";

  .scrollbox {
    position: fixed;
    width: 100%;
    overflow-y: auto;
    background: #fff;
    top: 90px;
    bottom: 100px;
  }
</style>

<style>
  .mint-loadmore {
    min-height: 100%;
  }
</style>