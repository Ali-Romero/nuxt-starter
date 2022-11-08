const BASE_URL = '/project/nuxt-starter/'

export default {
  target: 'static',

  head: {
    title: 'nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  loading: {
    color: '#0080ff',
    height: '5px',
  },

  styleResources: {
    sass: ['@/assets/styles/variables.sass'],
  },

  css: [
    '@/assets/styles/reset.sass',
    '@/assets/styles/fonts.sass',
    '@/assets/styles/helpers.sass',
    '@/assets/styles/app.sass',
  ],

  plugins: [
    '@/plugins/validation.js',
    '@/plugins/scrollto.js',
  ],

  components: true,

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  image: {
    dir: 'assets/images',
  },

  axios: {
    baseURL: BASE_URL,
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {
    transpile: ['vee-validate/dist/rules', 'vue-pro-modal']
  },

  server: {
    host: '0.0.0.0',
  },

  static: {
    prefix: false,
  },

  router: {
    base: BASE_URL,
  },
}
