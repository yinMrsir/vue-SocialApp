<template>
  <div class="bg-white">
    <Silder :list="list"></Silder>
    <section :class="[$style.selectbox, 'padding']">
      <div :class="[$style.item, 'padding-sm']">
        <h4 class="margin-bottom-xs">我要找助理</h4>
        <p class="margin-bottom-lg">海量助理任您挑选</p>
        <em>立即挑选</em>
      </div>
      <div :class="[$style.item, 'padding-sm']">
        <h4 class="margin-bottom-xs">我要入驻</h4>
        <p class="margin-bottom-lg">赚钱交友两不误</p>
        <em>立即入驻</em>
      </div>
    </section>
  </div>
</template>

<script>
  import {Silder} from '@/components'

  export default {
    components: {
      Silder
    },
    data() {
      return {
        list: [
          {img: 'https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex'},
          {img: 'https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex'},
          {img: 'https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex'},
          {img: 'https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex'}
        ]
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../../assets/css/element.scss";

  .selectbox {
    @include list(row);
    justify-content: space-between;
    .item {
      width: 335px;
      height: 194px;
      background: linear-gradient(150deg, rgba(77, 211, 252, 1), rgba(55, 142, 251, 1));
      box-shadow: 0px 2px 8px 0px rgba(61, 161, 251, 0.58);
      border-radius: 10px;
      color: #fff;
      text-align: left;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      &:nth-of-type(2) {
        background: linear-gradient(150deg, rgba(255, 198, 0, 1), rgba(254, 156, 2, 1));
        box-shadow:0px 2px 8px 0px rgba(254,168,1,0.58);
      }
      h4 {
        font-size: 40px;
        font-weight: 800;
      }
      p {
        font-size: 24px;
        font-weight: 400;
      }
      em {
        width: 120px;
        height: 36px;
        background: rgba(254, 80, 80, 0);
        border: 2px solid rgba(233, 233, 233, 1);
        border-radius: 18px;
        display: block;
        line-height: 36px;
        text-align: center;
      }
    }
  }

</style>