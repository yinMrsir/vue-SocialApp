<template>
  <div :class="[$style.userItem, 'padding-bottom-lg']">
    <router-link to="/userdetail">
      <img :src="item.img" alt="">
      <h3 class="padding-top padding-bottom-sm align-center">{{item.userName}} &nbsp;&nbsp;<span v-for="(item1, index1) in item.tags" :key="index1">{{item1}}</span></h3>
      <p class="padding-bottom-lg">{{item.age}}岁 <i>|</i> {{item.height}}cm <i>|</i> {{item.weight}}公斤 <i>|</i> {{item.work}}年工作经验</p>
      <p :class="$style.iconbg">{{item.desc}}</p>
      <em>约他</em>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      item: Object,
      default() {
        return {}
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element";

  .userItem {
    text-align: left;
    position: relative;
    a{
      img {
        width: 100%;
      }
      h3 {
        @include flex(row);
        font-size: 30px;
        font-weight: bold;
        color: #333;
        span {
          @include tag();
        }
      }
      p{
        color: #999;
        i{
          padding: 0 15px;
        }
        &.iconbg{
          background: url("../../assets/images/icon_mark@3x.png") no-repeat left center;
          background-size: 24px 24px;
          padding-left: 35px;
        }
      }
      em {
        @include btn;
        position: absolute;
        width: 140px;
        right: 0;
        bottom: 40px;
      }
    }
  }
</style>