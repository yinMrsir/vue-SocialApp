<template>
  <div class="bg-white">
    <NavTab :tablist="['动态', '用户评价']" v-model="currIndex" :currIndex="currIndex"></NavTab>
    <div v-if="currIndex === 0">
      <DynamicItem v-for="(item, index) in 10" :key="index"></DynamicItem>
    </div>
    <div v-if="currIndex === 1">
      <userComment v-for="(item, index) in 10" :key="index"></userComment>
    </div>
  </div>
</template>

<script>
  import {NavTab} from '@/components'
  import DynamicItem from '../../components/dynamicItem.vue'
  import userComment from '../../components/userComment.vue'

  export default {
    components: {
      DynamicItem,
      NavTab,
      userComment
    },
    data() {
      return{
        currIndex: 0
      }
    }
  }
</script>