<template>
  <div :class="[$style.previewimg,'cu-modal', show ? 'show' : '']" @click="hide">
    <div :class="$style.box" v-if="show">
      <mt-swipe :auto="0" :show-indicators="false" :defaultIndex="defaultIndex">
        <mt-swipe-item v-for="(item, index) in imgs" :key="index">
          <div :class="$style.item"
               :style="'background: url('+item+') no-repeat center center; background-size:100% auto;'"></div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: Boolean,
      imgs: {
        type: Array,
        default() {
          return []
        }
      },
      defaultIndex: {
        type: Number,
        default: 0
      }
    },
    methods: {
      hide() {
        this.show = false
        this.imgs = []
        this.defaultIndex = 0
      }
    }
  }
</script>

<style lang="scss" module>
  .previewimg {
    background: rgba(0,0,0,0.9);
    &:before {
      display: none;
    }
    .box {
      height: 100%;
      width: 100%;
      .item {
        height: 100%;
        width: 100%;
      }
    }
  }
</style>