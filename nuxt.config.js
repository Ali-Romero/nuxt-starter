const BASE_URL = '/'

const BREAKPOINTS = {
  xxs: 320,
  xs: 576,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1300,
  xxl: 1400,
  xxxl: 1500,
  xxxxxl: 1700,
  xxxxxxxl: 1920,
}

const HEADER_HEIGHT = 66

export default {
  target: 'static',

  head: {
    title: 'TITLE',
    meta: [
      { charset: 'utf-8' },
      { lang: 'ru' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'TITLE',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'keywords',
        content: '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  loading: {
    color: '#0080ff',
    height: '5px',
  },

  publicRuntimeConfig: {
    headerHeight: HEADER_HEIGHT,
  },

  env: {
    breakpoints: BREAKPOINTS,
    headerHeight: HEADER_HEIGHT,
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
    '@/plugins/feedback.js',
    { src: '@/plugins/gsap/index.js', mode: 'client' },
    { src: '@/plugins/ymaps.js', mode: 'client' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@aceforth/nuxt-optimized-images',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  optimizedImages: {
    webp: {
      preset: 'default',
      quality: 86,
    },
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
    transpile: ['swiper', 'dom7', 'ssr-window', 'gsap'],
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
