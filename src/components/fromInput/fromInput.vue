<template>
  <div class="cu-form-group">
    <div class='title'>{{options.title}}</div>
    <input type="text" :placeholder="options.placeholder || '请输入' + options.title"
           :class="[$style.input, 'radius', options.textAlign === 'right' ? $style.textright : '']" v-model="inputValue"
           @input="updateValue" :disabled="options.disabled"/>
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
    data() {
      return {
        inputValue: ''
      }
    },
    methods: {
      updateValue() {
        this.$emit('input', this.inputValue)
      }
    }
  }
</script>

<style lang="scss" module>
  .input {
    border: 0;
    &:disabled{
      background: none;
    }
  }

  .textright {
    text-align: right;
  }
</style>