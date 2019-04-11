<template>
  <div class="padding text-sm text-gray cu-load loading" v-show="show"></div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: true
      }
    }
  }
</script>