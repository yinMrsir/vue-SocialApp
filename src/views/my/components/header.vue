<template>
  <div>
    <div :class="[$style.mytop, 'flex align-center']">
      <span class="icon-infofill"></span>完善个人信息以提高交友成功率。
      <em class="icon-close"></em>
    </div>
    <div :class="$style.userinfo">
      <img src="https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex" alt="">
      <div class="icon-right">
        <h1>董大小姐丶姐</h1>
        <p>Sup_c9527</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" module>
  @import "../../../assets/css/element";

  .mytop{
    width:750px;
    height:72px;
    background:rgba(255,246,236,1);
    color: #FFB434;
    text-align: left;
    font-size: 28px;
    position: relative;
    padding-left: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    span{
      font-size: 30px;
      margin-right: 10px;
    }
    em{
      font-size: 30px;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .userinfo{
    @include list(row);
    padding: 40px 30px;
    border-bottom:rgba(243,243,243,1) solid 2px;
    img{
      width: 96px;
      height: 96px;
      background: #dedede;
      margin-right: 17px;
      border-radius: 50%;
    }
    div{
      @include list();
      text-align: left;
      justify-content: center;
      position: relative;
      flex: 1;
      color: #d2d2d2;
      &:before{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      h1{
        font-size: 32px;
        color: #333;
        margin-bottom: 23px;
      }
      p{
        font-size: 24px;
        color: #999;
      }
    }
  }
</style>