module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-SocialApp'
    : '/',
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75
          })
        ]
      }
    }
  }
}