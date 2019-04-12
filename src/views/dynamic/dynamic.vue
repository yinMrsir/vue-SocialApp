<template>
  <div>
    <NavTab :tablist="tabList" :currIndex="currIndex" v-model="currIndex" cname="bg-white"></NavTab>
    <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10" :class="$style.scrollbox">
      <mt-loadmore :top-method="loadTop" ref="dynamic">
        <div v-for="(item, index) in list" :key="index" >
          <DynamicItem v-if="item.type === 1" :item="item"></DynamicItem>
          <ActivityItem v-if="item.type === 2" :item="item"></ActivityItem>
        </div>
        <Loadings></Loadings>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {NavTab} from '@/components'
  import DynamicItem from '../components/dynamicItem.vue'
  import ActivityItem from '../components/activityItem.vue'
  import {Loadings} from '@/components'

  export default {
    components: {
      DynamicItem,
      ActivityItem,
      NavTab,
      Loadings
    },
    data() {
      return {
        currIndex: 0,
        tabList: ['关注', '广场', '附近'],
        list: []
      }
    },
    watch: {
      currIndex() {
        this.list = []
        this.getList()
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      async getList() {
        let {data: {list}} = await axios.get('/dynamic/getList')
        this.list = this.list.concat(list)
      },
      loadTop() {
        this.$refs.dynamic.onTopLoaded()
      },
      loadMore() {
        this.getList()
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element.scss";

  .scrollbox {
    position: fixed;
    width: 100%;
    max-width: 750px;
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