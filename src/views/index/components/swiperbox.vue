<template>
  <div class="bg-white">
    <Silder :list="list"></Silder>
    <section :class="[$style.selectbox, 'padding']">
      <router-link to="/belle" :class="[$style.item, 'padding-sm']">
        <h4 class="margin-bottom-xs">我要找助理</h4>
        <p class="margin-bottom-lg">海量助理任您挑选</p>
        <em>立即挑选</em>
      </router-link>
      <a :class="[$style.item, 'padding-sm']" @click="joinHander">
        <h4 class="margin-bottom-xs">我要入驻</h4>
        <p class="margin-bottom-lg">赚钱交友两不误</p>
        <em>立即入驻</em>
      </a>
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
          {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000654958&di=7eb320c5334d1eb393f88c94add51efb&imgtype=0&src=http%3A%2F%2Fs11.sinaimg.cn%2Fmw690%2F006hikKrzy7slvkud5g2a%26690'},
          {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000634961&di=324c5e9f167c63e3b08db48fd78cd30c&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fnews%2Fpics%2Fhv1%2F114%2F82%2F2182%2F141905574.jpg'},
          {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000580696&di=3a8dab2cde437e540de730adfd5a8c11&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F006hikKrzy7sly9Fzoeb2%26690'}
        ]
      }
    },
    methods: {
      joinHander() {
        this.$router.push({path: '/join'})
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