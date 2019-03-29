<template>
  <div :class="$style.item">
    <div :class="$style.top">
      <img src="https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex" alt="">
      <div :class="$style.topr">
        <div :class="$style.user">
          <h2>许惠纶</h2>
          <span>19:37</span>
        </div>
        <div class="sexage">女 | 20岁</div>
      </div>
    </div>
    <div :class="$style.bottom">这哥们行为极不检点！简直令人恶心，从未见过这么恶心的人！</div>
  </div>
</template>

<style lang="scss" module>
  @import "../../assets/css/element";

  .item {
    @include list();
    padding: 30px 0;
    margin: 0 30px;
    border-bottom: $solidColor solid 2px;
    .top{
      @include list(row);
      align-items: center;
      img{
        width: 88px;
        height: 88px;
        margin-right: 20px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }
      .topr{
        flex: 1;
        @include list();
        text-align: left;
        .user{
          @include list(row);
          font-size: 24px;
          justify-content: space-between;
          align-items: center;
          h2{
            font-size: 36px;
            font-weight: bold;
            color: #333;
            margin-bottom: 12px;
          }
        }
      }
    }
    .bottom{
      font-size: 30px;
      color: #5D5D5D;
      padding: 30px 0 0;
      text-align: left;
      line-height: 42px;
    }
  }
</style>