<template>
  <div :class="$style.userinfo">
    <div :class="$style.top">
      <div :class="$style.left">
        <div :class="$style.tags">
          <span>Dj</span>
          <span>唱歌</span>
          <span>跳舞</span>
          <span>聊天</span>
        </div>
        <div :class="$style.info">热情开朗，待人友好，善于与人沟通</div>
      </div>
      <div :class="$style.attention">
        <img src="../../../assets/images/my/icon_focus_n@3x.png" alt="">
        <p>关注</p>
      </div>
    </div>
    <div :class="$style.bottom">
      <ul>
        <li><span>年龄</span> 18</li>
        <li><span>性别</span> 女</li>
        <li><span>身高</span> 178cm</li>
        <li><span>体重</span> 55公斤</li>
        <li><span>学历</span> 本科</li>
        <li><span>三围</span> 75/60/70</li>
        <li><span>从业</span> 2年</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" module>
  @import "../../../assets/css/element";

  .userinfo {
    background: #fff;
    .top {
      @include list(row);
      height: 135px;
      margin: 0 30px;
      border-bottom: #E9E9E9 solid 2px;
      .left {
        @include list();
        flex: 1;
        align-items: start;
        justify-content: center;
        .info {
          margin-top: 18px;
          color: #999;
          font-size: 24px;
        }
        .tags {
          span {
            @include tag();
          }
        }
      }
      .attention {
        @include list();
        height: 135px;
        align-items: center;
        justify-content: center;
        padding: 0 30px;
        color: #999;
        img {
          width: 44px;
          height: 44px;
          margin-bottom: 10px;
        }
      }
    }
    .bottom {
      ul {
        @include list(row);
        padding: 30px;
        li {
          width: 50%;
          text-align: left;
          color: #999;
          font-size: 24px;
          height: 50px;
          line-height: 50px;
          span{
            margin-right: 15px;
          }
        }
      }
    }
  }
</style>