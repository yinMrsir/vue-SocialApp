<template>
  <div :class="[$style.item, cname]">
    <div :class="$style.itemtop">
      <img src="../../assets/images/icon_activity.png" alt="">
      <div>
        <h3>{{item.userName}}正在拼单,去找她一起嗨吧</h3>
        <p>仅剩10个名额，今晚22:00结束</p>
      </div>
    </div>
    <div :class="$style.itembottom">
      <ul>
        <li v-for="(item1, index1) in item.imgs" :key="index1">
          <img :src="item1" alt="">
        </li>
      </ul>
      <div :class="$style.btn">立即加入</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      cname: {
        type: String,
        default: ''
      },
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
  @import "../../assets/css/element";

  .item {
    padding: 30px 30px 0 30px;
    border-bottom: #F6F6F6 solid 20px;
    .itemtop {
      @include list(row);
      img {
        width: 80px;
        height: 80px;
        background: #fff;
        border-radius: 50%;
        margin-right: 20px;
      }
      div {
        flex: 1;
        @include list();
        text-align: left;
        justify-content: space-between;
        padding: 5px 0;
        h3 {
          color: #333;
          font-size: 32px;
        }
      }
    }
    .itembottom {
      margin: 30px 0;
      border-top: rgba(233,233,233,1) solid 2px;
      justify-content: space-between;
      align-items: center;
      padding-top: 30px;
      @include flex(row);
      ul{
        @include flex(row);
        li{
          width: 80px;
          height: 80px;
          margin-right: 20px;
          img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #dedede;
          }
        }
      }
      .btn{
        @include btn();
        padding: 0 30px;
      }
    }
  }
</style>