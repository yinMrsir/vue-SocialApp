<template lang="pug">
  .items-aid
    .list-item
      .item-left
        img(:src="item.avatar")
      .item-center
        .name {{item.nickName}}
        .sex {{item.sexName}} | {{item.age}}岁
        .desc 有点动心了，快打赏一个哟～
      .item-right
        .go {{item.status === -1 ? '已拒绝' : item.status === 2 ? '已接受' : '接受'}}
    .bottom(v-if="item.status === 0 || item.status === 1")
      div {{item.rewardStatus === 1 ? '已打赏' : '索要打赏'}}
      div 忽略
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

<style lang="scss">
  @import "./heartbeat.scss";

  .items-aid {
    margin-top: 20px;
    background: #fff;
    .list-item {
      @include item();
    }
    .bottom {
      height: 80px;
      border-top: #f3f3f3 solid 1px;
      display: flex;
      flex-direction: row;
      font-size: 28px;
      text-align: center;
      line-height: 80px;
      color: #666;
      position: relative;
      &:after {
        content: '';
        display: block;
        width: 1px;
        height: 80px;
        background: #f3f3f3;
        position: absolute;
        left: 50%;
        top: 0;
      }
      div {
        flex: 1;
        &:nth-child(1) {
          color: #FEAF01;
        }
      }
    }
  }
</style>
