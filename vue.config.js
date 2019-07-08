module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-SocialApp'
    : '/',
  css: {
    loaderOptions: {
      css: {},
      // postcss: {
      //   plugins: [
      //     require('postcss-px2rem')({
      //       remUnit: 75
      //     })
      //   ]
      // },
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px",
            viewportWidth: 750,
            unitPrecision: 3,
            propList: [
              "*"
            ],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: /(\/|\\)(node_modules)(\/|\\)/,
          })
        ]
      }
    }
  }
}