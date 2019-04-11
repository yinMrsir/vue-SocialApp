<template>
  <div>
    <div :class="[$style.belletop, 'solid-bottom padding-top-sm']">
      <ul>
        <li>地区 <span class="icon-triangledownfill"></span></li>
        <li>类型 <span class="icon-triangledownfill"></span></li>
        <li>价格 <span class="icon-triangledownfill"></span></li>
        <li>筛选 <span class="icon-triangledownfill"></span></li>
      </ul>
    </div>
    <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10" :class="$style.scrollbox">
      <mt-loadmore :top-method="loadTop" ref="belle">
        <Item v-for="(item, index) in indexList" :key="index" :item="item"></Item>
      </mt-loadmore>
      <Loadings></Loadings>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Item from './components/item.vue'
  import {Loadings} from '@/components'

  export default {
    components: {
      Item,
      Loadings
    },
    data() {
      return {
        popupVisible4: true,
        numberSlot: [{
          flex: 1,
          defaultIndex: 0,
          values: [0, 1, 2, 3, 4, 5, 6],
          className: 'slot1'
        }],
        indexList: [],
        list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']]
      }
    },
    mounted() {},
    methods: {
      async loadTop() {
        this.indexList = []
        await this.getIndexList()
        this.$refs.belle.onTopLoaded()
      },
      loadMore() {
        this.getIndexList()
      },
      async getIndexList() {
        let {data: {list}} = await axios.get('/indexdata/getIndexList')
        this.indexList = this.indexList.concat(list)
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element.scss";

  .belletop {
    background: #fff;
    height: 100px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    z-index: 99;
    ul {
      @include list(row);
      li {
        flex: 1;
        font-size: 28px;
        color: #333;
        padding: 25px 0;
        text-align: center;
      }
    }
  }

  .scrollbox {
    position: fixed;
    width: 100%;
    max-width: 750px;
    overflow-y: auto;
    background: #fff;
    top: 100px;
    bottom: 100px;
  }
</style>
