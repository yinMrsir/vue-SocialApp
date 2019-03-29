<template>
  <div :class="[$style.navtab, cname]">
    <ul>
      <li v-for="(item, index) in tablist" :key="index" :class="currIndex === index ? $style.active : ''"
          @click="$emit('input', index)">{{item}}
      </li>
    </ul>
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
      currIndex: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element";

  .navtab {
    height: 90px;
    border-bottom: $solidColor solid 2px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
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