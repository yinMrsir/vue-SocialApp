<template lang="pug">
  .list-item-gen
    .item-left
      img(:src="item.avatar")
    .item-center
      .name {{item.nickName}}
      .sex {{item.sexName}} | {{item.age}}岁
      .desc 有点动心了，快打赏一个哟～
    .item-right
      router-link.go(to="/") 去打赏
      .ignore 忽略
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

  .list-item-gen {
    margin-top: 20px;
    @include item(#FEAF01);
  }
</style>
