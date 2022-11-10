const BASE_URL = '/project/nuxt-starter/'

const BREAKPOINTS = {
  xxs: 320,
  xs: 576,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1300,
  xxl: 1400,
  xxxl: 1500
}

export default {
  target: 'static',

  head: {
    title: 'nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { lang: 'ru' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'default description' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  loading: {
    color: '#0080ff',
    height: '5px',
  },

  styleResources: {
    sass: ['@/assets/styles/variables.sass', '@/assets/styles/mixins.sass'],
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
    '@/plugins/feedback.js',
    { src: '@/plugins/ymaps.js', mode: 'client' },
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
    screens: Object.fromEntries(
      Object.entries(BREAKPOINTS).map(([key, value]) => [key, value - 1])
    )
  },

  axios: {
    baseURL: BASE_URL,
  },

  pwa: {
    manifest: {
      lang: 'ru',
    },
  },

  build: {
    transpile: [
      'vee-validate',
      'vue-pro-modal',
      'swiper',
      'dom7',
      'ssr-window'
    ],
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
