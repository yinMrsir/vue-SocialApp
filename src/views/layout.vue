<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Footer/>
  </div>
</template>

<script>
  import {Footer} from '../components'

  export default {
    components: {
      Footer
    }
  }
</script>