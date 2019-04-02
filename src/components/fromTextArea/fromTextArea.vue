<template>
  <div :class="['cu-form-group top', $style.textareabox]">
    <div class="title" v-if="options.title">{{options.title}}</div>
    <textarea :placeholder="options.placeholder" maxlength="-1" :disabled="options.disabled"  v-model="inputValue"
              @input="updateValue"></textarea>
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
  .textareabox{
    textarea{
      border: none;
    }
  }
</style>