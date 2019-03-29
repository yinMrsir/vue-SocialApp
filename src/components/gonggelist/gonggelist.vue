<template>
  <div :class="[$style.usertab, cname]">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <router-link :to="item.link">
          <img :src="item.icon" alt="">
          <h3>{{item.name}}</h3>
          <p v-if="item.number">{{item.number}}</p>
        </router-link>
      </li>
    </ul>
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
      },
      cname: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element";

  .usertab{
    padding: 30px;
    ul{
      @include list(row);
      li{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: 44px;
          height: 44px;
        }
        h3{
          color: #333;
          font-size: 26px;
          padding: 16px 0;
        }
        p{
          font-size: 24px;
          color: #999;
        }
      }
    }
  }
</style>