<template>
  <div :class="[$style.previewimg,'cu-modal', show ? 'show' : '']">
    <div :class="$style.box">
      <mt-swipe :auto="4000">
        <mt-swipe-item :class="$style.item">
          <img src="https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex">
        </mt-swipe-item>
        <mt-swipe-item :class="$style.item">
          <img src="https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex">
        </mt-swipe-item>
        <mt-swipe-item :class="$style.item">
          <img src="https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: Boolean
    }
  }
</script>

<style lang="scss" module>
  .previewimg {
    &:before {
      display: none;
    }
    .box {
      height: 100%;
      width: 100%;
      .item{
        display: flex;
        align-items: center;
      }
    }
  }
</style>