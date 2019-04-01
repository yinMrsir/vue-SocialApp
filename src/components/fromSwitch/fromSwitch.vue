<template>
  <div class="cu-form-group">
    <div class="title">{{options.title}}</div>
    <div :class="$style.switch">
      <label v-for="(item, index) in options.list" :key="index">
        <input type="radio" :value="item.value" name="switch" v-model="checkedValue"/>
        <img :src="options.defaultValue === item.value ? item.activeIcon : item.icon" :class="$style.defaultimg">
        {{item.name}}
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default() {
          return {}
        }
      },
      defaultValue: [String, Number]
    },
    computed: {
      checkedValue: {
        get() {
          return this.value || this.defaultValue
        },
        set(value) {
          this.$emit('input', value)
        }
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element";

  .switch {
    @include list(row);
    flex: 1;
    justify-content: flex-end;
    label {
      @include list(row);
      align-items: center;
      padding-right: 20px;
      input {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
      }
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
  }
</style>