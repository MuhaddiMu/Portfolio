export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Muhaddis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Muhaddis is a Security Engineer and Web Developer who likes to play with all kind of technologies and develop scalable and secure applications. He is the Security Engineer at Foretheta.'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Muhaddis is a Security Engineer and Web Developer who likes to play with all kind of technologies and develop scalable and secure applications. He is the Security Engineer at Foretheta.'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Muhaddis is a Security Engineer and Web Developer who likes to play with all kind of technologies and develop scalable and secure applications. He is the Security Engineer at Foretheta.'
      }
    ],
    noscript: [
      {
        id: 'sanitize',
        hid: 'sanitize',
        innerHTML: `<style type="text/css"> body { display: block !important; opacity: 1 !important; } </style>`
      }
    ],
    __dangerouslyDisableSanitizers: ['noscript'],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,300,400,600,700,800'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      },
      {
        src: 'https://code.jquery.com/ui/1.12.0/jquery-ui.min.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ff4343', height: '3px' },
  /*
   ** Global CSS
   */
  css: ['@/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-typer', ssr: false, mode: 'client' },
    { src: '~/plugins/jQuery.client.js', ssr: false },
    { src: '~plugins/mailer-lite.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-93991901-2'
      }
    ],
    '@aceforth/nuxt-optimized-images'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/google-analytics'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    host: '0.0.0.0'
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-synthwave84.css'
      }
    }
  },
  components: true,
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { time } = require('reading-time')(document.text)

        document.readingTime = time
      }
    }
  },
  optimizedImages: {
    optimizeImages: true
  }
}
