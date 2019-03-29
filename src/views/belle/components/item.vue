<template>
  <div :class="$style.belleitem">
    <router-link to="/userdetail" class="padding">
      <img :src="item.img" alt="">
      <div :class="[$style.right, 'justify-between']">
        <div :class="[$style.title, 'justify-between', 'align-center']">
          <h2 class="text-xl">{{item.userName}}</h2>
          <span>{{item.price}}元／{{item.tlong}}小时</span>
        </div>
        <div :class="$style.tags">
          <span v-for="(item1, index1) in item.tags" :key="index1">{{item1}}</span>
        </div>
        <div>
          {{item.age}}岁 | {{item.height}}cm | {{item.weight}}公斤 | {{item.work}}年工作经验
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../../assets/css/element.scss";

  .belleitem {
    position: relative;
    &:after{
      content: '';
      position: absolute;
      left: 30px;
      right: 30px;
      border-bottom:2px solid #E9E9E9;
      bottom: 0;
    }
    a {
      @include list(row);
      color: #999;
      text-decoration: none;
      > img {
        width: 214px;
        height: 154px;
        background: rgba(220, 220, 220, 1);
        border-radius: 4px;
        margin-right: 20px;
      }
      .right {
        flex: 1;
        text-align: left;
        padding-top: 10px;
        padding-bottom: 10px;
        @include list();
        .title {
          @include list(row);
          color: #FF4C62;
          h2 {
            color: #333333;
          }
        }
        .tags {
          span {
            @include tag();
          }
        }
      }
    }
  }
</style>