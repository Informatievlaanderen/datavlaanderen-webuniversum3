export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'datavlaanderen',
    htmlAttrs: {
      lang: 'nl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon',
        sizes: '192x192',
        href: 'https://dij151upo6vad.cloudfront.net/2.latest/icons/app-icon/icon-highres-precomposed.png',
      },
      {
        rel: 'apple-touch-icon',
        href: 'https://dij151upo6vad.cloudfront.net/2.latest/icons/app-icon/touch-icon-iphone-precomposed.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: 'https://dij151upo6vad.cloudfront.net/2.latest/icons/app-icon/touch-icon-ipad-precomposed.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: 'https://dij151upo6vad.cloudfront.net/2.latest/icons/app-icon/touch-icon-iphone-retina-precomposed.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: 'https://dij151upo6vad.cloudfront.net/2.latest/icons/app-icon/touch-icon-ipad-retina-precomposed.png',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/css/styles.scss'],


  target: 'static',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vl-ui-vue-components',
    '~/plugins/vl-ui-sidenav.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: ['nl', 'fr', 'en'],
    defaultLocale: 'nl',
    vueI18n: {
      fallbackLocale: 'nl',
      messages: {
        nl: {
          welcome: 'Welkom'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        en: {
          welcome: 'Welcome'
        }
      }
    }
  },

  content: {
    // Options
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    maxChunkSize: 1000000,
    vendor: ['@govflanders/vl-ui-vue-components'],
  },

  generate: {
    crawler: false,
    routes: [
      "doc/applicatieprofiel/documentatie/associaties-met-carets",
      "doc/applicatieprofiel/documentatie/rollen",
      "doc/vocabularium/documentatie/assocafdalen",
      "doc/vocabularium/documentatie/associaties-voc-met-afdaal-tags",
      "doc/vocabularium/documentatie/associaties-voc-met-carets",
      "doc/vocabularium/documentatie/associaties-voc-met-packages3",
      "doc/applicatieprofiel/documentatie/associaties-met-afdaal-tags",
      "doc/vocabularium/documentatie/associaties-voc-met-packages2",
      "doc/vocabularium/documentatie/associaties-voc-met-uri-tags2",
      "doc/applicatieprofiel/documentatie/assocafdalen",
      "doc/vocabularium/documentatie/associaties-voc-met-ap-label-tags",
      "doc/vocabularium/documentatie/associaties-voc-met-name-tags2",
      "doc/vocabularium/documentatie/associaties-voc-met-hoofdletters",
      "doc/vocabularium/documentatie/associaties-voc-met-name-tags",
      "doc/vocabularium/documentatie/associaties-voc",
      "doc/vocabularium/documentatie/associaties-voc-met-packages",
      "doc/vocabularium/documentatie/associaties-voc-met-uri-tags",
      "doc/applicatieprofiel/documentatie/associaties-met-packages3",
      "doc/applicatieprofiel/documentatie/associaties-met-ap-label-tags",
      "doc/applicatieprofiel/documentatie/associaties-met-hoofdletters",
      "doc/applicatieprofiel/documentatie/associaties-met-packages2",
      "doc/applicatieprofiel/documentatie/associaties-met-name-tags",
      "doc/applicatieprofiel/documentatie/associaties-met-uri-tags2",
      "doc/applicatieprofiel/documentatie/associaties-met-name-tags2",
      "doc/applicatieprofiel/documentatie/associaties-met-packages",
      "doc/applicatieprofiel/documentatie/associaties-met-uri-tags",
      "doc/applicatieprofiel/documentatie/associaties"
    ]
  }
}
