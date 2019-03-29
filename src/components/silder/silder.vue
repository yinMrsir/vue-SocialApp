<template>
  <div :class="[$style.swiperbox]">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in list" :key="index">
        <img :src="item.img" v-if="item.img">
        <span v-if="item.text">{{item.text}}</span>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss" module>
  .swiperbox {
    height: 420px;
  }
</style>