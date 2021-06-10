module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  css: ['~/assets/style/app.styl'],
  router: {
    middleware: ['auth']
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/api/init.js'
  ],
  // devServer: {
  //   proxy: {
  //     '/api/v2': {
  //       target: 'https://alaatv.com/api/v2',
  //       pathRewrite: { '^/api/v2': '' }
  //     }
  //   }
  // },
  // proxy: 'https://alaatv.com/api/v2/',
  // axios: {
  //   proxy: true
  // },
  // proxy: {
  //   '/api/': {
  //     target: 'https://alaatv.com/api/v2/',
  //     pathRewrite: { '^/api/': '/' }
  //   }
  // },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
