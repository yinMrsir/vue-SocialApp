<template>
  <div :class="['cu-modal bottom-modal', modal ? 'show' : '']">
    <div class="cu-dialog">
      <div class="cu-bar bg-white">
        <div class="action text-blue" @click="hideModal">取消</div>
        <div class="action text-green" @click="$parent.confirm(hideModal)">确定</div>
      </div>
      <div class="padding-xl">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modal: false
      }
    },
    methods: {
      showModal() {
        this.modal = true
      },
      hideModal() {
        this.modal = false
      }
    }
  }
</script>