<template>
  <div :class="['cu-form-group top', $style.textareabox]">
    <div class="title" v-if="options.title">{{options.title}}</div>
    <textarea :placeholder="options.placeholder" maxlength="-1" :disabled="options.disabled"></textarea>
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