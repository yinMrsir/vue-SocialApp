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
      show(options) {
        $vm.show = true
        $vm.defaultIndex = options.index || 0
        $vm.imgs = options.urls || []
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