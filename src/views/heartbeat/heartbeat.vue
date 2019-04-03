<template>
  <div>
    <NavTab :tablist="['我心动的','心动我的']" v-model="currIndex" :fixed="true"></NavTab>
    <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10" :class="$style.scrollbox">
      <mt-loadmore :top-method="loadTop" ref="dynamic">
        <div v-if="currIndex === 0">
          <Gen v-for="(item, index) in genList" :key="'gen'+index" :item="item"></Gen>
        </div>
        <div v-else>
          <Aid v-for="(item, index) in aidList" :key="'aid'+index" :item="item"></Aid>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
  import {NavTab} from '@/components'
  import Gen from './components/gen.vue'
  import Aid from './components/aid.vue'

  const genList = [], aidList = []
  for (let i = 0; i < 10; i++) {
    genList.push({
      avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ1db8KNIWRibp4KBYMSmvQDiaLL7ACepGWuLmdkwyyzxBwo0Dz94SjAB7eiappNZ6NQDguLFhO4Lv6A/132',
      nickName: '战三',
      sexName: '男',
      age: 22
    })
    aidList.push({
      avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ1db8KNIWRibp4KBYMSmvQDiaLL7ACepGWuLmdkwyyzxBwo0Dz94SjAB7eiappNZ6NQDguLFhO4Lv6A/132',
      nickName: '战三',
      sexName: '男',
      age: 22,
      status: 0,
      rewardStatus: 1
    })
  }

  export default {
    components: {
      NavTab,
      Gen,
      Aid
    },
    data() {
      return {
        currIndex: 1,
        genList,
        aidList
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

<style module>
  .scrollbox {
    position: fixed;
    width: 100%;
    overflow-y: auto;
    top: 90px;
    bottom: 0;
  }
</style>