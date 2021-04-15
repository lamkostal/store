const pkg = require('./package')

module.exports = {
  buildModules: ['nuxt-gsap-module'],

  gsap: {
    extraPlugins: {
      /**
       * After activation, plugins are automatically
       * registered and available globally
       */
      scrollTo: true,
      scrollTrigger: true
    },
  },
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'gr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script:[
      {src:"//app.storyblok.com/f/storyblok-latest.js?t=vMmPeTfcoklC2N5BaP4Bbwtt"},
      {src:'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js',async:true, body:true }
    ],
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href:'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css' }

    ]
  },
  

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    
    ['storyblok-nuxt',{ accessToken: process.env.NODE_ENV == 'production' ? 
'YWHEVryFmuLD6ROEZs0rzgtt':'vMmPeTfcoklC2N5BaP4Bbwtt' , cacheProvider : 
'memory'}],
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  generate:{
    routes: function(){
      return $axios.get('https://api.storyblok.com/v1/cdn/stories?verion=published&token=YWHEVryFmuLD6ROEZs0rzgtt&starts_with=products&cv=' + Math.floor(Date.now()/ 1e3))
      .then( res => {
        const products = res.data.stories.map( p => p.full_slug);
        return [
          "/",
          "/tshirts",
          "/cups",
          "/baseball",
          "/masks",
          "/hoodies",
          ...products
        ]
      })
    }
  }
}
