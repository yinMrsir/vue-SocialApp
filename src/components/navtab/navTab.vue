<template>
  <div>
    <div :class="[$style.navtab, cname, fixed ? $style.fixed : '']">
      <ul>
        <li v-for="(item, index) in tablist" :key="index" :class="currIndex === index ? $style.active : ''"
            @click="changeTab(index)">{{item}}
        </li>
      </ul>
    </div>
    <div :class="$style.placeholder" v-if="fixed"></div>
  </div>
</template>

<script>
  export default {
    props: {
      cname: {
        type: String,
        default: ''
      },
      tablist: {
        type: Array,
        default() {
          return []
        }
      },
      fixed: {
        type: Boolean,
        default: false
      },
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        currIndex: 0
      }
    },
    methods: {
      changeTab(index) {
        this.currIndex = index
        this.$emit('input', index)
      }
    },
    mounted() {
      if (this.index) {
        this.currIndex = this.index
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element";
  .fixed{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 750px;
  }
  .placeholder{
    height: 90px;
    display: block;
  }
  .navtab {
    height: 90px;
    border-bottom: $solidColor solid 2px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
    z-index: 1;
    ul {
      @include list(row);
      li {
        flex: 1;
        font-size: 28px;
        line-height: 90px;
        color: #999;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        &.active {
          color: $defaultColor;
          position: relative;
          &:after {
            content: '';
            height: 2px;
            background: $defaultColor;
            position: absolute;
            left: 0;
            bottom: 0px;
            width: 100%;
          }
        }
      }
    }
  }
</style>