<template>
  <div :class="['padding-top-sm bg-white', cname]">
    <div :class="$style.navtab">
      <ul :style="'width:'+2*tabList.length+'rem'">
        <li v-for="(item, index) in tabList" :key="index" :class="currIndex === index ? $style.active : ''" @click="changeTab(index)">{{item.text}}
        </li>
      </ul>
    </div>
    <div class="padding">
      <UserItem v-for="(item,index) in indexList" :key="index" :item="item"/>
    </div>
  </div>
</template>

<script>
  import UserItem from '../../components/userItem.vue'

  export default {
    props: {
      cname: {
        type: String,
        default: ''
      },
      indexList: {
        type: Array,
        default() {
          return []
        }
      },
      currIndex: {
        type: Number,
        default: 0
      },
      tabList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      UserItem
    },
    methods: {
      changeTab(index) {
        this.$emit('changeTab', index)
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../../assets/css/element.scss";

  .navtab {
    overflow-x: auto;
    ul {
      @include flex(row);
      li {
        width: 150px;
        font-size: 32px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20px;
        position: relative;
        &.active {
          color: $defaultColor;
          &:before {
            content: '';
            display: block;
            position: absolute;
            width: 40%;
            left: 50%;
            bottom: 0;
            background: $defaultColor;
            height: 4px;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
</style>