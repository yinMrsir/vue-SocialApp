<template>
  <div :class="[$style.continer, cname]">
    <swiper :options="swiperOption" ref="mySwiper" style="height: 100%">
      <div :class="[$style.refresh, refreshText === '' ? 'cu-load loading' : '']" ref="refresh" v-if="isAllowRefresh">{{refreshText}}</div>
      <swiperSlide style="height: auto">
        <slot></slot>
      </swiperSlide>
    </swiper>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: {
      cname: {
        type: String,
        default: ''
      },
      isAllowRefresh: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    data() {
      var self = this
      return {
        refreshText: '释放刷新',
        refreshEnd: false,
        swiperOption: {
          slidesPerView: 'auto',
          freeMode: true,
          direction: 'vertical',
          setWrapperSize: true,
          on: {
            //下拉释放刷新
            touchEnd: function () {
              if (this.translate > 100 && self.isAllowRefresh) {
                let swiper = this
                swiper.setTransition(this.params.speed)
                swiper.setTranslate(50)
                swiper.params.virtualTranslate = true
                swiper.touchEventsData.isTouched = false
                self.refreshText = ''
                swiper.allowTouchMove = false
                self.$emit('onReachTop', () => {
                  swiper.params.virtualTranslate = false;
                  self.refreshText = '刷新完成'
                  self.refreshEnd = true
                  swiper.allowTouchMove = true
                })
              }
            },
            touchStart() {
              if (self.refreshEnd === true && self.isAllowRefresh) {
                self.refreshText = '释放刷新'
                self.refreshEnd = false
              }
            },
            momentumBounce() {
              if (this.translate < -50) {
                self.$emit('onReachBottom')
              }
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss" module>
  .continer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 100px;
  }

  .refresh {
    position: absolute;
    line-height: 100px;
    bottom: 100%;
    text-align: center;
    width: 100%;
  }
</style>