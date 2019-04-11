import previewImageComponent from '../components/previewImage/previewImage.vue'

let $vm

export default {
  install(Vue) {
    if (!$vm) {
      const previewImagePlugin = Vue.extend(previewImageComponent)
      $vm = new previewImagePlugin({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }
    
    $vm.show = false
    
    let previewImage = {
      show() {
        $vm.show = true
      },
      hide() {
        $vm.show = false
      }
    }
    
    if(!Vue.$previewImage) {
      Vue.$previewImage = previewImage
    }
  
    Vue.mixin({
      created() {
        this.$previewImage = Vue.$previewImage
      }
    })
    
  }
}