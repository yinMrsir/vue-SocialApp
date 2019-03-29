<template>
  <div :class="$style.item">
    <router-link :class="[$style.itema, 'padding']" :to="{path: ''}">
      <img src="" alt="">
      <div :class="[$style.right, 'justify-center padding-top-xs padding-bottom-xs']">
        <div :class="$style.namebox">
          <h2>许惠纶</h2>
          <span>19:37</span>
        </div>
        <div :class="$style.info">
          <span>女 | 20岁</span>
          <span>4.3km</span>
        </div>
      </div>
    </router-link>
    <div :class="$style.textcontent">今晚在魅力四射玩的很嗨。又认识了一群新的朋友，晚上的街舞表演很精彩，2个帅哥哥唱歌非常棒，很喜欢哦。</div>
    <div :class="$style.imglist">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
    </div>
    <div :class="$style.itemfooter">
      <ul>
        <li><span class="icon-attention"></span>189</li>
        <li><span class="icon-appreciate"></span>23</li>
        <li><span class="icon-comment"></span>7</li>
        <li><span class="icon-forward"></span>66</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" module>
  @import "../../assets/css/element.scss";

  .item {
    border-bottom: #F6F6F6 solid 20px;
    .itema {
      @include flex(row);
      img {
        width: 80px;
        height: 80px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background: #dedede;
        margin-right: 20px;
      }
      .right {
        flex: 1;
        color: #999;
        font-size: 24px;
        @include flex();
        .namebox {
          @include flex(row);
          justify-content: space-between;
          margin-bottom: 10px;
          h2 {
            font-size: 36px;
            color: #333;
          }
        }
        .info {
          @include flex(row);
          justify-content: space-between;
        }
      }
    }
    .textcontent {
      font-size: 30px;
      color: #5D5D5D;
      padding: 0 30px;
      line-height: 42px;
      text-align: left;
    }
    .imglist {
      @include list(row);
      justify-content: center;
      padding-top: 20px;
      img {
        width: 220px;
        height: 180px;
        background: rgba(220, 220, 220, 1);
        &:nth-of-type(2) {
          margin: 0 14px;
        }
      }
    }
    .itemfooter {
      height: 92px;
      ul{
        @include list(row);
        li{
          height: 92px;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          span{
            font-size: 30px;
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>