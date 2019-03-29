<template>
  <div>
    <FromGrop v-model="nickname" :options="{
      title: '昵称',
      placeholder: '请输入昵称',
      textAlign: 'left'
    }"></FromGrop>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
  import {FromGrop} from '@/components'

  export default {
    components: {
      FromGrop
    },
    data() {
      return {
        nickname: ''
      }
    },
    methods: {
      submit() {
        console.log(this.nickname)
      }
    }
  }
</script>