<template>
  <div class="cu-form-group">
    <div class='title'>{{options.title}}</div>
    <input :placeholder="options.placeholder || '请输入' + options.title" :class="[$style.input, 'radius', options.textAlign === 'right' ? $style.textright : '']" v-model="newValue"/>
  </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      newValue: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit('change', value)
        }
      }
    }
  }
</script>

<style lang="scss" module>
  .input {
    border: 0;
  }
  .textright{
    text-align: right;
  }
</style>