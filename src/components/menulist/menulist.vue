<template>
  <div :class="[$style.userlist, cname]">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <router-link :to="item.link" class="icon-right"><img :src="item.icon" alt="">{{item.name}}</router-link>
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
  .userlist{
    ul{
      li{
        text-align: left;
        a{
          display: block;
          @include list(row);
          align-items: center;
          padding: 30px 0;
          color: #333;
          font-size: 32px;
          border-bottom: #F3F3F3 solid 2px;
          margin: 0 30px;
          position: relative;
          &:before{
            position: absolute;
            right: 0;
            font-weight: normal;
            top: 50%;
            transform: translateY(-50%);
            color: #d2d2d2;
            font-size: 26px;
          }
          img{
            margin-right: 33px;
            width: 38px;
            height: 40px;
          }
        }
        &:last-child{
          a{
            border-bottom: 0;
          }
        }
      }
    }
  }
</style>