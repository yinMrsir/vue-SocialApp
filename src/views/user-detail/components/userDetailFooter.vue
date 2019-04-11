<template>
  <div :class="$style.pttop">
    <div :class="$style.footer">
      <div :class="$style.left">
        <ul>
          <li>
            <img src="../../../assets/images/icon_heart@3x.png" alt="">
            <p>心动105</p>
          </li>
          <li>
            <img src="../../../assets/images/icon_gifts@3x.png" alt="">
            <p>打赏</p>
          </li>
        </ul>
      </div>
      <div :class="$style.right">
        <img src="../../../assets/images/icon_date@3x.png" alt="">约她 <span>(400元/3小时)</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
  @import "../../../assets/css/element";

  .pttop {
    padding-top: 90px;
  }

  .footer {
    position: fixed;
    height: 90px;
    width: 100%;
    max-width: 750px;
    bottom: 0;
    left: 0;
    background: #fff;
    border-top: solid 2px $solidColor;
    @include list(row);
    > div {
      flex: 1;
    }
    .left {
      ul {
        @include list(row);
        li {
          @include list();
          align-items: center;
          justify-content: center;
          flex: 1;
          color: #999;
          font-size: 22px;
          height: 90px;
          img {
            width: 42px;
            height: 42px;
            margin-bottom: 10px;
          }
        }
      }
    }
    .right {
      background: linear-gradient(81deg, rgba(254, 80, 80, 1), rgba(145, 79, 254, 1));
      font-size: 32px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      >img{
        width: 34px;
        height: 34px;
        display: inline-block;
        margin-right: 10px;
      }
      span {
        font-size: 24px;
      }
    }
  }
</style>