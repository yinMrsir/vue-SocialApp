<template>
  <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10" :class="$style.scrollbox">
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <Swiperbox></Swiperbox>
      <Ilist :indexList.sync="indexList" :tabList.sync="tabList" :currIndex="currIndex" @changeTab="changeTab"
             cname="bstop"></Ilist>
      <Loadings></Loadings>
    </mt-loadmore>
  </div>
</template>

<script>
  import axios from 'axios'
  import Swiperbox from './components/swiperbox.vue'
  import Ilist from './components/ilist.vue'
  import {Loadings} from '@/components'

  export default {
    components: {
      Swiperbox,
      Ilist,
      Loadings
    },
    data() {
      return {
        indexList: [],
        tabList: [
          {text: '娱乐'},
          {text: '商务'},
          {text: '公关'},
          {text: 'DJ'},
          {text: '模特'},
          {text: '模特2'},
        ],
        currIndex: 0
      }
    },
    mounted() {
      this.getIndexList()
    },
    methods: {
      async getIndexList() {
        let {data: {list}} = await axios.get('/indexdata/getIndexList')
        this.indexList = this.indexList.concat(list)
      },
      changeTab(index) {
        this.currIndex = index
        this.indexList = []
        this.getIndexList()
      },
      /**
       * 下拉刷新
       * @param fn
       * @returns {Promise<void>}
       */
      async loadTop() {
        this.indexList = []
        await this.getIndexList()
        this.$refs.loadmore.onTopLoaded()
      },
      /**
       * 页面到达底部加载数据
       */
      loadMore() {
        this.getIndexList()
      }
    }
  }
</script>

<style module>
  .scrollbox {
    position: fixed;
    width: 100%;
    max-width: 750px;
    overflow-y: auto;
    background: #fff;
    top: 0;
    bottom: 100px;
  }
</style>

<style>
  .mint-loadmore-top {
    transform: translateY(-25px);
  }
</style>

