import router from './router'

// router.beforeEach((to, from, next) => {
//   console.log(to, from, next)
// })

router.afterEach((to) => {
  document.title = to.meta.title
})